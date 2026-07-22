/**
 * Export scripts/edinburgh-images.mjs → data/edinburgh-real-images.json
 * Format: { hero, detail, photoSpot, map } per venue (matches paris-real-images.json)
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { EDINBURGH_IMAGES, W960 } from './edinburgh-images.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dataPath = path.join(root, 'data', 'edinburgh.js');
const outPath = path.join(root, 'data', 'edinburgh-real-images.json');

const FALLBACK = W960('7/78/Edinburgh_Castle_seen_from_Castle_Street.jpg');

function toSet(entry) {
  if (!entry || typeof entry !== 'object') return null;
  if (entry.hero) {
    const hero = entry.hero;
    return {
      hero,
      detail: entry.detail || hero,
      photoSpot: entry.photoSpot || entry.detail || hero,
      map: entry.map || entry.photoSpot || hero,
    };
  }
  if (entry.exterior || entry.signature || entry.food) {
    const hero = entry.exterior || entry.signature || entry.food;
    return {
      hero,
      detail: entry.interior || entry.lobby || entry.detail || hero,
      photoSpot: entry.room || entry.photoSpot || entry.exterior || hero,
      map: entry.view || entry.pool || entry.map || entry.food || hero,
    };
  }
  return null;
}

function loadPlan() {
  const raw = fs.readFileSync(dataPath, 'utf8');
  return JSON.parse(raw.replace(/^[\s\S]*?const PLAN = /, '').replace(/;\s*$/, ''));
}

function collectNames(plan) {
  const names = new Set();
  for (const a of plan.attractions || []) names.add(a.name);
  for (const h of plan.hotels || []) names.add(h.name);
  for (const d of plan.dining || []) names.add(d.name);
  for (const s of ['rainyDay', 'sunnyDay', 'hiddenGems']) {
    for (const i of plan[s] || []) names.add(i.name);
  }
  for (const d of plan.shopping?.districts || []) names.add(d.name);
  for (const it of plan.itineraries || []) {
    for (const stop of it.stops || []) names.add(stop.name);
  }
  return names;
}

/** Aliases: edinburgh.js name → EDINBURGH_IMAGES key */
const ALIASES = {
  'Royal Botanic Garden': 'Royal Botanic Garden Edinburgh',
  'Holyrood Palace': 'Palace of Holyroodhouse',
  'The Balmoral': 'The Balmoral Hotel',
  'The Witchery': 'The Witchery by the Castle',
  'Camera Obscura': 'Camera Obscura & World of Illusions',
  "Real Mary King's Close": "The Real Mary King's Close",
  'Royal Mile': W960('8/8a/Royal_Mile%2C_Edinburgh.jpg'),
  Grassmarket: 'Grassmarket',
  'Greyfriars Kirkyard': 'Greyfriars',
  'Salisbury Crags': "Arthur's Seat",
  'Leith Shore Walk': 'Leith Shore',
  'Royal Botanic Garden Glasshouses': 'Royal Botanic Garden Edinburgh',
  'The Dome afternoon tea': 'The Dome',
  'Scottish National Gallery': W960('5/5d/Scott_Monument%2C_Edinburgh.jpg'),
  'Circus Lane': W960('a/a7/Dean_Village%2C_Edinburgh.jpg'),
  "Dunbar's Close Garden": W960('8/8a/Royal_Mile%2C_Edinburgh.jpg'),
  'Water of Leith Walkway': W960('a/a7/Dean_Village%2C_Edinburgh.jpg'),
  "Dr Neil's Garden": W960('9/9e/Royal_Botanic_Garden_Edinburgh_-_Palm_House.jpg'),
  'The Vennel': W960('7/78/Edinburgh_Castle_seen_from_Castle_Street.jpg'),
  'Stockbridge Market': 'Stockbridge',
  'Greyfriars Bobby': 'Greyfriars',
  'Princes Street': W960('4/4c/Princes_Street_Gardens_02.jpg'),
  'Multrees Walk': W960('4/4c/Princes_Street_Gardens_02.jpg'),
  'Optional · Ghost Tour': W960('8/8a/Royal_Mile%2C_Edinburgh.jpg'),
  'Farewell Dinner · The Kitchin': 'The Kitchin',
  'Portobello Beach': 'Portobello',
};

function resolve(name) {
  const alias = ALIASES[name];
  if (typeof alias === 'string' && alias.startsWith('http')) {
    return { hero: alias, detail: alias, photoSpot: alias, map: alias };
  }
  const key = typeof alias === 'string' ? alias : name;
  const entry = EDINBURGH_IMAGES[key];
  return toSet(entry);
}

const plan = loadPlan();
const out = {};

for (const [key, entry] of Object.entries(EDINBURGH_IMAGES)) {
  if (key === 'hero') continue;
  const set = toSet(entry);
  if (set?.hero) out[key] = set;
}

for (const name of collectNames(plan)) {
  if (out[name]?.hero) continue;
  const set = resolve(name);
  if (set?.hero) out[name] = set;
}

for (const name of collectNames(plan)) {
  if (!out[name]?.hero) {
    console.warn(`Missing mapping: ${name}`);
    out[name] = { hero: FALLBACK, detail: FALLBACK, photoSpot: FALLBACK, map: FALLBACK };
  }
}

fs.writeFileSync(outPath, JSON.stringify(out, null, 2) + '\n', 'utf8');
console.log(`Wrote ${outPath} (${Object.keys(out).length} entries)`);
