import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const OUT = path.join(root, 'data', 'edinburgh.js');

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
  const q = /\bedinburgh\b/i.test(name) ? name : `${name} Edinburgh`;
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;
}

function attractionCard(i, {
  name, address, hours, tube, ticket, bestArrival, waitSummer, waitWinter,
  photoSpot, lens, tip, bookUrl, bookText = 'Book Tickets', avgVisit,
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
    nearbyAtm: nearbyAtm || 'High Street banks · Waverley station',
    didYouKnow, localSecret,
    instagram: {
      sunset: photoSpot,
      sunrise: photoSpot,
      drone: 'Check CAA rules — Holyrood Park restricted',
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
  name, category, address, price, famous, halal = false, vegetarian = true,
  reservation, wait, michelin = '—', kidsFriendly = 'Yes', dressCode = 'Smart casual',
  tip, bookUrl, dishes
}) {
  const defaultDishes = dishes || [
    { name: famous, img: img(i + 1), desc: `Signature dish at ${name}.` },
    { name: 'Seasonal Special', img: img(i + 2), desc: 'Ask your server for today\'s recommendation.' },
    { name: 'Scottish Starter', img: img(i + 3), desc: 'Local produce, beautifully plated.' },
    { name: 'Main Course', img: img(i + 4), desc: 'Hearty Scottish cooking done properly.' },
    { name: 'Dessert', img: img(i + 5), desc: 'Finish with something sweet — cranachan if available.' }
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
    price: '£4–£12',
    famous,
    reservation: 'Walk-in',
    wait: '5–15 min at peak',
    dressCode: 'Casual',
    tip: 'Edinburgh cafés fill quickly on weekends — arrive before 09:30 for a table.',
    dishes: [
      { name: famous, img: img(i), desc: 'House specialty — order this first.' },
      { name: 'Flat White', img: img(i + 1), desc: 'Specialty coffee done right.' },
      { name: 'Pastry', img: img(i + 2), desc: 'Fresh bakes from local suppliers.' },
      { name: 'Full Scottish Breakfast', img: img(i + 3), desc: 'Haggis, tattie scones, black pudding — the works.' },
      { name: 'Avocado Toast', img: img(i + 4), desc: 'Light option before a hike.' }
    ]
  });
}

const attractions = [
  attractionCard(0, {
    name: 'Edinburgh Castle',
    address: 'Castlehill · EH1 2NG',
    hours: '09:30–18:00 · last entry 17:00',
    tube: 'Waverley 10 min walk · Lothian Bus 23/27',
    ticket: '£21.50 adult · book online',
    bestArrival: '09:30',
    waitSummer: '30–60 min',
    waitWinter: '10–20 min',
    photoSpot: 'From Princes Street Gardens — castle on the crag, full frame.',
    lens: '24–70mm',
    tip: 'Book online and arrive at opening. One o\'clock gun fires daily — plan your visit around it.',
    bookUrl: 'https://www.edinburghcastle.scot/',
    avgVisit: '2–3 hours',
    crowd: { morning: 2, afternoon: 5, evening: 3 },
    nearby: [
      { name: 'Camera Obscura', walk: '2 min' },
      { name: 'St Giles\' Cathedral', walk: '8 min' },
      { name: 'The Witchery', walk: '3 min' },
      { name: 'Victoria Street', walk: '10 min' },
      { name: 'Princes Street Gardens', walk: '5 min' }
    ],
    nearbyCafes: 'The Edinburgh Larder · Fortitude Coffee · Brew Lab',
    nearbyRestaurants: 'The Witchery by the Castle · Makars Gourmet Mash Bar',
    didYouKnow: 'Edinburgh Castle sits on an extinct volcano and has been a royal fortress since at least the 12th century.',
    localSecret: 'The National War Museum inside the castle is free with entry and quieter than the Crown Jewels room.'
  }),
  attractionCard(2, {
    name: 'Camera Obscura & World of Illusions',
    address: 'Castlehill · EH1 1ND',
    hours: '09:00–21:00',
    tube: 'Waverley 10 min walk',
    ticket: '£19.95 adult',
    bestArrival: '09:30',
    waitSummer: '15–30 min',
    waitWinter: '5–10 min',
    photoSpot: 'Rooftop terrace — Old Town rooftops and castle backdrop.',
    lens: '16–35mm',
    tip: 'Perfect for families. The rooftop views rival any paid viewpoint in the city.',
    bookUrl: 'https://camera-obscura.co.uk/',
    avgVisit: '1 hour',
    nearby: [
      { name: 'Edinburgh Castle', walk: '2 min' },
      { name: 'Royal Mile', walk: '1 min' },
      { name: 'Victoria Street', walk: '8 min' }
    ],
    didYouKnow: 'The Camera Obscura has operated on Castlehill since the 1850s — one of Edinburgh\'s oldest attractions.',
    localSecret: 'Visit on a clear morning for the sharpest rooftop panoramas before afternoon haze sets in.'
  }),
  attractionCard(4, {
    name: 'St Giles\' Cathedral',
    address: 'High St · EH1 1RE',
    hours: '10:00–18:00 · Sun worship only',
    tube: 'Waverley 8 min walk',
    ticket: 'Free · donation suggested £5',
    bestArrival: '10:00',
    waitSummer: '0–10 min',
    waitWinter: '0 min',
    photoSpot: 'From Parliament Square — Thistle Chapel visible through the west door.',
    lens: '24mm',
    tip: 'Free entry. Look up at the crown steeple — Edinburgh\'s most recognisable silhouette after the castle.',
    avgVisit: '45 min',
    nearby: [
      { name: 'Real Mary King\'s Close', walk: '5 min' },
      { name: 'Edinburgh Castle', walk: '8 min' },
      { name: 'Victoria Street', walk: '5 min' }
    ],
    didYouKnow: 'St Giles\' is the High Kirk of Edinburgh and has stood on this site for over 900 years.',
    localSecret: 'The Thistle Chapel requires a small separate ticket but is worth every penny for its intricate carvings.'
  }),
  attractionCard(6, {
    name: 'The Real Mary King\'s Close',
    address: '2 Warriston\'s Close · EH1 1PG',
    hours: '10:00–17:00 · tours every 20 min',
    tube: 'Waverley 8 min walk',
    ticket: '£22.50 adult · pre-book',
    bestArrival: '10:00 or 16:00',
    waitSummer: '20–40 min without booking',
    waitWinter: 'Walk-in often OK',
    photoSpot: 'Entrance on Royal Mile — atmospheric close signage.',
    lens: 'No flash underground — phone OK',
    tip: 'Guided tour only. Underground medieval streets preserved beneath the Royal Mile — book ahead in summer.',
    bookUrl: 'https://www.realmarykingsclose.com/',
    avgVisit: '1 hour',
    nearby: [
      { name: 'St Giles\' Cathedral', walk: '5 min' },
      { name: 'Edinburgh Castle', walk: '10 min' },
      { name: 'Victoria Street', walk: '5 min' }
    ],
    didYouKnow: 'Mary King\'s Close was sealed and built over in the 18th century — residents lived here until the plague of 1645.',
    localSecret: 'The last tour of the day often has the smallest groups and the most atmospheric lighting.'
  }),
  attractionCard(8, {
    name: 'Victoria Street',
    address: 'Victoria St · Old Town · EH1 2HE',
    hours: 'Always open · shops 10:00–18:00',
    tube: 'Waverley 10 min walk',
    ticket: 'Free',
    bestArrival: '18:00 for golden light',
    waitSummer: '0',
    waitWinter: '0',
    photoSpot: 'From Grassmarket looking up — the curve and colour of Diagon Alley.',
    lens: '16–35mm wide',
    tip: 'One of Edinburgh\'s most photographed streets. Widely believed to have inspired Diagon Alley in Harry Potter — wander slowly and shoot upward.',
    avgVisit: '30–45 min',
    crowd: { morning: 2, afternoon: 4, evening: 3 },
    nearby: [
      { name: 'Grassmarket', walk: '2 min' },
      { name: 'Edinburgh Castle', walk: '10 min' },
      { name: 'Greyfriars Kirkyard', walk: '5 min' }
    ],
    didYouKnow: 'J.K. Rowling wrote much of Harry Potter in Edinburgh cafés — Victoria Street\'s colourful curve is the city\'s most Potter-esque corner.',
    localSecret: 'Walk down into Grassmarket for a completely different angle — fewer tourists, better light at sunset.'
  }),
  attractionCard(10, {
    name: 'Princes Street Gardens',
    address: 'Princes St · EH2 2AD',
    hours: '07:00–dusk',
    tube: 'Waverley · Princes Street',
    ticket: 'Free',
    bestArrival: '09:30',
    photoSpot: 'From the Ross Bandstand — castle framed above the gardens.',
    lens: '24–70mm',
    tip: 'Beautiful castle views from the valley between Old and New Town. Perfect picnic spot on a sunny afternoon.',
    avgVisit: '45 min',
    nearby: [
      { name: 'Scott Monument', walk: '3 min' },
      { name: 'Edinburgh Castle', walk: '5 min' },
      { name: 'The Balmoral', walk: '2 min' }
    ],
    didYouKnow: 'The gardens were created in the 1820s when the Nor\' Loch — a polluted lake — was drained to form this green heart.',
    localSecret: 'The Scott Monument side has fewer crowds than the castle end at lunchtime.'
  }),
  attractionCard(12, {
    name: 'Scott Monument',
    address: 'E. Princes St Gardens · EH2 2EJ',
    hours: '10:00–19:00 Apr–Sep · shorter in winter',
    tube: 'Waverley 3 min walk',
    ticket: '£8 adult · optional climb',
    bestArrival: '10:30',
    photoSpot: 'From Princes Street — full Gothic spire against the sky.',
    lens: '24mm',
    tip: 'Optional climb — 287 steps to the top. Narrow staircase but the view over New Town is spectacular.',
    bookUrl: 'https://www.edinburghmuseums.org.uk/venue/scott-monument',
    avgVisit: '45 min',
    nearby: [
      { name: 'Princes Street Gardens', walk: '1 min' },
      { name: 'Dean Village', walk: '15 min' },
      { name: 'Calton Hill', walk: '15 min' }
    ],
    didYouKnow: 'Built in 1844 to honour Sir Walter Scott — at 61 metres it is the largest monument to a writer in the world.',
    localSecret: 'Climb on a clear morning before the wind picks up — the top platform gets gusty after noon.'
  }),
  attractionCard(14, {
    name: 'Dean Village',
    address: 'Dean Path · EH4 3AY',
    hours: 'Always open',
    tube: 'Bus 19/41 to Dean Bridge',
    ticket: 'Free',
    bestArrival: '11:30',
    photoSpot: 'From Dean Bridge — Water of Leith and stone cottages below.',
    lens: '35mm',
    tip: 'One of Edinburgh\'s hidden gems. Take your time for photos — the village feels frozen in the 19th century.',
    avgVisit: '45–60 min',
    nearby: [
      { name: 'Royal Botanic Garden', walk: '15 min' },
      { name: 'Cairngorm Coffee', walk: '12 min' },
      { name: 'Calton Hill', walk: '25 min' }
    ],
    didYouKnow: 'Dean Village was a grain-milling hub in the 19th century — the Well Court tenements were built for mill workers.',
    localSecret: 'Follow the Water of Leith walkway downstream for quieter paths than the main bridge viewpoint.'
  }),
  attractionCard(16, {
    name: 'Royal Botanic Garden Edinburgh',
    address: 'Arboretum Pl · EH3 5NZ',
    hours: '10:00–18:00 · gates close 17:45',
    tube: 'Bus 8/23/27 to Inverleith Row',
    ticket: 'Gardens free · Glasshouses £7',
    bestArrival: '16:00',
    photoSpot: 'From the Chinese Hillside — Edinburgh skyline through the trees.',
    lens: '50–85mm for details',
    tip: 'Relaxing afternoon escape. Glasshouses worth the ticket in rain — the outdoor gardens are free.',
    bookUrl: 'https://www.rbge.org.uk/',
    avgVisit: '2 hours',
    nearby: [
      { name: 'Dean Village', walk: '15 min' },
      { name: 'Stockbridge', walk: '10 min' }
    ],
    didYouKnow: 'Founded in 1670, RBGE is one of the world\'s oldest botanic gardens and home to over 13,000 plant species.',
    localSecret: 'The Inverleith House art gallery within the gardens hosts excellent free exhibitions.'
  }),
  attractionCard(18, {
    name: 'Calton Hill',
    address: 'Calton Hill · EH7 5AA',
    hours: 'Always open',
    tube: 'Bus 7/8/14 to Regent Road',
    ticket: 'Free',
    bestArrival: '18:30 for sunset',
    photoSpot: 'From the National Monument — Athens of the North panorama.',
    lens: '16–35mm',
    tip: 'Best sunset viewpoint in Edinburgh. The Parthenon-style National Monument and Nelson\'s Monument define the skyline.',
    avgVisit: '45 min',
    crowd: { morning: 2, afternoon: 3, evening: 5 },
    nearby: [
      { name: 'The Dome', walk: '8 min' },
      { name: 'Holyrood Palace', walk: '10 min' },
      { name: 'Arthur\'s Seat', walk: '20 min' }
    ],
    didYouKnow: 'Calton Hill\'s unfinished National Monument earned Edinburgh the nickname "Athens of the North".',
    localSecret: 'Climb Nelson\'s Monument (£6) for a view that includes Arthur\'s Seat, the castle, and the Firth of Forth.'
  }),
  attractionCard(0, {
    name: 'Arthur\'s Seat',
    address: 'Holyrood Park · EH8 8AZ',
    hours: 'Always open · park gates close at dusk',
    tube: 'Bus 6 to Holyrood · walk from Old Town',
    ticket: 'Free',
    bestArrival: '08:30 for sunrise',
    waitSummer: '0',
    waitWinter: '0',
    photoSpot: 'Summit cairn — 360° views over Edinburgh, the Forth, and the Pentland Hills.',
    lens: '24mm · windproof jacket essential',
    tip: 'The highest point in Holyrood Park. Allow 2–3 hours for the hike. Best sunrise location in the city — wear proper shoes.',
    avgVisit: '2–3 hours',
    crowd: { morning: 2, afternoon: 4, evening: 3 },
    nearby: [
      { name: 'Holyrood Palace', walk: '15 min' },
      { name: 'Salisbury Crags', walk: '10 min' },
      { name: 'Hula Juice Bar', walk: '20 min' }
    ],
    didYouKnow: 'Arthur\'s Seat is an ancient volcano rising 251 metres — people have climbed it for over 2,000 years.',
    localSecret: 'The Radical Road path along Salisbury Crags gives dramatic cliff views with half the summit crowd.'
  }),
  attractionCard(2, {
    name: 'Palace of Holyroodhouse',
    address: 'Canongate · EH8 8DX',
    hours: '09:30–18:00 · closed Tue–Wed in winter',
    tube: 'Bus 6/35 to Holyrood',
    ticket: '£19.50 adult',
    bestArrival: '11:30',
    photoSpot: 'From the palace forecourt — abbey ruins and Arthur\'s Seat behind.',
    lens: '24–50mm',
    tip: 'Official residence of the British monarch in Scotland. Combine with Arthur\'s Seat morning hike — palace opens late morning.',
    bookUrl: 'https://www.rct.uk/visit/palace-of-holyroodhouse',
    avgVisit: '1.5 hours',
    nearby: [
      { name: 'Arthur\'s Seat', walk: '15 min' },
      { name: 'Calton Hill', walk: '10 min' },
      { name: 'Royal Mile', walk: '10 min' }
    ],
    didYouKnow: 'Mary, Queen of Scots lived here during some of the most dramatic years of Scottish history.',
    localSecret: 'The abbey ruins at the rear are included in the ticket and far quieter than the state apartments.'
  }),
  attractionCard(4, {
    name: 'Royal Yacht Britannia',
    address: 'Ocean Dr · Leith · EH6 6JJ',
    hours: '10:00–17:00 · last entry 16:00',
    tube: 'Bus 11/22/34/35 to Ocean Terminal',
    ticket: '£19.50 adult',
    bestArrival: '15:00',
    photoSpot: 'From the dockside — full length of the royal yacht against Leith water.',
    lens: '24–70mm',
    tip: 'One of the UK\'s top attractions. Allow 2 hours for the self-guided audio tour through the royal apartments.',
    bookUrl: 'https://www.royalyachtbritannia.co.uk/',
    avgVisit: '2 hours',
    nearby: [
      { name: 'Fishers in Leith', walk: '5 min' },
      { name: 'Leith Shore', walk: '10 min' },
      { name: 'Williams & Johnson Coffee Co.', walk: '8 min' }
    ],
    didYouKnow: 'Britannia served the Royal Family for 44 years and travelled over one million nautical miles.',
    localSecret: 'The Royal Deck Tea Room on board serves excellent afternoon tea — book when you arrive.'
  }),
  attractionCard(6, {
    name: 'Leith Shore',
    address: 'The Shore · Leith · EH6 6QU',
    hours: 'Always open · restaurants from 12:00',
    tube: 'Bus 11/22/34 · taxi 15 min from centre',
    ticket: 'Free',
    bestArrival: '17:30',
    photoSpot: 'Waterfront promenade — boats, boutiques, and local atmosphere.',
    lens: '35mm',
    tip: 'Walk the waterfront after Britannia. Boutiques, seafood restaurants, and a completely different Edinburgh from the Old Town.',
    avgVisit: '1–2 hours',
    nearby: [
      { name: 'Royal Yacht Britannia', walk: '10 min' },
      { name: 'Fishers in Leith', walk: '5 min' },
      { name: 'The Ship on the Shore', walk: '3 min' }
    ],
    didYouKnow: 'Leith was an independent port town until 1920 — it still feels like Edinburgh\'s rebellious younger sibling.',
    localSecret: 'The Malmaison hotel bar has one of the best waterfront sunset views in the city.'
  })
];

const hotels = [
  hotelCard(0, {
    name: 'The Balmoral Hotel',
    category: 'Luxury',
    address: '1 Princes St · EH2 2EQ',
    price: '£450–900/night',
    rating: '9.2',
    googleRating: '4.7',
    room: 'Classic Castle View · clock tower landmark',
    cancellation: 'Free 48h · flexible rate',
    tube: 'Waverley Station 1 min walk',
    airport: 'EDI 30 min tram · 25 min taxi',
    nearbyAttractions: 'Royal Mile 5 min · Edinburgh Castle 8 min · Princes Street Gardens 1 min',
    walkingScore: '99 / 100 — walk everywhere',
    breakfast: 'Included in premium rates',
    idealFor: ['Couple', 'Luxury', 'First-time visitors'],
    tip: 'The clock is set three minutes fast so travellers don\'t miss their trains. Ask for a south-facing room for castle views.',
    bookUrl: 'https://www.roccofortehotels.com/hotels-and-resorts/the-balmoral/'
  }),
  hotelCard(2, {
    name: 'The Witchery by the Castle',
    category: 'Luxury',
    address: 'Castlehill · Royal Mile · EH1 2NF',
    price: '£350–650/night',
    rating: '9.4',
    googleRating: '4.8',
    room: 'Historic Suite · next to Edinburgh Castle',
    cancellation: 'Non-refundable suites · flexible on request',
    tube: 'Waverley 10 min walk',
    airport: 'EDI 30 min',
    nearbyAttractions: 'Edinburgh Castle 2 min · Victoria Street 8 min · St Giles\' 5 min',
    walkingScore: '100 / 100 — Old Town doorstep',
    breakfast: 'Included in suite rates',
    idealFor: ['Couple', 'Honeymoon', 'Luxury'],
    tip: 'Historic luxury suites in a 16th-century building. Ideal for honeymooners — book the Signature Suite for the four-poster.',
    bookUrl: 'https://www.thewitchery.com/'
  }),
  hotelCard(4, {
    name: 'Market Street Hotel',
    category: 'Mid-Range',
    address: 'Market St · EH1 1DE',
    price: '£180–300/night',
    rating: '8.9',
    googleRating: '4.5',
    room: 'Superior King · modern design',
    cancellation: 'Free 24h',
    tube: 'Waverley Station 2 min walk',
    airport: 'EDI 30 min tram from Waverley',
    nearbyAttractions: 'Royal Mile 3 min · Edinburgh Castle 10 min · Princes Street 2 min',
    walkingScore: '98 / 100 — city centre',
    breakfast: 'Extra £18pp',
    idealFor: ['Couple', 'Business', 'First-time visitors'],
    tip: 'Modern design with excellent location above Waverley. Rooftop bar has one of the best castle views in the city.',
    bookUrl: 'https://www.marketstreethotel.co.uk/'
  }),
  hotelCard(6, {
    name: 'Motel One Edinburgh – Royal',
    category: 'Mid-Range',
    address: '18 Market St · EH1 1BL',
    price: '£120–200/night',
    rating: '8.7',
    googleRating: '4.4',
    room: 'Standard Queen · fantastic value',
    cancellation: 'Free until 18:00 day of arrival',
    tube: 'Waverley 1 min walk',
    airport: 'EDI 30 min',
    nearbyAttractions: 'Royal Mile 3 min · Castle 10 min · Trams at St Andrew Square',
    walkingScore: '97 / 100 — walk everywhere',
    breakfast: 'Buffet £15pp',
    idealFor: ['Couple', 'Solo', 'Budget-conscious'],
    tip: 'Fantastic value for the location. Walk everywhere from here — no taxi needed for the entire 3-day itinerary.',
    bookUrl: 'https://www.motel-one.com/en/hotels/edinburgh/hotel-edinburgh-royal/'
  }),
  hotelCard(8, {
    name: 'Apex Grassmarket Hotel',
    category: 'Mid-Range',
    address: '31–35 Grassmarket · EH1 2HS',
    price: '£150–280/night',
    rating: '8.8',
    googleRating: '4.5',
    room: 'Castle View Room · pool access',
    cancellation: 'Free 48h',
    tube: 'Bus 2/23/27 from Grassmarket',
    airport: 'EDI 35 min taxi',
    nearbyAttractions: 'Edinburgh Castle 5 min · Victoria Street 2 min · Greyfriars 3 min',
    walkingScore: '96 / 100 — Old Town',
    breakfast: 'Extra £16pp',
    idealFor: ['Family', 'Couple', 'Castle views'],
    tip: 'Castle views from many rooms plus a pool — rare in Old Town Edinburgh. Grassmarket pubs on your doorstep.',
    bookUrl: 'https://www.apexhotels.co.uk/destinations/edinburgh/apex-grassmarket/'
  }),
  hotelCard(10, {
    name: 'ibis Edinburgh Centre South Bridge',
    category: 'Budget',
    address: '33 South Bridge · EH1 1LL',
    price: '£90–150/night',
    rating: '8.2',
    googleRating: '4.1',
    room: 'Standard Double · excellent location',
    cancellation: 'Free 18:00 day before',
    tube: 'Waverley 5 min walk',
    airport: 'EDI 30 min',
    nearbyAttractions: 'Royal Mile 2 min · Edinburgh Castle 8 min · University 5 min',
    walkingScore: '97 / 100 — Old Town core',
    breakfast: 'Buffet £10pp',
    idealFor: ['Solo', 'Couple', 'Budget'],
    tip: 'Excellent location on South Bridge — Royal Mile in two minutes. Reliable ibis quality at a fraction of luxury prices.',
    bookUrl: 'https://all.accor.com/hotel/B0K8/index.en.shtml'
  }),
  hotelCard(12, {
    name: 'Premier Inn Edinburgh City Centre',
    category: 'Budget',
    address: '82–94 Morrison St · EH3 8BP',
    price: '£80–140/night',
    rating: '8.4',
    googleRating: '4.2',
    room: 'Double · reliable chain comfort',
    cancellation: 'Free if Flex rate',
    tube: 'Haymarket 5 min · tram to airport',
    airport: 'EDI 35 min tram direct',
    nearbyAttractions: 'Princes Street 10 min · Castle 15 min · Dean Village 15 min',
    walkingScore: '88 / 100 — West End',
    breakfast: 'Unlimited £10.99',
    idealFor: ['Family', 'Budget', 'Reliable'],
    tip: 'Reliable Premier Inn comfort. Walking distance to attractions and Haymarket tram stop for the airport.',
    bookUrl: 'https://www.premierinn.com/gb/en/hotels/scotland/lothian/edinburgh/edinburgh-city-centre.html'
  })
];

const dining = [
  diningCard(0, {
    name: 'The Witchery by the Castle',
    category: 'Fine Dining · Scottish',
    address: 'Castlehill · EH1 2NF',
    price: '£55–85/head',
    famous: 'Scottish Salmon · Beef Wellington',
    reservation: 'Essential 2+ weeks',
    wait: '0 with booking',
    michelin: '—',
    dressCode: 'Smart',
    tip: 'Gothic dining room next to the castle. Scottish Salmon and Beef Wellington are the signatures — book the Secret Garden in summer.',
    bookUrl: 'https://www.thewitchery.com/',
    dishes: [
      { name: 'Scottish Salmon', img: img(1), desc: 'Hand-dived scallops and salmon from Scottish waters.' },
      { name: 'Beef Wellington', img: img(2), desc: 'Classic preparation in a candlelit 16th-century room.' },
      { name: 'Orkney Lobster', img: img(3), desc: 'When in season — ask if available.' },
      { name: 'Highland Venison', img: img(4), desc: 'Rich, gamey, perfectly cooked.' },
      { name: 'Cranachan', img: img(5), desc: 'Traditional Scottish dessert — raspberries, cream, whisky, oats.' }
    ]
  }),
  diningCard(2, {
    name: 'Makars Gourmet Mash Bar',
    category: 'Scottish · Comfort Food',
    address: '9 & 12 Bank St · EH1 2LN',
    price: '£18–28/head',
    famous: 'Traditional Scottish comfort food · gourmet mash',
    reservation: 'Recommended weekends',
    wait: '15–30 min at 19:30',
    dressCode: 'Casual',
    tip: 'Traditional Scottish comfort food with a twist. Try haggis mash — the gateway dish for the curious.',
    dishes: [
      { name: 'Haggis, Neeps & Tatties', img: img(3), desc: 'Try it if you\'re curious — surprisingly delicious.' },
      { name: 'Sausage & Mash', img: img(4), desc: 'Cumberland sausage with truffle mash.' },
      { name: 'Steak Pie', img: img(5), desc: 'Slow-cooked Scottish beef in rich gravy.' },
      { name: 'Cullen Skink', img: img(6), desc: 'Smoky haddock soup — a Scottish classic.' },
      { name: 'Sticky Toffee Pudding', img: img(7), desc: 'Warm, generous, essential.' }
    ]
  }),
  diningCard(4, {
    name: 'The Scran & Scallie',
    category: 'Gastropub · Scottish',
    address: '1f2 Leopold Pl · EH7 5JT',
    price: '£25–40/head',
    famous: 'Traditional Scottish pub · seasonal menu',
    reservation: 'Walk-in OK weekdays',
    wait: '20 min at 14:00 weekends',
    tip: 'Tom Kitchin\'s neighbourhood pub — proper Scottish ingredients without the fine-dining price tag.',
    bookUrl: 'https://www.thescraneandscallie.co.uk/',
    dishes: [
      { name: 'Scran Pie', img: img(5), desc: 'Daily pie with mash and gravy.' },
      { name: 'Fish & Chips', img: img(6), desc: 'Beer-battered haddock, mushy peas.' },
      { name: 'Scotch Egg', img: img(7), desc: 'House-made with piccalilli.' },
      { name: 'Scottish Cheese Board', img: img(8), desc: 'Isle of Mull cheddar, Dunsyre blue.' },
      { name: 'Sticky Toffee', img: img(9), desc: 'With clotted cream.' }
    ]
  }),
  diningCard(6, {
    name: 'The Dome',
    category: 'Fine Dining · Scottish',
    address: '14 George St · EH2 2PF',
    price: '£45–70/head',
    famous: 'Elegant Scottish dining · grand interior',
    reservation: 'Essential weekends',
    wait: '0 with booking',
    dressCode: 'Smart casual',
    tip: 'Elegant Scottish dining under a magnificent Victorian dome. Afternoon tea is legendary — book the George Street room.',
    bookUrl: 'https://www.thedomeedinburgh.com/',
    dishes: [
      { name: 'Scottish Beef Fillet', img: img(7), desc: 'Aberdeen Angus with seasonal vegetables.' },
      { name: 'Pan-Seared Scallops', img: img(8), desc: 'Hand-dived from the west coast.' },
      { name: 'Roast Lamb', img: img(9), desc: 'Scottish lamb with mint jus.' },
      { name: 'Afternoon Tea', img: img(10), desc: 'Three tiers under the dome — book ahead.' },
      { name: 'Whisky Selection', img: img(11), desc: 'Over 100 Scotch whiskies behind the bar.' }
    ]
  }),
  diningCard(8, {
    name: 'Fishers in Leith',
    category: 'Seafood · Scottish',
    address: '1 The Shore · Leith · EH6 6QW',
    price: '£35–55/head',
    famous: 'Fresh Scottish seafood',
    reservation: 'Recommended',
    wait: '15 min at 13:30',
    tip: 'Fresh Scottish seafood on Leith Shore. Order the seafood platter to share — oysters, langoustines, crab.',
    bookUrl: 'https://www.fishersinleith.co.uk/',
    dishes: [
      { name: 'Seafood Platter', img: img(9), desc: 'Oysters, langoustines, crab — the full Scottish coast.' },
      { name: 'Scottish Salmon', img: img(10), desc: 'Pan-fried with dill butter.' },
      { name: 'Fish Soup', img: img(11), desc: 'Rich, creamy, daily catch.' },
      { name: 'Grilled Halibut', img: img(12), desc: 'With samphire and beurre blanc.' },
      { name: 'Lemon Tart', img: img(13), desc: 'Light finish after a seafood feast.' }
    ]
  }),
  diningCard(10, {
    name: 'The Kitchin',
    category: 'Fine Dining · 1 Michelin Star',
    address: '78 Commercial Quay · Leith · EH6 6LX',
    price: '£95 tasting menu',
    famous: 'From Nature to Plate · Tom Kitchin',
    reservation: 'Essential 4+ weeks',
    wait: '0 with booking',
    michelin: '★',
    dressCode: 'Smart',
    tip: 'Michelin-starred farewell dinner. Tom Kitchin\'s "From Nature to Plate" philosophy — book the tasting menu.',
    bookUrl: 'https://www.thekitchin.com/',
    dishes: [
      { name: 'From Nature to Plate Tasting', img: img(11), desc: 'Seasonal Scottish produce, multi-course.' },
      { name: 'Hand-Dived Scallops', img: img(12), desc: 'Signature starter — perfectly caramelised.' },
      { name: 'Highland Venison', img: img(13), desc: 'Game from Scottish estates.' },
      { name: 'Orkney Beef', img: img(14), desc: 'Slow-cooked, deeply flavoured.' },
      { name: 'Cranachan', img: img(15), desc: 'Modern take on the Scottish classic.' }
    ]
  }),
  diningCard(12, {
    name: 'The Ship on the Shore',
    category: 'Seafood · Scottish',
    address: '43 Shore · Leith · EH6 6QU',
    price: '£30–45/head',
    famous: 'Champagne & seafood bar',
    reservation: 'Walk-in OK · book for groups',
    wait: '10–20 min at 19:30',
    tip: 'Alternative farewell dinner to The Kitchin — champagne and seafood on Leith waterfront. More relaxed, still special.',
    dishes: [
      { name: 'Champagne & Oysters', img: img(13), desc: 'Classic Leith Shore pairing.' },
      { name: 'Seafood Linguine', img: img(14), desc: 'Daily catch in white wine sauce.' },
      { name: 'Grilled Lobster', img: img(15), desc: 'When available — ask your server.' },
      { name: 'Fish Pie', img: img(16), desc: 'Comforting, generous, Scottish.' },
      { name: 'Eton Mess', img: img(17), desc: 'Light dessert with Scottish berries.' }
    ]
  }),
  cafeCard(14, 'The Edinburgh Larder', 'Full Scottish Breakfast · Specialty Coffee', '15 Blackfriars St · EH1 1NB'),
  cafeCard(15, 'Urban Angel', 'Brunch · Specialty Coffee', '2 Hanover St · EH2 2DA'),
  cafeCard(16, 'Cairngorm Coffee', 'Single-origin pour-over', '41–43 Frederick St · EH2 1EP'),
  cafeCard(17, 'The Milkman', 'Flat white · local roaster', '7 Cockburn St · EH1 1BP'),
  cafeCard(18, 'Fortitude Coffee', 'Espresso · minimal aesthetic', '35–37 Rose St · EH2 2NH'),
  cafeCard(19, 'Lowdown Coffee', 'Filter coffee · pastries', '38 George St · EH2 2LR'),
  cafeCard(0, 'Brew Lab', 'Pour-over · tea', '6–8 South College St · EH8 9AD'),
  cafeCard(1, 'Hula Juice Bar', 'Smoothies · light breakfast', '103–105 West Bow · EH1 2JP'),
  cafeCard(2, 'Williams & Johnson Coffee Co.', 'Specialty coffee · Leith', '1 Dock Pl · Leith · EH6 6LU')
];

const dayBudget = {
  budget: { total: '£100 per person', includes: ['Free cathedral', 'Walking everywhere', 'Pub lunches', 'Bus day ticket'] },
  mid: { total: '£230 per person', includes: ['Castle ticket', 'Occasional taxi', 'Sit-down meals', 'Coffee stops'] },
  luxury: { total: '£550 per person', includes: ['Private tours', 'Taxi to Leith', 'Michelin dinner', 'Whisky tasting'] }
};

const itineraries = [
  {
    day: 1,
    title: 'The Royal Mile & Old Town',
    color: '#8B5A9B',
    routePreview: '10 stops · start 08:30 · end 19:30 · ≈ 6 km',
    mapUrl: 'https://www.google.com/maps/dir/The+Edinburgh+Larder/Edinburgh+Castle/Camera+Obscura+Edinburgh/The+Witchery+by+the+Castle/St+Giles+Cathedral/The+Real+Mary+Kings+Close/Victoria+Street+Edinburgh/Makars+Gourmet+Mash+Bar',
    budget: dayBudget,
    photos: [img(0), img(1), img(2), img(3)],
    stops: [
      { time: '08:30', timeOfDay: 'morning', name: 'The Edinburgh Larder', desc: 'Full Scottish Breakfast · specialty coffee', transit: 'Walk from hotel · Old Town', icon: 'walk', mapUrl: mapQuery('The Edinburgh Larder') },
      { time: '09:30', timeOfDay: 'morning', name: 'Edinburgh Castle', desc: 'Scotland\'s most famous landmark · book online · arrive early', transit: 'Walk 5 min', icon: 'walk', mapUrl: mapQuery('Edinburgh Castle') },
      { time: '12:00', timeOfDay: 'afternoon', name: 'Camera Obscura & World of Illusions', desc: 'Families · panoramic rooftop views · 1 hour', transit: 'Walk 2 min', icon: 'walk', mapUrl: mapQuery('Camera Obscura Edinburgh') },
      { time: '13:30', timeOfDay: 'afternoon', name: 'The Witchery by the Castle', desc: 'Scottish Salmon · Beef Wellington', transit: 'Walk 10 min along Royal Mile', icon: 'walk', mapUrl: mapQuery('The Witchery by the Castle') },
      { time: '15:00', timeOfDay: 'afternoon', name: 'St Giles\' Cathedral', desc: 'One of Scotland\'s most important churches · free entry', transit: 'Walk 5 min', icon: 'walk', mapUrl: mapQuery('St Giles Cathedral Edinburgh') },
      { time: '16:00', timeOfDay: 'afternoon', name: 'The Real Mary King\'s Close', desc: 'Underground medieval streets · 1 hour', transit: 'Walk 5 min', icon: 'walk', mapUrl: mapQuery('The Real Mary Kings Close') },
      { time: '18:00', timeOfDay: 'evening', name: 'Victoria Street', desc: 'Harry Potter · Diagon Alley inspiration · most photographed street', transit: 'Walk 10 min', icon: 'walk', mapUrl: mapQuery('Victoria Street Edinburgh') },
      { time: '19:30', timeOfDay: 'night', name: 'Makars Gourmet Mash Bar', desc: 'Traditional Scottish comfort food', transit: 'Walk 5 min', icon: 'walk', mapUrl: mapQuery('Makars Gourmet Mash Bar') },
      { time: '21:00', timeOfDay: 'night', name: 'Optional · Ghost Tour', desc: 'Old Town ghost walk · book Mercat or City of the Dead', transit: 'Walk · Royal Mile', icon: 'walk', mapUrl: mapQuery('Mercat Tours Edinburgh') }
    ]
  },
  {
    day: 2,
    title: 'New Town, Dean Village & Calton Hill',
    color: '#C68642',
    routePreview: '9 stops · start 08:30 · end 20:00 · ≈ 8 km',
    mapUrl: 'https://www.google.com/maps/dir/Urban+Angel+Edinburgh/Princes+Street+Gardens/Scott+Monument/Dean+Village/Cairngorm+Coffee/The+Scran+and+Scallie/Royal+Botanic+Garden+Edinburgh/Calton+Hill/The+Dome+Edinburgh',
    budget: dayBudget,
    photos: [img(4), img(5), img(6), img(7)],
    stops: [
      { time: '08:30', timeOfDay: 'morning', name: 'Urban Angel', desc: 'Breakfast · specialty coffee', transit: 'Walk from hotel', icon: 'walk', mapUrl: mapQuery('Urban Angel Edinburgh') },
      { time: '09:30', timeOfDay: 'morning', name: 'Princes Street Gardens', desc: 'Beautiful castle views from the valley', transit: 'Walk 5 min', icon: 'walk', mapUrl: mapQuery('Princes Street Gardens') },
      { time: '10:30', timeOfDay: 'morning', name: 'Scott Monument', desc: 'Optional climb · 287 steps to the top', transit: 'Walk 3 min', icon: 'walk', mapUrl: mapQuery('Scott Monument') },
      { time: '11:30', timeOfDay: 'morning', name: 'Dean Village', desc: 'Hidden gem · take your time for photos', transit: 'Walk 15 min', icon: 'walk', mapUrl: mapQuery('Dean Village') },
      { time: '13:00', timeOfDay: 'afternoon', name: 'Cairngorm Coffee', desc: 'Coffee break · single-origin pour-over', transit: 'Walk 12 min', icon: 'walk', mapUrl: mapQuery('Cairngorm Coffee') },
      { time: '14:00', timeOfDay: 'afternoon', name: 'The Scran & Scallie', desc: 'Traditional Scottish pub lunch', transit: 'Walk 10 min', icon: 'walk', mapUrl: mapQuery('The Scran and Scallie') },
      { time: '16:00', timeOfDay: 'afternoon', name: 'Royal Botanic Garden', desc: 'Relaxing afternoon · glasshouses £7', transit: 'Taxi 10 min', icon: 'cab', mapUrl: mapQuery('Royal Botanic Garden Edinburgh') },
      { time: '18:30', timeOfDay: 'evening', name: 'Calton Hill', desc: 'Best sunset viewpoint in Edinburgh', transit: 'Taxi 10 min', icon: 'cab', mapUrl: mapQuery('Calton Hill') },
      { time: '20:00', timeOfDay: 'night', name: 'The Dome', desc: 'Elegant Scottish dining under the Victorian dome', transit: 'Taxi 8 min', icon: 'cab', mapUrl: mapQuery('The Dome Edinburgh') }
    ]
  },
  {
    day: 3,
    title: 'Arthur\'s Seat & Leith',
    color: '#6B21A8',
    routePreview: '9 stops · start 07:30 · end 19:30 · ≈ 7 km',
    mapUrl: 'https://www.google.com/maps/dir/Hula+Juice+Bar/Arthurs+Seat+Edinburgh/Palace+of+Holyroodhouse/Fishers+in+Leith/Royal+Yacht+Britannia/Williams+and+Johnson+Coffee+Co/The+Kitchin+Edinburgh',
    budget: dayBudget,
    photos: [img(8), img(9), img(10), img(11)],
    stops: [
      { time: '07:30', timeOfDay: 'morning', name: 'Hula Juice Bar', desc: 'Light breakfast before the hike', transit: 'Walk from hotel', icon: 'walk', mapUrl: mapQuery('Hula Juice Bar Edinburgh') },
      { time: '08:30', timeOfDay: 'morning', name: 'Arthur\'s Seat', desc: 'Highest point in Holyrood Park · 2–3 hours · best sunrise', transit: 'Walk 15 min to trailhead', icon: 'walk', mapUrl: mapQuery('Arthurs Seat Edinburgh') },
      { time: '11:30', timeOfDay: 'afternoon', name: 'Palace of Holyroodhouse', desc: 'Official royal residence in Scotland', transit: 'Walk 15 min downhill', icon: 'walk', mapUrl: mapQuery('Palace of Holyroodhouse') },
      { time: '13:30', timeOfDay: 'afternoon', name: 'Fishers in Leith', desc: 'Fresh Scottish seafood lunch', transit: 'Taxi 15 min', icon: 'cab', mapUrl: mapQuery('Fishers in Leith') },
      { time: '15:00', timeOfDay: 'afternoon', name: 'Royal Yacht Britannia', desc: 'One of the UK\'s top attractions · 2 hours', transit: 'Walk 5 min', icon: 'walk', mapUrl: mapQuery('Royal Yacht Britannia') },
      { time: '17:30', timeOfDay: 'evening', name: 'Williams & Johnson Coffee Co.', desc: 'Coffee break · Leith specialty roaster', transit: 'Walk 8 min', icon: 'walk', mapUrl: mapQuery('Williams and Johnson Coffee Co Leith') },
      { time: '18:00', timeOfDay: 'evening', name: 'Leith Shore Walk', desc: 'Boutiques · waterfront · local atmosphere', transit: 'Walk along The Shore', icon: 'walk', mapUrl: mapQuery('The Shore Leith') },
      { time: '19:30', timeOfDay: 'night', name: 'Farewell Dinner · The Kitchin', desc: 'Michelin star · or The Ship on the Shore', transit: 'Walk 5 min', icon: 'walk', mapUrl: mapQuery('The Kitchin Edinburgh') }
    ]
  }
];

const PLAN = {
  meta: {
    city: 'Edinburgh',
    country: 'United Kingdom',
    tagline: 'Castles, whisky, Harry Potter and Arthur\'s Seat — in your pocket.',
    badge: 'Discover · 2026 Edition',
    edition: '2026',
    stats: {
      chapters: 38,
      qrCodes: '120+',
      attractions: attractions.length,
      hotels: hotels.length,
      dining: dining.length,
      days: 3
    },
    theme: {
      accent: '#8B5A9B',
      accentSoft: '#F3E8FF',
      accentDeep: '#6B21A8',
      heroImage: img(0, 640),
      tube: '#8B5A9B',
      parks: '#2d6a4f',
      river: '#0077b6',
      gold: '#C68642',
      navy: '#1a2744'
    }
  },
  welcome: {
    editorLetter: 'Edinburgh is a city of contrasts — a medieval fortress on a volcanic crag, elegant Georgian streets below, and a wild hill that rises from the heart of the Old Town. This companion was built around one perfect 3-day itinerary: castles and closes on Day 1, hidden villages and sunset hills on Day 2, and a sunrise hike to Arthur\'s Seat before sailing Leith on Day 3.\n\nEvery attraction, hotel, café and restaurant carries a QR code that opens directly in Google Maps. Every day plan has a route map, a timeline, and an estimated walking distance. Scan, walk, eat, repeat.',
    howToUse: 'Point your phone camera at any QR code and the location opens in Google Maps in one tap. Every website and booking link is also clickable directly in the PDF. Colour-coded day chapters make navigation effortless.\n\n— The Editors, Edinburgh Bureau'
  },
  essentials: {
    currency: { label: '£ Pound Sterling', note: 'Contactless everywhere. Notify your bank before travel.' },
    power: { label: 'Type G · 230V', note: 'Same three-pin plug as England. Bring a universal adapter.' },
    sim: { label: 'eSIM or airport SIM', note: 'EE, Vodafone, Three. eSIM works instantly on arrival at EDI.' },
    language: { label: 'English · Scots', note: 'Edinburgh English is clear and welcoming. Gaelic signage on some attractions.' },
    tipping: { label: '10–12.5%', note: 'Check if service charge is already included in restaurants.' },
    emergency: { label: '999 · 112', note: 'Police · Fire · Ambulance.' },
    tapWater: { label: 'Safe to drink', note: 'Scottish tap water is excellent. Cafés will refill your bottle.' },
    timezone: { label: 'GMT / BST +1', note: 'Clocks change last Sunday of March & October.' }
  },
  arrival: [
    { step: '01', title: 'Border', desc: 'Follow signs to UK Border. e-Gates open to most passports incl. GCC. Have your accommodation address ready.' },
    { step: '02', title: 'SIM / eSIM', desc: 'Activate your eSIM on airport Wi-Fi. Or buy an EE / Three SIM from the arrivals shop (£10 gets you 20GB).' },
    { step: '03', title: 'Cash', desc: 'Take £50 from an ATM (never Travelex). Cards work everywhere but keep a note for small shops.' },
    { step: '04', title: 'Tram to city', desc: 'Edinburgh Tram from EDI to city centre: 35 min, £7.50. Runs every 8 min. Stops at Princes Street and St Andrew Square.' },
    { step: '05', title: 'Bus alternative', desc: 'Airlink 100 bus to Waverley Bridge: 30 min, £5.50. Runs 24 hours. Good if your hotel is near the station.' },
    { step: '06', title: 'Hotel', desc: 'Check-in is usually from 15:00. Most hotels will hold luggage from 09:00 so you can start Day 1 immediately.' },
    { step: '07', title: 'First meal', desc: 'Head to The Edinburgh Larder for a Full Scottish Breakfast or Urban Angel for coffee. Then walk uphill to the castle.' }
  ],
  packing: {
    spring: { months: 'MAR–MAY', temp: '4–14 °C · showers', items: ['Waterproof jacket', 'Layerable knit', 'Walking boots', 'Compact umbrella', 'Sunscreen', 'Warm hat for Arthur\'s Seat'] },
    summer: { months: 'JUN–AUG', temp: '12–20 °C · long evenings', items: ['Light waterproof', 'Breathable layers', 'Hiking shoes for Arthur\'s Seat', 'Sunscreen SPF 30', 'Refillable bottle', 'Midgie repellent'] },
    autumn: { months: 'SEP–NOV', temp: '6–14 °C · golden light', items: ['Trench coat', 'Wool jumper', 'Waterproof boots', 'Umbrella', 'Gloves for Calton Hill', 'Book for cafés'] },
    winter: { months: 'DEC–FEB', temp: '1–7 °C · short days', items: ['Heavy wool coat', 'Thermal base layer', 'Beanie + scarf + gloves', 'Waterproof boots', 'Hand warmers', 'Head torch for early Arthur\'s Seat'] }
  },
  weatherTable: {
    rows: [
      { month: 'Jan', avgTemp: '1 / 6 °C', rain: '60%', sunset: '16:15', crowds: 'Low', recommend: 'Hogmanay · museums' },
      { month: 'Feb', avgTemp: '1 / 7 °C', rain: '55%', sunset: '17:30', crowds: 'Low', recommend: 'Whisky bars' },
      { month: 'Mar', avgTemp: '3 / 9 °C', rain: '50%', sunset: '18:30', crowds: 'Rising', recommend: 'Dean Village walks' },
      { month: 'Apr', avgTemp: '4 / 12 °C', rain: '45%', sunset: '20:00', crowds: 'Medium', recommend: 'Botanic Garden' },
      { month: 'May', avgTemp: '7 / 15 °C', rain: '45%', sunset: '21:15', crowds: 'Medium', recommend: 'Perfect walking weather' },
      { month: 'Jun', avgTemp: '10 / 18 °C', rain: '50%', sunset: '22:00', crowds: 'High', recommend: 'Arthur\'s Seat sunrise' },
      { month: 'Jul', avgTemp: '12 / 19 °C', rain: '55%', sunset: '21:45', crowds: 'Peak', recommend: 'Book castle early' },
      { month: 'Aug', avgTemp: '12 / 19 °C', rain: '55%', sunset: '20:45', crowds: 'Peak', recommend: 'Fringe Festival' },
      { month: 'Sep', avgTemp: '10 / 16 °C', rain: '50%', sunset: '19:15', crowds: 'Medium', recommend: 'Golden light · best month' },
      { month: 'Oct', avgTemp: '7 / 12 °C', rain: '60%', sunset: '17:45', crowds: 'Medium', recommend: 'Ghost tours' },
      { month: 'Nov', avgTemp: '3 / 8 °C', rain: '60%', sunset: '16:15', crowds: 'Low', recommend: 'Whisky · cosy pubs' },
      { month: 'Dec', avgTemp: '2 / 7 °C', rain: '55%', sunset: '15:40', crowds: 'Rising', recommend: 'Christmas markets' }
    ],
    sweetSpot: 'May and September deliver the best light, manageable crowds at Edinburgh Castle, and comfortable hiking weather for Arthur\'s Seat. Avoid August unless you have booked for the Fringe Festival — the city is magnificent but packed.'
  },
  transport: {
    modes: [
      { icon: 'walk', name: 'Walk', price: 'Free', desc: 'Most of central Edinburgh is best explored on foot. Old Town to New Town is 10 minutes downhill.' },
      { icon: 'bus', name: 'Lothian Buses', price: '£2.00 single', desc: 'Excellent network. Day ticket £5.50. Contactless tap on every bus.' },
      { icon: 'tube', name: 'Edinburgh Trams', price: '£2.00–£7.50', desc: 'Airport to city centre in 35 min. Runs to York Place and Newhaven.' },
      { icon: 'cab', name: 'Black Cab', price: '£8–£15 short', desc: 'Iconic. Use for Leith, Botanic Garden, and late nights.' },
      { icon: 'uber', name: 'Uber / Bolt', price: '£6–£12 short', desc: 'Cheaper off-peak. Leith from Old Town: ~£10.' },
      { icon: 'bike', name: 'Just Eat Cycles', price: '£1.50 / 30 min', desc: 'Dockless e-bikes. Good for New Town to Leith along the coast.' }
    ],
    oysterTips: [
      { title: 'Contactless on buses', desc: 'Tap your bank card on Lothian Buses — no ticket needed. Same card all day for best value.' },
      { title: 'Tram from airport', desc: '£7.50 to city centre. Buy at the machine or tap contactless on board. Runs every 8 minutes.' },
      { title: 'Taxi for Leith', desc: 'Day 3 needs a taxi Old Town → Leith (~£10). Book via Uber or hail a black cab on Princes Street.' },
      { title: 'Walking is king', desc: 'Royal Mile, Dean Village, Arthur\'s Seat approach — all best on foot. Wear proper shoes.' }
    ],
    exit6Tip: 'Exit Waverley Station onto Princes Street — Edinburgh Castle appears immediately on the crag above you. Stop, photograph, then walk uphill via the Mound. Your first view of the city is worth savouring.'
  },
  maps: {
    overview: {
      caption: 'A schematic map — for exact directions, scan any QR code in this guide.',
      markers: [
        { name: 'Edinburgh Castle', type: 'attraction', lat: 55.9486, lng: -3.1999 },
        { name: 'Arthur\'s Seat', type: 'attraction', lat: 55.9445, lng: -3.1619 },
        { name: 'Victoria Street', type: 'attraction', lat: 55.9467, lng: -3.1935 },
        { name: 'Royal Yacht Britannia', type: 'attraction', lat: 55.9805, lng: -3.1746 },
        { name: 'Dean Village', type: 'attraction', lat: 55.9526, lng: -3.2163 },
        { name: 'Calton Hill', type: 'attraction', lat: 55.9552, lng: -3.1828 },
        { name: 'Royal Botanic Garden', type: 'park', lat: 55.9651, lng: -3.2095 },
        { name: 'Leith Shore', type: 'district', lat: 55.9762, lng: -3.1689 },
        { name: 'The Balmoral', type: 'hotel', lat: 55.9533, lng: -3.1897 },
        { name: 'Market Street Hotel', type: 'hotel', lat: 55.9518, lng: -3.1895 },
        { name: 'The Witchery', type: 'dining', lat: 55.9485, lng: -3.1965 },
        { name: 'The Kitchin', type: 'dining', lat: 55.9772, lng: -3.1725 }
      ]
    }
  },
  attractions,
  hotels,
  dining,
  itineraries,
  rainyDay: [
    { name: 'National Museum of Scotland', address: 'Chambers St', desc: 'Free · dinosaurs to Dolly the sheep', img: img(5), mapUrl: mapQuery('National Museum of Scotland') },
    { name: 'Scottish National Gallery', address: 'The Mound', desc: 'Free · Scottish masters', img: img(6), mapUrl: mapQuery('Scottish National Gallery') },
    { name: 'The Real Mary King\'s Close', address: 'Royal Mile', desc: 'Underground tour · atmospheric', img: img(7), mapUrl: mapQuery('The Real Mary Kings Close') },
    { name: 'Camera Obscura', address: 'Castlehill', desc: 'Illusions + rooftop views', img: img(8), mapUrl: mapQuery('Camera Obscura Edinburgh') },
    { name: 'Royal Botanic Garden Glasshouses', address: 'Inverleith Row', desc: 'Tropical escape · £7', img: img(9), mapUrl: mapQuery('Royal Botanic Garden Edinburgh') },
    { name: 'Scotch Whisky Experience', address: 'Royal Mile', desc: 'Barrel ride + tasting', img: img(10), mapUrl: mapQuery('Scotch Whisky Experience') },
    { name: 'The Dome afternoon tea', address: 'George Street', desc: 'Victorian grandeur', img: img(11), mapUrl: mapQuery('The Dome Edinburgh') }
  ],
  sunnyDay: [
    { name: 'Arthur\'s Seat', address: 'Holyrood Park', desc: 'Sunrise hike · 251 m summit', img: img(0), mapUrl: mapQuery('Arthurs Seat Edinburgh') },
    { name: 'Calton Hill', address: 'Regent Road', desc: 'Best sunset viewpoint', img: img(1), mapUrl: mapQuery('Calton Hill') },
    { name: 'Dean Village', address: 'Dean Path', desc: 'Hidden gem · photo paradise', img: img(2), mapUrl: mapQuery('Dean Village') },
    { name: 'Princes Street Gardens', address: 'Princes Street', desc: 'Castle views · picnic spot', img: img(3), mapUrl: mapQuery('Princes Street Gardens') },
    { name: 'Royal Botanic Garden', address: 'Inverleith Row', desc: '70 acres · free entry outdoors', img: img(4), mapUrl: mapQuery('Royal Botanic Garden Edinburgh') },
    { name: 'Leith Shore Walk', address: 'The Shore', desc: 'Waterfront · boutiques · seafood', img: img(5), mapUrl: mapQuery('The Shore Leith') },
    { name: 'Portobello Beach', address: 'East Edinburgh', desc: 'Sandy beach · 30 min bus', img: img(6), mapUrl: mapQuery('Portobello Beach Edinburgh') }
  ],
  hiddenGems: [
    { name: 'Dean Village', desc: 'Water of Leith · 19th-century mill village', img: img(2), mapUrl: mapQuery('Dean Village') },
    { name: 'Circus Lane', desc: 'New Town mews · cobblestones and colour', img: img(3), mapUrl: mapQuery('Circus Lane Edinburgh') },
    { name: 'Dunbar\'s Close Garden', desc: 'Secret 17th-century garden off Royal Mile', img: img(4), mapUrl: mapQuery('Dunbars Close Garden Edinburgh') },
    { name: 'Water of Leith Walkway', desc: '12-mile riverside path · Dean Village to Leith', img: img(5), mapUrl: mapQuery('Water of Leith Walkway') },
    { name: 'Dr Neil\'s Garden', desc: 'Hidden garden below Arthur\'s Seat', img: img(6), mapUrl: mapQuery('Dr Neils Garden Edinburgh') },
    { name: 'The Vennel', desc: 'Staircase view of Edinburgh Castle', img: img(7), mapUrl: mapQuery('The Vennel Edinburgh') },
    { name: 'Stockbridge Market', desc: 'Sunday farmers market · local produce', img: img(8), mapUrl: mapQuery('Stockbridge Market Edinburgh') },
    { name: 'Greyfriars Bobby', desc: 'Faithful dog statue · kirkyard behind', img: img(9), mapUrl: mapQuery('Greyfriars Bobby Edinburgh') }
  ],
  warnings: [
    { title: 'Airport taxi touts', desc: 'Never take an unlicensed taxi at EDI. Tram is £7.50 and takes 35 min. Licensed black cab from arrivals: £25–£35.' },
    { title: 'Royal Mile tourist traps', desc: '£25 tartan scarves made in China. Buy whisky and shortbread from Royal Mile Whiskies or Jenners, not street stalls.' },
    { title: 'Castle ticket queues', desc: 'Walk-up queues exceed 60 min in July–August. Always book online at edinburghcastle.scot — saves time and money.' },
    { title: 'Arthur\'s Seat weather', desc: 'The summit is exposed — wind chill doubles in winter. Bring layers even on sunny mornings. Proper shoes, not trainers on wet days.' },
    { title: 'Fringe Festival prices', desc: 'Hotels triple in August during the Fringe. Book 3+ months ahead or visit May/September instead.' },
    { title: 'Restaurant Royal Mile', desc: 'Generic "Scottish" pubs on upper Royal Mile serve frozen food at tourist prices. Use the restaurants in this guide.' },
    { title: 'Currency exchange', desc: 'Never use FX booths on Princes Street. Your contactless card gives the best rate everywhere.' }
  ],
  shopping: {
    districts: [
      { name: 'Princes Street', desc: 'High street brands · Jenners · castle views', img: img(10), mapUrl: mapQuery('Princes Street Edinburgh') },
      { name: 'Multrees Walk', desc: 'Luxury · Harvey Nichols · Louis Vuitton', img: img(11), mapUrl: mapQuery('Multrees Walk Edinburgh') },
      { name: 'Grassmarket', desc: 'Independent shops · vintage · pubs', img: img(12), mapUrl: mapQuery('Grassmarket Edinburgh') },
      { name: 'Leith Shore', desc: 'Boutiques · design shops · waterfront', img: img(13), mapUrl: mapQuery('The Shore Leith') }
    ],
    brands: ['Harris Tweed', 'Johnstons of Elgin', 'Walkers Shortbread', 'Royal Mile Whiskies', 'Hamilton & Inches'],
    souvenirs: ['Single malt Scotch whisky', 'Harris Tweed scarf', 'Shortbread tin', 'Edinburgh Castle print', 'Scottish tablet sweets'],
    vatTips: { rate: '20% VAT', refund: 'Tax-free shopping for non-EU visitors on purchases over £100 at participating stores. Ask for the form at checkout.' }
  },
  budget: {
    budget: { daily: '£80–120 per person / day', accommodation: '£90 ibis / Premier Inn', food: '£25 pub lunches', transport: '£5.50 bus day ticket', activities: '£15 cathedral & walks', extras: '£5 coffee', tip: 'Walk everywhere in the Old Town. Free entry to St Giles\' and Calton Hill. One splurge: Edinburgh Castle ticket.' },
    mid: { daily: '£180–280 per person / day', accommodation: '£180 Market Street Hotel', food: '£55 sit-down meals', transport: '£10 taxi to Leith once', activities: '£45 castle + Mary King\'s Close', extras: '£15 whisky tasting' },
    luxury: { daily: '£400–700 per person / day', accommodation: '£450 The Balmoral', food: '£120 The Kitchin tasting menu', transport: '£25 taxis', activities: '£60 private castle tour', extras: '£40 whisky & tips' }
  },
  family: {
    tip: 'Children under 5 go free on Lothian Buses. Under 16s travel free with a paying adult on buses. Camera Obscura and Dynamic Earth are the best family attractions.',
    rows: [
      { attraction: 'Camera Obscura', desc: 'Illusions delight all ages', goodForKids: true, stroller: false, babyChange: true, familyTicket: true },
      { attraction: 'Edinburgh Castle', desc: 'One o\'clock gun · Crown Jewels', goodForKids: true, stroller: true, babyChange: true, familyTicket: true },
      { attraction: 'Dynamic Earth', desc: 'Interactive science · near Holyrood', goodForKids: true, stroller: true, babyChange: true, familyTicket: true },
      { attraction: 'Royal Yacht Britannia', desc: 'Audio tour · royal bedrooms', goodForKids: true, stroller: true, babyChange: true, familyTicket: true },
      { attraction: 'National Museum of Scotland', desc: 'Free · T.rex · rooftop view', goodForKids: true, stroller: true, babyChange: true, familyTicket: true },
      { attraction: 'Arthur\'s Seat', desc: 'Older kids only · steep paths', goodForKids: false, stroller: false, babyChange: false, familyTicket: true },
      { attraction: 'Royal Botanic Garden', desc: 'Run free · glasshouses', goodForKids: true, stroller: true, babyChange: true, familyTicket: true }
    ]
  },
  emergency: {
    numbers: [
      { label: '999 / 112', desc: 'Police · Fire · Ambulance', icon: 'emergency' },
      { label: '111', desc: 'NHS non-emergency · 24/7', icon: 'medical' },
      { label: '101', desc: 'Non-emergency police', icon: 'police' },
      { label: '+44 20 7008 5000', desc: 'UK Foreign Office · lost passport', icon: 'passport' }
    ],
    hospitals: [
      { name: 'Royal Infirmary of Edinburgh', address: '51 Little France · EH16 4SA', icon: 'hospital', mapUrl: mapQuery('Royal Infirmary of Edinburgh') },
      { name: 'Western General Hospital', address: 'Crewe Rd · EH4 2XU', icon: 'hospital', mapUrl: mapQuery('Western General Hospital Edinburgh') },
      { name: 'St John\'s Hospital', address: 'Livingston · EH54 6PP', icon: 'hospital', mapUrl: mapQuery('St Johns Hospital Livingston') }
    ],
    embassies: [
      { country: 'Saudi Arabia', address: '30 Charles St · London W1J 5DZ', icon: 'embassy', mapUrl: 'https://www.google.com/maps/search/?api=1&query=Saudi+Embassy+London' },
      { country: 'United Arab Emirates', address: '1–2 Grosvenor Cres · London SW1X 7EE', icon: 'embassy', mapUrl: 'https://www.google.com/maps/search/?api=1&query=UAE+Embassy+London' },
      { country: 'Kuwait', address: '2 Albert Gate · London SW1X 7JU', icon: 'embassy', mapUrl: 'https://www.google.com/maps/search/?api=1&query=Kuwait+Embassy+London' },
      { country: 'Qatar', address: '1 South Audley St · London W1K 1NB', icon: 'embassy', mapUrl: 'https://www.google.com/maps/search/?api=1&query=Qatar+Embassy+London' },
      { country: 'Bahrain', address: '30 Belgrave Sq · London SW1X 8QB', icon: 'embassy', mapUrl: 'https://www.google.com/maps/search/?api=1&query=Bahrain+Embassy+London' },
      { country: 'Oman', address: '167 Queen\'s Gate · London SW7 5HE', icon: 'embassy', mapUrl: 'https://www.google.com/maps/search/?api=1&query=Oman+Embassy+London' }
    ],
    lostPassport: 'Report to the nearest police station (dial 101). Contact your embassy in London — they can issue an emergency travel document within 24–48 h. Take photos of your passport before you fly.'
  },
  phrases: [
    { english: 'Where is the nearest bus stop?', use: 'Lothian Buses navigation' },
    { english: 'Could I pay by card, please?', use: 'Cards work everywhere' },
    { english: 'Is there a table for two?', use: 'Restaurant arrival' },
    { english: 'Could we have the bill, please?', use: 'End of meal' },
    { english: 'How far is it to the castle?', use: 'Old Town directions' },
    { english: 'A pint of lager, please.', use: 'Pub ordering' },
    { english: 'Do you have vegetarian options?', use: 'Dietary needs' },
    { english: 'Which tram goes to the airport?', use: 'EDI departure day' }
  ],
  cheatSheet: {
    title: 'One-Page Cheat Sheet',
    subtitle: 'Screenshot before your flight — every essential in one glance.',
    emergency: [
      { label: '999 / 112', value: 'Emergency' },
      { label: '111', value: 'NHS advice' },
      { label: '101', value: 'Non-emerg police' }
    ],
    transport: [
      { label: '£7.50', value: 'Tram EDI → city' },
      { label: '£5.50', value: 'Bus day ticket' },
      { label: 'Walk', value: 'Old Town best on foot' }
    ],
    money: [
      { label: 'Contactless', value: 'Everywhere' },
      { label: 'No FX booths', value: 'Use your card' },
      { label: 'Tip 10–12.5%', value: 'Check service charge' }
    ],
    apps: [
      { name: 'Lothian Buses', use: 'Bus times & tickets' },
      { name: 'Citymapper', use: 'Navigation' },
      { name: 'Edinburgh Trams', use: 'Airport tram' }
    ],
    topQrCodes: [
      { name: 'Edinburgh Airport', mapUrl: 'https://www.google.com/maps/search/?api=1&query=Edinburgh+Airport' },
      { name: 'Edinburgh Castle', mapUrl: mapQuery('Edinburgh Castle') },
      { name: 'Arthur\'s Seat', mapUrl: mapQuery('Arthurs Seat Edinburgh') },
      { name: 'Royal Yacht Britannia', mapUrl: mapQuery('Royal Yacht Britannia') },
      { name: 'Victoria Street', mapUrl: mapQuery('Victoria Street Edinburgh') },
      { name: 'The Balmoral', mapUrl: mapQuery('The Balmoral Hotel') },
      { name: 'Royal Infirmary', mapUrl: mapQuery('Royal Infirmary of Edinburgh') },
      { name: 'Waverley Station', mapUrl: mapQuery('Edinburgh Waverley Station') }
    ]
  },
  etiquette: [
    { rule: 'Stand on the right', desc: 'Escalators at Waverley. Left for walking. Same as London — the rule crosses the border.' },
    { rule: 'Queue patiently', desc: 'Britons queue for buses, coffee, castle tickets and ghost tours. Never skip.' },
    { rule: 'Say cheers', desc: 'Short for thank you in Scotland. You will hear it fifty times a day. Reply in kind.' },
    { rule: 'Respect the hill', desc: 'Arthur\'s Seat is a public park, not an amusement ride. Stay on paths and take litter home.' },
    { rule: 'Pub rounds', desc: 'In Scottish pubs, buying rounds is the social contract. If someone buys you a pint, buy the next round.' },
    { rule: 'Whisky appreciation', desc: 'Never call Scotch "Scotch whisky whiskey". Ask the bartender for a recommendation — they love to guide newcomers.' },
    { rule: 'Photograph respectfully', desc: 'Victoria Street residents live with constant cameras. Do not block doorways or climb private steps for photos.' }
  ]
};

const output = `const PLAN = ${JSON.stringify(PLAN, null, 2)};\n`;
fs.writeFileSync(OUT, output);
console.log(`Wrote ${OUT}`);
console.log(`  attractions: ${attractions.length}`);
console.log(`  hotels: ${hotels.length}`);
console.log(`  dining: ${dining.length}`);
console.log(`  days: ${itineraries.length}`);
