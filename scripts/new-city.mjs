import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const slug = process.argv[2];

if (!slug) {
  console.error('Usage: node scripts/new-city.mjs <city-key>');
  console.error('Example: node scripts/new-city.mjs newYork');
  console.error('Keys in themes/cities.json:', Object.keys(JSON.parse(fs.readFileSync(path.join(root, 'themes/cities.json'), 'utf8'))).join(', '));
  process.exit(1);
}

const themes = JSON.parse(fs.readFileSync(path.join(root, 'themes/cities.json'), 'utf8'));
const theme = themes[slug];

if (!theme) {
  console.error(`Unknown city key: ${slug}`);
  process.exit(1);
}

const fileSlug = slug.replace(/([A-Z])/g, '-$1').toLowerCase().replace(/^-/, '');
const dataPath = path.join(root, 'data', `${fileSlug}.js`);
const htmlPath = path.join(root, 'cities', `${fileSlug}.html`);
const pdfHtmlPath = path.join(root, 'cities', `${fileSlug}-pdf.html`);

const template = fs.readFileSync(path.join(root, 'data/city-template.js'), 'utf8');
const planBlock = template
  .replace(/city: 'City Name'/, `city: '${theme.city}'`)
  .replace(/country: 'Country'/, `country: '${theme.country}'`)
  .replace(/transitLabel: 'Metro'/, `transitLabel: '${theme.transitLabel}'`)
  .replace(/accent: '#c41e3a'/, `accent: '${theme.accent}'`)
  .replace(/accentSoft: '#fde8ec'/, `accentSoft: '${theme.accentSoft}'`)
  .replace(/accentDeep: '#8b1429'/, `accentDeep: '${theme.accentDeep}'`)
  .replace(/tube: '#0019A8'/, `tube: '${theme.tube}'`)
  .replace(/heroImage: ''/, `heroImage: '${theme.heroImage}'`);

fs.writeFileSync(dataPath, planBlock);

const htmlShell = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
  <meta name="theme-color" content="${theme.accentDeep}">
  <title>Discover ${theme.city}</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700&family=Fraunces:opsz,wght@9..144,600;9..144,700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="../brand/discover.css">
  <link rel="stylesheet" href="../assets/magazine.css">
</head>
<body>
  <a class="pdf-fab" href="${fileSlug}-pdf.html" target="_blank" rel="noopener">PDF</a>
  <div class="app" id="app"></div>
  <script src="../data/${fileSlug}.js"></script>
  <script src="../brand/discover.js"></script>
  <script src="../assets/shared.js"></script>
  <script src="../assets/app.js"></script>
</body>
</html>
`;

const pdfShell = htmlShell
  .replace('viewport-fit=cover', '')
  .replace('../assets/magazine.css', '../assets/pdf.css')
  .replace('<div class="app" id="app"></div>', '<div id="root"></div>')
  .replace('assets/app.js', 'assets/pdf-app.js')
  .replace(`pdf-fab" href="${fileSlug}-pdf.html"`, 'pdf-fab hidden" href="#"')
  .replace(`<title>Discover ${theme.city}</title>`, `<title>Discover ${theme.city} — PDF</title>`);

fs.writeFileSync(htmlPath, htmlShell);
fs.writeFileSync(pdfHtmlPath, pdfShell.replace('class="pdf-fab hidden"', 'style="display:none"'));

console.log('Created:');
console.log(' ', path.relative(root, dataPath));
console.log(' ', path.relative(root, htmlPath));
console.log(' ', path.relative(root, pdfHtmlPath));
console.log('');
console.log('Next: fill attractions, hotels, dining in', path.relative(root, dataPath));
