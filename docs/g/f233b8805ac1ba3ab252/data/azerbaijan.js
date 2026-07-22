/**
 * DISCOVER Azerbaijan — Travel Guide
 * 9-day road trip: Baku, Silk Road, Gabala, Guba, Khinalug
 * Real place photos via Wikimedia Commons (CC-licensed)
 */
const PLAN = {
  "meta": {
    "city": "Azerbaijan",
    "country": "Azerbaijan",
    "tagline": "9-day road trip — Baku, Silk Road towns, Caucasus mountains & eternal flames.",
    "badge": "Discover · 2026 Edition",
    "edition": "2026",
    "stats": {
      "chapters": 42,
      "qrCodes": "150+",
      "attractions": 24,
      "hotels": 9,
      "dining": 9,
      "days": 9
    },
    "theme": {
      "accent": "#dc2626",
      "accentSoft": "#fef2f2",
      "accentDeep": "#991b1b",
      "transitLabel": "Driver",
      "tube": "#dc2626",
      "parks": "#059669",
      "river": "#0891b2",
      "gold": "#ca8a04",
      "navy": "#1a2744",
      "heroImage": "https://upload.wikimedia.org/wikipedia/en/thumb/0/08/Flame_towers_baku.jpg/960px-Flame_towers_baku.jpg"
    }
  },
  "welcome": {
    "editorLetter": "Azerbaijan is where Europe meets Asia — a 9-day road trip from futuristic Baku to ancient Silk Road villages, mud volcanoes, and villages perched above the clouds. Unlike typical guides that spend a week in the capital, this itinerary gives you the full diversity of the country: modern architecture, fire temples, copper workshops, mountain lakes, and Khinalug — one of the oldest inhabited villages on Earth.\n\nEvery attraction, hotel, café and restaurant carries a QR code that opens directly in Google Maps. Every day has a route map, timeline, and driving distances. Scan, drive, eat, repeat.",
    "howToUse": "Point your phone camera at any QR code and the location opens in Google Maps in one tap. Rent a car with driver (recommended) or self-drive — ≈900 km total. Colour-coded day chapters make navigation effortless.\n\n— The Editors, Azerbaijan Bureau"
  },
  "essentials": {
    "currency": {
      "label": "₼ Azerbaijani Manat",
      "note": "Cards widely accepted in cities. Carry cash for villages and roadside stalls."
    },
    "power": {
      "label": "Type C & F · 220V",
      "note": "European two-pin plug. Bring a universal adapter."
    },
    "sim": {
      "label": "eSIM or Bakcell SIM",
      "note": "Azercell, Bakcell, Nar Mobile. eSIM works on airport Wi-Fi at GYD."
    },
    "language": {
      "label": "Azerbaijani · Russian",
      "note": "English growing in Baku hotels and tourist sites. Google Translate helps in villages."
    },
    "tipping": {
      "label": "5–10%",
      "note": "Appreciated in restaurants. Round up for drivers on long road days."
    },
    "emergency": {
      "label": "112 · 102 · 103",
      "note": "General · Police · Ambulance."
    },
    "tapWater": {
      "label": "Bottled in cities",
      "note": "Drink bottled water. Tea is safe everywhere — Azerbaijanis drink it constantly."
    },
    "timezone": {
      "label": "AZT · UTC+4",
      "note": "No daylight saving — same time year-round."
    }
  },
  "arrival": [
    {
      "step": "01",
      "title": "Immigration",
      "desc": "GYD has e-gates for many passports. Have hotel address and return ticket ready. Visa-free for many nationalities incl. GCC."
    },
    {
      "step": "02",
      "title": "SIM / eSIM",
      "desc": "Activate eSIM on airport Wi-Fi. Or buy Bakcell at arrivals — ₼20 gets 10GB for the road trip."
    },
    {
      "step": "03",
      "title": "Cash",
      "desc": "Withdraw ₼100 from a local ATM (not exchange booths). Villages and tea houses prefer cash."
    },
    {
      "step": "04",
      "title": "Driver / car",
      "desc": "Pre-book a private driver (recommended) or rental car. Confirm Day 3 Gobustan and Day 8 Khinalug routes."
    },
    {
      "step": "05",
      "title": "Transfer to hotel",
      "desc": "GYD to central Baku: 25 min by car. Uber and Bolt work in the capital."
    },
    {
      "step": "06",
      "title": "Hotel",
      "desc": "Check-in from 15:00. Hotels store luggage from 09:00 — start Day 1 immediately."
    },
    {
      "step": "07",
      "title": "First meal",
      "desc": "United Coffee Beans for breakfast, then walk into the Old City. Day 1 begins."
    }
  ],
  "packing": {
    "spring": {
      "months": "MAR–MAY",
      "temp": "8–20 °C · rain possible",
      "items": [
        "Light jacket",
        "Walking shoes",
        "Umbrella",
        "Sunscreen",
        "Driver contact saved offline"
      ]
    },
    "summer": {
      "months": "JUN–AUG",
      "temp": "20–35 °C · Baku hot",
      "items": [
        "Breathable layers",
        "Sun hat",
        "SPF 50",
        "Water bottle",
        "Warm layer for mountains"
      ]
    },
    "autumn": {
      "months": "SEP–NOV",
      "temp": "10–22 °C · golden light",
      "items": [
        "Layered clothing",
        "Waterproof jacket",
        "Hiking boots",
        "Camera for fall colours",
        "Tea gift for hosts"
      ]
    },
    "winter": {
      "months": "DEC–FEB",
      "temp": "0–10 °C · snow in mountains",
      "items": [
        "Heavy coat",
        "Thermal layers",
        "Snow boots for Gabala",
        "Gloves",
        "Check Khinalug road status"
      ]
    }
  },
  "weatherTable": {
    "rows": [
      {
        "month": "Mar",
        "high": "13°C",
        "low": "5°C",
        "rain": "Low",
        "crowd": "Low",
        "price": "€€"
      },
      {
        "month": "Apr",
        "high": "18°C",
        "low": "9°C",
        "rain": "Low",
        "crowd": "Low",
        "price": "€€"
      },
      {
        "month": "May",
        "high": "24°C",
        "low": "14°C",
        "rain": "Low",
        "crowd": "Med",
        "price": "€€"
      },
      {
        "month": "Jun",
        "high": "30°C",
        "low": "19°C",
        "rain": "Low",
        "crowd": "Med",
        "price": "€€€"
      },
      {
        "month": "Jul",
        "high": "33°C",
        "low": "22°C",
        "rain": "Low",
        "crowd": "High",
        "price": "€€€"
      },
      {
        "month": "Aug",
        "high": "32°C",
        "low": "21°C",
        "rain": "Low",
        "crowd": "High",
        "price": "€€€"
      },
      {
        "month": "Sep",
        "high": "27°C",
        "low": "17°C",
        "rain": "Low",
        "crowd": "Med",
        "price": "€€"
      },
      {
        "month": "Oct",
        "high": "20°C",
        "low": "11°C",
        "rain": "Med",
        "crowd": "Low",
        "price": "€€"
      }
    ],
    "sweetSpot": "May and September — warm enough for mountains, cool enough for Baku walks, fewer crowds than summer."
  },
  "transport": {
    "modes": [
      {
        "name": "Private Driver",
        "icon": "car",
        "desc": "Recommended for this itinerary. ≈900 km total. Driver knows Gobustan, Khinalug roads."
      },
      {
        "name": "Rental Car",
        "icon": "car",
        "desc": "Self-drive possible. Roads good on main routes. 4×4 helpful for mud volcanoes."
      },
      {
        "name": "Bolt / Uber",
        "icon": "taxi",
        "desc": "Baku only. Cheap and reliable in the capital."
      },
      {
        "name": "Baku Metro",
        "icon": "metro",
        "desc": "3 lines in Baku. Useful Days 1–2. ₼0.30 per ride."
      },
      {
        "name": "Intercity Bus",
        "icon": "bus",
        "desc": "Budget option Baku–Sheki. Slower than car — not ideal for this 9-day route."
      }
    ],
    "oysterTips": [
      {
        "title": "Baku → Lahij",
        "desc": "≈3 hours · 200 km · mountain road after Shamakhi"
      },
      {
        "title": "Lahij → Sheki",
        "desc": "≈2 hours · 120 km · scenic valley drive"
      },
      {
        "title": "Sheki → Gabala",
        "desc": "≈2 hours · 100 km · easy highway"
      },
      {
        "title": "Gabala → Guba",
        "desc": "≈4 hours · 180 km · longest driving day"
      },
      {
        "title": "Guba → Baku",
        "desc": "≈2 hours · 170 km · departure day"
      }
    ],
    "exit6Tip": "Pre-book your driver for all 9 days. One consistent driver who knows Khinalug road conditions is worth the cost."
  },
  "maps": {
    "overview": {
      "caption": "9-day loop — Baku, Silk Road, Gabala, Guba, return",
      "markers": [
        {
          "name": "Baku",
          "type": "city",
          "lat": 40.4093,
          "lng": 49.8671
        },
        {
          "name": "Gobustan",
          "type": "sight",
          "lat": 40.1056,
          "lng": 49.388
        },
        {
          "name": "Lahij",
          "type": "sight",
          "lat": 40.8453,
          "lng": 48.3856
        },
        {
          "name": "Sheki",
          "type": "city",
          "lat": 41.1917,
          "lng": 47.1706
        },
        {
          "name": "Gabala",
          "type": "city",
          "lat": 40.9792,
          "lng": 47.8458
        },
        {
          "name": "Guba",
          "type": "city",
          "lat": 41.3611,
          "lng": 48.5136
        },
        {
          "name": "Khinalug",
          "type": "sight",
          "lat": 41.2167,
          "lng": 48.1333
        }
      ]
    }
  },
  "attractions": [
    {
      "name": "Old City (Icherisheher)",
      "address": "Icherisheher · Baku",
      "hours": "Open 24h · museums 10:00–18:00",
      "tube": "Walk from central Baku hotels",
      "ticket": "Free to wander · sites from ₼5",
      "bestArrival": "09:00",
      "waitSummer": "Busy after 11:00",
      "waitWinter": "Quiet mornings",
      "photoSpot": "Maiden Tower from the inner walls — UNESCO skyline.",
      "lens": "24–70mm",
      "tip": "Enter from the main gate and get lost in caravanserai alleys before the tour buses arrive.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Old%20City%20(Icherisheher)%20Azerbaijan",
      "bookUrl": "https://www.google.com/maps/search/?api=1&query=Old%20City%20(Icherisheher)%20Azerbaijan",
      "bookText": "Book Tickets",
      "avgVisit": "2–3 hours",
      "crowd": {
        "morning": 3,
        "afternoon": 4,
        "evening": 2
      },
      "nearby": [
        {
          "name": "Maiden Tower",
          "walk": "5 min"
        },
        {
          "name": "Palace of the Shirvanshahs",
          "walk": "8 min"
        },
        {
          "name": "Şirvanşah Museum Restaurant",
          "walk": "3 min"
        }
      ],
      "nearbyCafes": "See dining chapter in this guide.",
      "nearbyRestaurants": "See dining chapter in this guide.",
      "nearbyTube": "Walk from central Baku hotels",
      "nearbyToilets": "On-site or nearby cafés.",
      "nearbyAtm": "City centre banks · major malls",
      "didYouKnow": "Icherisheher is a UNESCO World Heritage Site — a walled medieval city where Europe meets Asia.",
      "localSecret": "The back alleys behind the palace are quieter and full of artisan workshops.",
      "instagram": {
        "sunset": "Maiden Tower from the inner walls — UNESCO skyline.",
        "sunrise": "Maiden Tower from the inner walls — UNESCO skyline.",
        "drone": "Check local drone rules",
        "settings": "f/8 · ISO 200 · 24–70mm"
      },
      "photos": {
        "hero": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Maiden_Tower_Baku.jpg/960px-Maiden_Tower_Baku.jpg",
        "detail": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Palace_of_Shirvanshahs_common.JPG/960px-Palace_of_Shirvanshahs_common.JPG",
        "photoSpot": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Maiden_tower_IMG_8521.jpg/960px-Maiden_tower_IMG_8521.jpg",
        "map": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Maiden_tower_IMG_8521.jpg/960px-Maiden_tower_IMG_8521.jpg",
        "heroPosition": "center 40%"
      },
      "seasonalPhotos": {
        "spring": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Maiden_Tower_Baku.jpg/960px-Maiden_Tower_Baku.jpg",
        "summer": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Palace_of_Shirvanshahs_common.JPG/960px-Palace_of_Shirvanshahs_common.JPG",
        "autumn": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Maiden_tower_IMG_8521.jpg/960px-Maiden_tower_IMG_8521.jpg",
        "christmas": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Maiden_tower_IMG_8521.jpg/960px-Maiden_tower_IMG_8521.jpg"
      }
    },
    {
      "name": "Maiden Tower",
      "address": "Qız Qalası · Old City · Baku",
      "hours": "09:00–18:00",
      "tube": "Old City on foot",
      "ticket": "₼15 adult",
      "bestArrival": "09:30",
      "waitSummer": "20–40 min",
      "waitWinter": "5–10 min",
      "photoSpot": "From the ramparts at sunset — Flame Towers glow behind the tower.",
      "lens": "24–70mm",
      "tip": "Climb to the top for a 360° view of Baku Bay and the Old City.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Maiden%20Tower%20Azerbaijan",
      "bookUrl": "https://www.google.com/maps/search/?api=1&query=Maiden%20Tower%20Azerbaijan",
      "bookText": "Book Tickets",
      "avgVisit": "45 min",
      "crowd": {
        "morning": 3,
        "afternoon": 4,
        "evening": 2
      },
      "nearby": [],
      "nearbyCafes": "See dining chapter in this guide.",
      "nearbyRestaurants": "See dining chapter in this guide.",
      "nearbyTube": "Old City on foot",
      "nearbyToilets": "On-site or nearby cafés.",
      "nearbyAtm": "City centre banks · major malls",
      "didYouKnow": "The Maiden Tower is Baku's most iconic symbol — its origins remain a mystery debated by historians.",
      "localSecret": "Visit just before closing when the light turns golden on the Caspian.",
      "instagram": {
        "sunset": "From the ramparts at sunset — Flame Towers glow behind the tower.",
        "sunrise": "From the ramparts at sunset — Flame Towers glow behind the tower.",
        "drone": "Check local drone rules",
        "settings": "f/8 · ISO 200 · 24–70mm"
      },
      "photos": {
        "hero": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Maiden_tower_IMG_8521.jpg/960px-Maiden_tower_IMG_8521.jpg",
        "detail": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Maiden_Tower_Baku.jpg/960px-Maiden_Tower_Baku.jpg",
        "photoSpot": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Maiden_Tower_Baku.jpg/960px-Maiden_Tower_Baku.jpg",
        "map": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Maiden_Tower_Baku.jpg/960px-Maiden_Tower_Baku.jpg",
        "heroPosition": "center 40%"
      },
      "seasonalPhotos": {
        "spring": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Maiden_tower_IMG_8521.jpg/960px-Maiden_tower_IMG_8521.jpg",
        "summer": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Maiden_Tower_Baku.jpg/960px-Maiden_Tower_Baku.jpg",
        "autumn": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Maiden_Tower_Baku.jpg/960px-Maiden_Tower_Baku.jpg",
        "christmas": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Maiden_Tower_Baku.jpg/960px-Maiden_Tower_Baku.jpg"
      }
    },
    {
      "name": "Palace of the Shirvanshahs",
      "address": "Icherisheher · Baku",
      "hours": "10:00–18:00",
      "tube": "Old City on foot",
      "ticket": "₼10 adult",
      "bestArrival": "10:00",
      "waitSummer": "15–30 min",
      "waitWinter": "Minimal",
      "photoSpot": "Courtyard arcade — symmetrical stone arches and turquoise tiles.",
      "lens": "24–70mm",
      "tip": "Combine with Maiden Tower ticket for a small discount at the gate.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Palace%20of%20the%20Shirvanshahs%20Azerbaijan",
      "bookUrl": "https://www.google.com/maps/search/?api=1&query=Palace%20of%20the%20Shirvanshahs%20Azerbaijan",
      "bookText": "Book Tickets",
      "avgVisit": "1 hour",
      "crowd": {
        "morning": 3,
        "afternoon": 4,
        "evening": 2
      },
      "nearby": [],
      "nearbyCafes": "See dining chapter in this guide.",
      "nearbyRestaurants": "See dining chapter in this guide.",
      "nearbyTube": "Old City on foot",
      "nearbyToilets": "On-site or nearby cafés.",
      "nearbyAtm": "City centre banks · major malls",
      "didYouKnow": "Built in the 15th century, this was the seat of the Shirvanshah dynasty — medieval Azerbaijan's royal court.",
      "localSecret": "The burial vault downstairs is cool even in summer — a welcome respite.",
      "instagram": {
        "sunset": "Courtyard arcade — symmetrical stone arches and turquoise tiles.",
        "sunrise": "Courtyard arcade — symmetrical stone arches and turquoise tiles.",
        "drone": "Check local drone rules",
        "settings": "f/8 · ISO 200 · 24–70mm"
      },
      "photos": {
        "hero": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Palace_of_Shirvanshahs_common.JPG/960px-Palace_of_Shirvanshahs_common.JPG",
        "detail": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Palace_of_Shirvanshahs_common.JPG/960px-Palace_of_Shirvanshahs_common.JPG",
        "photoSpot": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Palace_of_Shirvanshahs_common.JPG/960px-Palace_of_Shirvanshahs_common.JPG",
        "map": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Palace_of_Shirvanshahs_common.JPG/960px-Palace_of_Shirvanshahs_common.JPG",
        "heroPosition": "center 40%"
      },
      "seasonalPhotos": {
        "spring": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Palace_of_Shirvanshahs_common.JPG/960px-Palace_of_Shirvanshahs_common.JPG",
        "summer": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Palace_of_Shirvanshahs_common.JPG/960px-Palace_of_Shirvanshahs_common.JPG",
        "autumn": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Palace_of_Shirvanshahs_common.JPG/960px-Palace_of_Shirvanshahs_common.JPG",
        "christmas": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Palace_of_Shirvanshahs_common.JPG/960px-Palace_of_Shirvanshahs_common.JPG"
      }
    },
    {
      "name": "Baku Boulevard",
      "address": "Neftchilar Ave · Baku",
      "hours": "Open 24h",
      "tube": "Walk from Old City · 15 min",
      "ticket": "Free",
      "bestArrival": "16:00",
      "photoSpot": "Little Venice gondolas with Flame Towers in the background.",
      "lens": "24–70mm",
      "tip": "Rent a bike or stroll the full 3 km promenade from the Carpet Museum to the Flag Square.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Baku%20Boulevard",
      "bookUrl": "https://www.google.com/maps/search/?api=1&query=Baku%20Boulevard",
      "bookText": "Book Tickets",
      "avgVisit": "1–2 hours",
      "crowd": {
        "morning": 3,
        "afternoon": 4,
        "evening": 2
      },
      "nearby": [
        {
          "name": "Azerbaijan Carpet Museum",
          "walk": "5 min"
        },
        {
          "name": "Little Venice",
          "walk": "2 min"
        }
      ],
      "nearbyCafes": "See dining chapter in this guide.",
      "nearbyRestaurants": "See dining chapter in this guide.",
      "nearbyTube": "Walk from Old City · 15 min",
      "nearbyToilets": "On-site or nearby cafés.",
      "nearbyAtm": "City centre banks · major malls",
      "didYouKnow": "Baku Boulevard dates to 1909 and stretches along the Caspian Sea — locals call it the city's living room.",
      "localSecret": "The Ferris wheel at the end of the boulevard gives the best cheap panorama of the bay.",
      "instagram": {
        "sunset": "Little Venice gondolas with Flame Towers in the background.",
        "sunrise": "Little Venice gondolas with Flame Towers in the background.",
        "drone": "Check local drone rules",
        "settings": "f/8 · ISO 200 · 24–70mm"
      },
      "photos": {
        "hero": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Baku_Seaside_Bulevard.JPG/960px-Baku_Seaside_Bulevard.JPG",
        "detail": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/A_view_of_the_Baku_bay%2C_Azerbaijan.jpg/960px-A_view_of_the_Baku_bay%2C_Azerbaijan.jpg",
        "photoSpot": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/A_view_of_the_Baku_bay%2C_Azerbaijan.jpg/960px-A_view_of_the_Baku_bay%2C_Azerbaijan.jpg",
        "map": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/A_view_of_the_Baku_bay%2C_Azerbaijan.jpg/960px-A_view_of_the_Baku_bay%2C_Azerbaijan.jpg",
        "heroPosition": "center 40%"
      },
      "seasonalPhotos": {
        "spring": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Baku_Seaside_Bulevard.JPG/960px-Baku_Seaside_Bulevard.JPG",
        "summer": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/A_view_of_the_Baku_bay%2C_Azerbaijan.jpg/960px-A_view_of_the_Baku_bay%2C_Azerbaijan.jpg",
        "autumn": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/A_view_of_the_Baku_bay%2C_Azerbaijan.jpg/960px-A_view_of_the_Baku_bay%2C_Azerbaijan.jpg",
        "christmas": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/A_view_of_the_Baku_bay%2C_Azerbaijan.jpg/960px-A_view_of_the_Baku_bay%2C_Azerbaijan.jpg"
      }
    },
    {
      "name": "Azerbaijan Carpet Museum",
      "address": "28 Mikayil Huseynov · Baku",
      "hours": "10:00–18:00 · closed Mon",
      "tube": "Boulevard walk",
      "ticket": "₼7 adult",
      "bestArrival": "10:30",
      "photoSpot": "The building itself — shaped like a rolled carpet facing the sea.",
      "lens": "24–70mm",
      "tip": "Allow time for the live weaving demonstration on the ground floor.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Azerbaijan%20Carpet%20Museum",
      "bookUrl": "https://www.google.com/maps/search/?api=1&query=Azerbaijan%20Carpet%20Museum",
      "bookText": "Book Tickets",
      "avgVisit": "1 hour",
      "crowd": {
        "morning": 3,
        "afternoon": 4,
        "evening": 2
      },
      "nearby": [],
      "nearbyCafes": "See dining chapter in this guide.",
      "nearbyRestaurants": "See dining chapter in this guide.",
      "nearbyTube": "Boulevard walk",
      "nearbyToilets": "On-site or nearby cafés.",
      "nearbyAtm": "City centre banks · major malls",
      "didYouKnow": "Azerbaijan has seven carpet-making schools — each region has distinct patterns passed down for centuries.",
      "localSecret": "The museum shop sells certified pieces — far better than street-market imitations.",
      "instagram": {
        "sunset": "The building itself — shaped like a rolled carpet facing the sea.",
        "sunrise": "The building itself — shaped like a rolled carpet facing the sea.",
        "drone": "Check local drone rules",
        "settings": "f/8 · ISO 200 · 24–70mm"
      },
      "photos": {
        "hero": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Az%C9%99rbaycan_xal%C3%A7a_muzeyi.jpg/960px-Az%C9%99rbaycan_xal%C3%A7a_muzeyi.jpg",
        "detail": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Az%C9%99rbaycan_xal%C3%A7a_muzeyi.jpg/960px-Az%C9%99rbaycan_xal%C3%A7a_muzeyi.jpg",
        "photoSpot": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Az%C9%99rbaycan_xal%C3%A7a_muzeyi.jpg/960px-Az%C9%99rbaycan_xal%C3%A7a_muzeyi.jpg",
        "map": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Az%C9%99rbaycan_xal%C3%A7a_muzeyi.jpg/960px-Az%C9%99rbaycan_xal%C3%A7a_muzeyi.jpg",
        "heroPosition": "center 40%"
      },
      "seasonalPhotos": {
        "spring": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Az%C9%99rbaycan_xal%C3%A7a_muzeyi.jpg/960px-Az%C9%99rbaycan_xal%C3%A7a_muzeyi.jpg",
        "summer": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Az%C9%99rbaycan_xal%C3%A7a_muzeyi.jpg/960px-Az%C9%99rbaycan_xal%C3%A7a_muzeyi.jpg",
        "autumn": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Az%C9%99rbaycan_xal%C3%A7a_muzeyi.jpg/960px-Az%C9%99rbaycan_xal%C3%A7a_muzeyi.jpg",
        "christmas": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Az%C9%99rbaycan_xal%C3%A7a_muzeyi.jpg/960px-Az%C9%99rbaycan_xal%C3%A7a_muzeyi.jpg"
      }
    },
    {
      "name": "Highland Park",
      "address": "Upland Park · Baku",
      "hours": "Open 24h",
      "tube": "Funicular from Martyrs' Lane",
      "ticket": "Free · funicular ₼1",
      "bestArrival": "Sunset",
      "photoSpot": "Panoramic terrace — full sweep of Baku Bay, Old City and Flame Towers.",
      "lens": "24–70mm",
      "tip": "Take the funicular up and walk down through Martyrs' Lane at dusk.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Highland%20Park%20Azerbaijan",
      "bookUrl": "https://www.google.com/maps/search/?api=1&query=Highland%20Park%20Azerbaijan",
      "bookText": "Book Tickets",
      "avgVisit": "45 min",
      "crowd": {
        "morning": 3,
        "afternoon": 4,
        "evening": 2
      },
      "nearby": [],
      "nearbyCafes": "See dining chapter in this guide.",
      "nearbyRestaurants": "See dining chapter in this guide.",
      "nearbyTube": "Funicular from Martyrs' Lane",
      "nearbyToilets": "On-site or nearby cafés.",
      "nearbyAtm": "City centre banks · major malls",
      "didYouKnow": "Known locally as Upland Park, this is Baku's best free viewpoint — the city's postcard angle.",
      "localSecret": "Weekday sunsets are quieter than weekends when local families picnic here.",
      "instagram": {
        "sunset": "Panoramic terrace — full sweep of Baku Bay, Old City and Flame Towers.",
        "sunrise": "Panoramic terrace — full sweep of Baku Bay, Old City and Flame Towers.",
        "drone": "Check local drone rules",
        "settings": "f/8 · ISO 200 · 24–70mm"
      },
      "photos": {
        "hero": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/A_view_of_the_Baku_bay%2C_Azerbaijan.jpg/960px-A_view_of_the_Baku_bay%2C_Azerbaijan.jpg",
        "detail": "https://upload.wikimedia.org/wikipedia/en/thumb/0/08/Flame_towers_baku.jpg/960px-Flame_towers_baku.jpg",
        "photoSpot": "https://upload.wikimedia.org/wikipedia/en/thumb/0/08/Flame_towers_baku.jpg/960px-Flame_towers_baku.jpg",
        "map": "https://upload.wikimedia.org/wikipedia/en/thumb/0/08/Flame_towers_baku.jpg/960px-Flame_towers_baku.jpg",
        "heroPosition": "center 40%"
      },
      "seasonalPhotos": {
        "spring": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/A_view_of_the_Baku_bay%2C_Azerbaijan.jpg/960px-A_view_of_the_Baku_bay%2C_Azerbaijan.jpg",
        "summer": "https://upload.wikimedia.org/wikipedia/en/thumb/0/08/Flame_towers_baku.jpg/960px-Flame_towers_baku.jpg",
        "autumn": "https://upload.wikimedia.org/wikipedia/en/thumb/0/08/Flame_towers_baku.jpg/960px-Flame_towers_baku.jpg",
        "christmas": "https://upload.wikimedia.org/wikipedia/en/thumb/0/08/Flame_towers_baku.jpg/960px-Flame_towers_baku.jpg"
      }
    },
    {
      "name": "Heydar Aliyev Center",
      "address": "1 Heydar Aliyev Ave · Baku",
      "hours": "11:00–19:00 · closed Mon",
      "tube": "Taxi 10 min from centre",
      "ticket": "₼15 museum",
      "bestArrival": "11:00",
      "photoSpot": "Curved white facade by Zaha Hadid — shoot from the plaza at a low angle.",
      "lens": "24–70mm",
      "tip": "The architecture is the star. Even if you skip the museum, walk the exterior curves.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Heydar%20Aliyev%20Center%20Azerbaijan",
      "bookUrl": "https://www.google.com/maps/search/?api=1&query=Heydar%20Aliyev%20Center%20Azerbaijan",
      "bookText": "Book Tickets",
      "avgVisit": "1–2 hours",
      "crowd": {
        "morning": 3,
        "afternoon": 4,
        "evening": 2
      },
      "nearby": [],
      "nearbyCafes": "See dining chapter in this guide.",
      "nearbyRestaurants": "See dining chapter in this guide.",
      "nearbyTube": "Taxi 10 min from centre",
      "nearbyToilets": "On-site or nearby cafés.",
      "nearbyAtm": "City centre banks · major malls",
      "didYouKnow": "Zaha Hadid's flowing design won the Design Museum's Design of the Year — no straight lines anywhere.",
      "localSecret": "Night lighting transforms the building — return after dinner for blue-hour photos.",
      "instagram": {
        "sunset": "Curved white facade by Zaha Hadid — shoot from the plaza at a low angle.",
        "sunrise": "Curved white facade by Zaha Hadid — shoot from the plaza at a low angle.",
        "drone": "Check local drone rules",
        "settings": "f/8 · ISO 200 · 24–70mm"
      },
      "photos": {
        "hero": "https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Heydar_Aliyev_Cultural_Center.jpg/960px-Heydar_Aliyev_Cultural_Center.jpg",
        "detail": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Baku_Montage.jpg/960px-Baku_Montage.jpg",
        "photoSpot": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Baku_Montage.jpg/960px-Baku_Montage.jpg",
        "map": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Baku_Montage.jpg/960px-Baku_Montage.jpg",
        "heroPosition": "center 40%"
      },
      "seasonalPhotos": {
        "spring": "https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Heydar_Aliyev_Cultural_Center.jpg/960px-Heydar_Aliyev_Cultural_Center.jpg",
        "summer": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Baku_Montage.jpg/960px-Baku_Montage.jpg",
        "autumn": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Baku_Montage.jpg/960px-Baku_Montage.jpg",
        "christmas": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Baku_Montage.jpg/960px-Baku_Montage.jpg"
      }
    },
    {
      "name": "Flame Towers",
      "address": "Mehdi Huseyn St · Baku",
      "hours": "Exterior 24h · LED show from dusk",
      "tube": "Walk from Nizami Street",
      "ticket": "Free exterior · Fairmont rooftop bar",
      "bestArrival": "After dark",
      "photoSpot": "From Baku Boulevard or Highland Park — three flame-shaped towers lit in LED.",
      "lens": "24–70mm",
      "tip": "The LED flame animation starts at sunset. Fairmont's rooftop bar has the closest view.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Flame%20Towers%20Azerbaijan",
      "bookUrl": "https://www.google.com/maps/search/?api=1&query=Flame%20Towers%20Azerbaijan",
      "bookText": "Book Tickets",
      "avgVisit": "30 min",
      "crowd": {
        "morning": 3,
        "afternoon": 4,
        "evening": 2
      },
      "nearby": [],
      "nearbyCafes": "See dining chapter in this guide.",
      "nearbyRestaurants": "See dining chapter in this guide.",
      "nearbyTube": "Walk from Nizami Street",
      "nearbyToilets": "On-site or nearby cafés.",
      "nearbyAtm": "City centre banks · major malls",
      "didYouKnow": "The three towers represent Azerbaijan's eternal flames — a nod to the country's Zoroastrian fire heritage.",
      "localSecret": "Photograph from the boulevard boardwalk, not the highway — safer and better framed.",
      "instagram": {
        "sunset": "From Baku Boulevard or Highland Park — three flame-shaped towers lit in LED.",
        "sunrise": "From Baku Boulevard or Highland Park — three flame-shaped towers lit in LED.",
        "drone": "Check local drone rules",
        "settings": "f/8 · ISO 200 · 24–70mm"
      },
      "photos": {
        "hero": "https://upload.wikimedia.org/wikipedia/en/thumb/0/08/Flame_towers_baku.jpg/960px-Flame_towers_baku.jpg",
        "detail": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Flame_towers_from_Baku_boulevard.JPG/960px-Flame_towers_from_Baku_boulevard.JPG",
        "photoSpot": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Flame_towers_from_Baku_boulevard.JPG/960px-Flame_towers_from_Baku_boulevard.JPG",
        "map": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Flame_towers_from_Baku_boulevard.JPG/960px-Flame_towers_from_Baku_boulevard.JPG",
        "heroPosition": "center 40%"
      },
      "seasonalPhotos": {
        "spring": "https://upload.wikimedia.org/wikipedia/en/thumb/0/08/Flame_towers_baku.jpg/960px-Flame_towers_baku.jpg",
        "summer": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Flame_towers_from_Baku_boulevard.JPG/960px-Flame_towers_from_Baku_boulevard.JPG",
        "autumn": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Flame_towers_from_Baku_boulevard.JPG/960px-Flame_towers_from_Baku_boulevard.JPG",
        "christmas": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Flame_towers_from_Baku_boulevard.JPG/960px-Flame_towers_from_Baku_boulevard.JPG"
      }
    },
    {
      "name": "Alley of Martyrs",
      "address": "Shehidlar Khiyabani · Baku",
      "hours": "Open 24h",
      "tube": "Funicular station nearby",
      "ticket": "Free",
      "bestArrival": "Morning",
      "photoSpot": "Tree-lined avenue with eternal flame and Caspian views.",
      "lens": "24–70mm",
      "tip": "A solemn memorial — speak quietly and dress respectfully.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Alley%20of%20Martyrs%20Azerbaijan",
      "bookUrl": "https://www.google.com/maps/search/?api=1&query=Alley%20of%20Martyrs%20Azerbaijan",
      "bookText": "Book Tickets",
      "avgVisit": "30 min",
      "crowd": {
        "morning": 3,
        "afternoon": 4,
        "evening": 2
      },
      "nearby": [],
      "nearbyCafes": "See dining chapter in this guide.",
      "nearbyRestaurants": "See dining chapter in this guide.",
      "nearbyTube": "Funicular station nearby",
      "nearbyToilets": "On-site or nearby cafés.",
      "nearbyAtm": "City centre banks · major malls",
      "didYouKnow": "This memorial honours those who died for Azerbaijan's independence — a place of national pilgrimage.",
      "localSecret": "Continue through to the funicular for Highland Park without backtracking.",
      "instagram": {
        "sunset": "Tree-lined avenue with eternal flame and Caspian views.",
        "sunrise": "Tree-lined avenue with eternal flame and Caspian views.",
        "drone": "Check local drone rules",
        "settings": "f/8 · ISO 200 · 24–70mm"
      },
      "photos": {
        "hero": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/A_view_of_the_Baku_bay%2C_Azerbaijan.jpg/960px-A_view_of_the_Baku_bay%2C_Azerbaijan.jpg",
        "detail": "https://upload.wikimedia.org/wikipedia/en/thumb/0/08/Flame_towers_baku.jpg/960px-Flame_towers_baku.jpg",
        "photoSpot": "https://upload.wikimedia.org/wikipedia/en/thumb/0/08/Flame_towers_baku.jpg/960px-Flame_towers_baku.jpg",
        "map": "https://upload.wikimedia.org/wikipedia/en/thumb/0/08/Flame_towers_baku.jpg/960px-Flame_towers_baku.jpg",
        "heroPosition": "center 40%"
      },
      "seasonalPhotos": {
        "spring": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/A_view_of_the_Baku_bay%2C_Azerbaijan.jpg/960px-A_view_of_the_Baku_bay%2C_Azerbaijan.jpg",
        "summer": "https://upload.wikimedia.org/wikipedia/en/thumb/0/08/Flame_towers_baku.jpg/960px-Flame_towers_baku.jpg",
        "autumn": "https://upload.wikimedia.org/wikipedia/en/thumb/0/08/Flame_towers_baku.jpg/960px-Flame_towers_baku.jpg",
        "christmas": "https://upload.wikimedia.org/wikipedia/en/thumb/0/08/Flame_towers_baku.jpg/960px-Flame_towers_baku.jpg"
      }
    },
    {
      "name": "Nizami Street",
      "address": "Nizami St · Baku",
      "hours": "Shops 10:00–22:00",
      "tube": "Central Baku",
      "ticket": "Free",
      "bestArrival": "17:00",
      "photoSpot": "Pedestrian boulevard with fountains and Belle Époque facades.",
      "lens": "24–70mm",
      "tip": "Best people-watching street in Baku — café-hop from Fountain Square to 28 Mall.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Nizami%20Street%20Azerbaijan",
      "bookUrl": "https://www.google.com/maps/search/?api=1&query=Nizami%20Street%20Azerbaijan",
      "bookText": "Book Tickets",
      "avgVisit": "1–2 hours",
      "crowd": {
        "morning": 3,
        "afternoon": 4,
        "evening": 2
      },
      "nearby": [],
      "nearbyCafes": "See dining chapter in this guide.",
      "nearbyRestaurants": "See dining chapter in this guide.",
      "nearbyTube": "Central Baku",
      "nearbyToilets": "On-site or nearby cafés.",
      "nearbyAtm": "City centre banks · major malls",
      "didYouKnow": "Named after the 12th-century poet Nizami Ganjavi — Baku's Champs-Élysées.",
      "localSecret": "Side streets off Nizami hide excellent local bakeries selling qutab and tandir bread.",
      "instagram": {
        "sunset": "Pedestrian boulevard with fountains and Belle Époque facades.",
        "sunrise": "Pedestrian boulevard with fountains and Belle Époque facades.",
        "drone": "Check local drone rules",
        "settings": "f/8 · ISO 200 · 24–70mm"
      },
      "photos": {
        "hero": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Nizami_street_historical_buildings.JPG/960px-Nizami_street_historical_buildings.JPG",
        "detail": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Baku_Montage.jpg/960px-Baku_Montage.jpg",
        "photoSpot": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Baku_Montage.jpg/960px-Baku_Montage.jpg",
        "map": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Baku_Montage.jpg/960px-Baku_Montage.jpg",
        "heroPosition": "center 40%"
      },
      "seasonalPhotos": {
        "spring": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Nizami_street_historical_buildings.JPG/960px-Nizami_street_historical_buildings.JPG",
        "summer": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Baku_Montage.jpg/960px-Baku_Montage.jpg",
        "autumn": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Baku_Montage.jpg/960px-Baku_Montage.jpg",
        "christmas": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Baku_Montage.jpg/960px-Baku_Montage.jpg"
      }
    },
    {
      "name": "Gobustan National Park",
      "address": "Gobustan · 60 km SW of Baku",
      "hours": "09:00–17:00",
      "tube": "Driver · 1 hr from Baku",
      "ticket": "₼10 adult",
      "bestArrival": "09:30",
      "photoSpot": "Petroglyphs on rock faces — 40,000-year-old art.",
      "lens": "24–70mm",
      "tip": "Hire a guide at the visitor centre — the carvings come alive with context.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Gobustan%20National%20Park%20Azerbaijan",
      "bookUrl": "https://www.google.com/maps/search/?api=1&query=Gobustan%20National%20Park%20Azerbaijan",
      "bookText": "Book Tickets",
      "avgVisit": "2 hours",
      "crowd": {
        "morning": 3,
        "afternoon": 4,
        "evening": 2
      },
      "nearby": [],
      "nearbyCafes": "See dining chapter in this guide.",
      "nearbyRestaurants": "See dining chapter in this guide.",
      "nearbyTube": "Driver · 1 hr from Baku",
      "nearbyToilets": "On-site or nearby cafés.",
      "nearbyAtm": "City centre banks · major malls",
      "didYouKnow": "Over 6,000 rock engravings document prehistoric life — hunting, dancing, and boat scenes.",
      "localSecret": "The museum before the outdoor site sets the scene — don't skip it.",
      "instagram": {
        "sunset": "Petroglyphs on rock faces — 40,000-year-old art.",
        "sunrise": "Petroglyphs on rock faces — 40,000-year-old art.",
        "drone": "Check local drone rules",
        "settings": "f/8 · ISO 200 · 24–70mm"
      },
      "photos": {
        "hero": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Gobustan_State_Reserve_7.jpg/960px-Gobustan_State_Reserve_7.jpg",
        "detail": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Gobustan_mud_volcanoes_01.jpg/960px-Gobustan_mud_volcanoes_01.jpg",
        "photoSpot": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Gobustan_mud_volcanoes_01.jpg/960px-Gobustan_mud_volcanoes_01.jpg",
        "map": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Gobustan_mud_volcanoes_01.jpg/960px-Gobustan_mud_volcanoes_01.jpg",
        "heroPosition": "center 40%"
      },
      "seasonalPhotos": {
        "spring": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Gobustan_State_Reserve_7.jpg/960px-Gobustan_State_Reserve_7.jpg",
        "summer": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Gobustan_mud_volcanoes_01.jpg/960px-Gobustan_mud_volcanoes_01.jpg",
        "autumn": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Gobustan_mud_volcanoes_01.jpg/960px-Gobustan_mud_volcanoes_01.jpg",
        "christmas": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Gobustan_mud_volcanoes_01.jpg/960px-Gobustan_mud_volcanoes_01.jpg"
      }
    },
    {
      "name": "Mud Volcanoes",
      "address": "Gobustan area · Azerbaijan",
      "hours": "Daylight hours",
      "tube": "Driver · 15 min from Gobustan",
      "ticket": "Free · 4×4 may be needed",
      "bestArrival": "Morning",
      "photoSpot": "Grey bubbling cones on a lunar landscape — otherworldly.",
      "lens": "24–70mm",
      "tip": "Wear shoes you can clean. The mud is harmless but messy. Half of the world's mud volcanoes are here.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Mud%20Volcanoes%20Azerbaijan",
      "bookUrl": "https://www.google.com/maps/search/?api=1&query=Mud%20Volcanoes%20Azerbaijan",
      "bookText": "Book Tickets",
      "avgVisit": "45 min",
      "crowd": {
        "morning": 3,
        "afternoon": 4,
        "evening": 2
      },
      "nearby": [],
      "nearbyCafes": "See dining chapter in this guide.",
      "nearbyRestaurants": "See dining chapter in this guide.",
      "nearbyTube": "Driver · 15 min from Gobustan",
      "nearbyToilets": "On-site or nearby cafés.",
      "nearbyAtm": "City centre banks · major malls",
      "didYouKnow": "Azerbaijan has more than 400 mud volcanoes — NASA studies them as analogues for Mars.",
      "localSecret": "After rain the mud is more active — ask your driver for the best recent site.",
      "instagram": {
        "sunset": "Grey bubbling cones on a lunar landscape — otherworldly.",
        "sunrise": "Grey bubbling cones on a lunar landscape — otherworldly.",
        "drone": "Check local drone rules",
        "settings": "f/8 · ISO 200 · 24–70mm"
      },
      "photos": {
        "hero": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Gobustan_mud_volcanoes_01.jpg/960px-Gobustan_mud_volcanoes_01.jpg",
        "detail": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Gobustan_State_Reserve_7.jpg/960px-Gobustan_State_Reserve_7.jpg",
        "photoSpot": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Gobustan_State_Reserve_7.jpg/960px-Gobustan_State_Reserve_7.jpg",
        "map": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Gobustan_State_Reserve_7.jpg/960px-Gobustan_State_Reserve_7.jpg",
        "heroPosition": "center 40%"
      },
      "seasonalPhotos": {
        "spring": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Gobustan_mud_volcanoes_01.jpg/960px-Gobustan_mud_volcanoes_01.jpg",
        "summer": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Gobustan_State_Reserve_7.jpg/960px-Gobustan_State_Reserve_7.jpg",
        "autumn": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Gobustan_State_Reserve_7.jpg/960px-Gobustan_State_Reserve_7.jpg",
        "christmas": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Gobustan_State_Reserve_7.jpg/960px-Gobustan_State_Reserve_7.jpg"
      }
    },
    {
      "name": "Ateshgah Fire Temple",
      "address": "Surakhani · Baku outskirts",
      "hours": "09:00–18:00",
      "tube": "Driver · 30 min from centre",
      "ticket": "₼4 adult",
      "bestArrival": "10:00",
      "photoSpot": "Central altar with eternal flame — Zoroastrian and Hindu heritage.",
      "lens": "24–70mm",
      "tip": "Combine with Yanar Dag on the same half-day trip from Baku.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Ateshgah%20Fire%20Temple%20Azerbaijan",
      "bookUrl": "https://www.google.com/maps/search/?api=1&query=Ateshgah%20Fire%20Temple%20Azerbaijan",
      "bookText": "Book Tickets",
      "avgVisit": "45 min",
      "crowd": {
        "morning": 3,
        "afternoon": 4,
        "evening": 2
      },
      "nearby": [],
      "nearbyCafes": "See dining chapter in this guide.",
      "nearbyRestaurants": "See dining chapter in this guide.",
      "nearbyTube": "Driver · 30 min from centre",
      "nearbyToilets": "On-site or nearby cafés.",
      "nearbyAtm": "City centre banks · major malls",
      "didYouKnow": "Pilgrims worshipped here for centuries — natural gas flames that never extinguish.",
      "localSecret": "The onsite museum explains the Hindu traders who maintained the temple.",
      "instagram": {
        "sunset": "Central altar with eternal flame — Zoroastrian and Hindu heritage.",
        "sunrise": "Central altar with eternal flame — Zoroastrian and Hindu heritage.",
        "drone": "Check local drone rules",
        "settings": "f/8 · ISO 200 · 24–70mm"
      },
      "photos": {
        "hero": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Ateshgah_of_Baku.jpg/960px-Ateshgah_of_Baku.jpg",
        "detail": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Ateshgah_of_Baku.jpg/960px-Ateshgah_of_Baku.jpg",
        "photoSpot": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Ateshgah_of_Baku.jpg/960px-Ateshgah_of_Baku.jpg",
        "map": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Ateshgah_of_Baku.jpg/960px-Ateshgah_of_Baku.jpg",
        "heroPosition": "center 40%"
      },
      "seasonalPhotos": {
        "spring": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Ateshgah_of_Baku.jpg/960px-Ateshgah_of_Baku.jpg",
        "summer": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Ateshgah_of_Baku.jpg/960px-Ateshgah_of_Baku.jpg",
        "autumn": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Ateshgah_of_Baku.jpg/960px-Ateshgah_of_Baku.jpg",
        "christmas": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Ateshgah_of_Baku.jpg/960px-Ateshgah_of_Baku.jpg"
      }
    },
    {
      "name": "Yanar Dag",
      "address": "Absheron Peninsula · Baku",
      "hours": "Open 24h · best at dusk",
      "tube": "Driver · 25 min from centre",
      "ticket": "₼4 adult",
      "bestArrival": "Sunset",
      "photoSpot": "A hillside that has burned continuously for decades — flames against the dark sky.",
      "lens": "24–70mm",
      "tip": "The name means \"Burning Mountain\" — natural gas seepage creates an eternal flame.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Yanar%20Dag%20Azerbaijan",
      "bookUrl": "https://www.google.com/maps/search/?api=1&query=Yanar%20Dag%20Azerbaijan",
      "bookText": "Book Tickets",
      "avgVisit": "30 min",
      "crowd": {
        "morning": 3,
        "afternoon": 4,
        "evening": 2
      },
      "nearby": [],
      "nearbyCafes": "See dining chapter in this guide.",
      "nearbyRestaurants": "See dining chapter in this guide.",
      "nearbyTube": "Driver · 25 min from centre",
      "nearbyToilets": "On-site or nearby cafés.",
      "nearbyAtm": "City centre banks · major malls",
      "didYouKnow": "Marco Polo wrote about Azerbaijan's mysterious fires — Yanar Dag is the most accessible example.",
      "localSecret": "Wind affects flame size — calm evenings give the most dramatic photos.",
      "instagram": {
        "sunset": "A hillside that has burned continuously for decades — flames against the dark sky.",
        "sunrise": "A hillside that has burned continuously for decades — flames against the dark sky.",
        "drone": "Check local drone rules",
        "settings": "f/8 · ISO 200 · 24–70mm"
      },
      "photos": {
        "hero": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Yanar_Dag.jpg/960px-Yanar_Dag.jpg",
        "detail": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Ateshgah_of_Baku.jpg/960px-Ateshgah_of_Baku.jpg",
        "photoSpot": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Ateshgah_of_Baku.jpg/960px-Ateshgah_of_Baku.jpg",
        "map": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Ateshgah_of_Baku.jpg/960px-Ateshgah_of_Baku.jpg",
        "heroPosition": "center 40%"
      },
      "seasonalPhotos": {
        "spring": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Yanar_Dag.jpg/960px-Yanar_Dag.jpg",
        "summer": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Ateshgah_of_Baku.jpg/960px-Ateshgah_of_Baku.jpg",
        "autumn": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Ateshgah_of_Baku.jpg/960px-Ateshgah_of_Baku.jpg",
        "christmas": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Ateshgah_of_Baku.jpg/960px-Ateshgah_of_Baku.jpg"
      }
    },
    {
      "name": "Shamakhi Juma Mosque",
      "address": "Shamakhi · en route to Lahij",
      "hours": "Prayer times · visit between",
      "tube": "Driver · 2.5 hr from Baku",
      "ticket": "Free · donations welcome",
      "bestArrival": "11:00",
      "photoSpot": "White stone minaret against Caucasus foothills.",
      "lens": "24–70mm",
      "tip": "Remove shoes and dress modestly. A rest stop on the Baku–Lahij drive.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Shamakhi%20Juma%20Mosque%20Azerbaijan",
      "bookUrl": "https://www.google.com/maps/search/?api=1&query=Shamakhi%20Juma%20Mosque%20Azerbaijan",
      "bookText": "Book Tickets",
      "avgVisit": "30 min",
      "crowd": {
        "morning": 3,
        "afternoon": 4,
        "evening": 2
      },
      "nearby": [],
      "nearbyCafes": "See dining chapter in this guide.",
      "nearbyRestaurants": "See dining chapter in this guide.",
      "nearbyTube": "Driver · 2.5 hr from Baku",
      "nearbyToilets": "On-site or nearby cafés.",
      "nearbyAtm": "City centre banks · major malls",
      "didYouKnow": "Originally built in 743 AD, rebuilt after earthquakes — one of the oldest mosques in the Caucasus.",
      "localSecret": "The adjacent cemetery has ornate stone carvings worth a slow walk.",
      "instagram": {
        "sunset": "White stone minaret against Caucasus foothills.",
        "sunrise": "White stone minaret against Caucasus foothills.",
        "drone": "Check local drone rules",
        "settings": "f/8 · ISO 200 · 24–70mm"
      },
      "photos": {
        "hero": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Shamakhi_Juma_Mosque.jpg/960px-Shamakhi_Juma_Mosque.jpg",
        "detail": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/%C5%9E%C9%99ki_xan_saray%C4%B1.jpg/960px-%C5%9E%C9%99ki_xan_saray%C4%B1.jpg",
        "photoSpot": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/%C5%9E%C9%99ki_xan_saray%C4%B1.jpg/960px-%C5%9E%C9%99ki_xan_saray%C4%B1.jpg",
        "map": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/%C5%9E%C9%99ki_xan_saray%C4%B1.jpg/960px-%C5%9E%C9%99ki_xan_saray%C4%B1.jpg",
        "heroPosition": "center 40%"
      },
      "seasonalPhotos": {
        "spring": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Shamakhi_Juma_Mosque.jpg/960px-Shamakhi_Juma_Mosque.jpg",
        "summer": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/%C5%9E%C9%99ki_xan_saray%C4%B1.jpg/960px-%C5%9E%C9%99ki_xan_saray%C4%B1.jpg",
        "autumn": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/%C5%9E%C9%99ki_xan_saray%C4%B1.jpg/960px-%C5%9E%C9%99ki_xan_saray%C4%B1.jpg",
        "christmas": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/%C5%9E%C9%99ki_xan_saray%C4%B1.jpg/960px-%C5%9E%C9%99ki_xan_saray%C4%B1.jpg"
      }
    },
    {
      "name": "Lahij",
      "address": "Ismailli District · Caucasus mountains",
      "hours": "Village open 24h · workshops 09:00–18:00",
      "tube": "Driver · 3 hr from Baku",
      "ticket": "Free village · copper demos ₼5",
      "bestArrival": "14:00",
      "photoSpot": "Stone-paved streets with copper workshops and mountain backdrop.",
      "lens": "24–70mm",
      "tip": "Buy hand-beaten copper directly from artisans. Stay overnight for the authentic experience.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Lahij",
      "bookUrl": "https://www.google.com/maps/search/?api=1&query=Lahij",
      "bookText": "Book Tickets",
      "avgVisit": "2–3 hours",
      "crowd": {
        "morning": 3,
        "afternoon": 4,
        "evening": 2
      },
      "nearby": [],
      "nearbyCafes": "See dining chapter in this guide.",
      "nearbyRestaurants": "See dining chapter in this guide.",
      "nearbyTube": "Driver · 3 hr from Baku",
      "nearbyToilets": "On-site or nearby cafés.",
      "nearbyAtm": "City centre banks · major malls",
      "didYouKnow": "Lahij has been a copper-crafting centre for nearly a thousand years — skills passed through families.",
      "localSecret": "The tea house at the village centre serves cardamom tea in traditional armudu glasses.",
      "instagram": {
        "sunset": "Stone-paved streets with copper workshops and mountain backdrop.",
        "sunrise": "Stone-paved streets with copper workshops and mountain backdrop.",
        "drone": "Check local drone rules",
        "settings": "f/8 · ISO 200 · 24–70mm"
      },
      "photos": {
        "hero": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Driving_back_to_Baku-_this_is_the_end_of_my_Azerbaijan_tour_%2836637671423%29.jpg/960px-Driving_back_to_Baku-_this_is_the_end_of_my_Azerbaijan_tour_%2836637671423%29.jpg",
        "detail": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Driving_back_to_Baku-_this_is_the_end_of_my_Azerbaijan_tour_%2836637671423%29.jpg/960px-Driving_back_to_Baku-_this_is_the_end_of_my_Azerbaijan_tour_%2836637671423%29.jpg",
        "photoSpot": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Driving_back_to_Baku-_this_is_the_end_of_my_Azerbaijan_tour_%2836637671423%29.jpg/960px-Driving_back_to_Baku-_this_is_the_end_of_my_Azerbaijan_tour_%2836637671423%29.jpg",
        "map": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Driving_back_to_Baku-_this_is_the_end_of_my_Azerbaijan_tour_%2836637671423%29.jpg/960px-Driving_back_to_Baku-_this_is_the_end_of_my_Azerbaijan_tour_%2836637671423%29.jpg",
        "heroPosition": "center 40%"
      },
      "seasonalPhotos": {
        "spring": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Driving_back_to_Baku-_this_is_the_end_of_my_Azerbaijan_tour_%2836637671423%29.jpg/960px-Driving_back_to_Baku-_this_is_the_end_of_my_Azerbaijan_tour_%2836637671423%29.jpg",
        "summer": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Driving_back_to_Baku-_this_is_the_end_of_my_Azerbaijan_tour_%2836637671423%29.jpg/960px-Driving_back_to_Baku-_this_is_the_end_of_my_Azerbaijan_tour_%2836637671423%29.jpg",
        "autumn": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Driving_back_to_Baku-_this_is_the_end_of_my_Azerbaijan_tour_%2836637671423%29.jpg/960px-Driving_back_to_Baku-_this_is_the_end_of_my_Azerbaijan_tour_%2836637671423%29.jpg",
        "christmas": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Driving_back_to_Baku-_this_is_the_end_of_my_Azerbaijan_tour_%2836637671423%29.jpg/960px-Driving_back_to_Baku-_this_is_the_end_of_my_Azerbaijan_tour_%2836637671423%29.jpg"
      }
    },
    {
      "name": "Palace of Shaki Khans",
      "address": "Sheki · Azerbaijan",
      "hours": "10:00–18:00",
      "tube": "Driver · 2 hr from Lahij",
      "ticket": "₼10 adult",
      "bestArrival": "10:00",
      "photoSpot": "Stained-glass shebeke windows casting coloured light on carved walls.",
      "lens": "24–70mm",
      "tip": "No nails were used in the shebeke — thousands of glass pieces held by wooden joints alone.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Palace%20of%20Shaki%20Khans%20Azerbaijan",
      "bookUrl": "https://www.google.com/maps/search/?api=1&query=Palace%20of%20Shaki%20Khans%20Azerbaijan",
      "bookText": "Book Tickets",
      "avgVisit": "1 hour",
      "crowd": {
        "morning": 3,
        "afternoon": 4,
        "evening": 2
      },
      "nearby": [],
      "nearbyCafes": "See dining chapter in this guide.",
      "nearbyRestaurants": "See dining chapter in this guide.",
      "nearbyTube": "Driver · 2 hr from Lahij",
      "nearbyToilets": "On-site or nearby cafés.",
      "nearbyAtm": "City centre banks · major malls",
      "didYouKnow": "The Khan's summer palace is a UNESCO site — 18th-century frescoes and geometric brilliance.",
      "localSecret": "Visit the nearby caravanserai for lunch in a Silk Road inn.",
      "instagram": {
        "sunset": "Stained-glass shebeke windows casting coloured light on carved walls.",
        "sunrise": "Stained-glass shebeke windows casting coloured light on carved walls.",
        "drone": "Check local drone rules",
        "settings": "f/8 · ISO 200 · 24–70mm"
      },
      "photos": {
        "hero": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/%C5%9E%C9%99ki_xan_saray%C4%B1.jpg/960px-%C5%9E%C9%99ki_xan_saray%C4%B1.jpg",
        "detail": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/%C5%9E%C9%99ki_xan_saray%C4%B1.jpg/960px-%C5%9E%C9%99ki_xan_saray%C4%B1.jpg",
        "photoSpot": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/%C5%9E%C9%99ki_xan_saray%C4%B1.jpg/960px-%C5%9E%C9%99ki_xan_saray%C4%B1.jpg",
        "map": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/%C5%9E%C9%99ki_xan_saray%C4%B1.jpg/960px-%C5%9E%C9%99ki_xan_saray%C4%B1.jpg",
        "heroPosition": "center 40%"
      },
      "seasonalPhotos": {
        "spring": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/%C5%9E%C9%99ki_xan_saray%C4%B1.jpg/960px-%C5%9E%C9%99ki_xan_saray%C4%B1.jpg",
        "summer": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/%C5%9E%C9%99ki_xan_saray%C4%B1.jpg/960px-%C5%9E%C9%99ki_xan_saray%C4%B1.jpg",
        "autumn": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/%C5%9E%C9%99ki_xan_saray%C4%B1.jpg/960px-%C5%9E%C9%99ki_xan_saray%C4%B1.jpg",
        "christmas": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/%C5%9E%C9%99ki_xan_saray%C4%B1.jpg/960px-%C5%9E%C9%99ki_xan_saray%C4%B1.jpg"
      }
    },
    {
      "name": "Sheki Caravanserai",
      "address": "Sheki Old Town",
      "hours": "Hotel & restaurant · open to visitors",
      "tube": "Walk from Khan Palace",
      "ticket": "Free to enter courtyard",
      "bestArrival": "12:00",
      "photoSpot": "Arched stone courtyard — merchants' rooms now boutique hotel.",
      "lens": "24–70mm",
      "tip": "Even if you don't stay, walk the courtyard and upper gallery for Silk Road atmosphere.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Sheki%20Caravanserai",
      "bookUrl": "https://www.google.com/maps/search/?api=1&query=Sheki%20Caravanserai",
      "bookText": "Book Tickets",
      "avgVisit": "45 min",
      "crowd": {
        "morning": 3,
        "afternoon": 4,
        "evening": 2
      },
      "nearby": [],
      "nearbyCafes": "See dining chapter in this guide.",
      "nearbyRestaurants": "See dining chapter in this guide.",
      "nearbyTube": "Walk from Khan Palace",
      "nearbyToilets": "On-site or nearby cafés.",
      "nearbyAtm": "City centre banks · major malls",
      "didYouKnow": "Caravanserais were the motels of the Silk Road — Sheki's is one of the best preserved in the Caucasus.",
      "localSecret": "Upper-floor rooms have mountain views — ask to peek even if you're not a guest.",
      "instagram": {
        "sunset": "Arched stone courtyard — merchants' rooms now boutique hotel.",
        "sunrise": "Arched stone courtyard — merchants' rooms now boutique hotel.",
        "drone": "Check local drone rules",
        "settings": "f/8 · ISO 200 · 24–70mm"
      },
      "photos": {
        "hero": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Sheki_Upper_Caravanserai_004_4085.jpg/960px-Sheki_Upper_Caravanserai_004_4085.jpg",
        "detail": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Caravanserai_Hotel.jpg/960px-Caravanserai_Hotel.jpg",
        "photoSpot": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Caravanserai_Hotel.jpg/960px-Caravanserai_Hotel.jpg",
        "map": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Caravanserai_Hotel.jpg/960px-Caravanserai_Hotel.jpg",
        "heroPosition": "center 40%"
      },
      "seasonalPhotos": {
        "spring": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Sheki_Upper_Caravanserai_004_4085.jpg/960px-Sheki_Upper_Caravanserai_004_4085.jpg",
        "summer": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Caravanserai_Hotel.jpg/960px-Caravanserai_Hotel.jpg",
        "autumn": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Caravanserai_Hotel.jpg/960px-Caravanserai_Hotel.jpg",
        "christmas": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Caravanserai_Hotel.jpg/960px-Caravanserai_Hotel.jpg"
      }
    },
    {
      "name": "Church of Kish",
      "address": "Kish Village · near Sheki",
      "hours": "10:00–17:00",
      "tube": "Driver · 15 min from Sheki",
      "ticket": "₼3 adult",
      "bestArrival": "15:00",
      "photoSpot": "Ancient Albanian church on a hilltop with valley views.",
      "lens": "24–70mm",
      "tip": "One of the oldest churches in the Caucasus — predates most European cathedrals.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Church%20of%20Kish%20Azerbaijan",
      "bookUrl": "https://www.google.com/maps/search/?api=1&query=Church%20of%20Kish%20Azerbaijan",
      "bookText": "Book Tickets",
      "avgVisit": "45 min",
      "crowd": {
        "morning": 3,
        "afternoon": 4,
        "evening": 2
      },
      "nearby": [],
      "nearbyCafes": "See dining chapter in this guide.",
      "nearbyRestaurants": "See dining chapter in this guide.",
      "nearbyTube": "Driver · 15 min from Sheki",
      "nearbyToilets": "On-site or nearby cafés.",
      "nearbyAtm": "City centre banks · major malls",
      "didYouKnow": "Norwegian archaeologist Thor Heyerdahl excavated here, linking Caucasian Albania to ancient Scandinavia.",
      "localSecret": "The small museum inside has artefacts from 2,000 years of worship.",
      "instagram": {
        "sunset": "Ancient Albanian church on a hilltop with valley views.",
        "sunrise": "Ancient Albanian church on a hilltop with valley views.",
        "drone": "Check local drone rules",
        "settings": "f/8 · ISO 200 · 24–70mm"
      },
      "photos": {
        "hero": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Church%2C_Kish_%28P1090438%29.jpg/960px-Church%2C_Kish_%28P1090438%29.jpg",
        "detail": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/%C5%9E%C9%99ki_xan_saray%C4%B1.jpg/960px-%C5%9E%C9%99ki_xan_saray%C4%B1.jpg",
        "photoSpot": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/%C5%9E%C9%99ki_xan_saray%C4%B1.jpg/960px-%C5%9E%C9%99ki_xan_saray%C4%B1.jpg",
        "map": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/%C5%9E%C9%99ki_xan_saray%C4%B1.jpg/960px-%C5%9E%C9%99ki_xan_saray%C4%B1.jpg",
        "heroPosition": "center 40%"
      },
      "seasonalPhotos": {
        "spring": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Church%2C_Kish_%28P1090438%29.jpg/960px-Church%2C_Kish_%28P1090438%29.jpg",
        "summer": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/%C5%9E%C9%99ki_xan_saray%C4%B1.jpg/960px-%C5%9E%C9%99ki_xan_saray%C4%B1.jpg",
        "autumn": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/%C5%9E%C9%99ki_xan_saray%C4%B1.jpg/960px-%C5%9E%C9%99ki_xan_saray%C4%B1.jpg",
        "christmas": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/%C5%9E%C9%99ki_xan_saray%C4%B1.jpg/960px-%C5%9E%C9%99ki_xan_saray%C4%B1.jpg"
      }
    },
    {
      "name": "Tufandag Cable Car",
      "address": "Gabala · Azerbaijan",
      "hours": "10:00–18:00 · weather dependent",
      "tube": "Driver · 2 hr from Sheki",
      "ticket": "₼15 return cable car",
      "bestArrival": "10:30",
      "photoSpot": "Cable car ascending over forested Caucasus slopes.",
      "lens": "24–70mm",
      "tip": "Ski resort in winter, hiking and zip-lines in summer. Check weather before driving up.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Tufandag%20Cable%20Car%20Azerbaijan",
      "bookUrl": "https://www.google.com/maps/search/?api=1&query=Tufandag%20Cable%20Car%20Azerbaijan",
      "bookText": "Book Tickets",
      "avgVisit": "2–3 hours",
      "crowd": {
        "morning": 3,
        "afternoon": 4,
        "evening": 2
      },
      "nearby": [],
      "nearbyCafes": "See dining chapter in this guide.",
      "nearbyRestaurants": "See dining chapter in this guide.",
      "nearbyTube": "Driver · 2 hr from Sheki",
      "nearbyToilets": "On-site or nearby cafés.",
      "nearbyAtm": "City centre banks · major malls",
      "didYouKnow": "Gabala sits in the shadow of Mount Bazarduzu — Azerbaijan's highest peak at 4,466 m.",
      "localSecret": "The mid-station café has the best hot chocolate after a mountain ride.",
      "instagram": {
        "sunset": "Cable car ascending over forested Caucasus slopes.",
        "sunrise": "Cable car ascending over forested Caucasus slopes.",
        "drone": "Check local drone rules",
        "settings": "f/8 · ISO 200 · 24–70mm"
      },
      "photos": {
        "hero": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Gabala_Azerbaijan.jpg/960px-Gabala_Azerbaijan.jpg",
        "detail": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Xinaliq.jpg/960px-Xinaliq.jpg",
        "photoSpot": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Xinaliq.jpg/960px-Xinaliq.jpg",
        "map": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Xinaliq.jpg/960px-Xinaliq.jpg",
        "heroPosition": "center 40%"
      },
      "seasonalPhotos": {
        "spring": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Gabala_Azerbaijan.jpg/960px-Gabala_Azerbaijan.jpg",
        "summer": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Xinaliq.jpg/960px-Xinaliq.jpg",
        "autumn": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Xinaliq.jpg/960px-Xinaliq.jpg",
        "christmas": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Xinaliq.jpg/960px-Xinaliq.jpg"
      }
    },
    {
      "name": "Nohur Lake",
      "address": "Gabala · Azerbaijan",
      "hours": "Open 24h",
      "tube": "Driver · 10 min from Tufandag",
      "ticket": "Free",
      "bestArrival": "14:00",
      "photoSpot": "Mirror-still lake reflecting forested mountains.",
      "lens": "24–70mm",
      "tip": "Lakeside restaurants serve fresh trout — lunch with a view.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Nohur%20Lake%20Azerbaijan",
      "bookUrl": "https://www.google.com/maps/search/?api=1&query=Nohur%20Lake%20Azerbaijan",
      "bookText": "Book Tickets",
      "avgVisit": "1 hour",
      "crowd": {
        "morning": 3,
        "afternoon": 4,
        "evening": 2
      },
      "nearby": [],
      "nearbyCafes": "See dining chapter in this guide.",
      "nearbyRestaurants": "See dining chapter in this guide.",
      "nearbyTube": "Driver · 10 min from Tufandag",
      "nearbyToilets": "On-site or nearby cafés.",
      "nearbyAtm": "City centre banks · major malls",
      "didYouKnow": "An artificial lake created for irrigation — now a beloved picnic and photo spot.",
      "localSecret": "Early morning mist on the water is magical — stop here before Tufandag if staying nearby.",
      "instagram": {
        "sunset": "Mirror-still lake reflecting forested mountains.",
        "sunrise": "Mirror-still lake reflecting forested mountains.",
        "drone": "Check local drone rules",
        "settings": "f/8 · ISO 200 · 24–70mm"
      },
      "photos": {
        "hero": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Gabala_Azerbaijan.jpg/960px-Gabala_Azerbaijan.jpg",
        "detail": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Xinaliq.jpg/960px-Xinaliq.jpg",
        "photoSpot": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Xinaliq.jpg/960px-Xinaliq.jpg",
        "map": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Xinaliq.jpg/960px-Xinaliq.jpg",
        "heroPosition": "center 40%"
      },
      "seasonalPhotos": {
        "spring": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Gabala_Azerbaijan.jpg/960px-Gabala_Azerbaijan.jpg",
        "summer": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Xinaliq.jpg/960px-Xinaliq.jpg",
        "autumn": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Xinaliq.jpg/960px-Xinaliq.jpg",
        "christmas": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Xinaliq.jpg/960px-Xinaliq.jpg"
      }
    },
    {
      "name": "Seven Beauties Waterfall",
      "address": "Gabala · Vandam village area",
      "hours": "Daylight · best May–September",
      "tube": "Driver · 20 min from Gabala centre",
      "ticket": "₼3 entry",
      "bestArrival": "11:00",
      "photoSpot": "Seven cascading tiers through a forest gorge.",
      "lens": "24–70mm",
      "tip": "Wear grippy shoes — the path is wet and steep in places.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Seven%20Beauties%20Waterfall%20Azerbaijan",
      "bookUrl": "https://www.google.com/maps/search/?api=1&query=Seven%20Beauties%20Waterfall%20Azerbaijan",
      "bookText": "Book Tickets",
      "avgVisit": "1.5 hours",
      "crowd": {
        "morning": 3,
        "afternoon": 4,
        "evening": 2
      },
      "nearby": [],
      "nearbyCafes": "See dining chapter in this guide.",
      "nearbyRestaurants": "See dining chapter in this guide.",
      "nearbyTube": "Driver · 20 min from Gabala centre",
      "nearbyToilets": "On-site or nearby cafés.",
      "nearbyAtm": "City centre banks · major malls",
      "didYouKnow": "Named after a Nizami poem — seven princesses, seven falls.",
      "localSecret": "The upper tiers are quieter — most tourists stop at the first cascade.",
      "instagram": {
        "sunset": "Seven cascading tiers through a forest gorge.",
        "sunrise": "Seven cascading tiers through a forest gorge.",
        "drone": "Check local drone rules",
        "settings": "f/8 · ISO 200 · 24–70mm"
      },
      "photos": {
        "hero": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Gabala_Azerbaijan.jpg/960px-Gabala_Azerbaijan.jpg",
        "detail": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Xinaliq.jpg/960px-Xinaliq.jpg",
        "photoSpot": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Xinaliq.jpg/960px-Xinaliq.jpg",
        "map": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Xinaliq.jpg/960px-Xinaliq.jpg",
        "heroPosition": "center 40%"
      },
      "seasonalPhotos": {
        "spring": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Gabala_Azerbaijan.jpg/960px-Gabala_Azerbaijan.jpg",
        "summer": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Xinaliq.jpg/960px-Xinaliq.jpg",
        "autumn": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Xinaliq.jpg/960px-Xinaliq.jpg",
        "christmas": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Xinaliq.jpg/960px-Xinaliq.jpg"
      }
    },
    {
      "name": "Qechresh Forest",
      "address": "Guba District · Azerbaijan",
      "hours": "Open 24h",
      "tube": "Driver · 4 hr from Gabala",
      "ticket": "Free",
      "bestArrival": "10:00",
      "photoSpot": "Dense temperate forest with apple orchards on the approach.",
      "lens": "24–70mm",
      "tip": "Guba is apple country — stop at roadside orchards for fresh juice in autumn.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Qechresh%20Forest%20Azerbaijan",
      "bookUrl": "https://www.google.com/maps/search/?api=1&query=Qechresh%20Forest%20Azerbaijan",
      "bookText": "Book Tickets",
      "avgVisit": "1–2 hours",
      "crowd": {
        "morning": 3,
        "afternoon": 4,
        "evening": 2
      },
      "nearby": [],
      "nearbyCafes": "See dining chapter in this guide.",
      "nearbyRestaurants": "See dining chapter in this guide.",
      "nearbyTube": "Driver · 4 hr from Gabala",
      "nearbyToilets": "On-site or nearby cafés.",
      "nearbyAtm": "City centre banks · major malls",
      "didYouKnow": "The Qechresh forest is a protected area — part of the Greater Caucasus ecosystem.",
      "localSecret": "Mountain villages above Guba sell handmade wool socks — perfect souvenirs.",
      "instagram": {
        "sunset": "Dense temperate forest with apple orchards on the approach.",
        "sunrise": "Dense temperate forest with apple orchards on the approach.",
        "drone": "Check local drone rules",
        "settings": "f/8 · ISO 200 · 24–70mm"
      },
      "photos": {
        "hero": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Xinaliq.jpg/960px-Xinaliq.jpg",
        "detail": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Gabala_Azerbaijan.jpg/960px-Gabala_Azerbaijan.jpg",
        "photoSpot": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Gabala_Azerbaijan.jpg/960px-Gabala_Azerbaijan.jpg",
        "map": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Gabala_Azerbaijan.jpg/960px-Gabala_Azerbaijan.jpg",
        "heroPosition": "center 40%"
      },
      "seasonalPhotos": {
        "spring": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Xinaliq.jpg/960px-Xinaliq.jpg",
        "summer": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Gabala_Azerbaijan.jpg/960px-Gabala_Azerbaijan.jpg",
        "autumn": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Gabala_Azerbaijan.jpg/960px-Gabala_Azerbaijan.jpg",
        "christmas": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Gabala_Azerbaijan.jpg/960px-Gabala_Azerbaijan.jpg"
      }
    },
    {
      "name": "Khinalug",
      "address": "Quba District · 2,350 m altitude",
      "hours": "Daylight · road weather-dependent",
      "tube": "Driver · 1 hr from Guba",
      "ticket": "Free village",
      "bestArrival": "09:00",
      "photoSpot": "Stone houses stacked on a mountainside — one of the highest inhabited villages on Earth.",
      "lens": "24–70mm",
      "tip": "One of the oldest continuously inhabited settlements in the world. Respect local customs and ask before photographing residents.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Khinalug%20Azerbaijan",
      "bookUrl": "https://www.google.com/maps/search/?api=1&query=Khinalug%20Azerbaijan",
      "bookText": "Book Tickets",
      "avgVisit": "2–3 hours",
      "crowd": {
        "morning": 3,
        "afternoon": 4,
        "evening": 2
      },
      "nearby": [],
      "nearbyCafes": "See dining chapter in this guide.",
      "nearbyRestaurants": "See dining chapter in this guide.",
      "nearbyTube": "Driver · 1 hr from Guba",
      "nearbyToilets": "On-site or nearby cafés.",
      "nearbyAtm": "City centre banks · major malls",
      "didYouKnow": "Khinalug's 5,000-year history and unique language make it a living museum of Caucasus culture.",
      "localSecret": "Locals offer traditional lunch in home kitchens — accept if invited, it's the best meal you'll have.",
      "instagram": {
        "sunset": "Stone houses stacked on a mountainside — one of the highest inhabited villages on Earth.",
        "sunrise": "Stone houses stacked on a mountainside — one of the highest inhabited villages on Earth.",
        "drone": "Check local drone rules",
        "settings": "f/8 · ISO 200 · 24–70mm"
      },
      "photos": {
        "hero": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Xinaliq.jpg/960px-Xinaliq.jpg",
        "detail": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Driving_back_to_Baku-_this_is_the_end_of_my_Azerbaijan_tour_%2836637671423%29.jpg/960px-Driving_back_to_Baku-_this_is_the_end_of_my_Azerbaijan_tour_%2836637671423%29.jpg",
        "photoSpot": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Driving_back_to_Baku-_this_is_the_end_of_my_Azerbaijan_tour_%2836637671423%29.jpg/960px-Driving_back_to_Baku-_this_is_the_end_of_my_Azerbaijan_tour_%2836637671423%29.jpg",
        "map": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Driving_back_to_Baku-_this_is_the_end_of_my_Azerbaijan_tour_%2836637671423%29.jpg/960px-Driving_back_to_Baku-_this_is_the_end_of_my_Azerbaijan_tour_%2836637671423%29.jpg",
        "heroPosition": "center 40%"
      },
      "seasonalPhotos": {
        "spring": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Xinaliq.jpg/960px-Xinaliq.jpg",
        "summer": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Driving_back_to_Baku-_this_is_the_end_of_my_Azerbaijan_tour_%2836637671423%29.jpg/960px-Driving_back_to_Baku-_this_is_the_end_of_my_Azerbaijan_tour_%2836637671423%29.jpg",
        "autumn": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Driving_back_to_Baku-_this_is_the_end_of_my_Azerbaijan_tour_%2836637671423%29.jpg/960px-Driving_back_to_Baku-_this_is_the_end_of_my_Azerbaijan_tour_%2836637671423%29.jpg",
        "christmas": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Driving_back_to_Baku-_this_is_the_end_of_my_Azerbaijan_tour_%2836637671423%29.jpg/960px-Driving_back_to_Baku-_this_is_the_end_of_my_Azerbaijan_tour_%2836637671423%29.jpg"
      }
    }
  ],
  "hotels": [
    {
      "name": "Four Seasons Hotel Baku",
      "category": "Best Luxury",
      "address": "Neftchilar Ave · Baku",
      "price": "€350–600 / night",
      "rating": "5★",
      "googleRating": "4.8",
      "room": "Deluxe Caspian View",
      "cancellation": "Free 48h before",
      "tube": "Old City 5 min walk",
      "airport": "25 min to GYD",
      "nearbyAttractions": "Old City · Boulevard · Flame Towers",
      "walkingScore": "98",
      "breakfast": "Buffet + à la carte",
      "idealFor": "Luxury · honeymoon · business",
      "tip": "Request a room facing the Caspian — sunrise over the sea is unforgettable.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Four%20Seasons%20Hotel%20Baku",
      "bookUrl": "https://www.google.com/maps/search/?api=1&query=Four%20Seasons%20Hotel%20Baku",
      "photos": {
        "exterior": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/A_view_of_the_Baku_bay%2C_Azerbaijan.jpg/960px-A_view_of_the_Baku_bay%2C_Azerbaijan.jpg",
        "lobby": "https://upload.wikimedia.org/wikipedia/en/thumb/0/08/Flame_towers_baku.jpg/960px-Flame_towers_baku.jpg",
        "room": "https://upload.wikimedia.org/wikipedia/en/thumb/0/08/Flame_towers_baku.jpg/960px-Flame_towers_baku.jpg",
        "luxuryRoom": "https://upload.wikimedia.org/wikipedia/en/thumb/0/08/Flame_towers_baku.jpg/960px-Flame_towers_baku.jpg",
        "restaurant": "https://upload.wikimedia.org/wikipedia/en/thumb/0/08/Flame_towers_baku.jpg/960px-Flame_towers_baku.jpg",
        "pool": "https://upload.wikimedia.org/wikipedia/en/thumb/0/08/Flame_towers_baku.jpg/960px-Flame_towers_baku.jpg",
        "rooftop": "https://upload.wikimedia.org/wikipedia/en/thumb/0/08/Flame_towers_baku.jpg/960px-Flame_towers_baku.jpg",
        "breakfast": "https://upload.wikimedia.org/wikipedia/en/thumb/0/08/Flame_towers_baku.jpg/960px-Flame_towers_baku.jpg",
        "spa": "https://upload.wikimedia.org/wikipedia/en/thumb/0/08/Flame_towers_baku.jpg/960px-Flame_towers_baku.jpg",
        "view": "https://upload.wikimedia.org/wikipedia/en/thumb/0/08/Flame_towers_baku.jpg/960px-Flame_towers_baku.jpg"
      }
    },
    {
      "name": "Fairmont Baku Flame Towers",
      "category": "Best Views",
      "address": "Flame Towers · Baku",
      "price": "€280–500 / night",
      "rating": "5★",
      "googleRating": "4.7",
      "room": "Flame Tower Suite",
      "cancellation": "Free 24h before",
      "tube": "Nizami Street 10 min",
      "airport": "30 min to GYD",
      "nearbyAttractions": "Flame Towers · Highland Park · Nizami Street",
      "walkingScore": "90",
      "breakfast": "Rooftop included",
      "idealFor": "Views · nightlife · couples",
      "tip": "The rooftop bar has the closest Flame Towers LED show view in the city.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Fairmont%20Baku%20Flame%20Towers",
      "bookUrl": "https://www.google.com/maps/search/?api=1&query=Fairmont%20Baku%20Flame%20Towers",
      "photos": {
        "exterior": "https://upload.wikimedia.org/wikipedia/en/thumb/0/08/Flame_towers_baku.jpg/960px-Flame_towers_baku.jpg",
        "lobby": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Flame_towers_from_Baku_boulevard.JPG/960px-Flame_towers_from_Baku_boulevard.JPG",
        "room": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Flame_towers_from_Baku_boulevard.JPG/960px-Flame_towers_from_Baku_boulevard.JPG",
        "luxuryRoom": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Flame_towers_from_Baku_boulevard.JPG/960px-Flame_towers_from_Baku_boulevard.JPG",
        "restaurant": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Flame_towers_from_Baku_boulevard.JPG/960px-Flame_towers_from_Baku_boulevard.JPG",
        "pool": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Flame_towers_from_Baku_boulevard.JPG/960px-Flame_towers_from_Baku_boulevard.JPG",
        "rooftop": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Flame_towers_from_Baku_boulevard.JPG/960px-Flame_towers_from_Baku_boulevard.JPG",
        "breakfast": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Flame_towers_from_Baku_boulevard.JPG/960px-Flame_towers_from_Baku_boulevard.JPG",
        "spa": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Flame_towers_from_Baku_boulevard.JPG/960px-Flame_towers_from_Baku_boulevard.JPG",
        "view": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Flame_towers_from_Baku_boulevard.JPG/960px-Flame_towers_from_Baku_boulevard.JPG"
      }
    },
    {
      "name": "JW Marriott Absheron Baku",
      "category": "Best Business",
      "address": "Azadliq Sq · Baku",
      "price": "€200–380 / night",
      "rating": "5★",
      "googleRating": "4.6",
      "room": "Executive Sea View",
      "cancellation": "Flexible",
      "tube": "Boulevard 5 min",
      "airport": "25 min to GYD",
      "nearbyAttractions": "Boulevard · Carpet Museum · Heydar Aliyev Center",
      "walkingScore": "92",
      "breakfast": "Executive lounge",
      "idealFor": "Business · conferences · families",
      "tip": "Pool deck overlooks the Caspian — best hotel pool in Baku.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=JW%20Marriott%20Absheron%20Baku",
      "bookUrl": "https://www.google.com/maps/search/?api=1&query=JW%20Marriott%20Absheron%20Baku",
      "photos": {
        "exterior": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/A_view_of_the_Baku_bay%2C_Azerbaijan.jpg/960px-A_view_of_the_Baku_bay%2C_Azerbaijan.jpg",
        "lobby": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Baku_Seaside_Bulevard.JPG/960px-Baku_Seaside_Bulevard.JPG",
        "room": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Baku_Seaside_Bulevard.JPG/960px-Baku_Seaside_Bulevard.JPG",
        "luxuryRoom": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Baku_Seaside_Bulevard.JPG/960px-Baku_Seaside_Bulevard.JPG",
        "restaurant": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Baku_Seaside_Bulevard.JPG/960px-Baku_Seaside_Bulevard.JPG",
        "pool": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Baku_Seaside_Bulevard.JPG/960px-Baku_Seaside_Bulevard.JPG",
        "rooftop": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Baku_Seaside_Bulevard.JPG/960px-Baku_Seaside_Bulevard.JPG",
        "breakfast": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Baku_Seaside_Bulevard.JPG/960px-Baku_Seaside_Bulevard.JPG",
        "spa": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Baku_Seaside_Bulevard.JPG/960px-Baku_Seaside_Bulevard.JPG",
        "view": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Baku_Seaside_Bulevard.JPG/960px-Baku_Seaside_Bulevard.JPG"
      }
    },
    {
      "name": "Lahij Guest House",
      "category": "Traditional Experience",
      "address": "Lahij village · Ismailli",
      "price": "€40–80 / night",
      "rating": "Guesthouse",
      "googleRating": "4.5",
      "room": "Stone Room with Mountain View",
      "cancellation": "Free 24h before",
      "tube": "Village on foot",
      "airport": "3 hr from GYD",
      "nearbyAttractions": "Copper workshops · Stone streets · Tea house",
      "walkingScore": "100",
      "breakfast": "Homemade breakfast",
      "idealFor": "Culture · authenticity · photographers",
      "tip": "Book ahead — few rooms and high demand from photographers and trekkers.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Lahij%20Guest%20House",
      "bookUrl": "https://www.google.com/maps/search/?api=1&query=Lahij%20Guest%20House",
      "photos": {
        "exterior": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Driving_back_to_Baku-_this_is_the_end_of_my_Azerbaijan_tour_%2836637671423%29.jpg/960px-Driving_back_to_Baku-_this_is_the_end_of_my_Azerbaijan_tour_%2836637671423%29.jpg",
        "lobby": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Driving_back_to_Baku-_this_is_the_end_of_my_Azerbaijan_tour_%2836637671423%29.jpg/960px-Driving_back_to_Baku-_this_is_the_end_of_my_Azerbaijan_tour_%2836637671423%29.jpg",
        "room": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Driving_back_to_Baku-_this_is_the_end_of_my_Azerbaijan_tour_%2836637671423%29.jpg/960px-Driving_back_to_Baku-_this_is_the_end_of_my_Azerbaijan_tour_%2836637671423%29.jpg",
        "luxuryRoom": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Driving_back_to_Baku-_this_is_the_end_of_my_Azerbaijan_tour_%2836637671423%29.jpg/960px-Driving_back_to_Baku-_this_is_the_end_of_my_Azerbaijan_tour_%2836637671423%29.jpg",
        "restaurant": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Driving_back_to_Baku-_this_is_the_end_of_my_Azerbaijan_tour_%2836637671423%29.jpg/960px-Driving_back_to_Baku-_this_is_the_end_of_my_Azerbaijan_tour_%2836637671423%29.jpg",
        "pool": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Driving_back_to_Baku-_this_is_the_end_of_my_Azerbaijan_tour_%2836637671423%29.jpg/960px-Driving_back_to_Baku-_this_is_the_end_of_my_Azerbaijan_tour_%2836637671423%29.jpg",
        "rooftop": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Driving_back_to_Baku-_this_is_the_end_of_my_Azerbaijan_tour_%2836637671423%29.jpg/960px-Driving_back_to_Baku-_this_is_the_end_of_my_Azerbaijan_tour_%2836637671423%29.jpg",
        "breakfast": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Driving_back_to_Baku-_this_is_the_end_of_my_Azerbaijan_tour_%2836637671423%29.jpg/960px-Driving_back_to_Baku-_this_is_the_end_of_my_Azerbaijan_tour_%2836637671423%29.jpg",
        "spa": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Driving_back_to_Baku-_this_is_the_end_of_my_Azerbaijan_tour_%2836637671423%29.jpg/960px-Driving_back_to_Baku-_this_is_the_end_of_my_Azerbaijan_tour_%2836637671423%29.jpg",
        "view": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Driving_back_to_Baku-_this_is_the_end_of_my_Azerbaijan_tour_%2836637671423%29.jpg/960px-Driving_back_to_Baku-_this_is_the_end_of_my_Azerbaijan_tour_%2836637671423%29.jpg"
      }
    },
    {
      "name": "Marxal Resort & Spa",
      "category": "Mountain Resort",
      "address": "Sheki · Azerbaijan",
      "price": "€150–280 / night",
      "rating": "5★",
      "googleRating": "4.6",
      "room": "Mountain View Suite",
      "cancellation": "Free 48h before",
      "tube": "Sheki centre 10 min",
      "airport": "5 hr from GYD",
      "nearbyAttractions": "Khan Palace · Caravanserai · Kish Church",
      "walkingScore": "40",
      "breakfast": "Included",
      "idealFor": "Wellness · couples · nature",
      "tip": "Spa uses local honey and herb treatments — book a hammam session.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Marxal%20Resort%20%26%20Spa%20Azerbaijan",
      "bookUrl": "https://www.google.com/maps/search/?api=1&query=Marxal%20Resort%20%26%20Spa%20Azerbaijan",
      "photos": {
        "exterior": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/%C5%9E%C9%99ki_xan_saray%C4%B1.jpg/960px-%C5%9E%C9%99ki_xan_saray%C4%B1.jpg",
        "lobby": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Sheki_Upper_Caravanserai_004_4085.jpg/960px-Sheki_Upper_Caravanserai_004_4085.jpg",
        "room": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Sheki_Upper_Caravanserai_004_4085.jpg/960px-Sheki_Upper_Caravanserai_004_4085.jpg",
        "luxuryRoom": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Sheki_Upper_Caravanserai_004_4085.jpg/960px-Sheki_Upper_Caravanserai_004_4085.jpg",
        "restaurant": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Sheki_Upper_Caravanserai_004_4085.jpg/960px-Sheki_Upper_Caravanserai_004_4085.jpg",
        "pool": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Sheki_Upper_Caravanserai_004_4085.jpg/960px-Sheki_Upper_Caravanserai_004_4085.jpg",
        "rooftop": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Sheki_Upper_Caravanserai_004_4085.jpg/960px-Sheki_Upper_Caravanserai_004_4085.jpg",
        "breakfast": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Sheki_Upper_Caravanserai_004_4085.jpg/960px-Sheki_Upper_Caravanserai_004_4085.jpg",
        "spa": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Sheki_Upper_Caravanserai_004_4085.jpg/960px-Sheki_Upper_Caravanserai_004_4085.jpg",
        "view": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Sheki_Upper_Caravanserai_004_4085.jpg/960px-Sheki_Upper_Caravanserai_004_4085.jpg"
      }
    },
    {
      "name": "Sheki Palace Hotel",
      "category": "Historic Center",
      "address": "Sheki Old Town",
      "price": "€80–150 / night",
      "rating": "4★",
      "googleRating": "4.4",
      "room": "Heritage Room",
      "cancellation": "Free 24h before",
      "tube": "Walk to Khan Palace",
      "airport": "5 hr from GYD",
      "nearbyAttractions": "Khan Palace · Caravanserai · Craft market",
      "walkingScore": "95",
      "breakfast": "Local spread",
      "idealFor": "History · budget-luxury · walkers",
      "tip": "Ask for a room with a balcony overlooking the old town roofs.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Sheki%20Palace%20Hotel",
      "bookUrl": "https://www.google.com/maps/search/?api=1&query=Sheki%20Palace%20Hotel",
      "photos": {
        "exterior": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Sheki_Upper_Caravanserai_004_4085.jpg/960px-Sheki_Upper_Caravanserai_004_4085.jpg",
        "lobby": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/%C5%9E%C9%99ki_xan_saray%C4%B1.jpg/960px-%C5%9E%C9%99ki_xan_saray%C4%B1.jpg",
        "room": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/%C5%9E%C9%99ki_xan_saray%C4%B1.jpg/960px-%C5%9E%C9%99ki_xan_saray%C4%B1.jpg",
        "luxuryRoom": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/%C5%9E%C9%99ki_xan_saray%C4%B1.jpg/960px-%C5%9E%C9%99ki_xan_saray%C4%B1.jpg",
        "restaurant": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/%C5%9E%C9%99ki_xan_saray%C4%B1.jpg/960px-%C5%9E%C9%99ki_xan_saray%C4%B1.jpg",
        "pool": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/%C5%9E%C9%99ki_xan_saray%C4%B1.jpg/960px-%C5%9E%C9%99ki_xan_saray%C4%B1.jpg",
        "rooftop": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/%C5%9E%C9%99ki_xan_saray%C4%B1.jpg/960px-%C5%9E%C9%99ki_xan_saray%C4%B1.jpg",
        "breakfast": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/%C5%9E%C9%99ki_xan_saray%C4%B1.jpg/960px-%C5%9E%C9%99ki_xan_saray%C4%B1.jpg",
        "spa": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/%C5%9E%C9%99ki_xan_saray%C4%B1.jpg/960px-%C5%9E%C9%99ki_xan_saray%C4%B1.jpg",
        "view": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/%C5%9E%C9%99ki_xan_saray%C4%B1.jpg/960px-%C5%9E%C9%99ki_xan_saray%C4%B1.jpg"
      }
    },
    {
      "name": "Chenot Palace Gabala",
      "category": "Luxury Wellness",
      "address": "Gabala · Azerbaijan",
      "price": "€300–550 / night",
      "rating": "5★",
      "googleRating": "4.7",
      "room": "Wellness Suite",
      "cancellation": "Non-refundable spa packages",
      "tube": "Resort shuttle",
      "airport": "4 hr from GYD",
      "nearbyAttractions": "Tufandag · Nohur Lake · Seven Beauties",
      "walkingScore": "20",
      "breakfast": "Wellness menu",
      "idealFor": "Spa · detox · luxury",
      "tip": "Evening resort spa after a day of mountain driving is the highlight of Day 6.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Chenot%20Palace%20Gabala",
      "bookUrl": "https://www.google.com/maps/search/?api=1&query=Chenot%20Palace%20Gabala",
      "photos": {
        "exterior": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Gabala_Azerbaijan.jpg/960px-Gabala_Azerbaijan.jpg",
        "lobby": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Xinaliq.jpg/960px-Xinaliq.jpg",
        "room": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Xinaliq.jpg/960px-Xinaliq.jpg",
        "luxuryRoom": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Xinaliq.jpg/960px-Xinaliq.jpg",
        "restaurant": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Xinaliq.jpg/960px-Xinaliq.jpg",
        "pool": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Xinaliq.jpg/960px-Xinaliq.jpg",
        "rooftop": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Xinaliq.jpg/960px-Xinaliq.jpg",
        "breakfast": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Xinaliq.jpg/960px-Xinaliq.jpg",
        "spa": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Xinaliq.jpg/960px-Xinaliq.jpg",
        "view": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Xinaliq.jpg/960px-Xinaliq.jpg"
      }
    },
    {
      "name": "Qafqaz Riverside Resort",
      "category": "Best Family Resort",
      "address": "Gabala · Azerbaijan",
      "price": "€180–320 / night",
      "rating": "5★",
      "googleRating": "4.5",
      "room": "Family Riverside Suite",
      "cancellation": "Free 48h before",
      "tube": "Resort grounds",
      "airport": "4 hr from GYD",
      "nearbyAttractions": "Tufandag · Nohur Lake · Forest trails",
      "walkingScore": "30",
      "breakfast": "Family buffet",
      "idealFor": "Families · kids · nature",
      "tip": "Riverside cabins are quieter than the main block — request on booking.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Qafqaz%20Riverside%20Resort%20Azerbaijan",
      "bookUrl": "https://www.google.com/maps/search/?api=1&query=Qafqaz%20Riverside%20Resort%20Azerbaijan",
      "photos": {
        "exterior": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Gabala_Azerbaijan.jpg/960px-Gabala_Azerbaijan.jpg",
        "lobby": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Xinaliq.jpg/960px-Xinaliq.jpg",
        "room": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Xinaliq.jpg/960px-Xinaliq.jpg",
        "luxuryRoom": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Xinaliq.jpg/960px-Xinaliq.jpg",
        "restaurant": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Xinaliq.jpg/960px-Xinaliq.jpg",
        "pool": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Xinaliq.jpg/960px-Xinaliq.jpg",
        "rooftop": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Xinaliq.jpg/960px-Xinaliq.jpg",
        "breakfast": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Xinaliq.jpg/960px-Xinaliq.jpg",
        "spa": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Xinaliq.jpg/960px-Xinaliq.jpg",
        "view": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Xinaliq.jpg/960px-Xinaliq.jpg"
      }
    },
    {
      "name": "Macara Lake Park Hotel",
      "category": "Nature Resort",
      "address": "Guba · Azerbaijan",
      "price": "€200–380 / night",
      "rating": "5★",
      "googleRating": "4.6",
      "room": "Lake View Chalet",
      "cancellation": "Free 48h before",
      "tube": "Resort grounds",
      "airport": "2.5 hr from GYD",
      "nearbyAttractions": "Qechresh Forest · Khinalug road · Apple orchards",
      "walkingScore": "25",
      "breakfast": "Included",
      "idealFor": "Nature · peace · Khinalug base",
      "tip": "Perfect base for the Khinalug day trip — spa on return from the mountain.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Macara%20Lake%20Park%20Hotel%20Azerbaijan",
      "bookUrl": "https://www.google.com/maps/search/?api=1&query=Macara%20Lake%20Park%20Hotel%20Azerbaijan",
      "photos": {
        "exterior": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Xinaliq.jpg/960px-Xinaliq.jpg",
        "lobby": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Gabala_Azerbaijan.jpg/960px-Gabala_Azerbaijan.jpg",
        "room": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Gabala_Azerbaijan.jpg/960px-Gabala_Azerbaijan.jpg",
        "luxuryRoom": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Gabala_Azerbaijan.jpg/960px-Gabala_Azerbaijan.jpg",
        "restaurant": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Gabala_Azerbaijan.jpg/960px-Gabala_Azerbaijan.jpg",
        "pool": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Gabala_Azerbaijan.jpg/960px-Gabala_Azerbaijan.jpg",
        "rooftop": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Gabala_Azerbaijan.jpg/960px-Gabala_Azerbaijan.jpg",
        "breakfast": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Gabala_Azerbaijan.jpg/960px-Gabala_Azerbaijan.jpg",
        "spa": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Gabala_Azerbaijan.jpg/960px-Gabala_Azerbaijan.jpg",
        "view": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Gabala_Azerbaijan.jpg/960px-Gabala_Azerbaijan.jpg"
      }
    }
  ],
  "dining": [
    {
      "name": "United Coffee Beans",
      "category": "Café · Coffee",
      "address": "Central Baku",
      "price": "₼8–20",
      "famous": "Specialty flat white",
      "halal": true,
      "vegetarian": true,
      "reservation": "Walk-in",
      "wait": "5–15 min",
      "michelin": "—",
      "kidsFriendly": "Yes",
      "dressCode": "Casual",
      "tip": "Start Day 1 here — best coffee in Baku before the Old City walk.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=United%20Coffee%20Beans%20Azerbaijan",
      "bookUrl": "https://www.google.com/maps/search/?api=1&query=United%20Coffee%20Beans%20Azerbaijan",
      "dishes": [
        {
          "name": "Specialty flat white",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Nizami_street_historical_buildings.JPG/960px-Nizami_street_historical_buildings.JPG",
          "desc": "Signature dish at United Coffee Beans."
        },
        {
          "name": "Seasonal Special",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Baku_Montage.jpg/960px-Baku_Montage.jpg",
          "desc": "Ask your server for today's recommendation."
        },
        {
          "name": "Azerbaijani Starter",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Baku_Montage.jpg/960px-Baku_Montage.jpg",
          "desc": "Fresh local produce, beautifully plated."
        },
        {
          "name": "Main Course",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Baku_Montage.jpg/960px-Baku_Montage.jpg",
          "desc": "Hearty Caucasus cooking done properly."
        },
        {
          "name": "Dessert",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Nizami_street_historical_buildings.JPG/960px-Nizami_street_historical_buildings.JPG",
          "desc": "Finish with Sheki halva or baklava if available."
        }
      ],
      "photos": {
        "signature": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Nizami_street_historical_buildings.JPG/960px-Nizami_street_historical_buildings.JPG",
        "interior": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Baku_Montage.jpg/960px-Baku_Montage.jpg",
        "exterior": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Baku_Montage.jpg/960px-Baku_Montage.jpg",
        "dessert": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Baku_Montage.jpg/960px-Baku_Montage.jpg",
        "coffee": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Baku_Montage.jpg/960px-Baku_Montage.jpg"
      }
    },
    {
      "name": "Şirvanşah Museum Restaurant",
      "category": "Restaurant · Azerbaijani",
      "address": "Old City · Baku",
      "price": "₼25–50",
      "famous": "Plov & lamb dolma",
      "halal": true,
      "vegetarian": true,
      "reservation": "Recommended",
      "wait": "15–30 min",
      "michelin": "—",
      "kidsFriendly": "Yes",
      "dressCode": "Smart casual",
      "tip": "Lunch inside the Old City walls — try the shah pilaf named after the palace next door.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%C5%9Eirvan%C5%9Fah%20Museum%20Restaurant%20Azerbaijan",
      "bookUrl": "https://www.google.com/maps/search/?api=1&query=%C5%9Eirvan%C5%9Fah%20Museum%20Restaurant%20Azerbaijan",
      "dishes": [
        {
          "name": "Plov & lamb dolma",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Palace_of_Shirvanshahs_common.JPG/960px-Palace_of_Shirvanshahs_common.JPG",
          "desc": "Signature dish at Şirvanşah Museum Restaurant."
        },
        {
          "name": "Seasonal Special",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Palace_of_Shirvanshahs_common.JPG/960px-Palace_of_Shirvanshahs_common.JPG",
          "desc": "Ask your server for today's recommendation."
        },
        {
          "name": "Azerbaijani Starter",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Palace_of_Shirvanshahs_common.JPG/960px-Palace_of_Shirvanshahs_common.JPG",
          "desc": "Fresh local produce, beautifully plated."
        },
        {
          "name": "Main Course",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Palace_of_Shirvanshahs_common.JPG/960px-Palace_of_Shirvanshahs_common.JPG",
          "desc": "Hearty Caucasus cooking done properly."
        },
        {
          "name": "Dessert",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Palace_of_Shirvanshahs_common.JPG/960px-Palace_of_Shirvanshahs_common.JPG",
          "desc": "Finish with Sheki halva or baklava if available."
        }
      ],
      "photos": {
        "signature": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Palace_of_Shirvanshahs_common.JPG/960px-Palace_of_Shirvanshahs_common.JPG",
        "interior": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Palace_of_Shirvanshahs_common.JPG/960px-Palace_of_Shirvanshahs_common.JPG",
        "exterior": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Palace_of_Shirvanshahs_common.JPG/960px-Palace_of_Shirvanshahs_common.JPG",
        "dessert": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Palace_of_Shirvanshahs_common.JPG/960px-Palace_of_Shirvanshahs_common.JPG",
        "coffee": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Palace_of_Shirvanshahs_common.JPG/960px-Palace_of_Shirvanshahs_common.JPG"
      }
    },
    {
      "name": "Sky Grill",
      "category": "Restaurant · Grill",
      "address": "Highland Park area · Baku",
      "price": "₼40–80",
      "famous": "Lula kebab & sunset views",
      "halal": true,
      "vegetarian": true,
      "reservation": "Essential for sunset",
      "wait": "20–40 min",
      "michelin": "—",
      "kidsFriendly": "Yes",
      "dressCode": "Smart casual",
      "tip": "Book a terrace table for Day 1 sunset dinner overlooking the Caspian.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Sky%20Grill%20Azerbaijan",
      "bookUrl": "https://www.google.com/maps/search/?api=1&query=Sky%20Grill%20Azerbaijan",
      "dishes": [
        {
          "name": "Lula kebab & sunset views",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/A_view_of_the_Baku_bay%2C_Azerbaijan.jpg/960px-A_view_of_the_Baku_bay%2C_Azerbaijan.jpg",
          "desc": "Signature dish at Sky Grill."
        },
        {
          "name": "Seasonal Special",
          "img": "https://upload.wikimedia.org/wikipedia/en/thumb/0/08/Flame_towers_baku.jpg/960px-Flame_towers_baku.jpg",
          "desc": "Ask your server for today's recommendation."
        },
        {
          "name": "Azerbaijani Starter",
          "img": "https://upload.wikimedia.org/wikipedia/en/thumb/0/08/Flame_towers_baku.jpg/960px-Flame_towers_baku.jpg",
          "desc": "Fresh local produce, beautifully plated."
        },
        {
          "name": "Main Course",
          "img": "https://upload.wikimedia.org/wikipedia/en/thumb/0/08/Flame_towers_baku.jpg/960px-Flame_towers_baku.jpg",
          "desc": "Hearty Caucasus cooking done properly."
        },
        {
          "name": "Dessert",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/A_view_of_the_Baku_bay%2C_Azerbaijan.jpg/960px-A_view_of_the_Baku_bay%2C_Azerbaijan.jpg",
          "desc": "Finish with Sheki halva or baklava if available."
        }
      ],
      "photos": {
        "signature": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/A_view_of_the_Baku_bay%2C_Azerbaijan.jpg/960px-A_view_of_the_Baku_bay%2C_Azerbaijan.jpg",
        "interior": "https://upload.wikimedia.org/wikipedia/en/thumb/0/08/Flame_towers_baku.jpg/960px-Flame_towers_baku.jpg",
        "exterior": "https://upload.wikimedia.org/wikipedia/en/thumb/0/08/Flame_towers_baku.jpg/960px-Flame_towers_baku.jpg",
        "dessert": "https://upload.wikimedia.org/wikipedia/en/thumb/0/08/Flame_towers_baku.jpg/960px-Flame_towers_baku.jpg",
        "coffee": "https://upload.wikimedia.org/wikipedia/en/thumb/0/08/Flame_towers_baku.jpg/960px-Flame_towers_baku.jpg"
      }
    },
    {
      "name": "MariVanna",
      "category": "Restaurant · Russian-Azerbaijani",
      "address": "Nizami area · Baku",
      "price": "₼30–60",
      "famous": "Borscht & dushbara",
      "halal": true,
      "vegetarian": true,
      "reservation": "Walk-in lunch",
      "wait": "10–20 min",
      "michelin": "—",
      "kidsFriendly": "Yes",
      "dressCode": "Smart casual",
      "tip": "Cosy Day 2 lunch — homestyle cooking in a vintage Baku apartment setting.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=MariVanna%20Azerbaijan",
      "bookUrl": "https://www.google.com/maps/search/?api=1&query=MariVanna%20Azerbaijan",
      "dishes": [
        {
          "name": "Borscht & dushbara",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Nizami_street_historical_buildings.JPG/960px-Nizami_street_historical_buildings.JPG",
          "desc": "Signature dish at MariVanna."
        },
        {
          "name": "Seasonal Special",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Baku_Montage.jpg/960px-Baku_Montage.jpg",
          "desc": "Ask your server for today's recommendation."
        },
        {
          "name": "Azerbaijani Starter",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Baku_Montage.jpg/960px-Baku_Montage.jpg",
          "desc": "Fresh local produce, beautifully plated."
        },
        {
          "name": "Main Course",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Baku_Montage.jpg/960px-Baku_Montage.jpg",
          "desc": "Hearty Caucasus cooking done properly."
        },
        {
          "name": "Dessert",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Nizami_street_historical_buildings.JPG/960px-Nizami_street_historical_buildings.JPG",
          "desc": "Finish with Sheki halva or baklava if available."
        }
      ],
      "photos": {
        "signature": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Nizami_street_historical_buildings.JPG/960px-Nizami_street_historical_buildings.JPG",
        "interior": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Baku_Montage.jpg/960px-Baku_Montage.jpg",
        "exterior": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Baku_Montage.jpg/960px-Baku_Montage.jpg",
        "dessert": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Baku_Montage.jpg/960px-Baku_Montage.jpg",
        "coffee": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Baku_Montage.jpg/960px-Baku_Montage.jpg"
      }
    },
    {
      "name": "SAHIL Restaurant",
      "category": "Restaurant · Seafood",
      "address": "Baku Boulevard",
      "price": "₼35–70",
      "famous": "Caspian kutum fish",
      "halal": true,
      "vegetarian": true,
      "reservation": "Recommended",
      "wait": "15–30 min",
      "michelin": "—",
      "kidsFriendly": "Yes",
      "dressCode": "Smart casual",
      "tip": "Day 2 dinner on the waterfront — ask for the daily catch grilled with saffron.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=SAHIL%20Restaurant%20Azerbaijan",
      "bookUrl": "https://www.google.com/maps/search/?api=1&query=SAHIL%20Restaurant%20Azerbaijan",
      "dishes": [
        {
          "name": "Caspian kutum fish",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Baku_Seaside_Bulevard.JPG/960px-Baku_Seaside_Bulevard.JPG",
          "desc": "Signature dish at SAHIL Restaurant."
        },
        {
          "name": "Seasonal Special",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/A_view_of_the_Baku_bay%2C_Azerbaijan.jpg/960px-A_view_of_the_Baku_bay%2C_Azerbaijan.jpg",
          "desc": "Ask your server for today's recommendation."
        },
        {
          "name": "Azerbaijani Starter",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/A_view_of_the_Baku_bay%2C_Azerbaijan.jpg/960px-A_view_of_the_Baku_bay%2C_Azerbaijan.jpg",
          "desc": "Fresh local produce, beautifully plated."
        },
        {
          "name": "Main Course",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/A_view_of_the_Baku_bay%2C_Azerbaijan.jpg/960px-A_view_of_the_Baku_bay%2C_Azerbaijan.jpg",
          "desc": "Hearty Caucasus cooking done properly."
        },
        {
          "name": "Dessert",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Baku_Seaside_Bulevard.JPG/960px-Baku_Seaside_Bulevard.JPG",
          "desc": "Finish with Sheki halva or baklava if available."
        }
      ],
      "photos": {
        "signature": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Baku_Seaside_Bulevard.JPG/960px-Baku_Seaside_Bulevard.JPG",
        "interior": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/A_view_of_the_Baku_bay%2C_Azerbaijan.jpg/960px-A_view_of_the_Baku_bay%2C_Azerbaijan.jpg",
        "exterior": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/A_view_of_the_Baku_bay%2C_Azerbaijan.jpg/960px-A_view_of_the_Baku_bay%2C_Azerbaijan.jpg",
        "dessert": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/A_view_of_the_Baku_bay%2C_Azerbaijan.jpg/960px-A_view_of_the_Baku_bay%2C_Azerbaijan.jpg",
        "coffee": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/A_view_of_the_Baku_bay%2C_Azerbaijan.jpg/960px-A_view_of_the_Baku_bay%2C_Azerbaijan.jpg"
      }
    },
    {
      "name": "Piti House",
      "category": "Restaurant · Sheki",
      "address": "Sheki Old Town",
      "price": "₼15–30",
      "famous": "Piti — traditional clay-pot stew",
      "halal": true,
      "vegetarian": true,
      "reservation": "Walk-in",
      "wait": "10–20 min",
      "michelin": "—",
      "kidsFriendly": "Yes",
      "dressCode": "Smart casual",
      "tip": "Sheki's signature dish — piti is served in individual clay pots with bread and sumac.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Piti%20House%20Azerbaijan",
      "bookUrl": "https://www.google.com/maps/search/?api=1&query=Piti%20House%20Azerbaijan",
      "dishes": [
        {
          "name": "Piti — traditional clay-pot stew",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/%C5%9E%C9%99ki_xan_saray%C4%B1.jpg/960px-%C5%9E%C9%99ki_xan_saray%C4%B1.jpg",
          "desc": "Signature dish at Piti House."
        },
        {
          "name": "Seasonal Special",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Sheki_Upper_Caravanserai_004_4085.jpg/960px-Sheki_Upper_Caravanserai_004_4085.jpg",
          "desc": "Ask your server for today's recommendation."
        },
        {
          "name": "Azerbaijani Starter",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Sheki_Upper_Caravanserai_004_4085.jpg/960px-Sheki_Upper_Caravanserai_004_4085.jpg",
          "desc": "Fresh local produce, beautifully plated."
        },
        {
          "name": "Main Course",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Sheki_Upper_Caravanserai_004_4085.jpg/960px-Sheki_Upper_Caravanserai_004_4085.jpg",
          "desc": "Hearty Caucasus cooking done properly."
        },
        {
          "name": "Dessert",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/%C5%9E%C9%99ki_xan_saray%C4%B1.jpg/960px-%C5%9E%C9%99ki_xan_saray%C4%B1.jpg",
          "desc": "Finish with Sheki halva or baklava if available."
        }
      ],
      "photos": {
        "signature": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/%C5%9E%C9%99ki_xan_saray%C4%B1.jpg/960px-%C5%9E%C9%99ki_xan_saray%C4%B1.jpg",
        "interior": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Sheki_Upper_Caravanserai_004_4085.jpg/960px-Sheki_Upper_Caravanserai_004_4085.jpg",
        "exterior": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Sheki_Upper_Caravanserai_004_4085.jpg/960px-Sheki_Upper_Caravanserai_004_4085.jpg",
        "dessert": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Sheki_Upper_Caravanserai_004_4085.jpg/960px-Sheki_Upper_Caravanserai_004_4085.jpg",
        "coffee": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Sheki_Upper_Caravanserai_004_4085.jpg/960px-Sheki_Upper_Caravanserai_004_4085.jpg"
      }
    },
    {
      "name": "Coffee Moffie",
      "category": "Café · Coffee",
      "address": "Baku",
      "price": "₼6–15",
      "famous": "Cold brew & pastries",
      "halal": true,
      "vegetarian": true,
      "reservation": "Walk-in",
      "wait": "5 min",
      "michelin": "—",
      "kidsFriendly": "Yes",
      "dressCode": "Casual",
      "tip": "One of Baku's best third-wave cafés — good for a Day 9 airport morning stop.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Coffee%20Moffie%20Azerbaijan",
      "bookUrl": "https://www.google.com/maps/search/?api=1&query=Coffee%20Moffie%20Azerbaijan",
      "dishes": [
        {
          "name": "Cold brew & pastries",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Nizami_street_historical_buildings.JPG/960px-Nizami_street_historical_buildings.JPG",
          "desc": "Signature dish at Coffee Moffie."
        },
        {
          "name": "Seasonal Special",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Baku_Montage.jpg/960px-Baku_Montage.jpg",
          "desc": "Ask your server for today's recommendation."
        },
        {
          "name": "Azerbaijani Starter",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Baku_Montage.jpg/960px-Baku_Montage.jpg",
          "desc": "Fresh local produce, beautifully plated."
        },
        {
          "name": "Main Course",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Baku_Montage.jpg/960px-Baku_Montage.jpg",
          "desc": "Hearty Caucasus cooking done properly."
        },
        {
          "name": "Dessert",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Nizami_street_historical_buildings.JPG/960px-Nizami_street_historical_buildings.JPG",
          "desc": "Finish with Sheki halva or baklava if available."
        }
      ],
      "photos": {
        "signature": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Nizami_street_historical_buildings.JPG/960px-Nizami_street_historical_buildings.JPG",
        "interior": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Baku_Montage.jpg/960px-Baku_Montage.jpg",
        "exterior": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Baku_Montage.jpg/960px-Baku_Montage.jpg",
        "dessert": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Baku_Montage.jpg/960px-Baku_Montage.jpg",
        "coffee": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Baku_Montage.jpg/960px-Baku_Montage.jpg"
      }
    },
    {
      "name": "Passage 145",
      "category": "Café · Brunch",
      "address": "Icherisheher · Baku",
      "price": "₼12–25",
      "famous": "Brunch & Azerbaijani tea",
      "halal": true,
      "vegetarian": true,
      "reservation": "Walk-in",
      "wait": "10–15 min",
      "michelin": "—",
      "kidsFriendly": "Yes",
      "dressCode": "Smart casual",
      "tip": "Hidden in the Old City — order tea with jam and pakhlava.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Passage%20145%20Azerbaijan",
      "bookUrl": "https://www.google.com/maps/search/?api=1&query=Passage%20145%20Azerbaijan",
      "dishes": [
        {
          "name": "Brunch & Azerbaijani tea",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Maiden_Tower_Baku.jpg/960px-Maiden_Tower_Baku.jpg",
          "desc": "Signature dish at Passage 145."
        },
        {
          "name": "Seasonal Special",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Palace_of_Shirvanshahs_common.JPG/960px-Palace_of_Shirvanshahs_common.JPG",
          "desc": "Ask your server for today's recommendation."
        },
        {
          "name": "Azerbaijani Starter",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Palace_of_Shirvanshahs_common.JPG/960px-Palace_of_Shirvanshahs_common.JPG",
          "desc": "Fresh local produce, beautifully plated."
        },
        {
          "name": "Main Course",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Palace_of_Shirvanshahs_common.JPG/960px-Palace_of_Shirvanshahs_common.JPG",
          "desc": "Hearty Caucasus cooking done properly."
        },
        {
          "name": "Dessert",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Maiden_Tower_Baku.jpg/960px-Maiden_Tower_Baku.jpg",
          "desc": "Finish with Sheki halva or baklava if available."
        }
      ],
      "photos": {
        "signature": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Maiden_Tower_Baku.jpg/960px-Maiden_Tower_Baku.jpg",
        "interior": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Palace_of_Shirvanshahs_common.JPG/960px-Palace_of_Shirvanshahs_common.JPG",
        "exterior": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Palace_of_Shirvanshahs_common.JPG/960px-Palace_of_Shirvanshahs_common.JPG",
        "dessert": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Palace_of_Shirvanshahs_common.JPG/960px-Palace_of_Shirvanshahs_common.JPG",
        "coffee": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Palace_of_Shirvanshahs_common.JPG/960px-Palace_of_Shirvanshahs_common.JPG"
      }
    },
    {
      "name": "Baku Roasting Company",
      "category": "Café · Roastery",
      "address": "Baku",
      "price": "₼8–18",
      "famous": "Single-origin pour-over",
      "halal": true,
      "vegetarian": true,
      "reservation": "Walk-in",
      "wait": "5 min",
      "michelin": "—",
      "kidsFriendly": "Yes",
      "dressCode": "Smart casual",
      "tip": "Buy beans as souvenirs — locally roasted Azerbaijani coffee is a rare gift.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Baku%20Roasting%20Company",
      "bookUrl": "https://www.google.com/maps/search/?api=1&query=Baku%20Roasting%20Company",
      "dishes": [
        {
          "name": "Single-origin pour-over",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Nizami_street_historical_buildings.JPG/960px-Nizami_street_historical_buildings.JPG",
          "desc": "Signature dish at Baku Roasting Company."
        },
        {
          "name": "Seasonal Special",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Baku_Montage.jpg/960px-Baku_Montage.jpg",
          "desc": "Ask your server for today's recommendation."
        },
        {
          "name": "Azerbaijani Starter",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Baku_Montage.jpg/960px-Baku_Montage.jpg",
          "desc": "Fresh local produce, beautifully plated."
        },
        {
          "name": "Main Course",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Baku_Montage.jpg/960px-Baku_Montage.jpg",
          "desc": "Hearty Caucasus cooking done properly."
        },
        {
          "name": "Dessert",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Nizami_street_historical_buildings.JPG/960px-Nizami_street_historical_buildings.JPG",
          "desc": "Finish with Sheki halva or baklava if available."
        }
      ],
      "photos": {
        "signature": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Nizami_street_historical_buildings.JPG/960px-Nizami_street_historical_buildings.JPG",
        "interior": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Baku_Montage.jpg/960px-Baku_Montage.jpg",
        "exterior": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Baku_Montage.jpg/960px-Baku_Montage.jpg",
        "dessert": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Baku_Montage.jpg/960px-Baku_Montage.jpg",
        "coffee": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Baku_Montage.jpg/960px-Baku_Montage.jpg"
      }
    }
  ],
  "itineraries": [
    {
      "day": 1,
      "title": "Welcome to Baku",
      "color": "#dc2626",
      "routePreview": "8 stops · start 09:00 · end 21:00 · ≈ 4 km walk",
      "mapUrl": "https://www.google.com/maps/dir/United+Coffee+Beans+Baku/Old+City+Baku/Maiden+Tower+Baku/Palace+of+the+Shirvanshahs/Baku+Boulevard/Azerbaijan+Carpet+Museum/Highland+Park+Baku",
      "budget": {
        "budget": {
          "total": "€70–100 per person",
          "includes": [
            "Guesthouse stays",
            "Local restaurants",
            "Shared driver",
            "Free viewpoints"
          ]
        },
        "mid": {
          "total": "€150–250 per person",
          "includes": [
            "4★ hotels",
            "Sit-down meals",
            "Private driver",
            "Site tickets"
          ]
        },
        "luxury": {
          "total": "€350–700 per person",
          "includes": [
            "5★ resorts",
            "Fine dining",
            "Spa treatments",
            "Premium car & guide"
          ]
        }
      },
      "photos": [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Nizami_street_historical_buildings.JPG/960px-Nizami_street_historical_buildings.JPG",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Maiden_Tower_Baku.jpg/960px-Maiden_Tower_Baku.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Palace_of_Shirvanshahs_common.JPG/960px-Palace_of_Shirvanshahs_common.JPG",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Baku_Seaside_Bulevard.JPG/960px-Baku_Seaside_Bulevard.JPG"
      ],
      "stops": [
        {
          "time": "09:00",
          "timeOfDay": "morning",
          "name": "United Coffee Beans",
          "desc": "Breakfast · specialty coffee before the Old City",
          "transit": "Private driver",
          "icon": "car",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=United%20Coffee%20Beans%20Azerbaijan"
        },
        {
          "time": "10:00",
          "timeOfDay": "morning",
          "name": "Old City (Icherisheher)",
          "desc": "Maiden Tower · Shirvanshah Palace · caravanserais · historic alleys",
          "transit": "Private driver",
          "icon": "car",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Old%20City%20(Icherisheher)%20Azerbaijan"
        },
        {
          "time": "13:00",
          "timeOfDay": "afternoon",
          "name": "Şirvanşah Museum Restaurant",
          "desc": "Lunch inside the medieval walls",
          "transit": "Private driver",
          "icon": "car",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=%C5%9Eirvan%C5%9Fah%20Museum%20Restaurant%20Azerbaijan"
        },
        {
          "time": "14:30",
          "timeOfDay": "afternoon",
          "name": "Baku Boulevard",
          "desc": "Little Venice · seaside promenade",
          "transit": "Private driver",
          "icon": "car",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Baku%20Boulevard"
        },
        {
          "time": "15:30",
          "timeOfDay": "afternoon",
          "name": "Azerbaijan Carpet Museum",
          "desc": "UNESCO carpet heritage · rolled-carpet architecture",
          "transit": "Private driver",
          "icon": "car",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Azerbaijan%20Carpet%20Museum"
        },
        {
          "time": "17:30",
          "timeOfDay": "evening",
          "name": "Highland Park",
          "desc": "Sunset · best city panorama over the Caspian",
          "transit": "Private driver",
          "icon": "car",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Highland%20Park%20Azerbaijan"
        },
        {
          "time": "20:00",
          "timeOfDay": "evening",
          "name": "Sky Grill",
          "desc": "Dinner with Flame Towers views",
          "transit": "Private driver",
          "icon": "car",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Sky%20Grill%20Azerbaijan"
        }
      ]
    },
    {
      "day": 2,
      "title": "Modern Baku",
      "color": "#b91c1c",
      "routePreview": "7 stops · start 09:30 · end 21:00 · ≈ 5 km",
      "mapUrl": "https://www.google.com/maps/dir/Heydar+Aliyev+Center/Flame+Towers+Baku/Alley+of+Martyrs/Nizami+Street+Baku",
      "budget": {
        "budget": {
          "total": "€70–100 per person",
          "includes": [
            "Guesthouse stays",
            "Local restaurants",
            "Shared driver",
            "Free viewpoints"
          ]
        },
        "mid": {
          "total": "€150–250 per person",
          "includes": [
            "4★ hotels",
            "Sit-down meals",
            "Private driver",
            "Site tickets"
          ]
        },
        "luxury": {
          "total": "€350–700 per person",
          "includes": [
            "5★ resorts",
            "Fine dining",
            "Spa treatments",
            "Premium car & guide"
          ]
        }
      },
      "photos": [
        "https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Heydar_Aliyev_Cultural_Center.jpg/960px-Heydar_Aliyev_Cultural_Center.jpg",
        "https://upload.wikimedia.org/wikipedia/en/thumb/0/08/Flame_towers_baku.jpg/960px-Flame_towers_baku.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/A_view_of_the_Baku_bay%2C_Azerbaijan.jpg/960px-A_view_of_the_Baku_bay%2C_Azerbaijan.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Nizami_street_historical_buildings.JPG/960px-Nizami_street_historical_buildings.JPG"
      ],
      "stops": [
        {
          "time": "09:30",
          "timeOfDay": "morning",
          "name": "Heydar Aliyev Center",
          "desc": "Zaha Hadid architecture · design museum",
          "transit": "Private driver",
          "icon": "car",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Heydar%20Aliyev%20Center%20Azerbaijan"
        },
        {
          "time": "11:00",
          "timeOfDay": "morning",
          "name": "Flame Towers",
          "desc": "Iconic skyline · LED flame show at dusk",
          "transit": "Private driver",
          "icon": "car",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Flame%20Towers%20Azerbaijan"
        },
        {
          "time": "12:00",
          "timeOfDay": "morning",
          "name": "Alley of Martyrs",
          "desc": "Memorial walk · funicular to Highland Park",
          "transit": "Private driver",
          "icon": "car",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Alley%20of%20Martyrs%20Azerbaijan"
        },
        {
          "time": "13:30",
          "timeOfDay": "afternoon",
          "name": "MariVanna",
          "desc": "Lunch · homestyle Russian-Azerbaijani",
          "transit": "Private driver",
          "icon": "car",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=MariVanna%20Azerbaijan"
        },
        {
          "time": "15:00",
          "timeOfDay": "afternoon",
          "name": "Nizami Street",
          "desc": "Shopping · 28 Mall · Deniz Mall",
          "transit": "Private driver",
          "icon": "car",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Nizami%20Street%20Azerbaijan"
        },
        {
          "time": "20:00",
          "timeOfDay": "evening",
          "name": "SAHIL Restaurant",
          "desc": "Dinner on the Caspian waterfront",
          "transit": "Private driver",
          "icon": "car",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=SAHIL%20Restaurant%20Azerbaijan"
        }
      ]
    },
    {
      "day": 3,
      "title": "Fire & Stone",
      "color": "#ca8a04",
      "routePreview": "5 stops · full day · ≈ 120 km round trip",
      "mapUrl": "https://www.google.com/maps/dir/Baku/Gobustan+National+Park/Mud+Volcanoes+Azerbaijan/Ateshgah+Fire+Temple/Yanar+Dag",
      "budget": {
        "budget": {
          "total": "€70–100 per person",
          "includes": [
            "Guesthouse stays",
            "Local restaurants",
            "Shared driver",
            "Free viewpoints"
          ]
        },
        "mid": {
          "total": "€150–250 per person",
          "includes": [
            "4★ hotels",
            "Sit-down meals",
            "Private driver",
            "Site tickets"
          ]
        },
        "luxury": {
          "total": "€350–700 per person",
          "includes": [
            "5★ resorts",
            "Fine dining",
            "Spa treatments",
            "Premium car & guide"
          ]
        }
      },
      "photos": [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Gobustan_State_Reserve_7.jpg/960px-Gobustan_State_Reserve_7.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Gobustan_mud_volcanoes_01.jpg/960px-Gobustan_mud_volcanoes_01.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Ateshgah_of_Baku.jpg/960px-Ateshgah_of_Baku.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Yanar_Dag.jpg/960px-Yanar_Dag.jpg"
      ],
      "stops": [
        {
          "time": "08:00",
          "timeOfDay": "morning",
          "name": "Gobustan National Park",
          "desc": "40,000-year-old petroglyphs · UNESCO site",
          "transit": "Private driver",
          "icon": "car",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Gobustan%20National%20Park%20Azerbaijan"
        },
        {
          "time": "10:30",
          "timeOfDay": "morning",
          "name": "Mud Volcanoes",
          "desc": "Lunar landscape · half the world's mud volcanoes",
          "transit": "Private driver",
          "icon": "car",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Mud%20Volcanoes%20Azerbaijan"
        },
        {
          "time": "12:30",
          "timeOfDay": "afternoon",
          "name": "Ateshgah Fire Temple",
          "desc": "Eternal flame · Zoroastrian heritage",
          "transit": "Private driver",
          "icon": "car",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Ateshgah%20Fire%20Temple%20Azerbaijan"
        },
        {
          "time": "14:30",
          "timeOfDay": "afternoon",
          "name": "Yanar Dag",
          "desc": "Burning Mountain · natural gas fire on a hillside",
          "transit": "Private driver",
          "icon": "car",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Yanar%20Dag%20Azerbaijan"
        },
        {
          "time": "17:00",
          "timeOfDay": "evening",
          "name": "Flame Towers",
          "desc": "Return to Baku · LED show after dark",
          "transit": "Return drive",
          "icon": "car",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Flame%20Towers%20Azerbaijan"
        }
      ]
    },
    {
      "day": 4,
      "title": "The Silk Road",
      "color": "#059669",
      "routePreview": "4 stops · ≈ 200 km · 3 hr drive",
      "mapUrl": "https://www.google.com/maps/dir/Baku/Shamakhi+Juma+Mosque/Lahij+Azerbaijan",
      "budget": {
        "budget": {
          "total": "€70–100 per person",
          "includes": [
            "Guesthouse stays",
            "Local restaurants",
            "Shared driver",
            "Free viewpoints"
          ]
        },
        "mid": {
          "total": "€150–250 per person",
          "includes": [
            "4★ hotels",
            "Sit-down meals",
            "Private driver",
            "Site tickets"
          ]
        },
        "luxury": {
          "total": "€350–700 per person",
          "includes": [
            "5★ resorts",
            "Fine dining",
            "Spa treatments",
            "Premium car & guide"
          ]
        }
      },
      "photos": [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Shamakhi_Juma_Mosque.jpg/960px-Shamakhi_Juma_Mosque.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Driving_back_to_Baku-_this_is_the_end_of_my_Azerbaijan_tour_%2836637671423%29.jpg/960px-Driving_back_to_Baku-_this_is_the_end_of_my_Azerbaijan_tour_%2836637671423%29.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Driving_back_to_Baku-_this_is_the_end_of_my_Azerbaijan_tour_%2836637671423%29.jpg/960px-Driving_back_to_Baku-_this_is_the_end_of_my_Azerbaijan_tour_%2836637671423%29.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Driving_back_to_Baku-_this_is_the_end_of_my_Azerbaijan_tour_%2836637671423%29.jpg/960px-Driving_back_to_Baku-_this_is_the_end_of_my_Azerbaijan_tour_%2836637671423%29.jpg"
      ],
      "stops": [
        {
          "time": "08:00",
          "timeOfDay": "morning",
          "name": "Shamakhi Juma Mosque",
          "desc": "743 AD mosque · rest stop en route",
          "transit": "Private driver",
          "icon": "car",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Shamakhi%20Juma%20Mosque%20Azerbaijan"
        },
        {
          "time": "12:00",
          "timeOfDay": "afternoon",
          "name": "Lahij",
          "desc": "Ancient mountain village · copper workshops · stone streets",
          "transit": "Private driver",
          "icon": "car",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Lahij"
        },
        {
          "time": "15:00",
          "timeOfDay": "afternoon",
          "name": "Lahij Guest House",
          "desc": "Tea house · traditional Azerbaijani tea in armudu glasses",
          "transit": "Private driver",
          "icon": "car",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Lahij%20Guest%20House"
        },
        {
          "time": "19:00",
          "timeOfDay": "evening",
          "name": "Lahij",
          "desc": "Overnight in the village — stars over the Caucasus",
          "transit": "Stay",
          "icon": "hotel",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Lahij"
        }
      ]
    },
    {
      "day": 5,
      "title": "Azerbaijan's Most Beautiful Town",
      "color": "#0d9488",
      "routePreview": "5 stops · ≈ 120 km · 2 hr drive",
      "mapUrl": "https://www.google.com/maps/dir/Lahij/Sheki/Palace+of+Shaki+Khans/Sheki+Caravanserai/Church+of+Kish",
      "budget": {
        "budget": {
          "total": "€70–100 per person",
          "includes": [
            "Guesthouse stays",
            "Local restaurants",
            "Shared driver",
            "Free viewpoints"
          ]
        },
        "mid": {
          "total": "€150–250 per person",
          "includes": [
            "4★ hotels",
            "Sit-down meals",
            "Private driver",
            "Site tickets"
          ]
        },
        "luxury": {
          "total": "€350–700 per person",
          "includes": [
            "5★ resorts",
            "Fine dining",
            "Spa treatments",
            "Premium car & guide"
          ]
        }
      },
      "photos": [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/%C5%9E%C9%99ki_xan_saray%C4%B1.jpg/960px-%C5%9E%C9%99ki_xan_saray%C4%B1.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Sheki_Upper_Caravanserai_004_4085.jpg/960px-Sheki_Upper_Caravanserai_004_4085.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/%C5%9E%C9%99ki_xan_saray%C4%B1.jpg/960px-%C5%9E%C9%99ki_xan_saray%C4%B1.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Church%2C_Kish_%28P1090438%29.jpg/960px-Church%2C_Kish_%28P1090438%29.jpg"
      ],
      "stops": [
        {
          "time": "09:00",
          "timeOfDay": "morning",
          "name": "Palace of Shaki Khans",
          "desc": "UNESCO palace · shebeke stained glass",
          "transit": "Private driver",
          "icon": "car",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Palace%20of%20Shaki%20Khans%20Azerbaijan"
        },
        {
          "time": "11:00",
          "timeOfDay": "morning",
          "name": "Sheki Caravanserai",
          "desc": "Silk Road inn · craft market",
          "transit": "Private driver",
          "icon": "car",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Sheki%20Caravanserai"
        },
        {
          "time": "13:00",
          "timeOfDay": "afternoon",
          "name": "Piti House",
          "desc": "Lunch · Sheki's signature clay-pot stew",
          "transit": "Private driver",
          "icon": "car",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Piti%20House%20Azerbaijan"
        },
        {
          "time": "15:00",
          "timeOfDay": "afternoon",
          "name": "Church of Kish",
          "desc": "Albanian church · 2,000-year-old hilltop sanctuary",
          "transit": "Private driver",
          "icon": "car",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Church%20of%20Kish%20Azerbaijan"
        },
        {
          "time": "18:00",
          "timeOfDay": "evening",
          "name": "Sheki Palace Hotel",
          "desc": "Evening walk through old town roofs",
          "transit": "Stay",
          "icon": "hotel",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Sheki%20Palace%20Hotel"
        }
      ]
    },
    {
      "day": 6,
      "title": "Mountains & Lakes",
      "color": "#2563eb",
      "routePreview": "4 stops · ≈ 100 km · 2 hr drive",
      "mapUrl": "https://www.google.com/maps/dir/Sheki/Gabala/Tufandag+Cable+Car/Nohur+Lake/Seven+Beauties+Waterfall",
      "budget": {
        "budget": {
          "total": "€70–100 per person",
          "includes": [
            "Guesthouse stays",
            "Local restaurants",
            "Shared driver",
            "Free viewpoints"
          ]
        },
        "mid": {
          "total": "€150–250 per person",
          "includes": [
            "4★ hotels",
            "Sit-down meals",
            "Private driver",
            "Site tickets"
          ]
        },
        "luxury": {
          "total": "€350–700 per person",
          "includes": [
            "5★ resorts",
            "Fine dining",
            "Spa treatments",
            "Premium car & guide"
          ]
        }
      },
      "photos": [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Gabala_Azerbaijan.jpg/960px-Gabala_Azerbaijan.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Gabala_Azerbaijan.jpg/960px-Gabala_Azerbaijan.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Gabala_Azerbaijan.jpg/960px-Gabala_Azerbaijan.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Gabala_Azerbaijan.jpg/960px-Gabala_Azerbaijan.jpg"
      ],
      "stops": [
        {
          "time": "09:30",
          "timeOfDay": "morning",
          "name": "Tufandag Cable Car",
          "desc": "Caucasus cable car · mountain air",
          "transit": "Private driver",
          "icon": "car",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Tufandag%20Cable%20Car%20Azerbaijan"
        },
        {
          "time": "12:00",
          "timeOfDay": "afternoon",
          "name": "Nohur Lake",
          "desc": "Lakeside lunch · mirror-still mountain reflection",
          "transit": "Private driver",
          "icon": "car",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Nohur%20Lake%20Azerbaijan"
        },
        {
          "time": "14:30",
          "timeOfDay": "afternoon",
          "name": "Seven Beauties Waterfall",
          "desc": "Seven cascading tiers through forest",
          "transit": "Private driver",
          "icon": "car",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Seven%20Beauties%20Waterfall%20Azerbaijan"
        },
        {
          "time": "18:00",
          "timeOfDay": "evening",
          "name": "Chenot Palace Gabala",
          "desc": "Resort spa · wellness evening",
          "transit": "Stay",
          "icon": "hotel",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Chenot%20Palace%20Gabala"
        }
      ]
    },
    {
      "day": 7,
      "title": "The Caucasus",
      "color": "#7c3aed",
      "routePreview": "3 stops · ≈ 180 km · 4 hr drive",
      "mapUrl": "https://www.google.com/maps/dir/Gabala/Guba/Qechresh+Forest",
      "budget": {
        "budget": {
          "total": "€70–100 per person",
          "includes": [
            "Guesthouse stays",
            "Local restaurants",
            "Shared driver",
            "Free viewpoints"
          ]
        },
        "mid": {
          "total": "€150–250 per person",
          "includes": [
            "4★ hotels",
            "Sit-down meals",
            "Private driver",
            "Site tickets"
          ]
        },
        "luxury": {
          "total": "€350–700 per person",
          "includes": [
            "5★ resorts",
            "Fine dining",
            "Spa treatments",
            "Premium car & guide"
          ]
        }
      },
      "photos": [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Xinaliq.jpg/960px-Xinaliq.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Xinaliq.jpg/960px-Xinaliq.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Xinaliq.jpg/960px-Xinaliq.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Maiden_Tower_Baku.jpg/960px-Maiden_Tower_Baku.jpg"
      ],
      "stops": [
        {
          "time": "09:00",
          "timeOfDay": "morning",
          "name": "Qechresh Forest",
          "desc": "Apple orchards · temperate forest walk",
          "transit": "Private driver",
          "icon": "car",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Qechresh%20Forest%20Azerbaijan"
        },
        {
          "time": "13:00",
          "timeOfDay": "afternoon",
          "name": "Macara Lake Park Hotel",
          "desc": "Mountain village lunch · relax",
          "transit": "Private driver",
          "icon": "car",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Macara%20Lake%20Park%20Hotel%20Azerbaijan"
        },
        {
          "time": "17:00",
          "timeOfDay": "evening",
          "name": "Macara Lake Park Hotel",
          "desc": "Overnight nature resort",
          "transit": "Stay",
          "icon": "hotel",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Macara%20Lake%20Park%20Hotel%20Azerbaijan"
        }
      ]
    },
    {
      "day": 8,
      "title": "Khinalug — Ancient Mountain Village",
      "color": "#4338ca",
      "routePreview": "2 stops · ≈ 80 km round trip · full day",
      "mapUrl": "https://www.google.com/maps/dir/Guba/Khinalug",
      "budget": {
        "budget": {
          "total": "€70–100 per person",
          "includes": [
            "Guesthouse stays",
            "Local restaurants",
            "Shared driver",
            "Free viewpoints"
          ]
        },
        "mid": {
          "total": "€150–250 per person",
          "includes": [
            "4★ hotels",
            "Sit-down meals",
            "Private driver",
            "Site tickets"
          ]
        },
        "luxury": {
          "total": "€350–700 per person",
          "includes": [
            "5★ resorts",
            "Fine dining",
            "Spa treatments",
            "Premium car & guide"
          ]
        }
      },
      "photos": [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Xinaliq.jpg/960px-Xinaliq.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Xinaliq.jpg/960px-Xinaliq.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Xinaliq.jpg/960px-Xinaliq.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Maiden_Tower_Baku.jpg/960px-Maiden_Tower_Baku.jpg"
      ],
      "stops": [
        {
          "time": "08:00",
          "timeOfDay": "morning",
          "name": "Khinalug",
          "desc": "One of the world's oldest villages · panoramic viewpoints · mountain walk",
          "transit": "Private driver",
          "icon": "car",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Khinalug%20Azerbaijan"
        },
        {
          "time": "13:00",
          "timeOfDay": "afternoon",
          "name": "Khinalug",
          "desc": "Traditional lunch in a home kitchen",
          "transit": "Private driver",
          "icon": "car",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Khinalug%20Azerbaijan"
        },
        {
          "time": "16:00",
          "timeOfDay": "evening",
          "name": "Macara Lake Park Hotel",
          "desc": "Return to Guba · spa recovery",
          "transit": "Return",
          "icon": "car",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Macara%20Lake%20Park%20Hotel%20Azerbaijan"
        }
      ]
    },
    {
      "day": 9,
      "title": "Return to Baku",
      "color": "#991b1b",
      "routePreview": "3 stops · ≈ 170 km · 2 hr drive · departure",
      "mapUrl": "https://www.google.com/maps/dir/Guba/Baku/Heydar+Aliyev+International+Airport",
      "budget": {
        "budget": {
          "total": "€70–100 per person",
          "includes": [
            "Guesthouse stays",
            "Local restaurants",
            "Shared driver",
            "Free viewpoints"
          ]
        },
        "mid": {
          "total": "€150–250 per person",
          "includes": [
            "4★ hotels",
            "Sit-down meals",
            "Private driver",
            "Site tickets"
          ]
        },
        "luxury": {
          "total": "€350–700 per person",
          "includes": [
            "5★ resorts",
            "Fine dining",
            "Spa treatments",
            "Premium car & guide"
          ]
        }
      },
      "photos": [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Nizami_street_historical_buildings.JPG/960px-Nizami_street_historical_buildings.JPG",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Nizami_street_historical_buildings.JPG/960px-Nizami_street_historical_buildings.JPG",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Heydar_Aliyev_International_Airport.jpg/960px-Heydar_Aliyev_International_Airport.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Maiden_Tower_Baku.jpg/960px-Maiden_Tower_Baku.jpg"
      ],
      "stops": [
        {
          "time": "08:00",
          "timeOfDay": "morning",
          "name": "Coffee Moffie",
          "desc": "Coffee stop in Baku · last flat white",
          "transit": "Private driver",
          "icon": "car",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Coffee%20Moffie%20Azerbaijan"
        },
        {
          "time": "11:00",
          "timeOfDay": "morning",
          "name": "Nizami Street",
          "desc": "Shopping · Yashil Bazaar · carpet souvenirs",
          "transit": "Private driver",
          "icon": "car",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Nizami%20Street%20Azerbaijan"
        },
        {
          "time": "13:00",
          "timeOfDay": "afternoon",
          "name": "Heydar Aliyev International Airport",
          "desc": "Lunch · check-in · GYD departure",
          "transit": "Airport",
          "icon": "plane",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Heydar%20Aliyev%20International%20Airport%20Azerbaijan"
        }
      ]
    }
  ],
  "rainyDay": [
    {
      "name": "Heydar Aliyev Center",
      "address": "Baku",
      "desc": "Indoor architecture & design museum",
      "img": "https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Heydar_Aliyev_Cultural_Center.jpg/960px-Heydar_Aliyev_Cultural_Center.jpg",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Heydar%20Aliyev%20Center%20Azerbaijan"
    },
    {
      "name": "Azerbaijan Carpet Museum",
      "address": "Baku",
      "desc": "Weaving demos & centuries of craft",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Az%C9%99rbaycan_xal%C3%A7a_muzeyi.jpg/960px-Az%C9%99rbaycan_xal%C3%A7a_muzeyi.jpg",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Azerbaijan%20Carpet%20Museum"
    },
    {
      "name": "Şirvanşah Museum Restaurant",
      "address": "Old City",
      "desc": "Lunch under medieval arches",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Palace_of_Shirvanshahs_common.JPG/960px-Palace_of_Shirvanshahs_common.JPG",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%C5%9Eirvan%C5%9Fah%20Museum%20Restaurant%20Azerbaijan"
    },
    {
      "name": "Sheki Caravanserai",
      "address": "Sheki",
      "desc": "Silk Road inn — atmospheric even in rain",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Sheki_Upper_Caravanserai_004_4085.jpg/960px-Sheki_Upper_Caravanserai_004_4085.jpg",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Sheki%20Caravanserai"
    },
    {
      "name": "Chenot Palace Gabala",
      "address": "Gabala",
      "desc": "Spa day when mountain weather turns",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Gabala_Azerbaijan.jpg/960px-Gabala_Azerbaijan.jpg",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Chenot%20Palace%20Gabala"
    }
  ],
  "sunnyDay": [
    {
      "name": "Highland Park",
      "address": "Baku",
      "desc": "Best sunset panorama",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/A_view_of_the_Baku_bay%2C_Azerbaijan.jpg/960px-A_view_of_the_Baku_bay%2C_Azerbaijan.jpg",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Highland%20Park%20Azerbaijan"
    },
    {
      "name": "Mud Volcanoes",
      "address": "Gobustan",
      "desc": "Lunar landscape in full sun",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Gobustan_mud_volcanoes_01.jpg/960px-Gobustan_mud_volcanoes_01.jpg",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Mud%20Volcanoes%20Azerbaijan"
    },
    {
      "name": "Nohur Lake",
      "address": "Gabala",
      "desc": "Mirror reflections on calm days",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Gabala_Azerbaijan.jpg/960px-Gabala_Azerbaijan.jpg",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Nohur%20Lake%20Azerbaijan"
    },
    {
      "name": "Tufandag Cable Car",
      "address": "Gabala",
      "desc": "Caucasus views from the cable car",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Gabala_Azerbaijan.jpg/960px-Gabala_Azerbaijan.jpg",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Tufandag%20Cable%20Car%20Azerbaijan"
    },
    {
      "name": "Khinalug",
      "address": "Guba",
      "desc": "High-altitude village · clear mountain air",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Xinaliq.jpg/960px-Xinaliq.jpg",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Khinalug%20Azerbaijan"
    },
    {
      "name": "Yanar Dag",
      "address": "Baku",
      "desc": "Burning mountain at dusk",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Yanar_Dag.jpg/960px-Yanar_Dag.jpg",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Yanar%20Dag%20Azerbaijan"
    }
  ],
  "hiddenGems": [
    {
      "name": "Lahij",
      "desc": "Copper workshops on stone streets — living Silk Road craft",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Driving_back_to_Baku-_this_is_the_end_of_my_Azerbaijan_tour_%2836637671423%29.jpg/960px-Driving_back_to_Baku-_this_is_the_end_of_my_Azerbaijan_tour_%2836637671423%29.jpg",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Lahij"
    },
    {
      "name": "Church of Kish",
      "desc": "2,000-year-old Albanian church above Sheki",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Church%2C_Kish_%28P1090438%29.jpg/960px-Church%2C_Kish_%28P1090438%29.jpg",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Church%20of%20Kish%20Azerbaijan"
    },
    {
      "name": "Seven Beauties Waterfall",
      "desc": "Seven tiers through a forest gorge near Gabala",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Gabala_Azerbaijan.jpg/960px-Gabala_Azerbaijan.jpg",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Seven%20Beauties%20Waterfall%20Azerbaijan"
    },
    {
      "name": "Qechresh Forest",
      "desc": "Apple orchards and temperate forest above Guba",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Xinaliq.jpg/960px-Xinaliq.jpg",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Qechresh%20Forest%20Azerbaijan"
    },
    {
      "name": "Passage 145",
      "desc": "Hidden Old City café — tea with jam and pakhlava",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Maiden_Tower_Baku.jpg/960px-Maiden_Tower_Baku.jpg",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Passage%20145%20Azerbaijan"
    },
    {
      "name": "Yanar Dag",
      "desc": "A hillside that burns forever — Marco Polo wrote about it",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Yanar_Dag.jpg/960px-Yanar_Dag.jpg",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Yanar%20Dag%20Azerbaijan"
    }
  ],
  "warnings": [
    {
      "title": "Airport taxi touts",
      "desc": "Use Bolt or pre-booked transfer at GYD. Agree driver price for all 9 days in writing before Day 1."
    },
    {
      "title": "Old City carpet shops",
      "desc": "Street sellers push synthetic carpets as handmade. Buy only from certified shops like the Carpet Museum store."
    },
    {
      "title": "Khinalug road closure",
      "desc": "Mountain road closes in heavy snow or fog. Check with your driver the night before Day 8."
    },
    {
      "title": "Mud volcano shoes",
      "desc": "The mud is harmless but ruins shoes. Wear old trainers you can wash."
    },
    {
      "title": "Baku summer heat",
      "desc": "July–August exceeds 35°C. Start Old City walks at 09:00. Hydrate constantly."
    },
    {
      "title": "Village photography",
      "desc": "Ask before photographing Khinalug and Lahij residents. Respect privacy in home kitchens."
    },
    {
      "title": "Currency exchange",
      "desc": "Never use street changers. ATMs give the best rate. Euros accepted at some hotels."
    }
  ],
  "shopping": {
    "districts": [
      {
        "name": "Port Baku Mall",
        "desc": "Luxury brands · waterfront dining",
        "img": "https://upload.wikimedia.org/wikipedia/en/thumb/0/08/Flame_towers_baku.jpg/960px-Flame_towers_baku.jpg",
        "mapUrl": "https://www.google.com/maps/search/?api=1&query=Port%20Baku%20Mall"
      },
      {
        "name": "Deniz Mall",
        "desc": "Modern mall on Nizami corridor",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Nizami_street_historical_buildings.JPG/960px-Nizami_street_historical_buildings.JPG",
        "mapUrl": "https://www.google.com/maps/search/?api=1&query=Deniz%20Mall%20Azerbaijan"
      },
      {
        "name": "28 Mall",
        "desc": "Mid-range shopping · cinema · food court",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Nizami_street_historical_buildings.JPG/960px-Nizami_street_historical_buildings.JPG",
        "mapUrl": "https://www.google.com/maps/search/?api=1&query=28%20Mall%20Baku"
      },
      {
        "name": "Yashil Bazaar",
        "desc": "Green market · spices · fruit · caviar",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Az%C9%99rbaycan_xal%C3%A7a_muzeyi.jpg/960px-Az%C9%99rbaycan_xal%C3%A7a_muzeyi.jpg",
        "mapUrl": "https://www.google.com/maps/search/?api=1&query=Yashil%20Bazaar%20Baku"
      }
    ],
    "brands": [
      "Azerbaijan Carpet",
      "Azeri SWARA",
      "Lahij copper",
      "Sheki halva",
      "Baku Roasting Company beans"
    ],
    "souvenirs": [
      "Hand-woven carpet (certified)",
      "Copper tray from Lahij",
      "Sheki halva box",
      "Armudu tea glass set",
      "Caviar from Yashil Bazaar"
    ],
    "vatTips": {
      "rate": "18% VAT",
      "note": "Tourist refund available on some purchases over ₼200 at registered stores."
    }
  },
  "budget": {
    "budget": {
      "daily": "€70–100 per person / day",
      "accommodation": "€40 Lahij Guest House",
      "food": "₼15 local restaurants",
      "transport": "€30 shared driver/day",
      "activities": "₼10 site tickets",
      "extras": "₼5 tea & tips",
      "tip": "Stay in guesthouses Days 4–5. Eat piti and dolma. Free viewpoints beat paid tours."
    },
    "mid": {
      "daily": "€150–250 per person / day",
      "accommodation": "€120 Sheki Palace Hotel",
      "food": "₼40 sit-down meals",
      "transport": "€60 private driver/day",
      "activities": "₼25 tickets & cable car",
      "extras": "₼15 coffee & tips"
    },
    "luxury": {
      "daily": "€350–700 per person / day",
      "accommodation": "€350 Four Seasons Baku",
      "food": "₼80 Sky Grill & fine dining",
      "transport": "€100 premium driver & guide",
      "activities": "₼50 spa & private tours",
      "extras": "₼40 wine & tips"
    }
  },
  "family": {
    "tip": "Gabala resorts (Qafqaz Riverside) have kids' clubs. Gobustan petroglyphs fascinate children. Khinalug road is not suitable for toddlers — skip or do a half-day.",
    "rows": [
      {
        "attraction": "Gobustan National Park",
        "desc": "Rock art treasure hunt",
        "goodForKids": true,
        "stroller": false,
        "babyChange": false,
        "familyTicket": true
      },
      {
        "attraction": "Mud Volcanoes",
        "desc": "Messy fun — bring spare clothes",
        "goodForKids": true,
        "stroller": false,
        "babyChange": false,
        "familyTicket": true
      },
      {
        "attraction": "Tufandag Cable Car",
        "desc": "Mountain ride · ski school in winter",
        "goodForKids": true,
        "stroller": true,
        "babyChange": true,
        "familyTicket": true
      },
      {
        "attraction": "Baku Boulevard",
        "desc": "Ferris wheel · gondolas · wide paths",
        "goodForKids": true,
        "stroller": true,
        "babyChange": true,
        "familyTicket": true
      },
      {
        "attraction": "Khinalug",
        "desc": "Older kids only · rough roads",
        "goodForKids": false,
        "stroller": false,
        "babyChange": false,
        "familyTicket": true
      }
    ]
  },
  "emergency": {
    "numbers": [
      {
        "label": "112",
        "desc": "General emergency",
        "icon": "emergency"
      },
      {
        "label": "102",
        "desc": "Police",
        "icon": "police"
      },
      {
        "label": "103",
        "desc": "Ambulance",
        "icon": "medical"
      },
      {
        "label": "101",
        "desc": "Fire",
        "icon": "fire"
      }
    ],
    "hospitals": [
      {
        "name": "Central Clinical Hospital",
        "address": "Baku",
        "icon": "hospital",
        "mapUrl": "https://www.google.com/maps/search/?api=1&query=Central%20Clinical%20Hospital%20Baku"
      },
      {
        "name": "Medical Plaza",
        "address": "Baku",
        "icon": "hospital",
        "mapUrl": "https://www.google.com/maps/search/?api=1&query=Medical%20Plaza%20Baku"
      },
      {
        "name": "Baku City Hospital",
        "address": "Baku",
        "icon": "hospital",
        "mapUrl": "https://www.google.com/maps/search/?api=1&query=Baku%20City%20Hospital"
      }
    ],
    "embassies": [
      {
        "country": "Saudi Arabia",
        "address": "Baku · AZ1000",
        "phone": "+994 12 498 0560",
        "emergency": "+994 12 498 0561",
        "website": "https://embassies.mofa.gov.sa",
        "icon": "embassy",
        "mapUrl": "https://www.google.com/maps/search/?api=1&query=Saudi%20Embassy%20Baku"
      },
      {
        "country": "United Arab Emirates",
        "address": "Baku · AZ1065",
        "phone": "+994 12 465 3800",
        "emergency": "+994 50 220 0000",
        "website": "https://www.mofaic.gov.ae",
        "icon": "embassy",
        "mapUrl": "https://www.google.com/maps/search/?api=1&query=UAE%20Embassy%20Baku"
      },
      {
        "country": "Qatar",
        "address": "Baku · AZ1008",
        "phone": "+994 12 465 0940",
        "emergency": "+994 50 220 0000",
        "website": "https://mofa.gov.qa",
        "icon": "embassy",
        "mapUrl": "https://www.google.com/maps/search/?api=1&query=Qatar%20Embassy%20Baku"
      },
      {
        "country": "Kuwait",
        "address": "Baku · AZ1003",
        "phone": "+994 12 498 7610",
        "emergency": "+994 12 498 7611",
        "website": "https://www.mofa.gov.kw",
        "icon": "embassy",
        "mapUrl": "https://www.google.com/maps/search/?api=1&query=Kuwait%20Embassy%20Baku"
      },
      {
        "country": "Oman",
        "address": "Baku · AZ1025",
        "phone": "+994 12 464 2525",
        "emergency": "+994 50 220 0000",
        "website": "https://www.oman.org",
        "icon": "embassy",
        "mapUrl": "https://www.google.com/maps/search/?api=1&query=Oman%20Embassy%20Baku"
      }
    ],
    "lostPassport": "Report to police (102) and obtain a report. Contact your embassy in Baku for an emergency travel document. Keep passport photos on your phone."
  },
  "phrases": [
    {
      "english": "Salam — Hello",
      "use": "Every greeting"
    },
    {
      "english": "Sağ ol — Thank you",
      "use": "After meals and purchases"
    },
    {
      "english": "Çay — Tea",
      "use": "Azerbaijanis offer tea constantly — accept it"
    },
    {
      "english": "Ne qədər? — How much?",
      "use": "Markets and bazaars"
    },
    {
      "english": "Bu çox gözəl — This is very beautiful",
      "use": "Villages and hosts"
    },
    {
      "english": "Harada? — Where?",
      "use": "Asking directions"
    },
    {
      "english": "Driver, yavaş — Driver, slowly",
      "use": "Mountain roads"
    },
    {
      "english": "Hava limanı — Airport",
      "use": "Day 9 departure"
    }
  ],
  "cheatSheet": {
    "title": "One-Page Cheat Sheet",
    "subtitle": "Screenshot before your flight — every essential in one glance.",
    "emergency": [
      {
        "label": "112",
        "value": "Emergency"
      },
      {
        "label": "102",
        "value": "Police"
      },
      {
        "label": "103",
        "value": "Ambulance"
      }
    ],
    "transport": [
      {
        "label": "≈900 km",
        "value": "Total driving"
      },
      {
        "label": "Driver",
        "value": "Recommended"
      },
      {
        "label": "GYD",
        "value": "Heydar Aliyev Airport"
      }
    ],
    "money": [
      {
        "label": "₼ Manat",
        "value": "Local currency"
      },
      {
        "label": "Cards OK",
        "value": "Cities & malls"
      },
      {
        "label": "Cash",
        "value": "Villages & bazaars"
      }
    ],
    "apps": [
      {
        "name": "Bolt",
        "use": "Baku taxis"
      },
      {
        "name": "Google Maps",
        "use": "Offline maps for mountains"
      },
      {
        "name": "Google Translate",
        "use": "Azerbaijani offline pack"
      }
    ],
    "topQrCodes": [
      {
        "name": "Heydar Aliyev Airport",
        "mapUrl": "https://www.google.com/maps/search/?api=1&query=Heydar%20Aliyev%20International%20Airport%20Azerbaijan"
      },
      {
        "name": "Old City (Icherisheher)",
        "mapUrl": "https://www.google.com/maps/search/?api=1&query=Old%20City%20Baku"
      },
      {
        "name": "Flame Towers",
        "mapUrl": "https://www.google.com/maps/search/?api=1&query=Flame%20Towers%20Baku"
      },
      {
        "name": "Palace of Shaki Khans",
        "mapUrl": "https://www.google.com/maps/search/?api=1&query=Palace%20of%20Shaki%20Khans%20Azerbaijan"
      },
      {
        "name": "Khinalug",
        "mapUrl": "https://www.google.com/maps/search/?api=1&query=Khinalug%20Azerbaijan"
      },
      {
        "name": "Four Seasons Baku",
        "mapUrl": "https://www.google.com/maps/search/?api=1&query=Four%20Seasons%20Hotel%20Baku"
      },
      {
        "name": "Central Clinical Hospital",
        "mapUrl": "https://www.google.com/maps/search/?api=1&query=Central%20Clinical%20Hospital%20Baku"
      },
      {
        "name": "Gobustan National Park",
        "mapUrl": "https://www.google.com/maps/search/?api=1&query=Gobustan%20National%20Park%20Azerbaijan"
      }
    ]
  },
  "etiquette": [
    {
      "rule": "Accept tea",
      "desc": "When offered armudu tea, accept at least one glass. Refusing is impolite in villages and shops."
    },
    {
      "rule": "Remove shoes",
      "desc": "Take off shoes entering mosques and home kitchens in Khinalug and Lahij."
    },
    {
      "rule": "Dress modestly",
      "desc": "Cover shoulders and knees at mosques and mountain villages. Baku is more relaxed."
    },
    {
      "rule": "Photograph with permission",
      "desc": "Ask before photographing people in villages. Landscapes are free."
    },
    {
      "rule": "Bargain gently",
      "desc": "Bazaars expect negotiation. Start at 60% of asking price. Lahij copper is fairly priced — don't insult artisans."
    },
    {
      "rule": "Respect fire sites",
      "desc": "Ateshgah and Yanar Dag are sacred heritage. No littering, no reckless behaviour near flames."
    },
    {
      "rule": "Tip your driver",
      "desc": "After 9 days on mountain roads, a €20–50 tip is customary and appreciated."
    }
  ]
};
