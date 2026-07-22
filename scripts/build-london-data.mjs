import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dataDir = path.resolve(__dirname, 'london-data');
const out = path.resolve(__dirname, '../data/london.js');

function load(name) {
  return JSON.parse(fs.readFileSync(path.join(dataDir, name), 'utf8'));
}

const PLAN = {
  ...load('core.json'),
  attractions: [...load('attractions-a.json'), ...load('attractions-b.json')],
  hotels: load('hotels.json'),
  dining: load('dining.json'),
  itineraries: load('itineraries.json'),
  ...load('extras.json'),
};

fs.writeFileSync(out, `const PLAN = ${JSON.stringify(PLAN, null, 2)};\n`);
console.log(`Wrote ${out} (${fs.readFileSync(out, 'utf8').split('\n').length} lines)`);
