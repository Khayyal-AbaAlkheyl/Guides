/*
  DISCOVER brand — apply to any city PLAN
  Sets title, theme CSS vars, and meta theme-color
*/
(function (global) {
  'use strict';

  function metaOf(plan) {
    return plan?.meta || plan;
  }

  function themeOf(plan) {
    return metaOf(plan).theme || plan.theme || {};
  }

  function apply(plan) {
    if (!plan) return;
    const meta = metaOf(plan);
    const t = themeOf(plan);
    const root = document.documentElement;

    const set = (name, val) => { if (val) root.style.setProperty(name, val); };
    set('--accent', t.accent);
    set('--accent-soft', t.accentSoft);
    set('--accent-deep', t.accentDeep);
    set('--tube', t.tube);
    set('--parks', t.parks);
    set('--river', t.river);
    set('--gold', t.gold || '#b8860b');
    set('--navy', t.navy || '#1a2744');
    if (t.transitLabel) set('--transit-label', `"${t.transitLabel}"`);

    if (t.heroImage) {
      root.style.setProperty('--hero-image', `url('${t.heroImage}')`);
    }

    if (global.applyTheme) global.applyTheme(plan);

    const city = meta.city || 'City';
    const edition = meta.edition || '2026';
    document.title = `Discover ${city} · ${edition}`;

    const themeColor = document.querySelector('meta[name="theme-color"]');
    if (themeColor && t.accentDeep) {
      themeColor.setAttribute('content', t.accentDeep);
    }
  }

  global.DiscoverBrand = { apply, metaOf, themeOf };
})(typeof window !== 'undefined' ? window : globalThis);
