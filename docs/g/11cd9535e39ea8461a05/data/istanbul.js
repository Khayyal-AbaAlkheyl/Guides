/**
 * DISCOVER Istanbul — 7-Day Premium Itinerary
 * Real place photos via Wikimedia Commons (CC-licensed)
 */
const PLAN = {
  "meta": {
    "city": "Istanbul",
    "country": "Turkey",
    "tagline": "Byzantine domes, Ottoman palaces and two continents — seven premium days.",
    "badge": "Discover · 2026 Edition",
    "edition": "2026",
    "stats": {
      "chapters": 44,
      "qrCodes": "150+",
      "attractions": 24,
      "hotels": 12,
      "dining": 21,
      "days": 7
    },
    "theme": {
      "accent": "#0d9488",
      "accentSoft": "#ccfbf1",
      "accentDeep": "#0f766e",
      "heroImage": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Topkap%C4%B1_-_01.jpg/960px-Topkap%C4%B1_-_01.jpg",
      "transitLabel": "Metro",
      "tube": "#0d9488",
      "parks": "#2d6a4f",
      "river": "#0077b6",
      "gold": "#b8860b",
      "navy": "#1a2744"
    }
  },
  "welcome": {
    "editorLetter": "Istanbul is the only city on Earth that straddles two continents — and it wears its 2,700 years lightly. Byzantine cathedrals became imperial mosques, Ottoman sultans built palaces along the Bosphorus, and today ferries still shuttle between Europe and Asia while gulls trail the wake. This seven-day companion follows a premium itinerary built for discerning travellers: every hour mapped, every monument, hotel and restaurant carrying a scannable link.\n\nWalk the Historic Peninsula, cruise the Bosphorus, cross to the Asian side, and lose yourself in Balat's rainbow lanes. From Hagia Sophia to a rooftop dinner at Mikla, this is Istanbul at its most memorable.",
    "howToUse": "Point your phone camera at any QR code and the location opens in Google Maps in one tap. Every booking and official website link is clickable in the PDF. Colour-coded day chapters make navigation effortless — plan around prayer times and museum closing days noted in each entry.\n\n— The Editors, Istanbul Bureau"
  },
  "essentials": {
    "currency": {
      "label": "₺ Turkish Lira",
      "note": "Cards accepted almost everywhere. Carry cash for bazaars, street food and small cafés."
    },
    "power": {
      "label": "Type C/F · 230V",
      "note": "European two-pin plug. Bring a universal adapter."
    },
    "sim": {
      "label": "eSIM or Turkcell",
      "note": "Turkcell, Vodafone and Türk Telekom at IST airport. eSIM activates on landing Wi-Fi."
    },
    "language": {
      "label": "Turkish",
      "note": "English widely spoken in tourist areas. Learn merhaba and teşekkürler — locals appreciate the effort."
    },
    "tipping": {
      "label": "10% or round up",
      "note": "Appreciated in restaurants and by guides. Round up taxi fares."
    },
    "emergency": {
      "label": "112 · 155 · 110",
      "note": "All emergencies · Police · Fire."
    },
    "tapWater": {
      "label": "Not recommended",
      "note": "Drink bottled water. Tap water is safe for brushing teeth only."
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
      "desc": "Istanbul Airport (IST) on the European side handles most international flights; Sabiha Gökçen (SAW) serves the Asian side. e-Visa for most nationalities — apply online before travel. GCC citizens: most enter visa-free or on e-Visa."
    },
    {
      "step": "02",
      "title": "SIM / eSIM",
      "desc": "Activate your eSIM on airport Wi-Fi, or buy a Turkcell tourist SIM at arrivals (≈₺1,000 for 20GB). Passport required to register."
    },
    {
      "step": "03",
      "title": "Cash",
      "desc": "Withdraw ₺2,000–4,000 from a Ziraat, İş Bankası or Garanti ATM. Avoid airport FX booths — poor rates."
    },
    {
      "step": "04",
      "title": "İstanbulkart",
      "desc": "Buy an İstanbulkart at the airport metro or any kiosk (₺130 + top-up). One card covers metro, tram, ferry, funicular and bus."
    },
    {
      "step": "05",
      "title": "Airport transfer",
      "desc": "IST: M11 metro to city, or HAVAIST bus (₺160), or taxi ₺900–1,400 (45–60 min). SAW: taxi ₺700–1,100 or HAVABUS."
    },
    {
      "step": "06",
      "title": "Hotel",
      "desc": "Check-in from 14:00. Most Karaköy and Sultanahmet hotels hold luggage from morning — drop bags and start exploring."
    },
    {
      "step": "07",
      "title": "First meal",
      "desc": "Head to Namlı Gurme in Karaköy or Seven Hills in Sultanahmet for a full Turkish breakfast and your first çay."
    }
  ],
  "packing": {
    "spring": {
      "months": "MAR–MAY",
      "temp": "10–20 °C · showers likely",
      "items": [
        "Light rain jacket",
        "Layerable knit",
        "Comfortable walking shoes",
        "Compact umbrella",
        "Scarf for mosques",
        "Sunglasses"
      ]
    },
    "summer": {
      "months": "JUN–AUG",
      "temp": "22–30 °C · warm & humid",
      "items": [
        "Light breathable layers",
        "Walking sandals",
        "Sunscreen SPF 30",
        "Refillable bottle",
        "Scarf/shawl for mosques",
        "Sun hat"
      ]
    },
    "autumn": {
      "months": "SEP–NOV",
      "temp": "12–22 °C · golden light",
      "items": [
        "Light trench",
        "Layerable tops",
        "Umbrella",
        "Comfortable shoes",
        "Warm layer for evenings",
        "Camera"
      ]
    },
    "winter": {
      "months": "DEC–FEB",
      "temp": "5–12 °C · rain & occasional snow",
      "items": [
        "Warm waterproof coat",
        "Jumper layers",
        "Waterproof shoes",
        "Beanie & gloves",
        "Umbrella",
        "Scarf for mosques"
      ]
    }
  },
  "weatherTable": {
    "rows": [
      {
        "month": "Jan",
        "avgTemp": "3 / 9 °C",
        "rain": "55%",
        "sunset": "17:20",
        "crowds": "Low",
        "recommend": "Museums · hammam · covered bazaars"
      },
      {
        "month": "Feb",
        "avgTemp": "3 / 10 °C",
        "rain": "50%",
        "sunset": "17:55",
        "crowds": "Low",
        "recommend": "Palaces · fewer queues"
      },
      {
        "month": "Mar",
        "avgTemp": "5 / 12 °C",
        "rain": "50%",
        "sunset": "18:35",
        "crowds": "Rising",
        "recommend": "City walks · shoulder prices"
      },
      {
        "month": "Apr",
        "avgTemp": "9 / 17 °C",
        "rain": "45%",
        "sunset": "19:45",
        "crowds": "Medium",
        "recommend": "Tulip season · Emirgan Park"
      },
      {
        "month": "May",
        "avgTemp": "13 / 22 °C",
        "rain": "40%",
        "sunset": "20:15",
        "crowds": "High",
        "recommend": "Perfect Bosphorus weather"
      },
      {
        "month": "Jun",
        "avgTemp": "18 / 27 °C",
        "rain": "30%",
        "sunset": "20:40",
        "crowds": "High",
        "recommend": "Long days · cruises"
      },
      {
        "month": "Jul",
        "avgTemp": "21 / 29 °C",
        "rain": "20%",
        "sunset": "20:45",
        "crowds": "Peak",
        "recommend": "Early starts · shade & ferries"
      },
      {
        "month": "Aug",
        "avgTemp": "21 / 30 °C",
        "rain": "20%",
        "sunset": "20:15",
        "crowds": "Peak",
        "recommend": "Rooftop dining · Asian side"
      },
      {
        "month": "Sep",
        "avgTemp": "18 / 26 °C",
        "rain": "35%",
        "sunset": "19:25",
        "crowds": "High",
        "recommend": "Best month overall"
      },
      {
        "month": "Oct",
        "avgTemp": "14 / 21 °C",
        "rain": "55%",
        "sunset": "18:25",
        "crowds": "Medium",
        "recommend": "Autumn light · comfortable walking"
      },
      {
        "month": "Nov",
        "avgTemp": "10 / 16 °C",
        "rain": "60%",
        "sunset": "17:05",
        "crowds": "Low",
        "recommend": "Cosy meyhane evenings"
      },
      {
        "month": "Dec",
        "avgTemp": "6 / 12 °C",
        "rain": "60%",
        "sunset": "16:45",
        "crowds": "Low",
        "recommend": "Festive lights · indoor sights"
      }
    ],
    "sweetSpot": "April–May and September–October deliver the finest Istanbul: comfortable walking weather, glowing light on the Bosphorus, and manageable queues at Hagia Sophia and Topkapı. July–August is hot and humid but magnificent on the water — start early and retreat to ferries and rooftops in the afternoon heat."
  },
  "transport": {
    "modes": [
      {
        "icon": "walk",
        "name": "Walk",
        "price": "Free",
        "desc": "Sultanahmet, Karaköy and Galata are compact and best explored on foot — expect hills."
      },
      {
        "icon": "metro",
        "name": "Tram & Metro",
        "price": "₺27 per ride",
        "desc": "T1 tram links Sultanahmet, Eminönü and Kabataş. Metro lines reach the airport and new districts. Use İstanbulkart."
      },
      {
        "icon": "ferry",
        "name": "Ferry",
        "price": "₺27–150",
        "desc": "The best way to cross the Bosphorus. Şehir Hatları ferries link Eminönü, Karaköy, Üsküdar and Kadıköy."
      },
      {
        "icon": "cab",
        "name": "Taxi",
        "price": "₺150–500",
        "desc": "Yellow taxis metered. Use BiTaksi or Uber to avoid disputes. Confirm the meter is running."
      },
      {
        "icon": "uber",
        "name": "BiTaksi / Uber",
        "price": "₺120–450",
        "desc": "App-based rides connect to licensed taxis — best for evenings and cross-city hops."
      },
      {
        "icon": "metro",
        "name": "Funicular & Cable Car",
        "price": "₺27",
        "desc": "Tünel and F1 funiculars climb the hills; teleferik serves Eyüp and Pierre Loti."
      }
    ],
    "oysterTips": [
      {
        "title": "Get an İstanbulkart",
        "desc": "One rechargeable card covers tram, metro, ferry, funicular and bus — and gives transfer discounts. Buy at any kiosk or machine."
      },
      {
        "title": "Cross by ferry, not bridge",
        "desc": "For Üsküdar and Kadıköy take the ferry — cheaper, faster and far more scenic than a taxi over the bridge."
      },
      {
        "title": "Tram for the Peninsula",
        "desc": "The T1 tram threads Sultanahmet, Grand Bazaar, Eminönü and Kabataş — perfect for Days 1–2 and 4."
      },
      {
        "title": "Avoid rush-hour taxis",
        "desc": "Istanbul traffic is severe 08:00–10:00 and 17:00–20:00. Use rail and ferries at peak times."
      }
    ],
    "exit6Tip": "Step off the ferry at Eminönü and the whole Historic Peninsula rises before you — the New Mosque, the Spice Bazaar, and Süleymaniye crowning the hill. Grab a balık ekmek fish sandwich from the quay and let the city announce itself."
  },
  "maps": {
    "overview": {
      "caption": "A schematic map — for exact directions, scan any QR code in this guide.",
      "markers": [
        {
          "name": "Hagia Sophia",
          "type": "attraction",
          "lat": 41.0086,
          "lng": 28.9802
        },
        {
          "name": "Blue Mosque",
          "type": "attraction",
          "lat": 41.0054,
          "lng": 28.9768
        },
        {
          "name": "Topkapı Palace",
          "type": "attraction",
          "lat": 41.0115,
          "lng": 28.9834
        },
        {
          "name": "Grand Bazaar",
          "type": "attraction",
          "lat": 41.0106,
          "lng": 28.9681
        },
        {
          "name": "Galata Tower",
          "type": "attraction",
          "lat": 41.0256,
          "lng": 28.9744
        },
        {
          "name": "Dolmabahçe Palace",
          "type": "attraction",
          "lat": 41.0391,
          "lng": 29.0001
        },
        {
          "name": "Ortaköy Mosque",
          "type": "attraction",
          "lat": 41.0473,
          "lng": 29.0269
        },
        {
          "name": "Maiden's Tower",
          "type": "attraction",
          "lat": 41.0211,
          "lng": 29.0041
        },
        {
          "name": "Karaköy",
          "type": "district",
          "lat": 41.0256,
          "lng": 28.9744
        },
        {
          "name": "The Peninsula Istanbul",
          "type": "hotel",
          "lat": 41.0248,
          "lng": 28.977
        },
        {
          "name": "Çırağan Palace Kempinski",
          "type": "hotel",
          "lat": 41.0442,
          "lng": 29.0136
        },
        {
          "name": "Hamdi Restaurant",
          "type": "dining",
          "lat": 41.017,
          "lng": 28.9709
        },
        {
          "name": "Mikla",
          "type": "dining",
          "lat": 41.0316,
          "lng": 28.9756
        }
      ]
    }
  },
  "attractions": [
    {
      "name": "Hagia Sophia",
      "address": "Sultanahmet Meydanı · Fatih · 34122",
      "hours": "09:00–19:00 · closed Fri prayer 12:30–14:30",
      "tube": "Tram T1 · Sultanahmet · 2 min walk",
      "ticket": "Free entry · mosque dress code applies",
      "bestArrival": "09:00",
      "waitSummer": "20–45 min security",
      "waitWinter": "10–20 min",
      "photoSpot": "From Sultanahmet Square — full dome and minarets at golden hour.",
      "lens": "16–35mm",
      "tip": "Arrive at opening. Remove shoes, women need headscarf. Byzantine mosaics meet Ottoman calligraphy — allow 90 minutes.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Hagia%20Sophia%20Istanbul",
      "bookUrl": "https://ayasofyacamii.gov.tr/",
      "bookText": "Book Tickets",
      "avgVisit": "90 min",
      "crowd": {
        "morning": 3,
        "afternoon": 5,
        "evening": 4
      },
      "nearby": [
        {
          "name": "Blue Mosque",
          "walk": "3 min"
        },
        {
          "name": "Sultanahmet Square",
          "walk": "1 min"
        },
        {
          "name": "Basilica Cistern",
          "walk": "6 min"
        },
        {
          "name": "Seven Hills Restaurant",
          "walk": "2 min"
        }
      ],
      "nearbyCafes": "Hafız Mustafa · Sultanahmet Köftecisi",
      "nearbyRestaurants": "Seven Hills · Deraliye Ottoman Cuisine · Matbah",
      "nearbyTube": "Tram T1 · Sultanahmet · 2 min walk",
      "nearbyToilets": "On-site or nearby cafés and mosques.",
      "nearbyAtm": "Ziraat · İş Bankası · Garanti BBVA near tram stops",
      "didYouKnow": "Built in 537 AD as a Byzantine cathedral, it became a mosque in 1453 and served as a museum before reopening as a mosque in 2020.",
      "localSecret": "Look up at the Deësis mosaic in the upper gallery — one of the finest surviving Byzantine artworks in the world.",
      "instagram": {
        "sunset": "From Sultanahmet Square — full dome and minarets at golden hour.",
        "sunrise": "From Sultanahmet Square — full dome and minarets at golden hour.",
        "drone": "Restricted near airports and military zones — check DGCA rules",
        "settings": "f/8 · ISO 200 · 24–70mm"
      },
      "photos": {
        "hero": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Hagia_Sophia_%28228968325%29.jpeg/960px-Hagia_Sophia_%28228968325%29.jpeg",
        "detail": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Hagia_Sophia_Mars_2013.jpg/960px-Hagia_Sophia_Mars_2013.jpg",
        "photoSpot": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Hagia_Sophia_Istanbul_July_2022-2.jpg/960px-Hagia_Sophia_Istanbul_July_2022-2.jpg",
        "map": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Istanbul_Hagia_Sophia_IMG_8615_2050.jpg/960px-Istanbul_Hagia_Sophia_IMG_8615_2050.jpg",
        "heroPosition": "center 40%"
      },
      "seasonalPhotos": {
        "spring": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Hagia_Sophia_%28228968325%29.jpeg/960px-Hagia_Sophia_%28228968325%29.jpeg",
        "summer": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Hagia_Sophia_Mars_2013.jpg/960px-Hagia_Sophia_Mars_2013.jpg",
        "autumn": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Hagia_Sophia_Istanbul_July_2022-2.jpg/960px-Hagia_Sophia_Istanbul_July_2022-2.jpg",
        "christmas": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Istanbul_Hagia_Sophia_IMG_8615_2050.jpg/960px-Istanbul_Hagia_Sophia_IMG_8615_2050.jpg"
      }
    },
    {
      "name": "Blue Mosque",
      "address": "Sultanahmet Meydanı · Fatih · 34122",
      "hours": "Open outside prayer times · closed Fri 12:00–14:30",
      "tube": "Tram T1 · Sultanahmet",
      "ticket": "Free · donation welcome",
      "bestArrival": "10:45",
      "waitSummer": "15–30 min",
      "waitWinter": "5–10 min",
      "photoSpot": "From the fountain courtyard — six minarets and cascading domes.",
      "lens": "24mm interior · 16mm exterior",
      "tip": "Active mosque — dress modestly, remove shoes. Iznik tile interior glows in morning light. Check prayer schedule before visiting.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Blue%20Mosque%20Istanbul",
      "bookUrl": "https://www.google.com/maps/search/?api=1&query=Blue%20Mosque%20Istanbul",
      "bookText": "Book Tickets",
      "avgVisit": "45 min",
      "crowd": {
        "morning": 3,
        "afternoon": 4,
        "evening": 2
      },
      "nearby": [
        {
          "name": "Hagia Sophia",
          "walk": "3 min"
        },
        {
          "name": "German Fountain",
          "walk": "2 min"
        },
        {
          "name": "Arasta Bazaar",
          "walk": "5 min"
        }
      ],
      "nearbyCafes": "See dining chapter in this guide.",
      "nearbyRestaurants": "See dining chapter in this guide.",
      "nearbyTube": "Tram T1 · Sultanahmet",
      "nearbyToilets": "On-site or nearby cafés and mosques.",
      "nearbyAtm": "Ziraat · İş Bankası · Garanti BBVA near tram stops",
      "didYouKnow": "Sultan Ahmed I commissioned six minarets to rival Mecca — a scandal that required a seventh minaret be added to the Holy Mosque.",
      "localSecret": "The northwest corner courtyard offers the quietest entrance with fewer tour groups.",
      "instagram": {
        "sunset": "From the fountain courtyard — six minarets and cascading domes.",
        "sunrise": "From the fountain courtyard — six minarets and cascading domes.",
        "drone": "Restricted near airports and military zones — check DGCA rules",
        "settings": "f/8 · ISO 200 · 24–70mm"
      },
      "photos": {
        "hero": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Exterior_of_Sultan_Ahmed_I_Mosque_in_Istanbul%2C_Turkey_002.jpg/960px-Exterior_of_Sultan_Ahmed_I_Mosque_in_Istanbul%2C_Turkey_002.jpg",
        "detail": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Blue_Mosque_Courtyard_Dusk_Wikimedia_Commons.jpg/960px-Blue_Mosque_Courtyard_Dusk_Wikimedia_Commons.jpg",
        "photoSpot": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Sultan_Ahmet_Mosque_February_2013.jpg/960px-Sultan_Ahmet_Mosque_February_2013.jpg",
        "map": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Abdullah_fr%C3%A8res_-_Sultan_Ahmet_camii%2C_Istanbul.jpg/960px-Abdullah_fr%C3%A8res_-_Sultan_Ahmet_camii%2C_Istanbul.jpg",
        "heroPosition": "center 40%"
      },
      "seasonalPhotos": {
        "spring": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Exterior_of_Sultan_Ahmed_I_Mosque_in_Istanbul%2C_Turkey_002.jpg/960px-Exterior_of_Sultan_Ahmed_I_Mosque_in_Istanbul%2C_Turkey_002.jpg",
        "summer": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Blue_Mosque_Courtyard_Dusk_Wikimedia_Commons.jpg/960px-Blue_Mosque_Courtyard_Dusk_Wikimedia_Commons.jpg",
        "autumn": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Sultan_Ahmet_Mosque_February_2013.jpg/960px-Sultan_Ahmet_Mosque_February_2013.jpg",
        "christmas": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Abdullah_fr%C3%A8res_-_Sultan_Ahmet_camii%2C_Istanbul.jpg/960px-Abdullah_fr%C3%A8res_-_Sultan_Ahmet_camii%2C_Istanbul.jpg"
      }
    },
    {
      "name": "Sultanahmet Square",
      "address": "Hippodrome · Fatih · 34122",
      "hours": "Always open",
      "tube": "Tram T1 · Sultanahmet",
      "ticket": "Free",
      "bestArrival": "11:45",
      "photoSpot": "Egyptian Obelisk with Hagia Sophia dome behind.",
      "lens": "24–70mm",
      "tip": "Walk the full Hippodrome axis: German Fountain, Obelisk of Theodosius, Serpent Column, and Constantine Column.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Sultanahmet%20Square%20Istanbul",
      "bookUrl": "https://www.google.com/maps/search/?api=1&query=Sultanahmet%20Square%20Istanbul",
      "bookText": "Book Tickets",
      "avgVisit": "30 min",
      "crowd": {
        "morning": 3,
        "afternoon": 4,
        "evening": 2
      },
      "nearby": [
        {
          "name": "Hagia Sophia",
          "walk": "1 min"
        },
        {
          "name": "Blue Mosque",
          "walk": "2 min"
        },
        {
          "name": "Basilica Cistern",
          "walk": "5 min"
        }
      ],
      "nearbyCafes": "See dining chapter in this guide.",
      "nearbyRestaurants": "See dining chapter in this guide.",
      "nearbyTube": "Tram T1 · Sultanahmet",
      "nearbyToilets": "On-site or nearby cafés and mosques.",
      "nearbyAtm": "Ziraat · İş Bankası · Garanti BBVA near tram stops",
      "didYouKnow": "This was the centre of Byzantine Constantinople — chariot races once drew 100,000 spectators here.",
      "localSecret": "The bronze Serpent Column base still bears ancient Greek inscriptions most tourists walk past.",
      "instagram": {
        "sunset": "Egyptian Obelisk with Hagia Sophia dome behind.",
        "sunrise": "Egyptian Obelisk with Hagia Sophia dome behind.",
        "drone": "Restricted near airports and military zones — check DGCA rules",
        "settings": "f/8 · ISO 200 · 24–70mm"
      },
      "photos": {
        "hero": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Sultanahmet_Square%2C_Obelisk_of_Theodosius%2C_Istanbul_%2852121868925%29.jpg/960px-Sultanahmet_Square%2C_Obelisk_of_Theodosius%2C_Istanbul_%2852121868925%29.jpg",
        "detail": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Obelisk_of_Thutmosis_III%2C_Istanbul%2C_Turkey_001.jpg/960px-Obelisk_of_Thutmosis_III%2C_Istanbul%2C_Turkey_001.jpg",
        "photoSpot": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Obelisk_of_Theodosius%2C_Hippodrome_of_Constantinople%2C_Istanbul%2C_Turkey_%28Ank_Kumar%29_02.jpg/960px-Obelisk_of_Theodosius%2C_Hippodrome_of_Constantinople%2C_Istanbul%2C_Turkey_%28Ank_Kumar%29_02.jpg",
        "map": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Obelisk_of_Theodosius%2C_Hippodrome_of_Constantinople%2C_Istanbul%2C_Turkey_%28Ank_Kumar%29_04.jpg/960px-Obelisk_of_Theodosius%2C_Hippodrome_of_Constantinople%2C_Istanbul%2C_Turkey_%28Ank_Kumar%29_04.jpg",
        "heroPosition": "center 40%"
      },
      "seasonalPhotos": {
        "spring": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Sultanahmet_Square%2C_Obelisk_of_Theodosius%2C_Istanbul_%2852121868925%29.jpg/960px-Sultanahmet_Square%2C_Obelisk_of_Theodosius%2C_Istanbul_%2852121868925%29.jpg",
        "summer": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Obelisk_of_Thutmosis_III%2C_Istanbul%2C_Turkey_001.jpg/960px-Obelisk_of_Thutmosis_III%2C_Istanbul%2C_Turkey_001.jpg",
        "autumn": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Obelisk_of_Theodosius%2C_Hippodrome_of_Constantinople%2C_Istanbul%2C_Turkey_%28Ank_Kumar%29_02.jpg/960px-Obelisk_of_Theodosius%2C_Hippodrome_of_Constantinople%2C_Istanbul%2C_Turkey_%28Ank_Kumar%29_02.jpg",
        "christmas": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Obelisk_of_Theodosius%2C_Hippodrome_of_Constantinople%2C_Istanbul%2C_Turkey_%28Ank_Kumar%29_04.jpg/960px-Obelisk_of_Theodosius%2C_Hippodrome_of_Constantinople%2C_Istanbul%2C_Turkey_%28Ank_Kumar%29_04.jpg"
      }
    },
    {
      "name": "Basilica Cistern",
      "address": "Alemdar Mah. · Fatih · 34110",
      "hours": "09:00–19:00 · daily",
      "tube": "Tram T1 · Sultanahmet · 6 min walk",
      "ticket": "₺600 adult · book online",
      "bestArrival": "13:30",
      "waitSummer": "20–40 min",
      "waitWinter": "10–15 min",
      "photoSpot": "Medusa head column — atmospheric underground reflections.",
      "lens": "24mm · no flash",
      "tip": "Underground Byzantine reservoir with 336 marble columns. Cool in summer — bring a light layer. Medusa heads are at the far end.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Basilica%20Cistern%20Istanbul",
      "bookUrl": "https://www.yerebatan.com/",
      "bookText": "Book Tickets",
      "avgVisit": "45 min",
      "crowd": {
        "morning": 3,
        "afternoon": 4,
        "evening": 2
      },
      "nearby": [
        {
          "name": "Hagia Sophia",
          "walk": "6 min"
        },
        {
          "name": "Topkapı Palace",
          "walk": "8 min"
        },
        {
          "name": "Arasta Bazaar",
          "walk": "4 min"
        }
      ],
      "nearbyCafes": "See dining chapter in this guide.",
      "nearbyRestaurants": "See dining chapter in this guide.",
      "nearbyTube": "Tram T1 · Sultanahmet · 6 min walk",
      "nearbyToilets": "On-site or nearby cafés and mosques.",
      "nearbyAtm": "Ziraat · İş Bankası · Garanti BBVA near tram stops",
      "didYouKnow": "Built in the 6th century to store water for the Great Palace — it could hold 80,000 cubic metres.",
      "localSecret": "The \"Crying Column\" with its peacock-eye pattern is said to grant wishes if you rotate your thumb in the hole.",
      "instagram": {
        "sunset": "Medusa head column — atmospheric underground reflections.",
        "sunrise": "Medusa head column — atmospheric underground reflections.",
        "drone": "Restricted near airports and military zones — check DGCA rules",
        "settings": "f/8 · ISO 200 · 24–70mm"
      },
      "photos": {
        "hero": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Cisterna_Bas%C3%ADlica%2C_Estambul%2C_Turqu%C3%ADa%2C_2024-09-28%2C_DD_58-60_HDR.jpg/960px-Cisterna_Bas%C3%ADlica%2C_Estambul%2C_Turqu%C3%ADa%2C_2024-09-28%2C_DD_58-60_HDR.jpg",
        "detail": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Istanbul_Basilica_Cistern_2009.JPG/960px-Istanbul_Basilica_Cistern_2009.JPG",
        "photoSpot": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Peacock-eyed_column_in_the_Basilica_Cistern_in_Istanbul%2C_Turkey%2C_January_20%2C_2014.jpg/960px-Peacock-eyed_column_in_the_Basilica_Cistern_in_Istanbul%2C_Turkey%2C_January_20%2C_2014.jpg",
        "map": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Cistern_of_Philoxenos.JPG/960px-Cistern_of_Philoxenos.JPG",
        "heroPosition": "center 40%"
      },
      "seasonalPhotos": {
        "spring": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Cisterna_Bas%C3%ADlica%2C_Estambul%2C_Turqu%C3%ADa%2C_2024-09-28%2C_DD_58-60_HDR.jpg/960px-Cisterna_Bas%C3%ADlica%2C_Estambul%2C_Turqu%C3%ADa%2C_2024-09-28%2C_DD_58-60_HDR.jpg",
        "summer": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Istanbul_Basilica_Cistern_2009.JPG/960px-Istanbul_Basilica_Cistern_2009.JPG",
        "autumn": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Peacock-eyed_column_in_the_Basilica_Cistern_in_Istanbul%2C_Turkey%2C_January_20%2C_2014.jpg/960px-Peacock-eyed_column_in_the_Basilica_Cistern_in_Istanbul%2C_Turkey%2C_January_20%2C_2014.jpg",
        "christmas": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Cistern_of_Philoxenos.JPG/960px-Cistern_of_Philoxenos.JPG"
      }
    },
    {
      "name": "Topkapı Palace",
      "address": "Cankurtaran · Fatih · 34122",
      "hours": "09:00–18:00 · closed Tue",
      "tube": "Tram T1 · Sultanahmet · 8 min walk",
      "ticket": "₺750 palace · separate Harem ticket",
      "bestArrival": "09:30",
      "waitSummer": "30–60 min",
      "waitWinter": "15–25 min",
      "photoSpot": "Fourth courtyard terrace — Golden Horn and Bosphorus panorama.",
      "lens": "24–70mm",
      "tip": "Allow 3 hours for palace and Harem. Treasury and Spoonmaker Diamond are highlights. Buy Harem ticket at entrance or online.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Topkap%C4%B1%20Palace%20Istanbul",
      "bookUrl": "https://www.millisaraylar.gov.tr/",
      "bookText": "Book Tickets",
      "avgVisit": "3 hours",
      "crowd": {
        "morning": 2,
        "afternoon": 5,
        "evening": 3
      },
      "nearby": [
        {
          "name": "Imperial Harem",
          "walk": "Inside palace"
        },
        {
          "name": "Gülhane Park",
          "walk": "5 min"
        },
        {
          "name": "Sultanahmet Square",
          "walk": "10 min"
        }
      ],
      "nearbyCafes": "See dining chapter in this guide.",
      "nearbyRestaurants": "See dining chapter in this guide.",
      "nearbyTube": "Tram T1 · Sultanahmet · 8 min walk",
      "nearbyToilets": "On-site or nearby cafés and mosques.",
      "nearbyAtm": "Ziraat · İş Bankası · Garanti BBVA near tram stops",
      "didYouKnow": "Home to Ottoman sultans for 400 years — the palace complex has four courtyards and over 300 rooms.",
      "localSecret": "The Baghdad Pavilion in the fourth courtyard has the best Bosphorus views and fewest visitors.",
      "instagram": {
        "sunset": "Fourth courtyard terrace — Golden Horn and Bosphorus panorama.",
        "sunrise": "Fourth courtyard terrace — Golden Horn and Bosphorus panorama.",
        "drone": "Restricted near airports and military zones — check DGCA rules",
        "settings": "f/8 · ISO 200 · 24–70mm"
      },
      "photos": {
        "hero": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Topkap%C4%B1_-_01.jpg/960px-Topkap%C4%B1_-_01.jpg",
        "detail": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/View_from_the_Fourth_Courtyard_of_Topkap%C4%B1_Palace%2C_Istanbul_001.jpg/960px-View_from_the_Fourth_Courtyard_of_Topkap%C4%B1_Palace%2C_Istanbul_001.jpg",
        "photoSpot": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Grand_Kiosk_of_Topkap%C4%B1_Palace_in_Istanbul%2C_Turkey_002.jpg/960px-Grand_Kiosk_of_Topkap%C4%B1_Palace_in_Istanbul%2C_Turkey_002.jpg",
        "map": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Fourth_Courtyard_of_Topkap%C4%B1_Palace%2C_Istanbul%2C_Turkey_001.jpg/960px-Fourth_Courtyard_of_Topkap%C4%B1_Palace%2C_Istanbul%2C_Turkey_001.jpg",
        "heroPosition": "center 40%"
      },
      "seasonalPhotos": {
        "spring": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Topkap%C4%B1_-_01.jpg/960px-Topkap%C4%B1_-_01.jpg",
        "summer": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/View_from_the_Fourth_Courtyard_of_Topkap%C4%B1_Palace%2C_Istanbul_001.jpg/960px-View_from_the_Fourth_Courtyard_of_Topkap%C4%B1_Palace%2C_Istanbul_001.jpg",
        "autumn": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Grand_Kiosk_of_Topkap%C4%B1_Palace_in_Istanbul%2C_Turkey_002.jpg/960px-Grand_Kiosk_of_Topkap%C4%B1_Palace_in_Istanbul%2C_Turkey_002.jpg",
        "christmas": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Fourth_Courtyard_of_Topkap%C4%B1_Palace%2C_Istanbul%2C_Turkey_001.jpg/960px-Fourth_Courtyard_of_Topkap%C4%B1_Palace%2C_Istanbul%2C_Turkey_001.jpg"
      }
    },
    {
      "name": "Imperial Harem",
      "address": "Topkapı Palace · Fatih",
      "hours": "09:00–17:00 · last entry 16:00",
      "tube": "Tram T1 · Sultanahmet",
      "ticket": "₺425 separate · or combo ticket",
      "bestArrival": "12:45",
      "waitSummer": "20–30 min",
      "waitWinter": "10 min",
      "photoSpot": "Courtyard of the Black Eunuchs — tiled arches and marble.",
      "lens": "24mm · no flash indoors",
      "tip": "Separate timed entry within Topkapı. The tiled chambers and Privy Chamber of Murat III are unmissable. Allow 60–90 minutes.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Imperial%20Harem%20Istanbul",
      "bookUrl": "https://www.google.com/maps/search/?api=1&query=Imperial%20Harem%20Istanbul",
      "bookText": "Book Tickets",
      "avgVisit": "60–90 min",
      "crowd": {
        "morning": 3,
        "afternoon": 4,
        "evening": 2
      },
      "nearby": [
        {
          "name": "Topkapı Palace",
          "walk": "Inside complex"
        },
        {
          "name": "Pandeli Restaurant",
          "walk": "10 min"
        }
      ],
      "nearbyCafes": "See dining chapter in this guide.",
      "nearbyRestaurants": "See dining chapter in this guide.",
      "nearbyTube": "Tram T1 · Sultanahmet",
      "nearbyToilets": "On-site or nearby cafés and mosques.",
      "nearbyAtm": "Ziraat · İş Bankası · Garanti BBVA near tram stops",
      "didYouKnow": "At its peak the Harem housed over 400 women and was governed by the Valide Sultan — the sultan's mother.",
      "localSecret": "Visit right after lunch when tour groups leave for the Spice Bazaar — the tiled rooms are quieter.",
      "instagram": {
        "sunset": "Courtyard of the Black Eunuchs — tiled arches and marble.",
        "sunrise": "Courtyard of the Black Eunuchs — tiled arches and marble.",
        "drone": "Restricted near airports and military zones — check DGCA rules",
        "settings": "f/8 · ISO 200 · 24–70mm"
      },
      "photos": {
        "hero": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Topkap%C4%B1_-_01.jpg/960px-Topkap%C4%B1_-_01.jpg",
        "detail": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Istanbul_asv2020-02_img19_Topkap%C4%B1_Palace.jpg/960px-Istanbul_asv2020-02_img19_Topkap%C4%B1_Palace.jpg",
        "photoSpot": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Istanbul_asv2020-02_img26_Topkap%C4%B1_Palace.jpg/960px-Istanbul_asv2020-02_img26_Topkap%C4%B1_Palace.jpg",
        "map": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Harem_%28Topkapi_Palace%29_-_2014.10.23_%28114%29.JPG/960px-Harem_%28Topkapi_Palace%29_-_2014.10.23_%28114%29.JPG",
        "heroPosition": "center 40%"
      },
      "seasonalPhotos": {
        "spring": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Topkap%C4%B1_-_01.jpg/960px-Topkap%C4%B1_-_01.jpg",
        "summer": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Istanbul_asv2020-02_img19_Topkap%C4%B1_Palace.jpg/960px-Istanbul_asv2020-02_img19_Topkap%C4%B1_Palace.jpg",
        "autumn": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Istanbul_asv2020-02_img26_Topkap%C4%B1_Palace.jpg/960px-Istanbul_asv2020-02_img26_Topkap%C4%B1_Palace.jpg",
        "christmas": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Harem_%28Topkapi_Palace%29_-_2014.10.23_%28114%29.JPG/960px-Harem_%28Topkapi_Palace%29_-_2014.10.23_%28114%29.JPG"
      }
    },
    {
      "name": "Spice Bazaar",
      "address": "Rüstem Paşa · Fatih · 34116",
      "hours": "08:00–19:30 · closed Sun",
      "tube": "Tram T1 · Eminönü · 3 min walk",
      "ticket": "Free entry",
      "bestArrival": "15:00",
      "photoSpot": "Main vaulted hall — pyramids of spices and Turkish delight.",
      "lens": "35mm",
      "tip": "Smaller and more atmospheric than Grand Bazaar. Buy saffron, sumac, and lokum here. Vendors offer tastings — polite to buy something.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Spice%20Bazaar%20Istanbul",
      "bookUrl": "https://www.google.com/maps/search/?api=1&query=Spice%20Bazaar%20Istanbul",
      "bookText": "Book Tickets",
      "avgVisit": "45 min",
      "crowd": {
        "morning": 3,
        "afternoon": 4,
        "evening": 2
      },
      "nearby": [
        {
          "name": "Grand Bazaar",
          "walk": "12 min"
        },
        {
          "name": "New Mosque",
          "walk": "2 min"
        },
        {
          "name": "Galata Bridge",
          "walk": "8 min"
        }
      ],
      "nearbyCafes": "See dining chapter in this guide.",
      "nearbyRestaurants": "See dining chapter in this guide.",
      "nearbyTube": "Tram T1 · Eminönü · 3 min walk",
      "nearbyToilets": "On-site or nearby cafés and mosques.",
      "nearbyAtm": "Ziraat · İş Bankası · Garanti BBVA near tram stops",
      "didYouKnow": "Built in 1664 with revenues from Ottoman Egypt — locals still call it the Egyptian Bazaar.",
      "localSecret": "Arasta Bazaar behind the Blue Mosque is quieter with better textile prices.",
      "instagram": {
        "sunset": "Main vaulted hall — pyramids of spices and Turkish delight.",
        "sunrise": "Main vaulted hall — pyramids of spices and Turkish delight.",
        "drone": "Restricted near airports and military zones — check DGCA rules",
        "settings": "f/8 · ISO 200 · 24–70mm"
      },
      "photos": {
        "hero": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Spices_on_Spice_Bazaar_in_Istanbul_02.jpg/960px-Spices_on_Spice_Bazaar_in_Istanbul_02.jpg",
        "detail": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Spices_on_Spice_Bazaar_in_Istanbul_04.jpg/960px-Spices_on_Spice_Bazaar_in_Istanbul_04.jpg",
        "photoSpot": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Spices_on_Spice_Bazaar_in_Istanbul_03.jpg/960px-Spices_on_Spice_Bazaar_in_Istanbul_03.jpg",
        "map": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Sweets_on_Spice_Bazaar_in_Istanbul_02.jpg/960px-Sweets_on_Spice_Bazaar_in_Istanbul_02.jpg",
        "heroPosition": "center 40%"
      },
      "seasonalPhotos": {
        "spring": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Spices_on_Spice_Bazaar_in_Istanbul_02.jpg/960px-Spices_on_Spice_Bazaar_in_Istanbul_02.jpg",
        "summer": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Spices_on_Spice_Bazaar_in_Istanbul_04.jpg/960px-Spices_on_Spice_Bazaar_in_Istanbul_04.jpg",
        "autumn": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Spices_on_Spice_Bazaar_in_Istanbul_03.jpg/960px-Spices_on_Spice_Bazaar_in_Istanbul_03.jpg",
        "christmas": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Sweets_on_Spice_Bazaar_in_Istanbul_02.jpg/960px-Sweets_on_Spice_Bazaar_in_Istanbul_02.jpg"
      }
    },
    {
      "name": "Grand Bazaar",
      "address": "Beyazıt · Fatih · 34126",
      "hours": "08:30–19:00 · closed Sun",
      "tube": "Tram T1 · Beyazıt · 2 min walk",
      "ticket": "Free entry",
      "bestArrival": "16:30",
      "photoSpot": "Jewellery han entrance — vaulted ceilings and lantern light.",
      "lens": "24–35mm",
      "tip": "4,000 shops across 61 streets. Bargain politely — start at 50% of asking price. Gold and carpets need expertise; ceramics and lamps are safer buys.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Grand%20Bazaar%20Istanbul",
      "bookUrl": "https://www.google.com/maps/search/?api=1&query=Grand%20Bazaar%20Istanbul",
      "bookText": "Book Tickets",
      "avgVisit": "90 min",
      "crowd": {
        "morning": 3,
        "afternoon": 4,
        "evening": 2
      },
      "nearby": [
        {
          "name": "Spice Bazaar",
          "walk": "12 min"
        },
        {
          "name": "Süleymaniye Mosque",
          "walk": "10 min"
        },
        {
          "name": "Nuruosmaniye Mosque",
          "walk": "5 min"
        }
      ],
      "nearbyCafes": "See dining chapter in this guide.",
      "nearbyRestaurants": "See dining chapter in this guide.",
      "nearbyTube": "Tram T1 · Beyazıt · 2 min walk",
      "nearbyToilets": "On-site or nearby cafés and mosques.",
      "nearbyAtm": "Ziraat · İş Bankası · Garanti BBVA near tram stops",
      "didYouKnow": "One of the oldest covered markets in the world — trading here since 1461.",
      "localSecret": "Ferace Street on the periphery has better prices than the main tourist corridors.",
      "instagram": {
        "sunset": "Jewellery han entrance — vaulted ceilings and lantern light.",
        "sunrise": "Jewellery han entrance — vaulted ceilings and lantern light.",
        "drone": "Restricted near airports and military zones — check DGCA rules",
        "settings": "f/8 · ISO 200 · 24–70mm"
      },
      "photos": {
        "hero": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Istanbul_asv2021-11_img41_Grand_Bazaar.jpg/960px-Istanbul_asv2021-11_img41_Grand_Bazaar.jpg",
        "detail": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Istanbul_-_Grand_Bazaar_%2855107617958%29.jpg/960px-Istanbul_-_Grand_Bazaar_%2855107617958%29.jpg",
        "photoSpot": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Istanbul_-_Grand_Bazaar_%2855106527962%29.jpg/960px-Istanbul_-_Grand_Bazaar_%2855106527962%29.jpg",
        "map": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Istanbul_-_Grand_Bazaar_%2855105990794%29.jpg/960px-Istanbul_-_Grand_Bazaar_%2855105990794%29.jpg",
        "heroPosition": "center 40%"
      },
      "seasonalPhotos": {
        "spring": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Istanbul_asv2021-11_img41_Grand_Bazaar.jpg/960px-Istanbul_asv2021-11_img41_Grand_Bazaar.jpg",
        "summer": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Istanbul_-_Grand_Bazaar_%2855107617958%29.jpg/960px-Istanbul_-_Grand_Bazaar_%2855107617958%29.jpg",
        "autumn": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Istanbul_-_Grand_Bazaar_%2855106527962%29.jpg/960px-Istanbul_-_Grand_Bazaar_%2855106527962%29.jpg",
        "christmas": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Istanbul_-_Grand_Bazaar_%2855105990794%29.jpg/960px-Istanbul_-_Grand_Bazaar_%2855105990794%29.jpg"
      }
    },
    {
      "name": "Süleymaniye Mosque",
      "address": "Prof. Sıddık Sami Onar Cd. · Fatih · 34116",
      "hours": "Open outside prayer · closed Fri 12:00–14:30",
      "tube": "Tram T1 · Vefa · 8 min walk",
      "ticket": "Free",
      "bestArrival": "18:30",
      "photoSpot": "From the terrace — Golden Horn sunset with domes in foreground.",
      "lens": "16–35mm",
      "tip": "Mimar Sinan's masterpiece — quieter than Blue Mosque with equal grandeur. Combine with sunset over Golden Horn.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=S%C3%BCleymaniye%20Mosque%20Istanbul",
      "bookUrl": "https://www.google.com/maps/search/?api=1&query=S%C3%BCleymaniye%20Mosque%20Istanbul",
      "bookText": "Book Tickets",
      "avgVisit": "45 min",
      "crowd": {
        "morning": 2,
        "afternoon": 3,
        "evening": 4
      },
      "nearby": [
        {
          "name": "Grand Bazaar",
          "walk": "10 min"
        },
        {
          "name": "Hamdi Restaurant",
          "walk": "12 min"
        },
        {
          "name": "Galata Bridge",
          "walk": "15 min"
        }
      ],
      "nearbyCafes": "See dining chapter in this guide.",
      "nearbyRestaurants": "See dining chapter in this guide.",
      "nearbyTube": "Tram T1 · Vefa · 8 min walk",
      "nearbyToilets": "On-site or nearby cafés and mosques.",
      "nearbyAtm": "Ziraat · İş Bankası · Garanti BBVA near tram stops",
      "didYouKnow": "Sinan considered this his finest work — the dome is nearly as large as Hagia Sophia's.",
      "localSecret": "The cemetery behind the mosque holds Sinan's tomb and offers a peaceful Golden Horn viewpoint.",
      "instagram": {
        "sunset": "From the terrace — Golden Horn sunset with domes in foreground.",
        "sunrise": "From the terrace — Golden Horn sunset with domes in foreground.",
        "drone": "Restricted near airports and military zones — check DGCA rules",
        "settings": "f/8 · ISO 200 · 24–70mm"
      },
      "photos": {
        "hero": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/S%C3%BCleymaniye_Mosque_February_2013_01.jpg/960px-S%C3%BCleymaniye_Mosque_February_2013_01.jpg",
        "detail": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Cour_mosquee_Suleymaniye_Istanbul.jpg/960px-Cour_mosquee_Suleymaniye_Istanbul.jpg",
        "photoSpot": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Chandelier_inside_S%C3%BCleymaniye_Mosque.JPG/960px-Chandelier_inside_S%C3%BCleymaniye_Mosque.JPG",
        "map": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/S%C3%BCleymaniye_Mosque%2C_Istanbul%2C_20260606_0805_1307.jpg/960px-S%C3%BCleymaniye_Mosque%2C_Istanbul%2C_20260606_0805_1307.jpg",
        "heroPosition": "center 40%"
      },
      "seasonalPhotos": {
        "spring": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/S%C3%BCleymaniye_Mosque_February_2013_01.jpg/960px-S%C3%BCleymaniye_Mosque_February_2013_01.jpg",
        "summer": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Cour_mosquee_Suleymaniye_Istanbul.jpg/960px-Cour_mosquee_Suleymaniye_Istanbul.jpg",
        "autumn": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Chandelier_inside_S%C3%BCleymaniye_Mosque.JPG/960px-Chandelier_inside_S%C3%BCleymaniye_Mosque.JPG",
        "christmas": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/S%C3%BCleymaniye_Mosque%2C_Istanbul%2C_20260606_0805_1307.jpg/960px-S%C3%BCleymaniye_Mosque%2C_Istanbul%2C_20260606_0805_1307.jpg"
      }
    },
    {
      "name": "Galata Bridge",
      "address": "Eminönü–Karaköy · Golden Horn",
      "hours": "Always open · fishermen 24h",
      "tube": "Tram T1 · Eminönü or Karaköy",
      "ticket": "Free",
      "bestArrival": "21:00",
      "photoSpot": "Lower level seafood restaurants — fishing rods and mosque silhouettes.",
      "lens": "35mm · 50mm",
      "tip": "Walk the lower level at night for balık ekmek stalls and fisherman atmosphere. Upper level has tram and pedestrian walkway.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Galata%20Bridge%20Istanbul",
      "bookUrl": "https://www.google.com/maps/search/?api=1&query=Galata%20Bridge%20Istanbul",
      "bookText": "Book Tickets",
      "avgVisit": "30 min",
      "crowd": {
        "morning": 3,
        "afternoon": 4,
        "evening": 2
      },
      "nearby": [
        {
          "name": "Spice Bazaar",
          "walk": "8 min"
        },
        {
          "name": "Galata Tower",
          "walk": "12 min uphill"
        },
        {
          "name": "Hamdi Restaurant",
          "walk": "10 min"
        }
      ],
      "nearbyCafes": "See dining chapter in this guide.",
      "nearbyRestaurants": "See dining chapter in this guide.",
      "nearbyTube": "Tram T1 · Eminönü or Karaköy",
      "nearbyToilets": "On-site or nearby cafés and mosques.",
      "nearbyAtm": "Ziraat · İş Bankası · Garanti BBVA near tram stops",
      "didYouKnow": "The current bridge dates to 1994 — the fifth bridge at this strategic Golden Horn crossing.",
      "localSecret": "Sunset from Karaköy side looking toward Süleymaniye is one of Istanbul's most underrated free views.",
      "instagram": {
        "sunset": "Lower level seafood restaurants — fishing rods and mosque silhouettes.",
        "sunrise": "Lower level seafood restaurants — fishing rods and mosque silhouettes.",
        "drone": "Restricted near airports and military zones — check DGCA rules",
        "settings": "f/8 · ISO 200 · 24–70mm"
      },
      "photos": {
        "hero": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Galata_Bridge_from_Galata_Tower.JPG/960px-Galata_Bridge_from_Galata_Tower.JPG",
        "detail": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Fishermen_on_Galata_Bridge.JPG/960px-Fishermen_on_Galata_Bridge.JPG",
        "photoSpot": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Galata_Bridge_Fishermen_%28204332159%29.jpeg/960px-Galata_Bridge_Fishermen_%28204332159%29.jpeg",
        "map": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Galata_bridge_fishermen_3.jpg/960px-Galata_bridge_fishermen_3.jpg",
        "heroPosition": "center 40%"
      },
      "seasonalPhotos": {
        "spring": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Galata_Bridge_from_Galata_Tower.JPG/960px-Galata_Bridge_from_Galata_Tower.JPG",
        "summer": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Fishermen_on_Galata_Bridge.JPG/960px-Fishermen_on_Galata_Bridge.JPG",
        "autumn": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Galata_Bridge_Fishermen_%28204332159%29.jpeg/960px-Galata_Bridge_Fishermen_%28204332159%29.jpeg",
        "christmas": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Galata_bridge_fishermen_3.jpg/960px-Galata_bridge_fishermen_3.jpg"
      }
    },
    {
      "name": "Galata Tower",
      "address": "Bereketzade · Beyoğlu · 34421",
      "hours": "08:30–23:00",
      "tube": "Metro M2 · Şişhane · 5 min walk",
      "ticket": "₺650 adult · book online",
      "bestArrival": "09:30",
      "waitSummer": "30–60 min",
      "waitWinter": "15–25 min",
      "photoSpot": "Observation deck — 360° views of Golden Horn and Bosphorus.",
      "lens": "24mm",
      "tip": "Book timed entry online. Early morning has clearest views before haze. Elevator plus stairs to top.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Galata%20Tower%20Istanbul",
      "bookUrl": "https://www.galataport.com/",
      "bookText": "Book Tickets",
      "avgVisit": "60 min",
      "crowd": {
        "morning": 3,
        "afternoon": 4,
        "evening": 2
      },
      "nearby": [
        {
          "name": "Galataport",
          "walk": "8 min"
        },
        {
          "name": "Istiklal Street",
          "walk": "10 min"
        },
        {
          "name": "Petra Roasting Co.",
          "walk": "5 min"
        }
      ],
      "nearbyCafes": "See dining chapter in this guide.",
      "nearbyRestaurants": "See dining chapter in this guide.",
      "nearbyTube": "Metro M2 · Şişhane · 5 min walk",
      "nearbyToilets": "On-site or nearby cafés and mosques.",
      "nearbyAtm": "Ziraat · İş Bankası · Garanti BBVA near tram stops",
      "didYouKnow": "Built in 1348 by Genoese merchants — it once dominated the Genoese colony of Galata.",
      "localSecret": "Walk down the side streets toward Karaköy for street art and boutique cafés away from tower crowds.",
      "instagram": {
        "sunset": "Observation deck — 360° views of Golden Horn and Bosphorus.",
        "sunrise": "Observation deck — 360° views of Golden Horn and Bosphorus.",
        "drone": "Restricted near airports and military zones — check DGCA rules",
        "settings": "f/8 · ISO 200 · 24–70mm"
      },
      "photos": {
        "hero": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Galata_tower_01_23.jpg/960px-Galata_tower_01_23.jpg",
        "detail": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/20101106_Galata_Tower_Istanbul_Turkey_Panorama.jpg/960px-20101106_Galata_Tower_Istanbul_Turkey_Panorama.jpg",
        "photoSpot": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Ceiling_of_Galata_Tower.jpg/960px-Ceiling_of_Galata_Tower.jpg",
        "map": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Galata_Tower_January_2015.JPG/960px-Galata_Tower_January_2015.JPG",
        "heroPosition": "center 40%"
      },
      "seasonalPhotos": {
        "spring": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Galata_tower_01_23.jpg/960px-Galata_tower_01_23.jpg",
        "summer": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/20101106_Galata_Tower_Istanbul_Turkey_Panorama.jpg/960px-20101106_Galata_Tower_Istanbul_Turkey_Panorama.jpg",
        "autumn": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Ceiling_of_Galata_Tower.jpg/960px-Ceiling_of_Galata_Tower.jpg",
        "christmas": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Galata_Tower_January_2015.JPG/960px-Galata_Tower_January_2015.JPG"
      }
    },
    {
      "name": "Galataport",
      "address": "Kılıçali Paşa · Karaköy · 34425",
      "hours": "10:00–22:00 · shops & dining",
      "tube": "Tram T1 · Karaköy · 3 min walk",
      "ticket": "Free entry",
      "bestArrival": "15:00",
      "photoSpot": "Waterfront promenade — cruise ships and Galata Tower backdrop.",
      "lens": "24–70mm",
      "tip": "Modern waterfront development with museums, dining, and cruise terminal. Peninsula Hotel sits at the entrance. Good rainy-day option.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Galataport%20Istanbul",
      "bookUrl": "https://www.google.com/maps/search/?api=1&query=Galataport%20Istanbul",
      "bookText": "Book Tickets",
      "avgVisit": "90 min",
      "crowd": {
        "morning": 3,
        "afternoon": 4,
        "evening": 2
      },
      "nearby": [
        {
          "name": "Galata Tower",
          "walk": "8 min"
        },
        {
          "name": "The Peninsula Istanbul",
          "walk": "2 min"
        },
        {
          "name": "Karaköy Lokantası",
          "walk": "5 min"
        }
      ],
      "nearbyCafes": "See dining chapter in this guide.",
      "nearbyRestaurants": "See dining chapter in this guide.",
      "nearbyTube": "Tram T1 · Karaköy · 3 min walk",
      "nearbyToilets": "On-site or nearby cafés and mosques.",
      "nearbyAtm": "Ziraat · İş Bankası · Garanti BBVA near tram stops",
      "didYouKnow": "Opened in 2021 on the historic Ottoman passenger port — Istanbul Modern relocated here.",
      "localSecret": "The underground cruise terminal roof is a landscaped park most visitors miss.",
      "instagram": {
        "sunset": "Waterfront promenade — cruise ships and Galata Tower backdrop.",
        "sunrise": "Waterfront promenade — cruise ships and Galata Tower backdrop.",
        "drone": "Restricted near airports and military zones — check DGCA rules",
        "settings": "f/8 · ISO 200 · 24–70mm"
      },
      "photos": {
        "hero": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Overview_of_Galataport_from_Cihangir_showing_Istanbul_Painting_and_Sculpture_Museum_on_left_and_Nusretiye_Mosque_on_right_with_Asian_shore_and_Princes%27_Islands_in_the_background.jpg/960px-thumbnail.jpg",
        "detail": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Galataport_night.jpg/960px-Galataport_night.jpg",
        "photoSpot": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Beymen_department_store_Galataport_1.jpg/960px-Beymen_department_store_Galataport_1.jpg",
        "map": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Beymen_department_store_Galataport_2.jpg/960px-Beymen_department_store_Galataport_2.jpg",
        "heroPosition": "center 40%"
      },
      "seasonalPhotos": {
        "spring": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Overview_of_Galataport_from_Cihangir_showing_Istanbul_Painting_and_Sculpture_Museum_on_left_and_Nusretiye_Mosque_on_right_with_Asian_shore_and_Princes%27_Islands_in_the_background.jpg/960px-thumbnail.jpg",
        "summer": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Galataport_night.jpg/960px-Galataport_night.jpg",
        "autumn": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Beymen_department_store_Galataport_1.jpg/960px-Beymen_department_store_Galataport_1.jpg",
        "christmas": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Beymen_department_store_Galataport_2.jpg/960px-Beymen_department_store_Galataport_2.jpg"
      }
    },
    {
      "name": "Bosphorus Cruise",
      "address": "Eminönü or Kabataş piers · departures hourly",
      "hours": "Short tours 10:00–17:00 · full day seasonal",
      "tube": "Tram T1 · Eminönü · Kabataş ferry",
      "ticket": "₺150–₺600 · public ferry or private",
      "bestArrival": "17:00",
      "waitSummer": "Book ahead for sunset",
      "waitWinter": "Walk-on often OK",
      "photoSpot": "Upper deck passing Ortaköy Mosque — classic Istanbul silhouette.",
      "lens": "70–200mm from deck",
      "tip": "Public Şehir Hatları ferry is best value. Short tour to second bridge and back takes 90 min. Sunset departures sell out in summer.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Bosphorus%20Cruise%20Istanbul",
      "bookUrl": "https://www.sehirhatlari.istanbul/",
      "bookText": "Book Tickets",
      "avgVisit": "90 min–2 hours",
      "crowd": {
        "morning": 3,
        "afternoon": 4,
        "evening": 2
      },
      "nearby": [
        {
          "name": "Galataport",
          "walk": "10 min"
        },
        {
          "name": "Ortaköy Mosque",
          "walk": "Ferry stop"
        },
        {
          "name": "Dolmabahçe Palace",
          "walk": "Ferry stop"
        }
      ],
      "nearbyCafes": "See dining chapter in this guide.",
      "nearbyRestaurants": "See dining chapter in this guide.",
      "nearbyTube": "Tram T1 · Eminönü · Kabataş ferry",
      "nearbyToilets": "On-site or nearby cafés and mosques.",
      "nearbyAtm": "Ziraat · İş Bankası · Garanti BBVA near tram stops",
      "didYouKnow": "The Bosphorus strait divides Europe and Asia — Napoleon called Istanbul \"the queen of cities\" from these waters.",
      "localSecret": "Take the full public ferry to Anadolu Kavağı for village fish lunch — far better than tourist loop boats.",
      "instagram": {
        "sunset": "Upper deck passing Ortaköy Mosque — classic Istanbul silhouette.",
        "sunrise": "Upper deck passing Ortaköy Mosque — classic Istanbul silhouette.",
        "drone": "Restricted near airports and military zones — check DGCA rules",
        "settings": "f/8 · ISO 200 · 24–70mm"
      },
      "photos": {
        "hero": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Istanbul_Bosphorus_Cruise_ship_Ruby_Princess_IMG_7920_1920.jpg/960px-Istanbul_Bosphorus_Cruise_ship_Ruby_Princess_IMG_7920_1920.jpg",
        "detail": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Istanbul_Bosphorus_Cruise_ship_Ruby_Princess_IMG_7538_1800.jpg/960px-Istanbul_Bosphorus_Cruise_ship_Ruby_Princess_IMG_7538_1800.jpg",
        "photoSpot": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Istanbul_Bosphorus_Cruise_ship_Costa_Fascinosa_IMG_7437_1800.jpg/960px-Istanbul_Bosphorus_Cruise_ship_Costa_Fascinosa_IMG_7437_1800.jpg",
        "map": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/PXL_20241210_122905199.MP_Istanbul_Cityscape_from_Bosphorus_Strait_Cruise_T%C3%BCrkiye_42_Bosphorus_Bridge.jpg/960px-PXL_20241210_122905199.MP_Istanbul_Cityscape_from_Bosphorus_Strait_Cruise_T%C3%BCrkiye_42_Bosphorus_Bridge.jpg",
        "heroPosition": "center 40%"
      },
      "seasonalPhotos": {
        "spring": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Istanbul_Bosphorus_Cruise_ship_Ruby_Princess_IMG_7920_1920.jpg/960px-Istanbul_Bosphorus_Cruise_ship_Ruby_Princess_IMG_7920_1920.jpg",
        "summer": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Istanbul_Bosphorus_Cruise_ship_Ruby_Princess_IMG_7538_1800.jpg/960px-Istanbul_Bosphorus_Cruise_ship_Ruby_Princess_IMG_7538_1800.jpg",
        "autumn": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Istanbul_Bosphorus_Cruise_ship_Costa_Fascinosa_IMG_7437_1800.jpg/960px-Istanbul_Bosphorus_Cruise_ship_Costa_Fascinosa_IMG_7437_1800.jpg",
        "christmas": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/PXL_20241210_122905199.MP_Istanbul_Cityscape_from_Bosphorus_Strait_Cruise_T%C3%BCrkiye_42_Bosphorus_Bridge.jpg/960px-PXL_20241210_122905199.MP_Istanbul_Cityscape_from_Bosphorus_Strait_Cruise_T%C3%BCrkiye_42_Bosphorus_Bridge.jpg"
      }
    },
    {
      "name": "Ortaköy Mosque",
      "address": "Mecidiye Köprüsü · Beşiktaş · 34347",
      "hours": "Open outside prayer times",
      "tube": "Ferry · Ortaköy · or taxi from Beşiktaş",
      "ticket": "Free",
      "bestArrival": "15:00",
      "photoSpot": "From Bosphorus shore — baroque mosque with bridge backdrop.",
      "lens": "24–70mm",
      "tip": "Combine with kumpir potato stalls and waterfront walk. Most photogenic at sunset from a Bosphorus cruise.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Ortak%C3%B6y%20Mosque%20Istanbul",
      "bookUrl": "https://www.google.com/maps/search/?api=1&query=Ortak%C3%B6y%20Mosque%20Istanbul",
      "bookText": "Book Tickets",
      "avgVisit": "30 min",
      "crowd": {
        "morning": 3,
        "afternoon": 4,
        "evening": 2
      },
      "nearby": [
        {
          "name": "House Café Ortaköy",
          "walk": "2 min"
        },
        {
          "name": "Bosphorus waterfront",
          "walk": "1 min"
        },
        {
          "name": "Çırağan Palace Kempinski",
          "walk": "10 min"
        }
      ],
      "nearbyCafes": "See dining chapter in this guide.",
      "nearbyRestaurants": "See dining chapter in this guide.",
      "nearbyTube": "Ferry · Ortaköy · or taxi from Beşiktaş",
      "nearbyToilets": "On-site or nearby cafés and mosques.",
      "nearbyAtm": "Ziraat · İş Bankası · Garanti BBVA near tram stops",
      "didYouKnow": "Built in 1854 by Sultan Abdülmecid — neo-baroque design by Armenian architect Garabet Balyan.",
      "localSecret": "Weekday mornings before 10:00 you can photograph the mosque without the weekend kumpir crowds.",
      "instagram": {
        "sunset": "From Bosphorus shore — baroque mosque with bridge backdrop.",
        "sunrise": "From Bosphorus shore — baroque mosque with bridge backdrop.",
        "drone": "Restricted near airports and military zones — check DGCA rules",
        "settings": "f/8 · ISO 200 · 24–70mm"
      },
      "photos": {
        "hero": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Istanbul_asv2020-02_img60_Ortak%C3%B6y_Mosque.jpg/960px-Istanbul_asv2020-02_img60_Ortak%C3%B6y_Mosque.jpg",
        "detail": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Ortak%C3%B6y_Mosque_and_Bosphorus_Bridge%2C_March_2024_02.jpg/960px-Ortak%C3%B6y_Mosque_and_Bosphorus_Bridge%2C_March_2024_02.jpg",
        "photoSpot": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Ortak%C3%B6y_Mosque_and_Bosphorus_Bridge%2C_March_2024_01.jpg/960px-Ortak%C3%B6y_Mosque_and_Bosphorus_Bridge%2C_March_2024_01.jpg",
        "map": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Ortak%C3%B6y_Mosque_and_Bosphorus_Bridge%2C_March_2024_03.jpg/960px-Ortak%C3%B6y_Mosque_and_Bosphorus_Bridge%2C_March_2024_03.jpg",
        "heroPosition": "center 40%"
      },
      "seasonalPhotos": {
        "spring": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Istanbul_asv2020-02_img60_Ortak%C3%B6y_Mosque.jpg/960px-Istanbul_asv2020-02_img60_Ortak%C3%B6y_Mosque.jpg",
        "summer": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Ortak%C3%B6y_Mosque_and_Bosphorus_Bridge%2C_March_2024_02.jpg/960px-Ortak%C3%B6y_Mosque_and_Bosphorus_Bridge%2C_March_2024_02.jpg",
        "autumn": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Ortak%C3%B6y_Mosque_and_Bosphorus_Bridge%2C_March_2024_01.jpg/960px-Ortak%C3%B6y_Mosque_and_Bosphorus_Bridge%2C_March_2024_01.jpg",
        "christmas": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Ortak%C3%B6y_Mosque_and_Bosphorus_Bridge%2C_March_2024_03.jpg/960px-Ortak%C3%B6y_Mosque_and_Bosphorus_Bridge%2C_March_2024_03.jpg"
      }
    },
    {
      "name": "Dolmabahçe Palace",
      "address": "Vişnezade · Beşiktaş · 34357",
      "hours": "09:00–16:00 · closed Mon & Thu",
      "tube": "Tram T1 · Kabataş · 5 min walk",
      "ticket": "₺750 palace · ₺120 Harem add-on",
      "bestArrival": "09:30",
      "waitSummer": "30–45 min",
      "waitWinter": "15–20 min",
      "photoSpot": "Ceremonial Hall — world's largest Bohemian crystal chandelier.",
      "lens": "No flash · 24mm",
      "tip": "Ottoman's last palace — guided tour mandatory, no photos inside main halls. Crystal staircase and Atatürk's room are highlights.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Dolmabah%C3%A7e%20Palace%20Istanbul",
      "bookUrl": "https://www.millisaraylar.gov.tr/",
      "bookText": "Book Tickets",
      "avgVisit": "2 hours",
      "crowd": {
        "morning": 3,
        "afternoon": 4,
        "evening": 2
      },
      "nearby": [
        {
          "name": "Ortaköy Mosque",
          "walk": "15 min"
        },
        {
          "name": "Kabataş ferry",
          "walk": "5 min"
        },
        {
          "name": "Banyan Restaurant",
          "walk": "12 min"
        }
      ],
      "nearbyCafes": "See dining chapter in this guide.",
      "nearbyRestaurants": "See dining chapter in this guide.",
      "nearbyTube": "Tram T1 · Kabataş · 5 min walk",
      "nearbyToilets": "On-site or nearby cafés and mosques.",
      "nearbyAtm": "Ziraat · İş Bankası · Garanti BBVA near tram stops",
      "didYouKnow": "Built in 1856 at enormous cost — it hastened the Ottoman Empire's bankruptcy.",
      "localSecret": "The palace gates facing the Bosphorus are free to photograph — arrive before opening for empty promenade shots.",
      "instagram": {
        "sunset": "Ceremonial Hall — world's largest Bohemian crystal chandelier.",
        "sunrise": "Ceremonial Hall — world's largest Bohemian crystal chandelier.",
        "drone": "Restricted near airports and military zones — check DGCA rules",
        "settings": "f/8 · ISO 200 · 24–70mm"
      },
      "photos": {
        "hero": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Dolmabahce_Istanbul_Turkey.jpg/960px-Dolmabahce_Istanbul_Turkey.jpg",
        "detail": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Entrance_to_Dolmabah%C3%A7e_Palace%2C_Architectural_Panorama.jpg/960px-Entrance_to_Dolmabah%C3%A7e_Palace%2C_Architectural_Panorama.jpg",
        "photoSpot": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Dolmabah%C3%A7e_Palace_and_Sultans_gate_april_19_2014.jpg/960px-Dolmabah%C3%A7e_Palace_and_Sultans_gate_april_19_2014.jpg",
        "map": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Pond_and_Fence_along_the_Bosporus_Strait%2C_Dolmabah%C3%A7e_Palace%2C_Istanbul.jpg/960px-Pond_and_Fence_along_the_Bosporus_Strait%2C_Dolmabah%C3%A7e_Palace%2C_Istanbul.jpg",
        "heroPosition": "center 40%"
      },
      "seasonalPhotos": {
        "spring": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Dolmabahce_Istanbul_Turkey.jpg/960px-Dolmabahce_Istanbul_Turkey.jpg",
        "summer": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Entrance_to_Dolmabah%C3%A7e_Palace%2C_Architectural_Panorama.jpg/960px-Entrance_to_Dolmabah%C3%A7e_Palace%2C_Architectural_Panorama.jpg",
        "autumn": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Dolmabah%C3%A7e_Palace_and_Sultans_gate_april_19_2014.jpg/960px-Dolmabah%C3%A7e_Palace_and_Sultans_gate_april_19_2014.jpg",
        "christmas": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Pond_and_Fence_along_the_Bosporus_Strait%2C_Dolmabah%C3%A7e_Palace%2C_Istanbul.jpg/960px-Pond_and_Fence_along_the_Bosporus_Strait%2C_Dolmabah%C3%A7e_Palace%2C_Istanbul.jpg"
      }
    },
    {
      "name": "Rumeli Fortress",
      "address": "Yahya Kemal Cd. · Sarıyer · 34470",
      "hours": "09:00–19:00 · closed Mon",
      "tube": "Bus or taxi from Bebek · 20 min",
      "ticket": "₺130 adult",
      "bestArrival": "20:00 summer · 17:00 winter",
      "photoSpot": "Battlements overlooking the Bosphorus narrows.",
      "lens": "24–70mm",
      "tip": "Built in four months before the 1453 conquest. Evening concerts in summer. Steep stairs — wear proper shoes.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Rumeli%20Fortress%20Istanbul",
      "bookUrl": "https://www.google.com/maps/search/?api=1&query=Rumeli%20Fortress%20Istanbul",
      "bookText": "Book Tickets",
      "avgVisit": "60 min",
      "crowd": {
        "morning": 3,
        "afternoon": 4,
        "evening": 2
      },
      "nearby": [
        {
          "name": "Sunset Grill",
          "walk": "5 min"
        },
        {
          "name": "Bebek waterfront",
          "walk": "15 min"
        }
      ],
      "nearbyCafes": "See dining chapter in this guide.",
      "nearbyRestaurants": "See dining chapter in this guide.",
      "nearbyTube": "Bus or taxi from Bebek · 20 min",
      "nearbyToilets": "On-site or nearby cafés and mosques.",
      "nearbyAtm": "Ziraat · İş Bankası · Garanti BBVA near tram stops",
      "didYouKnow": "Mehmet the Conqueror built this fortress in 1452 to choke Byzantine supply lines on the Bosphorus.",
      "localSecret": "The small mosque inside the fortress has a terrace view rivalling any paid Bosphorus restaurant.",
      "instagram": {
        "sunset": "Battlements overlooking the Bosphorus narrows.",
        "sunrise": "Battlements overlooking the Bosphorus narrows.",
        "drone": "Restricted near airports and military zones — check DGCA rules",
        "settings": "f/8 · ISO 200 · 24–70mm"
      },
      "photos": {
        "hero": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Istanbul%2C_Turkey_-_53686764072.jpg/960px-Istanbul%2C_Turkey_-_53686764072.jpg",
        "detail": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/PXL_20241210_122905199.MP_Istanbul_Cityscape_from_Bosphorus_Strait_Cruise_T%C3%BCrkiye_25_Rumeli_Hisar%C4%B1_%28Rumelian_Fortress_or_Bo%C4%9Fazkesen_Fortress%29.jpg/960px-PXL_20241210_122905199.MP_Istanbul_Cityscape_from_Bosphorus_Strait_Cruise_T%C3%BCrkiye_25_Rumeli_Hisar%C4%B1_%28Rumelian_Fortress_or_Bo%C4%9Fazkesen_Fortress%29.jpg",
        "photoSpot": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Illustrated_Bosphorus_map_Anadolu_Hisari_2024.jpg/960px-Illustrated_Bosphorus_map_Anadolu_Hisari_2024.jpg",
        "map": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Rumeli_Hisari_Fortress_%286526102067%29.jpg/960px-Rumeli_Hisari_Fortress_%286526102067%29.jpg",
        "heroPosition": "center 40%"
      },
      "seasonalPhotos": {
        "spring": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Istanbul%2C_Turkey_-_53686764072.jpg/960px-Istanbul%2C_Turkey_-_53686764072.jpg",
        "summer": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/PXL_20241210_122905199.MP_Istanbul_Cityscape_from_Bosphorus_Strait_Cruise_T%C3%BCrkiye_25_Rumeli_Hisar%C4%B1_%28Rumelian_Fortress_or_Bo%C4%9Fazkesen_Fortress%29.jpg/960px-PXL_20241210_122905199.MP_Istanbul_Cityscape_from_Bosphorus_Strait_Cruise_T%C3%BCrkiye_25_Rumeli_Hisar%C4%B1_%28Rumelian_Fortress_or_Bo%C4%9Fazkesen_Fortress%29.jpg",
        "autumn": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Illustrated_Bosphorus_map_Anadolu_Hisari_2024.jpg/960px-Illustrated_Bosphorus_map_Anadolu_Hisari_2024.jpg",
        "christmas": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Rumeli_Hisari_Fortress_%286526102067%29.jpg/960px-Rumeli_Hisari_Fortress_%286526102067%29.jpg"
      }
    },
    {
      "name": "Maiden's Tower",
      "address": "Üsküdar · Salacak · 34668",
      "hours": "09:00–19:00 · ferry every 15 min",
      "tube": "Ferry from Kabataş or Üsküdar",
      "ticket": "₺475 incl. ferry",
      "bestArrival": "Morning before 11:00",
      "waitSummer": "20 min ferry queue",
      "waitWinter": "5–10 min",
      "photoSpot": "From Üsküdar shore at sunset — tower silhouetted against sky.",
      "lens": "70–200mm from shore · 24mm on island",
      "tip": "Iconic islet on the Bosphorus. Restaurant on site — book dinner for special occasions. Ferry from Üsküdar is shortest ride.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Maiden's%20Tower%20Istanbul",
      "bookUrl": "https://www.kizkulesi.gov.tr/",
      "bookText": "Book Tickets",
      "avgVisit": "90 min",
      "crowd": {
        "morning": 3,
        "afternoon": 4,
        "evening": 2
      },
      "nearby": [
        {
          "name": "Üsküdar waterfront",
          "walk": "Ferry"
        },
        {
          "name": "Çamlıca Mosque",
          "walk": "Taxi 15 min"
        },
        {
          "name": "Kanaat Lokantası",
          "walk": "10 min"
        }
      ],
      "nearbyCafes": "See dining chapter in this guide.",
      "nearbyRestaurants": "See dining chapter in this guide.",
      "nearbyTube": "Ferry from Kabataş or Üsküdar",
      "nearbyToilets": "On-site or nearby cafés and mosques.",
      "nearbyAtm": "Ziraat · İş Bankası · Garanti BBVA near tram stops",
      "didYouKnow": "A lighthouse has stood on this rock since ancient times — legends tell of a princess locked here to escape a snake prophecy.",
      "localSecret": "Photograph the tower from Salacak café terraces with tea — better composition than from the island itself.",
      "instagram": {
        "sunset": "From Üsküdar shore at sunset — tower silhouetted against sky.",
        "sunrise": "From Üsküdar shore at sunset — tower silhouetted against sky.",
        "drone": "Restricted near airports and military zones — check DGCA rules",
        "settings": "f/8 · ISO 200 · 24–70mm"
      },
      "photos": {
        "hero": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Istanbul_K%C4%B1z_Kulesi_%2854511155871%29_%28cropped%29.jpg/960px-Istanbul_K%C4%B1z_Kulesi_%2854511155871%29_%28cropped%29.jpg",
        "detail": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/K%C4%B1z_Kulesi_Mars_2013.jpg/960px-K%C4%B1z_Kulesi_Mars_2013.jpg",
        "photoSpot": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/K%C4%B1z_Kulesi_February_2013_01.jpg/960px-K%C4%B1z_Kulesi_February_2013_01.jpg",
        "map": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/K%C4%B1z_Kulesi_February_2013_02.jpg/960px-K%C4%B1z_Kulesi_February_2013_02.jpg",
        "heroPosition": "center 40%"
      },
      "seasonalPhotos": {
        "spring": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Istanbul_K%C4%B1z_Kulesi_%2854511155871%29_%28cropped%29.jpg/960px-Istanbul_K%C4%B1z_Kulesi_%2854511155871%29_%28cropped%29.jpg",
        "summer": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/K%C4%B1z_Kulesi_Mars_2013.jpg/960px-K%C4%B1z_Kulesi_Mars_2013.jpg",
        "autumn": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/K%C4%B1z_Kulesi_February_2013_01.jpg/960px-K%C4%B1z_Kulesi_February_2013_01.jpg",
        "christmas": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/K%C4%B1z_Kulesi_February_2013_02.jpg/960px-K%C4%B1z_Kulesi_February_2013_02.jpg"
      }
    },
    {
      "name": "Çamlıca Mosque",
      "address": "Çamlıca Tepesi · Üsküdaar · 34692",
      "hours": "Open outside prayer · visitor centre 09:00–18:00",
      "tube": "Metro M5 · Çamlıca · taxi to hilltop",
      "ticket": "Free",
      "bestArrival": "11:00",
      "photoSpot": "Main courtyard — six minarets with city panorama.",
      "lens": "16–35mm",
      "tip": "Turkey's largest mosque — opened 2019. Art gallery and library on site. Combine with Çamlıca Hill viewpoint.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%C3%87aml%C4%B1ca%20Mosque%20Istanbul",
      "bookUrl": "https://www.google.com/maps/search/?api=1&query=%C3%87aml%C4%B1ca%20Mosque%20Istanbul",
      "bookText": "Book Tickets",
      "avgVisit": "45 min",
      "crowd": {
        "morning": 3,
        "afternoon": 4,
        "evening": 2
      },
      "nearby": [
        {
          "name": "Çamlıca Hill",
          "walk": "5 min"
        },
        {
          "name": "Maiden's Tower view",
          "walk": "Viewpoint"
        },
        {
          "name": "Kadıköy",
          "walk": "Ferry 20 min"
        }
      ],
      "nearbyCafes": "See dining chapter in this guide.",
      "nearbyRestaurants": "See dining chapter in this guide.",
      "nearbyTube": "Metro M5 · Çamlıca · taxi to hilltop",
      "nearbyToilets": "On-site or nearby cafés and mosques.",
      "nearbyAtm": "Ziraat · İş Bankası · Garanti BBVA near tram stops",
      "didYouKnow": "Can hold 63,000 worshippers — the main dome is 72 metres high, symbolising the 72 nations of the world.",
      "localSecret": "The library downstairs has rare Ottoman manuscripts and is almost always empty.",
      "instagram": {
        "sunset": "Main courtyard — six minarets with city panorama.",
        "sunrise": "Main courtyard — six minarets with city panorama.",
        "drone": "Restricted near airports and military zones — check DGCA rules",
        "settings": "f/8 · ISO 200 · 24–70mm"
      },
      "photos": {
        "hero": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Camlica-2018-06-14.jpg/960px-Camlica-2018-06-14.jpg",
        "detail": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Camlica_Mosque_Istanbul.jpg/960px-Camlica_Mosque_Istanbul.jpg",
        "photoSpot": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Istanbul_Big_Camlica_Mosque_june_2019_1940_panorama_%281%29.jpg/960px-Istanbul_Big_Camlica_Mosque_june_2019_1940_panorama_%281%29.jpg",
        "map": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Camlica_Mosque_Bosporus_Istanbul.jpg/960px-Camlica_Mosque_Bosporus_Istanbul.jpg",
        "heroPosition": "center 40%"
      },
      "seasonalPhotos": {
        "spring": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Camlica-2018-06-14.jpg/960px-Camlica-2018-06-14.jpg",
        "summer": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Camlica_Mosque_Istanbul.jpg/960px-Camlica_Mosque_Istanbul.jpg",
        "autumn": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Istanbul_Big_Camlica_Mosque_june_2019_1940_panorama_%281%29.jpg/960px-Istanbul_Big_Camlica_Mosque_june_2019_1940_panorama_%281%29.jpg",
        "christmas": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Camlica_Mosque_Bosporus_Istanbul.jpg/960px-Camlica_Mosque_Bosporus_Istanbul.jpg"
      }
    },
    {
      "name": "Kadıköy Market",
      "address": "Hasanpaşa · Kadıköy · 34722",
      "hours": "08:00–20:00 · busiest Sat morning",
      "tube": "Ferry · Kadıköy · Metro M4",
      "ticket": "Free",
      "bestArrival": "16:00",
      "photoSpot": "Fish market alley — colourful stalls and local energy.",
      "lens": "35mm",
      "tip": "Asian side's food heart. Try street kokoreç, midye dolma, and fresh juice. Less touristy than European side markets.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Kad%C4%B1k%C3%B6y%20Market%20Istanbul",
      "bookUrl": "https://www.google.com/maps/search/?api=1&query=Kad%C4%B1k%C3%B6y%20Market%20Istanbul",
      "bookText": "Book Tickets",
      "avgVisit": "90 min",
      "crowd": {
        "morning": 3,
        "afternoon": 4,
        "evening": 2
      },
      "nearby": [
        {
          "name": "Moda neighbourhood",
          "walk": "15 min"
        },
        {
          "name": "Çiya Sofrası",
          "walk": "10 min"
        },
        {
          "name": "Ferry to Eminönü",
          "walk": "5 min"
        }
      ],
      "nearbyCafes": "See dining chapter in this guide.",
      "nearbyRestaurants": "See dining chapter in this guide.",
      "nearbyTube": "Ferry · Kadıköy · Metro M4",
      "nearbyToilets": "On-site or nearby cafés and mosques.",
      "nearbyAtm": "Ziraat · İş Bankası · Garanti BBVA near tram stops",
      "didYouKnow": "Kadıköy has been a market town since ancient Chalcedon — older than Byzantium itself.",
      "localSecret": "Ali Muhiddin Hacı Bekir on the market edge sells the original Turkish delight recipe from 1777.",
      "instagram": {
        "sunset": "Fish market alley — colourful stalls and local energy.",
        "sunrise": "Fish market alley — colourful stalls and local energy.",
        "drone": "Restricted near airports and military zones — check DGCA rules",
        "settings": "f/8 · ISO 200 · 24–70mm"
      },
      "photos": {
        "hero": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Haydarpasa_train_station_%28cropped%29.jpg/960px-Haydarpasa_train_station_%28cropped%29.jpg",
        "detail": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Istanbul_-_Kad%C4%B1k%C3%B6y_%2855107618018%29.jpg/960px-Istanbul_-_Kad%C4%B1k%C3%B6y_%2855107618018%29.jpg",
        "photoSpot": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Long_shot_of_crowd_in_early_market_morning.jpg/960px-Long_shot_of_crowd_in_early_market_morning.jpg",
        "map": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Istanbul_-_Deniz_Bal%C4%B1k%C3%A7%C4%B1l%C4%B1k.jpg/960px-Istanbul_-_Deniz_Bal%C4%B1k%C3%A7%C4%B1l%C4%B1k.jpg",
        "heroPosition": "center 40%"
      },
      "seasonalPhotos": {
        "spring": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Haydarpasa_train_station_%28cropped%29.jpg/960px-Haydarpasa_train_station_%28cropped%29.jpg",
        "summer": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Istanbul_-_Kad%C4%B1k%C3%B6y_%2855107618018%29.jpg/960px-Istanbul_-_Kad%C4%B1k%C3%B6y_%2855107618018%29.jpg",
        "autumn": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Long_shot_of_crowd_in_early_market_morning.jpg/960px-Long_shot_of_crowd_in_early_market_morning.jpg",
        "christmas": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Istanbul_-_Deniz_Bal%C4%B1k%C3%A7%C4%B1l%C4%B1k.jpg/960px-Istanbul_-_Deniz_Bal%C4%B1k%C3%A7%C4%B1l%C4%B1k.jpg"
      }
    },
    {
      "name": "Balat",
      "address": "Balat · Fatih · 34087",
      "hours": "Always open · cafés from 09:00",
      "tube": "Bus 99A from Eminönü · or taxi",
      "ticket": "Free",
      "bestArrival": "10:00",
      "photoSpot": "Colourful hillside houses on Kiremit Street.",
      "lens": "35mm · 50mm portraits",
      "tip": "UNESCO-listed neighbourhood of rainbow houses, synagogues, and artisan cafés. Respect residents — this is a living community.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Balat%20Istanbul",
      "bookUrl": "https://www.google.com/maps/search/?api=1&query=Balat%20Istanbul",
      "bookText": "Book Tickets",
      "avgVisit": "2 hours",
      "crowd": {
        "morning": 3,
        "afternoon": 4,
        "evening": 2
      },
      "nearby": [
        {
          "name": "Fener",
          "walk": "10 min"
        },
        {
          "name": "Forno Balat",
          "walk": "3 min"
        },
        {
          "name": "Velvet Café",
          "walk": "5 min"
        }
      ],
      "nearbyCafes": "See dining chapter in this guide.",
      "nearbyRestaurants": "See dining chapter in this guide.",
      "nearbyTube": "Bus 99A from Eminönü · or taxi",
      "nearbyToilets": "On-site or nearby cafés and mosques.",
      "nearbyAtm": "Ziraat · İş Bankası · Garanti BBVA near tram stops",
      "didYouKnow": "Historic Greek and Jewish quarter — one of Istanbul's oldest continuously inhabited neighbourhoods.",
      "localSecret": "Church of St George in nearby Fener is the seat of the Ecumenical Patriarch — open mornings only.",
      "instagram": {
        "sunset": "Colourful hillside houses on Kiremit Street.",
        "sunrise": "Colourful hillside houses on Kiremit Street.",
        "drone": "Restricted near airports and military zones — check DGCA rules",
        "settings": "f/8 · ISO 200 · 24–70mm"
      },
      "photos": {
        "hero": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Balat_houses.jpg/960px-Balat_houses.jpg",
        "detail": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Colourful_houses_in_Fethiye-Balat_district%2C_Istanbul_2.jpg/960px-Colourful_houses_in_Fethiye-Balat_district%2C_Istanbul_2.jpg",
        "photoSpot": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Colourful_houses_in_Fethiye-Balat_district%2C_Istanbul_4.jpg/960px-Colourful_houses_in_Fethiye-Balat_district%2C_Istanbul_4.jpg",
        "map": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Colourful_houses_in_Fethiye-Balat_district%2C_Istanbul_5.jpg/960px-Colourful_houses_in_Fethiye-Balat_district%2C_Istanbul_5.jpg",
        "heroPosition": "center 40%"
      },
      "seasonalPhotos": {
        "spring": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Balat_houses.jpg/960px-Balat_houses.jpg",
        "summer": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Colourful_houses_in_Fethiye-Balat_district%2C_Istanbul_2.jpg/960px-Colourful_houses_in_Fethiye-Balat_district%2C_Istanbul_2.jpg",
        "autumn": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Colourful_houses_in_Fethiye-Balat_district%2C_Istanbul_4.jpg/960px-Colourful_houses_in_Fethiye-Balat_district%2C_Istanbul_4.jpg",
        "christmas": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Colourful_houses_in_Fethiye-Balat_district%2C_Istanbul_5.jpg/960px-Colourful_houses_in_Fethiye-Balat_district%2C_Istanbul_5.jpg"
      }
    },
    {
      "name": "Eyüp Mosque",
      "address": "Eyüp Sultan · Eyüpsultan · 34050",
      "hours": "Open outside prayer · busiest Fri",
      "tube": "Teleferik · Eyüp · or bus from Eminönü",
      "ticket": "Free",
      "bestArrival": "14:00",
      "photoSpot": "Courtyard fountain — Ottoman tilework and cypress trees.",
      "lens": "24mm",
      "tip": "Holiest mosque in Istanbul — tomb of Abu Ayyub al-Ansari, companion of the Prophet. Very busy on Fridays.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Ey%C3%BCp%20Mosque%20Istanbul",
      "bookUrl": "https://www.google.com/maps/search/?api=1&query=Ey%C3%BCp%20Mosque%20Istanbul",
      "bookText": "Book Tickets",
      "avgVisit": "45 min",
      "crowd": {
        "morning": 3,
        "afternoon": 4,
        "evening": 2
      },
      "nearby": [
        {
          "name": "Pierre Loti Cable Car",
          "walk": "3 min"
        },
        {
          "name": "Golden Horn cemetery",
          "walk": "5 min"
        },
        {
          "name": "Ağa Kapısı Restaurant",
          "walk": "8 min"
        }
      ],
      "nearbyCafes": "See dining chapter in this guide.",
      "nearbyRestaurants": "See dining chapter in this guide.",
      "nearbyTube": "Teleferik · Eyüp · or bus from Eminönü",
      "nearbyToilets": "On-site or nearby cafés and mosques.",
      "nearbyAtm": "Ziraat · İş Bankası · Garanti BBVA near tram stops",
      "didYouKnow": "Mehmet the Conqueror ordered the first mosque here after the 1453 conquest — it marks Islam's arrival in the city.",
      "localSecret": "The cemetery paths above the mosque offer Golden Horn views without the Pierre Loti café crowds.",
      "instagram": {
        "sunset": "Courtyard fountain — Ottoman tilework and cypress trees.",
        "sunrise": "Courtyard fountain — Ottoman tilework and cypress trees.",
        "drone": "Restricted near airports and military zones — check DGCA rules",
        "settings": "f/8 · ISO 200 · 24–70mm"
      },
      "photos": {
        "hero": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/%C4%B0stanbul_5999.jpg/960px-%C4%B0stanbul_5999.jpg",
        "detail": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Eyup_Sultan_Mosque_DSCF9640.jpg/960px-Eyup_Sultan_Mosque_DSCF9640.jpg",
        "photoSpot": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Eyup_Sultan_Mosque_DSCF9629.jpg/960px-Eyup_Sultan_Mosque_DSCF9629.jpg",
        "map": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Eyup_Sultan_Mosque_DSCF8164.jpg/960px-Eyup_Sultan_Mosque_DSCF8164.jpg",
        "heroPosition": "center 40%"
      },
      "seasonalPhotos": {
        "spring": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/%C4%B0stanbul_5999.jpg/960px-%C4%B0stanbul_5999.jpg",
        "summer": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Eyup_Sultan_Mosque_DSCF9640.jpg/960px-Eyup_Sultan_Mosque_DSCF9640.jpg",
        "autumn": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Eyup_Sultan_Mosque_DSCF9629.jpg/960px-Eyup_Sultan_Mosque_DSCF9629.jpg",
        "christmas": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Eyup_Sultan_Mosque_DSCF8164.jpg/960px-Eyup_Sultan_Mosque_DSCF8164.jpg"
      }
    },
    {
      "name": "Pierre Loti Hill",
      "address": "Eyüp · Eyüpsultan · 34050",
      "hours": "Teleferik 09:00–22:00 · café daily",
      "tube": "Teleferik from Eyüp Mosque",
      "ticket": "₺60 teleferik return",
      "bestArrival": "17:30",
      "photoSpot": "Hilltop terrace — Golden Horn panorama at sunset.",
      "lens": "24–70mm",
      "tip": "Named after the French novelist. Cable car from Eyüp Mosque. Café is touristy — bring patience for sunset seats.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Pierre%20Loti%20Hill%20Istanbul",
      "bookUrl": "https://www.google.com/maps/search/?api=1&query=Pierre%20Loti%20Hill%20Istanbul",
      "bookText": "Book Tickets",
      "avgVisit": "60 min",
      "crowd": {
        "morning": 2,
        "afternoon": 3,
        "evening": 5
      },
      "nearby": [
        {
          "name": "Eyüp Mosque",
          "walk": "Teleferik down"
        },
        {
          "name": "Golden Horn",
          "walk": "View"
        },
        {
          "name": "Balat",
          "walk": "Bus 15 min"
        }
      ],
      "nearbyCafes": "See dining chapter in this guide.",
      "nearbyRestaurants": "See dining chapter in this guide.",
      "nearbyTube": "Teleferik from Eyüp Mosque",
      "nearbyToilets": "On-site or nearby cafés and mosques.",
      "nearbyAtm": "Ziraat · İş Bankası · Garanti BBVA near tram stops",
      "didYouKnow": "Pierre Loti wrote \"Aziyadé\" here — romanticising Istanbul for generations of European readers.",
      "localSecret": "Walk down through the cemetery instead of the cable car for atmospheric shortcuts and empty viewpoints.",
      "instagram": {
        "sunset": "Hilltop terrace — Golden Horn panorama at sunset.",
        "sunrise": "Hilltop terrace — Golden Horn panorama at sunset.",
        "drone": "Restricted near airports and military zones — check DGCA rules",
        "settings": "f/8 · ISO 200 · 24–70mm"
      },
      "photos": {
        "hero": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Cuerno_de_Oro_desde_el_mirador_Pierre_Loti_Caf%C3%A9_%28Ey%C3%BCp_Sultan%29.jpg/960px-Cuerno_de_Oro_desde_el_mirador_Pierre_Loti_Caf%C3%A9_%28Ey%C3%BCp_Sultan%29.jpg",
        "detail": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/20110711_Pierre_Loti_hill_view_Istanbul_Turkey_Panorama.jpg/960px-20110711_Pierre_Loti_hill_view_Istanbul_Turkey_Panorama.jpg",
        "photoSpot": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/The_Golden_Horn_Constantinople_Turkey.jpg/960px-The_Golden_Horn_Constantinople_Turkey.jpg",
        "map": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/DSC04812_Istanbul_-_Vista_del_Corno_d%27Oro_dal_caf%E2%80%9A_Loti_di_Ey%C3%BCp_-_Foto_G._Dall%27Orto_30-5-2006.jpg/960px-DSC04812_Istanbul_-_Vista_del_Corno_d%27Oro_dal_caf%E2%80%9A_Loti_di_Ey%C3%BCp_-_Foto_G._Dall%27Orto_30-5-2006.jpg",
        "heroPosition": "center 40%"
      },
      "seasonalPhotos": {
        "spring": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Cuerno_de_Oro_desde_el_mirador_Pierre_Loti_Caf%C3%A9_%28Ey%C3%BCp_Sultan%29.jpg/960px-Cuerno_de_Oro_desde_el_mirador_Pierre_Loti_Caf%C3%A9_%28Ey%C3%BCp_Sultan%29.jpg",
        "summer": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/20110711_Pierre_Loti_hill_view_Istanbul_Turkey_Panorama.jpg/960px-20110711_Pierre_Loti_hill_view_Istanbul_Turkey_Panorama.jpg",
        "autumn": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/The_Golden_Horn_Constantinople_Turkey.jpg/960px-The_Golden_Horn_Constantinople_Turkey.jpg",
        "christmas": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/DSC04812_Istanbul_-_Vista_del_Corno_d%27Oro_dal_caf%E2%80%9A_Loti_di_Ey%C3%BCp_-_Foto_G._Dall%27Orto_30-5-2006.jpg/960px-DSC04812_Istanbul_-_Vista_del_Corno_d%27Oro_dal_caf%E2%80%9A_Loti_di_Ey%C3%BCp_-_Foto_G._Dall%27Orto_30-5-2006.jpg"
      }
    },
    {
      "name": "Emirgan Park",
      "address": "Emirgan · Sarıyer · 34467",
      "hours": "07:00–22:30 · tulip festival Apr",
      "tube": "Bus 22RE from Beşiktaş · or taxi",
      "ticket": "Free",
      "bestArrival": "10:00",
      "photoSpot": "Yellow Pavilion lawn — Bosphorus through the trees.",
      "lens": "50–85mm",
      "tip": "Best tulip displays in April. Three historic pavilions serve Ottoman breakfast. Perfect Day 7 relaxation.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Emirgan%20Park%20Istanbul",
      "bookUrl": "https://www.google.com/maps/search/?api=1&query=Emirgan%20Park%20Istanbul",
      "bookText": "Book Tickets",
      "avgVisit": "2 hours",
      "crowd": {
        "morning": 3,
        "afternoon": 4,
        "evening": 2
      },
      "nearby": [
        {
          "name": "Emirgan Sütiş",
          "walk": "Inside park"
        },
        {
          "name": "Mangerie Bebek",
          "walk": "15 min"
        },
        {
          "name": "Lacivert Restaurant",
          "walk": "20 min"
        }
      ],
      "nearbyCafes": "See dining chapter in this guide.",
      "nearbyRestaurants": "See dining chapter in this guide.",
      "nearbyTube": "Bus 22RE from Beşiktaş · or taxi",
      "nearbyToilets": "On-site or nearby cafés and mosques.",
      "nearbyAtm": "Ziraat · İş Bankası · Garanti BBVA near tram stops",
      "didYouKnow": "Ottoman sultans hunted here — the park was a gift from Khedive Ismail of Egypt in the 19th century.",
      "localSecret": "The lesser-known red pavilion at the park's northern end has the quietest Bosphorus picnic spots.",
      "instagram": {
        "sunset": "Yellow Pavilion lawn — Bosphorus through the trees.",
        "sunrise": "Yellow Pavilion lawn — Bosphorus through the trees.",
        "drone": "Restricted near airports and military zones — check DGCA rules",
        "settings": "f/8 · ISO 200 · 24–70mm"
      },
      "photos": {
        "hero": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Emirgan_04325.jpg/960px-Emirgan_04325.jpg",
        "detail": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Emirgan_park_pond_507.jpg/960px-Emirgan_park_pond_507.jpg",
        "photoSpot": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Emirgan_park_pond_505.jpg/960px-Emirgan_park_pond_505.jpg",
        "map": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Istanbul_Tulip_Festival_in_Emirgan_Park_%2801%29.jpg/960px-Istanbul_Tulip_Festival_in_Emirgan_Park_%2801%29.jpg",
        "heroPosition": "center 40%"
      },
      "seasonalPhotos": {
        "spring": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Emirgan_04325.jpg/960px-Emirgan_04325.jpg",
        "summer": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Emirgan_park_pond_507.jpg/960px-Emirgan_park_pond_507.jpg",
        "autumn": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Emirgan_park_pond_505.jpg/960px-Emirgan_park_pond_505.jpg",
        "christmas": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Istanbul_Tulip_Festival_in_Emirgan_Park_%2801%29.jpg/960px-Istanbul_Tulip_Festival_in_Emirgan_Park_%2801%29.jpg"
      }
    },
    {
      "name": "Nişantaşı",
      "address": "Teşvikiye · Şişli · 34365",
      "hours": "Shops 10:00–20:00 · Abdi İpekçi Street",
      "tube": "Metro M2 · Osmanbey · Şişli-Mecidiyeköy",
      "ticket": "Free",
      "bestArrival": "17:00",
      "photoSpot": "Abdi İpekçi Street — luxury storefronts and plane trees.",
      "lens": "35mm street",
      "tip": "Istanbul's Champs-Élysées — designer boutiques, art galleries, and people-watching cafés. Combine with Istinye Park mall.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Ni%C5%9Fanta%C5%9F%C4%B1%20Istanbul",
      "bookUrl": "https://www.google.com/maps/search/?api=1&query=Ni%C5%9Fanta%C5%9F%C4%B1%20Istanbul",
      "bookText": "Book Tickets",
      "avgVisit": "2 hours",
      "crowd": {
        "morning": 3,
        "afternoon": 4,
        "evening": 2
      },
      "nearby": [
        {
          "name": "Istinye Park",
          "walk": "Taxi 10 min"
        },
        {
          "name": "Mikla Restaurant",
          "walk": "Taxi 15 min"
        },
        {
          "name": "City's Nişantaşı",
          "walk": "5 min"
        }
      ],
      "nearbyCafes": "See dining chapter in this guide.",
      "nearbyRestaurants": "See dining chapter in this guide.",
      "nearbyTube": "Metro M2 · Osmanbey · Şişli-Mecidiyeköy",
      "nearbyToilets": "On-site or nearby cafés and mosques.",
      "nearbyAtm": "Ziraat · İş Bankası · Garanti BBVA near tram stops",
      "didYouKnow": "Ottoman sultans' target-shooting range (nişan taşı) gave the district its name.",
      "localSecret": "Arter gallery on İstiklal's quieter cousin streets shows world-class contemporary art for free on Wednesdays.",
      "instagram": {
        "sunset": "Abdi İpekçi Street — luxury storefronts and plane trees.",
        "sunrise": "Abdi İpekçi Street — luxury storefronts and plane trees.",
        "drone": "Restricted near airports and military zones — check DGCA rules",
        "settings": "f/8 · ISO 200 · 24–70mm"
      },
      "photos": {
        "hero": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Ni%C5%9Fanta%C5%9F%C4%B1_Abdi_%C4%B0pek%C3%A7i_Avenue.jpg/960px-Ni%C5%9Fanta%C5%9F%C4%B1_Abdi_%C4%B0pek%C3%A7i_Avenue.jpg",
        "detail": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/An_office_building_in_Ni%C5%9Fanta%C5%9F%C4%B1%2C_Istanbul.jpg/960px-An_office_building_in_Ni%C5%9Fanta%C5%9F%C4%B1%2C_Istanbul.jpg",
        "photoSpot": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/View_from_last_floor_in_City%60s_nisantasi_-_panoramio.jpg/960px-View_from_last_floor_in_City%60s_nisantasi_-_panoramio.jpg",
        "map": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Antik_Konak_Apartman%C4%B1_%C5%9Ei%C5%9Fli_Istanbul.jpg/960px-Antik_Konak_Apartman%C4%B1_%C5%9Ei%C5%9Fli_Istanbul.jpg",
        "heroPosition": "center 40%"
      },
      "seasonalPhotos": {
        "spring": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Ni%C5%9Fanta%C5%9F%C4%B1_Abdi_%C4%B0pek%C3%A7i_Avenue.jpg/960px-Ni%C5%9Fanta%C5%9F%C4%B1_Abdi_%C4%B0pek%C3%A7i_Avenue.jpg",
        "summer": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/An_office_building_in_Ni%C5%9Fanta%C5%9F%C4%B1%2C_Istanbul.jpg/960px-An_office_building_in_Ni%C5%9Fanta%C5%9F%C4%B1%2C_Istanbul.jpg",
        "autumn": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/View_from_last_floor_in_City%60s_nisantasi_-_panoramio.jpg/960px-View_from_last_floor_in_City%60s_nisantasi_-_panoramio.jpg",
        "christmas": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Antik_Konak_Apartman%C4%B1_%C5%9Ei%C5%9Fli_Istanbul.jpg/960px-Antik_Konak_Apartman%C4%B1_%C5%9Ei%C5%9Fli_Istanbul.jpg"
      }
    }
  ],
  "hotels": [
    {
      "name": "The Peninsula Istanbul",
      "category": "Luxury",
      "address": "Kılıçali Paşa Mah. · Karaköy · 34425",
      "price": "€700–1,300/night",
      "rating": "9.5",
      "googleRating": "4.8",
      "room": "Deluxe Bosphorus View · rooftop pool",
      "cancellation": "Free 48h · flexible rate",
      "tube": "Tram T1 · Karaköy · 3 min walk",
      "airport": "IST 45 min Metro · SAW 90 min taxi",
      "nearbyAttractions": "Galataport 2 min · Galata Tower 15 min · Spice Bazaar 20 min · Tram 3 min",
      "walkingScore": "98 / 100 — waterfront Karaköy",
      "breakfast": "Included in premium rates",
      "idealFor": [
        "Honeymoon",
        "Luxury",
        "Families",
        "First-time visitors"
      ],
      "tip": "One of Istanbul's finest luxury hotels — indoor & outdoor pools, spa, fitness centre, Bosphorus-view restaurants, concierge, and airport transfers. One of the newest luxury hotels in the city with stunning waterfront views. Walk to Galataport in 2 minutes, easy tram to Sultanahmet. Why we recommend it: exceptional service and Karaköy location lets you explore both Historic Peninsula and modern neighbourhoods without traffic.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=The%20Peninsula%20Istanbul",
      "bookUrl": "https://www.peninsula.com/en/istanbul/5-star-luxury-hotel-bosphorus",
      "photos": {
        "exterior": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Overview_of_Galataport_from_Cihangir_showing_Istanbul_Painting_and_Sculpture_Museum_on_left_and_Nusretiye_Mosque_on_right_with_Asian_shore_and_Princes%27_Islands_in_the_background.jpg/960px-thumbnail.jpg",
        "lobby": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Overview_of_Galataport_from_Cihangir_showing_Istanbul_Painting_and_Sculpture_Museum_on_left_and_Nusretiye_Mosque_on_right_with_Asian_shore_and_Princes%27_Islands_in_the_background.jpg/960px-thumbnail.jpg",
        "room": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Overview_of_Galataport_from_Cihangir_showing_Istanbul_Painting_and_Sculpture_Museum_on_left_and_Nusretiye_Mosque_on_right_with_Asian_shore_and_Princes%27_Islands_in_the_background.jpg/960px-thumbnail.jpg",
        "luxuryRoom": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Overview_of_Galataport_from_Cihangir_showing_Istanbul_Painting_and_Sculpture_Museum_on_left_and_Nusretiye_Mosque_on_right_with_Asian_shore_and_Princes%27_Islands_in_the_background.jpg/960px-thumbnail.jpg",
        "restaurant": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Overview_of_Galataport_from_Cihangir_showing_Istanbul_Painting_and_Sculpture_Museum_on_left_and_Nusretiye_Mosque_on_right_with_Asian_shore_and_Princes%27_Islands_in_the_background.jpg/960px-thumbnail.jpg",
        "pool": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Overview_of_Galataport_from_Cihangir_showing_Istanbul_Painting_and_Sculpture_Museum_on_left_and_Nusretiye_Mosque_on_right_with_Asian_shore_and_Princes%27_Islands_in_the_background.jpg/960px-thumbnail.jpg",
        "rooftop": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Overview_of_Galataport_from_Cihangir_showing_Istanbul_Painting_and_Sculpture_Museum_on_left_and_Nusretiye_Mosque_on_right_with_Asian_shore_and_Princes%27_Islands_in_the_background.jpg/960px-thumbnail.jpg",
        "breakfast": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Overview_of_Galataport_from_Cihangir_showing_Istanbul_Painting_and_Sculpture_Museum_on_left_and_Nusretiye_Mosque_on_right_with_Asian_shore_and_Princes%27_Islands_in_the_background.jpg/960px-thumbnail.jpg",
        "spa": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Overview_of_Galataport_from_Cihangir_showing_Istanbul_Painting_and_Sculpture_Museum_on_left_and_Nusretiye_Mosque_on_right_with_Asian_shore_and_Princes%27_Islands_in_the_background.jpg/960px-thumbnail.jpg",
        "view": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Overview_of_Galataport_from_Cihangir_showing_Istanbul_Painting_and_Sculpture_Museum_on_left_and_Nusretiye_Mosque_on_right_with_Asian_shore_and_Princes%27_Islands_in_the_background.jpg/960px-thumbnail.jpg"
      }
    },
    {
      "name": "Four Seasons Hotel Bosphorus",
      "category": "Luxury",
      "address": "Çırağan Cd. · Beşiktaş · 34349",
      "price": "€650–1,200/night",
      "rating": "9.4",
      "googleRating": "4.7",
      "room": "Bosphorus Suite · garden terrace",
      "cancellation": "Free 72h on flexible rate",
      "tube": "Ferry · Beşiktaş · tram Kabataş 10 min",
      "airport": "IST 50 min · private transfer available",
      "nearbyAttractions": "Ortaköy 10 min · Dolmabahçe 15 min · Bosphorus cruise pier 5 min",
      "walkingScore": "85 / 100 — waterfront promenade",
      "breakfast": "Included in suite rates",
      "idealFor": [
        "Couple",
        "Luxury",
        "Relaxation"
      ],
      "tip": "Best for couples seeking waterfront calm. Pool and spa overlooking the strait. Afternoon tea on the terrace is legendary.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Four%20Seasons%20Hotel%20Bosphorus%20Istanbul",
      "bookUrl": "https://www.fourseasons.com/bosphorus/",
      "photos": {
        "exterior": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Istanbul_Bosphorus_IMG_7864_1920.jpg/960px-Istanbul_Bosphorus_IMG_7864_1920.jpg",
        "lobby": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Bosporus_Cruise_8.jpg/960px-Bosporus_Cruise_8.jpg",
        "room": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/At_Istanbul_-_Wikimedia_hackathon_boat_tour_2025_457.jpg/960px-At_Istanbul_-_Wikimedia_hackathon_boat_tour_2025_457.jpg",
        "luxuryRoom": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/At_Istanbul_-_Wikimedia_hackathon_boat_tour_2025_457.jpg/960px-At_Istanbul_-_Wikimedia_hackathon_boat_tour_2025_457.jpg",
        "restaurant": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Bosporus_Cruise_8.jpg/960px-Bosporus_Cruise_8.jpg",
        "pool": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/At_Istanbul_-_Wikimedia_hackathon_boat_tour_2025_463.jpg/960px-At_Istanbul_-_Wikimedia_hackathon_boat_tour_2025_463.jpg",
        "rooftop": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/At_Istanbul_-_Wikimedia_hackathon_boat_tour_2025_457.jpg/960px-At_Istanbul_-_Wikimedia_hackathon_boat_tour_2025_457.jpg",
        "breakfast": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Bosporus_Cruise_8.jpg/960px-Bosporus_Cruise_8.jpg",
        "spa": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/At_Istanbul_-_Wikimedia_hackathon_boat_tour_2025_463.jpg/960px-At_Istanbul_-_Wikimedia_hackathon_boat_tour_2025_463.jpg",
        "view": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/At_Istanbul_-_Wikimedia_hackathon_boat_tour_2025_457.jpg/960px-At_Istanbul_-_Wikimedia_hackathon_boat_tour_2025_457.jpg"
      }
    },
    {
      "name": "Çırağan Palace Kempinski",
      "category": "Luxury",
      "address": "Yıldız · Beşiktaş · 34349",
      "price": "€700–1,500/night",
      "rating": "9.3",
      "googleRating": "4.7",
      "room": "Palace Suite · Ottoman opulence",
      "cancellation": "Non-refundable best rate · flexible +15%",
      "tube": "Tram T1 · Kabataş · 8 min walk",
      "airport": "IST 50 min",
      "nearbyAttractions": "Ortaköy Mosque 8 min · Dolmabahçe 5 min · Bosphorus 0 min",
      "walkingScore": "80 / 100 — palace grounds",
      "breakfast": "Included in palace rooms",
      "idealFor": [
        "Luxury",
        "Honeymoon",
        "Special occasions"
      ],
      "tip": "One of Istanbul's most iconic hotels — a literal Ottoman palace on the Bosphorus. Infinity pool, Tuğra restaurant, and hammam.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%C3%87%C4%B1ra%C4%9Fan%20Palace%20Kempinski%20Istanbul",
      "bookUrl": "https://www.kempinski.com/en/ciragan-palace",
      "photos": {
        "exterior": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Istanbul_asv2020-02_img59_%C3%87%C4%B1ra%C4%9Fan_Palace.jpg/960px-Istanbul_asv2020-02_img59_%C3%87%C4%B1ra%C4%9Fan_Palace.jpg",
        "lobby": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Ciragan_Palace_2014.JPG/960px-Ciragan_Palace_2014.JPG",
        "room": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/%C3%87%C4%B1ra%C4%9Fan_Palace_from_the_Bosphorus_-_20250825.jpg/960px-%C3%87%C4%B1ra%C4%9Fan_Palace_from_the_Bosphorus_-_20250825.jpg",
        "luxuryRoom": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/%C3%87%C4%B1ra%C4%9Fan_Palace_from_the_Bosphorus_-_20250825.jpg/960px-%C3%87%C4%B1ra%C4%9Fan_Palace_from_the_Bosphorus_-_20250825.jpg",
        "restaurant": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Ciragan_Palace_2014.JPG/960px-Ciragan_Palace_2014.JPG",
        "pool": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/%C3%87%C4%B1ra%C4%9Fan_Palace_from_the_Bosphorus_Strait.jpg/960px-%C3%87%C4%B1ra%C4%9Fan_Palace_from_the_Bosphorus_Strait.jpg",
        "rooftop": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/%C3%87%C4%B1ra%C4%9Fan_Palace_from_the_Bosphorus_-_20250825.jpg/960px-%C3%87%C4%B1ra%C4%9Fan_Palace_from_the_Bosphorus_-_20250825.jpg",
        "breakfast": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Ciragan_Palace_2014.JPG/960px-Ciragan_Palace_2014.JPG",
        "spa": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/%C3%87%C4%B1ra%C4%9Fan_Palace_from_the_Bosphorus_Strait.jpg/960px-%C3%87%C4%B1ra%C4%9Fan_Palace_from_the_Bosphorus_Strait.jpg",
        "view": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/%C3%87%C4%B1ra%C4%9Fan_Palace_from_the_Bosphorus_-_20250825.jpg/960px-%C3%87%C4%B1ra%C4%9Fan_Palace_from_the_Bosphorus_-_20250825.jpg"
      }
    },
    {
      "name": "Raffles Istanbul",
      "category": "Luxury",
      "address": "Zorlu Center · Levazım · 34340",
      "price": "€650–1,100/night",
      "rating": "9.1",
      "googleRating": "4.6",
      "room": "Grand Room · city & Bosphorus view",
      "cancellation": "Free 24h",
      "tube": "Metro M2 · Gayrettepe · 5 min walk",
      "airport": "IST 40 min via Metro",
      "nearbyAttractions": "Zorlu PSM · luxury shopping · Nişantaşı 10 min taxi",
      "walkingScore": "75 / 100 — modern complex",
      "breakfast": "Extra €45pp",
      "idealFor": [
        "Luxury",
        "Shopping",
        "Business"
      ],
      "tip": "Modern style with amazing spa and Zorlu Center shopping. Excellent for luxury retail and contemporary Istanbul.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Raffles%20Istanbul",
      "bookUrl": "https://www.raffles.com/istanbul/",
      "photos": {
        "exterior": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/EAA_Zorlu_Center.jpg/960px-EAA_Zorlu_Center.jpg",
        "lobby": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Zorlu_Center_-_Istanbul%2C_Turkey%2C_Apple_Store_06.jpg/960px-Zorlu_Center_-_Istanbul%2C_Turkey%2C_Apple_Store_06.jpg",
        "room": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Zorlu_Center_%C4%B0stanbul%2C_p1.jpg/960px-Zorlu_Center_%C4%B0stanbul%2C_p1.jpg",
        "luxuryRoom": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Zorlu_Center_%C4%B0stanbul%2C_p1.jpg/960px-Zorlu_Center_%C4%B0stanbul%2C_p1.jpg",
        "restaurant": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Zorlu_Center_-_Istanbul%2C_Turkey%2C_Apple_Store_06.jpg/960px-Zorlu_Center_-_Istanbul%2C_Turkey%2C_Apple_Store_06.jpg",
        "pool": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Ramsey_store_at_Zorlu_Center%2C_Istanbul.jpg/960px-Ramsey_store_at_Zorlu_Center%2C_Istanbul.jpg",
        "rooftop": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Zorlu_Center_%C4%B0stanbul%2C_p1.jpg/960px-Zorlu_Center_%C4%B0stanbul%2C_p1.jpg",
        "breakfast": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Zorlu_Center_-_Istanbul%2C_Turkey%2C_Apple_Store_06.jpg/960px-Zorlu_Center_-_Istanbul%2C_Turkey%2C_Apple_Store_06.jpg",
        "spa": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Ramsey_store_at_Zorlu_Center%2C_Istanbul.jpg/960px-Ramsey_store_at_Zorlu_Center%2C_Istanbul.jpg",
        "view": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Zorlu_Center_%C4%B0stanbul%2C_p1.jpg/960px-Zorlu_Center_%C4%B0stanbul%2C_p1.jpg"
      }
    },
    {
      "name": "Hotel DeCamondo Galata",
      "category": "Upper Mid-Range",
      "address": "Banker Sk. · Karaköy · 34421",
      "price": "€180–260/night",
      "rating": "9.0",
      "googleRating": "4.6",
      "room": "Deluxe Rooftop · Galata views",
      "cancellation": "Free 48h",
      "tube": "Tram T1 · Karaköy · 4 min walk",
      "airport": "IST 45 min Metro",
      "nearbyAttractions": "Galata Tower 8 min · Galataport 5 min · Karaköy cafés 2 min",
      "walkingScore": "99 / 100 — best location pick",
      "breakfast": "Included · rooftop terrace",
      "idealFor": [
        "Couple",
        "First-time visitors",
        "Design lovers"
      ],
      "tip": "One of our favourite recommendations — beautiful rooftop breakfast, walking distance to Galata Tower, Galataport, and tram.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Hotel%20DeCamondo%20Galata%20Istanbul",
      "bookUrl": "https://www.decamondogalata.com/",
      "photos": {
        "exterior": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Istanbul_asv2020-02_img46_Galata_Bridge_and_Tower.jpg/960px-Istanbul_asv2020-02_img46_Galata_Bridge_and_Tower.jpg",
        "lobby": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/20101106_Galata_Tower_Istanbul_Turkey_Panorama.jpg/960px-20101106_Galata_Tower_Istanbul_Turkey_Panorama.jpg",
        "room": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Ottoman_Bank_Museum_SALT_Galata_street_sign_Istanbul_2024.jpg/960px-Ottoman_Bank_Museum_SALT_Galata_street_sign_Istanbul_2024.jpg",
        "luxuryRoom": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Ottoman_Bank_Museum_SALT_Galata_street_sign_Istanbul_2024.jpg/960px-Ottoman_Bank_Museum_SALT_Galata_street_sign_Istanbul_2024.jpg",
        "restaurant": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/20101106_Galata_Tower_Istanbul_Turkey_Panorama.jpg/960px-20101106_Galata_Tower_Istanbul_Turkey_Panorama.jpg",
        "pool": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Istanbul_%28Turkey%29_banner_Galata_Tower.jpg/960px-Istanbul_%28Turkey%29_banner_Galata_Tower.jpg",
        "rooftop": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Ottoman_Bank_Museum_SALT_Galata_street_sign_Istanbul_2024.jpg/960px-Ottoman_Bank_Museum_SALT_Galata_street_sign_Istanbul_2024.jpg",
        "breakfast": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/20101106_Galata_Tower_Istanbul_Turkey_Panorama.jpg/960px-20101106_Galata_Tower_Istanbul_Turkey_Panorama.jpg",
        "spa": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Istanbul_%28Turkey%29_banner_Galata_Tower.jpg/960px-Istanbul_%28Turkey%29_banner_Galata_Tower.jpg",
        "view": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Ottoman_Bank_Museum_SALT_Galata_street_sign_Istanbul_2024.jpg/960px-Ottoman_Bank_Museum_SALT_Galata_street_sign_Istanbul_2024.jpg"
      }
    },
    {
      "name": "JW Marriott Istanbul Bosphorus",
      "category": "Upper Mid-Range",
      "address": "Kemankeş Karamustafa Paşa · Karaköy · 34425",
      "price": "€280–420/night",
      "rating": "8.9",
      "googleRating": "4.5",
      "room": "Executive Bosphorus View",
      "cancellation": "Free 24h",
      "tube": "Tram T1 · Karaköy · 2 min walk",
      "airport": "IST 45 min",
      "nearbyAttractions": "Galataport 3 min · Spice Bazaar 15 min · Galata Tower 12 min",
      "walkingScore": "97 / 100 — Karaköy waterfront",
      "breakfast": "Included on executive floors",
      "idealFor": [
        "Family",
        "Business",
        "Luxury feel"
      ],
      "tip": "Perfect location with beautiful rooftop bar. Best for families wanting reliable international standards in Karaköy.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=JW%20Marriott%20Istanbul%20Bosphorus",
      "bookUrl": "https://www.marriott.com/hotels/travel/istjw-jw-marriott-istanbul-bosphorus/",
      "photos": {
        "exterior": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Istanbul_asv2020-02_img46_Galata_Bridge_and_Tower.jpg/960px-Istanbul_asv2020-02_img46_Galata_Bridge_and_Tower.jpg",
        "lobby": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/20101106_Galata_Tower_Istanbul_Turkey_Panorama.jpg/960px-20101106_Galata_Tower_Istanbul_Turkey_Panorama.jpg",
        "room": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Karakoy_ferry_pier%2C_Istanbul_%28P1100291%29.jpg/960px-Karakoy_ferry_pier%2C_Istanbul_%28P1100291%29.jpg",
        "luxuryRoom": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Karakoy_ferry_pier%2C_Istanbul_%28P1100291%29.jpg/960px-Karakoy_ferry_pier%2C_Istanbul_%28P1100291%29.jpg",
        "restaurant": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/20101106_Galata_Tower_Istanbul_Turkey_Panorama.jpg/960px-20101106_Galata_Tower_Istanbul_Turkey_Panorama.jpg",
        "pool": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Bosphorus_20190727_%2817%29.jpg/960px-Bosphorus_20190727_%2817%29.jpg",
        "rooftop": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Karakoy_ferry_pier%2C_Istanbul_%28P1100291%29.jpg/960px-Karakoy_ferry_pier%2C_Istanbul_%28P1100291%29.jpg",
        "breakfast": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/20101106_Galata_Tower_Istanbul_Turkey_Panorama.jpg/960px-20101106_Galata_Tower_Istanbul_Turkey_Panorama.jpg",
        "spa": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Bosphorus_20190727_%2817%29.jpg/960px-Bosphorus_20190727_%2817%29.jpg",
        "view": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Karakoy_ferry_pier%2C_Istanbul_%28P1100291%29.jpg/960px-Karakoy_ferry_pier%2C_Istanbul_%28P1100291%29.jpg"
      }
    },
    {
      "name": "The Bank Hotel",
      "category": "Upper Mid-Range",
      "address": "Banker Sk. · Karaköy · 34421",
      "price": "€220–350/night",
      "rating": "8.8",
      "googleRating": "4.5",
      "room": "Heritage Loft · converted bank",
      "cancellation": "Free 72h",
      "tube": "Tram T1 · Karaköy · 3 min",
      "airport": "IST 45 min",
      "nearbyAttractions": "Galata Tower 10 min · Karaköy dining 1 min · Istiklal 12 min",
      "walkingScore": "98 / 100 — very walkable",
      "breakfast": "Excellent Turkish buffet included",
      "idealFor": [
        "Couple",
        "Design",
        "Food lovers"
      ],
      "tip": "Historic bank building with excellent breakfast and Karaköy's best café scene on your doorstep.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=The%20Bank%20Hotel%20Istanbul",
      "bookUrl": "https://www.thebankhotelistanbul.com/",
      "photos": {
        "exterior": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Istanbul_asv2020-02_img46_Galata_Bridge_and_Tower.jpg/960px-Istanbul_asv2020-02_img46_Galata_Bridge_and_Tower.jpg",
        "lobby": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Bankalar_Caddesi_6836.jpg/960px-Bankalar_Caddesi_6836.jpg",
        "room": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Y%C3%BCksek_Kald%C4%B1r%C4%B1m%2C_High_Street%2C_Karak%C3%B6y%2C_%C4%B0stanbul_%2814057301717%29.jpg/960px-Y%C3%BCksek_Kald%C4%B1r%C4%B1m%2C_High_Street%2C_Karak%C3%B6y%2C_%C4%B0stanbul_%2814057301717%29.jpg",
        "luxuryRoom": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Y%C3%BCksek_Kald%C4%B1r%C4%B1m%2C_High_Street%2C_Karak%C3%B6y%2C_%C4%B0stanbul_%2814057301717%29.jpg/960px-Y%C3%BCksek_Kald%C4%B1r%C4%B1m%2C_High_Street%2C_Karak%C3%B6y%2C_%C4%B0stanbul_%2814057301717%29.jpg",
        "restaurant": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Bankalar_Caddesi_6836.jpg/960px-Bankalar_Caddesi_6836.jpg",
        "pool": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/4th_Vak%C4%B1f_Han_in_2024_5414.jpg/960px-4th_Vak%C4%B1f_Han_in_2024_5414.jpg",
        "rooftop": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Y%C3%BCksek_Kald%C4%B1r%C4%B1m%2C_High_Street%2C_Karak%C3%B6y%2C_%C4%B0stanbul_%2814057301717%29.jpg/960px-Y%C3%BCksek_Kald%C4%B1r%C4%B1m%2C_High_Street%2C_Karak%C3%B6y%2C_%C4%B0stanbul_%2814057301717%29.jpg",
        "breakfast": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Bankalar_Caddesi_6836.jpg/960px-Bankalar_Caddesi_6836.jpg",
        "spa": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/4th_Vak%C4%B1f_Han_in_2024_5414.jpg/960px-4th_Vak%C4%B1f_Han_in_2024_5414.jpg",
        "view": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Y%C3%BCksek_Kald%C4%B1r%C4%B1m%2C_High_Street%2C_Karak%C3%B6y%2C_%C4%B0stanbul_%2814057301717%29.jpg/960px-Y%C3%BCksek_Kald%C4%B1r%C4%B1m%2C_High_Street%2C_Karak%C3%B6y%2C_%C4%B0stanbul_%2814057301717%29.jpg"
      }
    },
    {
      "name": "Pera Palace Hotel",
      "category": "Upper Mid-Range",
      "address": "Meşrutiyet Cd. · Beyoğlu · 34430",
      "price": "€250–400/night",
      "rating": "8.7",
      "googleRating": "4.4",
      "room": "Agatha Christie Suite · historic wing",
      "cancellation": "Free 48h",
      "tube": "Metro M2 · Şişhane · 5 min · Tünel funicular",
      "airport": "IST 50 min",
      "nearbyAttractions": "Istiklal Street 3 min · Galata Tower 10 min · Pera Museum 5 min",
      "walkingScore": "96 / 100 — Pera district",
      "breakfast": "Included in heritage rooms",
      "idealFor": [
        "History buffs",
        "Couple",
        "Luxury heritage"
      ],
      "tip": "Agatha Christie wrote Murder on the Orient Express here. Orient Bar and Kubbeli Saloon are Belle Époque gems.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Pera%20Palace%20Hotel%20Istanbul",
      "bookUrl": "https://www.perapalace.com/",
      "photos": {
        "exterior": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Pera_Palace_Hotel_Jumeirah_-_panoramio.jpg/960px-Pera_Palace_Hotel_Jumeirah_-_panoramio.jpg",
        "lobby": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Istanbul_asv2020-02_img39_Pera_Palace_Hotel.jpg/960px-Istanbul_asv2020-02_img39_Pera_Palace_Hotel.jpg",
        "room": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Me%C5%9Frutiyet_Street_and_Pera_Palas_Hotel.png/960px-Me%C5%9Frutiyet_Street_and_Pera_Palas_Hotel.png",
        "luxuryRoom": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Me%C5%9Frutiyet_Street_and_Pera_Palas_Hotel.png/960px-Me%C5%9Frutiyet_Street_and_Pera_Palas_Hotel.png",
        "restaurant": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Istanbul_asv2020-02_img39_Pera_Palace_Hotel.jpg/960px-Istanbul_asv2020-02_img39_Pera_Palace_Hotel.jpg",
        "pool": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Pera-Palas-Entrata-Tan.png/960px-Pera-Palas-Entrata-Tan.png",
        "rooftop": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Me%C5%9Frutiyet_Street_and_Pera_Palas_Hotel.png/960px-Me%C5%9Frutiyet_Street_and_Pera_Palas_Hotel.png",
        "breakfast": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Istanbul_asv2020-02_img39_Pera_Palace_Hotel.jpg/960px-Istanbul_asv2020-02_img39_Pera_Palace_Hotel.jpg",
        "spa": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Pera-Palas-Entrata-Tan.png/960px-Pera-Palas-Entrata-Tan.png",
        "view": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Me%C5%9Frutiyet_Street_and_Pera_Palas_Hotel.png/960px-Me%C5%9Frutiyet_Street_and_Pera_Palas_Hotel.png"
      }
    },
    {
      "name": "Meroddi Galata Mansion",
      "category": "Mid-Range",
      "address": "Galata Kulesi Sk. · Beyoğlu · 34421",
      "price": "€100–180/night",
      "rating": "8.9",
      "googleRating": "4.5",
      "room": "Deluxe Room · tower views",
      "cancellation": "Free 24h",
      "tube": "Metro M2 · Şişhane · 5 min",
      "airport": "IST 50 min",
      "nearbyAttractions": "Galata Tower 3 min · Istiklal 8 min · Karaköy 10 min",
      "walkingScore": "98 / 100 — Galata heart",
      "breakfast": "Included · rooftop",
      "idealFor": [
        "Solo",
        "Couple",
        "Best value"
      ],
      "tip": "Best value pick — excellent location perfect for first-time visitors. Rooftop breakfast with Galata Tower views.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Meroddi%20Galata%20Mansion%20Istanbul",
      "bookUrl": "https://www.meroddi.com/",
      "photos": {
        "exterior": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Istanbul_asv2020-02_img47_Galata_Tower.jpg/960px-Istanbul_asv2020-02_img47_Galata_Tower.jpg",
        "lobby": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/20101106_Galata_Tower_Istanbul_Turkey_Panorama.jpg/960px-20101106_Galata_Tower_Istanbul_Turkey_Panorama.jpg",
        "room": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Ceiling_of_Galata_Tower.jpg/960px-Ceiling_of_Galata_Tower.jpg",
        "luxuryRoom": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Ceiling_of_Galata_Tower.jpg/960px-Ceiling_of_Galata_Tower.jpg",
        "restaurant": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/20101106_Galata_Tower_Istanbul_Turkey_Panorama.jpg/960px-20101106_Galata_Tower_Istanbul_Turkey_Panorama.jpg",
        "pool": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Istanbul_Galata_Tower_IMG_7475_1800.jpg/960px-Istanbul_Galata_Tower_IMG_7475_1800.jpg",
        "rooftop": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Ceiling_of_Galata_Tower.jpg/960px-Ceiling_of_Galata_Tower.jpg",
        "breakfast": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/20101106_Galata_Tower_Istanbul_Turkey_Panorama.jpg/960px-20101106_Galata_Tower_Istanbul_Turkey_Panorama.jpg",
        "spa": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Istanbul_Galata_Tower_IMG_7475_1800.jpg/960px-Istanbul_Galata_Tower_IMG_7475_1800.jpg",
        "view": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Ceiling_of_Galata_Tower.jpg/960px-Ceiling_of_Galata_Tower.jpg"
      }
    },
    {
      "name": "Walton Hotels Galata",
      "category": "Mid-Range",
      "address": "Hacı Ali Sk. · Beyoğlu · 34425",
      "price": "€120–170/night",
      "rating": "8.6",
      "googleRating": "4.4",
      "room": "Modern Double · boutique design",
      "cancellation": "Free 48h",
      "tube": "Tram T1 · Karaköy · 6 min",
      "airport": "IST 45 min",
      "nearbyAttractions": "Galata Tower 5 min · Galataport 8 min · Karaköy 5 min",
      "walkingScore": "97 / 100 — walkable Galata",
      "breakfast": "Buffet included",
      "idealFor": [
        "Couple",
        "Solo",
        "Modern"
      ],
      "tip": "Modern rooms with great reviews. Walk everywhere in Galata and Karaköy without taxis.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Walton%20Hotels%20Galata%20Istanbul",
      "bookUrl": "https://www.waltonhotels.com/",
      "photos": {
        "exterior": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Istanbul_asv2020-02_img47_Galata_Tower.jpg/960px-Istanbul_asv2020-02_img47_Galata_Tower.jpg",
        "lobby": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/20101106_Galata_Tower_Istanbul_Turkey_Panorama.jpg/960px-20101106_Galata_Tower_Istanbul_Turkey_Panorama.jpg",
        "room": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Ceiling_of_Galata_Tower.jpg/960px-Ceiling_of_Galata_Tower.jpg",
        "luxuryRoom": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Ceiling_of_Galata_Tower.jpg/960px-Ceiling_of_Galata_Tower.jpg",
        "restaurant": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/20101106_Galata_Tower_Istanbul_Turkey_Panorama.jpg/960px-20101106_Galata_Tower_Istanbul_Turkey_Panorama.jpg",
        "pool": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Istanbul_Galata_Tower_IMG_7475_1800.jpg/960px-Istanbul_Galata_Tower_IMG_7475_1800.jpg",
        "rooftop": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Ceiling_of_Galata_Tower.jpg/960px-Ceiling_of_Galata_Tower.jpg",
        "breakfast": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/20101106_Galata_Tower_Istanbul_Turkey_Panorama.jpg/960px-20101106_Galata_Tower_Istanbul_Turkey_Panorama.jpg",
        "spa": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Istanbul_Galata_Tower_IMG_7475_1800.jpg/960px-Istanbul_Galata_Tower_IMG_7475_1800.jpg",
        "view": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Ceiling_of_Galata_Tower.jpg/960px-Ceiling_of_Galata_Tower.jpg"
      }
    },
    {
      "name": "Hotel Momento Golden Horn",
      "category": "Mid-Range",
      "address": "Azapkapı · Beyoğlu · 34421",
      "price": "€120–180/night",
      "rating": "8.5",
      "googleRating": "4.3",
      "room": "Golden Horn View · boutique",
      "cancellation": "Free 24h",
      "tube": "Tram T1 · Azapkapı · 2 min",
      "airport": "IST 45 min",
      "nearbyAttractions": "Galata Bridge 5 min · Spice Bazaar 10 min · Galata Tower 8 min",
      "walkingScore": "95 / 100 — Golden Horn",
      "breakfast": "Included · Bosphorus view",
      "idealFor": [
        "Couple",
        "Views",
        "Value"
      ],
      "tip": "Beautiful Golden Horn views and good breakfast at a mid-range price. Quiet compared to Sultanahmet.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Hotel%20Momento%20Golden%20Horn%20Istanbul",
      "bookUrl": "https://www.hotelmomento.com/",
      "photos": {
        "exterior": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Golden_Horn_Metro_Bridge_Mars_2013.jpg/960px-Golden_Horn_Metro_Bridge_Mars_2013.jpg",
        "lobby": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Golden_horn_view.jpg/960px-Golden_horn_view.jpg",
        "room": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Golden_Horn_and_european_side_of_Istanbul_001.jpg/960px-Golden_Horn_and_european_side_of_Istanbul_001.jpg",
        "luxuryRoom": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Golden_Horn_and_european_side_of_Istanbul_001.jpg/960px-Golden_Horn_and_european_side_of_Istanbul_001.jpg",
        "restaurant": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Golden_horn_view.jpg/960px-Golden_horn_view.jpg",
        "pool": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/20110711_Pierre_Loti_hill_view_Istanbul_Turkey_Panorama.jpg/960px-20110711_Pierre_Loti_hill_view_Istanbul_Turkey_Panorama.jpg",
        "rooftop": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Golden_Horn_and_european_side_of_Istanbul_001.jpg/960px-Golden_Horn_and_european_side_of_Istanbul_001.jpg",
        "breakfast": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Golden_horn_view.jpg/960px-Golden_horn_view.jpg",
        "spa": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/20110711_Pierre_Loti_hill_view_Istanbul_Turkey_Panorama.jpg/960px-20110711_Pierre_Loti_hill_view_Istanbul_Turkey_Panorama.jpg",
        "view": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Golden_Horn_and_european_side_of_Istanbul_001.jpg/960px-Golden_Horn_and_european_side_of_Istanbul_001.jpg"
      }
    },
    {
      "name": "Novotel Bosphorus",
      "category": "Mid-Range",
      "address": "Kılıçali Paşa · Karaköy · 34425",
      "price": "€150–230/night",
      "rating": "8.4",
      "googleRating": "4.3",
      "room": "Superior Room · pool access",
      "cancellation": "Free until 18:00 day of arrival",
      "tube": "Tram T1 · Karaköy · 3 min",
      "airport": "IST 45 min",
      "nearbyAttractions": "Galataport 4 min · Galata Tower 12 min · Tram to Sultanahmet 15 min",
      "walkingScore": "96 / 100 — Karaköy",
      "breakfast": "Buffet €18pp or included",
      "idealFor": [
        "Family",
        "Reliable",
        "Pool"
      ],
      "tip": "Reliable international chain with large rooms and pool — rare in central Istanbul. Good for families.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Novotel%20Bosphorus%20Istanbul",
      "bookUrl": "https://all.accor.com/hotel/B0K8/index.en.shtml",
      "photos": {
        "exterior": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Istanbul_asv2020-02_img46_Galata_Bridge_and_Tower.jpg/960px-Istanbul_asv2020-02_img46_Galata_Bridge_and_Tower.jpg",
        "lobby": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/20101106_Galata_Tower_Istanbul_Turkey_Panorama.jpg/960px-20101106_Galata_Tower_Istanbul_Turkey_Panorama.jpg",
        "room": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Karakoy_ferry_pier%2C_Istanbul_%28P1100291%29.jpg/960px-Karakoy_ferry_pier%2C_Istanbul_%28P1100291%29.jpg",
        "luxuryRoom": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Karakoy_ferry_pier%2C_Istanbul_%28P1100291%29.jpg/960px-Karakoy_ferry_pier%2C_Istanbul_%28P1100291%29.jpg",
        "restaurant": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/20101106_Galata_Tower_Istanbul_Turkey_Panorama.jpg/960px-20101106_Galata_Tower_Istanbul_Turkey_Panorama.jpg",
        "pool": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Istanbul_Bosphorus_IMG_7932_1920.jpg/960px-Istanbul_Bosphorus_IMG_7932_1920.jpg",
        "rooftop": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Karakoy_ferry_pier%2C_Istanbul_%28P1100291%29.jpg/960px-Karakoy_ferry_pier%2C_Istanbul_%28P1100291%29.jpg",
        "breakfast": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/20101106_Galata_Tower_Istanbul_Turkey_Panorama.jpg/960px-20101106_Galata_Tower_Istanbul_Turkey_Panorama.jpg",
        "spa": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Istanbul_Bosphorus_IMG_7932_1920.jpg/960px-Istanbul_Bosphorus_IMG_7932_1920.jpg",
        "view": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Karakoy_ferry_pier%2C_Istanbul_%28P1100291%29.jpg/960px-Karakoy_ferry_pier%2C_Istanbul_%28P1100291%29.jpg"
      }
    }
  ],
  "dining": [
    {
      "name": "Seven Hills Restaurant",
      "category": "Breakfast · Rooftop · Ottoman",
      "address": "Tevkifhane Sk. · Sultanahmet · Fatih",
      "price": "₺700–1,400 per person",
      "famous": "Traditional Turkish Breakfast with Hagia Sophia view",
      "halal": true,
      "vegetarian": true,
      "reservation": "Recommended for rooftop",
      "wait": "10–25 min at peak",
      "michelin": "—",
      "kidsFriendly": "Yes",
      "dressCode": "Smart casual",
      "tip": "Start Day 1 here — the terrace frames Hagia Sophia and the Blue Mosque. Return at sunset for the rooftop panorama before dinner.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Seven%20Hills%20Restaurant%20Istanbul",
      "bookUrl": "https://www.google.com/maps/search/?api=1&query=Seven%20Hills%20Restaurant%20Istanbul",
      "dishes": [
        {
          "name": "Serpme Kahvaltı",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Blue_Mosque_-_4.jpg/960px-Blue_Mosque_-_4.jpg",
          "desc": "Sprawling Turkish breakfast — cheeses, olives, honey, eggs and endless çay."
        },
        {
          "name": "Menemen",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Blue_Mosque_-_4.jpg/960px-Blue_Mosque_-_4.jpg",
          "desc": "Eggs scrambled with peppers, tomato and Turkish spices."
        },
        {
          "name": "Grilled Sea Bass",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Blue_Mosque_-_4.jpg/960px-Blue_Mosque_-_4.jpg",
          "desc": "Fresh Marmara catch with rocket and lemon."
        },
        {
          "name": "Lamb Şiş",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Blue_Mosque_-_4.jpg/960px-Blue_Mosque_-_4.jpg",
          "desc": "Charcoal-grilled skewers with pilav."
        },
        {
          "name": "Baklava & Turkish Coffee",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Blue_Mosque_-_4.jpg/960px-Blue_Mosque_-_4.jpg",
          "desc": "Pistachio layers with thick unfiltered coffee."
        }
      ],
      "photos": {
        "signature": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Blue_Mosque_-_4.jpg/960px-Blue_Mosque_-_4.jpg",
        "interior": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Blue_Mosque_-_4.jpg/960px-Blue_Mosque_-_4.jpg",
        "exterior": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Blue_Mosque_-_4.jpg/960px-Blue_Mosque_-_4.jpg",
        "dessert": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Blue_Mosque_-_4.jpg/960px-Blue_Mosque_-_4.jpg",
        "coffee": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Blue_Mosque_-_4.jpg/960px-Blue_Mosque_-_4.jpg"
      }
    },
    {
      "name": "Hafız Mustafa",
      "category": "Dessert · Coffee · Since 1864",
      "address": "Divanyolu Cd. · Sultanahmet · Fatih",
      "price": "₺250–600 per person",
      "famous": "Baklava & Turkish Coffee",
      "halal": true,
      "vegetarian": true,
      "reservation": "Walk-in",
      "wait": "5–15 min",
      "michelin": "—",
      "kidsFriendly": "Yes",
      "dressCode": "Casual",
      "tip": "A 160-year Istanbul institution. Perfect mid-morning coffee break on Day 1 — try the pistachio baklava and Turkish delight boxes to take home.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Haf%C4%B1z%20Mustafa%20Istanbul",
      "bookUrl": "https://www.google.com/maps/search/?api=1&query=Haf%C4%B1z%20Mustafa%20Istanbul",
      "dishes": [
        {
          "name": "Pistachio Baklava",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/%C5%9E%C3%B6biyet%2C_Baklava_and_Kaday%C4%B1f.jpg/960px-%C5%9E%C3%B6biyet%2C_Baklava_and_Kaday%C4%B1f.jpg",
          "desc": "Flaky layers soaked in light syrup — the house signature."
        },
        {
          "name": "Turkish Coffee",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Kaday%C4%B1f_and_other_Turkish_desserts.jpg/960px-Kaday%C4%B1f_and_other_Turkish_desserts.jpg",
          "desc": "Thick and unfiltered, served with lokum."
        },
        {
          "name": "Künefe",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Turkish_Baklava_delight.jpg/960px-Turkish_Baklava_delight.jpg",
          "desc": "Shredded pastry over melting cheese, in syrup."
        },
        {
          "name": "Turkish Delight",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/%C5%9E%C3%B6biyet_Baklava.jpg/960px-%C5%9E%C3%B6biyet_Baklava.jpg",
          "desc": "Rose, pomegranate and double-pistachio lokum."
        },
        {
          "name": "Sütlaç",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/%C5%9E%C3%B6biyet%2C_Baklava_and_Kaday%C4%B1f.jpg/960px-%C5%9E%C3%B6biyet%2C_Baklava_and_Kaday%C4%B1f.jpg",
          "desc": "Oven-baked rice pudding with a caramelised top."
        }
      ],
      "photos": {
        "signature": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/%C5%9E%C3%B6biyet%2C_Baklava_and_Kaday%C4%B1f.jpg/960px-%C5%9E%C3%B6biyet%2C_Baklava_and_Kaday%C4%B1f.jpg",
        "interior": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Kaday%C4%B1f_and_other_Turkish_desserts.jpg/960px-Kaday%C4%B1f_and_other_Turkish_desserts.jpg",
        "exterior": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Turkish_Baklava_delight.jpg/960px-Turkish_Baklava_delight.jpg",
        "dessert": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/%C5%9E%C3%B6biyet_Baklava.jpg/960px-%C5%9E%C3%B6biyet_Baklava.jpg",
        "coffee": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Kaday%C4%B1f_and_other_Turkish_desserts.jpg/960px-Kaday%C4%B1f_and_other_Turkish_desserts.jpg"
      }
    },
    {
      "name": "Deraliye Ottoman Cuisine",
      "category": "Lunch · Ottoman Palace",
      "address": "Ticarethane Sk. · Sultanahmet · Fatih",
      "price": "₺800–1,800 per person",
      "famous": "Historic Ottoman palace recipes",
      "halal": true,
      "vegetarian": true,
      "reservation": "Recommended",
      "wait": "15–30 min without booking",
      "michelin": "—",
      "kidsFriendly": "Yes",
      "dressCode": "Smart casual",
      "tip": "Recreates dishes once served to sultans. Order the tasting menu of Topkapı-era recipes — a memorable Day 1 lunch near the monuments.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Deraliye%20Ottoman%20Cuisine%20Istanbul",
      "bookUrl": "https://www.google.com/maps/search/?api=1&query=Deraliye%20Ottoman%20Cuisine%20Istanbul",
      "dishes": [
        {
          "name": "Goose Kebab",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Turkish_Pilaf_Rice_-_degustation_-_Ottoman_Cuisine_%283061206332%29.jpg/960px-Turkish_Pilaf_Rice_-_degustation_-_Ottoman_Cuisine_%283061206332%29.jpg",
          "desc": "A rare Ottoman court recipe — slow-roasted and fragrant."
        },
        {
          "name": "Mahmudiye",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Kulbasti_Char-grilled_Veal_with_Mustard_Sauce_-_degustation_-_Ottoman_Cuisine.jpg/960px-Kulbasti_Char-grilled_Veal_with_Mustard_Sauce_-_degustation_-_Ottoman_Cuisine.jpg",
          "desc": "Chicken with almonds, apricots and honey — a palace classic."
        },
        {
          "name": "Stuffed Melon (Kavun Dolması)",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/M%C3%BCcebbene.jpg/960px-M%C3%BCcebbene.jpg",
          "desc": "15th-century recipe of minced lamb, rice and nuts."
        },
        {
          "name": "Hünkar Beğendi",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Village_oven.JPG/960px-Village_oven.JPG",
          "desc": "Lamb stew over smoked aubergine purée."
        },
        {
          "name": "Ottoman Sherbet",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Turkish_Pilaf_Rice_-_degustation_-_Ottoman_Cuisine_%283061206332%29.jpg/960px-Turkish_Pilaf_Rice_-_degustation_-_Ottoman_Cuisine_%283061206332%29.jpg",
          "desc": "Rosewater and fruit drink from imperial kitchens."
        }
      ],
      "photos": {
        "signature": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Turkish_Pilaf_Rice_-_degustation_-_Ottoman_Cuisine_%283061206332%29.jpg/960px-Turkish_Pilaf_Rice_-_degustation_-_Ottoman_Cuisine_%283061206332%29.jpg",
        "interior": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Kulbasti_Char-grilled_Veal_with_Mustard_Sauce_-_degustation_-_Ottoman_Cuisine.jpg/960px-Kulbasti_Char-grilled_Veal_with_Mustard_Sauce_-_degustation_-_Ottoman_Cuisine.jpg",
        "exterior": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/M%C3%BCcebbene.jpg/960px-M%C3%BCcebbene.jpg",
        "dessert": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Village_oven.JPG/960px-Village_oven.JPG",
        "coffee": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Kulbasti_Char-grilled_Veal_with_Mustard_Sauce_-_degustation_-_Ottoman_Cuisine.jpg/960px-Kulbasti_Char-grilled_Veal_with_Mustard_Sauce_-_degustation_-_Ottoman_Cuisine.jpg"
      }
    },
    {
      "name": "Matbah Restaurant",
      "category": "Dinner · Ottoman Fine Dining",
      "address": "Caferiye Sk. · Sultanahmet · Fatih",
      "price": "₺900–2,000 per person",
      "famous": "Ottoman court cuisine",
      "halal": true,
      "vegetarian": true,
      "reservation": "Recommended",
      "wait": "10–20 min",
      "michelin": "—",
      "kidsFriendly": "Yes",
      "dressCode": "Smart casual",
      "tip": "Set beside the Ottoman-era Ottoman Hotel — candlelit courtyard dining. Ideal romantic Day 1 dinner after the Sultanahmet monuments.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Matbah%20Restaurant%20Istanbul",
      "bookUrl": "https://www.google.com/maps/search/?api=1&query=Matbah%20Restaurant%20Istanbul",
      "dishes": [
        {
          "name": "Lamb Tandır",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Turkish_Pilaf_Rice_-_degustation_-_Ottoman_Cuisine_%283061206332%29.jpg/960px-Turkish_Pilaf_Rice_-_degustation_-_Ottoman_Cuisine_%283061206332%29.jpg",
          "desc": "Slow-cooked until falling off the bone."
        },
        {
          "name": "Müttefer",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Kulbasti_Char-grilled_Veal_with_Mustard_Sauce_-_degustation_-_Ottoman_Cuisine.jpg/960px-Kulbasti_Char-grilled_Veal_with_Mustard_Sauce_-_degustation_-_Ottoman_Cuisine.jpg",
          "desc": "Ottoman lamb and vegetable stew with saffron."
        },
        {
          "name": "Circassian Chicken",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Mutancana.jpg/960px-Mutancana.jpg",
          "desc": "Poached chicken in a walnut sauce."
        },
        {
          "name": "Quince Dessert",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Baklava%2C_pomegranite_ice_cream%2C_mastic-flavoured_custard_%283061207178%29.jpg/960px-Baklava%2C_pomegranite_ice_cream%2C_mastic-flavoured_custard_%283061207178%29.jpg",
          "desc": "Baked quince with clotted cream and syrup."
        },
        {
          "name": "Ottoman Meze Selection",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Turkish_Pilaf_Rice_-_degustation_-_Ottoman_Cuisine_%283061206332%29.jpg/960px-Turkish_Pilaf_Rice_-_degustation_-_Ottoman_Cuisine_%283061206332%29.jpg",
          "desc": "Seasonal starters to share."
        }
      ],
      "photos": {
        "signature": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Turkish_Pilaf_Rice_-_degustation_-_Ottoman_Cuisine_%283061206332%29.jpg/960px-Turkish_Pilaf_Rice_-_degustation_-_Ottoman_Cuisine_%283061206332%29.jpg",
        "interior": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Kulbasti_Char-grilled_Veal_with_Mustard_Sauce_-_degustation_-_Ottoman_Cuisine.jpg/960px-Kulbasti_Char-grilled_Veal_with_Mustard_Sauce_-_degustation_-_Ottoman_Cuisine.jpg",
        "exterior": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Mutancana.jpg/960px-Mutancana.jpg",
        "dessert": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Baklava%2C_pomegranite_ice_cream%2C_mastic-flavoured_custard_%283061207178%29.jpg/960px-Baklava%2C_pomegranite_ice_cream%2C_mastic-flavoured_custard_%283061207178%29.jpg",
        "coffee": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Kulbasti_Char-grilled_Veal_with_Mustard_Sauce_-_degustation_-_Ottoman_Cuisine.jpg/960px-Kulbasti_Char-grilled_Veal_with_Mustard_Sauce_-_degustation_-_Ottoman_Cuisine.jpg"
      }
    },
    {
      "name": "Pandeli Restaurant",
      "category": "Lunch · Historic · Since 1901",
      "address": "Spice Bazaar Gate · Eminönü · Fatih",
      "price": "₺700–1,600 per person",
      "famous": "Turquoise-tiled dining above the Spice Bazaar",
      "halal": true,
      "vegetarian": true,
      "reservation": "Recommended for lunch",
      "wait": "15–25 min",
      "michelin": "—",
      "kidsFriendly": "Yes",
      "dressCode": "Smart casual",
      "tip": "A İznik-tiled institution above the Spice Bazaar gate. Book a window table for Day 2 lunch — the sea bass in paper is legendary.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Pandeli%20Restaurant%20Istanbul",
      "bookUrl": "https://www.google.com/maps/search/?api=1&query=Pandeli%20Restaurant%20Istanbul",
      "dishes": [
        {
          "name": "Levrek Kağıtta",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/S%C3%BCleymaniye_Mosque_%288393803091%29.jpg/960px-S%C3%BCleymaniye_Mosque_%288393803091%29.jpg",
          "desc": "Sea bass baked in paper — the signature."
        },
        {
          "name": "Aubergine Börek",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/S%C3%BCleymaniye_Mosque_%288393803091%29.jpg/960px-S%C3%BCleymaniye_Mosque_%288393803091%29.jpg",
          "desc": "Crisp pastry with smoky aubergine."
        },
        {
          "name": "Lamb Stew",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/S%C3%BCleymaniye_Mosque_%288393803091%29.jpg/960px-S%C3%BCleymaniye_Mosque_%288393803091%29.jpg",
          "desc": "Tender lamb in a rich tomato base."
        },
        {
          "name": "Stuffed Vine Leaves",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/S%C3%BCleymaniye_Mosque_%288393803091%29.jpg/960px-S%C3%BCleymaniye_Mosque_%288393803091%29.jpg",
          "desc": "Olive-oil dolma with pine nuts."
        },
        {
          "name": "Ekmek Kadayıfı",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/S%C3%BCleymaniye_Mosque_%288393803091%29.jpg/960px-S%C3%BCleymaniye_Mosque_%288393803091%29.jpg",
          "desc": "Bread pudding with clotted cream."
        }
      ],
      "photos": {
        "signature": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/S%C3%BCleymaniye_Mosque_%288393803091%29.jpg/960px-S%C3%BCleymaniye_Mosque_%288393803091%29.jpg",
        "interior": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/S%C3%BCleymaniye_Mosque_%288393803091%29.jpg/960px-S%C3%BCleymaniye_Mosque_%288393803091%29.jpg",
        "exterior": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/S%C3%BCleymaniye_Mosque_%288393803091%29.jpg/960px-S%C3%BCleymaniye_Mosque_%288393803091%29.jpg",
        "dessert": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/S%C3%BCleymaniye_Mosque_%288393803091%29.jpg/960px-S%C3%BCleymaniye_Mosque_%288393803091%29.jpg",
        "coffee": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/S%C3%BCleymaniye_Mosque_%288393803091%29.jpg/960px-S%C3%BCleymaniye_Mosque_%288393803091%29.jpg"
      }
    },
    {
      "name": "Hamdi Restaurant",
      "category": "Dinner · Kebab · Golden Horn View",
      "address": "Kalçın Sk. · Eminönü · Fatih",
      "price": "₺700–1,500 per person",
      "famous": "Southeastern kebabs with Golden Horn views",
      "halal": true,
      "vegetarian": true,
      "reservation": "Essential for terrace",
      "wait": "20–40 min without booking",
      "michelin": "—",
      "kidsFriendly": "Yes",
      "dressCode": "Smart casual",
      "tip": "Book the top-floor terrace for Day 2 dinner — Galata Bridge and the Golden Horn glitter below. The pistachio kebab is unmissable.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Hamdi%20Restaurant%20Istanbul",
      "bookUrl": "https://www.google.com/maps/search/?api=1&query=Hamdi%20Restaurant%20Istanbul",
      "dishes": [
        {
          "name": "Fıstıklı Kebab",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Galata_K%C3%B6pr%C3%BCs%C3%BC_-%C4%B0stanbul_%28Hamdi_restaurant_balkonundan_%29_-_panoramio.jpg/960px-Galata_K%C3%B6pr%C3%BCs%C3%BC_-%C4%B0stanbul_%28Hamdi_restaurant_balkonundan_%29_-_panoramio.jpg",
          "desc": "Minced lamb kebab studded with Antep pistachios."
        },
        {
          "name": "Lahmacun",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Galata_K%C3%B6pr%C3%BCs%C3%BC_-%C4%B0stanbul_%28Hamdi_restaurant_balkonundan_%29_-_panoramio.jpg/960px-Galata_K%C3%B6pr%C3%BCs%C3%BC_-%C4%B0stanbul_%28Hamdi_restaurant_balkonundan_%29_-_panoramio.jpg",
          "desc": "Thin crisp base with spiced minced lamb."
        },
        {
          "name": "Içli Köfte",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Galata_K%C3%B6pr%C3%BCs%C3%BC_-%C4%B0stanbul_%28Hamdi_restaurant_balkonundan_%29_-_panoramio.jpg/960px-Galata_K%C3%B6pr%C3%BCs%C3%BC_-%C4%B0stanbul_%28Hamdi_restaurant_balkonundan_%29_-_panoramio.jpg",
          "desc": "Bulgur shells filled with lamb and walnut."
        },
        {
          "name": "Künefe",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Galata_K%C3%B6pr%C3%BCs%C3%BC_-%C4%B0stanbul_%28Hamdi_restaurant_balkonundan_%29_-_panoramio.jpg/960px-Galata_K%C3%B6pr%C3%BCs%C3%BC_-%C4%B0stanbul_%28Hamdi_restaurant_balkonundan_%29_-_panoramio.jpg",
          "desc": "Cheese-filled pastry in syrup — order to share."
        },
        {
          "name": "Mixed Meze",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Galata_K%C3%B6pr%C3%BCs%C3%BC_-%C4%B0stanbul_%28Hamdi_restaurant_balkonundan_%29_-_panoramio.jpg/960px-Galata_K%C3%B6pr%C3%BCs%C3%BC_-%C4%B0stanbul_%28Hamdi_restaurant_balkonundan_%29_-_panoramio.jpg",
          "desc": "Southeastern spreads with warm bread."
        }
      ],
      "photos": {
        "signature": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Galata_K%C3%B6pr%C3%BCs%C3%BC_-%C4%B0stanbul_%28Hamdi_restaurant_balkonundan_%29_-_panoramio.jpg/960px-Galata_K%C3%B6pr%C3%BCs%C3%BC_-%C4%B0stanbul_%28Hamdi_restaurant_balkonundan_%29_-_panoramio.jpg",
        "interior": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Galata_K%C3%B6pr%C3%BCs%C3%BC_-%C4%B0stanbul_%28Hamdi_restaurant_balkonundan_%29_-_panoramio.jpg/960px-Galata_K%C3%B6pr%C3%BCs%C3%BC_-%C4%B0stanbul_%28Hamdi_restaurant_balkonundan_%29_-_panoramio.jpg",
        "exterior": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Galata_K%C3%B6pr%C3%BCs%C3%BC_-%C4%B0stanbul_%28Hamdi_restaurant_balkonundan_%29_-_panoramio.jpg/960px-Galata_K%C3%B6pr%C3%BCs%C3%BC_-%C4%B0stanbul_%28Hamdi_restaurant_balkonundan_%29_-_panoramio.jpg",
        "dessert": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Galata_K%C3%B6pr%C3%BCs%C3%BC_-%C4%B0stanbul_%28Hamdi_restaurant_balkonundan_%29_-_panoramio.jpg/960px-Galata_K%C3%B6pr%C3%BCs%C3%BC_-%C4%B0stanbul_%28Hamdi_restaurant_balkonundan_%29_-_panoramio.jpg",
        "coffee": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Galata_K%C3%B6pr%C3%BCs%C3%BC_-%C4%B0stanbul_%28Hamdi_restaurant_balkonundan_%29_-_panoramio.jpg/960px-Galata_K%C3%B6pr%C3%BCs%C3%BC_-%C4%B0stanbul_%28Hamdi_restaurant_balkonundan_%29_-_panoramio.jpg"
      }
    },
    {
      "name": "Namlı Gurme",
      "category": "Breakfast · Deli · Meze",
      "address": "Rıhtım Cd. · Karaköy · Beyoğlu",
      "price": "₺400–900 per person",
      "famous": "Legendary Karaköy breakfast & deli counter",
      "halal": true,
      "vegetarian": true,
      "reservation": "Walk-in",
      "wait": "10–25 min weekends",
      "michelin": "—",
      "kidsFriendly": "Yes",
      "dressCode": "Smart casual",
      "tip": "A Karaköy deli piled with cheeses, olives and charcuterie. Perfect Day 3 breakfast before climbing to Galata Tower — arrive before 09:30.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Naml%C4%B1%20Gurme%20Istanbul",
      "bookUrl": "https://www.google.com/maps/search/?api=1&query=Naml%C4%B1%20Gurme%20Istanbul",
      "dishes": [
        {
          "name": "Serpme Kahvaltı",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Tahin-pekmez.jpg/960px-Tahin-pekmez.jpg",
          "desc": "Enormous breakfast spread for sharing."
        },
        {
          "name": "Sucuklu Yumurta",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/CINAR_RESTAURANT_ILE_MUHTESEM_KAHVALTI_-_WONDERFUL_BREAKFAST_WITH_CINAR_RESTAURANT_-_SUPER_FR%C3%9CHST%C3%9CCK_BEI_CINAR_RESTAURANT_-_panoramio.jpg/960px-CINAR_RESTAURANT_ILE_MUHTESEM_KAHVALTI_-_WONDERFUL_BREAKFAST_WITH_CINAR_RESTAURANT_-_SUPER_FR%C3%9CHST%C3%9CCK_BEI_CINAR_RESTAURANT_-_panoramio.jpg",
          "desc": "Eggs with Turkish spiced sausage."
        },
        {
          "name": "Kaymak & Honey",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Istanbul_%2829%29.jpg/960px-Istanbul_%2829%29.jpg",
          "desc": "Clotted cream with comb honey and fresh bread."
        },
        {
          "name": "Cheese Selection",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Legislative_Budget_Breakfast_%2854268482230%29.jpg/960px-Legislative_Budget_Breakfast_%2854268482230%29.jpg",
          "desc": "Aged and fresh Anatolian cheeses."
        },
        {
          "name": "Simit & Çay",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Tahin-pekmez.jpg/960px-Tahin-pekmez.jpg",
          "desc": "Sesame ring bread with endless tea."
        }
      ],
      "photos": {
        "signature": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Tahin-pekmez.jpg/960px-Tahin-pekmez.jpg",
        "interior": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/CINAR_RESTAURANT_ILE_MUHTESEM_KAHVALTI_-_WONDERFUL_BREAKFAST_WITH_CINAR_RESTAURANT_-_SUPER_FR%C3%9CHST%C3%9CCK_BEI_CINAR_RESTAURANT_-_panoramio.jpg/960px-CINAR_RESTAURANT_ILE_MUHTESEM_KAHVALTI_-_WONDERFUL_BREAKFAST_WITH_CINAR_RESTAURANT_-_SUPER_FR%C3%9CHST%C3%9CCK_BEI_CINAR_RESTAURANT_-_panoramio.jpg",
        "exterior": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Istanbul_%2829%29.jpg/960px-Istanbul_%2829%29.jpg",
        "dessert": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Legislative_Budget_Breakfast_%2854268482230%29.jpg/960px-Legislative_Budget_Breakfast_%2854268482230%29.jpg",
        "coffee": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/CINAR_RESTAURANT_ILE_MUHTESEM_KAHVALTI_-_WONDERFUL_BREAKFAST_WITH_CINAR_RESTAURANT_-_SUPER_FR%C3%9CHST%C3%9CCK_BEI_CINAR_RESTAURANT_-_panoramio.jpg/960px-CINAR_RESTAURANT_ILE_MUHTESEM_KAHVALTI_-_WONDERFUL_BREAKFAST_WITH_CINAR_RESTAURANT_-_SUPER_FR%C3%9CHST%C3%9CCK_BEI_CINAR_RESTAURANT_-_panoramio.jpg"
      }
    },
    {
      "name": "Petra Roasting Co.",
      "category": "Café · Coffee",
      "address": "Serdar-ı Ekrem Sk. · Galata · Beyoğlu",
      "price": "₺80–₺250",
      "famous": "Specialty Coffee · Third Wave",
      "halal": true,
      "vegetarian": true,
      "reservation": "Walk-in",
      "wait": "5–20 min at peak",
      "michelin": "—",
      "kidsFriendly": "Yes",
      "dressCode": "Casual",
      "tip": "Istanbul cafés fill quickly on weekends — arrive before 09:30 for a terrace table.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Petra%20Roasting%20Co.%20Istanbul",
      "bookUrl": "https://www.google.com/maps/search/?api=1&query=Petra%20Roasting%20Co.%20Istanbul",
      "dishes": [
        {
          "name": "Specialty Coffee · Third Wave",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Soy-coffee-pot-240-01.jpg/960px-Soy-coffee-pot-240-01.jpg",
          "desc": "House specialty — order this first."
        },
        {
          "name": "Turkish Coffee",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/T%C3%BCrk_Kahvesi_-_Bakir_Cezve.jpg/960px-T%C3%BCrk_Kahvesi_-_Bakir_Cezve.jpg",
          "desc": "Thick, unfiltered, served with lokum."
        },
        {
          "name": "Menemen",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Cezve_coffee_pot_in_a_small_coffee_shop_on_the_side_of_the_road..jpg/960px-Cezve_coffee_pot_in_a_small_coffee_shop_on_the_side_of_the_road..jpg",
          "desc": "Scrambled eggs with peppers and tomato."
        },
        {
          "name": "Simit & Tea",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/To_make_the_Turkish_Coffee_%283180372276%29.jpg/960px-To_make_the_Turkish_Coffee_%283180372276%29.jpg",
          "desc": "Sesame ring bread with çay — Istanbul classic."
        },
        {
          "name": "Baklava",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Soy-coffee-pot-240-01.jpg/960px-Soy-coffee-pot-240-01.jpg",
          "desc": "Sweet finish with pistachios and syrup."
        }
      ],
      "photos": {
        "signature": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Soy-coffee-pot-240-01.jpg/960px-Soy-coffee-pot-240-01.jpg",
        "interior": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/T%C3%BCrk_Kahvesi_-_Bakir_Cezve.jpg/960px-T%C3%BCrk_Kahvesi_-_Bakir_Cezve.jpg",
        "exterior": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Cezve_coffee_pot_in_a_small_coffee_shop_on_the_side_of_the_road..jpg/960px-Cezve_coffee_pot_in_a_small_coffee_shop_on_the_side_of_the_road..jpg",
        "dessert": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/To_make_the_Turkish_Coffee_%283180372276%29.jpg/960px-To_make_the_Turkish_Coffee_%283180372276%29.jpg",
        "coffee": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/T%C3%BCrk_Kahvesi_-_Bakir_Cezve.jpg/960px-T%C3%BCrk_Kahvesi_-_Bakir_Cezve.jpg"
      }
    },
    {
      "name": "Karaköy Lokantası",
      "category": "Lunch · Meyhane · Turquoise Tiles",
      "address": "Kemankeş Cd. · Karaköy · Beyoğlu",
      "price": "₺600–1,300 per person",
      "famous": "Classic meyhane meze & grilled fish",
      "halal": true,
      "vegetarian": true,
      "reservation": "Recommended for lunch & dinner",
      "wait": "15–30 min",
      "michelin": "—",
      "kidsFriendly": "Yes",
      "dressCode": "Smart casual",
      "tip": "Turquoise-tiled Karaköy favourite — lunch is à la carte, evenings turn into a lively meyhane. Order a spread of hot and cold meze on Day 3.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Karak%C3%B6y%20Lokantas%C4%B1%20Istanbul",
      "bookUrl": "https://www.google.com/maps/search/?api=1&query=Karak%C3%B6y%20Lokantas%C4%B1%20Istanbul",
      "dishes": [
        {
          "name": "Grilled Sea Bream",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Turkish_meze_tarama.jpg/960px-Turkish_meze_tarama.jpg",
          "desc": "Daily catch simply grilled with greens."
        },
        {
          "name": "Hot & Cold Meze",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Meze-Taba%C4%9F%C4%B1.jpg/960px-Meze-Taba%C4%9F%C4%B1.jpg",
          "desc": "Choose a table full of Aegean starters."
        },
        {
          "name": "Fried Calamari",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Meze_plate.jpg/960px-Meze_plate.jpg",
          "desc": "Crisp with garlic-yogurt dip."
        },
        {
          "name": "Lamb Chops",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Meze_plate_from_Antakya.jpg/960px-Meze_plate_from_Antakya.jpg",
          "desc": "Charcoal-grilled and juicy."
        },
        {
          "name": "Künefe",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Turkish_meze_tarama.jpg/960px-Turkish_meze_tarama.jpg",
          "desc": "Warm cheese pastry in syrup."
        }
      ],
      "photos": {
        "signature": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Turkish_meze_tarama.jpg/960px-Turkish_meze_tarama.jpg",
        "interior": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Meze-Taba%C4%9F%C4%B1.jpg/960px-Meze-Taba%C4%9F%C4%B1.jpg",
        "exterior": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Meze_plate.jpg/960px-Meze_plate.jpg",
        "dessert": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Meze_plate_from_Antakya.jpg/960px-Meze_plate_from_Antakya.jpg",
        "coffee": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Meze-Taba%C4%9F%C4%B1.jpg/960px-Meze-Taba%C4%9F%C4%B1.jpg"
      }
    },
    {
      "name": "Feriye",
      "category": "Dinner · Bosphorus · Fine Dining",
      "address": "Çırağan Cd. · Ortaköy · Beşiktaş",
      "price": "₺1,000–2,400 per person",
      "famous": "Waterfront Ottoman fine dining",
      "halal": true,
      "vegetarian": true,
      "reservation": "Essential",
      "wait": "Booked-only terrace",
      "michelin": "—",
      "kidsFriendly": "Yes",
      "dressCode": "Smart",
      "tip": "Housed in a restored Ottoman palace pavilion right on the Bosphorus. Reserve a terrace table for Day 3 dinner as boats drift past.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Feriye%20Istanbul",
      "bookUrl": "https://www.google.com/maps/search/?api=1&query=Feriye%20Istanbul",
      "dishes": [
        {
          "name": "Sea Bass Fillet",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/GSUniversitesi.jpg/960px-GSUniversitesi.jpg",
          "desc": "Line-caught, served with seasonal vegetables."
        },
        {
          "name": "Lamb Shank",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Galatasaray_University_seen_from_the_sea.JPG/960px-Galatasaray_University_seen_from_the_sea.JPG",
          "desc": "Braised until tender with saffron pilav."
        },
        {
          "name": "Bosphorus Meze",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Y%C4%B1ld%C4%B1z_Mh.%2C_Vapur_%C4%B0skelesi_Sk.%2C_34349_Be%C5%9Fikta%C5%9F-%C4%B0stanbul%2C_Turkey_-_panoramio.jpg/960px-Y%C4%B1ld%C4%B1z_Mh.%2C_Vapur_%C4%B0skelesi_Sk.%2C_34349_Be%C5%9Fikta%C5%9F-%C4%B0stanbul%2C_Turkey_-_panoramio.jpg",
          "desc": "Refined cold starters with rakı."
        },
        {
          "name": "Grilled Prawns",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Mecidiye%2C_Mecidiye_K%C3%B6pr%C3%BCs%C3%BC_Sk._No-15%2C_34347_Be%C5%9Fikta%C5%9F-%C4%B0stanbul%2C_Turkey_-_panoramio.jpg/960px-Mecidiye%2C_Mecidiye_K%C3%B6pr%C3%BCs%C3%BC_Sk._No-15%2C_34347_Be%C5%9Fikta%C5%9F-%C4%B0stanbul%2C_Turkey_-_panoramio.jpg",
          "desc": "Butter and garlic, Bosphorus-side."
        },
        {
          "name": "Baklava Selection",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/GSUniversitesi.jpg/960px-GSUniversitesi.jpg",
          "desc": "Trio of pistachio and walnut baklava."
        }
      ],
      "photos": {
        "signature": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/GSUniversitesi.jpg/960px-GSUniversitesi.jpg",
        "interior": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Galatasaray_University_seen_from_the_sea.JPG/960px-Galatasaray_University_seen_from_the_sea.JPG",
        "exterior": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Y%C4%B1ld%C4%B1z_Mh.%2C_Vapur_%C4%B0skelesi_Sk.%2C_34349_Be%C5%9Fikta%C5%9F-%C4%B0stanbul%2C_Turkey_-_panoramio.jpg/960px-Y%C4%B1ld%C4%B1z_Mh.%2C_Vapur_%C4%B0skelesi_Sk.%2C_34349_Be%C5%9Fikta%C5%9F-%C4%B0stanbul%2C_Turkey_-_panoramio.jpg",
        "dessert": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Mecidiye%2C_Mecidiye_K%C3%B6pr%C3%BCs%C3%BC_Sk._No-15%2C_34347_Be%C5%9Fikta%C5%9F-%C4%B0stanbul%2C_Turkey_-_panoramio.jpg/960px-Mecidiye%2C_Mecidiye_K%C3%B6pr%C3%BCs%C3%BC_Sk._No-15%2C_34347_Be%C5%9Fikta%C5%9F-%C4%B0stanbul%2C_Turkey_-_panoramio.jpg",
        "coffee": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Galatasaray_University_seen_from_the_sea.JPG/960px-Galatasaray_University_seen_from_the_sea.JPG"
      }
    },
    {
      "name": "House Café Ortaköy",
      "category": "Café · Coffee",
      "address": "Salhane Sk. · Ortaköy · Beşiktaş",
      "price": "₺80–₺250",
      "famous": "Bosphorus Brunch · All-Day Café",
      "halal": true,
      "vegetarian": true,
      "reservation": "Walk-in",
      "wait": "5–20 min at peak",
      "michelin": "—",
      "kidsFriendly": "Yes",
      "dressCode": "Casual",
      "tip": "Istanbul cafés fill quickly on weekends — arrive before 09:30 for a terrace table.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=House%20Caf%C3%A9%20Ortak%C3%B6y%20Istanbul",
      "bookUrl": "https://www.google.com/maps/search/?api=1&query=House%20Caf%C3%A9%20Ortak%C3%B6y%20Istanbul",
      "dishes": [
        {
          "name": "Bosphorus Brunch · All-Day Café",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Istanbul_-_Ortak%C3%B6y_-_2025.jpg/960px-Istanbul_-_Ortak%C3%B6y_-_2025.jpg",
          "desc": "House specialty — order this first."
        },
        {
          "name": "Turkish Coffee",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Istanbul_-_Ortak%C3%B6y_-_2025.jpg/960px-Istanbul_-_Ortak%C3%B6y_-_2025.jpg",
          "desc": "Thick, unfiltered, served with lokum."
        },
        {
          "name": "Menemen",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Istanbul_-_Ortak%C3%B6y_-_2025.jpg/960px-Istanbul_-_Ortak%C3%B6y_-_2025.jpg",
          "desc": "Scrambled eggs with peppers and tomato."
        },
        {
          "name": "Simit & Tea",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Istanbul_-_Ortak%C3%B6y_-_2025.jpg/960px-Istanbul_-_Ortak%C3%B6y_-_2025.jpg",
          "desc": "Sesame ring bread with çay — Istanbul classic."
        },
        {
          "name": "Baklava",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Istanbul_-_Ortak%C3%B6y_-_2025.jpg/960px-Istanbul_-_Ortak%C3%B6y_-_2025.jpg",
          "desc": "Sweet finish with pistachios and syrup."
        }
      ],
      "photos": {
        "signature": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Istanbul_-_Ortak%C3%B6y_-_2025.jpg/960px-Istanbul_-_Ortak%C3%B6y_-_2025.jpg",
        "interior": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Istanbul_-_Ortak%C3%B6y_-_2025.jpg/960px-Istanbul_-_Ortak%C3%B6y_-_2025.jpg",
        "exterior": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Istanbul_-_Ortak%C3%B6y_-_2025.jpg/960px-Istanbul_-_Ortak%C3%B6y_-_2025.jpg",
        "dessert": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Istanbul_-_Ortak%C3%B6y_-_2025.jpg/960px-Istanbul_-_Ortak%C3%B6y_-_2025.jpg",
        "coffee": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Istanbul_-_Ortak%C3%B6y_-_2025.jpg/960px-Istanbul_-_Ortak%C3%B6y_-_2025.jpg"
      }
    },
    {
      "name": "Banyan",
      "category": "Lunch · Asian Fusion · Bosphorus",
      "address": "Muallim Naci Cd. · Ortaköy · Beşiktaş",
      "price": "₺800–1,700 per person",
      "famous": "Pan-Asian dishes with Ortaköy Mosque view",
      "halal": true,
      "vegetarian": true,
      "reservation": "Recommended",
      "wait": "15–25 min",
      "michelin": "—",
      "kidsFriendly": "Yes",
      "dressCode": "Smart casual",
      "tip": "Rooftop Asian fusion framing the Ortaköy Mosque and Bosphorus Bridge. A lighter Day 4 lunch between palace visits.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Banyan%20Istanbul",
      "bookUrl": "https://www.google.com/maps/search/?api=1&query=Banyan%20Istanbul",
      "dishes": [
        {
          "name": "Pad Thai",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/India_%28Ranthambhore_National_Park%29_Tunnel_through_huge_banyan_trees_%2832430905983%29.jpg/960px-India_%28Ranthambhore_National_Park%29_Tunnel_through_huge_banyan_trees_%2832430905983%29.jpg",
          "desc": "Wok noodles with tamarind and peanuts."
        },
        {
          "name": "Dim Sum Selection",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/India_%28Ranthambhore_National_Park%29_Tunnel_through_huge_banyan_trees_%2832430905983%29.jpg/960px-India_%28Ranthambhore_National_Park%29_Tunnel_through_huge_banyan_trees_%2832430905983%29.jpg",
          "desc": "Steamed dumplings to share."
        },
        {
          "name": "Wok Prawns",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/India_%28Ranthambhore_National_Park%29_Tunnel_through_huge_banyan_trees_%2832430905983%29.jpg/960px-India_%28Ranthambhore_National_Park%29_Tunnel_through_huge_banyan_trees_%2832430905983%29.jpg",
          "desc": "Ginger, chilli and spring onion."
        },
        {
          "name": "Miso Sea Bass",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/India_%28Ranthambhore_National_Park%29_Tunnel_through_huge_banyan_trees_%2832430905983%29.jpg/960px-India_%28Ranthambhore_National_Park%29_Tunnel_through_huge_banyan_trees_%2832430905983%29.jpg",
          "desc": "Marinated and grilled fusion style."
        },
        {
          "name": "Mango Sticky Rice",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/India_%28Ranthambhore_National_Park%29_Tunnel_through_huge_banyan_trees_%2832430905983%29.jpg/960px-India_%28Ranthambhore_National_Park%29_Tunnel_through_huge_banyan_trees_%2832430905983%29.jpg",
          "desc": "Coconut rice with fresh mango."
        }
      ],
      "photos": {
        "signature": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/India_%28Ranthambhore_National_Park%29_Tunnel_through_huge_banyan_trees_%2832430905983%29.jpg/960px-India_%28Ranthambhore_National_Park%29_Tunnel_through_huge_banyan_trees_%2832430905983%29.jpg",
        "interior": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/India_%28Ranthambhore_National_Park%29_Tunnel_through_huge_banyan_trees_%2832430905983%29.jpg/960px-India_%28Ranthambhore_National_Park%29_Tunnel_through_huge_banyan_trees_%2832430905983%29.jpg",
        "exterior": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/India_%28Ranthambhore_National_Park%29_Tunnel_through_huge_banyan_trees_%2832430905983%29.jpg/960px-India_%28Ranthambhore_National_Park%29_Tunnel_through_huge_banyan_trees_%2832430905983%29.jpg",
        "dessert": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/India_%28Ranthambhore_National_Park%29_Tunnel_through_huge_banyan_trees_%2832430905983%29.jpg/960px-India_%28Ranthambhore_National_Park%29_Tunnel_through_huge_banyan_trees_%2832430905983%29.jpg",
        "coffee": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/India_%28Ranthambhore_National_Park%29_Tunnel_through_huge_banyan_trees_%2832430905983%29.jpg/960px-India_%28Ranthambhore_National_Park%29_Tunnel_through_huge_banyan_trees_%2832430905983%29.jpg"
      }
    },
    {
      "name": "Sunset Grill & Bar",
      "category": "Dinner · Fine Dining · Panorama",
      "address": "Kuruçeşme Cd. · Ulus · Beşiktaş",
      "price": "₺1,500–3,500 per person",
      "famous": "Bosphorus panorama & world-class wine list",
      "halal": true,
      "vegetarian": true,
      "reservation": "Essential",
      "wait": "Booked-only",
      "michelin": "—",
      "kidsFriendly": "Yes",
      "dressCode": "Smart",
      "tip": "Perched on Ulus hill with a sweeping Bosphorus panorama — one of Istanbul's most romantic tables. Reserve at sunset to close Day 4 in style.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Sunset%20Grill%20%26%20Bar%20Istanbul",
      "bookUrl": "https://www.google.com/maps/search/?api=1&query=Sunset%20Grill%20%26%20Bar%20Istanbul",
      "dishes": [
        {
          "name": "Dry-Aged Steak",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Bosphorus-Bridge-night-view-Istanbul.jpg/960px-Bosphorus-Bridge-night-view-Istanbul.jpg",
          "desc": "Premium cuts grilled to order."
        },
        {
          "name": "Sushi Selection",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Bosphorus-Bridge-night-traffic-Istanbul.jpg/960px-Bosphorus-Bridge-night-traffic-Istanbul.jpg",
          "desc": "Fresh nigiri and maki from the sushi bar."
        },
        {
          "name": "Grilled Lobster",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Bosphorus_Bridge_%281973%29_in_Istanbul.jpg/960px-Bosphorus_Bridge_%281973%29_in_Istanbul.jpg",
          "desc": "Butter-basted with seasonal sides."
        },
        {
          "name": "Sea Bass Carpaccio",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Bosphorus_Bridge_at_night.jpg/960px-Bosphorus_Bridge_at_night.jpg",
          "desc": "Citrus-cured with olive oil."
        },
        {
          "name": "Chocolate Soufflé",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Bosphorus-Bridge-night-view-Istanbul.jpg/960px-Bosphorus-Bridge-night-view-Istanbul.jpg",
          "desc": "Warm centre with vanilla ice cream."
        }
      ],
      "photos": {
        "signature": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Bosphorus-Bridge-night-view-Istanbul.jpg/960px-Bosphorus-Bridge-night-view-Istanbul.jpg",
        "interior": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Bosphorus-Bridge-night-traffic-Istanbul.jpg/960px-Bosphorus-Bridge-night-traffic-Istanbul.jpg",
        "exterior": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Bosphorus_Bridge_%281973%29_in_Istanbul.jpg/960px-Bosphorus_Bridge_%281973%29_in_Istanbul.jpg",
        "dessert": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Bosphorus_Bridge_at_night.jpg/960px-Bosphorus_Bridge_at_night.jpg",
        "coffee": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Bosphorus-Bridge-night-traffic-Istanbul.jpg/960px-Bosphorus-Bridge-night-traffic-Istanbul.jpg"
      }
    },
    {
      "name": "Kanaat Lokantası",
      "category": "Lunch · Esnaf · Since 1933",
      "address": "Selmanipak Cd. · Üsküdar",
      "price": "₺300–700 per person",
      "famous": "Classic tradesmen's Turkish home cooking",
      "halal": true,
      "vegetarian": true,
      "reservation": "Walk-in",
      "wait": "10–20 min",
      "michelin": "—",
      "kidsFriendly": "Yes",
      "dressCode": "Smart casual",
      "tip": "An Üsküdar institution since 1933 — point at the daily home-cooked dishes in the counter. Authentic Asian-side Day 5 lunch.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Kanaat%20Lokantas%C4%B1%20Istanbul",
      "bookUrl": "https://www.google.com/maps/search/?api=1&query=Kanaat%20Lokantas%C4%B1%20Istanbul",
      "dishes": [
        {
          "name": "Hünkar Beğendi",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/%C3%9Csk%C3%BCdar_Kanaat_Lokantas%C4%B1_%2834243555222%29.jpg/960px-%C3%9Csk%C3%BCdar_Kanaat_Lokantas%C4%B1_%2834243555222%29.jpg",
          "desc": "Lamb over creamy smoked aubergine."
        },
        {
          "name": "Kuru Fasulye",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/%C3%9Csk%C3%BCdar_Kanaat_Lokantas%C4%B1_%2834243555222%29.jpg/960px-%C3%9Csk%C3%BCdar_Kanaat_Lokantas%C4%B1_%2834243555222%29.jpg",
          "desc": "White beans in tomato — comfort food classic."
        },
        {
          "name": "İçli Köfte",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/%C3%9Csk%C3%BCdar_Kanaat_Lokantas%C4%B1_%2834243555222%29.jpg/960px-%C3%9Csk%C3%BCdar_Kanaat_Lokantas%C4%B1_%2834243555222%29.jpg",
          "desc": "Stuffed bulgur croquettes."
        },
        {
          "name": "Su Böreği",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/%C3%9Csk%C3%BCdar_Kanaat_Lokantas%C4%B1_%2834243555222%29.jpg/960px-%C3%9Csk%C3%BCdar_Kanaat_Lokantas%C4%B1_%2834243555222%29.jpg",
          "desc": "Layered pastry with cheese."
        },
        {
          "name": "Kazandibi",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/%C3%9Csk%C3%BCdar_Kanaat_Lokantas%C4%B1_%2834243555222%29.jpg/960px-%C3%9Csk%C3%BCdar_Kanaat_Lokantas%C4%B1_%2834243555222%29.jpg",
          "desc": "Caramelised milk pudding."
        }
      ],
      "photos": {
        "signature": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/%C3%9Csk%C3%BCdar_Kanaat_Lokantas%C4%B1_%2834243555222%29.jpg/960px-%C3%9Csk%C3%BCdar_Kanaat_Lokantas%C4%B1_%2834243555222%29.jpg",
        "interior": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/%C3%9Csk%C3%BCdar_Kanaat_Lokantas%C4%B1_%2834243555222%29.jpg/960px-%C3%9Csk%C3%BCdar_Kanaat_Lokantas%C4%B1_%2834243555222%29.jpg",
        "exterior": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/%C3%9Csk%C3%BCdar_Kanaat_Lokantas%C4%B1_%2834243555222%29.jpg/960px-%C3%9Csk%C3%BCdar_Kanaat_Lokantas%C4%B1_%2834243555222%29.jpg",
        "dessert": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/%C3%9Csk%C3%BCdar_Kanaat_Lokantas%C4%B1_%2834243555222%29.jpg/960px-%C3%9Csk%C3%BCdar_Kanaat_Lokantas%C4%B1_%2834243555222%29.jpg",
        "coffee": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/%C3%9Csk%C3%BCdar_Kanaat_Lokantas%C4%B1_%2834243555222%29.jpg/960px-%C3%9Csk%C3%BCdar_Kanaat_Lokantas%C4%B1_%2834243555222%29.jpg"
      }
    },
    {
      "name": "Çiya Sofrası",
      "category": "Dinner · Anatolian · Kadıköy",
      "address": "Güneşlibahçe Sk. · Kadıköy",
      "price": "₺400–900 per person",
      "famous": "Regional Anatolian dishes & forgotten recipes",
      "halal": true,
      "vegetarian": true,
      "reservation": "Walk-in · busy evenings",
      "wait": "15–30 min",
      "michelin": "—",
      "kidsFriendly": "Yes",
      "dressCode": "Smart casual",
      "tip": "Chef Musa Dağdeviren's temple to regional Anatolian cooking. Choose from the ever-changing counter — a food-lover's Day 5 dinner in Kadıköy.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%C3%87iya%20Sofras%C4%B1%20Istanbul",
      "bookUrl": "https://www.google.com/maps/search/?api=1&query=%C3%87iya%20Sofras%C4%B1%20Istanbul",
      "dishes": [
        {
          "name": "Kebab with Sour Cherry",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Lamb_shish_kebab_-_Ankara.jpg/960px-Lamb_shish_kebab_-_Ankara.jpg",
          "desc": "Antep-style lamb with tart cherries."
        },
        {
          "name": "Wild Herb Salads",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Assiette_kebab_%C3%A0_Lyon_en_mai_2023.jpg/960px-Assiette_kebab_%C3%A0_Lyon_en_mai_2023.jpg",
          "desc": "Seasonal Anatolian greens and herbs."
        },
        {
          "name": "Stuffed Dishes (Dolma)",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Restaurant_de_l%27Angle_%28Lyon%29_-_assiette_kebab_%28mars_2022%29.JPG/960px-Restaurant_de_l%27Angle_%28Lyon%29_-_assiette_kebab_%28mars_2022%29.JPG",
          "desc": "Vegetables filled with spiced rice."
        },
        {
          "name": "Slow-Cooked Stews",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Ci%C4%9Fer_kebab.jpg/960px-Ci%C4%9Fer_kebab.jpg",
          "desc": "Regional recipes rotated daily."
        },
        {
          "name": "Candied Vegetables",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Lamb_shish_kebab_-_Ankara.jpg/960px-Lamb_shish_kebab_-_Ankara.jpg",
          "desc": "Famous tomato, pumpkin or walnut desserts."
        }
      ],
      "photos": {
        "signature": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Lamb_shish_kebab_-_Ankara.jpg/960px-Lamb_shish_kebab_-_Ankara.jpg",
        "interior": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Assiette_kebab_%C3%A0_Lyon_en_mai_2023.jpg/960px-Assiette_kebab_%C3%A0_Lyon_en_mai_2023.jpg",
        "exterior": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Restaurant_de_l%27Angle_%28Lyon%29_-_assiette_kebab_%28mars_2022%29.JPG/960px-Restaurant_de_l%27Angle_%28Lyon%29_-_assiette_kebab_%28mars_2022%29.JPG",
        "dessert": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Ci%C4%9Fer_kebab.jpg/960px-Ci%C4%9Fer_kebab.jpg",
        "coffee": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Assiette_kebab_%C3%A0_Lyon_en_mai_2023.jpg/960px-Assiette_kebab_%C3%A0_Lyon_en_mai_2023.jpg"
      }
    },
    {
      "name": "Velvet Café",
      "category": "Café · Coffee",
      "address": "Balat · Fatih",
      "price": "₺80–₺250",
      "famous": "Balat Brunch · Photogenic Café",
      "halal": true,
      "vegetarian": true,
      "reservation": "Walk-in",
      "wait": "5–20 min at peak",
      "michelin": "—",
      "kidsFriendly": "Yes",
      "dressCode": "Casual",
      "tip": "Istanbul cafés fill quickly on weekends — arrive before 09:30 for a terrace table.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Velvet%20Caf%C3%A9%20Istanbul",
      "bookUrl": "https://www.google.com/maps/search/?api=1&query=Velvet%20Caf%C3%A9%20Istanbul",
      "dishes": [
        {
          "name": "Balat Brunch · Photogenic Café",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Balat_Antique_Cafe_Interior_Traditional_Decor_Istanbul.jpg/960px-Balat_Antique_Cafe_Interior_Traditional_Decor_Istanbul.jpg",
          "desc": "House specialty — order this first."
        },
        {
          "name": "Turkish Coffee",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Balat_Antique_Cafe_Interior_Traditional_Decor_Istanbul.jpg/960px-Balat_Antique_Cafe_Interior_Traditional_Decor_Istanbul.jpg",
          "desc": "Thick, unfiltered, served with lokum."
        },
        {
          "name": "Menemen",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Balat_Antique_Cafe_Interior_Traditional_Decor_Istanbul.jpg/960px-Balat_Antique_Cafe_Interior_Traditional_Decor_Istanbul.jpg",
          "desc": "Scrambled eggs with peppers and tomato."
        },
        {
          "name": "Simit & Tea",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Balat_Antique_Cafe_Interior_Traditional_Decor_Istanbul.jpg/960px-Balat_Antique_Cafe_Interior_Traditional_Decor_Istanbul.jpg",
          "desc": "Sesame ring bread with çay — Istanbul classic."
        },
        {
          "name": "Baklava",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Balat_Antique_Cafe_Interior_Traditional_Decor_Istanbul.jpg/960px-Balat_Antique_Cafe_Interior_Traditional_Decor_Istanbul.jpg",
          "desc": "Sweet finish with pistachios and syrup."
        }
      ],
      "photos": {
        "signature": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Balat_Antique_Cafe_Interior_Traditional_Decor_Istanbul.jpg/960px-Balat_Antique_Cafe_Interior_Traditional_Decor_Istanbul.jpg",
        "interior": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Balat_Antique_Cafe_Interior_Traditional_Decor_Istanbul.jpg/960px-Balat_Antique_Cafe_Interior_Traditional_Decor_Istanbul.jpg",
        "exterior": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Balat_Antique_Cafe_Interior_Traditional_Decor_Istanbul.jpg/960px-Balat_Antique_Cafe_Interior_Traditional_Decor_Istanbul.jpg",
        "dessert": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Balat_Antique_Cafe_Interior_Traditional_Decor_Istanbul.jpg/960px-Balat_Antique_Cafe_Interior_Traditional_Decor_Istanbul.jpg",
        "coffee": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Balat_Antique_Cafe_Interior_Traditional_Decor_Istanbul.jpg/960px-Balat_Antique_Cafe_Interior_Traditional_Decor_Istanbul.jpg"
      }
    },
    {
      "name": "Forno Balat",
      "category": "Lunch · Pizza · Bakery",
      "address": "Leblebiciler Sk. · Balat · Fatih",
      "price": "₺350–800 per person",
      "famous": "Stone-oven pide, pizza & fresh bread",
      "halal": true,
      "vegetarian": true,
      "reservation": "Walk-in",
      "wait": "10–25 min",
      "michelin": "—",
      "kidsFriendly": "Yes",
      "dressCode": "Smart casual",
      "tip": "A cosy Balat bakery-restaurant with wood-fired ovens. Perfect Day 6 lunch after photographing the colourful houses.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Forno%20Balat%20Istanbul",
      "bookUrl": "https://www.google.com/maps/search/?api=1&query=Forno%20Balat%20Istanbul",
      "dishes": [
        {
          "name": "Stone-Oven Pizza",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Kiymalipidefrini.jpg/960px-Kiymalipidefrini.jpg",
          "desc": "Thin, blistered crust with fresh toppings."
        },
        {
          "name": "Turkish Pide",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Kiymalipidefrini.jpg/960px-Kiymalipidefrini.jpg",
          "desc": "Boat-shaped flatbread with cheese and egg."
        },
        {
          "name": "Fresh Sourdough",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Kiymalipidefrini.jpg/960px-Kiymalipidefrini.jpg",
          "desc": "Baked in-house throughout the day."
        },
        {
          "name": "Mixed Salad",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Kiymalipidefrini.jpg/960px-Kiymalipidefrini.jpg",
          "desc": "Garden greens with olive oil."
        },
        {
          "name": "Chocolate Cake",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Kiymalipidefrini.jpg/960px-Kiymalipidefrini.jpg",
          "desc": "Rich house bake with coffee."
        }
      ],
      "photos": {
        "signature": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Kiymalipidefrini.jpg/960px-Kiymalipidefrini.jpg",
        "interior": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Kiymalipidefrini.jpg/960px-Kiymalipidefrini.jpg",
        "exterior": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Kiymalipidefrini.jpg/960px-Kiymalipidefrini.jpg",
        "dessert": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Kiymalipidefrini.jpg/960px-Kiymalipidefrini.jpg",
        "coffee": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Kiymalipidefrini.jpg/960px-Kiymalipidefrini.jpg"
      }
    },
    {
      "name": "Ağa Kapısı",
      "category": "Dinner · Golden Horn View",
      "address": "Eyüp · Eyüpsultan",
      "price": "₺300–700 per person",
      "famous": "Künefe & tea with Golden Horn views",
      "halal": true,
      "vegetarian": true,
      "reservation": "Walk-in",
      "wait": "15–30 min at sunset",
      "michelin": "—",
      "kidsFriendly": "Yes",
      "dressCode": "Smart casual",
      "tip": "Tucked in the hills above Eyüp with a sweeping Golden Horn view. Alcohol-free and family-friendly — a serene Day 6 dinner or dessert stop.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=A%C4%9Fa%20Kap%C4%B1s%C4%B1%20Istanbul",
      "bookUrl": "https://www.google.com/maps/search/?api=1&query=A%C4%9Fa%20Kap%C4%B1s%C4%B1%20Istanbul",
      "dishes": [
        {
          "name": "Künefe",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Spice_Bazaar%2C_%C4%B0stanbul_%2812984443655%29.jpg/960px-Spice_Bazaar%2C_%C4%B0stanbul_%2812984443655%29.jpg",
          "desc": "The house specialty — cheese pastry in syrup."
        },
        {
          "name": "Mixed Grill",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Spice_Bazaar%2C_%C4%B0stanbul_%2812984443655%29.jpg/960px-Spice_Bazaar%2C_%C4%B0stanbul_%2812984443655%29.jpg",
          "desc": "Kebabs and köfte with pilav."
        },
        {
          "name": "Gözleme",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Spice_Bazaar%2C_%C4%B0stanbul_%2812984443655%29.jpg/960px-Spice_Bazaar%2C_%C4%B0stanbul_%2812984443655%29.jpg",
          "desc": "Hand-rolled savoury Turkish crêpe."
        },
        {
          "name": "Manti",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Spice_Bazaar%2C_%C4%B0stanbul_%2812984443655%29.jpg/960px-Spice_Bazaar%2C_%C4%B0stanbul_%2812984443655%29.jpg",
          "desc": "Tiny dumplings with garlic yogurt."
        },
        {
          "name": "Turkish Tea",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Spice_Bazaar%2C_%C4%B0stanbul_%2812984443655%29.jpg/960px-Spice_Bazaar%2C_%C4%B0stanbul_%2812984443655%29.jpg",
          "desc": "Endless çay with the view."
        }
      ],
      "photos": {
        "signature": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Spice_Bazaar%2C_%C4%B0stanbul_%2812984443655%29.jpg/960px-Spice_Bazaar%2C_%C4%B0stanbul_%2812984443655%29.jpg",
        "interior": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Spice_Bazaar%2C_%C4%B0stanbul_%2812984443655%29.jpg/960px-Spice_Bazaar%2C_%C4%B0stanbul_%2812984443655%29.jpg",
        "exterior": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Spice_Bazaar%2C_%C4%B0stanbul_%2812984443655%29.jpg/960px-Spice_Bazaar%2C_%C4%B0stanbul_%2812984443655%29.jpg",
        "dessert": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Spice_Bazaar%2C_%C4%B0stanbul_%2812984443655%29.jpg/960px-Spice_Bazaar%2C_%C4%B0stanbul_%2812984443655%29.jpg",
        "coffee": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Spice_Bazaar%2C_%C4%B0stanbul_%2812984443655%29.jpg/960px-Spice_Bazaar%2C_%C4%B0stanbul_%2812984443655%29.jpg"
      }
    },
    {
      "name": "Mangerie Bebek",
      "category": "Café · Coffee",
      "address": "Cevdet Paşa Cd. · Bebek · Beşiktaş",
      "price": "₺80–₺250",
      "famous": "Bebek Brunch · Bosphorus Café",
      "halal": true,
      "vegetarian": true,
      "reservation": "Walk-in",
      "wait": "5–20 min at peak",
      "michelin": "—",
      "kidsFriendly": "Yes",
      "dressCode": "Casual",
      "tip": "Istanbul cafés fill quickly on weekends — arrive before 09:30 for a terrace table.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Mangerie%20Bebek%20Istanbul",
      "bookUrl": "https://www.google.com/maps/search/?api=1&query=Mangerie%20Bebek%20Istanbul",
      "dishes": [
        {
          "name": "Bebek Brunch · Bosphorus Café",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Bicycle_on_Bebek_waterfront_Istanbul_2021.jpg/960px-Bicycle_on_Bebek_waterfront_Istanbul_2021.jpg",
          "desc": "House specialty — order this first."
        },
        {
          "name": "Turkish Coffee",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Bebek_bay.jpg/960px-Bebek_bay.jpg",
          "desc": "Thick, unfiltered, served with lokum."
        },
        {
          "name": "Menemen",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Bebek%2C_Bebek_Park%C4%B1%2C_34342_Be%C5%9Fikta%C5%9F-%C4%B0stanbul%2C_Turkey_-_panoramio.jpg/960px-Bebek%2C_Bebek_Park%C4%B1%2C_34342_Be%C5%9Fikta%C5%9F-%C4%B0stanbul%2C_Turkey_-_panoramio.jpg",
          "desc": "Scrambled eggs with peppers and tomato."
        },
        {
          "name": "Simit & Tea",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Bebek%2C_Cevdet_Pa%C5%9Fa_Cd._No-2%2C_34342_Be%C5%9Fikta%C5%9F-%C4%B0stanbul%2C_Turkey_-_panoramio_%283%29.jpg/960px-Bebek%2C_Cevdet_Pa%C5%9Fa_Cd._No-2%2C_34342_Be%C5%9Fikta%C5%9F-%C4%B0stanbul%2C_Turkey_-_panoramio_%283%29.jpg",
          "desc": "Sesame ring bread with çay — Istanbul classic."
        },
        {
          "name": "Baklava",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Bicycle_on_Bebek_waterfront_Istanbul_2021.jpg/960px-Bicycle_on_Bebek_waterfront_Istanbul_2021.jpg",
          "desc": "Sweet finish with pistachios and syrup."
        }
      ],
      "photos": {
        "signature": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Bicycle_on_Bebek_waterfront_Istanbul_2021.jpg/960px-Bicycle_on_Bebek_waterfront_Istanbul_2021.jpg",
        "interior": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Bebek_bay.jpg/960px-Bebek_bay.jpg",
        "exterior": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Bebek%2C_Bebek_Park%C4%B1%2C_34342_Be%C5%9Fikta%C5%9F-%C4%B0stanbul%2C_Turkey_-_panoramio.jpg/960px-Bebek%2C_Bebek_Park%C4%B1%2C_34342_Be%C5%9Fikta%C5%9F-%C4%B0stanbul%2C_Turkey_-_panoramio.jpg",
        "dessert": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Bebek%2C_Cevdet_Pa%C5%9Fa_Cd._No-2%2C_34342_Be%C5%9Fikta%C5%9F-%C4%B0stanbul%2C_Turkey_-_panoramio_%283%29.jpg/960px-Bebek%2C_Cevdet_Pa%C5%9Fa_Cd._No-2%2C_34342_Be%C5%9Fikta%C5%9F-%C4%B0stanbul%2C_Turkey_-_panoramio_%283%29.jpg",
        "coffee": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Bebek_bay.jpg/960px-Bebek_bay.jpg"
      }
    },
    {
      "name": "Lacivert",
      "category": "Lunch · Waterfront · Asian Side",
      "address": "Körfez Cd. · Anadolu Hisarı · Beykoz",
      "price": "₺1,000–2,200 per person",
      "famous": "Bosphorus-edge seafood under the bridge",
      "halal": true,
      "vegetarian": true,
      "reservation": "Recommended · boat pickup available",
      "wait": "Booked terrace",
      "michelin": "—",
      "kidsFriendly": "Yes",
      "dressCode": "Smart casual",
      "tip": "Right at the water's edge beneath the Fatih Bridge — they'll even send a boat across the strait. A tranquil, luxurious Day 7 lunch.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Lacivert%20Istanbul",
      "bookUrl": "https://www.google.com/maps/search/?api=1&query=Lacivert%20Istanbul",
      "dishes": [
        {
          "name": "Grilled Turbot",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Lacivert_-_panoramio.jpg/960px-Lacivert_-_panoramio.jpg",
          "desc": "Seasonal Bosphorus fish, simply grilled."
        },
        {
          "name": "Seafood Meze",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Ibrahim_pa%C5%9Fa_saray%C4%B1_sergisi.jpg/960px-Ibrahim_pa%C5%9Fa_saray%C4%B1_sergisi.jpg",
          "desc": "Octopus, prawns and marinated fish."
        },
        {
          "name": "Sea Bass Tartare",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Ibrahim_pa%C5%9Fa_saray%C4%B1_sergisi.jpg/960px-Ibrahim_pa%C5%9Fa_saray%C4%B1_sergisi.jpg",
          "desc": "Citrus-dressed and delicate."
        },
        {
          "name": "Lobster Pasta",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Lacivert_-_panoramio.jpg/960px-Lacivert_-_panoramio.jpg",
          "desc": "Rich tomato and shellfish."
        },
        {
          "name": "Seasonal Sorbet",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Lacivert_-_panoramio.jpg/960px-Lacivert_-_panoramio.jpg",
          "desc": "Palate-cleansing fruit finish."
        }
      ],
      "photos": {
        "signature": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Lacivert_-_panoramio.jpg/960px-Lacivert_-_panoramio.jpg",
        "interior": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Ibrahim_pa%C5%9Fa_saray%C4%B1_sergisi.jpg/960px-Ibrahim_pa%C5%9Fa_saray%C4%B1_sergisi.jpg",
        "exterior": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Ibrahim_pa%C5%9Fa_saray%C4%B1_sergisi.jpg/960px-Ibrahim_pa%C5%9Fa_saray%C4%B1_sergisi.jpg",
        "dessert": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Lacivert_-_panoramio.jpg/960px-Lacivert_-_panoramio.jpg",
        "coffee": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Ibrahim_pa%C5%9Fa_saray%C4%B1_sergisi.jpg/960px-Ibrahim_pa%C5%9Fa_saray%C4%B1_sergisi.jpg"
      }
    },
    {
      "name": "Mikla",
      "category": "Dinner · Fine Dining · Rooftop",
      "address": "The Marmara Pera · Meşrutiyet Cd. · Beyoğlu",
      "price": "₺2,500–4,500 per person",
      "famous": "New Anatolian tasting menu · World's 50 Best",
      "halal": true,
      "vegetarian": true,
      "reservation": "Essential · weeks ahead",
      "wait": "Booked-only",
      "michelin": "World's 50 Best listed",
      "kidsFriendly": "Yes",
      "dressCode": "Smart",
      "tip": "Chef Mehmet Gürs's rooftop temple of New Anatolian cuisine atop The Marmara Pera. The finest way to end Day 7 — book the tasting menu at sunset.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Mikla%20Istanbul",
      "bookUrl": "https://www.google.com/maps/search/?api=1&query=Mikla%20Istanbul",
      "dishes": [
        {
          "name": "New Anatolian Tasting Menu",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Kaelan_Mikla_Madrid_12.02.2019.jpg/960px-Kaelan_Mikla_Madrid_12.02.2019.jpg",
          "desc": "Multi-course journey through Turkish terroir."
        },
        {
          "name": "Slow-Cooked Lamb",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/K%C3%A6lan_Mikla_2025.jpg/960px-K%C3%A6lan_Mikla_2025.jpg",
          "desc": "Heritage-breed lamb, modern technique."
        },
        {
          "name": "Aegean Sea Bass",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Kaelan_Mikla_in_Prague_2024_%2804%29.jpg/960px-Kaelan_Mikla_in_Prague_2024_%2804%29.jpg",
          "desc": "Line-caught with foraged herbs."
        },
        {
          "name": "Sourdough & Butter",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/K%C3%A6lan_Mikla_at_Roadburn_Tilburg_19.04.2018.jpg/960px-K%C3%A6lan_Mikla_at_Roadburn_Tilburg_19.04.2018.jpg",
          "desc": "House-cultured, famous in its own right."
        },
        {
          "name": "Anatolian Dessert",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Kaelan_Mikla_Madrid_12.02.2019.jpg/960px-Kaelan_Mikla_Madrid_12.02.2019.jpg",
          "desc": "Reimagined classics with local honey."
        }
      ],
      "photos": {
        "signature": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Kaelan_Mikla_Madrid_12.02.2019.jpg/960px-Kaelan_Mikla_Madrid_12.02.2019.jpg",
        "interior": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/K%C3%A6lan_Mikla_2025.jpg/960px-K%C3%A6lan_Mikla_2025.jpg",
        "exterior": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Kaelan_Mikla_in_Prague_2024_%2804%29.jpg/960px-Kaelan_Mikla_in_Prague_2024_%2804%29.jpg",
        "dessert": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/K%C3%A6lan_Mikla_at_Roadburn_Tilburg_19.04.2018.jpg/960px-K%C3%A6lan_Mikla_at_Roadburn_Tilburg_19.04.2018.jpg",
        "coffee": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/K%C3%A6lan_Mikla_2025.jpg/960px-K%C3%A6lan_Mikla_2025.jpg"
      }
    }
  ],
  "itineraries": [
    {
      "day": 1,
      "title": "Sultanahmet — Where Istanbul Began",
      "color": "#0f766e",
      "routePreview": "9 stops · start 08:00 · end 19:30 · ≈ 5 km walking",
      "mapUrl": "https://www.google.com/maps/dir/Seven+Hills+Restaurant+Istanbul/Hagia+Sophia/Blue+Mosque+Istanbul/Sultanahmet+Square/Basilica+Cistern/Deraliye+Ottoman+Cuisine/Matbah+Restaurant+Istanbul",
      "budget": {
        "budget": {
          "total": "₺1,800–2,800 per person",
          "includes": [
            "Tram, metro & ferries (İstanbulkart)",
            "Street food & lokanta lunches",
            "Free mosques & squares",
            "One paid museum"
          ]
        },
        "mid": {
          "total": "₺3,500–6,000 per person",
          "includes": [
            "Taxis & Bosphorus ferry",
            "Sit-down restaurant meals",
            "Museum & palace tickets",
            "Bosphorus cruise"
          ]
        },
        "luxury": {
          "total": "₺9,000–18,000 per person",
          "includes": [
            "Private guide & driver",
            "Rooftop fine dining",
            "Luxury hotel night",
            "Private Bosphorus boat"
          ]
        }
      },
      "photos": [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Blue_Mosque_-_4.jpg/960px-Blue_Mosque_-_4.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Hagia_Sophia_%28228968325%29.jpeg/960px-Hagia_Sophia_%28228968325%29.jpeg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Exterior_of_Sultan_Ahmed_I_Mosque_in_Istanbul%2C_Turkey_002.jpg/960px-Exterior_of_Sultan_Ahmed_I_Mosque_in_Istanbul%2C_Turkey_002.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Sultanahmet_Square%2C_Obelisk_of_Theodosius%2C_Istanbul_%2852121868925%29.jpg/960px-Sultanahmet_Square%2C_Obelisk_of_Theodosius%2C_Istanbul_%2852121868925%29.jpg"
      ],
      "stops": [
        {
          "time": "08:00",
          "timeOfDay": "morning",
          "name": "Seven Hills Restaurant",
          "desc": "Traditional Turkish breakfast · Turkish tea · Hagia Sophia view (≈700 TRY)",
          "transit": "Walk from hotel",
          "icon": "walk",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Seven%20Hills%20Restaurant%20Sultanahmet%20Istanbul"
        },
        {
          "time": "09:00",
          "timeOfDay": "morning",
          "name": "Hagia Sophia",
          "desc": "90 min · free entry · Byzantine & Ottoman masterpiece",
          "transit": "Walk 2 min",
          "icon": "walk",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Hagia%20Sophia%20Istanbul"
        },
        {
          "time": "10:45",
          "timeOfDay": "morning",
          "name": "Blue Mosque",
          "desc": "45 min · İznik-tiled interior · outside prayer times",
          "transit": "Walk 3 min",
          "icon": "walk",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Blue%20Mosque%20Istanbul"
        },
        {
          "time": "11:45",
          "timeOfDay": "morning",
          "name": "Sultanahmet Square",
          "desc": "German Fountain · Egyptian Obelisk · Serpent Column",
          "transit": "Walk 5 min",
          "icon": "walk",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Sultanahmet%20Square%20Istanbul"
        },
        {
          "time": "12:30",
          "timeOfDay": "afternoon",
          "name": "Hafız Mustafa",
          "desc": "Coffee break · Turkish coffee & baklava",
          "transit": "Walk 5 min",
          "icon": "walk",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Haf%C4%B1z%20Mustafa%20Sultanahmet%20Istanbul"
        },
        {
          "time": "13:30",
          "timeOfDay": "afternoon",
          "name": "Basilica Cistern",
          "desc": "45 min · underground Byzantine reservoir · Medusa heads",
          "transit": "Walk 6 min",
          "icon": "walk",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Basilica%20Cistern%20Istanbul"
        },
        {
          "time": "15:00",
          "timeOfDay": "afternoon",
          "name": "Deraliye Ottoman Cuisine",
          "desc": "Lunch · palace recipes · stroll Arasta Bazaar after",
          "transit": "Walk 8 min",
          "icon": "walk",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Deraliye%20Ottoman%20Cuisine%20Istanbul"
        },
        {
          "time": "18:30",
          "timeOfDay": "evening",
          "name": "Seven Hills Rooftop",
          "desc": "Sunset over the domes · golden-hour photos",
          "transit": "Walk 5 min",
          "icon": "walk",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Seven%20Hills%20Restaurant%20Sultanahmet%20Istanbul"
        },
        {
          "time": "19:30",
          "timeOfDay": "night",
          "name": "Matbah Restaurant",
          "desc": "Dinner · candlelit Ottoman fine dining",
          "transit": "Walk 4 min",
          "icon": "walk",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Matbah%20Restaurant%20Istanbul"
        }
      ]
    },
    {
      "day": 2,
      "title": "Palaces & Bazaars",
      "color": "#059669",
      "routePreview": "9 stops · start 08:30 · end 21:00 · ≈ 6 km walking",
      "mapUrl": "https://www.google.com/maps/dir/Pudding+Shop+Istanbul/Topkapi+Palace/Pandeli+Restaurant/Spice+Bazaar+Istanbul/Grand+Bazaar+Istanbul/Suleymaniye+Mosque/Hamdi+Restaurant/Galata+Bridge",
      "budget": {
        "budget": {
          "total": "₺1,800–2,800 per person",
          "includes": [
            "Tram, metro & ferries (İstanbulkart)",
            "Street food & lokanta lunches",
            "Free mosques & squares",
            "One paid museum"
          ]
        },
        "mid": {
          "total": "₺3,500–6,000 per person",
          "includes": [
            "Taxis & Bosphorus ferry",
            "Sit-down restaurant meals",
            "Museum & palace tickets",
            "Bosphorus cruise"
          ]
        },
        "luxury": {
          "total": "₺9,000–18,000 per person",
          "includes": [
            "Private guide & driver",
            "Rooftop fine dining",
            "Luxury hotel night",
            "Private Bosphorus boat"
          ]
        }
      },
      "photos": [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Topkap%C4%B1_-_01.jpg/960px-Topkap%C4%B1_-_01.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Topkap%C4%B1_-_01.jpg/960px-Topkap%C4%B1_-_01.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/S%C3%BCleymaniye_Mosque_%288393803091%29.jpg/960px-S%C3%BCleymaniye_Mosque_%288393803091%29.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Topkap%C4%B1_-_01.jpg/960px-Topkap%C4%B1_-_01.jpg"
      ],
      "stops": [
        {
          "time": "08:30",
          "timeOfDay": "morning",
          "name": "Pudding Shop",
          "desc": "Breakfast · legendary Hippie Trail café since 1957",
          "transit": "Walk from hotel",
          "icon": "walk",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Pudding%20Shop%20Sultanahmet%20Istanbul"
        },
        {
          "time": "09:30",
          "timeOfDay": "morning",
          "name": "Topkapı Palace",
          "desc": "3 hrs · imperial courtyards · Treasury · Spoonmaker Diamond",
          "transit": "Walk 8 min",
          "icon": "walk",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Topkap%C4%B1%20Palace%20Istanbul"
        },
        {
          "time": "12:45",
          "timeOfDay": "afternoon",
          "name": "Imperial Harem",
          "desc": "Tiled chambers · Privy Chamber of Murat III",
          "transit": "Inside palace",
          "icon": "walk",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Topkap%C4%B1%20Palace%20Harem%20Istanbul"
        },
        {
          "time": "13:45",
          "timeOfDay": "afternoon",
          "name": "Pandeli Restaurant",
          "desc": "Lunch · turquoise-tiled dining above the Spice Bazaar",
          "transit": "Tram T1 to Eminönü",
          "icon": "metro",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Pandeli%20Restaurant%20Istanbul"
        },
        {
          "time": "15:00",
          "timeOfDay": "afternoon",
          "name": "Spice Bazaar",
          "desc": "Saffron, sumac, lokum · vendor tastings",
          "transit": "Walk 2 min",
          "icon": "walk",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Spice%20Bazaar%20Istanbul"
        },
        {
          "time": "16:30",
          "timeOfDay": "afternoon",
          "name": "Grand Bazaar",
          "desc": "4,000 shops · ceramics, lamps, carpets · bargain politely",
          "transit": "Walk 12 min",
          "icon": "walk",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Grand%20Bazaar%20Istanbul"
        },
        {
          "time": "18:30",
          "timeOfDay": "evening",
          "name": "Süleymaniye Mosque",
          "desc": "Sinan's masterpiece · Golden Horn sunset terrace",
          "transit": "Walk 10 min",
          "icon": "walk",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=S%C3%BCleymaniye%20Mosque%20Istanbul"
        },
        {
          "time": "20:00",
          "timeOfDay": "night",
          "name": "Hamdi Restaurant",
          "desc": "Dinner · pistachio kebab · Golden Horn terrace",
          "transit": "Walk 12 min downhill",
          "icon": "walk",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Hamdi%20Restaurant%20Emin%C3%B6n%C3%BC%20Istanbul"
        },
        {
          "time": "21:00",
          "timeOfDay": "night",
          "name": "Galata Bridge Night Walk",
          "desc": "Fishermen, balık ekmek stalls & mosque silhouettes",
          "transit": "Walk 10 min",
          "icon": "walk",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Galata%20Bridge%20Istanbul"
        }
      ]
    },
    {
      "day": 3,
      "title": "Galata & Karaköy",
      "color": "#0891b2",
      "routePreview": "9 stops · start 08:30 · end 21:00 · Bosphorus cruise",
      "mapUrl": "https://www.google.com/maps/dir/Namli+Gurme+Karakoy/Galata+Tower/Petra+Roasting+Co/Karakoy+Lokantasi/Galataport/Bosphorus+Cruise/Feriye+Istanbul/Ortakoy",
      "budget": {
        "budget": {
          "total": "₺1,800–2,800 per person",
          "includes": [
            "Tram, metro & ferries (İstanbulkart)",
            "Street food & lokanta lunches",
            "Free mosques & squares",
            "One paid museum"
          ]
        },
        "mid": {
          "total": "₺3,500–6,000 per person",
          "includes": [
            "Taxis & Bosphorus ferry",
            "Sit-down restaurant meals",
            "Museum & palace tickets",
            "Bosphorus cruise"
          ]
        },
        "luxury": {
          "total": "₺9,000–18,000 per person",
          "includes": [
            "Private guide & driver",
            "Rooftop fine dining",
            "Luxury hotel night",
            "Private Bosphorus boat"
          ]
        }
      },
      "photos": [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Tahin-pekmez.jpg/960px-Tahin-pekmez.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Galata_tower_01_23.jpg/960px-Galata_tower_01_23.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Soy-coffee-pot-240-01.jpg/960px-Soy-coffee-pot-240-01.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Topkap%C4%B1_-_01.jpg/960px-Topkap%C4%B1_-_01.jpg"
      ],
      "stops": [
        {
          "time": "08:30",
          "timeOfDay": "morning",
          "name": "Namlı Gurme",
          "desc": "Breakfast · legendary Karaköy deli spread",
          "transit": "Walk from hotel",
          "icon": "walk",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Naml%C4%B1%20Gurme%20Karak%C3%B6y%20Istanbul"
        },
        {
          "time": "09:30",
          "timeOfDay": "morning",
          "name": "Galata Tower",
          "desc": "360° views of Golden Horn & Bosphorus · book timed entry",
          "transit": "Walk 8 min uphill",
          "icon": "walk",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Galata%20Tower%20Istanbul"
        },
        {
          "time": "11:00",
          "timeOfDay": "morning",
          "name": "Explore Galata Streets",
          "desc": "Serdar-ı Ekrem boutiques · street art · cafés",
          "transit": "Walk",
          "icon": "walk",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Galata%20Beyo%C4%9Flu%20Istanbul"
        },
        {
          "time": "12:00",
          "timeOfDay": "afternoon",
          "name": "Petra Roasting Co.",
          "desc": "Third-wave coffee break",
          "transit": "Walk 5 min",
          "icon": "walk",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Petra%20Roasting%20Co%20Galata%20Istanbul"
        },
        {
          "time": "13:00",
          "timeOfDay": "afternoon",
          "name": "Karaköy Lokantası",
          "desc": "Lunch · turquoise-tiled meyhane · meze",
          "transit": "Walk 8 min",
          "icon": "walk",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Karak%C3%B6y%20Lokantas%C4%B1%20Istanbul"
        },
        {
          "time": "15:00",
          "timeOfDay": "afternoon",
          "name": "Galataport",
          "desc": "Waterfront promenade · Istanbul Modern · shopping",
          "transit": "Walk 5 min",
          "icon": "walk",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Galataport%20Istanbul"
        },
        {
          "time": "17:00",
          "timeOfDay": "evening",
          "name": "Bosphorus Cruise",
          "desc": "90 min · Europe/Asia shorelines · palaces & bridges",
          "transit": "Ferry from Karaköy",
          "icon": "ferry",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Bosphorus%20Cruise%20Istanbul"
        },
        {
          "time": "19:30",
          "timeOfDay": "night",
          "name": "Feriye",
          "desc": "Dinner · Ottoman palace pavilion on the Bosphorus",
          "transit": "Taxi to Ortaköy",
          "icon": "cab",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Feriye%20Restaurant%20Ortak%C3%B6y%20Istanbul"
        },
        {
          "time": "21:00",
          "timeOfDay": "night",
          "name": "Ortaköy Walk",
          "desc": "Illuminated mosque · bridge lights · waterfront",
          "transit": "Walk 5 min",
          "icon": "walk",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Ortak%C3%B6y%20Mosque%20Istanbul"
        }
      ]
    },
    {
      "day": 4,
      "title": "Bosphorus & Dolmabahçe",
      "color": "#115e59",
      "routePreview": "9 stops · start 08:30 · end 22:00 · European shore",
      "mapUrl": "https://www.google.com/maps/dir/House+Cafe+Ortakoy/Dolmabahce+Palace/Banyan+Ortakoy/Ortakoy+Mosque/Bebek/Rumeli+Fortress/Sunset+Grill+Istanbul",
      "budget": {
        "budget": {
          "total": "₺1,800–2,800 per person",
          "includes": [
            "Tram, metro & ferries (İstanbulkart)",
            "Street food & lokanta lunches",
            "Free mosques & squares",
            "One paid museum"
          ]
        },
        "mid": {
          "total": "₺3,500–6,000 per person",
          "includes": [
            "Taxis & Bosphorus ferry",
            "Sit-down restaurant meals",
            "Museum & palace tickets",
            "Bosphorus cruise"
          ]
        },
        "luxury": {
          "total": "₺9,000–18,000 per person",
          "includes": [
            "Private guide & driver",
            "Rooftop fine dining",
            "Luxury hotel night",
            "Private Bosphorus boat"
          ]
        }
      },
      "photos": [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Istanbul_-_Ortak%C3%B6y_-_2025.jpg/960px-Istanbul_-_Ortak%C3%B6y_-_2025.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Dolmabahce_Istanbul_Turkey.jpg/960px-Dolmabahce_Istanbul_Turkey.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/India_%28Ranthambhore_National_Park%29_Tunnel_through_huge_banyan_trees_%2832430905983%29.jpg/960px-India_%28Ranthambhore_National_Park%29_Tunnel_through_huge_banyan_trees_%2832430905983%29.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Istanbul_asv2020-02_img60_Ortak%C3%B6y_Mosque.jpg/960px-Istanbul_asv2020-02_img60_Ortak%C3%B6y_Mosque.jpg"
      ],
      "stops": [
        {
          "time": "08:30",
          "timeOfDay": "morning",
          "name": "House Café Ortaköy",
          "desc": "Breakfast · Bosphorus-side brunch",
          "transit": "Walk / taxi",
          "icon": "walk",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=House%20Caf%C3%A9%20Ortak%C3%B6y%20Istanbul"
        },
        {
          "time": "09:30",
          "timeOfDay": "morning",
          "name": "Dolmabahçe Palace",
          "desc": "2 hrs · crystal staircase · Ottoman's last palace",
          "transit": "Tram T1 to Kabataş",
          "icon": "metro",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Dolmabah%C3%A7e%20Palace%20Istanbul"
        },
        {
          "time": "13:00",
          "timeOfDay": "afternoon",
          "name": "Banyan",
          "desc": "Lunch · Asian fusion · Ortaköy Mosque view",
          "transit": "Taxi to Ortaköy",
          "icon": "cab",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Banyan%20Restaurant%20Ortak%C3%B6y%20Istanbul"
        },
        {
          "time": "15:00",
          "timeOfDay": "afternoon",
          "name": "Ortaköy Mosque",
          "desc": "Baroque mosque beneath the Bosphorus Bridge",
          "transit": "Walk 3 min",
          "icon": "walk",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Ortak%C3%B6y%20Mosque%20Istanbul"
        },
        {
          "time": "16:00",
          "timeOfDay": "afternoon",
          "name": "Famous Ortaköy Kumpir",
          "desc": "Loaded baked potato from the waterfront stalls",
          "transit": "Walk 2 min",
          "icon": "walk",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Ortak%C3%B6y%20Kumpir%20Istanbul"
        },
        {
          "time": "17:30",
          "timeOfDay": "evening",
          "name": "Bebek Waterfront",
          "desc": "Chic Bosphorus neighbourhood · seaside promenade",
          "transit": "Taxi 10 min",
          "icon": "cab",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Bebek%20Istanbul"
        },
        {
          "time": "18:30",
          "timeOfDay": "evening",
          "name": "Bosphorus Walk",
          "desc": "Golden-hour stroll along the strait",
          "transit": "Walk",
          "icon": "walk",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Bebek%20waterfront%20Istanbul"
        },
        {
          "time": "20:00",
          "timeOfDay": "night",
          "name": "Rumeli Fortress",
          "desc": "Floodlit 1452 fortress at the Bosphorus narrows",
          "transit": "Taxi 10 min",
          "icon": "cab",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Rumeli%20Fortress%20Istanbul"
        },
        {
          "time": "21:00",
          "timeOfDay": "night",
          "name": "Sunset Grill & Bar",
          "desc": "Dinner · Bosphorus panorama · world-class wine list",
          "transit": "Taxi 8 min",
          "icon": "cab",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Sunset%20Grill%20Istanbul"
        }
      ]
    },
    {
      "day": 5,
      "title": "The Asian Side",
      "color": "#0d9488",
      "routePreview": "8 stops · start 08:30 · ferry to Üsküdar & Kadıköy",
      "mapUrl": "https://www.google.com/maps/dir/Uskudar/Maidens+Tower/Camlica+Mosque/Kanaat+Lokantasi/Camlica+Hill/Kadikoy+Market/Moda/Ciya+Sofrasi",
      "budget": {
        "budget": {
          "total": "₺1,800–2,800 per person",
          "includes": [
            "Tram, metro & ferries (İstanbulkart)",
            "Street food & lokanta lunches",
            "Free mosques & squares",
            "One paid museum"
          ]
        },
        "mid": {
          "total": "₺3,500–6,000 per person",
          "includes": [
            "Taxis & Bosphorus ferry",
            "Sit-down restaurant meals",
            "Museum & palace tickets",
            "Bosphorus cruise"
          ]
        },
        "luxury": {
          "total": "₺9,000–18,000 per person",
          "includes": [
            "Private guide & driver",
            "Rooftop fine dining",
            "Luxury hotel night",
            "Private Bosphorus boat"
          ]
        }
      },
      "photos": [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Istanbul_K%C4%B1z_Kulesi_%2854511155871%29_%28cropped%29.jpg/960px-Istanbul_K%C4%B1z_Kulesi_%2854511155871%29_%28cropped%29.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Camlica-2018-06-14.jpg/960px-Camlica-2018-06-14.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/%C3%9Csk%C3%BCdar_Kanaat_Lokantas%C4%B1_%2834243555222%29.jpg/960px-%C3%9Csk%C3%BCdar_Kanaat_Lokantas%C4%B1_%2834243555222%29.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Topkap%C4%B1_-_01.jpg/960px-Topkap%C4%B1_-_01.jpg"
      ],
      "stops": [
        {
          "time": "08:30",
          "timeOfDay": "morning",
          "name": "Ferry to Üsküdar",
          "desc": "Cross to Asia · gulls & tea on deck",
          "transit": "Ferry from Eminönü",
          "icon": "ferry",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=%C3%9Csk%C3%BCdar%20ferry%20Istanbul"
        },
        {
          "time": "09:30",
          "timeOfDay": "morning",
          "name": "Maiden's Tower",
          "desc": "Iconic Bosphorus islet · legends & views",
          "transit": "Ferry from Üsküdar",
          "icon": "ferry",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Maiden's%20Tower%20Istanbul"
        },
        {
          "time": "11:00",
          "timeOfDay": "morning",
          "name": "Çamlıca Mosque",
          "desc": "Turkey's largest mosque · panoramic courtyard",
          "transit": "Taxi 15 min",
          "icon": "cab",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=%C3%87aml%C4%B1ca%20Mosque%20Istanbul"
        },
        {
          "time": "13:00",
          "timeOfDay": "afternoon",
          "name": "Kanaat Lokantası",
          "desc": "Lunch · classic Üsküdar home cooking since 1933",
          "transit": "Taxi 12 min",
          "icon": "cab",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Kanaat%20Lokantas%C4%B1%20%C3%9Csk%C3%BCdar%20Istanbul"
        },
        {
          "time": "14:30",
          "timeOfDay": "afternoon",
          "name": "Çamlıca Hill",
          "desc": "Highest viewpoint · full city & Bosphorus panorama",
          "transit": "Taxi 15 min",
          "icon": "cab",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=%C3%87aml%C4%B1ca%20Hill%20Istanbul"
        },
        {
          "time": "16:00",
          "timeOfDay": "afternoon",
          "name": "Kadıköy Market",
          "desc": "Fish market alleys · street food · local energy",
          "transit": "Taxi / ferry",
          "icon": "cab",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Kad%C4%B1k%C3%B6y%20Market%20Istanbul"
        },
        {
          "time": "17:30",
          "timeOfDay": "evening",
          "name": "Moda",
          "desc": "Bohemian seaside quarter · sunset on the rocks",
          "transit": "Walk 15 min",
          "icon": "walk",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Moda%20Kad%C4%B1k%C3%B6y%20Istanbul"
        },
        {
          "time": "19:30",
          "timeOfDay": "night",
          "name": "Çiya Sofrası",
          "desc": "Dinner · regional Anatolian cuisine · food-lover favourite",
          "transit": "Walk 15 min",
          "icon": "walk",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=%C3%87iya%20Sofras%C4%B1%20Kad%C4%B1k%C3%B6y%20Istanbul"
        }
      ]
    },
    {
      "day": 6,
      "title": "Hidden Istanbul — Balat & Eyüp",
      "color": "#047857",
      "routePreview": "7 stops · start 09:00 · Golden Horn neighbourhoods",
      "mapUrl": "https://www.google.com/maps/dir/Velvet+Cafe+Balat/Balat/Fener/Forno+Balat/Eyup+Sultan+Mosque/Pierre+Loti+Hill/Aga+Kapisi",
      "budget": {
        "budget": {
          "total": "₺1,800–2,800 per person",
          "includes": [
            "Tram, metro & ferries (İstanbulkart)",
            "Street food & lokanta lunches",
            "Free mosques & squares",
            "One paid museum"
          ]
        },
        "mid": {
          "total": "₺3,500–6,000 per person",
          "includes": [
            "Taxis & Bosphorus ferry",
            "Sit-down restaurant meals",
            "Museum & palace tickets",
            "Bosphorus cruise"
          ]
        },
        "luxury": {
          "total": "₺9,000–18,000 per person",
          "includes": [
            "Private guide & driver",
            "Rooftop fine dining",
            "Luxury hotel night",
            "Private Bosphorus boat"
          ]
        }
      },
      "photos": [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Balat_Antique_Cafe_Interior_Traditional_Decor_Istanbul.jpg/960px-Balat_Antique_Cafe_Interior_Traditional_Decor_Istanbul.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Balat_houses.jpg/960px-Balat_houses.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Kiymalipidefrini.jpg/960px-Kiymalipidefrini.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Topkap%C4%B1_-_01.jpg/960px-Topkap%C4%B1_-_01.jpg"
      ],
      "stops": [
        {
          "time": "09:00",
          "timeOfDay": "morning",
          "name": "Velvet Café",
          "desc": "Breakfast · photogenic Balat café",
          "transit": "Taxi from hotel",
          "icon": "cab",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Velvet%20Caf%C3%A9%20Balat%20Istanbul"
        },
        {
          "time": "10:00",
          "timeOfDay": "morning",
          "name": "Balat",
          "desc": "Rainbow houses · Kiremit Street · artisan cafés",
          "transit": "Walk",
          "icon": "walk",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Balat%20Istanbul"
        },
        {
          "time": "11:30",
          "timeOfDay": "morning",
          "name": "Fener",
          "desc": "Greek Orthodox quarter · Patriarchate · red school",
          "transit": "Walk 10 min",
          "icon": "walk",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Fener%20Istanbul"
        },
        {
          "time": "13:00",
          "timeOfDay": "afternoon",
          "name": "Forno Balat",
          "desc": "Lunch · wood-fired pide, pizza & fresh bread",
          "transit": "Walk 8 min",
          "icon": "walk",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Forno%20Balat%20Istanbul"
        },
        {
          "time": "15:00",
          "timeOfDay": "afternoon",
          "name": "Eyüp Mosque",
          "desc": "Holiest mosque in Istanbul · tomb of Abu Ayyub al-Ansari",
          "transit": "Taxi 10 min",
          "icon": "cab",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Ey%C3%BCp%20Sultan%20Mosque%20Istanbul"
        },
        {
          "time": "16:30",
          "timeOfDay": "evening",
          "name": "Pierre Loti Cable Car",
          "desc": "Teleferik up the Golden Horn hillside",
          "transit": "Cable car",
          "icon": "cab",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Pierre%20Loti%20Cable%20Car%20Istanbul"
        },
        {
          "time": "17:30",
          "timeOfDay": "evening",
          "name": "Pierre Loti Hill",
          "desc": "Golden Horn sunset · tea terrace · dinner at Ağa Kapısı",
          "transit": "Walk 3 min",
          "icon": "walk",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Pierre%20Loti%20Hill%20Istanbul"
        }
      ]
    },
    {
      "day": 7,
      "title": "Relax & Luxury",
      "color": "#134e4a",
      "routePreview": "8 stops · start 09:00 · parks, shopping & skyline",
      "mapUrl": "https://www.google.com/maps/dir/Mangerie+Bebek/Emirgan+Park/Emirgan+Sutis/Lacivert+Istanbul/Istinye+Park/Nisantasi/Mikla+Istanbul",
      "budget": {
        "budget": {
          "total": "₺1,800–2,800 per person",
          "includes": [
            "Tram, metro & ferries (İstanbulkart)",
            "Street food & lokanta lunches",
            "Free mosques & squares",
            "One paid museum"
          ]
        },
        "mid": {
          "total": "₺3,500–6,000 per person",
          "includes": [
            "Taxis & Bosphorus ferry",
            "Sit-down restaurant meals",
            "Museum & palace tickets",
            "Bosphorus cruise"
          ]
        },
        "luxury": {
          "total": "₺9,000–18,000 per person",
          "includes": [
            "Private guide & driver",
            "Rooftop fine dining",
            "Luxury hotel night",
            "Private Bosphorus boat"
          ]
        }
      },
      "photos": [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Bicycle_on_Bebek_waterfront_Istanbul_2021.jpg/960px-Bicycle_on_Bebek_waterfront_Istanbul_2021.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Emirgan_04325.jpg/960px-Emirgan_04325.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Lacivert_-_panoramio.jpg/960px-Lacivert_-_panoramio.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Topkap%C4%B1_-_01.jpg/960px-Topkap%C4%B1_-_01.jpg"
      ],
      "stops": [
        {
          "time": "09:00",
          "timeOfDay": "morning",
          "name": "Mangerie Bebek",
          "desc": "Breakfast · beloved Bebek Bosphorus café",
          "transit": "Taxi from hotel",
          "icon": "cab",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Mangerie%20Bebek%20Istanbul"
        },
        {
          "time": "10:30",
          "timeOfDay": "morning",
          "name": "Emirgan Park",
          "desc": "Historic pavilions · tulip lawns · Bosphorus greenery",
          "transit": "Taxi 10 min",
          "icon": "cab",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Emirgan%20Park%20Istanbul"
        },
        {
          "time": "12:00",
          "timeOfDay": "afternoon",
          "name": "Emirgan Sütiş",
          "desc": "Coffee & milk-pudding break in the park",
          "transit": "Walk in park",
          "icon": "walk",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Emirgan%20S%C3%BCti%C5%9F%20Istanbul"
        },
        {
          "time": "13:00",
          "timeOfDay": "afternoon",
          "name": "Lacivert",
          "desc": "Lunch · Bosphorus-edge seafood beneath the bridge",
          "transit": "Taxi / boat",
          "icon": "cab",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Lacivert%20Restaurant%20Istanbul"
        },
        {
          "time": "15:00",
          "timeOfDay": "afternoon",
          "name": "Istinye Park Mall",
          "desc": "Luxury & high-street shopping · open-air galleria",
          "transit": "Taxi 15 min",
          "icon": "cab",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Istinye%20Park%20Istanbul"
        },
        {
          "time": "17:00",
          "timeOfDay": "evening",
          "name": "Nişantaşı",
          "desc": "Istanbul's designer district · boutiques & cafés",
          "transit": "Taxi 15 min",
          "icon": "cab",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Ni%C5%9Fanta%C5%9F%C4%B1%20Istanbul"
        },
        {
          "time": "20:00",
          "timeOfDay": "night",
          "name": "Mikla",
          "desc": "Dinner · New Anatolian tasting menu · rooftop",
          "transit": "Taxi 10 min",
          "icon": "cab",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Mikla%20Restaurant%20Istanbul"
        },
        {
          "time": "22:00",
          "timeOfDay": "night",
          "name": "Istanbul Skyline Night View",
          "desc": "Nightcap with the illuminated skyline from the rooftop",
          "transit": "Same venue",
          "icon": "walk",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Mikla%20Restaurant%20Istanbul"
        }
      ]
    }
  ],
  "rainyDay": [
    {
      "name": "Hagia Sophia",
      "address": "Sultanahmet",
      "desc": "Byzantine & Ottoman masterpiece · covered",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Hagia_Sophia_%28228968325%29.jpeg/960px-Hagia_Sophia_%28228968325%29.jpeg",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Hagia%20Sophia%20Istanbul"
    },
    {
      "name": "Basilica Cistern",
      "address": "Sultanahmet",
      "desc": "Atmospheric underground reservoir",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Cisterna_Bas%C3%ADlica%2C_Estambul%2C_Turqu%C3%ADa%2C_2024-09-28%2C_DD_58-60_HDR.jpg/960px-Cisterna_Bas%C3%ADlica%2C_Estambul%2C_Turqu%C3%ADa%2C_2024-09-28%2C_DD_58-60_HDR.jpg",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Basilica%20Cistern%20Istanbul"
    },
    {
      "name": "Grand Bazaar",
      "address": "Beyazıt",
      "desc": "4,000 covered shops · rainproof shopping",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Istanbul_asv2021-11_img41_Grand_Bazaar.jpg/960px-Istanbul_asv2021-11_img41_Grand_Bazaar.jpg",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Grand%20Bazaar%20Istanbul"
    },
    {
      "name": "Topkapı Palace",
      "address": "Sultanahmet",
      "desc": "Treasury & Harem · mostly indoors",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Topkap%C4%B1_-_01.jpg/960px-Topkap%C4%B1_-_01.jpg",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Topkap%C4%B1%20Palace%20Istanbul"
    },
    {
      "name": "Dolmabahçe Palace",
      "address": "Beşiktaş",
      "desc": "Crystal halls · guided indoor tour",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Dolmabahce_Istanbul_Turkey.jpg/960px-Dolmabahce_Istanbul_Turkey.jpg",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Dolmabah%C3%A7e%20Palace%20Istanbul"
    },
    {
      "name": "Spice Bazaar",
      "address": "Eminönü",
      "desc": "Covered market · tastings & tea",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Spices_on_Spice_Bazaar_in_Istanbul_02.jpg/960px-Spices_on_Spice_Bazaar_in_Istanbul_02.jpg",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Spice%20Bazaar%20Istanbul"
    }
  ],
  "sunnyDay": [
    {
      "name": "Bosphorus Cruise",
      "address": "Eminönü / Kabataş",
      "desc": "Europe & Asia shorelines by boat",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Istanbul_Bosphorus_Cruise_ship_Ruby_Princess_IMG_7920_1920.jpg/960px-Istanbul_Bosphorus_Cruise_ship_Ruby_Princess_IMG_7920_1920.jpg",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Bosphorus%20Cruise%20Istanbul"
    },
    {
      "name": "Galata Tower",
      "address": "Beyoğlu",
      "desc": "360° rooftop views of the city",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Galata_tower_01_23.jpg/960px-Galata_tower_01_23.jpg",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Galata%20Tower%20Istanbul"
    },
    {
      "name": "Emirgan Park",
      "address": "Sarıyer",
      "desc": "Tulip lawns & Bosphorus greenery",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Emirgan_04325.jpg/960px-Emirgan_04325.jpg",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Emirgan%20Park%20Istanbul"
    },
    {
      "name": "Ortaköy Mosque",
      "address": "Beşiktaş",
      "desc": "Waterfront baroque mosque & kumpir",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Istanbul_asv2020-02_img60_Ortak%C3%B6y_Mosque.jpg/960px-Istanbul_asv2020-02_img60_Ortak%C3%B6y_Mosque.jpg",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Ortak%C3%B6y%20Mosque%20Istanbul"
    },
    {
      "name": "Balat",
      "address": "Fatih",
      "desc": "Rainbow houses & artisan lanes",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Balat_houses.jpg/960px-Balat_houses.jpg",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Balat%20Istanbul"
    },
    {
      "name": "Maiden's Tower",
      "address": "Üsküdar",
      "desc": "Ferry to the iconic Bosphorus islet",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Istanbul_K%C4%B1z_Kulesi_%2854511155871%29_%28cropped%29.jpg/960px-Istanbul_K%C4%B1z_Kulesi_%2854511155871%29_%28cropped%29.jpg",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Maiden's%20Tower%20Istanbul"
    }
  ],
  "hiddenGems": [
    {
      "name": "Balat",
      "desc": "Rainbow houses, synagogues & cafés in the old Jewish quarter",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Balat_houses.jpg/960px-Balat_houses.jpg",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Balat%20Istanbul"
    },
    {
      "name": "Süleymaniye Mosque",
      "desc": "Sinan's quieter masterpiece with a Golden Horn terrace",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/S%C3%BCleymaniye_Mosque_February_2013_01.jpg/960px-S%C3%BCleymaniye_Mosque_February_2013_01.jpg",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=S%C3%BCleymaniye%20Mosque%20Istanbul"
    },
    {
      "name": "Pierre Loti Hill",
      "desc": "Teleferik to a Golden Horn sunset tea terrace",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Cuerno_de_Oro_desde_el_mirador_Pierre_Loti_Caf%C3%A9_%28Ey%C3%BCp_Sultan%29.jpg/960px-Cuerno_de_Oro_desde_el_mirador_Pierre_Loti_Caf%C3%A9_%28Ey%C3%BCp_Sultan%29.jpg",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Pierre%20Loti%20Hill%20Istanbul"
    },
    {
      "name": "Çiya Sofrası",
      "desc": "Kadıköy temple of forgotten Anatolian recipes",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Lamb_shish_kebab_-_Ankara.jpg/960px-Lamb_shish_kebab_-_Ankara.jpg",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%C3%87iya%20Sofras%C4%B1%20Kad%C4%B1k%C3%B6y%20Istanbul"
    },
    {
      "name": "Arasta Bazaar",
      "desc": "Calm textile lanes behind the Blue Mosque",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/PXL_20241209_161651842_Arasta_Bazaar_Istanbul_Turkiye_06_Cat.jpg/960px-PXL_20241209_161651842_Arasta_Bazaar_Istanbul_Turkiye_06_Cat.jpg",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Arasta%20Bazaar%20Istanbul"
    },
    {
      "name": "Rumeli Fortress",
      "desc": "Floodlit 1452 fortress at the Bosphorus narrows",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Istanbul%2C_Turkey_-_53686764072.jpg/960px-Istanbul%2C_Turkey_-_53686764072.jpg",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Rumeli%20Fortress%20Istanbul"
    }
  ],
  "warnings": [
    {
      "title": "Mosque etiquette",
      "desc": "Dress modestly — cover shoulders and knees; women should carry a headscarf. Remove shoes. Avoid visiting during the five daily prayers, especially Friday noon."
    },
    {
      "title": "Bazaar bargaining scams",
      "desc": "Bargain politely but firmly. Ignore touts offering \"free\" tea tied to carpet sales. Never follow a \"friendly guide\" to a shop."
    },
    {
      "title": "Taxi overcharging",
      "desc": "Insist on the meter or use BiTaksi/Uber. Some drivers claim the meter is broken — decline and take the next one."
    },
    {
      "title": "Restaurant \"shoe-shine\" & menu tricks",
      "desc": "Confirm prices before ordering fish (often sold by weight). Beware unpriced meze plates delivered unasked."
    },
    {
      "title": "Rush-hour traffic",
      "desc": "Cross-city taxis can take an hour at peak times. Plan Bosphorus and Asian-side days around ferries."
    },
    {
      "title": "Currency exchange",
      "desc": "Use bank ATMs (Ziraat, İş Bankası, Garanti). Avoid airport and street exchange kiosks with poor rates."
    },
    {
      "title": "Pickpockets in crowds",
      "desc": "Keep valuables secure in the Grand Bazaar, on trams and around Istiklal Street."
    }
  ],
  "shopping": {
    "districts": [
      {
        "name": "Grand Bazaar",
        "desc": "Carpets, ceramics, lamps, gold · 4,000 shops",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Istanbul_asv2021-11_img41_Grand_Bazaar.jpg/960px-Istanbul_asv2021-11_img41_Grand_Bazaar.jpg",
        "mapUrl": "https://www.google.com/maps/search/?api=1&query=Grand%20Bazaar%20Istanbul"
      },
      {
        "name": "Spice Bazaar",
        "desc": "Saffron, sumac, lokum, tea & sweets",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Spices_on_Spice_Bazaar_in_Istanbul_02.jpg/960px-Spices_on_Spice_Bazaar_in_Istanbul_02.jpg",
        "mapUrl": "https://www.google.com/maps/search/?api=1&query=Spice%20Bazaar%20Istanbul"
      },
      {
        "name": "Nişantaşı",
        "desc": "Designer boutiques & Istanbul's Champs-Élysées",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Ni%C5%9Fanta%C5%9F%C4%B1_Abdi_%C4%B0pek%C3%A7i_Avenue.jpg/960px-Ni%C5%9Fanta%C5%9F%C4%B1_Abdi_%C4%B0pek%C3%A7i_Avenue.jpg",
        "mapUrl": "https://www.google.com/maps/search/?api=1&query=Ni%C5%9Fanta%C5%9F%C4%B1%20Istanbul"
      },
      {
        "name": "Istinye Park",
        "desc": "Luxury & high-street brands · open-air mall",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/%C4%B0stinye_Park.jpg/960px-%C4%B0stinye_Park.jpg",
        "mapUrl": "https://www.google.com/maps/search/?api=1&query=Istinye%20Park%20Istanbul"
      }
    ],
    "brands": [
      "Turkish delight (lokum)",
      "İznik & Kütahya ceramics",
      "Hand-knotted carpets & kilims",
      "Mosaic lamps",
      "Turkish tea & çay sets",
      "Antep pistachios & baklava"
    ],
    "souvenirs": [
      "Turkish delight box",
      "Evil-eye (nazar) charm",
      "İznik-tile trivet",
      "Copper cezve coffee pot",
      "Apple tea",
      "Hand-painted ceramic bowl"
    ],
    "vatTips": {
      "rate": "20% KDV",
      "refund": "Tax-free shopping for non-residents on purchases over ₺2,000 at participating stores. Ask for the Global Blue / tax-free form at checkout and claim your refund at the airport before check-in."
    }
  },
  "budget": {
    "budget": {
      "daily": "₺1,800–2,800 per person / day",
      "accommodation": "€20–40 Cheers Hostel dorm",
      "food": "₺400 street food & lokanta",
      "transport": "₺150 İstanbulkart",
      "activities": "₺600 one museum",
      "extras": "₺200 çay & sweets",
      "tip": "Free mosques and squares fill most days. Use ferries and trams, eat balık ekmek and döner, and splurge on a single palace ticket."
    },
    "mid": {
      "daily": "₺3,500–6,000 per person / day",
      "accommodation": "€120–180 Meroddi Galata Mansion",
      "food": "₺1,500 sit-down meals",
      "transport": "₺400 taxis & ferries",
      "activities": "₺1,500 palace & cruise",
      "extras": "₺500 hammam or rooftop drink"
    },
    "luxury": {
      "daily": "₺9,000–18,000 per person / day",
      "accommodation": "€700+ The Peninsula Istanbul",
      "food": "₺4,500 Mikla / Sunset Grill",
      "transport": "₺1,500 private driver",
      "activities": "₺3,000 private Bosphorus boat & guide",
      "extras": "₺1,500 spa & tips"
    }
  },
  "family": {
    "tip": "Children love the ferries, the Basilica Cistern and the Bosphorus boats. Many museums are free for under-8s. Strollers struggle on Sultanahmet cobbles and Grand Bazaar crowds — a baby carrier is easier.",
    "rows": [
      {
        "attraction": "Bosphorus Cruise",
        "desc": "Boats, bridges & gulls delight all ages",
        "goodForKids": true,
        "stroller": true,
        "babyChange": false,
        "familyTicket": true
      },
      {
        "attraction": "Basilica Cistern",
        "desc": "Atmospheric walkways · easy and cool",
        "goodForKids": true,
        "stroller": false,
        "babyChange": false,
        "familyTicket": true
      },
      {
        "attraction": "Galata Tower",
        "desc": "Lift to the top · panoramic views",
        "goodForKids": true,
        "stroller": false,
        "babyChange": false,
        "familyTicket": true
      },
      {
        "attraction": "Topkapı Palace",
        "desc": "Big courtyards to roam · Treasury sparkle",
        "goodForKids": true,
        "stroller": true,
        "babyChange": true,
        "familyTicket": true
      },
      {
        "attraction": "Miniatürk (optional)",
        "desc": "Miniature Turkey park · great for kids",
        "goodForKids": true,
        "stroller": true,
        "babyChange": true,
        "familyTicket": true
      },
      {
        "attraction": "Emirgan Park",
        "desc": "Lawns and paths to run free",
        "goodForKids": true,
        "stroller": true,
        "babyChange": true,
        "familyTicket": true
      },
      {
        "attraction": "Grand Bazaar",
        "desc": "Fun but crowded · hold little hands",
        "goodForKids": true,
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
        "name": "Acıbadem Taksim Hospital",
        "address": "Taksim · Beyoğlu",
        "icon": "hospital",
        "mapUrl": "https://www.google.com/maps/search/?api=1&query=Ac%C4%B1badem%20Taksim%20Hospital%20Istanbul"
      },
      {
        "name": "American Hospital (Amerikan Hastanesi)",
        "address": "Nişantaşı · Şişli",
        "icon": "hospital",
        "mapUrl": "https://www.google.com/maps/search/?api=1&query=American%20Hospital%20Istanbul"
      },
      {
        "name": "Memorial Şişli Hospital",
        "address": "Şişli · Istanbul",
        "icon": "hospital",
        "mapUrl": "https://www.google.com/maps/search/?api=1&query=Memorial%20%C5%9Ei%C5%9Fli%20Hospital%20Istanbul"
      }
    ],
    "embassies": [
      {
        "country": "Saudi Arabia",
        "address": "Consulate General · Levent · Istanbul",
        "icon": "embassy",
        "mapUrl": "https://www.google.com/maps/search/?api=1&query=Saudi+Consulate+Istanbul"
      },
      {
        "country": "United Arab Emirates",
        "address": "Consulate · Istanbul",
        "icon": "embassy",
        "mapUrl": "https://www.google.com/maps/search/?api=1&query=UAE+Consulate+Istanbul"
      },
      {
        "country": "Kuwait",
        "address": "Consulate · Istanbul",
        "icon": "embassy",
        "mapUrl": "https://www.google.com/maps/search/?api=1&query=Kuwait+Consulate+Istanbul"
      },
      {
        "country": "Qatar",
        "address": "Consulate · Istanbul",
        "icon": "embassy",
        "mapUrl": "https://www.google.com/maps/search/?api=1&query=Qatar+Consulate+Istanbul"
      },
      {
        "country": "Bahrain",
        "address": "Embassy · Ankara",
        "icon": "embassy",
        "mapUrl": "https://www.google.com/maps/search/?api=1&query=Bahrain+Embassy+Ankara"
      },
      {
        "country": "Oman",
        "address": "Embassy · Ankara",
        "icon": "embassy",
        "mapUrl": "https://www.google.com/maps/search/?api=1&query=Oman+Embassy+Ankara"
      }
    ],
    "lostPassport": "Report to the nearest police station (155). Contact your consulate in Istanbul or embassy in Ankara — they can issue an emergency travel document within 48–72 h. Photograph your passport and visa before you fly and keep a copy in the cloud."
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
      "use": "Ne kadar? — market and taxi negotiation"
    },
    {
      "english": "Tea, please",
      "use": "Bir çay, lütfen — the national drink"
    },
    {
      "english": "Where is the ferry?",
      "use": "Vapur nerede? — Bosphorus navigation"
    },
    {
      "english": "A table for two, please",
      "use": "İki kişilik masa, lütfen — restaurant arrival"
    },
    {
      "english": "The bill, please",
      "use": "Hesap, lütfen — end of meal"
    },
    {
      "english": "Is it halal?",
      "use": "Helal mi? — dietary check"
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
        "label": "İstanbulkart",
        "value": "One card for all transit"
      },
      {
        "label": "₺27",
        "value": "Tram / metro / ferry ride"
      },
      {
        "label": "BiTaksi",
        "value": "App for taxis"
      }
    ],
    "money": [
      {
        "label": "Cash for bazaars",
        "value": "Carry ₺1,000"
      },
      {
        "label": "Cards elsewhere",
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
        "name": "Moovit",
        "use": "Public transport routes"
      }
    ],
    "topQrCodes": [
      {
        "name": "Istanbul Airport (IST)",
        "mapUrl": "https://www.google.com/maps/search/?api=1&query=Istanbul+Airport"
      },
      {
        "name": "Hagia Sophia",
        "mapUrl": "https://www.google.com/maps/search/?api=1&query=Hagia%20Sophia%20Istanbul"
      },
      {
        "name": "Blue Mosque",
        "mapUrl": "https://www.google.com/maps/search/?api=1&query=Blue%20Mosque%20Istanbul"
      },
      {
        "name": "Topkapı Palace",
        "mapUrl": "https://www.google.com/maps/search/?api=1&query=Topkap%C4%B1%20Palace%20Istanbul"
      },
      {
        "name": "Grand Bazaar",
        "mapUrl": "https://www.google.com/maps/search/?api=1&query=Grand%20Bazaar%20Istanbul"
      },
      {
        "name": "The Peninsula Istanbul",
        "mapUrl": "https://www.google.com/maps/search/?api=1&query=The%20Peninsula%20Istanbul"
      },
      {
        "name": "Galata Tower",
        "mapUrl": "https://www.google.com/maps/search/?api=1&query=Galata%20Tower%20Istanbul"
      },
      {
        "name": "Eminönü Ferry Pier",
        "mapUrl": "https://www.google.com/maps/search/?api=1&query=Emin%C3%B6n%C3%BC%20ferry%20pier%20Istanbul"
      }
    ]
  },
  "etiquette": [
    {
      "rule": "Dress for mosques",
      "desc": "Cover shoulders and knees; women cover their hair. Remove shoes and stay quiet during prayer. Scarves are provided at major mosques."
    },
    {
      "rule": "Remove shoes indoors",
      "desc": "Take off shoes when entering homes and some traditional restaurants. Look for a shoe rack by the door."
    },
    {
      "rule": "Tea is hospitality",
      "desc": "Being offered çay is a warm gesture. Accepting — even a small glass — is polite; refusing repeatedly can seem cold."
    },
    {
      "rule": "Haggle with a smile",
      "desc": "Bargaining is expected in the bazaars but should stay friendly. Start around 50% of the asking price and meet in the middle."
    },
    {
      "rule": "Ramadan awareness",
      "desc": "During Ramadan, eating and drinking in public during daylight is discouraged. Restaurants still serve tourists discreetly."
    },
    {
      "rule": "Photograph respectfully",
      "desc": "Ask before photographing people, especially in Balat and Fener where residents live among the tourists."
    },
    {
      "rule": "Public affection",
      "desc": "Keep it modest, particularly near mosques and in conservative neighbourhoods."
    }
  ]
};
