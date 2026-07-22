/**
 * Ensure every city HTML + PDF shell loads i18n, PLAN_AR, and Noto Arabic.
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { CITIES, cityPaths } from './lib/ar-plan.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const FONT =
  'https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700&family=Fraunces:opsz,wght@9..144,600;9..144,700&family=Noto+Sans+Arabic:wght@400;500;600;700&display=swap';
const FONT_PDF =
  'https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Fraunces:wght@600;700&family=Noto+Sans+Arabic:wght@400;500;600;700&display=swap';
const V = '20260722a';

for (const city of CITIES) {
  const { html, pdfHtml } = cityPaths(root, city);

  // Interactive guide
  let h = fs.readFileSync(html, 'utf8');
  h = h.replace(/href="https:\/\/fonts\.googleapis\.com\/css2\?[^"]+"/, `href="${FONT}"`);
  if (!h.includes(`${city}-ar.js`)) {
    h = h.replace(
      new RegExp(`(<script src="\\.\\./data/${city}\\.js[^"]*"><\\/script>)`),
      `$1\n  <script src="../data/${city}-ar.js?v=${V}"></script>`
    );
  }
  if (!h.includes('i18n.js')) {
    h = h.replace(
      /(<script src="\.\.\/brand\/discover\.js[^"]*"><\/script>)/,
      `$1\n  <script src="../assets/i18n.js?v=${V}"></script>`
    );
  }
  // bump cache busters lightly for core assets
  h = h.replace(/\?v=20260714b/g, `?v=${V}`);
  fs.writeFileSync(html, h, 'utf8');
  console.log('wired', path.relative(root, html));

  // PDF shell
  let p = fs.readFileSync(pdfHtml, 'utf8');
  p = p.replace(/href="https:\/\/fonts\.googleapis\.com\/css2\?[^"]+"/, `href="${FONT_PDF}"`);
  if (!p.includes(`${city}-ar.js`)) {
    p = p.replace(
      new RegExp(`(<script src="\\.\\./data/${city}\\.js[^"]*"><\\/script>)`),
      `$1\n  <script src="../data/${city}-ar.js?v=${V}"></script>`
    );
  }
  if (!p.includes('i18n.js')) {
    p = p.replace(
      /(<script src="\.\.\/brand\/discover\.js[^"]*"><\/script>)/,
      `$1\n  <script src="../assets/i18n.js?v=${V}"></script>`
    );
  }
  p = p.replace(/\?v=20260714b/g, `?v=${V}`);
  fs.writeFileSync(pdfHtml, p, 'utf8');
  console.log('wired', path.relative(root, pdfHtml));
}
