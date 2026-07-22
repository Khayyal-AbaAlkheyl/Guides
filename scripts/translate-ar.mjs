/**
 * Translate all city PLAN files → data/{city}-ar.js
 *
 * Usage:
 *   node scripts/translate-ar.mjs --all
 *   node scripts/translate-ar.mjs london paris
 *   node scripts/translate-ar.mjs --all --static-only
 *   node scripts/translate-ar.mjs --all --gate-only
 *
 * Providers (first available):
 *   OPENAI_API_KEY  → OpenAI chat completions
 *   else            → google-translate-api-x (no key)
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { translate as gTranslate } from 'google-translate-api-x';
import {
  CITIES,
  STATIC_GLOSSARY,
  buildOverlay,
  cityPaths,
  collectStrings,
  coverageReport,
  isBadTranslation,
  loadPlan,
  mergeDictFiles,
  needsArabicScript
} from './lib/ar-plan.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dictPath = path.join(root, 'scripts', 'ar-dict.json');
const reportPath = path.join(root, 'scripts', 'ar-coverage-report.json');

const args = process.argv.slice(2);
const staticOnly = args.includes('--static-only');
const gateOnly = args.includes('--gate-only');
const all = args.includes('--all');
const cityArgs = args.filter((a) => !a.startsWith('--'));
const cities = all || cityArgs.length === 0 ? CITIES : cityArgs;

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

function loadDict() {
  let dict = {};
  if (fs.existsSync(dictPath)) {
    dict = JSON.parse(fs.readFileSync(dictPath, 'utf8'));
  }
  dict = mergeDictFiles(dict, [
    path.join(root, 'scripts', 'ar-extracted-pairs.json'),
    path.join(root, 'scripts', 'ar-manual-seed.json'),
    path.join(root, 'scripts', 'ar-static-seed.json')
  ]);
  return { ...dict, ...STATIC_GLOSSARY };
}

function saveDict(dict) {
  // Persist without re-writing STATIC_GLOSSARY noise preference — keep full dict
  fs.writeFileSync(dictPath, JSON.stringify(dict, null, 2), 'utf8');
}

function writePlanAr(city, planAr) {
  const outPath = cityPaths(root, city).planAr;
  const body = `/* Auto-generated — node scripts/translate-ar.mjs */\nconst PLAN_AR = ${JSON.stringify(planAr, null, 2)};\n`;
  fs.writeFileSync(outPath, body, 'utf8');
  return outPath;
}

async function translateOpenAI(batch) {
  const key = process.env.OPENAI_API_KEY;
  if (!key) return null;
  const model = process.env.OPENAI_TRANSLATE_MODEL || 'gpt-4o-mini';
  const res = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${key}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      model,
      temperature: 0.2,
      response_format: { type: 'json_object' },
      messages: [
        {
          role: 'system',
          content:
            'You translate English travel-guide strings to Arabic. Return JSON {"items":[{"en":"...","ar":"..."}]}. Translate place names (transliterate or use established Arabic forms). Keep URLs, numbers, currency symbols, times. Preserve line breaks. Do not invent content.'
        },
        {
          role: 'user',
          content: JSON.stringify({ items: batch.map((en) => ({ en })) })
        }
      ]
    })
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`OpenAI ${res.status}: ${text.slice(0, 200)}`);
  }
  const json = await res.json();
  const content = json.choices?.[0]?.message?.content || '{}';
  const parsed = JSON.parse(content);
  const map = {};
  for (const item of parsed.items || []) {
    if (item?.en && item?.ar && !isBadTranslation(item.ar)) map[item.en] = item.ar;
  }
  return map;
}

async function translateGoogle(batch) {
  const map = {};
  // API accepts arrays; chunk to avoid oversized requests
  const chunkSize = 40;
  for (let i = 0; i < batch.length; i += chunkSize) {
    const chunk = batch.slice(i, i + chunkSize);
    let attempt = 0;
    while (attempt < 4) {
      try {
        const result = await gTranslate(chunk, { from: 'en', to: 'ar', forceBatch: true });
        const arr = Array.isArray(result) ? result : [result];
        arr.forEach((r, idx) => {
          const en = chunk[idx];
          const ar = r?.text;
          if (en && ar && !isBadTranslation(ar)) map[en] = ar;
        });
        break;
      } catch (err) {
        attempt += 1;
        console.warn(`  google retry ${attempt} (${err.message || err})`);
        await sleep(800 * attempt);
      }
    }
    await sleep(350);
    if ((i + chunkSize) % 200 < chunkSize) {
      console.log(`  translated ${Math.min(i + chunkSize, batch.length)}/${batch.length}`);
    }
  }
  return map;
}

async function fillMissing(strings, dict) {
  const pending = strings.filter((s) => {
    const ar = dict[s];
    if (!ar || isBadTranslation(ar)) return true;
    if (needsArabicScript(s) && ar.trim() === s.trim()) return true;
    return false;
  });
  if (!pending.length) {
    console.log('All strings already in dictionary');
    return dict;
  }
  console.log(`Need translations: ${pending.length}`);
  if (staticOnly) {
    console.log('--static-only: not calling translation APIs');
    return dict;
  }

  const batchSize = process.env.OPENAI_API_KEY ? 60 : 40;
  for (let i = 0; i < pending.length; i += batchSize) {
    const batch = pending.slice(i, i + batchSize);
    let map = null;
    if (process.env.OPENAI_API_KEY) {
      try {
        map = await translateOpenAI(batch);
      } catch (err) {
        console.warn('OpenAI failed, falling back to Google:', err.message);
      }
    }
    if (!map) map = await translateGoogle(batch);
    Object.assign(dict, map);
    saveDict(dict);
    console.log(`  progress ${Math.min(i + batchSize, pending.length)}/${pending.length} (dict ${Object.keys(dict).length})`);
  }
  return dict;
}

function inventoryCities(dict) {
  const inventory = { cities: {}, uiNote: 'i18n.js UI.ar already present', pdfNote: 'pdf chrome keys in i18n' };
  for (const city of cities) {
    const plan = loadPlan(cityPaths(root, city).plan);
    const strings = [...collectStrings(plan)];
    inventory.cities[city] = {
      strings: strings.length,
      missingBefore: strings.filter((s) => !dict[s] || isBadTranslation(dict[s])).length
    };
  }
  fs.writeFileSync(
    path.join(root, 'scripts', 'ar-inventory.json'),
    JSON.stringify(inventory, null, 2),
    'utf8'
  );
  console.log('Wrote scripts/ar-inventory.json');
  return inventory;
}

async function main() {
  let dict = loadDict();
  console.log(`Dictionary entries: ${Object.keys(dict).length}`);
  console.log(`Cities: ${cities.join(', ')}`);

  const inventory = inventoryCities(dict);
  console.log('Inventory:', inventory.cities);

  if (gateOnly) {
    const report = {};
    let failed = false;
    for (const city of cities) {
      const plan = loadPlan(cityPaths(root, city).plan);
      const cov = coverageReport(plan, dict);
      report[city] = {
        total: cov.total,
        ok: cov.ok,
        missing: cov.missing.length,
        identical: cov.identical.length,
        pass: cov.pass,
        missingSample: cov.missing.slice(0, 20),
        identicalSample: cov.identical.slice(0, 20)
      };
      if (!cov.pass) failed = true;
      console.log(
        `${city}: ${cov.ok}/${cov.total} ok, missing=${cov.missing.length}, identical=${cov.identical.length} ${cov.pass ? 'PASS' : 'FAIL'}`
      );
    }
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2), 'utf8');
    if (failed) process.exit(1);
    return;
  }

  // Collect union of strings for selected cities
  const allStrings = new Set();
  const plans = {};
  for (const city of cities) {
    const plan = loadPlan(cityPaths(root, city).plan);
    plans[city] = plan;
    collectStrings(plan, allStrings);
  }

  dict = await fillMissing([...allStrings], dict);
  saveDict(dict);

  const report = {};
  let failed = false;
  for (const city of cities) {
    const plan = plans[city];
    const cov = coverageReport(plan, dict);
    const overlay = buildOverlay(plan, dict) || {};
    writePlanAr(city, overlay);
    report[city] = {
      total: cov.total,
      ok: cov.ok,
      missing: cov.missing.length,
      identical: cov.identical.length,
      pass: cov.pass,
      out: cityPaths(root, city).planAr,
      missingSample: cov.missing.slice(0, 15),
      identicalSample: cov.identical.slice(0, 15)
    };
    if (!cov.pass) failed = true;
    console.log(
      `${city}: wrote overlay — ${cov.ok}/${cov.total} ok, missing=${cov.missing.length}, identical=${cov.identical.length} ${cov.pass ? 'PASS' : 'FAIL'}`
    );
  }

  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2), 'utf8');
  console.log('Wrote', reportPath);
  if (failed) {
    console.error('Coverage gate FAILED — fix missing/identical strings and re-run');
    process.exit(1);
  }
  console.log('Coverage gate PASSED for all selected cities');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
