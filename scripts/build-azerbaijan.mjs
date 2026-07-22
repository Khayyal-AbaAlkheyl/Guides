import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const OUT = path.join(root, 'data', 'azerbaijan.js');

const ACCENT = '#dc2626';
const ACCENT_SOFT = '#fef2f2';
const ACCENT_DEEP = '#991b1b';
const GOLD = '#ca8a04';

const PHOTOS = [
  'photo-1512453979798-5ea266f8880c',
  'photo-1524231757912-21f4fe3a7200',
  'photo-1552832230-c0197dd311b5',
  'photo-1583422409516-2895a77efded',
  'photo-1540959733332-eab4deabeeaf',
  'photo-1502602898657-3e91760cbb34',
  'photo-1513635269975-59663e0ac1ad',
  'photo-1496442226666-8d0d0e62e956',
  'photo-1566073771259-6a8506099945',
  'photo-1555396273-367ea4eb4db5',
  'photo-1550581190-9c1c48d21d6c',
  'photo-1550966871-3ed3cdb5ed0c',
  'photo-1525351484163-7529414344d8',
  'photo-1495474472287-4d71bcdd2085',
  'photo-1551183053-bf91a1d81141',
  'photo-1585937421612-70a008356fbe',
  'photo-1551024506-0bccd828d307',
  'photo-1517248135467-4c7edcad34c4',
  'photo-1582719478250-c89cae4dc85b',
  'photo-1590490360182-c33d57733427'
];

function img(i, w = 640) {
  return `https://images.unsplash.com/${PHOTOS[i % PHOTOS.length]}?auto=format&fit=crop&w=${w}&q=75&fm=jpg`;
}

function mapQuery(name) {
  const q = /\b(baku|azerbaijan|sheki|gabala|guba|lahij)\b/i.test(name) ? name : `${name} Azerbaijan`;
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;
}

function attractionCard(i, opts) {
  const {
    name, address, hours, tube, ticket, bestArrival, waitSummer, waitWinter,
    photoSpot, lens = '24–70mm', tip, bookUrl, bookText = 'Book Tickets', avgVisit,
    nearby = [], nearbyCafes, nearbyRestaurants, didYouKnow, localSecret,
    crowd = { morning: 3, afternoon: 4, evening: 2 }
  } = opts;
  return {
    name, address, hours, tube, ticket, bestArrival, waitSummer, waitWinter,
    photoSpot, lens, tip,
    mapUrl: mapQuery(name),
    bookUrl: bookUrl || mapQuery(name),
    bookText, avgVisit, crowd, nearby,
    nearbyCafes: nearbyCafes || 'See dining chapter in this guide.',
    nearbyRestaurants: nearbyRestaurants || 'See dining chapter in this guide.',
    nearbyTube: tube,
    nearbyToilets: 'On-site or nearby cafés.',
    nearbyAtm: 'City centre banks · major malls',
    didYouKnow, localSecret,
    instagram: { sunset: photoSpot, sunrise: photoSpot, drone: 'Check local drone rules', settings: 'f/8 · ISO 200 · 24–70mm' },
    photos: { hero: img(i), detail: img(i + 1), photoSpot: img(i + 2), map: img(i + 3), heroPosition: 'center 40%' },
    seasonalPhotos: { spring: img(i + 4), summer: img(i + 5), autumn: img(i + 6), christmas: img(i + 7) }
  };
}

function hotelCard(i, opts) {
  const {
    name, category, address, price, rating, googleRating, room, cancellation,
    tube, airport, nearbyAttractions, walkingScore, breakfast, idealFor, tip, bookUrl
  } = opts;
  return {
    name, category, address, price, rating, googleRating, room, cancellation,
    tube, airport, nearbyAttractions, walkingScore, breakfast, idealFor, tip,
    mapUrl: mapQuery(name),
    bookUrl: bookUrl || mapQuery(name),
    photos: {
      exterior: img(i), lobby: img(i + 1), room: img(i + 2), luxuryRoom: img(i + 3),
      restaurant: img(i + 4), pool: img(i + 5), rooftop: img(i + 6),
      breakfast: img(i + 7), spa: img(i + 8), view: img(i + 9)
    }
  };
}

function diningCard(i, opts) {
  const {
    name, category, address, price, famous, halal = true, vegetarian = true,
    reservation, wait, michelin = '—', kidsFriendly = 'Yes', dressCode = 'Smart casual',
    tip, bookUrl, dishes
  } = opts;
  const defaultDishes = dishes || [
    { name: famous, img: img(i + 1), desc: `Signature dish at ${name}.` },
    { name: 'Seasonal Special', img: img(i + 2), desc: 'Ask your server for today\'s recommendation.' },
    { name: 'Azerbaijani Starter', img: img(i + 3), desc: 'Fresh local produce, beautifully plated.' },
    { name: 'Main Course', img: img(i + 4), desc: 'Hearty Caucasus cooking done properly.' },
    { name: 'Dessert', img: img(i + 5), desc: 'Finish with Sheki halva or baklava if available.' }
  ];
  return {
    name, category, address, price, famous, halal, vegetarian, reservation, wait,
    michelin, kidsFriendly, dressCode, tip,
    mapUrl: mapQuery(name),
    bookUrl: bookUrl || mapQuery(name),
    dishes: defaultDishes,
    photos: { signature: img(i), interior: img(i + 1), exterior: img(i + 2), dessert: img(i + 3), coffee: img(i + 4) }
  };
}

function dayStop(time, timeOfDay, name, desc, transit = 'Private driver', icon = 'car') {
  return { time, timeOfDay, name, desc, transit, icon, mapUrl: mapQuery(name) };
}

const attractions = [
  attractionCard(0, {
    name: 'Old City (Icherisheher)',
    address: 'Icherisheher · Baku',
    hours: 'Open 24h · museums 10:00–18:00',
    tube: 'Walk from central Baku hotels',
    ticket: 'Free to wander · sites from ₼5',
    bestArrival: '09:00',
    waitSummer: 'Busy after 11:00',
    waitWinter: 'Quiet mornings',
    photoSpot: 'Maiden Tower from the inner walls — UNESCO skyline.',
    tip: 'Enter from the main gate and get lost in caravanserai alleys before the tour buses arrive.',
    avgVisit: '2–3 hours',
    nearby: [
      { name: 'Maiden Tower', walk: '5 min' },
      { name: 'Palace of the Shirvanshahs', walk: '8 min' },
      { name: 'Şirvanşah Museum Restaurant', walk: '3 min' }
    ],
    didYouKnow: 'Icherisheher is a UNESCO World Heritage Site — a walled medieval city where Europe meets Asia.',
    localSecret: 'The back alleys behind the palace are quieter and full of artisan workshops.'
  }),
  attractionCard(2, {
    name: 'Maiden Tower',
    address: 'Qız Qalası · Old City · Baku',
    hours: '09:00–18:00',
    tube: 'Old City on foot',
    ticket: '₼15 adult',
    bestArrival: '09:30',
    waitSummer: '20–40 min',
    waitWinter: '5–10 min',
    photoSpot: 'From the ramparts at sunset — Flame Towers glow behind the tower.',
    tip: 'Climb to the top for a 360° view of Baku Bay and the Old City.',
    avgVisit: '45 min',
    didYouKnow: 'The Maiden Tower is Baku\'s most iconic symbol — its origins remain a mystery debated by historians.',
    localSecret: 'Visit just before closing when the light turns golden on the Caspian.'
  }),
  attractionCard(4, {
    name: 'Palace of the Shirvanshahs',
    address: 'Icherisheher · Baku',
    hours: '10:00–18:00',
    tube: 'Old City on foot',
    ticket: '₼10 adult',
    bestArrival: '10:00',
    waitSummer: '15–30 min',
    waitWinter: 'Minimal',
    photoSpot: 'Courtyard arcade — symmetrical stone arches and turquoise tiles.',
    tip: 'Combine with Maiden Tower ticket for a small discount at the gate.',
    avgVisit: '1 hour',
    didYouKnow: 'Built in the 15th century, this was the seat of the Shirvanshah dynasty — medieval Azerbaijan\'s royal court.',
    localSecret: 'The burial vault downstairs is cool even in summer — a welcome respite.'
  }),
  attractionCard(6, {
    name: 'Baku Boulevard',
    address: 'Neftchilar Ave · Baku',
    hours: 'Open 24h',
    tube: 'Walk from Old City · 15 min',
    ticket: 'Free',
    bestArrival: '16:00',
    photoSpot: 'Little Venice gondolas with Flame Towers in the background.',
    tip: 'Rent a bike or stroll the full 3 km promenade from the Carpet Museum to the Flag Square.',
    avgVisit: '1–2 hours',
    nearby: [
      { name: 'Azerbaijan Carpet Museum', walk: '5 min' },
      { name: 'Little Venice', walk: '2 min' }
    ],
    didYouKnow: 'Baku Boulevard dates to 1909 and stretches along the Caspian Sea — locals call it the city\'s living room.',
    localSecret: 'The Ferris wheel at the end of the boulevard gives the best cheap panorama of the bay.'
  }),
  attractionCard(8, {
    name: 'Azerbaijan Carpet Museum',
    address: '28 Mikayil Huseynov · Baku',
    hours: '10:00–18:00 · closed Mon',
    tube: 'Boulevard walk',
    ticket: '₼7 adult',
    bestArrival: '10:30',
    photoSpot: 'The building itself — shaped like a rolled carpet facing the sea.',
    tip: 'Allow time for the live weaving demonstration on the ground floor.',
    avgVisit: '1 hour',
    didYouKnow: 'Azerbaijan has seven carpet-making schools — each region has distinct patterns passed down for centuries.',
    localSecret: 'The museum shop sells certified pieces — far better than street-market imitations.'
  }),
  attractionCard(10, {
    name: 'Highland Park',
    address: 'Upland Park · Baku',
    hours: 'Open 24h',
    tube: 'Funicular from Martyrs\' Lane',
    ticket: 'Free · funicular ₼1',
    bestArrival: 'Sunset',
    photoSpot: 'Panoramic terrace — full sweep of Baku Bay, Old City and Flame Towers.',
    tip: 'Take the funicular up and walk down through Martyrs\' Lane at dusk.',
    avgVisit: '45 min',
    didYouKnow: 'Known locally as Upland Park, this is Baku\'s best free viewpoint — the city\'s postcard angle.',
    localSecret: 'Weekday sunsets are quieter than weekends when local families picnic here.'
  }),
  attractionCard(12, {
    name: 'Heydar Aliyev Center',
    address: '1 Heydar Aliyev Ave · Baku',
    hours: '11:00–19:00 · closed Mon',
    tube: 'Taxi 10 min from centre',
    ticket: '₼15 museum',
    bestArrival: '11:00',
    photoSpot: 'Curved white facade by Zaha Hadid — shoot from the plaza at a low angle.',
    tip: 'The architecture is the star. Even if you skip the museum, walk the exterior curves.',
    avgVisit: '1–2 hours',
    didYouKnow: 'Zaha Hadid\'s flowing design won the Design Museum\'s Design of the Year — no straight lines anywhere.',
    localSecret: 'Night lighting transforms the building — return after dinner for blue-hour photos.'
  }),
  attractionCard(14, {
    name: 'Flame Towers',
    address: 'Mehdi Huseyn St · Baku',
    hours: 'Exterior 24h · LED show from dusk',
    tube: 'Walk from Nizami Street',
    ticket: 'Free exterior · Fairmont rooftop bar',
    bestArrival: 'After dark',
    photoSpot: 'From Baku Boulevard or Highland Park — three flame-shaped towers lit in LED.',
    tip: 'The LED flame animation starts at sunset. Fairmont\'s rooftop bar has the closest view.',
    avgVisit: '30 min',
    didYouKnow: 'The three towers represent Azerbaijan\'s eternal flames — a nod to the country\'s Zoroastrian fire heritage.',
    localSecret: 'Photograph from the boulevard boardwalk, not the highway — safer and better framed.'
  }),
  attractionCard(16, {
    name: 'Alley of Martyrs',
    address: 'Shehidlar Khiyabani · Baku',
    hours: 'Open 24h',
    tube: 'Funicular station nearby',
    ticket: 'Free',
    bestArrival: 'Morning',
    photoSpot: 'Tree-lined avenue with eternal flame and Caspian views.',
    tip: 'A solemn memorial — speak quietly and dress respectfully.',
    avgVisit: '30 min',
    didYouKnow: 'This memorial honours those who died for Azerbaijan\'s independence — a place of national pilgrimage.',
    localSecret: 'Continue through to the funicular for Highland Park without backtracking.'
  }),
  attractionCard(18, {
    name: 'Nizami Street',
    address: 'Nizami St · Baku',
    hours: 'Shops 10:00–22:00',
    tube: 'Central Baku',
    ticket: 'Free',
    bestArrival: '17:00',
    photoSpot: 'Pedestrian boulevard with fountains and Belle Époque facades.',
    tip: 'Best people-watching street in Baku — café-hop from Fountain Square to 28 Mall.',
    avgVisit: '1–2 hours',
    didYouKnow: 'Named after the 12th-century poet Nizami Ganjavi — Baku\'s Champs-Élysées.',
    localSecret: 'Side streets off Nizami hide excellent local bakeries selling qutab and tandir bread.'
  }),
  attractionCard(20, {
    name: 'Gobustan National Park',
    address: 'Gobustan · 60 km SW of Baku',
    hours: '09:00–17:00',
    tube: 'Driver · 1 hr from Baku',
    ticket: '₼10 adult',
    bestArrival: '09:30',
    photoSpot: 'Petroglyphs on rock faces — 40,000-year-old art.',
    tip: 'Hire a guide at the visitor centre — the carvings come alive with context.',
    avgVisit: '2 hours',
    didYouKnow: 'Over 6,000 rock engravings document prehistoric life — hunting, dancing, and boat scenes.',
    localSecret: 'The museum before the outdoor site sets the scene — don\'t skip it.'
  }),
  attractionCard(22, {
    name: 'Mud Volcanoes',
    address: 'Gobustan area · Azerbaijan',
    hours: 'Daylight hours',
    tube: 'Driver · 15 min from Gobustan',
    ticket: 'Free · 4×4 may be needed',
    bestArrival: 'Morning',
    photoSpot: 'Grey bubbling cones on a lunar landscape — otherworldly.',
    tip: 'Wear shoes you can clean. The mud is harmless but messy. Half of the world\'s mud volcanoes are here.',
    avgVisit: '45 min',
    didYouKnow: 'Azerbaijan has more than 400 mud volcanoes — NASA studies them as analogues for Mars.',
    localSecret: 'After rain the mud is more active — ask your driver for the best recent site.'
  }),
  attractionCard(24, {
    name: 'Ateshgah Fire Temple',
    address: 'Surakhani · Baku outskirts',
    hours: '09:00–18:00',
    tube: 'Driver · 30 min from centre',
    ticket: '₼4 adult',
    bestArrival: '10:00',
    photoSpot: 'Central altar with eternal flame — Zoroastrian and Hindu heritage.',
    tip: 'Combine with Yanar Dag on the same half-day trip from Baku.',
    avgVisit: '45 min',
    didYouKnow: 'Pilgrims worshipped here for centuries — natural gas flames that never extinguish.',
    localSecret: 'The onsite museum explains the Hindu traders who maintained the temple.'
  }),
  attractionCard(26, {
    name: 'Yanar Dag',
    address: 'Absheron Peninsula · Baku',
    hours: 'Open 24h · best at dusk',
    tube: 'Driver · 25 min from centre',
    ticket: '₼4 adult',
    bestArrival: 'Sunset',
    photoSpot: 'A hillside that has burned continuously for decades — flames against the dark sky.',
    tip: 'The name means "Burning Mountain" — natural gas seepage creates an eternal flame.',
    avgVisit: '30 min',
    didYouKnow: 'Marco Polo wrote about Azerbaijan\'s mysterious fires — Yanar Dag is the most accessible example.',
    localSecret: 'Wind affects flame size — calm evenings give the most dramatic photos.'
  }),
  attractionCard(28, {
    name: 'Shamakhi Juma Mosque',
    address: 'Shamakhi · en route to Lahij',
    hours: 'Prayer times · visit between',
    tube: 'Driver · 2.5 hr from Baku',
    ticket: 'Free · donations welcome',
    bestArrival: '11:00',
    photoSpot: 'White stone minaret against Caucasus foothills.',
    tip: 'Remove shoes and dress modestly. A rest stop on the Baku–Lahij drive.',
    avgVisit: '30 min',
    didYouKnow: 'Originally built in 743 AD, rebuilt after earthquakes — one of the oldest mosques in the Caucasus.',
    localSecret: 'The adjacent cemetery has ornate stone carvings worth a slow walk.'
  }),
  attractionCard(30, {
    name: 'Lahij',
    address: 'Ismailli District · Caucasus mountains',
    hours: 'Village open 24h · workshops 09:00–18:00',
    tube: 'Driver · 3 hr from Baku',
    ticket: 'Free village · copper demos ₼5',
    bestArrival: '14:00',
    photoSpot: 'Stone-paved streets with copper workshops and mountain backdrop.',
    tip: 'Buy hand-beaten copper directly from artisans. Stay overnight for the authentic experience.',
    avgVisit: '2–3 hours',
    didYouKnow: 'Lahij has been a copper-crafting centre for nearly a thousand years — skills passed through families.',
    localSecret: 'The tea house at the village centre serves cardamom tea in traditional armudu glasses.'
  }),
  attractionCard(32, {
    name: 'Palace of Shaki Khans',
    address: 'Sheki · Azerbaijan',
    hours: '10:00–18:00',
    tube: 'Driver · 2 hr from Lahij',
    ticket: '₼10 adult',
    bestArrival: '10:00',
    photoSpot: 'Stained-glass shebeke windows casting coloured light on carved walls.',
    tip: 'No nails were used in the shebeke — thousands of glass pieces held by wooden joints alone.',
    avgVisit: '1 hour',
    didYouKnow: 'The Khan\'s summer palace is a UNESCO site — 18th-century frescoes and geometric brilliance.',
    localSecret: 'Visit the nearby caravanserai for lunch in a Silk Road inn.'
  }),
  attractionCard(34, {
    name: 'Sheki Caravanserai',
    address: 'Sheki Old Town',
    hours: 'Hotel & restaurant · open to visitors',
    tube: 'Walk from Khan Palace',
    ticket: 'Free to enter courtyard',
    bestArrival: '12:00',
    photoSpot: 'Arched stone courtyard — merchants\' rooms now boutique hotel.',
    tip: 'Even if you don\'t stay, walk the courtyard and upper gallery for Silk Road atmosphere.',
    avgVisit: '45 min',
    didYouKnow: 'Caravanserais were the motels of the Silk Road — Sheki\'s is one of the best preserved in the Caucasus.',
    localSecret: 'Upper-floor rooms have mountain views — ask to peek even if you\'re not a guest.'
  }),
  attractionCard(36, {
    name: 'Church of Kish',
    address: 'Kish Village · near Sheki',
    hours: '10:00–17:00',
    tube: 'Driver · 15 min from Sheki',
    ticket: '₼3 adult',
    bestArrival: '15:00',
    photoSpot: 'Ancient Albanian church on a hilltop with valley views.',
    tip: 'One of the oldest churches in the Caucasus — predates most European cathedrals.',
    avgVisit: '45 min',
    didYouKnow: 'Norwegian archaeologist Thor Heyerdahl excavated here, linking Caucasian Albania to ancient Scandinavia.',
    localSecret: 'The small museum inside has artefacts from 2,000 years of worship.'
  }),
  attractionCard(38, {
    name: 'Tufandag Cable Car',
    address: 'Gabala · Azerbaijan',
    hours: '10:00–18:00 · weather dependent',
    tube: 'Driver · 2 hr from Sheki',
    ticket: '₼15 return cable car',
    bestArrival: '10:30',
    photoSpot: 'Cable car ascending over forested Caucasus slopes.',
    tip: 'Ski resort in winter, hiking and zip-lines in summer. Check weather before driving up.',
    avgVisit: '2–3 hours',
    didYouKnow: 'Gabala sits in the shadow of Mount Bazarduzu — Azerbaijan\'s highest peak at 4,466 m.',
    localSecret: 'The mid-station café has the best hot chocolate after a mountain ride.'
  }),
  attractionCard(40, {
    name: 'Nohur Lake',
    address: 'Gabala · Azerbaijan',
    hours: 'Open 24h',
    tube: 'Driver · 10 min from Tufandag',
    ticket: 'Free',
    bestArrival: '14:00',
    photoSpot: 'Mirror-still lake reflecting forested mountains.',
    tip: 'Lakeside restaurants serve fresh trout — lunch with a view.',
    avgVisit: '1 hour',
    didYouKnow: 'An artificial lake created for irrigation — now a beloved picnic and photo spot.',
    localSecret: 'Early morning mist on the water is magical — stop here before Tufandag if staying nearby.'
  }),
  attractionCard(42, {
    name: 'Seven Beauties Waterfall',
    address: 'Gabala · Vandam village area',
    hours: 'Daylight · best May–September',
    tube: 'Driver · 20 min from Gabala centre',
    ticket: '₼3 entry',
    bestArrival: '11:00',
    photoSpot: 'Seven cascading tiers through a forest gorge.',
    tip: 'Wear grippy shoes — the path is wet and steep in places.',
    avgVisit: '1.5 hours',
    didYouKnow: 'Named after a Nizami poem — seven princesses, seven falls.',
    localSecret: 'The upper tiers are quieter — most tourists stop at the first cascade.'
  }),
  attractionCard(44, {
    name: 'Qechresh Forest',
    address: 'Guba District · Azerbaijan',
    hours: 'Open 24h',
    tube: 'Driver · 4 hr from Gabala',
    ticket: 'Free',
    bestArrival: '10:00',
    photoSpot: 'Dense temperate forest with apple orchards on the approach.',
    tip: 'Guba is apple country — stop at roadside orchards for fresh juice in autumn.',
    avgVisit: '1–2 hours',
    didYouKnow: 'The Qechresh forest is a protected area — part of the Greater Caucasus ecosystem.',
    localSecret: 'Mountain villages above Guba sell handmade wool socks — perfect souvenirs.'
  }),
  attractionCard(46, {
    name: 'Khinalug',
    address: 'Quba District · 2,350 m altitude',
    hours: 'Daylight · road weather-dependent',
    tube: 'Driver · 1 hr from Guba',
    ticket: 'Free village',
    bestArrival: '09:00',
    photoSpot: 'Stone houses stacked on a mountainside — one of the highest inhabited villages on Earth.',
    tip: 'One of the oldest continuously inhabited settlements in the world. Respect local customs and ask before photographing residents.',
    avgVisit: '2–3 hours',
    didYouKnow: 'Khinalug\'s 5,000-year history and unique language make it a living museum of Caucasus culture.',
    localSecret: 'Locals offer traditional lunch in home kitchens — accept if invited, it\'s the best meal you\'ll have.'
  })
];

const hotels = [
  hotelCard(0, {
    name: 'Four Seasons Hotel Baku',
    category: 'Best Luxury',
    address: 'Neftchilar Ave · Baku',
    price: '€350–600 / night',
    rating: '5★',
    googleRating: '4.8',
    room: 'Deluxe Caspian View',
    cancellation: 'Free 48h before',
    tube: 'Old City 5 min walk',
    airport: '25 min to GYD',
    nearbyAttractions: 'Old City · Boulevard · Flame Towers',
    walkingScore: '98',
    breakfast: 'Buffet + à la carte',
    idealFor: 'Luxury · honeymoon · business',
    tip: 'Request a room facing the Caspian — sunrise over the sea is unforgettable.'
  }),
  hotelCard(10, {
    name: 'Fairmont Baku Flame Towers',
    category: 'Best Views',
    address: 'Flame Towers · Baku',
    price: '€280–500 / night',
    rating: '5★',
    googleRating: '4.7',
    room: 'Flame Tower Suite',
    cancellation: 'Free 24h before',
    tube: 'Nizami Street 10 min',
    airport: '30 min to GYD',
    nearbyAttractions: 'Flame Towers · Highland Park · Nizami Street',
    walkingScore: '90',
    breakfast: 'Rooftop included',
    idealFor: 'Views · nightlife · couples',
    tip: 'The rooftop bar has the closest Flame Towers LED show view in the city.'
  }),
  hotelCard(20, {
    name: 'JW Marriott Absheron Baku',
    category: 'Best Business',
    address: 'Azadliq Sq · Baku',
    price: '€200–380 / night',
    rating: '5★',
    googleRating: '4.6',
    room: 'Executive Sea View',
    cancellation: 'Flexible',
    tube: 'Boulevard 5 min',
    airport: '25 min to GYD',
    nearbyAttractions: 'Boulevard · Carpet Museum · Heydar Aliyev Center',
    walkingScore: '92',
    breakfast: 'Executive lounge',
    idealFor: 'Business · conferences · families',
    tip: 'Pool deck overlooks the Caspian — best hotel pool in Baku.'
  }),
  hotelCard(30, {
    name: 'Lahij Guest House',
    category: 'Traditional Experience',
    address: 'Lahij village · Ismailli',
    price: '€40–80 / night',
    rating: 'Guesthouse',
    googleRating: '4.5',
    room: 'Stone Room with Mountain View',
    cancellation: 'Free 24h before',
    tube: 'Village on foot',
    airport: '3 hr from GYD',
    nearbyAttractions: 'Copper workshops · Stone streets · Tea house',
    walkingScore: '100',
    breakfast: 'Homemade breakfast',
    idealFor: 'Culture · authenticity · photographers',
    tip: 'Book ahead — few rooms and high demand from photographers and trekkers.'
  }),
  hotelCard(40, {
    name: 'Marxal Resort & Spa',
    category: 'Mountain Resort',
    address: 'Sheki · Azerbaijan',
    price: '€150–280 / night',
    rating: '5★',
    googleRating: '4.6',
    room: 'Mountain View Suite',
    cancellation: 'Free 48h before',
    tube: 'Sheki centre 10 min',
    airport: '5 hr from GYD',
    nearbyAttractions: 'Khan Palace · Caravanserai · Kish Church',
    walkingScore: '40',
    breakfast: 'Included',
    idealFor: 'Wellness · couples · nature',
    tip: 'Spa uses local honey and herb treatments — book a hammam session.'
  }),
  hotelCard(50, {
    name: 'Sheki Palace Hotel',
    category: 'Historic Center',
    address: 'Sheki Old Town',
    price: '€80–150 / night',
    rating: '4★',
    googleRating: '4.4',
    room: 'Heritage Room',
    cancellation: 'Free 24h before',
    tube: 'Walk to Khan Palace',
    airport: '5 hr from GYD',
    nearbyAttractions: 'Khan Palace · Caravanserai · Craft market',
    walkingScore: '95',
    breakfast: 'Local spread',
    idealFor: 'History · budget-luxury · walkers',
    tip: 'Ask for a room with a balcony overlooking the old town roofs.'
  }),
  hotelCard(60, {
    name: 'Chenot Palace Gabala',
    category: 'Luxury Wellness',
    address: 'Gabala · Azerbaijan',
    price: '€300–550 / night',
    rating: '5★',
    googleRating: '4.7',
    room: 'Wellness Suite',
    cancellation: 'Non-refundable spa packages',
    tube: 'Resort shuttle',
    airport: '4 hr from GYD',
    nearbyAttractions: 'Tufandag · Nohur Lake · Seven Beauties',
    walkingScore: '20',
    breakfast: 'Wellness menu',
    idealFor: 'Spa · detox · luxury',
    tip: 'Evening resort spa after a day of mountain driving is the highlight of Day 6.'
  }),
  hotelCard(70, {
    name: 'Qafqaz Riverside Resort',
    category: 'Best Family Resort',
    address: 'Gabala · Azerbaijan',
    price: '€180–320 / night',
    rating: '5★',
    googleRating: '4.5',
    room: 'Family Riverside Suite',
    cancellation: 'Free 48h before',
    tube: 'Resort grounds',
    airport: '4 hr from GYD',
    nearbyAttractions: 'Tufandag · Nohur Lake · Forest trails',
    walkingScore: '30',
    breakfast: 'Family buffet',
    idealFor: 'Families · kids · nature',
    tip: 'Riverside cabins are quieter than the main block — request on booking.'
  }),
  hotelCard(80, {
    name: 'Macara Lake Park Hotel',
    category: 'Nature Resort',
    address: 'Guba · Azerbaijan',
    price: '€200–380 / night',
    rating: '5★',
    googleRating: '4.6',
    room: 'Lake View Chalet',
    cancellation: 'Free 48h before',
    tube: 'Resort grounds',
    airport: '2.5 hr from GYD',
    nearbyAttractions: 'Qechresh Forest · Khinalug road · Apple orchards',
    walkingScore: '25',
    breakfast: 'Included',
    idealFor: 'Nature · peace · Khinalug base',
    tip: 'Perfect base for the Khinalug day trip — spa on return from the mountain.'
  })
];

const dining = [
  diningCard(0, {
    name: 'United Coffee Beans',
    category: 'Café · Coffee',
    address: 'Central Baku',
    price: '₼8–20',
    famous: 'Specialty flat white',
    reservation: 'Walk-in',
    wait: '5–15 min',
    dressCode: 'Casual',
    tip: 'Start Day 1 here — best coffee in Baku before the Old City walk.'
  }),
  diningCard(5, {
    name: 'Şirvanşah Museum Restaurant',
    category: 'Restaurant · Azerbaijani',
    address: 'Old City · Baku',
    price: '₼25–50',
    famous: 'Plov & lamb dolma',
    reservation: 'Recommended',
    wait: '15–30 min',
    tip: 'Lunch inside the Old City walls — try the shah pilaf named after the palace next door.'
  }),
  diningCard(10, {
    name: 'Sky Grill',
    category: 'Restaurant · Grill',
    address: 'Highland Park area · Baku',
    price: '₼40–80',
    famous: 'Lula kebab & sunset views',
    reservation: 'Essential for sunset',
    wait: '20–40 min',
    tip: 'Book a terrace table for Day 1 sunset dinner overlooking the Caspian.'
  }),
  diningCard(15, {
    name: 'MariVanna',
    category: 'Restaurant · Russian-Azerbaijani',
    address: 'Nizami area · Baku',
    price: '₼30–60',
    famous: 'Borscht & dushbara',
    reservation: 'Walk-in lunch',
    wait: '10–20 min',
    tip: 'Cosy Day 2 lunch — homestyle cooking in a vintage Baku apartment setting.'
  }),
  diningCard(20, {
    name: 'SAHIL Restaurant',
    category: 'Restaurant · Seafood',
    address: 'Baku Boulevard',
    price: '₼35–70',
    famous: 'Caspian kutum fish',
    reservation: 'Recommended',
    wait: '15–30 min',
    tip: 'Day 2 dinner on the waterfront — ask for the daily catch grilled with saffron.'
  }),
  diningCard(25, {
    name: 'Piti House',
    category: 'Restaurant · Sheki',
    address: 'Sheki Old Town',
    price: '₼15–30',
    famous: 'Piti — traditional clay-pot stew',
    reservation: 'Walk-in',
    wait: '10–20 min',
    tip: 'Sheki\'s signature dish — piti is served in individual clay pots with bread and sumac.'
  }),
  diningCard(30, {
    name: 'Coffee Moffie',
    category: 'Café · Coffee',
    address: 'Baku',
    price: '₼6–15',
    famous: 'Cold brew & pastries',
    reservation: 'Walk-in',
    wait: '5 min',
    dressCode: 'Casual',
    tip: 'One of Baku\'s best third-wave cafés — good for a Day 9 airport morning stop.'
  }),
  diningCard(35, {
    name: 'Passage 145',
    category: 'Café · Brunch',
    address: 'Icherisheher · Baku',
    price: '₼12–25',
    famous: 'Brunch & Azerbaijani tea',
    reservation: 'Walk-in',
    wait: '10–15 min',
    tip: 'Hidden in the Old City — order tea with jam and pakhlava.'
  }),
  diningCard(40, {
    name: 'Baku Roasting Company',
    category: 'Café · Roastery',
    address: 'Baku',
    price: '₼8–18',
    famous: 'Single-origin pour-over',
    reservation: 'Walk-in',
    wait: '5 min',
    tip: 'Buy beans as souvenirs — locally roasted Azerbaijani coffee is a rare gift.'
  })
];

function dayBudget() {
  return {
    budget: { total: '€70–100 per person', includes: ['Guesthouse stays', 'Local restaurants', 'Shared driver', 'Free viewpoints'] },
    mid: { total: '€150–250 per person', includes: ['4★ hotels', 'Sit-down meals', 'Private driver', 'Site tickets'] },
    luxury: { total: '€350–700 per person', includes: ['5★ resorts', 'Fine dining', 'Spa treatments', 'Premium car & guide'] }
  };
}

const itineraries = [
  {
    day: 1,
    title: 'Welcome to Baku',
    color: ACCENT,
    routePreview: '8 stops · start 09:00 · end 21:00 · ≈ 4 km walk',
    mapUrl: 'https://www.google.com/maps/dir/United+Coffee+Beans+Baku/Old+City+Baku/Maiden+Tower+Baku/Palace+of+the+Shirvanshahs/Baku+Boulevard/Azerbaijan+Carpet+Museum/Highland+Park+Baku',
    budget: dayBudget(),
    photos: [],
    stops: [
      dayStop('09:00', 'morning', 'United Coffee Beans', 'Breakfast · specialty coffee before the Old City'),
      dayStop('10:00', 'morning', 'Old City (Icherisheher)', 'Maiden Tower · Shirvanshah Palace · caravanserais · historic alleys'),
      dayStop('13:00', 'afternoon', 'Şirvanşah Museum Restaurant', 'Lunch inside the medieval walls'),
      dayStop('14:30', 'afternoon', 'Baku Boulevard', 'Little Venice · seaside promenade'),
      dayStop('15:30', 'afternoon', 'Azerbaijan Carpet Museum', 'UNESCO carpet heritage · rolled-carpet architecture'),
      dayStop('17:30', 'evening', 'Highland Park', 'Sunset · best city panorama over the Caspian'),
      dayStop('20:00', 'evening', 'Sky Grill', 'Dinner with Flame Towers views')
    ]
  },
  {
    day: 2,
    title: 'Modern Baku',
    color: '#b91c1c',
    routePreview: '7 stops · start 09:30 · end 21:00 · ≈ 5 km',
    mapUrl: 'https://www.google.com/maps/dir/Heydar+Aliyev+Center/Flame+Towers+Baku/Alley+of+Martyrs/Nizami+Street+Baku',
    budget: dayBudget(),
    photos: [],
    stops: [
      dayStop('09:30', 'morning', 'Heydar Aliyev Center', 'Zaha Hadid architecture · design museum'),
      dayStop('11:00', 'morning', 'Flame Towers', 'Iconic skyline · LED flame show at dusk'),
      dayStop('12:00', 'morning', 'Alley of Martyrs', 'Memorial walk · funicular to Highland Park'),
      dayStop('13:30', 'afternoon', 'MariVanna', 'Lunch · homestyle Russian-Azerbaijani'),
      dayStop('15:00', 'afternoon', 'Nizami Street', 'Shopping · 28 Mall · Deniz Mall'),
      dayStop('20:00', 'evening', 'SAHIL Restaurant', 'Dinner on the Caspian waterfront')
    ]
  },
  {
    day: 3,
    title: 'Fire & Stone',
    color: GOLD,
    routePreview: '5 stops · full day · ≈ 120 km round trip',
    mapUrl: 'https://www.google.com/maps/dir/Baku/Gobustan+National+Park/Mud+Volcanoes+Azerbaijan/Ateshgah+Fire+Temple/Yanar+Dag',
    budget: dayBudget(),
    photos: [],
    stops: [
      dayStop('08:00', 'morning', 'Gobustan National Park', '40,000-year-old petroglyphs · UNESCO site'),
      dayStop('10:30', 'morning', 'Mud Volcanoes', 'Lunar landscape · half the world\'s mud volcanoes'),
      dayStop('12:30', 'afternoon', 'Ateshgah Fire Temple', 'Eternal flame · Zoroastrian heritage'),
      dayStop('14:30', 'afternoon', 'Yanar Dag', 'Burning Mountain · natural gas fire on a hillside'),
      dayStop('17:00', 'evening', 'Flame Towers', 'Return to Baku · LED show after dark', 'Return drive', 'car')
    ]
  },
  {
    day: 4,
    title: 'The Silk Road',
    color: '#059669',
    routePreview: '4 stops · ≈ 200 km · 3 hr drive',
    mapUrl: 'https://www.google.com/maps/dir/Baku/Shamakhi+Juma+Mosque/Lahij+Azerbaijan',
    budget: dayBudget(),
    photos: [],
    stops: [
      dayStop('08:00', 'morning', 'Shamakhi Juma Mosque', '743 AD mosque · rest stop en route'),
      dayStop('12:00', 'afternoon', 'Lahij', 'Ancient mountain village · copper workshops · stone streets'),
      dayStop('15:00', 'afternoon', 'Lahij Guest House', 'Tea house · traditional Azerbaijani tea in armudu glasses'),
      dayStop('19:00', 'evening', 'Lahij', 'Overnight in the village — stars over the Caucasus', 'Stay', 'hotel')
    ]
  },
  {
    day: 5,
    title: 'Azerbaijan\'s Most Beautiful Town',
    color: '#0d9488',
    routePreview: '5 stops · ≈ 120 km · 2 hr drive',
    mapUrl: 'https://www.google.com/maps/dir/Lahij/Sheki/Palace+of+Shaki+Khans/Sheki+Caravanserai/Church+of+Kish',
    budget: dayBudget(),
    photos: [],
    stops: [
      dayStop('09:00', 'morning', 'Palace of Shaki Khans', 'UNESCO palace · shebeke stained glass'),
      dayStop('11:00', 'morning', 'Sheki Caravanserai', 'Silk Road inn · craft market'),
      dayStop('13:00', 'afternoon', 'Piti House', 'Lunch · Sheki\'s signature clay-pot stew'),
      dayStop('15:00', 'afternoon', 'Church of Kish', 'Albanian church · 2,000-year-old hilltop sanctuary'),
      dayStop('18:00', 'evening', 'Sheki Palace Hotel', 'Evening walk through old town roofs', 'Stay', 'hotel')
    ]
  },
  {
    day: 6,
    title: 'Mountains & Lakes',
    color: '#2563eb',
    routePreview: '4 stops · ≈ 100 km · 2 hr drive',
    mapUrl: 'https://www.google.com/maps/dir/Sheki/Gabala/Tufandag+Cable+Car/Nohur+Lake/Seven+Beauties+Waterfall',
    budget: dayBudget(),
    photos: [],
    stops: [
      dayStop('09:30', 'morning', 'Tufandag Cable Car', 'Caucasus cable car · mountain air'),
      dayStop('12:00', 'afternoon', 'Nohur Lake', 'Lakeside lunch · mirror-still mountain reflection'),
      dayStop('14:30', 'afternoon', 'Seven Beauties Waterfall', 'Seven cascading tiers through forest'),
      dayStop('18:00', 'evening', 'Chenot Palace Gabala', 'Resort spa · wellness evening', 'Stay', 'hotel')
    ]
  },
  {
    day: 7,
    title: 'The Caucasus',
    color: '#7c3aed',
    routePreview: '3 stops · ≈ 180 km · 4 hr drive',
    mapUrl: 'https://www.google.com/maps/dir/Gabala/Guba/Qechresh+Forest',
    budget: dayBudget(),
    photos: [],
    stops: [
      dayStop('09:00', 'morning', 'Qechresh Forest', 'Apple orchards · temperate forest walk'),
      dayStop('13:00', 'afternoon', 'Macara Lake Park Hotel', 'Mountain village lunch · relax'),
      dayStop('17:00', 'evening', 'Macara Lake Park Hotel', 'Overnight nature resort', 'Stay', 'hotel')
    ]
  },
  {
    day: 8,
    title: 'Khinalug — Ancient Mountain Village',
    color: '#4338ca',
    routePreview: '2 stops · ≈ 80 km round trip · full day',
    mapUrl: 'https://www.google.com/maps/dir/Guba/Khinalug',
    budget: dayBudget(),
    photos: [],
    stops: [
      dayStop('08:00', 'morning', 'Khinalug', 'One of the world\'s oldest villages · panoramic viewpoints · mountain walk'),
      dayStop('13:00', 'afternoon', 'Khinalug', 'Traditional lunch in a home kitchen'),
      dayStop('16:00', 'evening', 'Macara Lake Park Hotel', 'Return to Guba · spa recovery', 'Return', 'car')
    ]
  },
  {
    day: 9,
    title: 'Return to Baku',
    color: ACCENT_DEEP,
    routePreview: '3 stops · ≈ 170 km · 2 hr drive · departure',
    mapUrl: 'https://www.google.com/maps/dir/Guba/Baku/Heydar+Aliyev+International+Airport',
    budget: dayBudget(),
    photos: [],
    stops: [
      dayStop('08:00', 'morning', 'Coffee Moffie', 'Coffee stop in Baku · last flat white'),
      dayStop('11:00', 'morning', 'Nizami Street', 'Shopping · Yashil Bazaar · carpet souvenirs'),
      dayStop('13:00', 'afternoon', 'Heydar Aliyev International Airport', 'Lunch · check-in · GYD departure', 'Airport', 'plane')
    ]
  }
];

const PLAN = {
  meta: {
    city: 'Azerbaijan',
    country: 'Azerbaijan',
    tagline: '9-day road trip — Baku, Silk Road towns, Caucasus mountains & eternal flames.',
    badge: 'Discover · 2026 Edition',
    edition: '2026',
    stats: {
      chapters: 42,
      qrCodes: '150+',
      attractions: attractions.length,
      hotels: hotels.length,
      dining: dining.length,
      days: itineraries.length
    },
    theme: {
      accent: ACCENT,
      accentSoft: ACCENT_SOFT,
      accentDeep: ACCENT_DEEP,
      transitLabel: 'Driver',
      tube: ACCENT,
      parks: '#059669',
      river: '#0891b2',
      gold: GOLD,
      navy: '#1a2744',
      heroImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Flame_Towers_Baku.jpg/960px-Flame_Towers_Baku.jpg'
    }
  },
  welcome: {
    editorLetter: 'Azerbaijan is where Europe meets Asia — a 9-day road trip from futuristic Baku to ancient Silk Road villages, mud volcanoes, and villages perched above the clouds. Unlike typical guides that spend a week in the capital, this itinerary gives you the full diversity of the country: modern architecture, fire temples, copper workshops, mountain lakes, and Khinalug — one of the oldest inhabited villages on Earth.\n\nEvery attraction, hotel, café and restaurant carries a QR code that opens directly in Google Maps. Every day has a route map, timeline, and driving distances. Scan, drive, eat, repeat.',
    howToUse: 'Point your phone camera at any QR code and the location opens in Google Maps in one tap. Rent a car with driver (recommended) or self-drive — ≈900 km total. Colour-coded day chapters make navigation effortless.\n\n— The Editors, Azerbaijan Bureau'
  },
  essentials: {
    currency: { label: '₼ Azerbaijani Manat', note: 'Cards widely accepted in cities. Carry cash for villages and roadside stalls.' },
    power: { label: 'Type C & F · 220V', note: 'European two-pin plug. Bring a universal adapter.' },
    sim: { label: 'eSIM or Bakcell SIM', note: 'Azercell, Bakcell, Nar Mobile. eSIM works on airport Wi-Fi at GYD.' },
    language: { label: 'Azerbaijani · Russian', note: 'English growing in Baku hotels and tourist sites. Google Translate helps in villages.' },
    tipping: { label: '5–10%', note: 'Appreciated in restaurants. Round up for drivers on long road days.' },
    emergency: { label: '112 · 102 · 103', note: 'General · Police · Ambulance.' },
    tapWater: { label: 'Bottled in cities', note: 'Drink bottled water. Tea is safe everywhere — Azerbaijanis drink it constantly.' },
    timezone: { label: 'AZT · UTC+4', note: 'No daylight saving — same time year-round.' }
  },
  arrival: [
    { step: '01', title: 'Immigration', desc: 'GYD has e-gates for many passports. Have hotel address and return ticket ready. Visa-free for many nationalities incl. GCC.' },
    { step: '02', title: 'SIM / eSIM', desc: 'Activate eSIM on airport Wi-Fi. Or buy Bakcell at arrivals — ₼20 gets 10GB for the road trip.' },
    { step: '03', title: 'Cash', desc: 'Withdraw ₼100 from a local ATM (not exchange booths). Villages and tea houses prefer cash.' },
    { step: '04', title: 'Driver / car', desc: 'Pre-book a private driver (recommended) or rental car. Confirm Day 3 Gobustan and Day 8 Khinalug routes.' },
    { step: '05', title: 'Transfer to hotel', desc: 'GYD to central Baku: 25 min by car. Uber and Bolt work in the capital.' },
    { step: '06', title: 'Hotel', desc: 'Check-in from 15:00. Hotels store luggage from 09:00 — start Day 1 immediately.' },
    { step: '07', title: 'First meal', desc: 'United Coffee Beans for breakfast, then walk into the Old City. Day 1 begins.' }
  ],
  packing: {
    spring: { months: 'MAR–MAY', temp: '8–20 °C · rain possible', items: ['Light jacket', 'Walking shoes', 'Umbrella', 'Sunscreen', 'Driver contact saved offline'] },
    summer: { months: 'JUN–AUG', temp: '20–35 °C · Baku hot', items: ['Breathable layers', 'Sun hat', 'SPF 50', 'Water bottle', 'Warm layer for mountains'] },
    autumn: { months: 'SEP–NOV', temp: '10–22 °C · golden light', items: ['Layered clothing', 'Waterproof jacket', 'Hiking boots', 'Camera for fall colours', 'Tea gift for hosts'] },
    winter: { months: 'DEC–FEB', temp: '0–10 °C · snow in mountains', items: ['Heavy coat', 'Thermal layers', 'Snow boots for Gabala', 'Gloves', 'Check Khinalug road status'] }
  },
  weatherTable: {
    rows: [
      { month: 'Mar', high: '13°C', low: '5°C', rain: 'Low', crowd: 'Low', price: '€€' },
      { month: 'Apr', high: '18°C', low: '9°C', rain: 'Low', crowd: 'Low', price: '€€' },
      { month: 'May', high: '24°C', low: '14°C', rain: 'Low', crowd: 'Med', price: '€€' },
      { month: 'Jun', high: '30°C', low: '19°C', rain: 'Low', crowd: 'Med', price: '€€€' },
      { month: 'Jul', high: '33°C', low: '22°C', rain: 'Low', crowd: 'High', price: '€€€' },
      { month: 'Aug', high: '32°C', low: '21°C', rain: 'Low', crowd: 'High', price: '€€€' },
      { month: 'Sep', high: '27°C', low: '17°C', rain: 'Low', crowd: 'Med', price: '€€' },
      { month: 'Oct', high: '20°C', low: '11°C', rain: 'Med', crowd: 'Low', price: '€€' }
    ],
    sweetSpot: 'May and September — warm enough for mountains, cool enough for Baku walks, fewer crowds than summer.'
  },
  transport: {
    modes: [
      { name: 'Private Driver', icon: 'car', desc: 'Recommended for this itinerary. ≈900 km total. Driver knows Gobustan, Khinalug roads.' },
      { name: 'Rental Car', icon: 'car', desc: 'Self-drive possible. Roads good on main routes. 4×4 helpful for mud volcanoes.' },
      { name: 'Bolt / Uber', icon: 'taxi', desc: 'Baku only. Cheap and reliable in the capital.' },
      { name: 'Baku Metro', icon: 'metro', desc: '3 lines in Baku. Useful Days 1–2. ₼0.30 per ride.' },
      { name: 'Intercity Bus', icon: 'bus', desc: 'Budget option Baku–Sheki. Slower than car — not ideal for this 9-day route.' }
    ],
    oysterTips: [
      { title: 'Baku → Lahij', desc: '≈3 hours · 200 km · mountain road after Shamakhi' },
      { title: 'Lahij → Sheki', desc: '≈2 hours · 120 km · scenic valley drive' },
      { title: 'Sheki → Gabala', desc: '≈2 hours · 100 km · easy highway' },
      { title: 'Gabala → Guba', desc: '≈4 hours · 180 km · longest driving day' },
      { title: 'Guba → Baku', desc: '≈2 hours · 170 km · departure day' }
    ],
    exit6Tip: 'Pre-book your driver for all 9 days. One consistent driver who knows Khinalug road conditions is worth the cost.'
  },
  maps: {
    overview: {
      caption: '9-day loop — Baku, Silk Road, Gabala, Guba, return',
      markers: [
        { name: 'Baku', type: 'city', lat: 40.4093, lng: 49.8671 },
        { name: 'Gobustan', type: 'sight', lat: 40.1056, lng: 49.3880 },
        { name: 'Lahij', type: 'sight', lat: 40.8453, lng: 48.3856 },
        { name: 'Sheki', type: 'city', lat: 41.1917, lng: 47.1706 },
        { name: 'Gabala', type: 'city', lat: 40.9792, lng: 47.8458 },
        { name: 'Guba', type: 'city', lat: 41.3611, lng: 48.5136 },
        { name: 'Khinalug', type: 'sight', lat: 41.2167, lng: 48.1333 }
      ]
    }
  },
  attractions,
  hotels,
  dining,
  itineraries,
  rainyDay: [
    { name: 'Heydar Aliyev Center', address: 'Baku', desc: 'Indoor architecture & design museum', img: img(0), mapUrl: mapQuery('Heydar Aliyev Center') },
    { name: 'Azerbaijan Carpet Museum', address: 'Baku', desc: 'Weaving demos & centuries of craft', img: img(1), mapUrl: mapQuery('Azerbaijan Carpet Museum') },
    { name: 'Şirvanşah Museum Restaurant', address: 'Old City', desc: 'Lunch under medieval arches', img: img(2), mapUrl: mapQuery('Şirvanşah Museum Restaurant') },
    { name: 'Sheki Caravanserai', address: 'Sheki', desc: 'Silk Road inn — atmospheric even in rain', img: img(3), mapUrl: mapQuery('Sheki Caravanserai') },
    { name: 'Chenot Palace Gabala', address: 'Gabala', desc: 'Spa day when mountain weather turns', img: img(4), mapUrl: mapQuery('Chenot Palace Gabala') }
  ],
  sunnyDay: [
    { name: 'Highland Park', address: 'Baku', desc: 'Best sunset panorama', img: img(5), mapUrl: mapQuery('Highland Park') },
    { name: 'Mud Volcanoes', address: 'Gobustan', desc: 'Lunar landscape in full sun', img: img(6), mapUrl: mapQuery('Mud Volcanoes') },
    { name: 'Nohur Lake', address: 'Gabala', desc: 'Mirror reflections on calm days', img: img(7), mapUrl: mapQuery('Nohur Lake') },
    { name: 'Tufandag Cable Car', address: 'Gabala', desc: 'Caucasus views from the cable car', img: img(8), mapUrl: mapQuery('Tufandag Cable Car') },
    { name: 'Khinalug', address: 'Guba', desc: 'High-altitude village · clear mountain air', img: img(9), mapUrl: mapQuery('Khinalug') },
    { name: 'Yanar Dag', address: 'Baku', desc: 'Burning mountain at dusk', img: img(10), mapUrl: mapQuery('Yanar Dag') }
  ],
  hiddenGems: [
    { name: 'Lahij', desc: 'Copper workshops on stone streets — living Silk Road craft', img: img(11), mapUrl: mapQuery('Lahij') },
    { name: 'Church of Kish', desc: '2,000-year-old Albanian church above Sheki', img: img(12), mapUrl: mapQuery('Church of Kish') },
    { name: 'Seven Beauties Waterfall', desc: 'Seven tiers through a forest gorge near Gabala', img: img(13), mapUrl: mapQuery('Seven Beauties Waterfall') },
    { name: 'Qechresh Forest', desc: 'Apple orchards and temperate forest above Guba', img: img(14), mapUrl: mapQuery('Qechresh Forest') },
    { name: 'Passage 145', desc: 'Hidden Old City café — tea with jam and pakhlava', img: img(15), mapUrl: mapQuery('Passage 145') },
    { name: 'Yanar Dag', desc: 'A hillside that burns forever — Marco Polo wrote about it', img: img(16), mapUrl: mapQuery('Yanar Dag') }
  ],
  warnings: [
    { title: 'Airport taxi touts', desc: 'Use Bolt or pre-booked transfer at GYD. Agree driver price for all 9 days in writing before Day 1.' },
    { title: 'Old City carpet shops', desc: 'Street sellers push synthetic carpets as handmade. Buy only from certified shops like the Carpet Museum store.' },
    { title: 'Khinalug road closure', desc: 'Mountain road closes in heavy snow or fog. Check with your driver the night before Day 8.' },
    { title: 'Mud volcano shoes', desc: 'The mud is harmless but ruins shoes. Wear old trainers you can wash.' },
    { title: 'Baku summer heat', desc: 'July–August exceeds 35°C. Start Old City walks at 09:00. Hydrate constantly.' },
    { title: 'Village photography', desc: 'Ask before photographing Khinalug and Lahij residents. Respect privacy in home kitchens.' },
    { title: 'Currency exchange', desc: 'Never use street changers. ATMs give the best rate. Euros accepted at some hotels.' }
  ],
  shopping: {
    districts: [
      { name: 'Port Baku Mall', desc: 'Luxury brands · waterfront dining', img: img(0), mapUrl: mapQuery('Port Baku Mall') },
      { name: 'Deniz Mall', desc: 'Modern mall on Nizami corridor', img: img(1), mapUrl: mapQuery('Deniz Mall') },
      { name: '28 Mall', desc: 'Mid-range shopping · cinema · food court', img: img(2), mapUrl: mapQuery('28 Mall Baku') },
      { name: 'Yashil Bazaar', desc: 'Green market · spices · fruit · caviar', img: img(3), mapUrl: mapQuery('Yashil Bazaar Baku') }
    ],
    brands: ['Azerbaijan Carpet', 'Azeri SWARA', 'Lahij copper', 'Sheki halva', 'Baku Roasting Company beans'],
    souvenirs: ['Hand-woven carpet (certified)', 'Copper tray from Lahij', 'Sheki halva box', 'Armudu tea glass set', 'Caviar from Yashil Bazaar'],
    vatTips: { rate: '18% VAT', note: 'Tourist refund available on some purchases over ₼200 at registered stores.' }
  },
  budget: {
    budget: { daily: '€70–100 per person / day', accommodation: '€40 Lahij Guest House', food: '₼15 local restaurants', transport: '€30 shared driver/day', activities: '₼10 site tickets', extras: '₼5 tea & tips', tip: 'Stay in guesthouses Days 4–5. Eat piti and dolma. Free viewpoints beat paid tours.' },
    mid: { daily: '€150–250 per person / day', accommodation: '€120 Sheki Palace Hotel', food: '₼40 sit-down meals', transport: '€60 private driver/day', activities: '₼25 tickets & cable car', extras: '₼15 coffee & tips' },
    luxury: { daily: '€350–700 per person / day', accommodation: '€350 Four Seasons Baku', food: '₼80 Sky Grill & fine dining', transport: '€100 premium driver & guide', activities: '₼50 spa & private tours', extras: '₼40 wine & tips' }
  },
  family: {
    tip: 'Gabala resorts (Qafqaz Riverside) have kids\' clubs. Gobustan petroglyphs fascinate children. Khinalug road is not suitable for toddlers — skip or do a half-day.',
    rows: [
      { attraction: 'Gobustan National Park', desc: 'Rock art treasure hunt', goodForKids: true, stroller: false, babyChange: false, familyTicket: true },
      { attraction: 'Mud Volcanoes', desc: 'Messy fun — bring spare clothes', goodForKids: true, stroller: false, babyChange: false, familyTicket: true },
      { attraction: 'Tufandag Cable Car', desc: 'Mountain ride · ski school in winter', goodForKids: true, stroller: true, babyChange: true, familyTicket: true },
      { attraction: 'Baku Boulevard', desc: 'Ferris wheel · gondolas · wide paths', goodForKids: true, stroller: true, babyChange: true, familyTicket: true },
      { attraction: 'Khinalug', desc: 'Older kids only · rough roads', goodForKids: false, stroller: false, babyChange: false, familyTicket: true }
    ]
  },
  emergency: {
    numbers: [
      { label: '112', desc: 'General emergency', icon: 'emergency' },
      { label: '102', desc: 'Police', icon: 'police' },
      { label: '103', desc: 'Ambulance', icon: 'medical' },
      { label: '101', desc: 'Fire', icon: 'fire' }
    ],
    hospitals: [
      { name: 'Central Clinical Hospital', address: 'Baku', icon: 'hospital', mapUrl: mapQuery('Central Clinical Hospital Baku') },
      { name: 'Medical Plaza', address: 'Baku', icon: 'hospital', mapUrl: mapQuery('Medical Plaza Baku') },
      { name: 'Baku City Hospital', address: 'Baku', icon: 'hospital', mapUrl: mapQuery('Baku City Hospital') }
    ],
    embassies: [
      { country: 'Saudi Arabia', address: 'Baku · AZ1000', phone: '+994 12 498 0560', emergency: '+994 12 498 0561', website: 'https://embassies.mofa.gov.sa', icon: 'embassy', mapUrl: mapQuery('Saudi Embassy Baku') },
      { country: 'United Arab Emirates', address: 'Baku · AZ1065', phone: '+994 12 465 3800', emergency: '+994 50 220 0000', website: 'https://www.mofaic.gov.ae', icon: 'embassy', mapUrl: mapQuery('UAE Embassy Baku') },
      { country: 'Qatar', address: 'Baku · AZ1008', phone: '+994 12 465 0940', emergency: '+994 50 220 0000', website: 'https://mofa.gov.qa', icon: 'embassy', mapUrl: mapQuery('Qatar Embassy Baku') },
      { country: 'Kuwait', address: 'Baku · AZ1003', phone: '+994 12 498 7610', emergency: '+994 12 498 7611', website: 'https://www.mofa.gov.kw', icon: 'embassy', mapUrl: mapQuery('Kuwait Embassy Baku') },
      { country: 'Oman', address: 'Baku · AZ1025', phone: '+994 12 464 2525', emergency: '+994 50 220 0000', website: 'https://www.oman.org', icon: 'embassy', mapUrl: mapQuery('Oman Embassy Baku') }
    ],
    lostPassport: 'Report to police (102) and obtain a report. Contact your embassy in Baku for an emergency travel document. Keep passport photos on your phone.'
  },
  phrases: [
    { english: 'Salam — Hello', use: 'Every greeting' },
    { english: 'Sağ ol — Thank you', use: 'After meals and purchases' },
    { english: 'Çay — Tea', use: 'Azerbaijanis offer tea constantly — accept it' },
    { english: 'Ne qədər? — How much?', use: 'Markets and bazaars' },
    { english: 'Bu çox gözəl — This is very beautiful', use: 'Villages and hosts' },
    { english: 'Harada? — Where?', use: 'Asking directions' },
    { english: 'Driver, yavaş — Driver, slowly', use: 'Mountain roads' },
    { english: 'Hava limanı — Airport', use: 'Day 9 departure' }
  ],
  cheatSheet: {
    title: 'One-Page Cheat Sheet',
    subtitle: 'Screenshot before your flight — every essential in one glance.',
    emergency: [
      { label: '112', value: 'Emergency' },
      { label: '102', value: 'Police' },
      { label: '103', value: 'Ambulance' }
    ],
    transport: [
      { label: '≈900 km', value: 'Total driving' },
      { label: 'Driver', value: 'Recommended' },
      { label: 'GYD', value: 'Heydar Aliyev Airport' }
    ],
    money: [
      { label: '₼ Manat', value: 'Local currency' },
      { label: 'Cards OK', value: 'Cities & malls' },
      { label: 'Cash', value: 'Villages & bazaars' }
    ],
    apps: [
      { name: 'Bolt', use: 'Baku taxis' },
      { name: 'Google Maps', use: 'Offline maps for mountains' },
      { name: 'Google Translate', use: 'Azerbaijani offline pack' }
    ],
    topQrCodes: [
      { name: 'Heydar Aliyev Airport', mapUrl: mapQuery('Heydar Aliyev International Airport') },
      { name: 'Old City (Icherisheher)', mapUrl: mapQuery('Old City Baku') },
      { name: 'Flame Towers', mapUrl: mapQuery('Flame Towers Baku') },
      { name: 'Palace of Shaki Khans', mapUrl: mapQuery('Palace of Shaki Khans') },
      { name: 'Khinalug', mapUrl: mapQuery('Khinalug') },
      { name: 'Four Seasons Baku', mapUrl: mapQuery('Four Seasons Hotel Baku') },
      { name: 'Central Clinical Hospital', mapUrl: mapQuery('Central Clinical Hospital Baku') },
      { name: 'Gobustan National Park', mapUrl: mapQuery('Gobustan National Park') }
    ]
  },
  etiquette: [
    { rule: 'Accept tea', desc: 'When offered armudu tea, accept at least one glass. Refusing is impolite in villages and shops.' },
    { rule: 'Remove shoes', desc: 'Take off shoes entering mosques and home kitchens in Khinalug and Lahij.' },
    { rule: 'Dress modestly', desc: 'Cover shoulders and knees at mosques and mountain villages. Baku is more relaxed.' },
    { rule: 'Photograph with permission', desc: 'Ask before photographing people in villages. Landscapes are free.' },
    { rule: 'Bargain gently', desc: 'Bazaars expect negotiation. Start at 60% of asking price. Lahij copper is fairly priced — don\'t insult artisans.' },
    { rule: 'Respect fire sites', desc: 'Ateshgah and Yanar Dag are sacred heritage. No littering, no reckless behaviour near flames.' },
    { rule: 'Tip your driver', desc: 'After 9 days on mountain roads, a €20–50 tip is customary and appreciated.' }
  ]
};

const output = `/**
 * DISCOVER Azerbaijan — Travel Guide
 * 9-day road trip: Baku, Silk Road, Gabala, Guba, Khinalug
 * Real place photos via Wikimedia Commons (CC-licensed)
 */
const PLAN = ${JSON.stringify(PLAN, null, 2)};\n`;

fs.writeFileSync(OUT, output);
console.log(`Wrote ${OUT}`);
console.log(`  attractions: ${attractions.length}`);
console.log(`  hotels: ${hotels.length}`);
console.log(`  dining: ${dining.length}`);
console.log(`  days: ${itineraries.length}`);
