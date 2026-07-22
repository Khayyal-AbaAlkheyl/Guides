/**
 * PDF renderer — linear A4 magazine document from global PLAN (+ PLAN_AR when Arabic).
 * Requires shared.js + i18n.js loaded first.
 */
(function () {
  'use strict';

  let ACTIVE = null;

  function resolveActivePlan() {
    const base = typeof PLAN !== 'undefined' ? PLAN : {};
    const isArabic = typeof I18n !== 'undefined' && I18n.isAr();
    const overlay = typeof PLAN_AR !== 'undefined' ? PLAN_AR : null;
    if (isArabic && overlay && typeof deepMergePlan === 'function') {
      return deepMergePlan(base, overlay);
    }
    return base;
  }

  function plan() {
    return ACTIVE || resolveActivePlan();
  }

  function tx(key, varsOrFallback, maybeFallback) {
    if (typeof I18n !== 'undefined' && I18n.t) return I18n.t(key, varsOrFallback, maybeFallback);
    if (typeof varsOrFallback === 'string') return varsOrFallback;
    return maybeFallback || key;
  }

  function isAr() {
    return typeof I18n !== 'undefined' && I18n.isAr();
  }

  /* ── plan() accessors ── */
  function meta() {
    const p = plan();
    return p.meta || p;
  }

  function cityName() {
    return meta().city || plan().city || 'City';
  }

  function countryName() {
    return meta().country || plan().country || '';
  }

  function themeHero() {
    return (meta().theme || plan().theme || {}).heroImage || '';
  }

  function statsEntries() {
    const stats = meta().stats || plan().stats;
    if (Array.isArray(stats)) return stats;
    if (!stats || typeof stats !== 'object') return [];
    const map = [
      ['attractions', 'pdfStatAttractions'],
      ['hotels', 'pdfStatHotels'],
      ['dining', 'pdfStatRestaurants'],
      ['days', 'pdfStatDayPlans'],
      ['chapters', 'pdfStatChapters'],
      ['qrCodes', 'pdfStatQr']
    ];
    return map
      .filter(function (pair) { return stats[pair[0]] != null; })
      .map(function (pair) { return { value: String(stats[pair[0]]), label: tx(pair[1]) }; });
  }

  /* ── PDF navigation & photo cards ── */
  function pdfNavItems() {
    return [
      { id: 'pdf-welcome', label: tx('pdfNavWelcome') },
      { id: 'pdf-essentials', label: tx('pdfNavEssentials') },
      { id: 'pdf-attractions', label: tx('pdfNavSights') },
      { id: 'pdf-hotels', label: tx('pdfNavHotels') },
      { id: 'pdf-dining', label: tx('pdfNavDining') },
      { id: 'pdf-itinerary', label: tx('pdfNavPlan') },
      { id: 'pdf-transport', label: tx('pdfNavTransport') },
      { id: 'pdf-emergency', label: tx('pdfNavEmergency') },
      { id: 'pdf-cheat', label: tx('pdfNavCheat') }
    ];
  }

  function pdfNavBar(position) {
    // Jump nav only on section openers — repeating it on every spread crowded phone PDFs.
    return '';
  }

  function pdfSectionNav() {
    return (
      '<nav class="pdf-nav" aria-label="' + esc(tx('pdfJumpNav')) + '">' +
        pdfNavItems().map(function (item) {
          return '<a href="#' + item.id + '">' + esc(item.label) + '</a>';
        }).join('') +
      '</nav>'
    );
  }

  function enPlan() {
    return typeof PLAN !== 'undefined' ? PLAN : plan();
  }

  function normalizeName(str) {
    return String(str || '').toLowerCase().replace(/[^a-z0-9]/g, '');
  }

  function findStopPhoto(stopName) {
    const needle = normalizeName(stopName);
    if (!needle) return null;
    const source = enPlan();
    const match = function (name) {
      const n = normalizeName(name);
      return n && (n === needle || needle.includes(n) || n.includes(needle));
    };
    const a = (source.attractions || []).find(function (x) { return match(x.name); });
    if (a && a.photos && a.photos.hero) return a.photos.hero;
    const d = (source.dining || []).find(function (x) { return match(x.name); });
    if (d && d.photos && d.photos.signature) return d.photos.signature;
    const gem = (source.hiddenGems || []).find(function (x) { return match(x.name); });
    return gem && gem.img ? gem.img : null;
  }

  function photoInCard(url, photoClass, cardMod) {
    cardMod = cardMod || 'hero';
    return (
      '<div class="pdf-media-card pdf-media-card--' + cardMod + '">' +
        photoBg(url, photoClass || '') +
      '</div>'
    );
  }

  function labeledPhotoCard(url, label, photoClass, cardMod) {
    if (!url) return '';
    cardMod = cardMod || 'thumb';
    return (
      '<div class="pdf-media-card pdf-media-card--' + cardMod + '">' +
        labeledPhoto(url, label, photoClass || 'pdf-photo--square') +
      '</div>'
    );
  }

  function sectionWithNav(id, className, inner) {
    return (
      '<section class="' + (className || 'pdf-section') + '" id="' + id + '">' +
        pdfSectionNav() +
        inner +
      '</section>'
    );
  }

  /* ── Layout helpers ── */
  function sectionHead(title, subtitle) {
    return (
      '<div class="pdf-section-head">' +
        '<h2>' + esc(title) + '</h2>' +
        (subtitle ? '<p>' + esc(subtitle) + '</p>' : '') +
      '</div>'
    );
  }

  function chapterOpener(label, title, subtitle, img, opts) {
    opts = opts || {};
    const lead = opts.lead ? ' pdf-chapter--lead' : '';
    const bg = img || themeHero();
    return (
      '<div class="pdf-chapter' + lead + '">' +
        pdfBgImg(bg, 'pdf-chapter__bg', title) +
        '<div class="pdf-chapter__overlay"></div>' +
        '<div class="pdf-chapter__content">' +
          '<div class="pdf-chapter__label">' + esc(label) + '</div>' +
          '<h2 class="pdf-chapter__title">' + esc(title) + '</h2>' +
          (subtitle ? '<p class="pdf-chapter__subtitle">' + esc(subtitle) + '</p>' : '') +
        '</div>' +
      '</div>'
    );
  }

  function chapterLeadPage(id, label, title, subtitle, img) {
    return (
      '<section class="pdf-chapter-page" id="' + id + '">' +
        pdfSectionNav() +
        chapterOpener(label, title, subtitle, img, { lead: false }) +
      '</section>'
    );
  }

  function photoBg(url, extraClass) {
    if (typeof pdfPhoto === 'function') {
      return pdfPhoto(url, extraClass || '', '', 'center');
    }
    const u = normalizeImageUrl(url, 800);
    if (!u) return '<div class="pdf-photo ' + (extraClass || '') + '"></div>';
    return (
      '<div class="pdf-photo ' + (extraClass || '') + '">' +
        '<img src="' + esc(u) + '" alt="" decoding="sync" onerror="handleImgError(this)" data-ph="' + esc(IMAGE_PLACEHOLDER) + '">' +
      '</div>'
    );
  }

  function labeledPhoto(url, label, extraClass) {
    if (typeof pdfPhoto === 'function') {
      return pdfPhoto(url, extraClass || 'pdf-photo--square', label || '', 'center');
    }
    if (!url) return '';
    const u = normalizeImageUrl(url, 800);
    return (
      '<figure>' +
        '<div class="pdf-photo ' + (extraClass || 'pdf-photo--square') + '">' +
          '<img src="' + esc(u) + '" alt="" decoding="sync" onerror="handleImgError(this)" data-ph="' + esc(IMAGE_PLACEHOLDER) + '">' +
          (label ? '<span class="pdf-photo-label">' + esc(label) + '</span>' : '') +
        '</div>' +
      '</figure>'
    );
  }

  function qrBlock(url, label, size) {
    size = size || 72;
    const imgHtml = typeof qrImg === 'function'
      ? qrImg(url, size, label || tx('pdfQrCode'))
      : '<img src="' + esc(qr(url, size)) + '" width="' + size + '" height="' + size + '" alt="' + esc(label || tx('pdfQrCode')) + '">';
    return (
      '<div class="pdf-spread__qr">' +
        imgHtml +
        '<div class="pdf-spread__qr-label">' + esc(label || tx('scanMap')) + '</div>' +
      '</div>'
    );
  }

  function chipsHtml(items) {
    return (
      '<div class="pdf-chips">' +
        items.filter(Boolean).join('') +
      '</div>'
    );
  }

  function chip(text, mod) {
    if (!text) return '';
    return '<span class="pdf-chip' + (mod ? ' pdf-chip--' + mod : '') + '">' + esc(text) + '</span>';
  }

  function crowdHtml(crowd) {
    if (!crowd) return '';
    const periods = [
      ['morning', tx('morning')],
      ['afternoon', tx('afternoon')],
      ['evening', tx('evening')]
    ];
    return (
      '<div class="pdf-crowd">' +
        '<strong style="font-size:7pt;display:block;margin-bottom:3px;">' + esc(tx('pdfCrowdLevels')) + '</strong>' +
        periods.map(function (p) {
          return (
            '<div class="pdf-crowd__row">' +
              '<span class="pdf-crowd__label">' + p[1] + '</span>' +
              '<span class="pdf-stars">' + stars(crowd[p[0]] || 0) + '</span>' +
            '</div>'
          );
        }).join('') +
      '</div>'
    );
  }

  function nearbyHtml(list) {
    if (!list || !list.length) return '';
    return (
      '<ul class="pdf-nearby">' +
        list.slice(0, 5).map(function (n) {
          return '<li><span>' + esc(n.name) + '</span><span>' + esc(n.walk) + '</span></li>';
        }).join('') +
      '</ul>'
    );
  }

  function pdfActionButtons(mapUrl, bookUrl, bookText) {
    const parts = [];
    if (mapUrl) {
      parts.push('<a class="pdf-btn pdf-btn--map" href="' + esc(mapUrl) + '">' + esc(tx('pdfOpenMap')) + '</a>');
    }
    // Skip second button when it is the same link as the map (avoids duplicate CTAs).
    if (bookUrl && bookUrl !== mapUrl) {
      parts.push('<a class="pdf-btn pdf-btn--book" href="' + esc(bookUrl) + '">' + esc(bookText || tx('book')) + '</a>');
    }
    return parts.length ? '<div class="pdf-actions">' + parts.join('') + '</div>' : '';
  }

  function stopCardClass(timeOfDay) {
    const mod = timeOfDay || 'morning';
    return 'pdf-stop__card pdf-stop__card--' + mod;
  }

  function mapQrBlock(name, mapUrl) {
    if (!mapUrl) return '';
    return (
      '<div class="pdf-map-qr pdf-map-qr--simple">' +
        qrBlock(mapUrl, tx('pdfGoogleMaps'), 72) +
        '<div class="pdf-day__route-text"><strong>' + esc(tx('pdfScanQrMaps')) + '</strong></div>' +
      '</div>'
    );
  }

  const ESSENTIAL_ICONS = {
    currency: '£',
    power: '⚡',
    sim: '📶',
    language: '💬',
    tipping: '💳',
    emergency: '🆘',
    tapWater: '💧',
    timezone: '🕐'
  };

  const TRANSPORT_ICONS = {
    tube: '🚇',
    bus: '🚌',
    elizabeth: '🚆',
    boat: '⛴',
    walk: '🚶',
    bike: '🚲',
    cab: '🚕',
    uber: '📱'
  };

  const EMERGENCY_ICONS = {
    emergency: '🆘',
    medical: '🏥',
    police: '👮',
    passport: '🛂',
    hospital: '🏥',
    embassy: '🏛'
  };

  /* ── Section renderers ── */
  function renderCover() {
    const m = meta();
    return (
      '<section class="pdf-cover">' +
        pdfBgImg(themeHero(), 'pdf-cover__bg', cityName()) +
        '<div class="pdf-cover__overlay"></div>' +
        '<div class="pdf-cover__content">' +
          '<span class="pdf-cover__badge">' + esc(m.badge || tx('discover')) + ' · ' + esc(countryName()) + '</span>' +
          '<h1 class="pdf-cover__title">' + esc(cityName()) + '</h1>' +
          '<p class="pdf-cover__tagline">' + esc(m.tagline || plan().tagline || '') + '</p>' +
          '<div class="pdf-cover__stats">' +
            statsEntries().map(function (st) {
              return (
                '<div>' +
                  '<div class="pdf-cover__stat-value">' + esc(st.value) + '</div>' +
                  '<div class="pdf-cover__stat-label">' + esc(st.label) + '</div>' +
                '</div>'
              );
            }).join('') +
          '</div>' +
        '</div>' +
      '</section>'
    );
  }

  function renderWelcome() {
    const w = plan().welcome || {};
    const letter = (typeof shortText === 'function' ? shortText(w.editorLetter, 2) : (w.editorLetter || '').split('\n\n')[0]) || '';
    return sectionWithNav('pdf-welcome', 'pdf-section',
      chapterOpener(tx('pdfEditorsLetter'), tx('pdfDiscoverCity', { city: cityName() }), tx('pdfWelcomeSub')) +
      '<div class="pdf-prose pdf-prose--letter"><p>' + esc(letter) + '</p></div>'
    );
  }

  function renderEssentials() {
    const e = plan().essentials || {};
    const keys = Object.keys(e);
    return sectionWithNav('pdf-essentials', 'pdf-section',
      chapterOpener(tx('pdfBeforeYouGo'), tx('pdfNavEssentials'), tx('pdfEssentialsSub')) +
      '<div class="pdf-essentials">' +
        keys.map(function (key) {
          const item = e[key];
          if (!item) return '';
          return (
            '<div class="pdf-essential">' +
              '<div class="pdf-essential__icon">' + (ESSENTIAL_ICONS[key] || '●') + '</div>' +
              '<div class="pdf-essential__label">' + esc(item.label) + '</div>' +
              '<div class="pdf-essential__note">' + esc(item.note) + '</div>' +
            '</div>'
          );
        }).join('') +
      '</div>'
    );
  }

  function renderArrival() {
    const steps = plan().arrival || [];
    return sectionWithNav('pdf-arrival', 'pdf-section',
      chapterOpener(tx('pdfArrival'), tx('pdfFirstHour', { city: cityName() }), tx('pdfArrivalSub')) +
        '<div class="pdf-steps">' +
          steps.map(function (s) {
            return (
              '<div class="pdf-step">' +
                '<div class="pdf-step__num">' + esc(s.step) + '</div>' +
                '<div class="pdf-step__title">' + esc(s.title) + '</div>' +
                '<div class="pdf-step__desc">' + esc(s.desc) + '</div>' +
              '</div>'
            );
          }).join('') +
        '</div>'
    );
  }

  function renderPacking() {
    const p = plan().packing || {};
    const seasons = ['spring', 'summer', 'autumn', 'winter'];
    return sectionWithNav('pdf-packing', 'pdf-section',
      chapterOpener(tx('pdfPacking'), tx('pdfSeasonBySeason'), tx('pdfPackingSub', { city: cityName() })) +
        '<div class="pdf-packing">' +
          seasons.map(function (key) {
            const s = p[key];
            if (!s) return '';
            return (
              '<div class="pdf-season">' +
                '<div class="pdf-season__head">' + esc(s.months) + '</div>' +
                '<div class="pdf-season__temp">' + esc(s.temp) + '</div>' +
                '<ul class="pdf-season__items">' +
                  (s.items || []).map(function (item) {
                    return '<li>' + esc(item) + '</li>';
                  }).join('') +
                '</ul>' +
              '</div>'
            );
          }).join('') +
        '</div>'
    );
  }

  function renderWeather() {
    const wt = plan().weatherTable || {};
    const rows = wt.rows || [];
    return sectionWithNav('pdf-weather', 'pdf-section',
      chapterOpener(tx('pdfWeather'), tx('pdfMonthByMonth'), tx('pdfWeatherSub')) +
        '<div class="pdf-table-wrap">' +
          '<table class="pdf-table">' +
            '<thead><tr>' +
              '<th>' + esc(tx('labelMonth')) + '</th><th>' + esc(tx('weatherTemp')) + '</th><th>' + esc(tx('weatherRain')) + '</th><th>' + esc(tx('labelSunset')) + '</th><th>' + esc(tx('weatherCrowds')) + '</th><th>' + esc(tx('weatherBestFor')) + '</th>' +
            '</tr></thead>' +
            '<tbody>' +
              rows.map(function (r) {
                return (
                  '<tr>' +
                    '<td><strong>' + esc(r.month) + '</strong></td>' +
                    '<td>' + esc(r.avgTemp) + '</td>' +
                    '<td>' + esc(r.rain) + '</td>' +
                    '<td>' + esc(r.sunset) + '</td>' +
                    '<td>' + esc(r.crowds) + '</td>' +
                    '<td>' + esc(r.recommend) + '</td>' +
                  '</tr>'
                );
              }).join('') +
            '</tbody>' +
          '</table>' +
        '</div>' +
        (wt.sweetSpot
          ? '<div class="pdf-box pdf-box--tip" style="margin-top:4mm;"><strong>' + esc(tx('pdfSweetSpot')) + '</strong>' + esc(wt.sweetSpot) + '</div>'
          : '')
    );
  }

  function renderTransport() {
    const t = plan().transport || {};
    const modes = t.modes || [];
    const tips = t.oysterTips || [];
    return sectionWithNav('pdf-transport', 'pdf-section',
      chapterOpener(tx('pdfGettingAround'), tx('pdfNavTransport'), tx('pdfTransportSub')) +
      '<div class="pdf-transport-grid">' +
        modes.map(function (m) {
          const iconClass = TRANSPORT_ICONS[m.icon] ? ' pdf-transport-mode__icon--' + m.icon : '';
          return (
            '<div class="pdf-transport-mode">' +
              '<div class="pdf-transport-mode__icon' + iconClass + '">' + (TRANSPORT_ICONS[m.icon] || '🚇') + '</div>' +
              '<div class="pdf-transport-mode__name">' + esc(m.name) + '</div>' +
              '<div class="pdf-transport-mode__price">' + esc(m.price) + '</div>' +
              '<div class="pdf-transport-mode__desc">' + esc(m.desc) + '</div>' +
            '</div>'
          );
        }).join('') +
      '</div>' +
      '<div class="pdf-oyster-tips">' +
        tips.map(function (tip) {
          return (
            '<div class="pdf-box pdf-box--fact">' +
              '<strong>' + esc(tip.title) + '</strong>' +
              esc(tip.desc) +
            '</div>'
          );
        }).join('') +
      '</div>' +
      (t.exit6Tip
        ? '<div class="pdf-box pdf-box--secret" style="margin-top:4mm;"><strong>' + esc(tx('pdfLocalSecret')) + '</strong>' + esc(t.exit6Tip) + '</div>'
        : '')
    );
  }

  function renderMaps() {
    const maps = plan().maps || {};
    const overview = maps.overview || {};
    const markers = overview.markers || [];
    const center = markers[0]
      ? { lat: markers[0].lat, lng: markers[0].lng }
      : { lat: 51.5074, lng: -0.1278 };
    const mapUrl = staticMap(center.lat, center.lng, 640, 480);
    return sectionWithNav('pdf-maps', 'pdf-section',
      chapterOpener(tx('pdfMaps'), tx('pdfCityOverview'), overview.caption || tx('pdfMapsCaption')) +
        '<div class="pdf-map-overview">' +
          '<div class="pdf-map-qr__map" style="height:70mm;">' +
            '<img src="' + esc(mapUrl) + '" alt="' + esc(tx('pdfCityOverviewMap')) + '">' +
          '</div>' +
          '<div>' +
            sectionHead(tx('pdfKeyLocations'), tx('pdfPinnedPlaces', { count: String(markers.length) })) +
            '<ul class="pdf-marker-list">' +
              markers.map(function (m) {
                return '<li>' + esc(m.name) + ' <span style="color:#6b6560;">(' + esc(m.type) + ')</span></li>';
              }).join('') +
            '</ul>' +
          '</div>' +
        '</div>'
    );
  }

  function renderAttraction(a) {
    const photos = a.photos || {};
    const insider = [a.didYouKnow, a.localSecret].filter(Boolean).join(' ');
    const eatNearby = Array.from(new Set([a.nearbyCafes, a.nearbyRestaurants].filter(Boolean))).join(' · ');
    return (
      '<section class="pdf-spread pdf-spread--attraction">' +
        pdfNavBar('top') +
        '<div class="pdf-spread__header">' +
          '<div>' +
            '<h2 class="pdf-spread__title">' + esc(a.name) + '</h2>' +
            '<div class="pdf-spread__address">' + esc(a.address) + '</div>' +
          '</div>' +
          qrBlock(a.mapUrl, tx('pdfDirections'), 72) +
        '</div>' +

        photoInCard(photos.hero || photos.detail, 'pdf-photo--hero', 'hero') +

        '<div class="pdf-photo-grid">' +
          labeledPhotoCard(photos.detail, '', 'pdf-photo--square', 'thumb') +
          labeledPhotoCard(photos.photoSpot, '', 'pdf-photo--square', 'thumb') +
        '</div>' +

        '<div class="pdf-stack" style="margin-top:4mm;">' +
          chipsHtml([
            chip(a.ticket, 'accent'),
            chip(a.hours),
            chip(a.avgVisit ? tx('pdfVisit') + ': ' + a.avgVisit : ''),
            chip(a.tube ? tx('pdfTube') + ': ' + a.tube : '')
          ]) +
          crowdHtml(a.crowd) +
          (insider ? '<div class="pdf-box pdf-box--fact"><strong>' + esc(tx('pdfInsider')) + '</strong>' + esc(insider) + '</div>' : '') +
          (a.photoSpot ? '<div class="pdf-box pdf-box--tip"><strong>' + esc(tx('pdfBestPhotoSpot')) + '</strong>' + esc(a.photoSpot) + '</div>' : '') +
          (a.tip ? '<div class="pdf-box pdf-box--tip"><strong>' + esc(tx('pdfTip')) + '</strong>' + esc(a.tip) + '</div>' : '') +
          (eatNearby ? '<div class="pdf-meta-row"><strong>' + esc(tx('pdfEatNearby')) + '</strong><span>' + esc(eatNearby) + '</span></div>' : '') +
          mapQrBlock(a.name, a.mapUrl) +
          pdfActionButtons(a.mapUrl, a.bookUrl, a.bookText || tx('book')) +
        '</div>' +
      '</section>'
    );
  }

  function renderAttractionsSection() {
    const list = plan().attractions || [];
    const hero = list[0] && list[0].photos ? (list[0].photos.hero || list[0].photos.detail) : themeHero();
    return (
      chapterLeadPage('pdf-attractions', tx('pdfMustSee'), tx('pdfAttractions'), tx('pdfAttractionsSub', { count: String(list.length) }), hero) +
      list.map(renderAttraction).join('')
    );
  }

  function renderHotel(h) {
    const photos = h.photos || {};
    const order = ['exterior', 'room', 'restaurant', 'view'];
    const seen = new Set();
    const photoUrls = order
      .map(function (k) { return photos[k]; })
      .filter(function (url) {
        if (!url) return false;
        const norm = String(url).split('?')[0];
        if (seen.has(norm)) return false;
        seen.add(norm);
        return true;
      });
    return (
      '<section class="pdf-spread pdf-spread--hotel">' +
        pdfNavBar('top') +
        '<div class="pdf-spread__header">' +
          '<div>' +
            '<h2 class="pdf-spread__title">' + esc(h.name) + '</h2>' +
            '<div class="pdf-spread__address">' + esc(h.address) + '</div>' +
          '</div>' +
          qrBlock(h.mapUrl, tx('pdfHotelMap'), 72) +
        '</div>' +

        '<div class="pdf-hotel-gallery">' +
          photoUrls.map(function (url) {
            return (
              '<div class="pdf-media-card pdf-media-card--gallery">' +
                labeledPhoto(url, '', '') +
              '</div>'
            );
          }).join('') +
        '</div>' +

        '<div class="pdf-stack">' +
          chipsHtml([
            chip(h.category, 'accent'),
            chip(h.price, 'gold'),
            chip(h.rating ? tx('pdfRating') + ' ' + h.rating : ''),
            chip(h.breakfast)
          ]) +
          '<div class="pdf-meta-row"><strong>' + esc(tx('pdfTube')) + '</strong><span>' + esc(h.tube) + '</span></div>' +
          (h.nearbyAttractions
            ? '<div class="pdf-meta-row"><strong>' + esc(tx('labelNearby')) + '</strong><span>' + esc(h.nearbyAttractions) + '</span></div>'
            : '') +
          (h.idealFor && (Array.isArray(h.idealFor) ? h.idealFor.length : String(h.idealFor).trim())
            ? '<div class="pdf-meta-row"><strong>' + esc(tx('pdfIdealFor')) + '</strong><span>' + esc(Array.isArray(h.idealFor) ? h.idealFor.join(' · ') : h.idealFor) + '</span></div>'
            : '') +
          (h.tip ? '<div class="pdf-box pdf-box--tip"><strong>' + esc(tx('pdfInsiderTip')) + '</strong>' + esc(h.tip) + '</div>' : '') +
          mapQrBlock(h.name, h.mapUrl) +
          pdfActionButtons(h.mapUrl, h.bookUrl, tx('book')) +
        '</div>' +
      '</section>'
    );
  }

  function renderHotelsSection() {
    const list = plan().hotels || [];
    const hero = list[0] && list[0].photos ? (list[0].photos.exterior || list[0].photos.room) : themeHero();
    return (
      chapterLeadPage('pdf-hotels', tx('pdfWhereToStay'), tx('pdfNavHotels'), tx('pdfHotelsSub'), hero) +
      list.map(renderHotel).join('')
    );
  }

  function renderDining(d) {
    const dishes = d.dishes || [];
    const photos = d.photos || {};
    return (
      '<section class="pdf-spread pdf-spread--dining">' +
        pdfNavBar('top') +
        '<div class="pdf-spread__header">' +
          '<div>' +
            '<h2 class="pdf-spread__title">' + esc(d.name) + '</h2>' +
            '<div class="pdf-spread__address">' + esc(d.address) + '</div>' +
          '</div>' +
          qrBlock(d.mapUrl, tx('pdfReserveMap'), 72) +
        '</div>' +

        (photos.signature ? photoInCard(photos.signature, 'pdf-photo--hero', 'hero') : '') +

        '<div class="pdf-dish-grid">' +
          dishes.slice(0, 3).map(function (dish) {
            return (
              '<article class="pdf-dish-card">' +
                photoInCard(dish.img, 'pdf-photo--square', 'dish') +
                '<div class="pdf-dish-card__body">' +
                  '<div class="pdf-dish__name">' + esc(dish.name) + '</div>' +
                  '<div class="pdf-dish__desc">' + esc(dish.desc) + '</div>' +
                '</div>' +
              '</article>'
            );
          }).join('') +
        '</div>' +

        '<div class="pdf-stack">' +
          chipsHtml([
            chip(d.category, 'accent'),
            chip(d.price, 'gold'),
            chip(d.famous),
            d.halal ? chip(tx('pdfHalal'), 'ok') : '',
            d.reservation ? chip(d.reservation, 'warn') : ''
          ]) +
          (d.tip ? '<div class="pdf-box pdf-box--tip"><strong>' + esc(tx('pdfTip')) + '</strong>' + esc(d.tip) + '</div>' : '') +
          mapQrBlock(d.name, d.mapUrl) +
          pdfActionButtons(d.mapUrl, d.bookUrl, tx('reserve')) +
        '</div>' +
      '</section>'
    );
  }

  function renderDiningSection() {
    const list = plan().dining || [];
    const hero = list[0] && list[0].photos ? list[0].photos.signature : themeHero();
    return (
      chapterLeadPage('pdf-dining', tx('pdfWhereToEat'), tx('pdfNavDining'), tx('pdfDiningSub'), hero) +
      list.map(renderDining).join('')
    );
  }

  function renderDay(day, dayIdx) {
    const enDays = enPlan().itineraries || [];
    const enStops = (enDays[dayIdx || 0] && enDays[dayIdx || 0].stops) || [];
    return (
      '<section class="pdf-day" style="' + (day.color ? '--accent:' + day.color : '') + '">' +
        pdfNavBar('top') +
        '<div class="pdf-day__head">' +
          '<span class="pdf-day__badge">' + esc(tx('pdfDay', { n: String(day.day) })) + '</span>' +
          '<h2 class="pdf-day__title">' + esc(day.title) + '</h2>' +
          (day.routePreview ? '<span class="pdf-day__route">' + esc(day.routePreview) + '</span>' : '') +
        '</div>' +

        (day.photos && day.photos.length
          ? '<div class="pdf-day-photos">' +
              day.photos.slice(0, 2).map(function (url) {
                return photoInCard(url, '', 'day');
              }).join('') +
            '</div>'
          : '') +

        (day.mapUrl
          ? '<div class="pdf-day__route-row">' +
              qrBlock(day.mapUrl, tx('pdfFullRouteMap'), 64) +
              '<div class="pdf-day__route-text"><strong>' + esc(tx('pdfRouteMap')) + '</strong><br>' + esc(tx('pdfScanQrMaps')) + '</div>' +
            '</div>'
          : '') +

        '<div class="pdf-timeline">' +
          (day.stops || []).map(function (stop, si) {
            const enName = (enStops[si] && enStops[si].name) || stop.name;
            const photo = findStopPhoto(enName);
            return (
              '<div class="pdf-stop">' +
                '<div class="pdf-stop__time">' + esc(stop.time) + '</div>' +
                '<div class="' + stopCardClass(stop.timeOfDay) + '">' +
                  (photo ? '<div class="pdf-stop__photo">' + photoBg(photo, 'pdf-photo--wide') + '</div>' : '') +
                  '<div class="pdf-stop__name">' + esc(stop.name) + '</div>' +
                  '<div class="pdf-stop__desc">' + esc(stop.desc) + '</div>' +
                  '<div class="pdf-stop__meta">' + esc(stop.transit) +
                    (stop.mapUrl ? ' · <a href="' + esc(stop.mapUrl) + '">' + esc(tx('pdfMap')) + '</a>' : '') +
                  '</div>' +
                '</div>' +
              '</div>'
            );
          }).join('') +
        '</div>' +
      '</section>'
    );
  }

  function renderItinerariesSection() {
    const days = plan().itineraries || [];
    const hero = days[0] && days[0].photos && days[0].photos[0] ? days[0].photos[0] : themeHero();
    return (
      chapterLeadPage('pdf-itinerary', tx('pdfYourItinerary'), tx('pdfDayPlans', { count: String(days.length) }), tx('pdfItinerarySub'), hero) +
      days.map(function (day, i) { return renderDay(day, i); }).join('')
    );
  }

  function renderWeatherPlan(title, subtitle, items) {
    const first = items && items[0];
    const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
    return (
      '<section class="pdf-section" id="pdf-' + slug + '">' +
        pdfNavBar('top') +
        chapterOpener('Weather', title, subtitle, first && first.img) +
        '<div class="pdf-weather-cards">' +
          (items || []).map(function (item) {
            return (
              '<article class="pdf-card pdf-card--wide">' +
                pdfCardImg(item.img, item.name) +
                '<div class="pdf-card__body">' +
                  '<div class="pdf-card__title">' + esc(item.name) + '</div>' +
                  '<div class="pdf-card__desc">' + esc(item.address) + ' · ' + esc(item.desc) + '</div>' +
                  pdfActionButtons(item.mapUrl, null, null) +
                '</div>' +
              '</article>'
            );
          }).join('') +
        '</div>' +
        pdfNavBar('bottom') +
      '</section>'
    );
  }

  function renderHiddenGems() {
    const gems = plan().hiddenGems || [];
    const hero = gems[0] && gems[0].img ? gems[0].img : themeHero();
    return sectionWithNav('pdf-gems', 'pdf-section',
      chapterOpener(tx('pdfHiddenGems'), tx('pdfOffBeaten'), tx('pdfGemsSub'), hero) +
      '<div class="pdf-grid pdf-grid--2">' +
        gems.map(function (g) {
            return (
              '<article class="pdf-card">' +
                pdfCardImg(g.img, g.name) +
                '<div class="pdf-card__body">' +
                  '<div class="pdf-card__title">' + esc(g.name) + '</div>' +
                  '<div class="pdf-card__desc">' + esc(g.desc) + '</div>' +
                  pdfActionButtons(g.mapUrl, null, null) +
                '</div>' +
              '</article>'
            );
          }).join('') +
      '</div>'
    );
  }

  function renderWarnings() {
    return sectionWithNav('pdf-warnings', 'pdf-section',
      chapterOpener(tx('pdfWarnings'), tx('pdfAvoidThese'), tx('pdfWarningsSub')) +
      (plan().warnings || []).slice(0, 4).map(function (w) {
        return (
          '<div class="pdf-box pdf-box--warn" style="margin-bottom:3mm;">' +
            '<strong>' + esc(w.title) + '</strong>' +
            esc(w.desc) +
          '</div>'
        );
      }).join('')
    );
  }

  function renderShopping() {
    const s = plan().shopping || {};
    const hero = s.districts && s.districts[0] ? s.districts[0].img : themeHero();
    return sectionWithNav('pdf-shopping', 'pdf-section',
      chapterOpener(tx('pdfShopping'), tx('pdfDistrictsSouvenirs'), tx('pdfShoppingSub'), hero) +
        '<div class="pdf-shopping-districts">' +
          (s.districts || []).map(function (d) {
            return (
              '<article class="pdf-card">' +
                pdfCardImg(d.img, d.name) +
                '<div class="pdf-card__body">' +
                  '<div class="pdf-card__title">' + esc(d.name) + '</div>' +
                  '<div class="pdf-card__desc">' + esc(d.desc) + '</div>' +
                  pdfActionButtons(d.mapUrl, null, null) +
                '</div>' +
              '</article>'
            );
          }).join('') +
        '</div>' +
        (s.vatTips
          ? '<div class="pdf-box pdf-box--tip" style="margin-top:4mm;"><strong>' + esc(tx('pdfVatSales')) + '</strong>' +
              esc(s.vatTips.note) + ' ' + esc(s.vatTips.saleSeasons) +
            '</div>'
          : '') +
        ((s.brands && s.brands.length) || (s.souvenirs && s.souvenirs.length)
          ? '<div class="pdf-cols-2" style="margin-top:4mm;">' +
              (s.brands && s.brands.length
                ? '<div><strong style="font-size:8pt;">' + esc(tx('pdfBritishBrands')) + '</strong><ul style="font-size:7pt;margin-top:4px;padding-left:14px;">' +
                    s.brands.map(function (b) { return '<li>' + esc(b) + '</li>'; }).join('') +
                  '</ul></div>'
                : '') +
              (s.souvenirs && s.souvenirs.length
                ? '<div><strong style="font-size:8pt;">' + esc(tx('pdfSouvenirs')) + '</strong><ul style="font-size:7pt;margin-top:4px;padding-left:14px;">' +
                    s.souvenirs.map(function (sv) { return '<li>' + esc(sv) + '</li>'; }).join('') +
                  '</ul></div>'
                : '') +
            '</div>'
          : '')
    );
  }

  function renderBudget() {
    const b = plan().budget || {};
    const tiers = [
      ['budget', tx('tierBudget'), 'pdf-budget-card--budget'],
      ['mid', tx('pdfMidRange'), 'pdf-budget-card--mid'],
      ['luxury', tx('tierLuxury'), 'pdf-budget-card--luxury']
    ];
    return sectionWithNav('pdf-budget', 'pdf-section',
      chapterOpener(tx('pdfBudget'), tx('pdfDailyCosts'), tx('pdfBudgetSub')) +
        '<div class="pdf-budget-page">' +
          tiers.map(function (t) {
            const tier = b[t[0]];
            if (!tier) return '';
            return (
              '<div class="pdf-budget-card ' + t[2] + '">' +
                '<div style="font-weight:700;text-transform:uppercase;font-size:7pt;letter-spacing:0.06em;">' + t[1] + '</div>' +
                '<div class="pdf-budget-card__daily">' + esc(tier.daily) + '</div>' +
                '<div class="pdf-meta-row"><strong>' + esc(tx('pdfStay')) + '</strong><span>' + esc(tier.accommodation) + '</span></div>' +
                '<div class="pdf-meta-row"><strong>' + esc(tx('pdfFood')) + '</strong><span>' + esc(tier.food) + '</span></div>' +
                '<div class="pdf-meta-row"><strong>' + esc(tx('pdfNavTransport')) + '</strong><span>' + esc(tier.transport) + '</span></div>' +
                '<div class="pdf-meta-row"><strong>' + esc(tx('pdfActivities')) + '</strong><span>' + esc(tier.activities) + '</span></div>' +
                (tier.tip ? '<div class="pdf-box pdf-box--tip" style="margin-top:4px;"><strong>' + esc(tx('pdfTip')) + '</strong>' + esc(tier.tip) + '</div>' : '') +
              '</div>'
            );
          }).join('') +
        '</div>'
    );
  }

  function renderFamily() {
    const f = plan().family || {};
    return sectionWithNav('pdf-family', 'pdf-section',
      chapterOpener(tx('pdfFamily'), tx('pdfTravellingKids'), tx('pdfFamilySub')) +
        (f.tip ? '<div class="pdf-box pdf-box--tip" style="margin-bottom:4mm;"><strong>' + esc(tx('pdfTransportTip')) + '</strong>' + esc(f.tip) + '</div>' : '') +
        '<div class="pdf-table-wrap pdf-family-table">' +
          '<table class="pdf-table">' +
            '<thead><tr><th>' + esc(tx('labelAttraction')) + '</th><th>' + esc(tx('pdfNotes')) + '</th><th>' + esc(tx('labelKids')) + '</th><th>' + esc(tx('labelStroller')) + '</th><th>' + esc(tx('pdfBabyChange')) + '</th><th>' + esc(tx('pdfFamilyTicket')) + '</th></tr></thead>' +
            '<tbody>' +
              (f.rows || []).map(function (r) {
                function yn(val) {
                  return val
                    ? '<span class="pdf-family-yes">✓</span>'
                    : '<span class="pdf-family-no">—</span>';
                }
                return (
                  '<tr>' +
                    '<td><strong>' + esc(r.attraction) + '</strong></td>' +
                    '<td>' + esc(r.desc) + '</td>' +
                    '<td>' + yn(r.goodForKids) + '</td>' +
                    '<td>' + yn(r.stroller) + '</td>' +
                    '<td>' + yn(r.babyChange) + '</td>' +
                    '<td>' + yn(r.familyTicket) + '</td>' +
                  '</tr>'
                );
              }).join('') +
            '</tbody>' +
          '</table>' +
        '</div>'
    );
  }

  function renderEmergency() {
    const e = plan().emergency || {};
    return sectionWithNav('pdf-emergency', 'pdf-section',
      chapterOpener(tx('pdfEmergency'), tx('pdfNumbersEmbassies'), tx('pdfEmergencySub')) +
      '<div class="pdf-emergency-grid">' +
        (e.numbers || []).map(function (n) {
          return (
            '<div class="pdf-emergency-card">' +
              '<div class="pdf-emergency-card__icon">' + (EMERGENCY_ICONS[n.icon] || '📞') + '</div>' +
              '<div class="pdf-emergency-card__label">' + esc(n.label) + '</div>' +
              '<div class="pdf-emergency-card__desc">' + esc(n.desc) + '</div>' +
            '</div>'
          );
        }).join('') +
      '</div>' +
      sectionHead(tx('pdfHospitals'), tx('pdfMajorAE')) +
      '<div class="pdf-grid pdf-grid--3" style="margin-bottom:4mm;">' +
        (e.hospitals || []).map(function (h) {
          return (
            '<div class="pdf-card" style="grid-template-columns:1fr;">' +
              '<div class="pdf-card__body">' +
                '<div class="pdf-card__title">' + esc(h.name) + '</div>' +
                '<div class="pdf-card__desc">' + esc(h.address) + '</div>' +
                pdfActionButtons(h.mapUrl, null, null) +
              '</div>' +
            '</div>'
          );
        }).join('') +
      '</div>' +
      sectionHead(tx('pdfEmbassies'), tx('pdfGccMissions')) +
      '<div class="pdf-table-wrap">' +
        '<table class="pdf-table">' +
          '<thead><tr><th>' + esc(tx('pdfCountry')) + '</th><th>' + esc(tx('labelAddress')) + '</th><th>' + esc(tx('pdfMap')) + '</th></tr></thead>' +
          '<tbody>' +
            (e.embassies || []).map(function (emb) {
              return (
                '<tr>' +
                  '<td><strong>' + esc(emb.country) + '</strong></td>' +
                  '<td>' + esc(emb.address) + '</td>' +
                  '<td><a href="' + esc(emb.mapUrl) + '">' + esc(tx('pdfOpenMap')) + '</a></td>' +
                '</tr>'
              );
            }).join('') +
          '</tbody>' +
        '</table>' +
      '</div>' +
      (e.lostPassport
        ? '<div class="pdf-box pdf-box--warn" style="margin-top:4mm;"><strong>' + esc(tx('pdfLostPassport')) + '</strong>' + esc(e.lostPassport) + '</div>'
        : '')
    );
  }

  function renderLocalTips() {
    return sectionWithNav('pdf-tips', 'pdf-section',
      chapterOpener(tx('pdfLocalTips'), tx('pdfPhrasesEtiquette'), tx('pdfLocalTipsSub')) +
        '<div class="pdf-phrases">' +
          (plan().phrases || []).map(function (p) {
            return (
              '<div class="pdf-phrase">' +
                '<div class="pdf-phrase__english">' + esc(p.english) + '</div>' +
                '<div class="pdf-phrase__use">' + esc(p.use) + '</div>' +
              '</div>'
            );
          }).join('') +
        '</div>' +
        '<div class="pdf-etiquette" style="margin-top:5mm;">' +
          (plan().etiquette || []).map(function (e) {
            return (
              '<div class="pdf-etiquette-item">' +
                '<strong>' + esc(e.rule) + '</strong>' +
                esc(e.desc) +
              '</div>'
            );
          }).join('') +
        '</div>'
    );
  }

  function renderCheatSheet() {
    const cs = plan().cheatSheet || {};
    function cheatBlock(title, items, labelKey, valueKey) {
      labelKey = labelKey || 'label';
      valueKey = valueKey || 'value';
      return (
        '<div class="pdf-cheat-block">' +
          '<div class="pdf-cheat-block__title">' + esc(title) + '</div>' +
          (items || []).map(function (item) {
            return (
              '<div class="pdf-cheat-item">' +
                '<span class="pdf-cheat-item__label">' + esc(item[labelKey]) + '</span>' +
                '<span>' + esc(item[valueKey]) + '</span>' +
              '</div>'
            );
          }).join('') +
        '</div>'
      );
    }
    return (
      '<section class="pdf-cheat-sheet" id="pdf-cheat">' +
        pdfNavBar('top') +
        '<div class="pdf-cheat-sheet__head">' +
          '<h2 class="pdf-cheat-sheet__title">' + esc(cs.title || tx('pdfOnePageCheat')) + '</h2>' +
          '<p class="pdf-cheat-sheet__subtitle">' + esc(cs.subtitle || '') + '</p>' +
        '</div>' +
        '<div class="pdf-cheat-sheet__grid">' +
          cheatBlock(tx('cheatEmergency'), cs.emergency) +
          cheatBlock(tx('cheatTransport'), cs.transport) +
          cheatBlock(tx('cheatMoney'), cs.money) +
          cheatBlock(tx('cheatApps'), cs.apps, 'name', 'use') +
        '</div>' +
        '<div class="pdf-cheat-qr-row">' +
          (cs.topQrCodes || []).map(function (item) {
            return (
              '<div class="pdf-cheat-qr">' +
                (typeof qrImg === 'function' ? qrImg(item.mapUrl, 52, item.name) : '<img src="' + esc(qr(item.mapUrl, 52)) + '" width="52" height="52" alt="">') +
                '<div class="pdf-cheat-qr__name">' + esc(item.name) + '</div>' +
              '</div>'
            );
          }).join('') +
        '</div>' +
        pdfNavBar('bottom') +
      '</section>'
    );
  }

  function renderBackCover() {
    const m = meta();
    return (
      '<section class="pdf-back-cover">' +
        pdfBgImg(themeHero(), 'pdf-back-cover__bg', cityName() + '-back') +
        '<div class="pdf-back-cover__overlay"></div>' +
        '<div class="pdf-back-cover__content">' +
          '<h2 class="pdf-back-cover__title">' + esc(cityName()) + '</h2>' +
          '<p class="pdf-back-cover__text">' + esc(m.tagline || plan().tagline || tx('pdfPremiumCompanion')) + '</p>' +
          '<p class="pdf-back-cover__edition">' + esc(m.badge || tx('discover')) + ' · ' + esc(tx('pdfEditionLabel')) + ' ' + esc(m.edition || '2026') + '</p>' +
        '</div>' +
      '</section>'
    );
  }

  /* ── Main render ── */
  function render() {
    if (typeof I18n !== 'undefined') {
      I18n.init(null);
    }
    ACTIVE = resolveActivePlan();
    if (typeof DiscoverBrand !== 'undefined') DiscoverBrand.apply(ACTIVE);
    else applyTheme(ACTIVE);
    document.title = tx('pdfDiscoverCity', { city: cityName() }) + ' · PDF';
    document.documentElement.lang = isAr() ? 'ar' : 'en';
    document.documentElement.dir = isAr() ? 'rtl' : 'ltr';
    document.documentElement.classList.toggle('is-arabic', isAr());

    const root = document.getElementById('root');
    if (!root) return;

    root.className = 'pdf-doc' + (isAr() ? ' is-arabic' : '');
    root.innerHTML = [
      renderCover(),
      renderWelcome(),
      renderEssentials(),
      renderArrival(),
      renderPacking(),
      renderWeather(),
      renderTransport(),
      renderMaps(),
      renderAttractionsSection(),
      renderHotelsSection(),
      renderDiningSection(),
      renderItinerariesSection(),
      renderWeatherPlan(tx('pdfRainyDayPlan'), tx('pdfRainyDaySub'), plan().rainyDay),
      renderWeatherPlan(tx('pdfSunnyDayPlan'), tx('pdfSunnyDaySub'), plan().sunnyDay),
      renderHiddenGems(),
      renderWarnings(),
      renderShopping(),
      renderBudget(),
      renderFamily(),
      renderEmergency(),
      renderLocalTips(),
      renderCheatSheet(),
      renderBackCover()
    ].join('');
  }

  window.renderPdf = render;

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', render);
  } else {
    render();
  }
})();
