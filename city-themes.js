/*
  CITY THEME PRESETS
  ==================
  Copy one block into PLAN.theme when creating a new city guide.
  Duplicate guide-template.html → cities/[city].html, then fill PLAN data.
*/

const CITY_THEMES = {
  london: {
    accent: '#c41e3a',
    accentSoft: '#fde8ec',
    accentDeep: '#8b1429',
    heroImage: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=80'
  },
  newYork: {
    accent: '#0039a6',
    accentSoft: '#e8f0fa',
    accentDeep: '#002d7a',
    heroImage: 'https://images.unsplash.com/photo-1496442226666-8d0d0e62e956?auto=format&fit=crop&w=1200&q=80'
  },
  paris: {
    accent: '#2c5282',
    accentSoft: '#ebf4ff',
    accentDeep: '#1a365d',
    heroImage: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80'
  },
  rome: {
    accent: '#b45309',
    accentSoft: '#fef3c7',
    accentDeep: '#92400e',
    heroImage: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1200&q=80'
  },
  dubai: {
    accent: '#d97706',
    accentSoft: '#fffbeb',
    accentDeep: '#b45309',
    heroImage: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80'
  },
  tokyo: {
    accent: '#be123c',
    accentSoft: '#ffe4e6',
    accentDeep: '#9f1239',
    heroImage: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1200&q=80'
  },
  barcelona: {
    accent: '#c2410c',
    accentSoft: '#ffedd5',
    accentDeep: '#9a3412',
    heroImage: 'https://images.unsplash.com/photo-1583422409516-2895a77efded?auto=format&fit=crop&w=1200&q=80'
  },
  istanbul: {
    accent: '#0d9488',
    accentSoft: '#ccfbf1',
    accentDeep: '#0f766e',
    heroImage: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=1200&q=80'
  }
};

/*
  TRANSIT LABEL — rename per city:
    London     → transitLabel: 'Tube'
    New York   → transitLabel: 'Subway'
    Paris      → transitLabel: 'Metro'
    Tokyo      → transitLabel: 'Metro'
    Dubai      → transitLabel: 'Metro'
    Istanbul   → transitLabel: 'Metro'
    Rome       → transitLabel: 'Metro'
    Barcelona  → transitLabel: 'Metro'
*/
