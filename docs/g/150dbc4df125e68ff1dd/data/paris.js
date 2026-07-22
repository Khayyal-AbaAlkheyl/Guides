/**
 * DISCOVER Paris — 4-Day First-Time Visitor Guide
 * Real place photos via Wikimedia Commons (CC-licensed)
 */
const PLAN = {
  "meta": {
    "city": "Paris",
    "country": "France",
    "tagline": "From sunrise beneath the Eiffel Tower to midnight walks along the Seine.",
    "badge": "Discover · 2026 Edition",
    "edition": "2026",
    "stats": {
      "chapters": 42,
      "qrCodes": "150+",
      "attractions": 22,
      "hotels": 9,
      "dining": 17,
      "days": 4
    },
    "theme": {
      "accent": "#2c5282",
      "accentSoft": "#ebf4ff",
      "accentDeep": "#1a365d",
      "transitLabel": "Metro",
      "tube": "#2c5282",
      "parks": "#2d6a4f",
      "river": "#0077b6",
      "gold": "#b8860b",
      "navy": "#1a2744",
      "heroImage": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Tour_Eiffel_Wikimedia_Commons_%28cropped%29.jpg/960px-Tour_Eiffel_Wikimedia_Commons_%28cropped%29.jpg"
    }
  },
  "welcome": {
    "editorLetter": "Paris is not a checklist — it is a rhythm. Sunrise beneath the iron lace of the Eiffel Tower, a croissant on a Saint-Germain terrace, the Louvre before the crowds, Montmartre at golden hour, and a midnight walk along the Seine. This companion was built for first-time visitors who want every hour accounted for and every QR code to open the right door in Google Maps.\n\nEvery attraction, hotel, restaurant, hospital and embassy in these pages carries a scannable map link. Every day plan has a timeline, a full-route QR, and a walking distance. Hold it, follow it, and let Paris unfold.",
    "howToUse": "Point your phone camera at any QR code and the location opens in Google Maps in one tap. Every website and booking link is also clickable in the PDF. Colour-coded day chapters make navigation effortless.\n\n— The Editors, Paris Bureau"
  },
  "essentials": {
    "currency": {
      "label": "€ Euro",
      "note": "Cards accepted almost everywhere. Notify your bank before travel."
    },
    "power": {
      "label": "Type C/E · 230V",
      "note": "European two-pin plug. Bring a universal adapter."
    },
    "sim": {
      "label": "eSIM or airport SIM",
      "note": "Orange, SFR, Bouygues. eSIM activates on landing Wi-Fi."
    },
    "language": {
      "label": "French",
      "note": "English widely spoken in hotels and major sights. Bonjour opens every door."
    },
    "tipping": {
      "label": "10% or round up",
      "note": "Service compris often included — add 5–10% for excellent service."
    },
    "emergency": {
      "label": "112 · 15 · 17 · 18",
      "note": "European emergency · SAMU · Police · Fire."
    },
    "tapWater": {
      "label": "Safe to drink",
      "note": "Paris tap water is excellent — cafés will refill your bottle."
    },
    "timezone": {
      "label": "CET / CEST +1",
      "note": "Clocks change last Sunday of March & October."
    }
  },
  "arrival": [
    {
      "step": "01",
      "title": "Border",
      "desc": "Follow signs to Contrôle des Passeports. Have accommodation address and return ticket ready. EU e-gates for eligible passports."
    },
    {
      "step": "02",
      "title": "SIM / eSIM",
      "desc": "Activate your eSIM on airport Wi-Fi. Or buy an Orange Holiday SIM from arrivals (€40 for 20GB + calls)."
    },
    {
      "step": "03",
      "title": "Cash",
      "desc": "Withdraw €50–€100 from a BNP or Société Générale ATM — never the Travelex booth. Cards work everywhere but keep coins for cafés."
    },
    {
      "step": "04",
      "title": "RER, not taxi",
      "desc": "CDG to Châtelet-Les Halles: RER B, 35 min, €11.45. ORY to Denfert-Rochereau: RER B, 30 min, €10.30."
    },
    {
      "step": "05",
      "title": "Navigo / Contactless",
      "desc": "Tap your contactless card at Metro gates. Single rides €2.15. For 4+ days consider Navigo Easy card at any Metro station."
    },
    {
      "step": "06",
      "title": "Hotel",
      "desc": "Check-in from 15:00. Luxury hotels hold luggage from 09:00 — drop bags and start Day 1 immediately."
    },
    {
      "step": "07",
      "title": "First meal",
      "desc": "Head to Café de Flore or Angelina for café crème and a croissant. Recover, then walk the Seine at dusk."
    }
  ],
  "packing": {
    "spring": {
      "months": "MAR–MAY",
      "temp": "8–18 °C · showers possible",
      "items": [
        "Light waterproof jacket",
        "Layerable knit",
        "Compact umbrella",
        "Walking shoes",
        "Sunglasses",
        "Crossbody bag"
      ]
    },
    "summer": {
      "months": "JUN–AUG",
      "temp": "18–28 °C · long evenings",
      "items": [
        "Linen shirts",
        "Light dress or blazer",
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
        "Scarf",
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
        "avgTemp": "3 / 7 °C",
        "rain": "50%",
        "sunset": "17:30",
        "crowds": "Low",
        "recommend": "Museums · Sales"
      },
      {
        "month": "Feb",
        "avgTemp": "3 / 8 °C",
        "rain": "45%",
        "sunset": "18:15",
        "crowds": "Low",
        "recommend": "Cafés · Covered passages"
      },
      {
        "month": "Mar",
        "avgTemp": "5 / 12 °C",
        "rain": "45%",
        "sunset": "19:00",
        "crowds": "Rising",
        "recommend": "Tuileries awakening"
      },
      {
        "month": "Apr",
        "avgTemp": "7 / 15 °C",
        "rain": "45%",
        "sunset": "20:30",
        "crowds": "Medium",
        "recommend": "Cherry blossom · Seine"
      },
      {
        "month": "May",
        "avgTemp": "11 / 19 °C",
        "rain": "50%",
        "sunset": "21:15",
        "crowds": "Medium",
        "recommend": "Perfect walking weather"
      },
      {
        "month": "Jun",
        "avgTemp": "14 / 23 °C",
        "rain": "45%",
        "sunset": "21:45",
        "crowds": "High",
        "recommend": "Long evenings · Fête de la Musique"
      },
      {
        "month": "Jul",
        "avgTemp": "16 / 25 °C",
        "rain": "40%",
        "sunset": "21:30",
        "crowds": "Peak",
        "recommend": "Book everything ahead"
      },
      {
        "month": "Aug",
        "avgTemp": "16 / 25 °C",
        "rain": "40%",
        "sunset": "20:45",
        "crowds": "Peak",
        "recommend": "Parisians away · tourists in"
      },
      {
        "month": "Sep",
        "avgTemp": "13 / 21 °C",
        "rain": "45%",
        "sunset": "20:00",
        "crowds": "Medium",
        "recommend": "Golden light · Fashion Week"
      },
      {
        "month": "Oct",
        "avgTemp": "10 / 16 °C",
        "rain": "50%",
        "sunset": "18:30",
        "crowds": "Medium",
        "recommend": "Autumn colour"
      },
      {
        "month": "Nov",
        "avgTemp": "6 / 11 °C",
        "rain": "55%",
        "sunset": "17:15",
        "crowds": "Low",
        "recommend": "Museums · Beaujolais"
      },
      {
        "month": "Dec",
        "avgTemp": "4 / 8 °C",
        "rain": "50%",
        "sunset": "17:00",
        "crowds": "Rising",
        "recommend": "Christmas markets · lights"
      }
    ],
    "sweetSpot": "April–June and September deliver the best light, manageable queues, and long evenings. Avoid the first two weeks of August unless everything is pre-booked — Paris is packed but many locals leave town."
  },
  "transport": {
    "modes": [
      {
        "icon": "tube",
        "name": "Metro",
        "price": "€2.15/ride",
        "desc": "16 lines across the city. Fastest way between arrondissements. Last trains ~00:30 Fri/Sat 01:30."
      },
      {
        "icon": "elizabeth",
        "name": "RER",
        "price": "€2.15–€12",
        "desc": "Suburban express — CDG/ORY airports, Versailles, Disneyland. Keep ticket until exit."
      },
      {
        "icon": "walk",
        "name": "Walking",
        "price": "Free",
        "desc": "Central Paris is compact. Days 1–4 are designed to walk 5–8 km each."
      },
      {
        "icon": "boat",
        "name": "Batobus",
        "price": "€20–€23/day",
        "desc": "Hop-on hop-off river boat. Seine stops at Eiffel, Louvre, Notre-Dame."
      },
      {
        "icon": "bus",
        "name": "Bus",
        "price": "€2.15",
        "desc": "Scenic above-ground routes. Line 69 crosses the city's best monuments."
      },
      {
        "icon": "bike",
        "name": "Vélib'",
        "price": "€5/day",
        "desc": "City bike-share. 1,400+ stations. Dedicated lanes along the Seine."
      },
      {
        "icon": "uber",
        "name": "Uber / Bolt",
        "price": "€12–€25 short",
        "desc": "Reliable off-peak. Avoid rush hour — Metro is faster."
      },
      {
        "icon": "cab",
        "name": "Taxi G7",
        "price": "€15–€30 short",
        "desc": "Official Paris taxis. Light on roof. Avoid unlicensed drivers at airports."
      }
    ],
    "oysterTips": [
      {
        "title": "Contactless bank card",
        "desc": "Tap at Metro/RER gates. Same fare as ticket. Use one card per person for correct billing."
      },
      {
        "title": "Navigo Easy",
        "desc": "Reloadable card €2 at any Metro station. Load carnets or day passes — handy for 4-day stays."
      },
      {
        "title": "Airport RER",
        "desc": "CDG/ORY require specific tickets — do not use a standard Metro ticket. Buy at station machines."
      },
      {
        "title": "Bonjour RATP app",
        "desc": "Official journey planner with real-time Metro disruptions and RER schedules."
      }
    ],
    "exit6Tip": "Exit at Trocadéro station (Line 6) and emerge on the terraces with the Eiffel Tower perfectly framed before you. Every other approach hides the reveal — this one delivers the gasp."
  },
  "maps": {
    "overview": {
      "caption": "A schematic map — for exact directions, scan any QR code in this guide.",
      "markers": [
        {
          "name": "Eiffel Tower",
          "type": "attraction",
          "lat": 48.8584,
          "lng": 2.2945
        },
        {
          "name": "Louvre Museum",
          "type": "attraction",
          "lat": 48.8606,
          "lng": 2.3376
        },
        {
          "name": "Arc de Triomphe",
          "type": "attraction",
          "lat": 48.8738,
          "lng": 2.295
        },
        {
          "name": "Sacré-Cœur",
          "type": "attraction",
          "lat": 48.8867,
          "lng": 2.3431
        },
        {
          "name": "Notre-Dame",
          "type": "attraction",
          "lat": 48.853,
          "lng": 2.3499
        },
        {
          "name": "Luxembourg Gardens",
          "type": "park",
          "lat": 48.8462,
          "lng": 2.3372
        },
        {
          "name": "Montmartre",
          "type": "district",
          "lat": 48.8867,
          "lng": 2.3431
        },
        {
          "name": "The Peninsula Paris",
          "type": "hotel",
          "lat": 48.871,
          "lng": 2.2936
        },
        {
          "name": "Café de Flore",
          "type": "dining",
          "lat": 48.854,
          "lng": 2.3325
        },
        {
          "name": "Le Jules Verne",
          "type": "dining",
          "lat": 48.8584,
          "lng": 2.2945
        }
      ]
    }
  },
  "attractions": [
    {
      "name": "Eiffel Tower",
      "address": "Champ de Mars, 5 Av. Anatole France · 75007",
      "hours": "09:30–23:45 · last lift 22:30",
      "tube": "Bir-Hakeim · Trocadéro · Line 6/9",
      "ticket": "€29 adult summit · pre-book online",
      "bestArrival": "09:30",
      "waitSummer": "60–90 min",
      "waitWinter": "20–40 min",
      "photoSpot": "Trocadéro Gardens across the Seine — classic postcard angle.",
      "lens": "24–70mm",
      "tip": "Pre-book tickets for a timed slot. Sunrise and last light are magical; skip midday queues.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Eiffel%20Tower%20Paris",
      "bookUrl": "https://www.toureiffel.paris/en",
      "bookText": "Book Tickets",
      "avgVisit": "2–3 hours",
      "crowd": {
        "morning": 3,
        "afternoon": 4,
        "evening": 3
      },
      "nearby": [
        {
          "name": "Trocadéro Gardens",
          "walk": "8 min"
        },
        {
          "name": "Seine River Cruise",
          "walk": "10 min"
        },
        {
          "name": "Champ de Mars",
          "walk": "2 min"
        }
      ],
      "nearbyCafes": "Café de Flore · Carette Trocadéro",
      "nearbyRestaurants": "Girafe Paris · Le Jules Verne · Les Ombres",
      "nearbyTube": "Bir-Hakeim · Trocadéro · Line 6/9",
      "nearbyToilets": "Metro stations · major museums · department stores",
      "nearbyAtm": "Banks along main boulevards · tabacs with ATM signs",
      "didYouKnow": "Built for the 1889 Exposition Universelle, the tower was meant to be temporary.",
      "localSecret": "Skip the summit at noon — book the last evening slot and watch Paris light up.",
      "instagram": {
        "sunset": "Trocadéro Gardens across the Seine — classic postcard angle.",
        "sunrise": "Trocadéro Gardens across the Seine — classic postcard angle.",
        "drone": "Restricted in central Paris",
        "settings": "f/8 · ISO 200 · 24–70mm"
      },
      "photos": {
        "hero": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Tour_Eiffel_Wikimedia_Commons_%28cropped%29.jpg/960px-Tour_Eiffel_Wikimedia_Commons_%28cropped%29.jpg",
        "detail": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Tour_Eiffel%2C_Paris_16_April_2014.jpg/960px-Tour_Eiffel%2C_Paris_16_April_2014.jpg",
        "photoSpot": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Pont_de_Bir-Hakeim_at_night_as_seen_from_Promenade_d%27Australie_140223_5.jpg/960px-Pont_de_Bir-Hakeim_at_night_as_seen_from_Promenade_d%27Australie_140223_5.jpg",
        "map": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Tour_Eiffel%2C_Paris_16_April_2014.jpg/960px-Tour_Eiffel%2C_Paris_16_April_2014.jpg"
      },
      "seasonalPhotos": {
        "spring": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Tour_Eiffel_Wikimedia_Commons_%28cropped%29.jpg/960px-Tour_Eiffel_Wikimedia_Commons_%28cropped%29.jpg",
        "summer": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Tour_Eiffel%2C_Paris_16_April_2014.jpg/960px-Tour_Eiffel%2C_Paris_16_April_2014.jpg",
        "autumn": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Pont_de_Bir-Hakeim_at_night_as_seen_from_Promenade_d%27Australie_140223_5.jpg/960px-Pont_de_Bir-Hakeim_at_night_as_seen_from_Promenade_d%27Australie_140223_5.jpg",
        "christmas": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Tour_Eiffel%2C_Paris_16_April_2014.jpg/960px-Tour_Eiffel%2C_Paris_16_April_2014.jpg"
      }
    },
    {
      "name": "Trocadéro Gardens",
      "address": "Place du Trocadéro et du 11 Novembre · 75016",
      "hours": "Open 24h · fountains Apr–Oct",
      "tube": "Trocadéro · Lines 6/9",
      "ticket": "Free",
      "bestArrival": "09:30",
      "waitSummer": "20–40 min",
      "waitWinter": "5–15 min",
      "photoSpot": "Terraces facing the Eiffel Tower — best at sunrise and blue hour.",
      "lens": "24–70mm",
      "tip": "Arrive before 08:00 for empty frames. Fountains run on a schedule in summer.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Trocad%C3%A9ro%20Gardens%20Paris",
      "bookUrl": "https://www.paris.fr/",
      "bookText": "Visitor Info",
      "avgVisit": "45 min",
      "crowd": {
        "morning": 3,
        "afternoon": 4,
        "evening": 3
      },
      "nearby": [
        {
          "name": "Eiffel Tower",
          "walk": "8 min"
        },
        {
          "name": "Palais de Chaillot",
          "walk": "3 min"
        }
      ],
      "nearbyCafes": "",
      "nearbyRestaurants": "",
      "nearbyTube": "Trocadéro · Lines 6/9",
      "nearbyToilets": "Metro stations · major museums · department stores",
      "nearbyAtm": "Banks along main boulevards · tabacs with ATM signs",
      "didYouKnow": "",
      "localSecret": "",
      "instagram": {
        "sunset": "Terraces facing the Eiffel Tower — best at sunrise and blue hour.",
        "sunrise": "Terraces facing the Eiffel Tower — best at sunrise and blue hour.",
        "drone": "Restricted in central Paris",
        "settings": "f/8 · ISO 200 · 24–70mm"
      },
      "photos": {
        "hero": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Paris_-_Jardins_du_Trocad%C3%A9ro_%26_Tour_Eiffel_%2826804140054%29.jpg/960px-Paris_-_Jardins_du_Trocad%C3%A9ro_%26_Tour_Eiffel_%2826804140054%29.jpg",
        "detail": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Tour_Eiffel%2C_Paris_16_April_2014.jpg/960px-Tour_Eiffel%2C_Paris_16_April_2014.jpg",
        "photoSpot": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Tour_Eiffel_Wikimedia_Commons_%28cropped%29.jpg/960px-Tour_Eiffel_Wikimedia_Commons_%28cropped%29.jpg",
        "map": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Paris_-_Jardins_du_Trocad%C3%A9ro_%26_Tour_Eiffel_%2826804140054%29.jpg/960px-Paris_-_Jardins_du_Trocad%C3%A9ro_%26_Tour_Eiffel_%2826804140054%29.jpg"
      },
      "seasonalPhotos": {
        "spring": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Paris_-_Jardins_du_Trocad%C3%A9ro_%26_Tour_Eiffel_%2826804140054%29.jpg/960px-Paris_-_Jardins_du_Trocad%C3%A9ro_%26_Tour_Eiffel_%2826804140054%29.jpg",
        "summer": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Tour_Eiffel%2C_Paris_16_April_2014.jpg/960px-Tour_Eiffel%2C_Paris_16_April_2014.jpg",
        "autumn": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Tour_Eiffel_Wikimedia_Commons_%28cropped%29.jpg/960px-Tour_Eiffel_Wikimedia_Commons_%28cropped%29.jpg",
        "christmas": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Paris_-_Jardins_du_Trocad%C3%A9ro_%26_Tour_Eiffel_%2826804140054%29.jpg/960px-Paris_-_Jardins_du_Trocad%C3%A9ro_%26_Tour_Eiffel_%2826804140054%29.jpg"
      }
    },
    {
      "name": "Arc de Triomphe",
      "address": "Place Charles de Gaulle · 75008",
      "hours": "10:00–22:30 · closed some holidays",
      "tube": "Charles de Gaulle–Étoile · Lines 1/2/6",
      "ticket": "€16 adult · rooftop access",
      "bestArrival": "09:30",
      "waitSummer": "20–40 min",
      "waitWinter": "5–15 min",
      "photoSpot": "From the Champs-Élysées eastward or atop the arch at sunset.",
      "lens": "24–70mm",
      "tip": "Walk the Champs-Élysées after your visit. Use the underground passage — never cross the traffic circle.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Arc%20de%20Triomphe%20Paris",
      "bookUrl": "https://www.paris-arc-de-triomphe.fr/",
      "bookText": "Book Tickets",
      "avgVisit": "1.5 hours",
      "crowd": {
        "morning": 3,
        "afternoon": 4,
        "evening": 3
      },
      "nearby": [
        {
          "name": "Champs-Élysées",
          "walk": "2 min"
        },
        {
          "name": "Ladurée Champs-Élysées",
          "walk": "8 min"
        }
      ],
      "nearbyCafes": "",
      "nearbyRestaurants": "",
      "nearbyTube": "Charles de Gaulle–Étoile · Lines 1/2/6",
      "nearbyToilets": "Metro stations · major museums · department stores",
      "nearbyAtm": "Banks along main boulevards · tabacs with ATM signs",
      "didYouKnow": "",
      "localSecret": "",
      "instagram": {
        "sunset": "From the Champs-Élysées eastward or atop the arch at sunset.",
        "sunrise": "From the Champs-Élysées eastward or atop the arch at sunset.",
        "drone": "Restricted in central Paris",
        "settings": "f/8 · ISO 200 · 24–70mm"
      },
      "photos": {
        "hero": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Arc_de_Triomphe%2C_Paris_21_October_2010.jpg/960px-Arc_de_Triomphe%2C_Paris_21_October_2010.jpg",
        "detail": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Arc_de_Triomphe%2C_Paris_21_October_2010.jpg/960px-Arc_de_Triomphe%2C_Paris_21_October_2010.jpg",
        "photoSpot": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Place_de_la_Concorde_from_the_Eiffel_Tower%2C_Paris_April_2011.jpg/960px-Place_de_la_Concorde_from_the_Eiffel_Tower%2C_Paris_April_2011.jpg",
        "map": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Arc_de_Triomphe%2C_Paris_21_October_2010.jpg/960px-Arc_de_Triomphe%2C_Paris_21_October_2010.jpg"
      },
      "seasonalPhotos": {
        "spring": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Arc_de_Triomphe%2C_Paris_21_October_2010.jpg/960px-Arc_de_Triomphe%2C_Paris_21_October_2010.jpg",
        "summer": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Arc_de_Triomphe%2C_Paris_21_October_2010.jpg/960px-Arc_de_Triomphe%2C_Paris_21_October_2010.jpg",
        "autumn": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Place_de_la_Concorde_from_the_Eiffel_Tower%2C_Paris_April_2011.jpg/960px-Place_de_la_Concorde_from_the_Eiffel_Tower%2C_Paris_April_2011.jpg",
        "christmas": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Arc_de_Triomphe%2C_Paris_21_October_2010.jpg/960px-Arc_de_Triomphe%2C_Paris_21_October_2010.jpg"
      }
    },
    {
      "name": "Champs-Élysées",
      "address": "Av. des Champs-Élysées · 75008",
      "hours": "Shops 10:00–20:00 · always walkable",
      "tube": "Franklin D. Roosevelt · George V · Line 1",
      "ticket": "Free to walk",
      "bestArrival": "09:30",
      "waitSummer": "20–40 min",
      "waitWinter": "5–15 min",
      "photoSpot": "Looking toward the Arc de Triomphe from Concorde end.",
      "lens": "24–70mm",
      "tip": "Stroll the full avenue from Concorde to the Arc. Flagship stores and terraces line both sides.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Champs-%C3%89lys%C3%A9es%20Paris",
      "bookText": "Book Tickets",
      "avgVisit": "1–2 hours",
      "crowd": {
        "morning": 3,
        "afternoon": 4,
        "evening": 3
      },
      "nearby": [
        {
          "name": "Arc de Triomphe",
          "walk": "15 min"
        },
        {
          "name": "Place de la Concorde",
          "walk": "12 min"
        }
      ],
      "nearbyCafes": "",
      "nearbyRestaurants": "",
      "nearbyTube": "Franklin D. Roosevelt · George V · Line 1",
      "nearbyToilets": "Metro stations · major museums · department stores",
      "nearbyAtm": "Banks along main boulevards · tabacs with ATM signs",
      "didYouKnow": "",
      "localSecret": "",
      "instagram": {
        "sunset": "Looking toward the Arc de Triomphe from Concorde end.",
        "sunrise": "Looking toward the Arc de Triomphe from Concorde end.",
        "drone": "Restricted in central Paris",
        "settings": "f/8 · ISO 200 · 24–70mm"
      },
      "photos": {
        "hero": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Avenue_des_Champs-Elys%C3%A9es%2C_Paris_12_December_2020.jpg/960px-Avenue_des_Champs-Elys%C3%A9es%2C_Paris_12_December_2020.jpg",
        "detail": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Arc_de_Triomphe%2C_Paris_21_October_2010.jpg/960px-Arc_de_Triomphe%2C_Paris_21_October_2010.jpg",
        "photoSpot": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Laduree-champselysees.jpg/960px-Laduree-champselysees.jpg",
        "map": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Place_de_la_Concorde_from_the_Eiffel_Tower%2C_Paris_April_2011.jpg/960px-Place_de_la_Concorde_from_the_Eiffel_Tower%2C_Paris_April_2011.jpg"
      },
      "seasonalPhotos": {
        "spring": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Avenue_des_Champs-Elys%C3%A9es%2C_Paris_12_December_2020.jpg/960px-Avenue_des_Champs-Elys%C3%A9es%2C_Paris_12_December_2020.jpg",
        "summer": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Arc_de_Triomphe%2C_Paris_21_October_2010.jpg/960px-Arc_de_Triomphe%2C_Paris_21_October_2010.jpg",
        "autumn": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Laduree-champselysees.jpg/960px-Laduree-champselysees.jpg",
        "christmas": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Place_de_la_Concorde_from_the_Eiffel_Tower%2C_Paris_April_2011.jpg/960px-Place_de_la_Concorde_from_the_Eiffel_Tower%2C_Paris_April_2011.jpg"
      }
    },
    {
      "name": "Seine River Cruise",
      "address": "Boarding near Pont de l'Alma or Eiffel · 75007",
      "hours": "Departures ~10:00–22:00 · varies by operator",
      "tube": "Alma-Marceau · Bir-Hakeim",
      "ticket": "€17–25 · 1 hour cruise",
      "bestArrival": "09:30",
      "waitSummer": "20–40 min",
      "waitWinter": "5–15 min",
      "photoSpot": "Open deck mid-river — bridges and monuments from water level.",
      "lens": "24–70mm",
      "tip": "Book a late-afternoon cruise for golden light on Notre-Dame and the Louvre.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Seine%20River%20Cruise%20Paris",
      "bookUrl": "https://www.bateaux-mouches.fr/en",
      "bookText": "Book Tickets",
      "avgVisit": "1 hour",
      "crowd": {
        "morning": 3,
        "afternoon": 4,
        "evening": 3
      },
      "nearby": [
        {
          "name": "Eiffel Tower",
          "walk": "10 min"
        },
        {
          "name": "Pont Alexandre III",
          "walk": "12 min"
        }
      ],
      "nearbyCafes": "",
      "nearbyRestaurants": "",
      "nearbyTube": "Alma-Marceau · Bir-Hakeim",
      "nearbyToilets": "Metro stations · major museums · department stores",
      "nearbyAtm": "Banks along main boulevards · tabacs with ATM signs",
      "didYouKnow": "",
      "localSecret": "",
      "instagram": {
        "sunset": "Open deck mid-river — bridges and monuments from water level.",
        "sunrise": "Open deck mid-river — bridges and monuments from water level.",
        "drone": "Restricted in central Paris",
        "settings": "f/8 · ISO 200 · 24–70mm"
      },
      "photos": {
        "hero": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Bateau_mouche_jnl_4.jpg/960px-Bateau_mouche_jnl_4.jpg",
        "detail": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Notre-Dame_de_Paris%2C_4_October_2017.jpg/960px-Notre-Dame_de_Paris%2C_4_October_2017.jpg",
        "photoSpot": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Pont_Alexandre_III_depuis_pont_de_la_Concorde_Paris.jpg/960px-Pont_Alexandre_III_depuis_pont_de_la_Concorde_Paris.jpg",
        "map": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Bateau_mouche_jnl_4.jpg/960px-Bateau_mouche_jnl_4.jpg"
      },
      "seasonalPhotos": {
        "spring": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Bateau_mouche_jnl_4.jpg/960px-Bateau_mouche_jnl_4.jpg",
        "summer": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Notre-Dame_de_Paris%2C_4_October_2017.jpg/960px-Notre-Dame_de_Paris%2C_4_October_2017.jpg",
        "autumn": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Pont_Alexandre_III_depuis_pont_de_la_Concorde_Paris.jpg/960px-Pont_Alexandre_III_depuis_pont_de_la_Concorde_Paris.jpg",
        "christmas": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Bateau_mouche_jnl_4.jpg/960px-Bateau_mouche_jnl_4.jpg"
      }
    },
    {
      "name": "Bir-Hakeim Bridge",
      "address": "Pont de Bir-Hakeim · 75015/75016",
      "hours": "Open 24h",
      "tube": "Bir-Hakeim · Line 6",
      "ticket": "Free",
      "bestArrival": "09:30",
      "waitSummer": "20–40 min",
      "waitWinter": "5–15 min",
      "photoSpot": "Through the iron arches with the Eiffel Tower framed beyond.",
      "lens": "24–70mm",
      "tip": "Featured in Inception — arrive early morning for cinematic emptiness.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Bir-Hakeim%20Bridge%20Paris",
      "bookText": "Book Tickets",
      "avgVisit": "20 min",
      "crowd": {
        "morning": 3,
        "afternoon": 4,
        "evening": 3
      },
      "nearby": [],
      "nearbyCafes": "",
      "nearbyRestaurants": "",
      "nearbyTube": "Bir-Hakeim · Line 6",
      "nearbyToilets": "Metro stations · major museums · department stores",
      "nearbyAtm": "Banks along main boulevards · tabacs with ATM signs",
      "didYouKnow": "",
      "localSecret": "",
      "instagram": {
        "sunset": "Through the iron arches with the Eiffel Tower framed beyond.",
        "sunrise": "Through the iron arches with the Eiffel Tower framed beyond.",
        "drone": "Restricted in central Paris",
        "settings": "f/8 · ISO 200 · 24–70mm"
      },
      "photos": {
        "hero": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Pont_de_Bir-Hakeim_at_night_as_seen_from_Promenade_d%27Australie_140223_5.jpg/960px-Pont_de_Bir-Hakeim_at_night_as_seen_from_Promenade_d%27Australie_140223_5.jpg",
        "detail": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Viaduc_de_Passy_-_Paris_-_novembre_2005.jpg/960px-Viaduc_de_Passy_-_Paris_-_novembre_2005.jpg",
        "photoSpot": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Tour_Eiffel_Wikimedia_Commons_%28cropped%29.jpg/960px-Tour_Eiffel_Wikimedia_Commons_%28cropped%29.jpg",
        "map": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Pont_de_Bir-Hakeim_at_night_as_seen_from_Promenade_d%27Australie_140223_5.jpg/960px-Pont_de_Bir-Hakeim_at_night_as_seen_from_Promenade_d%27Australie_140223_5.jpg"
      },
      "seasonalPhotos": {
        "spring": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Pont_de_Bir-Hakeim_at_night_as_seen_from_Promenade_d%27Australie_140223_5.jpg/960px-Pont_de_Bir-Hakeim_at_night_as_seen_from_Promenade_d%27Australie_140223_5.jpg",
        "summer": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Viaduc_de_Passy_-_Paris_-_novembre_2005.jpg/960px-Viaduc_de_Passy_-_Paris_-_novembre_2005.jpg",
        "autumn": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Tour_Eiffel_Wikimedia_Commons_%28cropped%29.jpg/960px-Tour_Eiffel_Wikimedia_Commons_%28cropped%29.jpg",
        "christmas": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Pont_de_Bir-Hakeim_at_night_as_seen_from_Promenade_d%27Australie_140223_5.jpg/960px-Pont_de_Bir-Hakeim_at_night_as_seen_from_Promenade_d%27Australie_140223_5.jpg"
      }
    },
    {
      "name": "Pont Alexandre III",
      "address": "Pont Alexandre III · 75008",
      "hours": "Open 24h",
      "tube": "Invalides · Champs-Élysées–Clemenceau",
      "ticket": "Free",
      "bestArrival": "09:30",
      "waitSummer": "20–40 min",
      "waitWinter": "5–15 min",
      "photoSpot": "Gilded lampposts and views toward the Grand Palais and Invalides.",
      "lens": "24–70mm",
      "tip": "One of Paris's most ornate bridges — golden hour reflects beautifully on the Seine.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Pont%20Alexandre%20III%20Paris",
      "bookText": "Book Tickets",
      "avgVisit": "20 min",
      "crowd": {
        "morning": 3,
        "afternoon": 4,
        "evening": 3
      },
      "nearby": [],
      "nearbyCafes": "",
      "nearbyRestaurants": "",
      "nearbyTube": "Invalides · Champs-Élysées–Clemenceau",
      "nearbyToilets": "Metro stations · major museums · department stores",
      "nearbyAtm": "Banks along main boulevards · tabacs with ATM signs",
      "didYouKnow": "",
      "localSecret": "",
      "instagram": {
        "sunset": "Gilded lampposts and views toward the Grand Palais and Invalides.",
        "sunrise": "Gilded lampposts and views toward the Grand Palais and Invalides.",
        "drone": "Restricted in central Paris",
        "settings": "f/8 · ISO 200 · 24–70mm"
      },
      "photos": {
        "hero": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Pont_Alexandre_III_depuis_pont_de_la_Concorde_Paris.jpg/960px-Pont_Alexandre_III_depuis_pont_de_la_Concorde_Paris.jpg",
        "detail": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Le_Grand_Palais_depuis_le_pont_Alexandre_III_%C3%A0_Paris.jpg/960px-Le_Grand_Palais_depuis_le_pont_Alexandre_III_%C3%A0_Paris.jpg",
        "photoSpot": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Postcard_-_Paris%2C_Le_Pont_Alexandre_III_vers_les_Invalides.jpg/960px-Postcard_-_Paris%2C_Le_Pont_Alexandre_III_vers_les_Invalides.jpg",
        "map": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Pont_Alexandre_III_depuis_pont_de_la_Concorde_Paris.jpg/960px-Pont_Alexandre_III_depuis_pont_de_la_Concorde_Paris.jpg"
      },
      "seasonalPhotos": {
        "spring": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Pont_Alexandre_III_depuis_pont_de_la_Concorde_Paris.jpg/960px-Pont_Alexandre_III_depuis_pont_de_la_Concorde_Paris.jpg",
        "summer": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Le_Grand_Palais_depuis_le_pont_Alexandre_III_%C3%A0_Paris.jpg/960px-Le_Grand_Palais_depuis_le_pont_Alexandre_III_%C3%A0_Paris.jpg",
        "autumn": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Postcard_-_Paris%2C_Le_Pont_Alexandre_III_vers_les_Invalides.jpg/960px-Postcard_-_Paris%2C_Le_Pont_Alexandre_III_vers_les_Invalides.jpg",
        "christmas": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Pont_Alexandre_III_depuis_pont_de_la_Concorde_Paris.jpg/960px-Pont_Alexandre_III_depuis_pont_de_la_Concorde_Paris.jpg"
      }
    },
    {
      "name": "Louvre Museum",
      "address": "Rue de Rivoli · 75001",
      "hours": "09:00–18:00 · closed Tue · Wed/Fri until 21:45",
      "tube": "Palais Royal–Musée du Louvre · Line 1/7",
      "ticket": "€22 adult · timed entry required",
      "bestArrival": "09:30",
      "waitSummer": "45–90 min",
      "waitWinter": "15–30 min",
      "photoSpot": "Louvre Pyramid courtyard — classic symmetry shot.",
      "lens": "24–70mm",
      "tip": "Allow 4 hours. Must-see: Mona Lisa, Venus de Milo, Winged Victory. Enter via Passage Richelieu if you have tickets.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Louvre%20Museum%20Paris",
      "bookUrl": "https://www.louvre.fr/en",
      "bookText": "Book Tickets",
      "avgVisit": "4 hours",
      "crowd": {
        "morning": 3,
        "afternoon": 4,
        "evening": 3
      },
      "nearby": [
        {
          "name": "Jardin des Tuileries",
          "walk": "5 min"
        },
        {
          "name": "Café Marly",
          "walk": "3 min"
        }
      ],
      "nearbyCafes": "",
      "nearbyRestaurants": "",
      "nearbyTube": "Palais Royal–Musée du Louvre · Line 1/7",
      "nearbyToilets": "Metro stations · major museums · department stores",
      "nearbyAtm": "Banks along main boulevards · tabacs with ATM signs",
      "didYouKnow": "",
      "localSecret": "",
      "instagram": {
        "sunset": "Louvre Pyramid courtyard — classic symmetry shot.",
        "sunrise": "Louvre Pyramid courtyard — classic symmetry shot.",
        "drone": "Restricted in central Paris",
        "settings": "f/8 · ISO 200 · 24–70mm"
      },
      "photos": {
        "hero": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Louvre_Museum_Wikimedia_Commons.jpg/960px-Louvre_Museum_Wikimedia_Commons.jpg",
        "detail": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Le_Louvre_-_Aile_Richelieu.jpg/960px-Le_Louvre_-_Aile_Richelieu.jpg",
        "photoSpot": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Paris_-_Louvre_Pyramid_and_Louvre_Museum.jpg/960px-Paris_-_Louvre_Pyramid_and_Louvre_Museum.jpg",
        "map": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Louvre_Museum_Wikimedia_Commons.jpg/960px-Louvre_Museum_Wikimedia_Commons.jpg"
      },
      "seasonalPhotos": {
        "spring": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Louvre_Museum_Wikimedia_Commons.jpg/960px-Louvre_Museum_Wikimedia_Commons.jpg",
        "summer": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Le_Louvre_-_Aile_Richelieu.jpg/960px-Le_Louvre_-_Aile_Richelieu.jpg",
        "autumn": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Paris_-_Louvre_Pyramid_and_Louvre_Museum.jpg/960px-Paris_-_Louvre_Pyramid_and_Louvre_Museum.jpg",
        "christmas": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Louvre_Museum_Wikimedia_Commons.jpg/960px-Louvre_Museum_Wikimedia_Commons.jpg"
      }
    },
    {
      "name": "Louvre Pyramid",
      "address": "Cour Napoléon · Musée du Louvre · 75001",
      "hours": "Same as Louvre · exterior always visible",
      "tube": "Palais Royal–Musée du Louvre",
      "ticket": "Free exterior · museum ticket for entry",
      "bestArrival": "09:30",
      "waitSummer": "20–40 min",
      "waitWinter": "5–15 min",
      "photoSpot": "Centre of the courtyard — reflections in the pools.",
      "lens": "24–70mm",
      "tip": "Night shots with illuminated glass are stunning. Tripod-friendly after museum closes.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Louvre%20Pyramid%20Paris",
      "bookText": "Book Tickets",
      "avgVisit": "30 min",
      "crowd": {
        "morning": 3,
        "afternoon": 4,
        "evening": 3
      },
      "nearby": [],
      "nearbyCafes": "",
      "nearbyRestaurants": "",
      "nearbyTube": "Palais Royal–Musée du Louvre",
      "nearbyToilets": "Metro stations · major museums · department stores",
      "nearbyAtm": "Banks along main boulevards · tabacs with ATM signs",
      "didYouKnow": "",
      "localSecret": "",
      "instagram": {
        "sunset": "Centre of the courtyard — reflections in the pools.",
        "sunrise": "Centre of the courtyard — reflections in the pools.",
        "drone": "Restricted in central Paris",
        "settings": "f/8 · ISO 200 · 24–70mm"
      },
      "photos": {
        "hero": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Paris_-_Louvre_Pyramid_and_Louvre_Museum.jpg/960px-Paris_-_Louvre_Pyramid_and_Louvre_Museum.jpg",
        "detail": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Louvre_Museum_Wikimedia_Commons.jpg/960px-Louvre_Museum_Wikimedia_Commons.jpg",
        "photoSpot": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Le_Louvre_-_Aile_Richelieu.jpg/960px-Le_Louvre_-_Aile_Richelieu.jpg",
        "map": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Paris_-_Louvre_Pyramid_and_Louvre_Museum.jpg/960px-Paris_-_Louvre_Pyramid_and_Louvre_Museum.jpg"
      },
      "seasonalPhotos": {
        "spring": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Paris_-_Louvre_Pyramid_and_Louvre_Museum.jpg/960px-Paris_-_Louvre_Pyramid_and_Louvre_Museum.jpg",
        "summer": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Louvre_Museum_Wikimedia_Commons.jpg/960px-Louvre_Museum_Wikimedia_Commons.jpg",
        "autumn": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Le_Louvre_-_Aile_Richelieu.jpg/960px-Le_Louvre_-_Aile_Richelieu.jpg",
        "christmas": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Paris_-_Louvre_Pyramid_and_Louvre_Museum.jpg/960px-Paris_-_Louvre_Pyramid_and_Louvre_Museum.jpg"
      }
    },
    {
      "name": "Jardin des Tuileries",
      "address": "Place de la Concorde end · 75001",
      "hours": "07:00–21:00 summer · shorter in winter",
      "tube": "Tuileries · Concorde",
      "ticket": "Free",
      "bestArrival": "09:30",
      "waitSummer": "20–40 min",
      "waitWinter": "5–15 min",
      "photoSpot": "Central alley toward the Louvre with trimmed chestnuts.",
      "lens": "24–70mm",
      "tip": "Perfect pause between Louvre and Concorde. Grab a chair by the octagonal pool.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Jardin%20des%20Tuileries%20Paris",
      "bookText": "Book Tickets",
      "avgVisit": "1 hour",
      "crowd": {
        "morning": 3,
        "afternoon": 4,
        "evening": 3
      },
      "nearby": [],
      "nearbyCafes": "",
      "nearbyRestaurants": "",
      "nearbyTube": "Tuileries · Concorde",
      "nearbyToilets": "Metro stations · major museums · department stores",
      "nearbyAtm": "Banks along main boulevards · tabacs with ATM signs",
      "didYouKnow": "",
      "localSecret": "",
      "instagram": {
        "sunset": "Central alley toward the Louvre with trimmed chestnuts.",
        "sunrise": "Central alley toward the Louvre with trimmed chestnuts.",
        "drone": "Restricted in central Paris",
        "settings": "f/8 · ISO 200 · 24–70mm"
      },
      "photos": {
        "hero": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Crowd_in_the_Jardin_des_Tuileries%2C_Paris_July_2014.jpg/960px-Crowd_in_the_Jardin_des_Tuileries%2C_Paris_July_2014.jpg",
        "detail": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Paris_-_Louvre_Pyramid_and_Louvre_Museum.jpg/960px-Paris_-_Louvre_Pyramid_and_Louvre_Museum.jpg",
        "photoSpot": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Place_de_la_Concorde_from_the_Eiffel_Tower%2C_Paris_April_2011.jpg/960px-Place_de_la_Concorde_from_the_Eiffel_Tower%2C_Paris_April_2011.jpg",
        "map": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Crowd_in_the_Jardin_des_Tuileries%2C_Paris_July_2014.jpg/960px-Crowd_in_the_Jardin_des_Tuileries%2C_Paris_July_2014.jpg"
      },
      "seasonalPhotos": {
        "spring": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Crowd_in_the_Jardin_des_Tuileries%2C_Paris_July_2014.jpg/960px-Crowd_in_the_Jardin_des_Tuileries%2C_Paris_July_2014.jpg",
        "summer": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Paris_-_Louvre_Pyramid_and_Louvre_Museum.jpg/960px-Paris_-_Louvre_Pyramid_and_Louvre_Museum.jpg",
        "autumn": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Place_de_la_Concorde_from_the_Eiffel_Tower%2C_Paris_April_2011.jpg/960px-Place_de_la_Concorde_from_the_Eiffel_Tower%2C_Paris_April_2011.jpg",
        "christmas": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Crowd_in_the_Jardin_des_Tuileries%2C_Paris_July_2014.jpg/960px-Crowd_in_the_Jardin_des_Tuileries%2C_Paris_July_2014.jpg"
      }
    },
    {
      "name": "Place de la Concorde",
      "address": "Place de la Concorde · 75008",
      "hours": "Open 24h",
      "tube": "Concorde · Lines 1/8/12",
      "ticket": "Free",
      "bestArrival": "09:30",
      "waitSummer": "20–40 min",
      "waitWinter": "5–15 min",
      "photoSpot": "Between the Luxor Obelisk and views to the Eiffel Tower and Champs-Élysées.",
      "lens": "24–70mm",
      "tip": "France's largest public square — link between Tuileries and the Champs-Élysées.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Place%20de%20la%20Concorde%20Paris",
      "bookText": "Book Tickets",
      "avgVisit": "30 min",
      "crowd": {
        "morning": 3,
        "afternoon": 4,
        "evening": 3
      },
      "nearby": [],
      "nearbyCafes": "",
      "nearbyRestaurants": "",
      "nearbyTube": "Concorde · Lines 1/8/12",
      "nearbyToilets": "Metro stations · major museums · department stores",
      "nearbyAtm": "Banks along main boulevards · tabacs with ATM signs",
      "didYouKnow": "",
      "localSecret": "",
      "instagram": {
        "sunset": "Between the Luxor Obelisk and views to the Eiffel Tower and Champs-Élysées.",
        "sunrise": "Between the Luxor Obelisk and views to the Eiffel Tower and Champs-Élysées.",
        "drone": "Restricted in central Paris",
        "settings": "f/8 · ISO 200 · 24–70mm"
      },
      "photos": {
        "hero": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Place_de_la_Concorde_from_the_Eiffel_Tower%2C_Paris_April_2011.jpg/960px-Place_de_la_Concorde_from_the_Eiffel_Tower%2C_Paris_April_2011.jpg",
        "detail": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Pont_Alexandre_III_depuis_pont_de_la_Concorde_Paris.jpg/960px-Pont_Alexandre_III_depuis_pont_de_la_Concorde_Paris.jpg",
        "photoSpot": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Arc_de_Triomphe%2C_Paris_21_October_2010.jpg/960px-Arc_de_Triomphe%2C_Paris_21_October_2010.jpg",
        "map": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Place_de_la_Concorde_from_the_Eiffel_Tower%2C_Paris_April_2011.jpg/960px-Place_de_la_Concorde_from_the_Eiffel_Tower%2C_Paris_April_2011.jpg"
      },
      "seasonalPhotos": {
        "spring": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Place_de_la_Concorde_from_the_Eiffel_Tower%2C_Paris_April_2011.jpg/960px-Place_de_la_Concorde_from_the_Eiffel_Tower%2C_Paris_April_2011.jpg",
        "summer": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Pont_Alexandre_III_depuis_pont_de_la_Concorde_Paris.jpg/960px-Pont_Alexandre_III_depuis_pont_de_la_Concorde_Paris.jpg",
        "autumn": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Arc_de_Triomphe%2C_Paris_21_October_2010.jpg/960px-Arc_de_Triomphe%2C_Paris_21_October_2010.jpg",
        "christmas": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Place_de_la_Concorde_from_the_Eiffel_Tower%2C_Paris_April_2011.jpg/960px-Place_de_la_Concorde_from_the_Eiffel_Tower%2C_Paris_April_2011.jpg"
      }
    },
    {
      "name": "Galeries Lafayette Rooftop",
      "address": "40 Bd Haussmann · 75009",
      "hours": "09:30–20:00 · rooftop free during store hours",
      "tube": "Chaussée d'Antin–La Fayette · Opéra",
      "ticket": "Free rooftop terrace",
      "bestArrival": "09:30",
      "waitSummer": "20–40 min",
      "waitWinter": "5–15 min",
      "photoSpot": "360° views over Opéra Garnier, Eiffel Tower, and Sacré-Cœur.",
      "lens": "24–70mm",
      "tip": "Free city views — one of the best no-ticket panoramas in Paris.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Galeries%20Lafayette%20Rooftop%20Paris",
      "bookUrl": "https://www.galerieslafayette.com/",
      "bookText": "Store Info",
      "avgVisit": "45 min",
      "crowd": {
        "morning": 3,
        "afternoon": 4,
        "evening": 3
      },
      "nearby": [],
      "nearbyCafes": "",
      "nearbyRestaurants": "",
      "nearbyTube": "Chaussée d'Antin–La Fayette · Opéra",
      "nearbyToilets": "Metro stations · major museums · department stores",
      "nearbyAtm": "Banks along main boulevards · tabacs with ATM signs",
      "didYouKnow": "",
      "localSecret": "",
      "instagram": {
        "sunset": "360° views over Opéra Garnier, Eiffel Tower, and Sacré-Cœur.",
        "sunrise": "360° views over Opéra Garnier, Eiffel Tower, and Sacré-Cœur.",
        "drone": "Restricted in central Paris",
        "settings": "f/8 · ISO 200 · 24–70mm"
      },
      "photos": {
        "hero": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Galeries_Lafayette_interior.jpg/960px-Galeries_Lafayette_interior.jpg",
        "detail": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Galeries_Lafayette_interior.jpg/960px-Galeries_Lafayette_interior.jpg",
        "photoSpot": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Arc_de_Triomphe%2C_Paris_21_October_2010.jpg/960px-Arc_de_Triomphe%2C_Paris_21_October_2010.jpg",
        "map": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Galeries_Lafayette_interior.jpg/960px-Galeries_Lafayette_interior.jpg"
      },
      "seasonalPhotos": {
        "spring": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Galeries_Lafayette_interior.jpg/960px-Galeries_Lafayette_interior.jpg",
        "summer": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Galeries_Lafayette_interior.jpg/960px-Galeries_Lafayette_interior.jpg",
        "autumn": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Arc_de_Triomphe%2C_Paris_21_October_2010.jpg/960px-Arc_de_Triomphe%2C_Paris_21_October_2010.jpg",
        "christmas": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Galeries_Lafayette_interior.jpg/960px-Galeries_Lafayette_interior.jpg"
      }
    },
    {
      "name": "Sacré-Cœur Basilica",
      "address": "35 Rue du Chevalier de la Barre · 75018",
      "hours": "06:30–22:30 · dome hours vary",
      "tube": "Anvers · Abbesses · Line 2/12",
      "ticket": "Basilica free · dome €8",
      "bestArrival": "09:30",
      "waitSummer": "20–40 min",
      "waitWinter": "5–15 min",
      "photoSpot": "Steps of the parvis overlooking Paris rooftops.",
      "lens": "24–70mm",
      "tip": "Arrive before 10:00 to beat crowds. Dress modestly — shoulders covered.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Sacr%C3%A9-C%C5%93ur%20Basilica%20Paris",
      "bookUrl": "https://www.sacre-coeur-montmartre.com/",
      "bookText": "Book Tickets",
      "avgVisit": "1.5 hours",
      "crowd": {
        "morning": 3,
        "afternoon": 4,
        "evening": 3
      },
      "nearby": [],
      "nearbyCafes": "",
      "nearbyRestaurants": "",
      "nearbyTube": "Anvers · Abbesses · Line 2/12",
      "nearbyToilets": "Metro stations · major museums · department stores",
      "nearbyAtm": "Banks along main boulevards · tabacs with ATM signs",
      "didYouKnow": "",
      "localSecret": "",
      "instagram": {
        "sunset": "Steps of the parvis overlooking Paris rooftops.",
        "sunrise": "Steps of the parvis overlooking Paris rooftops.",
        "drone": "Restricted in central Paris",
        "settings": "f/8 · ISO 200 · 24–70mm"
      },
      "photos": {
        "hero": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Le_sacre_coeur.jpg/960px-Le_sacre_coeur.jpg",
        "detail": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Sacre_Coeur_cor_Jesu-DSC_1455w.jpg/960px-Sacre_Coeur_cor_Jesu-DSC_1455w.jpg",
        "photoSpot": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/La_Maison_Rose%2C_Montmartre.jpg/960px-La_Maison_Rose%2C_Montmartre.jpg",
        "map": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Le_sacre_coeur.jpg/960px-Le_sacre_coeur.jpg"
      },
      "seasonalPhotos": {
        "spring": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Le_sacre_coeur.jpg/960px-Le_sacre_coeur.jpg",
        "summer": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Sacre_Coeur_cor_Jesu-DSC_1455w.jpg/960px-Sacre_Coeur_cor_Jesu-DSC_1455w.jpg",
        "autumn": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/La_Maison_Rose%2C_Montmartre.jpg/960px-La_Maison_Rose%2C_Montmartre.jpg",
        "christmas": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Le_sacre_coeur.jpg/960px-Le_sacre_coeur.jpg"
      }
    },
    {
      "name": "Montmartre",
      "address": "18th arrondissement · around Place du Tertre",
      "hours": "Always open · artists from ~10:00",
      "tube": "Abbesses · Lamarck–Caulaincourt",
      "ticket": "Free to wander",
      "bestArrival": "09:30",
      "waitSummer": "20–40 min",
      "waitWinter": "5–15 min",
      "photoSpot": "Rue de l'Abreuvoir and cobbled lanes near Sacré-Cœur.",
      "lens": "24–70mm",
      "tip": "Artists, small cafés, and photography at every corner. Wander without a fixed route.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Montmartre%20Paris",
      "bookText": "Book Tickets",
      "avgVisit": "2–3 hours",
      "crowd": {
        "morning": 3,
        "afternoon": 4,
        "evening": 3
      },
      "nearby": [
        {
          "name": "La Maison Rose",
          "walk": "5 min"
        },
        {
          "name": "Le Consulat",
          "walk": "3 min"
        }
      ],
      "nearbyCafes": "",
      "nearbyRestaurants": "",
      "nearbyTube": "Abbesses · Lamarck–Caulaincourt",
      "nearbyToilets": "Metro stations · major museums · department stores",
      "nearbyAtm": "Banks along main boulevards · tabacs with ATM signs",
      "didYouKnow": "",
      "localSecret": "",
      "instagram": {
        "sunset": "Rue de l'Abreuvoir and cobbled lanes near Sacré-Cœur.",
        "sunrise": "Rue de l'Abreuvoir and cobbled lanes near Sacré-Cœur.",
        "drone": "Restricted in central Paris",
        "settings": "f/8 · ISO 200 · 24–70mm"
      },
      "photos": {
        "hero": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/View_from_Notre-Dame_de_Paris%2C_24_June_2014_004.jpg/960px-View_from_Notre-Dame_de_Paris%2C_24_June_2014_004.jpg",
        "detail": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Le_sacre_coeur.jpg/960px-Le_sacre_coeur.jpg",
        "photoSpot": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/La_Maison_Rose%2C_Montmartre.jpg/960px-La_Maison_Rose%2C_Montmartre.jpg",
        "map": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Moulin_Rouge%2C_17_April_2011.jpg/960px-Moulin_Rouge%2C_17_April_2011.jpg"
      },
      "seasonalPhotos": {
        "spring": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/View_from_Notre-Dame_de_Paris%2C_24_June_2014_004.jpg/960px-View_from_Notre-Dame_de_Paris%2C_24_June_2014_004.jpg",
        "summer": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Le_sacre_coeur.jpg/960px-Le_sacre_coeur.jpg",
        "autumn": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/La_Maison_Rose%2C_Montmartre.jpg/960px-La_Maison_Rose%2C_Montmartre.jpg",
        "christmas": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Moulin_Rouge%2C_17_April_2011.jpg/960px-Moulin_Rouge%2C_17_April_2011.jpg"
      }
    },
    {
      "name": "Moulin Rouge",
      "address": "82 Bd de Clichy · 75018",
      "hours": "Exterior 24h · shows evening",
      "tube": "Blanche · Line 2",
      "ticket": "Show tickets from €87 · exterior free",
      "bestArrival": "09:30",
      "waitSummer": "20–40 min",
      "waitWinter": "5–15 min",
      "photoSpot": "Front façade with red windmill — best at dusk when lights glow.",
      "lens": "24–70mm",
      "tip": "Exterior photos only on this itinerary — book a show separately if you wish.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Moulin%20Rouge%20Paris",
      "bookUrl": "https://www.moulinrouge.fr/en/",
      "bookText": "Book Tickets",
      "avgVisit": "20 min exterior",
      "crowd": {
        "morning": 3,
        "afternoon": 4,
        "evening": 3
      },
      "nearby": [],
      "nearbyCafes": "",
      "nearbyRestaurants": "",
      "nearbyTube": "Blanche · Line 2",
      "nearbyToilets": "Metro stations · major museums · department stores",
      "nearbyAtm": "Banks along main boulevards · tabacs with ATM signs",
      "didYouKnow": "",
      "localSecret": "",
      "instagram": {
        "sunset": "Front façade with red windmill — best at dusk when lights glow.",
        "sunrise": "Front façade with red windmill — best at dusk when lights glow.",
        "drone": "Restricted in central Paris",
        "settings": "f/8 · ISO 200 · 24–70mm"
      },
      "photos": {
        "hero": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Moulin_Rouge%2C_17_April_2011.jpg/960px-Moulin_Rouge%2C_17_April_2011.jpg",
        "detail": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Moulin_Rouge%2C_17_April_2011.jpg/960px-Moulin_Rouge%2C_17_April_2011.jpg",
        "photoSpot": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/La_Maison_Rose%2C_Montmartre.jpg/960px-La_Maison_Rose%2C_Montmartre.jpg",
        "map": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Le_sacre_coeur.jpg/960px-Le_sacre_coeur.jpg"
      },
      "seasonalPhotos": {
        "spring": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Moulin_Rouge%2C_17_April_2011.jpg/960px-Moulin_Rouge%2C_17_April_2011.jpg",
        "summer": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Moulin_Rouge%2C_17_April_2011.jpg/960px-Moulin_Rouge%2C_17_April_2011.jpg",
        "autumn": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/La_Maison_Rose%2C_Montmartre.jpg/960px-La_Maison_Rose%2C_Montmartre.jpg",
        "christmas": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Le_sacre_coeur.jpg/960px-Le_sacre_coeur.jpg"
      }
    },
    {
      "name": "Galerie Vivienne",
      "address": "4 Rue des Petits-Champs · 75002",
      "hours": "Shops ~10:00–19:00 · passage always open",
      "tube": "Bourse · Pyramides",
      "ticket": "Free passage",
      "bestArrival": "09:30",
      "waitSummer": "20–40 min",
      "waitWinter": "5–15 min",
      "photoSpot": "Glass roof and mosaic floors — Parisian covered arcade perfection.",
      "lens": "24–70mm",
      "tip": "One of the most beautiful 19th-century passages. Combine with nearby Palais Royal.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Galerie%20Vivienne%20Paris",
      "bookText": "Book Tickets",
      "avgVisit": "45 min",
      "crowd": {
        "morning": 3,
        "afternoon": 4,
        "evening": 3
      },
      "nearby": [],
      "nearbyCafes": "",
      "nearbyRestaurants": "",
      "nearbyTube": "Bourse · Pyramides",
      "nearbyToilets": "Metro stations · major museums · department stores",
      "nearbyAtm": "Banks along main boulevards · tabacs with ATM signs",
      "didYouKnow": "",
      "localSecret": "",
      "instagram": {
        "sunset": "Glass roof and mosaic floors — Parisian covered arcade perfection.",
        "sunrise": "Glass roof and mosaic floors — Parisian covered arcade perfection.",
        "drone": "Restricted in central Paris",
        "settings": "f/8 · ISO 200 · 24–70mm"
      },
      "photos": {
        "hero": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/GalerieVivienne1.jpg/960px-GalerieVivienne1.jpg",
        "detail": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/GalerieVivienne1.jpg/960px-GalerieVivienne1.jpg",
        "photoSpot": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/GalerieVivienne1.jpg/960px-GalerieVivienne1.jpg",
        "map": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/GalerieVivienne1.jpg/960px-GalerieVivienne1.jpg"
      },
      "seasonalPhotos": {
        "spring": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/GalerieVivienne1.jpg/960px-GalerieVivienne1.jpg",
        "summer": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/GalerieVivienne1.jpg/960px-GalerieVivienne1.jpg",
        "autumn": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/GalerieVivienne1.jpg/960px-GalerieVivienne1.jpg",
        "christmas": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/GalerieVivienne1.jpg/960px-GalerieVivienne1.jpg"
      }
    },
    {
      "name": "Luxembourg Gardens",
      "address": "Rue de Médicis · 75006",
      "hours": "07:30–21:30 summer · shorter in winter",
      "tube": "Luxembourg · RER B",
      "ticket": "Free",
      "bestArrival": "09:30",
      "waitSummer": "20–40 min",
      "waitWinter": "5–15 min",
      "photoSpot": "Grand bassin with toy sailboats and palace backdrop.",
      "lens": "24–70mm",
      "tip": "Parisians' favourite park — chairs are free to move. Ideal mid-morning pause.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Luxembourg%20Gardens%20Paris",
      "bookText": "Book Tickets",
      "avgVisit": "1.5 hours",
      "crowd": {
        "morning": 3,
        "afternoon": 4,
        "evening": 3
      },
      "nearby": [],
      "nearbyCafes": "",
      "nearbyRestaurants": "",
      "nearbyTube": "Luxembourg · RER B",
      "nearbyToilets": "Metro stations · major museums · department stores",
      "nearbyAtm": "Banks along main boulevards · tabacs with ATM signs",
      "didYouKnow": "",
      "localSecret": "",
      "instagram": {
        "sunset": "Grand bassin with toy sailboats and palace backdrop.",
        "sunrise": "Grand bassin with toy sailboats and palace backdrop.",
        "drone": "Restricted in central Paris",
        "settings": "f/8 · ISO 200 · 24–70mm"
      },
      "photos": {
        "hero": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/LuxembourgMontparnasse.JPG/960px-LuxembourgMontparnasse.JPG",
        "detail": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/LuxembourgMontparnasse.JPG/960px-LuxembourgMontparnasse.JPG",
        "photoSpot": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Le_Procope_Paris.jpg/960px-Le_Procope_Paris.jpg",
        "map": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/LuxembourgMontparnasse.JPG/960px-LuxembourgMontparnasse.JPG"
      },
      "seasonalPhotos": {
        "spring": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/LuxembourgMontparnasse.JPG/960px-LuxembourgMontparnasse.JPG",
        "summer": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/LuxembourgMontparnasse.JPG/960px-LuxembourgMontparnasse.JPG",
        "autumn": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Le_Procope_Paris.jpg/960px-Le_Procope_Paris.jpg",
        "christmas": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/LuxembourgMontparnasse.JPG/960px-LuxembourgMontparnasse.JPG"
      }
    },
    {
      "name": "Panthéon",
      "address": "Place du Panthéon · 75005",
      "hours": "10:00–18:30",
      "tube": "Luxembourg · Cardinal Lemoine",
      "ticket": "€13 adult",
      "bestArrival": "09:30",
      "waitSummer": "20–40 min",
      "waitWinter": "5–15 min",
      "photoSpot": "Colonnade and dome from Rue Soufflot.",
      "lens": "24–70mm",
      "tip": "Climb to the dome for sweeping Left Bank views. Foucault's pendulum inside.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Panth%C3%A9on%20Paris",
      "bookUrl": "https://www.paris-pantheon.fr/",
      "bookText": "Book Tickets",
      "avgVisit": "1.5 hours",
      "crowd": {
        "morning": 3,
        "afternoon": 4,
        "evening": 3
      },
      "nearby": [],
      "nearbyCafes": "",
      "nearbyRestaurants": "",
      "nearbyTube": "Luxembourg · Cardinal Lemoine",
      "nearbyToilets": "Metro stations · major museums · department stores",
      "nearbyAtm": "Banks along main boulevards · tabacs with ATM signs",
      "didYouKnow": "",
      "localSecret": "",
      "instagram": {
        "sunset": "Colonnade and dome from Rue Soufflot.",
        "sunrise": "Colonnade and dome from Rue Soufflot.",
        "drone": "Restricted in central Paris",
        "settings": "f/8 · ISO 200 · 24–70mm"
      },
      "photos": {
        "hero": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Pantheon_Paris_1.jpg/960px-Pantheon_Paris_1.jpg",
        "detail": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Pantheon_Paris_1.jpg/960px-Pantheon_Paris_1.jpg",
        "photoSpot": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/LuxembourgMontparnasse.JPG/960px-LuxembourgMontparnasse.JPG",
        "map": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Pantheon_Paris_1.jpg/960px-Pantheon_Paris_1.jpg"
      },
      "seasonalPhotos": {
        "spring": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Pantheon_Paris_1.jpg/960px-Pantheon_Paris_1.jpg",
        "summer": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Pantheon_Paris_1.jpg/960px-Pantheon_Paris_1.jpg",
        "autumn": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/LuxembourgMontparnasse.JPG/960px-LuxembourgMontparnasse.JPG",
        "christmas": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Pantheon_Paris_1.jpg/960px-Pantheon_Paris_1.jpg"
      }
    },
    {
      "name": "Notre-Dame Cathedral",
      "address": "6 Parvis Notre-Dame · 75004",
      "hours": "Exterior open · interior restoration ongoing",
      "tube": "Cité · Saint-Michel",
      "ticket": "Free exterior · tower when reopened",
      "bestArrival": "09:30",
      "waitSummer": "20–40 min",
      "waitWinter": "5–15 min",
      "photoSpot": "Square Jean XXIII behind the cathedral or from the Seine banks.",
      "lens": "24–70mm",
      "tip": "Admire the Gothic façade and flying buttresses. Check reopening status for interior access.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Notre-Dame%20Cathedral%20Paris",
      "bookUrl": "https://www.notredamedeparis.fr/",
      "bookText": "Book Tickets",
      "avgVisit": "1 hour",
      "crowd": {
        "morning": 3,
        "afternoon": 4,
        "evening": 3
      },
      "nearby": [],
      "nearbyCafes": "",
      "nearbyRestaurants": "",
      "nearbyTube": "Cité · Saint-Michel",
      "nearbyToilets": "Metro stations · major museums · department stores",
      "nearbyAtm": "Banks along main boulevards · tabacs with ATM signs",
      "didYouKnow": "",
      "localSecret": "",
      "instagram": {
        "sunset": "Square Jean XXIII behind the cathedral or from the Seine banks.",
        "sunrise": "Square Jean XXIII behind the cathedral or from the Seine banks.",
        "drone": "Restricted in central Paris",
        "settings": "f/8 · ISO 200 · 24–70mm"
      },
      "photos": {
        "hero": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Notre-Dame_de_Paris%2C_4_October_2017.jpg/960px-Notre-Dame_de_Paris%2C_4_October_2017.jpg",
        "detail": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/View_from_Notre-Dame_de_Paris%2C_24_June_2014_004.jpg/960px-View_from_Notre-Dame_de_Paris%2C_24_June_2014_004.jpg",
        "photoSpot": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Shakespeare_and_Company%2C_Paris_16_April_2014.jpg/960px-Shakespeare_and_Company%2C_Paris_16_April_2014.jpg",
        "map": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Notre-Dame_de_Paris%2C_4_October_2017.jpg/960px-Notre-Dame_de_Paris%2C_4_October_2017.jpg"
      },
      "seasonalPhotos": {
        "spring": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Notre-Dame_de_Paris%2C_4_October_2017.jpg/960px-Notre-Dame_de_Paris%2C_4_October_2017.jpg",
        "summer": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/View_from_Notre-Dame_de_Paris%2C_24_June_2014_004.jpg/960px-View_from_Notre-Dame_de_Paris%2C_24_June_2014_004.jpg",
        "autumn": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Shakespeare_and_Company%2C_Paris_16_April_2014.jpg/960px-Shakespeare_and_Company%2C_Paris_16_April_2014.jpg",
        "christmas": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Notre-Dame_de_Paris%2C_4_October_2017.jpg/960px-Notre-Dame_de_Paris%2C_4_October_2017.jpg"
      }
    },
    {
      "name": "Shakespeare & Company",
      "address": "37 Rue de la Bûcherie · 75005",
      "hours": "10:00–22:00",
      "tube": "Saint-Michel · Cité",
      "ticket": "Free entry",
      "bestArrival": "09:30",
      "waitSummer": "20–40 min",
      "waitWinter": "5–15 min",
      "photoSpot": "Green-and-gold storefront across from Notre-Dame.",
      "lens": "24–70mm",
      "tip": "Legendary English-language bookshop — browse upstairs reading room quietly.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Shakespeare%20%26%20Company%20Paris",
      "bookUrl": "https://shakespeareandcompany.com/",
      "bookText": "Visit",
      "avgVisit": "45 min",
      "crowd": {
        "morning": 3,
        "afternoon": 4,
        "evening": 3
      },
      "nearby": [],
      "nearbyCafes": "",
      "nearbyRestaurants": "",
      "nearbyTube": "Saint-Michel · Cité",
      "nearbyToilets": "Metro stations · major museums · department stores",
      "nearbyAtm": "Banks along main boulevards · tabacs with ATM signs",
      "didYouKnow": "",
      "localSecret": "",
      "instagram": {
        "sunset": "Green-and-gold storefront across from Notre-Dame.",
        "sunrise": "Green-and-gold storefront across from Notre-Dame.",
        "drone": "Restricted in central Paris",
        "settings": "f/8 · ISO 200 · 24–70mm"
      },
      "photos": {
        "hero": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Shakespeare_and_Company%2C_Paris_16_April_2014.jpg/960px-Shakespeare_and_Company%2C_Paris_16_April_2014.jpg",
        "detail": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Notre-Dame_de_Paris%2C_4_October_2017.jpg/960px-Notre-Dame_de_Paris%2C_4_October_2017.jpg",
        "photoSpot": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Shakespeare_and_Company%2C_Paris_16_April_2014.jpg/960px-Shakespeare_and_Company%2C_Paris_16_April_2014.jpg",
        "map": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Shakespeare_and_Company%2C_Paris_16_April_2014.jpg/960px-Shakespeare_and_Company%2C_Paris_16_April_2014.jpg"
      },
      "seasonalPhotos": {
        "spring": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Shakespeare_and_Company%2C_Paris_16_April_2014.jpg/960px-Shakespeare_and_Company%2C_Paris_16_April_2014.jpg",
        "summer": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Notre-Dame_de_Paris%2C_4_October_2017.jpg/960px-Notre-Dame_de_Paris%2C_4_October_2017.jpg",
        "autumn": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Shakespeare_and_Company%2C_Paris_16_April_2014.jpg/960px-Shakespeare_and_Company%2C_Paris_16_April_2014.jpg",
        "christmas": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Shakespeare_and_Company%2C_Paris_16_April_2014.jpg/960px-Shakespeare_and_Company%2C_Paris_16_April_2014.jpg"
      }
    },
    {
      "name": "Rue de l'Université",
      "address": "Rue de l'Université · 75007",
      "hours": "Always open",
      "tube": "Invalides · Rue du Bac",
      "ticket": "Free",
      "bestArrival": "09:30",
      "waitSummer": "20–40 min",
      "waitWinter": "5–15 min",
      "photoSpot": "Haussmann façades framing the Eiffel Tower at the street's eastern end.",
      "lens": "24–70mm",
      "tip": "Instagram-famous viewpoint — early morning for soft light and no traffic.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Rue%20de%20l'Universit%C3%A9%20Paris",
      "bookText": "Book Tickets",
      "avgVisit": "15 min",
      "crowd": {
        "morning": 3,
        "afternoon": 4,
        "evening": 3
      },
      "nearby": [],
      "nearbyCafes": "",
      "nearbyRestaurants": "",
      "nearbyTube": "Invalides · Rue du Bac",
      "nearbyToilets": "Metro stations · major museums · department stores",
      "nearbyAtm": "Banks along main boulevards · tabacs with ATM signs",
      "didYouKnow": "",
      "localSecret": "",
      "instagram": {
        "sunset": "Haussmann façades framing the Eiffel Tower at the street's eastern end.",
        "sunrise": "Haussmann façades framing the Eiffel Tower at the street's eastern end.",
        "drone": "Restricted in central Paris",
        "settings": "f/8 · ISO 200 · 24–70mm"
      },
      "photos": {
        "hero": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Tour_Eiffel_Wikimedia_Commons_%28cropped%29.jpg/960px-Tour_Eiffel_Wikimedia_Commons_%28cropped%29.jpg",
        "detail": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Tour_Eiffel%2C_Paris_16_April_2014.jpg/960px-Tour_Eiffel%2C_Paris_16_April_2014.jpg",
        "photoSpot": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Pont_de_Bir-Hakeim_at_night_as_seen_from_Promenade_d%27Australie_140223_5.jpg/960px-Pont_de_Bir-Hakeim_at_night_as_seen_from_Promenade_d%27Australie_140223_5.jpg",
        "map": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Tour_Eiffel_Wikimedia_Commons_%28cropped%29.jpg/960px-Tour_Eiffel_Wikimedia_Commons_%28cropped%29.jpg"
      },
      "seasonalPhotos": {
        "spring": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Tour_Eiffel_Wikimedia_Commons_%28cropped%29.jpg/960px-Tour_Eiffel_Wikimedia_Commons_%28cropped%29.jpg",
        "summer": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Tour_Eiffel%2C_Paris_16_April_2014.jpg/960px-Tour_Eiffel%2C_Paris_16_April_2014.jpg",
        "autumn": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Pont_de_Bir-Hakeim_at_night_as_seen_from_Promenade_d%27Australie_140223_5.jpg/960px-Pont_de_Bir-Hakeim_at_night_as_seen_from_Promenade_d%27Australie_140223_5.jpg",
        "christmas": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Tour_Eiffel_Wikimedia_Commons_%28cropped%29.jpg/960px-Tour_Eiffel_Wikimedia_Commons_%28cropped%29.jpg"
      }
    },
    {
      "name": "Seine River Banks",
      "address": "Quais along the Seine · 75001–75007",
      "hours": "Open 24h",
      "tube": "Multiple · Alma-Marceau · Pont Neuf",
      "ticket": "Free",
      "bestArrival": "09:30",
      "waitSummer": "20–40 min",
      "waitWinter": "5–15 min",
      "photoSpot": "Île de la Cité bridges at sunset — golden light on stone and water.",
      "lens": "24–70mm",
      "tip": "Midnight walks along the Seine are quintessential Paris. Wine on the quai is a local ritual in summer.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Seine%20River%20Banks%20Paris",
      "bookText": "Book Tickets",
      "avgVisit": "1 hour",
      "crowd": {
        "morning": 3,
        "afternoon": 4,
        "evening": 3
      },
      "nearby": [],
      "nearbyCafes": "",
      "nearbyRestaurants": "",
      "nearbyTube": "Multiple · Alma-Marceau · Pont Neuf",
      "nearbyToilets": "Metro stations · major museums · department stores",
      "nearbyAtm": "Banks along main boulevards · tabacs with ATM signs",
      "didYouKnow": "",
      "localSecret": "",
      "instagram": {
        "sunset": "Île de la Cité bridges at sunset — golden light on stone and water.",
        "sunrise": "Île de la Cité bridges at sunset — golden light on stone and water.",
        "drone": "Restricted in central Paris",
        "settings": "f/8 · ISO 200 · 24–70mm"
      },
      "photos": {
        "hero": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Notre-Dame_de_Paris%2C_4_October_2017.jpg/960px-Notre-Dame_de_Paris%2C_4_October_2017.jpg",
        "detail": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Bateau_mouche_jnl_4.jpg/960px-Bateau_mouche_jnl_4.jpg",
        "photoSpot": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Pont_Alexandre_III_depuis_pont_de_la_Concorde_Paris.jpg/960px-Pont_Alexandre_III_depuis_pont_de_la_Concorde_Paris.jpg",
        "map": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Notre-Dame_de_Paris%2C_4_October_2017.jpg/960px-Notre-Dame_de_Paris%2C_4_October_2017.jpg"
      },
      "seasonalPhotos": {
        "spring": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Notre-Dame_de_Paris%2C_4_October_2017.jpg/960px-Notre-Dame_de_Paris%2C_4_October_2017.jpg",
        "summer": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Bateau_mouche_jnl_4.jpg/960px-Bateau_mouche_jnl_4.jpg",
        "autumn": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Pont_Alexandre_III_depuis_pont_de_la_Concorde_Paris.jpg/960px-Pont_Alexandre_III_depuis_pont_de_la_Concorde_Paris.jpg",
        "christmas": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Notre-Dame_de_Paris%2C_4_October_2017.jpg/960px-Notre-Dame_de_Paris%2C_4_October_2017.jpg"
      }
    }
  ],
  "hotels": [
    {
      "name": "The Peninsula Paris",
      "category": "Luxury",
      "address": "19 Av. Kléber · 75016",
      "price": "€1,200–2,000/night",
      "rating": "9.4",
      "googleRating": "4.8",
      "room": "Grand Premier · marble bathrooms · Eiffel views",
      "cancellation": "Free 48h · flexible rate",
      "tube": "Kléber · Line 6/9 · near Arc de Triomphe",
      "airport": "CDG 45–60 min · ORY 35–50 min",
      "nearbyAttractions": "Arc de Triomphe 5 min · Champs-Élysées 8 min",
      "walkingScore": "92 / 100 — central Paris on foot",
      "breakfast": "Buffet extra or included on premium rates",
      "idealFor": [
        "Luxury",
        "Families",
        "Couples"
      ],
      "tip": "Facilities: indoor pool, spa, rooftop terrace, 24h butler. Why we recommend: Parisian palatial grandeur with flawless service and one of the best afternoon teas in the city.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=The%20Peninsula%20Paris%20Paris",
      "bookUrl": "https://www.peninsula.com/en/paris/5-star-luxury-hotel-16th-arrondissement",
      "photos": {
        "exterior": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/The_Peninsula_Paris%2C_23_June_2014.jpg/960px-The_Peninsula_Paris%2C_23_June_2014.jpg",
        "lobby": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/The_Peninsula_Paris%2C_23_June_2014.jpg/960px-The_Peninsula_Paris%2C_23_June_2014.jpg",
        "room": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Arc_de_Triomphe%2C_Paris_21_October_2010.jpg/960px-Arc_de_Triomphe%2C_Paris_21_October_2010.jpg",
        "luxuryRoom": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Arc_de_Triomphe%2C_Paris_21_October_2010.jpg/960px-Arc_de_Triomphe%2C_Paris_21_October_2010.jpg",
        "restaurant": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/The_Peninsula_Paris%2C_23_June_2014.jpg/960px-The_Peninsula_Paris%2C_23_June_2014.jpg",
        "pool": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/The_Peninsula_Paris%2C_23_June_2014.jpg/960px-The_Peninsula_Paris%2C_23_June_2014.jpg",
        "rooftop": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Arc_de_Triomphe%2C_Paris_21_October_2010.jpg/960px-Arc_de_Triomphe%2C_Paris_21_October_2010.jpg",
        "breakfast": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/The_Peninsula_Paris%2C_23_June_2014.jpg/960px-The_Peninsula_Paris%2C_23_June_2014.jpg",
        "spa": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/The_Peninsula_Paris%2C_23_June_2014.jpg/960px-The_Peninsula_Paris%2C_23_June_2014.jpg",
        "view": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Arc_de_Triomphe%2C_Paris_21_October_2010.jpg/960px-Arc_de_Triomphe%2C_Paris_21_October_2010.jpg"
      }
    },
    {
      "name": "Shangri-La Paris",
      "category": "Luxury",
      "address": "10 Av. d'Iéna · 75016",
      "price": "€900–1,600/night",
      "rating": "9.3",
      "googleRating": "4.7",
      "room": "Eiffel Tower View Room · former prince's residence",
      "cancellation": "Free 48h · flexible rate",
      "tube": "Iéna · Trocadéro · Line 6/9",
      "airport": "CDG 45–60 min · ORY 35–50 min",
      "nearbyAttractions": "Trocadéro 3 min · Eiffel Tower 10 min",
      "walkingScore": "92 / 100 — central Paris on foot",
      "breakfast": "Buffet extra or included on premium rates",
      "idealFor": [
        "Couples",
        "Luxury",
        "Families"
      ],
      "tip": "Facilities: indoor pool, spa, Michelin dining, gardens. Why we recommend: Best Eiffel Tower views from room terraces — former home of Roland Bonaparte.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Shangri-La%20Paris%20Paris",
      "bookUrl": "https://www.shangri-la.com/paris/shangrila/",
      "photos": {
        "exterior": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/DSC08692-Shangri-La_H%C3%B4tel.JPG/960px-DSC08692-Shangri-La_H%C3%B4tel.JPG",
        "lobby": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/DSC08690-Shangri-La_H%C3%B4tel.JPG/960px-DSC08690-Shangri-La_H%C3%B4tel.JPG",
        "room": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Awning_of_the_Shangri-La_hotel_in_Paris%2C_23_January_2014.jpg/960px-Awning_of_the_Shangri-La_hotel_in_Paris%2C_23_January_2014.jpg",
        "luxuryRoom": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Awning_of_the_Shangri-La_hotel_in_Paris%2C_23_January_2014.jpg/960px-Awning_of_the_Shangri-La_hotel_in_Paris%2C_23_January_2014.jpg",
        "restaurant": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/DSC08690-Shangri-La_H%C3%B4tel.JPG/960px-DSC08690-Shangri-La_H%C3%B4tel.JPG",
        "pool": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Tour_Eiffel%2C_Paris_16_April_2014.jpg/960px-Tour_Eiffel%2C_Paris_16_April_2014.jpg",
        "rooftop": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Awning_of_the_Shangri-La_hotel_in_Paris%2C_23_January_2014.jpg/960px-Awning_of_the_Shangri-La_hotel_in_Paris%2C_23_January_2014.jpg",
        "breakfast": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/DSC08690-Shangri-La_H%C3%B4tel.JPG/960px-DSC08690-Shangri-La_H%C3%B4tel.JPG",
        "spa": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Tour_Eiffel%2C_Paris_16_April_2014.jpg/960px-Tour_Eiffel%2C_Paris_16_April_2014.jpg",
        "view": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Awning_of_the_Shangri-La_hotel_in_Paris%2C_23_January_2014.jpg/960px-Awning_of_the_Shangri-La_hotel_in_Paris%2C_23_January_2014.jpg"
      }
    },
    {
      "name": "Four Seasons George V",
      "category": "Luxury",
      "address": "31 Av. George V · 75008",
      "price": "€1,000–2,200/night",
      "rating": "9.5",
      "googleRating": "4.8",
      "room": "Premier Room · art-deco heritage · Champs-Élysées",
      "cancellation": "Free 48h · flexible rate",
      "tube": "George V · Line 1",
      "airport": "CDG 45–60 min · ORY 35–50 min",
      "nearbyAttractions": "Champs-Élysées 2 min · Arc de Triomphe 10 min",
      "walkingScore": "92 / 100 — central Paris on foot",
      "breakfast": "Buffet extra or included on premium rates",
      "idealFor": [
        "Luxury",
        "Couples",
        "Business"
      ],
      "tip": "Facilities: three Michelin-star dining, spa, floral installations, concierge. Why we recommend: The Paris luxury icon — three Michelin stars and legendary service since 1928.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Four%20Seasons%20George%20V%20Paris",
      "bookUrl": "https://www.fourseasons.com/paris/",
      "photos": {
        "exterior": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/H%C3%B4tel_George-V%2C_31_avenue_George-V%2C_Paris_8e_1.jpg/960px-H%C3%B4tel_George-V%2C_31_avenue_George-V%2C_Paris_8e_1.jpg",
        "lobby": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/H%C3%B4tel_George-V%2C_31_avenue_George-V%2C_Paris_8e_1.jpg/960px-H%C3%B4tel_George-V%2C_31_avenue_George-V%2C_Paris_8e_1.jpg",
        "room": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Laduree-champselysees.jpg/960px-Laduree-champselysees.jpg",
        "luxuryRoom": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Laduree-champselysees.jpg/960px-Laduree-champselysees.jpg",
        "restaurant": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/H%C3%B4tel_George-V%2C_31_avenue_George-V%2C_Paris_8e_1.jpg/960px-H%C3%B4tel_George-V%2C_31_avenue_George-V%2C_Paris_8e_1.jpg",
        "pool": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/H%C3%B4tel_George-V%2C_31_avenue_George-V%2C_Paris_8e_1.jpg/960px-H%C3%B4tel_George-V%2C_31_avenue_George-V%2C_Paris_8e_1.jpg",
        "rooftop": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Laduree-champselysees.jpg/960px-Laduree-champselysees.jpg",
        "breakfast": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/H%C3%B4tel_George-V%2C_31_avenue_George-V%2C_Paris_8e_1.jpg/960px-H%C3%B4tel_George-V%2C_31_avenue_George-V%2C_Paris_8e_1.jpg",
        "spa": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/H%C3%B4tel_George-V%2C_31_avenue_George-V%2C_Paris_8e_1.jpg/960px-H%C3%B4tel_George-V%2C_31_avenue_George-V%2C_Paris_8e_1.jpg",
        "view": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Laduree-champselysees.jpg/960px-Laduree-champselysees.jpg"
      }
    },
    {
      "name": "Hôtel Le Six",
      "category": "Mid-Range",
      "address": "14 Rue Stanislas · Saint-Germain · 75006",
      "price": "€280–450/night",
      "rating": "8.9",
      "googleRating": "4.6",
      "room": "Classic Double · Left Bank charm",
      "cancellation": "Free 48h · flexible rate",
      "tube": "Notre-Dame-des-Champs · Rennes · Line 4/12",
      "airport": "CDG 45–60 min · ORY 35–50 min",
      "nearbyAttractions": "Luxembourg Gardens 8 min · Saint-Germain cafés 3 min",
      "walkingScore": "92 / 100 — central Paris on foot",
      "breakfast": "Buffet extra or included on premium rates",
      "idealFor": [
        "Couples",
        "Solo",
        "Business"
      ],
      "tip": "Facilities: bar, breakfast room, concierge. Why we recommend: Saint-Germain location steps from literary cafés and the Luxembourg Gardens.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=H%C3%B4tel%20Le%20Six%20Paris",
      "bookUrl": "https://www.hotelle6.com/",
      "photos": {
        "exterior": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/F6261_Paris_6e_rue_Stanislas_rwk.jpg/960px-F6261_Paris_6e_rue_Stanislas_rwk.jpg",
        "lobby": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/F6261_Paris_6e_rue_Stanislas_rwk.jpg/960px-F6261_Paris_6e_rue_Stanislas_rwk.jpg",
        "room": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/LuxembourgMontparnasse.JPG/960px-LuxembourgMontparnasse.JPG",
        "luxuryRoom": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/LuxembourgMontparnasse.JPG/960px-LuxembourgMontparnasse.JPG",
        "restaurant": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/F6261_Paris_6e_rue_Stanislas_rwk.jpg/960px-F6261_Paris_6e_rue_Stanislas_rwk.jpg",
        "pool": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Caf%C3%A9_de_Flore%2C_172_boulevard_Saint-Germain%2C_Paris_6e.jpg/960px-Caf%C3%A9_de_Flore%2C_172_boulevard_Saint-Germain%2C_Paris_6e.jpg",
        "rooftop": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/LuxembourgMontparnasse.JPG/960px-LuxembourgMontparnasse.JPG",
        "breakfast": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/F6261_Paris_6e_rue_Stanislas_rwk.jpg/960px-F6261_Paris_6e_rue_Stanislas_rwk.jpg",
        "spa": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Caf%C3%A9_de_Flore%2C_172_boulevard_Saint-Germain%2C_Paris_6e.jpg/960px-Caf%C3%A9_de_Flore%2C_172_boulevard_Saint-Germain%2C_Paris_6e.jpg",
        "view": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/LuxembourgMontparnasse.JPG/960px-LuxembourgMontparnasse.JPG"
      }
    },
    {
      "name": "Hôtel Fabric",
      "category": "Mid-Range",
      "address": "31 Rue de la Folie Méricourt · 75011",
      "price": "€220–380/night",
      "rating": "8.8",
      "googleRating": "4.5",
      "room": "Superior Room · industrial-chic design",
      "cancellation": "Free 48h · flexible rate",
      "tube": "Oberkampf · République · Line 5/9",
      "airport": "CDG 45–60 min · ORY 35–50 min",
      "nearbyAttractions": "Marais 10 min · Bastille 8 min",
      "walkingScore": "92 / 100 — central Paris on foot",
      "breakfast": "Buffet extra or included on premium rates",
      "idealFor": [
        "Couples",
        "Solo",
        "Design lovers"
      ],
      "tip": "Facilities: hammam, bar, bike rental. Why we recommend: Modern boutique hotel in a converted textile factory — creative neighbourhood energy.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=H%C3%B4tel%20Fabric%20Paris",
      "bookUrl": "https://www.hotelfabric.com/",
      "photos": {
        "exterior": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Paris_-_Rue_de_la_Folie-M%C3%A9ricourt_and_Rue_Oberkampf%2C_18_July_2015_-_panoramio_.jpg/960px-Paris_-_Rue_de_la_Folie-M%C3%A9ricourt_and_Rue_Oberkampf%2C_18_July_2015_-_panoramio_.jpg",
        "lobby": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Paris_-_Rue_Oberkampf_-_Rue_Moret_-_panoramio.jpg/960px-Paris_-_Rue_Oberkampf_-_Rue_Moret_-_panoramio.jpg",
        "room": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Paris_-_Rue_de_la_Folie-M%C3%A9ricourt_and_Rue_Oberkampf%2C_18_July_2015_-_panoramio_.jpg/960px-Paris_-_Rue_de_la_Folie-M%C3%A9ricourt_and_Rue_Oberkampf%2C_18_July_2015_-_panoramio_.jpg",
        "luxuryRoom": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Paris_-_Rue_de_la_Folie-M%C3%A9ricourt_and_Rue_Oberkampf%2C_18_July_2015_-_panoramio_.jpg/960px-Paris_-_Rue_de_la_Folie-M%C3%A9ricourt_and_Rue_Oberkampf%2C_18_July_2015_-_panoramio_.jpg",
        "restaurant": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Paris_-_Rue_Oberkampf_-_Rue_Moret_-_panoramio.jpg/960px-Paris_-_Rue_Oberkampf_-_Rue_Moret_-_panoramio.jpg",
        "pool": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Paris_-_Rue_Oberkampf_-_Rue_Moret_-_panoramio.jpg/960px-Paris_-_Rue_Oberkampf_-_Rue_Moret_-_panoramio.jpg",
        "rooftop": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Paris_-_Rue_de_la_Folie-M%C3%A9ricourt_and_Rue_Oberkampf%2C_18_July_2015_-_panoramio_.jpg/960px-Paris_-_Rue_de_la_Folie-M%C3%A9ricourt_and_Rue_Oberkampf%2C_18_July_2015_-_panoramio_.jpg",
        "breakfast": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Paris_-_Rue_Oberkampf_-_Rue_Moret_-_panoramio.jpg/960px-Paris_-_Rue_Oberkampf_-_Rue_Moret_-_panoramio.jpg",
        "spa": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Paris_-_Rue_Oberkampf_-_Rue_Moret_-_panoramio.jpg/960px-Paris_-_Rue_Oberkampf_-_Rue_Moret_-_panoramio.jpg",
        "view": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Paris_-_Rue_de_la_Folie-M%C3%A9ricourt_and_Rue_Oberkampf%2C_18_July_2015_-_panoramio_.jpg/960px-Paris_-_Rue_de_la_Folie-M%C3%A9ricourt_and_Rue_Oberkampf%2C_18_July_2015_-_panoramio_.jpg"
      }
    },
    {
      "name": "Pullman Paris Tour Eiffel",
      "category": "Mid-Range",
      "address": "18 Av. de Suffren · 75015",
      "price": "€250–420/night",
      "rating": "8.6",
      "googleRating": "4.4",
      "room": "Eiffel Tower View · balcony rooms",
      "cancellation": "Free 48h · flexible rate",
      "tube": "Bir-Hakeim · Line 6",
      "airport": "CDG 45–60 min · ORY 35–50 min",
      "nearbyAttractions": "Eiffel Tower 3 min · Seine 5 min",
      "walkingScore": "92 / 100 — central Paris on foot",
      "breakfast": "Buffet extra or included on premium rates",
      "idealFor": [
        "Families",
        "Couples",
        "First-timers"
      ],
      "tip": "Facilities: fitness, restaurant, Eiffel-view bar. Why we recommend: Best location for Eiffel Tower access — walk to the monument in minutes.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Pullman%20Paris%20Tour%20Eiffel%20Paris",
      "bookUrl": "https://www.pullmanparistoureiffel.com/",
      "photos": {
        "exterior": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Pullman_Eiffel_Tower_Hotel_Paris_France_1.jpg/960px-Pullman_Eiffel_Tower_Hotel_Paris_France_1.jpg",
        "lobby": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Pullman_Eiffel_Tower_Hotel_Paris_France_2.jpg/960px-Pullman_Eiffel_Tower_Hotel_Paris_France_2.jpg",
        "room": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Tour_Eiffel%2C_Paris_16_April_2014.jpg/960px-Tour_Eiffel%2C_Paris_16_April_2014.jpg",
        "luxuryRoom": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Tour_Eiffel%2C_Paris_16_April_2014.jpg/960px-Tour_Eiffel%2C_Paris_16_April_2014.jpg",
        "restaurant": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Pullman_Eiffel_Tower_Hotel_Paris_France_2.jpg/960px-Pullman_Eiffel_Tower_Hotel_Paris_France_2.jpg",
        "pool": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Pullman_Eiffel_Tower_Hotel_Paris_France_1.jpg/960px-Pullman_Eiffel_Tower_Hotel_Paris_France_1.jpg",
        "rooftop": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Tour_Eiffel%2C_Paris_16_April_2014.jpg/960px-Tour_Eiffel%2C_Paris_16_April_2014.jpg",
        "breakfast": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Pullman_Eiffel_Tower_Hotel_Paris_France_2.jpg/960px-Pullman_Eiffel_Tower_Hotel_Paris_France_2.jpg",
        "spa": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Pullman_Eiffel_Tower_Hotel_Paris_France_1.jpg/960px-Pullman_Eiffel_Tower_Hotel_Paris_France_1.jpg",
        "view": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Tour_Eiffel%2C_Paris_16_April_2014.jpg/960px-Tour_Eiffel%2C_Paris_16_April_2014.jpg"
      }
    },
    {
      "name": "Hôtel Malte – Astotel",
      "category": "Budget",
      "address": "63 Rue de Richelieu · 75001",
      "price": "€140–220/night",
      "rating": "8.7",
      "googleRating": "4.5",
      "room": "Cosy Double · Astotel group value",
      "cancellation": "Free 48h · flexible rate",
      "tube": "Quatre-Septembre · Pyramides · Line 3/7/14",
      "airport": "CDG 45–60 min · ORY 35–50 min",
      "nearbyAttractions": "Louvre 10 min · Palais Royal 5 min",
      "walkingScore": "92 / 100 — central Paris on foot",
      "breakfast": "Buffet extra or included on premium rates",
      "idealFor": [
        "Solo",
        "Couples",
        "Value seekers"
      ],
      "tip": "Facilities: free minibar replenished daily, honesty bar, breakfast. Why we recommend: Excellent value in the 1st arrondissement with Astotel's famous complimentary minibar.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=H%C3%B4tel%20Malte%20%E2%80%93%20Astotel%20Paris",
      "bookUrl": "https://www.astotel.com/hotel-malte/",
      "photos": {
        "exterior": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/GalerieVivienne1.jpg/960px-GalerieVivienne1.jpg",
        "lobby": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Paris_-_Palais-Royal_-_Colonnes_de_Buren.jpg/960px-Paris_-_Palais-Royal_-_Colonnes_de_Buren.jpg",
        "room": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Paris_-_Louvre_Pyramid_and_Louvre_Museum.jpg/960px-Paris_-_Louvre_Pyramid_and_Louvre_Museum.jpg",
        "luxuryRoom": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Paris_-_Louvre_Pyramid_and_Louvre_Museum.jpg/960px-Paris_-_Louvre_Pyramid_and_Louvre_Museum.jpg",
        "restaurant": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Paris_-_Palais-Royal_-_Colonnes_de_Buren.jpg/960px-Paris_-_Palais-Royal_-_Colonnes_de_Buren.jpg",
        "pool": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/GalerieVivienne1.jpg/960px-GalerieVivienne1.jpg",
        "rooftop": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Paris_-_Louvre_Pyramid_and_Louvre_Museum.jpg/960px-Paris_-_Louvre_Pyramid_and_Louvre_Museum.jpg",
        "breakfast": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Paris_-_Palais-Royal_-_Colonnes_de_Buren.jpg/960px-Paris_-_Palais-Royal_-_Colonnes_de_Buren.jpg",
        "spa": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/GalerieVivienne1.jpg/960px-GalerieVivienne1.jpg",
        "view": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Paris_-_Louvre_Pyramid_and_Louvre_Museum.jpg/960px-Paris_-_Louvre_Pyramid_and_Louvre_Museum.jpg"
      }
    },
    {
      "name": "ibis Paris Tour Eiffel",
      "category": "Budget",
      "address": "2 Rue Cambronne · 75015",
      "price": "€110–180/night",
      "rating": "8.2",
      "googleRating": "4.1",
      "room": "Standard Double · reliable chain",
      "cancellation": "Free 48h · flexible rate",
      "tube": "Commerce · La Motte-Picquet · Line 8/10",
      "airport": "CDG 45–60 min · ORY 35–50 min",
      "nearbyAttractions": "Eiffel Tower 12 min walk · Walkable quartier",
      "walkingScore": "92 / 100 — central Paris on foot",
      "breakfast": "Buffet extra or included on premium rates",
      "idealFor": [
        "Families",
        "Solo",
        "Budget"
      ],
      "tip": "Facilities: 24h reception, bar, breakfast. Why we recommend: Reliable, walkable base near the Eiffel Tower without the luxury price tag.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=ibis%20Paris%20Tour%20Eiffel%20Paris",
      "bookUrl": "https://www.ibis.com/en/hotel-0917-ibis-paris-tour-eiffel-cambronne-15eme/",
      "photos": {
        "exterior": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Tour_Eiffel_Wikimedia_Commons_%28cropped%29.jpg/960px-Tour_Eiffel_Wikimedia_Commons_%28cropped%29.jpg",
        "lobby": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Tour_Eiffel%2C_Paris_16_April_2014.jpg/960px-Tour_Eiffel%2C_Paris_16_April_2014.jpg",
        "room": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Pont_de_Bir-Hakeim_at_night_as_seen_from_Promenade_d%27Australie_140223_5.jpg/960px-Pont_de_Bir-Hakeim_at_night_as_seen_from_Promenade_d%27Australie_140223_5.jpg",
        "luxuryRoom": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Pont_de_Bir-Hakeim_at_night_as_seen_from_Promenade_d%27Australie_140223_5.jpg/960px-Pont_de_Bir-Hakeim_at_night_as_seen_from_Promenade_d%27Australie_140223_5.jpg",
        "restaurant": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Tour_Eiffel%2C_Paris_16_April_2014.jpg/960px-Tour_Eiffel%2C_Paris_16_April_2014.jpg",
        "pool": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Tour_Eiffel_Wikimedia_Commons_%28cropped%29.jpg/960px-Tour_Eiffel_Wikimedia_Commons_%28cropped%29.jpg",
        "rooftop": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Pont_de_Bir-Hakeim_at_night_as_seen_from_Promenade_d%27Australie_140223_5.jpg/960px-Pont_de_Bir-Hakeim_at_night_as_seen_from_Promenade_d%27Australie_140223_5.jpg",
        "breakfast": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Tour_Eiffel%2C_Paris_16_April_2014.jpg/960px-Tour_Eiffel%2C_Paris_16_April_2014.jpg",
        "spa": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Tour_Eiffel_Wikimedia_Commons_%28cropped%29.jpg/960px-Tour_Eiffel_Wikimedia_Commons_%28cropped%29.jpg",
        "view": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Pont_de_Bir-Hakeim_at_night_as_seen_from_Promenade_d%27Australie_140223_5.jpg/960px-Pont_de_Bir-Hakeim_at_night_as_seen_from_Promenade_d%27Australie_140223_5.jpg"
      }
    },
    {
      "name": "CitizenM Gare de Lyon",
      "category": "Budget",
      "address": "8 Rue de Bercy · 75012",
      "price": "€120–200/night",
      "rating": "8.5",
      "googleRating": "4.4",
      "room": "Mood Room · tech-forward pod design",
      "cancellation": "Free 48h · flexible rate",
      "tube": "Gare de Lyon · Line 1/14 · RER A/D",
      "airport": "CDG 45–60 min · ORY 35–50 min",
      "nearbyAttractions": "Bastille 10 min · Seine 8 min · Great transport hub",
      "walkingScore": "92 / 100 — central Paris on foot",
      "breakfast": "Buffet extra or included on premium rates",
      "idealFor": [
        "Solo",
        "Business",
        "Transit"
      ],
      "tip": "Facilities: 24h bar, coworking lounge, self-check-in. Why we recommend: Modern rooms and unbeatable transport links — ideal for train connections and airport RER.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=CitizenM%20Gare%20de%20Lyon%20Paris",
      "bookUrl": "https://www.citizenm.com/destinations/paris/paris-gare-de-lyon",
      "photos": {
        "exterior": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/CitizenM_Paris_Gare_de_Lyon_en_mai_2022.jpg/960px-CitizenM_Paris_Gare_de_Lyon_en_mai_2022.jpg",
        "lobby": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/H%C3%B4tel_CitizenM_IMG_7012.jpg/960px-H%C3%B4tel_CitizenM_IMG_7012.jpg",
        "room": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Gare_de_Lyon%2C_Natixis_et_H%C3%B4tel_CitizenM_IMG_3631.jpg/960px-Gare_de_Lyon%2C_Natixis_et_H%C3%B4tel_CitizenM_IMG_3631.jpg",
        "luxuryRoom": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Gare_de_Lyon%2C_Natixis_et_H%C3%B4tel_CitizenM_IMG_3631.jpg/960px-Gare_de_Lyon%2C_Natixis_et_H%C3%B4tel_CitizenM_IMG_3631.jpg",
        "restaurant": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/H%C3%B4tel_CitizenM_IMG_7012.jpg/960px-H%C3%B4tel_CitizenM_IMG_7012.jpg",
        "pool": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/CitizenM_Paris_Gare_de_Lyon_en_mai_2022.jpg/960px-CitizenM_Paris_Gare_de_Lyon_en_mai_2022.jpg",
        "rooftop": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Gare_de_Lyon%2C_Natixis_et_H%C3%B4tel_CitizenM_IMG_3631.jpg/960px-Gare_de_Lyon%2C_Natixis_et_H%C3%B4tel_CitizenM_IMG_3631.jpg",
        "breakfast": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/H%C3%B4tel_CitizenM_IMG_7012.jpg/960px-H%C3%B4tel_CitizenM_IMG_7012.jpg",
        "spa": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/CitizenM_Paris_Gare_de_Lyon_en_mai_2022.jpg/960px-CitizenM_Paris_Gare_de_Lyon_en_mai_2022.jpg",
        "view": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Gare_de_Lyon%2C_Natixis_et_H%C3%B4tel_CitizenM_IMG_3631.jpg/960px-Gare_de_Lyon%2C_Natixis_et_H%C3%B4tel_CitizenM_IMG_3631.jpg"
      }
    }
  ],
  "dining": [
    {
      "name": "Café de Flore",
      "category": "Café · Saint-Germain institution",
      "address": "172 Bd Saint-Germain · 75006",
      "price": "€20 breakfast",
      "famous": "Café crème · fresh croissant · literary terrace",
      "halal": false,
      "vegetarian": true,
      "reservation": "No booking · arrive early",
      "wait": "10–20 min peak",
      "michelin": "—",
      "kidsFriendly": true,
      "dressCode": "Smart casual",
      "tip": "Order café crème and a croissant on the terrace — a Paris morning ritual since 1887.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Caf%C3%A9%20de%20Flore%20Paris",
      "bookUrl": "https://cafedeflore.fr/",
      "dishes": [
        {
          "name": "Café Crème",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Caf%C3%A9_de_Flore%2C_172_boulevard_Saint-Germain%2C_Paris_6e.jpg/960px-Caf%C3%A9_de_Flore%2C_172_boulevard_Saint-Germain%2C_Paris_6e.jpg",
          "desc": "Classic Parisian white coffee."
        },
        {
          "name": "Butter Croissant",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Les_Deux_Magots%2C_25_September_2019.jpg/960px-Les_Deux_Magots%2C_25_September_2019.jpg",
          "desc": "Baked fresh each morning."
        },
        {
          "name": "Hot Chocolate",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Caf%C3%A9_de_Flore%2C_172_boulevard_Saint-Germain%2C_Paris_6e.jpg/960px-Caf%C3%A9_de_Flore%2C_172_boulevard_Saint-Germain%2C_Paris_6e.jpg",
          "desc": "Rich and velvety."
        },
        {
          "name": "Omelette",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/LuxembourgMontparnasse.JPG/960px-LuxembourgMontparnasse.JPG",
          "desc": "Simple French breakfast."
        },
        {
          "name": "Tartine",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Caf%C3%A9_de_Flore%2C_172_boulevard_Saint-Germain%2C_Paris_6e.jpg/960px-Caf%C3%A9_de_Flore%2C_172_boulevard_Saint-Germain%2C_Paris_6e.jpg",
          "desc": "Open-faced baguette with butter and jam."
        }
      ],
      "photos": {
        "signature": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Caf%C3%A9_de_Flore%2C_172_boulevard_Saint-Germain%2C_Paris_6e.jpg/960px-Caf%C3%A9_de_Flore%2C_172_boulevard_Saint-Germain%2C_Paris_6e.jpg",
        "interior": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Les_Deux_Magots%2C_25_September_2019.jpg/960px-Les_Deux_Magots%2C_25_September_2019.jpg",
        "exterior": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Caf%C3%A9_de_Flore%2C_172_boulevard_Saint-Germain%2C_Paris_6e.jpg/960px-Caf%C3%A9_de_Flore%2C_172_boulevard_Saint-Germain%2C_Paris_6e.jpg",
        "dessert": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/LuxembourgMontparnasse.JPG/960px-LuxembourgMontparnasse.JPG",
        "coffee": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Les_Deux_Magots%2C_25_September_2019.jpg/960px-Les_Deux_Magots%2C_25_September_2019.jpg"
      }
    },
    {
      "name": "Girafe Paris",
      "category": "Fine Dining · Eiffel views",
      "address": "1 Place du Trocadéro · 75016",
      "price": "€80–120/head",
      "famous": "Beautiful Eiffel Tower views · seafood-focused",
      "halal": false,
      "vegetarian": true,
      "reservation": "Essential",
      "wait": "15–30 min",
      "michelin": "—",
      "kidsFriendly": true,
      "dressCode": "Smart",
      "tip": "Request a window table for uninterrupted Eiffel views at lunch.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Girafe%20Paris%20Paris",
      "bookUrl": "https://www.girafe-restaurant.com/",
      "dishes": [
        {
          "name": "Grilled Turbot",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Paris_-_Jardins_du_Trocad%C3%A9ro_%26_Tour_Eiffel_%2826804140054%29.jpg/960px-Paris_-_Jardins_du_Trocad%C3%A9ro_%26_Tour_Eiffel_%2826804140054%29.jpg",
          "desc": "House favourite at Girafe Paris."
        },
        {
          "name": "Lobster Ravioli",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Tour_Eiffel%2C_Paris_16_April_2014.jpg/960px-Tour_Eiffel%2C_Paris_16_April_2014.jpg",
          "desc": "House favourite at Girafe Paris."
        },
        {
          "name": "Tasting Menu",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Paris_-_Jardins_du_Trocad%C3%A9ro_%26_Tour_Eiffel_%2826804140054%29.jpg/960px-Paris_-_Jardins_du_Trocad%C3%A9ro_%26_Tour_Eiffel_%2826804140054%29.jpg",
          "desc": "House favourite at Girafe Paris."
        },
        {
          "name": "Champagne",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Tour_Eiffel%2C_Paris_16_April_2014.jpg/960px-Tour_Eiffel%2C_Paris_16_April_2014.jpg",
          "desc": "House favourite at Girafe Paris."
        },
        {
          "name": "Tarte Tatin",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Paris_-_Jardins_du_Trocad%C3%A9ro_%26_Tour_Eiffel_%2826804140054%29.jpg/960px-Paris_-_Jardins_du_Trocad%C3%A9ro_%26_Tour_Eiffel_%2826804140054%29.jpg",
          "desc": "House favourite at Girafe Paris."
        }
      ],
      "photos": {
        "signature": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Paris_-_Jardins_du_Trocad%C3%A9ro_%26_Tour_Eiffel_%2826804140054%29.jpg/960px-Paris_-_Jardins_du_Trocad%C3%A9ro_%26_Tour_Eiffel_%2826804140054%29.jpg",
        "interior": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Tour_Eiffel%2C_Paris_16_April_2014.jpg/960px-Tour_Eiffel%2C_Paris_16_April_2014.jpg",
        "exterior": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Paris_-_Jardins_du_Trocad%C3%A9ro_%26_Tour_Eiffel_%2826804140054%29.jpg/960px-Paris_-_Jardins_du_Trocad%C3%A9ro_%26_Tour_Eiffel_%2826804140054%29.jpg",
        "dessert": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Tour_Eiffel%2C_Paris_16_April_2014.jpg/960px-Tour_Eiffel%2C_Paris_16_April_2014.jpg",
        "coffee": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Tour_Eiffel%2C_Paris_16_April_2014.jpg/960px-Tour_Eiffel%2C_Paris_16_April_2014.jpg"
      }
    },
    {
      "name": "Le Jules Verne",
      "category": "Fine Dining · Michelin · Eiffel Tower",
      "address": "Eiffel Tower, 2nd floor · 75007",
      "price": "€190+ tasting",
      "famous": "Michelin restaurant inside the Eiffel Tower",
      "halal": false,
      "vegetarian": true,
      "reservation": "Essential 4+ weeks",
      "wait": "15–30 min",
      "michelin": "★★",
      "kidsFriendly": true,
      "dressCode": "Formal smart",
      "tip": "Dinner here is an event — book months ahead and confirm lift access with your reservation.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Le%20Jules%20Verne%20Paris",
      "bookUrl": "https://www.lejulesverne-paris.com/",
      "dishes": [
        {
          "name": "Tasting Menu",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Le_Jules_Verne.jpg/960px-Le_Jules_Verne.jpg",
          "desc": "House favourite at Le Jules Verne."
        },
        {
          "name": "Seasonal Fish",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Tour_Eiffel_Wikimedia_Commons_%28cropped%29.jpg/960px-Tour_Eiffel_Wikimedia_Commons_%28cropped%29.jpg",
          "desc": "House favourite at Le Jules Verne."
        },
        {
          "name": "Duck Foie Gras",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Tour_Eiffel%2C_Paris_16_April_2014.jpg/960px-Tour_Eiffel%2C_Paris_16_April_2014.jpg",
          "desc": "House favourite at Le Jules Verne."
        },
        {
          "name": "Cheese Cart",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Le_Jules_Verne.jpg/960px-Le_Jules_Verne.jpg",
          "desc": "House favourite at Le Jules Verne."
        },
        {
          "name": "Soufflé",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Le_Jules_Verne.jpg/960px-Le_Jules_Verne.jpg",
          "desc": "House favourite at Le Jules Verne."
        }
      ],
      "photos": {
        "signature": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Le_Jules_Verne.jpg/960px-Le_Jules_Verne.jpg",
        "interior": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Tour_Eiffel_Wikimedia_Commons_%28cropped%29.jpg/960px-Tour_Eiffel_Wikimedia_Commons_%28cropped%29.jpg",
        "exterior": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Tour_Eiffel%2C_Paris_16_April_2014.jpg/960px-Tour_Eiffel%2C_Paris_16_April_2014.jpg",
        "dessert": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Le_Jules_Verne.jpg/960px-Le_Jules_Verne.jpg",
        "coffee": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Tour_Eiffel_Wikimedia_Commons_%28cropped%29.jpg/960px-Tour_Eiffel_Wikimedia_Commons_%28cropped%29.jpg"
      }
    },
    {
      "name": "Ladurée",
      "category": "Pâtisserie · Macarons",
      "address": "75 Av. des Champs-Élysées · 75008",
      "price": "€15–30",
      "famous": "Famous macarons · tea salon",
      "halal": false,
      "vegetarian": true,
      "reservation": "Walk-in",
      "wait": "5–15 min",
      "michelin": "—",
      "kidsFriendly": true,
      "dressCode": "Smart casual",
      "tip": "Try the famous macarons — pistachio and rose are classics. Gift boxes make perfect souvenirs.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Ladur%C3%A9e%20Paris",
      "bookUrl": "https://www.laduree.fr/",
      "dishes": [
        {
          "name": "Macarons Assortment",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Laduree-champselysees.jpg/960px-Laduree-champselysees.jpg",
          "desc": "House favourite at Ladurée."
        },
        {
          "name": "Rose Macaron",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Laduree-champselysees.jpg/960px-Laduree-champselysees.jpg",
          "desc": "House favourite at Ladurée."
        },
        {
          "name": "Pistachio Macaron",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Arc_de_Triomphe%2C_Paris_21_October_2010.jpg/960px-Arc_de_Triomphe%2C_Paris_21_October_2010.jpg",
          "desc": "House favourite at Ladurée."
        },
        {
          "name": "Afternoon Tea",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Laduree-champselysees.jpg/960px-Laduree-champselysees.jpg",
          "desc": "House favourite at Ladurée."
        },
        {
          "name": "Saint-Honoré",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Laduree-champselysees.jpg/960px-Laduree-champselysees.jpg",
          "desc": "House favourite at Ladurée."
        }
      ],
      "photos": {
        "signature": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Laduree-champselysees.jpg/960px-Laduree-champselysees.jpg",
        "interior": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Laduree-champselysees.jpg/960px-Laduree-champselysees.jpg",
        "exterior": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Arc_de_Triomphe%2C_Paris_21_October_2010.jpg/960px-Arc_de_Triomphe%2C_Paris_21_October_2010.jpg",
        "dessert": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Laduree-champselysees.jpg/960px-Laduree-champselysees.jpg",
        "coffee": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Laduree-champselysees.jpg/960px-Laduree-champselysees.jpg"
      }
    },
    {
      "name": "Angelina Paris",
      "category": "Café · Hot Chocolate legend",
      "address": "226 Rue de Rivoli · 75001",
      "price": "€25–40",
      "famous": "Famous hot chocolate · Mont-Blanc pastry",
      "halal": false,
      "vegetarian": true,
      "reservation": "Recommended weekends",
      "wait": "20–40 min",
      "michelin": "—",
      "kidsFriendly": true,
      "dressCode": "Smart casual",
      "tip": "The L'Africain hot chocolate is impossibly thick — share one between two.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Angelina%20Paris%20Paris",
      "bookUrl": "https://www.angelina-paris.fr/",
      "dishes": [
        {
          "name": "L'Africain Hot Chocolate",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Rivoli_street_and_Angelina.jpg/960px-Rivoli_street_and_Angelina.jpg",
          "desc": "House favourite at Angelina Paris."
        },
        {
          "name": "Mont-Blanc",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Paris_-_Louvre_Pyramid_and_Louvre_Museum.jpg/960px-Paris_-_Louvre_Pyramid_and_Louvre_Museum.jpg",
          "desc": "House favourite at Angelina Paris."
        },
        {
          "name": "Croissant",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Rivoli_street_and_Angelina.jpg/960px-Rivoli_street_and_Angelina.jpg",
          "desc": "House favourite at Angelina Paris."
        },
        {
          "name": "Quiche Lorraine",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Louvre_Museum_Wikimedia_Commons.jpg/960px-Louvre_Museum_Wikimedia_Commons.jpg",
          "desc": "House favourite at Angelina Paris."
        },
        {
          "name": "Éclair",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Rivoli_street_and_Angelina.jpg/960px-Rivoli_street_and_Angelina.jpg",
          "desc": "House favourite at Angelina Paris."
        }
      ],
      "photos": {
        "signature": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Rivoli_street_and_Angelina.jpg/960px-Rivoli_street_and_Angelina.jpg",
        "interior": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Paris_-_Louvre_Pyramid_and_Louvre_Museum.jpg/960px-Paris_-_Louvre_Pyramid_and_Louvre_Museum.jpg",
        "exterior": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Rivoli_street_and_Angelina.jpg/960px-Rivoli_street_and_Angelina.jpg",
        "dessert": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Louvre_Museum_Wikimedia_Commons.jpg/960px-Louvre_Museum_Wikimedia_Commons.jpg",
        "coffee": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Paris_-_Louvre_Pyramid_and_Louvre_Museum.jpg/960px-Paris_-_Louvre_Pyramid_and_Louvre_Museum.jpg"
      }
    },
    {
      "name": "Café Marly",
      "category": "Brasserie · Louvre views",
      "address": "93 Rue de Rivoli · 75001",
      "price": "€45–65/head",
      "famous": "Terrace facing the Louvre Pyramid",
      "halal": false,
      "vegetarian": true,
      "reservation": "Recommended lunch",
      "wait": "15–30 min",
      "michelin": "—",
      "kidsFriendly": true,
      "dressCode": "Smart casual",
      "tip": "Sit on the terrace for pyramid views — ideal lunch between Louvre sessions.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Caf%C3%A9%20Marly%20Paris",
      "bookUrl": "https://www.cafemarly.com/",
      "dishes": [
        {
          "name": "Steak Frites",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Paris_-_Louvre_Pyramid_and_Louvre_Museum.jpg/960px-Paris_-_Louvre_Pyramid_and_Louvre_Museum.jpg",
          "desc": "House favourite at Café Marly."
        },
        {
          "name": "Duck Confit",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Louvre_Museum_Wikimedia_Commons.jpg/960px-Louvre_Museum_Wikimedia_Commons.jpg",
          "desc": "House favourite at Café Marly."
        },
        {
          "name": "Croque Monsieur",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Paris_-_Louvre_Pyramid_and_Louvre_Museum.jpg/960px-Paris_-_Louvre_Pyramid_and_Louvre_Museum.jpg",
          "desc": "House favourite at Café Marly."
        },
        {
          "name": "Salade Niçoise",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Le_Louvre_-_Aile_Richelieu.jpg/960px-Le_Louvre_-_Aile_Richelieu.jpg",
          "desc": "House favourite at Café Marly."
        },
        {
          "name": "Crème Brûlée",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Paris_-_Louvre_Pyramid_and_Louvre_Museum.jpg/960px-Paris_-_Louvre_Pyramid_and_Louvre_Museum.jpg",
          "desc": "House favourite at Café Marly."
        }
      ],
      "photos": {
        "signature": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Paris_-_Louvre_Pyramid_and_Louvre_Museum.jpg/960px-Paris_-_Louvre_Pyramid_and_Louvre_Museum.jpg",
        "interior": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Louvre_Museum_Wikimedia_Commons.jpg/960px-Louvre_Museum_Wikimedia_Commons.jpg",
        "exterior": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Paris_-_Louvre_Pyramid_and_Louvre_Museum.jpg/960px-Paris_-_Louvre_Pyramid_and_Louvre_Museum.jpg",
        "dessert": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Le_Louvre_-_Aile_Richelieu.jpg/960px-Le_Louvre_-_Aile_Richelieu.jpg",
        "coffee": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Louvre_Museum_Wikimedia_Commons.jpg/960px-Louvre_Museum_Wikimedia_Commons.jpg"
      }
    },
    {
      "name": "Le Train Bleu",
      "category": "Brasserie · Belle Époque",
      "address": "Gare de Lyon, Hall 1 · 75012",
      "price": "€55–85/head",
      "famous": "Gilded dining room · Gare de Lyon icon",
      "halal": false,
      "vegetarian": true,
      "reservation": "Recommended",
      "wait": "15–30 min",
      "michelin": "—",
      "kidsFriendly": true,
      "dressCode": "Smart casual",
      "tip": "Dine beneath painted ceilings in one of Paris's most spectacular restaurant rooms.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Le%20Train%20Bleu%20Paris",
      "bookUrl": "https://www.le-train-bleu.com/",
      "dishes": [
        {
          "name": "Duck Confit",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Train_bleu_01.jpg/960px-Train_bleu_01.jpg",
          "desc": "House favourite at Le Train Bleu."
        },
        {
          "name": "Steak Tartare",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Train_bleu_01.jpg/960px-Train_bleu_01.jpg",
          "desc": "House favourite at Le Train Bleu."
        },
        {
          "name": "Soufflé Grand Marnier",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Train_bleu_01.jpg/960px-Train_bleu_01.jpg",
          "desc": "House favourite at Le Train Bleu."
        },
        {
          "name": "Seafood Platter",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Train_bleu_01.jpg/960px-Train_bleu_01.jpg",
          "desc": "House favourite at Le Train Bleu."
        },
        {
          "name": "French Onion Soup",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Train_bleu_01.jpg/960px-Train_bleu_01.jpg",
          "desc": "House favourite at Le Train Bleu."
        }
      ],
      "photos": {
        "signature": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Train_bleu_01.jpg/960px-Train_bleu_01.jpg",
        "interior": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Train_bleu_01.jpg/960px-Train_bleu_01.jpg",
        "exterior": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Train_bleu_01.jpg/960px-Train_bleu_01.jpg",
        "dessert": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Train_bleu_01.jpg/960px-Train_bleu_01.jpg",
        "coffee": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Train_bleu_01.jpg/960px-Train_bleu_01.jpg"
      }
    },
    {
      "name": "Le Consulat",
      "category": "Café · Montmartre",
      "address": "18 Rue Norvins · 75018",
      "price": "€15–25",
      "famous": "Montmartre breakfast terrace",
      "halal": false,
      "vegetarian": true,
      "reservation": "No booking",
      "wait": "15–30 min",
      "michelin": "—",
      "kidsFriendly": true,
      "dressCode": "Smart casual",
      "tip": "Classic Montmartre café — fuel up before Sacré-Cœur and the artists' square.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Le%20Consulat%20Paris",
      "bookUrl": "https://www.leconsulat.fr/",
      "dishes": [
        {
          "name": "Croissant",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Restaurant_Le_Consulat_Montmartre%2C_Paris_6_May_2019.jpg/960px-Restaurant_Le_Consulat_Montmartre%2C_Paris_6_May_2019.jpg",
          "desc": "House favourite at Le Consulat."
        },
        {
          "name": "Café au Lait",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Restaurant_Le_Consulat_Montmartre%2C_Paris_6_May_2019.jpg/960px-Restaurant_Le_Consulat_Montmartre%2C_Paris_6_May_2019.jpg",
          "desc": "House favourite at Le Consulat."
        },
        {
          "name": "Omelette",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Le_sacre_coeur.jpg/960px-Le_sacre_coeur.jpg",
          "desc": "House favourite at Le Consulat."
        },
        {
          "name": "Crêpe",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Restaurant_Le_Consulat_Montmartre%2C_Paris_6_May_2019.jpg/960px-Restaurant_Le_Consulat_Montmartre%2C_Paris_6_May_2019.jpg",
          "desc": "House favourite at Le Consulat."
        },
        {
          "name": "Hot Chocolate",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Restaurant_Le_Consulat_Montmartre%2C_Paris_6_May_2019.jpg/960px-Restaurant_Le_Consulat_Montmartre%2C_Paris_6_May_2019.jpg",
          "desc": "House favourite at Le Consulat."
        }
      ],
      "photos": {
        "signature": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Restaurant_Le_Consulat_Montmartre%2C_Paris_6_May_2019.jpg/960px-Restaurant_Le_Consulat_Montmartre%2C_Paris_6_May_2019.jpg",
        "interior": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Restaurant_Le_Consulat_Montmartre%2C_Paris_6_May_2019.jpg/960px-Restaurant_Le_Consulat_Montmartre%2C_Paris_6_May_2019.jpg",
        "exterior": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Le_sacre_coeur.jpg/960px-Le_sacre_coeur.jpg",
        "dessert": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Restaurant_Le_Consulat_Montmartre%2C_Paris_6_May_2019.jpg/960px-Restaurant_Le_Consulat_Montmartre%2C_Paris_6_May_2019.jpg",
        "coffee": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Restaurant_Le_Consulat_Montmartre%2C_Paris_6_May_2019.jpg/960px-Restaurant_Le_Consulat_Montmartre%2C_Paris_6_May_2019.jpg"
      }
    },
    {
      "name": "La Maison Rose",
      "category": "Café · Montmartre icon",
      "address": "2 Rue de l'Abreuvoir · 75018",
      "price": "€12–22",
      "famous": "Pink façade · Instagram-famous corner",
      "halal": false,
      "vegetarian": true,
      "reservation": "Walk-in",
      "wait": "15–30 min",
      "michelin": "—",
      "kidsFriendly": true,
      "dressCode": "Smart casual",
      "tip": "Stop for coffee and photos at the pink house — Montmartre's most photogenic café.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=La%20Maison%20Rose%20Paris",
      "bookUrl": "https://www.lamaisonrose.fr/",
      "dishes": [
        {
          "name": "Café Crème",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/La_Maison_Rose%2C_Montmartre.jpg/960px-La_Maison_Rose%2C_Montmartre.jpg",
          "desc": "House favourite at La Maison Rose."
        },
        {
          "name": "Tarte Citron",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Le_sacre_coeur.jpg/960px-Le_sacre_coeur.jpg",
          "desc": "House favourite at La Maison Rose."
        },
        {
          "name": "Quiche",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/La_Maison_Rose%2C_Montmartre.jpg/960px-La_Maison_Rose%2C_Montmartre.jpg",
          "desc": "House favourite at La Maison Rose."
        },
        {
          "name": "Salade",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/La_Maison_Rose%2C_Montmartre.jpg/960px-La_Maison_Rose%2C_Montmartre.jpg",
          "desc": "House favourite at La Maison Rose."
        },
        {
          "name": "Tarte Tatin",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/La_Maison_Rose%2C_Montmartre.jpg/960px-La_Maison_Rose%2C_Montmartre.jpg",
          "desc": "House favourite at La Maison Rose."
        }
      ],
      "photos": {
        "signature": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/La_Maison_Rose%2C_Montmartre.jpg/960px-La_Maison_Rose%2C_Montmartre.jpg",
        "interior": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Le_sacre_coeur.jpg/960px-Le_sacre_coeur.jpg",
        "exterior": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/La_Maison_Rose%2C_Montmartre.jpg/960px-La_Maison_Rose%2C_Montmartre.jpg",
        "dessert": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/La_Maison_Rose%2C_Montmartre.jpg/960px-La_Maison_Rose%2C_Montmartre.jpg",
        "coffee": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Le_sacre_coeur.jpg/960px-Le_sacre_coeur.jpg"
      }
    },
    {
      "name": "Le Relais Gascon",
      "category": "Bistro · Southwest French",
      "address": "6 Rue des Abbesses · 75018",
      "price": "€25–35/head",
      "famous": "Giant salads · Gascon cuisine",
      "halal": false,
      "vegetarian": true,
      "reservation": "Walk-in lunch",
      "wait": "15–30 min",
      "michelin": "—",
      "kidsFriendly": true,
      "dressCode": "Smart casual",
      "tip": "Known for enormous salads and hearty Southwest flavours — casual Montmartre lunch.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Le%20Relais%20Gascon%20Paris",
      "bookUrl": "https://www.lerelaisgascon.com/",
      "dishes": [
        {
          "name": "Salade Gascogne",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Le_Relais_Gascon_%40_Montmartre_%40_Paris_%2834226830595%29.jpg/960px-Le_Relais_Gascon_%40_Montmartre_%40_Paris_%2834226830595%29.jpg",
          "desc": "House favourite at Le Relais Gascon."
        },
        {
          "name": "Duck Confit",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Le_Relais_Gascon_%40_Montmartre_%40_Paris_%2834095966481%29.jpg/960px-Le_Relais_Gascon_%40_Montmartre_%40_Paris_%2834095966481%29.jpg",
          "desc": "House favourite at Le Relais Gascon."
        },
        {
          "name": "Foie Gras",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Le_sacre_coeur.jpg/960px-Le_sacre_coeur.jpg",
          "desc": "House favourite at Le Relais Gascon."
        },
        {
          "name": "Steak Frites",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Le_Relais_Gascon_%40_Montmartre_%40_Paris_%2834226830595%29.jpg/960px-Le_Relais_Gascon_%40_Montmartre_%40_Paris_%2834226830595%29.jpg",
          "desc": "House favourite at Le Relais Gascon."
        },
        {
          "name": "Tarte aux Pruneaux",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Le_Relais_Gascon_%40_Montmartre_%40_Paris_%2834226830595%29.jpg/960px-Le_Relais_Gascon_%40_Montmartre_%40_Paris_%2834226830595%29.jpg",
          "desc": "House favourite at Le Relais Gascon."
        }
      ],
      "photos": {
        "signature": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Le_Relais_Gascon_%40_Montmartre_%40_Paris_%2834226830595%29.jpg/960px-Le_Relais_Gascon_%40_Montmartre_%40_Paris_%2834226830595%29.jpg",
        "interior": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Le_Relais_Gascon_%40_Montmartre_%40_Paris_%2834095966481%29.jpg/960px-Le_Relais_Gascon_%40_Montmartre_%40_Paris_%2834095966481%29.jpg",
        "exterior": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Le_sacre_coeur.jpg/960px-Le_sacre_coeur.jpg",
        "dessert": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Le_Relais_Gascon_%40_Montmartre_%40_Paris_%2834226830595%29.jpg/960px-Le_Relais_Gascon_%40_Montmartre_%40_Paris_%2834226830595%29.jpg",
        "coffee": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Le_Relais_Gascon_%40_Montmartre_%40_Paris_%2834095966481%29.jpg/960px-Le_Relais_Gascon_%40_Montmartre_%40_Paris_%2834095966481%29.jpg"
      }
    },
    {
      "name": "Bouillon Pigalle",
      "category": "Bistro · Value",
      "address": "22 Bd de Clichy · 75018",
      "price": "€15–25/head",
      "famous": "Classic bouillon · affordable French plates",
      "halal": false,
      "vegetarian": true,
      "reservation": "No booking · queue",
      "wait": "20–45 min",
      "michelin": "—",
      "kidsFriendly": true,
      "dressCode": "Smart casual",
      "tip": "Bustling neo-bouillon — excellent value French classics in a lively room.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Bouillon%20Pigalle%20Paris",
      "bookUrl": "https://www.bouillonlesite.com/",
      "dishes": [
        {
          "name": "French Onion Soup",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Bouillon_Pigalle.jpg/960px-Bouillon_Pigalle.jpg",
          "desc": "House favourite at Bouillon Pigalle."
        },
        {
          "name": "Steak Frites",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Bouillon_Pigalle_%2850635175493%29.jpg/960px-Bouillon_Pigalle_%2850635175493%29.jpg",
          "desc": "House favourite at Bouillon Pigalle."
        },
        {
          "name": "Escargots",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Bouillon_Pigalle.jpg/960px-Bouillon_Pigalle.jpg",
          "desc": "House favourite at Bouillon Pigalle."
        },
        {
          "name": "Crème Brûlée",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Bouillon_Pigalle_%2850635175493%29.jpg/960px-Bouillon_Pigalle_%2850635175493%29.jpg",
          "desc": "House favourite at Bouillon Pigalle."
        },
        {
          "name": "Mille-Feuille",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Bouillon_Pigalle.jpg/960px-Bouillon_Pigalle.jpg",
          "desc": "House favourite at Bouillon Pigalle."
        }
      ],
      "photos": {
        "signature": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Bouillon_Pigalle.jpg/960px-Bouillon_Pigalle.jpg",
        "interior": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Bouillon_Pigalle_%2850635175493%29.jpg/960px-Bouillon_Pigalle_%2850635175493%29.jpg",
        "exterior": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Bouillon_Pigalle.jpg/960px-Bouillon_Pigalle.jpg",
        "dessert": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Bouillon_Pigalle_%2850635175493%29.jpg/960px-Bouillon_Pigalle_%2850635175493%29.jpg",
        "coffee": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Bouillon_Pigalle_%2850635175493%29.jpg/960px-Bouillon_Pigalle_%2850635175493%29.jpg"
      }
    },
    {
      "name": "Café Kitsuné",
      "category": "Café · Palais Royal",
      "address": "51 Galerie Montpensier · Palais Royal · 75001",
      "price": "€8–15",
      "famous": "Matcha latte · fashion-meets-coffee",
      "halal": false,
      "vegetarian": true,
      "reservation": "Walk-in",
      "wait": "15–30 min",
      "michelin": "—",
      "kidsFriendly": true,
      "dressCode": "Smart casual",
      "tip": "Sleek coffee stop in the Palais Royal gardens — perfect Day 4 breakfast.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Caf%C3%A9%20Kitsun%C3%A9%20Paris",
      "bookUrl": "https://maisonkitsune.com/",
      "dishes": [
        {
          "name": "Matcha Latte",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Paris_-_Palais-Royal_-_Colonnes_de_Buren.jpg/960px-Paris_-_Palais-Royal_-_Colonnes_de_Buren.jpg",
          "desc": "House favourite at Café Kitsuné."
        },
        {
          "name": "Cappuccino",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Paris_-_Palais-Royal_-_Colonnes_de_Buren.jpg/960px-Paris_-_Palais-Royal_-_Colonnes_de_Buren.jpg",
          "desc": "House favourite at Café Kitsuné."
        },
        {
          "name": "Croissant",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/GalerieVivienne1.jpg/960px-GalerieVivienne1.jpg",
          "desc": "House favourite at Café Kitsuné."
        },
        {
          "name": "Cookie",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Paris_-_Palais-Royal_-_Colonnes_de_Buren.jpg/960px-Paris_-_Palais-Royal_-_Colonnes_de_Buren.jpg",
          "desc": "House favourite at Café Kitsuné."
        },
        {
          "name": "Iced Coffee",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Paris_-_Palais-Royal_-_Colonnes_de_Buren.jpg/960px-Paris_-_Palais-Royal_-_Colonnes_de_Buren.jpg",
          "desc": "House favourite at Café Kitsuné."
        }
      ],
      "photos": {
        "signature": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Paris_-_Palais-Royal_-_Colonnes_de_Buren.jpg/960px-Paris_-_Palais-Royal_-_Colonnes_de_Buren.jpg",
        "interior": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Paris_-_Palais-Royal_-_Colonnes_de_Buren.jpg/960px-Paris_-_Palais-Royal_-_Colonnes_de_Buren.jpg",
        "exterior": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/GalerieVivienne1.jpg/960px-GalerieVivienne1.jpg",
        "dessert": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Paris_-_Palais-Royal_-_Colonnes_de_Buren.jpg/960px-Paris_-_Palais-Royal_-_Colonnes_de_Buren.jpg",
        "coffee": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Paris_-_Palais-Royal_-_Colonnes_de_Buren.jpg/960px-Paris_-_Palais-Royal_-_Colonnes_de_Buren.jpg"
      }
    },
    {
      "name": "Le Procope",
      "category": "Historic Café · Oldest in Paris",
      "address": "13 Rue de l'Ancienne Comédie · 75006",
      "price": "€40–60/head",
      "famous": "The oldest café in Paris · Voltaire and revolutionaries",
      "halal": false,
      "vegetarian": true,
      "reservation": "Recommended",
      "wait": "15–30 min",
      "michelin": "—",
      "kidsFriendly": true,
      "dressCode": "Smart casual",
      "tip": "Dine where Voltaire once argued — order the coq au vin in Paris's oldest café.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Le%20Procope%20Paris",
      "bookUrl": "https://www.procope.com/",
      "dishes": [
        {
          "name": "Coq au Vin",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Le_Procope_Paris.jpg/960px-Le_Procope_Paris.jpg",
          "desc": "House favourite at Le Procope."
        },
        {
          "name": "Duck Confit",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Le_Procope_Paris.jpg/960px-Le_Procope_Paris.jpg",
          "desc": "House favourite at Le Procope."
        },
        {
          "name": "French Onion Soup",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/LuxembourgMontparnasse.JPG/960px-LuxembourgMontparnasse.JPG",
          "desc": "House favourite at Le Procope."
        },
        {
          "name": "Tarte Tatin",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Le_Procope_Paris.jpg/960px-Le_Procope_Paris.jpg",
          "desc": "House favourite at Le Procope."
        },
        {
          "name": "Steak Frites",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Le_Procope_Paris.jpg/960px-Le_Procope_Paris.jpg",
          "desc": "House favourite at Le Procope."
        }
      ],
      "photos": {
        "signature": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Le_Procope_Paris.jpg/960px-Le_Procope_Paris.jpg",
        "interior": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Le_Procope_Paris.jpg/960px-Le_Procope_Paris.jpg",
        "exterior": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/LuxembourgMontparnasse.JPG/960px-LuxembourgMontparnasse.JPG",
        "dessert": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Le_Procope_Paris.jpg/960px-Le_Procope_Paris.jpg",
        "coffee": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Le_Procope_Paris.jpg/960px-Le_Procope_Paris.jpg"
      }
    },
    {
      "name": "Odette",
      "category": "Pâtisserie · Latin Quarter",
      "address": "77 Rue Galande · 75005",
      "price": "€8–15",
      "famous": "Cream puffs · vintage façade",
      "halal": false,
      "vegetarian": true,
      "reservation": "Walk-in",
      "wait": "15–30 min",
      "michelin": "—",
      "kidsFriendly": true,
      "dressCode": "Smart casual",
      "tip": "Queue for cream puffs at this tiny Latin Quarter institution — pistachio is superb.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Odette%20Paris",
      "bookUrl": "https://www.odette-paris.com/",
      "dishes": [
        {
          "name": "Vanilla Cream Puff",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Odette%2C_77_Rue_Galande%2C_75005_Paris%2C_May_2015.jpg/960px-Odette%2C_77_Rue_Galande%2C_75005_Paris%2C_May_2015.jpg",
          "desc": "House favourite at Odette."
        },
        {
          "name": "Pistachio Cream Puff",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Odette%2C_77_Rue_Galande%2C_75005_Paris%2C_April_2016.jpg/960px-Odette%2C_77_Rue_Galande%2C_75005_Paris%2C_April_2016.jpg",
          "desc": "House favourite at Odette."
        },
        {
          "name": "Chocolate Cream Puff",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Odette%2C_77_Rue_Galande%2C_75005_Paris%2C_August_2013.jpg/960px-Odette%2C_77_Rue_Galande%2C_75005_Paris%2C_August_2013.jpg",
          "desc": "House favourite at Odette."
        },
        {
          "name": "Coffee",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Odette%2C_77_Rue_Galande%2C_75005_Paris%2C_May_2015.jpg/960px-Odette%2C_77_Rue_Galande%2C_75005_Paris%2C_May_2015.jpg",
          "desc": "House favourite at Odette."
        },
        {
          "name": "Hot Chocolate",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Odette%2C_77_Rue_Galande%2C_75005_Paris%2C_May_2015.jpg/960px-Odette%2C_77_Rue_Galande%2C_75005_Paris%2C_May_2015.jpg",
          "desc": "House favourite at Odette."
        }
      ],
      "photos": {
        "signature": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Odette%2C_77_Rue_Galande%2C_75005_Paris%2C_May_2015.jpg/960px-Odette%2C_77_Rue_Galande%2C_75005_Paris%2C_May_2015.jpg",
        "interior": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Odette%2C_77_Rue_Galande%2C_75005_Paris%2C_April_2016.jpg/960px-Odette%2C_77_Rue_Galande%2C_75005_Paris%2C_April_2016.jpg",
        "exterior": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Odette%2C_77_Rue_Galande%2C_75005_Paris%2C_August_2013.jpg/960px-Odette%2C_77_Rue_Galande%2C_75005_Paris%2C_August_2013.jpg",
        "dessert": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Odette%2C_77_Rue_Galande%2C_75005_Paris%2C_May_2015.jpg/960px-Odette%2C_77_Rue_Galande%2C_75005_Paris%2C_May_2015.jpg",
        "coffee": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Odette%2C_77_Rue_Galande%2C_75005_Paris%2C_April_2016.jpg/960px-Odette%2C_77_Rue_Galande%2C_75005_Paris%2C_April_2016.jpg"
      }
    },
    {
      "name": "Les Ombres",
      "category": "Fine Dining · Eiffel views",
      "address": "27 Quai Branly · 75007",
      "price": "€90–140/head",
      "famous": "Amazing Eiffel Tower view · rooftop terrace",
      "halal": false,
      "vegetarian": true,
      "reservation": "Essential",
      "wait": "15–30 min",
      "michelin": "★",
      "kidsFriendly": true,
      "dressCode": "Smart",
      "tip": "Book a terrace table for dinner as the Tower begins its hourly sparkle.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Les%20Ombres%20Paris",
      "bookUrl": "https://www.lesombres-restaurant.com/",
      "dishes": [
        {
          "name": "Tasting Menu",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Mus%C3%A9e_du_quai_Branly_P1070719.jpg/960px-Mus%C3%A9e_du_quai_Branly_P1070719.jpg",
          "desc": "House favourite at Les Ombres."
        },
        {
          "name": "Seasonal Fish",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Eiffel_Tower_from_Quai_Branly%2C_Paris_April_2011.jpg/960px-Eiffel_Tower_from_Quai_Branly%2C_Paris_April_2011.jpg",
          "desc": "House favourite at Les Ombres."
        },
        {
          "name": "Lamb",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Eiffel_Tower_from_Quai_Branly%2C_Paris_April_2011.jpg/960px-Eiffel_Tower_from_Quai_Branly%2C_Paris_April_2011.jpg",
          "desc": "House favourite at Les Ombres."
        },
        {
          "name": "Cheese Selection",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Mus%C3%A9e_du_quai_Branly_P1070719.jpg/960px-Mus%C3%A9e_du_quai_Branly_P1070719.jpg",
          "desc": "House favourite at Les Ombres."
        },
        {
          "name": "Chocolate Dessert",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Mus%C3%A9e_du_quai_Branly_P1070719.jpg/960px-Mus%C3%A9e_du_quai_Branly_P1070719.jpg",
          "desc": "House favourite at Les Ombres."
        }
      ],
      "photos": {
        "signature": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Mus%C3%A9e_du_quai_Branly_P1070719.jpg/960px-Mus%C3%A9e_du_quai_Branly_P1070719.jpg",
        "interior": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Eiffel_Tower_from_Quai_Branly%2C_Paris_April_2011.jpg/960px-Eiffel_Tower_from_Quai_Branly%2C_Paris_April_2011.jpg",
        "exterior": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Eiffel_Tower_from_Quai_Branly%2C_Paris_April_2011.jpg/960px-Eiffel_Tower_from_Quai_Branly%2C_Paris_April_2011.jpg",
        "dessert": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Mus%C3%A9e_du_quai_Branly_P1070719.jpg/960px-Mus%C3%A9e_du_quai_Branly_P1070719.jpg",
        "coffee": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Eiffel_Tower_from_Quai_Branly%2C_Paris_April_2011.jpg/960px-Eiffel_Tower_from_Quai_Branly%2C_Paris_April_2011.jpg"
      }
    },
    {
      "name": "Les Deux Magots",
      "category": "Café · Saint-Germain legend",
      "address": "6 Place Saint-Germain des Prés · 75006",
      "price": "€18–30",
      "famous": "Literary café · Hemingway and Sartre",
      "halal": false,
      "vegetarian": true,
      "reservation": "Walk-in",
      "wait": "15–30 min",
      "michelin": "—",
      "kidsFriendly": true,
      "dressCode": "Smart casual",
      "tip": "Rival to Flore across the square — choose one for breakfast, admire both from outside.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Les%20Deux%20Magots%20Paris",
      "bookUrl": "https://www.lesdeuxmagots.com/",
      "dishes": [
        {
          "name": "Café Crème",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Les_Deux_Magots%2C_25_September_2019.jpg/960px-Les_Deux_Magots%2C_25_September_2019.jpg",
          "desc": "House favourite at Les Deux Magots."
        },
        {
          "name": "Croissant",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Caf%C3%A9_de_Flore%2C_172_boulevard_Saint-Germain%2C_Paris_6e.jpg/960px-Caf%C3%A9_de_Flore%2C_172_boulevard_Saint-Germain%2C_Paris_6e.jpg",
          "desc": "House favourite at Les Deux Magots."
        },
        {
          "name": "Hot Chocolate",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Les_Deux_Magots%2C_25_September_2019.jpg/960px-Les_Deux_Magots%2C_25_September_2019.jpg",
          "desc": "House favourite at Les Deux Magots."
        },
        {
          "name": "Quiche",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/LuxembourgMontparnasse.JPG/960px-LuxembourgMontparnasse.JPG",
          "desc": "House favourite at Les Deux Magots."
        },
        {
          "name": "Tarte",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Les_Deux_Magots%2C_25_September_2019.jpg/960px-Les_Deux_Magots%2C_25_September_2019.jpg",
          "desc": "House favourite at Les Deux Magots."
        }
      ],
      "photos": {
        "signature": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Les_Deux_Magots%2C_25_September_2019.jpg/960px-Les_Deux_Magots%2C_25_September_2019.jpg",
        "interior": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Caf%C3%A9_de_Flore%2C_172_boulevard_Saint-Germain%2C_Paris_6e.jpg/960px-Caf%C3%A9_de_Flore%2C_172_boulevard_Saint-Germain%2C_Paris_6e.jpg",
        "exterior": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Les_Deux_Magots%2C_25_September_2019.jpg/960px-Les_Deux_Magots%2C_25_September_2019.jpg",
        "dessert": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/LuxembourgMontparnasse.JPG/960px-LuxembourgMontparnasse.JPG",
        "coffee": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Caf%C3%A9_de_Flore%2C_172_boulevard_Saint-Germain%2C_Paris_6e.jpg/960px-Caf%C3%A9_de_Flore%2C_172_boulevard_Saint-Germain%2C_Paris_6e.jpg"
      }
    },
    {
      "name": "Carette",
      "category": "Pâtisserie · Tea salon",
      "address": "4 Place du Trocadéro · 75016",
      "price": "€20–35",
      "famous": "Macarons · hot chocolate · Trocadéro terrace",
      "halal": false,
      "vegetarian": true,
      "reservation": "Walk-in",
      "wait": "15–30 min",
      "michelin": "—",
      "kidsFriendly": true,
      "dressCode": "Smart casual",
      "tip": "Elegant salon near Trocadéro — ideal post-Eiffel hot chocolate and pastries.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Carette%20Paris",
      "bookUrl": "https://www.carette.fr/",
      "dishes": [
        {
          "name": "Hot Chocolate",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Carette_Place_du_Tertre%2C_Paris_30_October_2016.jpg/960px-Carette_Place_du_Tertre%2C_Paris_30_October_2016.jpg",
          "desc": "House favourite at Carette."
        },
        {
          "name": "Macarons",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Carette_Place_du_Tertre%2C_Paris_30_October_2016.jpg/960px-Carette_Place_du_Tertre%2C_Paris_30_October_2016.jpg",
          "desc": "House favourite at Carette."
        },
        {
          "name": "Croissant",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Tour_Eiffel%2C_Paris_16_April_2014.jpg/960px-Tour_Eiffel%2C_Paris_16_April_2014.jpg",
          "desc": "House favourite at Carette."
        },
        {
          "name": "Quiche",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Carette_Place_du_Tertre%2C_Paris_30_October_2016.jpg/960px-Carette_Place_du_Tertre%2C_Paris_30_October_2016.jpg",
          "desc": "House favourite at Carette."
        },
        {
          "name": "Éclair",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Carette_Place_du_Tertre%2C_Paris_30_October_2016.jpg/960px-Carette_Place_du_Tertre%2C_Paris_30_October_2016.jpg",
          "desc": "House favourite at Carette."
        }
      ],
      "photos": {
        "signature": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Carette_Place_du_Tertre%2C_Paris_30_October_2016.jpg/960px-Carette_Place_du_Tertre%2C_Paris_30_October_2016.jpg",
        "interior": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Carette_Place_du_Tertre%2C_Paris_30_October_2016.jpg/960px-Carette_Place_du_Tertre%2C_Paris_30_October_2016.jpg",
        "exterior": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Tour_Eiffel%2C_Paris_16_April_2014.jpg/960px-Tour_Eiffel%2C_Paris_16_April_2014.jpg",
        "dessert": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Carette_Place_du_Tertre%2C_Paris_30_October_2016.jpg/960px-Carette_Place_du_Tertre%2C_Paris_30_October_2016.jpg",
        "coffee": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Carette_Place_du_Tertre%2C_Paris_30_October_2016.jpg/960px-Carette_Place_du_Tertre%2C_Paris_30_October_2016.jpg"
      }
    }
  ],
  "itineraries": [
    {
      "day": 1,
      "title": "Paris Icons",
      "color": "#2c5282",
      "routePreview": "9 stops · start 08:30 · end 19:30 · ≈ 6 km walking",
      "mapUrl": "https://www.google.com/maps/dir/Cafe+de+Flore+Paris/Eiffel+Tower+Paris/Girafe+Paris/Seine+River+Cruise+Paris/Arc+de+Triomphe+Paris/Laduree+Champs-Elysees/Le+Jules+Verne+Paris",
      "budget": {
        "budget": {
          "total": "€95 per person",
          "includes": [
            "Pre-booked Eiffel",
            "Metro hops",
            "Bouillon lunch alt",
            "Free Seine walk"
          ]
        },
        "mid": {
          "total": "€280 per person",
          "includes": [
            "Eiffel summit",
            "Girafe lunch",
            "Seine cruise",
            "Ladurée stop"
          ]
        },
        "luxury": {
          "total": "€650 per person",
          "includes": [
            "Skip-line Eiffel",
            "Girafe window",
            "Private cruise",
            "Le Jules Verne dinner"
          ]
        }
      },
      "photos": [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Caf%C3%A9_de_Flore%2C_172_boulevard_Saint-Germain%2C_Paris_6e.jpg/960px-Caf%C3%A9_de_Flore%2C_172_boulevard_Saint-Germain%2C_Paris_6e.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Tour_Eiffel_Wikimedia_Commons_%28cropped%29.jpg/960px-Tour_Eiffel_Wikimedia_Commons_%28cropped%29.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Paris_-_Jardins_du_Trocad%C3%A9ro_%26_Tour_Eiffel_%2826804140054%29.jpg/960px-Paris_-_Jardins_du_Trocad%C3%A9ro_%26_Tour_Eiffel_%2826804140054%29.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Bateau_mouche_jnl_4.jpg/960px-Bateau_mouche_jnl_4.jpg"
      ],
      "stops": [
        {
          "time": "08:30",
          "timeOfDay": "morning",
          "name": "Café de Flore",
          "desc": "Café crème · fresh croissant · €20",
          "transit": "Metro · Saint-Germain · start here",
          "icon": "walk",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Caf%C3%A9%20de%20Flore%20Paris"
        },
        {
          "time": "09:30",
          "timeOfDay": "morning",
          "name": "Eiffel Tower",
          "desc": "Pre-book tickets · 2–3 hrs · photo at Trocadéro",
          "transit": "Metro · Bir-Hakeim · 2 stops · 12 min",
          "icon": "train",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Eiffel%20Tower%20Paris"
        },
        {
          "time": "12:30",
          "timeOfDay": "afternoon",
          "name": "Girafe Paris",
          "desc": "Lunch with beautiful Eiffel Tower views",
          "transit": "Walk 800 m · 10 min",
          "icon": "walk",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Girafe%20Paris"
        },
        {
          "time": "14:30",
          "timeOfDay": "afternoon",
          "name": "Seine River Cruise",
          "desc": "1-hour cruise · book afternoon slot",
          "transit": "Walk to Pont de l'Alma · 8 min",
          "icon": "walk",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Seine%20River%20Cruise%20Paris"
        },
        {
          "time": "16:30",
          "timeOfDay": "afternoon",
          "name": "Arc de Triomphe",
          "desc": "Walk the Champs-Élysées · rooftop optional",
          "transit": "Metro · Charles de Gaulle–Étoile · 10 min",
          "icon": "train",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Arc%20de%20Triomphe%20Paris"
        },
        {
          "time": "17:30",
          "timeOfDay": "evening",
          "name": "Ladurée",
          "desc": "Try the famous macarons",
          "transit": "Walk Champs-Élysées · 600 m · 8 min",
          "icon": "walk",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Ladur%C3%A9e%20Champs-%C3%89lys%C3%A9es%20Paris"
        },
        {
          "time": "19:30",
          "timeOfDay": "night",
          "name": "Le Jules Verne",
          "desc": "Michelin dinner inside the Eiffel Tower",
          "transit": "Metro · Bir-Hakeim · 12 min",
          "icon": "train",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Le%20Jules%20Verne%20Paris"
        }
      ]
    },
    {
      "day": 2,
      "title": "Art & History",
      "color": "#1a365d",
      "routePreview": "8 stops · start 08:30 · end 20:00 · ≈ 5 km walking",
      "mapUrl": "https://www.google.com/maps/dir/Angelina+Paris/Louvre+Museum/Cafe+Marly/Jardin+des+Tuileries/Place+de+la+Concorde/Galeries+Lafayette/Le+Train+Bleu+Paris",
      "budget": {
        "budget": {
          "total": "€110 per person",
          "includes": [
            "Louvre ticket",
            "Café lunch",
            "Free gardens",
            "Metro"
          ]
        },
        "mid": {
          "total": "€260 per person",
          "includes": [
            "Louvre + audio",
            "Café Marly",
            "Galeries rooftop",
            "Le Train Bleu"
          ]
        },
        "luxury": {
          "total": "€480 per person",
          "includes": [
            "Private Louvre guide",
            "Marly terrace",
            "Personal shopper",
            "Michelin dinner"
          ]
        }
      },
      "photos": [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Rivoli_street_and_Angelina.jpg/960px-Rivoli_street_and_Angelina.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Louvre_Museum_Wikimedia_Commons.jpg/960px-Louvre_Museum_Wikimedia_Commons.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Paris_-_Louvre_Pyramid_and_Louvre_Museum.jpg/960px-Paris_-_Louvre_Pyramid_and_Louvre_Museum.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Crowd_in_the_Jardin_des_Tuileries%2C_Paris_July_2014.jpg/960px-Crowd_in_the_Jardin_des_Tuileries%2C_Paris_July_2014.jpg"
      ],
      "stops": [
        {
          "time": "08:30",
          "timeOfDay": "morning",
          "name": "Angelina Paris",
          "desc": "Famous hot chocolate · Rue de Rivoli",
          "transit": "Metro · Tuileries · 1 stop",
          "icon": "train",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Angelina%20Paris"
        },
        {
          "time": "09:30",
          "timeOfDay": "morning",
          "name": "Louvre Museum",
          "desc": "Allow 4 hours · Mona Lisa · Venus de Milo · Winged Victory",
          "transit": "Walk 200 m · 3 min",
          "icon": "walk",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Louvre%20Museum%20Paris"
        },
        {
          "time": "14:00",
          "timeOfDay": "afternoon",
          "name": "Café Marly",
          "desc": "Lunch terrace facing the pyramid",
          "transit": "Walk · under arcade · 5 min",
          "icon": "walk",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Caf%C3%A9%20Marly%20Paris"
        },
        {
          "time": "15:30",
          "timeOfDay": "afternoon",
          "name": "Jardin des Tuileries",
          "desc": "Relax between fountains and chestnut alleys",
          "transit": "Walk 400 m · 6 min",
          "icon": "walk",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Jardin%20des%20Tuileries%20Paris"
        },
        {
          "time": "17:00",
          "timeOfDay": "evening",
          "name": "Place de la Concorde",
          "desc": "Obelisk · gateway to Champs-Élysées",
          "transit": "Walk 500 m · 7 min",
          "icon": "walk",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Place%20de%20la%20Concorde%20Paris"
        },
        {
          "time": "18:00",
          "timeOfDay": "evening",
          "name": "Galeries Lafayette Rooftop",
          "desc": "Free city views · golden hour",
          "transit": "Metro · Opéra · 5 min",
          "icon": "train",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Galeries%20Lafayette%20Paris"
        },
        {
          "time": "20:00",
          "timeOfDay": "night",
          "name": "Le Train Bleu",
          "desc": "Belle Époque dinner at Gare de Lyon",
          "transit": "Metro · Gare de Lyon · 10 min",
          "icon": "train",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Le%20Train%20Bleu%20Paris"
        }
      ]
    },
    {
      "day": 3,
      "title": "Montmartre",
      "color": "#2d6a4f",
      "routePreview": "8 stops · start 08:30 · end 20:00 · ≈ 4 km walking",
      "mapUrl": "https://www.google.com/maps/dir/Le+Consulat+Paris/Sacre-Coeur+Paris/Montmartre+Paris/La+Maison+Rose/Le+Relais+Gascon/Moulin+Rouge+Paris/Galerie+Vivienne/Bouillon+Pigalle",
      "budget": {
        "budget": {
          "total": "€90 per person",
          "includes": [
            "Free Sacré-Cœur",
            "Bouillon dinner",
            "Walking only",
            "Coffee stops"
          ]
        },
        "mid": {
          "total": "€200 per person",
          "includes": [
            "Café breakfast",
            "Relais Gascon lunch",
            "Metro",
            "Bouillon dinner"
          ]
        },
        "luxury": {
          "total": "€380 per person",
          "includes": [
            "Private Montmartre guide",
            "Fine lunch",
            "Moulin Rouge show",
            "Car transfer"
          ]
        }
      },
      "photos": [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Restaurant_Le_Consulat_Montmartre%2C_Paris_6_May_2019.jpg/960px-Restaurant_Le_Consulat_Montmartre%2C_Paris_6_May_2019.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Le_sacre_coeur.jpg/960px-Le_sacre_coeur.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/La_Maison_Rose%2C_Montmartre.jpg/960px-La_Maison_Rose%2C_Montmartre.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Tour_Eiffel_Wikimedia_Commons_%28cropped%29.jpg/960px-Tour_Eiffel_Wikimedia_Commons_%28cropped%29.jpg"
      ],
      "stops": [
        {
          "time": "08:30",
          "timeOfDay": "morning",
          "name": "Le Consulat",
          "desc": "Montmartre breakfast on Rue Norvins",
          "transit": "Metro · Abbesses · 1 stop",
          "icon": "train",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Le%20Consulat%20Paris%20Montmartre"
        },
        {
          "time": "09:30",
          "timeOfDay": "morning",
          "name": "Sacré-Cœur Basilica",
          "desc": "Basilica and parvis views over Paris",
          "transit": "Walk uphill 600 m · 12 min",
          "icon": "walk",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Sacr%C3%A9-C%C5%93ur%20Paris"
        },
        {
          "time": "11:00",
          "timeOfDay": "morning",
          "name": "Montmartre Streets",
          "desc": "Artists · small cafés · photography",
          "transit": "Walk · Place du Tertre · 5 min",
          "icon": "walk",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Place%20du%20Tertre%20Paris"
        },
        {
          "time": "12:30",
          "timeOfDay": "afternoon",
          "name": "La Maison Rose",
          "desc": "Coffee at the pink house",
          "transit": "Walk Rue de l'Abreuvoir · 4 min",
          "icon": "walk",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=La%20Maison%20Rose%20Paris"
        },
        {
          "time": "13:30",
          "timeOfDay": "afternoon",
          "name": "Le Relais Gascon",
          "desc": "Hearty Southwest lunch",
          "transit": "Walk to Abbesses · 8 min",
          "icon": "walk",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Le%20Relais%20Gascon%20Paris"
        },
        {
          "time": "15:30",
          "timeOfDay": "afternoon",
          "name": "Moulin Rouge",
          "desc": "Exterior photos · red windmill façade",
          "transit": "Walk downhill · 1 km · 15 min",
          "icon": "walk",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Moulin%20Rouge%20Paris"
        },
        {
          "time": "17:00",
          "timeOfDay": "evening",
          "name": "Galerie Vivienne",
          "desc": "Covered passage · mosaic floors",
          "transit": "Metro · Bourse · 15 min",
          "icon": "train",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Galerie%20Vivienne%20Paris"
        },
        {
          "time": "20:00",
          "timeOfDay": "night",
          "name": "Bouillon Pigalle",
          "desc": "Classic affordable French dinner",
          "transit": "Metro · Pigalle · 12 min",
          "icon": "train",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Bouillon%20Pigalle%20Paris"
        }
      ]
    },
    {
      "day": 4,
      "title": "Luxury Paris",
      "color": "#b8860b",
      "routePreview": "8 stops · start 09:00 · end 19:30 · ≈ 5 km walking",
      "mapUrl": "https://www.google.com/maps/dir/Cafe+Kitsune+Paris/Luxembourg+Gardens/Pantheon+Paris/Le+Procope/Notre+Dame+Paris/Shakespeare+and+Company/Odette+Paris/Les+Ombres+Paris",
      "budget": {
        "budget": {
          "total": "€100 per person",
          "includes": [
            "Free gardens",
            "Procope lunch",
            "Walking",
            "Odette stop"
          ]
        },
        "mid": {
          "total": "€240 per person",
          "includes": [
            "Panthéon ticket",
            "Le Procope",
            "Seine walk",
            "Les Ombres dinner"
          ]
        },
        "luxury": {
          "total": "€520 per person",
          "includes": [
            "Private Left Bank guide",
            "Michelin lunch",
            "River car",
            "Les Ombres terrace"
          ]
        }
      },
      "photos": [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Paris_-_Palais-Royal_-_Colonnes_de_Buren.jpg/960px-Paris_-_Palais-Royal_-_Colonnes_de_Buren.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/LuxembourgMontparnasse.JPG/960px-LuxembourgMontparnasse.JPG",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Pantheon_Paris_1.jpg/960px-Pantheon_Paris_1.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Le_Procope_Paris.jpg/960px-Le_Procope_Paris.jpg"
      ],
      "stops": [
        {
          "time": "09:00",
          "timeOfDay": "morning",
          "name": "Café Kitsuné",
          "desc": "Matcha latte in Palais Royal gardens",
          "transit": "Metro · Palais Royal · start",
          "icon": "walk",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Caf%C3%A9%20Kitsun%C3%A9%20Palais%20Royal%20Paris"
        },
        {
          "time": "10:00",
          "timeOfDay": "morning",
          "name": "Luxembourg Gardens",
          "desc": "Sailboats · palace · Parisian calm",
          "transit": "RER B · Luxembourg · 8 min",
          "icon": "train",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Luxembourg%20Gardens%20Paris"
        },
        {
          "time": "11:30",
          "timeOfDay": "morning",
          "name": "Panthéon",
          "desc": "Neoclassical dome · Left Bank views",
          "transit": "Walk 700 m · 10 min",
          "icon": "walk",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Panth%C3%A9on%20Paris"
        },
        {
          "time": "13:00",
          "timeOfDay": "afternoon",
          "name": "Le Procope",
          "desc": "Lunch at the oldest café in Paris",
          "transit": "Walk 500 m · 7 min",
          "icon": "walk",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Le%20Procope%20Paris"
        },
        {
          "time": "15:00",
          "timeOfDay": "afternoon",
          "name": "Notre-Dame Cathedral",
          "desc": "Gothic masterpiece · restoration exterior",
          "transit": "Walk 800 m · 12 min",
          "icon": "walk",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Notre-Dame%20Cathedral%20Paris"
        },
        {
          "time": "16:30",
          "timeOfDay": "afternoon",
          "name": "Shakespeare & Company",
          "desc": "Legendary bookshop across the river",
          "transit": "Walk 3 min",
          "icon": "walk",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Shakespeare%20and%20Company%20Paris"
        },
        {
          "time": "17:30",
          "timeOfDay": "evening",
          "name": "Odette",
          "desc": "Cream puffs · Latin Quarter",
          "transit": "Walk 2 min",
          "icon": "walk",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Odette%20Paris%20cream%20puffs"
        },
        {
          "time": "19:30",
          "timeOfDay": "night",
          "name": "Les Ombres",
          "desc": "Dinner with amazing Eiffel Tower view",
          "transit": "Metro · Bir-Hakeim · 15 min",
          "icon": "train",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Les%20Ombres%20Paris"
        }
      ]
    }
  ],
  "rainyDay": [
    {
      "name": "Louvre Museum",
      "address": "Rue de Rivoli",
      "desc": "World's greatest collection · full day",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Louvre_Museum_Wikimedia_Commons.jpg/960px-Louvre_Museum_Wikimedia_Commons.jpg",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Louvre%20Museum%20Paris"
    },
    {
      "name": "Galeries Lafayette",
      "address": "Bd Haussmann",
      "desc": "Department store grandeur · free rooftop",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Galeries_Lafayette_interior.jpg/960px-Galeries_Lafayette_interior.jpg",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Galeries%20Lafayette%20Paris"
    },
    {
      "name": "Le Train Bleu",
      "address": "Gare de Lyon",
      "desc": "Belle Époque dining room",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Train_bleu_01.jpg/960px-Train_bleu_01.jpg",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Le%20Train%20Bleu%20Paris"
    },
    {
      "name": "Galerie Vivienne",
      "address": "2nd arrondissement",
      "desc": "Covered arcade · rain-proof stroll",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/GalerieVivienne1.jpg/960px-GalerieVivienne1.jpg",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Galerie%20Vivienne%20Paris"
    },
    {
      "name": "Angelina Paris",
      "address": "Rue de Rivoli",
      "desc": "Legendary hot chocolate",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Rivoli_street_and_Angelina.jpg/960px-Rivoli_street_and_Angelina.jpg",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Angelina%20Paris"
    },
    {
      "name": "Musée d'Orsay",
      "address": "Left Bank",
      "desc": "Impressionist masterpieces",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/MuseeOrsay_20070316.jpg/960px-MuseeOrsay_20070316.jpg",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Mus%C3%A9e%20d'Orsay%20Paris"
    },
    {
      "name": "Printemps Haussmann",
      "address": "Bd Haussmann",
      "desc": "Art Nouveau dome · shopping",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Galeries_Lafayette_interior.jpg/960px-Galeries_Lafayette_interior.jpg",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Printemps%20Paris"
    }
  ],
  "sunnyDay": [
    {
      "name": "Luxembourg Gardens",
      "address": "6th arrondissement",
      "desc": "Sailboats and sun chairs",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/LuxembourgMontparnasse.JPG/960px-LuxembourgMontparnasse.JPG",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Luxembourg%20Gardens%20Paris"
    },
    {
      "name": "Jardin des Tuileries",
      "address": "Between Louvre and Concorde",
      "desc": "Fountains and ferris wheel",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Crowd_in_the_Jardin_des_Tuileries%2C_Paris_July_2014.jpg/960px-Crowd_in_the_Jardin_des_Tuileries%2C_Paris_July_2014.jpg",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Jardin%20des%20Tuileries%20Paris"
    },
    {
      "name": "Seine River Banks",
      "address": "Quais · Île de la Cité",
      "desc": "Picnic and wine on the water",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Notre-Dame_de_Paris%2C_4_October_2017.jpg/960px-Notre-Dame_de_Paris%2C_4_October_2017.jpg",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Seine%20River%20Paris"
    },
    {
      "name": "Montmartre",
      "address": "18th arrondissement",
      "desc": "Artists' square · Sacré-Cœur views",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/View_from_Notre-Dame_de_Paris%2C_24_June_2014_004.jpg/960px-View_from_Notre-Dame_de_Paris%2C_24_June_2014_004.jpg",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Montmartre%20Paris"
    },
    {
      "name": "Trocadéro Gardens",
      "address": "16th arrondissement",
      "desc": "Eiffel views and fountains",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Paris_-_Jardins_du_Trocad%C3%A9ro_%26_Tour_Eiffel_%2826804140054%29.jpg/960px-Paris_-_Jardins_du_Trocad%C3%A9ro_%26_Tour_Eiffel_%2826804140054%29.jpg",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Trocad%C3%A9ro%20Gardens%20Paris"
    },
    {
      "name": "Pont Alexandre III",
      "address": "8th arrondissement",
      "desc": "Gilded bridge · golden hour",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Pont_Alexandre_III_depuis_pont_de_la_Concorde_Paris.jpg/960px-Pont_Alexandre_III_depuis_pont_de_la_Concorde_Paris.jpg",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Pont%20Alexandre%20III%20Paris"
    },
    {
      "name": "Batobus River Cruise",
      "address": "Seine boarding points",
      "desc": "Hop-on hop-off sunshine cruise",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Bateau_mouche_jnl_4.jpg/960px-Bateau_mouche_jnl_4.jpg",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Batobus%20Paris"
    }
  ],
  "hiddenGems": [
    {
      "name": "Rue de l'Abreuvoir",
      "desc": "Montmartre's most photogenic cobbled lane",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/La_Maison_Rose%2C_Montmartre.jpg/960px-La_Maison_Rose%2C_Montmartre.jpg",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Rue%20de%20l'Abreuvoir%20Paris"
    },
    {
      "name": "Rue de l'Université",
      "desc": "Eiffel-framed Haussmann vista",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Tour_Eiffel_Wikimedia_Commons_%28cropped%29.jpg/960px-Tour_Eiffel_Wikimedia_Commons_%28cropped%29.jpg",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Rue%20de%20l'Universit%C3%A9%20Paris"
    },
    {
      "name": "Bir-Hakeim Bridge",
      "desc": "Iron arches and Tower views",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Pont_de_Bir-Hakeim_at_night_as_seen_from_Promenade_d%27Australie_140223_5.jpg/960px-Pont_de_Bir-Hakeim_at_night_as_seen_from_Promenade_d%27Australie_140223_5.jpg",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Bir-Hakeim%20Bridge%20Paris"
    },
    {
      "name": "Galerie Vivienne",
      "desc": "Mosaic floors under glass canopy",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/GalerieVivienne1.jpg/960px-GalerieVivienne1.jpg",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Galerie%20Vivienne%20Paris"
    },
    {
      "name": "Shakespeare & Company",
      "desc": "English bookshop with a story on every shelf",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Shakespeare_and_Company%2C_Paris_16_April_2014.jpg/960px-Shakespeare_and_Company%2C_Paris_16_April_2014.jpg",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Shakespeare%20and%20Company%20Paris"
    },
    {
      "name": "Place des Vosges",
      "desc": "Hidden arcaded square in the Marais",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Place_des_Vosges%2C_Paris_16_April_2014.jpg/960px-Place_des_Vosges%2C_Paris_16_April_2014.jpg",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Place%20des%20Vosges%20Paris"
    },
    {
      "name": "Musée de l'Orangerie",
      "desc": "Monet Water Lilies in natural light",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Crowd_in_the_Jardin_des_Tuileries%2C_Paris_July_2014.jpg/960px-Crowd_in_the_Jardin_des_Tuileries%2C_Paris_July_2014.jpg",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Mus%C3%A9e%20de%20l'Orangerie%20Paris"
    }
  ],
  "warnings": [
    {
      "title": "Airport taxis",
      "desc": "Never follow unofficial touts at CDG/ORY. RER B + Metro = €11. A booked taxi: €55–€70 flat."
    },
    {
      "title": "Currency exchange near monuments",
      "desc": "Bureaux with \"no commission\" signs are 5–8% worse than your bank card. Use contactless everywhere."
    },
    {
      "title": "Eiffel Tower ticket scams",
      "desc": "Only buy via toureiffel.paris or this guide's links. Street sellers around Trocadéro sell fakes."
    },
    {
      "title": "Restaurants on Champs-Élysées",
      "desc": "€40 for mediocre plat du jour. Walk one block north to side streets for half the price and twice the quality."
    },
    {
      "title": "Bracelet scam",
      "desc": "Men tying \"friendship bracelets\" on your wrist near Sacré-Cœur then demanding €20. Keep hands in pockets and say non firmly."
    },
    {
      "title": "Pickpockets on Metro Line 1",
      "desc": "Châtelet, Louvre, and Concorde stations are hotspots. Crossbody bag, zip closed, phone not in back pocket."
    },
    {
      "title": "Driving in central Paris",
      "desc": "Avoid renting a car in the city. Metro + walking is faster, cheaper, and stress-free."
    }
  ],
  "shopping": {
    "districts": [
      {
        "name": "Champs-Élysées",
        "desc": "Flagship boulevard · Louis Vuitton, Sephora, Ladurée",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Avenue_des_Champs-Elys%C3%A9es%2C_Paris_12_December_2020.jpg/960px-Avenue_des_Champs-Elys%C3%A9es%2C_Paris_12_December_2020.jpg",
        "mapUrl": "https://www.google.com/maps/search/?api=1&query=Champs-%C3%89lys%C3%A9es%20Paris"
      },
      {
        "name": "Galeries Lafayette",
        "desc": "Art Nouveau dome · beauty hall · rooftop views",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Galeries_Lafayette_interior.jpg/960px-Galeries_Lafayette_interior.jpg",
        "mapUrl": "https://www.google.com/maps/search/?api=1&query=Galeries%20Lafayette%20Paris"
      },
      {
        "name": "Le Bon Marché",
        "desc": "Left Bank luxury · La Grande Épicerie food hall",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Le_Bon_March%C3%A9%2C_Paris_27_May_2012.jpg/960px-Le_Bon_March%C3%A9%2C_Paris_27_May_2012.jpg",
        "mapUrl": "https://www.google.com/maps/search/?api=1&query=Le%20Bon%20March%C3%A9%20Paris"
      },
      {
        "name": "Printemps",
        "desc": "Haussmann flagship · fashion and beauty",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Galeries_Lafayette_interior.jpg/960px-Galeries_Lafayette_interior.jpg",
        "mapUrl": "https://www.google.com/maps/search/?api=1&query=Printemps%20Haussmann%20Paris"
      },
      {
        "name": "Avenue Montaigne",
        "desc": "Haute couture · Chanel, Dior, Saint Laurent",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/H%C3%B4tel_George-V%2C_31_avenue_George-V%2C_Paris_8e_1.jpg/960px-H%C3%B4tel_George-V%2C_31_avenue_George-V%2C_Paris_8e_1.jpg",
        "mapUrl": "https://www.google.com/maps/search/?api=1&query=Avenue%20Montaigne%20Paris"
      },
      {
        "name": "Le Marais",
        "desc": "Independent boutiques · vintage · concept stores",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Place_des_Vosges%2C_Paris_16_April_2014.jpg/960px-Place_des_Vosges%2C_Paris_16_April_2014.jpg",
        "mapUrl": "https://www.google.com/maps/search/?api=1&query=Le%20Marais%20Paris"
      },
      {
        "name": "La Vallée Village",
        "desc": "Designer outlet · 40 min east of Paris · shuttle from centre",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Laduree-champselysees.jpg/960px-Laduree-champselysees.jpg",
        "mapUrl": "https://www.google.com/maps/search/?api=1&query=La%20Vall%C3%A9e%20Village%20outlet%20Paris"
      }
    ],
    "vatTips": {
      "note": "VAT is 20% on most goods. Non-EU residents can claim a VAT refund (détaxe) on purchases over €100.15 at participating stores — ask for the form at checkout.",
      "saleSeasons": "Soldes d'hiver: January · Soldes d'été: late June–July. Department stores run private sales in November.",
      "shippingTip": "Luxury boutiques often ship VAT-free to your home country on purchases over €1,000 — ask at Dior, Chanel, and Hermès."
    },
    "brands": [
      "Louis Vuitton (French heritage)",
      "Hermès (silks and leather)",
      "Diptyque (candles)",
      "Sézane (Parisian ready-to-wear)",
      "Buly 1803 (beauty)"
    ],
    "souvenirs": [
      "Ladurée macaron box",
      "Angelina hot chocolate tin",
      "French cheese from Laurent Dubois",
      "a Shakespeare & Company tote",
      "Berthillon sorbet from Île Saint-Louis",
      "Fresh croissant · baguette · fromage",
      "Steak frites · duck confit · crème brûlée · mille-feuille"
    ]
  },
  "budget": {
    "budget": {
      "daily": "€90–140 per person / day",
      "accommodation": "€110–140 ibis / CitizenM",
      "food": "€30 bouillon + café",
      "transport": "€8 Metro day",
      "activities": "€25 Eiffel or Louvre",
      "extras": "€5",
      "tip": "Paris rewards walking — Metro single rides are €2.15 but a 4-day Navigo Easy card saves time at machines."
    },
    "mid": {
      "daily": "€220–350 per person / day",
      "accommodation": "€280–450 Hôtel Le Six",
      "food": "€65 brasserie meals",
      "transport": "€10 Metro + occasional Uber",
      "activities": "€45 museums + cruise",
      "extras": "€15"
    },
    "luxury": {
      "daily": "€600–1,200 per person / day",
      "accommodation": "€1,200+ Peninsula / George V",
      "food": "€150 Michelin dinners",
      "transport": "€25 Uber / private car",
      "activities": "€80 skip-line + guides",
      "extras": "€40 tips + spa"
    }
  },
  "family": {
    "tip": "Children under 4 travel free on Metro and RER. Under 26 EU residents get free Louvre entry — bring ID. Strollers fold on escalators; use lifts where marked.",
    "rows": [
      {
        "attraction": "Luxembourg Gardens",
        "desc": "Sailboats · puppet theatre · playground",
        "goodForKids": true,
        "stroller": true,
        "babyChange": true,
        "familyTicket": false
      },
      {
        "attraction": "Eiffel Tower",
        "desc": "Kids love the lift · book morning slot",
        "goodForKids": true,
        "stroller": true,
        "babyChange": true,
        "familyTicket": true
      },
      {
        "attraction": "Louvre Museum",
        "desc": "Treasure hunt tours available",
        "goodForKids": true,
        "stroller": true,
        "babyChange": true,
        "familyTicket": true
      },
      {
        "attraction": "Jardin des Tuileries",
        "desc": "Ferris wheel · trampolines summer",
        "goodForKids": true,
        "stroller": true,
        "babyChange": true,
        "familyTicket": false
      },
      {
        "attraction": "Seine River Cruise",
        "desc": "1 hour · no walking required",
        "goodForKids": true,
        "stroller": true,
        "babyChange": false,
        "familyTicket": true
      },
      {
        "attraction": "Galeries Lafayette",
        "desc": "Rooftop views · toy department",
        "goodForKids": true,
        "stroller": true,
        "babyChange": true,
        "familyTicket": false
      },
      {
        "attraction": "Notre-Dame exterior",
        "desc": "Gargoyles fascinate older kids",
        "goodForKids": true,
        "stroller": true,
        "babyChange": false,
        "familyTicket": false
      },
      {
        "attraction": "Batobus",
        "desc": "Hop-on hop-off · stroller friendly",
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
        "label": "112",
        "desc": "European Emergency Number · all services",
        "icon": "emergency"
      },
      {
        "label": "17",
        "desc": "Police (Police Nationale)",
        "icon": "police"
      },
      {
        "label": "15",
        "desc": "Ambulance (SAMU)",
        "icon": "medical"
      },
      {
        "label": "18",
        "desc": "Fire Brigade (Pompiers)",
        "icon": "emergency"
      },
      {
        "label": "3624",
        "desc": "SOS Médecins · medical house calls",
        "icon": "medical"
      }
    ],
    "hospitals": [
      {
        "name": "Hôpital Européen Georges-Pompidou",
        "address": "20 Rue Leblanc · 75015 Paris",
        "icon": "hospital",
        "mapUrl": "https://www.google.com/maps/search/?api=1&query=H%C3%B4pital%20Europ%C3%A9en%20Georges-Pompidou%20Paris"
      },
      {
        "name": "Pitié-Salpêtrière Hospital",
        "address": "47–83 Bd de l'Hôpital · 75013 Paris",
        "icon": "hospital",
        "mapUrl": "https://www.google.com/maps/search/?api=1&query=Piti%C3%A9-Salp%C3%AAtri%C3%A8re%20Hospital%20Paris"
      },
      {
        "name": "Hôtel-Dieu Hospital",
        "address": "1 Parvis Notre-Dame · 75004 Paris",
        "icon": "hospital",
        "mapUrl": "https://www.google.com/maps/search/?api=1&query=H%C3%B4tel-Dieu%20Hospital%20Paris%20Notre-Dame"
      }
    ],
    "embassies": [
      {
        "country": "Saudi Arabia",
        "address": "92 Rue de Courcelles · 75008 Paris · ☎ +33 1 46 79 40 00 · Emergency: +33 6 26 23 81 95",
        "icon": "embassy",
        "mapUrl": "https://www.google.com/maps/search/?api=1&query=Saudi%20Embassy%20Paris%2092%20Rue%20de%20Courcelles"
      },
      {
        "country": "United Arab Emirates",
        "address": "5 Rue de Lubeck · 75116 Paris",
        "icon": "embassy",
        "mapUrl": "https://www.google.com/maps/search/?api=1&query=UAE%20Embassy%20Paris%205%20Rue%20de%20Lubeck"
      },
      {
        "country": "Qatar",
        "address": "1 Rue de Tilsitt · 75008 Paris · ☎ +33 1 45 51 90 71",
        "icon": "embassy",
        "mapUrl": "https://www.google.com/maps/search/?api=1&query=Qatar%20Embassy%20Paris%201%20Rue%20de%20Tilsitt"
      },
      {
        "country": "Kuwait",
        "address": "Ambassy of Kuwait · 8th arrondissement · 75008 Paris",
        "icon": "embassy",
        "mapUrl": "https://www.google.com/maps/search/?api=1&query=Kuwait%20Embassy%20Paris"
      },
      {
        "country": "Bahrain",
        "address": "Embassy of Bahrain · Paris · 75008",
        "icon": "embassy",
        "mapUrl": "https://www.google.com/maps/search/?api=1&query=Bahrain%20Embassy%20Paris"
      },
      {
        "country": "Oman",
        "address": "Embassy of Oman · Paris · 75016",
        "icon": "embassy",
        "mapUrl": "https://www.google.com/maps/search/?api=1&query=Oman%20Embassy%20Paris"
      }
    ],
    "lostPassport": "File a police report (dial 17 or visit commissariat). Contact your embassy for an emergency travel document — usually 24–48 h. Photograph your passport and store in cloud before departure."
  },
  "phrases": [
    {
      "english": "Bonjour — always say it when entering a shop or café.",
      "use": "Essential greeting"
    },
    {
      "english": "Où est la station de métro la plus proche ?",
      "use": "Ask for directions"
    },
    {
      "english": "L'addition, s'il vous plaît.",
      "use": "Ask for the bill"
    },
    {
      "english": "Puis-je payer par carte ?",
      "use": "Pay by card"
    },
    {
      "english": "Un café crème, s'il vous plaît.",
      "use": "Order coffee"
    },
    {
      "english": "Avez-vous une table pour deux ?",
      "use": "Request a table"
    },
    {
      "english": "Où sont les toilettes ?",
      "use": "Find restrooms"
    },
    {
      "english": "Parlez-vous anglais ?",
      "use": "Polite language check"
    },
    {
      "english": "Excusez-moi, pourriez-vous répéter ?",
      "use": "Ask to repeat"
    },
    {
      "english": "Merci beaucoup.",
      "use": "Thank you — use liberally"
    },
    {
      "english": "Je voudrais réserver une table.",
      "use": "Book a restaurant"
    },
    {
      "english": "C'est délicieux.",
      "use": "Compliment the chef"
    }
  ],
  "cheatSheet": {
    "title": "One-Page Cheat Sheet",
    "subtitle": "Screenshot before your flight — every essential in one glance.",
    "emergency": [
      {
        "label": "112",
        "value": "European emergency"
      },
      {
        "label": "17",
        "value": "Police"
      },
      {
        "label": "15",
        "value": "SAMU ambulance"
      },
      {
        "label": "18",
        "value": "Fire"
      }
    ],
    "transport": [
      {
        "label": "€2.15",
        "value": "Metro single ride"
      },
      {
        "label": "RER B",
        "value": "CDG airport 35 min"
      },
      {
        "label": "Batobus",
        "value": "Seine hop-on boat"
      }
    ],
    "money": [
      {
        "label": "Contactless",
        "value": "Everywhere"
      },
      {
        "label": "Service compris",
        "value": "Tip optional"
      },
      {
        "label": "Détaxe",
        "value": "VAT refund >€100"
      }
    ],
    "apps": [
      {
        "name": "Bonjour RATP",
        "use": "Official Metro"
      },
      {
        "name": "Citymapper",
        "use": "Navigation"
      },
      {
        "name": "Google Maps",
        "use": "Walking directions"
      },
      {
        "name": "SNCF Connect",
        "use": "Train tickets"
      },
      {
        "name": "Uber",
        "use": "Rides"
      },
      {
        "name": "Bolt",
        "use": "Rides"
      },
      {
        "name": "Booking.com",
        "use": "Hotels"
      },
      {
        "name": "TheFork",
        "use": "Restaurant reservations"
      }
    ],
    "topQrCodes": [
      {
        "name": "CDG Airport T2",
        "mapUrl": "https://www.google.com/maps/search/?api=1&query=Paris%20CDG%20Airport%20Terminal%202"
      },
      {
        "name": "Eiffel Tower",
        "mapUrl": "https://www.google.com/maps/search/?api=1&query=Eiffel%20Tower%20Paris"
      },
      {
        "name": "Louvre Museum",
        "mapUrl": "https://www.google.com/maps/search/?api=1&query=Louvre%20Museum%20Paris"
      },
      {
        "name": "Hôtel-Dieu Hospital",
        "mapUrl": "https://www.google.com/maps/search/?api=1&query=H%C3%B4tel-Dieu%20Hospital%20Paris"
      },
      {
        "name": "Saudi Embassy",
        "mapUrl": "https://www.google.com/maps/search/?api=1&query=Saudi%20Embassy%20Paris"
      },
      {
        "name": "Café de Flore",
        "mapUrl": "https://www.google.com/maps/search/?api=1&query=Caf%C3%A9%20de%20Flore%20Paris"
      },
      {
        "name": "Sacré-Cœur",
        "mapUrl": "https://www.google.com/maps/search/?api=1&query=Sacr%C3%A9-C%C5%93ur%20Paris"
      },
      {
        "name": "Gare de Lyon",
        "mapUrl": "https://www.google.com/maps/search/?api=1&query=Gare%20de%20Lyon%20Paris"
      }
    ]
  },
  "etiquette": [
    {
      "rule": "Say bonjour first",
      "desc": "Enter every shop, café, and taxi with bonjour. Skip it and service turns cold instantly."
    },
    {
      "rule": "Keep voice low",
      "desc": "Parisians speak quietly in restaurants and Metro carriages. Loud conversations draw stares."
    },
    {
      "rule": "Dress slightly smarter",
      "desc": "Paris is not casual — trainers are fine but avoid gym wear at dinner."
    },
    {
      "rule": "Do not eat on the Metro",
      "desc": "Drinking coffee on the train is tolerated; full meals are not."
    },
    {
      "rule": "Wait for the green man",
      "desc": "Jaywalking happens but tourists who sprint across Champs-Élysées risk fines and angry drivers."
    },
    {
      "rule": "Table service at cafés",
      "desc": "Sit down prices are higher than standing at the bar — check the menu board before ordering."
    },
    {
      "rule": "Sunday closures",
      "desc": "Many independent shops close Sunday and Monday. Department stores stay open."
    }
  ]
};
