import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dataPath = process.argv[2] || path.join(root, 'data', 'london.js');

const WORKING = [
  'photo-1513635269975-59663e0ac1ad',
  'photo-1582050041567-9cfdd330d545',
  'photo-1505761671935-60b3a7427bad',
  'photo-1524661135-423995f22d0b',
  'photo-1520222984843-df35ebc0f24d',
  'photo-1512453979798-5ea266f8880c',
  'photo-1566073771259-6a8506099945',
  'photo-1631049307264-da0ec9d70304',
  'photo-1555396273-367ea4eb4db5',
  'photo-1550581190-9c1c48d21d6c'
];

function unsplashUrl(id, w = 640) {
  return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=75&fm=jpg`;
}

let text = fs.readFileSync(dataPath, 'utf8');
const matches = [...text.matchAll(/photo-[a-z0-9-]+/g)].map((m) => m[0]);
const unique = [...new Set(matches)];

const bad = [];
for (const id of unique) {
  const r = await fetch(unsplashUrl(id, 400), { method: 'HEAD' });
  if (!r.ok) bad.push(id);
}

console.log(`Broken IDs: ${bad.length}/${unique.length}`);

let i = 0;
for (const id of bad) {
  const replacement = WORKING[i % WORKING.length];
  i += 1;
  text = text.split(id).join(replacement);
  console.log(`  ${id} → ${replacement}`);
}

fs.writeFileSync(dataPath, text);
console.log(`Updated ${path.basename(dataPath)}`);
