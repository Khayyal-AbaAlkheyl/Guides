import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { AZERBAIJAN_IMAGES } from './azerbaijan-images.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const outPath = path.join(root, 'data', 'azerbaijan-real-images.json');
const titlesPath = path.join(root, 'data', 'azerbaijan-wiki-titles.json');

const { names } = JSON.parse(fs.readFileSync(titlesPath, 'utf8'));
const missing = names.filter((n) => !AZERBAIJAN_IMAGES[n]?.hero);

if (missing.length) {
  console.error('Missing curated images for:', missing.join(', '));
  process.exit(1);
}

const out = {};
for (const name of names) {
  out[name] = AZERBAIJAN_IMAGES[name];
}

fs.writeFileSync(outPath, JSON.stringify(out, null, 2) + '\n');
console.log(`Wrote ${outPath} (${names.length} entries)`);
