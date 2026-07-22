import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const OUT = path.join(root, 'data', 'trabzon.js');

const PHOTOS = [
  'photo-1513635269975-59663e0ac1ad',
  'photo-1582050041567-9cfdd330d545',
  'photo-1505761671935-60b3a7427bad',
  'photo-1524661135-423995f22d0b',
  'photo-1520222984843-df35ebc0f24d',
  'photo-1512453979798-5ea266f8880c',
  'photo-1566073771259-6a8506099945',
  'photo-1631049307264-da0ec9d70304',
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
  const q = /\btrabzon\b/i.test(name) ? name : `${name} Trabzon`;
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;
}

function attractionCard(i, {
  name, address, hours, tube, ticket, bestArrival, waitSummer, waitWinter,
  photoSpot, lens, tip, bookUrl, bookText = 'View on Map', avgVisit,
  nearby = [], nearbyCafes, nearbyRestaurants, nearbyTube, nearbyToilets, nearbyAtm,
  didYouKnow, localSecret, crowd = { morning: 3, afternoon: 4, evening: 2 }
}) {
  return {
    name, address, hours, tube, ticket, bestArrival, waitSummer, waitWinter,
    photoSpot, lens, tip,
    mapUrl: mapQuery(name),
    bookUrl: bookUrl || mapQuery(name),
    bookText, avgVisit, crowd, nearby,
    nearbyCafes: nearbyCafes || 'See dining chapter in this guide.',
    nearbyRestaurants: nearbyRestaurants || 'See dining chapter in this guide.',
    nearbyTube: nearbyTube || tube,
    nearbyToilets: nearbyToilets || 'On-site or nearby cafés.',
    nearbyAtm: nearbyAtm || 'Ziraat Bank · İş Bankası · ATMs on Meydan',
    didYouKnow, localSecret,
    instagram: {
      sunset: photoSpot,
      sunrise: photoSpot,
      drone: 'Check local regulations — monasteries and national parks may restrict drones',
      settings: 'f/8 · ISO 200 · 24–70mm'
    },
    photos: {
      hero: img(i),
      detail: img(i + 1),
      photoSpot: img(i + 2),
      map: img(i + 3),
      heroPosition: 'center 40%'
    },
    seasonalPhotos: {
      spring: img(i + 4),
      summer: img(i + 5),
      autumn: img(i + 6),
      christmas: img(i + 7)
    }
  };
}

function hotelCard(i, {
  name, category, address, price, rating, googleRating, room, cancellation,
  tube, airport, nearbyAttractions, walkingScore, breakfast, idealFor, tip, bookUrl
}) {
  return {
    name, category, address, price, rating, googleRating, room, cancellation,
    tube, airport, nearbyAttractions, walkingScore, breakfast, idealFor, tip,
    mapUrl: mapQuery(name),
    bookUrl: bookUrl || mapQuery(name),
    photos: {
      exterior: img(i),
      lobby: img(i + 1),
      room: img(i + 2),
      luxuryRoom: img(i + 3),
      restaurant: img(i + 4),
      pool: img(i + 5),
      rooftop: img(i + 6),
      breakfast: img(i + 7),
      spa: img(i + 8),
      view: img(i + 9)
    }
  };
}

function diningCard(i, {
  name, category, address, price, famous, halal = true, vegetarian = true,
  reservation, wait, michelin = '—', kidsFriendly = 'Yes', dressCode = 'Smart casual',
  tip, bookUrl, dishes
}) {
  const defaultDishes = dishes || [
    { name: famous, img: img(i + 1), desc: `Signature dish at ${name}.` },
    { name: 'Seasonal Special', img: img(i + 2), desc: 'Ask your server for today\'s recommendation.' },
    { name: 'Black Sea Starter', img: img(i + 3), desc: 'Local produce from the coast and highlands.' },
    { name: 'Main Course', img: img(i + 4), desc: 'Hearty Karadeniz cooking done properly.' },
    { name: 'Dessert', img: img(i + 5), desc: 'Finish with helva, rice pudding or local sweets.' }
  ];
  return {
    name, category, address, price, famous, halal, vegetarian, reservation, wait,
    michelin, kidsFriendly, dressCode, tip,
    mapUrl: mapQuery(name),
    bookUrl: bookUrl || mapQuery(name),
    dishes: defaultDishes,
    photos: {
      signature: img(i),
      interior: img(i + 1),
      exterior: img(i + 2),
      dessert: img(i + 3),
      coffee: img(i + 4)
    }
  };
}

function cafeCard(i, name, famous, address) {
  return diningCard(i, {
    name,
    category: 'Café · Coffee',
    address,
    price: '₺80–250',
    famous,
    reservation: 'Walk-in',
    wait: '5–15 min at peak',
    dressCode: 'Casual',
    tip: 'Trabzon cafés fill quickly on weekends — arrive before 09:30 for a table.',
    dishes: [
      { name: famous, img: img(i), desc: 'House specialty — order this first.' },
      { name: 'Turkish Coffee', img: img(i + 1), desc: 'Thick, strong and served with water.' },
      { name: 'Pastry', img: img(i + 2), desc: 'Fresh bakes and local helva.' },
      { name: 'Black Sea Breakfast', img: img(i + 3), desc: 'Cheese, honey, kaymak and endless tea.' },
      { name: 'Menemen', img: img(i + 4), desc: 'Eggs with peppers and tomatoes — light option.' }
    ]
  });
}

const attractions = [
  attractionCard(0, {
    name: 'Trabzon Museum',
    address: 'Kostaki Mansion · Zeytinlik Mah. · Ortahisar',
    hours: '08:30–19:00 · closed Mon',
    tube: 'Meydan 5 min walk · dolmuş routes 101/102',
    ticket: '₺60 adult · modest dress',
    bestArrival: '10:00',
    waitSummer: '10–20 min',
    waitWinter: '0–10 min',
    photoSpot: 'From the garden — Kostaki Mansion façade and Black Sea stone.',
    lens: '24–35mm',
    tip: 'Housed in a 1911 mansion — Ottoman and Byzantine artefacts tell Trabzon\'s story as a Silk Road port.',
    avgVisit: '1–1.5 hours',
    nearby: [
      { name: 'Meydan Square', walk: '5 min' },
      { name: 'Zagnos Valley Park', walk: '10 min' },
      { name: 'Boztepe', walk: '15 min drive' }
    ],
    didYouKnow: 'Trabzon was the capital of the Empire of Trebizond — a Byzantine successor state that lasted until 1461.',
    localSecret: 'The ethnography floor has exquisite Black Sea costumes rarely photographed by tourists.'
  }),
  attractionCard(2, {
    name: 'Meydan Square',
    address: 'Meydan · Ortahisar · city centre',
    hours: 'Always open · cafés 08:00–23:00',
    tube: 'All city dolmuş routes pass through Meydan',
    ticket: 'Free',
    bestArrival: '11:30',
    waitSummer: '0',
    waitWinter: '0',
    photoSpot: 'From the fountain — street life, cafés and the old clock tower.',
    lens: '35mm',
    tip: 'The beating heart of Trabzon. Start here for people-watching, shopping and your first Turkish tea of the day.',
    avgVisit: '45 min',
    nearby: [
      { name: 'Trabzon Museum', walk: '5 min' },
      { name: 'Neşve Coffee', walk: '3 min' },
      { name: 'Zagnos Valley Park', walk: '10 min' }
    ],
    didYouKnow: 'Meydan has been Trabzon\'s commercial centre since Ottoman times — merchants from Persia and the Caucasus traded here.',
    localSecret: 'The side streets behind Meydan have the best local bakeries — follow the smell of fresh simit.'
  }),
  attractionCard(4, {
    name: 'Zagnos Valley Park',
    address: 'Zagnos Vadisi · Ortahisar',
    hours: '07:00–22:00',
    tube: 'Meydan 10 min walk',
    ticket: 'Free',
    bestArrival: '15:00',
    photoSpot: 'Historic stone bridges over the stream — lush valley greenery.',
    lens: '24–70mm',
    tip: 'A green corridor through the city with Ottoman bridges and walking trails. Perfect afternoon stroll after lunch.',
    avgVisit: '1 hour',
    nearby: [
      { name: 'Meydan Square', walk: '10 min' },
      { name: 'Trabzon Museum', walk: '12 min' },
      { name: 'Boztepe', walk: '10 min drive' }
    ],
    didYouKnow: 'The valley was once the city\'s defensive moat — now reclaimed as Trabzon\'s favourite urban park.',
    localSecret: 'Follow the stream upstream for quieter paths where locals jog at sunset.'
  }),
  attractionCard(6, {
    name: 'Boztepe',
    address: 'Boztepe Hill · panoramic viewpoint',
    hours: 'Always open · tea gardens until 23:00',
    tube: 'Taxi from Meydan 10 min · dolmuş to Boztepe',
    ticket: 'Free · tea ₺30–50',
    bestArrival: '17:00',
    waitSummer: '0',
    waitWinter: '0',
    photoSpot: 'From the tea terrace — full panoramic sweep of Trabzon and the Black Sea.',
    lens: '16–35mm wide',
    tip: 'Order çay on the terrace and watch the city turn gold at sunset. The Radisson Blu sits on this hill.',
    avgVisit: '1 hour',
    crowd: { morning: 2, afternoon: 3, evening: 5 },
    nearby: [
      { name: 'Radisson Blu Hotel Trabzon', walk: '2 min' },
      { name: 'Cephanelik Restaurant', walk: '5 min drive' },
      { name: 'Meydan Square', walk: '15 min drive' }
    ],
    didYouKnow: 'Boztepe means "Grey Hill" — Ottoman travellers used it as a lookout over the harbour below.',
    localSecret: 'Weekday sunsets are quieter than weekends — arrive by 16:45 for the best terrace table.'
  }),
  attractionCard(8, {
    name: 'Sümela Monastery',
    address: 'Maçka · Altındere Valley · 46 km south',
    hours: '09:00–18:00 · closed Mon in winter',
    tube: '1 hour drive from Trabzon · tours daily',
    ticket: '₺150 adult · book online in peak season',
    bestArrival: '09:30',
    waitSummer: '30–60 min',
    waitWinter: '10–20 min',
    photoSpot: 'From the valley floor — monastery carved into the cliff face, full frame.',
    lens: '70–200mm from valley · 24mm at entrance',
    tip: 'Allow three hours. The final walk up is steep — wear proper shoes. One of Turkey\'s most dramatic sights.',
    bookUrl: 'https://muze.gov.tr/muze-detay?SectionId=SUM01&DistId=SUM',
    avgVisit: '3 hours',
    crowd: { morning: 3, afternoon: 5, evening: 2 },
    nearby: [
      { name: 'Altındere National Park', walk: '5 min' },
      { name: 'Hamsiköy', walk: '20 min drive' }
    ],
    didYouKnow: 'Founded in AD 386, Sümela was built into a cliff 1,200 m above sea level — monks reached it by rope ladder.',
    localSecret: 'The lower viewpoint before the final climb gives the classic postcard shot without the crowds at the top.'
  }),
  attractionCard(10, {
    name: 'Altındere National Park',
    address: 'Maçka · Altındere Valley · near Sümela',
    hours: '08:00–19:00',
    tube: '1 hour drive from Trabzon · same route as Sümela',
    ticket: 'Included with Sümela ticket',
    bestArrival: '15:00',
    photoSpot: 'River trails through ancient forest — mossy stones and mountain stream.',
    lens: '24–70mm',
    tip: 'Easy walking trails and river views after Sümela. Pack a light jacket — the valley is cooler than the coast.',
    avgVisit: '1–2 hours',
    nearby: [
      { name: 'Sümela Monastery', walk: '5 min' },
      { name: 'Hamsiköy', walk: '20 min drive' }
    ],
    didYouKnow: 'Altındere protects one of the Black Sea\'s last pristine river valleys — home to brown bears and wild boar.',
    localSecret: 'The riverside path downstream from the monastery car park is shaded and rarely crowded.'
  }),
  attractionCard(12, {
    name: 'Uzungöl Lake',
    address: 'Çaykara · Uzungöl · 99 km south',
    hours: 'Always open · lakeside cafés 08:00–22:00',
    tube: '1.5 hour drive from Trabzon · daily tours',
    ticket: 'Free · parking ₺50',
    bestArrival: '10:00',
    waitSummer: '0',
    waitWinter: '0',
    photoSpot: 'From the lakeside path — mosque reflection on still water with forested peaks.',
    lens: '16–35mm',
    tip: 'Walk the full lake circuit (about 90 min). Visit tea plantations on the slopes above for mountain views.',
    avgVisit: '3–4 hours',
    nearby: [
      { name: 'İnan Kardeşler Restaurant', walk: '5 min' }
    ],
    didYouKnow: 'Uzungöl means "Long Lake" — a landslide dammed the stream and created this alpine jewel at 1,090 m.',
    localSecret: 'Walk counter-clockwise around the lake — the eastern shore has fewer souvenir stalls and better light.'
  }),
  attractionCard(14, {
    name: 'Ayder Plateau',
    address: 'Çamlıhemşin · Rize province · 2 hr from Trabzon',
    hours: 'Always open · restaurants 09:00–21:00',
    tube: '2 hour drive · winding mountain road',
    ticket: 'Free · zipline & hot springs extra',
    bestArrival: 'Morning',
    photoSpot: 'Gelin Tülü Waterfall with plateau mist — classic Karadeniz highland scene.',
    lens: '24–70mm',
    tip: 'Combine Gelin Tülü Waterfall, mountain lunch, zipline and hot springs in one long day. Start early.',
    avgVisit: 'Full day',
    nearby: [
      { name: 'Gelin Tülü Waterfall', walk: '10 min drive' }
    ],
    didYouKnow: 'Ayder sits at 1,350 m in the Kaçkar Mountains — famous for its thermal springs and wooden plateau architecture.',
    localSecret: 'The hot springs are busiest after 16:00 — soak at lunch time when tour groups are eating.'
  }),
  attractionCard(16, {
    name: 'Gelin Tülü Waterfall',
    address: 'Ayder Plateau · Çamlıhemşin',
    hours: '08:00–18:00',
    tube: '2 hour drive from Trabzon via Ayder',
    ticket: '₺30',
    bestArrival: '11:00',
    photoSpot: 'From the bridge — waterfall cascading through lush green canyon.',
    lens: '24mm · polarising filter',
    tip: 'Stop here on the way to or from Ayder Plateau. The name means "Bridal Veil" — the mist catches the light beautifully.',
    avgVisit: '45 min',
    nearby: [
      { name: 'Ayder Plateau', walk: '10 min drive' }
    ],
    didYouKnow: 'Local legend says the waterfall was a bridal veil left by a fairy — hence the poetic name.',
    localSecret: 'Visit after rain for maximum flow — the veil effect is most dramatic in spring and autumn.'
  }),
  attractionCard(18, {
    name: 'Sera Lake',
    address: 'Yomra · 12 km east of Trabzon',
    hours: 'Always open · boat rides 09:00–19:00',
    tube: '20 min drive · taxi ₺200',
    ticket: 'Free · boat ₺100–150',
    bestArrival: '09:00',
    photoSpot: 'From the lakeside promenade — calm water with mountain backdrop at sunrise.',
    lens: '24–70mm',
    tip: 'Morning boat rides are calmest. Lakeside cafés serve fresh fish — combine with Akçaabat in the afternoon.',
    avgVisit: '2 hours',
    nearby: [
      { name: 'Akçaabat', walk: '15 min drive' }
    ],
    didYouKnow: 'Sera is a natural lagoon separated from the Black Sea by a thin sandbar — unique on this coast.',
    localSecret: 'The east shore café strip is quieter before 10:00 — best for photography and a peaceful breakfast.'
  }),
  attractionCard(0, {
    name: 'Akçaabat',
    address: 'Akçaabat district · 15 km west',
    hours: 'Always open · köfte restaurants 11:00–22:00',
    tube: '20 min drive · dolmuş from Meydan',
    ticket: 'Free',
    bestArrival: '15:00',
    photoSpot: 'Waterfront promenade at sunset — fishing boats and Black Sea horizon.',
    lens: '35mm',
    tip: 'Famous for köfte meatballs and local markets. Combine with Sera Lake for a relaxed Day 5.',
    avgVisit: '2–3 hours',
    nearby: [
      { name: 'Cemilusta Akçaabat Köfte', walk: '5 min' },
      { name: 'DoubleTree by Hilton Trabzon', walk: '5 min' }
    ],
    didYouKnow: 'Akçaabat köfte has protected geographical status — the recipe uses a specific blend of lamb and beef.',
    localSecret: 'The Tuesday market has the best local honey and mountain herbs at half tourist prices.'
  }),
  attractionCard(2, {
    name: 'Trabzon Botanical Garden',
    address: 'Ortahisar · Ziraat Fakültesi campus',
    hours: '08:00–17:00 · closed Sun',
    tube: 'Taxi from Meydan 10 min',
    ticket: '₺20',
    bestArrival: '10:00',
    photoSpot: 'Rose garden and Black Sea native species — peaceful green escape.',
    lens: '50–85mm for flowers',
    tip: 'A calm Day 6 morning before Atatürk Pavilion and the aquarium. Bring insect repellent in summer.',
    avgVisit: '1.5 hours',
    nearby: [
      { name: 'Atatürk Pavilion', walk: '10 min drive' },
      { name: 'Trabzon Aquarium', walk: '15 min drive' }
    ],
    didYouKnow: 'The garden preserves hundreds of Black Sea plant species — many found nowhere else in Turkey.',
    localSecret: 'The upper terrace has a bench with a hidden view over the city — ask staff for directions.'
  }),
  attractionCard(4, {
    name: 'Atatürk Pavilion',
    address: 'Soğuksu · Ortahisar · hilltop mansion',
    hours: '09:00–17:00 · closed Mon',
    tube: 'Taxi from Meydan 10 min',
    ticket: '₺40',
    bestArrival: '11:00',
    photoSpot: 'White pavilion against green gardens — elegant Ottoman-era architecture.',
    lens: '35mm',
    tip: 'Mustafa Kemal Atatürk stayed here — the mansion is preserved as a museum with period furnishings.',
    avgVisit: '45 min',
    nearby: [
      { name: 'Trabzon Botanical Garden', walk: '10 min drive' },
      { name: 'Boztepe', walk: '5 min drive' }
    ],
    didYouKnow: 'Atatürk visited Trabzon several times — this pavilion was his favourite Black Sea retreat.',
    localSecret: 'The garden bench facing the sea was his preferred spot — sit there and read the inscription.'
  }),
  attractionCard(6, {
    name: 'Trabzon Aquarium',
    address: 'Forum Trabzon · Yomra',
    hours: '10:00–20:00',
    tube: '15 min drive · Forum Trabzon mall',
    ticket: '₺250 adult · ₺180 child',
    bestArrival: '14:00',
    photoSpot: 'Tunnel aquarium — Black Sea and tropical species overhead.',
    lens: 'Phone OK · no flash',
    tip: 'Turkey\'s largest tunnel aquarium. Good for families and rainy afternoons. Allow 1.5 hours.',
    avgVisit: '1.5 hours',
    nearby: [
      { name: 'Forum Trabzon', walk: '1 min' }
    ],
    didYouKnow: 'The main tank holds 3 million litres of water — sharks, rays and Black Sea native species together.',
    localSecret: 'Feeding time at 15:00 draws crowds — arrive at 14:00 to see the tunnel before the rush.'
  }),
  attractionCard(8, {
    name: 'Hıdırnebi Plateau',
    address: 'Şalpazarı · 55 km south · optional Day 7',
    hours: 'Always open · summer only recommended',
    tube: '1.5 hour drive · mountain road',
    ticket: 'Free',
    bestArrival: '10:00',
    photoSpot: 'Highland meadows above the clouds — panoramic Kaçkar range views.',
    lens: '16–35mm',
    tip: 'Option A for Day 7. Less touristy than Ayder — bring a picnic and enjoy the silence.',
    avgVisit: 'Half day',
    didYouKnow: 'Hıdırnebi sits at 1,600 m — local shepherds still graze flocks here in summer.',
    localSecret: 'The plateau road is single-lane — start early to avoid meeting tour buses on blind corners.'
  }),
  attractionCard(10, {
    name: 'Çal Cave',
    address: 'Düzköy · 40 km south · optional Day 7',
    hours: '09:00–18:00',
    tube: '1 hour drive from Trabzon',
    ticket: '₺80',
    bestArrival: '10:00',
    photoSpot: 'Underground stalactite chambers — dramatic lighting and cool air.',
    lens: 'No flash · phone OK',
    tip: 'Option B for Day 7. Turkey\'s second-longest cave — boardwalks and lighting throughout.',
    avgVisit: '1 hour',
    didYouKnow: 'Çal Cave extends over 8 km underground — only a fraction is open to visitors.',
    localSecret: 'Bring a light jacket — the cave stays at 12 °C year-round even in August.'
  })
];

const hotels = [
  hotelCard(0, {
    name: 'Radisson Blu Hotel Trabzon',
    category: 'Luxury',
    address: 'Boztepe · panoramic hilltop',
    price: '€180–350/night',
    rating: '9.0',
    googleRating: '4.4',
    room: 'Superior Sea View · Boztepe terrace',
    cancellation: 'Free 24h · flexible rate',
    tube: 'Taxi to Meydan 10 min',
    airport: 'TZX 15 min · 8 km',
    nearbyAttractions: 'Boztepe 2 min · Cephanelik 5 min · Meydan 10 min',
    walkingScore: '70 / 100 — hilltop location',
    breakfast: 'Included in most rates',
    idealFor: ['Couple', 'Honeymoon', 'City views'],
    tip: 'Amazing city and sea views from Boztepe. Perfect for couples — request a high floor facing the Black Sea.'
  }),
  hotelCard(2, {
    name: 'DoubleTree by Hilton Trabzon',
    category: 'Luxury',
    address: 'Akçaabat · waterfront',
    price: '€150–280/night',
    rating: '8.8',
    googleRating: '4.4',
    room: 'Deluxe Sea View · Black Sea panorama',
    cancellation: 'Free 48h',
    tube: '20 min drive to Meydan',
    airport: 'TZX 20 min',
    nearbyAttractions: 'Akçaabat köfte 5 min · Sera Lake 15 min · beach access',
    walkingScore: '65 / 100 — resort setting',
    breakfast: 'Included in premium rates',
    idealFor: ['Family', 'Couple', 'Sea views'],
    tip: 'Beautiful Black Sea views and beach access. Great for families who prefer a quieter base outside the city centre.'
  }),
  hotelCard(4, {
    name: 'Movenpick Hotel Trabzon',
    category: 'Luxury',
    address: 'Airport road · Ortahisar',
    price: '€140–260/night',
    rating: '8.7',
    googleRating: '4.2',
    room: 'Executive King · modern design',
    cancellation: 'Free 24h',
    tube: '5 min to TZX airport',
    airport: 'TZX 5 min · 2 km',
    nearbyAttractions: 'Airport 5 min · Meydan 15 min · Forum Trabzon 10 min',
    walkingScore: '55 / 100 — airport area',
    breakfast: 'Buffet included',
    idealFor: ['Business', 'Early flights', 'Modern luxury'],
    tip: 'Near the airport — ideal for late arrivals or early departures. Modern luxury with excellent breakfast.'
  }),
  hotelCard(6, {
    name: 'Zorlu Grand Hotel',
    category: 'Mid-Range',
    address: 'Meydan · city centre',
    price: '€80–150/night',
    rating: '8.5',
    googleRating: '4.3',
    room: 'Standard Double · best location',
    cancellation: 'Free 24h',
    tube: 'Meydan doorstep · all dolmuş routes',
    airport: 'TZX 20 min',
    nearbyAttractions: 'Meydan 1 min · Museum 5 min · restaurants walking distance',
    walkingScore: '98 / 100 — city centre',
    breakfast: 'Included',
    idealFor: ['First-time visitors', 'Couple', 'Walkers'],
    tip: 'The best city-centre location. Walking distance to restaurants, Meydan and the museum.'
  }),
  hotelCard(8, {
    name: 'Novotel Trabzon',
    category: 'Mid-Range',
    address: 'Yomra · coastal road',
    price: '€90–160/night',
    rating: '8.4',
    googleRating: '4.4',
    room: 'Superior Room · pool & beach',
    cancellation: 'Free until 18:00',
    tube: '15 min drive to Meydan',
    airport: 'TZX 10 min',
    nearbyAttractions: 'Beach access · pool · Forum Trabzon 5 min',
    walkingScore: '60 / 100 — coastal resort',
    breakfast: 'Buffet €15pp',
    idealFor: ['Family', 'Pool', 'Beach'],
    tip: 'Great for families — beach access, pool and spacious rooms. Good value for a seaside stay.'
  }),
  hotelCard(10, {
    name: 'Mercure Trabzon Otel',
    category: 'Mid-Range',
    address: 'Airport area · Ortahisar',
    price: '€70–130/night',
    rating: '8.2',
    googleRating: '4.4',
    room: 'Standard Queen · modern rooms',
    cancellation: 'Free 24h',
    tube: '10 min to TZX · 15 min to Meydan',
    airport: 'TZX 8 min',
    nearbyAttractions: 'Airport 8 min · Forum Trabzon 12 min',
    walkingScore: '50 / 100 — airport zone',
    breakfast: 'Extra €12pp',
    idealFor: ['Business', 'Transit', 'Value'],
    tip: 'Modern rooms close to the airport. Reliable Accor quality at a sensible price.'
  }),
  hotelCard(12, {
    name: 'PEERLESS VİLLAS HOTEL',
    category: 'Best Value',
    address: 'Coastal road · Yomra',
    price: '€50–90/night',
    rating: '8.6',
    googleRating: '4.4',
    room: 'Sea View Villa · excellent views',
    cancellation: 'Free 48h',
    tube: '15 min drive to Meydan',
    airport: 'TZX 12 min',
    nearbyAttractions: 'Sea views · Sera Lake 10 min · beach nearby',
    walkingScore: '55 / 100 — coastal',
    breakfast: 'Included',
    idealFor: ['Couple', 'Value', 'Sea views'],
    tip: 'Excellent sea views at a fraction of luxury prices. Villa-style rooms feel more spacious than standard hotels.'
  }),
  hotelCard(14, {
    name: 'MELL BOUTIQUE HOTEL',
    category: 'Best Value',
    address: 'Ortahisar · near Meydan',
    price: '€55–95/night',
    rating: '8.8',
    googleRating: '4.5',
    room: 'Boutique Double · intimate atmosphere',
    cancellation: 'Free 24h',
    tube: 'Meydan 5 min walk',
    airport: 'TZX 18 min',
    nearbyAttractions: 'Meydan 5 min · Museum 8 min · cafés nearby',
    walkingScore: '92 / 100 — near centre',
    breakfast: 'Included · local specialties',
    idealFor: ['Couple', 'Boutique', 'Romantic'],
    tip: 'Boutique atmosphere ideal for couples. Personal service and stylish rooms without the luxury price tag.'
  })
];

const dining = [
  diningCard(0, {
    name: 'Beton Helva Kahvaltı',
    category: 'Breakfast · Traditional',
    address: 'Ortahisar · Trabzon',
    price: '₺200–400 per person',
    famous: 'Traditional Black Sea Breakfast',
    reservation: 'Walk-in · busy weekends',
    wait: '10–20 min Sat–Sun',
    dressCode: 'Casual',
    tip: 'Start Day 1 here — the full Karadeniz kahvaltı spread with local cheeses, honey, kaymak and endless çay.',
    dishes: [
      { name: 'Black Sea Breakfast Spread', img: img(1), desc: 'Cheese, olives, honey, butter and fresh bread.' },
      { name: 'Mıhlama', img: img(2), desc: 'Cornmeal and cheese fondue — regional specialty.' },
      { name: 'Kuymak', img: img(3), desc: 'Stretchy cheese pull — Instagram favourite.' },
      { name: 'Fresh Simit & Pide', img: img(4), desc: 'Warm from the oven with local butter.' },
      { name: 'Turkish Tea', img: img(5), desc: 'Refills without asking — that is the Black Sea way.' }
    ]
  }),
  cafeCard(1, 'Neşve Coffee', 'Specialty Coffee · Desserts', 'Meydan · Ortahisar'),
  diningCard(2, {
    name: 'Cemilusta Akçaabat Köfte',
    category: 'Lunch · Meatballs',
    address: 'Akçaabat · Trabzon',
    price: '₺150–300 per person',
    famous: 'Akçaabat Köfte',
    reservation: 'Walk-in',
    wait: '15–30 min at lunch',
    tip: 'The definitive Akçaabat köfte experience — grilled over charcoal with pilav and grilled peppers.',
    dishes: [
      { name: 'Akçaabat Köfte', img: img(3), desc: 'Protected-recipe lamb-beef meatballs.' },
      { name: 'Grilled Peppers', img: img(4), desc: 'Charred and smoky — perfect alongside köfte.' },
      { name: 'Pilav', img: img(5), desc: 'Buttered rice cooked in meat broth.' },
      { name: 'Ayran', img: img(6), desc: 'Salty yoghurt drink — essential pairing.' },
      { name: 'Künefe', img: img(7), desc: 'If available — sweet cheese dessert.' }
    ]
  }),
  diningCard(4, {
    name: 'Cephanelik Restaurant',
    category: 'Dinner · Views',
    address: 'Boztepe · hilltop dining',
    price: '₺400–800 per person',
    famous: 'Black Sea meze & grilled fish',
    reservation: 'Recommended for dinner',
    wait: '20–40 min without booking',
    dressCode: 'Smart casual',
    tip: 'Beautiful night view over Trabzon. Book a terrace table for sunset dinner on Day 1.',
    dishes: [
      { name: 'Grilled Black Sea Fish', img: img(5), desc: 'Daily catch — hamsi or palamut depending on season.' },
      { name: 'Karadeniz Meze Platter', img: img(6), desc: 'Local spreads, pickles and salads.' },
      { name: 'Muhlama', img: img(7), desc: 'Cheese fondue — share as a starter.' },
      { name: 'Kofte', img: img(8), desc: 'Backup if fish is not your preference.' },
      { name: 'Baklava', img: img(9), desc: 'Pistachio layers with Turkish coffee.' }
    ]
  }),
  diningCard(6, {
    name: 'Hamsiköy',
    category: 'Lunch · Village',
    address: 'Maçka · near Sümela',
    price: '₺150–250 per person',
    famous: 'Hamsiköy Rice Pudding (sütlaç)',
    reservation: 'Walk-in',
    wait: '10–20 min',
    tip: 'Stop here after Sümela for the famous rice pudding — baked in clay pots with a caramelised top.',
    dishes: [
      { name: 'Hamsiköy Sütlaç', img: img(7), desc: 'The reason everyone stops here — order two.' },
      { name: 'Village Lunch', img: img(8), desc: 'Simple grilled trout or köfte with salad.' },
      { name: 'Local Honey', img: img(9), desc: 'Mountain honey sold by the jar — take some home.' },
      { name: 'Fresh Bread', img: img(10), desc: 'Baked in village ovens daily.' },
      { name: 'Turkish Tea', img: img(11), desc: 'Under the trees after pudding.' }
    ]
  }),
  diningCard(8, {
    name: 'İnan Kardeşler Restaurant',
    category: 'Lunch · Trout',
    address: 'Uzungöl · lakeside',
    price: '₺200–400 per person',
    famous: 'Fresh Trout from the Lake',
    reservation: 'Walk-in',
    wait: '15–25 min',
    tip: 'Fresh trout grilled at the lakeside — the classic Uzungöl lunch. Sit on the terrace facing the water.',
    dishes: [
      { name: 'Grilled Rainbow Trout', img: img(9), desc: 'Caught locally — simply grilled with lemon.' },
      { name: 'Corn Bread', img: img(10), desc: 'Dense Karadeniz cornbread — perfect with fish.' },
      { name: 'Salad', img: img(11), desc: 'Mountain greens with pomegranate dressing.' },
      { name: 'Ayran', img: img(12), desc: 'Cold and salty — balances the rich trout.' },
      { name: 'Local Dessert', img: img(13), desc: 'Ask for the daily special.' }
    ]
  }),
  diningCard(10, {
    name: 'Balık Restaurant',
    category: 'Lunch · Seafood',
    address: 'Sera Lake · Yomra',
    price: '₺250–500 per person',
    famous: 'Fresh Lake & Sea Fish',
    reservation: 'Walk-in · busy weekends',
    wait: '20–30 min',
    tip: 'Lakeside seafood on Day 5 — choose your fish from the display and they grill it fresh.',
    dishes: [
      { name: 'Grilled Sea Bass', img: img(11), desc: 'Whole fish with salad and bread.' },
      { name: 'Hamsi Tava', img: img(12), desc: 'Fried anchovies — Black Sea classic in season.' },
      { name: 'Meze Selection', img: img(13), desc: 'Pick three or four cold starters.' },
      { name: 'Raki', img: img(14), desc: 'Optional — the traditional fish accompaniment.' },
      { name: 'Fresh Fruit', img: img(15), desc: 'Seasonal plate to finish.' }
    ]
  }),
  diningCard(12, {
    name: 'Nihat Usta',
    category: 'Lunch · Local',
    address: 'Ortahisar · Trabzon',
    price: '₺150–300 per person',
    famous: 'Pide & Lahmacun',
    reservation: 'Walk-in',
    wait: '10–15 min',
    tip: 'Beloved local spot for Day 6 lunch — pide baked in a wood oven and lahmacun with fresh herbs.',
    dishes: [
      { name: 'Karadeniz Pide', img: img(13), desc: 'Boat-shaped flatbread with cheese and egg.' },
      { name: 'Lahmacun', img: img(14), desc: 'Thin crispy base with spiced minced meat.' },
      { name: 'Ayran', img: img(15), desc: 'Essential alongside pide.' },
      { name: 'Künefe', img: img(16), desc: 'If you still have room — worth it.' },
      { name: 'Turkish Coffee', img: img(17), desc: 'Finish strong.' }
    ]
  })
];

const dayBudget = {
  budget: { total: '€60–90 per person', includes: ['Dolmuş & walking', 'Local pide & köfte', 'Free parks & viewpoints', 'Museum entry'] },
  mid: { total: '€120–180 per person', includes: ['Car rental share', 'Sit-down meals', 'Sümela ticket', 'Boat ride at Sera Lake'] },
  luxury: { total: '€250–450 per person', includes: ['Private driver', 'Seafood dinners', 'Luxury hotel', 'Zipline & hot springs at Ayder'] }
};

const itineraries = [
  {
    day: 1,
    title: 'Discover Trabzon City',
    color: '#0f766e',
    routePreview: '8 stops · start 08:30 · end 19:30 · ≈ 5 km',
    mapUrl: 'https://www.google.com/maps/dir/Beton+Helva+Kahvalti+Trabzon/Trabzon+Museum/Meydan+Square+Trabzon/Zagnos+Valley+Park/Boztepe/Cephanelik+Restaurant+Trabzon',
    budget: dayBudget,
    photos: [img(0), img(1), img(2), img(3)],
    stops: [
      { time: '08:30', timeOfDay: 'morning', name: 'Beton Helva Kahvaltı', desc: 'Traditional Black Sea Breakfast · kahvaltı spread', transit: 'Walk or taxi from hotel', icon: 'walk', mapUrl: mapQuery('Beton Helva Kahvaltı') },
      { time: '10:00', timeOfDay: 'morning', name: 'Trabzon Museum', desc: 'Ottoman & Byzantine history · Kostaki Mansion', transit: 'Walk 5 min', icon: 'walk', mapUrl: mapQuery('Trabzon Museum') },
      { time: '11:30', timeOfDay: 'morning', name: 'Meydan Square', desc: 'Local cafés · shopping · street life', transit: 'Walk 5 min', icon: 'walk', mapUrl: mapQuery('Meydan Square Trabzon') },
      { time: '12:30', timeOfDay: 'afternoon', name: 'Neşve Coffee', desc: 'Coffee break · specialty roasts', transit: 'Walk 3 min', icon: 'walk', mapUrl: mapQuery('Neşve Coffee Trabzon') },
      { time: '13:30', timeOfDay: 'afternoon', name: 'Cemilusta Akçaabat Köfte', desc: 'Famous Akçaabat meatballs · charcoal grilled', transit: 'Taxi 20 min', icon: 'cab', mapUrl: mapQuery('Cemilusta Akçaabat Köfte') },
      { time: '15:00', timeOfDay: 'afternoon', name: 'Zagnos Valley Park', desc: 'Historic bridges · walking trails', transit: 'Taxi 15 min', icon: 'cab', mapUrl: mapQuery('Zagnos Valley Park') },
      { time: '17:00', timeOfDay: 'evening', name: 'Boztepe', desc: 'Tea with panoramic city views · sunset', transit: 'Taxi 10 min', icon: 'cab', mapUrl: mapQuery('Boztepe Trabzon') },
      { time: '19:30', timeOfDay: 'night', name: 'Cephanelik Restaurant', desc: 'Dinner with beautiful night view over Trabzon', transit: 'Walk 5 min on Boztepe', icon: 'walk', mapUrl: mapQuery('Cephanelik Restaurant Trabzon') }
    ]
  },
  {
    day: 2,
    title: 'Sümela Monastery',
    color: '#059669',
    routePreview: '4 stops · start 08:00 · end 18:30 · 1 hr drive each way',
    mapUrl: 'https://www.google.com/maps/dir/Trabzon/Sumela+Monastery/Hamsikoy/Altindere+National+Park/Trabzon',
    budget: dayBudget,
    photos: [img(4), img(5), img(6), img(7)],
    stops: [
      { time: '08:00', timeOfDay: 'morning', name: 'Breakfast at Hotel', desc: 'Early start · fill up before the drive', transit: 'Hotel restaurant', icon: 'walk', mapUrl: mapQuery('Zorlu Grand Hotel Trabzon') },
      { time: '09:30', timeOfDay: 'morning', name: 'Sümela Monastery', desc: '3 hours exploring the cliffside monastery', transit: 'Drive 1 hour from Trabzon', icon: 'cab', mapUrl: mapQuery('Sümela Monastery') },
      { time: '13:00', timeOfDay: 'afternoon', name: 'Hamsiköy', desc: 'Lunch · famous rice pudding (sütlaç)', transit: 'Drive 20 min', icon: 'cab', mapUrl: mapQuery('Hamsiköy') },
      { time: '15:00', timeOfDay: 'afternoon', name: 'Altındere National Park', desc: 'Easy walking trails · river views', transit: 'Drive 5 min', icon: 'cab', mapUrl: mapQuery('Altındere National Park') },
      { time: '18:30', timeOfDay: 'evening', name: 'Return to Trabzon', desc: 'Drive back · rest before tomorrow', transit: 'Drive 1 hour', icon: 'cab', mapUrl: mapQuery('Trabzon city centre') }
    ]
  },
  {
    day: 3,
    title: 'Uzungöl Lake',
    color: '#0891b2',
    routePreview: '4 stops · start 08:00 · end 18:00 · 1.5 hr drive',
    mapUrl: 'https://www.google.com/maps/dir/Trabzon/Uzungol+Lake/Inan+Kardesler+Restaurant+Uzungol/Trabzon',
    budget: dayBudget,
    photos: [img(8), img(9), img(10), img(11)],
    stops: [
      { time: '08:00', timeOfDay: 'morning', name: 'Drive to Uzungöl', desc: '1.5 hours through mountain scenery', transit: 'Car or organised tour', icon: 'cab', mapUrl: mapQuery('Uzungöl Lake') },
      { time: '10:00', timeOfDay: 'morning', name: 'Uzungöl Lake', desc: 'Walk around the lake · photography', transit: 'Arrive and park', icon: 'walk', mapUrl: mapQuery('Uzungöl Lake') },
      { time: '12:30', timeOfDay: 'afternoon', name: 'İnan Kardeşler Restaurant', desc: 'Fresh trout · lakeside terrace', transit: 'Walk 5 min', icon: 'walk', mapUrl: mapQuery('İnan Kardeşler Restaurant Uzungöl') },
      { time: '14:00', timeOfDay: 'afternoon', name: 'Tea Plantation & Viewpoints', desc: 'Mountain viewpoints · çay fields', transit: 'Walk uphill 30 min', icon: 'walk', mapUrl: mapQuery('Uzungöl tea plantation') },
      { time: '18:00', timeOfDay: 'evening', name: 'Return to Trabzon', desc: 'Drive back · evening at leisure', transit: 'Drive 1.5 hours', icon: 'cab', mapUrl: mapQuery('Trabzon city centre') }
    ]
  },
  {
    day: 4,
    title: 'Ayder Plateau',
    color: '#115e59',
    routePreview: '6 stops · full day · 2 hr drive each way',
    mapUrl: 'https://www.google.com/maps/dir/Trabzon/Ayder+Plateau/Gelin+Tulu+Waterfall/Trabzon',
    budget: dayBudget,
    photos: [img(12), img(13), img(14), img(15)],
    stops: [
      { time: '07:30', timeOfDay: 'morning', name: 'Drive to Ayder Plateau', desc: '2 hours · winding mountain road · start early', transit: 'Car essential', icon: 'cab', mapUrl: mapQuery('Ayder Plateau') },
      { time: '10:00', timeOfDay: 'morning', name: 'Gelin Tülü Waterfall', desc: 'Bridal Veil waterfall · photo stop', transit: 'En route to Ayder', icon: 'walk', mapUrl: mapQuery('Gelin Tülü Waterfall') },
      { time: '11:30', timeOfDay: 'morning', name: 'Ayder Plateau', desc: 'Highland village · wooden architecture · fresh air', transit: 'Arrive plateau', icon: 'walk', mapUrl: mapQuery('Ayder Plateau') },
      { time: '13:00', timeOfDay: 'afternoon', name: 'Mountain Restaurant Lunch', desc: 'Local trout or muhlama · plateau dining', transit: 'Walk in village', icon: 'walk', mapUrl: mapQuery('Ayder Plateau restaurant') },
      { time: '15:00', timeOfDay: 'afternoon', name: 'Zipline', desc: 'Adrenaline over the valley · optional', transit: 'On plateau', icon: 'walk', mapUrl: mapQuery('Ayder zipline') },
      { time: '16:30', timeOfDay: 'afternoon', name: 'Hot Springs', desc: 'Thermal soak · relax before the drive back', transit: 'Walk 5 min', icon: 'walk', mapUrl: mapQuery('Ayder hot springs') },
      { time: '19:00', timeOfDay: 'evening', name: 'Return to Trabzon', desc: 'Long drive · early night recommended', transit: 'Drive 2 hours', icon: 'cab', mapUrl: mapQuery('Trabzon city centre') }
    ]
  },
  {
    day: 5,
    title: 'Sera Lake & Akçaabat',
    color: '#0d9488',
    routePreview: '5 stops · start 09:00 · end sunset · ≈ 30 km',
    mapUrl: 'https://www.google.com/maps/dir/Sera+Lake+Trabzon/Balik+Restaurant+Sera+Lake/Akcaabat/Trabzon',
    budget: dayBudget,
    photos: [img(16), img(17), img(18), img(0)],
    stops: [
      { time: '09:00', timeOfDay: 'morning', name: 'Sera Lake', desc: 'Boat ride · lakeside cafés · morning calm', transit: 'Drive 20 min', icon: 'cab', mapUrl: mapQuery('Sera Lake Trabzon') },
      { time: '12:00', timeOfDay: 'afternoon', name: 'Balık Restaurant', desc: 'Fresh fish lunch · lakeside', transit: 'Walk 2 min', icon: 'walk', mapUrl: mapQuery('Balık Restaurant Sera Lake') },
      { time: '14:00', timeOfDay: 'afternoon', name: 'Akçaabat', desc: 'Famous meatballs · local markets', transit: 'Drive 15 min', icon: 'cab', mapUrl: mapQuery('Akçaabat') },
      { time: '16:00', timeOfDay: 'afternoon', name: 'Akçaabat Waterfront', desc: 'Promenade walk · shopping · tea', transit: 'Walk', icon: 'walk', mapUrl: mapQuery('Akçaabat waterfront') },
      { time: '18:30', timeOfDay: 'evening', name: 'Sunset', desc: 'Black Sea horizon · end Day 5 slowly', transit: 'Waterfront', icon: 'walk', mapUrl: mapQuery('Akçaabat coast') }
    ]
  },
  {
    day: 6,
    title: 'Nature & Relaxation',
    color: '#047857',
    routePreview: '6 stops · start 10:00 · end 20:00 · city day',
    mapUrl: 'https://www.google.com/maps/dir/Trabzon+Botanical+Garden/Ataturk+Pavilion+Trabzon/Nihat+Usta+Trabzon/Trabzon+Aquarium/Forum+Trabzon',
    budget: dayBudget,
    photos: [img(1), img(2), img(3), img(4)],
    stops: [
      { time: '10:00', timeOfDay: 'morning', name: 'Trabzon Botanical Garden', desc: 'Native Black Sea flora · peaceful morning', transit: 'Taxi 10 min', icon: 'cab', mapUrl: mapQuery('Trabzon Botanical Garden') },
      { time: '11:30', timeOfDay: 'morning', name: 'Atatürk Pavilion', desc: 'Historic hilltop mansion · museum', transit: 'Taxi 10 min', icon: 'cab', mapUrl: mapQuery('Atatürk Pavilion Trabzon') },
      { time: '13:00', timeOfDay: 'afternoon', name: 'Nihat Usta', desc: 'Pide & lahmacun · local favourite', transit: 'Taxi 15 min', icon: 'cab', mapUrl: mapQuery('Nihat Usta Trabzon') },
      { time: '15:00', timeOfDay: 'afternoon', name: 'Trabzon Aquarium', desc: 'Tunnel aquarium · families welcome', transit: 'Taxi 15 min', icon: 'cab', mapUrl: mapQuery('Trabzon Aquarium') },
      { time: '17:00', timeOfDay: 'evening', name: 'Forum Trabzon', desc: 'Shopping · cafés · modern mall', transit: 'Walk 1 min', icon: 'walk', mapUrl: mapQuery('Forum Trabzon') },
      { time: '19:00', timeOfDay: 'night', name: 'Optional · Meydan Evening', desc: 'Coffee · relax · last shopping', transit: 'Taxi 15 min', icon: 'cab', mapUrl: mapQuery('Meydan Square Trabzon') }
    ]
  },
  {
    day: 7,
    title: 'Free Day',
    color: '#134e4a',
    routePreview: 'Choose your adventure · 3 options',
    mapUrl: 'https://www.google.com/maps/dir/Trabzon/Hidirnebi+Plateau/Cal+Cave/Forum+Trabzon',
    budget: dayBudget,
    photos: [img(5), img(6), img(7), img(8)],
    stops: [
      { time: '09:00', timeOfDay: 'morning', name: 'Option A · Hıdırnebi Plateau', desc: 'Highland meadows · less touristy · picnic', transit: 'Drive 1.5 hours', icon: 'cab', mapUrl: mapQuery('Hıdırnebi Plateau') },
      { time: '09:00', timeOfDay: 'morning', name: 'Option B · Çal Cave', desc: 'Underground stalactites · cool air · 1 hour visit', transit: 'Drive 1 hour', icon: 'cab', mapUrl: mapQuery('Çal Cave Trabzon') },
      { time: '10:00', timeOfDay: 'morning', name: 'Option C · Shopping & Coffee', desc: 'Forum Trabzon · Meydan · relax at a café', transit: 'Taxi or walk', icon: 'walk', mapUrl: mapQuery('Forum Trabzon') },
      { time: '14:00', timeOfDay: 'afternoon', name: 'Neşve Coffee', desc: 'Slow afternoon · reflect on the week', transit: 'Walk', icon: 'walk', mapUrl: mapQuery('Neşve Coffee Trabzon') },
      { time: '19:00', timeOfDay: 'night', name: 'Farewell Dinner', desc: 'Return to Cephanelik or try a new meyhane', transit: 'Taxi', icon: 'cab', mapUrl: mapQuery('Cephanelik Restaurant Trabzon') }
    ]
  }
];

const PLAN = {
  meta: {
    city: 'Trabzon',
    country: 'Turkey',
    tagline: 'Cliffside monasteries, alpine lakes and Black Sea culture — seven perfect days.',
    badge: 'Discover · 2026 Edition',
    edition: '2026',
    stats: {
      chapters: 44,
      qrCodes: '140+',
      attractions: attractions.length,
      hotels: hotels.length,
      dining: dining.length,
      days: 7
    },
    theme: {
      accent: '#0f766e',
      accentSoft: '#ccfbf1',
      accentDeep: '#115e59',
      heroImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Sumela_from_across_valley.jpg/960px-Sumela_from_across_valley.jpg',
      transitLabel: 'Dolmuş',
      tube: '#0f766e',
      parks: '#059669',
      river: '#0891b2',
      gold: '#b8860b',
      navy: '#1a2744'
    }
  },
  welcome: {
    editorLetter: 'Trabzon is the Black Sea\'s best-kept secret — a port city where Ottoman mansions meet misty mountains, and every day trip reveals something extraordinary. Sümela Monastery clinging to a cliff. Uzungöl\'s mirror-still lake. Ayder Plateau\'s thermal springs. This seven-day companion follows the premium itinerary designed for discerning travellers who want every hour mapped and every QR code ready.\n\nEvery attraction, hotel and restaurant carries a scannable map link. Every day plan has a timeline, route QR and driving times. Rent a car for the highlands, walk the city centre, and let Trabzon unfold.',
    howToUse: 'Point your phone camera at any QR code and the location opens in Google Maps in one tap. Every website and booking link is also clickable in the PDF. Colour-coded day chapters make navigation effortless.\n\n— The Editors, Trabzon Bureau'
  },
  essentials: {
    currency: { label: '₺ Turkish Lira', note: 'Cards accepted in hotels and restaurants. Carry cash for dolmuş and village stops.' },
    power: { label: 'Type C/F · 230V', note: 'European two-pin plug. Bring a universal adapter.' },
    sim: { label: 'eSIM or Turkcell', note: 'Turkcell and Vodafone at TZX airport. eSIM activates on landing Wi-Fi.' },
    language: { label: 'Turkish', note: 'English in hotels. Learn merhaba and teşekkürler — locals appreciate the effort.' },
    tipping: { label: '10% or round up', note: 'Not always expected but appreciated in restaurants. Round up taxi fares.' },
    emergency: { label: '112 · 155 · 110', note: 'All emergencies · Police · Fire.' },
    tapWater: { label: 'Generally safe', note: 'Bottled water preferred by visitors. Safe for brushing teeth.' },
    timezone: { label: 'TRT · UTC+3', note: 'No daylight saving — same time year-round.' }
  },
  arrival: [
    { step: '01', title: 'Border', desc: 'Trabzon Airport (TZX) handles international and domestic flights. Have hotel address ready. e-Visa for most nationalities — apply online before travel.' },
    { step: '02', title: 'SIM / eSIM', desc: 'Activate your eSIM on airport Wi-Fi. Or buy Turkcell tourist SIM at arrivals (₺500 for 20GB).' },
    { step: '03', title: 'Cash', desc: 'Withdraw ₺1,000–2,000 from a Ziraat or İş Bankası ATM. Village restaurants and dolmuş often prefer cash.' },
    { step: '04', title: 'Rent a car', desc: 'Essential for Days 2–5. Pick up at TZX — Avis, Europcar, local agencies. Automatic recommended for mountain roads.' },
    { step: '05', title: 'Taxi to city', desc: 'If not renting immediately: taxi to Meydan ₺300–400, 20 min. Havalimani shuttle ₺50.' },
    { step: '06', title: 'Hotel', desc: 'Check-in from 14:00. Hotels hold luggage from 10:00 — drop bags and explore Meydan.' },
    { step: '07', title: 'First meal', desc: 'Head to Beton Helva Kahvaltı for a full Black Sea breakfast. Then walk Meydan with a çay.' }
  ],
  packing: {
    spring: { months: 'MAR–MAY', temp: '8–18 °C · rain likely', items: ['Waterproof jacket', 'Layerable knit', 'Walking boots', 'Compact umbrella', 'Sunscreen', 'Binoculars for Sümela'] },
    summer: { months: 'JUN–AUG', temp: '18–28 °C · humid coast', items: ['Light layers', 'Hiking shoes', 'Sunscreen SPF 30', 'Insect repellent', 'Refillable bottle', 'Warm layer for highlands'] },
    autumn: { months: 'SEP–NOV', temp: '10–20 °C · golden light', items: ['Trench coat', 'Waterproof boots', 'Umbrella', 'Warm jumper', 'Gloves for Ayder', 'Camera for Uzungöl'] },
    winter: { months: 'DEC–FEB', temp: '5–12 °C · snow in mountains', items: ['Heavy coat', 'Thermal base layer', 'Waterproof boots', 'Beanie + gloves', 'Non-slip shoes for Sümela', 'Hand warmers'] }
  },
  weatherTable: {
    rows: [
      { month: 'Jan', avgTemp: '5 / 11 °C', rain: '55%', sunset: '17:15', crowds: 'Low', recommend: 'Museums · indoor dining' },
      { month: 'Feb', avgTemp: '5 / 11 °C', rain: '50%', sunset: '17:45', crowds: 'Low', recommend: 'City walks · tea houses' },
      { month: 'Mar', avgTemp: '7 / 14 °C', rain: '50%', sunset: '18:30', crowds: 'Rising', recommend: 'Sümela reopens' },
      { month: 'Apr', avgTemp: '10 / 17 °C', rain: '55%', sunset: '19:30', crowds: 'Medium', recommend: 'Botanical Garden' },
      { month: 'May', avgTemp: '14 / 21 °C', rain: '50%', sunset: '20:15', crowds: 'Medium', recommend: 'Perfect for Uzungöl' },
      { month: 'Jun', avgTemp: '18 / 25 °C', rain: '45%', sunset: '20:45', crowds: 'High', recommend: 'Ayder Plateau · book hotels' },
      { month: 'Jul', avgTemp: '21 / 28 °C', rain: '40%', sunset: '20:30', crowds: 'Peak', recommend: 'Book Sümela early' },
      { month: 'Aug', avgTemp: '21 / 28 °C', rain: '45%', sunset: '20:00', crowds: 'Peak', recommend: 'Highland escape' },
      { month: 'Sep', avgTemp: '18 / 24 °C', rain: '45%', sunset: '19:15', crowds: 'Medium', recommend: 'Best month overall' },
      { month: 'Oct', avgTemp: '14 / 20 °C', rain: '55%', sunset: '18:15', crowds: 'Medium', recommend: 'Autumn colours at Uzungöl' },
      { month: 'Nov', avgTemp: '10 / 16 °C', rain: '55%', sunset: '17:00', crowds: 'Low', recommend: 'Cosy meyhane evenings' },
      { month: 'Dec', avgTemp: '7 / 13 °C', rain: '60%', sunset: '16:45', crowds: 'Low', recommend: 'City museums · shopping' }
    ],
    sweetSpot: 'May and September deliver the best combination of clear mountain views, manageable crowds at Sümela, and comfortable hiking weather at Uzungöl and Ayder. July–August is magnificent but book hotels and car rental well ahead.'
  },
  transport: {
    modes: [
      { icon: 'walk', name: 'Walk', price: 'Free', desc: 'Trabzon city centre — Meydan, museum, Zagnos Valley — is compact and walkable.' },
      { icon: 'bus', name: 'Dolmuş', price: '₺15–30', desc: 'Shared minibuses cover the city and coast. Ask the driver — they stop anywhere on route.' },
      { icon: 'cab', name: 'Taxi', price: '₺100–300', desc: 'Yellow taxis everywhere. Use BiTaksi app. Fixed rates to Boztepe and Akçaabat.' },
      { icon: 'uber', name: 'BiTaksi / Uber', price: '₺80–250', desc: 'App-based rides. Reliable for airport transfers and evening Boztepe runs.' },
      { icon: 'cab', name: 'Car Rental', price: '€30–60/day', desc: 'Essential for Sümela, Uzungöl and Ayder. Automatic recommended. Book at TZX.' },
      { icon: 'bus', name: 'Organised Tours', price: '€40–80', desc: 'Daily tours to Sümela and Uzungöl from Meydan agencies if you prefer not to drive.' }
    ],
    oysterTips: [
      { title: 'Rent a car for highlands', desc: 'Sümela, Uzungöl and Ayder are 1–2 hours from Trabzon. A rental car or organised day tour is the most convenient way to visit.' },
      { title: 'Dolmuş in the city', desc: 'Minibuses from Meydan reach Akçaabat, Yomra and Boztepe. Pay in cash when you get off.' },
      { title: 'Mountain road caution', desc: 'Roads to Ayder and Uzungöl are winding and narrow. Start early, fill the tank, and avoid night driving.' },
      { title: 'Parking at Sümela', desc: 'Large car park at the valley entrance. Shuttle bus to the monastery gate — included in ticket.' }
    ],
    exit6Tip: 'When you exit TZX airport, Trabzon Bay appears immediately to the north — the Black Sea stretching to the horizon. Stop, breathe the humid air, and remember: the mountains behind you hold Sümela.'
  },
  maps: {
    overview: {
      caption: 'A schematic map — for exact directions, scan any QR code in this guide.',
      markers: [
        { name: 'Sümela Monastery', type: 'attraction', lat: 40.6893, lng: 39.6583 },
        { name: 'Uzungöl Lake', type: 'attraction', lat: 40.6197, lng: 40.2886 },
        { name: 'Ayder Plateau', type: 'attraction', lat: 40.9517, lng: 41.0986 },
        { name: 'Trabzon Museum', type: 'attraction', lat: 41.0054, lng: 39.7308 },
        { name: 'Boztepe', type: 'attraction', lat: 41.0128, lng: 39.7089 },
        { name: 'Sera Lake', type: 'attraction', lat: 40.9633, lng: 39.8833 },
        { name: 'Meydan Square', type: 'district', lat: 41.0028, lng: 39.7167 },
        { name: 'Radisson Blu Hotel Trabzon', type: 'hotel', lat: 41.0128, lng: 39.7089 },
        { name: 'Zorlu Grand Hotel', type: 'hotel', lat: 41.0028, lng: 39.7167 },
        { name: 'Cemilusta Akçaabat Köfte', type: 'dining', lat: 41.0214, lng: 39.5708 },
        { name: 'Cephanelik Restaurant', type: 'dining', lat: 41.0128, lng: 39.7089 }
      ]
    }
  },
  attractions,
  hotels,
  dining,
  itineraries,
  rainyDay: [
    { name: 'Trabzon Museum', address: 'Kostaki Mansion', desc: 'Ottoman & Byzantine history · indoor', img: img(0), mapUrl: mapQuery('Trabzon Museum') },
    { name: 'Trabzon Aquarium', address: 'Forum Trabzon', desc: 'Tunnel aquarium · families', img: img(1), mapUrl: mapQuery('Trabzon Aquarium') },
    { name: 'Atatürk Pavilion', address: 'Soğuksu', desc: 'Historic mansion museum', img: img(2), mapUrl: mapQuery('Atatürk Pavilion Trabzon') },
    { name: 'Forum Trabzon', address: 'Yomra', desc: 'Shopping mall · cafés · cinema', img: img(3), mapUrl: mapQuery('Forum Trabzon') },
    { name: 'Neşve Coffee', address: 'Meydan', desc: 'Specialty coffee · cosy interior', img: img(4), mapUrl: mapQuery('Neşve Coffee Trabzon') },
    { name: 'Trabzon Botanical Garden', address: 'Ortahisar', desc: 'Greenhouse sections · sheltered walks', img: img(5), mapUrl: mapQuery('Trabzon Botanical Garden') }
  ],
  sunnyDay: [
    { name: 'Sümela Monastery', address: 'Maçka', desc: 'Cliffside wonder · forest trails', img: img(6), mapUrl: mapQuery('Sümela Monastery') },
    { name: 'Uzungöl Lake', address: 'Çaykara', desc: 'Alpine lake circuit · tea plantations', img: img(7), mapUrl: mapQuery('Uzungöl Lake') },
    { name: 'Boztepe', address: 'Hilltop', desc: 'Panoramic tea with city views', img: img(8), mapUrl: mapQuery('Boztepe Trabzon') },
    { name: 'Sera Lake', address: 'Yomra', desc: 'Boat ride · morning calm', img: img(9), mapUrl: mapQuery('Sera Lake Trabzon') },
    { name: 'Zagnos Valley Park', address: 'Ortahisar', desc: 'Bridges · trails · shade', img: img(10), mapUrl: mapQuery('Zagnos Valley Park') },
    { name: 'Ayder Plateau', address: 'Çamlıhemşin', desc: 'Highland air · waterfall · hot springs', img: img(11), mapUrl: mapQuery('Ayder Plateau') }
  ],
  hiddenGems: [
    { name: 'Hamsiköy Sütlaç', desc: 'Famous rice pudding village near Sümela', img: img(2), mapUrl: mapQuery('Hamsiköy') },
    { name: 'Hıdırnebi Plateau', desc: 'Quiet highland alternative to Ayder', img: img(3), mapUrl: mapQuery('Hıdırnebi Plateau') },
    { name: 'Çal Cave', desc: 'Underground stalactites · cool escape', img: img(4), mapUrl: mapQuery('Çal Cave Trabzon') },
    { name: 'Zagnos Valley bridges', desc: 'Ottoman stone bridges · few tourists', img: img(5), mapUrl: mapQuery('Zagnos Valley Park') },
    { name: 'Akçaabat Tuesday Market', desc: 'Local honey · herbs · mountain produce', img: img(6), mapUrl: mapQuery('Akçaabat market') },
    { name: 'Atatürk Pavilion garden', desc: 'Sea-facing bench · peaceful museum', img: img(7), mapUrl: mapQuery('Atatürk Pavilion Trabzon') }
  ],
  warnings: [
    { title: 'Mountain driving', desc: 'Roads to Uzungöl and Ayder are single-lane in sections. Start early, avoid night driving, and never pass on blind corners.' },
    { title: 'Sümela queues', desc: 'Summer queues exceed 60 min without online booking. Buy tickets at muze.gov.tr and arrive by 09:30.' },
    { title: 'Airport taxi touts', desc: 'Use official taxi rank at TZX or pre-book BiTaksi. Unlicensed drivers overcharge tourists.' },
    { title: 'Weather in highlands', desc: 'Uzungöl and Ayder can be 10 °C cooler than the coast. Pack a jacket even in August.' },
    { title: 'Cash in villages', desc: 'Hamsiköy and Ayder restaurants may not accept cards. Carry ₺500 in small notes.' },
    { title: 'Monastery dress code', desc: 'Sümela requires modest dress — cover shoulders and knees. Scarves available at entrance.' },
    { title: 'Currency exchange', desc: 'Never use airport FX booths. Withdraw lira from Ziraat ATMs for the best rate.' }
  ],
  shopping: {
    districts: [
      { name: 'Meydan Square', desc: 'Local shops · souvenirs · daily life', img: img(10), mapUrl: mapQuery('Meydan Square Trabzon') },
      { name: 'Forum Trabzon', desc: 'Modern mall · international brands', img: img(11), mapUrl: mapQuery('Forum Trabzon') },
      { name: 'Akçaabat Market', desc: 'Tuesday market · honey · local produce', img: img(12), mapUrl: mapQuery('Akçaabat market') },
      { name: 'Uzungöl Souvenir Stalls', desc: 'Handcrafts · tea · mountain honey', img: img(13), mapUrl: mapQuery('Uzungöl Lake') }
    ],
    brands: ['Karadeniz honey', 'Hamsiköy sütlaç (jarred)', 'Hand-woven socks', 'Tea from Uzungöl plantations', 'Akçaabat köfte spice mix'],
    souvenirs: ['Mountain honey', 'Black Sea tea', 'Hand-knit socks', 'Sümela postcard', 'Ceramic çay set'],
    vatTips: { rate: '20% KDV', refund: 'Tax-free shopping for non-residents on purchases over ₺1,000 at participating stores. Ask for the form at checkout.' }
  },
  budget: {
    budget: { daily: '€60–90 per person / day', accommodation: '€50 MELL Boutique or PEERLESS', food: '₺150 pide & köfte', transport: '₺200 dolmuş & taxi', activities: '₺60 museum entry', extras: '₺50 çay & snacks', tip: 'Walk the city centre. One splurge: Sümela ticket. Share car rental costs for highland days.' },
    mid: { daily: '€120–180 per person / day', accommodation: '€90 Novotel or Zorlu Grand', food: '₺400 sit-down meals', transport: '€35 car rental share', activities: '₺150 Sümela + boat ride', extras: '₺100 zipline at Ayder' },
    luxury: { daily: '€250–450 per person / day', accommodation: '€180 Radisson Blu Boztepe', food: '₺800 Cephanelik seafood dinner', transport: '€60 private driver', activities: '€80 organised tours', extras: '₺200 spa & tips' }
  },
  family: {
    tip: 'Children under 6 often enter museums free. Trabzon Aquarium and Uzungöl lake walk are the best family activities. Car seats available from rental agencies — request when booking.',
    rows: [
      { attraction: 'Trabzon Aquarium', desc: 'Tunnel aquarium delights all ages', goodForKids: true, stroller: true, babyChange: true, familyTicket: true },
      { attraction: 'Uzungöl Lake', desc: 'Flat lakeside walk · easy for strollers', goodForKids: true, stroller: true, babyChange: false, familyTicket: true },
      { attraction: 'Sümela Monastery', desc: 'Steep final climb · not for toddlers', goodForKids: false, stroller: false, babyChange: false, familyTicket: true },
      { attraction: 'Sera Lake boat ride', desc: 'Calm morning boats · life jackets', goodForKids: true, stroller: true, babyChange: false, familyTicket: true },
      { attraction: 'Trabzon Botanical Garden', desc: 'Run free on lawns', goodForKids: true, stroller: true, babyChange: true, familyTicket: true },
      { attraction: 'Ayder zipline', desc: 'Age/height restrictions apply', goodForKids: true, stroller: false, babyChange: false, familyTicket: false },
      { attraction: 'Forum Trabzon', desc: 'Indoor mall · cinema · food court', goodForKids: true, stroller: true, babyChange: true, familyTicket: true }
    ]
  },
  emergency: {
    numbers: [
      { label: '112', desc: 'All emergencies · ambulance · fire · police', icon: 'emergency' },
      { label: '155', desc: 'Police direct line', icon: 'police' },
      { label: '110', desc: 'Fire brigade', icon: 'emergency' },
      { label: '+90 312 292 29 29', desc: 'Foreign Ministry · lost passport', icon: 'passport' }
    ],
    hospitals: [
      { name: 'Karadeniz Technical University Farabi Hospital', address: 'Ortahisar · Trabzon', icon: 'hospital', mapUrl: mapQuery('Farabi Hospital Trabzon') },
      { name: 'Trabzon Kanuni Training Hospital', address: 'Ortahisar · Trabzon', icon: 'hospital', mapUrl: mapQuery('Kanuni Hospital Trabzon') },
      { name: 'Private Trabzon Medical Park', address: 'Yomra · Trabzon', icon: 'hospital', mapUrl: mapQuery('Medical Park Trabzon') }
    ],
    embassies: [
      { country: 'Saudi Arabia', address: 'Ankara · contact before travel', icon: 'embassy', mapUrl: 'https://www.google.com/maps/search/?api=1&query=Saudi+Embassy+Ankara' },
      { country: 'United Arab Emirates', address: 'Ankara · consular services', icon: 'embassy', mapUrl: 'https://www.google.com/maps/search/?api=1&query=UAE+Embassy+Ankara' },
      { country: 'Kuwait', address: 'Ankara · consular services', icon: 'embassy', mapUrl: 'https://www.google.com/maps/search/?api=1&query=Kuwait+Embassy+Ankara' },
      { country: 'Qatar', address: 'Ankara · consular services', icon: 'embassy', mapUrl: 'https://www.google.com/maps/search/?api=1&query=Qatar+Embassy+Ankara' },
      { country: 'Bahrain', address: 'Ankara · consular services', icon: 'embassy', mapUrl: 'https://www.google.com/maps/search/?api=1&query=Bahrain+Embassy+Ankara' },
      { country: 'Oman', address: 'Ankara · consular services', icon: 'embassy', mapUrl: 'https://www.google.com/maps/search/?api=1&query=Oman+Embassy+Ankara' }
    ],
    lostPassport: 'Report to the nearest police station (155). Contact your embassy in Ankara — they can issue an emergency travel document within 48–72 h. Take photos of your passport before you fly.'
  },
  phrases: [
    { english: 'Hello', use: 'Merhaba — opens every conversation' },
    { english: 'Thank you', use: 'Teşekkürler — locals appreciate it' },
    { english: 'How much is this?', use: 'Market and taxi negotiation' },
    { english: 'Could I have tea, please?', use: 'Çay istiyorum, lütfen — essential' },
    { english: 'Where is the dolmuş stop?', use: 'City navigation' },
    { english: 'Is there a table for two?', use: 'Restaurant arrival' },
    { english: 'Could we have the bill, please?', use: 'Hesap, lütfen — end of meal' },
    { english: 'Slowly, please (driving)', use: 'Yavaş, lütfen — mountain roads' }
  ],
  cheatSheet: {
    title: 'One-Page Cheat Sheet',
    subtitle: 'Screenshot before your flight — every essential in one glance.',
    emergency: [
      { label: '112', value: 'All emergencies' },
      { label: '155', value: 'Police' },
      { label: '110', value: 'Fire' }
    ],
    transport: [
      { label: '€30–60/day', value: 'Car rental essential' },
      { label: '₺15–30', value: 'Dolmuş in city' },
      { label: 'BiTaksi', value: 'App for taxis' }
    ],
    money: [
      { label: 'Cash in villages', value: 'Carry ₺500' },
      { label: 'Cards in hotels', value: 'Widely accepted' },
      { label: 'Tip 10%', value: 'Round up taxis' }
    ],
    apps: [
      { name: 'BiTaksi', use: 'Taxi booking' },
      { name: 'Google Maps', use: 'Navigation · offline maps' },
      { name: 'Yandex Maps', use: 'Alternative navigation' }
    ],
    topQrCodes: [
      { name: 'Trabzon Airport (TZX)', mapUrl: 'https://www.google.com/maps/search/?api=1&query=Trabzon+Airport' },
      { name: 'Sümela Monastery', mapUrl: mapQuery('Sümela Monastery') },
      { name: 'Uzungöl Lake', mapUrl: mapQuery('Uzungöl Lake') },
      { name: 'Meydan Square', mapUrl: mapQuery('Meydan Square Trabzon') },
      { name: 'Radisson Blu Hotel Trabzon', mapUrl: mapQuery('Radisson Blu Hotel Trabzon') },
      { name: 'Zorlu Grand Hotel', mapUrl: mapQuery('Zorlu Grand Hotel Trabzon') },
      { name: 'Farabi Hospital', mapUrl: mapQuery('Farabi Hospital Trabzon') },
      { name: 'Boztepe', mapUrl: mapQuery('Boztepe Trabzon') }
    ]
  },
  etiquette: [
    { rule: 'Remove shoes indoors', desc: 'Take off shoes when entering homes, mosques and some traditional restaurants. Look for a shoe rack.' },
    { rule: 'Tea is hospitality', desc: 'Accepting çay is a social contract. Refusing repeatedly can cause offence — at least sip once.' },
    { rule: 'Dress at monasteries', desc: 'Sümela requires covered shoulders and knees. Women may want a scarf — available at the entrance.' },
    { rule: 'Photograph respectfully', desc: 'Ask before photographing locals in villages. Monasteries allow photos outside but check inside rules.' },
    { rule: 'Haggle gently', desc: 'Markets expect negotiation but keep it friendly. Start at 60% of the asking price and meet in the middle.' },
    { rule: 'Respect the highlands', desc: 'Ayder and Uzungöl are living communities, not theme parks. Keep voices down and take litter home.' },
    { rule: 'Ramadan awareness', desc: 'During Ramadan, eating in public during daylight is discouraged. Restaurants still serve tourists discreetly.' }
  ]
};

const output = `/**
 * DISCOVER Trabzon — 7-Day Black Sea Itinerary
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
