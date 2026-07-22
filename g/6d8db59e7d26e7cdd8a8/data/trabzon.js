/**
 * DISCOVER Trabzon — 7-Day Black Sea Itinerary
 * Real place photos via Wikimedia Commons (CC-licensed)
 */
const PLAN = {
  "meta": {
    "city": "Trabzon",
    "country": "Turkey",
    "tagline": "Cliffside monasteries, alpine lakes and Black Sea culture — seven perfect days.",
    "badge": "Discover · 2026 Edition",
    "edition": "2026",
    "stats": {
      "chapters": 44,
      "qrCodes": "140+",
      "attractions": 16,
      "hotels": 8,
      "dining": 8,
      "days": 7
    },
    "theme": {
      "accent": "#0f766e",
      "accentSoft": "#ccfbf1",
      "accentDeep": "#115e59",
      "heroImage": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Trebisonda%2C_ponte_di_za%C4%9Fnos_01.jpg/960px-Trebisonda%2C_ponte_di_za%C4%9Fnos_01.jpg",
      "transitLabel": "Dolmuş",
      "tube": "#0f766e",
      "parks": "#059669",
      "river": "#0891b2",
      "gold": "#b8860b",
      "navy": "#1a2744"
    }
  },
  "welcome": {
    "editorLetter": "Trabzon is the Black Sea's best-kept secret — a port city where Ottoman mansions meet misty mountains, and every day trip reveals something extraordinary. Sümela Monastery clinging to a cliff. Uzungöl's mirror-still lake. Ayder Plateau's thermal springs. This seven-day companion follows the premium itinerary designed for discerning travellers who want every hour mapped and every QR code ready.\n\nEvery attraction, hotel and restaurant carries a scannable map link. Every day plan has a timeline, route QR and driving times. Rent a car for the highlands, walk the city centre, and let Trabzon unfold.",
    "howToUse": "Point your phone camera at any QR code and the location opens in Google Maps in one tap. Every website and booking link is also clickable in the PDF. Colour-coded day chapters make navigation effortless.\n\n— The Editors, Trabzon Bureau"
  },
  "essentials": {
    "currency": {
      "label": "₺ Turkish Lira",
      "note": "Cards accepted in hotels and restaurants. Carry cash for dolmuş and village stops."
    },
    "power": {
      "label": "Type C/F · 230V",
      "note": "European two-pin plug. Bring a universal adapter."
    },
    "sim": {
      "label": "eSIM or Turkcell",
      "note": "Turkcell and Vodafone at TZX airport. eSIM activates on landing Wi-Fi."
    },
    "language": {
      "label": "Turkish",
      "note": "English in hotels. Learn merhaba and teşekkürler — locals appreciate the effort."
    },
    "tipping": {
      "label": "10% or round up",
      "note": "Not always expected but appreciated in restaurants. Round up taxi fares."
    },
    "emergency": {
      "label": "112 · 155 · 110",
      "note": "All emergencies · Police · Fire."
    },
    "tapWater": {
      "label": "Generally safe",
      "note": "Bottled water preferred by visitors. Safe for brushing teeth."
    },
    "timezone": {
      "label": "TRT · UTC+3",
      "note": "No daylight saving — same time year-round."
    }
  },
  "arrival": [
    {
      "step": "01",
      "title": "Border",
      "desc": "Trabzon Airport (TZX) handles international and domestic flights. Have hotel address ready. e-Visa for most nationalities — apply online before travel."
    },
    {
      "step": "02",
      "title": "SIM / eSIM",
      "desc": "Activate your eSIM on airport Wi-Fi. Or buy Turkcell tourist SIM at arrivals (₺500 for 20GB)."
    },
    {
      "step": "03",
      "title": "Cash",
      "desc": "Withdraw ₺1,000–2,000 from a Ziraat or İş Bankası ATM. Village restaurants and dolmuş often prefer cash."
    },
    {
      "step": "04",
      "title": "Rent a car",
      "desc": "Essential for Days 2–5. Pick up at TZX — Avis, Europcar, local agencies. Automatic recommended for mountain roads."
    },
    {
      "step": "05",
      "title": "Taxi to city",
      "desc": "If not renting immediately: taxi to Meydan ₺300–400, 20 min. Havalimani shuttle ₺50."
    },
    {
      "step": "06",
      "title": "Hotel",
      "desc": "Check-in from 14:00. Hotels hold luggage from 10:00 — drop bags and explore Meydan."
    },
    {
      "step": "07",
      "title": "First meal",
      "desc": "Head to Beton Helva Kahvaltı for a full Black Sea breakfast. Then walk Meydan with a çay."
    }
  ],
  "packing": {
    "spring": {
      "months": "MAR–MAY",
      "temp": "8–18 °C · rain likely",
      "items": [
        "Waterproof jacket",
        "Layerable knit",
        "Walking boots",
        "Compact umbrella",
        "Sunscreen",
        "Binoculars for Sümela"
      ]
    },
    "summer": {
      "months": "JUN–AUG",
      "temp": "18–28 °C · humid coast",
      "items": [
        "Light layers",
        "Hiking shoes",
        "Sunscreen SPF 30",
        "Insect repellent",
        "Refillable bottle",
        "Warm layer for highlands"
      ]
    },
    "autumn": {
      "months": "SEP–NOV",
      "temp": "10–20 °C · golden light",
      "items": [
        "Trench coat",
        "Waterproof boots",
        "Umbrella",
        "Warm jumper",
        "Gloves for Ayder",
        "Camera for Uzungöl"
      ]
    },
    "winter": {
      "months": "DEC–FEB",
      "temp": "5–12 °C · snow in mountains",
      "items": [
        "Heavy coat",
        "Thermal base layer",
        "Waterproof boots",
        "Beanie + gloves",
        "Non-slip shoes for Sümela",
        "Hand warmers"
      ]
    }
  },
  "weatherTable": {
    "rows": [
      {
        "month": "Jan",
        "avgTemp": "5 / 11 °C",
        "rain": "55%",
        "sunset": "17:15",
        "crowds": "Low",
        "recommend": "Museums · indoor dining"
      },
      {
        "month": "Feb",
        "avgTemp": "5 / 11 °C",
        "rain": "50%",
        "sunset": "17:45",
        "crowds": "Low",
        "recommend": "City walks · tea houses"
      },
      {
        "month": "Mar",
        "avgTemp": "7 / 14 °C",
        "rain": "50%",
        "sunset": "18:30",
        "crowds": "Rising",
        "recommend": "Sümela reopens"
      },
      {
        "month": "Apr",
        "avgTemp": "10 / 17 °C",
        "rain": "55%",
        "sunset": "19:30",
        "crowds": "Medium",
        "recommend": "Botanical Garden"
      },
      {
        "month": "May",
        "avgTemp": "14 / 21 °C",
        "rain": "50%",
        "sunset": "20:15",
        "crowds": "Medium",
        "recommend": "Perfect for Uzungöl"
      },
      {
        "month": "Jun",
        "avgTemp": "18 / 25 °C",
        "rain": "45%",
        "sunset": "20:45",
        "crowds": "High",
        "recommend": "Ayder Plateau · book hotels"
      },
      {
        "month": "Jul",
        "avgTemp": "21 / 28 °C",
        "rain": "40%",
        "sunset": "20:30",
        "crowds": "Peak",
        "recommend": "Book Sümela early"
      },
      {
        "month": "Aug",
        "avgTemp": "21 / 28 °C",
        "rain": "45%",
        "sunset": "20:00",
        "crowds": "Peak",
        "recommend": "Highland escape"
      },
      {
        "month": "Sep",
        "avgTemp": "18 / 24 °C",
        "rain": "45%",
        "sunset": "19:15",
        "crowds": "Medium",
        "recommend": "Best month overall"
      },
      {
        "month": "Oct",
        "avgTemp": "14 / 20 °C",
        "rain": "55%",
        "sunset": "18:15",
        "crowds": "Medium",
        "recommend": "Autumn colours at Uzungöl"
      },
      {
        "month": "Nov",
        "avgTemp": "10 / 16 °C",
        "rain": "55%",
        "sunset": "17:00",
        "crowds": "Low",
        "recommend": "Cosy meyhane evenings"
      },
      {
        "month": "Dec",
        "avgTemp": "7 / 13 °C",
        "rain": "60%",
        "sunset": "16:45",
        "crowds": "Low",
        "recommend": "City museums · shopping"
      }
    ],
    "sweetSpot": "May and September deliver the best combination of clear mountain views, manageable crowds at Sümela, and comfortable hiking weather at Uzungöl and Ayder. July–August is magnificent but book hotels and car rental well ahead."
  },
  "transport": {
    "modes": [
      {
        "icon": "walk",
        "name": "Walk",
        "price": "Free",
        "desc": "Trabzon city centre — Meydan, museum, Zagnos Valley — is compact and walkable."
      },
      {
        "icon": "bus",
        "name": "Dolmuş",
        "price": "₺15–30",
        "desc": "Shared minibuses cover the city and coast. Ask the driver — they stop anywhere on route."
      },
      {
        "icon": "cab",
        "name": "Taxi",
        "price": "₺100–300",
        "desc": "Yellow taxis everywhere. Use BiTaksi app. Fixed rates to Boztepe and Akçaabat."
      },
      {
        "icon": "uber",
        "name": "BiTaksi / Uber",
        "price": "₺80–250",
        "desc": "App-based rides. Reliable for airport transfers and evening Boztepe runs."
      },
      {
        "icon": "cab",
        "name": "Car Rental",
        "price": "€30–60/day",
        "desc": "Essential for Sümela, Uzungöl and Ayder. Automatic recommended. Book at TZX."
      },
      {
        "icon": "bus",
        "name": "Organised Tours",
        "price": "€40–80",
        "desc": "Daily tours to Sümela and Uzungöl from Meydan agencies if you prefer not to drive."
      }
    ],
    "oysterTips": [
      {
        "title": "Rent a car for highlands",
        "desc": "Sümela, Uzungöl and Ayder are 1–2 hours from Trabzon. A rental car or organised day tour is the most convenient way to visit."
      },
      {
        "title": "Dolmuş in the city",
        "desc": "Minibuses from Meydan reach Akçaabat, Yomra and Boztepe. Pay in cash when you get off."
      },
      {
        "title": "Mountain road caution",
        "desc": "Roads to Ayder and Uzungöl are winding and narrow. Start early, fill the tank, and avoid night driving."
      },
      {
        "title": "Parking at Sümela",
        "desc": "Large car park at the valley entrance. Shuttle bus to the monastery gate — included in ticket."
      }
    ],
    "exit6Tip": "When you exit TZX airport, Trabzon Bay appears immediately to the north — the Black Sea stretching to the horizon. Stop, breathe the humid air, and remember: the mountains behind you hold Sümela."
  },
  "maps": {
    "overview": {
      "caption": "A schematic map — for exact directions, scan any QR code in this guide.",
      "markers": [
        {
          "name": "Sümela Monastery",
          "type": "attraction",
          "lat": 40.6893,
          "lng": 39.6583
        },
        {
          "name": "Uzungöl Lake",
          "type": "attraction",
          "lat": 40.6197,
          "lng": 40.2886
        },
        {
          "name": "Ayder Plateau",
          "type": "attraction",
          "lat": 40.9517,
          "lng": 41.0986
        },
        {
          "name": "Trabzon Museum",
          "type": "attraction",
          "lat": 41.0054,
          "lng": 39.7308
        },
        {
          "name": "Boztepe",
          "type": "attraction",
          "lat": 41.0128,
          "lng": 39.7089
        },
        {
          "name": "Sera Lake",
          "type": "attraction",
          "lat": 40.9633,
          "lng": 39.8833
        },
        {
          "name": "Meydan Square",
          "type": "district",
          "lat": 41.0028,
          "lng": 39.7167
        },
        {
          "name": "Radisson Blu Hotel Trabzon",
          "type": "hotel",
          "lat": 41.0128,
          "lng": 39.7089
        },
        {
          "name": "Zorlu Grand Hotel",
          "type": "hotel",
          "lat": 41.0028,
          "lng": 39.7167
        },
        {
          "name": "Cemilusta Akçaabat Köfte",
          "type": "dining",
          "lat": 41.0214,
          "lng": 39.5708
        },
        {
          "name": "Cephanelik Restaurant",
          "type": "dining",
          "lat": 41.0128,
          "lng": 39.7089
        }
      ]
    }
  },
  "attractions": [
    {
      "name": "Trabzon Museum",
      "address": "Kostaki Mansion · Zeytinlik Mah. · Ortahisar",
      "hours": "08:30–19:00 · closed Mon",
      "tube": "Meydan 5 min walk · dolmuş routes 101/102",
      "ticket": "₺60 adult · modest dress",
      "bestArrival": "10:00",
      "waitSummer": "10–20 min",
      "waitWinter": "0–10 min",
      "photoSpot": "From the garden — Kostaki Mansion façade and Black Sea stone.",
      "lens": "24–35mm",
      "tip": "Housed in a 1911 mansion — Ottoman and Byzantine artefacts tell Trabzon's story as a Silk Road port.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Trabzon%20Museum",
      "bookUrl": "https://www.google.com/maps/search/?api=1&query=Trabzon%20Museum",
      "bookText": "View on Map",
      "avgVisit": "1–1.5 hours",
      "crowd": {
        "morning": 3,
        "afternoon": 4,
        "evening": 2
      },
      "nearby": [
        {
          "name": "Meydan Square",
          "walk": "5 min"
        },
        {
          "name": "Zagnos Valley Park",
          "walk": "10 min"
        },
        {
          "name": "Boztepe",
          "walk": "15 min drive"
        }
      ],
      "nearbyCafes": "See dining chapter in this guide.",
      "nearbyRestaurants": "See dining chapter in this guide.",
      "nearbyTube": "Meydan 5 min walk · dolmuş routes 101/102",
      "nearbyToilets": "On-site or nearby cafés.",
      "nearbyAtm": "Ziraat Bank · İş Bankası · ATMs on Meydan",
      "didYouKnow": "Trabzon was the capital of the Empire of Trebizond — a Byzantine successor state that lasted until 1461.",
      "localSecret": "The ethnography floor has exquisite Black Sea costumes rarely photographed by tourists.",
      "instagram": {
        "sunset": "From the garden — Kostaki Mansion façade and Black Sea stone.",
        "sunrise": "From the garden — Kostaki Mansion façade and Black Sea stone.",
        "drone": "Check local regulations — monasteries and national parks may restrict drones",
        "settings": "f/8 · ISO 200 · 24–70mm"
      },
      "photos": {
        "hero": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Trabzon_museum.jpg/960px-Trabzon_museum.jpg",
        "detail": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Trabzon_Museum_0039.jpg/960px-Trabzon_Museum_0039.jpg",
        "photoSpot": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Trabzon_Museum_0043.jpg/960px-Trabzon_Museum_0043.jpg",
        "map": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Trabzon_Museum_0035.jpg/960px-Trabzon_Museum_0035.jpg",
        "heroPosition": "center 40%"
      },
      "seasonalPhotos": {
        "spring": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Trabzon_museum.jpg/960px-Trabzon_museum.jpg",
        "summer": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Trabzon_Museum_0039.jpg/960px-Trabzon_Museum_0039.jpg",
        "autumn": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Trabzon_Museum_0043.jpg/960px-Trabzon_Museum_0043.jpg",
        "christmas": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Trabzon_Museum_0035.jpg/960px-Trabzon_Museum_0035.jpg"
      }
    },
    {
      "name": "Meydan Square",
      "address": "Meydan · Ortahisar · city centre",
      "hours": "Always open · cafés 08:00–23:00",
      "tube": "All city dolmuş routes pass through Meydan",
      "ticket": "Free",
      "bestArrival": "11:30",
      "waitSummer": "0",
      "waitWinter": "0",
      "photoSpot": "From the fountain — street life, cafés and the old clock tower.",
      "lens": "35mm",
      "tip": "The beating heart of Trabzon. Start here for people-watching, shopping and your first Turkish tea of the day.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Meydan%20Square%20Trabzon",
      "bookUrl": "https://www.google.com/maps/search/?api=1&query=Meydan%20Square%20Trabzon",
      "bookText": "View on Map",
      "avgVisit": "45 min",
      "crowd": {
        "morning": 3,
        "afternoon": 4,
        "evening": 2
      },
      "nearby": [
        {
          "name": "Trabzon Museum",
          "walk": "5 min"
        },
        {
          "name": "Neşve Coffee",
          "walk": "3 min"
        },
        {
          "name": "Zagnos Valley Park",
          "walk": "10 min"
        }
      ],
      "nearbyCafes": "See dining chapter in this guide.",
      "nearbyRestaurants": "See dining chapter in this guide.",
      "nearbyTube": "All city dolmuş routes pass through Meydan",
      "nearbyToilets": "On-site or nearby cafés.",
      "nearbyAtm": "Ziraat Bank · İş Bankası · ATMs on Meydan",
      "didYouKnow": "Meydan has been Trabzon's commercial centre since Ottoman times — merchants from Persia and the Caucasus traded here.",
      "localSecret": "The side streets behind Meydan have the best local bakeries — follow the smell of fresh simit.",
      "instagram": {
        "sunset": "From the fountain — street life, cafés and the old clock tower.",
        "sunrise": "From the fountain — street life, cafés and the old clock tower.",
        "drone": "Check local regulations — monasteries and national parks may restrict drones",
        "settings": "f/8 · ISO 200 · 24–70mm"
      },
      "photos": {
        "hero": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Trabzon_Meydan.jpg/960px-Trabzon_Meydan.jpg",
        "detail": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Trabzon_Meydan_2.jpg/960px-Trabzon_Meydan_2.jpg",
        "photoSpot": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Trabzon_Meydan_Park_%281%29.jpg/960px-Trabzon_Meydan_Park_%281%29.jpg",
        "map": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Trabzon_Meydan_Park_%282%29.jpg/960px-Trabzon_Meydan_Park_%282%29.jpg",
        "heroPosition": "center 40%"
      },
      "seasonalPhotos": {
        "spring": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Trabzon_Meydan.jpg/960px-Trabzon_Meydan.jpg",
        "summer": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Trabzon_Meydan_2.jpg/960px-Trabzon_Meydan_2.jpg",
        "autumn": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Trabzon_Meydan_Park_%281%29.jpg/960px-Trabzon_Meydan_Park_%281%29.jpg",
        "christmas": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Trabzon_Meydan_Park_%282%29.jpg/960px-Trabzon_Meydan_Park_%282%29.jpg"
      }
    },
    {
      "name": "Zagnos Valley Park",
      "address": "Zagnos Vadisi · Ortahisar",
      "hours": "07:00–22:00",
      "tube": "Meydan 10 min walk",
      "ticket": "Free",
      "bestArrival": "15:00",
      "photoSpot": "Historic stone bridges over the stream — lush valley greenery.",
      "lens": "24–70mm",
      "tip": "A green corridor through the city with Ottoman bridges and walking trails. Perfect afternoon stroll after lunch.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Zagnos%20Valley%20Park%20Trabzon",
      "bookUrl": "https://www.google.com/maps/search/?api=1&query=Zagnos%20Valley%20Park%20Trabzon",
      "bookText": "View on Map",
      "avgVisit": "1 hour",
      "crowd": {
        "morning": 3,
        "afternoon": 4,
        "evening": 2
      },
      "nearby": [
        {
          "name": "Meydan Square",
          "walk": "10 min"
        },
        {
          "name": "Trabzon Museum",
          "walk": "12 min"
        },
        {
          "name": "Boztepe",
          "walk": "10 min drive"
        }
      ],
      "nearbyCafes": "See dining chapter in this guide.",
      "nearbyRestaurants": "See dining chapter in this guide.",
      "nearbyTube": "Meydan 10 min walk",
      "nearbyToilets": "On-site or nearby cafés.",
      "nearbyAtm": "Ziraat Bank · İş Bankası · ATMs on Meydan",
      "didYouKnow": "The valley was once the city's defensive moat — now reclaimed as Trabzon's favourite urban park.",
      "localSecret": "Follow the stream upstream for quieter paths where locals jog at sunset.",
      "instagram": {
        "sunset": "Historic stone bridges over the stream — lush valley greenery.",
        "sunrise": "Historic stone bridges over the stream — lush valley greenery.",
        "drone": "Check local regulations — monasteries and national parks may restrict drones",
        "settings": "f/8 · ISO 200 · 24–70mm"
      },
      "photos": {
        "hero": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Zagnos_Valley_Park_in_Trabzon_%281%29.jpg/960px-Zagnos_Valley_Park_in_Trabzon_%281%29.jpg",
        "detail": "https://upload.wikimedia.org/wikipedia/commons/9/97/Zagnos_park_and_Trabzon_city_walls.jpg",
        "photoSpot": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Trabzon_Zagnos_Park%C4%B1_olu%C5%9Fturulmadan_%C3%B6nce_0123.jpg/960px-Trabzon_Zagnos_Park%C4%B1_olu%C5%9Fturulmadan_%C3%B6nce_0123.jpg",
        "map": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Trabzon_Zagnos_Park%C4%B1_olu%C5%9Fturulmadan_%C3%B6nce_0126.jpg/960px-Trabzon_Zagnos_Park%C4%B1_olu%C5%9Fturulmadan_%C3%B6nce_0126.jpg",
        "heroPosition": "center 40%"
      },
      "seasonalPhotos": {
        "spring": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Zagnos_Valley_Park_in_Trabzon_%281%29.jpg/960px-Zagnos_Valley_Park_in_Trabzon_%281%29.jpg",
        "summer": "https://upload.wikimedia.org/wikipedia/commons/9/97/Zagnos_park_and_Trabzon_city_walls.jpg",
        "autumn": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Trabzon_Zagnos_Park%C4%B1_olu%C5%9Fturulmadan_%C3%B6nce_0123.jpg/960px-Trabzon_Zagnos_Park%C4%B1_olu%C5%9Fturulmadan_%C3%B6nce_0123.jpg",
        "christmas": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Trabzon_Zagnos_Park%C4%B1_olu%C5%9Fturulmadan_%C3%B6nce_0126.jpg/960px-Trabzon_Zagnos_Park%C4%B1_olu%C5%9Fturulmadan_%C3%B6nce_0126.jpg"
      }
    },
    {
      "name": "Boztepe",
      "address": "Boztepe Hill · panoramic viewpoint",
      "hours": "Always open · tea gardens until 23:00",
      "tube": "Taxi from Meydan 10 min · dolmuş to Boztepe",
      "ticket": "Free · tea ₺30–50",
      "bestArrival": "17:00",
      "waitSummer": "0",
      "waitWinter": "0",
      "photoSpot": "From the tea terrace — full panoramic sweep of Trabzon and the Black Sea.",
      "lens": "16–35mm wide",
      "tip": "Order çay on the terrace and watch the city turn gold at sunset. The Radisson Blu sits on this hill.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Boztepe%20Trabzon",
      "bookUrl": "https://www.google.com/maps/search/?api=1&query=Boztepe%20Trabzon",
      "bookText": "View on Map",
      "avgVisit": "1 hour",
      "crowd": {
        "morning": 2,
        "afternoon": 3,
        "evening": 5
      },
      "nearby": [
        {
          "name": "Radisson Blu Hotel Trabzon",
          "walk": "2 min"
        },
        {
          "name": "Cephanelik Restaurant",
          "walk": "5 min drive"
        },
        {
          "name": "Meydan Square",
          "walk": "15 min drive"
        }
      ],
      "nearbyCafes": "See dining chapter in this guide.",
      "nearbyRestaurants": "See dining chapter in this guide.",
      "nearbyTube": "Taxi from Meydan 10 min · dolmuş to Boztepe",
      "nearbyToilets": "On-site or nearby cafés.",
      "nearbyAtm": "Ziraat Bank · İş Bankası · ATMs on Meydan",
      "didYouKnow": "Boztepe means \"Grey Hill\" — Ottoman travellers used it as a lookout over the harbour below.",
      "localSecret": "Weekday sunsets are quieter than weekends — arrive by 16:45 for the best terrace table.",
      "instagram": {
        "sunset": "From the tea terrace — full panoramic sweep of Trabzon and the Black Sea.",
        "sunrise": "From the tea terrace — full panoramic sweep of Trabzon and the Black Sea.",
        "drone": "Check local regulations — monasteries and national parks may restrict drones",
        "settings": "f/8 · ISO 200 · 24–70mm"
      },
      "photos": {
        "hero": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Boztepe%2C_Trabzon_-_panoramio.jpg/960px-Boztepe%2C_Trabzon_-_panoramio.jpg",
        "detail": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Boztepe%2C_Trabzon_-_panoramio_%281%29.jpg/960px-Boztepe%2C_Trabzon_-_panoramio_%281%29.jpg",
        "photoSpot": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Boztepe%2C_Trabzon_-_panoramio_%282%29.jpg/960px-Boztepe%2C_Trabzon_-_panoramio_%282%29.jpg",
        "map": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Boztepe%2C_Trabzon.jpg/960px-Boztepe%2C_Trabzon.jpg",
        "heroPosition": "center 40%"
      },
      "seasonalPhotos": {
        "spring": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Boztepe%2C_Trabzon_-_panoramio.jpg/960px-Boztepe%2C_Trabzon_-_panoramio.jpg",
        "summer": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Boztepe%2C_Trabzon_-_panoramio_%281%29.jpg/960px-Boztepe%2C_Trabzon_-_panoramio_%281%29.jpg",
        "autumn": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Boztepe%2C_Trabzon_-_panoramio_%282%29.jpg/960px-Boztepe%2C_Trabzon_-_panoramio_%282%29.jpg",
        "christmas": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Boztepe%2C_Trabzon.jpg/960px-Boztepe%2C_Trabzon.jpg"
      }
    },
    {
      "name": "Sümela Monastery",
      "address": "Maçka · Altındere Valley · 46 km south",
      "hours": "09:00–18:00 · closed Mon in winter",
      "tube": "1 hour drive from Trabzon · tours daily",
      "ticket": "₺150 adult · book online in peak season",
      "bestArrival": "09:30",
      "waitSummer": "30–60 min",
      "waitWinter": "10–20 min",
      "photoSpot": "From the valley floor — monastery carved into the cliff face, full frame.",
      "lens": "70–200mm from valley · 24mm at entrance",
      "tip": "Allow three hours. The final walk up is steep — wear proper shoes. One of Turkey's most dramatic sights.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=S%C3%BCmela%20Monastery%20Trabzon",
      "bookUrl": "https://muze.gov.tr/muze-detay?SectionId=SUM01&DistId=SUM",
      "bookText": "View on Map",
      "avgVisit": "3 hours",
      "crowd": {
        "morning": 3,
        "afternoon": 5,
        "evening": 2
      },
      "nearby": [
        {
          "name": "Altındere National Park",
          "walk": "5 min"
        },
        {
          "name": "Hamsiköy",
          "walk": "20 min drive"
        }
      ],
      "nearbyCafes": "See dining chapter in this guide.",
      "nearbyRestaurants": "See dining chapter in this guide.",
      "nearbyTube": "1 hour drive from Trabzon · tours daily",
      "nearbyToilets": "On-site or nearby cafés.",
      "nearbyAtm": "Ziraat Bank · İş Bankası · ATMs on Meydan",
      "didYouKnow": "Founded in AD 386, Sümela was built into a cliff 1,200 m above sea level — monks reached it by rope ladder.",
      "localSecret": "The lower viewpoint before the final climb gives the classic postcard shot without the crowds at the top.",
      "instagram": {
        "sunset": "From the valley floor — monastery carved into the cliff face, full frame.",
        "sunrise": "From the valley floor — monastery carved into the cliff face, full frame.",
        "drone": "Check local regulations — monasteries and national parks may restrict drones",
        "settings": "f/8 · ISO 200 · 24–70mm"
      },
      "photos": {
        "hero": "https://upload.wikimedia.org/wikipedia/commons/4/44/Sumela_Monastery_%282674159860%29.jpg",
        "detail": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/S%C3%BCmela_Manast%C4%B1r%C4%B1_2014-1.jpg/960px-S%C3%BCmela_Manast%C4%B1r%C4%B1_2014-1.jpg",
        "photoSpot": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/S%C3%BCmela_Manast%C4%B1r%C4%B1_2014-2.jpg/960px-S%C3%BCmela_Manast%C4%B1r%C4%B1_2014-2.jpg",
        "map": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/S%C3%BCmela_Manast%C4%B1r%C4%B1_2014-5.jpg/960px-S%C3%BCmela_Manast%C4%B1r%C4%B1_2014-5.jpg",
        "heroPosition": "center 40%"
      },
      "seasonalPhotos": {
        "spring": "https://upload.wikimedia.org/wikipedia/commons/4/44/Sumela_Monastery_%282674159860%29.jpg",
        "summer": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/S%C3%BCmela_Manast%C4%B1r%C4%B1_2014-1.jpg/960px-S%C3%BCmela_Manast%C4%B1r%C4%B1_2014-1.jpg",
        "autumn": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/S%C3%BCmela_Manast%C4%B1r%C4%B1_2014-2.jpg/960px-S%C3%BCmela_Manast%C4%B1r%C4%B1_2014-2.jpg",
        "christmas": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/S%C3%BCmela_Manast%C4%B1r%C4%B1_2014-5.jpg/960px-S%C3%BCmela_Manast%C4%B1r%C4%B1_2014-5.jpg"
      }
    },
    {
      "name": "Altındere National Park",
      "address": "Maçka · Altındere Valley · near Sümela",
      "hours": "08:00–19:00",
      "tube": "1 hour drive from Trabzon · same route as Sümela",
      "ticket": "Included with Sümela ticket",
      "bestArrival": "15:00",
      "photoSpot": "River trails through ancient forest — mossy stones and mountain stream.",
      "lens": "24–70mm",
      "tip": "Easy walking trails and river views after Sümela. Pack a light jacket — the valley is cooler than the coast.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Alt%C4%B1ndere%20National%20Park%20Trabzon",
      "bookUrl": "https://www.google.com/maps/search/?api=1&query=Alt%C4%B1ndere%20National%20Park%20Trabzon",
      "bookText": "View on Map",
      "avgVisit": "1–2 hours",
      "crowd": {
        "morning": 3,
        "afternoon": 4,
        "evening": 2
      },
      "nearby": [
        {
          "name": "Sümela Monastery",
          "walk": "5 min"
        },
        {
          "name": "Hamsiköy",
          "walk": "20 min drive"
        }
      ],
      "nearbyCafes": "See dining chapter in this guide.",
      "nearbyRestaurants": "See dining chapter in this guide.",
      "nearbyTube": "1 hour drive from Trabzon · same route as Sümela",
      "nearbyToilets": "On-site or nearby cafés.",
      "nearbyAtm": "Ziraat Bank · İş Bankası · ATMs on Meydan",
      "didYouKnow": "Altındere protects one of the Black Sea's last pristine river valleys — home to brown bears and wild boar.",
      "localSecret": "The riverside path downstream from the monastery car park is shaded and rarely crowded.",
      "instagram": {
        "sunset": "River trails through ancient forest — mossy stones and mountain stream.",
        "sunrise": "River trails through ancient forest — mossy stones and mountain stream.",
        "drone": "Check local regulations — monasteries and national parks may restrict drones",
        "settings": "f/8 · ISO 200 · 24–70mm"
      },
      "photos": {
        "hero": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Alt%C4%B1ndere_Valley_National_Park_01.jpg/960px-Alt%C4%B1ndere_Valley_National_Park_01.jpg",
        "detail": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Alt%C4%B1ndere_Valley_National_Park_02.jpg/960px-Alt%C4%B1ndere_Valley_National_Park_02.jpg",
        "photoSpot": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Alt%C4%B1ndere_Valley_National_Park_03.jpg/960px-Alt%C4%B1ndere_Valley_National_Park_03.jpg",
        "map": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Alt%C4%B1ndere_Valley_National_Park_06.jpg/960px-Alt%C4%B1ndere_Valley_National_Park_06.jpg",
        "heroPosition": "center 40%"
      },
      "seasonalPhotos": {
        "spring": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Alt%C4%B1ndere_Valley_National_Park_01.jpg/960px-Alt%C4%B1ndere_Valley_National_Park_01.jpg",
        "summer": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Alt%C4%B1ndere_Valley_National_Park_02.jpg/960px-Alt%C4%B1ndere_Valley_National_Park_02.jpg",
        "autumn": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Alt%C4%B1ndere_Valley_National_Park_03.jpg/960px-Alt%C4%B1ndere_Valley_National_Park_03.jpg",
        "christmas": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Alt%C4%B1ndere_Valley_National_Park_06.jpg/960px-Alt%C4%B1ndere_Valley_National_Park_06.jpg"
      }
    },
    {
      "name": "Uzungöl Lake",
      "address": "Çaykara · Uzungöl · 99 km south",
      "hours": "Always open · lakeside cafés 08:00–22:00",
      "tube": "1.5 hour drive from Trabzon · daily tours",
      "ticket": "Free · parking ₺50",
      "bestArrival": "10:00",
      "waitSummer": "0",
      "waitWinter": "0",
      "photoSpot": "From the lakeside path — mosque reflection on still water with forested peaks.",
      "lens": "16–35mm",
      "tip": "Walk the full lake circuit (about 90 min). Visit tea plantations on the slopes above for mountain views.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Uzung%C3%B6l%20Lake%20Trabzon",
      "bookUrl": "https://www.google.com/maps/search/?api=1&query=Uzung%C3%B6l%20Lake%20Trabzon",
      "bookText": "View on Map",
      "avgVisit": "3–4 hours",
      "crowd": {
        "morning": 3,
        "afternoon": 4,
        "evening": 2
      },
      "nearby": [
        {
          "name": "İnan Kardeşler Restaurant",
          "walk": "5 min"
        }
      ],
      "nearbyCafes": "See dining chapter in this guide.",
      "nearbyRestaurants": "See dining chapter in this guide.",
      "nearbyTube": "1.5 hour drive from Trabzon · daily tours",
      "nearbyToilets": "On-site or nearby cafés.",
      "nearbyAtm": "Ziraat Bank · İş Bankası · ATMs on Meydan",
      "didYouKnow": "Uzungöl means \"Long Lake\" — a landslide dammed the stream and created this alpine jewel at 1,090 m.",
      "localSecret": "Walk counter-clockwise around the lake — the eastern shore has fewer souvenir stalls and better light.",
      "instagram": {
        "sunset": "From the lakeside path — mosque reflection on still water with forested peaks.",
        "sunrise": "From the lakeside path — mosque reflection on still water with forested peaks.",
        "drone": "Check local regulations — monasteries and national parks may restrict drones",
        "settings": "f/8 · ISO 200 · 24–70mm"
      },
      "photos": {
        "hero": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Uzung%C3%B6l_lake_and_town.jpg/960px-Uzung%C3%B6l_lake_and_town.jpg",
        "detail": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Uzung%C3%B6l_08.jpg/960px-Uzung%C3%B6l_08.jpg",
        "photoSpot": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Uzung%C3%B6l_12.jpg/960px-Uzung%C3%B6l_12.jpg",
        "map": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Uzung%C3%B6l_14.jpg/960px-Uzung%C3%B6l_14.jpg",
        "heroPosition": "center 40%"
      },
      "seasonalPhotos": {
        "spring": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Uzung%C3%B6l_lake_and_town.jpg/960px-Uzung%C3%B6l_lake_and_town.jpg",
        "summer": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Uzung%C3%B6l_08.jpg/960px-Uzung%C3%B6l_08.jpg",
        "autumn": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Uzung%C3%B6l_12.jpg/960px-Uzung%C3%B6l_12.jpg",
        "christmas": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Uzung%C3%B6l_14.jpg/960px-Uzung%C3%B6l_14.jpg"
      }
    },
    {
      "name": "Ayder Plateau",
      "address": "Çamlıhemşin · Rize province · 2 hr from Trabzon",
      "hours": "Always open · restaurants 09:00–21:00",
      "tube": "2 hour drive · winding mountain road",
      "ticket": "Free · zipline & hot springs extra",
      "bestArrival": "Morning",
      "photoSpot": "Gelin Tülü Waterfall with plateau mist — classic Karadeniz highland scene.",
      "lens": "24–70mm",
      "tip": "Combine Gelin Tülü Waterfall, mountain lunch, zipline and hot springs in one long day. Start early.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Ayder%20Plateau%20Trabzon",
      "bookUrl": "https://www.google.com/maps/search/?api=1&query=Ayder%20Plateau%20Trabzon",
      "bookText": "View on Map",
      "avgVisit": "Full day",
      "crowd": {
        "morning": 3,
        "afternoon": 4,
        "evening": 2
      },
      "nearby": [
        {
          "name": "Gelin Tülü Waterfall",
          "walk": "10 min drive"
        }
      ],
      "nearbyCafes": "See dining chapter in this guide.",
      "nearbyRestaurants": "See dining chapter in this guide.",
      "nearbyTube": "2 hour drive · winding mountain road",
      "nearbyToilets": "On-site or nearby cafés.",
      "nearbyAtm": "Ziraat Bank · İş Bankası · ATMs on Meydan",
      "didYouKnow": "Ayder sits at 1,350 m in the Kaçkar Mountains — famous for its thermal springs and wooden plateau architecture.",
      "localSecret": "The hot springs are busiest after 16:00 — soak at lunch time when tour groups are eating.",
      "instagram": {
        "sunset": "Gelin Tülü Waterfall with plateau mist — classic Karadeniz highland scene.",
        "sunrise": "Gelin Tülü Waterfall with plateau mist — classic Karadeniz highland scene.",
        "drone": "Check local regulations — monasteries and national parks may restrict drones",
        "settings": "f/8 · ISO 200 · 24–70mm"
      },
      "photos": {
        "hero": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Ayder_Yaylas%C4%B1_-_panoramio.jpg/960px-Ayder_Yaylas%C4%B1_-_panoramio.jpg",
        "detail": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Ayder%2C_August_2019_%281%29.jpg/960px-Ayder%2C_August_2019_%281%29.jpg",
        "photoSpot": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Ayder%2C_August_2019_%282%29.jpg/960px-Ayder%2C_August_2019_%282%29.jpg",
        "map": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Ayder%2C_August_2019_%283%29.jpg/960px-Ayder%2C_August_2019_%283%29.jpg",
        "heroPosition": "center 40%"
      },
      "seasonalPhotos": {
        "spring": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Ayder_Yaylas%C4%B1_-_panoramio.jpg/960px-Ayder_Yaylas%C4%B1_-_panoramio.jpg",
        "summer": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Ayder%2C_August_2019_%281%29.jpg/960px-Ayder%2C_August_2019_%281%29.jpg",
        "autumn": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Ayder%2C_August_2019_%282%29.jpg/960px-Ayder%2C_August_2019_%282%29.jpg",
        "christmas": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Ayder%2C_August_2019_%283%29.jpg/960px-Ayder%2C_August_2019_%283%29.jpg"
      }
    },
    {
      "name": "Gelin Tülü Waterfall",
      "address": "Ayder Plateau · Çamlıhemşin",
      "hours": "08:00–18:00",
      "tube": "2 hour drive from Trabzon via Ayder",
      "ticket": "₺30",
      "bestArrival": "11:00",
      "photoSpot": "From the bridge — waterfall cascading through lush green canyon.",
      "lens": "24mm · polarising filter",
      "tip": "Stop here on the way to or from Ayder Plateau. The name means \"Bridal Veil\" — the mist catches the light beautifully.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Gelin%20T%C3%BCl%C3%BC%20Waterfall%20Trabzon",
      "bookUrl": "https://www.google.com/maps/search/?api=1&query=Gelin%20T%C3%BCl%C3%BC%20Waterfall%20Trabzon",
      "bookText": "View on Map",
      "avgVisit": "45 min",
      "crowd": {
        "morning": 3,
        "afternoon": 4,
        "evening": 2
      },
      "nearby": [
        {
          "name": "Ayder Plateau",
          "walk": "10 min drive"
        }
      ],
      "nearbyCafes": "See dining chapter in this guide.",
      "nearbyRestaurants": "See dining chapter in this guide.",
      "nearbyTube": "2 hour drive from Trabzon via Ayder",
      "nearbyToilets": "On-site or nearby cafés.",
      "nearbyAtm": "Ziraat Bank · İş Bankası · ATMs on Meydan",
      "didYouKnow": "Local legend says the waterfall was a bridal veil left by a fairy — hence the poetic name.",
      "localSecret": "Visit after rain for maximum flow — the veil effect is most dramatic in spring and autumn.",
      "instagram": {
        "sunset": "From the bridge — waterfall cascading through lush green canyon.",
        "sunrise": "From the bridge — waterfall cascading through lush green canyon.",
        "drone": "Check local regulations — monasteries and national parks may restrict drones",
        "settings": "f/8 · ISO 200 · 24–70mm"
      },
      "photos": {
        "hero": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Gelin_Tulu_Waterfall.jpg/960px-Gelin_Tulu_Waterfall.jpg",
        "detail": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Gelint%C3%BCl%C3%BC_Waterfall.jpg/960px-Gelint%C3%BCl%C3%BC_Waterfall.jpg",
        "photoSpot": "https://upload.wikimedia.org/wikipedia/commons/d/d2/Waterfalls_ayder_rize.jpg",
        "map": "https://upload.wikimedia.org/wikipedia/commons/2/22/-ayder_-turkey_-trabzon_-waterfalls_-nature_%2814251987354%29.jpg",
        "heroPosition": "center 40%"
      },
      "seasonalPhotos": {
        "spring": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Gelin_Tulu_Waterfall.jpg/960px-Gelin_Tulu_Waterfall.jpg",
        "summer": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Gelint%C3%BCl%C3%BC_Waterfall.jpg/960px-Gelint%C3%BCl%C3%BC_Waterfall.jpg",
        "autumn": "https://upload.wikimedia.org/wikipedia/commons/d/d2/Waterfalls_ayder_rize.jpg",
        "christmas": "https://upload.wikimedia.org/wikipedia/commons/2/22/-ayder_-turkey_-trabzon_-waterfalls_-nature_%2814251987354%29.jpg"
      }
    },
    {
      "name": "Sera Lake",
      "address": "Yomra · 12 km east of Trabzon",
      "hours": "Always open · boat rides 09:00–19:00",
      "tube": "20 min drive · taxi ₺200",
      "ticket": "Free · boat ₺100–150",
      "bestArrival": "09:00",
      "photoSpot": "From the lakeside promenade — calm water with mountain backdrop at sunrise.",
      "lens": "24–70mm",
      "tip": "Morning boat rides are calmest. Lakeside cafés serve fresh fish — combine with Akçaabat in the afternoon.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Sera%20Lake%20Trabzon",
      "bookUrl": "https://www.google.com/maps/search/?api=1&query=Sera%20Lake%20Trabzon",
      "bookText": "View on Map",
      "avgVisit": "2 hours",
      "crowd": {
        "morning": 3,
        "afternoon": 4,
        "evening": 2
      },
      "nearby": [
        {
          "name": "Akçaabat",
          "walk": "15 min drive"
        }
      ],
      "nearbyCafes": "See dining chapter in this guide.",
      "nearbyRestaurants": "See dining chapter in this guide.",
      "nearbyTube": "20 min drive · taxi ₺200",
      "nearbyToilets": "On-site or nearby cafés.",
      "nearbyAtm": "Ziraat Bank · İş Bankası · ATMs on Meydan",
      "didYouKnow": "Sera is a natural lagoon separated from the Black Sea by a thin sandbar — unique on this coast.",
      "localSecret": "The east shore café strip is quieter before 10:00 — best for photography and a peaceful breakfast.",
      "instagram": {
        "sunset": "From the lakeside promenade — calm water with mountain backdrop at sunrise.",
        "sunrise": "From the lakeside promenade — calm water with mountain backdrop at sunrise.",
        "drone": "Check local regulations — monasteries and national parks may restrict drones",
        "settings": "f/8 · ISO 200 · 24–70mm"
      },
      "photos": {
        "hero": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Sera_G%C3%B6l%C3%BC.._-_panoramio.jpg/960px-Sera_G%C3%B6l%C3%BC.._-_panoramio.jpg",
        "detail": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Sera_G%C3%B6l%C3%BC.jpg/960px-Sera_G%C3%B6l%C3%BC.jpg",
        "photoSpot": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Sera_G%C3%B6l%C3%BC%27nde_Tur.jpg/960px-Sera_G%C3%B6l%C3%BC%27nde_Tur.jpg",
        "map": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Sera_G%C3%B6l%C3%BC_Turu.jpg/960px-Sera_G%C3%B6l%C3%BC_Turu.jpg",
        "heroPosition": "center 40%"
      },
      "seasonalPhotos": {
        "spring": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Sera_G%C3%B6l%C3%BC.._-_panoramio.jpg/960px-Sera_G%C3%B6l%C3%BC.._-_panoramio.jpg",
        "summer": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Sera_G%C3%B6l%C3%BC.jpg/960px-Sera_G%C3%B6l%C3%BC.jpg",
        "autumn": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Sera_G%C3%B6l%C3%BC%27nde_Tur.jpg/960px-Sera_G%C3%B6l%C3%BC%27nde_Tur.jpg",
        "christmas": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Sera_G%C3%B6l%C3%BC_Turu.jpg/960px-Sera_G%C3%B6l%C3%BC_Turu.jpg"
      }
    },
    {
      "name": "Akçaabat",
      "address": "Akçaabat district · 15 km west",
      "hours": "Always open · köfte restaurants 11:00–22:00",
      "tube": "20 min drive · dolmuş from Meydan",
      "ticket": "Free",
      "bestArrival": "15:00",
      "photoSpot": "Waterfront promenade at sunset — fishing boats and Black Sea horizon.",
      "lens": "35mm",
      "tip": "Famous for köfte meatballs and local markets. Combine with Sera Lake for a relaxed Day 5.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Ak%C3%A7aabat%20Trabzon",
      "bookUrl": "https://www.google.com/maps/search/?api=1&query=Ak%C3%A7aabat%20Trabzon",
      "bookText": "View on Map",
      "avgVisit": "2–3 hours",
      "crowd": {
        "morning": 3,
        "afternoon": 4,
        "evening": 2
      },
      "nearby": [
        {
          "name": "Cemilusta Akçaabat Köfte",
          "walk": "5 min"
        },
        {
          "name": "DoubleTree by Hilton Trabzon",
          "walk": "5 min"
        }
      ],
      "nearbyCafes": "See dining chapter in this guide.",
      "nearbyRestaurants": "See dining chapter in this guide.",
      "nearbyTube": "20 min drive · dolmuş from Meydan",
      "nearbyToilets": "On-site or nearby cafés.",
      "nearbyAtm": "Ziraat Bank · İş Bankası · ATMs on Meydan",
      "didYouKnow": "Akçaabat köfte has protected geographical status — the recipe uses a specific blend of lamb and beef.",
      "localSecret": "The Tuesday market has the best local honey and mountain herbs at half tourist prices.",
      "instagram": {
        "sunset": "Waterfront promenade at sunset — fishing boats and Black Sea horizon.",
        "sunrise": "Waterfront promenade at sunset — fishing boats and Black Sea horizon.",
        "drone": "Check local regulations — monasteries and national parks may restrict drones",
        "settings": "f/8 · ISO 200 · 24–70mm"
      },
      "photos": {
        "hero": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Ortamahalle.jpg/960px-Ortamahalle.jpg",
        "detail": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Ak%C3%A7aabat01_-_panoramio.jpg/960px-Ak%C3%A7aabat01_-_panoramio.jpg",
        "photoSpot": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Trabzon_Ak%C3%A7aabat.jpg/960px-Trabzon_Ak%C3%A7aabat.jpg",
        "map": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/61300_Mersin-Ak%C3%A7aabat-Trabzon%2C_Turkey_-_panoramio.jpg/960px-61300_Mersin-Ak%C3%A7aabat-Trabzon%2C_Turkey_-_panoramio.jpg",
        "heroPosition": "center 40%"
      },
      "seasonalPhotos": {
        "spring": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Ortamahalle.jpg/960px-Ortamahalle.jpg",
        "summer": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Ak%C3%A7aabat01_-_panoramio.jpg/960px-Ak%C3%A7aabat01_-_panoramio.jpg",
        "autumn": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Trabzon_Ak%C3%A7aabat.jpg/960px-Trabzon_Ak%C3%A7aabat.jpg",
        "christmas": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/61300_Mersin-Ak%C3%A7aabat-Trabzon%2C_Turkey_-_panoramio.jpg/960px-61300_Mersin-Ak%C3%A7aabat-Trabzon%2C_Turkey_-_panoramio.jpg"
      }
    },
    {
      "name": "Trabzon Botanical Garden",
      "address": "Ortahisar · Ziraat Fakültesi campus",
      "hours": "08:00–17:00 · closed Sun",
      "tube": "Taxi from Meydan 10 min",
      "ticket": "₺20",
      "bestArrival": "10:00",
      "photoSpot": "Rose garden and Black Sea native species — peaceful green escape.",
      "lens": "50–85mm for flowers",
      "tip": "A calm Day 6 morning before Atatürk Pavilion and the aquarium. Bring insect repellent in summer.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Trabzon%20Botanical%20Garden",
      "bookUrl": "https://www.google.com/maps/search/?api=1&query=Trabzon%20Botanical%20Garden",
      "bookText": "View on Map",
      "avgVisit": "1.5 hours",
      "crowd": {
        "morning": 3,
        "afternoon": 4,
        "evening": 2
      },
      "nearby": [
        {
          "name": "Atatürk Pavilion",
          "walk": "10 min drive"
        },
        {
          "name": "Trabzon Aquarium",
          "walk": "15 min drive"
        }
      ],
      "nearbyCafes": "See dining chapter in this guide.",
      "nearbyRestaurants": "See dining chapter in this guide.",
      "nearbyTube": "Taxi from Meydan 10 min",
      "nearbyToilets": "On-site or nearby cafés.",
      "nearbyAtm": "Ziraat Bank · İş Bankası · ATMs on Meydan",
      "didYouKnow": "The garden preserves hundreds of Black Sea plant species — many found nowhere else in Turkey.",
      "localSecret": "The upper terrace has a bench with a hidden view over the city — ask staff for directions.",
      "instagram": {
        "sunset": "Rose garden and Black Sea native species — peaceful green escape.",
        "sunrise": "Rose garden and Black Sea native species — peaceful green escape.",
        "drone": "Check local regulations — monasteries and national parks may restrict drones",
        "settings": "f/8 · ISO 200 · 24–70mm"
      },
      "photos": {
        "hero": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Ye%C5%9Fillikler_Ard%C4%B1nda_Sera_G%C3%B6l%C3%BC.jpg/960px-Ye%C5%9Fillikler_Ard%C4%B1nda_Sera_G%C3%B6l%C3%BC.jpg",
        "detail": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Sera_G%C3%B6l%C3%BC_ve_Kaz_G%C3%BCzelli%C4%9Fi.jpg/960px-Sera_G%C3%B6l%C3%BC_ve_Kaz_G%C3%BCzelli%C4%9Fi.jpg",
        "photoSpot": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Sera_G%C3%B6l%C3%BC_Ak%C3%A7aabat_Trabzon.jpg/960px-Sera_G%C3%B6l%C3%BC_Ak%C3%A7aabat_Trabzon.jpg",
        "map": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Seralake02.jpg/960px-Seralake02.jpg",
        "heroPosition": "center 40%"
      },
      "seasonalPhotos": {
        "spring": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Ye%C5%9Fillikler_Ard%C4%B1nda_Sera_G%C3%B6l%C3%BC.jpg/960px-Ye%C5%9Fillikler_Ard%C4%B1nda_Sera_G%C3%B6l%C3%BC.jpg",
        "summer": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Sera_G%C3%B6l%C3%BC_ve_Kaz_G%C3%BCzelli%C4%9Fi.jpg/960px-Sera_G%C3%B6l%C3%BC_ve_Kaz_G%C3%BCzelli%C4%9Fi.jpg",
        "autumn": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Sera_G%C3%B6l%C3%BC_Ak%C3%A7aabat_Trabzon.jpg/960px-Sera_G%C3%B6l%C3%BC_Ak%C3%A7aabat_Trabzon.jpg",
        "christmas": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Seralake02.jpg/960px-Seralake02.jpg"
      }
    },
    {
      "name": "Atatürk Pavilion",
      "address": "Soğuksu · Ortahisar · hilltop mansion",
      "hours": "09:00–17:00 · closed Mon",
      "tube": "Taxi from Meydan 10 min",
      "ticket": "₺40",
      "bestArrival": "11:00",
      "photoSpot": "White pavilion against green gardens — elegant Ottoman-era architecture.",
      "lens": "35mm",
      "tip": "Mustafa Kemal Atatürk stayed here — the mansion is preserved as a museum with period furnishings.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Atat%C3%BCrk%20Pavilion%20Trabzon",
      "bookUrl": "https://www.google.com/maps/search/?api=1&query=Atat%C3%BCrk%20Pavilion%20Trabzon",
      "bookText": "View on Map",
      "avgVisit": "45 min",
      "crowd": {
        "morning": 3,
        "afternoon": 4,
        "evening": 2
      },
      "nearby": [
        {
          "name": "Trabzon Botanical Garden",
          "walk": "10 min drive"
        },
        {
          "name": "Boztepe",
          "walk": "5 min drive"
        }
      ],
      "nearbyCafes": "See dining chapter in this guide.",
      "nearbyRestaurants": "See dining chapter in this guide.",
      "nearbyTube": "Taxi from Meydan 10 min",
      "nearbyToilets": "On-site or nearby cafés.",
      "nearbyAtm": "Ziraat Bank · İş Bankası · ATMs on Meydan",
      "didYouKnow": "Atatürk visited Trabzon several times — this pavilion was his favourite Black Sea retreat.",
      "localSecret": "The garden bench facing the sea was his preferred spot — sit there and read the inscription.",
      "instagram": {
        "sunset": "White pavilion against green gardens — elegant Ottoman-era architecture.",
        "sunrise": "White pavilion against green gardens — elegant Ottoman-era architecture.",
        "drone": "Check local regulations — monasteries and national parks may restrict drones",
        "settings": "f/8 · ISO 200 · 24–70mm"
      },
      "photos": {
        "hero": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Trabzon_Atat%C3%BCrk_K%C3%B6%C5%9Fk%C3%BC_%281%29.JPG/960px-Trabzon_Atat%C3%BCrk_K%C3%B6%C5%9Fk%C3%BC_%281%29.JPG",
        "detail": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Atat%C3%BCrk_K%C3%B6%C5%9Fk%C3%BC-Trabzon-01.jpg/960px-Atat%C3%BCrk_K%C3%B6%C5%9Fk%C3%BC-Trabzon-01.jpg",
        "photoSpot": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Atat%C3%BCrk_K%C3%B6%C5%9Fk%C3%BC-Trabzon-04.jpg/960px-Atat%C3%BCrk_K%C3%B6%C5%9Fk%C3%BC-Trabzon-04.jpg",
        "map": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Atat%C3%BCrk_K%C3%B6%C5%9Fk%C3%BC-Trabzon-05.jpg/960px-Atat%C3%BCrk_K%C3%B6%C5%9Fk%C3%BC-Trabzon-05.jpg",
        "heroPosition": "center 40%"
      },
      "seasonalPhotos": {
        "spring": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Trabzon_Atat%C3%BCrk_K%C3%B6%C5%9Fk%C3%BC_%281%29.JPG/960px-Trabzon_Atat%C3%BCrk_K%C3%B6%C5%9Fk%C3%BC_%281%29.JPG",
        "summer": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Atat%C3%BCrk_K%C3%B6%C5%9Fk%C3%BC-Trabzon-01.jpg/960px-Atat%C3%BCrk_K%C3%B6%C5%9Fk%C3%BC-Trabzon-01.jpg",
        "autumn": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Atat%C3%BCrk_K%C3%B6%C5%9Fk%C3%BC-Trabzon-04.jpg/960px-Atat%C3%BCrk_K%C3%B6%C5%9Fk%C3%BC-Trabzon-04.jpg",
        "christmas": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Atat%C3%BCrk_K%C3%B6%C5%9Fk%C3%BC-Trabzon-05.jpg/960px-Atat%C3%BCrk_K%C3%B6%C5%9Fk%C3%BC-Trabzon-05.jpg"
      }
    },
    {
      "name": "Trabzon Aquarium",
      "address": "Forum Trabzon · Yomra",
      "hours": "10:00–20:00",
      "tube": "15 min drive · Forum Trabzon mall",
      "ticket": "₺250 adult · ₺180 child",
      "bestArrival": "14:00",
      "photoSpot": "Tunnel aquarium — Black Sea and tropical species overhead.",
      "lens": "Phone OK · no flash",
      "tip": "Turkey's largest tunnel aquarium. Good for families and rainy afternoons. Allow 1.5 hours.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Trabzon%20Aquarium",
      "bookUrl": "https://www.google.com/maps/search/?api=1&query=Trabzon%20Aquarium",
      "bookText": "View on Map",
      "avgVisit": "1.5 hours",
      "crowd": {
        "morning": 3,
        "afternoon": 4,
        "evening": 2
      },
      "nearby": [
        {
          "name": "Forum Trabzon",
          "walk": "1 min"
        }
      ],
      "nearbyCafes": "See dining chapter in this guide.",
      "nearbyRestaurants": "See dining chapter in this guide.",
      "nearbyTube": "15 min drive · Forum Trabzon mall",
      "nearbyToilets": "On-site or nearby cafés.",
      "nearbyAtm": "Ziraat Bank · İş Bankası · ATMs on Meydan",
      "didYouKnow": "The main tank holds 3 million litres of water — sharks, rays and Black Sea native species together.",
      "localSecret": "Feeding time at 15:00 draws crowds — arrive at 14:00 to see the tunnel before the rush.",
      "instagram": {
        "sunset": "Tunnel aquarium — Black Sea and tropical species overhead.",
        "sunrise": "Tunnel aquarium — Black Sea and tropical species overhead.",
        "drone": "Check local regulations — monasteries and national parks may restrict drones",
        "settings": "f/8 · ISO 200 · 24–70mm"
      },
      "photos": {
        "hero": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Faroz%2C_Trabzon.jpg/960px-Faroz%2C_Trabzon.jpg",
        "detail": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Trabzon%2Charbour.jpg/960px-Trabzon%2Charbour.jpg",
        "photoSpot": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Trabzon_-_view_of_the_city.jpg/960px-Trabzon_-_view_of_the_city.jpg",
        "map": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Trabzon_cityscape.jpg/960px-Trabzon_cityscape.jpg",
        "heroPosition": "center 40%"
      },
      "seasonalPhotos": {
        "spring": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Faroz%2C_Trabzon.jpg/960px-Faroz%2C_Trabzon.jpg",
        "summer": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Trabzon%2Charbour.jpg/960px-Trabzon%2Charbour.jpg",
        "autumn": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Trabzon_-_view_of_the_city.jpg/960px-Trabzon_-_view_of_the_city.jpg",
        "christmas": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Trabzon_cityscape.jpg/960px-Trabzon_cityscape.jpg"
      }
    },
    {
      "name": "Hıdırnebi Plateau",
      "address": "Şalpazarı · 55 km south · optional Day 7",
      "hours": "Always open · summer only recommended",
      "tube": "1.5 hour drive · mountain road",
      "ticket": "Free",
      "bestArrival": "10:00",
      "photoSpot": "Highland meadows above the clouds — panoramic Kaçkar range views.",
      "lens": "16–35mm",
      "tip": "Option A for Day 7. Less touristy than Ayder — bring a picnic and enjoy the silence.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=H%C4%B1d%C4%B1rnebi%20Plateau%20Trabzon",
      "bookUrl": "https://www.google.com/maps/search/?api=1&query=H%C4%B1d%C4%B1rnebi%20Plateau%20Trabzon",
      "bookText": "View on Map",
      "avgVisit": "Half day",
      "crowd": {
        "morning": 3,
        "afternoon": 4,
        "evening": 2
      },
      "nearby": [],
      "nearbyCafes": "See dining chapter in this guide.",
      "nearbyRestaurants": "See dining chapter in this guide.",
      "nearbyTube": "1.5 hour drive · mountain road",
      "nearbyToilets": "On-site or nearby cafés.",
      "nearbyAtm": "Ziraat Bank · İş Bankası · ATMs on Meydan",
      "didYouKnow": "Hıdırnebi sits at 1,600 m — local shepherds still graze flocks here in summer.",
      "localSecret": "The plateau road is single-lane — start early to avoid meeting tour buses on blind corners.",
      "instagram": {
        "sunset": "Highland meadows above the clouds — panoramic Kaçkar range views.",
        "sunrise": "Highland meadows above the clouds — panoramic Kaçkar range views.",
        "drone": "Check local regulations — monasteries and national parks may restrict drones",
        "settings": "f/8 · ISO 200 · 24–70mm"
      },
      "photos": {
        "hero": "https://upload.wikimedia.org/wikipedia/commons/c/cf/Hidirnebi.jpg",
        "detail": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Hamsik%C3%B6y_Panaroma.jpg/960px-Hamsik%C3%B6y_Panaroma.jpg",
        "photoSpot": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Hamsik%C3%B6y_2014-1.jpg/960px-Hamsik%C3%B6y_2014-1.jpg",
        "map": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Hamsik%C3%B6y_2014-4.jpg/960px-Hamsik%C3%B6y_2014-4.jpg",
        "heroPosition": "center 40%"
      },
      "seasonalPhotos": {
        "spring": "https://upload.wikimedia.org/wikipedia/commons/c/cf/Hidirnebi.jpg",
        "summer": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Hamsik%C3%B6y_Panaroma.jpg/960px-Hamsik%C3%B6y_Panaroma.jpg",
        "autumn": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Hamsik%C3%B6y_2014-1.jpg/960px-Hamsik%C3%B6y_2014-1.jpg",
        "christmas": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Hamsik%C3%B6y_2014-4.jpg/960px-Hamsik%C3%B6y_2014-4.jpg"
      }
    },
    {
      "name": "Çal Cave",
      "address": "Düzköy · 40 km south · optional Day 7",
      "hours": "09:00–18:00",
      "tube": "1 hour drive from Trabzon",
      "ticket": "₺80",
      "bestArrival": "10:00",
      "photoSpot": "Underground stalactite chambers — dramatic lighting and cool air.",
      "lens": "No flash · phone OK",
      "tip": "Option B for Day 7. Turkey's second-longest cave — boardwalks and lighting throughout.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%C3%87al%20Cave%20Trabzon",
      "bookUrl": "https://www.google.com/maps/search/?api=1&query=%C3%87al%20Cave%20Trabzon",
      "bookText": "View on Map",
      "avgVisit": "1 hour",
      "crowd": {
        "morning": 3,
        "afternoon": 4,
        "evening": 2
      },
      "nearby": [],
      "nearbyCafes": "See dining chapter in this guide.",
      "nearbyRestaurants": "See dining chapter in this guide.",
      "nearbyTube": "1 hour drive from Trabzon",
      "nearbyToilets": "On-site or nearby cafés.",
      "nearbyAtm": "Ziraat Bank · İş Bankası · ATMs on Meydan",
      "didYouKnow": "Çal Cave extends over 8 km underground — only a fraction is open to visitors.",
      "localSecret": "Bring a light jacket — the cave stays at 12 °C year-round even in August.",
      "instagram": {
        "sunset": "Underground stalactite chambers — dramatic lighting and cool air.",
        "sunrise": "Underground stalactite chambers — dramatic lighting and cool air.",
        "drone": "Check local regulations — monasteries and national parks may restrict drones",
        "settings": "f/8 · ISO 200 · 24–70mm"
      },
      "photos": {
        "hero": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/%C3%87al_Ma%C4%9Faras%C4%B13.jpg/960px-%C3%87al_Ma%C4%9Faras%C4%B13.jpg",
        "detail": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/%C3%87al_Ma%C4%9Faras%C4%B12.jpg/960px-%C3%87al_Ma%C4%9Faras%C4%B12.jpg",
        "photoSpot": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/%C3%87al_Ma%C4%9Faras%C4%B11.jpg/960px-%C3%87al_Ma%C4%9Faras%C4%B11.jpg",
        "map": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/%C3%87al_Ma%C4%9Faras%C4%B14.jpg/960px-%C3%87al_Ma%C4%9Faras%C4%B14.jpg",
        "heroPosition": "center 40%"
      },
      "seasonalPhotos": {
        "spring": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/%C3%87al_Ma%C4%9Faras%C4%B13.jpg/960px-%C3%87al_Ma%C4%9Faras%C4%B13.jpg",
        "summer": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/%C3%87al_Ma%C4%9Faras%C4%B12.jpg/960px-%C3%87al_Ma%C4%9Faras%C4%B12.jpg",
        "autumn": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/%C3%87al_Ma%C4%9Faras%C4%B11.jpg/960px-%C3%87al_Ma%C4%9Faras%C4%B11.jpg",
        "christmas": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/%C3%87al_Ma%C4%9Faras%C4%B14.jpg/960px-%C3%87al_Ma%C4%9Faras%C4%B14.jpg"
      }
    }
  ],
  "hotels": [
    {
      "name": "Radisson Blu Hotel Trabzon",
      "category": "Luxury",
      "address": "Boztepe · panoramic hilltop",
      "price": "€180–350/night",
      "rating": "9.0",
      "googleRating": "4.4",
      "room": "Superior Sea View · Boztepe terrace",
      "cancellation": "Free 24h · flexible rate",
      "tube": "Taxi to Meydan 10 min",
      "airport": "TZX 15 min · 8 km",
      "nearbyAttractions": "Boztepe 2 min · Cephanelik 5 min · Meydan 10 min",
      "walkingScore": "70 / 100 — hilltop location",
      "breakfast": "Included in most rates",
      "idealFor": [
        "Couple",
        "Honeymoon",
        "City views"
      ],
      "tip": "Amazing city and sea views from Boztepe. Perfect for couples — request a high floor facing the Black Sea.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Radisson%20Blu%20Hotel%20Trabzon",
      "bookUrl": "https://www.google.com/maps/search/?api=1&query=Radisson%20Blu%20Hotel%20Trabzon",
      "photos": {
        "exterior": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/USTA_OTEL_CATIDAN_KARADENIZ.TRABZON_-_panoramio.jpg/960px-USTA_OTEL_CATIDAN_KARADENIZ.TRABZON_-_panoramio.jpg",
        "lobby": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Trabzon_aqueduct.JPG/960px-Trabzon_aqueduct.JPG",
        "room": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Trabzon_City_walls_and_Aquaduct.JPG/960px-Trabzon_City_walls_and_Aquaduct.JPG",
        "luxuryRoom": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Trabzon_City_walls_and_Aquaduct.JPG/960px-Trabzon_City_walls_and_Aquaduct.JPG",
        "restaurant": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Trabzon_aqueduct.JPG/960px-Trabzon_aqueduct.JPG",
        "pool": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Panorama_de_Trebizonde.jpg/960px-Panorama_de_Trebizonde.jpg",
        "rooftop": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Trabzon_City_walls_and_Aquaduct.JPG/960px-Trabzon_City_walls_and_Aquaduct.JPG",
        "breakfast": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Trabzon_aqueduct.JPG/960px-Trabzon_aqueduct.JPG",
        "spa": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Panorama_de_Trebizonde.jpg/960px-Panorama_de_Trebizonde.jpg",
        "view": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Trabzon_City_walls_and_Aquaduct.JPG/960px-Trabzon_City_walls_and_Aquaduct.JPG"
      }
    },
    {
      "name": "DoubleTree by Hilton Trabzon",
      "category": "Luxury",
      "address": "Akçaabat · waterfront",
      "price": "€150–280/night",
      "rating": "8.8",
      "googleRating": "4.4",
      "room": "Deluxe Sea View · Black Sea panorama",
      "cancellation": "Free 48h",
      "tube": "20 min drive to Meydan",
      "airport": "TZX 20 min",
      "nearbyAttractions": "Akçaabat köfte 5 min · Sera Lake 15 min · beach access",
      "walkingScore": "65 / 100 — resort setting",
      "breakfast": "Included in premium rates",
      "idealFor": [
        "Family",
        "Couple",
        "Sea views"
      ],
      "tip": "Beautiful Black Sea views and beach access. Great for families who prefer a quieter base outside the city centre.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=DoubleTree%20by%20Hilton%20Trabzon",
      "bookUrl": "https://www.google.com/maps/search/?api=1&query=DoubleTree%20by%20Hilton%20Trabzon",
      "photos": {
        "exterior": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Usta_park_hotel_trabzon_zicht_richting_centrum_-_panoramio.jpg/960px-Usta_park_hotel_trabzon_zicht_richting_centrum_-_panoramio.jpg",
        "lobby": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Long_Lake_of_Trabzon.jpg/960px-Long_Lake_of_Trabzon.jpg",
        "room": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Panorama_de_Trebizonde_2.jpg/960px-Panorama_de_Trebizonde_2.jpg",
        "luxuryRoom": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Panorama_de_Trebizonde_2.jpg/960px-Panorama_de_Trebizonde_2.jpg",
        "restaurant": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Long_Lake_of_Trabzon.jpg/960px-Long_Lake_of_Trabzon.jpg",
        "pool": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Panorama_on_Trebizond.jpg/960px-Panorama_on_Trebizond.jpg",
        "rooftop": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Panorama_de_Trebizonde_2.jpg/960px-Panorama_de_Trebizonde_2.jpg",
        "breakfast": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Long_Lake_of_Trabzon.jpg/960px-Long_Lake_of_Trabzon.jpg",
        "spa": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Panorama_on_Trebizond.jpg/960px-Panorama_on_Trebizond.jpg",
        "view": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Panorama_de_Trebizonde_2.jpg/960px-Panorama_de_Trebizonde_2.jpg"
      }
    },
    {
      "name": "Movenpick Hotel Trabzon",
      "category": "Luxury",
      "address": "Airport road · Ortahisar",
      "price": "€140–260/night",
      "rating": "8.7",
      "googleRating": "4.2",
      "room": "Executive King · modern design",
      "cancellation": "Free 24h",
      "tube": "5 min to TZX airport",
      "airport": "TZX 5 min · 2 km",
      "nearbyAttractions": "Airport 5 min · Meydan 15 min · Forum Trabzon 10 min",
      "walkingScore": "55 / 100 — airport area",
      "breakfast": "Buffet included",
      "idealFor": [
        "Business",
        "Early flights",
        "Modern luxury"
      ],
      "tip": "Near the airport — ideal for late arrivals or early departures. Modern luxury with excellent breakfast.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Movenpick%20Hotel%20Trabzon",
      "bookUrl": "https://www.google.com/maps/search/?api=1&query=Movenpick%20Hotel%20Trabzon",
      "photos": {
        "exterior": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Hacer_keskin_Resort_Hotel_-_panoramio.jpg/960px-Hacer_keskin_Resort_Hotel_-_panoramio.jpg",
        "lobby": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Trabzon_view_4858_panorama.jpg/960px-Trabzon_view_4858_panorama.jpg",
        "room": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Trabzon%2C_Trabzon_Merkez-Trabzon%2C_Turkey_-_panoramio_%286%29.jpg/960px-Trabzon%2C_Trabzon_Merkez-Trabzon%2C_Turkey_-_panoramio_%286%29.jpg",
        "luxuryRoom": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Trabzon%2C_Trabzon_Merkez-Trabzon%2C_Turkey_-_panoramio_%286%29.jpg/960px-Trabzon%2C_Trabzon_Merkez-Trabzon%2C_Turkey_-_panoramio_%286%29.jpg",
        "restaurant": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Trabzon_view_4858_panorama.jpg/960px-Trabzon_view_4858_panorama.jpg",
        "pool": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Trabzon%2CKizlar1.jpg/960px-Trabzon%2CKizlar1.jpg",
        "rooftop": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Trabzon%2C_Trabzon_Merkez-Trabzon%2C_Turkey_-_panoramio_%286%29.jpg/960px-Trabzon%2C_Trabzon_Merkez-Trabzon%2C_Turkey_-_panoramio_%286%29.jpg",
        "breakfast": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Trabzon_view_4858_panorama.jpg/960px-Trabzon_view_4858_panorama.jpg",
        "spa": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Trabzon%2CKizlar1.jpg/960px-Trabzon%2CKizlar1.jpg",
        "view": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Trabzon%2C_Trabzon_Merkez-Trabzon%2C_Turkey_-_panoramio_%286%29.jpg/960px-Trabzon%2C_Trabzon_Merkez-Trabzon%2C_Turkey_-_panoramio_%286%29.jpg"
      }
    },
    {
      "name": "Zorlu Grand Hotel",
      "category": "Mid-Range",
      "address": "Meydan · city centre",
      "price": "€80–150/night",
      "rating": "8.5",
      "googleRating": "4.3",
      "room": "Standard Double · best location",
      "cancellation": "Free 24h",
      "tube": "Meydan doorstep · all dolmuş routes",
      "airport": "TZX 20 min",
      "nearbyAttractions": "Meydan 1 min · Museum 5 min · restaurants walking distance",
      "walkingScore": "98 / 100 — city centre",
      "breakfast": "Included",
      "idealFor": [
        "First-time visitors",
        "Couple",
        "Walkers"
      ],
      "tip": "The best city-centre location. Walking distance to restaurants, Meydan and the museum.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Zorlu%20Grand%20Hotel%20Trabzon",
      "bookUrl": "https://www.google.com/maps/search/?api=1&query=Zorlu%20Grand%20Hotel%20Trabzon",
      "photos": {
        "exterior": "assets/hotels/zorlu-grand-hotel.png",
        "lobby": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Panoromik_Trabzon.jpg/960px-Panoromik_Trabzon.jpg",
        "room": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Trabzon_aqueduct.JPG/960px-Trabzon_aqueduct.JPG",
        "luxuryRoom": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Trabzon_aqueduct.JPG/960px-Trabzon_aqueduct.JPG",
        "restaurant": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Panoromik_Trabzon.jpg/960px-Panoromik_Trabzon.jpg",
        "pool": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Trabzon_City_walls_and_Aquaduct.JPG/960px-Trabzon_City_walls_and_Aquaduct.JPG",
        "rooftop": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Trabzon_aqueduct.JPG/960px-Trabzon_aqueduct.JPG",
        "breakfast": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Panoromik_Trabzon.jpg/960px-Panoromik_Trabzon.jpg",
        "spa": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Trabzon_City_walls_and_Aquaduct.JPG/960px-Trabzon_City_walls_and_Aquaduct.JPG",
        "view": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Trabzon_aqueduct.JPG/960px-Trabzon_aqueduct.JPG"
      }
    },
    {
      "name": "Novotel Trabzon",
      "category": "Mid-Range",
      "address": "Yomra · coastal road",
      "price": "€90–160/night",
      "rating": "8.4",
      "googleRating": "4.4",
      "room": "Superior Room · pool & beach",
      "cancellation": "Free until 18:00",
      "tube": "15 min drive to Meydan",
      "airport": "TZX 10 min",
      "nearbyAttractions": "Beach access · pool · Forum Trabzon 5 min",
      "walkingScore": "60 / 100 — coastal resort",
      "breakfast": "Buffet €15pp",
      "idealFor": [
        "Family",
        "Pool",
        "Beach"
      ],
      "tip": "Great for families — beach access, pool and spacious rooms. Good value for a seaside stay.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Novotel%20Trabzon",
      "bookUrl": "https://www.google.com/maps/search/?api=1&query=Novotel%20Trabzon",
      "photos": {
        "exterior": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Trabzon_-_view_of_the_city.jpg/960px-Trabzon_-_view_of_the_city.jpg",
        "lobby": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Panorama_de_Trebizonde.jpg/960px-Panorama_de_Trebizonde.jpg",
        "room": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Panorama_de_Trebizonde_2.jpg/960px-Panorama_de_Trebizonde_2.jpg",
        "luxuryRoom": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Panorama_de_Trebizonde_2.jpg/960px-Panorama_de_Trebizonde_2.jpg",
        "restaurant": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Panorama_de_Trebizonde.jpg/960px-Panorama_de_Trebizonde.jpg",
        "pool": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Trabzon_view_4858_panorama.jpg/960px-Trabzon_view_4858_panorama.jpg",
        "rooftop": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Panorama_de_Trebizonde_2.jpg/960px-Panorama_de_Trebizonde_2.jpg",
        "breakfast": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Panorama_de_Trebizonde.jpg/960px-Panorama_de_Trebizonde.jpg",
        "spa": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Trabzon_view_4858_panorama.jpg/960px-Trabzon_view_4858_panorama.jpg",
        "view": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Panorama_de_Trebizonde_2.jpg/960px-Panorama_de_Trebizonde_2.jpg"
      }
    },
    {
      "name": "Mercure Trabzon Otel",
      "category": "Mid-Range",
      "address": "Airport area · Ortahisar",
      "price": "€70–130/night",
      "rating": "8.2",
      "googleRating": "4.4",
      "room": "Standard Queen · modern rooms",
      "cancellation": "Free 24h",
      "tube": "10 min to TZX · 15 min to Meydan",
      "airport": "TZX 8 min",
      "nearbyAttractions": "Airport 8 min · Forum Trabzon 12 min",
      "walkingScore": "50 / 100 — airport zone",
      "breakfast": "Extra €12pp",
      "idealFor": [
        "Business",
        "Transit",
        "Value"
      ],
      "tip": "Modern rooms close to the airport. Reliable Accor quality at a sensible price.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Mercure%20Trabzon%20Otel",
      "bookUrl": "https://www.google.com/maps/search/?api=1&query=Mercure%20Trabzon%20Otel",
      "photos": {
        "exterior": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Panoromik_Trabzon.jpg/960px-Panoromik_Trabzon.jpg",
        "lobby": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Trabzon%2C_Trabzon_Merkez-Trabzon%2C_Turkey_-_panoramio_%286%29.jpg/960px-Trabzon%2C_Trabzon_Merkez-Trabzon%2C_Turkey_-_panoramio_%286%29.jpg",
        "room": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Trabzon%2CKizlar1.jpg/960px-Trabzon%2CKizlar1.jpg",
        "luxuryRoom": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Trabzon%2CKizlar1.jpg/960px-Trabzon%2CKizlar1.jpg",
        "restaurant": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Trabzon%2C_Trabzon_Merkez-Trabzon%2C_Turkey_-_panoramio_%286%29.jpg/960px-Trabzon%2C_Trabzon_Merkez-Trabzon%2C_Turkey_-_panoramio_%286%29.jpg",
        "pool": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Panorama_on_Trebizond.jpg/960px-Panorama_on_Trebizond.jpg",
        "rooftop": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Trabzon%2CKizlar1.jpg/960px-Trabzon%2CKizlar1.jpg",
        "breakfast": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Trabzon%2C_Trabzon_Merkez-Trabzon%2C_Turkey_-_panoramio_%286%29.jpg/960px-Trabzon%2C_Trabzon_Merkez-Trabzon%2C_Turkey_-_panoramio_%286%29.jpg",
        "spa": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Panorama_on_Trebizond.jpg/960px-Panorama_on_Trebizond.jpg",
        "view": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Trabzon%2CKizlar1.jpg/960px-Trabzon%2CKizlar1.jpg"
      }
    },
    {
      "name": "PEERLESS VİLLAS HOTEL",
      "category": "Best Value",
      "address": "Coastal road · Yomra",
      "price": "€50–90/night",
      "rating": "8.6",
      "googleRating": "4.4",
      "room": "Sea View Villa · excellent views",
      "cancellation": "Free 48h",
      "tube": "15 min drive to Meydan",
      "airport": "TZX 12 min",
      "nearbyAttractions": "Sea views · Sera Lake 10 min · beach nearby",
      "walkingScore": "55 / 100 — coastal",
      "breakfast": "Included",
      "idealFor": [
        "Couple",
        "Value",
        "Sea views"
      ],
      "tip": "Excellent sea views at a fraction of luxury prices. Villa-style rooms feel more spacious than standard hotels.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=PEERLESS%20V%C4%B0LLAS%20HOTEL%20Trabzon",
      "bookUrl": "https://www.google.com/maps/search/?api=1&query=PEERLESS%20V%C4%B0LLAS%20HOTEL%20Trabzon",
      "photos": {
        "exterior": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Uzung%C3%B6l_Manzaras%C4%B1_Trabzon.jpg/960px-Uzung%C3%B6l_Manzaras%C4%B1_Trabzon.jpg",
        "lobby": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Uzung%C3%B6l_cami.JPG/960px-Uzung%C3%B6l_cami.JPG",
        "room": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Uzung%C3%B6l_%288%29.jpg/960px-Uzung%C3%B6l_%288%29.jpg",
        "luxuryRoom": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Uzung%C3%B6l_%288%29.jpg/960px-Uzung%C3%B6l_%288%29.jpg",
        "restaurant": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Uzung%C3%B6l_cami.JPG/960px-Uzung%C3%B6l_cami.JPG",
        "pool": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Uzung%C3%B6l_lake_mosque.jpg/960px-Uzung%C3%B6l_lake_mosque.jpg",
        "rooftop": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Uzung%C3%B6l_%288%29.jpg/960px-Uzung%C3%B6l_%288%29.jpg",
        "breakfast": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Uzung%C3%B6l_cami.JPG/960px-Uzung%C3%B6l_cami.JPG",
        "spa": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Uzung%C3%B6l_lake_mosque.jpg/960px-Uzung%C3%B6l_lake_mosque.jpg",
        "view": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Uzung%C3%B6l_%288%29.jpg/960px-Uzung%C3%B6l_%288%29.jpg"
      }
    },
    {
      "name": "MELL BOUTIQUE HOTEL",
      "category": "Best Value",
      "address": "Ortahisar · near Meydan",
      "price": "€55–95/night",
      "rating": "8.8",
      "googleRating": "4.5",
      "room": "Boutique Double · intimate atmosphere",
      "cancellation": "Free 24h",
      "tube": "Meydan 5 min walk",
      "airport": "TZX 18 min",
      "nearbyAttractions": "Meydan 5 min · Museum 8 min · cafés nearby",
      "walkingScore": "92 / 100 — near centre",
      "breakfast": "Included · local specialties",
      "idealFor": [
        "Couple",
        "Boutique",
        "Romantic"
      ],
      "tip": "Boutique atmosphere ideal for couples. Personal service and stylish rooms without the luxury price tag.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=MELL%20BOUTIQUE%20HOTEL%20Trabzon",
      "bookUrl": "https://www.google.com/maps/search/?api=1&query=MELL%20BOUTIQUE%20HOTEL%20Trabzon",
      "photos": {
        "exterior": "https://upload.wikimedia.org/wikipedia/commons/5/52/Kayalar_Pansion.JPG",
        "lobby": "https://upload.wikimedia.org/wikipedia/commons/5/58/Hotel_Chefac%2C_Trebizonde.jpg",
        "room": "https://upload.wikimedia.org/wikipedia/commons/4/46/Hotel_Chems%2C_Trebizond.jpg",
        "luxuryRoom": "https://upload.wikimedia.org/wikipedia/commons/4/46/Hotel_Chems%2C_Trebizond.jpg",
        "restaurant": "https://upload.wikimedia.org/wikipedia/commons/5/58/Hotel_Chefac%2C_Trebizonde.jpg",
        "pool": "https://upload.wikimedia.org/wikipedia/commons/d/d3/Hotel_Djian_Trebizond.jpg",
        "rooftop": "https://upload.wikimedia.org/wikipedia/commons/4/46/Hotel_Chems%2C_Trebizond.jpg",
        "breakfast": "https://upload.wikimedia.org/wikipedia/commons/5/58/Hotel_Chefac%2C_Trebizonde.jpg",
        "spa": "https://upload.wikimedia.org/wikipedia/commons/d/d3/Hotel_Djian_Trebizond.jpg",
        "view": "https://upload.wikimedia.org/wikipedia/commons/4/46/Hotel_Chems%2C_Trebizond.jpg"
      }
    }
  ],
  "dining": [
    {
      "name": "Beton Helva Kahvaltı",
      "category": "Breakfast · Traditional",
      "address": "Ortahisar · Trabzon",
      "price": "₺200–400 per person",
      "famous": "Traditional Black Sea Breakfast",
      "halal": true,
      "vegetarian": true,
      "reservation": "Walk-in · busy weekends",
      "wait": "10–20 min Sat–Sun",
      "michelin": "—",
      "kidsFriendly": "Yes",
      "dressCode": "Casual",
      "tip": "Start Day 1 here — the full Karadeniz kahvaltı spread with local cheeses, honey, kaymak and endless çay.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Beton%20Helva%20Kahvalt%C4%B1%20Trabzon",
      "bookUrl": "https://www.google.com/maps/search/?api=1&query=Beton%20Helva%20Kahvalt%C4%B1%20Trabzon",
      "dishes": [
        {
          "name": "Black Sea Breakfast Spread",
          "img": "https://upload.wikimedia.org/wikipedia/commons/6/64/TurkishBreakfastAtCesme.jpg",
          "desc": "Cheese, olives, honey, butter and fresh bread."
        },
        {
          "name": "Mıhlama",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/%C3%87aml%C4%B1hem%C5%9Fin_--_Muhlama_%285019844858%29.jpg/960px-%C3%87aml%C4%B1hem%C5%9Fin_--_Muhlama_%285019844858%29.jpg",
          "desc": "Cornmeal and cheese fondue — regional specialty."
        },
        {
          "name": "Kuymak",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Kuymak_in_a_sahan.jpg/960px-Kuymak_in_a_sahan.jpg",
          "desc": "Stretchy cheese pull — Instagram favourite."
        },
        {
          "name": "Fresh Simit & Pide",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Glass_of_tea_05119.jpg/960px-Glass_of_tea_05119.jpg",
          "desc": "Warm from the oven with local butter."
        },
        {
          "name": "Turkish Tea",
          "img": "https://upload.wikimedia.org/wikipedia/commons/6/64/TurkishBreakfastAtCesme.jpg",
          "desc": "Refills without asking — that is the Black Sea way."
        }
      ],
      "photos": {
        "signature": "https://upload.wikimedia.org/wikipedia/commons/6/64/TurkishBreakfastAtCesme.jpg",
        "interior": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/%C3%87aml%C4%B1hem%C5%9Fin_--_Muhlama_%285019844858%29.jpg/960px-%C3%87aml%C4%B1hem%C5%9Fin_--_Muhlama_%285019844858%29.jpg",
        "exterior": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Kuymak_in_a_sahan.jpg/960px-Kuymak_in_a_sahan.jpg",
        "dessert": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Glass_of_tea_05119.jpg/960px-Glass_of_tea_05119.jpg",
        "coffee": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/%C3%87aml%C4%B1hem%C5%9Fin_--_Muhlama_%285019844858%29.jpg/960px-%C3%87aml%C4%B1hem%C5%9Fin_--_Muhlama_%285019844858%29.jpg"
      }
    },
    {
      "name": "Neşve Coffee",
      "category": "Café · Coffee",
      "address": "Meydan · Ortahisar",
      "price": "₺80–250",
      "famous": "Specialty Coffee · Desserts",
      "halal": true,
      "vegetarian": true,
      "reservation": "Walk-in",
      "wait": "5–15 min at peak",
      "michelin": "—",
      "kidsFriendly": "Yes",
      "dressCode": "Casual",
      "tip": "Trabzon cafés fill quickly on weekends — arrive before 09:30 for a table.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Ne%C5%9Fve%20Coffee%20Trabzon",
      "bookUrl": "https://www.google.com/maps/search/?api=1&query=Ne%C5%9Fve%20Coffee%20Trabzon",
      "dishes": [
        {
          "name": "Specialty Coffee · Desserts",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Turkish_coffee_in_Istanbul.jpg/960px-Turkish_coffee_in_Istanbul.jpg",
          "desc": "House specialty — order this first."
        },
        {
          "name": "Turkish Coffee",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Turkish_coffee_in_Ankara.jpg/960px-Turkish_coffee_in_Ankara.jpg",
          "desc": "Thick, strong and served with water."
        },
        {
          "name": "Pastry",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Roasted_coffee_beans.jpg/960px-Roasted_coffee_beans.jpg",
          "desc": "Fresh bakes and local helva."
        },
        {
          "name": "Black Sea Breakfast",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Turkish_k%C3%BCnefe_and_tea.jpg/960px-Turkish_k%C3%BCnefe_and_tea.jpg",
          "desc": "Cheese, honey, kaymak and endless tea."
        },
        {
          "name": "Menemen",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Turkish_coffee_in_Istanbul.jpg/960px-Turkish_coffee_in_Istanbul.jpg",
          "desc": "Eggs with peppers and tomatoes — light option."
        }
      ],
      "photos": {
        "signature": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Turkish_coffee_in_Istanbul.jpg/960px-Turkish_coffee_in_Istanbul.jpg",
        "interior": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Turkish_coffee_in_Ankara.jpg/960px-Turkish_coffee_in_Ankara.jpg",
        "exterior": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Roasted_coffee_beans.jpg/960px-Roasted_coffee_beans.jpg",
        "dessert": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Turkish_k%C3%BCnefe_and_tea.jpg/960px-Turkish_k%C3%BCnefe_and_tea.jpg",
        "coffee": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Turkish_coffee_in_Ankara.jpg/960px-Turkish_coffee_in_Ankara.jpg"
      }
    },
    {
      "name": "Cemilusta Akçaabat Köfte",
      "category": "Lunch · Meatballs",
      "address": "Akçaabat · Trabzon",
      "price": "₺150–300 per person",
      "famous": "Akçaabat Köfte",
      "halal": true,
      "vegetarian": true,
      "reservation": "Walk-in",
      "wait": "15–30 min at lunch",
      "michelin": "—",
      "kidsFriendly": "Yes",
      "dressCode": "Smart casual",
      "tip": "The definitive Akçaabat köfte experience — grilled over charcoal with pilav and grilled peppers.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Cemilusta%20Ak%C3%A7aabat%20K%C3%B6fte%20Trabzon",
      "bookUrl": "https://www.google.com/maps/search/?api=1&query=Cemilusta%20Ak%C3%A7aabat%20K%C3%B6fte%20Trabzon",
      "dishes": [
        {
          "name": "Akçaabat Köfte",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Akcaabatkofte.jpg/960px-Akcaabatkofte.jpg",
          "desc": "Protected-recipe lamb-beef meatballs."
        },
        {
          "name": "Grilled Peppers",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Pirzola_and_k%C3%B6fte.jpg/960px-Pirzola_and_k%C3%B6fte.jpg",
          "desc": "Charred and smoky — perfect alongside köfte."
        },
        {
          "name": "Pilav",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Beef_kofta_kebab_at_the_Folklife_Festival.jpg/960px-Beef_kofta_kebab_at_the_Folklife_Festival.jpg",
          "desc": "Buttered rice cooked in meat broth."
        },
        {
          "name": "Ayran",
          "img": "https://upload.wikimedia.org/wikipedia/commons/7/7e/EgFoodKofta.jpg",
          "desc": "Salty yoghurt drink — essential pairing."
        },
        {
          "name": "Künefe",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Akcaabatkofte.jpg/960px-Akcaabatkofte.jpg",
          "desc": "If available — sweet cheese dessert."
        }
      ],
      "photos": {
        "signature": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Akcaabatkofte.jpg/960px-Akcaabatkofte.jpg",
        "interior": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Pirzola_and_k%C3%B6fte.jpg/960px-Pirzola_and_k%C3%B6fte.jpg",
        "exterior": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Beef_kofta_kebab_at_the_Folklife_Festival.jpg/960px-Beef_kofta_kebab_at_the_Folklife_Festival.jpg",
        "dessert": "https://upload.wikimedia.org/wikipedia/commons/7/7e/EgFoodKofta.jpg",
        "coffee": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Pirzola_and_k%C3%B6fte.jpg/960px-Pirzola_and_k%C3%B6fte.jpg"
      }
    },
    {
      "name": "Cephanelik Restaurant",
      "category": "Dinner · Views",
      "address": "Boztepe · hilltop dining",
      "price": "₺400–800 per person",
      "famous": "Black Sea meze & grilled fish",
      "halal": true,
      "vegetarian": true,
      "reservation": "Recommended for dinner",
      "wait": "20–40 min without booking",
      "michelin": "—",
      "kidsFriendly": "Yes",
      "dressCode": "Smart casual",
      "tip": "Beautiful night view over Trabzon. Book a terrace table for sunset dinner on Day 1.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Cephanelik%20Restaurant%20Trabzon",
      "bookUrl": "https://www.google.com/maps/search/?api=1&query=Cephanelik%20Restaurant%20Trabzon",
      "dishes": [
        {
          "name": "Grilled Black Sea Fish",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Trebisonda%2C_Cephanelik_%28ex-polveriera%2C_oggi_hotel%29_01.jpg/960px-Trebisonda%2C_Cephanelik_%28ex-polveriera%2C_oggi_hotel%29_01.jpg",
          "desc": "Daily catch — hamsi or palamut depending on season."
        },
        {
          "name": "Karadeniz Meze Platter",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Trebisonda%2C_Cephanelik_%28ex-polveriera%2C_oggi_hotel%29_02_interno.jpg/960px-Trebisonda%2C_Cephanelik_%28ex-polveriera%2C_oggi_hotel%29_02_interno.jpg",
          "desc": "Local spreads, pickles and salads."
        },
        {
          "name": "Muhlama",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Black_Sea_Fish_and_Grill_Restaurant_03.jpg/960px-Black_Sea_Fish_and_Grill_Restaurant_03.jpg",
          "desc": "Cheese fondue — share as a starter."
        },
        {
          "name": "Kofte",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Black_Sea_Fish_and_Grill_Restaurant_01.jpg/960px-Black_Sea_Fish_and_Grill_Restaurant_01.jpg",
          "desc": "Backup if fish is not your preference."
        },
        {
          "name": "Baklava",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Trebisonda%2C_Cephanelik_%28ex-polveriera%2C_oggi_hotel%29_01.jpg/960px-Trebisonda%2C_Cephanelik_%28ex-polveriera%2C_oggi_hotel%29_01.jpg",
          "desc": "Pistachio layers with Turkish coffee."
        }
      ],
      "photos": {
        "signature": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Trebisonda%2C_Cephanelik_%28ex-polveriera%2C_oggi_hotel%29_01.jpg/960px-Trebisonda%2C_Cephanelik_%28ex-polveriera%2C_oggi_hotel%29_01.jpg",
        "interior": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Trebisonda%2C_Cephanelik_%28ex-polveriera%2C_oggi_hotel%29_02_interno.jpg/960px-Trebisonda%2C_Cephanelik_%28ex-polveriera%2C_oggi_hotel%29_02_interno.jpg",
        "exterior": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Black_Sea_Fish_and_Grill_Restaurant_03.jpg/960px-Black_Sea_Fish_and_Grill_Restaurant_03.jpg",
        "dessert": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Black_Sea_Fish_and_Grill_Restaurant_01.jpg/960px-Black_Sea_Fish_and_Grill_Restaurant_01.jpg",
        "coffee": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Trebisonda%2C_Cephanelik_%28ex-polveriera%2C_oggi_hotel%29_02_interno.jpg/960px-Trebisonda%2C_Cephanelik_%28ex-polveriera%2C_oggi_hotel%29_02_interno.jpg"
      }
    },
    {
      "name": "Hamsiköy",
      "category": "Lunch · Village",
      "address": "Maçka · near Sümela",
      "price": "₺150–250 per person",
      "famous": "Hamsiköy Rice Pudding (sütlaç)",
      "halal": true,
      "vegetarian": true,
      "reservation": "Walk-in",
      "wait": "10–20 min",
      "michelin": "—",
      "kidsFriendly": "Yes",
      "dressCode": "Smart casual",
      "tip": "Stop here after Sümela for the famous rice pudding — baked in clay pots with a caramelised top.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Hamsik%C3%B6y%20Trabzon",
      "bookUrl": "https://www.google.com/maps/search/?api=1&query=Hamsik%C3%B6y%20Trabzon",
      "dishes": [
        {
          "name": "Hamsiköy Sütlaç",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Hamsik%C3%B6y_-_panoramio.jpg/960px-Hamsik%C3%B6y_-_panoramio.jpg",
          "desc": "The reason everyone stops here — order two."
        },
        {
          "name": "Village Lunch",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/61750_Hamsik%C3%B6y-Ma%C3%A7ka-Trabzon%2C_Turkey_-_panoramio.jpg/960px-61750_Hamsik%C3%B6y-Ma%C3%A7ka-Trabzon%2C_Turkey_-_panoramio.jpg",
          "desc": "Simple grilled trout or köfte with salad."
        },
        {
          "name": "Local Honey",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/61750_Hamsik%C3%B6y-Ma%C3%A7ka-Trabzon%2C_Turkey_-_panoramio_%281%29.jpg/960px-61750_Hamsik%C3%B6y-Ma%C3%A7ka-Trabzon%2C_Turkey_-_panoramio_%281%29.jpg",
          "desc": "Mountain honey sold by the jar — take some home."
        },
        {
          "name": "Fresh Bread",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Hamsik%C3%B6y_2014-3.jpg/960px-Hamsik%C3%B6y_2014-3.jpg",
          "desc": "Baked in village ovens daily."
        },
        {
          "name": "Turkish Tea",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Hamsik%C3%B6y_-_panoramio.jpg/960px-Hamsik%C3%B6y_-_panoramio.jpg",
          "desc": "Under the trees after pudding."
        }
      ],
      "photos": {
        "signature": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Hamsik%C3%B6y_-_panoramio.jpg/960px-Hamsik%C3%B6y_-_panoramio.jpg",
        "interior": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/61750_Hamsik%C3%B6y-Ma%C3%A7ka-Trabzon%2C_Turkey_-_panoramio.jpg/960px-61750_Hamsik%C3%B6y-Ma%C3%A7ka-Trabzon%2C_Turkey_-_panoramio.jpg",
        "exterior": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/61750_Hamsik%C3%B6y-Ma%C3%A7ka-Trabzon%2C_Turkey_-_panoramio_%281%29.jpg/960px-61750_Hamsik%C3%B6y-Ma%C3%A7ka-Trabzon%2C_Turkey_-_panoramio_%281%29.jpg",
        "dessert": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Hamsik%C3%B6y_2014-3.jpg/960px-Hamsik%C3%B6y_2014-3.jpg",
        "coffee": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/61750_Hamsik%C3%B6y-Ma%C3%A7ka-Trabzon%2C_Turkey_-_panoramio.jpg/960px-61750_Hamsik%C3%B6y-Ma%C3%A7ka-Trabzon%2C_Turkey_-_panoramio.jpg"
      }
    },
    {
      "name": "İnan Kardeşler Restaurant",
      "category": "Lunch · Trout",
      "address": "Uzungöl · lakeside",
      "price": "₺200–400 per person",
      "famous": "Fresh Trout from the Lake",
      "halal": true,
      "vegetarian": true,
      "reservation": "Walk-in",
      "wait": "15–25 min",
      "michelin": "—",
      "kidsFriendly": "Yes",
      "dressCode": "Smart casual",
      "tip": "Fresh trout grilled at the lakeside — the classic Uzungöl lunch. Sit on the terrace facing the water.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%C4%B0nan%20Karde%C5%9Fler%20Restaurant%20Trabzon",
      "bookUrl": "https://www.google.com/maps/search/?api=1&query=%C4%B0nan%20Karde%C5%9Fler%20Restaurant%20Trabzon",
      "dishes": [
        {
          "name": "Grilled Rainbow Trout",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Uzungol_Trout_restaurant_and_mosque.jpg/960px-Uzungol_Trout_restaurant_and_mosque.jpg",
          "desc": "Caught locally — simply grilled with lemon."
        },
        {
          "name": "Corn Bread",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Uzung%C3%B6l%2C_Trabzon_2014.jpg/960px-Uzung%C3%B6l%2C_Trabzon_2014.jpg",
          "desc": "Dense Karadeniz cornbread — perfect with fish."
        },
        {
          "name": "Salad",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Uzung%C3%B6l_15.jpg/960px-Uzung%C3%B6l_15.jpg",
          "desc": "Mountain greens with pomegranate dressing."
        },
        {
          "name": "Ayran",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Uzung%C3%B6l_112020.jpg/960px-Uzung%C3%B6l_112020.jpg",
          "desc": "Cold and salty — balances the rich trout."
        },
        {
          "name": "Local Dessert",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Uzungol_Trout_restaurant_and_mosque.jpg/960px-Uzungol_Trout_restaurant_and_mosque.jpg",
          "desc": "Ask for the daily special."
        }
      ],
      "photos": {
        "signature": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Uzungol_Trout_restaurant_and_mosque.jpg/960px-Uzungol_Trout_restaurant_and_mosque.jpg",
        "interior": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Uzung%C3%B6l%2C_Trabzon_2014.jpg/960px-Uzung%C3%B6l%2C_Trabzon_2014.jpg",
        "exterior": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Uzung%C3%B6l_15.jpg/960px-Uzung%C3%B6l_15.jpg",
        "dessert": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Uzung%C3%B6l_112020.jpg/960px-Uzung%C3%B6l_112020.jpg",
        "coffee": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Uzung%C3%B6l%2C_Trabzon_2014.jpg/960px-Uzung%C3%B6l%2C_Trabzon_2014.jpg"
      }
    },
    {
      "name": "Balık Restaurant",
      "category": "Lunch · Seafood",
      "address": "Sera Lake · Yomra",
      "price": "₺250–500 per person",
      "famous": "Fresh Lake & Sea Fish",
      "halal": true,
      "vegetarian": true,
      "reservation": "Walk-in · busy weekends",
      "wait": "20–30 min",
      "michelin": "—",
      "kidsFriendly": "Yes",
      "dressCode": "Smart casual",
      "tip": "Lakeside seafood on Day 5 — choose your fish from the display and they grill it fresh.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Bal%C4%B1k%20Restaurant%20Trabzon",
      "bookUrl": "https://www.google.com/maps/search/?api=1&query=Bal%C4%B1k%20Restaurant%20Trabzon",
      "dishes": [
        {
          "name": "Grilled Sea Bass",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/BalikEkmek.jpg/960px-BalikEkmek.jpg",
          "desc": "Whole fish with salad and bread."
        },
        {
          "name": "Hamsi Tava",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Balik_ekmek_Galata_Bridge.JPG/960px-Balik_ekmek_Galata_Bridge.JPG",
          "desc": "Fried anchovies — Black Sea classic in season."
        },
        {
          "name": "Meze Selection",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Uskumru_%28grilled%29.jpg/960px-Uskumru_%28grilled%29.jpg",
          "desc": "Pick three or four cold starters."
        },
        {
          "name": "Raki",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Bal%C4%B1k_D%C3%BCr%C3%BCm_01.jpg/960px-Bal%C4%B1k_D%C3%BCr%C3%BCm_01.jpg",
          "desc": "Optional — the traditional fish accompaniment."
        },
        {
          "name": "Fresh Fruit",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/BalikEkmek.jpg/960px-BalikEkmek.jpg",
          "desc": "Seasonal plate to finish."
        }
      ],
      "photos": {
        "signature": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/BalikEkmek.jpg/960px-BalikEkmek.jpg",
        "interior": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Balik_ekmek_Galata_Bridge.JPG/960px-Balik_ekmek_Galata_Bridge.JPG",
        "exterior": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Uskumru_%28grilled%29.jpg/960px-Uskumru_%28grilled%29.jpg",
        "dessert": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Bal%C4%B1k_D%C3%BCr%C3%BCm_01.jpg/960px-Bal%C4%B1k_D%C3%BCr%C3%BCm_01.jpg",
        "coffee": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Balik_ekmek_Galata_Bridge.JPG/960px-Balik_ekmek_Galata_Bridge.JPG"
      }
    },
    {
      "name": "Nihat Usta",
      "category": "Lunch · Local",
      "address": "Ortahisar · Trabzon",
      "price": "₺150–300 per person",
      "famous": "Pide & Lahmacun",
      "halal": true,
      "vegetarian": true,
      "reservation": "Walk-in",
      "wait": "10–15 min",
      "michelin": "—",
      "kidsFriendly": "Yes",
      "dressCode": "Smart casual",
      "tip": "Beloved local spot for Day 6 lunch — pide baked in a wood oven and lahmacun with fresh herbs.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Nihat%20Usta%20Trabzon",
      "bookUrl": "https://www.google.com/maps/search/?api=1&query=Nihat%20Usta%20Trabzon",
      "dishes": [
        {
          "name": "Karadeniz Pide",
          "img": "https://upload.wikimedia.org/wikipedia/commons/6/65/N%C4%B0HAT_USTA.jpg",
          "desc": "Boat-shaped flatbread with cheese and egg."
        },
        {
          "name": "Lahmacun",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Karadeniz_pide_-_panoramio.jpg/960px-Karadeniz_pide_-_panoramio.jpg",
          "desc": "Thin crispy base with spiced minced meat."
        },
        {
          "name": "Ayran",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Karde%C5%9Fler_karadeniz_pide_-_panoramio.jpg/960px-Karde%C5%9Fler_karadeniz_pide_-_panoramio.jpg",
          "desc": "Essential alongside pide."
        },
        {
          "name": "Künefe",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Peynirli_pide_from_G%C3%B6rele.jpg/960px-Peynirli_pide_from_G%C3%B6rele.jpg",
          "desc": "If you still have room — worth it."
        },
        {
          "name": "Turkish Coffee",
          "img": "https://upload.wikimedia.org/wikipedia/commons/6/65/N%C4%B0HAT_USTA.jpg",
          "desc": "Finish strong."
        }
      ],
      "photos": {
        "signature": "https://upload.wikimedia.org/wikipedia/commons/6/65/N%C4%B0HAT_USTA.jpg",
        "interior": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Karadeniz_pide_-_panoramio.jpg/960px-Karadeniz_pide_-_panoramio.jpg",
        "exterior": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Karde%C5%9Fler_karadeniz_pide_-_panoramio.jpg/960px-Karde%C5%9Fler_karadeniz_pide_-_panoramio.jpg",
        "dessert": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Peynirli_pide_from_G%C3%B6rele.jpg/960px-Peynirli_pide_from_G%C3%B6rele.jpg",
        "coffee": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Karadeniz_pide_-_panoramio.jpg/960px-Karadeniz_pide_-_panoramio.jpg"
      }
    }
  ],
  "itineraries": [
    {
      "day": 1,
      "title": "Discover Trabzon City",
      "color": "#0f766e",
      "routePreview": "8 stops · start 08:30 · end 19:30 · ≈ 5 km",
      "mapUrl": "https://www.google.com/maps/dir/Beton+Helva+Kahvalti+Trabzon/Trabzon+Museum/Meydan+Square+Trabzon/Zagnos+Valley+Park/Boztepe/Cephanelik+Restaurant+Trabzon",
      "budget": {
        "budget": {
          "total": "€60–90 per person",
          "includes": [
            "Dolmuş & walking",
            "Local pide & köfte",
            "Free parks & viewpoints",
            "Museum entry"
          ]
        },
        "mid": {
          "total": "€120–180 per person",
          "includes": [
            "Car rental share",
            "Sit-down meals",
            "Sümela ticket",
            "Boat ride at Sera Lake"
          ]
        },
        "luxury": {
          "total": "€250–450 per person",
          "includes": [
            "Private driver",
            "Seafood dinners",
            "Luxury hotel",
            "Zipline & hot springs at Ayder"
          ]
        }
      },
      "photos": [
        "https://upload.wikimedia.org/wikipedia/commons/6/64/TurkishBreakfastAtCesme.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Trabzon_museum.jpg/960px-Trabzon_museum.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Trabzon_Meydan.jpg/960px-Trabzon_Meydan.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Turkish_coffee_in_Istanbul.jpg/960px-Turkish_coffee_in_Istanbul.jpg"
      ],
      "stops": [
        {
          "time": "08:30",
          "timeOfDay": "morning",
          "name": "Beton Helva Kahvaltı",
          "desc": "Traditional Black Sea Breakfast · kahvaltı spread",
          "transit": "Walk or taxi from hotel",
          "icon": "walk",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Beton%20Helva%20Kahvalt%C4%B1%20Trabzon"
        },
        {
          "time": "10:00",
          "timeOfDay": "morning",
          "name": "Trabzon Museum",
          "desc": "Ottoman & Byzantine history · Kostaki Mansion",
          "transit": "Walk 5 min",
          "icon": "walk",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Trabzon%20Museum"
        },
        {
          "time": "11:30",
          "timeOfDay": "morning",
          "name": "Meydan Square",
          "desc": "Local cafés · shopping · street life",
          "transit": "Walk 5 min",
          "icon": "walk",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Meydan%20Square%20Trabzon"
        },
        {
          "time": "12:30",
          "timeOfDay": "afternoon",
          "name": "Neşve Coffee",
          "desc": "Coffee break · specialty roasts",
          "transit": "Walk 3 min",
          "icon": "walk",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Ne%C5%9Fve%20Coffee%20Trabzon"
        },
        {
          "time": "13:30",
          "timeOfDay": "afternoon",
          "name": "Cemilusta Akçaabat Köfte",
          "desc": "Famous Akçaabat meatballs · charcoal grilled",
          "transit": "Taxi 20 min",
          "icon": "cab",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Cemilusta%20Ak%C3%A7aabat%20K%C3%B6fte%20Trabzon"
        },
        {
          "time": "15:00",
          "timeOfDay": "afternoon",
          "name": "Zagnos Valley Park",
          "desc": "Historic bridges · walking trails",
          "transit": "Taxi 15 min",
          "icon": "cab",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Zagnos%20Valley%20Park%20Trabzon"
        },
        {
          "time": "17:00",
          "timeOfDay": "evening",
          "name": "Boztepe",
          "desc": "Tea with panoramic city views · sunset",
          "transit": "Taxi 10 min",
          "icon": "cab",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Boztepe%20Trabzon"
        },
        {
          "time": "19:30",
          "timeOfDay": "night",
          "name": "Cephanelik Restaurant",
          "desc": "Dinner with beautiful night view over Trabzon",
          "transit": "Walk 5 min on Boztepe",
          "icon": "walk",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Cephanelik%20Restaurant%20Trabzon"
        }
      ]
    },
    {
      "day": 2,
      "title": "Sümela Monastery",
      "color": "#059669",
      "routePreview": "4 stops · start 08:00 · end 18:30 · 1 hr drive each way",
      "mapUrl": "https://www.google.com/maps/dir/Trabzon/Sumela+Monastery/Hamsikoy/Altindere+National+Park/Trabzon",
      "budget": {
        "budget": {
          "total": "€60–90 per person",
          "includes": [
            "Dolmuş & walking",
            "Local pide & köfte",
            "Free parks & viewpoints",
            "Museum entry"
          ]
        },
        "mid": {
          "total": "€120–180 per person",
          "includes": [
            "Car rental share",
            "Sit-down meals",
            "Sümela ticket",
            "Boat ride at Sera Lake"
          ]
        },
        "luxury": {
          "total": "€250–450 per person",
          "includes": [
            "Private driver",
            "Seafood dinners",
            "Luxury hotel",
            "Zipline & hot springs at Ayder"
          ]
        }
      },
      "photos": [
        "https://upload.wikimedia.org/wikipedia/commons/4/44/Sumela_Monastery_%282674159860%29.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Hamsik%C3%B6y_-_panoramio.jpg/960px-Hamsik%C3%B6y_-_panoramio.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Alt%C4%B1ndere_Valley_National_Park_01.jpg/960px-Alt%C4%B1ndere_Valley_National_Park_01.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Trebisonda%2C_ponte_di_za%C4%9Fnos_01.jpg/960px-Trebisonda%2C_ponte_di_za%C4%9Fnos_01.jpg"
      ],
      "stops": [
        {
          "time": "08:00",
          "timeOfDay": "morning",
          "name": "Breakfast at Hotel",
          "desc": "Early start · fill up before the drive",
          "transit": "Hotel restaurant",
          "icon": "walk",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Zorlu%20Grand%20Hotel%20Trabzon"
        },
        {
          "time": "09:30",
          "timeOfDay": "morning",
          "name": "Sümela Monastery",
          "desc": "3 hours exploring the cliffside monastery",
          "transit": "Drive 1 hour from Trabzon",
          "icon": "cab",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=S%C3%BCmela%20Monastery%20Trabzon"
        },
        {
          "time": "13:00",
          "timeOfDay": "afternoon",
          "name": "Hamsiköy",
          "desc": "Lunch · famous rice pudding (sütlaç)",
          "transit": "Drive 20 min",
          "icon": "cab",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Hamsik%C3%B6y%20Trabzon"
        },
        {
          "time": "15:00",
          "timeOfDay": "afternoon",
          "name": "Altındere National Park",
          "desc": "Easy walking trails · river views",
          "transit": "Drive 5 min",
          "icon": "cab",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Alt%C4%B1ndere%20National%20Park%20Trabzon"
        },
        {
          "time": "18:30",
          "timeOfDay": "evening",
          "name": "Return to Trabzon",
          "desc": "Drive back · rest before tomorrow",
          "transit": "Drive 1 hour",
          "icon": "cab",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Trabzon%20city%20centre"
        }
      ]
    },
    {
      "day": 3,
      "title": "Uzungöl Lake",
      "color": "#0891b2",
      "routePreview": "4 stops · start 08:00 · end 18:00 · 1.5 hr drive",
      "mapUrl": "https://www.google.com/maps/dir/Trabzon/Uzungol+Lake/Inan+Kardesler+Restaurant+Uzungol/Trabzon",
      "budget": {
        "budget": {
          "total": "€60–90 per person",
          "includes": [
            "Dolmuş & walking",
            "Local pide & köfte",
            "Free parks & viewpoints",
            "Museum entry"
          ]
        },
        "mid": {
          "total": "€120–180 per person",
          "includes": [
            "Car rental share",
            "Sit-down meals",
            "Sümela ticket",
            "Boat ride at Sera Lake"
          ]
        },
        "luxury": {
          "total": "€250–450 per person",
          "includes": [
            "Private driver",
            "Seafood dinners",
            "Luxury hotel",
            "Zipline & hot springs at Ayder"
          ]
        }
      },
      "photos": [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Uzung%C3%B6l_lake_and_town.jpg/960px-Uzung%C3%B6l_lake_and_town.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Uzungol_Trout_restaurant_and_mosque.jpg/960px-Uzungol_Trout_restaurant_and_mosque.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Trebisonda%2C_ponte_di_za%C4%9Fnos_01.jpg/960px-Trebisonda%2C_ponte_di_za%C4%9Fnos_01.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Trebisonda%2C_ponte_di_za%C4%9Fnos_01.jpg/960px-Trebisonda%2C_ponte_di_za%C4%9Fnos_01.jpg"
      ],
      "stops": [
        {
          "time": "08:00",
          "timeOfDay": "morning",
          "name": "Drive to Uzungöl",
          "desc": "1.5 hours through mountain scenery",
          "transit": "Car or organised tour",
          "icon": "cab",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Uzung%C3%B6l%20Lake%20Trabzon"
        },
        {
          "time": "10:00",
          "timeOfDay": "morning",
          "name": "Uzungöl Lake",
          "desc": "Walk around the lake · photography",
          "transit": "Arrive and park",
          "icon": "walk",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Uzung%C3%B6l%20Lake%20Trabzon"
        },
        {
          "time": "12:30",
          "timeOfDay": "afternoon",
          "name": "İnan Kardeşler Restaurant",
          "desc": "Fresh trout · lakeside terrace",
          "transit": "Walk 5 min",
          "icon": "walk",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=%C4%B0nan%20Karde%C5%9Fler%20Restaurant%20Uzung%C3%B6l%20Trabzon"
        },
        {
          "time": "14:00",
          "timeOfDay": "afternoon",
          "name": "Tea Plantation & Viewpoints",
          "desc": "Mountain viewpoints · çay fields",
          "transit": "Walk uphill 30 min",
          "icon": "walk",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Uzung%C3%B6l%20tea%20plantation%20Trabzon"
        },
        {
          "time": "18:00",
          "timeOfDay": "evening",
          "name": "Return to Trabzon",
          "desc": "Drive back · evening at leisure",
          "transit": "Drive 1.5 hours",
          "icon": "cab",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Trabzon%20city%20centre"
        }
      ]
    },
    {
      "day": 4,
      "title": "Ayder Plateau",
      "color": "#115e59",
      "routePreview": "6 stops · full day · 2 hr drive each way",
      "mapUrl": "https://www.google.com/maps/dir/Trabzon/Ayder+Plateau/Gelin+Tulu+Waterfall/Trabzon",
      "budget": {
        "budget": {
          "total": "€60–90 per person",
          "includes": [
            "Dolmuş & walking",
            "Local pide & köfte",
            "Free parks & viewpoints",
            "Museum entry"
          ]
        },
        "mid": {
          "total": "€120–180 per person",
          "includes": [
            "Car rental share",
            "Sit-down meals",
            "Sümela ticket",
            "Boat ride at Sera Lake"
          ]
        },
        "luxury": {
          "total": "€250–450 per person",
          "includes": [
            "Private driver",
            "Seafood dinners",
            "Luxury hotel",
            "Zipline & hot springs at Ayder"
          ]
        }
      },
      "photos": [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Gelin_Tulu_Waterfall.jpg/960px-Gelin_Tulu_Waterfall.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Ayder_Yaylas%C4%B1_-_panoramio.jpg/960px-Ayder_Yaylas%C4%B1_-_panoramio.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Trebisonda%2C_ponte_di_za%C4%9Fnos_01.jpg/960px-Trebisonda%2C_ponte_di_za%C4%9Fnos_01.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Trebisonda%2C_ponte_di_za%C4%9Fnos_01.jpg/960px-Trebisonda%2C_ponte_di_za%C4%9Fnos_01.jpg"
      ],
      "stops": [
        {
          "time": "07:30",
          "timeOfDay": "morning",
          "name": "Drive to Ayder Plateau",
          "desc": "2 hours · winding mountain road · start early",
          "transit": "Car essential",
          "icon": "cab",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Ayder%20Plateau%20Trabzon"
        },
        {
          "time": "10:00",
          "timeOfDay": "morning",
          "name": "Gelin Tülü Waterfall",
          "desc": "Bridal Veil waterfall · photo stop",
          "transit": "En route to Ayder",
          "icon": "walk",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Gelin%20T%C3%BCl%C3%BC%20Waterfall%20Trabzon"
        },
        {
          "time": "11:30",
          "timeOfDay": "morning",
          "name": "Ayder Plateau",
          "desc": "Highland village · wooden architecture · fresh air",
          "transit": "Arrive plateau",
          "icon": "walk",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Ayder%20Plateau%20Trabzon"
        },
        {
          "time": "13:00",
          "timeOfDay": "afternoon",
          "name": "Mountain Restaurant Lunch",
          "desc": "Local trout or muhlama · plateau dining",
          "transit": "Walk in village",
          "icon": "walk",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Ayder%20Plateau%20restaurant%20Trabzon"
        },
        {
          "time": "15:00",
          "timeOfDay": "afternoon",
          "name": "Zipline",
          "desc": "Adrenaline over the valley · optional",
          "transit": "On plateau",
          "icon": "walk",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Ayder%20zipline%20Trabzon"
        },
        {
          "time": "16:30",
          "timeOfDay": "afternoon",
          "name": "Hot Springs",
          "desc": "Thermal soak · relax before the drive back",
          "transit": "Walk 5 min",
          "icon": "walk",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Ayder%20hot%20springs%20Trabzon"
        },
        {
          "time": "19:00",
          "timeOfDay": "evening",
          "name": "Return to Trabzon",
          "desc": "Long drive · early night recommended",
          "transit": "Drive 2 hours",
          "icon": "cab",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Trabzon%20city%20centre"
        }
      ]
    },
    {
      "day": 5,
      "title": "Sera Lake & Akçaabat",
      "color": "#0d9488",
      "routePreview": "5 stops · start 09:00 · end sunset · ≈ 30 km",
      "mapUrl": "https://www.google.com/maps/dir/Sera+Lake+Trabzon/Balik+Restaurant+Sera+Lake/Akcaabat/Trabzon",
      "budget": {
        "budget": {
          "total": "€60–90 per person",
          "includes": [
            "Dolmuş & walking",
            "Local pide & köfte",
            "Free parks & viewpoints",
            "Museum entry"
          ]
        },
        "mid": {
          "total": "€120–180 per person",
          "includes": [
            "Car rental share",
            "Sit-down meals",
            "Sümela ticket",
            "Boat ride at Sera Lake"
          ]
        },
        "luxury": {
          "total": "€250–450 per person",
          "includes": [
            "Private driver",
            "Seafood dinners",
            "Luxury hotel",
            "Zipline & hot springs at Ayder"
          ]
        }
      },
      "photos": [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Sera_G%C3%B6l%C3%BC.._-_panoramio.jpg/960px-Sera_G%C3%B6l%C3%BC.._-_panoramio.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/BalikEkmek.jpg/960px-BalikEkmek.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Ortamahalle.jpg/960px-Ortamahalle.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Trebisonda%2C_ponte_di_za%C4%9Fnos_01.jpg/960px-Trebisonda%2C_ponte_di_za%C4%9Fnos_01.jpg"
      ],
      "stops": [
        {
          "time": "09:00",
          "timeOfDay": "morning",
          "name": "Sera Lake",
          "desc": "Boat ride · lakeside cafés · morning calm",
          "transit": "Drive 20 min",
          "icon": "cab",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Sera%20Lake%20Trabzon"
        },
        {
          "time": "12:00",
          "timeOfDay": "afternoon",
          "name": "Balık Restaurant",
          "desc": "Fresh fish lunch · lakeside",
          "transit": "Walk 2 min",
          "icon": "walk",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Bal%C4%B1k%20Restaurant%20Sera%20Lake%20Trabzon"
        },
        {
          "time": "14:00",
          "timeOfDay": "afternoon",
          "name": "Akçaabat",
          "desc": "Famous meatballs · local markets",
          "transit": "Drive 15 min",
          "icon": "cab",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Ak%C3%A7aabat%20Trabzon"
        },
        {
          "time": "16:00",
          "timeOfDay": "afternoon",
          "name": "Akçaabat Waterfront",
          "desc": "Promenade walk · shopping · tea",
          "transit": "Walk",
          "icon": "walk",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Ak%C3%A7aabat%20waterfront%20Trabzon"
        },
        {
          "time": "18:30",
          "timeOfDay": "evening",
          "name": "Sunset",
          "desc": "Black Sea horizon · end Day 5 slowly",
          "transit": "Waterfront",
          "icon": "walk",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Ak%C3%A7aabat%20coast%20Trabzon"
        }
      ]
    },
    {
      "day": 6,
      "title": "Nature & Relaxation",
      "color": "#047857",
      "routePreview": "6 stops · start 10:00 · end 20:00 · city day",
      "mapUrl": "https://www.google.com/maps/dir/Trabzon+Botanical+Garden/Ataturk+Pavilion+Trabzon/Nihat+Usta+Trabzon/Trabzon+Aquarium/Forum+Trabzon",
      "budget": {
        "budget": {
          "total": "€60–90 per person",
          "includes": [
            "Dolmuş & walking",
            "Local pide & köfte",
            "Free parks & viewpoints",
            "Museum entry"
          ]
        },
        "mid": {
          "total": "€120–180 per person",
          "includes": [
            "Car rental share",
            "Sit-down meals",
            "Sümela ticket",
            "Boat ride at Sera Lake"
          ]
        },
        "luxury": {
          "total": "€250–450 per person",
          "includes": [
            "Private driver",
            "Seafood dinners",
            "Luxury hotel",
            "Zipline & hot springs at Ayder"
          ]
        }
      },
      "photos": [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Ye%C5%9Fillikler_Ard%C4%B1nda_Sera_G%C3%B6l%C3%BC.jpg/960px-Ye%C5%9Fillikler_Ard%C4%B1nda_Sera_G%C3%B6l%C3%BC.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Trabzon_Atat%C3%BCrk_K%C3%B6%C5%9Fk%C3%BC_%281%29.JPG/960px-Trabzon_Atat%C3%BCrk_K%C3%B6%C5%9Fk%C3%BC_%281%29.JPG",
        "https://upload.wikimedia.org/wikipedia/commons/6/65/N%C4%B0HAT_USTA.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Faroz%2C_Trabzon.jpg/960px-Faroz%2C_Trabzon.jpg"
      ],
      "stops": [
        {
          "time": "10:00",
          "timeOfDay": "morning",
          "name": "Trabzon Botanical Garden",
          "desc": "Native Black Sea flora · peaceful morning",
          "transit": "Taxi 10 min",
          "icon": "cab",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Trabzon%20Botanical%20Garden"
        },
        {
          "time": "11:30",
          "timeOfDay": "morning",
          "name": "Atatürk Pavilion",
          "desc": "Historic hilltop mansion · museum",
          "transit": "Taxi 10 min",
          "icon": "cab",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Atat%C3%BCrk%20Pavilion%20Trabzon"
        },
        {
          "time": "13:00",
          "timeOfDay": "afternoon",
          "name": "Nihat Usta",
          "desc": "Pide & lahmacun · local favourite",
          "transit": "Taxi 15 min",
          "icon": "cab",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Nihat%20Usta%20Trabzon"
        },
        {
          "time": "15:00",
          "timeOfDay": "afternoon",
          "name": "Trabzon Aquarium",
          "desc": "Tunnel aquarium · families welcome",
          "transit": "Taxi 15 min",
          "icon": "cab",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Trabzon%20Aquarium"
        },
        {
          "time": "17:00",
          "timeOfDay": "evening",
          "name": "Forum Trabzon",
          "desc": "Shopping · cafés · modern mall",
          "transit": "Walk 1 min",
          "icon": "walk",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Forum%20Trabzon"
        },
        {
          "time": "19:00",
          "timeOfDay": "night",
          "name": "Optional · Meydan Evening",
          "desc": "Coffee · relax · last shopping",
          "transit": "Taxi 15 min",
          "icon": "cab",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Meydan%20Square%20Trabzon"
        }
      ]
    },
    {
      "day": 7,
      "title": "Free Day",
      "color": "#134e4a",
      "routePreview": "Choose your adventure · 3 options",
      "mapUrl": "https://www.google.com/maps/dir/Trabzon/Hidirnebi+Plateau/Cal+Cave/Forum+Trabzon",
      "budget": {
        "budget": {
          "total": "€60–90 per person",
          "includes": [
            "Dolmuş & walking",
            "Local pide & köfte",
            "Free parks & viewpoints",
            "Museum entry"
          ]
        },
        "mid": {
          "total": "€120–180 per person",
          "includes": [
            "Car rental share",
            "Sit-down meals",
            "Sümela ticket",
            "Boat ride at Sera Lake"
          ]
        },
        "luxury": {
          "total": "€250–450 per person",
          "includes": [
            "Private driver",
            "Seafood dinners",
            "Luxury hotel",
            "Zipline & hot springs at Ayder"
          ]
        }
      },
      "photos": [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Turkish_coffee_in_Istanbul.jpg/960px-Turkish_coffee_in_Istanbul.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Trebisonda%2C_ponte_di_za%C4%9Fnos_01.jpg/960px-Trebisonda%2C_ponte_di_za%C4%9Fnos_01.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Trebisonda%2C_ponte_di_za%C4%9Fnos_01.jpg/960px-Trebisonda%2C_ponte_di_za%C4%9Fnos_01.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Trebisonda%2C_ponte_di_za%C4%9Fnos_01.jpg/960px-Trebisonda%2C_ponte_di_za%C4%9Fnos_01.jpg"
      ],
      "stops": [
        {
          "time": "09:00",
          "timeOfDay": "morning",
          "name": "Option A · Hıdırnebi Plateau",
          "desc": "Highland meadows · less touristy · picnic",
          "transit": "Drive 1.5 hours",
          "icon": "cab",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=H%C4%B1d%C4%B1rnebi%20Plateau%20Trabzon"
        },
        {
          "time": "09:00",
          "timeOfDay": "morning",
          "name": "Option B · Çal Cave",
          "desc": "Underground stalactites · cool air · 1 hour visit",
          "transit": "Drive 1 hour",
          "icon": "cab",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=%C3%87al%20Cave%20Trabzon"
        },
        {
          "time": "10:00",
          "timeOfDay": "morning",
          "name": "Option C · Shopping & Coffee",
          "desc": "Forum Trabzon · Meydan · relax at a café",
          "transit": "Taxi or walk",
          "icon": "walk",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Forum%20Trabzon"
        },
        {
          "time": "14:00",
          "timeOfDay": "afternoon",
          "name": "Neşve Coffee",
          "desc": "Slow afternoon · reflect on the week",
          "transit": "Walk",
          "icon": "walk",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Ne%C5%9Fve%20Coffee%20Trabzon"
        },
        {
          "time": "19:00",
          "timeOfDay": "night",
          "name": "Farewell Dinner",
          "desc": "Return to Cephanelik or try a new meyhane",
          "transit": "Taxi",
          "icon": "cab",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Cephanelik%20Restaurant%20Trabzon"
        }
      ]
    }
  ],
  "rainyDay": [
    {
      "name": "Trabzon Museum",
      "address": "Kostaki Mansion",
      "desc": "Ottoman & Byzantine history · indoor",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Trabzon_museum.jpg/960px-Trabzon_museum.jpg",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Trabzon%20Museum"
    },
    {
      "name": "Trabzon Aquarium",
      "address": "Forum Trabzon",
      "desc": "Tunnel aquarium · families",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Faroz%2C_Trabzon.jpg/960px-Faroz%2C_Trabzon.jpg",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Trabzon%20Aquarium"
    },
    {
      "name": "Atatürk Pavilion",
      "address": "Soğuksu",
      "desc": "Historic mansion museum",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Trabzon_Atat%C3%BCrk_K%C3%B6%C5%9Fk%C3%BC_%281%29.JPG/960px-Trabzon_Atat%C3%BCrk_K%C3%B6%C5%9Fk%C3%BC_%281%29.JPG",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Atat%C3%BCrk%20Pavilion%20Trabzon"
    },
    {
      "name": "Forum Trabzon",
      "address": "Yomra",
      "desc": "Shopping mall · cafés · cinema",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Forum_AVM_TRABZON_-_panoramio.jpg/960px-Forum_AVM_TRABZON_-_panoramio.jpg",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Forum%20Trabzon"
    },
    {
      "name": "Neşve Coffee",
      "address": "Meydan",
      "desc": "Specialty coffee · cosy interior",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Turkish_coffee_in_Istanbul.jpg/960px-Turkish_coffee_in_Istanbul.jpg",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Ne%C5%9Fve%20Coffee%20Trabzon"
    },
    {
      "name": "Trabzon Botanical Garden",
      "address": "Ortahisar",
      "desc": "Greenhouse sections · sheltered walks",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Ye%C5%9Fillikler_Ard%C4%B1nda_Sera_G%C3%B6l%C3%BC.jpg/960px-Ye%C5%9Fillikler_Ard%C4%B1nda_Sera_G%C3%B6l%C3%BC.jpg",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Trabzon%20Botanical%20Garden"
    }
  ],
  "sunnyDay": [
    {
      "name": "Sümela Monastery",
      "address": "Maçka",
      "desc": "Cliffside wonder · forest trails",
      "img": "https://upload.wikimedia.org/wikipedia/commons/4/44/Sumela_Monastery_%282674159860%29.jpg",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=S%C3%BCmela%20Monastery%20Trabzon"
    },
    {
      "name": "Uzungöl Lake",
      "address": "Çaykara",
      "desc": "Alpine lake circuit · tea plantations",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Uzung%C3%B6l_lake_and_town.jpg/960px-Uzung%C3%B6l_lake_and_town.jpg",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Uzung%C3%B6l%20Lake%20Trabzon"
    },
    {
      "name": "Boztepe",
      "address": "Hilltop",
      "desc": "Panoramic tea with city views",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Boztepe%2C_Trabzon_-_panoramio.jpg/960px-Boztepe%2C_Trabzon_-_panoramio.jpg",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Boztepe%20Trabzon"
    },
    {
      "name": "Sera Lake",
      "address": "Yomra",
      "desc": "Boat ride · morning calm",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Sera_G%C3%B6l%C3%BC.._-_panoramio.jpg/960px-Sera_G%C3%B6l%C3%BC.._-_panoramio.jpg",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Sera%20Lake%20Trabzon"
    },
    {
      "name": "Zagnos Valley Park",
      "address": "Ortahisar",
      "desc": "Bridges · trails · shade",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Zagnos_Valley_Park_in_Trabzon_%281%29.jpg/960px-Zagnos_Valley_Park_in_Trabzon_%281%29.jpg",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Zagnos%20Valley%20Park%20Trabzon"
    },
    {
      "name": "Ayder Plateau",
      "address": "Çamlıhemşin",
      "desc": "Highland air · waterfall · hot springs",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Ayder_Yaylas%C4%B1_-_panoramio.jpg/960px-Ayder_Yaylas%C4%B1_-_panoramio.jpg",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Ayder%20Plateau%20Trabzon"
    }
  ],
  "hiddenGems": [
    {
      "name": "Hamsiköy Sütlaç",
      "desc": "Famous rice pudding village near Sümela",
      "img": "https://upload.wikimedia.org/wikipedia/commons/e/e3/S%C3%BCtla%C3%A7_%28Turkish_style_rice_pudding%29_in_Trabzon.jpg",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Hamsik%C3%B6y%20Trabzon"
    },
    {
      "name": "Hıdırnebi Plateau",
      "desc": "Quiet highland alternative to Ayder",
      "img": "https://upload.wikimedia.org/wikipedia/commons/c/cf/Hidirnebi.jpg",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=H%C4%B1d%C4%B1rnebi%20Plateau%20Trabzon"
    },
    {
      "name": "Çal Cave",
      "desc": "Underground stalactites · cool escape",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/%C3%87al_Ma%C4%9Faras%C4%B13.jpg/960px-%C3%87al_Ma%C4%9Faras%C4%B13.jpg",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%C3%87al%20Cave%20Trabzon"
    },
    {
      "name": "Zagnos Valley bridges",
      "desc": "Ottoman stone bridges · few tourists",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Trebisonda%2C_ponte_di_za%C4%9Fnos_01.jpg/960px-Trebisonda%2C_ponte_di_za%C4%9Fnos_01.jpg",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Zagnos%20Valley%20Park%20Trabzon"
    },
    {
      "name": "Akçaabat Tuesday Market",
      "desc": "Local honey · herbs · mountain produce",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/61300_Mersin-Ak%C3%A7aabat-Trabzon%2C_Turkey_-_panoramio.jpg/960px-61300_Mersin-Ak%C3%A7aabat-Trabzon%2C_Turkey_-_panoramio.jpg",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Ak%C3%A7aabat%20market%20Trabzon"
    },
    {
      "name": "Atatürk Pavilion garden",
      "desc": "Sea-facing bench · peaceful museum",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Atat%C3%BCrk_K%C3%B6%C5%9Fk%C3%BC-Trabzon-03.jpg/960px-Atat%C3%BCrk_K%C3%B6%C5%9Fk%C3%BC-Trabzon-03.jpg",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Atat%C3%BCrk%20Pavilion%20Trabzon"
    }
  ],
  "warnings": [
    {
      "title": "Mountain driving",
      "desc": "Roads to Uzungöl and Ayder are single-lane in sections. Start early, avoid night driving, and never pass on blind corners."
    },
    {
      "title": "Sümela queues",
      "desc": "Summer queues exceed 60 min without online booking. Buy tickets at muze.gov.tr and arrive by 09:30."
    },
    {
      "title": "Airport taxi touts",
      "desc": "Use official taxi rank at TZX or pre-book BiTaksi. Unlicensed drivers overcharge tourists."
    },
    {
      "title": "Weather in highlands",
      "desc": "Uzungöl and Ayder can be 10 °C cooler than the coast. Pack a jacket even in August."
    },
    {
      "title": "Cash in villages",
      "desc": "Hamsiköy and Ayder restaurants may not accept cards. Carry ₺500 in small notes."
    },
    {
      "title": "Monastery dress code",
      "desc": "Sümela requires modest dress — cover shoulders and knees. Scarves available at entrance."
    },
    {
      "title": "Currency exchange",
      "desc": "Never use airport FX booths. Withdraw lira from Ziraat ATMs for the best rate."
    }
  ],
  "shopping": {
    "districts": [
      {
        "name": "Meydan Square",
        "desc": "Local shops · souvenirs · daily life",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Trabzon_Meydan.jpg/960px-Trabzon_Meydan.jpg",
        "mapUrl": "https://www.google.com/maps/search/?api=1&query=Meydan%20Square%20Trabzon"
      },
      {
        "name": "Forum Trabzon",
        "desc": "Modern mall · international brands",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Forum_AVM_TRABZON_-_panoramio.jpg/960px-Forum_AVM_TRABZON_-_panoramio.jpg",
        "mapUrl": "https://www.google.com/maps/search/?api=1&query=Forum%20Trabzon"
      },
      {
        "name": "Akçaabat Market",
        "desc": "Tuesday market · honey · local produce",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/61300_%C3%87%C4%B1narl%C4%B1k-Ak%C3%A7aabat-Trabzon%2C_Turkey_-_panoramio.jpg/960px-61300_%C3%87%C4%B1narl%C4%B1k-Ak%C3%A7aabat-Trabzon%2C_Turkey_-_panoramio.jpg",
        "mapUrl": "https://www.google.com/maps/search/?api=1&query=Ak%C3%A7aabat%20market%20Trabzon"
      },
      {
        "name": "Uzungöl Souvenir Stalls",
        "desc": "Handcrafts · tea · mountain honey",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Uzung%C3%B6l_%288%29.jpg/960px-Uzung%C3%B6l_%288%29.jpg",
        "mapUrl": "https://www.google.com/maps/search/?api=1&query=Uzung%C3%B6l%20Lake%20Trabzon"
      }
    ],
    "brands": [
      "Karadeniz honey",
      "Hamsiköy sütlaç (jarred)",
      "Hand-woven socks",
      "Tea from Uzungöl plantations",
      "Akçaabat köfte spice mix"
    ],
    "souvenirs": [
      "Mountain honey",
      "Black Sea tea",
      "Hand-knit socks",
      "Sümela postcard",
      "Ceramic çay set"
    ],
    "vatTips": {
      "rate": "20% KDV",
      "refund": "Tax-free shopping for non-residents on purchases over ₺1,000 at participating stores. Ask for the form at checkout."
    }
  },
  "budget": {
    "budget": {
      "daily": "€60–90 per person / day",
      "accommodation": "€50 MELL Boutique or PEERLESS",
      "food": "₺150 pide & köfte",
      "transport": "₺200 dolmuş & taxi",
      "activities": "₺60 museum entry",
      "extras": "₺50 çay & snacks",
      "tip": "Walk the city centre. One splurge: Sümela ticket. Share car rental costs for highland days."
    },
    "mid": {
      "daily": "€120–180 per person / day",
      "accommodation": "€90 Novotel or Zorlu Grand",
      "food": "₺400 sit-down meals",
      "transport": "€35 car rental share",
      "activities": "₺150 Sümela + boat ride",
      "extras": "₺100 zipline at Ayder"
    },
    "luxury": {
      "daily": "€250–450 per person / day",
      "accommodation": "€180 Radisson Blu Boztepe",
      "food": "₺800 Cephanelik seafood dinner",
      "transport": "€60 private driver",
      "activities": "€80 organised tours",
      "extras": "₺200 spa & tips"
    }
  },
  "family": {
    "tip": "Children under 6 often enter museums free. Trabzon Aquarium and Uzungöl lake walk are the best family activities. Car seats available from rental agencies — request when booking.",
    "rows": [
      {
        "attraction": "Trabzon Aquarium",
        "desc": "Tunnel aquarium delights all ages",
        "goodForKids": true,
        "stroller": true,
        "babyChange": true,
        "familyTicket": true
      },
      {
        "attraction": "Uzungöl Lake",
        "desc": "Flat lakeside walk · easy for strollers",
        "goodForKids": true,
        "stroller": true,
        "babyChange": false,
        "familyTicket": true
      },
      {
        "attraction": "Sümela Monastery",
        "desc": "Steep final climb · not for toddlers",
        "goodForKids": false,
        "stroller": false,
        "babyChange": false,
        "familyTicket": true
      },
      {
        "attraction": "Sera Lake boat ride",
        "desc": "Calm morning boats · life jackets",
        "goodForKids": true,
        "stroller": true,
        "babyChange": false,
        "familyTicket": true
      },
      {
        "attraction": "Trabzon Botanical Garden",
        "desc": "Run free on lawns",
        "goodForKids": true,
        "stroller": true,
        "babyChange": true,
        "familyTicket": true
      },
      {
        "attraction": "Ayder zipline",
        "desc": "Age/height restrictions apply",
        "goodForKids": true,
        "stroller": false,
        "babyChange": false,
        "familyTicket": false
      },
      {
        "attraction": "Forum Trabzon",
        "desc": "Indoor mall · cinema · food court",
        "goodForKids": true,
        "stroller": true,
        "babyChange": true,
        "familyTicket": true
      }
    ]
  },
  "emergency": {
    "numbers": [
      {
        "label": "112",
        "desc": "All emergencies · ambulance · fire · police",
        "icon": "emergency"
      },
      {
        "label": "155",
        "desc": "Police direct line",
        "icon": "police"
      },
      {
        "label": "110",
        "desc": "Fire brigade",
        "icon": "emergency"
      },
      {
        "label": "+90 312 292 29 29",
        "desc": "Foreign Ministry · lost passport",
        "icon": "passport"
      }
    ],
    "hospitals": [
      {
        "name": "Karadeniz Technical University Farabi Hospital",
        "address": "Ortahisar · Trabzon",
        "icon": "hospital",
        "mapUrl": "https://www.google.com/maps/search/?api=1&query=Farabi%20Hospital%20Trabzon"
      },
      {
        "name": "Trabzon Kanuni Training Hospital",
        "address": "Ortahisar · Trabzon",
        "icon": "hospital",
        "mapUrl": "https://www.google.com/maps/search/?api=1&query=Kanuni%20Hospital%20Trabzon"
      },
      {
        "name": "Private Trabzon Medical Park",
        "address": "Yomra · Trabzon",
        "icon": "hospital",
        "mapUrl": "https://www.google.com/maps/search/?api=1&query=Medical%20Park%20Trabzon"
      }
    ],
    "embassies": [
      {
        "country": "Saudi Arabia",
        "address": "Ankara · contact before travel",
        "icon": "embassy",
        "mapUrl": "https://www.google.com/maps/search/?api=1&query=Saudi+Embassy+Ankara"
      },
      {
        "country": "United Arab Emirates",
        "address": "Ankara · consular services",
        "icon": "embassy",
        "mapUrl": "https://www.google.com/maps/search/?api=1&query=UAE+Embassy+Ankara"
      },
      {
        "country": "Kuwait",
        "address": "Ankara · consular services",
        "icon": "embassy",
        "mapUrl": "https://www.google.com/maps/search/?api=1&query=Kuwait+Embassy+Ankara"
      },
      {
        "country": "Qatar",
        "address": "Ankara · consular services",
        "icon": "embassy",
        "mapUrl": "https://www.google.com/maps/search/?api=1&query=Qatar+Embassy+Ankara"
      },
      {
        "country": "Bahrain",
        "address": "Ankara · consular services",
        "icon": "embassy",
        "mapUrl": "https://www.google.com/maps/search/?api=1&query=Bahrain+Embassy+Ankara"
      },
      {
        "country": "Oman",
        "address": "Ankara · consular services",
        "icon": "embassy",
        "mapUrl": "https://www.google.com/maps/search/?api=1&query=Oman+Embassy+Ankara"
      }
    ],
    "lostPassport": "Report to the nearest police station (155). Contact your embassy in Ankara — they can issue an emergency travel document within 48–72 h. Take photos of your passport before you fly."
  },
  "phrases": [
    {
      "english": "Hello",
      "use": "Merhaba — opens every conversation"
    },
    {
      "english": "Thank you",
      "use": "Teşekkürler — locals appreciate it"
    },
    {
      "english": "How much is this?",
      "use": "Market and taxi negotiation"
    },
    {
      "english": "Could I have tea, please?",
      "use": "Çay istiyorum, lütfen — essential"
    },
    {
      "english": "Where is the dolmuş stop?",
      "use": "City navigation"
    },
    {
      "english": "Is there a table for two?",
      "use": "Restaurant arrival"
    },
    {
      "english": "Could we have the bill, please?",
      "use": "Hesap, lütfen — end of meal"
    },
    {
      "english": "Slowly, please (driving)",
      "use": "Yavaş, lütfen — mountain roads"
    }
  ],
  "cheatSheet": {
    "title": "One-Page Cheat Sheet",
    "subtitle": "Screenshot before your flight — every essential in one glance.",
    "emergency": [
      {
        "label": "112",
        "value": "All emergencies"
      },
      {
        "label": "155",
        "value": "Police"
      },
      {
        "label": "110",
        "value": "Fire"
      }
    ],
    "transport": [
      {
        "label": "€30–60/day",
        "value": "Car rental essential"
      },
      {
        "label": "₺15–30",
        "value": "Dolmuş in city"
      },
      {
        "label": "BiTaksi",
        "value": "App for taxis"
      }
    ],
    "money": [
      {
        "label": "Cash in villages",
        "value": "Carry ₺500"
      },
      {
        "label": "Cards in hotels",
        "value": "Widely accepted"
      },
      {
        "label": "Tip 10%",
        "value": "Round up taxis"
      }
    ],
    "apps": [
      {
        "name": "BiTaksi",
        "use": "Taxi booking"
      },
      {
        "name": "Google Maps",
        "use": "Navigation · offline maps"
      },
      {
        "name": "Yandex Maps",
        "use": "Alternative navigation"
      }
    ],
    "topQrCodes": [
      {
        "name": "Trabzon Airport (TZX)",
        "mapUrl": "https://www.google.com/maps/search/?api=1&query=Trabzon+Airport"
      },
      {
        "name": "Sümela Monastery",
        "mapUrl": "https://www.google.com/maps/search/?api=1&query=S%C3%BCmela%20Monastery%20Trabzon"
      },
      {
        "name": "Uzungöl Lake",
        "mapUrl": "https://www.google.com/maps/search/?api=1&query=Uzung%C3%B6l%20Lake%20Trabzon"
      },
      {
        "name": "Meydan Square",
        "mapUrl": "https://www.google.com/maps/search/?api=1&query=Meydan%20Square%20Trabzon"
      },
      {
        "name": "Radisson Blu Hotel Trabzon",
        "mapUrl": "https://www.google.com/maps/search/?api=1&query=Radisson%20Blu%20Hotel%20Trabzon"
      },
      {
        "name": "Zorlu Grand Hotel",
        "mapUrl": "https://www.google.com/maps/search/?api=1&query=Zorlu%20Grand%20Hotel%20Trabzon"
      },
      {
        "name": "Farabi Hospital",
        "mapUrl": "https://www.google.com/maps/search/?api=1&query=Farabi%20Hospital%20Trabzon"
      },
      {
        "name": "Boztepe",
        "mapUrl": "https://www.google.com/maps/search/?api=1&query=Boztepe%20Trabzon"
      }
    ]
  },
  "etiquette": [
    {
      "rule": "Remove shoes indoors",
      "desc": "Take off shoes when entering homes, mosques and some traditional restaurants. Look for a shoe rack."
    },
    {
      "rule": "Tea is hospitality",
      "desc": "Accepting çay is a social contract. Refusing repeatedly can cause offence — at least sip once."
    },
    {
      "rule": "Dress at monasteries",
      "desc": "Sümela requires covered shoulders and knees. Women may want a scarf — available at the entrance."
    },
    {
      "rule": "Photograph respectfully",
      "desc": "Ask before photographing locals in villages. Monasteries allow photos outside but check inside rules."
    },
    {
      "rule": "Haggle gently",
      "desc": "Markets expect negotiation but keep it friendly. Start at 60% of the asking price and meet in the middle."
    },
    {
      "rule": "Respect the highlands",
      "desc": "Ayder and Uzungöl are living communities, not theme parks. Keep voices down and take litter home."
    },
    {
      "rule": "Ramadan awareness",
      "desc": "During Ramadan, eating in public during daylight is discouraged. Restaurants still serve tourists discreetly."
    }
  ]
};
