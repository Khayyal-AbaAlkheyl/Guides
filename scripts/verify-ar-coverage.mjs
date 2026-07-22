/**
 * Hard coverage gate + zero-English chrome check for Arabic overlays.
 * Run: node scripts/verify-ar-coverage.mjs
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import {
  CITIES,
  cityPaths,
  coverageReport,
  loadPlan,
  mergeDictFiles,
  STATIC_GLOSSARY
} from './lib/ar-plan.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dictPath = path.join(root, 'scripts', 'ar-dict.json');
const reportPath = path.join(root, 'scripts', 'ar-coverage-report.json');

const ENGLISH_CHROME_DENY = [
  'Welcome',
  'Essentials',
  'Sights',
  'Hotels',
  'Dining',
  'Transport',
  'Emergency',
  'Cheat sheet',
  'From the Editor',
  'Must-See',
  'Where to Stay',
  'Where to Eat',
  'Your Itinerary',
  'Crowd levels',
  'Open map',
  'Scan for map',
  'Photo spot',
  'Travel Guide'
];

function loadDict() {
  let dict = fs.existsSync(dictPath) ? JSON.parse(fs.readFileSync(dictPath, 'utf8')) : {};
  dict = mergeDictFiles(dict, [
    path.join(root, 'scripts', 'ar-extracted-pairs.json'),
    path.join(root, 'scripts', 'ar-manual-seed.json'),
    path.join(root, 'scripts', 'ar-static-seed.json')
  ]);
  return { ...dict, ...STATIC_GLOSSARY };
}

function checkShell(city) {
  const { html, pdfHtml, planAr } = cityPaths(root, city);
  const issues = [];
  for (const file of [html, pdfHtml]) {
    if (!fs.existsSync(file)) {
      issues.push(`missing ${path.relative(root, file)}`);
      continue;
    }
    const src = fs.readFileSync(file, 'utf8');
    if (!src.includes(`${city}-ar.js`)) issues.push(`${path.basename(file)} missing ${city}-ar.js`);
    if (!src.includes('i18n.js')) issues.push(`${path.basename(file)} missing i18n.js`);
    if (!src.includes('Noto+Sans+Arabic')) issues.push(`${path.basename(file)} missing Noto Arabic font`);
  }
  if (!fs.existsSync(planAr)) issues.push(`missing data/${city}-ar.js`);
  const pdfAr = path.join(root, 'cities', `${city}-ar.pdf`);
  if (!fs.existsSync(pdfAr)) {
    issues.push(`missing cities/${city}-ar.pdf`);
  } else if (fs.statSync(pdfAr).size < 50_000) {
    issues.push(`cities/${city}-ar.pdf too small (${fs.statSync(pdfAr).size} bytes)`);
  }
  return issues;
}

function checkI18nPdfKeys() {
  const src = fs.readFileSync(path.join(root, 'assets/i18n.js'), 'utf8');
  const issues = [];
  // Extract en/ar key sets roughly
  const enBlock = src.match(/en:\s*\{([\s\S]*?)\n\s*\},\s*ar:/)?.[1] || '';
  const arBlock = src.match(/ar:\s*\{([\s\S]*?)\n\s*\}\s*\n\s*\};/)?.[1] || '';
  const enKeys = [...enBlock.matchAll(/^\s*([a-zA-Z0-9_]+):/gm)].map((m) => m[1]);
  const arKeys = new Set([...arBlock.matchAll(/^\s*([a-zA-Z0-9_]+):/gm)].map((m) => m[1]));
  for (const k of enKeys) {
    if (!arKeys.has(k)) issues.push(`i18n missing AR key: ${k}`);
  }
  // London-hardcoded welcome should be gone
  if (src.includes('Your pocket companion to London')) {
    issues.push('i18n still hardcodes London in homeWelcomeSub');
  }
  return issues;
}

function checkPdfAppHardcoded() {
  const src = fs.readFileSync(path.join(root, 'assets/pdf-app.js'), 'utf8');
  const hits = [];
  for (const word of ENGLISH_CHROME_DENY) {
    // ignore comments
    const re = new RegExp(`['"]${word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}['"]`);
    if (re.test(src)) hits.push(word);
  }
  return hits;
}

const dict = loadDict();
const report = { cities: {}, shells: {}, i18n: [], pdfHardcoded: [], pass: true };

const i18nIssues = checkI18nPdfKeys();
report.i18n = i18nIssues;
if (i18nIssues.length) report.pass = false;

const pdfHits = checkPdfAppHardcoded();
report.pdfHardcoded = pdfHits;
if (pdfHits.length) report.pass = false;

for (const city of CITIES) {
  const plan = loadPlan(cityPaths(root, city).plan);
  const cov = coverageReport(plan, dict);
  const shellIssues = checkShell(city);
  report.cities[city] = {
    total: cov.total,
    ok: cov.ok,
    missing: cov.missing.length,
    identical: cov.identical.length,
    coveragePass: cov.pass,
    shellIssues,
    missingSample: cov.missing.slice(0, 10),
    identicalSample: cov.identical.slice(0, 10)
  };
  report.shells[city] = shellIssues;
  if (!cov.pass || shellIssues.length) report.pass = false;
  console.log(
    `${city}: ${cov.ok}/${cov.total} ` +
      `${cov.pass ? 'COV_OK' : 'COV_FAIL'} ` +
      `shell=${shellIssues.length ? 'FAIL' : 'OK'}`
  );
}

if (i18nIssues.length) console.log('i18n issues:', i18nIssues);
if (pdfHits.length) console.log('pdf hardcoded English leftovers:', pdfHits);

fs.writeFileSync(reportPath, JSON.stringify(report, null, 2), 'utf8');
console.log('Wrote', reportPath);
if (!report.pass) {
  console.error('verify:ar FAILED');
  process.exit(1);
}
console.log('verify:ar PASSED');
