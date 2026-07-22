/**
 * Build standalone publish folders — opaque token URLs + owner catalog.
 * Sell links (share one per customer):
 *   /Guides/g/{token}/?lang=ar
 *   /Guides/g/{token}/pdf.html?lang=ar
 *
 * Owner catalog (password + obscure path):
 *   /Guides/_o{hash10}/
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { CITIES, cityPaths } from './lib/ar-plan.mjs';
import {
  cityToken,
  ensureSecretFile,
  ownerCatalogDir,
  passwordSha256
} from './lib/tokens.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const outRoot = path.join(root, 'docs');
const V = '20260722v';

const GUIDE_ASSETS = ['app.js', 'magazine.css', 'i18n.js', 'shared.js'];
const PDF_ASSETS = ['pdf.css', 'pdf-app.js'];
const BRAND_FILES = ['discover.css', 'discover.js'];
const FONT =
  'https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700&family=Fraunces:opsz,wght@9..144,600;9..144,700&family=Noto+Sans+Arabic:wght@400;500;600;700&display=swap';
const FONT_PDF =
  'https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Fraunces:wght@600;700&family=Noto+Sans+Arabic:wght@400;500;600;700&display=swap';

const secretCfg = ensureSecretFile(root);
const SECRET = secretCfg.SECRET;
const OWNER_PASSWORD = secretCfg.OWNER_PASSWORD;
const OWNER_DIR = ownerCatalogDir(SECRET);
const PASS_HASH = passwordSha256(OWNER_PASSWORD);
const LIVE_BASE = 'https://khayyal-abaalkheyl.github.io/Guides/';

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

function patchStandaloneAppJs(destPath) {
  let js = fs.readFileSync(destPath, 'utf8');
  const replacement = `function pdfPageHref() {
    var lang = 'en';
    if (typeof I18n !== 'undefined' && typeof I18n.isAr === 'function') {
      lang = I18n.isAr() ? 'ar' : 'en';
    } else {
      lang = (typeof URLSearchParams !== 'undefined' ? new URLSearchParams(location.search).get('lang') : null) || 'ar';
    }
    return 'pdf.html?lang=' + encodeURIComponent(lang);
  }`;
  js = js.replace(/function pdfPageHref\(\) \{[\s\S]*?\n  \}/, replacement);
  fs.writeFileSync(destPath, js);
}

function buildCityHtml(city, title) {
  return `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
  <meta name="theme-color" content="#065f46">
  <meta name="robots" content="noindex, nofollow">
  <meta name="description" content="${title} — travel guide">
  <title>${title}</title>
  <link rel="preconnect" href="https://upload.wikimedia.org">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="${FONT}" rel="stylesheet">
  <link rel="stylesheet" href="brand/discover.css?v=${V}">
  <link rel="stylesheet" href="assets/magazine.css?v=${V}">
</head>
<body>
  <div class="app" id="app"></div>
  <script>
    (function () {
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
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
  <meta name="robots" content="noindex, nofollow">
  <title>${title} — PDF</title>
  <link rel="preconnect" href="https://upload.wikimedia.org">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="${FONT_PDF}" rel="stylesheet">
  <link rel="stylesheet" href="brand/discover.css?v=${V}">
  <link rel="stylesheet" href="assets/pdf.css?v=${V}">
</head>
<body>
  <div id="root"></div>
  <script src="data/${city}.js?v=${V}"></script>
  <script src="data/${city}-ar.js?v=${V}"></script>
  <script src="brand/discover.js?v=${V}"></script>
  <script src="assets/i18n.js?v=${V}"></script>
  <script src="assets/shared.js?v=${V}"></script>
  <script src="assets/pdf-app.js?v=${V}"></script>
</body>
</html>
`;
}

function buildOwnerCatalogHtml(entries) {
  const rows = entries
    .map(
      (e) => `
    <article class="city">
      <h2>${e.title}</h2>
      <p class="meta">${e.city} · token <code>${e.token}</code></p>
      <div class="links">
        <label>Guide (share this)
          <div class="row"><input readonly value="${e.guideUrl}"><button type="button" class="copy">Copy</button></div>
        </label>
        <label>PDF
          <div class="row"><input readonly value="${e.pdfUrl}"><button type="button" class="copy">Copy</button></div>
        </label>
      </div>
    </article>`
    )
    .join('\n');

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="robots" content="noindex, nofollow">
  <title>Owner catalog</title>
  <style>
    * { box-sizing: border-box; }
    body { font-family: system-ui, sans-serif; margin: 0; background: #f4f6f5; color: #111; }
    .gate, .catalog { max-width: 720px; margin: 0 auto; padding: 2rem 1rem 3rem; }
    .gate { min-height: 100vh; display: flex; flex-direction: column; justify-content: center; }
    .card { background: #fff; border: 1px solid #ddd; border-radius: 12px; padding: 1.25rem; box-shadow: 0 8px 24px rgba(0,0,0,.06); }
    h1 { font-size: 1.35rem; margin: 0 0 .5rem; }
    p { color: #555; line-height: 1.5; }
    input[type="password"], input[readonly] { width: 100%; padding: 10px 12px; border: 1px solid #ccc; border-radius: 8px; font: inherit; }
    button { padding: 10px 14px; border: 0; border-radius: 8px; background: #065f46; color: #fff; font: 600 14px system-ui, sans-serif; cursor: pointer; white-space: nowrap; }
    button.secondary { background: #e5e7eb; color: #111; }
    .err { color: #b91c1c; min-height: 1.25rem; margin-top: .5rem; font-size: .9rem; }
    .city { background: #fff; border: 1px solid #ddd; border-radius: 12px; padding: 1rem 1.1rem; margin: 1rem 0; }
    .city h2 { margin: 0 0 .35rem; font-size: 1.1rem; }
    .meta { margin: 0 0 .75rem; font-size: .85rem; color: #666; }
    .meta code { font-size: .8rem; background: #f3f4f6; padding: 2px 6px; border-radius: 4px; }
    label { display: block; font-size: .85rem; font-weight: 600; margin: .65rem 0 .35rem; color: #333; }
    .row { display: flex; gap: 8px; align-items: center; }
    .row input { flex: 1; font-size: .82rem; }
    .toolbar { display: flex; gap: 8px; flex-wrap: wrap; margin: 1rem 0; }
    .hidden { display: none !important; }
  </style>
</head>
<body>
  <div id="gate" class="gate">
    <div class="card">
      <h1>Owner catalog</h1>
      <p>All cities and sell links. This page is not linked from the public site.</p>
      <form id="login">
        <label for="pass">Password</label>
        <input id="pass" type="password" autocomplete="current-password" required>
        <p class="err" id="err"></p>
        <p style="margin-top:1rem"><button type="submit">Unlock</button></p>
      </form>
    </div>
  </div>
  <div id="catalog" class="catalog hidden">
    <div class="card">
      <h1>All guides</h1>
      <p>Copy one guide link per sale. URLs use random tokens — buyers cannot swap city names.</p>
      <div class="toolbar">
        <button type="button" id="lock" class="secondary">Lock</button>
      </div>
    </div>
${rows}
  </div>
  <script>
    var PASS_HASH = '${PASS_HASH}';
    var SESSION_KEY = 'guides-owner-${OWNER_DIR}';

    async function sha256(text) {
      var buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(text));
      return Array.from(new Uint8Array(buf)).map(function (b) { return b.toString(16).padStart(2, '0'); }).join('');
    }

    function showCatalog() {
      document.getElementById('gate').classList.add('hidden');
      document.getElementById('catalog').classList.remove('hidden');
      sessionStorage.setItem(SESSION_KEY, '1');
    }

    function lockCatalog() {
      sessionStorage.removeItem(SESSION_KEY);
      document.getElementById('catalog').classList.add('hidden');
      document.getElementById('gate').classList.remove('hidden');
      document.getElementById('pass').value = '';
    }

    document.getElementById('login').addEventListener('submit', async function (e) {
      e.preventDefault();
      var pass = document.getElementById('pass').value;
      var hash = await sha256(pass);
      if (hash !== PASS_HASH) {
        document.getElementById('err').textContent = 'Wrong password';
        return;
      }
      document.getElementById('err').textContent = '';
      showCatalog();
    });

    document.getElementById('lock').addEventListener('click', lockCatalog);

    if (sessionStorage.getItem(SESSION_KEY) === '1') {
      showCatalog();
    }

    document.getElementById('catalog').addEventListener('click', function (e) {
      var btn = e.target.closest('.copy');
      if (!btn) return;
      var input = btn.closest('.row').querySelector('input');
      navigator.clipboard.writeText(input.value).then(function () {
        var old = btn.textContent;
        btn.textContent = 'Copied';
        setTimeout(function () { btn.textContent = old; }, 1200);
      });
    });
  </script>
</body>
</html>
`;
}

function buildPublicIndexHtml() {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="robots" content="noindex, nofollow">
  <title>Guides</title>
</head>
<body>
  <p>Not found.</p>
</body>
</html>
`;
}

rm(outRoot);
mkdirp(outRoot);
mkdirp(path.join(outRoot, 'g'));
fs.writeFileSync(path.join(outRoot, '.nojekyll'), '');

const catalog = [];
const tokenMap = [];

for (const city of CITIES) {
  const { plan, planAr } = cityPaths(root, city);
  const token = cityToken(SECRET, city);
  const siteDir = path.join(outRoot, 'g', token);
  const title = cityTitle(city);
  const guidePath = `g/${token}/`;
  const pdfPath = `g/${token}/pdf.html`;

  mkdirp(path.join(siteDir, 'assets'));
  mkdirp(path.join(siteDir, 'brand'));
  mkdirp(path.join(siteDir, 'data'));

  for (const f of GUIDE_ASSETS) {
    copyFile(path.join(root, 'assets', f), path.join(siteDir, 'assets', f));
  }
  for (const f of PDF_ASSETS) {
    copyFile(path.join(root, 'assets', f), path.join(siteDir, 'assets', f));
  }
  patchStandaloneAppJs(path.join(siteDir, 'assets', 'app.js'));
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
  fs.writeFileSync(path.join(siteDir, 'pdf.html'), buildCityPdfHtml(city, title));

  const entry = {
    city,
    title,
    token,
    guidePath,
    pdfPath,
    guideUrl: `${LIVE_BASE}${guidePath}?lang=ar`,
    pdfUrl: `${LIVE_BASE}${pdfPath}?lang=ar`
  };
  catalog.push(entry);
  tokenMap.push(entry);
  console.log('published', city, '→', token);
}

const ownerDir = path.join(outRoot, OWNER_DIR);
mkdirp(ownerDir);
fs.writeFileSync(path.join(ownerDir, 'index.html'), buildOwnerCatalogHtml(catalog));
fs.writeFileSync(path.join(outRoot, 'index.html'), buildPublicIndexHtml());

const localManifest = {
  generatedAt: new Date().toISOString(),
  ownerPath: `${OWNER_DIR}/`,
  ownerPassword: OWNER_PASSWORD,
  liveBase: 'https://khayyal-abaalkheyl.github.io/Guides/',
  cities: tokenMap.map((e) => ({
    city: e.city,
    title: e.title,
    token: e.token,
    guide: `${e.guidePath}?lang=ar`,
    pdf: `${e.pdfPath}?lang=ar`
  }))
};
fs.writeFileSync(path.join(root, 'tokens.local.json'), JSON.stringify(localManifest, null, 2));

console.log('\nDone.');
console.log('Sell link pattern: /Guides/g/{token}/?lang=ar');
console.log('Owner catalog:     /Guides/' + OWNER_DIR + '/');
console.log('Owner password:    (see publish-secret.txt or tokens.local.json)');
console.log('Local manifest:    tokens.local.json');
