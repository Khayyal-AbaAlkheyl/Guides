import puppeteer from 'puppeteer';
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const htmlPath = path.join(root, 'cities', 'london.html');
const url = process.argv[2] || pathToFileURL(htmlPath).href;

const browser = await puppeteer.launch({ headless: true });
const page = await browser.newPage();
const errors = [];
page.on('pageerror', (e) => errors.push(e.message));
page.on('console', (msg) => {
  if (msg.type() === 'error') errors.push(msg.text());
});

await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 2 });
await page.goto(url, { waitUntil: 'networkidle0', timeout: 120000 });
await page.waitForSelector('.bottom-nav', { timeout: 15000 });

const home = await page.evaluate(() => ({
  overflow: document.documentElement.scrollWidth > document.documentElement.clientWidth + 1,
  title: document.title,
  homeHero: !!document.querySelector('.home-hero'),
  cityTitle: document.querySelector('.home-hero__title')?.textContent?.trim(),
  packingTabs: document.querySelectorAll('.home-packing__tab').length,
  sections: document.querySelectorAll('.home-section').length,
  toolbar: !!document.querySelector('.app-chrome, .app-toolbar'),
  langBtn: !!document.getElementById('lang-toggle'),
  themeBtn: !!document.getElementById('theme-toggle'),
  tabs: document.querySelectorAll('.bottom-nav .nav-item').length,
  appLen: document.getElementById('app')?.innerHTML?.length || 0,
}));

for (const tab of ['sights', 'stay', 'eat', 'plan', 'more']) {
  await page.evaluate((id) => globalThis.setTab(id), tab);
  await new Promise((r) => setTimeout(r, 300));
}

const sightsMedia = await page.evaluate(() => {
  globalThis.setTab('sights');
  const imgs = [...document.querySelectorAll('.place-list-card__media img, .media img')];
  return {
    count: imgs.length,
    lazyDataSrc: imgs.filter((i) => i.hasAttribute('data-src')).length,
    wikimedia: imgs.filter((i) => (i.getAttribute('src') || '').includes('wikimedia')).length,
    picsum: imgs.filter((i) => (i.getAttribute('src') || '').includes('picsum')).length,
  };
});

const final = await page.evaluate(() => ({
  overflow: document.documentElement.scrollWidth > document.documentElement.clientWidth + 1,
  scrollWidth: document.documentElement.scrollWidth,
  clientWidth: document.documentElement.clientWidth,
  mediaImgs: document.querySelectorAll('.media img, img.media__img').length,
}));

await browser.close();

const ok = !errors.length && !home.overflow && !final.overflow && home.title.includes('Discover') && home.tabs === 6 && home.homeHero && home.packingTabs >= 2 && home.sections >= 5 && home.toolbar && home.langBtn && home.themeBtn && sightsMedia.lazyDataSrc === 0 && sightsMedia.picsum === 0;
console.log(JSON.stringify({ ok, url, errors, home, sightsMedia, final }, null, 2));
process.exit(ok ? 0 : 1);
