import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const OUT = path.join(root, 'data', 'italy.js');

const PLACEHOLDER = '';
const HERO_WIKI = 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Colosseo_2020.jpg/960px-Colosseo_2020.jpg';

function img() {
  return PLACEHOLDER;
}

const CITY_PATTERNS = [
  ['Milan', /milan|duomo di milano|galleria vittorio|sforza|navigli|panzerotti|marchesi|armani hotel|park hyatt milan|room mate giulia|cusani|starbucks reserve roastery|luini/i],
  ['Como', /como|bellagio|villa melzi|varenna|tremezzo|villa flori|pasticceria monti|lake como/i],
  ['Verona', /verona|juliet|arena di verona|piazza delle erbe/i],
  ['Venice', /venice|venezia|st mark|doge|rialto|burano|gritti|sagredo|florian|grand canal|gondola|vaporetto/i],
  ['Florence', /florence|firenze|uffizi|ponte vecchio|brunelleschi|michelangelo|bistecca|truffle|ditta artigianale|spadai|piazza della signoria/i],
  ['Rome', /rome|roma|colosseum|vatican|trevi|pantheon|trastevere|giolitti|sant.eustachio|de russie|artemide|forum|palatine|spanish steps|piazza navona|borgo pio|suppl|carbonara|cacio|amatriciana|st peter/i]
];

function mapQuery(name, city) {
  if (city) {
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${name} ${city} Italy`)}`;
  }
  for (const [c, re] of CITY_PATTERNS) {
    if (re.test(name)) {
      return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${name} ${c} Italy`)}`;
    }
  }
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${name} Italy`)}`;
}

function attractionCard(i, opts) {
  const {
    name, address, hours, tube, ticket, bestArrival, waitSummer, waitWinter,
    photoSpot, lens, tip, bookUrl, bookText = 'Book Tickets', avgVisit,
    nearby = [], nearbyCafes, nearbyRestaurants, nearbyTube, nearbyToilets, nearbyAtm,
    didYouKnow, localSecret, crowd = { morning: 3, afternoon: 4, evening: 2 }, city
  } = opts;
  return {
    name, address, hours, tube, ticket, bestArrival, waitSummer, waitWinter,
    photoSpot, lens, tip,
    mapUrl: mapQuery(name, city),
    bookUrl: bookUrl || mapQuery(name, city),
    bookText, avgVisit, crowd, nearby,
    nearbyCafes: nearbyCafes || 'See dining chapter in this guide.',
    nearbyRestaurants: nearbyRestaurants || 'See dining chapter in this guide.',
    nearbyTube: nearbyTube || tube,
    nearbyToilets: nearbyToilets || 'On-site or nearby cafés.',
    nearbyAtm: nearbyAtm || 'Banks on main piazzas · ATMs at train stations',
    didYouKnow, localSecret,
    instagram: {
      sunset: photoSpot,
      sunrise: photoSpot,
      drone: 'Check local drone rules — restricted near historic centres',
      settings: 'f/8 · ISO 200 · 24–70mm'
    },
    photos: {
      hero: img(), detail: img(), photoSpot: img(), map: img(),
      heroPosition: 'center 40%'
    },
    seasonalPhotos: { spring: img(), summer: img(), autumn: img(), christmas: img() }
  };
}

function hotelCard(i, opts) {
  const {
    name, category, address, price, rating, googleRating, room, cancellation,
    tube, airport, nearbyAttractions, walkingScore, breakfast, idealFor, tip, bookUrl, city
  } = opts;
  return {
    name, category, address, price, rating, googleRating, room, cancellation,
    tube, airport, nearbyAttractions, walkingScore, breakfast, idealFor, tip,
    mapUrl: mapQuery(name, city),
    bookUrl: bookUrl || mapQuery(name, city),
    photos: {
      exterior: img(), lobby: img(), room: img(), luxuryRoom: img(),
      restaurant: img(), pool: img(), rooftop: img(), breakfast: img(), spa: img(), view: img()
    }
  };
}

function diningCard(i, opts) {
  const {
    name, category, address, price, famous, halal = false, vegetarian = true,
    reservation, wait, michelin = '—', kidsFriendly = 'Yes', dressCode = 'Smart casual',
    tip, bookUrl, dishes, city
  } = opts;
  const defaultDishes = dishes || [
    { name: famous, img: img(), desc: `Signature dish at ${name}.` },
    { name: 'Seasonal Special', img: img(), desc: 'Ask your server for today\'s recommendation.' },
    { name: 'Antipasto', img: img(), desc: 'Regional starter — share if dining as a group.' },
    { name: 'Primo', img: img(), desc: 'Classic Italian first course.' },
    { name: 'Dolce', img: img(), desc: 'Finish with something sweet — tiramisu if available.' }
  ];
  return {
    name, category, address, price, famous, halal, vegetarian, reservation, wait,
    michelin, kidsFriendly, dressCode, tip,
    mapUrl: mapQuery(name, city),
    bookUrl: bookUrl || mapQuery(name, city),
    dishes: defaultDishes,
    photos: { signature: img(), interior: img(), exterior: img(), dessert: img(), coffee: img() }
  };
}

function cafeCard(i, name, famous, address, city) {
  return diningCard(i, {
    name,
    category: 'Café · Coffee',
    address,
    price: '€4–€12',
    famous,
    reservation: 'Walk-in',
    wait: '5–15 min at peak',
    dressCode: 'Casual',
    tip: 'Italian cafés are busiest 08:00–09:30 — arrive early or after 10:30 for a table.',
    city,
    dishes: [
      { name: famous, img: img(), desc: 'House specialty — order this first.' },
      { name: 'Espresso', img: img(), desc: 'Stand at the bar like a local — often cheaper.' },
      { name: 'Cappuccino', img: img(), desc: 'Before 11:00 only, per Italian custom.' },
      { name: 'Cornetto', img: img(), desc: 'Fresh pastry with your coffee.' },
      { name: 'Granita', img: img(), desc: 'Iced treat in summer months.' }
    ]
  });
}

const attractions = [
  attractionCard(0, { name: 'Duomo di Milano', address: 'Piazza del Duomo · Milan', hours: '08:00–19:00 · rooftop until 20:00', tube: 'Duomo M1/M3 · 2 min walk', ticket: 'Cathedral free · rooftop €16', bestArrival: '09:30', waitSummer: '30–60 min rooftop', waitWinter: '10–20 min', photoSpot: 'From Piazza del Duomo — full Gothic façade and spires.', lens: '16–35mm', tip: 'Book rooftop tickets online. Dress modestly — shoulders covered.', bookUrl: 'https://www.duomomilano.it/', avgVisit: '2 hours', city: 'Milan', didYouKnow: 'The Duomo took nearly six centuries to complete — 135 spires crown the roof.', localSecret: 'The rooftop walk at sunset is quieter than mid-morning — book the last slot.' }),
  attractionCard(2, { name: 'Galleria Vittorio Emanuele II', address: 'Piazza del Duomo · Milan', hours: 'Always open · shops 10:00–20:00', tube: 'Duomo M1/M3', ticket: 'Free', bestArrival: '15:00', photoSpot: 'Centre of the cross — glass dome and mosaic floor bull.', lens: '14–24mm', tip: 'Spin on the mosaic bull\'s testicles with your heel for luck — Milan tradition.', avgVisit: '45 min', city: 'Milan', didYouKnow: 'Opened in 1877, this is one of the world\'s oldest shopping arcades.', localSecret: 'Prada\'s original store sits in the left wing — worth a peek even without buying.' }),
  attractionCard(4, { name: 'Sforza Castle', address: 'Piazza Castello · Milan', hours: '07:00–19:30 · museums 09:00–17:30', tube: 'Cairoli M1 · Lanza M2', ticket: 'Courtyard free · museums €5', bestArrival: '17:00', photoSpot: 'From Parco Sempione — castle towers against the sky.', lens: '24–70mm', tip: 'Michelangelo\'s unfinished Pietà Rondanini is inside. Combine with Navigli dinner.', avgVisit: '1.5 hours', city: 'Milan', didYouKnow: 'Leonardo da Vinci worked here under Ludovico Sforza — the castle was his workshop.' }),
  attractionCard(6, { name: 'Navigli District', address: 'Naviglio Grande · Milan', hours: 'Canals always open · restaurants from 12:00', tube: 'Porta Genova M2', ticket: 'Free', bestArrival: '18:30', photoSpot: 'Along Naviglio Grande — bridges, boats, aperitivo hour.', lens: '35mm', tip: 'Milan\'s canal quarter. Aperitivo 18:00–21:00 — drink comes with buffet snacks.', avgVisit: '2 hours', city: 'Milan', localSecret: 'Via Tortona side streets have design showrooms open during Salone del Mobile week.' }),
  attractionCard(8, { name: 'Como Cathedral', address: 'Piazza Duomo · Como', hours: '10:30–17:00', tube: 'Como San Giovanni · 5 min walk', ticket: 'Free · donation suggested', bestArrival: '10:30', photoSpot: 'From lakeside promenade — cathedral dome above the water.', lens: '24mm', tip: 'Start your Lake Como day here before the ferry to Bellagio.', avgVisit: '45 min', city: 'Como', didYouKnow: 'Como\'s cathedral took over three centuries to build — the dome was added last.' }),
  attractionCard(10, { name: 'Bellagio', address: 'Lago di Como · Bellagio', hours: 'Always open · shops 10:00–19:00', tube: 'Ferry from Como · 1 hr', ticket: 'Free', bestArrival: '11:00', photoSpot: 'From the ferry approaching — village stacked on the promontory.', lens: '24–70mm', tip: 'The pearl of Lake Como. Narrow lanes, lake views, lunch on the waterfront.', avgVisit: '3 hours', city: 'Como', localSecret: 'Walk up to San Giacomo church for the classic postcard view without the crowds.' }),
  attractionCard(12, { name: 'Villa Melzi Gardens', address: 'Via Melzi d\'Eril · Bellagio', hours: '09:30–18:30 Apr–Oct', tube: '10 min walk from Bellagio ferry', ticket: '€8 adult', bestArrival: '14:00', photoSpot: 'Japanese maples reflected in the lake — autumn is spectacular.', lens: '50–85mm', tip: 'Romantic lakeside gardens. Allow 1 hour before the ferry back.', avgVisit: '1 hour', city: 'Como', didYouKnow: 'Napoleon\'s vice-president owned this villa — the gardens were designed for lake promenades.' }),
  attractionCard(14, { name: 'Juliet\'s House', address: 'Via Cappello 23 · Verona', hours: '08:30–19:30 Tue–Sun', tube: 'Verona Porta Nuova · 15 min walk', ticket: 'Balcony €6 · courtyard free', bestArrival: '09:00', waitSummer: '20–40 min', waitWinter: '5–15 min', photoSpot: 'Balcony from the courtyard — touch the bronze statue for luck.', lens: '35mm', tip: 'Arrive early before tour groups. The love-letter wall is in the courtyard entrance.', avgVisit: '45 min', city: 'Verona', didYouKnow: 'Shakespeare never visited Verona — the balcony was added in the 20th century.' }),
  attractionCard(16, { name: 'Arena di Verona', address: 'Piazza Bra · Verona', hours: '08:30–19:30 · opera Jun–Aug', tube: 'Verona Porta Nuova · 10 min walk', ticket: '€10 adult · opera from €25', bestArrival: '10:00', photoSpot: 'From Piazza Bra — complete Roman amphitheatre ring.', lens: '16mm', tip: 'Third-largest Roman arena still in use. Book opera tickets months ahead for summer.', bookUrl: 'https://www.arena.it/', avgVisit: '1 hour', city: 'Verona', didYouKnow: 'Built in AD 30, the arena seats 15,000 for opera under the stars.' }),
  attractionCard(18, { name: 'St Mark\'s Basilica', address: 'Piazza San Marco · Venice', hours: '09:30–17:00 · Sun from 14:00', tube: 'Vaporetto San Marco · 2 min walk', ticket: 'Basilica free · Pala d\'Oro €5 · museum €7', bestArrival: '09:30', waitSummer: '45–90 min', waitWinter: '15–30 min', photoSpot: 'From the lagoon side — golden mosaics and domes at sunrise.', lens: '24mm', tip: 'No bags allowed — free deposit at Ateneo San Basso. Dress code enforced.', bookUrl: 'https://www.basilicasanmarco.it/', avgVisit: '1 hour', city: 'Venice', didYouKnow: 'Over 85,000 sq ft of gold mosaics cover the interior — built to dazzle pilgrims.' }),
  attractionCard(0, { name: 'Doge\'s Palace', address: 'Piazza San Marco 1 · Venice', hours: '09:00–19:00 · last entry 18:00', tube: 'Vaporetto San Marco', ticket: '€30 adult · includes Secret Itineraries extra', bestArrival: '09:00', waitSummer: '30–60 min', waitWinter: '10–20 min', photoSpot: 'Bridge of Sighs from Ponte della Paglia — prisoners\' last view.', lens: '24–70mm', tip: 'Combine with St Mark\'s morning visit. Tintoretto\'s Paradise is Europe\'s largest canvas.', bookUrl: 'https://palazzoducale.visitmuve.it/', avgVisit: '2 hours', city: 'Venice', localSecret: 'The hidden staircases tour reveals the prison cells behind the Bridge of Sighs.' }),
  attractionCard(2, { name: 'Grand Canal', address: 'Canal Grande · Venice', hours: 'Always open', tube: 'Vaporetto Line 1 · 24 hr', ticket: 'Vaporetto €9.50 single · day pass €25', bestArrival: 'Sunset', photoSpot: 'From Accademia Bridge — canal curve and palazzo reflections.', lens: '24–70mm', tip: 'Take vaporetto Line 1 the full length — cheapest grand canal tour in Venice.', avgVisit: '1–2 hours', city: 'Venice', didYouKnow: 'The Grand Canal is an inverted S-shape — palaces face the water because land transport came second.' }),
  attractionCard(4, { name: 'Rialto Market', address: 'Campo della Pescheria · Venice', hours: '07:00–14:00 Tue–Sat · fish market mornings only', tube: 'Vaporetto Rialto', ticket: 'Free', bestArrival: '08:00', photoSpot: 'Fish stalls under the Rialto bridge — morning market energy.', lens: '35mm', tip: 'Best before 10:00 when locals shop. Cicchetti bars nearby for breakfast bites.', avgVisit: '45 min', city: 'Venice', localSecret: 'All\'Arco bacaro behind the market serves the city\'s best morning cicchetti.' }),
  attractionCard(6, { name: 'Duomo di Firenze', address: 'Piazza del Duomo · Florence', hours: '10:00–16:30 · dome climb varies', tube: 'Firenze Santa Maria Novella · 15 min walk', ticket: 'Cathedral free · Brunelleschi dome €30 combo', bestArrival: '10:00', waitSummer: '60–90 min dome', waitWinter: '20–40 min', photoSpot: 'From Piazza del Duomo — Brunelleschi\'s dome dominates the skyline.', lens: '16–35mm', tip: 'Book the Brunelleschi dome climb weeks ahead — 463 steps, no lift.', bookUrl: 'https://www.duomo.firenze.it/', avgVisit: '2–3 hours', city: 'Florence', didYouKnow: 'Brunelleschi built the dome without scaffolding — a feat that baffled engineers for centuries.' }),
  attractionCard(8, { name: 'Uffizi Gallery', address: 'Piazzale degli Uffizi 6 · Florence', hours: '08:15–18:30 Tue–Sun', tube: '15 min walk from SMN', ticket: '€26 adult · book mandatory', bestArrival: '08:15', waitSummer: '30–60 min even with ticket', waitWinter: '15 min with booking', photoSpot: 'Arno corridor windows — Ponte Vecchio framed between columns.', lens: 'No flash · 35mm', tip: 'Birth of Venus and Primavera are unmissable. Book first slot of the day.', bookUrl: 'https://www.uffizi.it/', avgVisit: '3 hours', city: 'Florence', didYouKnow: 'The Uffizi was built as offices (uffizi) for the Medici — art filled the corridors over time.' }),
  attractionCard(10, { name: 'Ponte Vecchio', address: 'Arno River · Florence', hours: 'Always open · shops 10:00–19:00', tube: '10 min from Uffizi', ticket: 'Free', bestArrival: '07:30 sunrise', photoSpot: 'From Ponte Santa Trinita — Ponte Vecchio with Vasari Corridor above.', lens: '24–70mm', tip: 'Gold shops on the bridge since the 16th century. Sunrise is empty and golden.', avgVisit: '30 min', city: 'Florence', localSecret: 'The Vasari Corridor above the shops connects the Uffizi to Pitti Palace — tours occasionally available.' }),
  attractionCard(12, { name: 'Piazzale Michelangelo', address: 'Piazzale Michelangelo · Florence', hours: 'Always open', tube: 'Bus 12/13 from centre · 20 min walk uphill', ticket: 'Free', bestArrival: '18:30 sunset', photoSpot: 'Terrace railing — full Florence skyline with Duomo centre frame.', lens: '24mm', tip: 'The definitive Florence sunset viewpoint. Bring wine and patience for the golden hour.', avgVisit: '1 hour', crowd: { morning: 2, afternoon: 3, evening: 5 }, city: 'Florence', didYouKnow: 'The bronze David replica here is one of three — the original is in the Accademia.' }),
  attractionCard(14, { name: 'Colosseum', address: 'Piazza del Colosseo · Rome', hours: '09:00–19:00 · last entry 1 hr before close', tube: 'Colosseo M B · 2 min walk', ticket: '€18 adult · includes Forum & Palatine', bestArrival: '09:00', waitSummer: '60–90 min', waitWinter: '20–40 min', photoSpot: 'From Via dei Fori Imperiali — full amphitheatre ellipse at dawn.', lens: '16–35mm', tip: 'Book the underground and arena floor add-on. Combined ticket valid 24 hours.', bookUrl: 'https://colosseo.it/', avgVisit: '2 hours', city: 'Rome', didYouKnow: 'The Colosseum could be flooded for mock naval battles — aqueduct channels still visible.' }),
  attractionCard(16, { name: 'Roman Forum & Palatine Hill', address: 'Via della Salara Vecchia · Rome', hours: '09:00–19:00', tube: 'Colosseo M B', ticket: 'Included with Colosseum ticket', bestArrival: '09:30 after Colosseum', photoSpot: 'From Palatine Hill — Forum ruins spread below with Colosseum backdrop.', lens: '24–70mm', tip: 'Enter via Palatine Hill gate to skip Colosseum exit crowds. Allow 2 hours combined.', avgVisit: '2 hours', city: 'Rome', didYouKnow: 'Romulus founded Rome on the Palatine according to legend — imperial palaces crowned this hill.' }),
  attractionCard(18, { name: 'Vatican Museums & Sistine Chapel', address: 'Viale Vaticano · Vatican City', hours: '08:00–20:00 Mon–Sat · last entry 16:00', tube: 'Ottaviano M A · 10 min walk', ticket: '€20 adult · skip-the-line €25+', bestArrival: '08:00', waitSummer: '60–120 min', waitWinter: '30–60 min', photoSpot: 'Spiral staircase exit — Bramante\'s double helix from above.', lens: 'No photos in Sistine Chapel', tip: 'Book early entry or Friday night opening. Route ends at St Peter\'s — no re-entry.', bookUrl: 'https://www.museivaticani.va/', avgVisit: '3–4 hours', city: 'Rome', didYouKnow: 'Michelangelo painted the Sistine Chapel ceiling standing up on scaffolding he designed himself.' }),
  attractionCard(0, { name: 'St Peter\'s Basilica', address: 'Piazza San Pietro · Vatican City', hours: '07:00–19:00 · dome 08:00–18:00', tube: 'Ottaviano M A', ticket: 'Basilica free · dome €10 · crypt free', bestArrival: '07:30', waitSummer: '30–60 min security', waitWinter: '15–30 min', photoSpot: 'From Via della Conciliazione — Bernini\'s colonnade embraces the piazza.', lens: '16–35mm', tip: 'Security line is shortest at opening. Dome climb: 551 steps or lift + 320 steps.', avgVisit: '2 hours', city: 'Rome', localSecret: 'The Swiss Guard barracks tour is rarely advertised — ask at the Vatican post office.' }),
  attractionCard(2, { name: 'Trevi Fountain', address: 'Piazza di Trevi · Rome', hours: 'Always open · best before 08:00', tube: 'Barberini M A · 8 min walk', ticket: 'Free', bestArrival: '07:00', photoSpot: 'From the left side steps — Neptune centred, no foreground heads.', lens: '24mm', tip: 'Throw a coin over your right shoulder with your left hand — guarantees return to Rome.', avgVisit: '20 min', crowd: { morning: 2, afternoon: 5, evening: 5 }, city: 'Rome', didYouKnow: '€3,000 in coins are collected from the fountain daily and donated to Caritas Rome.' }),
  attractionCard(4, { name: 'Pantheon', address: 'Piazza della Rotonda · Rome', hours: '09:00–19:00 · Sun 09:00–18:00', tube: 'Barberini M A · 10 min walk', ticket: 'Free · donation €5 suggested from 2023', bestArrival: '09:00', photoSpot: 'From the fountain — columns and oculus perfectly centred.', lens: '14mm interior for oculus', tip: 'Rain through the oculus is magical — check forecast for a shower day visit.', avgVisit: '45 min', city: 'Rome', didYouKnow: 'The Pantheon dome has been the world\'s largest unreinforced concrete span for 2,000 years.' })
];

const hotels = [
  hotelCard(0, { name: 'Park Hyatt Milan', category: 'Luxury', address: 'Via Tommaso Grossi 1 · Milan', price: '€450–900/night', rating: '9.2', googleRating: '4.7', room: 'Duomo View Suite · beside the cathedral', cancellation: 'Free 48h · flexible rate', tube: 'Duomo M1/M3 · 3 min walk', airport: 'MXP 50 min Malpensa Express · LIN 30 min', nearbyAttractions: 'Duomo 3 min · Galleria 2 min · Navigli 15 min taxi', walkingScore: '98 / 100 — fashion district', breakfast: 'Included in premium rates', idealFor: ['Couple', 'Luxury', 'First-time Milan'], tip: 'Request a Duomo-facing room on a high floor — the spires at night are unforgettable.', bookUrl: 'https://www.hyatt.com/en-US/hotel/italy/park-hyatt-milan/milph', city: 'Milan' }),
  hotelCard(2, { name: 'Armani Hotel Milano', category: 'Luxury', address: 'Via Manzoni 31 · Milan', price: '€500–1,000/night', rating: '9.3', googleRating: '4.8', room: 'Armani Suite · Via Montenapoleone steps away', cancellation: 'Non-refundable suites · flexible on request', tube: 'Montenapoleone M3 · 2 min walk', airport: 'MXP 50 min · LIN 30 min', nearbyAttractions: 'Quadrilatero della Moda 1 min · Duomo 10 min walk · Galleria 8 min', walkingScore: '99 / 100 — luxury shopping district', breakfast: 'Included in suite rates', idealFor: ['Couple', 'Fashion', 'Luxury'], tip: 'Giorgio Armani\'s design DNA in every detail. The Armani/Silos museum is next door.', bookUrl: 'https://www.armani.com/en-it/armani-hotels/armani-hotel-milano/', city: 'Milan' }),
  hotelCard(4, { name: 'Room Mate Giulia', category: 'Mid-Range', address: 'Via Silvio Pellico 4 · Milan', price: '€180–320/night', rating: '9.0', googleRating: '4.6', room: 'Superior Double · design-led', cancellation: 'Free 24h', tube: 'Duomo M1/M3 · 4 min walk', airport: 'MXP 50 min · LIN 30 min', nearbyAttractions: 'Duomo 4 min · Galleria 3 min · La Scala 8 min', walkingScore: '97 / 100 — historic centre', breakfast: 'Buffet €18pp', idealFor: ['Couple', 'Design lovers', 'First-time visitors'], tip: 'Stylish boutique with excellent Duomo proximity at mid-range prices.', bookUrl: 'https://www.room-matehotels.com/en/giulia/', city: 'Milan' }),
  hotelCard(6, { name: 'UNAHOTELS Cusani Milano', category: 'Mid-Range', address: 'Via Cusani 13 · Milan', price: '€160–280/night', rating: '8.8', googleRating: '4.4', room: 'Classic King · business-friendly', cancellation: 'Free 48h', tube: 'Cairoli M1 · 5 min walk · Cadorna 8 min', airport: 'MXP 45 min · Malpensa Express from Cadorna', nearbyAttractions: 'Castello Sforzesco 8 min · Duomo 12 min · Brera 10 min', walkingScore: '94 / 100 — Castello district', breakfast: 'Buffet €16pp', idealFor: ['Business', 'Couple', 'Value'], tip: 'Reliable chain comfort near Sforza Castle — Malpensa Express departs nearby at Cadorna.', bookUrl: 'https://www.unahotels.it/en/hotel/cusani-milano', city: 'Milan' }),
  hotelCard(8, { name: 'Grand Hotel Tremezzo', category: 'Luxury', address: 'Via Regina 8 · Tremezzina · Lake Como', price: '€600–1,200/night', rating: '9.5', googleRating: '4.8', room: 'Lake View Suite · floating pool', cancellation: 'Free 7 days · peak season non-refundable', tube: 'Como ferry to Tremezzo · hotel boat available', airport: 'MXP 1 hr · Como train + taxi 30 min', nearbyAttractions: 'Villa Carlotta 5 min · Bellagio ferry 20 min · Villa Balbianello boat trip', walkingScore: '70 / 100 — lakeside resort', breakfast: 'Included', idealFor: ['Couple', 'Honeymoon', 'Luxury'], tip: 'The floating pool on the lake is iconic. Book the boat transfer from Como for arrival drama.', bookUrl: 'https://www.grandhoteltremezzo.com/', city: 'Como' }),
  hotelCard(10, { name: 'Hotel Villa Flori', category: 'Mid-Range', address: 'Via Nazionale 12 · Como', price: '€200–380/night', rating: '8.9', googleRating: '4.5', room: 'Lake View Room · waterfront', cancellation: 'Free 48h', tube: 'Como San Giovanni 10 min walk', airport: 'MXP 1 hr · Como train from Milan 40 min', nearbyAttractions: 'Como Cathedral 5 min · Ferry pier 3 min · Funicular 8 min', walkingScore: '90 / 100 — lakeside', breakfast: 'Included in most rates', idealFor: ['Couple', 'Lake Como', 'Scenic'], tip: 'Waterfront location steps from the ferry — perfect base for Bellagio day trip.', bookUrl: 'https://www.villaflori.it/', city: 'Como' }),
  hotelCard(12, { name: 'The Gritti Palace', category: 'Luxury', address: 'Campo Santa Maria del Giglio · Venice', price: '€700–1,500/night', rating: '9.4', googleRating: '4.7', room: 'Grand Canal View · historic palazzo', cancellation: 'Free 48h off-season · peak non-refundable', tube: 'Vaporetto Giglio · 1 min walk', airport: 'VCE 1 hr water taxi · Alilaguna 75 min', nearbyAttractions: 'St Mark\'s 8 min · Accademia 5 min · Rialto 12 min', walkingScore: '95 / 100 — San Marco', breakfast: 'Included in premium rates', idealFor: ['Couple', 'Luxury', 'Grand Canal'], tip: 'A 15th-century palazzo on the Grand Canal. Ask for a room facing the water — worth every euro.', bookUrl: 'https://www.marriott.com/en-us/hotels/vcegl-the-gritti-palace-a-luxury-collection-hotel-venice/overview/', city: 'Venice' }),
  hotelCard(14, { name: 'Ca\' Sagredo', category: 'Luxury', address: 'Campo Santa Sofia · Venice', price: '€550–1,000/night', rating: '9.2', googleRating: '4.6', room: 'Canal View · frescoed ballroom', cancellation: 'Free 72h', tube: 'Vaporetto Ca\' d\'Oro · 3 min walk', airport: 'VCE 1 hr', nearbyAttractions: 'Rialto 8 min · St Mark\'s 12 min · Fondamenta Nove 5 min', walkingScore: '93 / 100 — Cannaregio edge', breakfast: 'Buffet included', idealFor: ['Couple', 'Art lovers', 'Luxury'], tip: '17th-century palazzo with Tiepolo frescoes. Quieter than San Marco but central.', bookUrl: 'https://www.casagredohotel.com/', city: 'Venice' }),
  hotelCard(16, { name: 'Hotel Rialto', category: 'Mid-Range', address: 'Riva del Ferro · Venice', price: '€180–350/night', rating: '8.6', googleRating: '4.3', room: 'Canal View · steps from Rialto Bridge', cancellation: 'Free 48h', tube: 'Vaporetto Rialto · 1 min walk', airport: 'VCE 1 hr', nearbyAttractions: 'Rialto Market 2 min · St Mark\'s 10 min · Grand Canal 0 min', walkingScore: '96 / 100 — Rialto', breakfast: 'Extra €15pp', idealFor: ['Couple', 'First-time Venice', 'Location'], tip: 'Cannot beat the location beside Rialto Bridge. Book canal-facing for the full Venice experience.', bookUrl: 'https://www.hotelrialto-venice.com/', city: 'Venice' }),
  hotelCard(18, { name: 'Hotel Brunelleschi', category: 'Luxury', address: 'Piazza Sant\'Elisabetta 3 · Florence', price: '€350–650/night', rating: '9.1', googleRating: '4.7', room: 'Duomo View · Byzantine tower suite', cancellation: 'Free 48h', tube: 'SMN 10 min walk · Duomo 3 min', airport: 'FLR 20 min taxi · 30 min tram', nearbyAttractions: 'Duomo 3 min · Uffizi 8 min · Ponte Vecchio 10 min', walkingScore: '98 / 100 — historic centre', breakfast: 'Included in premium rates', idealFor: ['Couple', 'Luxury', 'Duomo views'], tip: 'Built around a Byzantine tower and Roman ruins visible in the lobby. Duomo views from upper floors.', bookUrl: 'https://www.brunelleschi.it/', city: 'Florence' }),
  hotelCard(0, { name: 'Hotel Spadai', category: 'Mid-Range', address: 'Via dei Servi 40 · Florence', price: '€200–380/night', rating: '8.9', googleRating: '4.5', room: 'Superior Double · Duomo view available', cancellation: 'Free 24h', tube: 'SMN 12 min walk · Duomo 5 min', airport: 'FLR 25 min', nearbyAttractions: 'Duomo 5 min · Accademia 10 min · Uffizi 10 min', walkingScore: '97 / 100 — Duomo quarter', breakfast: 'Buffet €16pp', idealFor: ['Couple', 'First-time Florence', 'Value'], tip: 'Modern boutique one block from the Duomo. Rooftop terrace for aperitivo with cathedral views.', bookUrl: 'https://www.hotelspadai.it/', city: 'Florence' }),
  hotelCard(2, { name: 'Hotel de Russie', category: 'Luxury', address: 'Via del Babuino 9 · Rome', price: '€550–1,100/night', rating: '9.3', googleRating: '4.7', room: 'Deluxe Room · Secret Garden', cancellation: 'Free 48h', tube: 'Spagna M A · 3 min walk', airport: 'FCO 45 min · CIA 30 min', nearbyAttractions: 'Spanish Steps 3 min · Piazza del Popolo 5 min · Trevi 12 min', walkingScore: '96 / 100 — Tridente', breakfast: 'Included in premium rates', idealFor: ['Couple', 'Luxury', 'Central Rome'], tip: 'Rocco Forte\'s Roman flagship. The Secret Garden is Rome\'s most tranquil hotel oasis.', bookUrl: 'https://www.roccofortehotels.com/hotels-and-resorts/hotel-de-russie/', city: 'Rome' }),
  hotelCard(4, { name: 'The First Roma Arte', category: 'Luxury', address: 'Via del Vantaggio 14 · Rome', price: '€400–800/night', rating: '9.0', googleRating: '4.6', room: 'Art Suite · contemporary collection', cancellation: 'Free 48h', tube: 'Flaminio M A · 8 min walk · Spagna 10 min', airport: 'FCO 50 min · CIA 35 min', nearbyAttractions: 'Piazza del Popolo 8 min · Villa Borghese 10 min · Spanish Steps 12 min', walkingScore: '92 / 100 — Pincian Hill', breakfast: 'Buffet included', idealFor: ['Couple', 'Art lovers', 'Luxury'], tip: 'Hotel-as-gallery with rotating contemporary art. Rooftop restaurant overlooks the city.', bookUrl: 'https://www.precioushotels.com/the-first-roma-arte/', city: 'Rome' }),
  hotelCard(6, { name: 'Hotel Artemide', category: 'Mid-Range', address: 'Via Nazionale 22 · Rome', price: '€220–400/night', rating: '9.0', googleRating: '4.6', room: 'Executive Room · rooftop spa', cancellation: 'Free 24h', tube: 'Repubblica M A · 2 min walk · Termini 8 min', airport: 'FCO 40 min · CIA 25 min', nearbyAttractions: 'Termini 8 min · Trevi 12 min · Colosseum 15 min metro', walkingScore: '94 / 100 — Via Nazionale', breakfast: 'Buffet included', idealFor: ['Couple', 'Business', 'Spa'], tip: 'Award-winning rooftop spa and excellent location on Via Nazionale. Easy metro access everywhere.', bookUrl: 'https://www.hotelartemide.it/', city: 'Rome' })
];

const dining = [
  diningCard(0, { name: 'Ratanà', category: 'Milanese · Risotto', address: 'Via Gaetano de Castillia 28 · Milan', price: '€35–55/head', famous: 'Risotto alla Milanese', reservation: 'Essential weekends', wait: '0 with booking · 30 min walk-in', tip: 'The gold-standard Risotto alla Milanese — saffron, bone marrow, patience.', city: 'Milan', dishes: [{ name: 'Risotto alla Milanese', img: img(), desc: 'Saffron risotto — Milan\'s signature dish.' }, { name: 'Ossobuco', img: img(), desc: 'Braised veal shank, traditional pairing.' }, { name: 'Mondeghili', img: img(), desc: 'Milanese meatballs — street food elevated.' }] }),
  diningCard(2, { name: 'Trattoria del Nuovo Macello', category: 'Milanese · Cotoletta', address: 'Via Cesare Lombroso 20 · Milan', price: '€30–50/head', famous: 'Cotoletta alla Milanese', reservation: 'Recommended', wait: '15–30 min at 13:00', tip: 'Proper Cotoletta — pounded veal, breadcrumb, butter. Order it pink inside.', city: 'Milan' }),
  diningCard(4, { name: 'Locanda Tirlindana', category: 'Lake Como · Seafood', address: 'Via XX Settembre 15 · Bellagio', price: '€40–65/head', famous: 'Lake Fish · Missoltini', reservation: 'Recommended summer', wait: '20 min at lunch', tip: 'Fresh lake fish — lavarello, perch, missoltini (sun-dried shad). Waterfront table essential.', city: 'Como' }),
  diningCard(6, { name: 'Osteria del Ponte', category: 'Lombard · Polenta', address: 'Via IV Novembre 24 · Como', price: '€25–40/head', famous: 'Polenta con formaggio', reservation: 'Walk-in OK weekdays', wait: '10–20 min', tip: 'Hearty polenta dishes — mountain comfort food before or after the lake.', city: 'Como' }),
  diningCard(8, { name: 'Antiche Carampane', category: 'Venetian · Seafood', address: 'Ruga Giuffa · Venice', price: '€45–70/head', famous: 'Seafood Pasta · Granseola', reservation: 'Essential 1+ weeks', wait: '0 with booking', tip: 'No tourist menu — Venetian seafood pasta with whatever the lagoon delivered that morning.', city: 'Venice' }),
  diningCard(10, { name: 'Cantina Do Mori', category: 'Venetian · Cicchetti', address: 'Calle dei Do Mori · Venice', price: '€15–30/head', famous: 'Cicchetti · Ombra', reservation: 'Walk-in only', wait: 'Standing room at peak', tip: 'Historic bacaro since 1462. Small plates (cicchetti) and a glass of wine (ombra) at the bar.', city: 'Venice' }),
  diningCard(12, { name: 'Trattoria Mario', category: 'Florentine · Steak', address: 'Via Rosina 2 · Florence', price: '€35–55/head', famous: 'Bistecca Fiorentina', reservation: 'Walk-in · queue from 12:00', wait: '30–60 min at lunch', tip: 'Communal tables, no-nonsense service. Bistecca Fiorentina is sold by weight — minimum 1 kg to share.', city: 'Florence' }),
  diningCard(14, { name: 'Osteria delle Tre Panche', category: 'Tuscan · Truffle', address: 'Via delle Tre Panche 20 · Florence', price: '€50–80/head', famous: 'Truffle Pasta · Tagliolini al tartufo', reservation: 'Essential', wait: '0 with booking', michelin: '—', tip: 'Tiny room, truffle shaved at the table. Book weeks ahead in autumn truffle season.', city: 'Florence' }),
  diningCard(16, { name: 'Roscioli Salumeria', category: 'Roman · Pasta', address: 'Via dei Giubbonari 21 · Rome', price: '€35–55/head', famous: 'Carbonara · Cacio e Pepe · Amatriciana', reservation: 'Essential 2+ weeks', wait: '0 with booking', tip: 'The Roman pasta trinity done perfectly. Carbonara with guanciale, Cacio e Pepe with Pecorino Romano.', city: 'Rome' }),
  diningCard(18, { name: 'Supplizio', category: 'Roman · Street Food', address: 'Via dei Banchi Vecchi 143 · Rome', price: '€12–25/head', famous: 'Supplì · Fried rice balls', reservation: 'Walk-in', wait: '10–15 min', tip: 'Modern take on Supplì — Rome\'s answer to arancini. Try the cacio e pepe version.', city: 'Rome' }),
  diningCard(0, { name: 'Luini Panzerotti', category: 'Milan · Street Food', address: 'Via Santa Radegonda 16 · Milan', price: '€5–12/head', famous: 'Panzerotti · fried calzone', reservation: 'Walk-in · expect a queue', wait: '15–30 min at 13:00', dressCode: 'Casual', tip: 'Milan institution since 1888. Grab a panzerotti to go and eat in the Duomo piazza.', city: 'Milan' }),
  cafeCard(2, 'Marchesi 1824', 'Italian Pastries · Espresso', 'Via Santa Maria alla Porta 11 · Milan', 'Milan'),
  cafeCard(4, 'Pasticceria Monti', 'Lake Como pastries · meringue', 'Via Garibaldi 10 · Como', 'Como'),
  cafeCard(6, 'Caffè Florian', 'Historic café · hot chocolate', 'Piazza San Marco 57 · Venice', 'Venice'),
  cafeCard(8, 'Ditta Artigianale', 'Specialty coffee · brunch', 'Via dei Neri 32 · Florence', 'Florence'),
  cafeCard(10, 'Sant\'Eustachio Il Caffè', 'Gran caffè · espresso', 'Piazza di Sant\'Eustachio 82 · Rome', 'Rome'),
  cafeCard(12, 'Giolitti', 'Gelato · historic pasticceria', 'Via degli Uffici del Vicario 40 · Rome', 'Rome')
];

const dayBudget = {
  budget: { total: '€100–150 per person', includes: ['2nd-class regional trains', 'Panzerotti & pizza al taglio', 'Free churches & piazzas', 'One paid museum'] },
  mid: { total: '€220–350 per person', includes: ['Frecciarossa 2nd class', 'Sit-down trattoria meals', 'Skip-the-line tickets', 'Gondola or ferry'] },
  luxury: { total: '€600–1,200 per person', includes: ['Frecciarossa Business', 'Michelin & lakeside dining', 'Private guides', '5-star palazzo hotels'] }
};

function stop(time, timeOfDay, name, desc, transit, icon, city) {
  return { time, timeOfDay, name, desc, transit, icon, mapUrl: mapQuery(name, city) };
}

const itineraries = [
  {
    day: 1,
    title: 'Milan — Fashion & Architecture',
    color: '#b45309',
    routePreview: '7 stops · start 08:30 · end 21:00 · ≈ 4 km walking',
    mapUrl: 'https://www.google.com/maps/dir/Marchesi+1824+Milan/Duomo+di+Milano/Starbucks+Reserve+Roastery+Milan/Luini+Milan/Galleria+Vittorio+Emanuele+II/Castello+Sforzesco/Navigli+Milan',
    budget: dayBudget,
    photos: [img(), img(), img(), img()],
    stops: [
      stop('08:30', 'morning', 'Marchesi 1824', 'Italian pastries & espresso to start', 'Walk from hotel', 'walk', 'Milan'),
      stop('09:30', 'morning', 'Duomo di Milano', 'Cathedral & rooftop terraces · 2 hours', 'Walk 5 min', 'walk', 'Milan'),
      stop('12:00', 'afternoon', 'Starbucks Reserve Roastery', "One of the world's most beautiful Starbucks", 'Walk 8 min', 'walk', 'Milan'),
      stop('13:30', 'afternoon', 'Luini Panzerotti', 'Milan institution since 1888 · lunch on the go', 'Walk 6 min', 'walk', 'Milan'),
      stop('15:00', 'afternoon', 'Galleria Vittorio Emanuele II', 'Luxury shopping under the glass dome', 'Walk 3 min', 'walk', 'Milan'),
      stop('17:00', 'evening', 'Sforza Castle', 'Renaissance fortress & Parco Sempione', 'Walk 12 min', 'walk', 'Milan'),
      stop('19:30', 'night', 'Navigli District', 'Aperitivo & dinner by the canals', 'Metro M2 Porta Genova', 'metro', 'Milan')
    ]
  },
  {
    day: 2,
    title: 'Lake Como — Lakes & Villages',
    color: '#2d6a4f',
    routePreview: '5 stops · start 08:00 · end 19:00 · train + ferry',
    mapUrl: 'https://www.google.com/maps/dir/Milano+Centrale/Como+Cathedral/Bellagio/Villa+Melzi+Gardens/Varenna/Milano+Centrale',
    budget: dayBudget,
    photos: [img(), img(), img(), img()],
    stops: [
      stop('08:00', 'morning', 'Milan → Como', 'Frecciarossa / regional · 40 min', 'Train from Milano Centrale', 'train', 'Como'),
      stop('09:30', 'morning', 'Como Cathedral', 'Old town & lakeside promenade', 'Walk 5 min from station', 'walk', 'Como'),
      stop('11:00', 'afternoon', 'Bellagio', 'Ferry to the pearl of Lake Como · lunch', 'Ferry 1 hr', 'boat', 'Como'),
      stop('14:00', 'afternoon', 'Villa Melzi Gardens', 'Romantic lakeside gardens', 'Walk 10 min', 'walk', 'Como'),
      stop('16:30', 'evening', 'Varenna', 'Golden-hour village stroll before return', 'Ferry 30 min', 'boat', 'Como'),
      stop('19:00', 'night', 'Return to Milan', 'Evening train back to base', 'Train 40 min', 'train', 'Milan')
    ]
  },
  {
    day: 3,
    title: 'Verona → Venice',
    color: '#9a3412',
    routePreview: '6 stops · start 08:00 · end 20:30 · two train legs',
    mapUrl: 'https://www.google.com/maps/dir/Milano+Centrale/Casa+di+Giulietta+Verona/Piazza+delle+Erbe+Verona/Arena+di+Verona/Venezia+Santa+Lucia/Grand+Canal+Venice',
    budget: dayBudget,
    photos: [img(), img(), img(), img()],
    stops: [
      stop('08:00', 'morning', 'Milan → Verona', 'Frecciarossa · 1 hr 15 min', 'Train from Milano Centrale', 'train', 'Verona'),
      stop('09:30', 'morning', "Juliet's House", "Balcony & love-letter courtyard", 'Walk 15 min', 'walk', 'Verona'),
      stop('10:45', 'morning', 'Piazza delle Erbe', "Verona's market square & frescoed façades", 'Walk 3 min', 'walk', 'Verona'),
      stop('11:30', 'afternoon', 'Arena di Verona', 'Roman amphitheatre still hosting opera', 'Walk 5 min', 'walk', 'Verona'),
      stop('15:00', 'afternoon', 'Verona → Venice', 'Frecciarossa · 1 hr 15 min', 'Train to Venezia Santa Lucia', 'train', 'Venice'),
      stop('17:30', 'evening', 'Grand Canal', 'Vaporetto Line 1 · palazzo sunset', 'Vaporetto', 'boat', 'Venice'),
      stop('20:00', 'night', 'Antiche Carampane', 'Venetian seafood dinner', 'Walk 12 min', 'walk', 'Venice')
    ]
  },
  {
    day: 4,
    title: 'Venice — Canals & Islands',
    color: '#0077b6',
    routePreview: '6 stops · start 09:30 · end 19:30 · vaporetto day',
    mapUrl: "https://www.google.com/maps/dir/St+Mark's+Basilica+Venice/Doge's+Palace+Venice/Rialto+Market+Venice/Grand+Canal+Venice/Burano/San+Marco+Venice",
    budget: dayBudget,
    photos: [img(), img(), img(), img()],
    stops: [
      stop('09:30', 'morning', "St Mark's Basilica", 'Golden mosaics · arrive at opening', 'Vaporetto San Marco', 'boat', 'Venice'),
      stop('11:00', 'morning', "Doge's Palace", 'Bridge of Sighs & state rooms', 'Walk 2 min', 'walk', 'Venice'),
      stop('13:00', 'afternoon', 'Rialto Market', 'Cicchetti lunch by the fish market', 'Vaporetto 1 stop', 'boat', 'Venice'),
      stop('15:00', 'afternoon', 'Gondola Ride', 'Classic 30-min glide through side canals', 'Walk 5 min', 'walk', 'Venice'),
      stop('16:30', 'evening', 'Burano', 'Optional · rainbow fishing island', 'Vaporetto 45 min', 'boat', 'Venice'),
      stop('18:30', 'night', 'Grand Canal', 'Sunset over the lagoon', 'Vaporetto', 'boat', 'Venice')
    ]
  },
  {
    day: 5,
    title: 'Florence — Renaissance',
    color: '#92400e',
    routePreview: '6 stops · start 08:00 · end 19:30 · ≈ 4 km walking',
    mapUrl: 'https://www.google.com/maps/dir/Venezia+Santa+Lucia/Duomo+di+Firenze/Piazza+della+Signoria/Uffizi+Gallery/Ponte+Vecchio/Piazzale+Michelangelo',
    budget: dayBudget,
    photos: [img(), img(), img(), img()],
    stops: [
      stop('08:00', 'morning', 'Venice → Florence', 'Frecciarossa · 2 hours', 'Train to Firenze SMN', 'train', 'Florence'),
      stop('10:30', 'morning', 'Duomo di Firenze', "Brunelleschi's dome & baptistery", 'Walk 12 min', 'walk', 'Florence'),
      stop('12:30', 'afternoon', 'Piazza della Signoria', 'Open-air sculpture & Palazzo Vecchio', 'Walk 6 min', 'walk', 'Florence'),
      stop('14:00', 'afternoon', 'Uffizi Gallery', 'Botticelli, da Vinci & the Medici collection', 'Walk 3 min', 'walk', 'Florence'),
      stop('16:30', 'evening', 'Ponte Vecchio', 'Goldsmiths bridge over the Arno', 'Walk 5 min', 'walk', 'Florence'),
      stop('18:30', 'night', 'Piazzale Michelangelo', 'The definitive Florence sunset', 'Bus 12 · 20 min uphill', 'bus', 'Florence')
    ]
  },
  {
    day: 6,
    title: 'Tuscany — Wine & Hilltowns',
    color: '#2d6a4f',
    routePreview: 'Choose your adventure · day trip from Florence',
    mapUrl: 'https://www.google.com/maps/dir/Florence/Chianti/Siena/San+Gimignano/Pisa/Florence',
    budget: dayBudget,
    photos: [img(), img(), img(), img()],
    stops: [
      stop('09:00', 'morning', 'Option A · Chianti Wine Tour', 'Vineyards & tastings between Florence & Siena', 'Guided car / minibus', 'cab', 'Florence'),
      stop('09:00', 'morning', 'Option B · Pisa', 'Leaning Tower & Piazza dei Miracoli', 'Train 1 hr from SMN', 'train', 'Florence'),
      stop('09:00', 'morning', 'Option C · Siena', 'Piazza del Campo & Gothic Duomo', 'Bus 1 hr 15 min', 'bus', 'Florence'),
      stop('12:00', 'afternoon', 'Option D · San Gimignano', 'Medieval towers & saffron hills', 'Bus / car', 'cab', 'Florence'),
      stop('18:30', 'night', 'Return to Florence', 'Evening aperitivo back in the city', 'Train / bus', 'train', 'Florence')
    ]
  },
  {
    day: 7,
    title: 'Rome — Ancient Grandeur',
    color: '#b45309',
    routePreview: '6 stops · start 08:00 · end 21:00 · Metro + walking',
    mapUrl: 'https://www.google.com/maps/dir/Firenze+SMN/Colosseum+Rome/Roman+Forum+Rome/Pantheon+Rome/Trevi+Fountain+Rome/Trastevere+Rome',
    budget: dayBudget,
    photos: [img(), img(), img(), img()],
    stops: [
      stop('08:00', 'morning', 'Florence → Rome', 'Frecciarossa · 1 hr 30 min', 'Train to Roma Termini', 'train', 'Rome'),
      stop('10:00', 'morning', 'Colosseum', 'Arena floor & underground · book ahead', 'Metro B Colosseo', 'metro', 'Rome'),
      stop('12:00', 'afternoon', 'Roman Forum & Palatine Hill', 'Heart of the ancient empire', 'Walk 5 min', 'walk', 'Rome'),
      stop('14:30', 'afternoon', 'Pantheon', 'Best-preserved Roman temple & oculus', 'Walk 20 min', 'walk', 'Rome'),
      stop('16:00', 'evening', 'Trevi Fountain', 'Toss a coin over your shoulder', 'Walk 8 min', 'walk', 'Rome'),
      stop('19:30', 'night', 'Trastevere', 'Cobbled dinner quarter · Roman pasta', 'Tram 8', 'tram', 'Rome')
    ]
  },
  {
    day: 8,
    title: 'Vatican & Rome Farewell',
    color: '#92400e',
    routePreview: '7 stops · start 08:00 · end airport transfer',
    mapUrl: "https://www.google.com/maps/dir/St+Peter's+Basilica/Vatican+Museums/Borgo+Pio+Rome/Spanish+Steps+Rome/Piazza+Navona+Rome/Giolitti+Rome",
    budget: dayBudget,
    photos: [img(), img(), img(), img()],
    stops: [
      stop('08:00', 'morning', "St Peter's Basilica", 'Dome climb before the crowds', 'Metro A Ottaviano', 'metro', 'Rome'),
      stop('10:00', 'morning', 'Vatican Museums & Sistine Chapel', 'Michelangelo ceiling · book early entry', 'Walk 10 min', 'walk', 'Rome'),
      stop('13:00', 'afternoon', 'Borgo Pio', 'Lunch on a cobbled Vatican lane', 'Walk 8 min', 'walk', 'Rome'),
      stop('15:00', 'afternoon', 'Spanish Steps', 'Tridente shopping & people-watching', 'Metro A Spagna', 'metro', 'Rome'),
      stop('16:30', 'evening', 'Piazza Navona', 'Bernini fountains & baroque façades', 'Walk 12 min', 'walk', 'Rome'),
      stop('17:30', 'evening', 'Giolitti', 'Historic gelato as a farewell', 'Walk 6 min', 'walk', 'Rome'),
      stop('19:00', 'night', 'Airport Transfer', 'Leonardo Express to FCO · 32 min', 'Train from Termini', 'train', 'Rome')
    ]
  }
];

const PLAN = {
  meta: {
    city: 'Italy',
    country: 'Italy',
    tagline: 'Milan to Rome by high-speed train — fashion, lakes, canals, Renaissance and ancient grandeur in eight perfect days.',
    badge: 'Discover · 2026 Edition',
    edition: '2026',
    stats: {
      chapters: 46,
      qrCodes: '160+',
      attractions: attractions.length,
      hotels: hotels.length,
      dining: dining.length,
      days: itineraries.length
    },
    theme: {
      accent: '#b45309',
      accentSoft: '#fef3c7',
      accentDeep: '#92400e',
      heroImage: HERO_WIKI,
      transitLabel: 'Train',
      tube: '#b45309',
      parks: '#2d6a4f',
      river: '#0077b6',
      gold: '#b8860b',
      navy: '#1a2744'
    }
  },
  welcome: {
    editorLetter: 'Italy is not one destination but three personalities strung along a single high-speed line. Milan is fashion, design and rooftop cathedrals. The north is alpine lakes, Venetian canals and the balconies of Verona. The centre is Renaissance Florence, the vineyards of Tuscany and the ancient grandeur of Rome. This eight-day companion follows the Frecciarossa route — Milan, Lake Como, Verona, Venice, Florence, Tuscany and Rome — with every hour mapped and every QR code ready.\n\nEvery attraction, hotel and restaurant carries a scannable map link. Book your trains in advance, pack light for the platforms, and let Italy unfold city by city.',
    howToUse: 'Point your phone camera at any QR code and the location opens in Google Maps in one tap. Colour-coded day chapters follow the train route north to south. Book Frecciarossa or Italo tickets early for the best fares.\n\n— The Editors, Italy Bureau'
  },
  essentials: {
    currency: { label: '€ Euro', note: 'Cards accepted almost everywhere. Carry some cash for small cafés, markets and gelato.' },
    power: { label: 'Type C/F/L · 230V', note: 'Italian three-pin (Type L) and European two-pin. Bring a universal adapter.' },
    sim: { label: 'eSIM or TIM / Vodafone', note: 'eSIM activates on arrival. TIM and Vodafone tourist SIMs at airports and stations.' },
    language: { label: 'Italian', note: 'English in hotels and tourist sites. Learn ciao, grazie and prego — locals appreciate it.' },
    tipping: { label: 'Round up · coperto', note: 'Service rarely added; round up or leave a few euros. Watch for coperto (cover charge).' },
    emergency: { label: '112 · 118 · 115', note: 'European emergency · Ambulance · Fire.' },
    tapWater: { label: 'Safe to drink', note: 'Tap water is safe. Refill at the free nasoni fountains across Rome.' },
    timezone: { label: 'CET · UTC+1', note: 'Daylight saving (CEST, UTC+2) from late March to late October.' }
  },
  arrival: [
    { step: '01', title: 'Fly in', desc: 'Most itineraries arrive at Milan Malpensa (MXP) or Linate (LIN) and depart from Rome Fiumicino (FCO). Open-jaw tickets save backtracking.' },
    { step: '02', title: 'SIM / eSIM', desc: 'Activate your eSIM on airport Wi-Fi, or buy a TIM tourist SIM (≈€20 for 20GB) at arrivals.' },
    { step: '03', title: 'Cash', desc: 'Withdraw €200–300 from a bank ATM (Bancomat). Avoid Euronet machines — poor rates and fees.' },
    { step: '04', title: 'Book trains', desc: 'Reserve Frecciarossa (Trenitalia) or Italo seats in advance on the app. Cheaper the earlier you book.' },
    { step: '05', title: 'Airport to city', desc: 'MXP: Malpensa Express to Milano Centrale, 50 min. FCO: Leonardo Express to Termini, 32 min.' },
    { step: '06', title: 'Hotel', desc: 'Check-in from 14:00. Most hotels hold luggage from morning — drop bags and start exploring.' },
    { step: '07', title: 'First meal', desc: 'In Milan, grab a panzerotti at Luini and an espresso at Marchesi before the Duomo rooftop.' }
  ],
  packing: {
    spring: { months: 'MAR–MAY', temp: '10–22 °C · occasional rain', items: ['Light layers', 'Comfortable walking shoes', 'Compact umbrella', 'Scarf for churches', 'Sunglasses', 'Refillable bottle'] },
    summer: { months: 'JUN–AUG', temp: '25–35 °C · hot & busy', items: ['Breathable clothing', 'Sunhat & SPF 30', 'Shoulder cover for churches', 'Sandals + walking shoes', 'Refillable bottle', 'Portable fan'] },
    autumn: { months: 'SEP–NOV', temp: '12–24 °C · golden light', items: ['Light jacket', 'Layerable knits', 'Waterproof shoes', 'Umbrella', 'Camera', 'Scarf'] },
    winter: { months: 'DEC–FEB', temp: '2–12 °C · crisp & quiet', items: ['Warm coat', 'Gloves & scarf', 'Waterproof boots', 'Layered knits', 'Umbrella', 'Moisturiser'] }
  },
  weatherTable: {
    rows: [
      { month: 'Jan', avgTemp: '3 / 11 °C', rain: '35%', sunset: '17:00', crowds: 'Low', recommend: 'Museums · no queues' },
      { month: 'Feb', avgTemp: '4 / 13 °C', rain: '35%', sunset: '17:45', crowds: 'Low', recommend: 'Venice Carnival' },
      { month: 'Mar', avgTemp: '7 / 16 °C', rain: '40%', sunset: '18:30', crowds: 'Rising', recommend: 'Shoulder-season value' },
      { month: 'Apr', avgTemp: '10 / 19 °C', rain: '45%', sunset: '19:45', crowds: 'Medium', recommend: 'Lakes reopen · gardens bloom' },
      { month: 'May', avgTemp: '14 / 23 °C', rain: '40%', sunset: '20:15', crowds: 'Medium', recommend: 'Best month overall' },
      { month: 'Jun', avgTemp: '18 / 28 °C', rain: '35%', sunset: '20:45', crowds: 'High', recommend: 'Verona opera opens' },
      { month: 'Jul', avgTemp: '21 / 32 °C', rain: '25%', sunset: '20:45', crowds: 'Peak', recommend: 'Head to Lake Como to cool off' },
      { month: 'Aug', avgTemp: '21 / 32 °C', rain: '30%', sunset: '20:15', crowds: 'Peak', recommend: 'Cities empty mid-August' },
      { month: 'Sep', avgTemp: '17 / 27 °C', rain: '40%', sunset: '19:15', crowds: 'High', recommend: 'Warm days · thinner crowds' },
      { month: 'Oct', avgTemp: '13 / 21 °C', rain: '55%', sunset: '18:15', crowds: 'Medium', recommend: 'Tuscan harvest & truffles' },
      { month: 'Nov', avgTemp: '8 / 15 °C', rain: '60%', sunset: '17:00', crowds: 'Low', recommend: 'Museums · cosy trattorie' },
      { month: 'Dec', avgTemp: '4 / 11 °C', rain: '45%', sunset: '16:45', crowds: 'Medium', recommend: 'Christmas markets & lights' }
    ],
    sweetSpot: 'May and late September deliver the best balance — warm days, comfortable train platforms, lakes and gardens at their finest, and crowds below the July–August peak. Book Frecciarossa seats and headline museums well ahead in any season.'
  },
  transport: {
    modes: [
      { icon: 'train', name: 'High-speed Train', price: '€20–90', desc: 'Frecciarossa & Italo link every city on this route. Book early on the app for the cheapest fares.' },
      { icon: 'walk', name: 'Walk', price: 'Free', desc: 'Italian historic centres are compact — walking is the best way to explore all six cities.' },
      { icon: 'metro', name: 'Metro', price: '€1.50–2', desc: 'Milan and Rome have efficient metros. Buy tickets at machines or via app; validate before boarding.' },
      { icon: 'boat', name: 'Vaporetto', price: '€9.50', desc: 'Venice water buses along the Grand Canal and to the islands. A day pass (€25) pays off quickly.' },
      { icon: 'boat', name: 'Lake Ferry', price: '€5–15', desc: 'Lake Como ferries connect Como, Bellagio and Varenna. Buy tickets at the pier.' },
      { icon: 'cab', name: 'Taxi', price: '€10–50', desc: 'Metered white taxis. Use FreeNow or itTaxi apps. Fixed fares to some airports.' }
    ],
    oysterTips: [
      { title: 'Book trains early', desc: 'Frecciarossa and Italo fares rise as seats sell. Booking weeks ahead can cut the Milan–Rome fare by half.' },
      { title: 'Validate regional tickets', desc: 'Paper regional tickets (e.g. Milan–Como) must be validated in the green/white machines before boarding — fines apply otherwise.' },
      { title: 'Venice vaporetto pass', desc: 'A 24- or 48-hour ACTV pass beats single €9.50 tickets if you ride more than twice.' },
      { title: 'Skip-the-line matters', desc: 'Uffizi, Colosseum, Vatican and Doge’s Palace sell timed-entry tickets. Book online to avoid 60–120 min queues.' }
    ],
    exit6Tip: 'Step off the Frecciarossa at Roma Termini and the city hits all at once — head straight to your hotel, drop your bag, and let Rome reveal itself on foot. The Colosseum is two metro stops away.'
  },
  maps: {
    overview: {
      caption: 'A schematic map of the Milan-to-Rome route — for exact directions, scan any QR code in this guide.',
      markers: [
        { name: 'Duomo di Milano', type: 'attraction', lat: 45.4642, lng: 9.1919 },
        { name: 'Bellagio', type: 'attraction', lat: 45.9865, lng: 9.2612 },
        { name: 'Arena di Verona', type: 'attraction', lat: 45.4390, lng: 10.9944 },
        { name: "St Mark's Basilica", type: 'attraction', lat: 45.4345, lng: 12.3397 },
        { name: 'Duomo di Firenze', type: 'attraction', lat: 43.7731, lng: 11.2560 },
        { name: 'Colosseum', type: 'attraction', lat: 41.8902, lng: 12.4922 },
        { name: 'Vatican Museums & Sistine Chapel', type: 'attraction', lat: 41.9065, lng: 12.4536 },
        { name: 'Grand Canal', type: 'district', lat: 45.4408, lng: 12.3325 },
        { name: 'Park Hyatt Milan', type: 'hotel', lat: 45.4655, lng: 9.1900 },
        { name: 'The Gritti Palace', type: 'hotel', lat: 45.4319, lng: 12.3336 },
        { name: 'Hotel de Russie', type: 'hotel', lat: 41.9095, lng: 12.4769 },
        { name: 'Roscioli Salumeria', type: 'dining', lat: 41.8946, lng: 12.4726 },
        { name: 'Trattoria Mario', type: 'dining', lat: 43.7776, lng: 11.2556 }
      ]
    }
  },
  attractions,
  hotels,
  dining,
  itineraries,
  rainyDay: [
    { name: 'Uffizi Gallery', address: 'Florence', desc: 'Renaissance masterpieces · indoor', img: img(), mapUrl: mapQuery('Uffizi Gallery', 'Florence') },
    { name: 'Vatican Museums & Sistine Chapel', address: 'Vatican City', desc: 'Michelangelo ceiling · vast collection', img: img(), mapUrl: mapQuery('Vatican Museums & Sistine Chapel', 'Rome') },
    { name: "Doge's Palace", address: 'Venice', desc: 'Gothic state rooms & Bridge of Sighs', img: img(), mapUrl: mapQuery("Doge's Palace", 'Venice') },
    { name: 'Galleria Vittorio Emanuele II', address: 'Milan', desc: 'Covered arcade · shopping & cafés', img: img(), mapUrl: mapQuery('Galleria Vittorio Emanuele II', 'Milan') },
    { name: 'Pantheon', address: 'Rome', desc: 'Roman temple · dry under the dome', img: img(), mapUrl: mapQuery('Pantheon', 'Rome') },
    { name: 'Caffè Florian', address: 'Venice', desc: "Europe's oldest café · hot chocolate", img: img(), mapUrl: mapQuery('Caffè Florian', 'Venice') }
  ],
  sunnyDay: [
    { name: 'Bellagio', address: 'Lake Como', desc: 'Lakeside village & ferry hopping', img: img(), mapUrl: mapQuery('Bellagio', 'Como') },
    { name: 'Piazzale Michelangelo', address: 'Florence', desc: 'Panoramic sunset over the Arno', img: img(), mapUrl: mapQuery('Piazzale Michelangelo', 'Florence') },
    { name: 'Grand Canal', address: 'Venice', desc: 'Vaporetto ride & gondolas', img: img(), mapUrl: mapQuery('Grand Canal', 'Venice') },
    { name: 'Navigli District', address: 'Milan', desc: 'Canalside aperitivo hour', img: img(), mapUrl: mapQuery('Navigli District', 'Milan') },
    { name: 'Roman Forum & Palatine Hill', address: 'Rome', desc: 'Ancient ruins in the open air', img: img(), mapUrl: mapQuery('Roman Forum & Palatine Hill', 'Rome') },
    { name: 'Villa Melzi Gardens', address: 'Bellagio', desc: 'Lakeside gardens & maples', img: img(), mapUrl: mapQuery('Villa Melzi Gardens', 'Como') }
  ],
  hiddenGems: [
    { name: 'Varenna', desc: 'Quieter Lake Como village of pastel houses', img: img(), mapUrl: mapQuery('Varenna', 'Como') },
    { name: 'Cantina Do Mori', desc: "Venice's oldest bacaro · cicchetti since 1462", img: img(), mapUrl: mapQuery('Cantina Do Mori', 'Venice') },
    { name: 'Burano', desc: 'Rainbow fishing island in the lagoon', img: img(), mapUrl: mapQuery('Burano', 'Venice') },
    { name: 'Piazza delle Erbe', desc: 'Verona’s frescoed market square', img: img(), mapUrl: mapQuery('Piazza delle Erbe', 'Verona') },
    { name: 'Borgo Pio', desc: 'Cobbled lane of trattorie by the Vatican', img: img(), mapUrl: mapQuery('Borgo Pio', 'Rome') },
    { name: 'Trastevere', desc: 'Rome’s bohemian dinner quarter', img: img(), mapUrl: mapQuery('Trastevere', 'Rome') }
  ],
  warnings: [
    { title: 'Validate regional tickets', desc: 'Regional train and some bus tickets must be validated before boarding. High-speed Frecciarossa/Italo tickets are seat-specific and need no validation.' },
    { title: 'Pickpockets on transit', desc: 'Watch bags on Rome metro line A, Milan trams and around Termini and Venice’s Rialto. Use a cross-body bag.' },
    { title: 'Restaurant tourist traps', desc: 'Avoid places with photo menus and touts beside major sights. Walk two streets back for better food at fair prices.' },
    { title: 'Church dress codes', desc: 'St Mark’s, St Peter’s and the Duomos require covered shoulders and knees. Carry a scarf in summer.' },
    { title: 'ZTL driving zones', desc: 'Historic centres are limited-traffic (ZTL) — never drive in. This route is designed around trains for a reason.' },
    { title: 'Book headline sights', desc: 'Colosseum, Uffizi, Vatican, Doge’s Palace and the Duomo dome climbs sell out. Reserve timed tickets days ahead.' },
    { title: 'Summer heat', desc: 'July–August can top 35 °C. Start early, rest at midday, refill at fountains, and save Como for the hottest afternoons.' }
  ],
  shopping: {
    districts: [
      { name: 'Galleria Vittorio Emanuele II', desc: 'Milan · luxury flagship arcade', img: img(), mapUrl: mapQuery('Galleria Vittorio Emanuele II', 'Milan') },
      { name: 'Quadrilatero della Moda', desc: 'Milan · Via Montenapoleone fashion', img: img(), mapUrl: mapQuery('Via Montenapoleone', 'Milan') },
      { name: 'Ponte Vecchio', desc: 'Florence · historic goldsmiths', img: img(), mapUrl: mapQuery('Ponte Vecchio', 'Florence') },
      { name: 'Rialto Market', desc: 'Venice · produce, fish & Murano glass nearby', img: img(), mapUrl: mapQuery('Rialto Market', 'Venice') }
    ],
    brands: ['Prada', 'Gucci', 'Ferragamo', 'Murano glass', 'Florentine leather', 'Tuscan wine'],
    souvenirs: ['Murano glass', 'Florentine leather goods', 'Parmigiano & balsamic', 'Chianti & Amarone wine', 'Venetian carnival masks', 'Ground espresso'],
    vatTips: { rate: '22% IVA', refund: 'Tax-free shopping for non-EU residents on purchases over €70 per store. Ask for the form and claim the refund at your final EU airport.' }
  },
  budget: {
    budget: { daily: '€100–150 per person / day', accommodation: '€70 B&B or 3-star', food: '€25 pizza & panini', transport: '€25 regional trains & metro', activities: '€20 one museum', extras: '€10 gelato & espresso', tip: 'Travel 2nd class, picnic from markets, and prioritise free churches and piazzas. One paid museum per city.' },
    mid: { daily: '€220–350 per person / day', accommodation: '€180 4-star central', food: '€60 trattoria meals', transport: '€45 Frecciarossa 2nd class', activities: '€40 skip-the-line tickets', extras: '€25 gondola or ferry' },
    luxury: { daily: '€600–1,200 per person / day', accommodation: '€500 5-star palazzo', food: '€150 Michelin & lakeside dining', transport: '€90 Frecciarossa Business', activities: '€120 private guides', extras: '€60 aperitivo & spa' }
  },
  family: {
    tip: 'Under-18s often enter state museums free (bring ID). Trains, gelato and boat rides delight kids. Book family rooms early and request cots when reserving. Strollers struggle on Venice bridges — a baby carrier is easier.',
    rows: [
      { attraction: 'Colosseum', desc: 'Gladiator history captivates all ages', goodForKids: true, stroller: false, babyChange: false, familyTicket: true },
      { attraction: 'Gondola Ride', desc: 'Magical for children · life jackets available', goodForKids: true, stroller: false, babyChange: false, familyTicket: false },
      { attraction: 'Lake Como Ferry', desc: 'Boat hopping between villages', goodForKids: true, stroller: true, babyChange: false, familyTicket: true },
      { attraction: 'Duomo di Milano Rooftop', desc: 'Lift available · dramatic views', goodForKids: true, stroller: false, babyChange: false, familyTicket: true },
      { attraction: 'Uffizi Gallery', desc: 'Long for little ones · pick highlights', goodForKids: false, stroller: true, babyChange: true, familyTicket: true },
      { attraction: 'Trevi Fountain', desc: 'Coin-tossing & gelato nearby', goodForKids: true, stroller: true, babyChange: false, familyTicket: false },
      { attraction: 'Piazzale Michelangelo', desc: 'Open space to run · sunset picnic', goodForKids: true, stroller: true, babyChange: false, familyTicket: false }
    ]
  },
  emergency: {
    numbers: [
      { label: '112', desc: 'European emergency · police · all services', icon: 'emergency' },
      { label: '118', desc: 'Ambulance / medical emergency', icon: 'hospital' },
      { label: '115', desc: 'Fire brigade', icon: 'emergency' },
      { label: '113', desc: 'State police (Polizia di Stato)', icon: 'police' }
    ],
    hospitals: [
      { name: 'Ospedale Niguarda', address: 'Milan', icon: 'hospital', mapUrl: mapQuery('Ospedale Niguarda', 'Milan') },
      { name: 'Ospedale SS. Giovanni e Paolo', address: 'Venice', icon: 'hospital', mapUrl: mapQuery('Ospedale Civile', 'Venice') },
      { name: 'Azienda Ospedaliera Careggi', address: 'Florence', icon: 'hospital', mapUrl: mapQuery('Ospedale Careggi', 'Florence') },
      { name: 'Policlinico Umberto I', address: 'Rome', icon: 'hospital', mapUrl: mapQuery('Policlinico Umberto I', 'Rome') }
    ],
    embassies: [
      { country: 'Saudi Arabia', address: 'Rome · Via Guido d’Arezzo 2', icon: 'embassy', mapUrl: 'https://www.google.com/maps/search/?api=1&query=Embassy+of+Saudi+Arabia+Rome' },
      { country: 'United Arab Emirates', address: 'Rome · Via della Camilluccia 456', icon: 'embassy', mapUrl: 'https://www.google.com/maps/search/?api=1&query=Embassy+of+United+Arab+Emirates+Rome' },
      { country: 'Qatar', address: 'Rome · Via Antonio Bosio 14', icon: 'embassy', mapUrl: 'https://www.google.com/maps/search/?api=1&query=Embassy+of+Qatar+Rome' },
      { country: 'Kuwait', address: 'Rome · Via della Fonte 20', icon: 'embassy', mapUrl: 'https://www.google.com/maps/search/?api=1&query=Embassy+of+Kuwait+Rome' },
      { country: 'Bahrain', address: 'Rome · consular services', icon: 'embassy', mapUrl: 'https://www.google.com/maps/search/?api=1&query=Embassy+of+Bahrain+Rome' },
      { country: 'Oman', address: 'Rome · Via della Camilluccia 625', icon: 'embassy', mapUrl: 'https://www.google.com/maps/search/?api=1&query=Embassy+of+Oman+Rome' }
    ],
    lostPassport: 'Report to the nearest police station (Questura) and dial 112. Contact your embassy in Rome — GCC embassies are all located in the capital. They can issue emergency travel documents. Photograph your passport before you fly.'
  },
  phrases: [
    { english: 'Hello / Hi', use: 'Ciao (informal) · Buongiorno (daytime)' },
    { english: 'Thank you', use: 'Grazie — always appreciated' },
    { english: 'Please', use: 'Per favore — polite requests' },
    { english: 'How much is it?', use: 'Quanto costa? — markets & shops' },
    { english: 'A coffee, please', use: 'Un caffè, per favore — at the bar' },
    { english: 'The bill, please', use: 'Il conto, per favore — end of meal' },
    { english: 'Where is the station?', use: 'Dov’è la stazione? — navigation' },
    { english: 'One ticket to…', use: 'Un biglietto per… — train travel' }
  ],
  cheatSheet: {
    title: 'One-Page Cheat Sheet',
    subtitle: 'Screenshot before your flight — every essential in one glance.',
    emergency: [
      { label: '112', value: 'All emergencies' },
      { label: '118', value: 'Ambulance' },
      { label: '115', value: 'Fire' }
    ],
    transport: [
      { label: 'Frecciarossa / Italo', value: 'High-speed between cities' },
      { label: 'Metro €1.50', value: 'Milan & Rome' },
      { label: 'Vaporetto €9.50', value: 'Venice water bus' }
    ],
    money: [
      { label: 'Bancomat ATMs', value: 'Best exchange rate' },
      { label: 'Cards widely OK', value: 'Cash for small cafés' },
      { label: 'Coperto', value: 'Cover charge is normal' }
    ],
    apps: [
      { name: 'Trenitalia / Italo', use: 'Book & store train tickets' },
      { name: 'Google Maps', use: 'Navigation · offline maps' },
      { name: 'FreeNow', use: 'Book licensed taxis' }
    ],
    topQrCodes: [
      { name: 'Milano Centrale', mapUrl: 'https://www.google.com/maps/search/?api=1&query=Milano+Centrale' },
      { name: 'Duomo di Milano', mapUrl: mapQuery('Duomo di Milano', 'Milan') },
      { name: 'Bellagio Ferry', mapUrl: mapQuery('Bellagio', 'Como') },
      { name: "St Mark's Basilica", mapUrl: mapQuery("St Mark's Basilica", 'Venice') },
      { name: 'Uffizi Gallery', mapUrl: mapQuery('Uffizi Gallery', 'Florence') },
      { name: 'Colosseum', mapUrl: mapQuery('Colosseum', 'Rome') },
      { name: 'Vatican Museums', mapUrl: mapQuery('Vatican Museums & Sistine Chapel', 'Rome') },
      { name: 'Roma Termini', mapUrl: 'https://www.google.com/maps/search/?api=1&query=Roma+Termini' }
    ]
  },
  etiquette: [
    { rule: 'Coffee customs', desc: 'Cappuccino is a morning drink — order espresso after meals. Drinking at the bar is cheaper than sitting.' },
    { rule: 'Dress for churches', desc: 'Cover shoulders and knees in all basilicas and cathedrals. Remove hats inside.' },
    { rule: 'Dining rhythm', desc: 'Lunch 13:00–14:30, dinner from 19:30–20:00. Restaurants rarely serve continuously — plan around it.' },
    { rule: 'Greetings', desc: 'A warm buongiorno on entering a shop or café is expected. Say arrivederci when leaving.' },
    { rule: 'Sitting on monuments', desc: 'Eating or sitting on the Spanish Steps and some monuments is fined in Rome. Use nearby cafés.' },
    { rule: 'Queue for gelato', desc: 'At busy gelaterie, pay at the till first, then present your receipt at the counter.' },
    { rule: 'Keep voices down', desc: 'In museums, churches and small trattorie, Italians speak softly. Match the local volume.' }
  ]
};

const output = `/**
 * DISCOVER Italy — 8-Day Milan-to-Rome Train Itinerary
 * Milan · Lake Como · Verona · Venice · Florence · Tuscany · Rome
 * Real place photos via Wikimedia Commons (CC-licensed)
 */
const PLAN = ${JSON.stringify(PLAN, null, 2)};
`;
fs.writeFileSync(OUT, output);
console.log(`Wrote ${OUT}`);
console.log(`  attractions: ${attractions.length}`);
console.log(`  hotels: ${hotels.length}`);
console.log(`  dining: ${dining.length}`);
console.log(`  days: ${itineraries.length}`);
