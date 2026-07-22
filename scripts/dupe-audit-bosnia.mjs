import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const raw = fs.readFileSync(path.join(root, 'data', 'bosnia.js'), 'utf8');
const plan = JSON.parse(raw.replace(/^[\s\S]*?const PLAN = /, '').replace(/;\s*$/, ''));

// Primary image per card by section type.
const primary = [];
for (const a of plan.attractions || []) primary.push([`ATTR: ${a.name}`, a.photos?.hero]);
for (const h of plan.hotels || []) primary.push([`HOTEL: ${h.name}`, h.photos?.exterior]);
for (const d of plan.dining || []) primary.push([`DINE: ${d.name}`, d.photos?.signature]);

const byUrl = {};
for (const [label, url] of primary) {
  if (!url) continue;
  (byUrl[url] ||= []).push(label);
}

const shared = Object.entries(byUrl).filter(([, v]) => v.length >= 2);
const triple = Object.entries(byUrl).filter(([, v]) => v.length >= 3);

console.log(`Cards audited: ${primary.length}`);
console.log(`Distinct primary URLs: ${Object.keys(byUrl).length}`);
console.log(`\nURLs shared by 2 cards: ${shared.length}`);
for (const [u, v] of shared) console.log(`  ${v.join('  |  ')}\n    ${u.slice(0, 90)}`);
console.log(`\nURLs shared by 3+ cards (VIOLATIONS): ${triple.length}`);
for (const [u, v] of triple) console.log(`  ${v.join('  |  ')}\n    ${u}`);

// Also flag the banned lazy defaults appearing anywhere as a primary.
const banned = [/Mostar_Old_Town_Panorama_2007/, /Waterfalls_Kravica_5/, /Ba%C5%A1%C4%8Dar%C5%A1ija_%286086230081%29/];
console.log('\nBanned lazy-default heroes still used as primary:');
let any = false;
for (const [label, url] of primary) {
  if (url && banned.some((b) => b.test(url))) { console.log(`  ${label} -> ${url.slice(0,90)}`); any = true; }
}
if (!any) console.log('  none');

process.exit(triple.length ? 1 : 0);
