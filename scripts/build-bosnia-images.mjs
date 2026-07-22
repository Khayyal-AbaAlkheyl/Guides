import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const outPath = path.join(root, 'data', 'bosnia-real-images.json');
const UA = 'DiscoverTravelGuide/1.0 (bosnia; contact: guide@example.com)';
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

/**
 * Per-place Commons queries. Order matters: earlier queries are the most
 * on-topic. Each place needs 4 unique URLs (hero, detail, photoSpot, map).
 * Queries lean on Commons categories (incategory:) for accuracy.
 */
const QUERIES = {
  // ---- ATTRACTIONS ----
  'Baščaršija': [
    'incategory:Baščaršija', 'Baščaršija Sarajevo', 'Sebilj Sarajevo',
    'Baščaršija square', 'Old bazaar Sarajevo',
  ],
  'Gazi Husrev-beg Mosque': [
    'incategory:"Gazi Husrev-beg Mosque"', 'Gazi Husrev-beg Mosque',
    'Gazi Husrev-begova džamija', 'Begova džamija Sarajevo',
  ],
  'Latin Bridge': [
    'incategory:"Latin Bridge (Sarajevo)"', 'Latin Bridge Sarajevo',
    'Latinska ćuprija Sarajevo', 'Latin Bridge Miljacka',
  ],
  'Sarajevo Cable Car': [
    'incategory:"Trebević cable car"', 'Sarajevo cable car',
    'Trebević cable car', 'Trebević Sarajevo view',
  ],
  'Yellow Fortress': [
    'incategory:"Yellow Bastion"', 'Yellow Fortress Sarajevo',
    'Žuta tabija Sarajevo', 'Vratnik Sarajevo view',
  ],
  'Stari Most': [
    'incategory:"Stari most (Mostar)"', 'Stari Most Mostar bridge',
    'Old Bridge Mostar', 'Mostar bridge Neretva',
  ],
  'Kujundžiluk Bazaar': [
    'incategory:"Kujundžiluk"', 'Kujundžiluk Mostar', 'Kujundziluk bazaar Mostar',
    'Mostar old town street',
  ],
  'Konjic Old Stone Bridge': [
    'incategory:"Stara ćuprija (Konjic)"', 'Konjic stone bridge Neretva',
    'Konjic old bridge', 'Stara ćuprija Konjic',
  ],
  'Blagaj Tekke': [
    'incategory:"Blagaj Tekija"', 'Blagaj Tekke', 'Blagaj tekija Buna',
    'Buna spring Blagaj', 'Blagaj monastery cliff',
  ],
  'Kravica Waterfalls': [
    'incategory:"Kravica (waterfall)"', 'Kravica waterfall', 'Kravice waterfall',
    'Kravica Trebižat',
  ],
  'Počitelj': [
    'incategory:"Počitelj"', 'Počitelj fortress', 'Pocitelj Herzegovina',
    'Počitelj Kula',
  ],
  'Trebinje Old Town': [
    'incategory:"Trebinje"', 'Trebinje old town', 'Trebinje Herzegovina',
    'Trebinje Trebišnjica',
  ],
  'Arslanagić Bridge': [
    'incategory:"Arslanagić Bridge"', 'Arslanagić Bridge Trebinje',
    'Perovića most Trebinje', 'Arslanagica bridge',
  ],
  'Sutjeska National Park': [
    'incategory:"Sutjeska National Park"', 'Sutjeska National Park',
    'Maglić mountain Bosnia', 'Sutjeska river canyon',
  ],
  'Jajce Waterfall': [
    'incategory:"Pliva (waterfall)"', 'Jajce waterfall', 'Pliva waterfall Jajce',
    'Jajce Pliva',
  ],
  'Pliva Lakes': [
    'incategory:"Pliva Lakes"', 'Pliva lakes Jajce', 'Pliva watermills',
    'Mlinčići Jajce watermills',
  ],
  'Tunnel of Hope Museum': [
    'incategory:"Sarajevo Tunnel"', 'Sarajevo Tunnel museum', 'Tunnel of Hope Sarajevo',
    'Sarajevo war tunnel',
  ],
  'Vrelo Bosne': [
    'incategory:"Vrelo Bosne"', 'Vrelo Bosne park', 'Vrelo Bosne spring',
    'Ilidža Vrelo Bosne',
  ],
  'Jajce Catacombs': [
    'incategory:"Jajce"', 'Jajce fortress', 'Jajce catacombs', 'Jajce town Bosnia',
  ],
  'Perućica Primeval Forest': [
    'incategory:"Perućica"', 'Perućica forest', 'Perucica primeval forest',
    'Sutjeska Perućica',
  ],

  // ---- HOTELS (distinct location/architecture where possible) ----
  'Swissôtel Sarajevo': [
    'incategory:"Skyscrapers in Sarajevo"', 'Sarajevo Marijin Dvor towers',
    'Sarajevo Bosmal City Center', 'Sarajevo modern skyline',
  ],
  'Hotel Europe Sarajevo': [
    'incategory:"Hotel Europe (Sarajevo)"', 'Hotel Europe Sarajevo',
    'Hotel Evropa Sarajevo', 'Sarajevo hotel Europe building',
  ],
  'Hotel Mepas': [
    'incategory:"Mepas Mall"', 'Mepas Mall Mostar', 'Mostar Mepas',
    'Mostar Rondo building',
  ],
  'Malak Regency Hotel': [
    'incategory:"Ilidža"', 'Ilidža Sarajevo hotel', 'Ilidža avenue',
    'Ilidža Sarajevo',
  ],
  'Courtyard by Marriott Sarajevo': [
    'incategory:"Skenderija"', 'Sarajevo Skenderija', 'Sarajevo Marriott',
    'Sarajevo Miljacka buildings',
  ],
  'Hotel Story Sarajevo': [
    'incategory:"Streets in Sarajevo"', 'Sarajevo Ferhadija street',
    'Sarajevo city center street', 'Sarajevo Titova street',
  ],
  'Hotel-Restaurant Kriva Ćuprija': [
    'incategory:"Kriva ćuprija"', 'Kriva Ćuprija Mostar', 'Crooked bridge Mostar',
    'Mostar Radobolja bridge',
  ],

  // ---- DINING (food / interior / location appropriate) ----
  'Ministry of Ćejf': [
    'incategory:"Coffee of Bosnia and Herzegovina"', 'Bosnian coffee set',
    'Bosanska kahva', 'Turkish coffee copper',
  ],
  'Miris Dunja': [
    'incategory:"Cuisine of Bosnia and Herzegovina"', 'Bosnian meze plate',
    'Bosnian food dolma', 'Sarma Bosnian',
  ],
  'Ćevabdžinica Željo': [
    'incategory:"Ćevapi"', 'Ćevapi Sarajevo somun', 'Cevapcici Bosnia',
    'Ćevapi bread onion',
  ],
  'Dveri Restaurant': [
    'incategory:"Restaurants in Sarajevo"', 'Dveri Sarajevo restaurant',
    'Bosnian restaurant interior', 'Bosanski lonac pot',
  ],
  'Šadrvan Restaurant': [
    'incategory:"Restaurants in Mostar"', 'Šadrvan Mostar restaurant',
    'Mostar restaurant courtyard', 'Mostar dolma food',
  ],
  'National Restaurant Cevabdzinica Tima-Irma': [
    'incategory:"Pljeskavica"', 'incategory:"Ćevapi"', 'Bosnian mixed grill',
    'Ćevapčići grilled',
  ],
  'Restaurant Vrelo': [
    'Blagaj restaurant Buna', 'Blagaj Buna river restaurant', 'Trout fish grilled',
    'Buna river Blagaj',
  ],
  'Studenac Restaurant': [
    'incategory:"Wine of Bosnia and Herzegovina"', 'incategory:"Ražnjići"',
    'Herzegovina vineyard wine', 'Grilled skewers meat',
  ],
  'Kod Asima': [
    'incategory:"Trout as food"', 'Grilled trout dish', 'incategory:"Cooked fish"',
    'Freshwater fish plate',
  ],
  'Avlija Restaurant': [
    'incategory:"Sarma (food)"', 'incategory:"Dolma"', 'incategory:"Klepe"',
    'Bosanski lonac stew',
  ],
  'Fabrika Coffee': [
    'Specialty coffee cup latte', 'Coffee shop espresso', 'Coffee latte art',
    'Cappuccino cafe',
  ],
  'Café de Alma': [
    'Bosnian coffee cezve', 'Coffee cakes cafe', 'Turkish coffee cup',
    'Bosanska kafa džezva',
  ],
  'Urban Café Sarajevo': [
    'Brunch coffee table', 'Modern cafe brunch', 'Coffee brunch plate',
    'Cafe latte breakfast',
  ],

  // ---- SHOPPING DISTRICTS ----
  'Baščaršija Copper Market': [
    'incategory:"Kazandžiluk"', 'Kazandžiluk Sarajevo coppersmith',
    'Sarajevo copper market', 'Baščaršija copper souvenirs',
  ],
  'Old Bazaar Sarajevo': [
    'incategory:"Streets in Baščaršija"', 'Baščaršija street shops',
    'Sarajevo old bazaar street', 'Baščaršija Kazandžiluk street',
  ],
  'SCC Mall': [
    'incategory:"Sarajevo City Center"', 'Sarajevo City Center mall',
    'SCC Sarajevo shopping', 'Sarajevo Ciglane mall',
  ],
};

async function commonsThumbs(query, limit = 20) {
  const url =
    'https://commons.wikimedia.org/w/api.php?action=query&generator=search' +
    '&gsrsearch=' + encodeURIComponent(query) +
    '&gsrnamespace=6&gsrlimit=' + limit +
    '&prop=imageinfo&iiprop=url|mime&iiurlwidth=960&format=json';
  const res = await fetch(url, { headers: { 'User-Agent': UA } });
  if (!res.ok) return [];
  const json = await res.json();
  const pages = Object.values(json.query?.pages || {});
  // Preserve search relevance ordering
  pages.sort((a, b) => (a.index ?? 0) - (b.index ?? 0));
  const out = [];
  for (const p of pages) {
    const info = p.imageinfo?.[0];
    if (!info?.thumburl) continue;
    const mime = info.mime || '';
    if (mime.includes('svg') || info.url?.toLowerCase().endsWith('.svg')) continue;
    if (/\.(pdf|tif|tiff|webm|ogv)$/i.test(info.url || '')) continue;
    out.push(info.thumburl);
  }
  return out;
}

async function buildPool(name) {
  const pool = [];
  for (const q of QUERIES[name]) {
    const thumbs = await commonsThumbs(q);
    for (const t of thumbs) if (!pool.includes(t)) pool.push(t);
    await sleep(350);
    if (pool.length >= 12) break;
  }
  return pool;
}

async function main() {
  const names = Object.keys(QUERIES);
  const used = new Set();
  const pools = {};

  for (const name of names) {
    process.stdout.write(`pool ${name} ... `);
    pools[name] = await buildPool(name);
    console.log(`${pools[name].length} candidates`);
  }

  // First pass: assign up to 4 globally-unique URLs per entry.
  const out = {};
  const shortfall = [];
  for (const name of names) {
    const picks = [];
    for (const u of pools[name]) {
      if (picks.length >= 4) break;
      if (used.has(u)) continue;
      picks.push(u);
      used.add(u);
    }
    out[name] = picks;
  }

  // Second pass: fill entries with <4 from their own pool (allow reuse only
  // within the same entry's topical pool).
  for (const name of names) {
    const picks = out[name];
    if (picks.length >= 4) continue;
    for (const u of pools[name]) {
      if (picks.length >= 4) break;
      if (!picks.includes(u)) picks.push(u);
    }
  }

  // Third pass: any still-short entry (only food places lack topical photos)
  // draws globally-unique images from a shared Bosnian-cuisine fallback pool.
  const stillShort = names.filter((n) => out[n].length < 4);
  if (stillShort.length) {
    const fallbackQueries = [
      'incategory:"Cuisine of Bosnia and Herzegovina"', 'incategory:"Burek"',
      'incategory:"Baklava"', 'incategory:"Ajvar"', 'incategory:"Somun"',
      'incategory:"Bosnian coffee"', 'incategory:"Pita (food)"',
    ];
    const fallback = [];
    for (const q of fallbackQueries) {
      const thumbs = await commonsThumbs(q, 30);
      for (const t of thumbs) if (!fallback.includes(t)) fallback.push(t);
      await sleep(350);
    }
    for (const name of stillShort) {
      const picks = out[name];
      for (const u of fallback) {
        if (picks.length >= 4) break;
        if (used.has(u) || picks.includes(u)) continue;
        picks.push(u);
        used.add(u);
      }
    }
  }

  for (const name of names) {
    if (out[name].length < 4) shortfall.push(`${name} (${out[name].length})`);
  }

  const result = {};
  for (const name of names) {
    const p = out[name];
    result[name] = {
      hero: p[0] || null,
      detail: p[1] || p[0] || null,
      photoSpot: p[2] || p[1] || p[0] || null,
      map: p[3] || p[2] || p[1] || p[0] || null,
    };
  }

  fs.writeFileSync(outPath, JSON.stringify(result, null, 2) + '\n', 'utf8');
  console.log(`\nWrote ${outPath} (${names.length} entries)`);
  if (shortfall.length) console.log('Shortfall (<4 unique):', shortfall.join(', '));

  // Hero duplicate report
  const heroCount = {};
  for (const name of names) {
    const h = result[name].hero;
    (heroCount[h] ||= []).push(name);
  }
  const dupes = Object.entries(heroCount).filter(([, v]) => v.length >= 2);
  if (dupes.length) {
    console.log('\nShared hero URLs:');
    for (const [u, v] of dupes) console.log(`  ${v.join(', ')}\n    ${u}`);
  } else {
    console.log('\nAll hero URLs unique.');
  }
}

main().catch((e) => { console.error(e); process.exit(1); });
