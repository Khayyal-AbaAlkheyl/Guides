import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const OUT = path.join(root, 'data', 'bosnia.js');

const PHOTOS = [
  'photo-1513635269975-59663e0ac1ad', 'photo-1524231757912-21f4fe3a7200',
  'photo-1552832230-c0197dd311b5', 'photo-1583422409516-2895a77efded',
  'photo-1540959733332-eab4deabeeaf', 'photo-1502602898657-3e91760cbb34',
  'photo-1566073771259-6a8506099945', 'photo-1555396273-367ea4eb4db5',
  'photo-1550581190-9c1c48d21d6c', 'photo-1550966871-3ed3cdb5ed0c',
  'photo-1525351484163-7529414344d8', 'photo-1495474472287-4d71bcdd2085',
  'photo-1551183053-bf91a1d81141', 'photo-1585937421612-70a008356fbe',
  'photo-1551024506-0bccd828d307', 'photo-1517248135467-4c7edcad34c4',
  'photo-1582719478250-c89cae4dc85b', 'photo-1590490360182-c33d57733427',
  'photo-1512453979798-5ea266f8880c', 'photo-1496442226666-8d0d0e62e956'
];

function img(i, w = 640) {
  return `https://images.unsplash.com/${PHOTOS[i % PHOTOS.length]}?auto=format&fit=crop&w=${w}&q=75&fm=jpg`;
}

function mapQuery(name) {
  const q = /\b(sarajevo|mostar|bosnia|blagaj|jajce|trebinje|konjic|kravica|neretva)\b/i.test(name)
    ? name : `${name} Bosnia Herzegovina`;
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;
}

function attractionCard(i, o) {
  const crowd = o.crowd || { morning: 3, afternoon: 4, evening: 2 };
  return {
    name: o.name, address: o.address, hours: o.hours, tube: o.tube || 'Rental car',
    ticket: o.ticket, bestArrival: o.bestArrival, waitSummer: o.waitSummer || '10–30 min',
    waitWinter: o.waitWinter || '0–15 min', photoSpot: o.photoSpot, lens: o.lens || '24–70mm',
    tip: o.tip, mapUrl: mapQuery(o.name), bookUrl: o.bookUrl || mapQuery(o.name),
    bookText: o.bookText || 'View on Map', avgVisit: o.avgVisit, crowd, nearby: o.nearby || [],
    nearbyCafes: o.nearbyCafes || 'See dining chapter.', nearbyRestaurants: o.nearbyRestaurants || 'See dining chapter.',
    nearbyTube: o.tube || 'Rental car', nearbyToilets: 'On-site or nearby cafés.',
    nearbyAtm: 'Raiffeisen · NLB · Sparkasse ATMs in town centres',
    didYouKnow: o.didYouKnow, localSecret: o.localSecret,
    instagram: { sunset: o.photoSpot, sunrise: o.photoSpot, drone: 'Check local rules near bridges and parks', settings: 'f/8 · ISO 200 · 24–70mm' },
    photos: { hero: img(i), detail: img(i + 1), photoSpot: img(i + 2), map: img(i + 3), heroPosition: 'center 40%' },
    seasonalPhotos: { spring: img(i + 4), summer: img(i + 5), autumn: img(i + 6), christmas: img(i + 7) }
  };
}

function hotelCard(i, o) {
  return {
    name: o.name, category: o.category, address: o.address, price: o.price,
    rating: o.rating, googleRating: o.googleRating, room: o.room, cancellation: o.cancellation || 'Free 24h',
    tube: o.tube || 'Rental car', airport: o.airport, nearbyAttractions: o.nearbyAttractions,
    walkingScore: o.walkingScore, breakfast: o.breakfast || 'Included in most rates',
    idealFor: o.idealFor, tip: o.tip, mapUrl: mapQuery(o.name), bookUrl: mapQuery(o.name),
    photos: {
      exterior: img(i), lobby: img(i + 1), room: img(i + 2), luxuryRoom: img(i + 3),
      restaurant: img(i + 4), pool: img(i + 5), rooftop: img(i + 6),
      breakfast: img(i + 7), spa: img(i + 8), view: img(i + 9)
    }
  };
}

function diningCard(i, o) {
  const dishes = o.dishes || [
    { name: o.famous, img: img(i + 1), desc: `Signature at ${o.name}.` },
    { name: 'Seasonal Special', img: img(i + 2), desc: 'Ask your server for today\'s recommendation.' },
    { name: 'Bosnian Starter', img: img(i + 3), desc: 'Fresh local produce.' },
    { name: 'Main Course', img: img(i + 4), desc: 'Hearty Balkan cooking.' },
    { name: 'Dessert', img: img(i + 5), desc: 'Tufahija or baklava if available.' }
  ];
  return {
    name: o.name, category: o.category, address: o.address, price: o.price, famous: o.famous,
    halal: o.halal !== false, vegetarian: o.vegetarian !== false, reservation: o.reservation || 'Walk-in',
    wait: o.wait || '10–20 min', michelin: '—', kidsFriendly: 'Yes', dressCode: o.dressCode || 'Smart casual',
    tip: o.tip, mapUrl: mapQuery(o.name), bookUrl: mapQuery(o.name), dishes,
    photos: { signature: img(i), interior: img(i + 1), exterior: img(i + 2), dessert: img(i + 3), coffee: img(i + 4) }
  };
}

function cafeCard(i, name, famous, address, tip) {
  return diningCard(i, {
    name, category: 'Café · Coffee', address, price: '€5–15', famous,
    reservation: 'Walk-in', wait: '5–15 min', dressCode: 'Casual', tip: tip || 'Order Bosnian coffee served with rahat lokum.',
    dishes: [
      { name: famous, img: img(i), desc: 'House specialty.' },
      { name: 'Bosnian Coffee', img: img(i + 1), desc: 'Thick, strong, served in a džezva with lokum.' },
      { name: 'Burek', img: img(i + 2), desc: 'Flaky pastry — meat, cheese or spinach.' },
      { name: 'Baklava', img: img(i + 3), desc: 'Honey-soaked layers with walnuts.' },
      { name: 'Turkish Tea', img: img(i + 4), desc: 'Refills without asking.' }
    ]
  });
}

const attractions = [
  attractionCard(0, { name: 'Baščaršija', address: 'Stari Grad · Sarajevo Old Town', hours: 'Shops 09:00–20:00', ticket: 'Free',
    bestArrival: '09:30', photoSpot: 'Sebilj Fountain — Ottoman bazaar lanes and copper workshops.',
    tip: 'Walk Kazandžiluk (Copper Street) and browse souvenir shops. The heart of Sarajevo\'s Ottoman heritage.',
    avgVisit: '2 hours', nearby: [{ name: 'Gazi Husrev-beg Mosque', walk: '5 min' }, { name: 'Miris Dunja', walk: '3 min' }],
    didYouKnow: 'Baščaršija was built in the 15th century when Sarajevo was founded — the name means "main market".',
    localSecret: 'Morning light on copper pots in Kazandžiluk beats any afternoon crowd shot.' }),
  attractionCard(2, { name: 'Gazi Husrev-beg Mosque', address: 'Sarači · Baščaršija', hours: 'Prayer times · visitors outside prayer',
    ticket: 'Free · modest dress', bestArrival: '12:30', photoSpot: 'Courtyard fountain — one of the Balkans\' finest mosques.',
    tip: 'Remove shoes, cover shoulders and knees. One of the most beautiful Ottoman mosques in the region.',
    avgVisit: '45 min', didYouKnow: 'Built in 1531, it anchors Sarajevo\'s Islamic heritage and the Old Town skyline.' }),
  attractionCard(4, { name: 'Latin Bridge', address: 'Obala Kulina bana · Miljacka River', hours: 'Always open', ticket: 'Free',
    bestArrival: '15:00', photoSpot: 'Bridge arch over the Miljacka — site of the 1914 assassination.',
    tip: 'Read the plaque where Archduke Franz Ferdinand was shot — the event that sparked World War I.',
    avgVisit: '30 min', didYouKnow: 'The assassination of 28 June 1914 changed the course of world history.' }),
  attractionCard(6, { name: 'Sarajevo Cable Car', address: 'Trebević Mountain · city south', hours: '09:00–21:00 summer',
    ticket: '€8 return', bestArrival: '16:30', photoSpot: 'Panorama over Sarajevo bowl from Trebević summit.',
    tip: 'Ride up for mountain air and Olympic bobsled track views. Combine with Yellow Fortress for sunset.',
    avgVisit: '1.5 hours', crowd: { morning: 2, afternoon: 3, evening: 4 } }),
  attractionCard(8, { name: 'Yellow Fortress', address: 'Jekovac · above Baščaršija', hours: 'Always open', ticket: 'Free',
    bestArrival: '18:30', photoSpot: 'Best sunset over Sarajevo — golden light on minarets and red roofs.',
    tip: 'Short uphill walk from Baščaršija. Arrive 30 min before sunset for the best terrace spot.',
    avgVisit: '1 hour', crowd: { morning: 1, afternoon: 2, evening: 5 },
    localSecret: 'Bring a jacket — the hill catches wind even on warm summer evenings.' }),
  attractionCard(10, { name: 'Stari Most', address: 'Stari Most · Mostar Old Town', hours: 'Always open', ticket: 'Free',
    bestArrival: 'Sunset', photoSpot: 'From the Neretva banks — emerald river framing the Ottoman bridge.',
    lens: '16–35mm wide', tip: 'Watch divers in summer. Kujundžiluk bazaar is steps away. The icon of Bosnia.',
    avgVisit: '1–2 hours', crowd: { morning: 2, afternoon: 4, evening: 5 },
    didYouKnow: 'Destroyed in 1993 and rebuilt in 2004 — a UNESCO symbol of reconciliation.' }),
  attractionCard(12, { name: 'Kujundžiluk Bazaar', address: 'Stari Grad · Mostar', hours: '09:00–20:00', ticket: 'Free',
    bestArrival: '11:00', photoSpot: 'Narrow Ottoman lanes leading toward Stari Most.',
    tip: 'Copper crafts, textiles and souvenirs. Less crowded than Sarajevo\'s Baščaršija but equally atmospheric.',
    avgVisit: '1 hour' }),
  attractionCard(14, { name: 'Konjic Old Stone Bridge', address: 'Konjic · Neretva River', hours: 'Always open', ticket: 'Free',
    bestArrival: 'Morning', photoSpot: 'Stone arch over emerald Neretva — coffee terraces along the river.',
    tip: 'Stop en route Sarajevo–Mostar (1 hr each leg). Coffee by the river is a perfect road-trip break.',
    avgVisit: '45 min' }),
  attractionCard(16, { name: 'Blagaj Tekke', address: 'Blagaj · beneath cliff face', hours: '08:00–18:00', ticket: '€3',
    bestArrival: 'Morning', photoSpot: 'Dervish monastery beneath limestone cliff — Buna River spring.',
    tip: 'The tekke sits where the Buna erupts from the rock. Serene morning light, fewer tour buses.',
    avgVisit: '1 hour', didYouKnow: 'A 600-year-old Sufi monastery at the source of the Buna River.' }),
  attractionCard(18, { name: 'Kravica Waterfalls', address: 'Studenci · 40 min from Mostar', hours: '08:00–20:00 summer',
    ticket: '€5 · swimming allowed', bestArrival: '10:00', photoSpot: 'Wide cascade into emerald pool — swim and photograph.',
    lens: '16–35mm · polarising filter', tip: 'Bring swimwear in summer. Arrive early to avoid tour bus crowds.',
    avgVisit: '2–3 hours', crowd: { morning: 2, afternoon: 5, evening: 3 },
    didYouKnow: 'A natural amphitheatre of tufa cascades — Bosnia\'s most photogenic waterfall.' }),
  attractionCard(0, { name: 'Počitelj', address: 'Čapljina municipality · hillside village', hours: 'Always open', ticket: 'Free',
    bestArrival: 'Morning', photoSpot: 'Ottoman fortress and stone houses climbing the hillside.',
    tip: 'Historic Ottoman village frozen in time. Climb to the fortress for Neretva valley views.',
    avgVisit: '1.5 hours', didYouKnow: 'Continuous settlement since the Middle Ages — a living open-air museum.' }),
  attractionCard(2, { name: 'Trebinje Old Town', address: 'Trebinje · Herzegovina south', hours: 'Always open', ticket: 'Free',
    bestArrival: 'Afternoon', photoSpot: 'Platan trees and stone squares — Mediterranean feel in Bosnia.',
    tip: 'Relaxed old town with local cafés. Combine with Arslanagić Bridge for a slow Herzegovina afternoon.',
    avgVisit: '2 hours' }),
  attractionCard(4, { name: 'Arslanagić Bridge', address: 'Trebinje · Trebišnjica River', hours: 'Always open', ticket: 'Free',
    bestArrival: 'Late afternoon', photoSpot: 'Ottoman stone bridge reflected in calm water.',
    tip: 'Moved stone by stone from another site — a quiet photographic gem near Trebinje.',
    avgVisit: '30 min' }),
  attractionCard(6, { name: 'Sutjeska National Park', address: 'Tjentište · eastern Bosnia', hours: '08:00–18:00', ticket: '€5',
    bestArrival: '09:00', photoSpot: 'Perućica primeval forest and Maglić mountain viewpoints.',
    tip: 'Nature day — Perućica forest, Maglić viewpoint, Drina River and waterfalls. Full day from Sarajevo.',
    avgVisit: 'Full day', didYouKnow: 'Home to one of Europe\'s last primeval forests and Bosnia\'s highest peak.' }),
  attractionCard(8, { name: 'Jajce Waterfall', address: 'Jajce · centre of town', hours: 'Always open', ticket: 'Free',
    bestArrival: 'Morning', photoSpot: 'Pliva River plunging 21 m below the medieval fortress walls.',
    tip: 'Unique urban waterfall — the only one where a river drops through a city centre.',
    avgVisit: '1 hour', didYouKnow: 'Jajce was the last capital of medieval Bosnia — the waterfall is its crown.' }),
  attractionCard(10, { name: 'Pliva Lakes', address: 'Jajce · 5 km from centre', hours: 'Always open', ticket: 'Free',
    bestArrival: 'Morning', photoSpot: 'Wooden watermills on still emerald lakes.',
    tip: 'Visit the historic watermills after Jajce waterfall. Peaceful rowing and photography.',
    avgVisit: '1.5 hours' }),
  attractionCard(12, { name: 'Tunnel of Hope Museum', address: 'Butmir · Sarajevo airport road', hours: '09:00–17:00',
    ticket: '€10', bestArrival: 'Morning', photoSpot: 'Underground passage that saved Sarajevo during the siege.',
    tip: 'Essential history — walk 25 m of the original tunnel. Allow 1 hour with the documentary film.',
    avgVisit: '1 hour', didYouKnow: 'Built in 1993 under the airport runway — Sarajevo\'s lifeline during the siege.' }),
  attractionCard(14, { name: 'Vrelo Bosne', address: 'Ilidža · spring of the Bosna River', hours: '08:00–19:00', ticket: '€2 park entry',
    bestArrival: 'Morning', photoSpot: 'Horse carriage paths through birch woods to the river source.',
    tip: 'End your trip with a horse carriage ride through the park. Fresh air before the airport.',
    avgVisit: '2 hours', localSecret: 'The carriage ride at dawn is magical — most tourists arrive after 10:00.' })
];

const hotels = [
  hotelCard(0, { name: 'Swissôtel Sarajevo', category: 'Luxury', address: 'City Centre · Sarajevo', price: '€180–350/night',
    rating: '9.1', googleRating: '4.5', room: 'Deluxe King · indoor pool & spa', airport: 'SJJ 15 min',
    nearbyAttractions: 'Baščaršija 10 min · SCC Mall 5 min', walkingScore: '85 / 100',
    idealFor: ['Family', 'Luxury', 'Shopping'], tip: 'Best luxury base in Sarajevo — pool, spa and central location.' }),
  hotelCard(2, { name: 'Hotel Europe Sarajevo', category: 'Luxury', address: 'Baščaršija edge · historic', price: '€150–280/night',
    rating: '9.0', googleRating: '4.4', room: 'Heritage Suite · Ottoman-era elegance', airport: 'SJJ 18 min',
    nearbyAttractions: 'Baščaršija 3 min walk · Latin Bridge 10 min', walkingScore: '95 / 100',
    idealFor: ['History lovers', 'Couple', 'Old Town'], tip: 'Historic luxury walking distance to Baščaršija.' }),
  hotelCard(4, { name: 'Hotel Mepas', category: 'Mid-Range', address: 'Mostar · city centre', price: '€90–160/night',
    rating: '8.8', googleRating: '4.3', room: 'Superior · mall attached', airport: 'Mostar OMO 15 min · SJJ 2 hr',
    nearbyAttractions: 'Stari Most 10 min · Kujundžiluk 5 min', walkingScore: '90 / 100',
    idealFor: ['Mostar base', 'Shopping', 'Family'], tip: 'Best hotel in Mostar with luxury shopping mall attached.' }),
  hotelCard(6, { name: 'Malak Regency Hotel', category: 'Mid-Range', address: 'Sarajevo · river views', price: '€100–180/night',
    rating: '8.9', googleRating: '4.4', room: 'River View · spacious suites', airport: 'SJJ 20 min',
    nearbyAttractions: 'Miljacka promenade · city centre 10 min', walkingScore: '75 / 100',
    idealFor: ['GCC families', 'River views', 'Spacious rooms'], tip: 'Beautiful river views — excellent for GCC families.' }),
  hotelCard(8, { name: 'Courtyard by Marriott Sarajevo', category: 'Mid-Range', address: 'City Centre · modern', price: '€110–190/night',
    rating: '8.7', googleRating: '4.3', room: 'Standard King · reliable Marriott', airport: 'SJJ 15 min',
    nearbyAttractions: 'SCC Mall · city centre', walkingScore: '88 / 100',
    idealFor: ['Business', 'Reliable chain', 'Central'], tip: 'Modern, reliable, great location for first-time visitors.' }),
  hotelCard(10, { name: 'Hotel Story Sarajevo', category: 'Budget', address: 'Near Old Town · walkable', price: '€50–90/night',
    rating: '8.5', googleRating: '4.2', room: 'Standard Double · excellent value', airport: 'SJJ 20 min',
    nearbyAttractions: 'Baščaršija 8 min walk', walkingScore: '92 / 100',
    idealFor: ['Value', 'Walkers', 'Old Town'], tip: 'Excellent value within walking distance of Baščaršija.' }),
  hotelCard(12, { name: 'Hotel-Restaurant Kriva Ćuprija', category: 'Budget', address: 'Beside Stari Most · Mostar', price: '€60–120/night',
    rating: '8.6', googleRating: '4.3', room: 'Boutique · bridge views', airport: 'OMO 15 min',
    nearbyAttractions: 'Stari Most doorstep · Kujundžiluk 2 min', walkingScore: '98 / 100',
    idealFor: ['Couple', 'Photography', 'Old Bridge'], tip: 'Boutique hotel beside the Old Bridge — wake to Stari Most views.' })
];

const dining = [
  cafeCard(0, 'Ministry of Ćejf', 'Bosnian Coffee & Fresh Burek', 'Baščaršija · Sarajevo', 'Start Day 1 here — coffee ritual and warm burek.'),
  cafeCard(1, 'Miris Dunja', 'Traditional Bosnian Coffee', 'Baščaršija · Sarajevo'),
  diningCard(2, { name: 'Ćevabdžinica Željo', category: 'Lunch · Ćevapi', address: 'Baščaršija · Sarajevo', price: '€8–15',
    famous: 'Ćevapi with somun & ayran', tip: 'Bosnia\'s most famous dish — grilled minced meat in somun bread with ayran.',
    dishes: [
      { name: 'Ćevapi', img: img(3), desc: 'Ten pieces of grilled minced meat — the national dish.' },
      { name: 'Somun Bread', img: img(4), desc: 'Soft flatbread baked for ćevapi.' },
      { name: 'Ayran', img: img(5), desc: 'Salty yoghurt drink — essential pairing.' },
      { name: 'Onion & Ajvar', img: img(6), desc: 'Raw onion and roasted pepper relish.' },
      { name: 'Baklava', img: img(7), desc: 'Sweet finish if room remains.' }
    ] }),
  diningCard(4, { name: 'Dveri Restaurant', category: 'Dinner · Traditional', address: 'Stari Grad · Sarajevo', price: '€20–40',
    famous: 'Begova Čorba & Bosnian lamb', tip: 'Traditional Bosnian cuisine in an intimate Old Town setting.' }),
  diningCard(6, { name: 'Šadrvan Restaurant', category: 'Lunch · Mostar', address: 'Stari Grad · Mostar', price: '€15–30',
    famous: 'Herzegovinian specialities', tip: 'Lunch beside the Neretva before exploring Stari Most.' }),
  diningCard(8, { name: 'National Restaurant Cevabdzinica Tima-Irma', category: 'Dinner · Ćevapi', address: 'Mostar', price: '€10–20',
    famous: 'Ćevapi & klepe', tip: 'Beloved Mostar ćevabdžinica — dinner after sunset at the bridge.' }),
  diningCard(10, { name: 'Restaurant Vrelo', category: 'Lunch · Riverside', address: 'Blagaj · Buna spring', price: '€15–25',
    famous: 'Fresh trout from the Buna', tip: 'Lunch beside the emerald Buna River after visiting Blagaj Tekke.' }),
  diningCard(12, { name: 'Studenac Restaurant', category: 'Dinner · Trebinje', address: 'Trebinje Old Town', price: '€20–35',
    famous: 'Herzegovina grill & wine', tip: 'Relaxed dinner in Trebinje after Počitelj and the old town stroll.' }),
  diningCard(14, { name: 'Kod Asima', category: 'Dinner · Jajce', address: 'Jajce town centre', price: '€15–25',
    famous: 'Pliva trout & local plates', tip: 'Dinner in Jajce after the waterfall and Pliva Lakes.' }),
  diningCard(16, { name: 'Avlija Restaurant', category: 'Lunch · Sarajevo', address: 'Ilidža · near Vrelo Bosne', price: '€15–30',
    famous: 'Bosnian home cooking', tip: 'Lunch before Vrelo Bosne park and the horse carriage ride.' }),
  cafeCard(18, 'Fabrika Coffee', 'Specialty Coffee', 'Sarajevo city centre'),
  cafeCard(19, 'Café de Alma', 'Bosnian Coffee & Cakes', 'Baščaršija · Sarajevo'),
  cafeCard(0, 'Urban Café Sarajevo', 'Modern Coffee & Brunch', 'Sarajevo')
];

const dayBudget = {
  budget: { total: '€60–100 per person', includes: ['Budget hotels', 'Ćevapi & burek', 'Rental car share', 'Free viewpoints'] },
  mid: { total: '€140–220 per person', includes: ['4★ hotels', 'Sit-down meals', 'Park entries', 'Cable car & museums'] },
  luxury: { total: '€300–600 per person', includes: ['5★ hotels', 'Fine dining', 'Private driver', 'Spa & premium car'] }
};

const stop = (time, timeOfDay, name, desc, icon = 'cab') => ({
  time, timeOfDay, name, desc, transit: 'Rental car', icon, mapUrl: mapQuery(name)
});

const itineraries = [
  { day: 1, title: 'Welcome to Sarajevo', color: '#047857',
    routePreview: '9 stops · start 08:30 · end 20:00 · Old Town on foot',
    mapUrl: 'https://www.google.com/maps/dir/Ministry+of+Cejf+Sarajevo/Bascarsija+Sarajevo/Gazi+Husrev-beg+Mosque/Latin+Bridge+Sarajevo/Yellow+Fortress+Sarajevo',
    budget: dayBudget, photos: [img(0), img(1), img(2), img(3)],
    stops: [
      stop('08:30', 'morning', 'Ministry of Ćejf', 'Breakfast · Bosnian coffee & fresh burek · €12', 'walk'),
      stop('09:30', 'morning', 'Baščaršija', 'Ottoman bazaar · Sebilj Fountain · Kazandžiluk copper street', 'walk'),
      stop('11:00', 'morning', 'Miris Dunja', 'Traditional Bosnian coffee break', 'walk'),
      stop('12:30', 'afternoon', 'Gazi Husrev-beg Mosque', 'One of the Balkans\' most beautiful mosques', 'walk'),
      stop('13:30', 'afternoon', 'Ćevabdžinica Željo', 'Lunch · ćevapi · somun · ayran', 'walk'),
      stop('15:00', 'afternoon', 'Latin Bridge', 'WWI assassination site · Miljacka River', 'walk'),
      stop('16:30', 'afternoon', 'Sarajevo Cable Car', 'Ride to Trebević Mountain · city panorama', 'cab'),
      stop('18:30', 'evening', 'Yellow Fortress', 'Best sunset over Sarajevo', 'walk'),
      stop('20:00', 'night', 'Dveri Restaurant', 'Traditional Bosnian dinner', 'walk')
    ] },
  { day: 2, title: 'Konjic & Mostar', color: '#059669',
    routePreview: '6 stops · ≈2 hr driving · Sarajevo → Konjic → Mostar',
    mapUrl: 'https://www.google.com/maps/dir/Sarajevo/Konjic+Old+Bridge/Mostar/Stari+Most+Mostar',
    budget: dayBudget, photos: [img(4), img(5), img(6), img(7)],
    stops: [
      stop('08:00', 'morning', 'Drive to Konjic', 'Sarajevo → Konjic · 1 hour · Neretva valley', 'cab'),
      stop('09:30', 'morning', 'Konjic Old Stone Bridge', 'Old bridge · coffee by the Neretva River', 'walk'),
      stop('11:00', 'morning', 'Drive to Mostar', 'Konjic → Mostar · 1 hour', 'cab'),
      stop('12:30', 'afternoon', 'Šadrvan Restaurant', 'Lunch · Herzegovinian cuisine', 'walk'),
      stop('14:00', 'afternoon', 'Stari Most', 'Old Bridge · UNESCO icon · Kujundžiluk Bazaar', 'walk'),
      stop('18:30', 'evening', 'Stari Most Viewpoint', 'Sunset over the Neretva', 'walk'),
      stop('20:00', 'night', 'National Restaurant Cevabdzinica Tima-Irma', 'Dinner · ćevapi in Mostar', 'walk')
    ] },
  { day: 3, title: 'Blagaj & Kravica', color: '#065f46',
    routePreview: '5 stops · waterfalls & emerald springs',
    mapUrl: 'https://www.google.com/maps/dir/Mostar/Blagaj+Tekke/Kravica+Waterfalls/Mostar',
    budget: dayBudget, photos: [img(8), img(9), img(10), img(11)],
    stops: [
      stop('08:30', 'morning', 'Blagaj Tekke', 'Monastery beneath the cliff · Buna River spring', 'cab'),
      stop('11:00', 'morning', 'Restaurant Vrelo', 'Lunch beside the emerald Buna', 'walk'),
      stop('13:00', 'afternoon', 'Kravica Waterfalls', 'Swimming · photography · relax', 'cab'),
      stop('17:00', 'evening', 'Return to Mostar', 'Evening at leisure by the Neretva', 'cab')
    ] },
  { day: 4, title: 'Počitelj & Trebinje', color: '#0891b2',
    routePreview: '6 stops · Ottoman villages · southern Herzegovina',
    mapUrl: 'https://www.google.com/maps/dir/Mostar/Pocitelj/Trebinje/Arslanagic+Bridge',
    budget: dayBudget, photos: [img(12), img(13), img(14), img(15)],
    stops: [
      stop('08:00', 'morning', 'Počitelj', 'Historic Ottoman hillside village', 'cab'),
      stop('12:00', 'afternoon', 'River Restaurant', 'Lunch · Neretva valley', 'walk'),
      stop('14:00', 'afternoon', 'Trebinje Old Town', 'Stone squares · local cafés', 'cab'),
      stop('16:00', 'afternoon', 'Arslanagić Bridge', 'Ottoman bridge · calm reflections', 'walk'),
      stop('20:00', 'night', 'Studenac Restaurant', 'Dinner in Trebinje', 'walk')
    ] },
  { day: 5, title: 'Sutjeska National Park', color: '#0d9488',
    routePreview: 'Nature day · primeval forest · mountain viewpoints',
    mapUrl: 'https://www.google.com/maps/dir/Sarajevo/Sutjeska+National+Park/Perucica+forest',
    budget: dayBudget, photos: [img(16), img(17), img(18), img(0)],
    stops: [
      stop('07:00', 'morning', 'Drive to Sutjeska', 'Early start · 2.5 hours from Sarajevo', 'cab'),
      stop('10:00', 'morning', 'Perućica Primeval Forest', 'Ancient woodland · Europe\'s last primeval forest', 'walk'),
      stop('12:00', 'afternoon', 'Maglić Mountain Viewpoint', 'Bosnia\'s highest peak panorama', 'walk'),
      stop('14:00', 'afternoon', 'Drina River & Waterfalls', 'Emerald river · forest trails', 'walk'),
      stop('18:00', 'evening', 'Return to Sarajevo', 'Long drive · rest before Jajce', 'cab')
    ] },
  { day: 6, title: 'Jajce', color: '#115e59',
    routePreview: '5 stops · urban waterfall · lakes & watermills',
    mapUrl: 'https://www.google.com/maps/dir/Sarajevo/Jajce+Waterfall/Pliva+Lakes+Jajce',
    budget: dayBudget, photos: [img(1), img(2), img(3), img(4)],
    stops: [
      stop('08:00', 'morning', 'Drive to Jajce', 'Scenic drive through central Bosnia', 'cab'),
      stop('10:30', 'morning', 'Jajce Waterfall', 'River plunges through medieval town centre', 'walk'),
      stop('12:00', 'afternoon', 'Jajce Catacombs', 'Underground royal tombs', 'walk'),
      stop('14:00', 'afternoon', 'Pliva Lakes', 'Wooden watermills · emerald still water', 'cab'),
      stop('20:00', 'night', 'Kod Asima', 'Dinner in Jajce', 'walk')
    ] },
  { day: 7, title: 'Sarajevo & Departure', color: '#134e4a',
    routePreview: '6 stops · history · nature · shopping · airport',
    mapUrl: 'https://www.google.com/maps/dir/Tunnel+of+Hope+Museum/Vrelo+Bosne/SCC+Mall+Sarajevo/Sarajevo+Airport',
    budget: dayBudget, photos: [img(5), img(6), img(7), img(8)],
    stops: [
      stop('09:00', 'morning', 'Tunnel of Hope Museum', 'Siege history · underground lifeline', 'cab'),
      stop('11:30', 'morning', 'Avlija Restaurant', 'Lunch near Vrelo Bosne', 'walk'),
      stop('13:00', 'afternoon', 'Vrelo Bosne', 'Horse carriage ride · spring of the Bosna River', 'walk'),
      stop('15:30', 'afternoon', 'SCC Mall', 'Modern shopping · last souvenirs', 'cab'),
      stop('17:00', 'afternoon', 'Baščaršija Copper Market', 'Copper crafts · Old Bazaar', 'walk'),
      stop('19:00', 'evening', 'Sarajevo Airport', 'SJJ departure', 'cab')
    ] }
];

const PLAN = {
  meta: {
    city: 'Bosnia & Herzegovina', country: 'Bosnia and Herzegovina',
    tagline: 'Waterfalls, emerald rivers, Ottoman towns, and mountain landscapes — 7 perfect days.',
    badge: 'Discover · 2026 Edition', edition: '2026',
    stats: { chapters: 42, qrCodes: '150+', attractions: attractions.length, hotels: hotels.length, dining: dining.length, days: 7 },
    theme: {
      accent: '#047857', accentSoft: '#d1fae5', accentDeep: '#065f46',
      heroImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Stari_Most_Mostar_Bosnia_and_Herzegovina.jpg/960px-Stari_Most_Mostar_Bosnia_and_Herzegovina.jpg',
      transitLabel: 'Car', tube: '#047857', parks: '#059669', river: '#0891b2', gold: '#b8860b', navy: '#1a2744'
    }
  },
  welcome: {
    editorLetter: 'Bosnia & Herzegovina is unlike any other guide in this collection — a seven-day road trip through emerald rivers, Ottoman bazaars, cliffside monasteries and waterfalls you can swim beneath. From Sarajevo\'s Baščaršija to Mostar\'s Stari Most, Blagaj\'s tekke and Kravica\'s cascades, every day is a scenic drive through living history.\n\nSlow down. Rent a car. Scan the QR codes, follow the Neretva, and let Bosnia reveal its natural beauty as much as its historic cities.',
    howToUse: 'Point your phone at any QR code — the location opens in Google Maps. Colour-coded day chapters trace the full road trip. Rental car recommended for Days 2–6.\n\n— The Editors, Bosnia Bureau'
  },
  essentials: {
    currency: { label: 'KM Bosnian Mark (BAM)', note: 'Pegged to EUR. Cards in cities; cash for villages and small restaurants.' },
    power: { label: 'Type C & F · 230V', note: 'European two-pin plug.' },
    sim: { label: 'eSIM or BH Telecom', note: 'BH Telecom, HT Eronet, m:tel. eSIM on airport Wi-Fi at SJJ.' },
    language: { label: 'Bosnian · Croatian · Serbian', note: 'English in hotels and tourist sites. Google Translate helps on the road.' },
    tipping: { label: '5–10%', note: 'Appreciated in restaurants. Round up for long driving days.' },
    emergency: { label: '112 · 122 · 124', note: 'General · Police · Ambulance.' },
    tapWater: { label: 'Bottled recommended', note: 'Drink bottled water. Bosnian coffee and tea are safe everywhere.' },
    timezone: { label: 'CET · UTC+1', note: 'Summer CEST UTC+2.' }
  },
  arrival: [
    { step: '01', title: 'Immigration', desc: 'SJJ Sarajevo Airport. Visa-free for many nationalities incl. GCC. Have hotel and return ticket ready.' },
    { step: '02', title: 'SIM / eSIM', desc: 'Activate eSIM on airport Wi-Fi or buy BH Telecom at arrivals.' },
    { step: '03', title: 'Cash', desc: 'Withdraw KM 200 from a local ATM. Villages and roadside cafés prefer cash.' },
    { step: '04', title: 'Rent a car', desc: 'Essential for Days 2–6. Pick up at SJJ — Europcar, Sixt, local agencies. Automatic recommended.' },
    { step: '05', title: 'Drive to hotel', desc: 'SJJ to Sarajevo centre: 20 min. Mostar: 2 hours if starting south.' },
    { step: '06', title: 'Hotel', desc: 'Check-in from 14:00. Drop bags and start Day 1 in Baščaršija.' },
    { step: '07', title: 'First meal', desc: 'Ministry of Ćejf for Bosnian coffee and burek. Day 1 begins.' }
  ],
  packing: {
    spring: { months: 'MAR–MAY', temp: '8–18 °C · rain likely', items: ['Waterproof jacket', 'Walking shoes', 'Umbrella', 'Sunscreen', 'Offline maps'] },
    summer: { months: 'JUN–AUG', temp: '18–32 °C · swim at Kravica', items: ['Swimwear', 'Light layers', 'Sun hat', 'SPF 50', 'Water bottle'] },
    autumn: { months: 'SEP–NOV', temp: '10–20 °C · golden light', items: ['Layered clothing', 'Waterproof boots', 'Camera', 'Warm jumper', 'Hiking shoes'] },
    winter: { months: 'DEC–FEB', temp: '0–8 °C · snow in mountains', items: ['Heavy coat', 'Thermal layers', 'Waterproof boots', 'Gloves', 'Check mountain road status'] }
  },
  weatherTable: {
    rows: [
      { month: 'Mar', high: '12°C', low: '2°C', rain: 'Med', crowd: 'Low', price: '€€' },
      { month: 'Apr', high: '17°C', low: '6°C', rain: 'Med', crowd: 'Low', price: '€€' },
      { month: 'May', high: '22°C', low: '10°C', rain: 'Med', crowd: 'Med', price: '€€' },
      { month: 'Jun', high: '26°C', low: '14°C', rain: 'Low', crowd: 'Med', price: '€€€' },
      { month: 'Jul', high: '29°C', low: '16°C', rain: 'Low', crowd: 'High', price: '€€€' },
      { month: 'Aug', high: '29°C', low: '16°C', rain: 'Low', crowd: 'High', price: '€€€' },
      { month: 'Sep', high: '24°C', low: '12°C', rain: 'Med', crowd: 'Med', price: '€€' },
      { month: 'Oct', high: '18°C', low: '7°C', rain: 'Med', crowd: 'Low', price: '€€' },
      { month: 'Nov', high: '11°C', low: '3°C', rain: 'High', crowd: 'Low', price: '€€' }
    ],
    sweetSpot: 'May and September offer emerald rivers, comfortable driving weather and manageable crowds at Stari Most and Kravica. July–August is peak — book hotels and rent your car early.'
  },
  transport: {
    modes: [
      { icon: 'cab', name: 'Rental Car', price: '€25–50/day', desc: 'Best way to explore. Essential for Mostar, Blagaj, Kravica, Jajce and national parks.' },
      { icon: 'cab', name: 'Private Driver', price: '€80–150/day', desc: 'Comfortable alternative — popular with GCC families on multi-day road trips.' },
      { icon: 'bus', name: 'Intercity Bus', price: '€5–15', desc: 'Sarajevo–Mostar runs frequently. Less convenient for waterfall day trips.' },
      { icon: 'walk', name: 'Walk', price: 'Free', desc: 'Sarajevo Old Town and Mostar centre are compact — park and explore on foot.' },
      { icon: 'cab', name: 'Taxi', price: '€5–15', desc: 'Sarajevo and Mostar taxis are affordable for short hops.' }
    ],
    oysterTips: [
      { title: 'Rent a car — non-negotiable', desc: 'The extract is clear: rental car or private driver is the easiest way to reach Mostar, Blagaj, Kravica, Jajce and Sutjeska. Buses exist but schedules are infrequent for day trips.' },
      { title: 'Sarajevo → Mostar', desc: '2 hours via the Neretva valley. Stop at Konjic for coffee by the river — the scenic drive is part of the experience.' },
      { title: 'Kravica timing', desc: 'Arrive before 10:00 to swim without tour bus crowds. Parking €2, entry €5.' },
      { title: 'Mountain roads', desc: 'Sutjeska and Jajce routes are winding. Fill the tank, start early, avoid night driving.' }
    ],
    exit6Tip: 'When you exit SJJ, the Dinaric Alps rise immediately to the south. You are not in a typical European city break — you are at the start of a road trip through emerald rivers and Ottoman towns. Rent the car before you leave the airport.'
  },
  maps: {
    overview: {
      caption: 'Road-trip schematic — scan QR codes for exact driving directions.',
      markers: [
        { name: 'Baščaršija', type: 'attraction', lat: 43.8594, lng: 18.4311 },
        { name: 'Stari Most', type: 'attraction', lat: 43.3373, lng: 17.8150 },
        { name: 'Blagaj Tekke', type: 'attraction', lat: 43.2563, lng: 17.9033 },
        { name: 'Kravica Waterfalls', type: 'attraction', lat: 43.1553, lng: 17.6075 },
        { name: 'Jajce Waterfall', type: 'attraction', lat: 44.3425, lng: 17.2697 },
        { name: 'Počitelj', type: 'attraction', lat: 43.1333, lng: 17.7333 },
        { name: 'Swissôtel Sarajevo', type: 'hotel', lat: 43.8563, lng: 18.4131 },
        { name: 'Hotel Mepas', type: 'hotel', lat: 43.3438, lng: 17.8086 },
        { name: 'Ćevabdžinica Željo', type: 'dining', lat: 43.8590, lng: 18.4290 }
      ]
    }
  },
  attractions, hotels, dining, itineraries,
  rainyDay: [
    { name: 'Tunnel of Hope Museum', address: 'Butmir', desc: 'Siege history · indoor', img: img(0), mapUrl: mapQuery('Tunnel of Hope Museum') },
    { name: 'Gazi Husrev-beg Mosque', address: 'Baščaršija', desc: 'Ottoman architecture · courtyard', img: img(1), mapUrl: mapQuery('Gazi Husrev-beg Mosque') },
    { name: 'SCC Mall', address: 'Sarajevo', desc: 'Shopping · cafés · cinema', img: img(2), mapUrl: mapQuery('SCC Mall Sarajevo') },
    { name: 'Miris Dunja', address: 'Baščaršija', desc: 'Bosnian coffee · cosy interior', img: img(3), mapUrl: mapQuery('Miris Dunja') },
    { name: 'Trabzon Museum', address: '—', desc: '', img: img(4), mapUrl: mapQuery('Baščaršija') }
  ],
  sunnyDay: [
    { name: 'Kravica Waterfalls', address: 'Studenci', desc: 'Swim beneath the cascades', img: img(5), mapUrl: mapQuery('Kravica Waterfalls') },
    { name: 'Stari Most', address: 'Mostar', desc: 'Neretva panorama · bridge divers', img: img(6), mapUrl: mapQuery('Stari Most') },
    { name: 'Blagaj Tekke', address: 'Blagaj', desc: 'Cliff monastery · Buna spring', img: img(7), mapUrl: mapQuery('Blagaj Tekke') },
    { name: 'Yellow Fortress', address: 'Sarajevo', desc: 'Sunset over the city', img: img(8), mapUrl: mapQuery('Yellow Fortress') },
    { name: 'Vrelo Bosne', address: 'Ilidža', desc: 'Horse carriage · river source', img: img(9), mapUrl: mapQuery('Vrelo Bosne') },
    { name: 'Pliva Lakes', address: 'Jajce', desc: 'Watermills · emerald water', img: img(10), mapUrl: mapQuery('Pliva Lakes') }
  ],
  hiddenGems: [
    { name: 'Konjic Old Stone Bridge', desc: 'Coffee stop on the Neretva — few tourists pause here', img: img(11), mapUrl: mapQuery('Konjic Old Stone Bridge') },
    { name: 'Arslanagić Bridge', desc: 'Quiet Ottoman bridge near Trebinje', img: img(12), mapUrl: mapQuery('Arslanagić Bridge') },
    { name: 'Počitelj', desc: 'Hillside Ottoman village frozen in time', img: img(13), mapUrl: mapQuery('Počitelj') },
    { name: 'Kujundžiluk Bazaar', desc: 'Mostar copper lanes — less crowded than Sarajevo', img: img(14), mapUrl: mapQuery('Kujundžiluk Bazaar') },
    { name: 'Perućica Primeval Forest', desc: 'Ancient trees in Sutjeska — Europe\'s hidden wilderness', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Waterfalls_Kravica_5%2C_Bosnia_and_Herzegovina.jpg/960px-Waterfalls_Kravica_5%2C_Bosnia_and_Herzegovina.jpg', mapUrl: mapQuery('Sutjeska National Park') },
    { name: 'Jajce Catacombs', desc: 'Royal tombs beneath the fortress', img: img(16), mapUrl: mapQuery('Jajce Catacombs') }
  ],
  warnings: [
    { title: 'Rental car essential', desc: 'Buses between cities exist but day trips to Kravica, Blagaj and Sutjeska need a car or private driver.' },
    { title: 'Mountain driving', desc: 'Winding roads to Sutjeska and Jajce. Start early, fill the tank, no night driving.' },
    { title: 'Kravica crowds', desc: 'Tour buses arrive from 11:00. Swim before 10:00 for empty pools.' },
    { title: 'Cash in villages', desc: 'Počitelj, Blagaj and roadside stalls may not accept cards. Carry KM 100 in small notes.' },
    { title: 'Mosque dress code', desc: 'Cover shoulders and knees at Gazi Husrev-beg and Blagaj Tekke.' },
    { title: 'GCC consular check', desc: 'Bosnia does not host embassies for every GCC country. Verify consular arrangements before travel — especially Bahrain and Oman.' }
  ],
  shopping: {
    districts: [
      { name: 'Baščaršija Copper Market', desc: 'Handmade copper coffee sets · crafts', img: img(0), mapUrl: mapQuery('Baščaršija') },
      { name: 'Kujundžiluk Bazaar', desc: 'Mostar textiles · souvenirs', img: img(1), mapUrl: mapQuery('Kujundžiluk Bazaar') },
      { name: 'SCC Mall', desc: 'Modern shopping · international brands', img: img(2), mapUrl: mapQuery('SCC Mall Sarajevo') },
      { name: 'Old Bazaar Sarajevo', desc: 'Traditional crafts · lokum · coffee sets', img: img(3), mapUrl: mapQuery('Baščaršija') }
    ],
    brands: ['Bosnian copper džezva', 'Hand-woven carpets', 'Rahat lokum', 'Local honey', 'Herzegovina wine'],
    souvenirs: ['Copper coffee set', 'Handmade carpet', 'Bosnian coffee beans', 'Lokum box', 'Stari Most postcard'],
    vatTips: { rate: '17% PDV', note: 'Tax refund available on some purchases over KM 200 at registered stores.' }
  },
  budget: {
    budget: { daily: '€60–100 per person / day', accommodation: '€50 Hotel Story', food: '€10 ćevapi & burek', transport: '€25 car rental share', activities: '€5 park entries', extras: '€5 coffee & tips', tip: 'Eat ćevapi, sleep budget, drive yourself. Free viewpoints beat paid tours.' },
    mid: { daily: '€140–220 per person / day', accommodation: '€120 Courtyard Marriott', food: '€25 sit-down meals', transport: '€35 car rental', activities: '€15 cable car & museums', extras: '€15 coffee & tips' },
    luxury: { daily: '€300–600 per person / day', accommodation: '€250 Swissôtel', food: '€50 Dveri & fine dining', transport: '€100 private driver', activities: '€30 spa & entries', extras: '€40 wine & tips' }
  },
  family: {
    tip: 'Kravica waterfalls are perfect for children in summer. Cable car and Vrelo Bosne carriage ride delight all ages. Sutjeska forest walks suit older kids — not toddlers on rough trails.',
    rows: [
      { attraction: 'Kravica Waterfalls', desc: 'Swimming · shallow pools', goodForKids: true, stroller: false, babyChange: false, familyTicket: true },
      { attraction: 'Vrelo Bosne', desc: 'Horse carriage · flat paths', goodForKids: true, stroller: true, babyChange: true, familyTicket: true },
      { attraction: 'Sarajevo Cable Car', desc: 'Mountain ride · city views', goodForKids: true, stroller: true, babyChange: false, familyTicket: true },
      { attraction: 'Stari Most', desc: 'Bridge divers fascinate children', goodForKids: true, stroller: true, babyChange: false, familyTicket: true },
      { attraction: 'Tunnel of Hope Museum', desc: 'Older kids · history lesson', goodForKids: true, stroller: false, babyChange: false, familyTicket: true },
      { attraction: 'Sutjeska National Park', desc: 'Forest trails · rough paths', goodForKids: false, stroller: false, babyChange: false, familyTicket: true }
    ]
  },
  emergency: {
    numbers: [
      { label: '112', desc: 'General emergency', icon: 'emergency' },
      { label: '122', desc: 'Police', icon: 'police' },
      { label: '124', desc: 'Ambulance', icon: 'medical' },
      { label: '123', desc: 'Fire brigade', icon: 'fire' }
    ],
    hospitals: [
      { name: 'Clinical Center University of Sarajevo', address: 'Sarajevo · KCC', icon: 'hospital', mapUrl: mapQuery('Clinical Center University of Sarajevo') },
      { name: 'University Clinical Hospital Mostar', address: 'Mostar', icon: 'hospital', mapUrl: mapQuery('University Clinical Hospital Mostar') }
    ],
    embassies: [
      { country: 'Saudi Arabia', address: 'Kalemova 40 · 71000 Sarajevo', phone: '+387 33 211 861', emergency: '+387 33 215 265', website: 'https://ba.saudiembassy.sa', hours: 'Mon–Fri 09:00–16:00', icon: 'embassy', mapUrl: 'https://www.google.com/maps/search/?api=1&query=Saudi+Embassy+Sarajevo+Kalemova+40' },
      { country: 'United Arab Emirates', address: 'Sarajevo · confirm before travel', phone: '+387 33 567 000', emergency: 'Contact MOFAIC', website: 'https://www.mofaic.gov.ae', hours: 'Mon–Fri 09:00–15:00', icon: 'embassy', mapUrl: 'https://www.google.com/maps/search/?api=1&query=UAE+Embassy+Sarajevo' },
      { country: 'Qatar', address: 'Sarajevo · confirm before travel', phone: '+387 33 206 000', emergency: 'Contact MOFA Qatar', website: 'https://mofa.gov.qa', hours: 'Mon–Fri 09:00–15:00', icon: 'embassy', mapUrl: 'https://www.google.com/maps/search/?api=1&query=Qatar+Embassy+Sarajevo' },
      { country: 'Kuwait', address: 'Sarajevo · confirm before travel', phone: '+387 33 668 000', emergency: 'Contact MOFA Kuwait', website: 'https://www.mofa.gov.kw', hours: 'Mon–Fri 09:00–15:00', icon: 'embassy', mapUrl: 'https://www.google.com/maps/search/?api=1&query=Kuwait+Embassy+Sarajevo' },
      { country: 'Bahrain', address: 'Non-resident · accredited to Bosnia — verify current arrangement', phone: 'Verify with MOFA', emergency: 'May be handled via Riyadh or regional mission', website: 'https://www.mofa.gov.bh', hours: 'Confirm before departure', icon: 'embassy', mapUrl: 'https://www.google.com/maps/search/?api=1&query=Bahrain+Embassy+Sarajevo' },
      { country: 'Oman', address: 'Non-resident · accredited to Bosnia — verify current arrangement', phone: 'Verify with MOFA', emergency: 'May be handled via non-resident embassy', website: 'https://www.oman.org', hours: 'Confirm before departure', icon: 'embassy', mapUrl: 'https://www.google.com/maps/search/?api=1&query=Oman+Embassy+Sarajevo' }
    ],
    lostPassport: 'Report to police (122) and obtain a report. Contact your embassy in Sarajevo for an emergency travel document. Bosnia does not host embassies for every GCC country — verify consular arrangements before you travel.'
  },
  phrases: [
    { english: 'Hello', use: 'Zdravo or Merhaba — both work' },
    { english: 'Thank you', use: 'Hvala — essential everywhere' },
    { english: 'Bosnian coffee, please', use: 'Bosanska kafa, molim' },
    { english: 'How much?', use: 'Koliko košta? — markets and taxis' },
    { english: 'Where is...?', use: 'Gdje je...? — road navigation' },
    { english: 'Delicious', use: 'Ukusno — your hosts will smile' },
    { english: 'Slowly, please', use: 'Polako — mountain roads' },
    { english: 'Airport', use: 'Aerodrom — Day 7 departure' }
  ],
  cheatSheet: {
    title: 'One-Page Cheat Sheet', subtitle: 'Screenshot before your flight.',
    emergency: [{ label: '112', value: 'General' }, { label: '122', value: 'Police' }, { label: '124', value: 'Ambulance' }],
    transport: [{ label: '€25–50/day', value: 'Rental car' }, { label: '2 hr', value: 'Sarajevo–Mostar' }, { label: 'Private driver', value: '€80–150/day' }],
    money: [{ label: 'KM (BAM)', value: 'Pegged to EUR' }, { label: 'Cash in villages', value: 'Carry KM 100' }, { label: 'Tip 5–10%', value: 'Restaurants' }],
    apps: [{ name: 'Google Maps', use: 'Offline maps essential' }, { name: 'Maps.me', use: 'Backup navigation' }, { name: 'Google Translate', use: 'Bosnian offline pack' }],
    topQrCodes: [
      { name: 'Sarajevo Airport (SJJ)', mapUrl: 'https://www.google.com/maps/search/?api=1&query=Sarajevo+Airport' },
      { name: 'Stari Most', mapUrl: mapQuery('Stari Most') },
      { name: 'Kravica Waterfalls', mapUrl: mapQuery('Kravica Waterfalls') },
      { name: 'Baščaršija', mapUrl: mapQuery('Baščaršija') },
      { name: 'Blagaj Tekke', mapUrl: mapQuery('Blagaj Tekke') },
      { name: 'Swissôtel Sarajevo', mapUrl: mapQuery('Swissôtel Sarajevo') },
      { name: 'Clinical Center Sarajevo', mapUrl: mapQuery('Clinical Center University of Sarajevo') },
      { name: 'Saudi Embassy Sarajevo', mapUrl: 'https://www.google.com/maps/search/?api=1&query=Saudi+Embassy+Sarajevo' }
    ]
  },
  etiquette: [
    { rule: 'Coffee is ritual', desc: 'Bosnian coffee is served thick in a džezva with lokum. Never rush it — sip slowly.' },
    { rule: 'Remove shoes at mosques', desc: 'Cover shoulders and knees. Women may want a scarf at Gazi Husrev-beg and Blagaj Tekke.' },
    { rule: 'Slow travel', desc: 'This is a road trip, not a city sprint. Build in time for riverside coffee and unplanned photo stops.' },
    { rule: 'Respect recent history', desc: 'The siege of Sarajevo is living memory. Listen more than you speak at the Tunnel of Hope.' },
    { rule: 'Photograph bridges respectfully', desc: 'Stari Most is a symbol of reconciliation — not just an Instagram backdrop.' },
    { rule: 'GCC consular awareness', desc: 'Verify embassy details before departure. Bahrain and Oman may use non-resident missions.' }
  ]
};

// Fix rainyDay typo entry
PLAN.rainyDay[4] = { name: 'Fabrika Coffee', address: 'Sarajevo', desc: 'Specialty coffee · rainy afternoon', img: img(4), mapUrl: mapQuery('Fabrika Coffee') };

fs.writeFileSync(OUT, `/**
 * DISCOVER Bosnia & Herzegovina — 7-Day Road Trip
 * Real place photos via Wikimedia Commons (CC-licensed)
 */
const PLAN = ${JSON.stringify(PLAN, null, 2)};
`);
console.log(`Wrote ${OUT}`);
console.log(`  attractions: ${attractions.length}, hotels: ${hotels.length}, dining: ${dining.length}, days: ${itineraries.length}`);
