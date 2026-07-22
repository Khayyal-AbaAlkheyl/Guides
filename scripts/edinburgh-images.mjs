/**
 * Real place photos — Wikimedia Commons (CC-licensed), same approach as data/paris.js
 * Each key maps to { hero, detail?, photoSpot?, interior?, food? }
 */
export const W = (path) =>
  `https://upload.wikimedia.org/wikipedia/commons/${path}`;

export const W960 = (path) =>
  `https://upload.wikimedia.org/wikipedia/commons/thumb/${path}/960px-${path.split('/').pop()}`;

export const EDINBURGH_IMAGES = {
  // —— Attractions ——
  'Edinburgh Castle': {
    hero: W960('7/78/Edinburgh_Castle_seen_from_Castle_Street.jpg'),
    detail: W960('3/37/Arthur%27s_Seat_from_Edinburgh_Castle.jpg'),
    photoSpot: W960('7/78/Edinburgh_Castle_seen_from_Castle_Street.jpg'),
    spring: W960('7/78/Edinburgh_Castle_seen_from_Castle_Street.jpg'),
    summer: W960('3/37/Arthur%27s_Seat_from_Edinburgh_Castle.jpg'),
    autumn: W960('7/78/Edinburgh_Castle_seen_from_Castle_Street.jpg'),
    christmas: W960('7/78/Edinburgh_Castle_seen_from_Castle_Street.jpg')
  },
  'Camera Obscura & World of Illusions': {
    hero: W960('4/4e/Camera_Obscura%2C_Edinburgh.jpg'),
    detail: W960('4/4e/Camera_Obscura%2C_Edinburgh.jpg'),
    photoSpot: W960('f/fd/Victoria_Street%2C_Edinburgh.jpg'),
    spring: W960('4/4e/Camera_Obscura%2C_Edinburgh.jpg'),
    summer: W960('4/4e/Camera_Obscura%2C_Edinburgh.jpg'),
    autumn: W960('4/4e/Camera_Obscura%2C_Edinburgh.jpg'),
    christmas: W960('4/4e/Camera_Obscura%2C_Edinburgh.jpg')
  },
  "St Giles' Cathedral": {
    hero: W960('d/d8/St_Giles%27_Cathedral%2C_Edinburgh.jpg'),
    detail: W960('d/d8/St_Giles%27_Cathedral%2C_Edinburgh.jpg'),
    photoSpot: W960('d/d8/St_Giles%27_Cathedral%2C_Edinburgh.jpg'),
    spring: W960('d/d8/St_Giles%27_Cathedral%2C_Edinburgh.jpg'),
    summer: W960('d/d8/St_Giles%27_Cathedral%2C_Edinburgh.jpg'),
    autumn: W960('d/d8/St_Giles%27_Cathedral%2C_Edinburgh.jpg'),
    christmas: W960('d/d8/St_Giles%27_Cathedral%2C_Edinburgh.jpg')
  },
  "The Real Mary King's Close": {
    hero: W960('8/8a/Royal_Mile%2C_Edinburgh.jpg'),
    detail: W960('8/8a/Royal_Mile%2C_Edinburgh.jpg'),
    photoSpot: W960('8/8a/Royal_Mile%2C_Edinburgh.jpg'),
    spring: W960('8/8a/Royal_Mile%2C_Edinburgh.jpg'),
    summer: W960('8/8a/Royal_Mile%2C_Edinburgh.jpg'),
    autumn: W960('8/8a/Royal_Mile%2C_Edinburgh.jpg'),
    christmas: W960('8/8a/Royal_Mile%2C_Edinburgh.jpg')
  },
  'Victoria Street': {
    hero: W960('f/fd/Victoria_Street%2C_Edinburgh.jpg'),
    detail: W960('f/fd/Victoria_Street%2C_Edinburgh.jpg'),
    photoSpot: W960('f/fd/Victoria_Street%2C_Edinburgh.jpg'),
    spring: W960('f/fd/Victoria_Street%2C_Edinburgh.jpg'),
    summer: W960('f/fd/Victoria_Street%2C_Edinburgh.jpg'),
    autumn: W960('f/fd/Victoria_Street%2C_Edinburgh.jpg'),
    christmas: W960('f/fd/Victoria_Street%2C_Edinburgh.jpg')
  },
  'Princes Street Gardens': {
    hero: W960('4/4c/Princes_Street_Gardens_02.jpg'),
    detail: W960('4/4c/Princes_Street_Gardens_02.jpg'),
    photoSpot: W960('4/4c/Princes_Street_Gardens_02.jpg'),
    spring: W960('4/4c/Princes_Street_Gardens_02.jpg'),
    summer: W960('4/4c/Princes_Street_Gardens_02.jpg'),
    autumn: W960('4/4c/Princes_Street_Gardens_02.jpg'),
    christmas: W960('4/4c/Princes_Street_Gardens_02.jpg')
  },
  'Scott Monument': {
    hero: W960('5/5d/Scott_Monument%2C_Edinburgh.jpg'),
    detail: W960('5/5d/Scott_Monument%2C_Edinburgh.jpg'),
    photoSpot: W960('4/4c/Princes_Street_Gardens_02.jpg'),
    spring: W960('5/5d/Scott_Monument%2C_Edinburgh.jpg'),
    summer: W960('5/5d/Scott_Monument%2C_Edinburgh.jpg'),
    autumn: W960('5/5d/Scott_Monument%2C_Edinburgh.jpg'),
    christmas: W960('5/5d/Scott_Monument%2C_Edinburgh.jpg')
  },
  'Dean Village': {
    hero: W960('a/a7/Dean_Village%2C_Edinburgh.jpg'),
    detail: W960('a/a7/Dean_Village%2C_Edinburgh.jpg'),
    photoSpot: W960('a/a7/Dean_Village%2C_Edinburgh.jpg'),
    spring: W960('a/a7/Dean_Village%2C_Edinburgh.jpg'),
    summer: W960('a/a7/Dean_Village%2C_Edinburgh.jpg'),
    autumn: W960('a/a7/Dean_Village%2C_Edinburgh.jpg'),
    christmas: W960('a/a7/Dean_Village%2C_Edinburgh.jpg')
  },
  'Royal Botanic Garden Edinburgh': {
    hero: W960('9/9e/Royal_Botanic_Garden_Edinburgh_-_Palm_House.jpg'),
    detail: W960('9/9e/Royal_Botanic_Garden_Edinburgh_-_Palm_House.jpg'),
    photoSpot: W960('9/9e/Royal_Botanic_Garden_Edinburgh_-_Palm_House.jpg'),
    spring: W960('9/9e/Royal_Botanic_Garden_Edinburgh_-_Palm_House.jpg'),
    summer: W960('9/9e/Royal_Botanic_Garden_Edinburgh_-_Palm_House.jpg'),
    autumn: W960('9/9e/Royal_Botanic_Garden_Edinburgh_-_Palm_House.jpg'),
    christmas: W960('9/9e/Royal_Botanic_Garden_Edinburgh_-_Palm_House.jpg')
  },
  'Calton Hill': {
    hero: W960('f/ff/Calton_Hill%2C_Edinburgh.jpg'),
    detail: W960('f/ff/Calton_Hill%2C_Edinburgh.jpg'),
    photoSpot: W960('f/ff/Calton_Hill%2C_Edinburgh.jpg'),
    spring: W960('f/ff/Calton_Hill%2C_Edinburgh.jpg'),
    summer: W960('f/ff/Calton_Hill%2C_Edinburgh.jpg'),
    autumn: W960('f/ff/Calton_Hill%2C_Edinburgh.jpg'),
    christmas: W960('f/ff/Calton_Hill%2C_Edinburgh.jpg')
  },
  "Arthur's Seat": {
    hero: W960('7/74/Arthurs_seat_summit_panorama.jpg'),
    detail: W960('b/b4/Edinburgh_from_arthurs_seat.JPG'),
    photoSpot: W960('7/74/Arthurs_seat_summit_panorama.jpg'),
    spring: W960('7/74/Arthurs_seat_summit_panorama.jpg'),
    summer: W960('b/b4/Edinburgh_from_arthurs_seat.JPG'),
    autumn: W960('7/74/Arthurs_seat_summit_panorama.jpg'),
    christmas: W960('7/74/Arthurs_seat_summit_panorama.jpg')
  },
  'Palace of Holyroodhouse': {
    hero: W960('6/6e/Holyroodhouse%2C_Edinburgh.jpg'),
    detail: W960('6/6e/Holyroodhouse%2C_Edinburgh.jpg'),
    photoSpot: W960('6/6e/Holyroodhouse%2C_Edinburgh.jpg'),
    spring: W960('6/6e/Holyroodhouse%2C_Edinburgh.jpg'),
    summer: W960('6/6e/Holyroodhouse%2C_Edinburgh.jpg'),
    autumn: W960('6/6e/Holyroodhouse%2C_Edinburgh.jpg'),
    christmas: W960('6/6e/Holyroodhouse%2C_Edinburgh.jpg')
  },
  'Royal Yacht Britannia': {
    hero: W960('6/6a/HMY-Britannia_Moored_in_Leith.JPG'),
    detail: W960('d/d4/Royal_Yacht_Britannia%2COcean_Terminal%2C_Edinburgh_-_geograph.org.uk_-_545709.jpg'),
    photoSpot: W960('6/6a/HMY-Britannia_Moored_in_Leith.JPG'),
    spring: W960('6/6a/HMY-Britannia_Moored_in_Leith.JPG'),
    summer: W960('6/6a/HMY-Britannia_Moored_in_Leith.JPG'),
    autumn: W960('6/6a/HMY-Britannia_Moored_in_Leith.JPG'),
    christmas: W960('6/6a/HMY-Britannia_Moored_in_Leith.JPG')
  },
  'Leith Shore': {
    hero: W960('1/1e/The_Shore%2C_Leith%2C_Edinburgh.jpg'),
    detail: W960('1/1e/The_Shore%2C_Leith%2C_Edinburgh.jpg'),
    photoSpot: W960('1/1e/The_Shore%2C_Leith%2C_Edinburgh.jpg'),
    spring: W960('1/1e/The_Shore%2C_Leith%2C_Edinburgh.jpg'),
    summer: W960('1/1e/The_Shore%2C_Leith%2C_Edinburgh.jpg'),
    autumn: W960('1/1e/The_Shore%2C_Leith%2C_Edinburgh.jpg'),
    christmas: W960('1/1e/The_Shore%2C_Leith%2C_Edinburgh.jpg')
  },

  // —— Hotels ——
  'The Balmoral Hotel': {
    exterior: W960('4/4a/Balmoral_Hotel_in_Edinburgh.jpg'),
    lobby: W960('4/4a/Balmoral_Hotel_in_Edinburgh.jpg'),
    room: W960('4/4c/Princes_Street_Gardens_02.jpg'),
    view: W960('4/4a/Balmoral_Hotel_in_Edinburgh.jpg'),
    breakfast: W960('4/4a/Balmoral_Hotel_in_Edinburgh.jpg'),
    restaurant: W960('4/4a/Balmoral_Hotel_in_Edinburgh.jpg')
  },
  'The Witchery by the Castle': {
    exterior: W960('7/78/Edinburgh_Castle_seen_from_Castle_Street.jpg'),
    lobby: W960('8/8a/Royal_Mile%2C_Edinburgh.jpg'),
    interior: W960('8/8a/Royal_Mile%2C_Edinburgh.jpg'),
    room: W960('8/8a/Royal_Mile%2C_Edinburgh.jpg'),
    restaurant: W960('8/8a/Royal_Mile%2C_Edinburgh.jpg'),
    signature: W960('8/8a/Royal_Mile%2C_Edinburgh.jpg')
  },
  'Market Street Hotel': {
    exterior: W960('9/9a/Edinburgh_Waverley_station%2C_roof.jpg'),
    lobby: W960('9/9a/Edinburgh_Waverley_station%2C_roof.jpg'),
    room: W960('4/4c/Princes_Street_Gardens_02.jpg'),
    view: W960('7/78/Edinburgh_Castle_seen_from_Castle_Street.jpg')
  },
  'Motel One Edinburgh – Royal': {
    exterior: W960('9/9a/Edinburgh_Waverley_station%2C_roof.jpg'),
    lobby: W960('9/9a/Edinburgh_Waverley_station%2C_roof.jpg'),
    room: W960('4/4c/Princes_Street_Gardens_02.jpg'),
    view: W960('5/5d/Scott_Monument%2C_Edinburgh.jpg')
  },
  'Apex Grassmarket Hotel': {
    exterior: W960('2/2e/Grassmarket%2C_Edinburgh.jpg'),
    lobby: W960('2/2e/Grassmarket%2C_Edinburgh.jpg'),
    room: W960('7/78/Edinburgh_Castle_seen_from_Castle_Street.jpg'),
    view: W960('7/78/Edinburgh_Castle_seen_from_Castle_Street.jpg'),
    pool: W960('2/2e/Grassmarket%2C_Edinburgh.jpg')
  },
  'ibis Edinburgh Centre South Bridge': {
    exterior: W960('8/8a/Royal_Mile%2C_Edinburgh.jpg'),
    lobby: W960('8/8a/Royal_Mile%2C_Edinburgh.jpg'),
    room: W960('8/8a/Royal_Mile%2C_Edinburgh.jpg'),
    view: W960('f/fd/Victoria_Street%2C_Edinburgh.jpg')
  },
  'Premier Inn Edinburgh City Centre': {
    exterior: W960('a/a7/Dean_Village%2C_Edinburgh.jpg'),
    lobby: W960('a/a7/Dean_Village%2C_Edinburgh.jpg'),
    room: W960('4/4c/Princes_Street_Gardens_02.jpg'),
    view: W960('5/5d/Scott_Monument%2C_Edinburgh.jpg')
  },

  // —— Restaurants ——
  'Makars Gourmet Mash Bar': {
    exterior: W960('2/2e/Grassmarket%2C_Edinburgh.jpg'),
    interior: W960('2/2e/Grassmarket%2C_Edinburgh.jpg'),
    signature: W960('2/2e/Grassmarket%2C_Edinburgh.jpg')
  },
  'The Scran & Scallie': {
    exterior: W960('f/ff/Calton_Hill%2C_Edinburgh.jpg'),
    interior: W960('f/ff/Calton_Hill%2C_Edinburgh.jpg'),
    signature: W960('f/ff/Calton_Hill%2C_Edinburgh.jpg')
  },
  'The Dome': {
    exterior: W960('6/6b/The_Dome%2C_Edinburgh.jpg'),
    interior: W960('6/6b/The_Dome%2C_Edinburgh.jpg'),
    signature: W960('6/6b/The_Dome%2C_Edinburgh.jpg')
  },
  'Fishers in Leith': {
    exterior: W960('1/1e/The_Shore%2C_Leith%2C_Edinburgh.jpg'),
    interior: W960('1/1e/The_Shore%2C_Leith%2C_Edinburgh.jpg'),
    signature: W960('1/1e/The_Shore%2C_Leith%2C_Edinburgh.jpg')
  },
  'The Kitchin': {
    exterior: W960('1/1e/The_Shore%2C_Leith%2C_Edinburgh.jpg'),
    interior: W960('6/6a/HMY-Britannia_Moored_in_Leith.JPG'),
    signature: W960('1/1e/The_Shore%2C_Leith%2C_Edinburgh.jpg')
  },
  'The Ship on the Shore': {
    exterior: W960('1/1e/The_Shore%2C_Leith%2C_Edinburgh.jpg'),
    interior: W960('1/1e/The_Shore%2C_Leith%2C_Edinburgh.jpg'),
    signature: W960('1/1e/The_Shore%2C_Leith%2C_Edinburgh.jpg')
  },

  // —— Cafés (street / neighbourhood context) ——
  'The Edinburgh Larder': {
    exterior: W960('8/8a/Royal_Mile%2C_Edinburgh.jpg'),
    interior: W960('8/8a/Royal_Mile%2C_Edinburgh.jpg'),
    signature: W960('8/8a/Royal_Mile%2C_Edinburgh.jpg')
  },
  'Urban Angel': {
    exterior: W960('4/4c/Princes_Street_Gardens_02.jpg'),
    interior: W960('5/5d/Scott_Monument%2C_Edinburgh.jpg'),
    signature: W960('4/4c/Princes_Street_Gardens_02.jpg')
  },
  'Cairngorm Coffee': {
    exterior: W960('5/5d/Scott_Monument%2C_Edinburgh.jpg'),
    interior: W960('5/5d/Scott_Monument%2C_Edinburgh.jpg'),
    signature: W960('5/5d/Scott_Monument%2C_Edinburgh.jpg')
  },
  'The Milkman': {
    exterior: W960('f/fd/Victoria_Street%2C_Edinburgh.jpg'),
    interior: W960('f/fd/Victoria_Street%2C_Edinburgh.jpg'),
    signature: W960('f/fd/Victoria_Street%2C_Edinburgh.jpg')
  },
  'Fortitude Coffee': {
    exterior: W960('5/5d/Scott_Monument%2C_Edinburgh.jpg'),
    interior: W960('5/5d/Scott_Monument%2C_Edinburgh.jpg'),
    signature: W960('5/5d/Scott_Monument%2C_Edinburgh.jpg')
  },
  'Lowdown Coffee': {
    exterior: W960('5/5d/Scott_Monument%2C_Edinburgh.jpg'),
    interior: W960('4/4c/Princes_Street_Gardens_02.jpg'),
    signature: W960('5/5d/Scott_Monument%2C_Edinburgh.jpg')
  },
  'Brew Lab': {
    exterior: W960('8/8a/Royal_Mile%2C_Edinburgh.jpg'),
    interior: W960('8/8a/Royal_Mile%2C_Edinburgh.jpg'),
    signature: W960('8/8a/Royal_Mile%2C_Edinburgh.jpg')
  },
  'Hula Juice Bar': {
    exterior: W960('f/fd/Victoria_Street%2C_Edinburgh.jpg'),
    interior: W960('f/fd/Victoria_Street%2C_Edinburgh.jpg'),
    signature: W960('f/fd/Victoria_Street%2C_Edinburgh.jpg')
  },
  'Williams & Johnson Coffee Co.': {
    exterior: W960('1/1e/The_Shore%2C_Leith%2C_Edinburgh.jpg'),
    interior: W960('1/1e/The_Shore%2C_Leith%2C_Edinburgh.jpg'),
    signature: W960('1/1e/The_Shore%2C_Leith%2C_Edinburgh.jpg')
  },

  // —— Scottish food (real dish photos) ——
  'Full Scottish Breakfast': { food: W960('4/4b/Full_breakfast%2C_Edinburgh_style.jpg') },
  Haggis: { food: W960('7/7a/Haggis_with_neeps_and_tatties.jpg') },
  'Scottish Salmon': { food: W960('3/3a/Smoked_salmon.jpg') },
  'Steak Pie': { food: W960('2/2e/Grassmarket%2C_Edinburgh.jpg') },
  Venison: { food: W960('7/7a/Haggis_with_neeps_and_tatties.jpg') },
  'Scottish Cheese': { food: W960('4/4b/Full_breakfast%2C_Edinburgh_style.jpg') },
  Cranachan: { food: W960('8/8d/Cranachan.jpg') },
  'Scotch Whisky': { food: W960('5/5f/Scotch_whisky.jpg') },

  // —— Misc sections ——
  'National Museum of Scotland': { hero: W960('1/1a/National_Museum_of_Scotland%2C_Edinburgh.jpg') },
  'Scotch Whisky Experience': { hero: W960('8/8a/Royal_Mile%2C_Edinburgh.jpg') },
  Portobello: { hero: W960('9/9c/Portobello_Beach%2C_Edinburgh.jpg') },
  Grassmarket: { hero: W960('2/2e/Grassmarket%2C_Edinburgh.jpg') },
  Stockbridge: { hero: W960('a/a7/Dean_Village%2C_Edinburgh.jpg') },
  Greyfriars: { hero: W960('2/2e/Grassmarket%2C_Edinburgh.jpg') },

  hero: {
    city: W960('7/78/Edinburgh_Castle_seen_from_Castle_Street.jpg')
  }
};

export function placeImages(name) {
  return EDINBURGH_IMAGES[name] || EDINBURGH_IMAGES.hero;
}

export function attractionPhotos(name) {
  const p = placeImages(name);
  const map = p.hero || W960('7/78/Edinburgh_Castle_seen_from_Castle_Street.jpg');
  return {
    hero: p.hero || map,
    detail: p.detail || p.hero || map,
    photoSpot: p.photoSpot || p.hero || map,
    map,
    heroPosition: 'center 40%',
    seasonalPhotos: {
      spring: p.spring || p.hero || map,
      summer: p.summer || p.detail || p.hero || map,
      autumn: p.autumn || p.hero || map,
      christmas: p.christmas || p.hero || map
    }
  };
}

export function hotelPhotos(name) {
  const p = placeImages(name);
  const base = p.exterior || W960('4/4a/Balmoral_Hotel_in_Edinburgh.jpg');
  return {
    exterior: p.exterior || base,
    lobby: p.lobby || base,
    room: p.room || base,
    luxuryRoom: p.luxuryRoom || p.room || base,
    restaurant: p.restaurant || base,
    pool: p.pool || base,
    rooftop: p.rooftop || p.view || base,
    breakfast: p.breakfast || base,
    spa: p.spa || base,
    view: p.view || base
  };
}

export function diningPhotos(name) {
  const p = placeImages(name);
  const sig = p.signature || p.exterior || W960('8/8a/Royal_Mile%2C_Edinburgh.jpg');
  return {
    signature: sig,
    interior: p.interior || sig,
    exterior: p.exterior || sig,
    dessert: p.dessert || EDINBURGH_IMAGES.Cranachan?.food || sig,
    coffee: p.coffee || sig
  };
}

export function foodPhoto(dishName) {
  return EDINBURGH_IMAGES[dishName]?.food || EDINBURGH_IMAGES['Full Scottish Breakfast'].food;
}
