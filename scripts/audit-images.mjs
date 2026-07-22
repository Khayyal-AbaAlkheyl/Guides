import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dataPath = process.argv[2] || path.join(root, 'data', 'london.js');

const text = fs.readFileSync(dataPath, 'utf8');
const urls = [...new Set([
  ...(text.match(/https?:\/\/upload\.wikimedia\.org\/[^"\s]+/g) || []),
  ...(text.match(/https?:\/\/images\.unsplash\.com\/[^"\s]+/g) || []),
  ...(text.match(/https?:\/\/picsum\.photos\/[^"\s]+/g) || []),
  ...(text.match(/https?:\/\/api\.qrserver\.com\/[^"\s]+/g) || []),
])];

// upload.wikimedia.org blocks empty/bot User-Agents (403) and throttles
// unpaced requests (429), so send a browser UA and back off on 429.
const HEADERS = {
  'User-Agent':
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 ' +
    '(KHTML, like Gecko) Chrome/124.0 Safari/537.36',
  Accept: 'image/avif,image/webp,image/*,*/*;q=0.8',
};

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function check(url, tries = 4) {
  for (let i = 0; i < tries; i++) {
    try {
      const res = await fetch(url, { method: 'HEAD', headers: HEADERS, redirect: 'follow' });
      if (res.status === 429 && i < tries - 1) {
        await sleep(1500 * (i + 1));
        continue;
      }
      return { url, ok: res.ok, status: res.status };
    } catch (e) {
      if (i < tries - 1) {
        await sleep(1000);
        continue;
      }
      return { url, ok: false, status: e.message };
    }
  }
  return { url, ok: false, status: 429 };
}

console.log(`Checking ${urls.length} image URLs in ${path.basename(dataPath)}...\n`);

const results = [];
for (const url of urls) {
  results.push(await check(url));
  if (url.includes('upload.wikimedia.org')) await sleep(700);
}

const bad = results.filter((r) => !r.ok);
console.log(`OK: ${results.length - bad.length} / ${results.length}`);
if (bad.length) {
  console.log('\nFailed URLs:');
  bad.slice(0, 30).forEach((r) => console.log(`  [${r.status}] ${r.url.slice(0, 100)}`));
  if (bad.length > 30) console.log(`  ... and ${bad.length - 30} more`);
  process.exit(1);
}
