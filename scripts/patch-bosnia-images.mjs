import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const outPath = path.join(root, 'data', 'bosnia-real-images.json');
const UA = 'DiscoverTravelGuide/1.0 (bosnia; contact: guide@example.com)';
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// Entries to re-fetch with tighter queries (junk crept in from broad search).
const IMPROVE = {
  'Počitelj': [
    'incategory:"Počitelj"', 'Počitelj fortress', 'Počitelj Sahat kula',
    'Počitelj Neretva', 'Pocitelj village',
  ],
  'Jajce Catacombs': [
    'incategory:"Catacombs in Jajce"', 'Jajce catacombs church',
    'incategory:"Jajce"', 'Jajce fortress town', 'Jajce old town',
  ],
  'Malak Regency Hotel': [
    'incategory:"Hotels in Sarajevo"', 'incategory:"Ilidža (Sarajevo)"',
    'Ilidža hotel Bosna', 'Ilidža promenade', 'Sarajevo hotel building',
  ],
  'Courtyard by Marriott Sarajevo': [
    'incategory:"Buildings in Sarajevo"', 'Sarajevo Avaz Twist Tower',
    'Sarajevo Alta shopping center', 'Sarajevo UNITIC towers',
    'Sarajevo modern building',
  ],
  'Hotel Story Sarajevo': [
    'incategory:"Buildings in Sarajevo"', 'Sarajevo Ferhadija',
    'Sarajevo pedestrian street', 'Sarajevo city center buildings',
    'Sarajevo downtown',
  ],
  'Fabrika Coffee': [
    'incategory:"Coffeehouses"', 'Coffeehouse interior', 'Espresso machine cafe',
    'Latte art coffee cup', 'Coffee shop counter',
  ],
  'Café de Alma': [
    'incategory:"Bosnian coffee"', 'Bosnian coffee džezva fildžan',
    'Turkish coffee copper cup', 'Coffee with lokum',
  ],
  'Urban Café Sarajevo': [
    'Brunch avocado toast', 'Cappuccino cafe table', 'Breakfast coffee croissant',
    'Cafe brunch eggs',
  ],
  'National Restaurant Cevabdzinica Tima-Irma': [
    'incategory:"Ćevapi"', 'Ćevapi plate onion', 'Cevapcici somun bread',
    'Bosnian ćevapi lepinja',
  ],
  'Studenac Restaurant': [
    'incategory:"Ražnjići"', 'Ćevapi grill plate', 'Grilled meat platter Balkan',
    'Mixed grill meat plate',
  ],
  'Kod Asima': [
    'Grilled trout plate', 'Trout dish restaurant', 'Pan fried trout',
    'Cooked trout lemon',
  ],
  'Avlija Restaurant': [
    'Sarma cabbage rolls', 'Japrak dolma dish', 'Bosnian sarma plate',
    'Stuffed cabbage rolls',
  ],
};

const JUNK = /djvu|\.pdf|handbook|monarchie|_painting|painting_|Zastava|SFOR|visa_day|Photomatix|Tom_Swift|preset|_1900|_c1900|logo|Journal\.pone|soya|golden_dodo|%D1%82%D1%8E%D0%BB%D0%B5%D0%BD/i;

async function commonsThumbs(query, limit = 25) {
  const url =
    'https://commons.wikimedia.org/w/api.php?action=query&generator=search' +
    '&gsrsearch=' + encodeURIComponent(query) +
    '&gsrnamespace=6&gsrlimit=' + limit +
    '&prop=imageinfo&iiprop=url|mime&iiurlwidth=960&format=json';
  const res = await fetch(url, { headers: { 'User-Agent': UA } });
  if (!res.ok) return [];
  const json = await res.json();
  const pages = Object.values(json.query?.pages || {});
  pages.sort((a, b) => (a.index ?? 0) - (b.index ?? 0));
  const out = [];
  for (const p of pages) {
    const info = p.imageinfo?.[0];
    if (!info?.thumburl) continue;
    const mime = info.mime || '';
    if (mime.includes('svg') || /\.(svg|pdf|tif|tiff|webm|ogv|djvu)$/i.test(info.url || '')) continue;
    if (JUNK.test(info.url || '')) continue;
    if (JUNK.test(info.thumburl)) continue;
    out.push(info.thumburl);
  }
  return out;
}

async function main() {
  const data = JSON.parse(fs.readFileSync(outPath, 'utf8'));

  // Collect all URLs currently used by entries we are NOT changing.
  const used = new Set();
  for (const [name, set] of Object.entries(data)) {
    if (IMPROVE[name]) continue;
    for (const u of Object.values(set)) if (u) used.add(u);
  }

  for (const name of Object.keys(IMPROVE)) {
    const pool = [];
    for (const q of IMPROVE[name]) {
      const thumbs = await commonsThumbs(q);
      for (const t of thumbs) if (!pool.includes(t)) pool.push(t);
      await sleep(350);
      if (pool.length >= 8) break;
    }
    const picks = [];
    for (const u of pool) {
      if (picks.length >= 4) break;
      if (used.has(u)) continue;
      picks.push(u);
      used.add(u);
    }
    // Fill from own pool if short (rare).
    for (const u of pool) {
      if (picks.length >= 4) break;
      if (!picks.includes(u)) picks.push(u);
    }
    if (picks.length < 4) {
      console.log(`WARN ${name}: only ${picks.length} candidates, keeping old for missing slots`);
    }
    const old = data[name];
    data[name] = {
      hero: picks[0] || old.hero,
      detail: picks[1] || picks[0] || old.detail,
      photoSpot: picks[2] || picks[1] || picks[0] || old.photoSpot,
      map: picks[3] || picks[2] || picks[1] || picks[0] || old.map,
    };
    console.log(`patched ${name}: ${picks.length} new URLs`);
  }

  fs.writeFileSync(outPath, JSON.stringify(data, null, 2) + '\n', 'utf8');

  // Hero duplicate report across whole file.
  const heroCount = {};
  for (const [name, set] of Object.entries(data)) (heroCount[set.hero] ||= []).push(name);
  const dupes = Object.entries(heroCount).filter(([, v]) => v.length >= 2);
  console.log(dupes.length ? '\nShared heroes:' : '\nAll hero URLs unique.');
  for (const [u, v] of dupes) console.log(`  ${v.join(', ')}\n    ${u}`);
}

main().catch((e) => { console.error(e); process.exit(1); });
