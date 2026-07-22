import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const slug = process.argv[2];

if (!slug) {
  console.error('Usage: node scripts/apply-city-images.mjs <slug>');
  console.error('Example: node scripts/apply-city-images.mjs london');
  process.exit(1);
}

const dataPath = path.join(root, 'data', `${slug}.js`);
const imagesPath = path.join(root, 'data', `${slug}-real-images.json`);

if (!fs.existsSync(dataPath)) {
  console.error(`Missing data file: ${dataPath}`);
  process.exit(1);
}
if (!fs.existsSync(imagesPath)) {
  console.error(`Missing image map: ${imagesPath}`);
  process.exit(1);
}

const REAL = JSON.parse(fs.readFileSync(imagesPath, 'utf8'));

function applyPhotoSet(target, set, type) {
  if (!set?.hero) return false;
  if (type === 'attraction') {
    target.hero = set.hero;
    target.detail = set.detail || set.hero;
    target.photoSpot = set.photoSpot || set.detail || set.hero;
    target.map = set.map || set.photoSpot || set.hero;
    return true;
  }
  if (type === 'hotel') {
    Object.assign(target, {
      exterior: set.hero,
      lobby: set.detail || set.hero,
      room: set.photoSpot || set.hero,
      luxuryRoom: set.photoSpot || set.hero,
      restaurant: set.detail || set.hero,
      pool: set.map || set.hero,
      rooftop: set.photoSpot || set.hero,
      breakfast: set.detail || set.hero,
      spa: set.map || set.hero,
      view: set.photoSpot || set.hero,
    });
    return true;
  }
  if (type === 'dining') {
    Object.assign(target, {
      signature: set.hero,
      interior: set.detail || set.hero,
      exterior: set.photoSpot || set.hero,
      dessert: set.map || set.photoSpot || set.hero,
      coffee: set.detail || set.hero,
    });
    return true;
  }
  return false;
}

function loadPlan() {
  const raw = fs.readFileSync(dataPath, 'utf8');
  return JSON.parse(raw.replace(/^[\s\S]*?const PLAN = /, '').replace(/;\s*$/, ''));
}

function detectHeader(raw) {
  const match = raw.match(/^(\/\*\*[\s\S]*?\*\/\s*)/);
  return match ? match[1] : '';
}

function writePlan(plan) {
  const raw = fs.readFileSync(dataPath, 'utf8');
  const header =
    detectHeader(raw) ||
    `/**
 * DISCOVER ${plan.meta?.city || slug} — Travel Guide
 * Real place photos via Wikimedia Commons (CC-licensed)
 */
`;
  fs.writeFileSync(dataPath, header + 'const PLAN = ' + JSON.stringify(plan, null, 2) + ';\n', 'utf8');
}

function lookup(name) {
  return (
    REAL[name] ||
    REAL[name?.replace(' Rooftop', '')] ||
    REAL[name?.split(' · ')[0]] ||
    REAL[name?.replace(/^Breakfast · /, '').replace(/^Lunch · /, '').replace(/^Dinner · /, '').replace(/^Sundowner · /, '').replace(/^Sundowners · /, '').replace(/^Farewell dinner · /, '')]
  );
}

const plan = loadPlan();
let updated = 0;
const missing = [];

for (const attr of plan.attractions || []) {
  const set = lookup(attr.name);
  if (!set) missing.push(attr.name);
  else if (applyPhotoSet(attr.photos, set, 'attraction')) {
    updated++;
    if (attr.seasonalPhotos) {
      attr.seasonalPhotos.spring = set.hero;
      attr.seasonalPhotos.summer = set.detail || set.hero;
      attr.seasonalPhotos.autumn = set.photoSpot || set.hero;
      attr.seasonalPhotos.christmas = set.map || set.hero;
    }
  }
}

for (const hotel of plan.hotels || []) {
  const set = lookup(hotel.name);
  if (!set) missing.push(hotel.name);
  else if (applyPhotoSet(hotel.photos, set, 'hotel')) updated++;
}

for (const dine of plan.dining || []) {
  const set = lookup(dine.name);
  if (!set) missing.push(dine.name);
  else {
    if (applyPhotoSet(dine.photos, set, 'dining')) updated++;
    dine.dishes?.forEach((dish, i) => {
      const imgs = [set.hero, set.detail, set.photoSpot, set.map].filter(Boolean);
      dish.img = imgs[i % imgs.length];
    });
  }
}

for (const section of ['rainyDay', 'sunnyDay', 'hiddenGems']) {
  for (const item of plan[section] || []) {
    const set = lookup(item.name);
    if (set?.hero) item.img = set.hero;
  }
}

for (const d of plan.shopping?.districts || []) {
  const set = lookup(d.name);
  if (set?.hero) d.img = set.hero;
}

const heroKey =
  Object.keys(REAL).find((k) => /tower|palace|eye|bridge|city/i.test(k)) || Object.keys(REAL)[0];
if (REAL[heroKey]?.hero && plan.meta?.theme) {
  plan.meta.theme.heroImage = REAL[heroKey].hero;
}

for (const it of plan.itineraries || []) {
  it.photos = (it.stops || []).slice(0, 4).map((s) => lookup(s.name)?.hero).filter(Boolean);
  while (it.photos.length < 4 && REAL[heroKey]?.hero) {
    it.photos.push(REAL[heroKey].hero);
  }
}

writePlan(plan);
console.log(`[${slug}] Applied Wikimedia photos to ${updated} cards.`);
if (missing.length) {
  const unique = [...new Set(missing)];
  console.log('Missing from image map:', unique.join(', '));
  process.exit(1);
}
