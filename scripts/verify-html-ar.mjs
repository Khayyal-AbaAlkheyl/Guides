/**
 * Puppeteer smoke test: city HTML pages in ?lang=ar must not show key English chrome/content.
 * Run: node scripts/verify-html-ar.mjs
 */
import puppeteer from 'puppeteer';
import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { CITIES } from './lib/ar-plan.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

const ENGLISH_DENY = [
  'From the Editor',
  'Must-See Sights',
  'Where to Stay',
  'Where to Eat',
  'Your Itinerary',
  'Tap any sight for the full guide',
  'Your pocket companion to',
  'Crowd levels',
  'Before you land',
  'Arrival playbook',
  'More to Know'
];

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp'
};

function startServer(port) {
  return new Promise((resolve, reject) => {
    const server = http.createServer((req, res) => {
      const raw = decodeURIComponent((req.url || '/').split('?')[0]);
      const rel = raw.replace(/^\//, '') || 'cities/london.html';
      const filePath = path.resolve(root, rel);
      if (!filePath.startsWith(root) || !fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
        res.writeHead(404);
        res.end('Not found');
        return;
      }
      const ext = path.extname(filePath).toLowerCase();
      res.writeHead(200, { 'Content-Type': MIME[ext] || 'application/octet-stream' });
      fs.createReadStream(filePath).pipe(res);
    });
    server.on('error', reject);
    server.listen(port, '127.0.0.1', () => resolve(server));
  });
}

const port = 8870 + Math.floor(Math.random() * 100);
const server = await startServer(port);
const browser = await puppeteer.launch({ headless: true });
const report = { pass: true, cities: {} };

try {
  for (const city of CITIES) {
    const page = await browser.newPage();
    const url = `http://127.0.0.1:${port}/cities/${city}.html?lang=ar`;
    const errors = [];
    page.on('pageerror', (e) => errors.push(`pageerror: ${e.message}`));

    await page.goto(url, { waitUntil: 'networkidle0', timeout: 120000 });
    await page.waitForSelector('#app', { timeout: 15000 });

    const result = await page.evaluate((deny) => {
      const root = document.documentElement;
      const text = (document.getElementById('app')?.innerText || '').replace(/\s+/g, ' ');
      const hits = deny.filter((phrase) => text.includes(phrase));
      const hasArabic = /[\u0600-\u06FF]/.test(text);
      return {
        dir: root.getAttribute('dir'),
        lang: root.getAttribute('lang'),
        isArabicClass: root.classList.contains('is-arabic'),
        hasArabic,
        hits,
        sample: text.slice(0, 180)
      };
    }, ENGLISH_DENY);

    if (result.dir !== 'rtl') errors.push(`dir=${result.dir} expected rtl`);
    if (result.lang !== 'ar') errors.push(`lang=${result.lang} expected ar`);
    if (!result.isArabicClass) errors.push('missing is-arabic class');
    if (!result.hasArabic) errors.push('no Arabic script in visible text');
    if (result.hits.length) errors.push(`English leftovers: ${result.hits.join(' | ')}`);

    report.cities[city] = { ok: errors.length === 0, errors, sample: result.sample };
    if (errors.length) report.pass = false;
    console.log(`${city}: ${errors.length ? 'FAIL' : 'PASS'}${errors.length ? ' — ' + errors.join('; ') : ''}`);
    await page.close();
  }
} finally {
  await browser.close();
  server.close();
}

fs.writeFileSync(path.join(root, 'scripts', 'html-ar-smoke-report.json'), JSON.stringify(report, null, 2), 'utf8');
if (!report.pass) {
  console.error('verify-html-ar FAILED');
  process.exit(1);
}
console.log('verify-html-ar PASSED');
