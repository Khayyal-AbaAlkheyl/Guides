# Discover — City data schema

Required top-level keys in `data/[city].js` (`const PLAN = { ... }`):

| Key | Purpose |
|-----|---------|
| `meta` | city, country, tagline, badge, edition, stats, theme |
| `welcome` | editorLetter (2 sentences), howToUse |
| `essentials` | currency, power, sim, language, tipping, emergency, tapWater, timezone |
| `arrival` | array of { step, title, desc } |
| `packing` | spring/summer/autumn/winter with items[] |
| `weatherTable` | rows[] + sweetSpot |
| `transport` | modes[], oysterTips[], exit6Tip |
| `maps.overview` | caption, markers[{ name, type, lat, lng }] |
| `attractions[]` | name, photos{ hero, detail, photoSpot }, ticket, tube, hours, tip, crowd, nearby[], mapUrl, bookUrl |
| `hotels[]` | name, category, price, photos{ exterior, room, restaurant, view }, mapUrl, bookUrl |
| `dining[]` | name, famous, price, dishes[3], photos.signature, mapUrl, bookUrl |
| `itineraries[]` | day, title, color, stops[{ time, timeOfDay, name, desc, transit, mapUrl }] |
| `rainyDay`, `sunnyDay` | backup plans |
| `hiddenGems`, `warnings`, `shopping`, `budget`, `family`, `emergency`, `phrases`, `cheatSheet`, `etiquette` | More tab sections |

Theme: copy from `themes/cities.json` into `meta.theme`.

New city: `node scripts/new-city.mjs paris`
