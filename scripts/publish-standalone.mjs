/**
 * Build standalone publish folders — HTML guide + PDF HTML in same Guides project.
 * URLs:
 *   /Guides/london/?lang=ar
 *   /Guides/london-pdf.html?lang=ar
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { CITIES, cityPaths } from './lib/ar-plan.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const outRoot = path.join(root, 'docs');
const V = '20260722t';

const GUIDE_ASSETS = ['app.js', 'magazine.css', 'i18n.js', 'shared.js'];
const PDF_ASSETS = ['pdf.css', 'pdf-app.js'];
const BRAND_FILES = ['discover.css', 'discover.js'];
const FONT =
  'https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700&family=Fraunces:opsz,wght@9..144,600;9..144,700&family=Noto+Sans+Arabic:wght@400;500;600;700&display=swap';
const FONT_PDF =
  'https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Fraunces:wght@600;700&family=Noto+Sans+Arabic:wght@400;500;600;700&display=swap';

function pdfPagePath(city) {
  return `../${city}-pdf.html`;
}

function rm(dir) {
  if (fs.existsSync(dir)) fs.rmSync(dir, { recursive: true, force: true });
}

function mkdirp(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function copyFile(src, dest) {
  mkdirp(path.dirname(dest));
  fs.copyFileSync(src, dest);
}

function patchRelativeAssets(text) {
  return text.replace(/\.\.\/assets\//g, 'assets/');
}

function cityTitle(city) {
  const planPath = path.join(root, 'data', `${city}.js`);
  const raw = fs.readFileSync(planPath, 'utf8');
  const m = raw.match(/"city"\s*:\s*"([^"]+)"/);
  return m ? m[1] : city;
}

function patchStandaloneAppJs(destPath, city) {
  let js = fs.readFileSync(destPath, 'utf8');
  const pdfPath = pdfPagePath(city);
  const replacement = `function pdfPageHref() {
    var lang = 'en';
    if (typeof I18n !== 'undefined' && typeof I18n.isAr === 'function') {
      lang = I18n.isAr() ? 'ar' : 'en';
    } else {
      lang = (typeof URLSearchParams !== 'undefined' ? new URLSearchParams(location.search).get('lang') : null) || 'ar';
    }
    return '${pdfPath}?lang=' + encodeURIComponent(lang);
  }`;
  js = js.replace(/function pdfPageHref\(\) \{[\s\S]*?\n  \}/, replacement);
  fs.writeFileSync(destPath, js);
}

function buildCityHtml(city, title) {
  const pdfPath = pdfPagePath(city);
  return `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
  <meta name="theme-color" content="#065f46">
  <meta name="description" content="${title} — travel guide">
  <title>${title}</title>
  <link rel="preconnect" href="https://upload.wikimedia.org">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="${FONT}" rel="stylesheet">
  <link rel="stylesheet" href="brand/discover.css?v=${V}">
  <link rel="stylesheet" href="assets/magazine.css?v=${V}">
  <style>
    .pdf-download {
      position: fixed;
      bottom: calc(12px + env(safe-area-inset-bottom, 0px));
      left: 12px;
      z-index: 9999;
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 10px 14px;
      border-radius: 999px;
      background: #065f46;
      color: #fff;
      font: 600 13px/1.2 system-ui, sans-serif;
      text-decoration: none;
      box-shadow: 0 4px 16px rgba(0,0,0,.25);
    }
    html[dir="rtl"] .pdf-download { left: auto; right: 12px; }
  </style>
</head>
<body>
  <a class="pdf-download" id="pdf-download" href="${pdfPath}?lang=ar">PDF · دليل</a>
  <div class="app" id="app"></div>
  <script>
    (function () {
      function guideLang() {
        if (window.I18n && typeof I18n.isAr === 'function') {
          return I18n.isAr() ? 'ar' : 'en';
        }
        return new URLSearchParams(location.search).get('lang') || 'ar';
      }
      function syncPdfDownload() {
        var url = '${pdfPath}?lang=' + encodeURIComponent(guideLang());
        var a = document.getElementById('pdf-download');
        if (a) a.href = url;
      }
      window.syncGuidePdfLink = syncPdfDownload;
      syncPdfDownload();
      document.addEventListener('click', function (e) {
        if (e.target.closest('#lang-toggle')) {
          setTimeout(syncPdfDownload, 0);
        }
      });
      if (!location.search.includes('lang=')) {
        var q = location.search ? location.search + '&lang=ar' : '?lang=ar';
        history.replaceState(null, '', location.pathname + q + location.hash);
      }
    })();
  </script>
  <script src="data/${city}.js?v=${V}"></script>
  <script src="data/${city}-ar.js?v=${V}"></script>
  <script src="brand/discover.js?v=${V}"></script>
  <script src="assets/i18n.js?v=${V}"></script>
  <script src="assets/shared.js?v=${V}"></script>
  <script src="assets/app.js?v=${V}"></script>
</body>
</html>
`;
}

function buildCityPdfHtml(city, title) {
  const base = `${city}`;
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
  <title>${title} — PDF</title>
  <link rel="preconnect" href="https://upload.wikimedia.org">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="${FONT_PDF}" rel="stylesheet">
  <link rel="stylesheet" href="${base}/brand/discover.css?v=${V}">
  <link rel="stylesheet" href="${base}/assets/pdf.css?v=${V}">
</head>
<body>
  <div id="root"></div>
  <script src="${base}/data/${city}.js?v=${V}"></script>
  <script src="${base}/data/${city}-ar.js?v=${V}"></script>
  <script src="${base}/brand/discover.js?v=${V}"></script>
  <script src="${base}/assets/i18n.js?v=${V}"></script>
  <script src="${base}/assets/shared.js?v=${V}"></script>
  <script src="${base}/assets/pdf-app.js?v=${V}"></script>
</body>
</html>
`;
}

rm(outRoot);
mkdirp(outRoot);
fs.writeFileSync(path.join(outRoot, '.nojekyll'), '');

const catalog = [];

for (const city of CITIES) {
  const { plan, planAr } = cityPaths(root, city);
  const siteDir = path.join(outRoot, city);
  const title = cityTitle(city);

  mkdirp(path.join(siteDir, 'assets'));
  mkdirp(path.join(siteDir, 'brand'));
  mkdirp(path.join(siteDir, 'data'));

  for (const f of GUIDE_ASSETS) {
    copyFile(path.join(root, 'assets', f), path.join(siteDir, 'assets', f));
  }
  for (const f of PDF_ASSETS) {
    copyFile(path.join(root, 'assets', f), path.join(siteDir, 'assets', f));
  }
  patchStandaloneAppJs(path.join(siteDir, 'assets', 'app.js'), city);
  for (const f of BRAND_FILES) {
    copyFile(path.join(root, 'brand', f), path.join(siteDir, 'brand', f));
  }

  let planJs = fs.readFileSync(plan, 'utf8');
  let planArJs = fs.readFileSync(planAr, 'utf8');
  if (city === 'trabzon') {
    planJs = patchRelativeAssets(planJs);
    planArJs = patchRelativeAssets(planArJs);
    copyFile(
      path.join(root, 'assets/hotels/zorlu-grand-hotel.png'),
      path.join(siteDir, 'assets/hotels/zorlu-grand-hotel.png')
    );
  }
  fs.writeFileSync(path.join(siteDir, 'data', `${city}.js`), planJs);
  fs.writeFileSync(path.join(siteDir, 'data', `${city}-ar.js`), planArJs);

  fs.writeFileSync(path.join(siteDir, 'index.html'), buildCityHtml(city, title));
  fs.writeFileSync(path.join(outRoot, `${city}-pdf.html`), buildCityPdfHtml(city, title));

  catalog.push({ city, title });
  console.log('published', city);
}

const catalogHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Guides — owner catalog</title>
  <style>
    body { font-family: system-ui, sans-serif; max-width: 480px; margin: 2rem auto; padding: 0 1rem; }
    h1 { font-size: 1.25rem; }
    p { color: #666; font-size: 0.9rem; }
    a { display: block; padding: 12px; margin: 8px 0; border: 1px solid #ddd; border-radius: 8px; text-decoration: none; color: #065f46; font-weight: 600; }
    a small { display: block; font-weight: 400; color: #888; margin-top: 4px; }
    .pdf-link { font-size: 0.85rem; margin: -4px 0 12px 12px; }
  </style>
</head>
<body>
  <h1>Guides — test links</h1>
  <p>HTML + PDF in same project. Share one city link when selling.</p>
${catalog
  .map(
    (c) =>
      `  <a href="./${c.city}/?lang=ar">${c.title}<small>/${c.city}/</small></a>\n  <p class="pdf-link"><a href="./${c.city}-pdf.html?lang=ar">PDF /${c.city}-pdf.html</a></p>`
  )
  .join('\n')}
</body>
</html>
`;

fs.writeFileSync(path.join(outRoot, 'index.html'), catalogHtml);
console.log('\nDone → /Guides/{city}/ + /Guides/{city}-pdf.html');
