/**
 * Builds data/london-ar.js from PLAN + Arabic overlay maps.
 * Run: node scripts/build-london-ar.mjs
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { AR_OVERLAY } from './ar-overlay.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const plan = new Function(fs.readFileSync(path.join(root, 'data/london.js'), 'utf8') + '; return PLAN;')();

const NAME_KEYS = new Set(['name', 'country', 'city', 'lat', 'lng', 'mapUrl', 'bookUrl', 'img', 'hero', 'detail', 'photoSpot', 'map', 'exterior', 'room', 'restaurant', 'view', 'signature', 'photos', 'seasonalPhotos', 'instagram', 'crowd', 'nearby', 'topQrCodes', 'markers', 'rows', 'brands', 'items', 'modes', 'numbers', 'hospitals', 'embassies', 'districts', 'stops', 'photos', 'icon', 'type', 'lat', 'lng', 'googleRating', 'rating', 'price', 'ticket', 'waitSummer', 'waitWinter', 'avgVisit', 'michelin', 'wait', 'tube', 'address', 'step']);

function mergeItem(enItem, arItem, keepNames = true) {
  if (!arItem) return undefined;
  const out = {};
  for (const [k, v] of Object.entries(arItem)) {
    if (keepNames && k === 'name') continue;
    out[k] = v;
  }
  return Object.keys(out).length ? out : undefined;
}

function buildSection(list, arList) {
  if (!list?.length) return undefined;
  const out = list.map((item, i) => mergeItem(item, arList?.[i])).filter(Boolean);
  return out.length ? out : undefined;
}

function buildItineraries(planDays, arDays) {
  if (!planDays?.length || !arDays?.length) return undefined;
  return planDays.map((day, di) => {
    const arDay = arDays[di];
    if (!arDay) return undefined;
    const row = {};
    if (arDay.title) row.title = arDay.title;
    if (arDay.routePreview) row.routePreview = arDay.routePreview;
    if (arDay.stops?.length) {
      row.stops = day.stops.map((stop, si) => {
        const arStop = arDay.stops[si];
        if (!arStop) return undefined;
        const s = {};
        if (arStop.desc) s.desc = arStop.desc;
        if (arStop.transit) s.transit = arStop.transit;
        return Object.keys(s).length ? s : undefined;
      }).filter(Boolean);
      if (!row.stops.length) delete row.stops;
    }
    return Object.keys(row).length ? row : undefined;
  }).filter(Boolean);
}

const PLAN_AR = {
  meta: AR_OVERLAY.meta,
  welcome: AR_OVERLAY.welcome,
  essentials: AR_OVERLAY.essentials,
  arrival: AR_OVERLAY.arrival,
  packing: AR_OVERLAY.packing,
  weatherTable: AR_OVERLAY.weatherTable,
  attractions: buildSection(plan.attractions, AR_OVERLAY.attractions),
  hotels: buildSection(plan.hotels, AR_OVERLAY.hotels),
  dining: buildSection(plan.dining, AR_OVERLAY.dining),
  itineraries: buildItineraries(plan.itineraries, AR_OVERLAY.itineraries),
  transport: AR_OVERLAY.transport,
  maps: AR_OVERLAY.maps,
  warnings: AR_OVERLAY.warnings,
  family: AR_OVERLAY.family,
  emergency: AR_OVERLAY.emergency,
  phrases: AR_OVERLAY.phrases,
  etiquette: AR_OVERLAY.etiquette,
  hiddenGems: buildSection(plan.hiddenGems, AR_OVERLAY.hiddenGems),
  shopping: AR_OVERLAY.shopping,
  cheatSheet: AR_OVERLAY.cheatSheet,
  budget: AR_OVERLAY.budget,
  rainyDay: buildSection(plan.rainyDay, AR_OVERLAY.rainyDay),
  sunnyDay: buildSection(plan.sunnyDay, AR_OVERLAY.sunnyDay)
};

// strip undefined top-level keys
for (const k of Object.keys(PLAN_AR)) {
  if (PLAN_AR[k] == null) delete PLAN_AR[k];
}

const out = `/* Auto-generated — node scripts/build-london-ar.mjs */\nconst PLAN_AR = ${JSON.stringify(PLAN_AR, null, 2)};\n`;
fs.writeFileSync(path.join(root, 'data/london-ar.js'), out, 'utf8');
console.log('Wrote data/london-ar.js');
