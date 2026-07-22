import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dataPath = path.join(root, 'data', 'paris.js');
const cachePath = path.join(root, 'data', 'paris-image-cache.json');

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

/** Curated Wikipedia page titles for real place photos */
const WIKI_TITLES = {
  // Attractions
  'Eiffel Tower': 'Eiffel Tower',
  'Trocadéro Gardens': 'Trocadéro',
  'Arc de Triomphe': 'Arc de Triomphe',
  'Champs-Élysées': 'Champs-Élysées',
  'Seine River Cruise': 'Bateaux Mouches',
  'Bir-Hakeim Bridge': 'Pont de Bir-Hakeim',
  'Pont Alexandre III': 'Pont Alexandre III',
  'Louvre Museum': 'Louvre',
  'Louvre Pyramid': 'Louvre Pyramid',
  'Jardin des Tuileries': 'Tuileries Garden',
  'Place de la Concorde': 'Place de la Concorde',
  'Galeries Lafayette Rooftop': 'Galeries Lafayette',
  'Sacré-Cœur Basilica': 'Basilique du Sacré-Cœur de Montmartre',
  'Montmartre': 'Montmartre',
  'Moulin Rouge': 'Moulin Rouge',
  'Galerie Vivienne': 'Galerie Vivienne',
  'Luxembourg Gardens': 'Luxembourg Garden',
  'Panthéon': 'Panthéon',
  'Notre-Dame Cathedral': 'Notre-Dame de Paris',
  'Shakespeare & Company': 'Shakespeare and Company',
  "Rue de l'Université": 'Rue de l\'Université (Paris)',
  'Seine River Banks': 'Seine',

  // Hotels
  'The Peninsula Paris': 'The Peninsula Paris',
  'Shangri-La Paris': 'Shangri-La Hotel, Paris',
  'Four Seasons George V': 'Four Seasons Hotel George V',
  'Hôtel Le Six': 'Hôtel Le Six',
  'Hôtel Fabric': 'Hôtel Fabric',
  'Pullman Paris Tour Eiffel': 'Pullman Paris Tour Eiffel',
  'Hôtel Malte – Astotel': 'Hôtel Malte',
  'ibis Paris Tour Eiffel': 'Ibis Paris Tour Eiffel',
  'CitizenM Gare de Lyon': 'CitizenM Paris Gare de Lyon',

  // Dining
  'Café de Flore': 'Café de Flore',
  'Girafe Paris': 'Girafe (restaurant)',
  'Le Jules Verne': 'Le Jules Verne',
  'Ladurée': 'Ladurée',
  'Angelina Paris': 'Angelina (tea house)',
  'Café Marly': 'Café Marly',
  'Le Train Bleu': 'Le Train Bleu (Paris)',
  'Le Consulat': 'Le Consulat (café)',
  'La Maison Rose': 'La Maison Rose',
  'Le Relais Gascon': 'Le Relais Gascon',
  'Bouillon Pigalle': 'Bouillon Pigalle',
  'Café Kitsuné': 'Café Kitsuné',
  'Le Procope': 'Le Procope',
  'Odette': 'Odette (Paris)',
  'Les Ombres': 'Les Ombres',
  'Les Deux Magots': 'Les Deux Magots',
  'Carette': 'Carette (pâtisserie)',
};

const COMMONS_QUERIES = {
  'Girafe Paris': 'Girafe restaurant Paris Trocadero',
  'Hôtel Le Six': 'Hotel Le Six Paris Saint-Germain',
  'Hôtel Fabric': 'Hotel Fabric Paris Oberkampf',
  'Pullman Paris Tour Eiffel': 'Pullman Paris Tour Eiffel hotel',
  'Hôtel Malte – Astotel': 'Hotel Malte Astotel Paris',
  'ibis Paris Tour Eiffel': 'Ibis Paris Tour Eiffel Cambronne',
  'Le Consulat': 'Le Consulat cafe Montmartre Paris',
  'La Maison Rose': 'La Maison Rose Montmartre Paris',
  'Le Relais Gascon': 'Le Relais Gascon Paris',
  'Bouillon Pigalle': 'Bouillon Pigalle Paris restaurant',
  'Café Kitsuné': 'Cafe Kitsune Palais Royal Paris',
  'Odette': 'Odette Paris cream puffs Latin Quarter',
  'Les Ombres': 'Les Ombres restaurant Paris Quai Branly',
  'Carette': 'Carette Trocadero Paris patisserie',
  "Rue de l'Université": 'Rue de l Universite Paris Eiffel Tower view',
  'Seine River Cruise': 'Bateaux Mouches Paris Seine cruise',
  'Seine River Banks': 'Seine river bank Paris Notre Dame',
};

async function wikiThumb(title) {
  const url =
    'https://en.wikipedia.org/w/api.php?action=query&titles=' +
    encodeURIComponent(title) +
    '&prop=pageimages&format=json&piprop=thumbnail&pithumbsize=960&origin=*';
  const res = await fetch(url, { headers: { 'User-Agent': 'DiscoverParisGuide/1.0 (travel-guides)' } });
  if (!res.ok) return null;
  const text = await res.text();
  if (text.startsWith('You are')) return null;
  const json = JSON.parse(text);
  const page = Object.values(json.query?.pages || {})[0];
  if (!page || page.missing) return null;
  return page.thumbnail?.source || null;
}

async function commonsThumb(query) {
  const url =
    'https://commons.wikimedia.org/w/api.php?action=query&generator=search' +
    '&gsrsearch=' + encodeURIComponent(query) +
    '&gsrnamespace=6&gsrlimit=5&prop=imageinfo&iiprop=url' +
    '&iiurlwidth=960&format=json&origin=*';
  const res = await fetch(url, { headers: { 'User-Agent': 'DiscoverParisGuide/1.0 (travel-guides)' } });
  if (!res.ok) return null;
  const text = await res.text();
  if (text.startsWith('You are')) return null;
  const json = JSON.parse(text);
  const pages = Object.values(json.query?.pages || {});
  for (const p of pages) {
    const info = p.imageinfo?.[0];
    if (info?.thumburl && !info.url?.includes('.svg')) return info.thumburl;
  }
  return null;
}

async function resolveImage(name) {
  const wikiTitle = WIKI_TITLES[name];
  if (wikiTitle) {
    const img = await wikiThumb(wikiTitle);
    await sleep(350);
    if (img) return img;
  }
  const q = COMMONS_QUERIES[name] || `${name} Paris`;
  const img = await commonsThumb(q);
  await sleep(350);
  return img;
}

async function resolveSet(name) {
  const primary = await resolveImage(name);
  const queries = [
    COMMONS_QUERIES[name] || `${name} Paris`,
    `${name} interior Paris`,
    `${name} facade Paris`,
    `${WIKI_TITLES[name] || name} night Paris`,
  ];
  const extras = [];
  for (const q of queries) {
    const img = await commonsThumb(q);
    await sleep(350);
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

function loadPlan() {
  const raw = fs.readFileSync(dataPath, 'utf8');
  const json = raw.replace(/^[\s\S]*?const PLAN = /, '').replace(/;\s*$/, '');
  return JSON.parse(json);
}

function writePlan(plan) {
  const header = `/**
 * DISCOVER Paris — 4-Day First-Time Visitor Guide
 * Real place photos via Wikimedia Commons
 */
`;
  fs.writeFileSync(dataPath, header + 'const PLAN = ' + JSON.stringify(plan, null, 2) + ';\n', 'utf8');
}

function applyPhotoSet(target, set, type) {
  if (!set.hero) return false;
  if (type === 'attraction') {
    target.hero = set.hero;
    target.detail = set.detail || set.hero;
    target.photoSpot = set.photoSpot || set.detail || set.hero;
    target.map = set.map || set.photoSpot || set.hero;
    if (target.seasonalPhotos) {
      target.seasonalPhotos.spring = set.hero;
      target.seasonalPhotos.summer = set.detail || set.hero;
      target.seasonalPhotos.autumn = set.photoSpot || set.hero;
      target.seasonalPhotos.christmas = set.map || set.hero;
    }
    return true;
  }
  if (type === 'hotel') {
    target.exterior = set.hero;
    target.lobby = set.detail || set.hero;
    target.room = set.photoSpot || set.hero;
    target.luxuryRoom = set.photoSpot || set.hero;
    target.restaurant = set.detail || set.hero;
    target.pool = set.map || set.hero;
    target.rooftop = set.photoSpot || set.hero;
    target.breakfast = set.detail || set.hero;
    target.spa = set.map || set.hero;
    target.view = set.photoSpot || set.hero;
    return true;
  }
  if (type === 'dining') {
    target.signature = set.hero;
    target.interior = set.detail || set.hero;
    target.exterior = set.photoSpot || set.hero;
    target.dessert = set.map || set.photoSpot || set.hero;
    target.coffee = set.detail || set.hero;
    return true;
  }
  return false;
}

async function main() {
  const plan = loadPlan();
  const cache = fs.existsSync(cachePath) ? JSON.parse(fs.readFileSync(cachePath, 'utf8')) : {};
  const names = [
    ...plan.attractions.map((a) => a.name),
    ...plan.hotels.map((h) => h.name),
    ...plan.dining.map((d) => d.name),
  ];

  let updated = 0;
  let missing = [];

  for (const name of names) {
    let set = cache[name];
    if (!set?.hero) {
      console.log(`Fetching: ${name}...`);
      set = await resolveSet(name);
      cache[name] = set;
      fs.writeFileSync(cachePath, JSON.stringify(cache, null, 2));
    }
    if (!set.hero) {
      missing.push(name);
      console.log(`  ✗ no image`);
      continue;
    }
    const attr = plan.attractions.find((a) => a.name === name);
    const hotel = plan.hotels.find((h) => h.name === name);
    const dine = plan.dining.find((d) => d.name === name);
    if (attr && applyPhotoSet(attr.photos, set, 'attraction')) updated++;
    if (hotel && applyPhotoSet(hotel.photos, set, 'hotel')) updated++;
    if (dine) {
      if (applyPhotoSet(dine.photos, set, 'dining')) updated++;
      if (dine.dishes?.length) {
        dine.dishes.forEach((dish, i) => {
          const imgs = [set.hero, set.detail, set.photoSpot, set.map].filter(Boolean);
          dish.img = imgs[i % imgs.length];
        });
      }
    }
    console.log(`  ✓ ${name}`);
  }

  // Itinerary day strips + rainy/sunny/hidden/shopping
  for (const section of ['rainyDay', 'sunnyDay', 'hiddenGems']) {
    for (const item of plan[section] || []) {
      const set = cache[item.name] || cache[item.name?.split(' ')[0]];
      if (set?.hero) item.img = set.hero;
    }
  }
  for (const d of plan.shopping?.districts || []) {
    const set = cache[d.name] || cache[d.name.split(' ')[0]];
    if (set?.hero) d.img = set.hero;
  }
  for (const it of plan.itineraries || []) {
    it.photos = (it.stops || [])
      .slice(0, 4)
      .map((s) => cache[s.name]?.hero)
      .filter(Boolean);
    if (it.photos.length < 4 && cache['Eiffel Tower']?.hero) {
      while (it.photos.length < 4) it.photos.push(cache['Eiffel Tower'].hero);
    }
  }

  writePlan(plan);
  console.log(`\nUpdated ${updated} card photo sets. Cache: ${cachePath}`);
  if (missing.length) {
    console.log(`Missing images (${missing.length}): ${missing.join(', ')}`);
    process.exit(1);
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
