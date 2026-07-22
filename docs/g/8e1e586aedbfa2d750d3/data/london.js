/**
 * DISCOVER London — Travel Guide
 * Real place photos via Wikimedia Commons (CC-licensed)
 */
const PLAN = {
  "meta": {
    "city": "London",
    "country": "United Kingdom",
    "tagline": "Sights, stays, food and day plans — in your pocket.",
    "badge": "Discover · 2026 Edition",
    "edition": "2026",
    "stats": {
      "chapters": 51,
      "qrCodes": "200+",
      "attractions": 12,
      "hotels": 9,
      "dining": 8,
      "days": 5
    },
    "theme": {
      "accent": "#c41e3a",
      "accentSoft": "#fde8ec",
      "accentDeep": "#8b1429",
      "heroImage": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Tower_of_London_from_the_Shard_%288515883950%29.jpg/960px-Tower_of_London_from_the_Shard_%288515883950%29.jpg",
      "tube": "#0019A8",
      "parks": "#2d6a4f",
      "river": "#0077b6",
      "gold": "#b8860b",
      "navy": "#1a2744"
    }
  },
  "welcome": {
    "editorLetter": "London is not a city you visit. It is a city you rehearse — a rehearsal of centuries, of empires and afternoons, of black cabs and quiet gardens. This companion was built for one purpose: to sit in your pocket and answer the only question that ever matters on a good trip — what should I do next?\n\nEvery attraction, hotel, restaurant, hospital and embassy in these pages carries a QR code that opens directly in Google Maps. Every itinerary has a route map, a timeline, and an estimated walking distance. Every chapter has been designed to be beautiful to look at and useful to hold.",
    "howToUse": "Point your phone camera at any QR code and the location opens in Google Maps in one tap. Every website and booking link is also clickable directly in the PDF. Colour-coded day chapters make navigation effortless.\n\n— The Editors, London Bureau"
  },
  "essentials": {
    "currency": {
      "label": "£ Pound Sterling",
      "note": "Contactless is king. Notify your bank before travel."
    },
    "power": {
      "label": "Type G · 230V",
      "note": "British three-pin plug. Bring a universal adapter."
    },
    "sim": {
      "label": "eSIM or airport SIM",
      "note": "EE, Vodafone, Three. eSIM works instantly on arrival."
    },
    "language": {
      "label": "English",
      "note": "Arabic widely understood in Mayfair, Edgware Road."
    },
    "tipping": {
      "label": "10–12.5%",
      "note": "Check if service charge is already included."
    },
    "emergency": {
      "label": "999 · 112",
      "note": "Police · Fire · Ambulance · Coastguard."
    },
    "tapWater": {
      "label": "Safe to drink",
      "note": "Cafés will refill your bottle on request."
    },
    "timezone": {
      "label": "GMT / BST +1",
      "note": "Clocks change last Sunday of March & October."
    }
  },
  "arrival": [
    {
      "step": "01",
      "title": "Border",
      "desc": "Follow signs to UK Border. e-Gates open to most passports incl. GCC. Have your accommodation address ready."
    },
    {
      "step": "02",
      "title": "SIM / eSIM",
      "desc": "Activate your eSIM on airport Wi-Fi. Or buy an EE / Three SIM from the arrivals shop (£10 gets you 20GB)."
    },
    {
      "step": "03",
      "title": "Cash",
      "desc": "Take £50–£100 from an ATM (Halifax / HSBC — never the Travelex booth). Cards work everywhere but keep a note."
    },
    {
      "step": "04",
      "title": "Train, not taxi",
      "desc": "Elizabeth Line from LHR T2/T3/T5 to central London: 30 min, £11.50. From LGW take the Gatwick Express: 30 min, £22."
    },
    {
      "step": "05",
      "title": "Oyster / Contactless",
      "desc": "Tap your bank card at the gates. It caps at £8.90/day automatically. No Oyster needed for most travellers."
    },
    {
      "step": "06",
      "title": "Hotel",
      "desc": "Check-in is usually from 15:00. Most luxury hotels will hold luggage from 09:00 so you can start exploring."
    },
    {
      "step": "07",
      "title": "First meal",
      "desc": "Head to Borough Market (Southwark) or Dishoom (Covent Garden). Recover with tea, then a nap. Jet lag rewards discipline."
    }
  ],
  "packing": {
    "spring": {
      "months": "MAR–MAY",
      "temp": "8–17 °C · light showers",
      "items": [
        "Light waterproof jacket",
        "Layerable knit",
        "Compact umbrella",
        "Walking shoes",
        "Sunglasses",
        "Light scarf"
      ]
    },
    "summer": {
      "months": "JUN–AUG",
      "temp": "16–24 °C · long evenings",
      "items": [
        "Linen shirts / breathable tops",
        "Light dress or jacket",
        "Trainers + one smart pair",
        "Sunscreen SPF 30",
        "Refillable bottle",
        "Sunhat"
      ]
    },
    "autumn": {
      "months": "SEP–NOV",
      "temp": "9–17 °C · golden light",
      "items": [
        "Trench coat",
        "Wool jumper",
        "Waterproof boots",
        "Umbrella",
        "Gloves for late Nov",
        "Book for cafés"
      ]
    },
    "winter": {
      "months": "DEC–FEB",
      "temp": "2–8 °C · crisp & short days",
      "items": [
        "Heavy wool coat",
        "Thermal base layer",
        "Beanie + scarf + gloves",
        "Waterproof boots",
        "Hand warmers",
        "Moisturiser"
      ]
    }
  },
  "weatherTable": {
    "rows": [
      {
        "month": "Jan",
        "avgTemp": "2 / 7 °C",
        "rain": "55%",
        "sunset": "16:15",
        "crowds": "Low",
        "recommend": "Museums · Sales"
      },
      {
        "month": "Feb",
        "avgTemp": "2 / 8 °C",
        "rain": "50%",
        "sunset": "17:15",
        "crowds": "Low",
        "recommend": "Afternoon tea"
      },
      {
        "month": "Mar",
        "avgTemp": "4 / 11 °C",
        "rain": "45%",
        "sunset": "18:15",
        "crowds": "Rising",
        "recommend": "Parks awakening"
      },
      {
        "month": "Apr",
        "avgTemp": "6 / 14 °C",
        "rain": "45%",
        "sunset": "20:00",
        "crowds": "Medium",
        "recommend": "Cherry blossom"
      },
      {
        "month": "May",
        "avgTemp": "9 / 17 °C",
        "rain": "40%",
        "sunset": "20:45",
        "crowds": "Medium",
        "recommend": "Perfect walking"
      },
      {
        "month": "Jun",
        "avgTemp": "12 / 20 °C",
        "rain": "40%",
        "sunset": "21:20",
        "crowds": "High",
        "recommend": "Long evenings"
      },
      {
        "month": "Jul",
        "avgTemp": "14 / 23 °C",
        "rain": "40%",
        "sunset": "21:15",
        "crowds": "Peak",
        "recommend": "Book everything"
      },
      {
        "month": "Aug",
        "avgTemp": "14 / 23 °C",
        "rain": "45%",
        "sunset": "20:30",
        "crowds": "Peak",
        "recommend": "Notting Hill Carnival"
      },
      {
        "month": "Sep",
        "avgTemp": "11 / 19 °C",
        "rain": "45%",
        "sunset": "19:15",
        "crowds": "Medium",
        "recommend": "Golden light"
      },
      {
        "month": "Oct",
        "avgTemp": "9 / 15 °C",
        "rain": "55%",
        "sunset": "18:00",
        "crowds": "Medium",
        "recommend": "Autumn colour"
      },
      {
        "month": "Nov",
        "avgTemp": "5 / 10 °C",
        "rain": "60%",
        "sunset": "16:15",
        "crowds": "Low",
        "recommend": "Bonfire · lights"
      },
      {
        "month": "Dec",
        "avgTemp": "3 / 8 °C",
        "rain": "55%",
        "sunset": "15:55",
        "crowds": "Rising",
        "recommend": "Christmas markets"
      }
    ],
    "sweetSpot": "May–early June and September deliver the best light, the smallest queues at ticketed attractions and the longest usable daylight. Avoid the last two weeks of August — school-holiday peak — unless you have booked everything in advance."
  },
  "transport": {
    "modes": [
      {
        "icon": "tube",
        "name": "Tube",
        "price": "£2.90 off-peak",
        "desc": "Fastest across zones 1–2. 11 lines. Daily cap £8.90."
      },
      {
        "icon": "bus",
        "name": "Bus",
        "price": "£1.75 flat",
        "desc": "One-hour Hopper: unlimited buses in 60 min for one fare."
      },
      {
        "icon": "elizabeth",
        "name": "Elizabeth",
        "price": "£4–£12",
        "desc": "New east-west line. Heathrow to Bond St in 32 min."
      },
      {
        "icon": "boat",
        "name": "River Boat",
        "price": "£4–£10",
        "desc": "Uber Boat by Thames Clippers. Views + no traffic."
      },
      {
        "icon": "walk",
        "name": "Walk",
        "price": "Free",
        "desc": "Central London is 3 km wide. Everything is walkable."
      },
      {
        "icon": "bike",
        "name": "Bike",
        "price": "£1.65 / 30 min",
        "desc": "Santander Cycles. 800+ docking stations."
      },
      {
        "icon": "cab",
        "name": "Black Cab",
        "price": "£10–£25 short",
        "desc": "Iconic. Wheelchair accessible. Contactless accepted."
      },
      {
        "icon": "uber",
        "name": "Uber / Bolt",
        "price": "£8–£20 short",
        "desc": "Cheaper than black cab off-peak. Split fares in-app."
      }
    ],
    "oysterTips": [
      {
        "title": "Contactless bank card",
        "desc": "Just tap the yellow reader. Daily cap £8.90 · weekly cap £44.70. Uses your bank's FX rate — usually best."
      },
      {
        "title": "Apple / Google Pay",
        "desc": "Same as contactless. Use the same card each journey or your fares won't cap properly."
      },
      {
        "title": "Oyster (visitor)",
        "desc": "Only useful if your card charges FX fees. £7 deposit + top up. Refund at any station machine."
      },
      {
        "title": "Under 11s free",
        "desc": "Kids travel free on Tube, DLR, bus and Elizabeth Line with an adult. No paperwork needed."
      }
    ],
    "exit6Tip": "Use exit 6 at Westminster tube — you emerge with Big Ben framed directly in front of you. Every other exit spits you into traffic. Your first photo of London is worth planning for."
  },
  "maps": {
    "overview": {
      "caption": "A schematic map — for exact directions, scan any QR code in this guide.",
      "markers": [
        {
          "name": "Buckingham Palace",
          "type": "attraction",
          "lat": 51.5014,
          "lng": -0.1419
        },
        {
          "name": "Westminster",
          "type": "attraction",
          "lat": 51.4995,
          "lng": -0.1248
        },
        {
          "name": "Tower of London",
          "type": "attraction",
          "lat": 51.5081,
          "lng": -0.0759
        },
        {
          "name": "Tower Bridge",
          "type": "attraction",
          "lat": 51.5055,
          "lng": -0.0754
        },
        {
          "name": "St Paul's",
          "type": "attraction",
          "lat": 51.5138,
          "lng": -0.0984
        },
        {
          "name": "British Museum",
          "type": "attraction",
          "lat": 51.5194,
          "lng": -0.127
        },
        {
          "name": "The Shard",
          "type": "attraction",
          "lat": 51.5045,
          "lng": -0.0865
        },
        {
          "name": "London Eye",
          "type": "attraction",
          "lat": 51.5033,
          "lng": -0.1195
        },
        {
          "name": "Hyde Park",
          "type": "park",
          "lat": 51.5073,
          "lng": -0.1657
        },
        {
          "name": "Notting Hill",
          "type": "district",
          "lat": 51.5099,
          "lng": -0.1969
        },
        {
          "name": "Camden",
          "type": "district",
          "lat": 51.539,
          "lng": -0.1426
        },
        {
          "name": "Greenwich",
          "type": "district",
          "lat": 51.4826,
          "lng": -0.0077
        },
        {
          "name": "The Savoy",
          "type": "hotel",
          "lat": 51.5103,
          "lng": -0.1206
        },
        {
          "name": "The Ritz",
          "type": "hotel",
          "lat": 51.507,
          "lng": -0.1416
        },
        {
          "name": "Claridge's",
          "type": "hotel",
          "lat": 51.5124,
          "lng": -0.1476
        },
        {
          "name": "Sketch",
          "type": "dining",
          "lat": 51.5133,
          "lng": -0.142
        },
        {
          "name": "Dishoom",
          "type": "dining",
          "lat": 51.5125,
          "lng": -0.1268
        },
        {
          "name": "Borough Market",
          "type": "dining",
          "lat": 51.5055,
          "lng": -0.091
        }
      ]
    }
  },
  "attractions": [
    {
      "name": "Tower of London",
      "address": "Tower Hill · EC3N 4AB",
      "hours": "09:00–17:30 · closed 24–26 Dec",
      "tube": "Tower Hill · District/Circle",
      "ticket": "£33.60 adult",
      "bestArrival": "09:00",
      "waitSummer": "40–70 min",
      "waitWinter": "10–20 min",
      "photoSpot": "From the north bank of the Thames near St Katharine Docks — 5 min walk.",
      "lens": "24–70mm",
      "tip": "Buy online, save £4. Yeoman Warder tours run every 30 min — do not skip.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Tower+of+London",
      "bookUrl": "https://www.hrp.org.uk/tower-of-london/",
      "bookText": "Book Tickets",
      "avgVisit": "2.5 hours",
      "crowd": {
        "morning": 2,
        "afternoon": 5,
        "evening": 3
      },
      "nearby": [
        {
          "name": "Tower Bridge",
          "walk": "4 min"
        },
        {
          "name": "Sky Garden",
          "walk": "10 min"
        },
        {
          "name": "St Katharine Docks",
          "walk": "5 min"
        },
        {
          "name": "HMS Belfast",
          "walk": "8 min"
        },
        {
          "name": "The Shard",
          "walk": "12 min"
        }
      ],
      "nearbyCafes": "Perky Blenders Tower Bridge · WatchHouse Tower · Canteen M by Montcalm",
      "nearbyRestaurants": "Dishoom Shoreditch · Coppa Club Tower Bridge · Gunpowder",
      "nearbyTube": "Tower Hill (District/Circle) · Tower Gateway (DLR) · London Bridge",
      "nearbyToilets": "Inside Tower grounds · St Katharine Docks marina · Tower Hill station",
      "nearbyAtm": "Tower Hill station · Tesco Express Minories · Post Office EC3N",
      "didYouKnow": "The Tower has housed the Crown Jewels since the 17th century and has served as a royal palace, prison, and mint.",
      "localSecret": "Skip the main gift shop — the independent bookshop at St Katharine Docks has better history titles at half the price.",
      "instagram": {
        "sunset": "North bank near St Katharine Docks",
        "sunrise": "Trinity Square gardens east side",
        "drone": "No — CAA restricted zone",
        "settings": "f/8 · ISO 100 · blue hour 16–35mm"
      },
      "photos": {
        "hero": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Tower_of_London_from_the_Shard_%288515883950%29.jpg/960px-Tower_of_London_from_the_Shard_%288515883950%29.jpg",
        "detail": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Tower_Bridge_London_Feb_2006.jpg/960px-Tower_Bridge_London_Feb_2006.jpg",
        "photoSpot": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/All_Hallows-by-the-Tower_Interior%2C_London%2C_UK_-_Diliff.jpg/960px-All_Hallows-by-the-Tower_Interior%2C_London%2C_UK_-_Diliff.jpg",
        "map": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/All_Hallows-by-the-Tower_Interior%2C_London%2C_UK_-_Diliff.jpg/960px-All_Hallows-by-the-Tower_Interior%2C_London%2C_UK_-_Diliff.jpg",
        "heroPosition": "center 35%"
      },
      "seasonalPhotos": {
        "spring": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Tower_of_London_from_the_Shard_%288515883950%29.jpg/960px-Tower_of_London_from_the_Shard_%288515883950%29.jpg",
        "summer": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Tower_Bridge_London_Feb_2006.jpg/960px-Tower_Bridge_London_Feb_2006.jpg",
        "autumn": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/All_Hallows-by-the-Tower_Interior%2C_London%2C_UK_-_Diliff.jpg/960px-All_Hallows-by-the-Tower_Interior%2C_London%2C_UK_-_Diliff.jpg",
        "christmas": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/All_Hallows-by-the-Tower_Interior%2C_London%2C_UK_-_Diliff.jpg/960px-All_Hallows-by-the-Tower_Interior%2C_London%2C_UK_-_Diliff.jpg"
      }
    },
    {
      "name": "Tower Bridge",
      "address": "Tower Bridge Rd · SE1 2UP",
      "hours": "09:30–18:00",
      "tube": "Tower Hill · London Bridge",
      "ticket": "£13.40 adult",
      "bestArrival": "10:00 or 16:30",
      "waitSummer": "15–30 min",
      "waitWinter": "5–10 min",
      "photoSpot": "Potters Fields Park (5 min walk) at blue hour.",
      "lens": "16–35mm",
      "tip": "Bridge lift times are published online — a bascule lift is unforgettable and free from the pavement.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Tower+Bridge+London",
      "bookUrl": "https://www.towerbridge.org.uk/",
      "bookText": "Book Tickets",
      "avgVisit": "1.5 hours",
      "crowd": {
        "morning": 3,
        "afternoon": 4,
        "evening": 2
      },
      "nearby": [
        {
          "name": "Tower of London",
          "walk": "4 min"
        },
        {
          "name": "Borough Market",
          "walk": "15 min"
        },
        {
          "name": "The Shard",
          "walk": "12 min"
        },
        {
          "name": "HMS Belfast",
          "walk": "8 min"
        },
        {
          "name": "City Hall",
          "walk": "6 min"
        }
      ],
      "nearbyCafes": "WatchHouse Tower · Perky Blenders · Horniman at Hays",
      "nearbyRestaurants": "Coppa Club · M Restaurant Threadneedle · Brindisa Borough",
      "nearbyTube": "Tower Hill · London Bridge · Bermondsey",
      "nearbyToilets": "Tower Bridge exhibition · Potters Fields Park · More London Place",
      "nearbyAtm": "London Bridge station · Tesco Express Tooley St",
      "didYouKnow": "Tower Bridge took eight years to build and opened in 1894 — it is often mistaken for London Bridge.",
      "localSecret": "The glass floor walkway is quieter in the first hour after opening — book the 09:30 slot online.",
      "instagram": {
        "sunset": "Potters Fields Park lawn",
        "sunrise": "South bank near City Hall",
        "drone": "Restricted — permit required",
        "settings": "f/11 · ISO 200 · 16–35mm for full span"
      },
      "photos": {
        "hero": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Tower_Bridge_at_Dawn.jpg/960px-Tower_Bridge_at_Dawn.jpg",
        "detail": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Tower_Bridge_London_Feb_2006.jpg/960px-Tower_Bridge_London_Feb_2006.jpg",
        "photoSpot": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Tower_Bridge_London_08.JPG/960px-Tower_Bridge_London_08.JPG",
        "map": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Tower_Bridge_London_08.JPG/960px-Tower_Bridge_London_08.JPG"
      },
      "seasonalPhotos": {
        "spring": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Tower_Bridge_at_Dawn.jpg/960px-Tower_Bridge_at_Dawn.jpg",
        "summer": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Tower_Bridge_London_Feb_2006.jpg/960px-Tower_Bridge_London_Feb_2006.jpg",
        "autumn": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Tower_Bridge_London_08.JPG/960px-Tower_Bridge_London_08.JPG",
        "christmas": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Tower_Bridge_London_08.JPG/960px-Tower_Bridge_London_08.JPG"
      }
    },
    {
      "name": "Westminster Abbey",
      "address": "20 Deans Yd · SW1P 3PA",
      "hours": "09:30–15:30 · closed Sun to tourists",
      "tube": "Westminster · Jubilee/District",
      "ticket": "£29 adult",
      "bestArrival": "09:30",
      "waitSummer": "30–50 min",
      "waitWinter": "10–20 min",
      "photoSpot": "From Parliament Square with the abbey's twin west towers.",
      "lens": "24mm",
      "tip": "Evensong at 17:00 is free and utterly transporting — no camera, just listen.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Westminster+Abbey+London",
      "bookUrl": "https://www.westminster-abbey.org/",
      "bookText": "Book Tickets",
      "avgVisit": "2 hours",
      "crowd": {
        "morning": 3,
        "afternoon": 5,
        "evening": 2
      },
      "nearby": [
        {
          "name": "Big Ben & Parliament",
          "walk": "3 min"
        },
        {
          "name": "Churchill War Rooms",
          "walk": "5 min"
        },
        {
          "name": "St James's Park",
          "walk": "8 min"
        },
        {
          "name": "London Eye",
          "walk": "10 min"
        },
        {
          "name": "Horse Guards Parade",
          "walk": "12 min"
        }
      ],
      "nearbyCafes": "Storey's Gate Café · Westminster Abbey Cellarium · Redemption Roasters",
      "nearbyRestaurants": "The Cinnamon Club · Roux at Parliament Square · Cellarium Café",
      "nearbyTube": "Westminster (exit 6 for Big Ben) · St James's Park",
      "nearbyToilets": "Inside abbey · Westminster station · St James's Park",
      "nearbyAtm": "Westminster station · Victoria Street banks",
      "didYouKnow": "Every British monarch since 1066 has been crowned here, except Edward V and Edward VIII.",
      "localSecret": "The Cellarium Café in the abbey cloisters serves excellent cream tea — most tourists walk past it.",
      "instagram": {
        "sunset": "Parliament Square west side",
        "sunrise": "Dean's Yard courtyard (when open)",
        "drone": "No — central London restriction",
        "settings": "f/8 · ISO 400 · 24mm vertical for towers"
      },
      "photos": {
        "hero": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Westminster_Abbey%2C_Westminster.jpg/960px-Westminster_Abbey%2C_Westminster.jpg",
        "detail": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Palace_of_Westminster%2C_London_-_Feb_2007.jpg/960px-Palace_of_Westminster%2C_London_-_Feb_2007.jpg",
        "photoSpot": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Palace_of_Westminster%2C_London_-_Feb_2007.jpg/960px-Palace_of_Westminster%2C_London_-_Feb_2007.jpg",
        "map": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Palace_of_Westminster%2C_London_-_Feb_2007.jpg/960px-Palace_of_Westminster%2C_London_-_Feb_2007.jpg"
      },
      "seasonalPhotos": {
        "spring": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Westminster_Abbey%2C_Westminster.jpg/960px-Westminster_Abbey%2C_Westminster.jpg",
        "summer": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Palace_of_Westminster%2C_London_-_Feb_2007.jpg/960px-Palace_of_Westminster%2C_London_-_Feb_2007.jpg",
        "autumn": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Palace_of_Westminster%2C_London_-_Feb_2007.jpg/960px-Palace_of_Westminster%2C_London_-_Feb_2007.jpg",
        "christmas": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Palace_of_Westminster%2C_London_-_Feb_2007.jpg/960px-Palace_of_Westminster%2C_London_-_Feb_2007.jpg"
      }
    },
    {
      "name": "Big Ben",
      "address": "Westminster · SW1A 0AA",
      "hours": "Exterior 24/7 · tours Sat + recess",
      "tube": "Westminster · exit 6",
      "ticket": "£33 UK Parliament tour",
      "bestArrival": "Sunset from Westminster Bridge",
      "waitSummer": "0 (exterior)",
      "waitWinter": "0",
      "photoSpot": "North end of Westminster Bridge, tripod-friendly late evening.",
      "lens": "35–70mm",
      "tip": "Cross to the south bank for the classic composition with the London Eye foreground.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Big+Ben+London",
      "bookUrl": "https://www.parliament.uk/visiting/",
      "bookText": "Book Tour",
      "avgVisit": "45 min (exterior)",
      "crowd": {
        "morning": 4,
        "afternoon": 5,
        "evening": 3
      },
      "nearby": [
        {
          "name": "Westminster Abbey",
          "walk": "3 min"
        },
        {
          "name": "London Eye",
          "walk": "8 min"
        },
        {
          "name": "Churchill War Rooms",
          "walk": "5 min"
        },
        {
          "name": "St James's Park",
          "walk": "8 min"
        },
        {
          "name": "Houses of Parliament",
          "walk": "1 min"
        }
      ],
      "nearbyCafes": "Storey's Gate Café · Redemption Roasters · Pret Westminster",
      "nearbyRestaurants": "Regency Café (8 min) · Poppie's Fish & Chips · Roux at Parliament Square",
      "nearbyTube": "Westminster exit 6 · Embankment",
      "nearbyToilets": "Westminster underground · Jubilee Gardens · Parliament visitor centre",
      "nearbyAtm": "Westminster station · Whitehall banks",
      "didYouKnow": "Big Ben is actually the name of the bell, not the tower — the tower is Elizabeth Tower.",
      "localSecret": "Locals skip the bridge crowds at sunset and shoot from the Lambeth Pier steps instead — same skyline, half the people.",
      "instagram": {
        "sunset": "Westminster Bridge north end",
        "sunrise": "South bank County Hall terrace",
        "drone": "No",
        "settings": "f/11 · ISO 200 · 35mm · 30s exposure at blue hour"
      },
      "photos": {
        "hero": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Elizabeth_Tower%2C_June_2022.jpg/960px-Elizabeth_Tower%2C_June_2022.jpg",
        "detail": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Palace_of_Westminster%2C_London_-_Feb_2007.jpg/960px-Palace_of_Westminster%2C_London_-_Feb_2007.jpg",
        "photoSpot": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Clock_Tower_-_Palace_of_Westminster%2C_London_-_September_2006-2.jpg/960px-Clock_Tower_-_Palace_of_Westminster%2C_London_-_September_2006-2.jpg",
        "map": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Clock_Tower_-_Palace_of_Westminster%2C_London_-_September_2006-2.jpg/960px-Clock_Tower_-_Palace_of_Westminster%2C_London_-_September_2006-2.jpg"
      },
      "seasonalPhotos": {
        "spring": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Elizabeth_Tower%2C_June_2022.jpg/960px-Elizabeth_Tower%2C_June_2022.jpg",
        "summer": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Palace_of_Westminster%2C_London_-_Feb_2007.jpg/960px-Palace_of_Westminster%2C_London_-_Feb_2007.jpg",
        "autumn": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Clock_Tower_-_Palace_of_Westminster%2C_London_-_September_2006-2.jpg/960px-Clock_Tower_-_Palace_of_Westminster%2C_London_-_September_2006-2.jpg",
        "christmas": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Clock_Tower_-_Palace_of_Westminster%2C_London_-_September_2006-2.jpg/960px-Clock_Tower_-_Palace_of_Westminster%2C_London_-_September_2006-2.jpg"
      }
    },
    {
      "name": "London Eye",
      "address": "Riverside Bldg · SE1 7PB",
      "hours": "11:00–18:00 · later in summer",
      "tube": "Waterloo · Jubilee/Bakerloo",
      "ticket": "£40.50 online",
      "bestArrival": "After 18:00",
      "waitSummer": "45–90 min",
      "waitWinter": "15–30 min",
      "photoSpot": "From Golden Jubilee Bridge — full wheel + Big Ben in one frame.",
      "lens": "16–24mm",
      "tip": "Fast Track ticket saves 60+ min in summer. Sunset flight is worth every pound.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=London+Eye",
      "bookUrl": "https://www.londoneye.com/",
      "bookText": "Fast Track",
      "avgVisit": "1 hour",
      "crowd": {
        "morning": 3,
        "afternoon": 5,
        "evening": 4
      },
      "nearby": [
        {
          "name": "Big Ben",
          "walk": "8 min"
        },
        {
          "name": "Southbank Centre",
          "walk": "5 min"
        },
        {
          "name": "Sea Life London",
          "walk": "2 min"
        },
        {
          "name": "Tate Modern",
          "walk": "15 min"
        },
        {
          "name": "Covent Garden",
          "walk": "20 min"
        }
      ],
      "nearbyCafes": "Monmouth Coffee Southbank · Gabriel's Wharf · FCB Coffee",
      "nearbyRestaurants": "Skylon · Oxo Tower Restaurant · Gillray's Steakhouse",
      "nearbyTube": "Waterloo · Westminster · Embankment",
      "nearbyToilets": "County Hall · Southbank Centre · Jubilee Gardens",
      "nearbyAtm": "Waterloo station · Shell County Hall",
      "didYouKnow": "Each rotation takes about 30 minutes and on a clear day you can see up to 40 miles.",
      "localSecret": "The free viewing terrace at Oxo Tower (9th floor) gives a similar panorama without the queue — book a cocktail instead.",
      "instagram": {
        "sunset": "Golden Jubilee Bridge centre",
        "sunrise": "Jubilee Gardens lawn",
        "drone": "No — restricted",
        "settings": "f/8 · ISO 100 · 16mm · shoot during rotation glow"
      },
      "photos": {
        "hero": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/London-Eye-2009.JPG/960px-London-Eye-2009.JPG",
        "detail": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/London_Eye_Twilight_April_2006.jpg/960px-London_Eye_Twilight_April_2006.jpg",
        "photoSpot": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/In_the_pod_of_the_London_Eye_-_geograph.org.uk_-_908898.jpg/960px-In_the_pod_of_the_London_Eye_-_geograph.org.uk_-_908898.jpg",
        "map": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/In_the_pod_of_the_London_Eye_-_geograph.org.uk_-_908898.jpg/960px-In_the_pod_of_the_London_Eye_-_geograph.org.uk_-_908898.jpg"
      },
      "seasonalPhotos": {
        "spring": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/London-Eye-2009.JPG/960px-London-Eye-2009.JPG",
        "summer": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/London_Eye_Twilight_April_2006.jpg/960px-London_Eye_Twilight_April_2006.jpg",
        "autumn": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/In_the_pod_of_the_London_Eye_-_geograph.org.uk_-_908898.jpg/960px-In_the_pod_of_the_London_Eye_-_geograph.org.uk_-_908898.jpg",
        "christmas": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/In_the_pod_of_the_London_Eye_-_geograph.org.uk_-_908898.jpg/960px-In_the_pod_of_the_London_Eye_-_geograph.org.uk_-_908898.jpg"
      }
    },
    {
      "name": "Buckingham Palace",
      "address": "London · SW1A 1AA",
      "hours": "Jul–Sep 09:30–19:30",
      "tube": "Green Park · Victoria",
      "ticket": "£35 State Rooms · summer only",
      "bestArrival": "Changing of the Guard 11:00",
      "waitSummer": "30–60 min",
      "waitWinter": "—",
      "photoSpot": "Victoria Memorial steps — dead-centre framing.",
      "lens": "70–200mm for guards",
      "tip": "Guard change is Mon/Wed/Fri/Sun in most seasons. Arrive by 10:15 for a spot on the railings.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Buckingham+Palace+London",
      "bookUrl": "https://www.rct.uk/visit/buckingham-palace",
      "bookText": "Book Tickets",
      "avgVisit": "2 hours",
      "crowd": {
        "morning": 5,
        "afternoon": 4,
        "evening": 2
      },
      "nearby": [
        {
          "name": "St James's Park",
          "walk": "5 min"
        },
        {
          "name": "Westminster Abbey",
          "walk": "15 min"
        },
        {
          "name": "Green Park",
          "walk": "3 min"
        },
        {
          "name": "The Mall",
          "walk": "2 min"
        },
        {
          "name": "Royal Mews",
          "walk": "4 min"
        }
      ],
      "nearbyCafes": "The Rubens Hotel afternoon tea · Fortnum's at St James's · WatchHouse St James's",
      "nearbyRestaurants": "The Wolseley · Hawksmoor Air Street · Quilon",
      "nearbyTube": "Green Park · Victoria · St James's Park",
      "nearbyToilets": "St James's Park · Green Park · Victoria station",
      "nearbyAtm": "Victoria station · Buckingham Palace Rd Post Office",
      "didYouKnow": "The palace has 775 rooms and the balcony where the Royal Family appears was added in 1850.",
      "localSecret": "Walk through Green Park to The Mall at 10:45 — you'll see the guards marching in without the fence crush.",
      "instagram": {
        "sunset": "The Mall looking toward palace",
        "sunrise": "St James's Park lake with palace backdrop",
        "drone": "No",
        "settings": "f/5.6 · ISO 400 · 70–200mm for ceremony"
      },
      "photos": {
        "hero": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Buckingham_Palace_London_Morning_2020_01_%28cropped%29.jpg/960px-Buckingham_Palace_London_Morning_2020_01_%28cropped%29.jpg",
        "detail": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Buckingham_Palace%2C_London_-_April_2009.jpg/960px-Buckingham_Palace%2C_London_-_April_2009.jpg",
        "photoSpot": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Buckingham_Palace_London_Morning_2020_01_%28cropped%29.jpg/960px-Buckingham_Palace_London_Morning_2020_01_%28cropped%29.jpg",
        "map": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Buckingham_Palace_London_Morning_2020_01_%28cropped%29.jpg/960px-Buckingham_Palace_London_Morning_2020_01_%28cropped%29.jpg"
      },
      "seasonalPhotos": {
        "spring": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Buckingham_Palace_London_Morning_2020_01_%28cropped%29.jpg/960px-Buckingham_Palace_London_Morning_2020_01_%28cropped%29.jpg",
        "summer": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Buckingham_Palace%2C_London_-_April_2009.jpg/960px-Buckingham_Palace%2C_London_-_April_2009.jpg",
        "autumn": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Buckingham_Palace_London_Morning_2020_01_%28cropped%29.jpg/960px-Buckingham_Palace_London_Morning_2020_01_%28cropped%29.jpg",
        "christmas": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Buckingham_Palace_London_Morning_2020_01_%28cropped%29.jpg/960px-Buckingham_Palace_London_Morning_2020_01_%28cropped%29.jpg"
      }
    },
    {
      "name": "British Museum",
      "address": "Great Russell St · WC1B 3DG",
      "hours": "10:00–17:00 · Fri to 20:30",
      "tube": "Tottenham Court Rd · Holborn",
      "ticket": "Free · donations",
      "bestArrival": "10:00 sharp or Fri evening",
      "waitSummer": "20–30 min security",
      "waitWinter": "10 min",
      "photoSpot": "Great Court roof from the balcony — Norman Foster's masterpiece.",
      "lens": "16–24mm",
      "tip": "Rosetta Stone gets crowded by 11:00. See it first, then work backwards through Egypt and Greece.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=British+Museum+London",
      "bookUrl": "https://www.britishmuseum.org/",
      "bookText": "Free Entry",
      "avgVisit": "3 hours",
      "crowd": {
        "morning": 3,
        "afternoon": 5,
        "evening": 2
      },
      "nearby": [
        {
          "name": "Covent Garden",
          "walk": "12 min"
        },
        {
          "name": "Neal's Yard",
          "walk": "14 min"
        },
        {
          "name": "St Paul's (via tube)",
          "walk": "20 min"
        },
        {
          "name": "Oxford Street",
          "walk": "10 min"
        },
        {
          "name": "Charles Dickens Museum",
          "walk": "15 min"
        }
      ],
      "nearbyCafes": "Monmouth Coffee · Store Street Espresso · Great Court Restaurant",
      "nearbyRestaurants": "Hawksmoor Seven Dials · Flat Iron · Dishoom Covent Garden",
      "nearbyTube": "Tottenham Court Rd · Holborn · Russell Square",
      "nearbyToilets": "Great Court level · Montague Place entrance · Russell Square station",
      "nearbyAtm": "Tottenham Court Rd station · Sainsbury's Holborn",
      "didYouKnow": "The museum holds over 8 million objects — less than 1% is on display at any time.",
      "localSecret": "Friday late opening until 20:30 is the quietest time to see the Rosetta Stone without a crowd.",
      "instagram": {
        "sunset": "Great Court glass roof from upper balcony",
        "sunrise": "Exterior colonnade on Great Russell St",
        "drone": "No",
        "settings": "f/8 · ISO 800 · 16mm for Great Court symmetry"
      },
      "photos": {
        "hero": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/British_Museum_Reading_Room_Panorama_Feb_2006.jpg/960px-British_Museum_Reading_Room_Panorama_Feb_2006.jpg",
        "detail": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/British_Museum_Reading_Room_Panorama_Feb_2006.jpg/960px-British_Museum_Reading_Room_Panorama_Feb_2006.jpg",
        "photoSpot": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Natural_History_Museum_London_Jan_2006.jpg/960px-Natural_History_Museum_London_Jan_2006.jpg",
        "map": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Natural_History_Museum_London_Jan_2006.jpg/960px-Natural_History_Museum_London_Jan_2006.jpg"
      },
      "seasonalPhotos": {
        "spring": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/British_Museum_Reading_Room_Panorama_Feb_2006.jpg/960px-British_Museum_Reading_Room_Panorama_Feb_2006.jpg",
        "summer": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/British_Museum_Reading_Room_Panorama_Feb_2006.jpg/960px-British_Museum_Reading_Room_Panorama_Feb_2006.jpg",
        "autumn": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Natural_History_Museum_London_Jan_2006.jpg/960px-Natural_History_Museum_London_Jan_2006.jpg",
        "christmas": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Natural_History_Museum_London_Jan_2006.jpg/960px-Natural_History_Museum_London_Jan_2006.jpg"
      }
    },
    {
      "name": "Natural History Museum",
      "address": "Cromwell Rd · SW7 5BD",
      "hours": "10:00–17:50",
      "tube": "South Kensington · exit museum tunnel",
      "ticket": "Free · exhibitions ticketed",
      "bestArrival": "Weekdays 10:00",
      "waitSummer": "20–40 min",
      "waitWinter": "10 min",
      "photoSpot": "Hintze Hall with the blue whale from the first floor balcony.",
      "lens": "16–35mm",
      "tip": "Use the exhibition-road entrance — no queue, better for prams.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Natural+History+Museum+London",
      "bookUrl": "https://www.nhm.ac.uk/",
      "bookText": "Free Entry",
      "avgVisit": "2.5 hours",
      "crowd": {
        "morning": 3,
        "afternoon": 5,
        "evening": 2
      },
      "nearby": [
        {
          "name": "Victoria & Albert Museum",
          "walk": "3 min"
        },
        {
          "name": "Science Museum",
          "walk": "2 min"
        },
        {
          "name": "Hyde Park",
          "walk": "12 min"
        },
        {
          "name": "Harrods",
          "walk": "15 min"
        },
        {
          "name": "Royal Albert Hall",
          "walk": "10 min"
        }
      ],
      "nearbyCafes": "V&A Café · Benugo South Kensington · Fernandez & Wells",
      "nearbyRestaurants": "Cacciari's · Bumpkin South Kensington · The Good Earth",
      "nearbyTube": "South Kensington · Gloucester Road",
      "nearbyToilets": "Hintze Hall · Exhibition Road entrance · Cromwell Road",
      "nearbyAtm": "South Kensington station · Sainsbury's Cromwell Rd",
      "didYouKnow": "Hope the blue whale skeleton replaced Dippy the diplodocus in 2017 and weighs 4.5 tonnes.",
      "localSecret": "Enter via Exhibition Road — the Cromwell Road queue is almost entirely tourists who don't know the side door.",
      "instagram": {
        "sunset": "Exterior terracotta facade on Cromwell Rd",
        "sunrise": "Hintze Hall whale from balcony",
        "drone": "No",
        "settings": "f/5.6 · ISO 1600 · 16mm wide for whale"
      },
      "photos": {
        "hero": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Natural_History_Museum_HDR.jpg/960px-Natural_History_Museum_HDR.jpg",
        "detail": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Natural_History_Museum_London_Jan_2006.jpg/960px-Natural_History_Museum_London_Jan_2006.jpg",
        "photoSpot": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Natural_History_Museum_HDR.jpg/960px-Natural_History_Museum_HDR.jpg",
        "map": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Natural_History_Museum_HDR.jpg/960px-Natural_History_Museum_HDR.jpg"
      },
      "seasonalPhotos": {
        "spring": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Natural_History_Museum_HDR.jpg/960px-Natural_History_Museum_HDR.jpg",
        "summer": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Natural_History_Museum_London_Jan_2006.jpg/960px-Natural_History_Museum_London_Jan_2006.jpg",
        "autumn": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Natural_History_Museum_HDR.jpg/960px-Natural_History_Museum_HDR.jpg",
        "christmas": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Natural_History_Museum_HDR.jpg/960px-Natural_History_Museum_HDR.jpg"
      }
    },
    {
      "name": "St Paul's Cathedral",
      "address": "St Paul's Churchyard · EC4M 8AD",
      "hours": "Mon–Sat 08:30–16:30",
      "tube": "St Paul's · Central",
      "ticket": "£25 online",
      "bestArrival": "09:00 opening",
      "waitSummer": "10–20 min",
      "waitWinter": "5 min",
      "photoSpot": "From the Millennium Bridge — Wren's dome dead-centred.",
      "lens": "24–70mm",
      "tip": "Climb to the Golden Gallery (528 steps) — the view is worth every one.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=St+Pauls+Cathedral+London",
      "bookUrl": "https://www.stpauls.co.uk/",
      "bookText": "Book Tickets",
      "avgVisit": "2 hours",
      "crowd": {
        "morning": 2,
        "afternoon": 4,
        "evening": 2
      },
      "nearby": [
        {
          "name": "Millennium Bridge",
          "walk": "3 min"
        },
        {
          "name": "Tate Modern",
          "walk": "5 min"
        },
        {
          "name": "Sky Garden",
          "walk": "10 min"
        },
        {
          "name": "Borough Market",
          "walk": "12 min"
        },
        {
          "name": "Museum of London",
          "walk": "8 min"
        }
      ],
      "nearbyCafes": "Pret St Paul's · Costa Paternoster Row · WatchHouse St Paul's",
      "nearbyRestaurants": "Bread Street Kitchen · The Restaurant at St Paul's · Caravan City",
      "nearbyTube": "St Paul's · Mansion House · Blackfriars",
      "nearbyToilets": "Inside cathedral · One New Change shopping centre · St Paul's station",
      "nearbyAtm": "St Paul's station · One New Change · Cheapside banks",
      "didYouKnow": "St Paul's dome was the tallest building in London from 1710 until 1963.",
      "localSecret": "One New Change rooftop (free) gives a stunning eye-level view of the dome — locals use it for proposals.",
      "instagram": {
        "sunset": "Millennium Bridge centre",
        "sunrise": "Bankside south of bridge",
        "drone": "No",
        "settings": "f/11 · ISO 100 · 24mm · dome centred on bridge axis"
      },
      "photos": {
        "hero": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/St_Pauls_aerial_%28cropped%29.jpg/960px-St_Pauls_aerial_%28cropped%29.jpg",
        "detail": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/St_Paul%27s_Cathedral_Nave%2C_London%2C_UK_-_Diliff.jpg/960px-St_Paul%27s_Cathedral_Nave%2C_London%2C_UK_-_Diliff.jpg",
        "photoSpot": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/St_Paul%27s_Cathedral_Nave%2C_London%2C_UK_-_Diliff.jpg/960px-St_Paul%27s_Cathedral_Nave%2C_London%2C_UK_-_Diliff.jpg",
        "map": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/St_Paul%27s_Cathedral_Nave%2C_London%2C_UK_-_Diliff.jpg/960px-St_Paul%27s_Cathedral_Nave%2C_London%2C_UK_-_Diliff.jpg"
      },
      "seasonalPhotos": {
        "spring": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/St_Pauls_aerial_%28cropped%29.jpg/960px-St_Pauls_aerial_%28cropped%29.jpg",
        "summer": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/St_Paul%27s_Cathedral_Nave%2C_London%2C_UK_-_Diliff.jpg/960px-St_Paul%27s_Cathedral_Nave%2C_London%2C_UK_-_Diliff.jpg",
        "autumn": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/St_Paul%27s_Cathedral_Nave%2C_London%2C_UK_-_Diliff.jpg/960px-St_Paul%27s_Cathedral_Nave%2C_London%2C_UK_-_Diliff.jpg",
        "christmas": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/St_Paul%27s_Cathedral_Nave%2C_London%2C_UK_-_Diliff.jpg/960px-St_Paul%27s_Cathedral_Nave%2C_London%2C_UK_-_Diliff.jpg"
      }
    },
    {
      "name": "The Shard",
      "address": "32 London Bridge St · SE1 9SG",
      "hours": "10:00–22:00",
      "tube": "London Bridge · Jubilee/Northern",
      "ticket": "£32 online",
      "bestArrival": "45 min before sunset",
      "waitSummer": "20–40 min",
      "waitWinter": "10 min",
      "photoSpot": "Level 72 — the open-air deck. Sunset gold on Tower Bridge below.",
      "lens": "16–35mm + 70–200mm",
      "tip": "Combined day+night ticket for £10 more — best value in London.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=The+Shard+London",
      "bookUrl": "https://www.theviewfromtheshard.com/",
      "bookText": "Book Tickets",
      "avgVisit": "1.5 hours",
      "crowd": {
        "morning": 2,
        "afternoon": 4,
        "evening": 5
      },
      "nearby": [
        {
          "name": "Borough Market",
          "walk": "5 min"
        },
        {
          "name": "Tower Bridge",
          "walk": "12 min"
        },
        {
          "name": "Sky Garden",
          "walk": "10 min"
        },
        {
          "name": "HMS Belfast",
          "walk": "10 min"
        },
        {
          "name": "Tate Modern",
          "walk": "15 min"
        }
      ],
      "nearbyCafes": "Monmouth Borough · WatchHouse Shard · FCB London Bridge",
      "nearbyRestaurants": "Aqua Shard · Oblix · Hutong",
      "nearbyTube": "London Bridge · Bermondsey",
      "nearbyToilets": "Level 72 viewing · London Bridge station · Borough Market",
      "nearbyAtm": "London Bridge station · The Shard lobby",
      "didYouKnow": "At 309.6 metres, The Shard is the tallest building in Western Europe.",
      "localSecret": "Sky Garden is free with advance booking and offers a comparable view — book 3 weeks ahead if The Shard feels pricey.",
      "instagram": {
        "sunset": "Level 72 open-air deck west",
        "sunrise": "Not available — opens 10:00",
        "drone": "No — strict restriction",
        "settings": "f/8 · ISO 400 · 16mm for city panorama"
      },
      "photos": {
        "hero": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/The_Shard_London_United_Kingdom_Ank_Kumar_Infosys_Limited_03.jpg/960px-The_Shard_London_United_Kingdom_Ank_Kumar_Infosys_Limited_03.jpg",
        "detail": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Entrance_to_The_Shard%2C_London_SE1_-_geograph.org.uk_-_3513958.jpg/960px-Entrance_to_The_Shard%2C_London_SE1_-_geograph.org.uk_-_3513958.jpg",
        "photoSpot": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Entrance_to_The_Shard%2C_London_SE1_-_geograph.org.uk_-_3513958.jpg/960px-Entrance_to_The_Shard%2C_London_SE1_-_geograph.org.uk_-_3513958.jpg",
        "map": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Entrance_to_The_Shard%2C_London_SE1_-_geograph.org.uk_-_3513958.jpg/960px-Entrance_to_The_Shard%2C_London_SE1_-_geograph.org.uk_-_3513958.jpg"
      },
      "seasonalPhotos": {
        "spring": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/The_Shard_London_United_Kingdom_Ank_Kumar_Infosys_Limited_03.jpg/960px-The_Shard_London_United_Kingdom_Ank_Kumar_Infosys_Limited_03.jpg",
        "summer": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Entrance_to_The_Shard%2C_London_SE1_-_geograph.org.uk_-_3513958.jpg/960px-Entrance_to_The_Shard%2C_London_SE1_-_geograph.org.uk_-_3513958.jpg",
        "autumn": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Entrance_to_The_Shard%2C_London_SE1_-_geograph.org.uk_-_3513958.jpg/960px-Entrance_to_The_Shard%2C_London_SE1_-_geograph.org.uk_-_3513958.jpg",
        "christmas": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Entrance_to_The_Shard%2C_London_SE1_-_geograph.org.uk_-_3513958.jpg/960px-Entrance_to_The_Shard%2C_London_SE1_-_geograph.org.uk_-_3513958.jpg"
      }
    },
    {
      "name": "Covent Garden",
      "address": "Piazza · WC2E 8RF",
      "hours": "10:00–20:00 shops",
      "tube": "Covent Garden · Piccadilly",
      "ticket": "Free entry",
      "bestArrival": "Evening 18:00+",
      "waitSummer": "—",
      "waitWinter": "—",
      "photoSpot": "Under the glass roof looking down at street performers.",
      "lens": "35mm",
      "tip": "Neal's Yard is a 3-minute walk — most tourists never find it.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Covent+Garden+London",
      "bookUrl": "",
      "bookText": "Open in Maps",
      "avgVisit": "2 hours",
      "crowd": {
        "morning": 2,
        "afternoon": 4,
        "evening": 5
      },
      "nearby": [
        {
          "name": "Neal's Yard",
          "walk": "3 min"
        },
        {
          "name": "British Museum",
          "walk": "12 min"
        },
        {
          "name": "Leicester Square",
          "walk": "8 min"
        },
        {
          "name": "Royal Opera House",
          "walk": "2 min"
        },
        {
          "name": "Seven Dials",
          "walk": "5 min"
        }
      ],
      "nearbyCafes": "Monmouth Coffee · Flat White · Balthazar Boulangerie",
      "nearbyRestaurants": "Dishoom · The Ivy Market Grill · Sushisamba",
      "nearbyTube": "Covent Garden · Leicester Square · Holborn",
      "nearbyToilets": "Market Building · Royal Opera House · Leicester Square",
      "nearbyAtm": "Covent Garden station · Long Acre banks",
      "didYouKnow": "Covent Garden was London's main fruit and vegetable market until 1974 when it moved to Nine Elms.",
      "localSecret": "Walk through Neal's Yard to Monmouth Coffee — skip the piazza chains entirely.",
      "instagram": {
        "sunset": "Neal's Yard pastel walls",
        "sunrise": "Empty piazza before 09:00",
        "drone": "No",
        "settings": "f/4 · ISO 800 · 35mm for street performers"
      },
      "photos": {
        "hero": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Covent_Garden_Interior_May_2006_crop.jpg/960px-Covent_Garden_Interior_May_2006_crop.jpg",
        "detail": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Neal%27s_Yard_20130408_034.jpg/960px-Neal%27s_Yard_20130408_034.jpg",
        "photoSpot": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/NealsYardCoventGarden.jpg/960px-NealsYardCoventGarden.jpg",
        "map": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/NealsYardCoventGarden.jpg/960px-NealsYardCoventGarden.jpg"
      },
      "seasonalPhotos": {
        "spring": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Covent_Garden_Interior_May_2006_crop.jpg/960px-Covent_Garden_Interior_May_2006_crop.jpg",
        "summer": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Neal%27s_Yard_20130408_034.jpg/960px-Neal%27s_Yard_20130408_034.jpg",
        "autumn": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/NealsYardCoventGarden.jpg/960px-NealsYardCoventGarden.jpg",
        "christmas": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/NealsYardCoventGarden.jpg/960px-NealsYardCoventGarden.jpg"
      }
    },
    {
      "name": "Camden Market",
      "address": "Camden Lock · NW1 8AF",
      "hours": "10:00–18:00 · food to late",
      "tube": "Camden Town · Northern",
      "ticket": "Free entry",
      "bestArrival": "Weekends 11:00",
      "waitSummer": "—",
      "waitWinter": "—",
      "photoSpot": "Regent's Canal towpath toward the lock at golden hour.",
      "lens": "35mm",
      "tip": "Walk to Primrose Hill via the canal — 20 min, the best skyline view in London.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Camden+Market+London",
      "bookUrl": "",
      "bookText": "Open in Maps",
      "avgVisit": "2.5 hours",
      "crowd": {
        "morning": 2,
        "afternoon": 5,
        "evening": 4
      },
      "nearby": [
        {
          "name": "Primrose Hill",
          "walk": "20 min"
        },
        {
          "name": "Regent's Park",
          "walk": "15 min"
        },
        {
          "name": "ZSL London Zoo",
          "walk": "12 min"
        },
        {
          "name": "King's Cross",
          "walk": "20 min"
        },
        {
          "name": "Little Venice",
          "walk": "40 min canal walk"
        }
      ],
      "nearbyCafes": "Monmouth Coffee Camden · The Coffee Jar · Papersmiths café",
      "nearbyRestaurants": "Hawker House · KERB Camden · Made in Brazil",
      "nearbyTube": "Camden Town · Chalk Farm · Mornington Crescent",
      "nearbyToilets": "Stables Market · Camden Lock · Camden Town station",
      "nearbyAtm": "Camden High Street · Sainsbury's Camden",
      "didYouKnow": "Camden Lock was built in 1819 and the market grew around the canal trade in the 1970s.",
      "localSecret": "Skip the main street stalls — the Stables Market courtyard has better vintage at lower prices.",
      "instagram": {
        "sunset": "Regent's Canal lock",
        "sunrise": "Empty Stables Market",
        "drone": "No",
        "settings": "f/5.6 · ISO 400 · 35mm canal reflections"
      },
      "photos": {
        "hero": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Camden_markets_entrance.JPG/960px-Camden_markets_entrance.JPG",
        "detail": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Primrose_Hill%2C_London_-16Sept2010.jpg/960px-Primrose_Hill%2C_London_-16Sept2010.jpg",
        "photoSpot": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Little_Venice%2C_London_02.jpg/960px-Little_Venice%2C_London_02.jpg",
        "map": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Little_Venice%2C_London_02.jpg/960px-Little_Venice%2C_London_02.jpg"
      },
      "seasonalPhotos": {
        "spring": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Camden_markets_entrance.JPG/960px-Camden_markets_entrance.JPG",
        "summer": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Primrose_Hill%2C_London_-16Sept2010.jpg/960px-Primrose_Hill%2C_London_-16Sept2010.jpg",
        "autumn": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Little_Venice%2C_London_02.jpg/960px-Little_Venice%2C_London_02.jpg",
        "christmas": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Little_Venice%2C_London_02.jpg/960px-Little_Venice%2C_London_02.jpg"
      }
    }
  ],
  "hotels": [
    {
      "name": "The Savoy",
      "category": "Luxury",
      "address": "Strand · WC2R 0EU",
      "price": "from £750/night",
      "rating": "9.1",
      "googleRating": "4.7",
      "room": "Personality Suite · Thames view",
      "cancellation": "Free 48h · flexible rate",
      "tube": "Charing Cross 5 min walk",
      "airport": "LHR 45 min · LGW 55 min",
      "nearbyAttractions": "Covent Garden 3 min · Somerset House 5 min",
      "walkingScore": "98 / 100 — walk almost everywhere",
      "breakfast": "Included in premium rates",
      "idealFor": [
        "Family",
        "Business",
        "Couple",
        "Solo"
      ],
      "tip": "Book direct through the hotel website — many offer a free room upgrade at check-in or a complimentary breakfast when you skip the OTA. Ask for a room facing away from the street for the quietest sleep.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=The+Savoy+London",
      "bookUrl": "https://www.thesavoylondon.com/",
      "photos": {
        "exterior": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/H%C3%B4tel_Savoy_The_Strand_Londres_-_edited.jpg/960px-H%C3%B4tel_Savoy_The_Strand_Londres_-_edited.jpg",
        "lobby": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/H%C3%B4tel_Savoy_The_Strand_Londres_-_edited.jpg/960px-H%C3%B4tel_Savoy_The_Strand_Londres_-_edited.jpg",
        "room": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/H%C3%B4tel_Savoy_The_Strand_Londres_-_edited.jpg/960px-H%C3%B4tel_Savoy_The_Strand_Londres_-_edited.jpg",
        "luxuryRoom": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/H%C3%B4tel_Savoy_The_Strand_Londres_-_edited.jpg/960px-H%C3%B4tel_Savoy_The_Strand_Londres_-_edited.jpg",
        "restaurant": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/H%C3%B4tel_Savoy_The_Strand_Londres_-_edited.jpg/960px-H%C3%B4tel_Savoy_The_Strand_Londres_-_edited.jpg",
        "pool": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/H%C3%B4tel_Savoy_The_Strand_Londres_-_edited.jpg/960px-H%C3%B4tel_Savoy_The_Strand_Londres_-_edited.jpg",
        "rooftop": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/H%C3%B4tel_Savoy_The_Strand_Londres_-_edited.jpg/960px-H%C3%B4tel_Savoy_The_Strand_Londres_-_edited.jpg",
        "breakfast": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/H%C3%B4tel_Savoy_The_Strand_Londres_-_edited.jpg/960px-H%C3%B4tel_Savoy_The_Strand_Londres_-_edited.jpg",
        "spa": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/H%C3%B4tel_Savoy_The_Strand_Londres_-_edited.jpg/960px-H%C3%B4tel_Savoy_The_Strand_Londres_-_edited.jpg",
        "view": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/H%C3%B4tel_Savoy_The_Strand_Londres_-_edited.jpg/960px-H%C3%B4tel_Savoy_The_Strand_Londres_-_edited.jpg"
      }
    },
    {
      "name": "Claridge's",
      "category": "Luxury",
      "address": "Brook St · Mayfair · W1K 4HR",
      "price": "from £820/night",
      "rating": "9.2",
      "googleRating": "4.8",
      "room": "Superior King · Art-Deco heritage",
      "cancellation": "Free 72h",
      "tube": "Bond Street 3 min",
      "airport": "LHR 40 min · LGW 60 min",
      "nearbyAttractions": "Bond St 2 min · Hyde Park 10 min",
      "walkingScore": "97 / 100 — walk almost everywhere",
      "breakfast": "Extra £48pp",
      "idealFor": [
        "Family",
        "Business",
        "Couple",
        "Solo"
      ],
      "tip": "Book direct through the hotel website — many offer a free room upgrade at check-in or a complimentary breakfast when you skip the OTA. Ask for a room facing away from the street for the quietest sleep.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Claridges+London",
      "bookUrl": "https://www.claridges.co.uk/",
      "photos": {
        "exterior": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Rosewood_London_Courtyard.jpg/960px-Rosewood_London_Courtyard.jpg",
        "lobby": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Rosewood_London_Courtyard.jpg/960px-Rosewood_London_Courtyard.jpg",
        "room": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Rosewood_London_Courtyard.jpg/960px-Rosewood_London_Courtyard.jpg",
        "luxuryRoom": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Rosewood_London_Courtyard.jpg/960px-Rosewood_London_Courtyard.jpg",
        "restaurant": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Rosewood_London_Courtyard.jpg/960px-Rosewood_London_Courtyard.jpg",
        "pool": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Rosewood_London_Courtyard.jpg/960px-Rosewood_London_Courtyard.jpg",
        "rooftop": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Rosewood_London_Courtyard.jpg/960px-Rosewood_London_Courtyard.jpg",
        "breakfast": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Rosewood_London_Courtyard.jpg/960px-Rosewood_London_Courtyard.jpg",
        "spa": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Rosewood_London_Courtyard.jpg/960px-Rosewood_London_Courtyard.jpg",
        "view": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Rosewood_London_Courtyard.jpg/960px-Rosewood_London_Courtyard.jpg"
      }
    },
    {
      "name": "The Ritz London",
      "category": "Luxury",
      "address": "150 Piccadilly · W1J 9BR",
      "price": "from £780/night",
      "rating": "9.0",
      "googleRating": "4.7",
      "room": "Deluxe Queen · Louis XVI style",
      "cancellation": "Free 7 days",
      "tube": "Green Park 2 min",
      "airport": "LHR 45 min · LGW 55 min",
      "nearbyAttractions": "Green Park 1 min · Royal Academy 5 min",
      "walkingScore": "97 / 100 — walk almost everywhere",
      "breakfast": "Included",
      "idealFor": [
        "Family",
        "Business",
        "Couple",
        "Solo"
      ],
      "tip": "Book direct through the hotel website — many offer a free room upgrade at check-in or a complimentary breakfast when you skip the OTA. Ask for a room facing away from the street for the quietest sleep.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=The+Ritz+London",
      "bookUrl": "https://www.theritzlondon.com/",
      "photos": {
        "exterior": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/H%C3%B4tel_Savoy_The_Strand_Londres_-_edited.jpg/960px-H%C3%B4tel_Savoy_The_Strand_Londres_-_edited.jpg",
        "lobby": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/H%C3%B4tel_Savoy_The_Strand_Londres_-_edited.jpg/960px-H%C3%B4tel_Savoy_The_Strand_Londres_-_edited.jpg",
        "room": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/H%C3%B4tel_Savoy_The_Strand_Londres_-_edited.jpg/960px-H%C3%B4tel_Savoy_The_Strand_Londres_-_edited.jpg",
        "luxuryRoom": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/H%C3%B4tel_Savoy_The_Strand_Londres_-_edited.jpg/960px-H%C3%B4tel_Savoy_The_Strand_Londres_-_edited.jpg",
        "restaurant": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/H%C3%B4tel_Savoy_The_Strand_Londres_-_edited.jpg/960px-H%C3%B4tel_Savoy_The_Strand_Londres_-_edited.jpg",
        "pool": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/H%C3%B4tel_Savoy_The_Strand_Londres_-_edited.jpg/960px-H%C3%B4tel_Savoy_The_Strand_Londres_-_edited.jpg",
        "rooftop": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/H%C3%B4tel_Savoy_The_Strand_Londres_-_edited.jpg/960px-H%C3%B4tel_Savoy_The_Strand_Londres_-_edited.jpg",
        "breakfast": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/H%C3%B4tel_Savoy_The_Strand_Londres_-_edited.jpg/960px-H%C3%B4tel_Savoy_The_Strand_Londres_-_edited.jpg",
        "spa": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/H%C3%B4tel_Savoy_The_Strand_Londres_-_edited.jpg/960px-H%C3%B4tel_Savoy_The_Strand_Londres_-_edited.jpg",
        "view": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/H%C3%B4tel_Savoy_The_Strand_Londres_-_edited.jpg/960px-H%C3%B4tel_Savoy_The_Strand_Londres_-_edited.jpg"
      }
    },
    {
      "name": "Rosewood London",
      "category": "Luxury",
      "address": "252 High Holborn · WC1V 7EN",
      "price": "from £620/night",
      "rating": "9.3",
      "googleRating": "4.7",
      "room": "Manor House Wing",
      "cancellation": "Free 48h",
      "tube": "Holborn 3 min",
      "airport": "LHR 50 min · LGW 60 min",
      "nearbyAttractions": "British Museum 5 min · Covent Garden 8 min",
      "walkingScore": "95 / 100 — walk almost everywhere",
      "breakfast": "Extra £42pp",
      "idealFor": [
        "Family",
        "Business",
        "Couple",
        "Solo"
      ],
      "tip": "Book direct through the hotel website — many offer a free room upgrade at check-in or a complimentary breakfast when you skip the OTA. Ask for a room facing away from the street for the quietest sleep.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Rosewood+London",
      "bookUrl": "https://www.rosewoodhotels.com/en/london",
      "photos": {
        "exterior": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Rosewood_London_Courtyard.jpg/960px-Rosewood_London_Courtyard.jpg",
        "lobby": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Rosewood_London_Courtyard.jpg/960px-Rosewood_London_Courtyard.jpg",
        "room": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Rosewood_London_Courtyard.jpg/960px-Rosewood_London_Courtyard.jpg",
        "luxuryRoom": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Rosewood_London_Courtyard.jpg/960px-Rosewood_London_Courtyard.jpg",
        "restaurant": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Rosewood_London_Courtyard.jpg/960px-Rosewood_London_Courtyard.jpg",
        "pool": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Rosewood_London_Courtyard.jpg/960px-Rosewood_London_Courtyard.jpg",
        "rooftop": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Rosewood_London_Courtyard.jpg/960px-Rosewood_London_Courtyard.jpg",
        "breakfast": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Rosewood_London_Courtyard.jpg/960px-Rosewood_London_Courtyard.jpg",
        "spa": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Rosewood_London_Courtyard.jpg/960px-Rosewood_London_Courtyard.jpg",
        "view": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Rosewood_London_Courtyard.jpg/960px-Rosewood_London_Courtyard.jpg"
      }
    },
    {
      "name": "The Hoxton Holborn",
      "category": "Mid-Range",
      "address": "199–206 High Holborn · WC1V 7BD",
      "price": "from £220/night",
      "rating": "8.8",
      "googleRating": "4.5",
      "room": "Roomy · exposed brick",
      "cancellation": "Free 24h",
      "tube": "Holborn 2 min",
      "airport": "LHR 50 min · LGW 55 min",
      "nearbyAttractions": "British Museum 8 min · Covent Garden 10 min",
      "walkingScore": "96 / 100 — walk almost everywhere",
      "breakfast": "Continental bag included",
      "idealFor": [
        "Family",
        "Business",
        "Couple",
        "Solo"
      ],
      "tip": "Book direct through the hotel website — many offer a free room upgrade at check-in or a complimentary breakfast when you skip the OTA. Ask for a room facing away from the street for the quietest sleep.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=The+Hoxton+Holborn+London",
      "bookUrl": "https://thehoxton.com/london/holborn/",
      "photos": {
        "exterior": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Holborn%2C_London_-_geograph.org.uk_-_1792553.jpg/960px-Holborn%2C_London_-_geograph.org.uk_-_1792553.jpg",
        "lobby": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/H%C3%B4tel_Savoy_The_Strand_Londres_-_edited.jpg/960px-H%C3%B4tel_Savoy_The_Strand_Londres_-_edited.jpg",
        "room": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Covent_Garden_Interior_May_2006_crop.jpg/960px-Covent_Garden_Interior_May_2006_crop.jpg",
        "luxuryRoom": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Covent_Garden_Interior_May_2006_crop.jpg/960px-Covent_Garden_Interior_May_2006_crop.jpg",
        "restaurant": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/H%C3%B4tel_Savoy_The_Strand_Londres_-_edited.jpg/960px-H%C3%B4tel_Savoy_The_Strand_Londres_-_edited.jpg",
        "pool": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Covent_Garden_Interior_May_2006_crop.jpg/960px-Covent_Garden_Interior_May_2006_crop.jpg",
        "rooftop": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Covent_Garden_Interior_May_2006_crop.jpg/960px-Covent_Garden_Interior_May_2006_crop.jpg",
        "breakfast": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/H%C3%B4tel_Savoy_The_Strand_Londres_-_edited.jpg/960px-H%C3%B4tel_Savoy_The_Strand_Londres_-_edited.jpg",
        "spa": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Covent_Garden_Interior_May_2006_crop.jpg/960px-Covent_Garden_Interior_May_2006_crop.jpg",
        "view": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Covent_Garden_Interior_May_2006_crop.jpg/960px-Covent_Garden_Interior_May_2006_crop.jpg"
      }
    },
    {
      "name": "The Zetter Marylebone",
      "category": "Mid-Range",
      "address": "28-30 Seymour St · W1H 7JB",
      "price": "from £250/night",
      "rating": "9.0",
      "googleRating": "4.6",
      "room": "Petite Double · curated art",
      "cancellation": "Free 48h",
      "tube": "Marble Arch 3 min",
      "airport": "LHR 45 min · LGW 60 min",
      "nearbyAttractions": "Oxford Street 5 min · Hyde Park 10 min",
      "walkingScore": "94 / 100 — walk almost everywhere",
      "breakfast": "Extra £15pp",
      "idealFor": [
        "Family",
        "Business",
        "Couple",
        "Solo"
      ],
      "tip": "Book direct through the hotel website — many offer a free room upgrade at check-in or a complimentary breakfast when you skip the OTA. Ask for a room facing away from the street for the quietest sleep.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=The+Zetter+Marylebone+London",
      "bookUrl": "https://www.thezetter.com/marylebone/",
      "photos": {
        "exterior": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/The_Zetter_Townhouse_Marylebone.jpg/960px-The_Zetter_Townhouse_Marylebone.jpg",
        "lobby": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/The_Zetter_Townhouse_Marylebone.jpg/960px-The_Zetter_Townhouse_Marylebone.jpg",
        "room": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/The_Zetter_Townhouse_Marylebone.jpg/960px-The_Zetter_Townhouse_Marylebone.jpg",
        "luxuryRoom": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/The_Zetter_Townhouse_Marylebone.jpg/960px-The_Zetter_Townhouse_Marylebone.jpg",
        "restaurant": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/The_Zetter_Townhouse_Marylebone.jpg/960px-The_Zetter_Townhouse_Marylebone.jpg",
        "pool": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/The_Zetter_Townhouse_Marylebone.jpg/960px-The_Zetter_Townhouse_Marylebone.jpg",
        "rooftop": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/The_Zetter_Townhouse_Marylebone.jpg/960px-The_Zetter_Townhouse_Marylebone.jpg",
        "breakfast": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/The_Zetter_Townhouse_Marylebone.jpg/960px-The_Zetter_Townhouse_Marylebone.jpg",
        "spa": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/The_Zetter_Townhouse_Marylebone.jpg/960px-The_Zetter_Townhouse_Marylebone.jpg",
        "view": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/The_Zetter_Townhouse_Marylebone.jpg/960px-The_Zetter_Townhouse_Marylebone.jpg"
      }
    },
    {
      "name": "citizenM Tower of London",
      "category": "Mid-Range",
      "address": "40 Trinity Sq · EC3N 4DJ",
      "price": "from £180/night",
      "rating": "8.9",
      "googleRating": "4.6",
      "room": "Compact XL bed · rooftop bar",
      "cancellation": "24h on flex rate",
      "tube": "Tower Hill 1 min",
      "airport": "LHR 55 min · LGW 45 min",
      "nearbyAttractions": "Tower of London 2 min · Sky Garden 10 min",
      "walkingScore": "95 / 100 — walk almost everywhere",
      "breakfast": "Extra £18pp",
      "idealFor": [
        "Family",
        "Business",
        "Couple",
        "Solo"
      ],
      "tip": "Book direct through the hotel website — many offer a free room upgrade at check-in or a complimentary breakfast when you skip the OTA. Ask for a room facing away from the street for the quietest sleep.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=citizenM+Tower+of+London",
      "bookUrl": "https://www.citizenm.com/hotels/europe/london/tower-of-london-hotel",
      "photos": {
        "exterior": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Tower_of_London_from_the_Shard_%288515883950%29.jpg/960px-Tower_of_London_from_the_Shard_%288515883950%29.jpg",
        "lobby": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Tower_of_London_from_the_Shard_%288515883950%29.jpg/960px-Tower_of_London_from_the_Shard_%288515883950%29.jpg",
        "room": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Tower_Bridge_at_Dawn.jpg/960px-Tower_Bridge_at_Dawn.jpg",
        "luxuryRoom": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Tower_Bridge_at_Dawn.jpg/960px-Tower_Bridge_at_Dawn.jpg",
        "restaurant": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Tower_of_London_from_the_Shard_%288515883950%29.jpg/960px-Tower_of_London_from_the_Shard_%288515883950%29.jpg",
        "pool": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Tower_Bridge_at_Dawn.jpg/960px-Tower_Bridge_at_Dawn.jpg",
        "rooftop": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Tower_Bridge_at_Dawn.jpg/960px-Tower_Bridge_at_Dawn.jpg",
        "breakfast": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Tower_of_London_from_the_Shard_%288515883950%29.jpg/960px-Tower_of_London_from_the_Shard_%288515883950%29.jpg",
        "spa": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Tower_Bridge_at_Dawn.jpg/960px-Tower_Bridge_at_Dawn.jpg",
        "view": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Tower_Bridge_at_Dawn.jpg/960px-Tower_Bridge_at_Dawn.jpg"
      }
    },
    {
      "name": "Premier Inn County Hall",
      "category": "Value",
      "address": "Belvedere Rd · SE1 7PB",
      "price": "from £145/night",
      "rating": "8.6",
      "googleRating": "4.4",
      "room": "Standard double · reliable",
      "cancellation": "Free until 13:00 on day",
      "tube": "Waterloo 5 min",
      "airport": "LHR 50 min · LGW 40 min",
      "nearbyAttractions": "London Eye 2 min · Big Ben 5 min",
      "walkingScore": "94 / 100 — walk almost everywhere",
      "breakfast": "Extra £11pp",
      "idealFor": [
        "Family",
        "Business",
        "Couple",
        "Solo"
      ],
      "tip": "Book direct through the hotel website — many offer a free room upgrade at check-in or a complimentary breakfast when you skip the OTA. Ask for a room facing away from the street for the quietest sleep.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Premier+Inn+County+Hall+London",
      "bookUrl": "https://www.premierinn.com/",
      "photos": {
        "exterior": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/County_Hall%2C_London_%28West_Face_-_01%29.jpg/960px-County_Hall%2C_London_%28West_Face_-_01%29.jpg",
        "lobby": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/London_eye_and_county_hall_pano_edited_2008-02-19.jpg/960px-London_eye_and_county_hall_pano_edited_2008-02-19.jpg",
        "room": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/London-Eye-2009.JPG/960px-London-Eye-2009.JPG",
        "luxuryRoom": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/London-Eye-2009.JPG/960px-London-Eye-2009.JPG",
        "restaurant": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/London_eye_and_county_hall_pano_edited_2008-02-19.jpg/960px-London_eye_and_county_hall_pano_edited_2008-02-19.jpg",
        "pool": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/London-Eye-2009.JPG/960px-London-Eye-2009.JPG",
        "rooftop": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/London-Eye-2009.JPG/960px-London-Eye-2009.JPG",
        "breakfast": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/London_eye_and_county_hall_pano_edited_2008-02-19.jpg/960px-London_eye_and_county_hall_pano_edited_2008-02-19.jpg",
        "spa": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/London-Eye-2009.JPG/960px-London-Eye-2009.JPG",
        "view": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/London-Eye-2009.JPG/960px-London-Eye-2009.JPG"
      }
    },
    {
      "name": "The Z Hotel Piccadilly",
      "category": "Value",
      "address": "2 Orange Yd · W1D 4PA",
      "price": "from £120/night",
      "rating": "8.4",
      "googleRating": "4.3",
      "room": "Compact double · no window in cheapest",
      "cancellation": "Free 24h on flex rate",
      "tube": "Leicester Square 2 min",
      "airport": "LHR 50 min · LGW 55 min",
      "nearbyAttractions": "Chinatown 1 min · Soho 3 min",
      "walkingScore": "98 / 100 — walk almost everywhere",
      "breakfast": "Extra £9.50pp",
      "idealFor": [
        "Family",
        "Business",
        "Couple",
        "Solo"
      ],
      "tip": "Book direct through the hotel website — many offer a free room upgrade at check-in or a complimentary breakfast when you skip the OTA. Ask for a room facing away from the street for the quietest sleep.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=The+Z+Hotel+Piccadilly+London",
      "bookUrl": "https://www.thezetter.com/piccadilly/",
      "photos": {
        "exterior": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/1%E2%80%933_Arlington_Street_and_157%E2%80%93160_Piccadilly.jpg/960px-1%E2%80%933_Arlington_Street_and_157%E2%80%93160_Piccadilly.jpg",
        "lobby": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/H%C3%B4tel_Savoy_The_Strand_Londres_-_edited.jpg/960px-H%C3%B4tel_Savoy_The_Strand_Londres_-_edited.jpg",
        "room": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Regent_Street_20160622.jpg/960px-Regent_Street_20160622.jpg",
        "luxuryRoom": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Regent_Street_20160622.jpg/960px-Regent_Street_20160622.jpg",
        "restaurant": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/H%C3%B4tel_Savoy_The_Strand_Londres_-_edited.jpg/960px-H%C3%B4tel_Savoy_The_Strand_Londres_-_edited.jpg",
        "pool": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Regent_Street_20160622.jpg/960px-Regent_Street_20160622.jpg",
        "rooftop": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Regent_Street_20160622.jpg/960px-Regent_Street_20160622.jpg",
        "breakfast": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/H%C3%B4tel_Savoy_The_Strand_Londres_-_edited.jpg/960px-H%C3%B4tel_Savoy_The_Strand_Londres_-_edited.jpg",
        "spa": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Regent_Street_20160622.jpg/960px-Regent_Street_20160622.jpg",
        "view": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Regent_Street_20160622.jpg/960px-Regent_Street_20160622.jpg"
      }
    }
  ],
  "dining": [
    {
      "name": "Sketch (The Lecture Room)",
      "category": "Fine Dining · 3 Michelin",
      "address": "9 Conduit St · W1S 2XG",
      "price": "£220 tasting",
      "famous": "Lecture Room tasting menu · Pierre Gagnaire",
      "halal": false,
      "vegetarian": true,
      "reservation": "Essential 4+ weeks",
      "wait": "With reservation: 0",
      "michelin": "★★★",
      "kidsFriendly": "Adults only",
      "dressCode": "Smart",
      "tip": "Call ahead about dietary needs. GCC travellers: most kitchens will confirm halal sourcing on request even if not marketed as such. Tipping is 10–12.5%.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Sketch+London",
      "bookUrl": "https://sketch.london/",
      "dishes": [
        {
          "name": "Lecture Room Tasting Menu",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Fortnum_and_Mason.jpg/960px-Fortnum_and_Mason.jpg",
          "desc": "Multi-course Pierre Gagnaire signature experience."
        },
        {
          "name": "Caviar & Crème Fraîche",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Fortnum_and_Mason.jpg/960px-Fortnum_and_Mason.jpg",
          "desc": "Opening course — delicate and precise."
        },
        {
          "name": "Seasonal Fish",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Fortnum_and_Mason.jpg/960px-Fortnum_and_Mason.jpg",
          "desc": "Daily catch with French technique."
        },
        {
          "name": "Cheese Selection",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Fortnum_and_Mason.jpg/960px-Fortnum_and_Mason.jpg",
          "desc": "Artisan British and French cheeses."
        },
        {
          "name": "Petit Fours",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Fortnum_and_Mason.jpg/960px-Fortnum_and_Mason.jpg",
          "desc": "Handmade sweets to finish."
        }
      ],
      "photos": {
        "signature": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Fortnum_and_Mason.jpg/960px-Fortnum_and_Mason.jpg",
        "interior": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Fortnum_and_Mason.jpg/960px-Fortnum_and_Mason.jpg",
        "exterior": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Fortnum_and_Mason.jpg/960px-Fortnum_and_Mason.jpg",
        "dessert": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Fortnum_and_Mason.jpg/960px-Fortnum_and_Mason.jpg",
        "coffee": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Fortnum_and_Mason.jpg/960px-Fortnum_and_Mason.jpg"
      }
    },
    {
      "name": "Core by Clare Smyth",
      "category": "Fine Dining · 3 Michelin",
      "address": "92 Kensington Park Rd · W11 2PN",
      "price": "£195 tasting",
      "famous": "Potato and roe · signature",
      "halal": false,
      "vegetarian": true,
      "reservation": "Essential 6+ weeks",
      "wait": "0 with booking",
      "michelin": "★★★",
      "kidsFriendly": "Adults only",
      "dressCode": "Smart",
      "tip": "Call ahead about dietary needs. GCC travellers: most kitchens will confirm halal sourcing on request even if not marketed as such. Tipping is 10–12.5%.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Core+by+Clare+Smyth+London",
      "bookUrl": "https://corebyclaresmyth.com/",
      "dishes": [
        {
          "name": "Potato and Roe",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Rosewood_London_Courtyard.jpg/960px-Rosewood_London_Courtyard.jpg",
          "desc": "The signature dish — humble potato elevated."
        },
        {
          "name": "Lamb Carrot",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Rosewood_London_Courtyard.jpg/960px-Rosewood_London_Courtyard.jpg",
          "desc": "Slow-cooked lamb with carrot textures."
        },
        {
          "name": "Seasonal Tasting Menu",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Harrods_Food_Hall.jpg/960px-Harrods_Food_Hall.jpg",
          "desc": "British produce at its finest."
        },
        {
          "name": "Pre-Dessert",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Harrods_Food_Hall.jpg/960px-Harrods_Food_Hall.jpg",
          "desc": "Surprise palate cleanser."
        },
        {
          "name": "Chocolate & Caramel",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Rosewood_London_Courtyard.jpg/960px-Rosewood_London_Courtyard.jpg",
          "desc": "Rich closing course."
        }
      ],
      "photos": {
        "signature": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Rosewood_London_Courtyard.jpg/960px-Rosewood_London_Courtyard.jpg",
        "interior": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Rosewood_London_Courtyard.jpg/960px-Rosewood_London_Courtyard.jpg",
        "exterior": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Harrods_Food_Hall.jpg/960px-Harrods_Food_Hall.jpg",
        "dessert": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Harrods_Food_Hall.jpg/960px-Harrods_Food_Hall.jpg",
        "coffee": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Rosewood_London_Courtyard.jpg/960px-Rosewood_London_Courtyard.jpg"
      }
    },
    {
      "name": "Dishoom Covent Garden",
      "category": "Halal · Bombay-Iranian",
      "address": "12 Upper St Martin's Ln · WC2H 9FB",
      "price": "£25/head",
      "famous": "Bacon-free black daal · house black daal",
      "halal": true,
      "vegetarian": true,
      "reservation": "No dinner bookings — queue",
      "wait": "45–90 min at 19:00",
      "michelin": "—",
      "kidsFriendly": "Yes",
      "dressCode": "Casual",
      "tip": "Call ahead about dietary needs. GCC travellers: most kitchens will confirm halal sourcing on request even if not marketed as such. Tipping is 10–12.5%.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Dishoom+Covent+Garden+London",
      "bookUrl": "https://www.dishoom.com/",
      "dishes": [
        {
          "name": "House Black Daal",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Dishoom_London_Fleischgericht.jpg/960px-Dishoom_London_Fleischgericht.jpg",
          "desc": "Slow-cooked overnight — the reason people queue."
        },
        {
          "name": "Chicken Ruby",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Dishoom_King%27s_Cross_interior_1.jpg/960px-Dishoom_King%27s_Cross_interior_1.jpg",
          "desc": "Rich ruby-red curry — crowd favourite."
        },
        {
          "name": "Bacon Naan Roll",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Dishoom_King%27s_Cross_interior_1.jpg/960px-Dishoom_King%27s_Cross_interior_1.jpg",
          "desc": "Breakfast icon — arrive before 11:30."
        },
        {
          "name": "Okra Fries",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Dishoom_King%27s_Cross_interior_1.jpg/960px-Dishoom_King%27s_Cross_interior_1.jpg",
          "desc": "Crispy, spiced, addictive."
        },
        {
          "name": "Chai",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Dishoom_London_Fleischgericht.jpg/960px-Dishoom_London_Fleischgericht.jpg",
          "desc": "Proper Bombay-style masala chai."
        }
      ],
      "photos": {
        "signature": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Dishoom_London_Fleischgericht.jpg/960px-Dishoom_London_Fleischgericht.jpg",
        "interior": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Dishoom_King%27s_Cross_interior_1.jpg/960px-Dishoom_King%27s_Cross_interior_1.jpg",
        "exterior": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Dishoom_King%27s_Cross_interior_1.jpg/960px-Dishoom_King%27s_Cross_interior_1.jpg",
        "dessert": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Dishoom_King%27s_Cross_interior_1.jpg/960px-Dishoom_King%27s_Cross_interior_1.jpg",
        "coffee": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Dishoom_King%27s_Cross_interior_1.jpg/960px-Dishoom_King%27s_Cross_interior_1.jpg"
      }
    },
    {
      "name": "Tayyabs",
      "category": "Halal · Punjabi",
      "address": "83–89 Fieldgate St · E1 1JU",
      "price": "£22/head",
      "famous": "Lamb chops · legendary",
      "halal": true,
      "vegetarian": true,
      "reservation": "Recommended weekends",
      "wait": "30–60 min",
      "michelin": "—",
      "kidsFriendly": "Yes",
      "dressCode": "Casual",
      "tip": "Call ahead about dietary needs. GCC travellers: most kitchens will confirm halal sourcing on request even if not marketed as such. Tipping is 10–12.5%.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Tayyabs+London",
      "bookUrl": "https://www.tayyabs.co.uk/",
      "dishes": [
        {
          "name": "Lamb Chops",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Tayyabs%2C_Whitechapel%2C_London_%283103112043%29.jpg/960px-Tayyabs%2C_Whitechapel%2C_London_%283103112043%29.jpg",
          "desc": "The legendary chops — order immediately."
        },
        {
          "name": "Chicken Karahi",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Tayyabs%2C_Whitechapel%2C_London_%283103112043%29.jpg/960px-Tayyabs%2C_Whitechapel%2C_London_%283103112043%29.jpg",
          "desc": "Wok-style curry — sharing size."
        },
        {
          "name": "Seekh Kebab",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Tayyabs%2C_Whitechapel%2C_London_%283103112043%29.jpg/960px-Tayyabs%2C_Whitechapel%2C_London_%283103112043%29.jpg",
          "desc": "Spiced minced lamb on skewers."
        },
        {
          "name": "Daal",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Tayyabs%2C_Whitechapel%2C_London_%283103112043%29.jpg/960px-Tayyabs%2C_Whitechapel%2C_London_%283103112043%29.jpg",
          "desc": "Comforting lentil base for everything."
        },
        {
          "name": "Mango Lassi",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Tayyabs%2C_Whitechapel%2C_London_%283103112043%29.jpg/960px-Tayyabs%2C_Whitechapel%2C_London_%283103112043%29.jpg",
          "desc": "Essential cooling counterpoint."
        }
      ],
      "photos": {
        "signature": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Tayyabs%2C_Whitechapel%2C_London_%283103112043%29.jpg/960px-Tayyabs%2C_Whitechapel%2C_London_%283103112043%29.jpg",
        "interior": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Tayyabs%2C_Whitechapel%2C_London_%283103112043%29.jpg/960px-Tayyabs%2C_Whitechapel%2C_London_%283103112043%29.jpg",
        "exterior": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Tayyabs%2C_Whitechapel%2C_London_%283103112043%29.jpg/960px-Tayyabs%2C_Whitechapel%2C_London_%283103112043%29.jpg",
        "dessert": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Tayyabs%2C_Whitechapel%2C_London_%283103112043%29.jpg/960px-Tayyabs%2C_Whitechapel%2C_London_%283103112043%29.jpg",
        "coffee": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Tayyabs%2C_Whitechapel%2C_London_%283103112043%29.jpg/960px-Tayyabs%2C_Whitechapel%2C_London_%283103112043%29.jpg"
      }
    },
    {
      "name": "Fortnum & Mason · The Diamond Jubilee Tea Salon",
      "category": "Afternoon Tea",
      "address": "181 Piccadilly · W1A 1ER",
      "price": "£90 traditional tea",
      "famous": "Royal Blend tea · signature sandwich",
      "halal": false,
      "vegetarian": true,
      "reservation": "4+ weeks",
      "wait": "0 with booking",
      "michelin": "—",
      "kidsFriendly": "Yes",
      "dressCode": "Smart",
      "tip": "Call ahead about dietary needs. GCC travellers: most kitchens will confirm halal sourcing on request even if not marketed as such. Tipping is 10–12.5%.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Fortnum+and+Mason+London",
      "bookUrl": "https://www.fortnumandmason.com/",
      "dishes": [
        {
          "name": "Royal Blend Tea",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Fortnum_and_Mason.jpg/960px-Fortnum_and_Mason.jpg",
          "desc": "Fortnum's signature since 1902."
        },
        {
          "name": "Smoked Salmon Sandwich",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Fortnum_and_Mason.jpg/960px-Fortnum_and_Mason.jpg",
          "desc": "Classic finger sandwich tier."
        },
        {
          "name": "Scones with Clotted Cream",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Fortnum_and_Mason.jpg/960px-Fortnum_and_Mason.jpg",
          "desc": "Warm scones — jam first or cream first?"
        },
        {
          "name": "Pastry Tier",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Fortnum_and_Mason.jpg/960px-Fortnum_and_Mason.jpg",
          "desc": "Petit fours and patisserie."
        },
        {
          "name": "Champagne",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Fortnum_and_Mason.jpg/960px-Fortnum_and_Mason.jpg",
          "desc": "Upgrade to Taittinger for celebrations."
        }
      ],
      "photos": {
        "signature": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Fortnum_and_Mason.jpg/960px-Fortnum_and_Mason.jpg",
        "interior": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Fortnum_and_Mason.jpg/960px-Fortnum_and_Mason.jpg",
        "exterior": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Fortnum_and_Mason.jpg/960px-Fortnum_and_Mason.jpg",
        "dessert": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Fortnum_and_Mason.jpg/960px-Fortnum_and_Mason.jpg",
        "coffee": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Fortnum_and_Mason.jpg/960px-Fortnum_and_Mason.jpg"
      }
    },
    {
      "name": "Padella",
      "category": "Italian · Pasta",
      "address": "6 Southwark St · SE1 1TQ",
      "price": "£15/head",
      "famous": "Pici cacio e pepe",
      "halal": false,
      "vegetarian": true,
      "reservation": "Join queue on app from 10:00",
      "wait": "30–90 min",
      "michelin": "—",
      "kidsFriendly": "Yes",
      "dressCode": "Casual",
      "tip": "Call ahead about dietary needs. GCC travellers: most kitchens will confirm halal sourcing on request even if not marketed as such. Tipping is 10–12.5%.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Padella+London",
      "bookUrl": "https://www.padella.co/",
      "dishes": [
        {
          "name": "Pici Cacio e Pepe",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Borough_Market_-_London%2C_UK_-_DSC08879.jpg/960px-Borough_Market_-_London%2C_UK_-_DSC08879.jpg",
          "desc": "The dish that made them famous."
        },
        {
          "name": "Pappardelle with Beef Shin",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Borough_Market_-_London%2C_UK_-_DSC08879.jpg/960px-Borough_Market_-_London%2C_UK_-_DSC08879.jpg",
          "desc": "Rich ragu — perfect winter bowl."
        },
        {
          "name": "Tagliarini with Dorset Crab",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Borough_Market_-_London%2C_UK_-_DSC08879.jpg/960px-Borough_Market_-_London%2C_UK_-_DSC08879.jpg",
          "desc": "Light, fresh, seasonal."
        },
        {
          "name": "Tiramisu",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Borough_Market_-_London%2C_UK_-_DSC08879.jpg/960px-Borough_Market_-_London%2C_UK_-_DSC08879.jpg",
          "desc": "Classic Italian finish."
        },
        {
          "name": "Negroni Sbagliato",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Borough_Market_-_London%2C_UK_-_DSC08879.jpg/960px-Borough_Market_-_London%2C_UK_-_DSC08879.jpg",
          "desc": "Aperitivo while you wait."
        }
      ],
      "photos": {
        "signature": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Borough_Market_-_London%2C_UK_-_DSC08879.jpg/960px-Borough_Market_-_London%2C_UK_-_DSC08879.jpg",
        "interior": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Borough_Market_-_London%2C_UK_-_DSC08879.jpg/960px-Borough_Market_-_London%2C_UK_-_DSC08879.jpg",
        "exterior": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Borough_Market_-_London%2C_UK_-_DSC08879.jpg/960px-Borough_Market_-_London%2C_UK_-_DSC08879.jpg",
        "dessert": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Borough_Market_-_London%2C_UK_-_DSC08879.jpg/960px-Borough_Market_-_London%2C_UK_-_DSC08879.jpg",
        "coffee": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Borough_Market_-_London%2C_UK_-_DSC08879.jpg/960px-Borough_Market_-_London%2C_UK_-_DSC08879.jpg"
      }
    },
    {
      "name": "Borough Market",
      "category": "Street Food · Market",
      "address": "8 Southwark St · SE1 1TL",
      "price": "£10–£20/head",
      "famous": "Kappacasein raclette · Bread Ahead doughnuts",
      "halal": true,
      "vegetarian": true,
      "reservation": "—",
      "wait": "Long queues Sat lunch",
      "michelin": "—",
      "kidsFriendly": "Yes",
      "dressCode": "Casual",
      "tip": "Call ahead about dietary needs. GCC travellers: most kitchens will confirm halal sourcing on request even if not marketed as such. Tipping is 10–12.5%.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Borough+Market+London",
      "bookUrl": "https://boroughmarket.org.uk/",
      "dishes": [
        {
          "name": "Kappacasein Raclette",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Borough_Market_-_London%2C_UK_-_DSC08879.jpg/960px-Borough_Market_-_London%2C_UK_-_DSC08879.jpg",
          "desc": "Melted cheese on potatoes — worth the queue."
        },
        {
          "name": "Bread Ahead Doughnuts",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Borough_Market_-_London%2C_UK_-_DSC08879.jpg/960px-Borough_Market_-_London%2C_UK_-_DSC08879.jpg",
          "desc": "Filled doughnuts — arrive early."
        },
        {
          "name": "Brindisa Chorizo Roll",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Bread_Street_Kitchen_and_Bar%2C_Moorgate%2C_EC2.jpg/960px-Bread_Street_Kitchen_and_Bar%2C_Moorgate%2C_EC2.jpg",
          "desc": "Grilled chorizo in crusty bread."
        },
        {
          "name": "Wild Mushroom Risotto",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Bread_Street_Kitchen_and_Bar%2C_Moorgate%2C_EC2.jpg/960px-Bread_Street_Kitchen_and_Bar%2C_Moorgate%2C_EC2.jpg",
          "desc": "Seasonal stall favourite."
        },
        {
          "name": "Monmouth Coffee",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Borough_Market_-_London%2C_UK_-_DSC08879.jpg/960px-Borough_Market_-_London%2C_UK_-_DSC08879.jpg",
          "desc": "Single-origin pour-over."
        }
      ],
      "photos": {
        "signature": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Borough_Market_-_London%2C_UK_-_DSC08879.jpg/960px-Borough_Market_-_London%2C_UK_-_DSC08879.jpg",
        "interior": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Borough_Market_-_London%2C_UK_-_DSC08879.jpg/960px-Borough_Market_-_London%2C_UK_-_DSC08879.jpg",
        "exterior": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Bread_Street_Kitchen_and_Bar%2C_Moorgate%2C_EC2.jpg/960px-Bread_Street_Kitchen_and_Bar%2C_Moorgate%2C_EC2.jpg",
        "dessert": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Bread_Street_Kitchen_and_Bar%2C_Moorgate%2C_EC2.jpg/960px-Bread_Street_Kitchen_and_Bar%2C_Moorgate%2C_EC2.jpg",
        "coffee": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Borough_Market_-_London%2C_UK_-_DSC08879.jpg/960px-Borough_Market_-_London%2C_UK_-_DSC08879.jpg"
      }
    },
    {
      "name": "Gordon Ramsay Bread Street Kitchen",
      "category": "Modern British",
      "address": "10 Bread St · EC4M 9AJ",
      "price": "£45/head",
      "famous": "Fish & chips · Sunday roast",
      "halal": false,
      "vegetarian": true,
      "reservation": "Recommended",
      "wait": "15 min with booking",
      "michelin": "—",
      "kidsFriendly": "Yes",
      "dressCode": "Smart-casual",
      "tip": "Call ahead about dietary needs. GCC travellers: most kitchens will confirm halal sourcing on request even if not marketed as such. Tipping is 10–12.5%.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Bread+Street+Kitchen+London",
      "bookUrl": "https://www.gordonramsayrestaurants.com/bread-street-kitchen/",
      "dishes": [
        {
          "name": "Fish & Chips",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Bread_Street_Kitchen_and_Bar%2C_Moorgate%2C_EC2.jpg/960px-Bread_Street_Kitchen_and_Bar%2C_Moorgate%2C_EC2.jpg",
          "desc": "Beer-battered cod — British classic done right."
        },
        {
          "name": "Sunday Roast",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Bread_Street_Kitchen_and_Bar%2C_Moorgate%2C_EC2.jpg/960px-Bread_Street_Kitchen_and_Bar%2C_Moorgate%2C_EC2.jpg",
          "desc": "Yorkshire pudding, gravy, the works."
        },
        {
          "name": "Beef Wellington",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Bread_Street_Kitchen_and_Bar%2C_Moorgate%2C_EC2.jpg/960px-Bread_Street_Kitchen_and_Bar%2C_Moorgate%2C_EC2.jpg",
          "desc": "Gordon's signature — book ahead."
        },
        {
          "name": "Sticky Toffee Pudding",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Bread_Street_Kitchen_and_Bar%2C_Moorgate%2C_EC2.jpg/960px-Bread_Street_Kitchen_and_Bar%2C_Moorgate%2C_EC2.jpg",
          "desc": "Warm, saucy, essential."
        },
        {
          "name": "Espresso Martini",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Bread_Street_Kitchen_and_Bar%2C_Moorgate%2C_EC2.jpg/960px-Bread_Street_Kitchen_and_Bar%2C_Moorgate%2C_EC2.jpg",
          "desc": "Post-dinner pick-me-up."
        }
      ],
      "photos": {
        "signature": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Bread_Street_Kitchen_and_Bar%2C_Moorgate%2C_EC2.jpg/960px-Bread_Street_Kitchen_and_Bar%2C_Moorgate%2C_EC2.jpg",
        "interior": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Bread_Street_Kitchen_and_Bar%2C_Moorgate%2C_EC2.jpg/960px-Bread_Street_Kitchen_and_Bar%2C_Moorgate%2C_EC2.jpg",
        "exterior": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Bread_Street_Kitchen_and_Bar%2C_Moorgate%2C_EC2.jpg/960px-Bread_Street_Kitchen_and_Bar%2C_Moorgate%2C_EC2.jpg",
        "dessert": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Bread_Street_Kitchen_and_Bar%2C_Moorgate%2C_EC2.jpg/960px-Bread_Street_Kitchen_and_Bar%2C_Moorgate%2C_EC2.jpg",
        "coffee": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Bread_Street_Kitchen_and_Bar%2C_Moorgate%2C_EC2.jpg/960px-Bread_Street_Kitchen_and_Bar%2C_Moorgate%2C_EC2.jpg"
      }
    }
  ],
  "itineraries": [
    {
      "day": 1,
      "title": "Royal London",
      "color": "#c41e3a",
      "routePreview": "8 stops · start 08:30 · end 20:00",
      "mapUrl": "https://www.google.com/maps/dir/Duck+and+Waffle+London/Buckingham+Palace/Westminster+Abbey/Big+Ben/London+Eye/Sketch+London",
      "budget": {
        "budget": {
          "total": "£65 per person",
          "includes": [
            "Free museums",
            "Walking + bus",
            "Chain lunches",
            "Public sights"
          ]
        },
        "mid": {
          "total": "£185 per person",
          "includes": [
            "Ticketed sights",
            "Occasional taxi",
            "Sit-down meals",
            "Coffee stops"
          ]
        },
        "luxury": {
          "total": "£520 per person",
          "includes": [
            "Fast-Track tickets",
            "Uber everywhere",
            "Michelin lunch",
            "Cocktail bar"
          ]
        }
      },
      "photos": [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Entrance_to_The_Shard%2C_London_SE1_-_geograph.org.uk_-_3513958.jpg/960px-Entrance_to_The_Shard%2C_London_SE1_-_geograph.org.uk_-_3513958.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Buckingham_Palace_London_Morning_2020_01_%28cropped%29.jpg/960px-Buckingham_Palace_London_Morning_2020_01_%28cropped%29.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Buckingham_Palace_London_Morning_2020_01_%28cropped%29.jpg/960px-Buckingham_Palace_London_Morning_2020_01_%28cropped%29.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/1%E2%80%933_Arlington_Street_and_157%E2%80%93160_Piccadilly.jpg/960px-1%E2%80%933_Arlington_Street_and_157%E2%80%93160_Piccadilly.jpg"
      ],
      "stops": [
        {
          "time": "08:30",
          "timeOfDay": "morning",
          "name": "Duck & Waffle",
          "desc": "Level 40 views · book ahead",
          "transit": "Tube · Circle · 2 stops · 8 min",
          "icon": "train",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Duck+and+Waffle+London"
        },
        {
          "time": "09:30",
          "timeOfDay": "morning",
          "name": "Buckingham Palace",
          "desc": "Arrive early for Changing of the Guard",
          "transit": "Walk 350 m · 5 min",
          "icon": "walk",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Buckingham+Palace+London"
        },
        {
          "time": "11:00",
          "timeOfDay": "morning",
          "name": "Changing of the Guard",
          "desc": "Free · 45 min ceremony",
          "transit": "Walk · St James's Park · 800 m · 12 min",
          "icon": "walk",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Changing+of+the+Guard+London"
        },
        {
          "time": "12:30",
          "timeOfDay": "afternoon",
          "name": "The Wolseley",
          "desc": "Central European classic",
          "transit": "Walk 600 m · 8 min",
          "icon": "walk",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=The+Wolseley+London"
        },
        {
          "time": "14:00",
          "timeOfDay": "afternoon",
          "name": "Westminster Abbey",
          "desc": "Book online · save time",
          "transit": "Walk 400 m · 6 min",
          "icon": "walk",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Westminster+Abbey+London"
        },
        {
          "time": "16:00",
          "timeOfDay": "afternoon",
          "name": "Big Ben + Parliament",
          "desc": "Photos from Westminster Bridge",
          "transit": "Walk 200 m · 3 min",
          "icon": "walk",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Big+Ben+London"
        },
        {
          "time": "18:00",
          "timeOfDay": "evening",
          "name": "London Eye · Sunset",
          "desc": "Book Fast Track online",
          "transit": "Uber Boat · Waterloo → Embankment · 8 min",
          "icon": "train",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=London+Eye"
        },
        {
          "time": "20:00",
          "timeOfDay": "night",
          "name": "Dinner · Sketch",
          "desc": "The pink room — reservations essential",
          "transit": "Walk · 10 min",
          "icon": "walk",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Sketch+London"
        }
      ]
    },
    {
      "day": 2,
      "title": "City of London",
      "color": "#0019A8",
      "routePreview": "8 stops · start 08:30 · end 20:30",
      "mapUrl": "https://www.google.com/maps/dir/The+Hoxton+Holborn/Tower+of+London/Tower+Bridge/Borough+Market/The+Shard/St+Pauls+Cathedral/Sky+Garden/Bread+Street+Kitchen",
      "budget": {
        "budget": {
          "total": "£65 per person",
          "includes": [
            "Free museums",
            "Walking + bus",
            "Chain lunches",
            "Public sights"
          ]
        },
        "mid": {
          "total": "£185 per person",
          "includes": [
            "Ticketed sights",
            "Occasional taxi",
            "Sit-down meals",
            "Coffee stops"
          ]
        },
        "luxury": {
          "total": "£520 per person",
          "includes": [
            "Fast-Track tickets",
            "Uber everywhere",
            "Michelin lunch",
            "Cocktail bar"
          ]
        }
      },
      "photos": [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Holborn%2C_London_-_geograph.org.uk_-_1792553.jpg/960px-Holborn%2C_London_-_geograph.org.uk_-_1792553.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Tower_of_London_from_the_Shard_%288515883950%29.jpg/960px-Tower_of_London_from_the_Shard_%288515883950%29.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Tower_Bridge_London_Feb_2006.jpg/960px-Tower_Bridge_London_Feb_2006.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Borough_Market_-_London%2C_UK_-_DSC08879.jpg/960px-Borough_Market_-_London%2C_UK_-_DSC08879.jpg"
      ],
      "stops": [
        {
          "time": "08:30",
          "timeOfDay": "morning",
          "name": "Breakfast · The Hoxton",
          "desc": "Simple, fast",
          "transit": "Tube · Central · 3 stops · 10 min",
          "icon": "train",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=The+Hoxton+Holborn+London"
        },
        {
          "time": "09:30",
          "timeOfDay": "morning",
          "name": "Tower of London",
          "desc": "Yeoman Warder tour at 10:00",
          "transit": "Walk 250 m · 4 min",
          "icon": "walk",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Tower+of+London"
        },
        {
          "time": "12:00",
          "timeOfDay": "afternoon",
          "name": "Tower Bridge Walk",
          "desc": "Cross to south bank",
          "transit": "Walk · riverside · 600 m · 9 min",
          "icon": "walk",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Tower+Bridge+London"
        },
        {
          "time": "13:00",
          "timeOfDay": "afternoon",
          "name": "Lunch · Borough Market",
          "desc": "Kappacasein raclette · Bread Ahead",
          "transit": "Walk 500 m · 7 min",
          "icon": "walk",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Borough+Market+London"
        },
        {
          "time": "15:00",
          "timeOfDay": "afternoon",
          "name": "The Shard",
          "desc": "View From The Shard · combined day+night ticket",
          "transit": "Tube · Northern · 2 stops · 7 min",
          "icon": "train",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=The+Shard+London"
        },
        {
          "time": "17:00",
          "timeOfDay": "evening",
          "name": "St Paul's Cathedral",
          "desc": "Climb the dome for sunset",
          "transit": "Walk · Millennium Bridge · 500 m · 8 min",
          "icon": "walk",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=St+Pauls+Cathedral+London"
        },
        {
          "time": "19:00",
          "timeOfDay": "evening",
          "name": "Sundowners · Sky Garden",
          "desc": "Free — book slot 3 weeks ahead",
          "transit": "Walk · 10 min",
          "icon": "walk",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Sky+Garden+London"
        },
        {
          "time": "20:30",
          "timeOfDay": "night",
          "name": "Dinner · Bread Street Kitchen",
          "desc": "Gordon Ramsay · smart casual",
          "transit": "Walk · 5 min",
          "icon": "walk",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Bread+Street+Kitchen+London"
        }
      ]
    },
    {
      "day": 3,
      "title": "Museums & Kensington",
      "color": "#2d6a4f",
      "routePreview": "7 stops · start 09:00 · end 20:00",
      "mapUrl": "https://www.google.com/maps/dir/Farm+Girl+Notting+Hill/Portobello+Road+Market/Victoria+and+Albert+Museum/Natural+History+Museum/Hyde+Park/Zaika+Kensington",
      "budget": {
        "budget": {
          "total": "£65 per person",
          "includes": [
            "Free museums",
            "Walking + bus",
            "Chain lunches",
            "Public sights"
          ]
        },
        "mid": {
          "total": "£185 per person",
          "includes": [
            "Ticketed sights",
            "Occasional taxi",
            "Sit-down meals",
            "Coffee stops"
          ]
        },
        "luxury": {
          "total": "£520 per person",
          "includes": [
            "Fast-Track tickets",
            "Uber everywhere",
            "Michelin lunch",
            "Cocktail bar"
          ]
        }
      },
      "photos": [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Neal%27s_Yard_20130408_034.jpg/960px-Neal%27s_Yard_20130408_034.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Portobello_Road_Market%2C_London_-_Aug_2007.jpg/960px-Portobello_Road_Market%2C_London_-_Aug_2007.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Victoria_and_Albert_Museum%2C_London.jpg/960px-Victoria_and_Albert_Museum%2C_London.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Victoria_and_Albert_Museum%2C_London.jpg/960px-Victoria_and_Albert_Museum%2C_London.jpg"
      ],
      "stops": [
        {
          "time": "09:00",
          "timeOfDay": "morning",
          "name": "Breakfast · Farm Girl",
          "desc": "Notting Hill café",
          "transit": "Walk · Portobello · 1.2 km · 15 min",
          "icon": "walk",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Farm+Girl+Notting+Hill+London"
        },
        {
          "time": "10:30",
          "timeOfDay": "morning",
          "name": "Portobello Road Market",
          "desc": "Antiques on Sat · pastel houses always",
          "transit": "Tube · Circle · 3 stops · 12 min",
          "icon": "train",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Portobello+Road+Market+London"
        },
        {
          "time": "13:00",
          "timeOfDay": "afternoon",
          "name": "Lunch · V&A Café",
          "desc": "The most beautiful café in a museum",
          "transit": "Inside V&A",
          "icon": "walk",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Victoria+and+Albert+Museum+London"
        },
        {
          "time": "14:00",
          "timeOfDay": "afternoon",
          "name": "Victoria & Albert Museum",
          "desc": "Free · 2 hours minimum",
          "transit": "Inside V&A",
          "icon": "walk",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Victoria+and+Albert+Museum+London"
        },
        {
          "time": "16:00",
          "timeOfDay": "afternoon",
          "name": "Natural History Museum",
          "desc": "Hintze Hall · blue whale",
          "transit": "Walk 200 m · 3 min",
          "icon": "walk",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Natural+History+Museum+London"
        },
        {
          "time": "18:00",
          "timeOfDay": "evening",
          "name": "Hyde Park & Serpentine",
          "desc": "Sunset walk",
          "transit": "Walk · Hyde Park · 800 m · 12 min",
          "icon": "walk",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Hyde+Park+London"
        },
        {
          "time": "20:00",
          "timeOfDay": "night",
          "name": "Dinner · Zaika",
          "desc": "Michelin Indian in Kensington",
          "transit": "Walk · 1.0 km · 14 min",
          "icon": "walk",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Zaika+Kensington+London"
        }
      ]
    },
    {
      "day": 4,
      "title": "Art & Soho",
      "color": "#b8860b",
      "routePreview": "8 stops · start 09:00 · end 22:00",
      "mapUrl": "https://www.google.com/maps/dir/Monmouth+Coffee+Covent+Garden/Neals+Yard/British+Museum/Padella+London/Tate+Modern/Southbank+London/Bao+Soho",
      "budget": {
        "budget": {
          "total": "£65 per person",
          "includes": [
            "Free museums",
            "Walking + bus",
            "Chain lunches",
            "Public sights"
          ]
        },
        "mid": {
          "total": "£185 per person",
          "includes": [
            "Ticketed sights",
            "Occasional taxi",
            "Sit-down meals",
            "Coffee stops"
          ]
        },
        "luxury": {
          "total": "£520 per person",
          "includes": [
            "Fast-Track tickets",
            "Uber everywhere",
            "Michelin lunch",
            "Cocktail bar"
          ]
        }
      },
      "photos": [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Monmouth_Coffee_Company%2C_Covent_Garden.jpg/960px-Monmouth_Coffee_Company%2C_Covent_Garden.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Neal%27s_Yard_20130408_034.jpg/960px-Neal%27s_Yard_20130408_034.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/British_Museum_Reading_Room_Panorama_Feb_2006.jpg/960px-British_Museum_Reading_Room_Panorama_Feb_2006.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Borough_Market_-_London%2C_UK_-_DSC08879.jpg/960px-Borough_Market_-_London%2C_UK_-_DSC08879.jpg"
      ],
      "stops": [
        {
          "time": "09:00",
          "timeOfDay": "morning",
          "name": "Breakfast · Monmouth Coffee",
          "desc": "Small · precise · queue",
          "transit": "Walk · Neal's Yard · 200 m · 3 min",
          "icon": "walk",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Monmouth+Coffee+Covent+Garden"
        },
        {
          "time": "10:00",
          "timeOfDay": "morning",
          "name": "Neal's Yard",
          "desc": "Hidden pastel courtyard",
          "transit": "Walk 500 m · 7 min",
          "icon": "walk",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Neals+Yard+London"
        },
        {
          "time": "11:00",
          "timeOfDay": "morning",
          "name": "British Museum",
          "desc": "Rosetta Stone first · then Egypt",
          "transit": "Walk · 12 min",
          "icon": "walk",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=British+Museum+London"
        },
        {
          "time": "14:00",
          "timeOfDay": "afternoon",
          "name": "Lunch · Padella",
          "desc": "Pici cacio e pepe · queue via app",
          "transit": "Tube · Central · 1 stop · 4 min",
          "icon": "train",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Padella+London"
        },
        {
          "time": "16:00",
          "timeOfDay": "afternoon",
          "name": "Tate Modern",
          "desc": "Free · Turbine Hall",
          "transit": "Walk · Southbank · 1.5 km · 20 min",
          "icon": "walk",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Tate+Modern+London"
        },
        {
          "time": "18:30",
          "timeOfDay": "evening",
          "name": "Southbank sunset",
          "desc": "Riverside walk to Waterloo",
          "transit": "Walk · Millennium Bridge · 400 m · 6 min",
          "icon": "walk",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Southbank+London"
        },
        {
          "time": "20:00",
          "timeOfDay": "evening",
          "name": "Dinner · Bao Soho",
          "desc": "Taiwanese steamed buns · walk-in",
          "transit": "Tube · Northern · 3 stops · 10 min",
          "icon": "train",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Bao+Soho+London"
        },
        {
          "time": "22:00",
          "timeOfDay": "night",
          "name": "West End show",
          "desc": "Book same-day at TKTS · 50% off",
          "transit": "Walk · Leicester Square",
          "icon": "walk",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=TKTS+Leicester+Square+London"
        }
      ]
    },
    {
      "day": 5,
      "title": "Villages & Views",
      "color": "#0077b6",
      "routePreview": "7 stops · start 08:30 · end 20:00",
      "mapUrl": "https://www.google.com/maps/dir/Ottolenghi+Islington/Camden+Market/Primrose+Hill/Greenwich+London/OXO+Tower/The+Ivy+London",
      "budget": {
        "budget": {
          "total": "£65 per person",
          "includes": [
            "Free museums",
            "Walking + bus",
            "Chain lunches",
            "Public sights"
          ]
        },
        "mid": {
          "total": "£185 per person",
          "includes": [
            "Ticketed sights",
            "Occasional taxi",
            "Sit-down meals",
            "Coffee stops"
          ]
        },
        "luxury": {
          "total": "£520 per person",
          "includes": [
            "Fast-Track tickets",
            "Uber everywhere",
            "Michelin lunch",
            "Cocktail bar"
          ]
        }
      },
      "photos": [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Holborn%2C_London_-_geograph.org.uk_-_1792553.jpg/960px-Holborn%2C_London_-_geograph.org.uk_-_1792553.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Little_Venice%2C_London_02.jpg/960px-Little_Venice%2C_London_02.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Camden_markets_entrance.JPG/960px-Camden_markets_entrance.JPG",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Primrose_Hill%2C_London_-16Sept2010.jpg/960px-Primrose_Hill%2C_London_-16Sept2010.jpg"
      ],
      "stops": [
        {
          "time": "08:30",
          "timeOfDay": "morning",
          "name": "Breakfast · Ottolenghi Islington",
          "desc": "Order at counter",
          "transit": "Tube · Northern · 5 stops · 18 min",
          "icon": "train",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Ottolenghi+Islington+London"
        },
        {
          "time": "10:00",
          "timeOfDay": "morning",
          "name": "Regent's Canal walk",
          "desc": "To Camden along the towpath",
          "transit": "Walk · canal · 3.0 km · 40 min",
          "icon": "walk",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Regents+Canal+Camden+London"
        },
        {
          "time": "11:30",
          "timeOfDay": "morning",
          "name": "Camden Market",
          "desc": "Street food · vintage",
          "transit": "At Camden Lock",
          "icon": "walk",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Camden+Market+London"
        },
        {
          "time": "13:30",
          "timeOfDay": "afternoon",
          "name": "Primrose Hill picnic",
          "desc": "Best skyline view in London",
          "transit": "Walk · Primrose Hill · 1.5 km · 20 min",
          "icon": "walk",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Primrose+Hill+London"
        },
        {
          "time": "15:30",
          "timeOfDay": "afternoon",
          "name": "Greenwich · Cutty Sark",
          "desc": "Take the boat back",
          "transit": "Tube · Jubilee · 6 stops · 22 min",
          "icon": "train",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Cutty+Sark+Greenwich+London"
        },
        {
          "time": "18:00",
          "timeOfDay": "evening",
          "name": "Sundowner · OXO Tower",
          "desc": "Free viewing balcony",
          "transit": "Uber Boat · Greenwich → Westminster · 45 min",
          "icon": "train",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=OXO+Tower+London"
        },
        {
          "time": "20:00",
          "timeOfDay": "night",
          "name": "Farewell dinner · The Ivy",
          "desc": "Classic British · book ahead",
          "transit": "Walk 600 m · 9 min",
          "icon": "walk",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=The+Ivy+London"
        }
      ]
    }
  ],
  "rainyDay": [
    {
      "name": "British Museum",
      "address": "Great Russell St",
      "desc": "Free entry all day",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/British_Museum_Reading_Room_Panorama_Feb_2006.jpg/960px-British_Museum_Reading_Room_Panorama_Feb_2006.jpg",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=British+Museum+London"
    },
    {
      "name": "Natural History Museum",
      "address": "Cromwell Rd",
      "desc": "Hintze Hall's blue whale",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Natural_History_Museum_HDR.jpg/960px-Natural_History_Museum_HDR.jpg",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Natural+History+Museum+London"
    },
    {
      "name": "Science Museum",
      "address": "Exhibition Rd",
      "desc": "Interactive · kids love",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Science_Museum_London.jpg/960px-Science_Museum_London.jpg",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Science+Museum+London"
    },
    {
      "name": "Harrods Food Halls",
      "address": "Knightsbridge",
      "desc": "Beautiful even without buying",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Harrods_Food_Hall.jpg/960px-Harrods_Food_Hall.jpg",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Harrods+London"
    },
    {
      "name": "Westfield London",
      "address": "White City",
      "desc": "300+ shops · Elizabeth Line direct",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Westfield_London_028.jpg/960px-Westfield_London_028.jpg",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Westfield+London"
    },
    {
      "name": "Fortnum & Mason afternoon tea",
      "address": "Piccadilly",
      "desc": "313 years old",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Fortnum_and_Mason.jpg/960px-Fortnum_and_Mason.jpg",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Fortnum+and+Mason+London"
    },
    {
      "name": "Churchill War Rooms",
      "address": "Clive Steps",
      "desc": "Underground bunker",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Churchill_War_Rooms_entrance.jpg/960px-Churchill_War_Rooms_entrance.jpg",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Churchill+War+Rooms+London"
    }
  ],
  "sunnyDay": [
    {
      "name": "Hyde Park & Serpentine",
      "address": "Central",
      "desc": "Boating in summer",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Serpentine_Lake%2C_Hyde_Park%2C_London.JPG/960px-Serpentine_Lake%2C_Hyde_Park%2C_London.JPG",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Hyde+Park+London"
    },
    {
      "name": "Regent's Park & Roses",
      "address": "Queen Mary's Gardens",
      "desc": "June bloom",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Queen_Mary%27s_Gardens%2C_Regent%27s_Park_-_geograph.org.uk_-_1515194.jpg/960px-Queen_Mary%27s_Gardens%2C_Regent%27s_Park_-_geograph.org.uk_-_1515194.jpg",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Regents+Park+London"
    },
    {
      "name": "Greenwich Park & Meridian",
      "address": "Greenwich",
      "desc": "Best skyline view · picnic",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Greenwich_Park_view_to_London.jpg/960px-Greenwich_Park_view_to_London.jpg",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Greenwich+Park+London"
    },
    {
      "name": "Richmond Park deer",
      "address": "Richmond",
      "desc": "Wild deer · 2,500 acres",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Red_Deer_Cervus_Elaphus_in_Richmond_Park_2024_02.jpg/960px-Red_Deer_Cervus_Elaphus_in_Richmond_Park_2024_02.jpg",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Richmond+Park+London"
    },
    {
      "name": "Hampstead Heath",
      "address": "North London",
      "desc": "Wild swimming ponds · Parliament Hill",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Woodland_on_Hampstead_Heath%2C_London_-_geograph.org.uk_-_1860518.jpg/960px-Woodland_on_Hampstead_Heath%2C_London_-_geograph.org.uk_-_1860518.jpg",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Hampstead+Heath+London"
    },
    {
      "name": "Primrose Hill sunset",
      "address": "Camden",
      "desc": "The postcard skyline · 15 min walk",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Primrose_Hill_-_London.jpg/960px-Primrose_Hill_-_London.jpg",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Primrose+Hill+London"
    },
    {
      "name": "Thames river cruise",
      "address": "Westminster → Greenwich",
      "desc": "45 min",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Thames_Clipper_on_Thames_near_Greenwich.jpg/960px-Thames_Clipper_on_Thames_near_Greenwich.jpg",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Thames+River+Cruise+London"
    }
  ],
  "hiddenGems": [
    {
      "name": "Neal's Yard",
      "desc": "Behind Covent Garden · pastel courtyard",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Neal%27s_Yard_20130408_034.jpg/960px-Neal%27s_Yard_20130408_034.jpg",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Neals+Yard+London"
    },
    {
      "name": "Leadenhall Market",
      "desc": "Victorian arcade · Diagon Alley filming",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Leadenhall_Market_In_London_-_Feb_2006_rotated.jpg/960px-Leadenhall_Market_In_London_-_Feb_2006_rotated.jpg",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Leadenhall+Market+London"
    },
    {
      "name": "Little Venice",
      "desc": "Canal-side pubs · Camden by boat",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Little_Venice%2C_London_02.jpg/960px-Little_Venice%2C_London_02.jpg",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Little+Venice+London"
    },
    {
      "name": "Kyoto Garden",
      "desc": "Holland Park · koi pond in autumn",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Kyoto_Garden%2C_Holland_Park_-_geograph.org.uk_-_3275839.jpg/960px-Kyoto_Garden%2C_Holland_Park_-_geograph.org.uk_-_3275839.jpg",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Kyoto+Garden+Holland+Park+London"
    },
    {
      "name": "St Dunstan in the East",
      "desc": "Ruined church wrapped in ivy",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/St_Dunstan-in-the-East_09.jpg/960px-St_Dunstan-in-the-East_09.jpg",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=St+Dunstan+in+the+East+London"
    },
    {
      "name": "Primrose Hill",
      "desc": "Best skyline · 15 min walk from Camden",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Primrose_Hill%2C_London_-16Sept2010.jpg/960px-Primrose_Hill%2C_London_-16Sept2010.jpg",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Primrose+Hill+London"
    },
    {
      "name": "Seven Noses of Soho",
      "desc": "Sculptural noses hidden on 7 walls · a self-guided treasure hunt",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Carnaby_street_sept_28_05.jpg/960px-Carnaby_street_sept_28_05.jpg",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Seven+Noses+of+Soho+London"
    },
    {
      "name": "God's Own Junkyard",
      "desc": "Walthamstow · neon paradise",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Camden_markets_entrance.JPG/960px-Camden_markets_entrance.JPG",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Gods+Own+Junkyard+London"
    }
  ],
  "warnings": [
    {
      "title": "Airport taxis",
      "desc": "Never take a black cab from a random touting driver at LHR. Elizabeth Line + hotel walk = £11.50. A booked Uber from arrivals: £45–£60."
    },
    {
      "title": "Currency exchange near Westminster",
      "desc": "Anywhere with a sandwich-board and no fees advertised is 4–8% worse than your bank card. Use your contactless card everywhere instead."
    },
    {
      "title": "Fake ticket sellers",
      "desc": "London Eye, Eye of London, and street-corner ticket sellers around Piccadilly are common scams. Only buy via the official websites in this guide."
    },
    {
      "title": "Restaurants opposite Big Ben",
      "desc": "£25 for a mediocre fish and chips. Walk 8 minutes to Regency Café or Poppie's for the real thing at half the price."
    },
    {
      "title": "Souvenirs on Westminster Bridge",
      "desc": "£15 fridge magnets. Buy the same thing at Camden Market or Portobello Road for £4."
    },
    {
      "title": "Illegal pedicabs",
      "desc": "£40 for a 200-metre ride. Uncapped, unregulated. Just walk or Uber."
    },
    {
      "title": "SIM cards at airport kiosks",
      "desc": "£40 for what should cost £10. Use eSIM apps like Airalo or buy from any Boots/EE shop in town."
    }
  ],
  "shopping": {
    "districts": [
      {
        "name": "Bond Street",
        "desc": "Luxury flagships · Louis Vuitton, Chanel, Hermès",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Regent_Street_20160622.jpg/960px-Regent_Street_20160622.jpg",
        "mapUrl": "https://www.google.com/maps/search/?api=1&query=Bond+Street+London"
      },
      {
        "name": "Regent Street",
        "desc": "British brands · Burberry, Liberty, Hamleys",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Regent_Street_20160622.jpg/960px-Regent_Street_20160622.jpg",
        "mapUrl": "https://www.google.com/maps/search/?api=1&query=Regent+Street+London"
      },
      {
        "name": "Oxford Street",
        "desc": "Mass market · Selfridges, John Lewis, Zara",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Oxford_Street%2C_London%2C_UK.jpg/960px-Oxford_Street%2C_London%2C_UK.jpg",
        "mapUrl": "https://www.google.com/maps/search/?api=1&query=Oxford+Street+London"
      },
      {
        "name": "Knightsbridge",
        "desc": "Harrods · Harvey Nichols · Sloane Street",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Harrods_2023.jpg/960px-Harrods_2023.jpg",
        "mapUrl": "https://www.google.com/maps/search/?api=1&query=Knightsbridge+London"
      },
      {
        "name": "Carnaby & Soho",
        "desc": "Independent · Vinyl · Streetwear",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Carnaby_street_sept_28_05.jpg/960px-Carnaby_street_sept_28_05.jpg",
        "mapUrl": "https://www.google.com/maps/search/?api=1&query=Carnaby+Street+London"
      },
      {
        "name": "Westfield London",
        "desc": "Under one roof · easy on rainy days · Elizabeth Line",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Westfield_London_028.jpg/960px-Westfield_London_028.jpg",
        "mapUrl": "https://www.google.com/maps/search/?api=1&query=Westfield+London"
      },
      {
        "name": "Bicester Village",
        "desc": "Outlet 1 h from Marylebone by train · up to 60% off",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Bicester_Village_-_geograph.org.uk_-_3709478.jpg/960px-Bicester_Village_-_geograph.org.uk_-_3709478.jpg",
        "mapUrl": "https://www.google.com/maps/search/?api=1&query=Bicester+Village"
      }
    ],
    "vatTips": {
      "note": "VAT is 20% on most goods. As of 2021 the UK ended in-store VAT refunds for tourists. However, many luxury boutiques ship your purchase to your home address VAT-free — always ask at the till.",
      "saleSeasons": "Boxing Day (26 Dec) → mid-January · End of June to end of July · Selfridges & Harrods run private-sale evenings — sign up to their newsletters.",
      "shippingTip": "For any single purchase over £600 (Louis Vuitton, Burberry, Rolex etc.), always ask about VAT-free direct shipping to your home country. You save 20% and skip customs at the airport."
    },
    "brands": [
      "Burberry (heritage trench)",
      "Barbour (waxed jackets)",
      "Church's (shoes)",
      "Turnbull & Asser (shirts)",
      "Smythson (leather goods)"
    ],
    "souvenirs": [
      "Fortnum & Mason tea tins",
      "Liberty print scarves",
      "a jar of Marmite",
      "a British Museum print",
      "a Twinings gift box from Strand"
    ]
  },
  "budget": {
    "budget": {
      "daily": "£95 per person / day",
      "accommodation": "£45 hostel/shared",
      "food": "£25",
      "transport": "£8.90 cap",
      "activities": "£15 free museums",
      "extras": "£1",
      "tip": "No matter how many tubes and buses you take, London's contactless daily cap is £8.90 in zones 1–2. Never buy a paper ticket — you would only spend more."
    },
    "mid": {
      "daily": "£240 per person / day",
      "accommodation": "£130 3★ hotel",
      "food": "£55",
      "transport": "£8.90 cap",
      "activities": "£35",
      "extras": "£11"
    },
    "luxury": {
      "daily": "£820 per person / day",
      "accommodation": "£600 5★",
      "food": "£120",
      "transport": "£20 Uber",
      "activities": "£60 Fast-Track",
      "extras": "£20 tips + café"
    }
  },
  "family": {
    "tip": "Children under 11 travel free on tube, bus, DLR and Elizabeth Line when with a fare-paying adult. No paperwork needed. 11–15 needs a Zip Oyster photocard if staying long-term.",
    "rows": [
      {
        "attraction": "Natural History Museum",
        "desc": "Dinosaurs + blue whale + free",
        "goodForKids": true,
        "stroller": true,
        "babyChange": true,
        "familyTicket": true
      },
      {
        "attraction": "Science Museum",
        "desc": "Interactive Wonderlab · £12 kids",
        "goodForKids": true,
        "stroller": true,
        "babyChange": true,
        "familyTicket": true
      },
      {
        "attraction": "Tower of London",
        "desc": "Warder tours delight kids",
        "goodForKids": true,
        "stroller": true,
        "babyChange": true,
        "familyTicket": true
      },
      {
        "attraction": "London Eye",
        "desc": "Fast Track worth the money",
        "goodForKids": true,
        "stroller": true,
        "babyChange": true,
        "familyTicket": false
      },
      {
        "attraction": "Sea Life London",
        "desc": "Under the London Eye",
        "goodForKids": true,
        "stroller": true,
        "babyChange": true,
        "familyTicket": true
      },
      {
        "attraction": "Kew Gardens",
        "desc": "Treetop walkway · playground",
        "goodForKids": true,
        "stroller": true,
        "babyChange": true,
        "familyTicket": true
      },
      {
        "attraction": "Diana Memorial Playground",
        "desc": "In Kensington Gardens · free",
        "goodForKids": true,
        "stroller": true,
        "babyChange": true,
        "familyTicket": true
      },
      {
        "attraction": "Emirates Cable Car",
        "desc": "Great for older kids",
        "goodForKids": true,
        "stroller": true,
        "babyChange": false,
        "familyTicket": true
      }
    ]
  },
  "emergency": {
    "numbers": [
      {
        "label": "999 / 112",
        "desc": "Police · Fire · Ambulance · Coastguard",
        "icon": "emergency"
      },
      {
        "label": "111",
        "desc": "NHS non-emergency medical advice · 24/7",
        "icon": "medical"
      },
      {
        "label": "101",
        "desc": "Non-emergency police",
        "icon": "police"
      },
      {
        "label": "+44 20 7008 5000",
        "desc": "UK Foreign Office · lost passport line",
        "icon": "passport"
      }
    ],
    "hospitals": [
      {
        "name": "St Thomas' Hospital",
        "address": "Westminster Bridge Rd · SE1 7EH",
        "icon": "hospital",
        "mapUrl": "https://www.google.com/maps/search/?api=1&query=St+Thomas+Hospital+London"
      },
      {
        "name": "University College London Hospital",
        "address": "235 Euston Rd · NW1 2BU",
        "icon": "hospital",
        "mapUrl": "https://www.google.com/maps/search/?api=1&query=UCLH+London"
      },
      {
        "name": "Chelsea and Westminster Hospital",
        "address": "369 Fulham Rd · SW10 9NH",
        "icon": "hospital",
        "mapUrl": "https://www.google.com/maps/search/?api=1&query=Chelsea+and+Westminster+Hospital+London"
      }
    ],
    "embassies": [
      {
        "country": "Saudi Arabia",
        "address": "30 Charles St · W1J 5DZ",
        "icon": "embassy",
        "mapUrl": "https://www.google.com/maps/search/?api=1&query=Saudi+Embassy+London"
      },
      {
        "country": "United Arab Emirates",
        "address": "1–2 Grosvenor Cres · SW1X 7EE",
        "icon": "embassy",
        "mapUrl": "https://www.google.com/maps/search/?api=1&query=UAE+Embassy+London"
      },
      {
        "country": "Kuwait",
        "address": "2 Albert Gate · SW1X 7JU",
        "icon": "embassy",
        "mapUrl": "https://www.google.com/maps/search/?api=1&query=Kuwait+Embassy+London"
      },
      {
        "country": "Qatar",
        "address": "1 South Audley St · W1K 1NB",
        "icon": "embassy",
        "mapUrl": "https://www.google.com/maps/search/?api=1&query=Qatar+Embassy+London"
      },
      {
        "country": "Bahrain",
        "address": "30 Belgrave Sq · SW1X 8QB",
        "icon": "embassy",
        "mapUrl": "https://www.google.com/maps/search/?api=1&query=Bahrain+Embassy+London"
      },
      {
        "country": "Oman",
        "address": "167 Queen's Gate · SW7 5HE",
        "icon": "embassy",
        "mapUrl": "https://www.google.com/maps/search/?api=1&query=Oman+Embassy+London"
      },
      {
        "country": "Egypt",
        "address": "26 South St · W1K 1DW",
        "icon": "embassy",
        "mapUrl": "https://www.google.com/maps/search/?api=1&query=Egypt+Embassy+London"
      },
      {
        "country": "Jordan",
        "address": "6 Upper Phillimore Gdns · W8 7HB",
        "icon": "embassy",
        "mapUrl": "https://www.google.com/maps/search/?api=1&query=Jordan+Embassy+London"
      }
    ],
    "lostPassport": "Report to the nearest police station (dial 101). Contact your embassy — they can issue an emergency travel document within 24–48 h. Take photos of your passport and store them in cloud storage before you fly."
  },
  "phrases": [
    {
      "english": "Excuse me, where is the nearest tube station?",
      "use": "Ask for directions"
    },
    {
      "english": "Could I pay by card, please?",
      "use": "Cards work everywhere; still ask if uncertain"
    },
    {
      "english": "Takeaway, please. / To go, please.",
      "use": "For coffee and food"
    },
    {
      "english": "May I have the bill / cheque, please?",
      "use": "Ask for the bill · never wait for it"
    },
    {
      "english": "Is the service charge included?",
      "use": "Check before adding a tip"
    },
    {
      "english": "Two adults, one child, please.",
      "use": "Buying tickets"
    },
    {
      "english": "Where are the toilets?",
      "use": "British English · not 'restroom'"
    },
    {
      "english": "Sorry, could you say that again?",
      "use": "Polite clarification"
    },
    {
      "english": "Could you help me, please?",
      "use": "Universal opener · always add 'please'"
    },
    {
      "english": "Just looking, thank you.",
      "use": "Politely decline shop assistants"
    },
    {
      "english": "A single / return to [station], please.",
      "use": "Buying a train ticket"
    },
    {
      "english": "Cheers.",
      "use": "Means thank you AND goodbye · use freely"
    }
  ],
  "cheatSheet": {
    "title": "One-Page Cheat Sheet",
    "subtitle": "The single page to screenshot before your flight — every essential in one glance.",
    "emergency": [
      {
        "label": "999 / 112",
        "value": "Emergency"
      },
      {
        "label": "111",
        "value": "NHS advice"
      },
      {
        "label": "101",
        "value": "Non-emerg police"
      }
    ],
    "transport": [
      {
        "label": "£8.90",
        "value": "Daily cap zones 1–2"
      },
      {
        "label": "£1.75",
        "value": "Bus fare · hopper 60 min"
      },
      {
        "label": "Elizabeth",
        "value": "LHR to central 30 min"
      }
    ],
    "money": [
      {
        "label": "Contactless",
        "value": "Everywhere"
      },
      {
        "label": "Tap only",
        "value": "Never use FX booths"
      },
      {
        "label": "Tip 10–12.5%",
        "value": "Check service charge"
      }
    ],
    "apps": [
      {
        "name": "Citymapper",
        "use": "Navigation"
      },
      {
        "name": "Uber Boat",
        "use": "River"
      },
      {
        "name": "TfL Go",
        "use": "Official transport"
      }
    ],
    "topQrCodes": [
      {
        "name": "Heathrow T2/T3",
        "mapUrl": "https://www.google.com/maps/search/?api=1&query=Heathrow+Airport+T2"
      },
      {
        "name": "St Thomas' A&E",
        "mapUrl": "https://www.google.com/maps/search/?api=1&query=St+Thomas+Hospital+London"
      },
      {
        "name": "Buckingham Palace",
        "mapUrl": "https://www.google.com/maps/search/?api=1&query=Buckingham+Palace+London"
      },
      {
        "name": "British Museum",
        "mapUrl": "https://www.google.com/maps/search/?api=1&query=British+Museum+London"
      },
      {
        "name": "Tower of London",
        "mapUrl": "https://www.google.com/maps/search/?api=1&query=Tower+of+London"
      },
      {
        "name": "Borough Market",
        "mapUrl": "https://www.google.com/maps/search/?api=1&query=Borough+Market+London"
      },
      {
        "name": "The Shard",
        "mapUrl": "https://www.google.com/maps/search/?api=1&query=The+Shard+London"
      },
      {
        "name": "Camden Market",
        "mapUrl": "https://www.google.com/maps/search/?api=1&query=Camden+Market+London"
      }
    ]
  },
  "etiquette": [
    {
      "rule": "Stand on the right",
      "desc": "Escalators. Always. Left is for walking. Break this rule and you will be tutted at."
    },
    {
      "rule": "Queue religiously",
      "desc": "Britons queue for buses, coffee, taxis and toilets. Never skip. Ever."
    },
    {
      "rule": "Mind the gap",
      "desc": "And mind it out loud. That announcement is a national treasure."
    },
    {
      "rule": "Don't chat on the tube",
      "desc": "London's rush hour is a monastic silence. Save conversation for the pub."
    },
    {
      "rule": "Say please and thank you",
      "desc": "And 'sorry'. Twenty times a day. It is the entire operating system."
    },
    {
      "rule": "Keep your phone in your pocket",
      "desc": "On busy streets. Phone theft by moped is real. Use pockets or bags with zips."
    },
    {
      "rule": "Look right first",
      "desc": "Then left, then right again. Britain drives on the left."
    }
  ]
};
