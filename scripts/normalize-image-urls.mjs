import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

function normalizeImageUrl(url, width = 640) {
  if (!url || typeof url !== 'string') return url;
  if (url.startsWith('data:')) return url;
  if (url.includes('images.unsplash.com')) {
    const base = url.split('?')[0];
    return `${base}?auto=format&fit=crop&w=${width}&q=75&fm=jpg`;
  }
  return url;
}

const target = process.argv[2] || 'data/london.js';
const filePath = path.resolve(root, target);
let content = fs.readFileSync(filePath, 'utf8');
const before = content.match(/images\.unsplash\.com/g)?.length || 0;

content = content.replace(/https:\/\/images\.unsplash\.com\/[^"'`\s]+/g, (match) =>
  normalizeImageUrl(match, 640)
);

fs.writeFileSync(filePath, content);
const after = content.match(/images\.unsplash\.com/g)?.length || 0;
console.log(`Normalized ${before} Unsplash URLs in ${target}`);
