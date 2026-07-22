/*
  Travel Guide — shared utilities for app and PDF
  Depends on global PLAN for getCoords()
*/

(function (global) {
  'use strict';

  const ICONS = {
    pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg>',
    ticket: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/><path d="M13 5v2"/><path d="M13 17v2"/><path d="M13 11v2"/></svg>',
    map: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"/><path d="M15 5.764v15"/><path d="M9 3.236v15"/></svg>',
    camera: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/></svg>',
    bed: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 4v16"/><path d="M2 8h18a2 2 0 0 1 2 2v10"/><path d="M2 17h20"/><path d="M6 8v9"/></svg>',
    utensils: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"/></svg>',
    home: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>',
    more: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>',
    walk: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="5" r="1"/><path d="m9 20 3-6 3 2v4"/><path d="m9 8 2 2 1-4 2 2"/></svg>',
    train: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="16" x="4" y="3" rx="2"/><path d="M4 11h16"/><path d="M12 3v8"/><path d="m8 19-2 3"/><path d="m18 22-2-3"/><path d="M8 15h.01"/><path d="M16 15h.01"/></svg>',
    lightbulb: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>',
    key: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21 2-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0 3 3L22 7l-3-3m-3.5 3.5L19 4"/></svg>',
    instagram: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>',
    emergency: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="M12 8v4"/><path d="M12 16h.01"/></svg>',
    medical: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 2v2"/><path d="M5 2v2"/><path d="M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1"/><path d="M8 15a6 6 0 0 0 12 0v-3"/><circle cx="20" cy="10" r="2"/></svg>',
    police: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="M12 8v4"/><path d="M12 16h.01"/></svg>',
    passport: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><circle cx="12" cy="10" r="3"/><path d="M7 21v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2"/></svg>',
    hospital: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 6v4"/><path d="M14 14h-4"/><path d="M14 18h-4"/><path d="M14 8h-4"/><path d="M18 12h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h2"/><path d="M18 22V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v18"/></svg>',
    embassy: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21h18"/><path d="M6 21V7"/><path d="M18 21V7"/><path d="M6 7h12L12 3 6 7Z"/></svg>',
    tube: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="16" x="4" y="3" rx="2"/><path d="M4 11h16"/><path d="M12 3v8"/></svg>',
    bus: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 6v6"/><path d="M15 6v6"/><path d="M2 12h19.6"/><path d="M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2L21 9l-2.8-5.2C17.9 3.2 17.4 3 17 3H3c-.4 0-.9.2-1.2.8L0 9l1.8 3.8c.1.4.2.8.2 1.2 0 .4-.1.8-.2 1.2L0 18h3"/><circle cx="7" cy="18" r="2"/><circle cx="17" cy="18" r="2"/></svg>',
    boat: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/><path d="M19.38 20A11.6 11.6 0 0 0 21 14l-9-4-9 4c0 2.9.94 5.34 2.81 7.12"/><path d="M12 2v8"/></svg>',
    bike: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18.5" cy="17.5" r="3.5"/><circle cx="5.5" cy="17.5" r="3.5"/><circle cx="15" cy="5" r="1"/><path d="M12 17.5V14l-3-3 4-3 2 3h2"/></svg>',
    cab: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/></svg>',
    uber: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v8"/><path d="M8 12h8"/></svg>',
    elizabeth: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="16" x="4" y="3" rx="2"/><path d="M4 11h16"/><path d="M12 3v8"/><path d="m8 19-2 3"/><path d="m18 22-2-3"/></svg>',
    currency: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 0 1 0 4H8"/><path d="M12 18V6"/></svg>',
    plug: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22v-5"/><path d="M9 8V2"/><path d="M15 8V2"/><path d="M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z"/></svg>',
    sim: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="20" x="5" y="2" rx="2"/><path d="M12 18h.01"/><path d="M9 8h6"/></svg>',
    language: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m5 8 6 6"/><path d="m4 14 6-6 2-3"/><path d="M2 5h12"/><path d="M7 2h1"/><path d="m22 22-5-10-5 10"/><path d="M14 18h6"/></svg>',
    card: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>',
    droplet: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"/></svg>',
    clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>'
  };

  function themeOf(plan) {
    return plan?.meta?.theme || plan?.theme || {};
  }

  function applyTheme(plan) {
    const t = themeOf(plan);
    const root = document.documentElement;
    const set = (name, val) => { if (val) root.style.setProperty(name, val); };

    set('--accent', t.accent);
    set('--accent-soft', t.accentSoft);
    set('--accent-deep', t.accentDeep);
    set('--tube', t.tube);
    set('--parks', t.parks);
    set('--river', t.river);
    set('--gold', t.gold);
    set('--navy', t.navy);

    if (t.heroImage) {
      root.style.setProperty('--hero-image', `url('${normalizeImageUrl(t.heroImage, 800)}')`);
    }

    const meta = plan?.meta || plan;
    if (meta?.city) {
      document.title = `${meta.city} — Travel Guide`;
    }
    if (t.accentDeep) {
      const themeColor = document.querySelector('meta[name="theme-color"]');
      if (themeColor) themeColor.setAttribute('content', t.accentDeep);
    }
  }

  function esc(str) {
    if (str == null) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function qr(url, size) {
    const s = size || 100;
    const data = encodeURIComponent(url || '');
    return `https://api.qrserver.com/v1/create-qr-code/?size=${s}x${s}&data=${data}&margin=4`;
  }

  function qrImg(url, size, alt) {
    const s = size || 100;
    if (!url) return '';
    return `<img src="${esc(qr(url, s))}" width="${s}" height="${s}" alt="${esc(alt || 'QR code')}" decoding="async">`;
  }

  function stars(n) {
    const count = Math.max(0, Math.min(5, Math.round(Number(n) || 0)));
    let html = '<span class="star-bar" aria-label="' + count + ' out of 5">';
    for (let i = 1; i <= 5; i++) {
      const filled = i <= count;
      html += filled
        ? '<span class="star-bar__full">★</span>'
        : '<span class="star-bar__empty">★</span>';
    }
    html += '</span>';
    return html;
  }

  function staticMap(lat, lng, w, h) {
    const width = w || 400;
    const height = h || 200;
    const la = Number(lat);
    const ln = Number(lng);
    if (!Number.isFinite(la) || !Number.isFinite(ln)) return '';
    return `https://staticmap.openstreetmap.de/staticmap.php?center=${la},${ln}&zoom=15&size=${width}x${height}&markers=${la},${ln},red`;
  }

  function normalize(str) {
    return String(str || '')
      .toLowerCase()
      .replace(/[^a-z0-9\s]/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
  }

  function scoreMatch(query, candidate) {
    const q = normalize(query);
    const c = normalize(candidate);
    if (!q || !c) return 0;
    if (c === q) return 100;
    if (c.includes(q) || q.includes(c)) return 80;
    const qParts = q.split(' ');
    const hits = qParts.filter(p => p.length > 2 && c.includes(p)).length;
    return hits * 20;
  }

  function getCoords(name) {
    const plan = global.PLAN;
    const markers = plan?.maps?.overview?.markers || [];
    if (!name || !markers.length) return null;

    let best = null;
    let bestScore = 0;

    for (const m of markers) {
      const s = scoreMatch(name, m.name);
      if (s > bestScore) {
        bestScore = s;
        best = m;
      }
    }

    return bestScore >= 20 && best ? { lat: best.lat, lng: best.lng, name: best.name } : null;
  }

  function caption(text, credit) {
    const t = esc(text);
    const c = credit ? esc(credit) : '';
    if (!t && !c) return '';
    return `<figcaption class="photo-caption">${t ? `<strong>${t}</strong>` : ''}${c ? `<span class="photo-caption__credit">${c}</span>` : ''}</figcaption>`;
  }

  function timeClass(timeOfDay) {
    const map = {
      morning: 'stop__card--morning',
      afternoon: 'stop__card--afternoon',
      evening: 'stop__card--evening',
      night: 'stop__card--night'
    };
    return map[String(timeOfDay || '').toLowerCase()] || 'stop__card--afternoon';
  }

  function actionButtons(mapUrl, bookUrl, bookText) {
    const mapLabel = global.I18n ? global.I18n.t('map', 'Map') : 'Map';
    const bookLabel = bookText || (global.I18n ? global.I18n.t('book', 'Book') : 'Book');
    const map = mapUrl
      ? `<a class="btn btn--ghost" href="${esc(mapUrl)}" target="_blank" rel="noopener">${iconWrap('pin')} ${esc(mapLabel)}</a>`
      : '';
    const book = bookUrl
      ? `<a class="btn btn--primary" href="${esc(bookUrl)}" target="_blank" rel="noopener">${iconWrap('ticket')} ${esc(bookLabel)}</a>`
      : '';
    if (!map && !book) return '';
    return `<div class="btn-row">${map}${book}</div>`;
  }

  function icon(name) {
    return ICONS[name] || ICONS.pin;
  }

  function iconWrap(name) {
    return `<span class="icon-wrap" aria-hidden="true">${icon(name)}</span>`;
  }

  const HOME_WEATHER_MONTHS = ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Dec'];
  const HOTEL_GALLERY_KEYS = ['exterior', 'room', 'restaurant', 'view'];

  const IMAGE_PLACEHOLDER =
    'data:image/svg+xml,' +
    encodeURIComponent(
      '<svg xmlns="http://www.w3.org/2000/svg" width="640" height="360" viewBox="0 0 640 360">' +
        '<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">' +
        '<stop offset="0%" stop-color="#ece8e2"/><stop offset="100%" stop-color="#d8d2ca"/></linearGradient></defs>' +
        '<rect fill="url(#g)" width="640" height="360"/>' +
        '<circle cx="320" cy="150" r="36" fill="none" stroke="#9a9288" stroke-width="2"/>' +
        '<path d="M296 190h48l-12-16-10 12-8-10z" fill="#9a9288"/>' +
        '</svg>'
    );

  function normalizeImageUrl(url, width) {
    if (!url || typeof url !== 'string') return '';
    if (url.startsWith('data:')) return url;
    const w = width || 640;
    if (url.includes('images.unsplash.com')) {
      const base = url.split('?')[0];
      return `${base}?auto=format&fit=crop&w=${w}&q=75&fm=jpg`;
    }
    if (url.includes('picsum.photos')) return url;
    return url;
  }

  function picsumFallback(seed, width, height) {
    const s = encodeURIComponent(String(seed || 'discover').replace(/\s+/g, '-').slice(0, 48));
    const w = width || 640;
    const h = height || Math.round(w * 0.5625);
    return `https://picsum.photos/seed/${s}/${w}/${h}`;
  }

  function handleImgError(el) {
    if (!el) return;
    if (el.dataset.fb && el.src !== el.dataset.fb) {
      el.src = el.dataset.fb;
      el.dataset.fb = '';
      return;
    }
    if (el.dataset.ph && el.src !== el.dataset.ph) {
      el.src = el.dataset.ph;
    }
  }

  /** Responsive photo with controlled crop; optional fallback on load error. Pass { eager: true } for hero/detail covers. */
  function img(url, alt, ratio, focal, fallback, opts) {
    const options = opts && typeof opts === 'object' ? opts : {};
    const primary = normalizeImageUrl(url || fallback);
    if (!primary && !fallback) return '';
    const src = primary || normalizeImageUrl(fallback);
    const r = ratio || '16/9';
    const pos = focal || 'center';
    const fbRaw = fallback && normalizeImageUrl(fallback) !== src ? normalizeImageUrl(fallback) : '';
    const fb = fbRaw ? esc(fbRaw) : '';
    const ph = esc(IMAGE_PLACEHOLDER);
    const err = ` onerror="handleImgError(this)"${fb ? ` data-fb="${fb}"` : ''} data-ph="${ph}"`;
    const eager = !!options.eager;
    const loading = eager ? 'eager' : 'lazy';
    const priority = eager ? ' fetchpriority="high"' : '';
    return `<figure class="media" style="aspect-ratio:${esc(r)}">
      <img src="${esc(src)}" alt="${esc(alt || '')}" loading="${loading}"${priority} decoding="async" style="object-position:${esc(pos)}"${err}>
    </figure>`;
  }

  function photoUrl(photos, key, altKey) {
    if (!photos) return '';
    const raw = photos[key] || photos[altKey] || photos.hero || photos.signature || '';
    return normalizeImageUrl(raw);
  }

  function pdfPhoto(url, extraClass, label, focal) {
    const src = normalizeImageUrl(url, 800);
    if (!src) return `<div class="pdf-photo ${extraClass || ''}"></div>`;
    const pos = focal || 'center';
    const ph = esc(IMAGE_PLACEHOLDER);
    return (
      `<figure class="pdf-photo-wrap">` +
      `<div class="pdf-photo ${extraClass || ''}">` +
      `<img src="${esc(src)}" alt="" decoding="sync" style="object-position:${esc(pos)}" onerror="handleImgError(this)" data-ph="${ph}">` +
      (label ? `<span class="pdf-photo-label">${esc(label)}</span>` : '') +
      `</div></figure>`
    );
  }

  /** PDF card thumbnail — real img tag so Puppeteer embeds reliably */
  function pdfCardImg(url, seed) {
    const src = normalizeImageUrl(url, 600);
    if (!src) return '<div class="pdf-card__img pdf-card__img--empty"></div>';
    const ph = esc(IMAGE_PLACEHOLDER);
    return (
      '<div class="pdf-card__img">' +
      `<img src="${esc(src)}" alt="" decoding="sync" onerror="handleImgError(this)" data-ph="${ph}">` +
      '</div>'
    );
  }

  /** Full-bleed PDF background layer */
  function pdfBgImg(url, className, seed) {
    const src = normalizeImageUrl(url, 1200);
    if (!src) return `<div class="${className} ${className}--empty"></div>`;
    const ph = esc(IMAGE_PLACEHOLDER);
    return (
      `<div class="${className}">` +
      `<img src="${esc(src)}" alt="" decoding="sync" onerror="handleImgError(this)" data-ph="${ph}">` +
      '</div>'
    );
  }

  function shortText(text, maxSentences) {
    if (!text) return '';
    const n = maxSentences || 2;
    const parts = text.match(/[^.!?]+[.!?]+/g) || [text];
    return parts.slice(0, n).join(' ').trim();
  }

  /** Deep-merge PLAN_AR string leaves onto PLAN (PDF + magazine Arabic mode). */
  function deepMergePlan(en, ar) {
    if (ar == null) return en;
    if (Array.isArray(en)) {
      return en.map(function (item, i) {
        return deepMergePlan(item, Array.isArray(ar) ? ar[i] : undefined);
      });
    }
    if (en && typeof en === 'object' && !Array.isArray(en)) {
      const out = Object.assign({}, en);
      if (ar && typeof ar === 'object' && !Array.isArray(ar)) {
        Object.keys(ar).forEach(function (k) {
          out[k] = deepMergePlan(en[k], ar[k]);
        });
      }
      return out;
    }
    if (typeof ar === 'string' && ar.trim()) return ar;
    return en;
  }

  function resolveActivePlan(basePlan, overlay, isArabic) {
    const base = basePlan || {};
    if (isArabic && overlay) return deepMergePlan(base, overlay);
    return base;
  }

  const api = {
    ICONS,
    applyTheme,
    qr,
    qrImg,
    stars,
    staticMap,
    getCoords,
    esc,
    caption,
    timeClass,
    actionButtons,
    icon,
    iconWrap,
    img,
    photoUrl,
    pdfPhoto,
    pdfCardImg,
    pdfBgImg,
    normalizeImageUrl,
    picsumFallback,
    handleImgError,
    IMAGE_PLACEHOLDER,
    shortText,
    deepMergePlan,
    resolveActivePlan,
    HOME_WEATHER_MONTHS,
    HOTEL_GALLERY_KEYS
  };

  Object.assign(global, api);
  global.TG = Object.assign(global.TG || {}, api);
})(typeof window !== 'undefined' ? window : globalThis);
