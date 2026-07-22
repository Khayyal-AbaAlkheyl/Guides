/**
 * DISCOVER city template — copy to data/[city-slug].js and fill in content.
 * Theme presets: themes/cities.json
 */
const PLAN = {
  meta: {
    city: 'City Name',
    country: 'Country',
    tagline: 'Sights, stays, food and day plans — in your pocket.',
    badge: 'Discover · 2026 Edition',
    edition: '2026',
    stats: { attractions: 0, hotels: 0, dining: 0, days: 0 },
    theme: {
      accent: '#c41e3a',
      accentSoft: '#fde8ec',
      accentDeep: '#8b1429',
      transitLabel: 'Metro',
      tube: '#0019A8',
      parks: '#2d6a4f',
      river: '#0077b6',
      gold: '#b8860b',
      navy: '#1a2744',
      heroImage: ''
    }
  },
  welcome: {
    editorLetter: 'Two sentences introducing the city and this guide.',
    howToUse: 'Scan QR codes for maps. Tap links to book.'
  },
  essentials: {},
  arrival: [],
  packing: {},
  weatherTable: { rows: [], sweetSpot: '' },
  transport: { modes: [], oysterTips: [], exit6Tip: '' },
  maps: { overview: { caption: '', markers: [] } },
  attractions: [],
  hotels: [],
  dining: [],
  itineraries: [],
  rainyDay: [],
  sunnyDay: [],
  hiddenGems: [],
  warnings: [],
  shopping: { districts: [], brands: [], souvenirs: [], vatTips: {} },
  budget: {},
  family: { rows: [], tip: '' },
  emergency: { numbers: [], hospitals: [], embassies: [], lostPassport: '' },
  phrases: [],
  cheatSheet: {},
  etiquette: []
};
