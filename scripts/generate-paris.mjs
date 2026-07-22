import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const outPath = path.join(root, 'data', 'paris.js');

const P = {
  eiffel: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=640&q=75&fm=jpg',
  paris: 'https://images.unsplash.com/photo-1509438979629-aa539b2246b7?auto=format&fit=crop&w=640&q=75&fm=jpg',
  louvre: 'https://images.unsplash.com/photo-1566555434510-d8678914418c?auto=format&fit=crop&w=640&q=75&fm=jpg',
  seine: 'https://images.unsplash.com/photo-1499856877831-d3a83cccb701?auto=format&fit=crop&w=640&q=75&fm=jpg',
  montmartre: 'https://images.unsplash.com/photo-1550340490-a7d2887a3faf?auto=format&fit=crop&w=640&q=75&fm=jpg',
  arc: 'https://images.unsplash.com/photo-1549144511-f099e773c14e?auto=format&fit=crop&w=640&q=75&fm=jpg',
  bridge: 'https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?auto=format&fit=crop&w=640&q=75&fm=jpg',
  garden: 'https://images.unsplash.com/photo-1527004013197-933c4ad874c5?auto=format&fit=crop&w=640&q=75&fm=jpg',
  cafe: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=640&q=75&fm=jpg',
  hotel: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=640&q=75&fm=jpg',
  food: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=640&q=75&fm=jpg',
  room: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=640&q=75&fm=jpg',
  map: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=640&q=75&fm=jpg',
  notre: 'https://images.unsplash.com/photo-1431277653776-7d953a1693c4?auto=format&fit=crop&w=640&q=75&fm=jpg',
  shop: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=640&q=75&fm=jpg',
};

function mapUrl(q) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;
}

function photos(h, d, ps, m) {
  const hero = h || P.paris;
  const detail = d || P.paris;
  const photoSpot = ps || P.paris;
  const map = m || P.map;
  return {
    hero, detail, photoSpot, map,
    seasonalPhotos: { spring: hero, summer: detail, autumn: photoSpot, christmas: map }
  };
}

function attraction(a) {
  const ph = photos(a.h, a.d, a.ps, a.m);
  return {
    name: a.name,
    address: a.address,
    hours: a.hours,
    tube: a.tube,
    ticket: a.ticket,
    bestArrival: a.bestArrival || '09:30',
    waitSummer: a.waitSummer || '20–40 min',
    waitWinter: a.waitWinter || '5–15 min',
    photoSpot: a.photoSpot,
    lens: a.lens || '24–70mm',
    tip: a.tip,
    mapUrl: mapUrl(a.mapQuery || a.name + ' Paris'),
    bookUrl: a.bookUrl,
    bookText: a.bookText || 'Book Tickets',
    avgVisit: a.avgVisit || '2 hours',
    crowd: a.crowd || { morning: 3, afternoon: 4, evening: 3 },
    nearby: a.nearby || [],
    nearbyCafes: a.nearbyCafes || '',
    nearbyRestaurants: a.nearbyRestaurants || '',
    nearbyTube: a.nearbyTube || a.tube,
    nearbyToilets: a.nearbyToilets || 'Metro stations · major museums · department stores',
    nearbyAtm: a.nearbyAtm || 'Banks along main boulevards · tabacs with ATM signs',
    didYouKnow: a.didYouKnow || '',
    localSecret: a.localSecret || '',
    instagram: a.instagram || { sunset: a.photoSpot, sunrise: a.photoSpot, drone: 'Restricted in central Paris', settings: 'f/8 · ISO 200 · 24–70mm' },
    photos: { hero: ph.hero, detail: ph.detail, photoSpot: ph.photoSpot, map: ph.map },
    seasonalPhotos: ph.seasonalPhotos
  };
}

function hotel(h) {
  return {
    name: h.name,
    category: h.category,
    address: h.address,
    price: h.price,
    rating: h.rating || '8.8',
    googleRating: h.googleRating || '4.5',
    room: h.room,
    cancellation: h.cancellation || 'Free 48h · flexible rate',
    tube: h.tube,
    airport: h.airport || 'CDG 45–60 min · ORY 35–50 min',
    nearbyAttractions: h.nearbyAttractions,
    walkingScore: h.walkingScore || '92 / 100 — central Paris on foot',
    breakfast: h.breakfast || 'Buffet extra or included on premium rates',
    idealFor: h.idealFor,
    tip: h.tip,
    mapUrl: mapUrl(h.mapQuery || h.name + ' Paris'),
    bookUrl: h.bookUrl,
    photos: {
      exterior: h.exterior || P.hotel,
      lobby: P.hotel,
      room: P.room,
      luxuryRoom: P.room,
      restaurant: P.food,
      pool: P.hotel,
      rooftop: P.eiffel,
      breakfast: P.cafe,
      spa: P.hotel,
      view: P.eiffel
    }
  };
}

function makeDining(d) {
  return {
    name: d.name,
    category: d.category,
    address: d.address,
    price: d.price,
    famous: d.famous,
    halal: d.halal ?? false,
    vegetarian: d.vegetarian ?? true,
    reservation: d.reservation || 'Recommended',
    wait: d.wait || '15–30 min',
    michelin: d.michelin || '—',
    kidsFriendly: d.kidsFriendly ?? true,
    dressCode: d.dressCode || 'Smart casual',
    tip: d.tip || 'Reserve ahead for dinner. Service charge may be included — check the bill before tipping 10%.',
    mapUrl: mapUrl(d.mapQuery || d.name + ' Paris'),
    bookUrl: d.bookUrl,
    dishes: (d.dishes || []).map((name, i) => ({
      name,
      img: [P.food, P.cafe, P.food, P.food, P.cafe][i % 5],
      desc: d.dishDescs?.[i] || `House favourite at ${d.name}.`
    })),
    photos: {
      signature: P.food,
      interior: P.cafe,
      exterior: P.paris,
      dessert: P.food,
      coffee: P.cafe
    }
  };
}

const attractions = [
  attraction({ name: 'Eiffel Tower', address: 'Champ de Mars, 5 Av. Anatole France · 75007', hours: '09:30–23:45 · last lift 22:30', tube: 'Bir-Hakeim · Trocadéro · Line 6/9', ticket: '€29 adult summit · pre-book online', bestArrival: '09:30', waitSummer: '60–90 min', waitWinter: '20–40 min', photoSpot: 'Trocadéro Gardens across the Seine — classic postcard angle.', lens: '24–70mm', tip: 'Pre-book tickets for a timed slot. Sunrise and last light are magical; skip midday queues.', bookUrl: 'https://www.toureiffel.paris/en', avgVisit: '2–3 hours', nearby: [{ name: 'Trocadéro Gardens', walk: '8 min' }, { name: 'Seine River Cruise', walk: '10 min' }, { name: 'Champ de Mars', walk: '2 min' }], nearbyCafes: 'Café de Flore · Carette Trocadéro', nearbyRestaurants: 'Girafe Paris · Le Jules Verne · Les Ombres', didYouKnow: 'Built for the 1889 Exposition Universelle, the tower was meant to be temporary.', localSecret: 'Skip the summit at noon — book the last evening slot and watch Paris light up.', h: P.eiffel, d: P.paris, ps: P.eiffel }),
  attraction({ name: 'Trocadéro Gardens', address: 'Place du Trocadéro et du 11 Novembre · 75016', hours: 'Open 24h · fountains Apr–Oct', tube: 'Trocadéro · Lines 6/9', ticket: 'Free', photoSpot: 'Terraces facing the Eiffel Tower — best at sunrise and blue hour.', tip: 'Arrive before 08:00 for empty frames. Fountains run on a schedule in summer.', bookUrl: 'https://www.paris.fr/', bookText: 'Visitor Info', avgVisit: '45 min', nearby: [{ name: 'Eiffel Tower', walk: '8 min' }, { name: 'Palais de Chaillot', walk: '3 min' }], h: P.eiffel, ps: P.eiffel }),
  attraction({ name: 'Arc de Triomphe', address: 'Place Charles de Gaulle · 75008', hours: '10:00–22:30 · closed some holidays', tube: 'Charles de Gaulle–Étoile · Lines 1/2/6', ticket: '€16 adult · rooftop access', photoSpot: 'From the Champs-Élysées eastward or atop the arch at sunset.', tip: 'Walk the Champs-Élysées after your visit. Use the underground passage — never cross the traffic circle.', bookUrl: 'https://www.paris-arc-de-triomphe.fr/', avgVisit: '1.5 hours', nearby: [{ name: 'Champs-Élysées', walk: '2 min' }, { name: 'Ladurée Champs-Élysées', walk: '8 min' }], h: P.arc, d: P.arc, ps: P.arc }),
  attraction({ name: 'Champs-Élysées', address: 'Av. des Champs-Élysées · 75008', hours: 'Shops 10:00–20:00 · always walkable', tube: 'Franklin D. Roosevelt · George V · Line 1', ticket: 'Free to walk', photoSpot: 'Looking toward the Arc de Triomphe from Concorde end.', tip: 'Stroll the full avenue from Concorde to the Arc. Flagship stores and terraces line both sides.', avgVisit: '1–2 hours', nearby: [{ name: 'Arc de Triomphe', walk: '15 min' }, { name: 'Place de la Concorde', walk: '12 min' }], h: P.shop, d: P.arc }),
  attraction({ name: 'Seine River Cruise', address: 'Boarding near Pont de l\'Alma or Eiffel · 75007', hours: 'Departures ~10:00–22:00 · varies by operator', tube: 'Alma-Marceau · Bir-Hakeim', ticket: '€17–25 · 1 hour cruise', photoSpot: 'Open deck mid-river — bridges and monuments from water level.', tip: 'Book a late-afternoon cruise for golden light on Notre-Dame and the Louvre.', bookUrl: 'https://www.bateaux-mouches.fr/en', avgVisit: '1 hour', nearby: [{ name: 'Eiffel Tower', walk: '10 min' }, { name: 'Pont Alexandre III', walk: '12 min' }], h: P.seine, d: P.bridge, ps: P.seine }),
  attraction({ name: 'Bir-Hakeim Bridge', address: 'Pont de Bir-Hakeim · 75015/75016', hours: 'Open 24h', tube: 'Bir-Hakeim · Line 6', ticket: 'Free', photoSpot: 'Through the iron arches with the Eiffel Tower framed beyond.', tip: 'Featured in Inception — arrive early morning for cinematic emptiness.', avgVisit: '20 min', h: P.bridge, ps: P.eiffel }),
  attraction({ name: 'Pont Alexandre III', address: 'Pont Alexandre III · 75008', hours: 'Open 24h', tube: 'Invalides · Champs-Élysées–Clemenceau', ticket: 'Free', photoSpot: 'Gilded lampposts and views toward the Grand Palais and Invalides.', tip: 'One of Paris\'s most ornate bridges — golden hour reflects beautifully on the Seine.', avgVisit: '20 min', h: P.bridge, ps: P.bridge }),
  attraction({ name: 'Louvre Museum', address: 'Rue de Rivoli · 75001', hours: '09:00–18:00 · closed Tue · Wed/Fri until 21:45', tube: 'Palais Royal–Musée du Louvre · Line 1/7', ticket: '€22 adult · timed entry required', bestArrival: '09:30', waitSummer: '45–90 min', waitWinter: '15–30 min', photoSpot: 'Louvre Pyramid courtyard — classic symmetry shot.', tip: 'Allow 4 hours. Must-see: Mona Lisa, Venus de Milo, Winged Victory. Enter via Passage Richelieu if you have tickets.', bookUrl: 'https://www.louvre.fr/en', avgVisit: '4 hours', nearby: [{ name: 'Jardin des Tuileries', walk: '5 min' }, { name: 'Café Marly', walk: '3 min' }], h: P.louvre, d: P.louvre, ps: P.louvre }),
  attraction({ name: 'Louvre Pyramid', address: 'Cour Napoléon · Musée du Louvre · 75001', hours: 'Same as Louvre · exterior always visible', tube: 'Palais Royal–Musée du Louvre', ticket: 'Free exterior · museum ticket for entry', photoSpot: 'Centre of the courtyard — reflections in the pools.', tip: 'Night shots with illuminated glass are stunning. Tripod-friendly after museum closes.', avgVisit: '30 min', h: P.louvre, ps: P.louvre }),
  attraction({ name: 'Jardin des Tuileries', address: 'Place de la Concorde end · 75001', hours: '07:00–21:00 summer · shorter in winter', tube: 'Tuileries · Concorde', ticket: 'Free', photoSpot: 'Central alley toward the Louvre with trimmed chestnuts.', tip: 'Perfect pause between Louvre and Concorde. Grab a chair by the octagonal pool.', avgVisit: '1 hour', h: P.garden, d: P.garden }),
  attraction({ name: 'Place de la Concorde', address: 'Place de la Concorde · 75008', hours: 'Open 24h', tube: 'Concorde · Lines 1/8/12', ticket: 'Free', photoSpot: 'Between the Luxor Obelisk and views to the Eiffel Tower and Champs-Élysées.', tip: 'France\'s largest public square — link between Tuileries and the Champs-Élysées.', avgVisit: '30 min', h: P.paris, d: P.arc }),
  attraction({ name: 'Galeries Lafayette Rooftop', address: '40 Bd Haussmann · 75009', hours: '09:30–20:00 · rooftop free during store hours', tube: 'Chaussée d\'Antin–La Fayette · Opéra', ticket: 'Free rooftop terrace', photoSpot: '360° views over Opéra Garnier, Eiffel Tower, and Sacré-Cœur.', tip: 'Free city views — one of the best no-ticket panoramas in Paris.', bookUrl: 'https://www.galerieslafayette.com/', bookText: 'Store Info', avgVisit: '45 min', h: P.paris, d: P.shop }),
  attraction({ name: 'Sacré-Cœur Basilica', address: '35 Rue du Chevalier de la Barre · 75018', hours: '06:30–22:30 · dome hours vary', tube: 'Anvers · Abbesses · Line 2/12', ticket: 'Basilica free · dome €8', photoSpot: 'Steps of the parvis overlooking Paris rooftops.', tip: 'Arrive before 10:00 to beat crowds. Dress modestly — shoulders covered.', bookUrl: 'https://www.sacre-coeur-montmartre.com/', avgVisit: '1.5 hours', h: P.montmartre, d: P.montmartre }),
  attraction({ name: 'Montmartre', address: '18th arrondissement · around Place du Tertre', hours: 'Always open · artists from ~10:00', tube: 'Abbesses · Lamarck–Caulaincourt', ticket: 'Free to wander', photoSpot: 'Rue de l\'Abreuvoir and cobbled lanes near Sacré-Cœur.', tip: 'Artists, small cafés, and photography at every corner. Wander without a fixed route.', avgVisit: '2–3 hours', nearby: [{ name: 'La Maison Rose', walk: '5 min' }, { name: 'Le Consulat', walk: '3 min' }], h: P.montmartre, d: P.montmartre }),
  attraction({ name: 'Moulin Rouge', address: '82 Bd de Clichy · 75018', hours: 'Exterior 24h · shows evening', tube: 'Blanche · Line 2', ticket: 'Show tickets from €87 · exterior free', photoSpot: 'Front façade with red windmill — best at dusk when lights glow.', tip: 'Exterior photos only on this itinerary — book a show separately if you wish.', bookUrl: 'https://www.moulinrouge.fr/en/', avgVisit: '20 min exterior', h: P.montmartre, d: P.paris }),
  attraction({ name: 'Galerie Vivienne', address: '4 Rue des Petits-Champs · 75002', hours: 'Shops ~10:00–19:00 · passage always open', tube: 'Bourse · Pyramides', ticket: 'Free passage', photoSpot: 'Glass roof and mosaic floors — Parisian covered arcade perfection.', tip: 'One of the most beautiful 19th-century passages. Combine with nearby Palais Royal.', avgVisit: '45 min', h: P.shop, d: P.paris }),
  attraction({ name: 'Luxembourg Gardens', address: 'Rue de Médicis · 75006', hours: '07:30–21:30 summer · shorter in winter', tube: 'Luxembourg · RER B', ticket: 'Free', photoSpot: 'Grand bassin with toy sailboats and palace backdrop.', tip: 'Parisians\' favourite park — chairs are free to move. Ideal mid-morning pause.', avgVisit: '1.5 hours', h: P.garden, d: P.garden }),
  attraction({ name: 'Panthéon', address: 'Place du Panthéon · 75005', hours: '10:00–18:30', tube: 'Luxembourg · Cardinal Lemoine', ticket: '€13 adult', photoSpot: 'Colonnade and dome from Rue Soufflot.', tip: 'Climb to the dome for sweeping Left Bank views. Foucault\'s pendulum inside.', bookUrl: 'https://www.paris-pantheon.fr/', avgVisit: '1.5 hours', h: P.paris, d: P.notre }),
  attraction({ name: 'Notre-Dame Cathedral', address: '6 Parvis Notre-Dame · 75004', hours: 'Exterior open · interior restoration ongoing', tube: 'Cité · Saint-Michel', ticket: 'Free exterior · tower when reopened', photoSpot: 'Square Jean XXIII behind the cathedral or from the Seine banks.', tip: 'Admire the Gothic façade and flying buttresses. Check reopening status for interior access.', bookUrl: 'https://www.notredamedeparis.fr/', avgVisit: '1 hour', h: P.notre, d: P.notre }),
  attraction({ name: 'Shakespeare & Company', address: '37 Rue de la Bûcherie · 75005', hours: '10:00–22:00', tube: 'Saint-Michel · Cité', ticket: 'Free entry', photoSpot: 'Green-and-gold storefront across from Notre-Dame.', tip: 'Legendary English-language bookshop — browse upstairs reading room quietly.', bookUrl: 'https://shakespeareandcompany.com/', bookText: 'Visit', avgVisit: '45 min', h: P.paris, d: P.cafe }),
  attraction({ name: 'Rue de l\'Université', address: 'Rue de l\'Université · 75007', hours: 'Always open', tube: 'Invalides · Rue du Bac', ticket: 'Free', photoSpot: 'Haussmann façades framing the Eiffel Tower at the street\'s eastern end.', tip: 'Instagram-famous viewpoint — early morning for soft light and no traffic.', avgVisit: '15 min', h: P.eiffel, ps: P.eiffel }),
  attraction({ name: 'Seine River Banks', address: 'Quais along the Seine · 75001–75007', hours: 'Open 24h', tube: 'Multiple · Alma-Marceau · Pont Neuf', ticket: 'Free', photoSpot: 'Île de la Cité bridges at sunset — golden light on stone and water.', tip: 'Midnight walks along the Seine are quintessential Paris. Wine on the quai is a local ritual in summer.', avgVisit: '1 hour', h: P.seine, d: P.bridge, ps: P.seine })
];

const hotels = [
  hotel({ name: 'The Peninsula Paris', category: 'Luxury', address: '19 Av. Kléber · 75016', price: '€1,200–2,000/night', rating: '9.4', googleRating: '4.8', room: 'Grand Premier · marble bathrooms · Eiffel views', tube: 'Kléber · Line 6/9 · near Arc de Triomphe', nearbyAttractions: 'Arc de Triomphe 5 min · Champs-Élysées 8 min', idealFor: ['Luxury', 'Families', 'Couples'], tip: 'Facilities: indoor pool, spa, rooftop terrace, 24h butler. Why we recommend: Parisian palatial grandeur with flawless service and one of the best afternoon teas in the city.', bookUrl: 'https://www.peninsula.com/en/paris/5-star-luxury-hotel-16th-arrondissement' }),
  hotel({ name: 'Shangri-La Paris', category: 'Luxury', address: '10 Av. d\'Iéna · 75016', price: '€900–1,600/night', rating: '9.3', googleRating: '4.7', room: 'Eiffel Tower View Room · former prince\'s residence', tube: 'Iéna · Trocadéro · Line 6/9', nearbyAttractions: 'Trocadéro 3 min · Eiffel Tower 10 min', idealFor: ['Couples', 'Luxury', 'Families'], tip: 'Facilities: indoor pool, spa, Michelin dining, gardens. Why we recommend: Best Eiffel Tower views from room terraces — former home of Roland Bonaparte.', bookUrl: 'https://www.shangri-la.com/paris/shangrila/' }),
  hotel({ name: 'Four Seasons George V', category: 'Luxury', address: '31 Av. George V · 75008', price: '€1,000–2,200/night', rating: '9.5', googleRating: '4.8', room: 'Premier Room · art-deco heritage · Champs-Élysées', tube: 'George V · Line 1', nearbyAttractions: 'Champs-Élysées 2 min · Arc de Triomphe 10 min', idealFor: ['Luxury', 'Couples', 'Business'], tip: 'Facilities: three Michelin-star dining, spa, floral installations, concierge. Why we recommend: The Paris luxury icon — three Michelin stars and legendary service since 1928.', bookUrl: 'https://www.fourseasons.com/paris/' }),
  hotel({ name: 'Hôtel Le Six', category: 'Mid-Range', address: '14 Rue Stanislas · Saint-Germain · 75006', price: '€280–450/night', rating: '8.9', googleRating: '4.6', room: 'Classic Double · Left Bank charm', tube: 'Notre-Dame-des-Champs · Rennes · Line 4/12', nearbyAttractions: 'Luxembourg Gardens 8 min · Saint-Germain cafés 3 min', idealFor: ['Couples', 'Solo', 'Business'], tip: 'Facilities: bar, breakfast room, concierge. Why we recommend: Saint-Germain location steps from literary cafés and the Luxembourg Gardens.', bookUrl: 'https://www.hotelle6.com/' }),
  hotel({ name: 'Hôtel Fabric', category: 'Mid-Range', address: '31 Rue de la Folie Méricourt · 75011', price: '€220–380/night', rating: '8.8', googleRating: '4.5', room: 'Superior Room · industrial-chic design', tube: 'Oberkampf · République · Line 5/9', nearbyAttractions: 'Marais 10 min · Bastille 8 min', idealFor: ['Couples', 'Solo', 'Design lovers'], tip: 'Facilities: hammam, bar, bike rental. Why we recommend: Modern boutique hotel in a converted textile factory — creative neighbourhood energy.', bookUrl: 'https://www.hotelfabric.com/' }),
  hotel({ name: 'Pullman Paris Tour Eiffel', category: 'Mid-Range', address: '18 Av. de Suffren · 75015', price: '€250–420/night', rating: '8.6', googleRating: '4.4', room: 'Eiffel Tower View · balcony rooms', tube: 'Bir-Hakeim · Line 6', nearbyAttractions: 'Eiffel Tower 3 min · Seine 5 min', idealFor: ['Families', 'Couples', 'First-timers'], tip: 'Facilities: fitness, restaurant, Eiffel-view bar. Why we recommend: Best location for Eiffel Tower access — walk to the monument in minutes.', bookUrl: 'https://www.pullmanparistoureiffel.com/' }),
  hotel({ name: 'Hôtel Malte – Astotel', category: 'Budget', address: '63 Rue de Richelieu · 75001', price: '€140–220/night', rating: '8.7', googleRating: '4.5', room: 'Cosy Double · Astotel group value', tube: 'Quatre-Septembre · Pyramides · Line 3/7/14', nearbyAttractions: 'Louvre 10 min · Palais Royal 5 min', idealFor: ['Solo', 'Couples', 'Value seekers'], tip: 'Facilities: free minibar replenished daily, honesty bar, breakfast. Why we recommend: Excellent value in the 1st arrondissement with Astotel\'s famous complimentary minibar.', bookUrl: 'https://www.astotel.com/hotel-malte/' }),
  hotel({ name: 'ibis Paris Tour Eiffel', category: 'Budget', address: '2 Rue Cambronne · 75015', price: '€110–180/night', rating: '8.2', googleRating: '4.1', room: 'Standard Double · reliable chain', tube: 'Commerce · La Motte-Picquet · Line 8/10', nearbyAttractions: 'Eiffel Tower 12 min walk · Walkable quartier', idealFor: ['Families', 'Solo', 'Budget'], tip: 'Facilities: 24h reception, bar, breakfast. Why we recommend: Reliable, walkable base near the Eiffel Tower without the luxury price tag.', bookUrl: 'https://www.ibis.com/en/hotel-0917-ibis-paris-tour-eiffel-cambronne-15eme/' }),
  hotel({ name: 'CitizenM Gare de Lyon', category: 'Budget', address: '8 Rue de Bercy · 75012', price: '€120–200/night', rating: '8.5', googleRating: '4.4', room: 'Mood Room · tech-forward pod design', tube: 'Gare de Lyon · Line 1/14 · RER A/D', nearbyAttractions: 'Bastille 10 min · Seine 8 min · Great transport hub', idealFor: ['Solo', 'Business', 'Transit'], tip: 'Facilities: 24h bar, coworking lounge, self-check-in. Why we recommend: Modern rooms and unbeatable transport links — ideal for train connections and airport RER.', bookUrl: 'https://www.citizenm.com/destinations/paris/paris-gare-de-lyon' })
];

const diningList = [
  makeDining({ name: 'Café de Flore', category: 'Café · Saint-Germain institution', address: '172 Bd Saint-Germain · 75006', price: '€20 breakfast', famous: 'Café crème · fresh croissant · literary terrace', reservation: 'No booking · arrive early', wait: '10–20 min peak', tip: 'Order café crème and a croissant on the terrace — a Paris morning ritual since 1887.', bookUrl: 'https://cafedeflore.fr/', dishes: ['Café Crème', 'Butter Croissant', 'Hot Chocolate', 'Omelette', 'Tartine'], dishDescs: ['Classic Parisian white coffee.', 'Baked fresh each morning.', 'Rich and velvety.', 'Simple French breakfast.', 'Open-faced baguette with butter and jam.'] }),
  makeDining({ name: 'Girafe Paris', category: 'Fine Dining · Eiffel views', address: '1 Place du Trocadéro · 75016', price: '€80–120/head', famous: 'Beautiful Eiffel Tower views · seafood-focused', reservation: 'Essential', michelin: '—', dressCode: 'Smart', tip: 'Request a window table for uninterrupted Eiffel views at lunch.', bookUrl: 'https://www.girafe-restaurant.com/', dishes: ['Grilled Turbot', 'Lobster Ravioli', 'Tasting Menu', 'Champagne', 'Tarte Tatin'] }),
  makeDining({ name: 'Le Jules Verne', category: 'Fine Dining · Michelin · Eiffel Tower', address: 'Eiffel Tower, 2nd floor · 75007', price: '€190+ tasting', famous: 'Michelin restaurant inside the Eiffel Tower', reservation: 'Essential 4+ weeks', michelin: '★★', dressCode: 'Formal smart', tip: 'Dinner here is an event — book months ahead and confirm lift access with your reservation.', bookUrl: 'https://www.lejulesverne-paris.com/', dishes: ['Tasting Menu', 'Seasonal Fish', 'Duck Foie Gras', 'Cheese Cart', 'Soufflé'] }),
  makeDining({ name: 'Ladurée', category: 'Pâtisserie · Macarons', address: '75 Av. des Champs-Élysées · 75008', price: '€15–30', famous: 'Famous macarons · tea salon', reservation: 'Walk-in', wait: '5–15 min', tip: 'Try the famous macarons — pistachio and rose are classics. Gift boxes make perfect souvenirs.', bookUrl: 'https://www.laduree.fr/', dishes: ['Macarons Assortment', 'Rose Macaron', 'Pistachio Macaron', 'Afternoon Tea', 'Saint-Honoré'] }),
  makeDining({ name: 'Angelina Paris', category: 'Café · Hot Chocolate legend', address: '226 Rue de Rivoli · 75001', price: '€25–40', famous: 'Famous hot chocolate · Mont-Blanc pastry', reservation: 'Recommended weekends', wait: '20–40 min', tip: 'The L\'Africain hot chocolate is impossibly thick — share one between two.', bookUrl: 'https://www.angelina-paris.fr/', dishes: ['L\'Africain Hot Chocolate', 'Mont-Blanc', 'Croissant', 'Quiche Lorraine', 'Éclair'] }),
  makeDining({ name: 'Café Marly', category: 'Brasserie · Louvre views', address: '93 Rue de Rivoli · 75001', price: '€45–65/head', famous: 'Terrace facing the Louvre Pyramid', reservation: 'Recommended lunch', tip: 'Sit on the terrace for pyramid views — ideal lunch between Louvre sessions.', bookUrl: 'https://www.cafemarly.com/', dishes: ['Steak Frites', 'Duck Confit', 'Croque Monsieur', 'Salade Niçoise', 'Crème Brûlée'] }),
  makeDining({ name: 'Le Train Bleu', category: 'Brasserie · Belle Époque', address: 'Gare de Lyon, Hall 1 · 75012', price: '€55–85/head', famous: 'Gilded dining room · Gare de Lyon icon', reservation: 'Recommended', tip: 'Dine beneath painted ceilings in one of Paris\'s most spectacular restaurant rooms.', bookUrl: 'https://www.le-train-bleu.com/', dishes: ['Duck Confit', 'Steak Tartare', 'Soufflé Grand Marnier', 'Seafood Platter', 'French Onion Soup'] }),
  makeDining({ name: 'Le Consulat', category: 'Café · Montmartre', address: '18 Rue Norvins · 75018', price: '€15–25', famous: 'Montmartre breakfast terrace', reservation: 'No booking', tip: 'Classic Montmartre café — fuel up before Sacré-Cœur and the artists\' square.', bookUrl: 'https://www.leconsulat.fr/', dishes: ['Croissant', 'Café au Lait', 'Omelette', 'Crêpe', 'Hot Chocolate'] }),
  makeDining({ name: 'La Maison Rose', category: 'Café · Montmartre icon', address: '2 Rue de l\'Abreuvoir · 75018', price: '€12–22', famous: 'Pink façade · Instagram-famous corner', reservation: 'Walk-in', tip: 'Stop for coffee and photos at the pink house — Montmartre\'s most photogenic café.', bookUrl: 'https://www.lamaisonrose.fr/', dishes: ['Café Crème', 'Tarte Citron', 'Quiche', 'Salade', 'Tarte Tatin'] }),
  makeDining({ name: 'Le Relais Gascon', category: 'Bistro · Southwest French', address: '6 Rue des Abbesses · 75018', price: '€25–35/head', famous: 'Giant salads · Gascon cuisine', reservation: 'Walk-in lunch', tip: 'Known for enormous salads and hearty Southwest flavours — casual Montmartre lunch.', bookUrl: 'https://www.lerelaisgascon.com/', dishes: ['Salade Gascogne', 'Duck Confit', 'Foie Gras', 'Steak Frites', 'Tarte aux Pruneaux'] }),
  makeDining({ name: 'Bouillon Pigalle', category: 'Bistro · Value', address: '22 Bd de Clichy · 75018', price: '€15–25/head', famous: 'Classic bouillon · affordable French plates', reservation: 'No booking · queue', wait: '20–45 min', tip: 'Bustling neo-bouillon — excellent value French classics in a lively room.', bookUrl: 'https://www.bouillonlesite.com/', dishes: ['French Onion Soup', 'Steak Frites', 'Escargots', 'Crème Brûlée', 'Mille-Feuille'] }),
  makeDining({ name: 'Café Kitsuné', category: 'Café · Palais Royal', address: '51 Galerie Montpensier · Palais Royal · 75001', price: '€8–15', famous: 'Matcha latte · fashion-meets-coffee', reservation: 'Walk-in', tip: 'Sleek coffee stop in the Palais Royal gardens — perfect Day 4 breakfast.', bookUrl: 'https://maisonkitsune.com/', dishes: ['Matcha Latte', 'Cappuccino', 'Croissant', 'Cookie', 'Iced Coffee'] }),
  makeDining({ name: 'Le Procope', category: 'Historic Café · Oldest in Paris', address: '13 Rue de l\'Ancienne Comédie · 75006', price: '€40–60/head', famous: 'The oldest café in Paris · Voltaire and revolutionaries', reservation: 'Recommended', tip: 'Dine where Voltaire once argued — order the coq au vin in Paris\'s oldest café.', bookUrl: 'https://www.procope.com/', dishes: ['Coq au Vin', 'Duck Confit', 'French Onion Soup', 'Tarte Tatin', 'Steak Frites'] }),
  makeDining({ name: 'Odette', category: 'Pâtisserie · Latin Quarter', address: '77 Rue Galande · 75005', price: '€8–15', famous: 'Cream puffs · vintage façade', reservation: 'Walk-in', tip: 'Queue for cream puffs at this tiny Latin Quarter institution — pistachio is superb.', bookUrl: 'https://www.odette-paris.com/', dishes: ['Vanilla Cream Puff', 'Pistachio Cream Puff', 'Chocolate Cream Puff', 'Coffee', 'Hot Chocolate'] }),
  makeDining({ name: 'Les Ombres', category: 'Fine Dining · Eiffel views', address: '27 Quai Branly · 75007', price: '€90–140/head', famous: 'Amazing Eiffel Tower view · rooftop terrace', reservation: 'Essential', michelin: '★', dressCode: 'Smart', tip: 'Book a terrace table for dinner as the Tower begins its hourly sparkle.', bookUrl: 'https://www.lesombres-restaurant.com/', dishes: ['Tasting Menu', 'Seasonal Fish', 'Lamb', 'Cheese Selection', 'Chocolate Dessert'] }),
  makeDining({ name: 'Les Deux Magots', category: 'Café · Saint-Germain legend', address: '6 Place Saint-Germain des Prés · 75006', price: '€18–30', famous: 'Literary café · Hemingway and Sartre', reservation: 'Walk-in', tip: 'Rival to Flore across the square — choose one for breakfast, admire both from outside.', bookUrl: 'https://www.lesdeuxmagots.com/', dishes: ['Café Crème', 'Croissant', 'Hot Chocolate', 'Quiche', 'Tarte'] }),
  makeDining({ name: 'Carette', category: 'Pâtisserie · Tea salon', address: '4 Place du Trocadéro · 75016', price: '€20–35', famous: 'Macarons · hot chocolate · Trocadéro terrace', reservation: 'Walk-in', tip: 'Elegant salon near Trocadéro — ideal post-Eiffel hot chocolate and pastries.', bookUrl: 'https://www.carette.fr/', dishes: ['Hot Chocolate', 'Macarons', 'Croissant', 'Quiche', 'Éclair'] })
];

const PLAN = {
  meta: {
    city: 'Paris',
    country: 'France',
    tagline: 'From sunrise beneath the Eiffel Tower to midnight walks along the Seine.',
    badge: 'Discover · 2026 Edition',
    edition: '2026',
    stats: {
      chapters: 42,
      qrCodes: '150+',
      attractions: attractions.length,
      hotels: hotels.length,
      dining: diningList.length,
      days: 4
    },
    theme: {
      accent: '#2c5282',
      accentSoft: '#ebf4ff',
      accentDeep: '#1a365d',
      transitLabel: 'Metro',
      tube: '#2c5282',
      parks: '#2d6a4f',
      river: '#0077b6',
      gold: '#b8860b',
      navy: '#1a2744',
      heroImage: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80'
    }
  },
  welcome: {
    editorLetter: 'Paris is not a checklist — it is a rhythm. Sunrise beneath the iron lace of the Eiffel Tower, a croissant on a Saint-Germain terrace, the Louvre before the crowds, Montmartre at golden hour, and a midnight walk along the Seine. This companion was built for first-time visitors who want every hour accounted for and every QR code to open the right door in Google Maps.\n\nEvery attraction, hotel, restaurant, hospital and embassy in these pages carries a scannable map link. Every day plan has a timeline, a full-route QR, and a walking distance. Hold it, follow it, and let Paris unfold.',
    howToUse: 'Point your phone camera at any QR code and the location opens in Google Maps in one tap. Every website and booking link is also clickable in the PDF. Colour-coded day chapters make navigation effortless.\n\n— The Editors, Paris Bureau'
  },
  essentials: {
    currency: { label: '€ Euro', note: 'Cards accepted almost everywhere. Notify your bank before travel.' },
    power: { label: 'Type C/E · 230V', note: 'European two-pin plug. Bring a universal adapter.' },
    sim: { label: 'eSIM or airport SIM', note: 'Orange, SFR, Bouygues. eSIM activates on landing Wi-Fi.' },
    language: { label: 'French', note: 'English widely spoken in hotels and major sights. Bonjour opens every door.' },
    tipping: { label: '10% or round up', note: 'Service compris often included — add 5–10% for excellent service.' },
    emergency: { label: '112 · 15 · 17 · 18', note: 'European emergency · SAMU · Police · Fire.' },
    tapWater: { label: 'Safe to drink', note: 'Paris tap water is excellent — cafés will refill your bottle.' },
    timezone: { label: 'CET / CEST +1', note: 'Clocks change last Sunday of March & October.' }
  },
  arrival: [
    { step: '01', title: 'Border', desc: 'Follow signs to Contrôle des Passeports. Have accommodation address and return ticket ready. EU e-gates for eligible passports.' },
    { step: '02', title: 'SIM / eSIM', desc: 'Activate your eSIM on airport Wi-Fi. Or buy an Orange Holiday SIM from arrivals (€40 for 20GB + calls).' },
    { step: '03', title: 'Cash', desc: 'Withdraw €50–€100 from a BNP or Société Générale ATM — never the Travelex booth. Cards work everywhere but keep coins for cafés.' },
    { step: '04', title: 'RER, not taxi', desc: 'CDG to Châtelet-Les Halles: RER B, 35 min, €11.45. ORY to Denfert-Rochereau: RER B, 30 min, €10.30.' },
    { step: '05', title: 'Navigo / Contactless', desc: 'Tap your contactless card at Metro gates. Single rides €2.15. For 4+ days consider Navigo Easy card at any Metro station.' },
    { step: '06', title: 'Hotel', desc: 'Check-in from 15:00. Luxury hotels hold luggage from 09:00 — drop bags and start Day 1 immediately.' },
    { step: '07', title: 'First meal', desc: 'Head to Café de Flore or Angelina for café crème and a croissant. Recover, then walk the Seine at dusk.' }
  ],
  packing: {
    spring: { months: 'MAR–MAY', temp: '8–18 °C · showers possible', items: ['Light waterproof jacket', 'Layerable knit', 'Compact umbrella', 'Walking shoes', 'Sunglasses', 'Crossbody bag'] },
    summer: { months: 'JUN–AUG', temp: '18–28 °C · long evenings', items: ['Linen shirts', 'Light dress or blazer', 'Trainers + one smart pair', 'Sunscreen SPF 30', 'Refillable bottle', 'Sunhat'] },
    autumn: { months: 'SEP–NOV', temp: '9–17 °C · golden light', items: ['Trench coat', 'Wool jumper', 'Waterproof boots', 'Umbrella', 'Scarf', 'Book for cafés'] },
    winter: { months: 'DEC–FEB', temp: '2–8 °C · crisp & short days', items: ['Heavy wool coat', 'Thermal base layer', 'Beanie + scarf + gloves', 'Waterproof boots', 'Hand warmers', 'Moisturiser'] }
  },
  weatherTable: {
    rows: [
      { month: 'Jan', avgTemp: '3 / 7 °C', rain: '50%', sunset: '17:30', crowds: 'Low', recommend: 'Museums · Sales' },
      { month: 'Feb', avgTemp: '3 / 8 °C', rain: '45%', sunset: '18:15', crowds: 'Low', recommend: 'Cafés · Covered passages' },
      { month: 'Mar', avgTemp: '5 / 12 °C', rain: '45%', sunset: '19:00', crowds: 'Rising', recommend: 'Tuileries awakening' },
      { month: 'Apr', avgTemp: '7 / 15 °C', rain: '45%', sunset: '20:30', crowds: 'Medium', recommend: 'Cherry blossom · Seine' },
      { month: 'May', avgTemp: '11 / 19 °C', rain: '50%', sunset: '21:15', crowds: 'Medium', recommend: 'Perfect walking weather' },
      { month: 'Jun', avgTemp: '14 / 23 °C', rain: '45%', sunset: '21:45', crowds: 'High', recommend: 'Long evenings · Fête de la Musique' },
      { month: 'Jul', avgTemp: '16 / 25 °C', rain: '40%', sunset: '21:30', crowds: 'Peak', recommend: 'Book everything ahead' },
      { month: 'Aug', avgTemp: '16 / 25 °C', rain: '40%', sunset: '20:45', crowds: 'Peak', recommend: 'Parisians away · tourists in' },
      { month: 'Sep', avgTemp: '13 / 21 °C', rain: '45%', sunset: '20:00', crowds: 'Medium', recommend: 'Golden light · Fashion Week' },
      { month: 'Oct', avgTemp: '10 / 16 °C', rain: '50%', sunset: '18:30', crowds: 'Medium', recommend: 'Autumn colour' },
      { month: 'Nov', avgTemp: '6 / 11 °C', rain: '55%', sunset: '17:15', crowds: 'Low', recommend: 'Museums · Beaujolais' },
      { month: 'Dec', avgTemp: '4 / 8 °C', rain: '50%', sunset: '17:00', crowds: 'Rising', recommend: 'Christmas markets · lights' }
    ],
    sweetSpot: 'April–June and September deliver the best light, manageable queues, and long evenings. Avoid the first two weeks of August unless everything is pre-booked — Paris is packed but many locals leave town.'
  },
  transport: {
    modes: [
      { icon: 'tube', name: 'Metro', price: '€2.15/ride', desc: '16 lines across the city. Fastest way between arrondissements. Last trains ~00:30 Fri/Sat 01:30.' },
      { icon: 'elizabeth', name: 'RER', price: '€2.15–€12', desc: 'Suburban express — CDG/ORY airports, Versailles, Disneyland. Keep ticket until exit.' },
      { icon: 'walk', name: 'Walking', price: 'Free', desc: 'Central Paris is compact. Days 1–4 are designed to walk 5–8 km each.' },
      { icon: 'boat', name: 'Batobus', price: '€20–€23/day', desc: 'Hop-on hop-off river boat. Seine stops at Eiffel, Louvre, Notre-Dame.' },
      { icon: 'bus', name: 'Bus', price: '€2.15', desc: 'Scenic above-ground routes. Line 69 crosses the city\'s best monuments.' },
      { icon: 'bike', name: 'Vélib\'', price: '€5/day', desc: 'City bike-share. 1,400+ stations. Dedicated lanes along the Seine.' },
      { icon: 'uber', name: 'Uber / Bolt', price: '€12–€25 short', desc: 'Reliable off-peak. Avoid rush hour — Metro is faster.' },
      { icon: 'cab', name: 'Taxi G7', price: '€15–€30 short', desc: 'Official Paris taxis. Light on roof. Avoid unlicensed drivers at airports.' }
    ],
    oysterTips: [
      { title: 'Contactless bank card', desc: 'Tap at Metro/RER gates. Same fare as ticket. Use one card per person for correct billing.' },
      { title: 'Navigo Easy', desc: 'Reloadable card €2 at any Metro station. Load carnets or day passes — handy for 4-day stays.' },
      { title: 'Airport RER', desc: 'CDG/ORY require specific tickets — do not use a standard Metro ticket. Buy at station machines.' },
      { title: 'Bonjour RATP app', desc: 'Official journey planner with real-time Metro disruptions and RER schedules.' }
    ],
    exit6Tip: 'Exit at Trocadéro station (Line 6) and emerge on the terraces with the Eiffel Tower perfectly framed before you. Every other approach hides the reveal — this one delivers the gasp.'
  },
  maps: {
    overview: {
      caption: 'A schematic map — for exact directions, scan any QR code in this guide.',
      markers: [
        { name: 'Eiffel Tower', type: 'attraction', lat: 48.8584, lng: 2.2945 },
        { name: 'Louvre Museum', type: 'attraction', lat: 48.8606, lng: 2.3376 },
        { name: 'Arc de Triomphe', type: 'attraction', lat: 48.8738, lng: 2.295 },
        { name: 'Sacré-Cœur', type: 'attraction', lat: 48.8867, lng: 2.3431 },
        { name: 'Notre-Dame', type: 'attraction', lat: 48.853, lng: 2.3499 },
        { name: 'Luxembourg Gardens', type: 'park', lat: 48.8462, lng: 2.3372 },
        { name: 'Montmartre', type: 'district', lat: 48.8867, lng: 2.3431 },
        { name: 'The Peninsula Paris', type: 'hotel', lat: 48.871, lng: 2.2936 },
        { name: 'Café de Flore', type: 'dining', lat: 48.854, lng: 2.3325 },
        { name: 'Le Jules Verne', type: 'dining', lat: 48.8584, lng: 2.2945 }
      ]
    }
  },
  attractions,
  hotels,
  dining: diningList,
  itineraries: [
    {
      day: 1,
      title: 'Paris Icons',
      color: '#2c5282',
      routePreview: '9 stops · start 08:30 · end 19:30 · ≈ 6 km walking',
      mapUrl: 'https://www.google.com/maps/dir/Cafe+de+Flore+Paris/Eiffel+Tower+Paris/Girafe+Paris/Seine+River+Cruise+Paris/Arc+de+Triomphe+Paris/Laduree+Champs-Elysees/Le+Jules+Verne+Paris',
      budget: {
        budget: { total: '€95 per person', includes: ['Pre-booked Eiffel', 'Metro hops', 'Bouillon lunch alt', 'Free Seine walk'] },
        mid: { total: '€280 per person', includes: ['Eiffel summit', 'Girafe lunch', 'Seine cruise', 'Ladurée stop'] },
        luxury: { total: '€650 per person', includes: ['Skip-line Eiffel', 'Girafe window', 'Private cruise', 'Le Jules Verne dinner'] }
      },
      photos: [P.eiffel, P.seine, P.arc, P.cafe],
      stops: [
        { time: '08:30', timeOfDay: 'morning', name: 'Café de Flore', desc: 'Café crème · fresh croissant · €20', transit: 'Metro · Saint-Germain · start here', icon: 'walk', mapUrl: mapUrl('Café de Flore Paris') },
        { time: '09:30', timeOfDay: 'morning', name: 'Eiffel Tower', desc: 'Pre-book tickets · 2–3 hrs · photo at Trocadéro', transit: 'Metro · Bir-Hakeim · 2 stops · 12 min', icon: 'train', mapUrl: mapUrl('Eiffel Tower Paris') },
        { time: '12:30', timeOfDay: 'afternoon', name: 'Girafe Paris', desc: 'Lunch with beautiful Eiffel Tower views', transit: 'Walk 800 m · 10 min', icon: 'walk', mapUrl: mapUrl('Girafe Paris') },
        { time: '14:30', timeOfDay: 'afternoon', name: 'Seine River Cruise', desc: '1-hour cruise · book afternoon slot', transit: 'Walk to Pont de l\'Alma · 8 min', icon: 'walk', mapUrl: mapUrl('Seine River Cruise Paris') },
        { time: '16:30', timeOfDay: 'afternoon', name: 'Arc de Triomphe', desc: 'Walk the Champs-Élysées · rooftop optional', transit: 'Metro · Charles de Gaulle–Étoile · 10 min', icon: 'train', mapUrl: mapUrl('Arc de Triomphe Paris') },
        { time: '17:30', timeOfDay: 'evening', name: 'Ladurée', desc: 'Try the famous macarons', transit: 'Walk Champs-Élysées · 600 m · 8 min', icon: 'walk', mapUrl: mapUrl('Ladurée Champs-Élysées Paris') },
        { time: '19:30', timeOfDay: 'night', name: 'Le Jules Verne', desc: 'Michelin dinner inside the Eiffel Tower', transit: 'Metro · Bir-Hakeim · 12 min', icon: 'train', mapUrl: mapUrl('Le Jules Verne Paris') }
      ]
    },
    {
      day: 2,
      title: 'Art & History',
      color: '#1a365d',
      routePreview: '8 stops · start 08:30 · end 20:00 · ≈ 5 km walking',
      mapUrl: 'https://www.google.com/maps/dir/Angelina+Paris/Louvre+Museum/Cafe+Marly/Jardin+des+Tuileries/Place+de+la+Concorde/Galeries+Lafayette/Le+Train+Bleu+Paris',
      budget: {
        budget: { total: '€110 per person', includes: ['Louvre ticket', 'Café lunch', 'Free gardens', 'Metro'] },
        mid: { total: '€260 per person', includes: ['Louvre + audio', 'Café Marly', 'Galeries rooftop', 'Le Train Bleu'] },
        luxury: { total: '€480 per person', includes: ['Private Louvre guide', 'Marly terrace', 'Personal shopper', 'Michelin dinner'] }
      },
      photos: [P.louvre, P.garden, P.shop, P.food],
      stops: [
        { time: '08:30', timeOfDay: 'morning', name: 'Angelina Paris', desc: 'Famous hot chocolate · Rue de Rivoli', transit: 'Metro · Tuileries · 1 stop', icon: 'train', mapUrl: mapUrl('Angelina Paris') },
        { time: '09:30', timeOfDay: 'morning', name: 'Louvre Museum', desc: 'Allow 4 hours · Mona Lisa · Venus de Milo · Winged Victory', transit: 'Walk 200 m · 3 min', icon: 'walk', mapUrl: mapUrl('Louvre Museum Paris') },
        { time: '14:00', timeOfDay: 'afternoon', name: 'Café Marly', desc: 'Lunch terrace facing the pyramid', transit: 'Walk · under arcade · 5 min', icon: 'walk', mapUrl: mapUrl('Café Marly Paris') },
        { time: '15:30', timeOfDay: 'afternoon', name: 'Jardin des Tuileries', desc: 'Relax between fountains and chestnut alleys', transit: 'Walk 400 m · 6 min', icon: 'walk', mapUrl: mapUrl('Jardin des Tuileries Paris') },
        { time: '17:00', timeOfDay: 'evening', name: 'Place de la Concorde', desc: 'Obelisk · gateway to Champs-Élysées', transit: 'Walk 500 m · 7 min', icon: 'walk', mapUrl: mapUrl('Place de la Concorde Paris') },
        { time: '18:00', timeOfDay: 'evening', name: 'Galeries Lafayette Rooftop', desc: 'Free city views · golden hour', transit: 'Metro · Opéra · 5 min', icon: 'train', mapUrl: mapUrl('Galeries Lafayette Paris') },
        { time: '20:00', timeOfDay: 'night', name: 'Le Train Bleu', desc: 'Belle Époque dinner at Gare de Lyon', transit: 'Metro · Gare de Lyon · 10 min', icon: 'train', mapUrl: mapUrl('Le Train Bleu Paris') }
      ]
    },
    {
      day: 3,
      title: 'Montmartre',
      color: '#2d6a4f',
      routePreview: '8 stops · start 08:30 · end 20:00 · ≈ 4 km walking',
      mapUrl: 'https://www.google.com/maps/dir/Le+Consulat+Paris/Sacre-Coeur+Paris/Montmartre+Paris/La+Maison+Rose/Le+Relais+Gascon/Moulin+Rouge+Paris/Galerie+Vivienne/Bouillon+Pigalle',
      budget: {
        budget: { total: '€90 per person', includes: ['Free Sacré-Cœur', 'Bouillon dinner', 'Walking only', 'Coffee stops'] },
        mid: { total: '€200 per person', includes: ['Café breakfast', 'Relais Gascon lunch', 'Metro', 'Bouillon dinner'] },
        luxury: { total: '€380 per person', includes: ['Private Montmartre guide', 'Fine lunch', 'Moulin Rouge show', 'Car transfer'] }
      },
      photos: [P.montmartre, P.montmartre, P.cafe, P.food],
      stops: [
        { time: '08:30', timeOfDay: 'morning', name: 'Le Consulat', desc: 'Montmartre breakfast on Rue Norvins', transit: 'Metro · Abbesses · 1 stop', icon: 'train', mapUrl: mapUrl('Le Consulat Paris Montmartre') },
        { time: '09:30', timeOfDay: 'morning', name: 'Sacré-Cœur Basilica', desc: 'Basilica and parvis views over Paris', transit: 'Walk uphill 600 m · 12 min', icon: 'walk', mapUrl: mapUrl('Sacré-Cœur Paris') },
        { time: '11:00', timeOfDay: 'morning', name: 'Montmartre Streets', desc: 'Artists · small cafés · photography', transit: 'Walk · Place du Tertre · 5 min', icon: 'walk', mapUrl: mapUrl('Place du Tertre Paris') },
        { time: '12:30', timeOfDay: 'afternoon', name: 'La Maison Rose', desc: 'Coffee at the pink house', transit: 'Walk Rue de l\'Abreuvoir · 4 min', icon: 'walk', mapUrl: mapUrl('La Maison Rose Paris') },
        { time: '13:30', timeOfDay: 'afternoon', name: 'Le Relais Gascon', desc: 'Hearty Southwest lunch', transit: 'Walk to Abbesses · 8 min', icon: 'walk', mapUrl: mapUrl('Le Relais Gascon Paris') },
        { time: '15:30', timeOfDay: 'afternoon', name: 'Moulin Rouge', desc: 'Exterior photos · red windmill façade', transit: 'Walk downhill · 1 km · 15 min', icon: 'walk', mapUrl: mapUrl('Moulin Rouge Paris') },
        { time: '17:00', timeOfDay: 'evening', name: 'Galerie Vivienne', desc: 'Covered passage · mosaic floors', transit: 'Metro · Bourse · 15 min', icon: 'train', mapUrl: mapUrl('Galerie Vivienne Paris') },
        { time: '20:00', timeOfDay: 'night', name: 'Bouillon Pigalle', desc: 'Classic affordable French dinner', transit: 'Metro · Pigalle · 12 min', icon: 'train', mapUrl: mapUrl('Bouillon Pigalle Paris') }
      ]
    },
    {
      day: 4,
      title: 'Luxury Paris',
      color: '#b8860b',
      routePreview: '8 stops · start 09:00 · end 19:30 · ≈ 5 km walking',
      mapUrl: 'https://www.google.com/maps/dir/Cafe+Kitsune+Paris/Luxembourg+Gardens/Pantheon+Paris/Le+Procope/Notre+Dame+Paris/Shakespeare+and+Company/Odette+Paris/Les+Ombres+Paris',
      budget: {
        budget: { total: '€100 per person', includes: ['Free gardens', 'Procope lunch', 'Walking', 'Odette stop'] },
        mid: { total: '€240 per person', includes: ['Panthéon ticket', 'Le Procope', 'Seine walk', 'Les Ombres dinner'] },
        luxury: { total: '€520 per person', includes: ['Private Left Bank guide', 'Michelin lunch', 'River car', 'Les Ombres terrace'] }
      },
      photos: [P.garden, P.notre, P.cafe, P.eiffel],
      stops: [
        { time: '09:00', timeOfDay: 'morning', name: 'Café Kitsuné', desc: 'Matcha latte in Palais Royal gardens', transit: 'Metro · Palais Royal · start', icon: 'walk', mapUrl: mapUrl('Café Kitsuné Palais Royal Paris') },
        { time: '10:00', timeOfDay: 'morning', name: 'Luxembourg Gardens', desc: 'Sailboats · palace · Parisian calm', transit: 'RER B · Luxembourg · 8 min', icon: 'train', mapUrl: mapUrl('Luxembourg Gardens Paris') },
        { time: '11:30', timeOfDay: 'morning', name: 'Panthéon', desc: 'Neoclassical dome · Left Bank views', transit: 'Walk 700 m · 10 min', icon: 'walk', mapUrl: mapUrl('Panthéon Paris') },
        { time: '13:00', timeOfDay: 'afternoon', name: 'Le Procope', desc: 'Lunch at the oldest café in Paris', transit: 'Walk 500 m · 7 min', icon: 'walk', mapUrl: mapUrl('Le Procope Paris') },
        { time: '15:00', timeOfDay: 'afternoon', name: 'Notre-Dame Cathedral', desc: 'Gothic masterpiece · restoration exterior', transit: 'Walk 800 m · 12 min', icon: 'walk', mapUrl: mapUrl('Notre-Dame Cathedral Paris') },
        { time: '16:30', timeOfDay: 'afternoon', name: 'Shakespeare & Company', desc: 'Legendary bookshop across the river', transit: 'Walk 3 min', icon: 'walk', mapUrl: mapUrl('Shakespeare and Company Paris') },
        { time: '17:30', timeOfDay: 'evening', name: 'Odette', desc: 'Cream puffs · Latin Quarter', transit: 'Walk 2 min', icon: 'walk', mapUrl: mapUrl('Odette Paris cream puffs') },
        { time: '19:30', timeOfDay: 'night', name: 'Les Ombres', desc: 'Dinner with amazing Eiffel Tower view', transit: 'Metro · Bir-Hakeim · 15 min', icon: 'train', mapUrl: mapUrl('Les Ombres Paris') }
      ]
    }
  ],
  rainyDay: [
    { name: 'Louvre Museum', address: 'Rue de Rivoli', desc: 'World\'s greatest collection · full day', img: P.louvre, mapUrl: mapUrl('Louvre Museum Paris') },
    { name: 'Galeries Lafayette', address: 'Bd Haussmann', desc: 'Department store grandeur · free rooftop', img: P.shop, mapUrl: mapUrl('Galeries Lafayette Paris') },
    { name: 'Le Train Bleu', address: 'Gare de Lyon', desc: 'Belle Époque dining room', img: P.food, mapUrl: mapUrl('Le Train Bleu Paris') },
    { name: 'Galerie Vivienne', address: '2nd arrondissement', desc: 'Covered arcade · rain-proof stroll', img: P.shop, mapUrl: mapUrl('Galerie Vivienne Paris') },
    { name: 'Angelina Paris', address: 'Rue de Rivoli', desc: 'Legendary hot chocolate', img: P.cafe, mapUrl: mapUrl('Angelina Paris') },
    { name: 'Musée d\'Orsay', address: 'Left Bank', desc: 'Impressionist masterpieces', img: P.paris, mapUrl: mapUrl('Musée d\'Orsay Paris') },
    { name: 'Printemps Haussmann', address: 'Bd Haussmann', desc: 'Art Nouveau dome · shopping', img: P.shop, mapUrl: mapUrl('Printemps Paris') }
  ],
  sunnyDay: [
    { name: 'Luxembourg Gardens', address: '6th arrondissement', desc: 'Sailboats and sun chairs', img: P.garden, mapUrl: mapUrl('Luxembourg Gardens Paris') },
    { name: 'Jardin des Tuileries', address: 'Between Louvre and Concorde', desc: 'Fountains and ferris wheel', img: P.garden, mapUrl: mapUrl('Jardin des Tuileries Paris') },
    { name: 'Seine River Banks', address: 'Quais · Île de la Cité', desc: 'Picnic and wine on the water', img: P.seine, mapUrl: mapUrl('Seine River Paris') },
    { name: 'Montmartre', address: '18th arrondissement', desc: 'Artists\' square · Sacré-Cœur views', img: P.montmartre, mapUrl: mapUrl('Montmartre Paris') },
    { name: 'Trocadéro Gardens', address: '16th arrondissement', desc: 'Eiffel views and fountains', img: P.eiffel, mapUrl: mapUrl('Trocadéro Gardens Paris') },
    { name: 'Pont Alexandre III', address: '8th arrondissement', desc: 'Gilded bridge · golden hour', img: P.bridge, mapUrl: mapUrl('Pont Alexandre III Paris') },
    { name: 'Batobus River Cruise', address: 'Seine boarding points', desc: 'Hop-on hop-off sunshine cruise', img: P.seine, mapUrl: mapUrl('Batobus Paris') }
  ],
  hiddenGems: [
    { name: 'Rue de l\'Abreuvoir', desc: 'Montmartre\'s most photogenic cobbled lane', img: P.montmartre, mapUrl: mapUrl('Rue de l\'Abreuvoir Paris') },
    { name: 'Rue de l\'Université', desc: 'Eiffel-framed Haussmann vista', img: P.eiffel, mapUrl: mapUrl('Rue de l\'Université Paris') },
    { name: 'Bir-Hakeim Bridge', desc: 'Iron arches and Tower views', img: P.bridge, mapUrl: mapUrl('Bir-Hakeim Bridge Paris') },
    { name: 'Galerie Vivienne', desc: 'Mosaic floors under glass canopy', img: P.shop, mapUrl: mapUrl('Galerie Vivienne Paris') },
    { name: 'Shakespeare & Company', desc: 'English bookshop with a story on every shelf', img: P.cafe, mapUrl: mapUrl('Shakespeare and Company Paris') },
    { name: 'Place des Vosges', desc: 'Hidden arcaded square in the Marais', img: P.paris, mapUrl: mapUrl('Place des Vosges Paris') },
    { name: 'Musée de l\'Orangerie', desc: 'Monet Water Lilies in natural light', img: P.garden, mapUrl: mapUrl('Musée de l\'Orangerie Paris') }
  ],
  warnings: [
    { title: 'Airport taxis', desc: 'Never follow unofficial touts at CDG/ORY. RER B + Metro = €11. A booked taxi: €55–€70 flat.' },
    { title: 'Currency exchange near monuments', desc: 'Bureaux with "no commission" signs are 5–8% worse than your bank card. Use contactless everywhere.' },
    { title: 'Eiffel Tower ticket scams', desc: 'Only buy via toureiffel.paris or this guide\'s links. Street sellers around Trocadéro sell fakes.' },
    { title: 'Restaurants on Champs-Élysées', desc: '€40 for mediocre plat du jour. Walk one block north to side streets for half the price and twice the quality.' },
    { title: 'Bracelet scam', desc: 'Men tying "friendship bracelets" on your wrist near Sacré-Cœur then demanding €20. Keep hands in pockets and say non firmly.' },
    { title: 'Pickpockets on Metro Line 1', desc: 'Châtelet, Louvre, and Concorde stations are hotspots. Crossbody bag, zip closed, phone not in back pocket.' },
    { title: 'Driving in central Paris', desc: 'Avoid renting a car in the city. Metro + walking is faster, cheaper, and stress-free.' }
  ],
  shopping: {
    districts: [
      { name: 'Champs-Élysées', desc: 'Flagship boulevard · Louis Vuitton, Sephora, Ladurée', img: P.shop, mapUrl: mapUrl('Champs-Élysées Paris') },
      { name: 'Galeries Lafayette', desc: 'Art Nouveau dome · beauty hall · rooftop views', img: P.shop, mapUrl: mapUrl('Galeries Lafayette Paris') },
      { name: 'Le Bon Marché', desc: 'Left Bank luxury · La Grande Épicerie food hall', img: P.shop, mapUrl: mapUrl('Le Bon Marché Paris') },
      { name: 'Printemps', desc: 'Haussmann flagship · fashion and beauty', img: P.shop, mapUrl: mapUrl('Printemps Haussmann Paris') },
      { name: 'Avenue Montaigne', desc: 'Haute couture · Chanel, Dior, Saint Laurent', img: P.shop, mapUrl: mapUrl('Avenue Montaigne Paris') },
      { name: 'Le Marais', desc: 'Independent boutiques · vintage · concept stores', img: P.shop, mapUrl: mapUrl('Le Marais Paris') },
      { name: 'La Vallée Village', desc: 'Designer outlet · 40 min east of Paris · shuttle from centre', img: P.shop, mapUrl: mapUrl('La Vallée Village outlet Paris') }
    ],
    vatTips: {
      note: 'VAT is 20% on most goods. Non-EU residents can claim a VAT refund (détaxe) on purchases over €100.15 at participating stores — ask for the form at checkout.',
      saleSeasons: 'Soldes d\'hiver: January · Soldes d\'été: late June–July. Department stores run private sales in November.',
      shippingTip: 'Luxury boutiques often ship VAT-free to your home country on purchases over €1,000 — ask at Dior, Chanel, and Hermès.'
    },
    brands: ['Louis Vuitton (French heritage)', 'Hermès (silks and leather)', 'Diptyque (candles)', 'Sézane (Parisian ready-to-wear)', 'Buly 1803 (beauty)'],
    souvenirs: ['Ladurée macaron box', 'Angelina hot chocolate tin', 'French cheese from Laurent Dubois', 'a Shakespeare & Company tote', 'Berthillon sorbet from Île Saint-Louis']
  },
  budget: {
    budget: {
      daily: '€90–140 per person / day',
      accommodation: '€110–140 ibis / CitizenM',
      food: '€30 bouillon + café',
      transport: '€8 Metro day',
      activities: '€25 Eiffel or Louvre',
      extras: '€5',
      tip: 'Paris rewards walking — Metro single rides are €2.15 but a 4-day Navigo Easy card saves time at machines.'
    },
    mid: {
      daily: '€220–350 per person / day',
      accommodation: '€280–450 Hôtel Le Six',
      food: '€65 brasserie meals',
      transport: '€10 Metro + occasional Uber',
      activities: '€45 museums + cruise',
      extras: '€15'
    },
    luxury: {
      daily: '€600–1,200 per person / day',
      accommodation: '€1,200+ Peninsula / George V',
      food: '€150 Michelin dinners',
      transport: '€25 Uber / private car',
      activities: '€80 skip-line + guides',
      extras: '€40 tips + spa'
    }
  },
  family: {
    tip: 'Children under 4 travel free on Metro and RER. Under 26 EU residents get free Louvre entry — bring ID. Strollers fold on escalators; use lifts where marked.',
    rows: [
      { attraction: 'Luxembourg Gardens', desc: 'Sailboats · puppet theatre · playground', goodForKids: true, stroller: true, babyChange: true, familyTicket: false },
      { attraction: 'Eiffel Tower', desc: 'Kids love the lift · book morning slot', goodForKids: true, stroller: true, babyChange: true, familyTicket: true },
      { attraction: 'Louvre Museum', desc: 'Treasure hunt tours available', goodForKids: true, stroller: true, babyChange: true, familyTicket: true },
      { attraction: 'Jardin des Tuileries', desc: 'Ferris wheel · trampolines summer', goodForKids: true, stroller: true, babyChange: true, familyTicket: false },
      { attraction: 'Seine River Cruise', desc: '1 hour · no walking required', goodForKids: true, stroller: true, babyChange: false, familyTicket: true },
      { attraction: 'Galeries Lafayette', desc: 'Rooftop views · toy department', goodForKids: true, stroller: true, babyChange: true, familyTicket: false },
      { attraction: 'Notre-Dame exterior', desc: 'Gargoyles fascinate older kids', goodForKids: true, stroller: true, babyChange: false, familyTicket: false },
      { attraction: 'Batobus', desc: 'Hop-on hop-off · stroller friendly', goodForKids: true, stroller: true, babyChange: false, familyTicket: true }
    ]
  },
  emergency: {
    numbers: [
      { label: '112', desc: 'European Emergency Number · all services', icon: 'emergency' },
      { label: '17', desc: 'Police (Police Nationale)', icon: 'police' },
      { label: '15', desc: 'Ambulance (SAMU)', icon: 'medical' },
      { label: '18', desc: 'Fire Brigade (Pompiers)', icon: 'emergency' },
      { label: '3624', desc: 'SOS Médecins · medical house calls', icon: 'medical' }
    ],
    hospitals: [
      { name: 'Hôpital Européen Georges-Pompidou', address: '20 Rue Leblanc · 75015 Paris', icon: 'hospital', mapUrl: mapUrl('Hôpital Européen Georges-Pompidou Paris') },
      { name: 'Pitié-Salpêtrière Hospital', address: '47–83 Bd de l\'Hôpital · 75013 Paris', icon: 'hospital', mapUrl: mapUrl('Pitié-Salpêtrière Hospital Paris') },
      { name: 'Hôtel-Dieu Hospital', address: '1 Parvis Notre-Dame · 75004 Paris', icon: 'hospital', mapUrl: mapUrl('Hôtel-Dieu Hospital Paris Notre-Dame') }
    ],
    embassies: [
      { country: 'Saudi Arabia', address: '92 Rue de Courcelles · 75008 Paris · ☎ +33 1 46 79 40 00 · Emergency: +33 6 26 23 81 95', icon: 'embassy', mapUrl: mapUrl('Saudi Embassy Paris 92 Rue de Courcelles') },
      { country: 'United Arab Emirates', address: '5 Rue de Lubeck · 75116 Paris', icon: 'embassy', mapUrl: mapUrl('UAE Embassy Paris 5 Rue de Lubeck') },
      { country: 'Qatar', address: '1 Rue de Tilsitt · 75008 Paris · ☎ +33 1 45 51 90 71', icon: 'embassy', mapUrl: mapUrl('Qatar Embassy Paris 1 Rue de Tilsitt') },
      { country: 'Kuwait', address: 'Ambassy of Kuwait · 8th arrondissement · 75008 Paris', icon: 'embassy', mapUrl: mapUrl('Kuwait Embassy Paris') },
      { country: 'Bahrain', address: 'Embassy of Bahrain · Paris · 75008', icon: 'embassy', mapUrl: mapUrl('Bahrain Embassy Paris') },
      { country: 'Oman', address: 'Embassy of Oman · Paris · 75016', icon: 'embassy', mapUrl: mapUrl('Oman Embassy Paris') }
    ],
    lostPassport: 'File a police report (dial 17 or visit commissariat). Contact your embassy for an emergency travel document — usually 24–48 h. Photograph your passport and store in cloud before departure.'
  },
  phrases: [
    { english: 'Bonjour — always say it when entering a shop or café.', use: 'Essential greeting' },
    { english: 'Où est la station de métro la plus proche ?', use: 'Ask for directions' },
    { english: 'L\'addition, s\'il vous plaît.', use: 'Ask for the bill' },
    { english: 'Puis-je payer par carte ?', use: 'Pay by card' },
    { english: 'Un café crème, s\'il vous plaît.', use: 'Order coffee' },
    { english: 'Avez-vous une table pour deux ?', use: 'Request a table' },
    { english: 'Où sont les toilettes ?', use: 'Find restrooms' },
    { english: 'Parlez-vous anglais ?', use: 'Polite language check' },
    { english: 'Excusez-moi, pourriez-vous répéter ?', use: 'Ask to repeat' },
    { english: 'Merci beaucoup.', use: 'Thank you — use liberally' },
    { english: 'Je voudrais réserver une table.', use: 'Book a restaurant' },
    { english: 'C\'est délicieux.', use: 'Compliment the chef' }
  ],
  cheatSheet: {
    title: 'One-Page Cheat Sheet',
    subtitle: 'Screenshot before your flight — every essential in one glance.',
    emergency: [
      { label: '112', value: 'European emergency' },
      { label: '17', value: 'Police' },
      { label: '15', value: 'SAMU ambulance' },
      { label: '18', value: 'Fire' }
    ],
    transport: [
      { label: '€2.15', value: 'Metro single ride' },
      { label: 'RER B', value: 'CDG airport 35 min' },
      { label: 'Batobus', value: 'Seine hop-on boat' }
    ],
    money: [
      { label: 'Contactless', value: 'Everywhere' },
      { label: 'Service compris', value: 'Tip optional' },
      { label: 'Détaxe', value: 'VAT refund >€100' }
    ],
    apps: [
      { name: 'Bonjour RATP', use: 'Official Metro' },
      { name: 'Citymapper', use: 'Navigation' },
      { name: 'TheFork', use: 'Restaurant bookings' },
      { name: 'Uber', use: 'Rides' }
    ],
    topQrCodes: [
      { name: 'CDG Airport T2', mapUrl: mapUrl('Paris CDG Airport Terminal 2') },
      { name: 'Eiffel Tower', mapUrl: mapUrl('Eiffel Tower Paris') },
      { name: 'Louvre Museum', mapUrl: mapUrl('Louvre Museum Paris') },
      { name: 'Hôtel-Dieu Hospital', mapUrl: mapUrl('Hôtel-Dieu Hospital Paris') },
      { name: 'Saudi Embassy', mapUrl: mapUrl('Saudi Embassy Paris') },
      { name: 'Café de Flore', mapUrl: mapUrl('Café de Flore Paris') },
      { name: 'Sacré-Cœur', mapUrl: mapUrl('Sacré-Cœur Paris') },
      { name: 'Gare de Lyon', mapUrl: mapUrl('Gare de Lyon Paris') }
    ]
  },
  etiquette: [
    { rule: 'Say bonjour first', desc: 'Enter every shop, café, and taxi with bonjour. Skip it and service turns cold instantly.' },
    { rule: 'Keep voice low', desc: 'Parisians speak quietly in restaurants and Metro carriages. Loud conversations draw stares.' },
    { rule: 'Dress slightly smarter', desc: 'Paris is not casual — trainers are fine but avoid gym wear at dinner.' },
    { rule: 'Do not eat on the Metro', desc: 'Drinking coffee on the train is tolerated; full meals are not.' },
    { rule: 'Wait for the green man', desc: 'Jaywalking happens but tourists who sprint across Champs-Élysées risk fines and angry drivers.' },
    { rule: 'Table service at cafés', desc: 'Sit down prices are higher than standing at the bar — check the menu board before ordering.' },
    { rule: 'Sunday closures', desc: 'Many independent shops close Sunday and Monday. Department stores stay open.' }
  ]
};

const output = `/**\n * DISCOVER Paris — 4-Day First-Time Visitor Guide\n * Generated from trips-schedule source · themes/cities.json paris\n */\nconst PLAN = ${JSON.stringify(PLAN, null, 2)};\n`;

fs.writeFileSync(outPath, output, 'utf8');
console.log(`Wrote ${outPath}`);
console.log(`Attractions: ${attractions.length}, Hotels: ${hotels.length}, Dining: ${diningList.length}, Days: 4`);
