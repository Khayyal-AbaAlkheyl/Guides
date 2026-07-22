import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const slug = 'istanbul';
const titlesPath = path.join(root, 'data', `${slug}-wiki-titles.json`);
const outPath = path.join(root, 'data', `${slug}-real-images.json`);

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const UA = { 'User-Agent': 'DiscoverGuide/1.0 (istanbul travel guide; contact editor)' };
const OK_MIME = new Set(['image/jpeg', 'image/png', 'image/webp']);

const { names = [], wikiTitles = {}, commonsQueries = {} } = JSON.parse(
  fs.readFileSync(titlesPath, 'utf8')
);

async function getJson(url, tries = 6) {
  for (let i = 0; i < tries; i++) {
    try {
      const res = await fetch(url, { headers: UA });
      if (res.ok) return await res.json();
    } catch (e) {
      /* retry */
    }
    await sleep(700 * (i + 1));
  }
  return null;
}

// Accept only real photos: image mime, and a genuine 960px thumbnail
// (which only exists when the native width is >= 960).
function acceptInfo(info) {
  if (!info) return null;
  if (!OK_MIME.has(info.mime)) return null;
  const t = info.thumburl || '';
  if (!t.includes('/960px-')) return null;
  return t;
}

async function resolveFileTitle(fileTitle) {
  const url =
    'https://commons.wikimedia.org/w/api.php?action=query&titles=' +
    encodeURIComponent(fileTitle) +
    '&prop=imageinfo&iiprop=url|size|mime&iiurlwidth=960&format=json';
  const json = await getJson(url);
  const page = json && Object.values(json.query?.pages || {})[0];
  return acceptInfo(page?.imageinfo?.[0]);
}

async function wikiPageImage(title) {
  const url =
    'https://en.wikipedia.org/w/api.php?action=query&titles=' +
    encodeURIComponent(title) +
    '&prop=pageimages&piprop=name&format=json';
  const json = await getJson(url);
  const page = json && Object.values(json.query?.pages || {})[0];
  const name = page?.pageimage;
  if (!name) return null;
  return resolveFileTitle('File:' + name);
}

async function commonsSearch(query, limit = 20) {
  const url =
    'https://commons.wikimedia.org/w/api.php?action=query&generator=search' +
    '&gsrsearch=' +
    encodeURIComponent(query) +
    `&gsrnamespace=6&gsrlimit=${limit}&prop=imageinfo` +
    '&iiprop=url|size|mime&iiurlwidth=960&format=json';
  const json = await getJson(url);
  const out = [];
  if (!json) return out;
  const pages = Object.values(json.query?.pages || {}).sort(
    (a, b) => (a.index || 0) - (b.index || 0)
  );
  for (const p of pages) {
    const t = acceptInfo(p.imageinfo?.[0]);
    if (t && !out.includes(t)) out.push(t);
  }
  return out;
}

async function resolveSet(name) {
  const extras = [];
  const wt = wikiTitles[name];
  if (wt) {
    const primary = await wikiPageImage(wt);
    await sleep(350);
    if (primary) extras.push(primary);
  }
  const cq = commonsQueries[name] || `${name} Istanbul`;
  for (const f of await commonsSearch(cq)) if (!extras.includes(f)) extras.push(f);
  await sleep(350);
  if (extras.length < 4) {
    for (const f of await commonsSearch(`${name} Istanbul`))
      if (!extras.includes(f)) extras.push(f);
    await sleep(350);
  }
  if (!extras.length) return null;
  return {
    hero: extras[0],
    detail: extras[1] || extras[0],
    photoSpot: extras[2] || extras[1] || extras[0],
    map: extras[3] || extras[2] || extras[0],
  };
}

const rebuild = process.argv.includes('--rebuild');
const out = !rebuild && fs.existsSync(outPath) ? JSON.parse(fs.readFileSync(outPath, 'utf8')) : {};
const stillMissing = [];

for (const name of names) {
  if (out[name]?.hero) continue;
  process.stdout.write(`fetch ${name} ... `);
  const set = await resolveSet(name);
  if (set?.hero) {
    out[name] = set;
    fs.writeFileSync(outPath, JSON.stringify(out, null, 2));
    console.log('ok');
  } else {
    stillMissing.push(name);
    console.log('MISSING');
  }
}

console.log(`\nWrote ${outPath} (${Object.keys(out).length} entries)`);
if (stillMissing.length) {
  console.log('Still missing:', stillMissing.join(', '));
  process.exit(1);
}
console.log('All venues resolved.');
