import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const slug = process.argv[2] || 'london';
const titlesPath = path.join(root, 'data', `${slug}-wiki-titles.json`);
const outPath = path.join(root, 'data', `${slug}-real-images.json`);
const cachePath = path.join(root, 'data', `${slug}-image-cache.json`);

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

if (!fs.existsSync(titlesPath)) {
  console.error(`Missing ${titlesPath}`);
  process.exit(1);
}

const { names = [], wikiTitles = {}, commonsQueries = {} } = JSON.parse(
  fs.readFileSync(titlesPath, 'utf8')
);

const UA = `DiscoverTravelGuide/1.0 (${slug}; contact: guide@example.com)`;

async function wikiThumb(title) {
  const url =
    'https://en.wikipedia.org/w/api.php?action=query&redirects=1&titles=' +
    encodeURIComponent(title) +
    '&prop=pageimages&format=json&piprop=thumbnail&pithumbsize=960';
  const res = await fetch(url, { headers: { 'User-Agent': UA } });
  if (!res.ok) return null;
  const json = await res.json();
  const page = Object.values(json.query?.pages || {})[0];
  if (!page || page.missing) return null;
  return page.thumbnail?.source || null;
}

async function commonsThumb(query) {
  const url =
    'https://commons.wikimedia.org/w/api.php?action=query&generator=search' +
    '&gsrsearch=' +
    encodeURIComponent(query) +
    '&gsrnamespace=6&gsrlimit=5&prop=imageinfo&iiprop=url' +
    '&iiurlwidth=960&format=json';
  const res = await fetch(url, { headers: { 'User-Agent': UA } });
  if (!res.ok) return null;
  const json = await res.json();
  for (const p of Object.values(json.query?.pages || {})) {
    const info = p.imageinfo?.[0];
    if (info?.thumburl && !info.url?.includes('.svg')) return info.thumburl;
  }
  return null;
}

async function resolveImage(name) {
  const wikiTitle = wikiTitles[name];
  if (wikiTitle) {
    const img = await wikiThumb(wikiTitle);
    await sleep(300);
    if (img) return img;
  }
  const city = slug === 'london' ? 'London' : slug;
  const q = commonsQueries[name] || `${name} ${city}`;
  return commonsThumb(q);
}

async function resolveSet(name) {
  const primary = await resolveImage(name);
  await sleep(300);
  const city = slug === 'london' ? 'London' : slug;
  const queries = [
    commonsQueries[name] || `${name} ${city}`,
    `${name} interior ${city}`,
    `${wikiTitles[name] || name} ${city}`,
  ];
  const extras = [];
  for (const q of queries) {
    const img = await commonsThumb(q);
    await sleep(300);
    if (img && !extras.includes(img)) extras.push(img);
    if (extras.length >= 3) break;
  }
  return {
    hero: primary || extras[0] || null,
    detail: extras[0] || primary || null,
    photoSpot: extras[1] || extras[0] || primary || null,
    map: extras[2] || extras[1] || primary || null,
  };
}

async function main() {
  const cache = fs.existsSync(cachePath) ? JSON.parse(fs.readFileSync(cachePath, 'utf8')) : {};
  const out = fs.existsSync(outPath) ? JSON.parse(fs.readFileSync(outPath, 'utf8')) : {};
  const missing = [];

  for (const name of names) {
    if (out[name]?.hero) {
      console.log(`skip ${name}`);
      continue;
    }
    let set = cache[name];
    if (!set?.hero) {
      console.log(`fetch ${name}`);
      set = await resolveSet(name);
      cache[name] = set;
      fs.writeFileSync(cachePath, JSON.stringify(cache, null, 2));
    }
    if (set.hero) {
      out[name] = set;
      fs.writeFileSync(outPath, JSON.stringify(out, null, 2));
      console.log(`  ok ${name}`);
    } else {
      missing.push(name);
      console.log(`  MISSING ${name}`);
    }
  }

  fs.writeFileSync(outPath, JSON.stringify(out, null, 2));
  console.log(`Wrote ${outPath} (${Object.keys(out).length} entries)`);
  if (missing.length) {
    console.log('Missing:', missing.join(', '));
    process.exit(1);
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
