import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const OUT = path.join(root, 'data', 'istanbul.js');

const PLACEHOLDER = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Hagia_Sophia_Mars_2013.jpg/960px-Hagia_Sophia_Mars_2013.jpg';

function img() {
  return PLACEHOLDER;
}

function mapQuery(name) {
  const q = /\bistanbul\b/i.test(name) ? name : `${name} Istanbul`;
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
    nearbyToilets: nearbyToilets || 'On-site or nearby cafés and mosques.',
    nearbyAtm: nearbyAtm || 'Ziraat · İş Bankası · Garanti BBVA near tram stops',
    didYouKnow, localSecret,
    instagram: {
      sunset: photoSpot,
      sunrise: photoSpot,
      drone: 'Restricted near airports and military zones — check DGCA rules',
      settings: 'f/8 · ISO 200 · 24–70mm'
    },
    photos: {
      hero: img(),
      detail: img(),
      photoSpot: img(),
      map: img(),
      heroPosition: 'center 40%'
    },
    seasonalPhotos: {
      spring: img(),
      summer: img(),
      autumn: img(),
      christmas: img()
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
      exterior: img(), lobby: img(), room: img(), luxuryRoom: img(),
      restaurant: img(), pool: img(), rooftop: img(), breakfast: img(),
      spa: img(), view: img()
    }
  };
}

function diningCard(i, {
  name, category, address, price, famous, halal = true, vegetarian = true,
  reservation, wait, michelin = '—', kidsFriendly = 'Yes', dressCode = 'Smart casual',
  tip, bookUrl, dishes
}) {
  const defaultDishes = dishes || [
    { name: famous, img: img(), desc: `Signature dish at ${name}.` },
    { name: 'Meze Selection', img: img(), desc: 'Seasonal Turkish starters — ask your server.' },
    { name: 'Grilled Fish', img: img(), desc: 'Fresh Bosphorus catch when available.' },
    { name: 'Ottoman Main', img: img(), desc: 'Slow-cooked heritage recipe.' },
    { name: 'Turkish Dessert', img: img(), desc: 'Baklava, künefe, or sutlac to finish.' }
  ];
  return {
    name, category, address, price, famous, halal, vegetarian, reservation, wait,
    michelin, kidsFriendly, dressCode, tip,
    mapUrl: mapQuery(name),
    bookUrl: bookUrl || mapQuery(name),
    dishes: defaultDishes,
    photos: {
      signature: img(), interior: img(), exterior: img(), dessert: img(), coffee: img()
    }
  };
}

function cafeCard(i, name, famous, address) {
  return diningCard(i, {
    name,
    category: 'Café · Coffee',
    address,
    price: '₺80–₺250',
    famous,
    reservation: 'Walk-in',
    wait: '5–20 min at peak',
    dressCode: 'Casual',
    tip: 'Istanbul cafés fill quickly on weekends — arrive before 09:30 for a terrace table.',
    dishes: [
      { name: famous, img: img(), desc: 'House specialty — order this first.' },
      { name: 'Turkish Coffee', img: img(), desc: 'Thick, unfiltered, served with lokum.' },
      { name: 'Menemen', img: img(), desc: 'Scrambled eggs with peppers and tomato.' },
      { name: 'Simit & Tea', img: img(), desc: 'Sesame ring bread with çay — Istanbul classic.' },
      { name: 'Baklava', img: img(), desc: 'Sweet finish with pistachios and syrup.' }
    ]
  });
}

const attractions = [
  attractionCard(0, {
    name: 'Hagia Sophia',
    address: 'Sultanahmet Meydanı · Fatih · 34122',
    hours: '09:00–19:00 · closed Fri prayer 12:30–14:30',
    tube: 'Tram T1 · Sultanahmet · 2 min walk',
    ticket: 'Free entry · mosque dress code applies',
    bestArrival: '09:00',
    waitSummer: '20–45 min security',
    waitWinter: '10–20 min',
    photoSpot: 'From Sultanahmet Square — full dome and minarets at golden hour.',
    lens: '16–35mm',
    tip: 'Arrive at opening. Remove shoes, women need headscarf. Byzantine mosaics meet Ottoman calligraphy — allow 90 minutes.',
    bookUrl: 'https://ayasofyacamii.gov.tr/',
    avgVisit: '90 min',
    crowd: { morning: 3, afternoon: 5, evening: 4 },
    nearby: [
      { name: 'Blue Mosque', walk: '3 min' },
      { name: 'Sultanahmet Square', walk: '1 min' },
      { name: 'Basilica Cistern', walk: '6 min' },
      { name: 'Seven Hills Restaurant', walk: '2 min' }
    ],
    nearbyCafes: 'Hafız Mustafa · Sultanahmet Köftecisi',
    nearbyRestaurants: 'Seven Hills · Deraliye Ottoman Cuisine · Matbah',
    didYouKnow: 'Built in 537 AD as a Byzantine cathedral, it became a mosque in 1453 and served as a museum before reopening as a mosque in 2020.',
    localSecret: 'Look up at the Deësis mosaic in the upper gallery — one of the finest surviving Byzantine artworks in the world.'
  }),
  attractionCard(2, {
    name: 'Blue Mosque',
    address: 'Sultanahmet Meydanı · Fatih · 34122',
    hours: 'Open outside prayer times · closed Fri 12:00–14:30',
    tube: 'Tram T1 · Sultanahmet',
    ticket: 'Free · donation welcome',
    bestArrival: '10:45',
    waitSummer: '15–30 min',
    waitWinter: '5–10 min',
    photoSpot: 'From the fountain courtyard — six minarets and cascading domes.',
    lens: '24mm interior · 16mm exterior',
    tip: 'Active mosque — dress modestly, remove shoes. Iznik tile interior glows in morning light. Check prayer schedule before visiting.',
    avgVisit: '45 min',
    nearby: [
      { name: 'Hagia Sophia', walk: '3 min' },
      { name: 'German Fountain', walk: '2 min' },
      { name: 'Arasta Bazaar', walk: '5 min' }
    ],
    didYouKnow: 'Sultan Ahmed I commissioned six minarets to rival Mecca — a scandal that required a seventh minaret be added to the Holy Mosque.',
    localSecret: 'The northwest corner courtyard offers the quietest entrance with fewer tour groups.'
  }),
  attractionCard(4, {
    name: 'Sultanahmet Square',
    address: 'Hippodrome · Fatih · 34122',
    hours: 'Always open',
    tube: 'Tram T1 · Sultanahmet',
    ticket: 'Free',
    bestArrival: '11:45',
    photoSpot: 'Egyptian Obelisk with Hagia Sophia dome behind.',
    lens: '24–70mm',
    tip: 'Walk the full Hippodrome axis: German Fountain, Obelisk of Theodosius, Serpent Column, and Constantine Column.',
    avgVisit: '30 min',
    nearby: [
      { name: 'Hagia Sophia', walk: '1 min' },
      { name: 'Blue Mosque', walk: '2 min' },
      { name: 'Basilica Cistern', walk: '5 min' }
    ],
    didYouKnow: 'This was the centre of Byzantine Constantinople — chariot races once drew 100,000 spectators here.',
    localSecret: 'The bronze Serpent Column base still bears ancient Greek inscriptions most tourists walk past.'
  }),
  attractionCard(6, {
    name: 'Basilica Cistern',
    address: 'Alemdar Mah. · Fatih · 34110',
    hours: '09:00–19:00 · daily',
    tube: 'Tram T1 · Sultanahmet · 6 min walk',
    ticket: '₺600 adult · book online',
    bestArrival: '13:30',
    waitSummer: '20–40 min',
    waitWinter: '10–15 min',
    photoSpot: 'Medusa head column — atmospheric underground reflections.',
    lens: '24mm · no flash',
    tip: 'Underground Byzantine reservoir with 336 marble columns. Cool in summer — bring a light layer. Medusa heads are at the far end.',
    bookUrl: 'https://www.yerebatan.com/',
    avgVisit: '45 min',
    nearby: [
      { name: 'Hagia Sophia', walk: '6 min' },
      { name: 'Topkapı Palace', walk: '8 min' },
      { name: 'Arasta Bazaar', walk: '4 min' }
    ],
    didYouKnow: 'Built in the 6th century to store water for the Great Palace — it could hold 80,000 cubic metres.',
    localSecret: 'The "Crying Column" with its peacock-eye pattern is said to grant wishes if you rotate your thumb in the hole.'
  }),
  attractionCard(8, {
    name: 'Topkapı Palace',
    address: 'Cankurtaran · Fatih · 34122',
    hours: '09:00–18:00 · closed Tue',
    tube: 'Tram T1 · Sultanahmet · 8 min walk',
    ticket: '₺750 palace · separate Harem ticket',
    bestArrival: '09:30',
    waitSummer: '30–60 min',
    waitWinter: '15–25 min',
    photoSpot: 'Fourth courtyard terrace — Golden Horn and Bosphorus panorama.',
    lens: '24–70mm',
    tip: 'Allow 3 hours for palace and Harem. Treasury and Spoonmaker Diamond are highlights. Buy Harem ticket at entrance or online.',
    bookUrl: 'https://www.millisaraylar.gov.tr/',
    avgVisit: '3 hours',
    crowd: { morning: 2, afternoon: 5, evening: 3 },
    nearby: [
      { name: 'Imperial Harem', walk: 'Inside palace' },
      { name: 'Gülhane Park', walk: '5 min' },
      { name: 'Sultanahmet Square', walk: '10 min' }
    ],
    didYouKnow: 'Home to Ottoman sultans for 400 years — the palace complex has four courtyards and over 300 rooms.',
    localSecret: 'The Baghdad Pavilion in the fourth courtyard has the best Bosphorus views and fewest visitors.'
  }),
  attractionCard(10, {
    name: 'Imperial Harem',
    address: 'Topkapı Palace · Fatih',
    hours: '09:00–17:00 · last entry 16:00',
    tube: 'Tram T1 · Sultanahmet',
    ticket: '₺425 separate · or combo ticket',
    bestArrival: '12:45',
    waitSummer: '20–30 min',
    waitWinter: '10 min',
    photoSpot: 'Courtyard of the Black Eunuchs — tiled arches and marble.',
    lens: '24mm · no flash indoors',
    tip: 'Separate timed entry within Topkapı. The tiled chambers and Privy Chamber of Murat III are unmissable. Allow 60–90 minutes.',
    avgVisit: '60–90 min',
    nearby: [
      { name: 'Topkapı Palace', walk: 'Inside complex' },
      { name: 'Pandeli Restaurant', walk: '10 min' }
    ],
    didYouKnow: 'At its peak the Harem housed over 400 women and was governed by the Valide Sultan — the sultan\'s mother.',
    localSecret: 'Visit right after lunch when tour groups leave for the Spice Bazaar — the tiled rooms are quieter.'
  }),
  attractionCard(12, {
    name: 'Spice Bazaar',
    address: 'Rüstem Paşa · Fatih · 34116',
    hours: '08:00–19:30 · closed Sun',
    tube: 'Tram T1 · Eminönü · 3 min walk',
    ticket: 'Free entry',
    bestArrival: '15:00',
    photoSpot: 'Main vaulted hall — pyramids of spices and Turkish delight.',
    lens: '35mm',
    tip: 'Smaller and more atmospheric than Grand Bazaar. Buy saffron, sumac, and lokum here. Vendors offer tastings — polite to buy something.',
    avgVisit: '45 min',
    nearby: [
      { name: 'Grand Bazaar', walk: '12 min' },
      { name: 'New Mosque', walk: '2 min' },
      { name: 'Galata Bridge', walk: '8 min' }
    ],
    didYouKnow: 'Built in 1664 with revenues from Ottoman Egypt — locals still call it the Egyptian Bazaar.',
    localSecret: 'Arasta Bazaar behind the Blue Mosque is quieter with better textile prices.'
  }),
  attractionCard(14, {
    name: 'Grand Bazaar',
    address: 'Beyazıt · Fatih · 34126',
    hours: '08:30–19:00 · closed Sun',
    tube: 'Tram T1 · Beyazıt · 2 min walk',
    ticket: 'Free entry',
    bestArrival: '16:30',
    photoSpot: 'Jewellery han entrance — vaulted ceilings and lantern light.',
    lens: '24–35mm',
    tip: '4,000 shops across 61 streets. Bargain politely — start at 50% of asking price. Gold and carpets need expertise; ceramics and lamps are safer buys.',
    avgVisit: '90 min',
    nearby: [
      { name: 'Spice Bazaar', walk: '12 min' },
      { name: 'Süleymaniye Mosque', walk: '10 min' },
      { name: 'Nuruosmaniye Mosque', walk: '5 min' }
    ],
    didYouKnow: 'One of the oldest covered markets in the world — trading here since 1461.',
    localSecret: 'Ferace Street on the periphery has better prices than the main tourist corridors.'
  }),
  attractionCard(16, {
    name: 'Süleymaniye Mosque',
    address: 'Prof. Sıddık Sami Onar Cd. · Fatih · 34116',
    hours: 'Open outside prayer · closed Fri 12:00–14:30',
    tube: 'Tram T1 · Vefa · 8 min walk',
    ticket: 'Free',
    bestArrival: '18:30',
    photoSpot: 'From the terrace — Golden Horn sunset with domes in foreground.',
    lens: '16–35mm',
    tip: 'Mimar Sinan\'s masterpiece — quieter than Blue Mosque with equal grandeur. Combine with sunset over Golden Horn.',
    avgVisit: '45 min',
    crowd: { morning: 2, afternoon: 3, evening: 4 },
    nearby: [
      { name: 'Grand Bazaar', walk: '10 min' },
      { name: 'Hamdi Restaurant', walk: '12 min' },
      { name: 'Galata Bridge', walk: '15 min' }
    ],
    didYouKnow: 'Sinan considered this his finest work — the dome is nearly as large as Hagia Sophia\'s.',
    localSecret: 'The cemetery behind the mosque holds Sinan\'s tomb and offers a peaceful Golden Horn viewpoint.'
  }),
  attractionCard(18, {
    name: 'Galata Bridge',
    address: 'Eminönü–Karaköy · Golden Horn',
    hours: 'Always open · fishermen 24h',
    tube: 'Tram T1 · Eminönü or Karaköy',
    ticket: 'Free',
    bestArrival: '21:00',
    photoSpot: 'Lower level seafood restaurants — fishing rods and mosque silhouettes.',
    lens: '35mm · 50mm',
    tip: 'Walk the lower level at night for balık ekmek stalls and fisherman atmosphere. Upper level has tram and pedestrian walkway.',
    avgVisit: '30 min',
    nearby: [
      { name: 'Spice Bazaar', walk: '8 min' },
      { name: 'Galata Tower', walk: '12 min uphill' },
      { name: 'Hamdi Restaurant', walk: '10 min' }
    ],
    didYouKnow: 'The current bridge dates to 1994 — the fifth bridge at this strategic Golden Horn crossing.',
    localSecret: 'Sunset from Karaköy side looking toward Süleymaniye is one of Istanbul\'s most underrated free views.'
  }),
  attractionCard(0, {
    name: 'Galata Tower',
    address: 'Bereketzade · Beyoğlu · 34421',
    hours: '08:30–23:00',
    tube: 'Metro M2 · Şişhane · 5 min walk',
    ticket: '₺650 adult · book online',
    bestArrival: '09:30',
    waitSummer: '30–60 min',
    waitWinter: '15–25 min',
    photoSpot: 'Observation deck — 360° views of Golden Horn and Bosphorus.',
    lens: '24mm',
    tip: 'Book timed entry online. Early morning has clearest views before haze. Elevator plus stairs to top.',
    bookUrl: 'https://www.galataport.com/',
    avgVisit: '60 min',
    nearby: [
      { name: 'Galataport', walk: '8 min' },
      { name: 'Istiklal Street', walk: '10 min' },
      { name: 'Petra Roasting Co.', walk: '5 min' }
    ],
    didYouKnow: 'Built in 1348 by Genoese merchants — it once dominated the Genoese colony of Galata.',
    localSecret: 'Walk down the side streets toward Karaköy for street art and boutique cafés away from tower crowds.'
  }),
  attractionCard(2, {
    name: 'Galataport',
    address: 'Kılıçali Paşa · Karaköy · 34425',
    hours: '10:00–22:00 · shops & dining',
    tube: 'Tram T1 · Karaköy · 3 min walk',
    ticket: 'Free entry',
    bestArrival: '15:00',
    photoSpot: 'Waterfront promenade — cruise ships and Galata Tower backdrop.',
    lens: '24–70mm',
    tip: 'Modern waterfront development with museums, dining, and cruise terminal. Peninsula Hotel sits at the entrance. Good rainy-day option.',
    avgVisit: '90 min',
    nearby: [
      { name: 'Galata Tower', walk: '8 min' },
      { name: 'The Peninsula Istanbul', walk: '2 min' },
      { name: 'Karaköy Lokantası', walk: '5 min' }
    ],
    didYouKnow: 'Opened in 2021 on the historic Ottoman passenger port — Istanbul Modern relocated here.',
    localSecret: 'The underground cruise terminal roof is a landscaped park most visitors miss.'
  }),
  attractionCard(4, {
    name: 'Bosphorus Cruise',
    address: 'Eminönü or Kabataş piers · departures hourly',
    hours: 'Short tours 10:00–17:00 · full day seasonal',
    tube: 'Tram T1 · Eminönü · Kabataş ferry',
    ticket: '₺150–₺600 · public ferry or private',
    bestArrival: '17:00',
    waitSummer: 'Book ahead for sunset',
    waitWinter: 'Walk-on often OK',
    photoSpot: 'Upper deck passing Ortaköy Mosque — classic Istanbul silhouette.',
    lens: '70–200mm from deck',
    tip: 'Public Şehir Hatları ferry is best value. Short tour to second bridge and back takes 90 min. Sunset departures sell out in summer.',
    bookUrl: 'https://www.sehirhatlari.istanbul/',
    avgVisit: '90 min–2 hours',
    nearby: [
      { name: 'Galataport', walk: '10 min' },
      { name: 'Ortaköy Mosque', walk: 'Ferry stop' },
      { name: 'Dolmabahçe Palace', walk: 'Ferry stop' }
    ],
    didYouKnow: 'The Bosphorus strait divides Europe and Asia — Napoleon called Istanbul "the queen of cities" from these waters.',
    localSecret: 'Take the full public ferry to Anadolu Kavağı for village fish lunch — far better than tourist loop boats.'
  }),
  attractionCard(6, {
    name: 'Ortaköy Mosque',
    address: 'Mecidiye Köprüsü · Beşiktaş · 34347',
    hours: 'Open outside prayer times',
    tube: 'Ferry · Ortaköy · or taxi from Beşiktaş',
    ticket: 'Free',
    bestArrival: '15:00',
    photoSpot: 'From Bosphorus shore — baroque mosque with bridge backdrop.',
    lens: '24–70mm',
    tip: 'Combine with kumpir potato stalls and waterfront walk. Most photogenic at sunset from a Bosphorus cruise.',
    avgVisit: '30 min',
    nearby: [
      { name: 'House Café Ortaköy', walk: '2 min' },
      { name: 'Bosphorus waterfront', walk: '1 min' },
      { name: 'Çırağan Palace Kempinski', walk: '10 min' }
    ],
    didYouKnow: 'Built in 1854 by Sultan Abdülmecid — neo-baroque design by Armenian architect Garabet Balyan.',
    localSecret: 'Weekday mornings before 10:00 you can photograph the mosque without the weekend kumpir crowds.'
  }),
  attractionCard(8, {
    name: 'Dolmabahçe Palace',
    address: 'Vişnezade · Beşiktaş · 34357',
    hours: '09:00–16:00 · closed Mon & Thu',
    tube: 'Tram T1 · Kabataş · 5 min walk',
    ticket: '₺750 palace · ₺120 Harem add-on',
    bestArrival: '09:30',
    waitSummer: '30–45 min',
    waitWinter: '15–20 min',
    photoSpot: 'Ceremonial Hall — world\'s largest Bohemian crystal chandelier.',
    lens: 'No flash · 24mm',
    tip: 'Ottoman\'s last palace — guided tour mandatory, no photos inside main halls. Crystal staircase and Atatürk\'s room are highlights.',
    bookUrl: 'https://www.millisaraylar.gov.tr/',
    avgVisit: '2 hours',
    nearby: [
      { name: 'Ortaköy Mosque', walk: '15 min' },
      { name: 'Kabataş ferry', walk: '5 min' },
      { name: 'Banyan Restaurant', walk: '12 min' }
    ],
    didYouKnow: 'Built in 1856 at enormous cost — it hastened the Ottoman Empire\'s bankruptcy.',
    localSecret: 'The palace gates facing the Bosphorus are free to photograph — arrive before opening for empty promenade shots.'
  }),
  attractionCard(10, {
    name: 'Rumeli Fortress',
    address: 'Yahya Kemal Cd. · Sarıyer · 34470',
    hours: '09:00–19:00 · closed Mon',
    tube: 'Bus or taxi from Bebek · 20 min',
    ticket: '₺130 adult',
    bestArrival: '20:00 summer · 17:00 winter',
    photoSpot: 'Battlements overlooking the Bosphorus narrows.',
    lens: '24–70mm',
    tip: 'Built in four months before the 1453 conquest. Evening concerts in summer. Steep stairs — wear proper shoes.',
    avgVisit: '60 min',
    nearby: [
      { name: 'Sunset Grill', walk: '5 min' },
      { name: 'Bebek waterfront', walk: '15 min' }
    ],
    didYouKnow: 'Mehmet the Conqueror built this fortress in 1452 to choke Byzantine supply lines on the Bosphorus.',
    localSecret: 'The small mosque inside the fortress has a terrace view rivalling any paid Bosphorus restaurant.'
  }),
  attractionCard(12, {
    name: 'Maiden\'s Tower',
    address: 'Üsküdar · Salacak · 34668',
    hours: '09:00–19:00 · ferry every 15 min',
    tube: 'Ferry from Kabataş or Üsküdar',
    ticket: '₺475 incl. ferry',
    bestArrival: 'Morning before 11:00',
    waitSummer: '20 min ferry queue',
    waitWinter: '5–10 min',
    photoSpot: 'From Üsküdar shore at sunset — tower silhouetted against sky.',
    lens: '70–200mm from shore · 24mm on island',
    tip: 'Iconic islet on the Bosphorus. Restaurant on site — book dinner for special occasions. Ferry from Üsküdar is shortest ride.',
    bookUrl: 'https://www.kizkulesi.gov.tr/',
    avgVisit: '90 min',
    nearby: [
      { name: 'Üsküdar waterfront', walk: 'Ferry' },
      { name: 'Çamlıca Mosque', walk: 'Taxi 15 min' },
      { name: 'Kanaat Lokantası', walk: '10 min' }
    ],
    didYouKnow: 'A lighthouse has stood on this rock since ancient times — legends tell of a princess locked here to escape a snake prophecy.',
    localSecret: 'Photograph the tower from Salacak café terraces with tea — better composition than from the island itself.'
  }),
  attractionCard(14, {
    name: 'Çamlıca Mosque',
    address: 'Çamlıca Tepesi · Üsküdaar · 34692',
    hours: 'Open outside prayer · visitor centre 09:00–18:00',
    tube: 'Metro M5 · Çamlıca · taxi to hilltop',
    ticket: 'Free',
    bestArrival: '11:00',
    photoSpot: 'Main courtyard — six minarets with city panorama.',
    lens: '16–35mm',
    tip: 'Turkey\'s largest mosque — opened 2019. Art gallery and library on site. Combine with Çamlıca Hill viewpoint.',
    avgVisit: '45 min',
    nearby: [
      { name: 'Çamlıca Hill', walk: '5 min' },
      { name: 'Maiden\'s Tower view', walk: 'Viewpoint' },
      { name: 'Kadıköy', walk: 'Ferry 20 min' }
    ],
    didYouKnow: 'Can hold 63,000 worshippers — the main dome is 72 metres high, symbolising the 72 nations of the world.',
    localSecret: 'The library downstairs has rare Ottoman manuscripts and is almost always empty.'
  }),
  attractionCard(16, {
    name: 'Kadıköy Market',
    address: 'Hasanpaşa · Kadıköy · 34722',
    hours: '08:00–20:00 · busiest Sat morning',
    tube: 'Ferry · Kadıköy · Metro M4',
    ticket: 'Free',
    bestArrival: '16:00',
    photoSpot: 'Fish market alley — colourful stalls and local energy.',
    lens: '35mm',
    tip: 'Asian side\'s food heart. Try street kokoreç, midye dolma, and fresh juice. Less touristy than European side markets.',
    avgVisit: '90 min',
    nearby: [
      { name: 'Moda neighbourhood', walk: '15 min' },
      { name: 'Çiya Sofrası', walk: '10 min' },
      { name: 'Ferry to Eminönü', walk: '5 min' }
    ],
    didYouKnow: 'Kadıköy has been a market town since ancient Chalcedon — older than Byzantium itself.',
    localSecret: 'Ali Muhiddin Hacı Bekir on the market edge sells the original Turkish delight recipe from 1777.'
  }),
  attractionCard(18, {
    name: 'Balat',
    address: 'Balat · Fatih · 34087',
    hours: 'Always open · cafés from 09:00',
    tube: 'Bus 99A from Eminönü · or taxi',
    ticket: 'Free',
    bestArrival: '10:00',
    photoSpot: 'Colourful hillside houses on Kiremit Street.',
    lens: '35mm · 50mm portraits',
    tip: 'UNESCO-listed neighbourhood of rainbow houses, synagogues, and artisan cafés. Respect residents — this is a living community.',
    avgVisit: '2 hours',
    nearby: [
      { name: 'Fener', walk: '10 min' },
      { name: 'Forno Balat', walk: '3 min' },
      { name: 'Velvet Café', walk: '5 min' }
    ],
    didYouKnow: 'Historic Greek and Jewish quarter — one of Istanbul\'s oldest continuously inhabited neighbourhoods.',
    localSecret: 'Church of St George in nearby Fener is the seat of the Ecumenical Patriarch — open mornings only.'
  }),
  attractionCard(0, {
    name: 'Eyüp Mosque',
    address: 'Eyüp Sultan · Eyüpsultan · 34050',
    hours: 'Open outside prayer · busiest Fri',
    tube: 'Teleferik · Eyüp · or bus from Eminönü',
    ticket: 'Free',
    bestArrival: '14:00',
    photoSpot: 'Courtyard fountain — Ottoman tilework and cypress trees.',
    lens: '24mm',
    tip: 'Holiest mosque in Istanbul — tomb of Abu Ayyub al-Ansari, companion of the Prophet. Very busy on Fridays.',
    avgVisit: '45 min',
    nearby: [
      { name: 'Pierre Loti Cable Car', walk: '3 min' },
      { name: 'Golden Horn cemetery', walk: '5 min' },
      { name: 'Ağa Kapısı Restaurant', walk: '8 min' }
    ],
    didYouKnow: 'Mehmet the Conqueror ordered the first mosque here after the 1453 conquest — it marks Islam\'s arrival in the city.',
    localSecret: 'The cemetery paths above the mosque offer Golden Horn views without the Pierre Loti café crowds.'
  }),
  attractionCard(2, {
    name: 'Pierre Loti Hill',
    address: 'Eyüp · Eyüpsultan · 34050',
    hours: 'Teleferik 09:00–22:00 · café daily',
    tube: 'Teleferik from Eyüp Mosque',
    ticket: '₺60 teleferik return',
    bestArrival: '17:30',
    photoSpot: 'Hilltop terrace — Golden Horn panorama at sunset.',
    lens: '24–70mm',
    tip: 'Named after the French novelist. Cable car from Eyüp Mosque. Café is touristy — bring patience for sunset seats.',
    avgVisit: '60 min',
    crowd: { morning: 2, afternoon: 3, evening: 5 },
    nearby: [
      { name: 'Eyüp Mosque', walk: 'Teleferik down' },
      { name: 'Golden Horn', walk: 'View' },
      { name: 'Balat', walk: 'Bus 15 min' }
    ],
    didYouKnow: 'Pierre Loti wrote "Aziyadé" here — romanticising Istanbul for generations of European readers.',
    localSecret: 'Walk down through the cemetery instead of the cable car for atmospheric shortcuts and empty viewpoints.'
  }),
  attractionCard(4, {
    name: 'Emirgan Park',
    address: 'Emirgan · Sarıyer · 34467',
    hours: '07:00–22:30 · tulip festival Apr',
    tube: 'Bus 22RE from Beşiktaş · or taxi',
    ticket: 'Free',
    bestArrival: '10:00',
    photoSpot: 'Yellow Pavilion lawn — Bosphorus through the trees.',
    lens: '50–85mm',
    tip: 'Best tulip displays in April. Three historic pavilions serve Ottoman breakfast. Perfect Day 7 relaxation.',
    avgVisit: '2 hours',
    nearby: [
      { name: 'Emirgan Sütiş', walk: 'Inside park' },
      { name: 'Mangerie Bebek', walk: '15 min' },
      { name: 'Lacivert Restaurant', walk: '20 min' }
    ],
    didYouKnow: 'Ottoman sultans hunted here — the park was a gift from Khedive Ismail of Egypt in the 19th century.',
    localSecret: 'The lesser-known red pavilion at the park\'s northern end has the quietest Bosphorus picnic spots.'
  }),
  attractionCard(6, {
    name: 'Nişantaşı',
    address: 'Teşvikiye · Şişli · 34365',
    hours: 'Shops 10:00–20:00 · Abdi İpekçi Street',
    tube: 'Metro M2 · Osmanbey · Şişli-Mecidiyeköy',
    ticket: 'Free',
    bestArrival: '17:00',
    photoSpot: 'Abdi İpekçi Street — luxury storefronts and plane trees.',
    lens: '35mm street',
    tip: 'Istanbul\'s Champs-Élysées — designer boutiques, art galleries, and people-watching cafés. Combine with Istinye Park mall.',
    avgVisit: '2 hours',
    nearby: [
      { name: 'Istinye Park', walk: 'Taxi 10 min' },
      { name: 'Mikla Restaurant', walk: 'Taxi 15 min' },
      { name: 'City\'s Nişantaşı', walk: '5 min' }
    ],
    didYouKnow: 'Ottoman sultans\' target-shooting range (nişan taşı) gave the district its name.',
    localSecret: 'Arter gallery on İstiklal\'s quieter cousin streets shows world-class contemporary art for free on Wednesdays.'
  })
];
const hotels = [
  hotelCard(0, {
    name: 'The Peninsula Istanbul',
    category: 'Luxury',
    address: 'Kılıçali Paşa Mah. · Karaköy · 34425',
    price: '€700–1,300/night',
    rating: '9.5',
    googleRating: '4.8',
    room: 'Deluxe Bosphorus View · rooftop pool',
    cancellation: 'Free 48h · flexible rate',
    tube: 'Tram T1 · Karaköy · 3 min walk',
    airport: 'IST 45 min Metro · SAW 90 min taxi',
    nearbyAttractions: 'Galataport 2 min · Galata Tower 15 min · Spice Bazaar 20 min · Tram 3 min',
    walkingScore: '98 / 100 — waterfront Karaköy',
    breakfast: 'Included in premium rates',
    idealFor: ['Honeymoon', 'Luxury', 'Families', 'First-time visitors'],
    tip: 'One of Istanbul\'s finest luxury hotels — indoor & outdoor pools, spa, fitness centre, Bosphorus-view restaurants, concierge, and airport transfers. One of the newest luxury hotels in the city with stunning waterfront views. Walk to Galataport in 2 minutes, easy tram to Sultanahmet. Why we recommend it: exceptional service and Karaköy location lets you explore both Historic Peninsula and modern neighbourhoods without traffic.',
    bookUrl: 'https://www.peninsula.com/en/istanbul/5-star-luxury-hotel-bosphorus'
  }),
  hotelCard(2, {
    name: 'Four Seasons Hotel Bosphorus',
    category: 'Luxury',
    address: 'Çırağan Cd. · Beşiktaş · 34349',
    price: '€650–1,200/night',
    rating: '9.4',
    googleRating: '4.7',
    room: 'Bosphorus Suite · garden terrace',
    cancellation: 'Free 72h on flexible rate',
    tube: 'Ferry · Beşiktaş · tram Kabataş 10 min',
    airport: 'IST 50 min · private transfer available',
    nearbyAttractions: 'Ortaköy 10 min · Dolmabahçe 15 min · Bosphorus cruise pier 5 min',
    walkingScore: '85 / 100 — waterfront promenade',
    breakfast: 'Included in suite rates',
    idealFor: ['Couple', 'Luxury', 'Relaxation'],
    tip: 'Best for couples seeking waterfront calm. Pool and spa overlooking the strait. Afternoon tea on the terrace is legendary.',
    bookUrl: 'https://www.fourseasons.com/bosphorus/'
  }),
  hotelCard(4, {
    name: 'Çırağan Palace Kempinski',
    category: 'Luxury',
    address: 'Yıldız · Beşiktaş · 34349',
    price: '€700–1,500/night',
    rating: '9.3',
    googleRating: '4.7',
    room: 'Palace Suite · Ottoman opulence',
    cancellation: 'Non-refundable best rate · flexible +15%',
    tube: 'Tram T1 · Kabataş · 8 min walk',
    airport: 'IST 50 min',
    nearbyAttractions: 'Ortaköy Mosque 8 min · Dolmabahçe 5 min · Bosphorus 0 min',
    walkingScore: '80 / 100 — palace grounds',
    breakfast: 'Included in palace rooms',
    idealFor: ['Luxury', 'Honeymoon', 'Special occasions'],
    tip: 'One of Istanbul\'s most iconic hotels — a literal Ottoman palace on the Bosphorus. Infinity pool, Tuğra restaurant, and hammam.',
    bookUrl: 'https://www.kempinski.com/en/ciragan-palace'
  }),
  hotelCard(6, {
    name: 'Raffles Istanbul',
    category: 'Luxury',
    address: 'Zorlu Center · Levazım · 34340',
    price: '€650–1,100/night',
    rating: '9.1',
    googleRating: '4.6',
    room: 'Grand Room · city & Bosphorus view',
    cancellation: 'Free 24h',
    tube: 'Metro M2 · Gayrettepe · 5 min walk',
    airport: 'IST 40 min via Metro',
    nearbyAttractions: 'Zorlu PSM · luxury shopping · Nişantaşı 10 min taxi',
    walkingScore: '75 / 100 — modern complex',
    breakfast: 'Extra €45pp',
    idealFor: ['Luxury', 'Shopping', 'Business'],
    tip: 'Modern style with amazing spa and Zorlu Center shopping. Excellent for luxury retail and contemporary Istanbul.',
    bookUrl: 'https://www.raffles.com/istanbul/'
  }),
  hotelCard(8, {
    name: 'Hotel DeCamondo Galata',
    category: 'Upper Mid-Range',
    address: 'Banker Sk. · Karaköy · 34421',
    price: '€180–260/night',
    rating: '9.0',
    googleRating: '4.6',
    room: 'Deluxe Rooftop · Galata views',
    cancellation: 'Free 48h',
    tube: 'Tram T1 · Karaköy · 4 min walk',
    airport: 'IST 45 min Metro',
    nearbyAttractions: 'Galata Tower 8 min · Galataport 5 min · Karaköy cafés 2 min',
    walkingScore: '99 / 100 — best location pick',
    breakfast: 'Included · rooftop terrace',
    idealFor: ['Couple', 'First-time visitors', 'Design lovers'],
    tip: 'One of our favourite recommendations — beautiful rooftop breakfast, walking distance to Galata Tower, Galataport, and tram.',
    bookUrl: 'https://www.decamondogalata.com/'
  }),
  hotelCard(10, {
    name: 'JW Marriott Istanbul Bosphorus',
    category: 'Upper Mid-Range',
    address: 'Kemankeş Karamustafa Paşa · Karaköy · 34425',
    price: '€280–420/night',
    rating: '8.9',
    googleRating: '4.5',
    room: 'Executive Bosphorus View',
    cancellation: 'Free 24h',
    tube: 'Tram T1 · Karaköy · 2 min walk',
    airport: 'IST 45 min',
    nearbyAttractions: 'Galataport 3 min · Spice Bazaar 15 min · Galata Tower 12 min',
    walkingScore: '97 / 100 — Karaköy waterfront',
    breakfast: 'Included on executive floors',
    idealFor: ['Family', 'Business', 'Luxury feel'],
    tip: 'Perfect location with beautiful rooftop bar. Best for families wanting reliable international standards in Karaköy.',
    bookUrl: 'https://www.marriott.com/hotels/travel/istjw-jw-marriott-istanbul-bosphorus/'
  }),
  hotelCard(12, {
    name: 'The Bank Hotel',
    category: 'Upper Mid-Range',
    address: 'Banker Sk. · Karaköy · 34421',
    price: '€220–350/night',
    rating: '8.8',
    googleRating: '4.5',
    room: 'Heritage Loft · converted bank',
    cancellation: 'Free 72h',
    tube: 'Tram T1 · Karaköy · 3 min',
    airport: 'IST 45 min',
    nearbyAttractions: 'Galata Tower 10 min · Karaköy dining 1 min · Istiklal 12 min',
    walkingScore: '98 / 100 — very walkable',
    breakfast: 'Excellent Turkish buffet included',
    idealFor: ['Couple', 'Design', 'Food lovers'],
    tip: 'Historic bank building with excellent breakfast and Karaköy\'s best café scene on your doorstep.',
    bookUrl: 'https://www.thebankhotelistanbul.com/'
  }),
  hotelCard(14, {
    name: 'Pera Palace Hotel',
    category: 'Upper Mid-Range',
    address: 'Meşrutiyet Cd. · Beyoğlu · 34430',
    price: '€250–400/night',
    rating: '8.7',
    googleRating: '4.4',
    room: 'Agatha Christie Suite · historic wing',
    cancellation: 'Free 48h',
    tube: 'Metro M2 · Şişhane · 5 min · Tünel funicular',
    airport: 'IST 50 min',
    nearbyAttractions: 'Istiklal Street 3 min · Galata Tower 10 min · Pera Museum 5 min',
    walkingScore: '96 / 100 — Pera district',
    breakfast: 'Included in heritage rooms',
    idealFor: ['History buffs', 'Couple', 'Luxury heritage'],
    tip: 'Agatha Christie wrote Murder on the Orient Express here. Orient Bar and Kubbeli Saloon are Belle Époque gems.',
    bookUrl: 'https://www.perapalace.com/'
  }),
  hotelCard(16, {
    name: 'Meroddi Galata Mansion',
    category: 'Mid-Range',
    address: 'Galata Kulesi Sk. · Beyoğlu · 34421',
    price: '€100–180/night',
    rating: '8.9',
    googleRating: '4.5',
    room: 'Deluxe Room · tower views',
    cancellation: 'Free 24h',
    tube: 'Metro M2 · Şişhane · 5 min',
    airport: 'IST 50 min',
    nearbyAttractions: 'Galata Tower 3 min · Istiklal 8 min · Karaköy 10 min',
    walkingScore: '98 / 100 — Galata heart',
    breakfast: 'Included · rooftop',
    idealFor: ['Solo', 'Couple', 'Best value'],
    tip: 'Best value pick — excellent location perfect for first-time visitors. Rooftop breakfast with Galata Tower views.',
    bookUrl: 'https://www.meroddi.com/'
  }),
  hotelCard(18, {
    name: 'Walton Hotels Galata',
    category: 'Mid-Range',
    address: 'Hacı Ali Sk. · Beyoğlu · 34425',
    price: '€120–170/night',
    rating: '8.6',
    googleRating: '4.4',
    room: 'Modern Double · boutique design',
    cancellation: 'Free 48h',
    tube: 'Tram T1 · Karaköy · 6 min',
    airport: 'IST 45 min',
    nearbyAttractions: 'Galata Tower 5 min · Galataport 8 min · Karaköy 5 min',
    walkingScore: '97 / 100 — walkable Galata',
    breakfast: 'Buffet included',
    idealFor: ['Couple', 'Solo', 'Modern'],
    tip: 'Modern rooms with great reviews. Walk everywhere in Galata and Karaköy without taxis.',
    bookUrl: 'https://www.waltonhotels.com/'
  }),
  hotelCard(0, {
    name: 'Hotel Momento Golden Horn',
    category: 'Mid-Range',
    address: 'Azapkapı · Beyoğlu · 34421',
    price: '€120–180/night',
    rating: '8.5',
    googleRating: '4.3',
    room: 'Golden Horn View · boutique',
    cancellation: 'Free 24h',
    tube: 'Tram T1 · Azapkapı · 2 min',
    airport: 'IST 45 min',
    nearbyAttractions: 'Galata Bridge 5 min · Spice Bazaar 10 min · Galata Tower 8 min',
    walkingScore: '95 / 100 — Golden Horn',
    breakfast: 'Included · Bosphorus view',
    idealFor: ['Couple', 'Views', 'Value'],
    tip: 'Beautiful Golden Horn views and good breakfast at a mid-range price. Quiet compared to Sultanahmet.',
    bookUrl: 'https://www.hotelmomento.com/'
  }),
  hotelCard(2, {
    name: 'Novotel Bosphorus',
    category: 'Mid-Range',
    address: 'Kılıçali Paşa · Karaköy · 34425',
    price: '€150–230/night',
    rating: '8.4',
    googleRating: '4.3',
    room: 'Superior Room · pool access',
    cancellation: 'Free until 18:00 day of arrival',
    tube: 'Tram T1 · Karaköy · 3 min',
    airport: 'IST 45 min',
    nearbyAttractions: 'Galataport 4 min · Galata Tower 12 min · Tram to Sultanahmet 15 min',
    walkingScore: '96 / 100 — Karaköy',
    breakfast: 'Buffet €18pp or included',
    idealFor: ['Family', 'Reliable', 'Pool'],
    tip: 'Reliable international chain with large rooms and pool — rare in central Istanbul. Good for families.',
    bookUrl: 'https://all.accor.com/hotel/B0K8/index.en.shtml'
  })
];
const dining = [
  diningCard(0, {
    name: 'Seven Hills Restaurant',
    category: 'Breakfast · Rooftop · Ottoman',
    address: 'Tevkifhane Sk. · Sultanahmet · Fatih',
    price: '₺700–1,400 per person',
    famous: 'Traditional Turkish Breakfast with Hagia Sophia view',
    reservation: 'Recommended for rooftop',
    wait: '10–25 min at peak',
    tip: 'Start Day 1 here — the terrace frames Hagia Sophia and the Blue Mosque. Return at sunset for the rooftop panorama before dinner.',
    dishes: [
      { name: 'Serpme Kahvaltı', img: img(), desc: 'Sprawling Turkish breakfast — cheeses, olives, honey, eggs and endless çay.' },
      { name: 'Menemen', img: img(), desc: 'Eggs scrambled with peppers, tomato and Turkish spices.' },
      { name: 'Grilled Sea Bass', img: img(), desc: 'Fresh Marmara catch with rocket and lemon.' },
      { name: 'Lamb Şiş', img: img(), desc: 'Charcoal-grilled skewers with pilav.' },
      { name: 'Baklava & Turkish Coffee', img: img(), desc: 'Pistachio layers with thick unfiltered coffee.' }
    ]
  }),
  diningCard(2, {
    name: 'Hafız Mustafa',
    category: 'Dessert · Coffee · Since 1864',
    address: 'Divanyolu Cd. · Sultanahmet · Fatih',
    price: '₺250–600 per person',
    famous: 'Baklava & Turkish Coffee',
    reservation: 'Walk-in',
    wait: '5–15 min',
    dressCode: 'Casual',
    tip: 'A 160-year Istanbul institution. Perfect mid-morning coffee break on Day 1 — try the pistachio baklava and Turkish delight boxes to take home.',
    dishes: [
      { name: 'Pistachio Baklava', img: img(), desc: 'Flaky layers soaked in light syrup — the house signature.' },
      { name: 'Turkish Coffee', img: img(), desc: 'Thick and unfiltered, served with lokum.' },
      { name: 'Künefe', img: img(), desc: 'Shredded pastry over melting cheese, in syrup.' },
      { name: 'Turkish Delight', img: img(), desc: 'Rose, pomegranate and double-pistachio lokum.' },
      { name: 'Sütlaç', img: img(), desc: 'Oven-baked rice pudding with a caramelised top.' }
    ]
  }),
  diningCard(4, {
    name: 'Deraliye Ottoman Cuisine',
    category: 'Lunch · Ottoman Palace',
    address: 'Ticarethane Sk. · Sultanahmet · Fatih',
    price: '₺800–1,800 per person',
    famous: 'Historic Ottoman palace recipes',
    reservation: 'Recommended',
    wait: '15–30 min without booking',
    tip: 'Recreates dishes once served to sultans. Order the tasting menu of Topkapı-era recipes — a memorable Day 1 lunch near the monuments.',
    dishes: [
      { name: 'Goose Kebab', img: img(), desc: 'A rare Ottoman court recipe — slow-roasted and fragrant.' },
      { name: 'Mahmudiye', img: img(), desc: 'Chicken with almonds, apricots and honey — a palace classic.' },
      { name: 'Stuffed Melon (Kavun Dolması)', img: img(), desc: '15th-century recipe of minced lamb, rice and nuts.' },
      { name: 'Hünkar Beğendi', img: img(), desc: 'Lamb stew over smoked aubergine purée.' },
      { name: 'Ottoman Sherbet', img: img(), desc: 'Rosewater and fruit drink from imperial kitchens.' }
    ]
  }),
  diningCard(6, {
    name: 'Matbah Restaurant',
    category: 'Dinner · Ottoman Fine Dining',
    address: 'Caferiye Sk. · Sultanahmet · Fatih',
    price: '₺900–2,000 per person',
    famous: 'Ottoman court cuisine',
    reservation: 'Recommended',
    wait: '10–20 min',
    tip: 'Set beside the Ottoman-era Ottoman Hotel — candlelit courtyard dining. Ideal romantic Day 1 dinner after the Sultanahmet monuments.',
    dishes: [
      { name: 'Lamb Tandır', img: img(), desc: 'Slow-cooked until falling off the bone.' },
      { name: 'Müttefer', img: img(), desc: 'Ottoman lamb and vegetable stew with saffron.' },
      { name: 'Circassian Chicken', img: img(), desc: 'Poached chicken in a walnut sauce.' },
      { name: 'Quince Dessert', img: img(), desc: 'Baked quince with clotted cream and syrup.' },
      { name: 'Ottoman Meze Selection', img: img(), desc: 'Seasonal starters to share.' }
    ]
  }),
  diningCard(8, {
    name: 'Pandeli Restaurant',
    category: 'Lunch · Historic · Since 1901',
    address: 'Spice Bazaar Gate · Eminönü · Fatih',
    price: '₺700–1,600 per person',
    famous: 'Turquoise-tiled dining above the Spice Bazaar',
    reservation: 'Recommended for lunch',
    wait: '15–25 min',
    tip: 'A İznik-tiled institution above the Spice Bazaar gate. Book a window table for Day 2 lunch — the sea bass in paper is legendary.',
    dishes: [
      { name: 'Levrek Kağıtta', img: img(), desc: 'Sea bass baked in paper — the signature.' },
      { name: 'Aubergine Börek', img: img(), desc: 'Crisp pastry with smoky aubergine.' },
      { name: 'Lamb Stew', img: img(), desc: 'Tender lamb in a rich tomato base.' },
      { name: 'Stuffed Vine Leaves', img: img(), desc: 'Olive-oil dolma with pine nuts.' },
      { name: 'Ekmek Kadayıfı', img: img(), desc: 'Bread pudding with clotted cream.' }
    ]
  }),
  diningCard(10, {
    name: 'Hamdi Restaurant',
    category: 'Dinner · Kebab · Golden Horn View',
    address: 'Kalçın Sk. · Eminönü · Fatih',
    price: '₺700–1,500 per person',
    famous: 'Southeastern kebabs with Golden Horn views',
    reservation: 'Essential for terrace',
    wait: '20–40 min without booking',
    tip: 'Book the top-floor terrace for Day 2 dinner — Galata Bridge and the Golden Horn glitter below. The pistachio kebab is unmissable.',
    dishes: [
      { name: 'Fıstıklı Kebab', img: img(), desc: 'Minced lamb kebab studded with Antep pistachios.' },
      { name: 'Lahmacun', img: img(), desc: 'Thin crisp base with spiced minced lamb.' },
      { name: 'Içli Köfte', img: img(), desc: 'Bulgur shells filled with lamb and walnut.' },
      { name: 'Künefe', img: img(), desc: 'Cheese-filled pastry in syrup — order to share.' },
      { name: 'Mixed Meze', img: img(), desc: 'Southeastern spreads with warm bread.' }
    ]
  }),
  diningCard(12, {
    name: 'Namlı Gurme',
    category: 'Breakfast · Deli · Meze',
    address: 'Rıhtım Cd. · Karaköy · Beyoğlu',
    price: '₺400–900 per person',
    famous: 'Legendary Karaköy breakfast & deli counter',
    reservation: 'Walk-in',
    wait: '10–25 min weekends',
    tip: 'A Karaköy deli piled with cheeses, olives and charcuterie. Perfect Day 3 breakfast before climbing to Galata Tower — arrive before 09:30.',
    dishes: [
      { name: 'Serpme Kahvaltı', img: img(), desc: 'Enormous breakfast spread for sharing.' },
      { name: 'Sucuklu Yumurta', img: img(), desc: 'Eggs with Turkish spiced sausage.' },
      { name: 'Kaymak & Honey', img: img(), desc: 'Clotted cream with comb honey and fresh bread.' },
      { name: 'Cheese Selection', img: img(), desc: 'Aged and fresh Anatolian cheeses.' },
      { name: 'Simit & Çay', img: img(), desc: 'Sesame ring bread with endless tea.' }
    ]
  }),
  cafeCard(14, 'Petra Roasting Co.', 'Specialty Coffee · Third Wave', 'Serdar-ı Ekrem Sk. · Galata · Beyoğlu'),
  diningCard(16, {
    name: 'Karaköy Lokantası',
    category: 'Lunch · Meyhane · Turquoise Tiles',
    address: 'Kemankeş Cd. · Karaköy · Beyoğlu',
    price: '₺600–1,300 per person',
    famous: 'Classic meyhane meze & grilled fish',
    reservation: 'Recommended for lunch & dinner',
    wait: '15–30 min',
    tip: 'Turquoise-tiled Karaköy favourite — lunch is à la carte, evenings turn into a lively meyhane. Order a spread of hot and cold meze on Day 3.',
    dishes: [
      { name: 'Grilled Sea Bream', img: img(), desc: 'Daily catch simply grilled with greens.' },
      { name: 'Hot & Cold Meze', img: img(), desc: 'Choose a table full of Aegean starters.' },
      { name: 'Fried Calamari', img: img(), desc: 'Crisp with garlic-yogurt dip.' },
      { name: 'Lamb Chops', img: img(), desc: 'Charcoal-grilled and juicy.' },
      { name: 'Künefe', img: img(), desc: 'Warm cheese pastry in syrup.' }
    ]
  }),
  diningCard(18, {
    name: 'Feriye',
    category: 'Dinner · Bosphorus · Fine Dining',
    address: 'Çırağan Cd. · Ortaköy · Beşiktaş',
    price: '₺1,000–2,400 per person',
    famous: 'Waterfront Ottoman fine dining',
    reservation: 'Essential',
    wait: 'Booked-only terrace',
    dressCode: 'Smart',
    tip: 'Housed in a restored Ottoman palace pavilion right on the Bosphorus. Reserve a terrace table for Day 3 dinner as boats drift past.',
    dishes: [
      { name: 'Sea Bass Fillet', img: img(), desc: 'Line-caught, served with seasonal vegetables.' },
      { name: 'Lamb Shank', img: img(), desc: 'Braised until tender with saffron pilav.' },
      { name: 'Bosphorus Meze', img: img(), desc: 'Refined cold starters with rakı.' },
      { name: 'Grilled Prawns', img: img(), desc: 'Butter and garlic, Bosphorus-side.' },
      { name: 'Baklava Selection', img: img(), desc: 'Trio of pistachio and walnut baklava.' }
    ]
  }),
  cafeCard(0, 'House Café Ortaköy', 'Bosphorus Brunch · All-Day Café', 'Salhane Sk. · Ortaköy · Beşiktaş'),
  diningCard(2, {
    name: 'Banyan',
    category: 'Lunch · Asian Fusion · Bosphorus',
    address: 'Muallim Naci Cd. · Ortaköy · Beşiktaş',
    price: '₺800–1,700 per person',
    famous: 'Pan-Asian dishes with Ortaköy Mosque view',
    reservation: 'Recommended',
    wait: '15–25 min',
    tip: 'Rooftop Asian fusion framing the Ortaköy Mosque and Bosphorus Bridge. A lighter Day 4 lunch between palace visits.',
    dishes: [
      { name: 'Pad Thai', img: img(), desc: 'Wok noodles with tamarind and peanuts.' },
      { name: 'Dim Sum Selection', img: img(), desc: 'Steamed dumplings to share.' },
      { name: 'Wok Prawns', img: img(), desc: 'Ginger, chilli and spring onion.' },
      { name: 'Miso Sea Bass', img: img(), desc: 'Marinated and grilled fusion style.' },
      { name: 'Mango Sticky Rice', img: img(), desc: 'Coconut rice with fresh mango.' }
    ]
  }),
  diningCard(4, {
    name: 'Sunset Grill & Bar',
    category: 'Dinner · Fine Dining · Panorama',
    address: 'Kuruçeşme Cd. · Ulus · Beşiktaş',
    price: '₺1,500–3,500 per person',
    famous: 'Bosphorus panorama & world-class wine list',
    reservation: 'Essential',
    wait: 'Booked-only',
    dressCode: 'Smart',
    tip: 'Perched on Ulus hill with a sweeping Bosphorus panorama — one of Istanbul\'s most romantic tables. Reserve at sunset to close Day 4 in style.',
    dishes: [
      { name: 'Dry-Aged Steak', img: img(), desc: 'Premium cuts grilled to order.' },
      { name: 'Sushi Selection', img: img(), desc: 'Fresh nigiri and maki from the sushi bar.' },
      { name: 'Grilled Lobster', img: img(), desc: 'Butter-basted with seasonal sides.' },
      { name: 'Sea Bass Carpaccio', img: img(), desc: 'Citrus-cured with olive oil.' },
      { name: 'Chocolate Soufflé', img: img(), desc: 'Warm centre with vanilla ice cream.' }
    ]
  }),
  diningCard(6, {
    name: 'Kanaat Lokantası',
    category: 'Lunch · Esnaf · Since 1933',
    address: 'Selmanipak Cd. · Üsküdar',
    price: '₺300–700 per person',
    famous: 'Classic tradesmen\'s Turkish home cooking',
    reservation: 'Walk-in',
    wait: '10–20 min',
    tip: 'An Üsküdar institution since 1933 — point at the daily home-cooked dishes in the counter. Authentic Asian-side Day 5 lunch.',
    dishes: [
      { name: 'Hünkar Beğendi', img: img(), desc: 'Lamb over creamy smoked aubergine.' },
      { name: 'Kuru Fasulye', img: img(), desc: 'White beans in tomato — comfort food classic.' },
      { name: 'İçli Köfte', img: img(), desc: 'Stuffed bulgur croquettes.' },
      { name: 'Su Böreği', img: img(), desc: 'Layered pastry with cheese.' },
      { name: 'Kazandibi', img: img(), desc: 'Caramelised milk pudding.' }
    ]
  }),
  diningCard(8, {
    name: 'Çiya Sofrası',
    category: 'Dinner · Anatolian · Kadıköy',
    address: 'Güneşlibahçe Sk. · Kadıköy',
    price: '₺400–900 per person',
    famous: 'Regional Anatolian dishes & forgotten recipes',
    reservation: 'Walk-in · busy evenings',
    wait: '15–30 min',
    tip: 'Chef Musa Dağdeviren\'s temple to regional Anatolian cooking. Choose from the ever-changing counter — a food-lover\'s Day 5 dinner in Kadıköy.',
    dishes: [
      { name: 'Kebab with Sour Cherry', img: img(), desc: 'Antep-style lamb with tart cherries.' },
      { name: 'Wild Herb Salads', img: img(), desc: 'Seasonal Anatolian greens and herbs.' },
      { name: 'Stuffed Dishes (Dolma)', img: img(), desc: 'Vegetables filled with spiced rice.' },
      { name: 'Slow-Cooked Stews', img: img(), desc: 'Regional recipes rotated daily.' },
      { name: 'Candied Vegetables', img: img(), desc: 'Famous tomato, pumpkin or walnut desserts.' }
    ]
  }),
  cafeCard(10, 'Velvet Café', 'Balat Brunch · Photogenic Café', 'Balat · Fatih'),
  diningCard(12, {
    name: 'Forno Balat',
    category: 'Lunch · Pizza · Bakery',
    address: 'Leblebiciler Sk. · Balat · Fatih',
    price: '₺350–800 per person',
    famous: 'Stone-oven pide, pizza & fresh bread',
    reservation: 'Walk-in',
    wait: '10–25 min',
    tip: 'A cosy Balat bakery-restaurant with wood-fired ovens. Perfect Day 6 lunch after photographing the colourful houses.',
    dishes: [
      { name: 'Stone-Oven Pizza', img: img(), desc: 'Thin, blistered crust with fresh toppings.' },
      { name: 'Turkish Pide', img: img(), desc: 'Boat-shaped flatbread with cheese and egg.' },
      { name: 'Fresh Sourdough', img: img(), desc: 'Baked in-house throughout the day.' },
      { name: 'Mixed Salad', img: img(), desc: 'Garden greens with olive oil.' },
      { name: 'Chocolate Cake', img: img(), desc: 'Rich house bake with coffee.' }
    ]
  }),
  diningCard(14, {
    name: 'Ağa Kapısı',
    category: 'Dinner · Golden Horn View',
    address: 'Eyüp · Eyüpsultan',
    price: '₺300–700 per person',
    famous: 'Künefe & tea with Golden Horn views',
    reservation: 'Walk-in',
    wait: '15–30 min at sunset',
    tip: 'Tucked in the hills above Eyüp with a sweeping Golden Horn view. Alcohol-free and family-friendly — a serene Day 6 dinner or dessert stop.',
    dishes: [
      { name: 'Künefe', img: img(), desc: 'The house specialty — cheese pastry in syrup.' },
      { name: 'Mixed Grill', img: img(), desc: 'Kebabs and köfte with pilav.' },
      { name: 'Gözleme', img: img(), desc: 'Hand-rolled savoury Turkish crêpe.' },
      { name: 'Manti', img: img(), desc: 'Tiny dumplings with garlic yogurt.' },
      { name: 'Turkish Tea', img: img(), desc: 'Endless çay with the view.' }
    ]
  }),
  cafeCard(16, 'Mangerie Bebek', 'Bebek Brunch · Bosphorus Café', 'Cevdet Paşa Cd. · Bebek · Beşiktaş'),
  diningCard(18, {
    name: 'Lacivert',
    category: 'Lunch · Waterfront · Asian Side',
    address: 'Körfez Cd. · Anadolu Hisarı · Beykoz',
    price: '₺1,000–2,200 per person',
    famous: 'Bosphorus-edge seafood under the bridge',
    reservation: 'Recommended · boat pickup available',
    wait: 'Booked terrace',
    dressCode: 'Smart casual',
    tip: 'Right at the water\'s edge beneath the Fatih Bridge — they\'ll even send a boat across the strait. A tranquil, luxurious Day 7 lunch.',
    dishes: [
      { name: 'Grilled Turbot', img: img(), desc: 'Seasonal Bosphorus fish, simply grilled.' },
      { name: 'Seafood Meze', img: img(), desc: 'Octopus, prawns and marinated fish.' },
      { name: 'Sea Bass Tartare', img: img(), desc: 'Citrus-dressed and delicate.' },
      { name: 'Lobster Pasta', img: img(), desc: 'Rich tomato and shellfish.' },
      { name: 'Seasonal Sorbet', img: img(), desc: 'Palate-cleansing fruit finish.' }
    ]
  }),
  diningCard(0, {
    name: 'Mikla',
    category: 'Dinner · Fine Dining · Rooftop',
    address: 'The Marmara Pera · Meşrutiyet Cd. · Beyoğlu',
    price: '₺2,500–4,500 per person',
    famous: 'New Anatolian tasting menu · World\'s 50 Best',
    reservation: 'Essential · weeks ahead',
    wait: 'Booked-only',
    dressCode: 'Smart',
    michelin: 'World\'s 50 Best listed',
    tip: 'Chef Mehmet Gürs\'s rooftop temple of New Anatolian cuisine atop The Marmara Pera. The finest way to end Day 7 — book the tasting menu at sunset.',
    dishes: [
      { name: 'New Anatolian Tasting Menu', img: img(), desc: 'Multi-course journey through Turkish terroir.' },
      { name: 'Slow-Cooked Lamb', img: img(), desc: 'Heritage-breed lamb, modern technique.' },
      { name: 'Aegean Sea Bass', img: img(), desc: 'Line-caught with foraged herbs.' },
      { name: 'Sourdough & Butter', img: img(), desc: 'House-cultured, famous in its own right.' },
      { name: 'Anatolian Dessert', img: img(), desc: 'Reimagined classics with local honey.' }
    ]
  })
];

const dayBudget = {
  budget: { total: '₺1,800–2,800 per person', includes: ['Tram, metro & ferries (İstanbulkart)', 'Street food & lokanta lunches', 'Free mosques & squares', 'One paid museum'] },
  mid: { total: '₺3,500–6,000 per person', includes: ['Taxis & Bosphorus ferry', 'Sit-down restaurant meals', 'Museum & palace tickets', 'Bosphorus cruise'] },
  luxury: { total: '₺9,000–18,000 per person', includes: ['Private guide & driver', 'Rooftop fine dining', 'Luxury hotel night', 'Private Bosphorus boat'] }
};

const itineraries = [
  {
    day: 1,
    title: 'Sultanahmet — Where Istanbul Began',
    color: '#0f766e',
    routePreview: '9 stops · start 08:00 · end 19:30 · ≈ 5 km walking',
    mapUrl: 'https://www.google.com/maps/dir/Seven+Hills+Restaurant+Istanbul/Hagia+Sophia/Blue+Mosque+Istanbul/Sultanahmet+Square/Basilica+Cistern/Deraliye+Ottoman+Cuisine/Matbah+Restaurant+Istanbul',
    budget: dayBudget,
    photos: [img(), img(), img(), img()],
    stops: [
      { time: '08:00', timeOfDay: 'morning', name: 'Seven Hills Restaurant', desc: 'Traditional Turkish breakfast · Turkish tea · Hagia Sophia view (≈700 TRY)', transit: 'Walk from hotel', icon: 'walk', mapUrl: mapQuery('Seven Hills Restaurant Sultanahmet') },
      { time: '09:00', timeOfDay: 'morning', name: 'Hagia Sophia', desc: '90 min · free entry · Byzantine & Ottoman masterpiece', transit: 'Walk 2 min', icon: 'walk', mapUrl: mapQuery('Hagia Sophia') },
      { time: '10:45', timeOfDay: 'morning', name: 'Blue Mosque', desc: '45 min · İznik-tiled interior · outside prayer times', transit: 'Walk 3 min', icon: 'walk', mapUrl: mapQuery('Blue Mosque Istanbul') },
      { time: '11:45', timeOfDay: 'morning', name: 'Sultanahmet Square', desc: 'German Fountain · Egyptian Obelisk · Serpent Column', transit: 'Walk 5 min', icon: 'walk', mapUrl: mapQuery('Sultanahmet Square') },
      { time: '12:30', timeOfDay: 'afternoon', name: 'Hafız Mustafa', desc: 'Coffee break · Turkish coffee & baklava', transit: 'Walk 5 min', icon: 'walk', mapUrl: mapQuery('Hafız Mustafa Sultanahmet') },
      { time: '13:30', timeOfDay: 'afternoon', name: 'Basilica Cistern', desc: '45 min · underground Byzantine reservoir · Medusa heads', transit: 'Walk 6 min', icon: 'walk', mapUrl: mapQuery('Basilica Cistern') },
      { time: '15:00', timeOfDay: 'afternoon', name: 'Deraliye Ottoman Cuisine', desc: 'Lunch · palace recipes · stroll Arasta Bazaar after', transit: 'Walk 8 min', icon: 'walk', mapUrl: mapQuery('Deraliye Ottoman Cuisine') },
      { time: '18:30', timeOfDay: 'evening', name: 'Seven Hills Rooftop', desc: 'Sunset over the domes · golden-hour photos', transit: 'Walk 5 min', icon: 'walk', mapUrl: mapQuery('Seven Hills Restaurant Sultanahmet') },
      { time: '19:30', timeOfDay: 'night', name: 'Matbah Restaurant', desc: 'Dinner · candlelit Ottoman fine dining', transit: 'Walk 4 min', icon: 'walk', mapUrl: mapQuery('Matbah Restaurant Istanbul') }
    ]
  },
  {
    day: 2,
    title: 'Palaces & Bazaars',
    color: '#059669',
    routePreview: '9 stops · start 08:30 · end 21:00 · ≈ 6 km walking',
    mapUrl: 'https://www.google.com/maps/dir/Pudding+Shop+Istanbul/Topkapi+Palace/Pandeli+Restaurant/Spice+Bazaar+Istanbul/Grand+Bazaar+Istanbul/Suleymaniye+Mosque/Hamdi+Restaurant/Galata+Bridge',
    budget: dayBudget,
    photos: [img(), img(), img(), img()],
    stops: [
      { time: '08:30', timeOfDay: 'morning', name: 'Pudding Shop', desc: 'Breakfast · legendary Hippie Trail café since 1957', transit: 'Walk from hotel', icon: 'walk', mapUrl: mapQuery('Pudding Shop Sultanahmet') },
      { time: '09:30', timeOfDay: 'morning', name: 'Topkapı Palace', desc: '3 hrs · imperial courtyards · Treasury · Spoonmaker Diamond', transit: 'Walk 8 min', icon: 'walk', mapUrl: mapQuery('Topkapı Palace') },
      { time: '12:45', timeOfDay: 'afternoon', name: 'Imperial Harem', desc: 'Tiled chambers · Privy Chamber of Murat III', transit: 'Inside palace', icon: 'walk', mapUrl: mapQuery('Topkapı Palace Harem') },
      { time: '13:45', timeOfDay: 'afternoon', name: 'Pandeli Restaurant', desc: 'Lunch · turquoise-tiled dining above the Spice Bazaar', transit: 'Tram T1 to Eminönü', icon: 'metro', mapUrl: mapQuery('Pandeli Restaurant') },
      { time: '15:00', timeOfDay: 'afternoon', name: 'Spice Bazaar', desc: 'Saffron, sumac, lokum · vendor tastings', transit: 'Walk 2 min', icon: 'walk', mapUrl: mapQuery('Spice Bazaar Istanbul') },
      { time: '16:30', timeOfDay: 'afternoon', name: 'Grand Bazaar', desc: '4,000 shops · ceramics, lamps, carpets · bargain politely', transit: 'Walk 12 min', icon: 'walk', mapUrl: mapQuery('Grand Bazaar Istanbul') },
      { time: '18:30', timeOfDay: 'evening', name: 'Süleymaniye Mosque', desc: 'Sinan\'s masterpiece · Golden Horn sunset terrace', transit: 'Walk 10 min', icon: 'walk', mapUrl: mapQuery('Süleymaniye Mosque') },
      { time: '20:00', timeOfDay: 'night', name: 'Hamdi Restaurant', desc: 'Dinner · pistachio kebab · Golden Horn terrace', transit: 'Walk 12 min downhill', icon: 'walk', mapUrl: mapQuery('Hamdi Restaurant Eminönü') },
      { time: '21:00', timeOfDay: 'night', name: 'Galata Bridge Night Walk', desc: 'Fishermen, balık ekmek stalls & mosque silhouettes', transit: 'Walk 10 min', icon: 'walk', mapUrl: mapQuery('Galata Bridge') }
    ]
  },
  {
    day: 3,
    title: 'Galata & Karaköy',
    color: '#0891b2',
    routePreview: '9 stops · start 08:30 · end 21:00 · Bosphorus cruise',
    mapUrl: 'https://www.google.com/maps/dir/Namli+Gurme+Karakoy/Galata+Tower/Petra+Roasting+Co/Karakoy+Lokantasi/Galataport/Bosphorus+Cruise/Feriye+Istanbul/Ortakoy',
    budget: dayBudget,
    photos: [img(), img(), img(), img()],
    stops: [
      { time: '08:30', timeOfDay: 'morning', name: 'Namlı Gurme', desc: 'Breakfast · legendary Karaköy deli spread', transit: 'Walk from hotel', icon: 'walk', mapUrl: mapQuery('Namlı Gurme Karaköy') },
      { time: '09:30', timeOfDay: 'morning', name: 'Galata Tower', desc: '360° views of Golden Horn & Bosphorus · book timed entry', transit: 'Walk 8 min uphill', icon: 'walk', mapUrl: mapQuery('Galata Tower') },
      { time: '11:00', timeOfDay: 'morning', name: 'Explore Galata Streets', desc: 'Serdar-ı Ekrem boutiques · street art · cafés', transit: 'Walk', icon: 'walk', mapUrl: mapQuery('Galata Beyoğlu') },
      { time: '12:00', timeOfDay: 'afternoon', name: 'Petra Roasting Co.', desc: 'Third-wave coffee break', transit: 'Walk 5 min', icon: 'walk', mapUrl: mapQuery('Petra Roasting Co Galata') },
      { time: '13:00', timeOfDay: 'afternoon', name: 'Karaköy Lokantası', desc: 'Lunch · turquoise-tiled meyhane · meze', transit: 'Walk 8 min', icon: 'walk', mapUrl: mapQuery('Karaköy Lokantası') },
      { time: '15:00', timeOfDay: 'afternoon', name: 'Galataport', desc: 'Waterfront promenade · Istanbul Modern · shopping', transit: 'Walk 5 min', icon: 'walk', mapUrl: mapQuery('Galataport') },
      { time: '17:00', timeOfDay: 'evening', name: 'Bosphorus Cruise', desc: '90 min · Europe/Asia shorelines · palaces & bridges', transit: 'Ferry from Karaköy', icon: 'ferry', mapUrl: mapQuery('Bosphorus Cruise Istanbul') },
      { time: '19:30', timeOfDay: 'night', name: 'Feriye', desc: 'Dinner · Ottoman palace pavilion on the Bosphorus', transit: 'Taxi to Ortaköy', icon: 'cab', mapUrl: mapQuery('Feriye Restaurant Ortaköy') },
      { time: '21:00', timeOfDay: 'night', name: 'Ortaköy Walk', desc: 'Illuminated mosque · bridge lights · waterfront', transit: 'Walk 5 min', icon: 'walk', mapUrl: mapQuery('Ortaköy Mosque') }
    ]
  },
  {
    day: 4,
    title: 'Bosphorus & Dolmabahçe',
    color: '#115e59',
    routePreview: '9 stops · start 08:30 · end 22:00 · European shore',
    mapUrl: 'https://www.google.com/maps/dir/House+Cafe+Ortakoy/Dolmabahce+Palace/Banyan+Ortakoy/Ortakoy+Mosque/Bebek/Rumeli+Fortress/Sunset+Grill+Istanbul',
    budget: dayBudget,
    photos: [img(), img(), img(), img()],
    stops: [
      { time: '08:30', timeOfDay: 'morning', name: 'House Café Ortaköy', desc: 'Breakfast · Bosphorus-side brunch', transit: 'Walk / taxi', icon: 'walk', mapUrl: mapQuery('House Café Ortaköy') },
      { time: '09:30', timeOfDay: 'morning', name: 'Dolmabahçe Palace', desc: '2 hrs · crystal staircase · Ottoman\'s last palace', transit: 'Tram T1 to Kabataş', icon: 'metro', mapUrl: mapQuery('Dolmabahçe Palace') },
      { time: '13:00', timeOfDay: 'afternoon', name: 'Banyan', desc: 'Lunch · Asian fusion · Ortaköy Mosque view', transit: 'Taxi to Ortaköy', icon: 'cab', mapUrl: mapQuery('Banyan Restaurant Ortaköy') },
      { time: '15:00', timeOfDay: 'afternoon', name: 'Ortaköy Mosque', desc: 'Baroque mosque beneath the Bosphorus Bridge', transit: 'Walk 3 min', icon: 'walk', mapUrl: mapQuery('Ortaköy Mosque') },
      { time: '16:00', timeOfDay: 'afternoon', name: 'Famous Ortaköy Kumpir', desc: 'Loaded baked potato from the waterfront stalls', transit: 'Walk 2 min', icon: 'walk', mapUrl: mapQuery('Ortaköy Kumpir') },
      { time: '17:30', timeOfDay: 'evening', name: 'Bebek Waterfront', desc: 'Chic Bosphorus neighbourhood · seaside promenade', transit: 'Taxi 10 min', icon: 'cab', mapUrl: mapQuery('Bebek Istanbul') },
      { time: '18:30', timeOfDay: 'evening', name: 'Bosphorus Walk', desc: 'Golden-hour stroll along the strait', transit: 'Walk', icon: 'walk', mapUrl: mapQuery('Bebek waterfront Istanbul') },
      { time: '20:00', timeOfDay: 'night', name: 'Rumeli Fortress', desc: 'Floodlit 1452 fortress at the Bosphorus narrows', transit: 'Taxi 10 min', icon: 'cab', mapUrl: mapQuery('Rumeli Fortress') },
      { time: '21:00', timeOfDay: 'night', name: 'Sunset Grill & Bar', desc: 'Dinner · Bosphorus panorama · world-class wine list', transit: 'Taxi 8 min', icon: 'cab', mapUrl: mapQuery('Sunset Grill Istanbul') }
    ]
  },
  {
    day: 5,
    title: 'The Asian Side',
    color: '#0d9488',
    routePreview: '8 stops · start 08:30 · ferry to Üsküdar & Kadıköy',
    mapUrl: 'https://www.google.com/maps/dir/Uskudar/Maidens+Tower/Camlica+Mosque/Kanaat+Lokantasi/Camlica+Hill/Kadikoy+Market/Moda/Ciya+Sofrasi',
    budget: dayBudget,
    photos: [img(), img(), img(), img()],
    stops: [
      { time: '08:30', timeOfDay: 'morning', name: 'Ferry to Üsküdar', desc: 'Cross to Asia · gulls & tea on deck', transit: 'Ferry from Eminönü', icon: 'ferry', mapUrl: mapQuery('Üsküdar ferry') },
      { time: '09:30', timeOfDay: 'morning', name: 'Maiden\'s Tower', desc: 'Iconic Bosphorus islet · legends & views', transit: 'Ferry from Üsküdar', icon: 'ferry', mapUrl: mapQuery('Maiden\'s Tower Istanbul') },
      { time: '11:00', timeOfDay: 'morning', name: 'Çamlıca Mosque', desc: 'Turkey\'s largest mosque · panoramic courtyard', transit: 'Taxi 15 min', icon: 'cab', mapUrl: mapQuery('Çamlıca Mosque') },
      { time: '13:00', timeOfDay: 'afternoon', name: 'Kanaat Lokantası', desc: 'Lunch · classic Üsküdar home cooking since 1933', transit: 'Taxi 12 min', icon: 'cab', mapUrl: mapQuery('Kanaat Lokantası Üsküdar') },
      { time: '14:30', timeOfDay: 'afternoon', name: 'Çamlıca Hill', desc: 'Highest viewpoint · full city & Bosphorus panorama', transit: 'Taxi 15 min', icon: 'cab', mapUrl: mapQuery('Çamlıca Hill') },
      { time: '16:00', timeOfDay: 'afternoon', name: 'Kadıköy Market', desc: 'Fish market alleys · street food · local energy', transit: 'Taxi / ferry', icon: 'cab', mapUrl: mapQuery('Kadıköy Market') },
      { time: '17:30', timeOfDay: 'evening', name: 'Moda', desc: 'Bohemian seaside quarter · sunset on the rocks', transit: 'Walk 15 min', icon: 'walk', mapUrl: mapQuery('Moda Kadıköy') },
      { time: '19:30', timeOfDay: 'night', name: 'Çiya Sofrası', desc: 'Dinner · regional Anatolian cuisine · food-lover favourite', transit: 'Walk 15 min', icon: 'walk', mapUrl: mapQuery('Çiya Sofrası Kadıköy') }
    ]
  },
  {
    day: 6,
    title: 'Hidden Istanbul — Balat & Eyüp',
    color: '#047857',
    routePreview: '7 stops · start 09:00 · Golden Horn neighbourhoods',
    mapUrl: 'https://www.google.com/maps/dir/Velvet+Cafe+Balat/Balat/Fener/Forno+Balat/Eyup+Sultan+Mosque/Pierre+Loti+Hill/Aga+Kapisi',
    budget: dayBudget,
    photos: [img(), img(), img(), img()],
    stops: [
      { time: '09:00', timeOfDay: 'morning', name: 'Velvet Café', desc: 'Breakfast · photogenic Balat café', transit: 'Taxi from hotel', icon: 'cab', mapUrl: mapQuery('Velvet Café Balat') },
      { time: '10:00', timeOfDay: 'morning', name: 'Balat', desc: 'Rainbow houses · Kiremit Street · artisan cafés', transit: 'Walk', icon: 'walk', mapUrl: mapQuery('Balat Istanbul') },
      { time: '11:30', timeOfDay: 'morning', name: 'Fener', desc: 'Greek Orthodox quarter · Patriarchate · red school', transit: 'Walk 10 min', icon: 'walk', mapUrl: mapQuery('Fener Istanbul') },
      { time: '13:00', timeOfDay: 'afternoon', name: 'Forno Balat', desc: 'Lunch · wood-fired pide, pizza & fresh bread', transit: 'Walk 8 min', icon: 'walk', mapUrl: mapQuery('Forno Balat') },
      { time: '15:00', timeOfDay: 'afternoon', name: 'Eyüp Mosque', desc: 'Holiest mosque in Istanbul · tomb of Abu Ayyub al-Ansari', transit: 'Taxi 10 min', icon: 'cab', mapUrl: mapQuery('Eyüp Sultan Mosque') },
      { time: '16:30', timeOfDay: 'evening', name: 'Pierre Loti Cable Car', desc: 'Teleferik up the Golden Horn hillside', transit: 'Cable car', icon: 'cab', mapUrl: mapQuery('Pierre Loti Cable Car') },
      { time: '17:30', timeOfDay: 'evening', name: 'Pierre Loti Hill', desc: 'Golden Horn sunset · tea terrace · dinner at Ağa Kapısı', transit: 'Walk 3 min', icon: 'walk', mapUrl: mapQuery('Pierre Loti Hill') }
    ]
  },
  {
    day: 7,
    title: 'Relax & Luxury',
    color: '#134e4a',
    routePreview: '8 stops · start 09:00 · parks, shopping & skyline',
    mapUrl: 'https://www.google.com/maps/dir/Mangerie+Bebek/Emirgan+Park/Emirgan+Sutis/Lacivert+Istanbul/Istinye+Park/Nisantasi/Mikla+Istanbul',
    budget: dayBudget,
    photos: [img(), img(), img(), img()],
    stops: [
      { time: '09:00', timeOfDay: 'morning', name: 'Mangerie Bebek', desc: 'Breakfast · beloved Bebek Bosphorus café', transit: 'Taxi from hotel', icon: 'cab', mapUrl: mapQuery('Mangerie Bebek') },
      { time: '10:30', timeOfDay: 'morning', name: 'Emirgan Park', desc: 'Historic pavilions · tulip lawns · Bosphorus greenery', transit: 'Taxi 10 min', icon: 'cab', mapUrl: mapQuery('Emirgan Park') },
      { time: '12:00', timeOfDay: 'afternoon', name: 'Emirgan Sütiş', desc: 'Coffee & milk-pudding break in the park', transit: 'Walk in park', icon: 'walk', mapUrl: mapQuery('Emirgan Sütiş') },
      { time: '13:00', timeOfDay: 'afternoon', name: 'Lacivert', desc: 'Lunch · Bosphorus-edge seafood beneath the bridge', transit: 'Taxi / boat', icon: 'cab', mapUrl: mapQuery('Lacivert Restaurant Istanbul') },
      { time: '15:00', timeOfDay: 'afternoon', name: 'Istinye Park Mall', desc: 'Luxury & high-street shopping · open-air galleria', transit: 'Taxi 15 min', icon: 'cab', mapUrl: mapQuery('Istinye Park') },
      { time: '17:00', timeOfDay: 'evening', name: 'Nişantaşı', desc: 'Istanbul\'s designer district · boutiques & cafés', transit: 'Taxi 15 min', icon: 'cab', mapUrl: mapQuery('Nişantaşı') },
      { time: '20:00', timeOfDay: 'night', name: 'Mikla', desc: 'Dinner · New Anatolian tasting menu · rooftop', transit: 'Taxi 10 min', icon: 'cab', mapUrl: mapQuery('Mikla Restaurant Istanbul') },
      { time: '22:00', timeOfDay: 'night', name: 'Istanbul Skyline Night View', desc: 'Nightcap with the illuminated skyline from the rooftop', transit: 'Same venue', icon: 'walk', mapUrl: mapQuery('Mikla Restaurant Istanbul') }
    ]
  }
];

const PLAN = {
  meta: {
    city: 'Istanbul',
    country: 'Turkey',
    tagline: 'Byzantine domes, Ottoman palaces and two continents — seven premium days.',
    badge: 'Discover · 2026 Edition',
    edition: '2026',
    stats: {
      chapters: 44,
      qrCodes: '150+',
      attractions: attractions.length,
      hotels: hotels.length,
      dining: dining.length,
      days: 7
    },
    theme: {
      accent: '#0d9488',
      accentSoft: '#ccfbf1',
      accentDeep: '#0f766e',
      heroImage: PLACEHOLDER,
      transitLabel: 'Metro',
      tube: '#0d9488',
      parks: '#2d6a4f',
      river: '#0077b6',
      gold: '#b8860b',
      navy: '#1a2744'
    }
  },
  welcome: {
    editorLetter: 'Istanbul is the only city on Earth that straddles two continents — and it wears its 2,700 years lightly. Byzantine cathedrals became imperial mosques, Ottoman sultans built palaces along the Bosphorus, and today ferries still shuttle between Europe and Asia while gulls trail the wake. This seven-day companion follows a premium itinerary built for discerning travellers: every hour mapped, every monument, hotel and restaurant carrying a scannable link.\n\nWalk the Historic Peninsula, cruise the Bosphorus, cross to the Asian side, and lose yourself in Balat\'s rainbow lanes. From Hagia Sophia to a rooftop dinner at Mikla, this is Istanbul at its most memorable.',
    howToUse: 'Point your phone camera at any QR code and the location opens in Google Maps in one tap. Every booking and official website link is clickable in the PDF. Colour-coded day chapters make navigation effortless — plan around prayer times and museum closing days noted in each entry.\n\n— The Editors, Istanbul Bureau'
  },
  essentials: {
    currency: { label: '₺ Turkish Lira', note: 'Cards accepted almost everywhere. Carry cash for bazaars, street food and small cafés.' },
    power: { label: 'Type C/F · 230V', note: 'European two-pin plug. Bring a universal adapter.' },
    sim: { label: 'eSIM or Turkcell', note: 'Turkcell, Vodafone and Türk Telekom at IST airport. eSIM activates on landing Wi-Fi.' },
    language: { label: 'Turkish', note: 'English widely spoken in tourist areas. Learn merhaba and teşekkürler — locals appreciate the effort.' },
    tipping: { label: '10% or round up', note: 'Appreciated in restaurants and by guides. Round up taxi fares.' },
    emergency: { label: '112 · 155 · 110', note: 'All emergencies · Police · Fire.' },
    tapWater: { label: 'Not recommended', note: 'Drink bottled water. Tap water is safe for brushing teeth only.' },
    timezone: { label: 'TRT · UTC+3', note: 'No daylight saving — same time year-round.' }
  },
  arrival: [
    { step: '01', title: 'Border', desc: 'Istanbul Airport (IST) on the European side handles most international flights; Sabiha Gökçen (SAW) serves the Asian side. e-Visa for most nationalities — apply online before travel. GCC citizens: most enter visa-free or on e-Visa.' },
    { step: '02', title: 'SIM / eSIM', desc: 'Activate your eSIM on airport Wi-Fi, or buy a Turkcell tourist SIM at arrivals (≈₺1,000 for 20GB). Passport required to register.' },
    { step: '03', title: 'Cash', desc: 'Withdraw ₺2,000–4,000 from a Ziraat, İş Bankası or Garanti ATM. Avoid airport FX booths — poor rates.' },
    { step: '04', title: 'İstanbulkart', desc: 'Buy an İstanbulkart at the airport metro or any kiosk (₺130 + top-up). One card covers metro, tram, ferry, funicular and bus.' },
    { step: '05', title: 'Airport transfer', desc: 'IST: M11 metro to city, or HAVAIST bus (₺160), or taxi ₺900–1,400 (45–60 min). SAW: taxi ₺700–1,100 or HAVABUS.' },
    { step: '06', title: 'Hotel', desc: 'Check-in from 14:00. Most Karaköy and Sultanahmet hotels hold luggage from morning — drop bags and start exploring.' },
    { step: '07', title: 'First meal', desc: 'Head to Namlı Gurme in Karaköy or Seven Hills in Sultanahmet for a full Turkish breakfast and your first çay.' }
  ],
  packing: {
    spring: { months: 'MAR–MAY', temp: '10–20 °C · showers likely', items: ['Light rain jacket', 'Layerable knit', 'Comfortable walking shoes', 'Compact umbrella', 'Scarf for mosques', 'Sunglasses'] },
    summer: { months: 'JUN–AUG', temp: '22–30 °C · warm & humid', items: ['Light breathable layers', 'Walking sandals', 'Sunscreen SPF 30', 'Refillable bottle', 'Scarf/shawl for mosques', 'Sun hat'] },
    autumn: { months: 'SEP–NOV', temp: '12–22 °C · golden light', items: ['Light trench', 'Layerable tops', 'Umbrella', 'Comfortable shoes', 'Warm layer for evenings', 'Camera'] },
    winter: { months: 'DEC–FEB', temp: '5–12 °C · rain & occasional snow', items: ['Warm waterproof coat', 'Jumper layers', 'Waterproof shoes', 'Beanie & gloves', 'Umbrella', 'Scarf for mosques'] }
  },
  weatherTable: {
    rows: [
      { month: 'Jan', avgTemp: '3 / 9 °C', rain: '55%', sunset: '17:20', crowds: 'Low', recommend: 'Museums · hammam · covered bazaars' },
      { month: 'Feb', avgTemp: '3 / 10 °C', rain: '50%', sunset: '17:55', crowds: 'Low', recommend: 'Palaces · fewer queues' },
      { month: 'Mar', avgTemp: '5 / 12 °C', rain: '50%', sunset: '18:35', crowds: 'Rising', recommend: 'City walks · shoulder prices' },
      { month: 'Apr', avgTemp: '9 / 17 °C', rain: '45%', sunset: '19:45', crowds: 'Medium', recommend: 'Tulip season · Emirgan Park' },
      { month: 'May', avgTemp: '13 / 22 °C', rain: '40%', sunset: '20:15', crowds: 'High', recommend: 'Perfect Bosphorus weather' },
      { month: 'Jun', avgTemp: '18 / 27 °C', rain: '30%', sunset: '20:40', crowds: 'High', recommend: 'Long days · cruises' },
      { month: 'Jul', avgTemp: '21 / 29 °C', rain: '20%', sunset: '20:45', crowds: 'Peak', recommend: 'Early starts · shade & ferries' },
      { month: 'Aug', avgTemp: '21 / 30 °C', rain: '20%', sunset: '20:15', crowds: 'Peak', recommend: 'Rooftop dining · Asian side' },
      { month: 'Sep', avgTemp: '18 / 26 °C', rain: '35%', sunset: '19:25', crowds: 'High', recommend: 'Best month overall' },
      { month: 'Oct', avgTemp: '14 / 21 °C', rain: '55%', sunset: '18:25', crowds: 'Medium', recommend: 'Autumn light · comfortable walking' },
      { month: 'Nov', avgTemp: '10 / 16 °C', rain: '60%', sunset: '17:05', crowds: 'Low', recommend: 'Cosy meyhane evenings' },
      { month: 'Dec', avgTemp: '6 / 12 °C', rain: '60%', sunset: '16:45', crowds: 'Low', recommend: 'Festive lights · indoor sights' }
    ],
    sweetSpot: 'April–May and September–October deliver the finest Istanbul: comfortable walking weather, glowing light on the Bosphorus, and manageable queues at Hagia Sophia and Topkapı. July–August is hot and humid but magnificent on the water — start early and retreat to ferries and rooftops in the afternoon heat.'
  },
  transport: {
    modes: [
      { icon: 'walk', name: 'Walk', price: 'Free', desc: 'Sultanahmet, Karaköy and Galata are compact and best explored on foot — expect hills.' },
      { icon: 'metro', name: 'Tram & Metro', price: '₺27 per ride', desc: 'T1 tram links Sultanahmet, Eminönü and Kabataş. Metro lines reach the airport and new districts. Use İstanbulkart.' },
      { icon: 'ferry', name: 'Ferry', price: '₺27–150', desc: 'The best way to cross the Bosphorus. Şehir Hatları ferries link Eminönü, Karaköy, Üsküdar and Kadıköy.' },
      { icon: 'cab', name: 'Taxi', price: '₺150–500', desc: 'Yellow taxis metered. Use BiTaksi or Uber to avoid disputes. Confirm the meter is running.' },
      { icon: 'uber', name: 'BiTaksi / Uber', price: '₺120–450', desc: 'App-based rides connect to licensed taxis — best for evenings and cross-city hops.' },
      { icon: 'metro', name: 'Funicular & Cable Car', price: '₺27', desc: 'Tünel and F1 funiculars climb the hills; teleferik serves Eyüp and Pierre Loti.' }
    ],
    oysterTips: [
      { title: 'Get an İstanbulkart', desc: 'One rechargeable card covers tram, metro, ferry, funicular and bus — and gives transfer discounts. Buy at any kiosk or machine.' },
      { title: 'Cross by ferry, not bridge', desc: 'For Üsküdar and Kadıköy take the ferry — cheaper, faster and far more scenic than a taxi over the bridge.' },
      { title: 'Tram for the Peninsula', desc: 'The T1 tram threads Sultanahmet, Grand Bazaar, Eminönü and Kabataş — perfect for Days 1–2 and 4.' },
      { title: 'Avoid rush-hour taxis', desc: 'Istanbul traffic is severe 08:00–10:00 and 17:00–20:00. Use rail and ferries at peak times.' }
    ],
    exit6Tip: 'Step off the ferry at Eminönü and the whole Historic Peninsula rises before you — the New Mosque, the Spice Bazaar, and Süleymaniye crowning the hill. Grab a balık ekmek fish sandwich from the quay and let the city announce itself.'
  },
  maps: {
    overview: {
      caption: 'A schematic map — for exact directions, scan any QR code in this guide.',
      markers: [
        { name: 'Hagia Sophia', type: 'attraction', lat: 41.0086, lng: 28.9802 },
        { name: 'Blue Mosque', type: 'attraction', lat: 41.0054, lng: 28.9768 },
        { name: 'Topkapı Palace', type: 'attraction', lat: 41.0115, lng: 28.9834 },
        { name: 'Grand Bazaar', type: 'attraction', lat: 41.0106, lng: 28.9681 },
        { name: 'Galata Tower', type: 'attraction', lat: 41.0256, lng: 28.9744 },
        { name: 'Dolmabahçe Palace', type: 'attraction', lat: 41.0391, lng: 29.0001 },
        { name: 'Ortaköy Mosque', type: 'attraction', lat: 41.0473, lng: 29.0269 },
        { name: 'Maiden\'s Tower', type: 'attraction', lat: 41.0211, lng: 29.0041 },
        { name: 'Karaköy', type: 'district', lat: 41.0256, lng: 28.9744 },
        { name: 'The Peninsula Istanbul', type: 'hotel', lat: 41.0248, lng: 28.9770 },
        { name: 'Çırağan Palace Kempinski', type: 'hotel', lat: 41.0442, lng: 29.0136 },
        { name: 'Hamdi Restaurant', type: 'dining', lat: 41.0170, lng: 28.9709 },
        { name: 'Mikla', type: 'dining', lat: 41.0316, lng: 28.9756 }
      ]
    }
  },
  attractions,
  hotels,
  dining,
  itineraries,
  rainyDay: [
    { name: 'Hagia Sophia', address: 'Sultanahmet', desc: 'Byzantine & Ottoman masterpiece · covered', img: img(), mapUrl: mapQuery('Hagia Sophia') },
    { name: 'Basilica Cistern', address: 'Sultanahmet', desc: 'Atmospheric underground reservoir', img: img(), mapUrl: mapQuery('Basilica Cistern') },
    { name: 'Grand Bazaar', address: 'Beyazıt', desc: '4,000 covered shops · rainproof shopping', img: img(), mapUrl: mapQuery('Grand Bazaar Istanbul') },
    { name: 'Topkapı Palace', address: 'Sultanahmet', desc: 'Treasury & Harem · mostly indoors', img: img(), mapUrl: mapQuery('Topkapı Palace') },
    { name: 'Dolmabahçe Palace', address: 'Beşiktaş', desc: 'Crystal halls · guided indoor tour', img: img(), mapUrl: mapQuery('Dolmabahçe Palace') },
    { name: 'Spice Bazaar', address: 'Eminönü', desc: 'Covered market · tastings & tea', img: img(), mapUrl: mapQuery('Spice Bazaar Istanbul') }
  ],
  sunnyDay: [
    { name: 'Bosphorus Cruise', address: 'Eminönü / Kabataş', desc: 'Europe & Asia shorelines by boat', img: img(), mapUrl: mapQuery('Bosphorus Cruise Istanbul') },
    { name: 'Galata Tower', address: 'Beyoğlu', desc: '360° rooftop views of the city', img: img(), mapUrl: mapQuery('Galata Tower') },
    { name: 'Emirgan Park', address: 'Sarıyer', desc: 'Tulip lawns & Bosphorus greenery', img: img(), mapUrl: mapQuery('Emirgan Park') },
    { name: 'Ortaköy Mosque', address: 'Beşiktaş', desc: 'Waterfront baroque mosque & kumpir', img: img(), mapUrl: mapQuery('Ortaköy Mosque') },
    { name: 'Balat', address: 'Fatih', desc: 'Rainbow houses & artisan lanes', img: img(), mapUrl: mapQuery('Balat Istanbul') },
    { name: 'Maiden\'s Tower', address: 'Üsküdar', desc: 'Ferry to the iconic Bosphorus islet', img: img(), mapUrl: mapQuery('Maiden\'s Tower Istanbul') }
  ],
  hiddenGems: [
    { name: 'Balat', desc: 'Rainbow houses, synagogues & cafés in the old Jewish quarter', img: img(), mapUrl: mapQuery('Balat Istanbul') },
    { name: 'Süleymaniye Mosque', desc: 'Sinan\'s quieter masterpiece with a Golden Horn terrace', img: img(), mapUrl: mapQuery('Süleymaniye Mosque') },
    { name: 'Pierre Loti Hill', desc: 'Teleferik to a Golden Horn sunset tea terrace', img: img(), mapUrl: mapQuery('Pierre Loti Hill') },
    { name: 'Çiya Sofrası', desc: 'Kadıköy temple of forgotten Anatolian recipes', img: img(), mapUrl: mapQuery('Çiya Sofrası Kadıköy') },
    { name: 'Arasta Bazaar', desc: 'Calm textile lanes behind the Blue Mosque', img: img(), mapUrl: mapQuery('Arasta Bazaar Istanbul') },
    { name: 'Rumeli Fortress', desc: 'Floodlit 1452 fortress at the Bosphorus narrows', img: img(), mapUrl: mapQuery('Rumeli Fortress') }
  ],
  warnings: [
    { title: 'Mosque etiquette', desc: 'Dress modestly — cover shoulders and knees; women should carry a headscarf. Remove shoes. Avoid visiting during the five daily prayers, especially Friday noon.' },
    { title: 'Bazaar bargaining scams', desc: 'Bargain politely but firmly. Ignore touts offering "free" tea tied to carpet sales. Never follow a "friendly guide" to a shop.' },
    { title: 'Taxi overcharging', desc: 'Insist on the meter or use BiTaksi/Uber. Some drivers claim the meter is broken — decline and take the next one.' },
    { title: 'Restaurant "shoe-shine" & menu tricks', desc: 'Confirm prices before ordering fish (often sold by weight). Beware unpriced meze plates delivered unasked.' },
    { title: 'Rush-hour traffic', desc: 'Cross-city taxis can take an hour at peak times. Plan Bosphorus and Asian-side days around ferries.' },
    { title: 'Currency exchange', desc: 'Use bank ATMs (Ziraat, İş Bankası, Garanti). Avoid airport and street exchange kiosks with poor rates.' },
    { title: 'Pickpockets in crowds', desc: 'Keep valuables secure in the Grand Bazaar, on trams and around Istiklal Street.' }
  ],
  shopping: {
    districts: [
      { name: 'Grand Bazaar', desc: 'Carpets, ceramics, lamps, gold · 4,000 shops', img: img(), mapUrl: mapQuery('Grand Bazaar Istanbul') },
      { name: 'Spice Bazaar', desc: 'Saffron, sumac, lokum, tea & sweets', img: img(), mapUrl: mapQuery('Spice Bazaar Istanbul') },
      { name: 'Nişantaşı', desc: 'Designer boutiques & Istanbul\'s Champs-Élysées', img: img(), mapUrl: mapQuery('Nişantaşı') },
      { name: 'Istinye Park', desc: 'Luxury & high-street brands · open-air mall', img: img(), mapUrl: mapQuery('Istinye Park') }
    ],
    brands: ['Turkish delight (lokum)', 'İznik & Kütahya ceramics', 'Hand-knotted carpets & kilims', 'Mosaic lamps', 'Turkish tea & çay sets', 'Antep pistachios & baklava'],
    souvenirs: ['Turkish delight box', 'Evil-eye (nazar) charm', 'İznik-tile trivet', 'Copper cezve coffee pot', 'Apple tea', 'Hand-painted ceramic bowl'],
    vatTips: { rate: '20% KDV', refund: 'Tax-free shopping for non-residents on purchases over ₺2,000 at participating stores. Ask for the Global Blue / tax-free form at checkout and claim your refund at the airport before check-in.' }
  },
  budget: {
    budget: { daily: '₺1,800–2,800 per person / day', accommodation: '€20–40 Cheers Hostel dorm', food: '₺400 street food & lokanta', transport: '₺150 İstanbulkart', activities: '₺600 one museum', extras: '₺200 çay & sweets', tip: 'Free mosques and squares fill most days. Use ferries and trams, eat balık ekmek and döner, and splurge on a single palace ticket.' },
    mid: { daily: '₺3,500–6,000 per person / day', accommodation: '€120–180 Meroddi Galata Mansion', food: '₺1,500 sit-down meals', transport: '₺400 taxis & ferries', activities: '₺1,500 palace & cruise', extras: '₺500 hammam or rooftop drink' },
    luxury: { daily: '₺9,000–18,000 per person / day', accommodation: '€700+ The Peninsula Istanbul', food: '₺4,500 Mikla / Sunset Grill', transport: '₺1,500 private driver', activities: '₺3,000 private Bosphorus boat & guide', extras: '₺1,500 spa & tips' }
  },
  family: {
    tip: 'Children love the ferries, the Basilica Cistern and the Bosphorus boats. Many museums are free for under-8s. Strollers struggle on Sultanahmet cobbles and Grand Bazaar crowds — a baby carrier is easier.',
    rows: [
      { attraction: 'Bosphorus Cruise', desc: 'Boats, bridges & gulls delight all ages', goodForKids: true, stroller: true, babyChange: false, familyTicket: true },
      { attraction: 'Basilica Cistern', desc: 'Atmospheric walkways · easy and cool', goodForKids: true, stroller: false, babyChange: false, familyTicket: true },
      { attraction: 'Galata Tower', desc: 'Lift to the top · panoramic views', goodForKids: true, stroller: false, babyChange: false, familyTicket: true },
      { attraction: 'Topkapı Palace', desc: 'Big courtyards to roam · Treasury sparkle', goodForKids: true, stroller: true, babyChange: true, familyTicket: true },
      { attraction: 'Miniatürk (optional)', desc: 'Miniature Turkey park · great for kids', goodForKids: true, stroller: true, babyChange: true, familyTicket: true },
      { attraction: 'Emirgan Park', desc: 'Lawns and paths to run free', goodForKids: true, stroller: true, babyChange: true, familyTicket: true },
      { attraction: 'Grand Bazaar', desc: 'Fun but crowded · hold little hands', goodForKids: true, stroller: false, babyChange: false, familyTicket: true }
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
      { name: 'Acıbadem Taksim Hospital', address: 'Taksim · Beyoğlu', icon: 'hospital', mapUrl: mapQuery('Acıbadem Taksim Hospital') },
      { name: 'American Hospital (Amerikan Hastanesi)', address: 'Nişantaşı · Şişli', icon: 'hospital', mapUrl: mapQuery('American Hospital Istanbul') },
      { name: 'Memorial Şişli Hospital', address: 'Şişli · Istanbul', icon: 'hospital', mapUrl: mapQuery('Memorial Şişli Hospital') }
    ],
    embassies: [
      { country: 'Saudi Arabia', address: 'Consulate General · Levent · Istanbul', icon: 'embassy', mapUrl: 'https://www.google.com/maps/search/?api=1&query=Saudi+Consulate+Istanbul' },
      { country: 'United Arab Emirates', address: 'Consulate · Istanbul', icon: 'embassy', mapUrl: 'https://www.google.com/maps/search/?api=1&query=UAE+Consulate+Istanbul' },
      { country: 'Kuwait', address: 'Consulate · Istanbul', icon: 'embassy', mapUrl: 'https://www.google.com/maps/search/?api=1&query=Kuwait+Consulate+Istanbul' },
      { country: 'Qatar', address: 'Consulate · Istanbul', icon: 'embassy', mapUrl: 'https://www.google.com/maps/search/?api=1&query=Qatar+Consulate+Istanbul' },
      { country: 'Bahrain', address: 'Embassy · Ankara', icon: 'embassy', mapUrl: 'https://www.google.com/maps/search/?api=1&query=Bahrain+Embassy+Ankara' },
      { country: 'Oman', address: 'Embassy · Ankara', icon: 'embassy', mapUrl: 'https://www.google.com/maps/search/?api=1&query=Oman+Embassy+Ankara' }
    ],
    lostPassport: 'Report to the nearest police station (155). Contact your consulate in Istanbul or embassy in Ankara — they can issue an emergency travel document within 48–72 h. Photograph your passport and visa before you fly and keep a copy in the cloud.'
  },
  phrases: [
    { english: 'Hello', use: 'Merhaba — opens every conversation' },
    { english: 'Thank you', use: 'Teşekkürler — locals appreciate it' },
    { english: 'How much is this?', use: 'Ne kadar? — market and taxi negotiation' },
    { english: 'Tea, please', use: 'Bir çay, lütfen — the national drink' },
    { english: 'Where is the ferry?', use: 'Vapur nerede? — Bosphorus navigation' },
    { english: 'A table for two, please', use: 'İki kişilik masa, lütfen — restaurant arrival' },
    { english: 'The bill, please', use: 'Hesap, lütfen — end of meal' },
    { english: 'Is it halal?', use: 'Helal mi? — dietary check' }
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
      { label: 'İstanbulkart', value: 'One card for all transit' },
      { label: '₺27', value: 'Tram / metro / ferry ride' },
      { label: 'BiTaksi', value: 'App for taxis' }
    ],
    money: [
      { label: 'Cash for bazaars', value: 'Carry ₺1,000' },
      { label: 'Cards elsewhere', value: 'Widely accepted' },
      { label: 'Tip 10%', value: 'Round up taxis' }
    ],
    apps: [
      { name: 'BiTaksi', use: 'Taxi booking' },
      { name: 'Google Maps', use: 'Navigation · offline maps' },
      { name: 'Moovit', use: 'Public transport routes' }
    ],
    topQrCodes: [
      { name: 'Istanbul Airport (IST)', mapUrl: 'https://www.google.com/maps/search/?api=1&query=Istanbul+Airport' },
      { name: 'Hagia Sophia', mapUrl: mapQuery('Hagia Sophia') },
      { name: 'Blue Mosque', mapUrl: mapQuery('Blue Mosque Istanbul') },
      { name: 'Topkapı Palace', mapUrl: mapQuery('Topkapı Palace') },
      { name: 'Grand Bazaar', mapUrl: mapQuery('Grand Bazaar Istanbul') },
      { name: 'The Peninsula Istanbul', mapUrl: mapQuery('The Peninsula Istanbul') },
      { name: 'Galata Tower', mapUrl: mapQuery('Galata Tower') },
      { name: 'Eminönü Ferry Pier', mapUrl: mapQuery('Eminönü ferry pier') }
    ]
  },
  etiquette: [
    { rule: 'Dress for mosques', desc: 'Cover shoulders and knees; women cover their hair. Remove shoes and stay quiet during prayer. Scarves are provided at major mosques.' },
    { rule: 'Remove shoes indoors', desc: 'Take off shoes when entering homes and some traditional restaurants. Look for a shoe rack by the door.' },
    { rule: 'Tea is hospitality', desc: 'Being offered çay is a warm gesture. Accepting — even a small glass — is polite; refusing repeatedly can seem cold.' },
    { rule: 'Haggle with a smile', desc: 'Bargaining is expected in the bazaars but should stay friendly. Start around 50% of the asking price and meet in the middle.' },
    { rule: 'Ramadan awareness', desc: 'During Ramadan, eating and drinking in public during daylight is discouraged. Restaurants still serve tourists discreetly.' },
    { rule: 'Photograph respectfully', desc: 'Ask before photographing people, especially in Balat and Fener where residents live among the tourists.' },
    { rule: 'Public affection', desc: 'Keep it modest, particularly near mosques and in conservative neighbourhoods.' }
  ]
};

const output = `/**
 * DISCOVER Istanbul — 7-Day Premium Itinerary
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
