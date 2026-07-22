/**
 * DISCOVER Italy — 8-Day Milan-to-Rome Train Itinerary
 * Milan · Lake Como · Verona · Venice · Florence · Tuscany · Rome
 * Real place photos via Wikimedia Commons (CC-licensed)
 */
const PLAN = {
  "meta": {
    "city": "Italy",
    "country": "Italy",
    "tagline": "Milan to Rome by high-speed train — fashion, lakes, canals, Renaissance and ancient grandeur in eight perfect days.",
    "badge": "Discover · 2026 Edition",
    "edition": "2026",
    "stats": {
      "chapters": 46,
      "qrCodes": "160+",
      "attractions": 23,
      "hotels": 14,
      "dining": 17,
      "days": 8
    },
    "theme": {
      "accent": "#b45309",
      "accentSoft": "#fef3c7",
      "accentDeep": "#92400e",
      "heroImage": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Colosseo_2020.jpg/960px-Colosseo_2020.jpg",
      "transitLabel": "Train",
      "tube": "#b45309",
      "parks": "#2d6a4f",
      "river": "#0077b6",
      "gold": "#b8860b",
      "navy": "#1a2744"
    }
  },
  "welcome": {
    "editorLetter": "Italy is not one destination but three personalities strung along a single high-speed line. Milan is fashion, design and rooftop cathedrals. The north is alpine lakes, Venetian canals and the balconies of Verona. The centre is Renaissance Florence, the vineyards of Tuscany and the ancient grandeur of Rome. This eight-day companion follows the Frecciarossa route — Milan, Lake Como, Verona, Venice, Florence, Tuscany and Rome — with every hour mapped and every QR code ready.\n\nEvery attraction, hotel and restaurant carries a scannable map link. Book your trains in advance, pack light for the platforms, and let Italy unfold city by city.",
    "howToUse": "Point your phone camera at any QR code and the location opens in Google Maps in one tap. Colour-coded day chapters follow the train route north to south. Book Frecciarossa or Italo tickets early for the best fares.\n\n— The Editors, Italy Bureau"
  },
  "essentials": {
    "currency": {
      "label": "€ Euro",
      "note": "Cards accepted almost everywhere. Carry some cash for small cafés, markets and gelato."
    },
    "power": {
      "label": "Type C/F/L · 230V",
      "note": "Italian three-pin (Type L) and European two-pin. Bring a universal adapter."
    },
    "sim": {
      "label": "eSIM or TIM / Vodafone",
      "note": "eSIM activates on arrival. TIM and Vodafone tourist SIMs at airports and stations."
    },
    "language": {
      "label": "Italian",
      "note": "English in hotels and tourist sites. Learn ciao, grazie and prego — locals appreciate it."
    },
    "tipping": {
      "label": "Round up · coperto",
      "note": "Service rarely added; round up or leave a few euros. Watch for coperto (cover charge)."
    },
    "emergency": {
      "label": "112 · 118 · 115",
      "note": "European emergency · Ambulance · Fire."
    },
    "tapWater": {
      "label": "Safe to drink",
      "note": "Tap water is safe. Refill at the free nasoni fountains across Rome."
    },
    "timezone": {
      "label": "CET · UTC+1",
      "note": "Daylight saving (CEST, UTC+2) from late March to late October."
    }
  },
  "arrival": [
    {
      "step": "01",
      "title": "Fly in",
      "desc": "Most itineraries arrive at Milan Malpensa (MXP) or Linate (LIN) and depart from Rome Fiumicino (FCO). Open-jaw tickets save backtracking."
    },
    {
      "step": "02",
      "title": "SIM / eSIM",
      "desc": "Activate your eSIM on airport Wi-Fi, or buy a TIM tourist SIM (≈€20 for 20GB) at arrivals."
    },
    {
      "step": "03",
      "title": "Cash",
      "desc": "Withdraw €200–300 from a bank ATM (Bancomat). Avoid Euronet machines — poor rates and fees."
    },
    {
      "step": "04",
      "title": "Book trains",
      "desc": "Reserve Frecciarossa (Trenitalia) or Italo seats in advance on the app. Cheaper the earlier you book."
    },
    {
      "step": "05",
      "title": "Airport to city",
      "desc": "MXP: Malpensa Express to Milano Centrale, 50 min. FCO: Leonardo Express to Termini, 32 min."
    },
    {
      "step": "06",
      "title": "Hotel",
      "desc": "Check-in from 14:00. Most hotels hold luggage from morning — drop bags and start exploring."
    },
    {
      "step": "07",
      "title": "First meal",
      "desc": "In Milan, grab a panzerotti at Luini and an espresso at Marchesi before the Duomo rooftop."
    }
  ],
  "packing": {
    "spring": {
      "months": "MAR–MAY",
      "temp": "10–22 °C · occasional rain",
      "items": [
        "Light layers",
        "Comfortable walking shoes",
        "Compact umbrella",
        "Scarf for churches",
        "Sunglasses",
        "Refillable bottle"
      ]
    },
    "summer": {
      "months": "JUN–AUG",
      "temp": "25–35 °C · hot & busy",
      "items": [
        "Breathable clothing",
        "Sunhat & SPF 30",
        "Shoulder cover for churches",
        "Sandals + walking shoes",
        "Refillable bottle",
        "Portable fan"
      ]
    },
    "autumn": {
      "months": "SEP–NOV",
      "temp": "12–24 °C · golden light",
      "items": [
        "Light jacket",
        "Layerable knits",
        "Waterproof shoes",
        "Umbrella",
        "Camera",
        "Scarf"
      ]
    },
    "winter": {
      "months": "DEC–FEB",
      "temp": "2–12 °C · crisp & quiet",
      "items": [
        "Warm coat",
        "Gloves & scarf",
        "Waterproof boots",
        "Layered knits",
        "Umbrella",
        "Moisturiser"
      ]
    }
  },
  "weatherTable": {
    "rows": [
      {
        "month": "Jan",
        "avgTemp": "3 / 11 °C",
        "rain": "35%",
        "sunset": "17:00",
        "crowds": "Low",
        "recommend": "Museums · no queues"
      },
      {
        "month": "Feb",
        "avgTemp": "4 / 13 °C",
        "rain": "35%",
        "sunset": "17:45",
        "crowds": "Low",
        "recommend": "Venice Carnival"
      },
      {
        "month": "Mar",
        "avgTemp": "7 / 16 °C",
        "rain": "40%",
        "sunset": "18:30",
        "crowds": "Rising",
        "recommend": "Shoulder-season value"
      },
      {
        "month": "Apr",
        "avgTemp": "10 / 19 °C",
        "rain": "45%",
        "sunset": "19:45",
        "crowds": "Medium",
        "recommend": "Lakes reopen · gardens bloom"
      },
      {
        "month": "May",
        "avgTemp": "14 / 23 °C",
        "rain": "40%",
        "sunset": "20:15",
        "crowds": "Medium",
        "recommend": "Best month overall"
      },
      {
        "month": "Jun",
        "avgTemp": "18 / 28 °C",
        "rain": "35%",
        "sunset": "20:45",
        "crowds": "High",
        "recommend": "Verona opera opens"
      },
      {
        "month": "Jul",
        "avgTemp": "21 / 32 °C",
        "rain": "25%",
        "sunset": "20:45",
        "crowds": "Peak",
        "recommend": "Head to Lake Como to cool off"
      },
      {
        "month": "Aug",
        "avgTemp": "21 / 32 °C",
        "rain": "30%",
        "sunset": "20:15",
        "crowds": "Peak",
        "recommend": "Cities empty mid-August"
      },
      {
        "month": "Sep",
        "avgTemp": "17 / 27 °C",
        "rain": "40%",
        "sunset": "19:15",
        "crowds": "High",
        "recommend": "Warm days · thinner crowds"
      },
      {
        "month": "Oct",
        "avgTemp": "13 / 21 °C",
        "rain": "55%",
        "sunset": "18:15",
        "crowds": "Medium",
        "recommend": "Tuscan harvest & truffles"
      },
      {
        "month": "Nov",
        "avgTemp": "8 / 15 °C",
        "rain": "60%",
        "sunset": "17:00",
        "crowds": "Low",
        "recommend": "Museums · cosy trattorie"
      },
      {
        "month": "Dec",
        "avgTemp": "4 / 11 °C",
        "rain": "45%",
        "sunset": "16:45",
        "crowds": "Medium",
        "recommend": "Christmas markets & lights"
      }
    ],
    "sweetSpot": "May and late September deliver the best balance — warm days, comfortable train platforms, lakes and gardens at their finest, and crowds below the July–August peak. Book Frecciarossa seats and headline museums well ahead in any season."
  },
  "transport": {
    "modes": [
      {
        "icon": "train",
        "name": "High-speed Train",
        "price": "€20–90",
        "desc": "Frecciarossa & Italo link every city on this route. Book early on the app for the cheapest fares."
      },
      {
        "icon": "walk",
        "name": "Walk",
        "price": "Free",
        "desc": "Italian historic centres are compact — walking is the best way to explore all six cities."
      },
      {
        "icon": "metro",
        "name": "Metro",
        "price": "€1.50–2",
        "desc": "Milan and Rome have efficient metros. Buy tickets at machines or via app; validate before boarding."
      },
      {
        "icon": "boat",
        "name": "Vaporetto",
        "price": "€9.50",
        "desc": "Venice water buses along the Grand Canal and to the islands. A day pass (€25) pays off quickly."
      },
      {
        "icon": "boat",
        "name": "Lake Ferry",
        "price": "€5–15",
        "desc": "Lake Como ferries connect Como, Bellagio and Varenna. Buy tickets at the pier."
      },
      {
        "icon": "cab",
        "name": "Taxi",
        "price": "€10–50",
        "desc": "Metered white taxis. Use FreeNow or itTaxi apps. Fixed fares to some airports."
      }
    ],
    "oysterTips": [
      {
        "title": "Book trains early",
        "desc": "Frecciarossa and Italo fares rise as seats sell. Booking weeks ahead can cut the Milan–Rome fare by half."
      },
      {
        "title": "Validate regional tickets",
        "desc": "Paper regional tickets (e.g. Milan–Como) must be validated in the green/white machines before boarding — fines apply otherwise."
      },
      {
        "title": "Venice vaporetto pass",
        "desc": "A 24- or 48-hour ACTV pass beats single €9.50 tickets if you ride more than twice."
      },
      {
        "title": "Skip-the-line matters",
        "desc": "Uffizi, Colosseum, Vatican and Doge’s Palace sell timed-entry tickets. Book online to avoid 60–120 min queues."
      }
    ],
    "exit6Tip": "Step off the Frecciarossa at Roma Termini and the city hits all at once — head straight to your hotel, drop your bag, and let Rome reveal itself on foot. The Colosseum is two metro stops away."
  },
  "maps": {
    "overview": {
      "caption": "A schematic map of the Milan-to-Rome route — for exact directions, scan any QR code in this guide.",
      "markers": [
        {
          "name": "Duomo di Milano",
          "type": "attraction",
          "lat": 45.4642,
          "lng": 9.1919
        },
        {
          "name": "Bellagio",
          "type": "attraction",
          "lat": 45.9865,
          "lng": 9.2612
        },
        {
          "name": "Arena di Verona",
          "type": "attraction",
          "lat": 45.439,
          "lng": 10.9944
        },
        {
          "name": "St Mark's Basilica",
          "type": "attraction",
          "lat": 45.4345,
          "lng": 12.3397
        },
        {
          "name": "Duomo di Firenze",
          "type": "attraction",
          "lat": 43.7731,
          "lng": 11.256
        },
        {
          "name": "Colosseum",
          "type": "attraction",
          "lat": 41.8902,
          "lng": 12.4922
        },
        {
          "name": "Vatican Museums & Sistine Chapel",
          "type": "attraction",
          "lat": 41.9065,
          "lng": 12.4536
        },
        {
          "name": "Grand Canal",
          "type": "district",
          "lat": 45.4408,
          "lng": 12.3325
        },
        {
          "name": "Park Hyatt Milan",
          "type": "hotel",
          "lat": 45.4655,
          "lng": 9.19
        },
        {
          "name": "The Gritti Palace",
          "type": "hotel",
          "lat": 45.4319,
          "lng": 12.3336
        },
        {
          "name": "Hotel de Russie",
          "type": "hotel",
          "lat": 41.9095,
          "lng": 12.4769
        },
        {
          "name": "Roscioli Salumeria",
          "type": "dining",
          "lat": 41.8946,
          "lng": 12.4726
        },
        {
          "name": "Trattoria Mario",
          "type": "dining",
          "lat": 43.7776,
          "lng": 11.2556
        }
      ]
    }
  },
  "attractions": [
    {
      "name": "Duomo di Milano",
      "address": "Piazza del Duomo · Milan",
      "hours": "08:00–19:00 · rooftop until 20:00",
      "tube": "Duomo M1/M3 · 2 min walk",
      "ticket": "Cathedral free · rooftop €16",
      "bestArrival": "09:30",
      "waitSummer": "30–60 min rooftop",
      "waitWinter": "10–20 min",
      "photoSpot": "From Piazza del Duomo — full Gothic façade and spires.",
      "lens": "16–35mm",
      "tip": "Book rooftop tickets online. Dress modestly — shoulders covered.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Duomo%20di%20Milano%20Milan%20Italy",
      "bookUrl": "https://www.duomomilano.it/",
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
      "nearbyTube": "Duomo M1/M3 · 2 min walk",
      "nearbyToilets": "On-site or nearby cafés.",
      "nearbyAtm": "Banks on main piazzas · ATMs at train stations",
      "didYouKnow": "The Duomo took nearly six centuries to complete — 135 spires crown the roof.",
      "localSecret": "The rooftop walk at sunset is quieter than mid-morning — book the last slot.",
      "instagram": {
        "sunset": "From Piazza del Duomo — full Gothic façade and spires.",
        "sunrise": "From Piazza del Duomo — full Gothic façade and spires.",
        "drone": "Check local drone rules — restricted near historic centres",
        "settings": "f/8 · ISO 200 · 24–70mm"
      },
      "photos": {
        "hero": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Il_Duomo_di_Milano_-_July_2026.jpg/960px-Il_Duomo_di_Milano_-_July_2026.jpg",
        "detail": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/20110724_Milan_Cathedral_5260.jpg/960px-20110724_Milan_Cathedral_5260.jpg",
        "photoSpot": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/IMG_3712_-_Milano_-_Duomo_-_Interno_-_Foto_di_Giovanni_Dall%27Orto_-_13-jan-2007.jpg/960px-IMG_3712_-_Milano_-_Duomo_-_Interno_-_Foto_di_Giovanni_Dall%27Orto_-_13-jan-2007.jpg",
        "map": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/IMG_3712_-_Milano_-_Duomo_-_Interno_-_Foto_di_Giovanni_Dall%27Orto_-_13-jan-2007.jpg/960px-IMG_3712_-_Milano_-_Duomo_-_Interno_-_Foto_di_Giovanni_Dall%27Orto_-_13-jan-2007.jpg",
        "heroPosition": "center 40%"
      },
      "seasonalPhotos": {
        "spring": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Il_Duomo_di_Milano_-_July_2026.jpg/960px-Il_Duomo_di_Milano_-_July_2026.jpg",
        "summer": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/20110724_Milan_Cathedral_5260.jpg/960px-20110724_Milan_Cathedral_5260.jpg",
        "autumn": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/IMG_3712_-_Milano_-_Duomo_-_Interno_-_Foto_di_Giovanni_Dall%27Orto_-_13-jan-2007.jpg/960px-IMG_3712_-_Milano_-_Duomo_-_Interno_-_Foto_di_Giovanni_Dall%27Orto_-_13-jan-2007.jpg",
        "christmas": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/IMG_3712_-_Milano_-_Duomo_-_Interno_-_Foto_di_Giovanni_Dall%27Orto_-_13-jan-2007.jpg/960px-IMG_3712_-_Milano_-_Duomo_-_Interno_-_Foto_di_Giovanni_Dall%27Orto_-_13-jan-2007.jpg"
      }
    },
    {
      "name": "Galleria Vittorio Emanuele II",
      "address": "Piazza del Duomo · Milan",
      "hours": "Always open · shops 10:00–20:00",
      "tube": "Duomo M1/M3",
      "ticket": "Free",
      "bestArrival": "15:00",
      "photoSpot": "Centre of the cross — glass dome and mosaic floor bull.",
      "lens": "14–24mm",
      "tip": "Spin on the mosaic bull's testicles with your heel for luck — Milan tradition.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Galleria%20Vittorio%20Emanuele%20II%20Milan%20Italy",
      "bookUrl": "https://www.google.com/maps/search/?api=1&query=Galleria%20Vittorio%20Emanuele%20II%20Milan%20Italy",
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
      "nearbyTube": "Duomo M1/M3",
      "nearbyToilets": "On-site or nearby cafés.",
      "nearbyAtm": "Banks on main piazzas · ATMs at train stations",
      "didYouKnow": "Opened in 1877, this is one of the world's oldest shopping arcades.",
      "localSecret": "Prada's original store sits in the left wing — worth a peek even without buying.",
      "instagram": {
        "sunset": "Centre of the cross — glass dome and mosaic floor bull.",
        "sunrise": "Centre of the cross — glass dome and mosaic floor bull.",
        "drone": "Check local drone rules — restricted near historic centres",
        "settings": "f/8 · ISO 200 · 24–70mm"
      },
      "photos": {
        "hero": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Galleria_Milano_%28179532365%29.jpeg/960px-Galleria_Milano_%28179532365%29.jpeg",
        "detail": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/IMG_7052_-_Milano_-_Galleria_Vittorio_Emanuele_II_-_Foto_Giovanni_Dall%27Orto_-_8-Mar-2007.jpg/960px-IMG_7052_-_Milano_-_Galleria_Vittorio_Emanuele_II_-_Foto_Giovanni_Dall%27Orto_-_8-Mar-2007.jpg",
        "photoSpot": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/North_view_in_Galleria_Vittorio_Emanuele_II_from_rotunda.jpg/960px-North_view_in_Galleria_Vittorio_Emanuele_II_from_rotunda.jpg",
        "map": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Glass_fome_of_the_Galleria_Vittorio_Emanuele_II_in_Milan.JPG/960px-Glass_fome_of_the_Galleria_Vittorio_Emanuele_II_in_Milan.JPG",
        "heroPosition": "center 40%"
      },
      "seasonalPhotos": {
        "spring": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Galleria_Milano_%28179532365%29.jpeg/960px-Galleria_Milano_%28179532365%29.jpeg",
        "summer": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/IMG_7052_-_Milano_-_Galleria_Vittorio_Emanuele_II_-_Foto_Giovanni_Dall%27Orto_-_8-Mar-2007.jpg/960px-IMG_7052_-_Milano_-_Galleria_Vittorio_Emanuele_II_-_Foto_Giovanni_Dall%27Orto_-_8-Mar-2007.jpg",
        "autumn": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/North_view_in_Galleria_Vittorio_Emanuele_II_from_rotunda.jpg/960px-North_view_in_Galleria_Vittorio_Emanuele_II_from_rotunda.jpg",
        "christmas": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Glass_fome_of_the_Galleria_Vittorio_Emanuele_II_in_Milan.JPG/960px-Glass_fome_of_the_Galleria_Vittorio_Emanuele_II_in_Milan.JPG"
      }
    },
    {
      "name": "Sforza Castle",
      "address": "Piazza Castello · Milan",
      "hours": "07:00–19:30 · museums 09:00–17:30",
      "tube": "Cairoli M1 · Lanza M2",
      "ticket": "Courtyard free · museums €5",
      "bestArrival": "17:00",
      "photoSpot": "From Parco Sempione — castle towers against the sky.",
      "lens": "24–70mm",
      "tip": "Michelangelo's unfinished Pietà Rondanini is inside. Combine with Navigli dinner.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Sforza%20Castle%20Milan%20Italy",
      "bookUrl": "https://www.google.com/maps/search/?api=1&query=Sforza%20Castle%20Milan%20Italy",
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
      "nearbyTube": "Cairoli M1 · Lanza M2",
      "nearbyToilets": "On-site or nearby cafés.",
      "nearbyAtm": "Banks on main piazzas · ATMs at train stations",
      "didYouKnow": "Leonardo da Vinci worked here under Ludovico Sforza — the castle was his workshop.",
      "instagram": {
        "sunset": "From Parco Sempione — castle towers against the sky.",
        "sunrise": "From Parco Sempione — castle towers against the sky.",
        "drone": "Check local drone rules — restricted near historic centres",
        "settings": "f/8 · ISO 200 · 24–70mm"
      },
      "photos": {
        "hero": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/20110725_Castello_Sforzesco_Milan_5557.jpg/960px-20110725_Castello_Sforzesco_Milan_5557.jpg",
        "detail": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/20110725_Castello_Sforzesco_Milan_5557.jpg/960px-20110725_Castello_Sforzesco_Milan_5557.jpg",
        "photoSpot": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/20110725_Castello_Sforzesco_Milan_5557.jpg/960px-20110725_Castello_Sforzesco_Milan_5557.jpg",
        "map": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/20110725_Castello_Sforzesco_Milan_5557.jpg/960px-20110725_Castello_Sforzesco_Milan_5557.jpg",
        "heroPosition": "center 40%"
      },
      "seasonalPhotos": {
        "spring": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/20110725_Castello_Sforzesco_Milan_5557.jpg/960px-20110725_Castello_Sforzesco_Milan_5557.jpg",
        "summer": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/20110725_Castello_Sforzesco_Milan_5557.jpg/960px-20110725_Castello_Sforzesco_Milan_5557.jpg",
        "autumn": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/20110725_Castello_Sforzesco_Milan_5557.jpg/960px-20110725_Castello_Sforzesco_Milan_5557.jpg",
        "christmas": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/20110725_Castello_Sforzesco_Milan_5557.jpg/960px-20110725_Castello_Sforzesco_Milan_5557.jpg"
      }
    },
    {
      "name": "Navigli District",
      "address": "Naviglio Grande · Milan",
      "hours": "Canals always open · restaurants from 12:00",
      "tube": "Porta Genova M2",
      "ticket": "Free",
      "bestArrival": "18:30",
      "photoSpot": "Along Naviglio Grande — bridges, boats, aperitivo hour.",
      "lens": "35mm",
      "tip": "Milan's canal quarter. Aperitivo 18:00–21:00 — drink comes with buffet snacks.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Navigli%20District%20Milan%20Italy",
      "bookUrl": "https://www.google.com/maps/search/?api=1&query=Navigli%20District%20Milan%20Italy",
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
      "nearbyTube": "Porta Genova M2",
      "nearbyToilets": "On-site or nearby cafés.",
      "nearbyAtm": "Banks on main piazzas · ATMs at train stations",
      "localSecret": "Via Tortona side streets have design showrooms open during Salone del Mobile week.",
      "instagram": {
        "sunset": "Along Naviglio Grande — bridges, boats, aperitivo hour.",
        "sunrise": "Along Naviglio Grande — bridges, boats, aperitivo hour.",
        "drone": "Check local drone rules — restricted near historic centres",
        "settings": "f/8 · ISO 200 · 24–70mm"
      },
      "photos": {
        "hero": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Naviglio_Grande%2C_Milano.jpg/960px-Naviglio_Grande%2C_Milano.jpg",
        "detail": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/1413_-_Milano_-_Duomo_-_Luminarie_Naviglio_Grande_-_Foto_Giovanni_Dall%27Orto%2C_24-Nov-2007.jpg/960px-1413_-_Milano_-_Duomo_-_Luminarie_Naviglio_Grande_-_Foto_Giovanni_Dall%27Orto%2C_24-Nov-2007.jpg",
        "photoSpot": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/1413_-_Milano_-_Duomo_-_Luminarie_Naviglio_Grande_-_Foto_Giovanni_Dall%27Orto%2C_24-Nov-2007.jpg/960px-1413_-_Milano_-_Duomo_-_Luminarie_Naviglio_Grande_-_Foto_Giovanni_Dall%27Orto%2C_24-Nov-2007.jpg",
        "map": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Naviglio_Grande%2C_Milano.jpg/960px-Naviglio_Grande%2C_Milano.jpg",
        "heroPosition": "center 40%"
      },
      "seasonalPhotos": {
        "spring": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Naviglio_Grande%2C_Milano.jpg/960px-Naviglio_Grande%2C_Milano.jpg",
        "summer": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/1413_-_Milano_-_Duomo_-_Luminarie_Naviglio_Grande_-_Foto_Giovanni_Dall%27Orto%2C_24-Nov-2007.jpg/960px-1413_-_Milano_-_Duomo_-_Luminarie_Naviglio_Grande_-_Foto_Giovanni_Dall%27Orto%2C_24-Nov-2007.jpg",
        "autumn": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/1413_-_Milano_-_Duomo_-_Luminarie_Naviglio_Grande_-_Foto_Giovanni_Dall%27Orto%2C_24-Nov-2007.jpg/960px-1413_-_Milano_-_Duomo_-_Luminarie_Naviglio_Grande_-_Foto_Giovanni_Dall%27Orto%2C_24-Nov-2007.jpg",
        "christmas": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Naviglio_Grande%2C_Milano.jpg/960px-Naviglio_Grande%2C_Milano.jpg"
      }
    },
    {
      "name": "Como Cathedral",
      "address": "Piazza Duomo · Como",
      "hours": "10:30–17:00",
      "tube": "Como San Giovanni · 5 min walk",
      "ticket": "Free · donation suggested",
      "bestArrival": "10:30",
      "photoSpot": "From lakeside promenade — cathedral dome above the water.",
      "lens": "24mm",
      "tip": "Start your Lake Como day here before the ferry to Bellagio.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Como%20Cathedral%20Como%20Italy",
      "bookUrl": "https://www.google.com/maps/search/?api=1&query=Como%20Cathedral%20Como%20Italy",
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
      "nearbyTube": "Como San Giovanni · 5 min walk",
      "nearbyToilets": "On-site or nearby cafés.",
      "nearbyAtm": "Banks on main piazzas · ATMs at train stations",
      "didYouKnow": "Como's cathedral took over three centuries to build — the dome was added last.",
      "instagram": {
        "sunset": "From lakeside promenade — cathedral dome above the water.",
        "sunrise": "From lakeside promenade — cathedral dome above the water.",
        "drone": "Check local drone rules — restricted near historic centres",
        "settings": "f/8 · ISO 200 · 24–70mm"
      },
      "photos": {
        "hero": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Cathedral_of_Como_%2811%29.jpg/960px-Cathedral_of_Como_%2811%29.jpg",
        "detail": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Cathedral_of_Como_%2811%29.jpg/960px-Cathedral_of_Como_%2811%29.jpg",
        "photoSpot": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Cathedral_of_Como_%282%29.jpg/960px-Cathedral_of_Como_%282%29.jpg",
        "map": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Cathedral_of_Como_%282%29.jpg/960px-Cathedral_of_Como_%282%29.jpg",
        "heroPosition": "center 40%"
      },
      "seasonalPhotos": {
        "spring": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Cathedral_of_Como_%2811%29.jpg/960px-Cathedral_of_Como_%2811%29.jpg",
        "summer": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Cathedral_of_Como_%2811%29.jpg/960px-Cathedral_of_Como_%2811%29.jpg",
        "autumn": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Cathedral_of_Como_%282%29.jpg/960px-Cathedral_of_Como_%282%29.jpg",
        "christmas": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Cathedral_of_Como_%282%29.jpg/960px-Cathedral_of_Como_%282%29.jpg"
      }
    },
    {
      "name": "Bellagio",
      "address": "Lago di Como · Bellagio",
      "hours": "Always open · shops 10:00–19:00",
      "tube": "Ferry from Como · 1 hr",
      "ticket": "Free",
      "bestArrival": "11:00",
      "photoSpot": "From the ferry approaching — village stacked on the promontory.",
      "lens": "24–70mm",
      "tip": "The pearl of Lake Como. Narrow lanes, lake views, lunch on the waterfront.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Bellagio%20Como%20Italy",
      "bookUrl": "https://www.google.com/maps/search/?api=1&query=Bellagio%20Como%20Italy",
      "bookText": "Book Tickets",
      "avgVisit": "3 hours",
      "crowd": {
        "morning": 3,
        "afternoon": 4,
        "evening": 2
      },
      "nearby": [],
      "nearbyCafes": "See dining chapter in this guide.",
      "nearbyRestaurants": "See dining chapter in this guide.",
      "nearbyTube": "Ferry from Como · 1 hr",
      "nearbyToilets": "On-site or nearby cafés.",
      "nearbyAtm": "Banks on main piazzas · ATMs at train stations",
      "localSecret": "Walk up to San Giacomo church for the classic postcard view without the crowds.",
      "instagram": {
        "sunset": "From the ferry approaching — village stacked on the promontory.",
        "sunrise": "From the ferry approaching — village stacked on the promontory.",
        "drone": "Check local drone rules — restricted near historic centres",
        "settings": "f/8 · ISO 200 · 24–70mm"
      },
      "photos": {
        "hero": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Bellagio_-_Albergo_Genazzini_%26_Metropole_from_Lake_Como.jpg/960px-Bellagio_-_Albergo_Genazzini_%26_Metropole_from_Lake_Como.jpg",
        "detail": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/La_Punta%2C_Bellagio%2C_Lago_de_Como%2C_Italia%2C_2016-06-25%2C_DD_11.jpg/960px-La_Punta%2C_Bellagio%2C_Lago_de_Como%2C_Italia%2C_2016-06-25%2C_DD_11.jpg",
        "photoSpot": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Basilica_di_San_Giacomo_%28Bellagio%29_-_DSC02622.JPG/960px-Basilica_di_San_Giacomo_%28Bellagio%29_-_DSC02622.JPG",
        "map": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/La_Punta%2C_Bellagio%2C_Lago_de_Como%2C_Italia%2C_2016-06-25%2C_DD_11.jpg/960px-La_Punta%2C_Bellagio%2C_Lago_de_Como%2C_Italia%2C_2016-06-25%2C_DD_11.jpg",
        "heroPosition": "center 40%"
      },
      "seasonalPhotos": {
        "spring": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Bellagio_-_Albergo_Genazzini_%26_Metropole_from_Lake_Como.jpg/960px-Bellagio_-_Albergo_Genazzini_%26_Metropole_from_Lake_Como.jpg",
        "summer": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/La_Punta%2C_Bellagio%2C_Lago_de_Como%2C_Italia%2C_2016-06-25%2C_DD_11.jpg/960px-La_Punta%2C_Bellagio%2C_Lago_de_Como%2C_Italia%2C_2016-06-25%2C_DD_11.jpg",
        "autumn": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Basilica_di_San_Giacomo_%28Bellagio%29_-_DSC02622.JPG/960px-Basilica_di_San_Giacomo_%28Bellagio%29_-_DSC02622.JPG",
        "christmas": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/La_Punta%2C_Bellagio%2C_Lago_de_Como%2C_Italia%2C_2016-06-25%2C_DD_11.jpg/960px-La_Punta%2C_Bellagio%2C_Lago_de_Como%2C_Italia%2C_2016-06-25%2C_DD_11.jpg"
      }
    },
    {
      "name": "Villa Melzi Gardens",
      "address": "Via Melzi d'Eril · Bellagio",
      "hours": "09:30–18:30 Apr–Oct",
      "tube": "10 min walk from Bellagio ferry",
      "ticket": "€8 adult",
      "bestArrival": "14:00",
      "photoSpot": "Japanese maples reflected in the lake — autumn is spectacular.",
      "lens": "50–85mm",
      "tip": "Romantic lakeside gardens. Allow 1 hour before the ferry back.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Villa%20Melzi%20Gardens%20Como%20Italy",
      "bookUrl": "https://www.google.com/maps/search/?api=1&query=Villa%20Melzi%20Gardens%20Como%20Italy",
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
      "nearbyTube": "10 min walk from Bellagio ferry",
      "nearbyToilets": "On-site or nearby cafés.",
      "nearbyAtm": "Banks on main piazzas · ATMs at train stations",
      "didYouKnow": "Napoleon's vice-president owned this villa — the gardens were designed for lake promenades.",
      "instagram": {
        "sunset": "Japanese maples reflected in the lake — autumn is spectacular.",
        "sunrise": "Japanese maples reflected in the lake — autumn is spectacular.",
        "drone": "Check local drone rules — restricted near historic centres",
        "settings": "f/8 · ISO 200 · 24–70mm"
      },
      "photos": {
        "hero": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Bellagio_-_Villa_Melzi_d%27Eril_-_2023-09-01_00-15-09_003.JPG/960px-Bellagio_-_Villa_Melzi_d%27Eril_-_2023-09-01_00-15-09_003.JPG",
        "detail": "https://upload.wikimedia.org/wikipedia/commons/8/8f/Bellagio_Villa_Melzi_temple_Como_Lake.png",
        "photoSpot": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Bellagio_-_Villa_Melzi_d%27Eril_-_2023-09-01_00-15-09_003.JPG/960px-Bellagio_-_Villa_Melzi_d%27Eril_-_2023-09-01_00-15-09_003.JPG",
        "map": "https://upload.wikimedia.org/wikipedia/commons/8/8f/Bellagio_Villa_Melzi_temple_Como_Lake.png",
        "heroPosition": "center 40%"
      },
      "seasonalPhotos": {
        "spring": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Bellagio_-_Villa_Melzi_d%27Eril_-_2023-09-01_00-15-09_003.JPG/960px-Bellagio_-_Villa_Melzi_d%27Eril_-_2023-09-01_00-15-09_003.JPG",
        "summer": "https://upload.wikimedia.org/wikipedia/commons/8/8f/Bellagio_Villa_Melzi_temple_Como_Lake.png",
        "autumn": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Bellagio_-_Villa_Melzi_d%27Eril_-_2023-09-01_00-15-09_003.JPG/960px-Bellagio_-_Villa_Melzi_d%27Eril_-_2023-09-01_00-15-09_003.JPG",
        "christmas": "https://upload.wikimedia.org/wikipedia/commons/8/8f/Bellagio_Villa_Melzi_temple_Como_Lake.png"
      }
    },
    {
      "name": "Juliet's House",
      "address": "Via Cappello 23 · Verona",
      "hours": "08:30–19:30 Tue–Sun",
      "tube": "Verona Porta Nuova · 15 min walk",
      "ticket": "Balcony €6 · courtyard free",
      "bestArrival": "09:00",
      "waitSummer": "20–40 min",
      "waitWinter": "5–15 min",
      "photoSpot": "Balcony from the courtyard — touch the bronze statue for luck.",
      "lens": "35mm",
      "tip": "Arrive early before tour groups. The love-letter wall is in the courtyard entrance.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Juliet's%20House%20Verona%20Italy",
      "bookUrl": "https://www.google.com/maps/search/?api=1&query=Juliet's%20House%20Verona%20Italy",
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
      "nearbyTube": "Verona Porta Nuova · 15 min walk",
      "nearbyToilets": "On-site or nearby cafés.",
      "nearbyAtm": "Banks on main piazzas · ATMs at train stations",
      "didYouKnow": "Shakespeare never visited Verona — the balcony was added in the 20th century.",
      "instagram": {
        "sunset": "Balcony from the courtyard — touch the bronze statue for luck.",
        "sunrise": "Balcony from the courtyard — touch the bronze statue for luck.",
        "drone": "Check local drone rules — restricted near historic centres",
        "settings": "f/8 · ISO 200 · 24–70mm"
      },
      "photos": {
        "hero": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Casa_di_Giulietta_%28Verona%29_-_Balcony.jpg/960px-Casa_di_Giulietta_%28Verona%29_-_Balcony.jpg",
        "detail": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Casa_di_Giulietta_%28Verona%29_-_Balcony.jpg/960px-Casa_di_Giulietta_%28Verona%29_-_Balcony.jpg",
        "photoSpot": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Bedroom_-_House_of_Juliet_-_Verona_2016.jpg/960px-Bedroom_-_House_of_Juliet_-_Verona_2016.jpg",
        "map": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Juliet%27s_House%2C_Via_Cappello%2C_Verona_-_Quote_from_Shakespeare%27s_Romeo_and_Juliet_-_Act_II_Scene_II.jpg/960px-Juliet%27s_House%2C_Via_Cappello%2C_Verona_-_Quote_from_Shakespeare%27s_Romeo_and_Juliet_-_Act_II_Scene_II.jpg",
        "heroPosition": "center 40%"
      },
      "seasonalPhotos": {
        "spring": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Casa_di_Giulietta_%28Verona%29_-_Balcony.jpg/960px-Casa_di_Giulietta_%28Verona%29_-_Balcony.jpg",
        "summer": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Casa_di_Giulietta_%28Verona%29_-_Balcony.jpg/960px-Casa_di_Giulietta_%28Verona%29_-_Balcony.jpg",
        "autumn": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Bedroom_-_House_of_Juliet_-_Verona_2016.jpg/960px-Bedroom_-_House_of_Juliet_-_Verona_2016.jpg",
        "christmas": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Juliet%27s_House%2C_Via_Cappello%2C_Verona_-_Quote_from_Shakespeare%27s_Romeo_and_Juliet_-_Act_II_Scene_II.jpg/960px-Juliet%27s_House%2C_Via_Cappello%2C_Verona_-_Quote_from_Shakespeare%27s_Romeo_and_Juliet_-_Act_II_Scene_II.jpg"
      }
    },
    {
      "name": "Arena di Verona",
      "address": "Piazza Bra · Verona",
      "hours": "08:30–19:30 · opera Jun–Aug",
      "tube": "Verona Porta Nuova · 10 min walk",
      "ticket": "€10 adult · opera from €25",
      "bestArrival": "10:00",
      "photoSpot": "From Piazza Bra — complete Roman amphitheatre ring.",
      "lens": "16mm",
      "tip": "Third-largest Roman arena still in use. Book opera tickets months ahead for summer.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Arena%20di%20Verona%20Verona%20Italy",
      "bookUrl": "https://www.arena.it/",
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
      "nearbyTube": "Verona Porta Nuova · 10 min walk",
      "nearbyToilets": "On-site or nearby cafés.",
      "nearbyAtm": "Banks on main piazzas · ATMs at train stations",
      "didYouKnow": "Built in AD 30, the arena seats 15,000 for opera under the stars.",
      "instagram": {
        "sunset": "From Piazza Bra — complete Roman amphitheatre ring.",
        "sunrise": "From Piazza Bra — complete Roman amphitheatre ring.",
        "drone": "Check local drone rules — restricted near historic centres",
        "settings": "f/8 · ISO 200 · 24–70mm"
      },
      "photos": {
        "hero": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Arena-XE3F2406a.jpg/960px-Arena-XE3F2406a.jpg",
        "detail": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Arena-XE3F2406a.jpg/960px-Arena-XE3F2406a.jpg",
        "photoSpot": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Verona%2C_Arena_di_Verona_%281%29.jpg/960px-Verona%2C_Arena_di_Verona_%281%29.jpg",
        "map": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Piazza_Bra_seen_from_the_arenas_%28Verona%29.jpg/960px-Piazza_Bra_seen_from_the_arenas_%28Verona%29.jpg",
        "heroPosition": "center 40%"
      },
      "seasonalPhotos": {
        "spring": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Arena-XE3F2406a.jpg/960px-Arena-XE3F2406a.jpg",
        "summer": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Arena-XE3F2406a.jpg/960px-Arena-XE3F2406a.jpg",
        "autumn": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Verona%2C_Arena_di_Verona_%281%29.jpg/960px-Verona%2C_Arena_di_Verona_%281%29.jpg",
        "christmas": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Piazza_Bra_seen_from_the_arenas_%28Verona%29.jpg/960px-Piazza_Bra_seen_from_the_arenas_%28Verona%29.jpg"
      }
    },
    {
      "name": "St Mark's Basilica",
      "address": "Piazza San Marco · Venice",
      "hours": "09:30–17:00 · Sun from 14:00",
      "tube": "Vaporetto San Marco · 2 min walk",
      "ticket": "Basilica free · Pala d'Oro €5 · museum €7",
      "bestArrival": "09:30",
      "waitSummer": "45–90 min",
      "waitWinter": "15–30 min",
      "photoSpot": "From the lagoon side — golden mosaics and domes at sunrise.",
      "lens": "24mm",
      "tip": "No bags allowed — free deposit at Ateneo San Basso. Dress code enforced.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=St%20Mark's%20Basilica%20Venice%20Italy",
      "bookUrl": "https://www.basilicasanmarco.it/",
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
      "nearbyTube": "Vaporetto San Marco · 2 min walk",
      "nearbyToilets": "On-site or nearby cafés.",
      "nearbyAtm": "Banks on main piazzas · ATMs at train stations",
      "didYouKnow": "Over 85,000 sq ft of gold mosaics cover the interior — built to dazzle pilgrims.",
      "instagram": {
        "sunset": "From the lagoon side — golden mosaics and domes at sunrise.",
        "sunrise": "From the lagoon side — golden mosaics and domes at sunrise.",
        "drone": "Check local drone rules — restricted near historic centres",
        "settings": "f/8 · ISO 200 · 24–70mm"
      },
      "photos": {
        "hero": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Venezia_Basilica_di_San_Marco_Fassade_2.jpg/960px-Venezia_Basilica_di_San_Marco_Fassade_2.jpg",
        "detail": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/San_Marco_cathedral_in_Venice.JPG/960px-San_Marco_cathedral_in_Venice.JPG",
        "photoSpot": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Venezia_Basilica_di_San_Marco_Fassade_2.jpg/960px-Venezia_Basilica_di_San_Marco_Fassade_2.jpg",
        "map": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Mosaico_traslazione_San_Marco_Venezia.JPG/960px-Mosaico_traslazione_San_Marco_Venezia.JPG",
        "heroPosition": "center 40%"
      },
      "seasonalPhotos": {
        "spring": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Venezia_Basilica_di_San_Marco_Fassade_2.jpg/960px-Venezia_Basilica_di_San_Marco_Fassade_2.jpg",
        "summer": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/San_Marco_cathedral_in_Venice.JPG/960px-San_Marco_cathedral_in_Venice.JPG",
        "autumn": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Venezia_Basilica_di_San_Marco_Fassade_2.jpg/960px-Venezia_Basilica_di_San_Marco_Fassade_2.jpg",
        "christmas": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Mosaico_traslazione_San_Marco_Venezia.JPG/960px-Mosaico_traslazione_San_Marco_Venezia.JPG"
      }
    },
    {
      "name": "Doge's Palace",
      "address": "Piazza San Marco 1 · Venice",
      "hours": "09:00–19:00 · last entry 18:00",
      "tube": "Vaporetto San Marco",
      "ticket": "€30 adult · includes Secret Itineraries extra",
      "bestArrival": "09:00",
      "waitSummer": "30–60 min",
      "waitWinter": "10–20 min",
      "photoSpot": "Bridge of Sighs from Ponte della Paglia — prisoners' last view.",
      "lens": "24–70mm",
      "tip": "Combine with St Mark's morning visit. Tintoretto's Paradise is Europe's largest canvas.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Doge's%20Palace%20Venice%20Italy",
      "bookUrl": "https://palazzoducale.visitmuve.it/",
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
      "nearbyTube": "Vaporetto San Marco",
      "nearbyToilets": "On-site or nearby cafés.",
      "nearbyAtm": "Banks on main piazzas · ATMs at train stations",
      "localSecret": "The hidden staircases tour reveals the prison cells behind the Bridge of Sighs.",
      "instagram": {
        "sunset": "Bridge of Sighs from Ponte della Paglia — prisoners' last view.",
        "sunrise": "Bridge of Sighs from Ponte della Paglia — prisoners' last view.",
        "drone": "Check local drone rules — restricted near historic centres",
        "settings": "f/8 · ISO 200 · 24–70mm"
      },
      "photos": {
        "hero": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/%28Venice%29_Doge%27s_Palace_and_campanile_of_St._Mark%27s_Basilica_facing_the_sea.jpg/960px-%28Venice%29_Doge%27s_Palace_and_campanile_of_St._Mark%27s_Basilica_facing_the_sea.jpg",
        "detail": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Courtyard_of_the_Doge%27s_Palace_%28Venice%29_-_Wells.jpg/960px-Courtyard_of_the_Doge%27s_Palace_%28Venice%29_-_Wells.jpg",
        "photoSpot": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Scala_d%27Oro_4_%28Doge%27s_Palace%29.jpg/960px-Scala_d%27Oro_4_%28Doge%27s_Palace%29.jpg",
        "map": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Scala_d%27Oro_4_%28Doge%27s_Palace%29.jpg/960px-Scala_d%27Oro_4_%28Doge%27s_Palace%29.jpg",
        "heroPosition": "center 40%"
      },
      "seasonalPhotos": {
        "spring": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/%28Venice%29_Doge%27s_Palace_and_campanile_of_St._Mark%27s_Basilica_facing_the_sea.jpg/960px-%28Venice%29_Doge%27s_Palace_and_campanile_of_St._Mark%27s_Basilica_facing_the_sea.jpg",
        "summer": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Courtyard_of_the_Doge%27s_Palace_%28Venice%29_-_Wells.jpg/960px-Courtyard_of_the_Doge%27s_Palace_%28Venice%29_-_Wells.jpg",
        "autumn": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Scala_d%27Oro_4_%28Doge%27s_Palace%29.jpg/960px-Scala_d%27Oro_4_%28Doge%27s_Palace%29.jpg",
        "christmas": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Scala_d%27Oro_4_%28Doge%27s_Palace%29.jpg/960px-Scala_d%27Oro_4_%28Doge%27s_Palace%29.jpg"
      }
    },
    {
      "name": "Grand Canal",
      "address": "Canal Grande · Venice",
      "hours": "Always open",
      "tube": "Vaporetto Line 1 · 24 hr",
      "ticket": "Vaporetto €9.50 single · day pass €25",
      "bestArrival": "Sunset",
      "photoSpot": "From Accademia Bridge — canal curve and palazzo reflections.",
      "lens": "24–70mm",
      "tip": "Take vaporetto Line 1 the full length — cheapest grand canal tour in Venice.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Grand%20Canal%20Venice%20Italy",
      "bookUrl": "https://www.google.com/maps/search/?api=1&query=Grand%20Canal%20Venice%20Italy",
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
      "nearbyTube": "Vaporetto Line 1 · 24 hr",
      "nearbyToilets": "On-site or nearby cafés.",
      "nearbyAtm": "Banks on main piazzas · ATMs at train stations",
      "didYouKnow": "The Grand Canal is an inverted S-shape — palaces face the water because land transport came second.",
      "instagram": {
        "sunset": "From Accademia Bridge — canal curve and palazzo reflections.",
        "sunrise": "From Accademia Bridge — canal curve and palazzo reflections.",
        "drone": "Check local drone rules — restricted near historic centres",
        "settings": "f/8 · ISO 200 · 24–70mm"
      },
      "photos": {
        "hero": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/View_of_the_Grand_Canal_from_Rialto_to_Ca%27Foscari.jpg/960px-View_of_the_Grand_Canal_from_Rialto_to_Ca%27Foscari.jpg",
        "detail": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/View_of_the_Grand_Canal_from_Rialto_to_Ca%27Foscari.jpg/960px-View_of_the_Grand_Canal_from_Rialto_to_Ca%27Foscari.jpg",
        "photoSpot": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Hotel_Ca_Sagredo_-_Grand_Canal_-_Rialto_-_Venice_Italy_Venezia_-_Creative_Commons_by_gnuckx_%284795626094%29.jpg/960px-Hotel_Ca_Sagredo_-_Grand_Canal_-_Rialto_-_Venice_Italy_Venezia_-_Creative_Commons_by_gnuckx_%284795626094%29.jpg",
        "map": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Canal_Grande_Chiesa_della_Salute_e_Dogana_dal_ponte_dell_Accademia.jpg/960px-Canal_Grande_Chiesa_della_Salute_e_Dogana_dal_ponte_dell_Accademia.jpg",
        "heroPosition": "center 40%"
      },
      "seasonalPhotos": {
        "spring": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/View_of_the_Grand_Canal_from_Rialto_to_Ca%27Foscari.jpg/960px-View_of_the_Grand_Canal_from_Rialto_to_Ca%27Foscari.jpg",
        "summer": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/View_of_the_Grand_Canal_from_Rialto_to_Ca%27Foscari.jpg/960px-View_of_the_Grand_Canal_from_Rialto_to_Ca%27Foscari.jpg",
        "autumn": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Hotel_Ca_Sagredo_-_Grand_Canal_-_Rialto_-_Venice_Italy_Venezia_-_Creative_Commons_by_gnuckx_%284795626094%29.jpg/960px-Hotel_Ca_Sagredo_-_Grand_Canal_-_Rialto_-_Venice_Italy_Venezia_-_Creative_Commons_by_gnuckx_%284795626094%29.jpg",
        "christmas": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Canal_Grande_Chiesa_della_Salute_e_Dogana_dal_ponte_dell_Accademia.jpg/960px-Canal_Grande_Chiesa_della_Salute_e_Dogana_dal_ponte_dell_Accademia.jpg"
      }
    },
    {
      "name": "Rialto Market",
      "address": "Campo della Pescheria · Venice",
      "hours": "07:00–14:00 Tue–Sat · fish market mornings only",
      "tube": "Vaporetto Rialto",
      "ticket": "Free",
      "bestArrival": "08:00",
      "photoSpot": "Fish stalls under the Rialto bridge — morning market energy.",
      "lens": "35mm",
      "tip": "Best before 10:00 when locals shop. Cicchetti bars nearby for breakfast bites.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Rialto%20Market%20Venice%20Italy",
      "bookUrl": "https://www.google.com/maps/search/?api=1&query=Rialto%20Market%20Venice%20Italy",
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
      "nearbyTube": "Vaporetto Rialto",
      "nearbyToilets": "On-site or nearby cafés.",
      "nearbyAtm": "Banks on main piazzas · ATMs at train stations",
      "localSecret": "All'Arco bacaro behind the market serves the city's best morning cicchetti.",
      "instagram": {
        "sunset": "Fish stalls under the Rialto bridge — morning market energy.",
        "sunrise": "Fish stalls under the Rialto bridge — morning market energy.",
        "drone": "Check local drone rules — restricted near historic centres",
        "settings": "f/8 · ISO 200 · 24–70mm"
      },
      "photos": {
        "hero": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Rialto_2025_4.jpg/960px-Rialto_2025_4.jpg",
        "detail": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Rialto_Gondoliers.jpg/960px-Rialto_Gondoliers.jpg",
        "photoSpot": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Rialto_2025_4.jpg/960px-Rialto_2025_4.jpg",
        "map": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Rialto_2025_4.jpg/960px-Rialto_2025_4.jpg",
        "heroPosition": "center 40%"
      },
      "seasonalPhotos": {
        "spring": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Rialto_2025_4.jpg/960px-Rialto_2025_4.jpg",
        "summer": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Rialto_Gondoliers.jpg/960px-Rialto_Gondoliers.jpg",
        "autumn": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Rialto_2025_4.jpg/960px-Rialto_2025_4.jpg",
        "christmas": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Rialto_2025_4.jpg/960px-Rialto_2025_4.jpg"
      }
    },
    {
      "name": "Duomo di Firenze",
      "address": "Piazza del Duomo · Florence",
      "hours": "10:00–16:30 · dome climb varies",
      "tube": "Firenze Santa Maria Novella · 15 min walk",
      "ticket": "Cathedral free · Brunelleschi dome €30 combo",
      "bestArrival": "10:00",
      "waitSummer": "60–90 min dome",
      "waitWinter": "20–40 min",
      "photoSpot": "From Piazza del Duomo — Brunelleschi's dome dominates the skyline.",
      "lens": "16–35mm",
      "tip": "Book the Brunelleschi dome climb weeks ahead — 463 steps, no lift.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Duomo%20di%20Firenze%20Florence%20Italy",
      "bookUrl": "https://www.duomo.firenze.it/",
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
      "nearbyTube": "Firenze Santa Maria Novella · 15 min walk",
      "nearbyToilets": "On-site or nearby cafés.",
      "nearbyAtm": "Banks on main piazzas · ATMs at train stations",
      "didYouKnow": "Brunelleschi built the dome without scaffolding — a feat that baffled engineers for centuries.",
      "instagram": {
        "sunset": "From Piazza del Duomo — Brunelleschi's dome dominates the skyline.",
        "sunrise": "From Piazza del Duomo — Brunelleschi's dome dominates the skyline.",
        "drone": "Check local drone rules — restricted near historic centres",
        "settings": "f/8 · ISO 200 · 24–70mm"
      },
      "photos": {
        "hero": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Cattedrale_di_Santa_Maria_del_Fiore_%E2%80%93_Il_Duomo_di_Firenze.jpg/960px-Cattedrale_di_Santa_Maria_del_Fiore_%E2%80%93_Il_Duomo_di_Firenze.jpg",
        "detail": "https://upload.wikimedia.org/wikipedia/commons/5/52/Filippo_Brunelleschi%2C_cutaway_of_the_Dome_of_Florence_Cathedral_%28Santa_Maria_del_Fiore%29.JPG",
        "photoSpot": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Fabio_borbottoni%2C_1820-1902%2C_interno_del_duomo_di_fiesole.JPG/960px-Fabio_borbottoni%2C_1820-1902%2C_interno_del_duomo_di_fiesole.JPG",
        "map": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/CampanileGiotto-01.jpg/960px-CampanileGiotto-01.jpg",
        "heroPosition": "center 40%"
      },
      "seasonalPhotos": {
        "spring": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Cattedrale_di_Santa_Maria_del_Fiore_%E2%80%93_Il_Duomo_di_Firenze.jpg/960px-Cattedrale_di_Santa_Maria_del_Fiore_%E2%80%93_Il_Duomo_di_Firenze.jpg",
        "summer": "https://upload.wikimedia.org/wikipedia/commons/5/52/Filippo_Brunelleschi%2C_cutaway_of_the_Dome_of_Florence_Cathedral_%28Santa_Maria_del_Fiore%29.JPG",
        "autumn": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Fabio_borbottoni%2C_1820-1902%2C_interno_del_duomo_di_fiesole.JPG/960px-Fabio_borbottoni%2C_1820-1902%2C_interno_del_duomo_di_fiesole.JPG",
        "christmas": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/CampanileGiotto-01.jpg/960px-CampanileGiotto-01.jpg"
      }
    },
    {
      "name": "Uffizi Gallery",
      "address": "Piazzale degli Uffizi 6 · Florence",
      "hours": "08:15–18:30 Tue–Sun",
      "tube": "15 min walk from SMN",
      "ticket": "€26 adult · book mandatory",
      "bestArrival": "08:15",
      "waitSummer": "30–60 min even with ticket",
      "waitWinter": "15 min with booking",
      "photoSpot": "Arno corridor windows — Ponte Vecchio framed between columns.",
      "lens": "No flash · 35mm",
      "tip": "Birth of Venus and Primavera are unmissable. Book first slot of the day.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Uffizi%20Gallery%20Florence%20Italy",
      "bookUrl": "https://www.uffizi.it/",
      "bookText": "Book Tickets",
      "avgVisit": "3 hours",
      "crowd": {
        "morning": 3,
        "afternoon": 4,
        "evening": 2
      },
      "nearby": [],
      "nearbyCafes": "See dining chapter in this guide.",
      "nearbyRestaurants": "See dining chapter in this guide.",
      "nearbyTube": "15 min walk from SMN",
      "nearbyToilets": "On-site or nearby cafés.",
      "nearbyAtm": "Banks on main piazzas · ATMs at train stations",
      "didYouKnow": "The Uffizi was built as offices (uffizi) for the Medici — art filled the corridors over time.",
      "instagram": {
        "sunset": "Arno corridor windows — Ponte Vecchio framed between columns.",
        "sunrise": "Arno corridor windows — Ponte Vecchio framed between columns.",
        "drone": "Check local drone rules — restricted near historic centres",
        "settings": "f/8 · ISO 200 · 24–70mm"
      },
      "photos": {
        "hero": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Uffizi_Gallery_-_Daughter_of_Niobe_bent_by_terror.jpg/960px-Uffizi_Gallery_-_Daughter_of_Niobe_bent_by_terror.jpg",
        "detail": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Uffizi_Gallery_-_Daughter_of_Niobe_bent_by_terror.jpg/960px-Uffizi_Gallery_-_Daughter_of_Niobe_bent_by_terror.jpg",
        "photoSpot": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Uffizi_Gallery_hallway.JPG/960px-Uffizi_Gallery_hallway.JPG",
        "map": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Uffizi_Gallery_hallway.JPG/960px-Uffizi_Gallery_hallway.JPG",
        "heroPosition": "center 40%"
      },
      "seasonalPhotos": {
        "spring": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Uffizi_Gallery_-_Daughter_of_Niobe_bent_by_terror.jpg/960px-Uffizi_Gallery_-_Daughter_of_Niobe_bent_by_terror.jpg",
        "summer": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Uffizi_Gallery_-_Daughter_of_Niobe_bent_by_terror.jpg/960px-Uffizi_Gallery_-_Daughter_of_Niobe_bent_by_terror.jpg",
        "autumn": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Uffizi_Gallery_hallway.JPG/960px-Uffizi_Gallery_hallway.JPG",
        "christmas": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Uffizi_Gallery_hallway.JPG/960px-Uffizi_Gallery_hallway.JPG"
      }
    },
    {
      "name": "Ponte Vecchio",
      "address": "Arno River · Florence",
      "hours": "Always open · shops 10:00–19:00",
      "tube": "10 min from Uffizi",
      "ticket": "Free",
      "bestArrival": "07:30 sunrise",
      "photoSpot": "From Ponte Santa Trinita — Ponte Vecchio with Vasari Corridor above.",
      "lens": "24–70mm",
      "tip": "Gold shops on the bridge since the 16th century. Sunrise is empty and golden.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Ponte%20Vecchio%20Florence%20Italy",
      "bookUrl": "https://www.google.com/maps/search/?api=1&query=Ponte%20Vecchio%20Florence%20Italy",
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
      "nearbyTube": "10 min from Uffizi",
      "nearbyToilets": "On-site or nearby cafés.",
      "nearbyAtm": "Banks on main piazzas · ATMs at train stations",
      "localSecret": "The Vasari Corridor above the shops connects the Uffizi to Pitti Palace — tours occasionally available.",
      "instagram": {
        "sunset": "From Ponte Santa Trinita — Ponte Vecchio with Vasari Corridor above.",
        "sunrise": "From Ponte Santa Trinita — Ponte Vecchio with Vasari Corridor above.",
        "drone": "Check local drone rules — restricted near historic centres",
        "settings": "f/8 · ISO 200 · 24–70mm"
      },
      "photos": {
        "hero": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Ponte_Vecchio_Arno_Florence.jpg/960px-Ponte_Vecchio_Arno_Florence.jpg",
        "detail": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Ponte_Vecchio_Arno_Florence.jpg/960px-Ponte_Vecchio_Arno_Florence.jpg",
        "photoSpot": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Ponte_Vecchio_Arno_Florence.jpg/960px-Ponte_Vecchio_Arno_Florence.jpg",
        "map": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Ponte_Vecchio_Arno_Florence.jpg/960px-Ponte_Vecchio_Arno_Florence.jpg",
        "heroPosition": "center 40%"
      },
      "seasonalPhotos": {
        "spring": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Ponte_Vecchio_Arno_Florence.jpg/960px-Ponte_Vecchio_Arno_Florence.jpg",
        "summer": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Ponte_Vecchio_Arno_Florence.jpg/960px-Ponte_Vecchio_Arno_Florence.jpg",
        "autumn": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Ponte_Vecchio_Arno_Florence.jpg/960px-Ponte_Vecchio_Arno_Florence.jpg",
        "christmas": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Ponte_Vecchio_Arno_Florence.jpg/960px-Ponte_Vecchio_Arno_Florence.jpg"
      }
    },
    {
      "name": "Piazzale Michelangelo",
      "address": "Piazzale Michelangelo · Florence",
      "hours": "Always open",
      "tube": "Bus 12/13 from centre · 20 min walk uphill",
      "ticket": "Free",
      "bestArrival": "18:30 sunset",
      "photoSpot": "Terrace railing — full Florence skyline with Duomo centre frame.",
      "lens": "24mm",
      "tip": "The definitive Florence sunset viewpoint. Bring wine and patience for the golden hour.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Piazzale%20Michelangelo%20Florence%20Italy",
      "bookUrl": "https://www.google.com/maps/search/?api=1&query=Piazzale%20Michelangelo%20Florence%20Italy",
      "bookText": "Book Tickets",
      "avgVisit": "1 hour",
      "crowd": {
        "morning": 2,
        "afternoon": 3,
        "evening": 5
      },
      "nearby": [],
      "nearbyCafes": "See dining chapter in this guide.",
      "nearbyRestaurants": "See dining chapter in this guide.",
      "nearbyTube": "Bus 12/13 from centre · 20 min walk uphill",
      "nearbyToilets": "On-site or nearby cafés.",
      "nearbyAtm": "Banks on main piazzas · ATMs at train stations",
      "didYouKnow": "The bronze David replica here is one of three — the original is in the Accademia.",
      "instagram": {
        "sunset": "Terrace railing — full Florence skyline with Duomo centre frame.",
        "sunrise": "Terrace railing — full Florence skyline with Duomo centre frame.",
        "drone": "Check local drone rules — restricted near historic centres",
        "settings": "f/8 · ISO 200 · 24–70mm"
      },
      "photos": {
        "hero": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Florence_Duomo_from_Michelangelo_hill.jpg/960px-Florence_Duomo_from_Michelangelo_hill.jpg",
        "detail": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Florence_Duomo_from_Michelangelo_hill.jpg/960px-Florence_Duomo_from_Michelangelo_hill.jpg",
        "photoSpot": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Florence_Duomo_from_Michelangelo_hill.jpg/960px-Florence_Duomo_from_Michelangelo_hill.jpg",
        "map": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Florence_Duomo_from_Michelangelo_hill.jpg/960px-Florence_Duomo_from_Michelangelo_hill.jpg",
        "heroPosition": "center 40%"
      },
      "seasonalPhotos": {
        "spring": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Florence_Duomo_from_Michelangelo_hill.jpg/960px-Florence_Duomo_from_Michelangelo_hill.jpg",
        "summer": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Florence_Duomo_from_Michelangelo_hill.jpg/960px-Florence_Duomo_from_Michelangelo_hill.jpg",
        "autumn": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Florence_Duomo_from_Michelangelo_hill.jpg/960px-Florence_Duomo_from_Michelangelo_hill.jpg",
        "christmas": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Florence_Duomo_from_Michelangelo_hill.jpg/960px-Florence_Duomo_from_Michelangelo_hill.jpg"
      }
    },
    {
      "name": "Colosseum",
      "address": "Piazza del Colosseo · Rome",
      "hours": "09:00–19:00 · last entry 1 hr before close",
      "tube": "Colosseo M B · 2 min walk",
      "ticket": "€18 adult · includes Forum & Palatine",
      "bestArrival": "09:00",
      "waitSummer": "60–90 min",
      "waitWinter": "20–40 min",
      "photoSpot": "From Via dei Fori Imperiali — full amphitheatre ellipse at dawn.",
      "lens": "16–35mm",
      "tip": "Book the underground and arena floor add-on. Combined ticket valid 24 hours.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Colosseum%20Rome%20Italy",
      "bookUrl": "https://colosseo.it/",
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
      "nearbyTube": "Colosseo M B · 2 min walk",
      "nearbyToilets": "On-site or nearby cafés.",
      "nearbyAtm": "Banks on main piazzas · ATMs at train stations",
      "didYouKnow": "The Colosseum could be flooded for mock naval battles — aqueduct channels still visible.",
      "instagram": {
        "sunset": "From Via dei Fori Imperiali — full amphitheatre ellipse at dawn.",
        "sunrise": "From Via dei Fori Imperiali — full amphitheatre ellipse at dawn.",
        "drone": "Check local drone rules — restricted near historic centres",
        "settings": "f/8 · ISO 200 · 24–70mm"
      },
      "photos": {
        "hero": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Colosseo_2020.jpg/960px-Colosseo_2020.jpg",
        "detail": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Colosseum_in_Rome%2C_Italy_-_April_2007.jpg/960px-Colosseum_in_Rome%2C_Italy_-_April_2007.jpg",
        "photoSpot": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Cross_Colosseum_Rome_Italy.jpg/960px-Cross_Colosseum_Rome_Italy.jpg",
        "map": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Cross_Colosseum_Rome_Italy.jpg/960px-Cross_Colosseum_Rome_Italy.jpg",
        "heroPosition": "center 40%"
      },
      "seasonalPhotos": {
        "spring": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Colosseo_2020.jpg/960px-Colosseo_2020.jpg",
        "summer": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Colosseum_in_Rome%2C_Italy_-_April_2007.jpg/960px-Colosseum_in_Rome%2C_Italy_-_April_2007.jpg",
        "autumn": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Cross_Colosseum_Rome_Italy.jpg/960px-Cross_Colosseum_Rome_Italy.jpg",
        "christmas": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Cross_Colosseum_Rome_Italy.jpg/960px-Cross_Colosseum_Rome_Italy.jpg"
      }
    },
    {
      "name": "Roman Forum & Palatine Hill",
      "address": "Via della Salara Vecchia · Rome",
      "hours": "09:00–19:00",
      "tube": "Colosseo M B",
      "ticket": "Included with Colosseum ticket",
      "bestArrival": "09:30 after Colosseum",
      "photoSpot": "From Palatine Hill — Forum ruins spread below with Colosseum backdrop.",
      "lens": "24–70mm",
      "tip": "Enter via Palatine Hill gate to skip Colosseum exit crowds. Allow 2 hours combined.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Roman%20Forum%20%26%20Palatine%20Hill%20Rome%20Italy",
      "bookUrl": "https://www.google.com/maps/search/?api=1&query=Roman%20Forum%20%26%20Palatine%20Hill%20Rome%20Italy",
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
      "nearbyTube": "Colosseo M B",
      "nearbyToilets": "On-site or nearby cafés.",
      "nearbyAtm": "Banks on main piazzas · ATMs at train stations",
      "didYouKnow": "Romulus founded Rome on the Palatine according to legend — imperial palaces crowned this hill.",
      "instagram": {
        "sunset": "From Palatine Hill — Forum ruins spread below with Colosseum backdrop.",
        "sunrise": "From Palatine Hill — Forum ruins spread below with Colosseum backdrop.",
        "drone": "Check local drone rules — restricted near historic centres",
        "settings": "f/8 · ISO 200 · 24–70mm"
      },
      "photos": {
        "hero": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Foro_Romano_Musei_Capitolini_Roma.jpg/960px-Foro_Romano_Musei_Capitolini_Roma.jpg",
        "detail": "https://upload.wikimedia.org/wikipedia/commons/2/28/Rome-_Ruins_of_the_Forum%2C_Looking_towards_the_Capitol.jpg",
        "photoSpot": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Foro_Romano_Musei_Capitolini_Roma.jpg/960px-Foro_Romano_Musei_Capitolini_Roma.jpg",
        "map": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Rome_%28IT%29%2C_Forum_Romanum_--_2013_--_3358.jpg/960px-Rome_%28IT%29%2C_Forum_Romanum_--_2013_--_3358.jpg",
        "heroPosition": "center 40%"
      },
      "seasonalPhotos": {
        "spring": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Foro_Romano_Musei_Capitolini_Roma.jpg/960px-Foro_Romano_Musei_Capitolini_Roma.jpg",
        "summer": "https://upload.wikimedia.org/wikipedia/commons/2/28/Rome-_Ruins_of_the_Forum%2C_Looking_towards_the_Capitol.jpg",
        "autumn": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Foro_Romano_Musei_Capitolini_Roma.jpg/960px-Foro_Romano_Musei_Capitolini_Roma.jpg",
        "christmas": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Rome_%28IT%29%2C_Forum_Romanum_--_2013_--_3358.jpg/960px-Rome_%28IT%29%2C_Forum_Romanum_--_2013_--_3358.jpg"
      }
    },
    {
      "name": "Vatican Museums & Sistine Chapel",
      "address": "Viale Vaticano · Vatican City",
      "hours": "08:00–20:00 Mon–Sat · last entry 16:00",
      "tube": "Ottaviano M A · 10 min walk",
      "ticket": "€20 adult · skip-the-line €25+",
      "bestArrival": "08:00",
      "waitSummer": "60–120 min",
      "waitWinter": "30–60 min",
      "photoSpot": "Spiral staircase exit — Bramante's double helix from above.",
      "lens": "No photos in Sistine Chapel",
      "tip": "Book early entry or Friday night opening. Route ends at St Peter's — no re-entry.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Vatican%20Museums%20%26%20Sistine%20Chapel%20Rome%20Italy",
      "bookUrl": "https://www.museivaticani.va/",
      "bookText": "Book Tickets",
      "avgVisit": "3–4 hours",
      "crowd": {
        "morning": 3,
        "afternoon": 4,
        "evening": 2
      },
      "nearby": [],
      "nearbyCafes": "See dining chapter in this guide.",
      "nearbyRestaurants": "See dining chapter in this guide.",
      "nearbyTube": "Ottaviano M A · 10 min walk",
      "nearbyToilets": "On-site or nearby cafés.",
      "nearbyAtm": "Banks on main piazzas · ATMs at train stations",
      "didYouKnow": "Michelangelo painted the Sistine Chapel ceiling standing up on scaffolding he designed himself.",
      "instagram": {
        "sunset": "Spiral staircase exit — Bramante's double helix from above.",
        "sunrise": "Spiral staircase exit — Bramante's double helix from above.",
        "drone": "Check local drone rules — restricted near historic centres",
        "settings": "f/8 · ISO 200 · 24–70mm"
      },
      "photos": {
        "hero": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Vatican_Museums_Spiral_Staircase_2012.jpg/960px-Vatican_Museums_Spiral_Staircase_2012.jpg",
        "detail": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Vatican_Museums_Spiral_Staircase_2012.jpg/960px-Vatican_Museums_Spiral_Staircase_2012.jpg",
        "photoSpot": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Vatican_Museums_Spiral_Staircase_2012.jpg/960px-Vatican_Museums_Spiral_Staircase_2012.jpg",
        "map": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Vatican_Museums_Spiral_Staircase_2012.jpg/960px-Vatican_Museums_Spiral_Staircase_2012.jpg",
        "heroPosition": "center 40%"
      },
      "seasonalPhotos": {
        "spring": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Vatican_Museums_Spiral_Staircase_2012.jpg/960px-Vatican_Museums_Spiral_Staircase_2012.jpg",
        "summer": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Vatican_Museums_Spiral_Staircase_2012.jpg/960px-Vatican_Museums_Spiral_Staircase_2012.jpg",
        "autumn": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Vatican_Museums_Spiral_Staircase_2012.jpg/960px-Vatican_Museums_Spiral_Staircase_2012.jpg",
        "christmas": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Vatican_Museums_Spiral_Staircase_2012.jpg/960px-Vatican_Museums_Spiral_Staircase_2012.jpg"
      }
    },
    {
      "name": "St Peter's Basilica",
      "address": "Piazza San Pietro · Vatican City",
      "hours": "07:00–19:00 · dome 08:00–18:00",
      "tube": "Ottaviano M A",
      "ticket": "Basilica free · dome €10 · crypt free",
      "bestArrival": "07:30",
      "waitSummer": "30–60 min security",
      "waitWinter": "15–30 min",
      "photoSpot": "From Via della Conciliazione — Bernini's colonnade embraces the piazza.",
      "lens": "16–35mm",
      "tip": "Security line is shortest at opening. Dome climb: 551 steps or lift + 320 steps.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=St%20Peter's%20Basilica%20Rome%20Italy",
      "bookUrl": "https://www.google.com/maps/search/?api=1&query=St%20Peter's%20Basilica%20Rome%20Italy",
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
      "nearbyTube": "Ottaviano M A",
      "nearbyToilets": "On-site or nearby cafés.",
      "nearbyAtm": "Banks on main piazzas · ATMs at train stations",
      "localSecret": "The Swiss Guard barracks tour is rarely advertised — ask at the Vatican post office.",
      "instagram": {
        "sunset": "From Via della Conciliazione — Bernini's colonnade embraces the piazza.",
        "sunrise": "From Via della Conciliazione — Bernini's colonnade embraces the piazza.",
        "drone": "Check local drone rules — restricted near historic centres",
        "settings": "f/8 · ISO 200 · 24–70mm"
      },
      "photos": {
        "hero": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Basilica_di_San_Pietro_in_Vaticano_September_2015-1a.jpg/960px-Basilica_di_San_Pietro_in_Vaticano_September_2015-1a.jpg",
        "detail": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/St_Peter%27s_Square%2C_Vatican_City_-_April_2007.jpg/960px-St_Peter%27s_Square%2C_Vatican_City_-_April_2007.jpg",
        "photoSpot": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Interior_of_Santi_Giovanni_e_Paolo_%28Venice%29_-_Copy_per%2C_Johann_Carl_Loth_of_the_martyrdom_of_St._Peter_after_Titian.jpg/960px-Interior_of_Santi_Giovanni_e_Paolo_%28Venice%29_-_Copy_per%2C_Johann_Carl_Loth_of_the_martyrdom_of_St._Peter_after_Titian.jpg",
        "map": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Michelangelo%27s_Piet%C3%A0_Saint_Peter%27s_Basilica_Vatican_City.jpg/960px-Michelangelo%27s_Piet%C3%A0_Saint_Peter%27s_Basilica_Vatican_City.jpg",
        "heroPosition": "center 40%"
      },
      "seasonalPhotos": {
        "spring": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Basilica_di_San_Pietro_in_Vaticano_September_2015-1a.jpg/960px-Basilica_di_San_Pietro_in_Vaticano_September_2015-1a.jpg",
        "summer": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/St_Peter%27s_Square%2C_Vatican_City_-_April_2007.jpg/960px-St_Peter%27s_Square%2C_Vatican_City_-_April_2007.jpg",
        "autumn": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Interior_of_Santi_Giovanni_e_Paolo_%28Venice%29_-_Copy_per%2C_Johann_Carl_Loth_of_the_martyrdom_of_St._Peter_after_Titian.jpg/960px-Interior_of_Santi_Giovanni_e_Paolo_%28Venice%29_-_Copy_per%2C_Johann_Carl_Loth_of_the_martyrdom_of_St._Peter_after_Titian.jpg",
        "christmas": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Michelangelo%27s_Piet%C3%A0_Saint_Peter%27s_Basilica_Vatican_City.jpg/960px-Michelangelo%27s_Piet%C3%A0_Saint_Peter%27s_Basilica_Vatican_City.jpg"
      }
    },
    {
      "name": "Trevi Fountain",
      "address": "Piazza di Trevi · Rome",
      "hours": "Always open · best before 08:00",
      "tube": "Barberini M A · 8 min walk",
      "ticket": "Free",
      "bestArrival": "07:00",
      "photoSpot": "From the left side steps — Neptune centred, no foreground heads.",
      "lens": "24mm",
      "tip": "Throw a coin over your right shoulder with your left hand — guarantees return to Rome.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Trevi%20Fountain%20Rome%20Italy",
      "bookUrl": "https://www.google.com/maps/search/?api=1&query=Trevi%20Fountain%20Rome%20Italy",
      "bookText": "Book Tickets",
      "avgVisit": "20 min",
      "crowd": {
        "morning": 2,
        "afternoon": 5,
        "evening": 5
      },
      "nearby": [],
      "nearbyCafes": "See dining chapter in this guide.",
      "nearbyRestaurants": "See dining chapter in this guide.",
      "nearbyTube": "Barberini M A · 8 min walk",
      "nearbyToilets": "On-site or nearby cafés.",
      "nearbyAtm": "Banks on main piazzas · ATMs at train stations",
      "didYouKnow": "€3,000 in coins are collected from the fountain daily and donated to Caritas Rome.",
      "instagram": {
        "sunset": "From the left side steps — Neptune centred, no foreground heads.",
        "sunrise": "From the left side steps — Neptune centred, no foreground heads.",
        "drone": "Check local drone rules — restricted near historic centres",
        "settings": "f/8 · ISO 200 · 24–70mm"
      },
      "photos": {
        "hero": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Trevi_Fountain_-_Roma.jpg/960px-Trevi_Fountain_-_Roma.jpg",
        "detail": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Trevi_Fountain%2C_Rome%2C_Italy_2_-_May_2007.jpg/960px-Trevi_Fountain%2C_Rome%2C_Italy_2_-_May_2007.jpg",
        "photoSpot": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Trevi_Fountain_-_Roma.jpg/960px-Trevi_Fountain_-_Roma.jpg",
        "map": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Trevi_Fountain_-_Roma.jpg/960px-Trevi_Fountain_-_Roma.jpg",
        "heroPosition": "center 40%"
      },
      "seasonalPhotos": {
        "spring": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Trevi_Fountain_-_Roma.jpg/960px-Trevi_Fountain_-_Roma.jpg",
        "summer": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Trevi_Fountain%2C_Rome%2C_Italy_2_-_May_2007.jpg/960px-Trevi_Fountain%2C_Rome%2C_Italy_2_-_May_2007.jpg",
        "autumn": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Trevi_Fountain_-_Roma.jpg/960px-Trevi_Fountain_-_Roma.jpg",
        "christmas": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Trevi_Fountain_-_Roma.jpg/960px-Trevi_Fountain_-_Roma.jpg"
      }
    },
    {
      "name": "Pantheon",
      "address": "Piazza della Rotonda · Rome",
      "hours": "09:00–19:00 · Sun 09:00–18:00",
      "tube": "Barberini M A · 10 min walk",
      "ticket": "Free · donation €5 suggested from 2023",
      "bestArrival": "09:00",
      "photoSpot": "From the fountain — columns and oculus perfectly centred.",
      "lens": "14mm interior for oculus",
      "tip": "Rain through the oculus is magical — check forecast for a shower day visit.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Pantheon%20Rome%20Italy",
      "bookUrl": "https://www.google.com/maps/search/?api=1&query=Pantheon%20Rome%20Italy",
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
      "nearbyTube": "Barberini M A · 10 min walk",
      "nearbyToilets": "On-site or nearby cafés.",
      "nearbyAtm": "Banks on main piazzas · ATMs at train stations",
      "didYouKnow": "The Pantheon dome has been the world's largest unreinforced concrete span for 2,000 years.",
      "instagram": {
        "sunset": "From the fountain — columns and oculus perfectly centred.",
        "sunrise": "From the fountain — columns and oculus perfectly centred.",
        "drone": "Check local drone rules — restricted near historic centres",
        "settings": "f/8 · ISO 200 · 24–70mm"
      },
      "photos": {
        "hero": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Pantheon_%28Rome%29_-_Right_side_and_front.jpg/960px-Pantheon_%28Rome%29_-_Right_side_and_front.jpg",
        "detail": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Rome_%28IT%29%2C_Pantheon_--_2013_--_3572.jpg/960px-Rome_%28IT%29%2C_Pantheon_--_2013_--_3572.jpg",
        "photoSpot": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Rome_%28IT%29%2C_Pantheon_--_2013_--_3572.jpg/960px-Rome_%28IT%29%2C_Pantheon_--_2013_--_3572.jpg",
        "map": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Pantheon_%28Rome%29_-_Right_side_and_front.jpg/960px-Pantheon_%28Rome%29_-_Right_side_and_front.jpg",
        "heroPosition": "center 40%"
      },
      "seasonalPhotos": {
        "spring": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Pantheon_%28Rome%29_-_Right_side_and_front.jpg/960px-Pantheon_%28Rome%29_-_Right_side_and_front.jpg",
        "summer": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Rome_%28IT%29%2C_Pantheon_--_2013_--_3572.jpg/960px-Rome_%28IT%29%2C_Pantheon_--_2013_--_3572.jpg",
        "autumn": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Rome_%28IT%29%2C_Pantheon_--_2013_--_3572.jpg/960px-Rome_%28IT%29%2C_Pantheon_--_2013_--_3572.jpg",
        "christmas": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Pantheon_%28Rome%29_-_Right_side_and_front.jpg/960px-Pantheon_%28Rome%29_-_Right_side_and_front.jpg"
      }
    }
  ],
  "hotels": [
    {
      "name": "Park Hyatt Milan",
      "category": "Luxury",
      "address": "Via Tommaso Grossi 1 · Milan",
      "price": "€450–900/night",
      "rating": "9.2",
      "googleRating": "4.7",
      "room": "Duomo View Suite · beside the cathedral",
      "cancellation": "Free 48h · flexible rate",
      "tube": "Duomo M1/M3 · 3 min walk",
      "airport": "MXP 50 min Malpensa Express · LIN 30 min",
      "nearbyAttractions": "Duomo 3 min · Galleria 2 min · Navigli 15 min taxi",
      "walkingScore": "98 / 100 — fashion district",
      "breakfast": "Included in premium rates",
      "idealFor": [
        "Couple",
        "Luxury",
        "First-time Milan"
      ],
      "tip": "Request a Duomo-facing room on a high floor — the spires at night are unforgettable.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Park%20Hyatt%20Milan%20Milan%20Italy",
      "bookUrl": "https://www.hyatt.com/en-US/hotel/italy/park-hyatt-milan/milph",
      "photos": {
        "exterior": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Galleria_Milano_%28179532365%29.jpeg/960px-Galleria_Milano_%28179532365%29.jpeg",
        "lobby": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Galleria_Milano_%28179532365%29.jpeg/960px-Galleria_Milano_%28179532365%29.jpeg",
        "room": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Galleria_Milano_%28179532365%29.jpeg/960px-Galleria_Milano_%28179532365%29.jpeg",
        "luxuryRoom": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Galleria_Milano_%28179532365%29.jpeg/960px-Galleria_Milano_%28179532365%29.jpeg",
        "restaurant": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Galleria_Milano_%28179532365%29.jpeg/960px-Galleria_Milano_%28179532365%29.jpeg",
        "pool": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Galleria_Milano_%28179532365%29.jpeg/960px-Galleria_Milano_%28179532365%29.jpeg",
        "rooftop": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Galleria_Milano_%28179532365%29.jpeg/960px-Galleria_Milano_%28179532365%29.jpeg",
        "breakfast": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Galleria_Milano_%28179532365%29.jpeg/960px-Galleria_Milano_%28179532365%29.jpeg",
        "spa": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Galleria_Milano_%28179532365%29.jpeg/960px-Galleria_Milano_%28179532365%29.jpeg",
        "view": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Galleria_Milano_%28179532365%29.jpeg/960px-Galleria_Milano_%28179532365%29.jpeg"
      }
    },
    {
      "name": "Armani Hotel Milano",
      "category": "Luxury",
      "address": "Via Manzoni 31 · Milan",
      "price": "€500–1,000/night",
      "rating": "9.3",
      "googleRating": "4.8",
      "room": "Armani Suite · Via Montenapoleone steps away",
      "cancellation": "Non-refundable suites · flexible on request",
      "tube": "Montenapoleone M3 · 2 min walk",
      "airport": "MXP 50 min · LIN 30 min",
      "nearbyAttractions": "Quadrilatero della Moda 1 min · Duomo 10 min walk · Galleria 8 min",
      "walkingScore": "99 / 100 — luxury shopping district",
      "breakfast": "Included in suite rates",
      "idealFor": [
        "Couple",
        "Fashion",
        "Luxury"
      ],
      "tip": "Giorgio Armani's design DNA in every detail. The Armani/Silos museum is next door.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Armani%20Hotel%20Milano%20Milan%20Italy",
      "bookUrl": "https://www.armani.com/en-it/armani-hotels/armani-hotel-milano/",
      "photos": {
        "exterior": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Via_Monte_Napoleone_%28Milan%29.jpg/960px-Via_Monte_Napoleone_%28Milan%29.jpg",
        "lobby": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Via_Monte_Napoleone_%28Milan%29.jpg/960px-Via_Monte_Napoleone_%28Milan%29.jpg",
        "room": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Via_Monte_Napoleone_%28Milan%29.jpg/960px-Via_Monte_Napoleone_%28Milan%29.jpg",
        "luxuryRoom": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Via_Monte_Napoleone_%28Milan%29.jpg/960px-Via_Monte_Napoleone_%28Milan%29.jpg",
        "restaurant": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Via_Monte_Napoleone_%28Milan%29.jpg/960px-Via_Monte_Napoleone_%28Milan%29.jpg",
        "pool": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Via_Monte_Napoleone_%28Milan%29.jpg/960px-Via_Monte_Napoleone_%28Milan%29.jpg",
        "rooftop": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Via_Monte_Napoleone_%28Milan%29.jpg/960px-Via_Monte_Napoleone_%28Milan%29.jpg",
        "breakfast": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Via_Monte_Napoleone_%28Milan%29.jpg/960px-Via_Monte_Napoleone_%28Milan%29.jpg",
        "spa": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Via_Monte_Napoleone_%28Milan%29.jpg/960px-Via_Monte_Napoleone_%28Milan%29.jpg",
        "view": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Via_Monte_Napoleone_%28Milan%29.jpg/960px-Via_Monte_Napoleone_%28Milan%29.jpg"
      }
    },
    {
      "name": "Room Mate Giulia",
      "category": "Mid-Range",
      "address": "Via Silvio Pellico 4 · Milan",
      "price": "€180–320/night",
      "rating": "9.0",
      "googleRating": "4.6",
      "room": "Superior Double · design-led",
      "cancellation": "Free 24h",
      "tube": "Duomo M1/M3 · 4 min walk",
      "airport": "MXP 50 min · LIN 30 min",
      "nearbyAttractions": "Duomo 4 min · Galleria 3 min · La Scala 8 min",
      "walkingScore": "97 / 100 — historic centre",
      "breakfast": "Buffet €18pp",
      "idealFor": [
        "Couple",
        "Design lovers",
        "First-time visitors"
      ],
      "tip": "Stylish boutique with excellent Duomo proximity at mid-range prices.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Room%20Mate%20Giulia%20Milan%20Italy",
      "bookUrl": "https://www.room-matehotels.com/en/giulia/",
      "photos": {
        "exterior": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Il_Duomo_di_Milano_-_July_2026.jpg/960px-Il_Duomo_di_Milano_-_July_2026.jpg",
        "lobby": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Il_Duomo_di_Milano_-_July_2026.jpg/960px-Il_Duomo_di_Milano_-_July_2026.jpg",
        "room": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Il_Duomo_di_Milano_-_July_2026.jpg/960px-Il_Duomo_di_Milano_-_July_2026.jpg",
        "luxuryRoom": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Il_Duomo_di_Milano_-_July_2026.jpg/960px-Il_Duomo_di_Milano_-_July_2026.jpg",
        "restaurant": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Il_Duomo_di_Milano_-_July_2026.jpg/960px-Il_Duomo_di_Milano_-_July_2026.jpg",
        "pool": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Il_Duomo_di_Milano_-_July_2026.jpg/960px-Il_Duomo_di_Milano_-_July_2026.jpg",
        "rooftop": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Il_Duomo_di_Milano_-_July_2026.jpg/960px-Il_Duomo_di_Milano_-_July_2026.jpg",
        "breakfast": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Il_Duomo_di_Milano_-_July_2026.jpg/960px-Il_Duomo_di_Milano_-_July_2026.jpg",
        "spa": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Il_Duomo_di_Milano_-_July_2026.jpg/960px-Il_Duomo_di_Milano_-_July_2026.jpg",
        "view": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Il_Duomo_di_Milano_-_July_2026.jpg/960px-Il_Duomo_di_Milano_-_July_2026.jpg"
      }
    },
    {
      "name": "UNAHOTELS Cusani Milano",
      "category": "Mid-Range",
      "address": "Via Cusani 13 · Milan",
      "price": "€160–280/night",
      "rating": "8.8",
      "googleRating": "4.4",
      "room": "Classic King · business-friendly",
      "cancellation": "Free 48h",
      "tube": "Cairoli M1 · 5 min walk · Cadorna 8 min",
      "airport": "MXP 45 min · Malpensa Express from Cadorna",
      "nearbyAttractions": "Castello Sforzesco 8 min · Duomo 12 min · Brera 10 min",
      "walkingScore": "94 / 100 — Castello district",
      "breakfast": "Buffet €16pp",
      "idealFor": [
        "Business",
        "Couple",
        "Value"
      ],
      "tip": "Reliable chain comfort near Sforza Castle — Malpensa Express departs nearby at Cadorna.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=UNAHOTELS%20Cusani%20Milano%20Milan%20Italy",
      "bookUrl": "https://www.unahotels.it/en/hotel/cusani-milano",
      "photos": {
        "exterior": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/20110725_Castello_Sforzesco_Milan_5557.jpg/960px-20110725_Castello_Sforzesco_Milan_5557.jpg",
        "lobby": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/20110725_Castello_Sforzesco_Milan_5557.jpg/960px-20110725_Castello_Sforzesco_Milan_5557.jpg",
        "room": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/20110725_Castello_Sforzesco_Milan_5557.jpg/960px-20110725_Castello_Sforzesco_Milan_5557.jpg",
        "luxuryRoom": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/20110725_Castello_Sforzesco_Milan_5557.jpg/960px-20110725_Castello_Sforzesco_Milan_5557.jpg",
        "restaurant": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/20110725_Castello_Sforzesco_Milan_5557.jpg/960px-20110725_Castello_Sforzesco_Milan_5557.jpg",
        "pool": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/20110725_Castello_Sforzesco_Milan_5557.jpg/960px-20110725_Castello_Sforzesco_Milan_5557.jpg",
        "rooftop": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/20110725_Castello_Sforzesco_Milan_5557.jpg/960px-20110725_Castello_Sforzesco_Milan_5557.jpg",
        "breakfast": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/20110725_Castello_Sforzesco_Milan_5557.jpg/960px-20110725_Castello_Sforzesco_Milan_5557.jpg",
        "spa": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/20110725_Castello_Sforzesco_Milan_5557.jpg/960px-20110725_Castello_Sforzesco_Milan_5557.jpg",
        "view": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/20110725_Castello_Sforzesco_Milan_5557.jpg/960px-20110725_Castello_Sforzesco_Milan_5557.jpg"
      }
    },
    {
      "name": "Grand Hotel Tremezzo",
      "category": "Luxury",
      "address": "Via Regina 8 · Tremezzina · Lake Como",
      "price": "€600–1,200/night",
      "rating": "9.5",
      "googleRating": "4.8",
      "room": "Lake View Suite · floating pool",
      "cancellation": "Free 7 days · peak season non-refundable",
      "tube": "Como ferry to Tremezzo · hotel boat available",
      "airport": "MXP 1 hr · Como train + taxi 30 min",
      "nearbyAttractions": "Villa Carlotta 5 min · Bellagio ferry 20 min · Villa Balbianello boat trip",
      "walkingScore": "70 / 100 — lakeside resort",
      "breakfast": "Included",
      "idealFor": [
        "Couple",
        "Honeymoon",
        "Luxury"
      ],
      "tip": "The floating pool on the lake is iconic. Book the boat transfer from Como for arrival drama.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Grand%20Hotel%20Tremezzo%20Como%20Italy",
      "bookUrl": "https://www.grandhoteltremezzo.com/",
      "photos": {
        "exterior": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Sentiero_del_Viandante_DSC_6340_%2814020554463%29.jpg/960px-Sentiero_del_Viandante_DSC_6340_%2814020554463%29.jpg",
        "lobby": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Sentiero_del_Viandante_DSC_6340_%2814020554463%29.jpg/960px-Sentiero_del_Viandante_DSC_6340_%2814020554463%29.jpg",
        "room": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Sentiero_del_Viandante_DSC_6340_%2814020554463%29.jpg/960px-Sentiero_del_Viandante_DSC_6340_%2814020554463%29.jpg",
        "luxuryRoom": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Sentiero_del_Viandante_DSC_6340_%2814020554463%29.jpg/960px-Sentiero_del_Viandante_DSC_6340_%2814020554463%29.jpg",
        "restaurant": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Sentiero_del_Viandante_DSC_6340_%2814020554463%29.jpg/960px-Sentiero_del_Viandante_DSC_6340_%2814020554463%29.jpg",
        "pool": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Sentiero_del_Viandante_DSC_6340_%2814020554463%29.jpg/960px-Sentiero_del_Viandante_DSC_6340_%2814020554463%29.jpg",
        "rooftop": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Sentiero_del_Viandante_DSC_6340_%2814020554463%29.jpg/960px-Sentiero_del_Viandante_DSC_6340_%2814020554463%29.jpg",
        "breakfast": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Sentiero_del_Viandante_DSC_6340_%2814020554463%29.jpg/960px-Sentiero_del_Viandante_DSC_6340_%2814020554463%29.jpg",
        "spa": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Sentiero_del_Viandante_DSC_6340_%2814020554463%29.jpg/960px-Sentiero_del_Viandante_DSC_6340_%2814020554463%29.jpg",
        "view": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Sentiero_del_Viandante_DSC_6340_%2814020554463%29.jpg/960px-Sentiero_del_Viandante_DSC_6340_%2814020554463%29.jpg"
      }
    },
    {
      "name": "Hotel Villa Flori",
      "category": "Mid-Range",
      "address": "Via Nazionale 12 · Como",
      "price": "€200–380/night",
      "rating": "8.9",
      "googleRating": "4.5",
      "room": "Lake View Room · waterfront",
      "cancellation": "Free 48h",
      "tube": "Como San Giovanni 10 min walk",
      "airport": "MXP 1 hr · Como train from Milan 40 min",
      "nearbyAttractions": "Como Cathedral 5 min · Ferry pier 3 min · Funicular 8 min",
      "walkingScore": "90 / 100 — lakeside",
      "breakfast": "Included in most rates",
      "idealFor": [
        "Couple",
        "Lake Como",
        "Scenic"
      ],
      "tip": "Waterfront location steps from the ferry — perfect base for Bellagio day trip.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Hotel%20Villa%20Flori%20Como%20Italy",
      "bookUrl": "https://www.villaflori.it/",
      "photos": {
        "exterior": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Como_and_its_lake.jpg/960px-Como_and_its_lake.jpg",
        "lobby": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Woman_with_children_playing_in_fountain_on_Como_lakefront.jpg/960px-Woman_with_children_playing_in_fountain_on_Como_lakefront.jpg",
        "room": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Como_and_its_lake.jpg/960px-Como_and_its_lake.jpg",
        "luxuryRoom": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Como_and_its_lake.jpg/960px-Como_and_its_lake.jpg",
        "restaurant": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Woman_with_children_playing_in_fountain_on_Como_lakefront.jpg/960px-Woman_with_children_playing_in_fountain_on_Como_lakefront.jpg",
        "pool": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Como_-_Villa_Olmo-_Ceiling.jpg/960px-Como_-_Villa_Olmo-_Ceiling.jpg",
        "rooftop": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Como_and_its_lake.jpg/960px-Como_and_its_lake.jpg",
        "breakfast": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Woman_with_children_playing_in_fountain_on_Como_lakefront.jpg/960px-Woman_with_children_playing_in_fountain_on_Como_lakefront.jpg",
        "spa": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Como_-_Villa_Olmo-_Ceiling.jpg/960px-Como_-_Villa_Olmo-_Ceiling.jpg",
        "view": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Como_and_its_lake.jpg/960px-Como_and_its_lake.jpg"
      }
    },
    {
      "name": "The Gritti Palace",
      "category": "Luxury",
      "address": "Campo Santa Maria del Giglio · Venice",
      "price": "€700–1,500/night",
      "rating": "9.4",
      "googleRating": "4.7",
      "room": "Grand Canal View · historic palazzo",
      "cancellation": "Free 48h off-season · peak non-refundable",
      "tube": "Vaporetto Giglio · 1 min walk",
      "airport": "VCE 1 hr water taxi · Alilaguna 75 min",
      "nearbyAttractions": "St Mark's 8 min · Accademia 5 min · Rialto 12 min",
      "walkingScore": "95 / 100 — San Marco",
      "breakfast": "Included in premium rates",
      "idealFor": [
        "Couple",
        "Luxury",
        "Grand Canal"
      ],
      "tip": "A 15th-century palazzo on the Grand Canal. Ask for a room facing the water — worth every euro.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=The%20Gritti%20Palace%20Venice%20Italy",
      "bookUrl": "https://www.marriott.com/en-us/hotels/vcegl-the-gritti-palace-a-luxury-collection-hotel-venice/overview/",
      "photos": {
        "exterior": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/View_of_the_Grand_Canal_from_Rialto_to_Ca%27Foscari.jpg/960px-View_of_the_Grand_Canal_from_Rialto_to_Ca%27Foscari.jpg",
        "lobby": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Chiesa_di_Santa_Maria_del_Giglio_Venezia.jpg/960px-Chiesa_di_Santa_Maria_del_Giglio_Venezia.jpg",
        "room": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Table_at_Gritti_Palace_Hotel_in_Venice_-_panoramio.jpg/960px-Table_at_Gritti_Palace_Hotel_in_Venice_-_panoramio.jpg",
        "luxuryRoom": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Table_at_Gritti_Palace_Hotel_in_Venice_-_panoramio.jpg/960px-Table_at_Gritti_Palace_Hotel_in_Venice_-_panoramio.jpg",
        "restaurant": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Chiesa_di_Santa_Maria_del_Giglio_Venezia.jpg/960px-Chiesa_di_Santa_Maria_del_Giglio_Venezia.jpg",
        "pool": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Canal_Grande_Chiesa_della_Salute_e_Dogana_dal_ponte_dell_Accademia.jpg/960px-Canal_Grande_Chiesa_della_Salute_e_Dogana_dal_ponte_dell_Accademia.jpg",
        "rooftop": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Table_at_Gritti_Palace_Hotel_in_Venice_-_panoramio.jpg/960px-Table_at_Gritti_Palace_Hotel_in_Venice_-_panoramio.jpg",
        "breakfast": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Chiesa_di_Santa_Maria_del_Giglio_Venezia.jpg/960px-Chiesa_di_Santa_Maria_del_Giglio_Venezia.jpg",
        "spa": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Canal_Grande_Chiesa_della_Salute_e_Dogana_dal_ponte_dell_Accademia.jpg/960px-Canal_Grande_Chiesa_della_Salute_e_Dogana_dal_ponte_dell_Accademia.jpg",
        "view": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Table_at_Gritti_Palace_Hotel_in_Venice_-_panoramio.jpg/960px-Table_at_Gritti_Palace_Hotel_in_Venice_-_panoramio.jpg"
      }
    },
    {
      "name": "Ca' Sagredo",
      "category": "Luxury",
      "address": "Campo Santa Sofia · Venice",
      "price": "€550–1,000/night",
      "rating": "9.2",
      "googleRating": "4.6",
      "room": "Canal View · frescoed ballroom",
      "cancellation": "Free 72h",
      "tube": "Vaporetto Ca' d'Oro · 3 min walk",
      "airport": "VCE 1 hr",
      "nearbyAttractions": "Rialto 8 min · St Mark's 12 min · Fondamenta Nove 5 min",
      "walkingScore": "93 / 100 — Cannaregio edge",
      "breakfast": "Buffet included",
      "idealFor": [
        "Couple",
        "Art lovers",
        "Luxury"
      ],
      "tip": "17th-century palazzo with Tiepolo frescoes. Quieter than San Marco but central.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Ca'%20Sagredo%20Venice%20Italy",
      "bookUrl": "https://www.casagredohotel.com/",
      "photos": {
        "exterior": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/View_of_the_Grand_Canal_from_Rialto_to_Ca%27Foscari.jpg/960px-View_of_the_Grand_Canal_from_Rialto_to_Ca%27Foscari.jpg",
        "lobby": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Ca%27_d%27Oro_facciata.jpg/960px-Ca%27_d%27Oro_facciata.jpg",
        "room": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Hotel_Ca_Sagredo_-_Grand_Canal_-_Rialto_-_Venice_Italy_Venezia_-_Creative_Commons_by_gnuckx_%284794995927%29.jpg/960px-Hotel_Ca_Sagredo_-_Grand_Canal_-_Rialto_-_Venice_Italy_Venezia_-_Creative_Commons_by_gnuckx_%284794995927%29.jpg",
        "luxuryRoom": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Hotel_Ca_Sagredo_-_Grand_Canal_-_Rialto_-_Venice_Italy_Venezia_-_Creative_Commons_by_gnuckx_%284794995927%29.jpg/960px-Hotel_Ca_Sagredo_-_Grand_Canal_-_Rialto_-_Venice_Italy_Venezia_-_Creative_Commons_by_gnuckx_%284794995927%29.jpg",
        "restaurant": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Ca%27_d%27Oro_facciata.jpg/960px-Ca%27_d%27Oro_facciata.jpg",
        "pool": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Canal_Grande_Chiesa_della_Salute_e_Dogana_dal_ponte_dell_Accademia.jpg/960px-Canal_Grande_Chiesa_della_Salute_e_Dogana_dal_ponte_dell_Accademia.jpg",
        "rooftop": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Hotel_Ca_Sagredo_-_Grand_Canal_-_Rialto_-_Venice_Italy_Venezia_-_Creative_Commons_by_gnuckx_%284794995927%29.jpg/960px-Hotel_Ca_Sagredo_-_Grand_Canal_-_Rialto_-_Venice_Italy_Venezia_-_Creative_Commons_by_gnuckx_%284794995927%29.jpg",
        "breakfast": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Ca%27_d%27Oro_facciata.jpg/960px-Ca%27_d%27Oro_facciata.jpg",
        "spa": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Canal_Grande_Chiesa_della_Salute_e_Dogana_dal_ponte_dell_Accademia.jpg/960px-Canal_Grande_Chiesa_della_Salute_e_Dogana_dal_ponte_dell_Accademia.jpg",
        "view": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Hotel_Ca_Sagredo_-_Grand_Canal_-_Rialto_-_Venice_Italy_Venezia_-_Creative_Commons_by_gnuckx_%284794995927%29.jpg/960px-Hotel_Ca_Sagredo_-_Grand_Canal_-_Rialto_-_Venice_Italy_Venezia_-_Creative_Commons_by_gnuckx_%284794995927%29.jpg"
      }
    },
    {
      "name": "Hotel Rialto",
      "category": "Mid-Range",
      "address": "Riva del Ferro · Venice",
      "price": "€180–350/night",
      "rating": "8.6",
      "googleRating": "4.3",
      "room": "Canal View · steps from Rialto Bridge",
      "cancellation": "Free 48h",
      "tube": "Vaporetto Rialto · 1 min walk",
      "airport": "VCE 1 hr",
      "nearbyAttractions": "Rialto Market 2 min · St Mark's 10 min · Grand Canal 0 min",
      "walkingScore": "96 / 100 — Rialto",
      "breakfast": "Extra €15pp",
      "idealFor": [
        "Couple",
        "First-time Venice",
        "Location"
      ],
      "tip": "Cannot beat the location beside Rialto Bridge. Book canal-facing for the full Venice experience.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Hotel%20Rialto%20Venice%20Italy",
      "bookUrl": "https://www.hotelrialto-venice.com/",
      "photos": {
        "exterior": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Rialto_2025_4.jpg/960px-Rialto_2025_4.jpg",
        "lobby": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Rialto_Gondoliers.jpg/960px-Rialto_Gondoliers.jpg",
        "room": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Hotel_Ca_Sagredo_-_Grand_Canal_-_Rialto_-_Venice_Italy_Venezia_-_Creative_Commons_by_gnuckx_%284795626094%29.jpg/960px-Hotel_Ca_Sagredo_-_Grand_Canal_-_Rialto_-_Venice_Italy_Venezia_-_Creative_Commons_by_gnuckx_%284795626094%29.jpg",
        "luxuryRoom": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Hotel_Ca_Sagredo_-_Grand_Canal_-_Rialto_-_Venice_Italy_Venezia_-_Creative_Commons_by_gnuckx_%284795626094%29.jpg/960px-Hotel_Ca_Sagredo_-_Grand_Canal_-_Rialto_-_Venice_Italy_Venezia_-_Creative_Commons_by_gnuckx_%284795626094%29.jpg",
        "restaurant": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Rialto_Gondoliers.jpg/960px-Rialto_Gondoliers.jpg",
        "pool": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Hotel_Ca_Sagredo_-_Grand_Canal_-_Rialto_-_Venice_Italy_Venezia_-_Creative_Commons_by_gnuckx_%284795626094%29.jpg/960px-Hotel_Ca_Sagredo_-_Grand_Canal_-_Rialto_-_Venice_Italy_Venezia_-_Creative_Commons_by_gnuckx_%284795626094%29.jpg",
        "rooftop": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Hotel_Ca_Sagredo_-_Grand_Canal_-_Rialto_-_Venice_Italy_Venezia_-_Creative_Commons_by_gnuckx_%284795626094%29.jpg/960px-Hotel_Ca_Sagredo_-_Grand_Canal_-_Rialto_-_Venice_Italy_Venezia_-_Creative_Commons_by_gnuckx_%284795626094%29.jpg",
        "breakfast": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Rialto_Gondoliers.jpg/960px-Rialto_Gondoliers.jpg",
        "spa": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Hotel_Ca_Sagredo_-_Grand_Canal_-_Rialto_-_Venice_Italy_Venezia_-_Creative_Commons_by_gnuckx_%284795626094%29.jpg/960px-Hotel_Ca_Sagredo_-_Grand_Canal_-_Rialto_-_Venice_Italy_Venezia_-_Creative_Commons_by_gnuckx_%284795626094%29.jpg",
        "view": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Hotel_Ca_Sagredo_-_Grand_Canal_-_Rialto_-_Venice_Italy_Venezia_-_Creative_Commons_by_gnuckx_%284795626094%29.jpg/960px-Hotel_Ca_Sagredo_-_Grand_Canal_-_Rialto_-_Venice_Italy_Venezia_-_Creative_Commons_by_gnuckx_%284795626094%29.jpg"
      }
    },
    {
      "name": "Hotel Brunelleschi",
      "category": "Luxury",
      "address": "Piazza Sant'Elisabetta 3 · Florence",
      "price": "€350–650/night",
      "rating": "9.1",
      "googleRating": "4.7",
      "room": "Duomo View · Byzantine tower suite",
      "cancellation": "Free 48h",
      "tube": "SMN 10 min walk · Duomo 3 min",
      "airport": "FLR 20 min taxi · 30 min tram",
      "nearbyAttractions": "Duomo 3 min · Uffizi 8 min · Ponte Vecchio 10 min",
      "walkingScore": "98 / 100 — historic centre",
      "breakfast": "Included in premium rates",
      "idealFor": [
        "Couple",
        "Luxury",
        "Duomo views"
      ],
      "tip": "Built around a Byzantine tower and Roman ruins visible in the lobby. Duomo views from upper floors.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Hotel%20Brunelleschi%20Florence%20Italy",
      "bookUrl": "https://www.brunelleschi.it/",
      "photos": {
        "exterior": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Cattedrale_di_Santa_Maria_del_Fiore_%E2%80%93_Il_Duomo_di_Firenze.jpg/960px-Cattedrale_di_Santa_Maria_del_Fiore_%E2%80%93_Il_Duomo_di_Firenze.jpg",
        "lobby": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Florence_Italy_UNESCO-Plaque-1982-01.jpg/960px-Florence_Italy_UNESCO-Plaque-1982-01.jpg",
        "room": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Cattedrale_di_Santa_Maria_del_Fiore_%E2%80%93_Il_Duomo_di_Firenze.jpg/960px-Cattedrale_di_Santa_Maria_del_Fiore_%E2%80%93_Il_Duomo_di_Firenze.jpg",
        "luxuryRoom": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Cattedrale_di_Santa_Maria_del_Fiore_%E2%80%93_Il_Duomo_di_Firenze.jpg/960px-Cattedrale_di_Santa_Maria_del_Fiore_%E2%80%93_Il_Duomo_di_Firenze.jpg",
        "restaurant": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Florence_Italy_UNESCO-Plaque-1982-01.jpg/960px-Florence_Italy_UNESCO-Plaque-1982-01.jpg",
        "pool": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/CampanileGiotto-01.jpg/960px-CampanileGiotto-01.jpg",
        "rooftop": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Cattedrale_di_Santa_Maria_del_Fiore_%E2%80%93_Il_Duomo_di_Firenze.jpg/960px-Cattedrale_di_Santa_Maria_del_Fiore_%E2%80%93_Il_Duomo_di_Firenze.jpg",
        "breakfast": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Florence_Italy_UNESCO-Plaque-1982-01.jpg/960px-Florence_Italy_UNESCO-Plaque-1982-01.jpg",
        "spa": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/CampanileGiotto-01.jpg/960px-CampanileGiotto-01.jpg",
        "view": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Cattedrale_di_Santa_Maria_del_Fiore_%E2%80%93_Il_Duomo_di_Firenze.jpg/960px-Cattedrale_di_Santa_Maria_del_Fiore_%E2%80%93_Il_Duomo_di_Firenze.jpg"
      }
    },
    {
      "name": "Hotel Spadai",
      "category": "Mid-Range",
      "address": "Via dei Servi 40 · Florence",
      "price": "€200–380/night",
      "rating": "8.9",
      "googleRating": "4.5",
      "room": "Superior Double · Duomo view available",
      "cancellation": "Free 24h",
      "tube": "SMN 12 min walk · Duomo 5 min",
      "airport": "FLR 25 min",
      "nearbyAttractions": "Duomo 5 min · Accademia 10 min · Uffizi 10 min",
      "walkingScore": "97 / 100 — Duomo quarter",
      "breakfast": "Buffet €16pp",
      "idealFor": [
        "Couple",
        "First-time Florence",
        "Value"
      ],
      "tip": "Modern boutique one block from the Duomo. Rooftop terrace for aperitivo with cathedral views.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Hotel%20Spadai%20Florence%20Italy",
      "bookUrl": "https://www.hotelspadai.it/",
      "photos": {
        "exterior": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Cattedrale_di_Santa_Maria_del_Fiore_%E2%80%93_Il_Duomo_di_Firenze.jpg/960px-Cattedrale_di_Santa_Maria_del_Fiore_%E2%80%93_Il_Duomo_di_Firenze.jpg",
        "lobby": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Cupola_del_duomo_di_firenze%2C_vista%2C_via_dei_servi_01.JPG/960px-Cupola_del_duomo_di_firenze%2C_vista%2C_via_dei_servi_01.JPG",
        "room": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/CampanileGiotto-01.jpg/960px-CampanileGiotto-01.jpg",
        "luxuryRoom": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/CampanileGiotto-01.jpg/960px-CampanileGiotto-01.jpg",
        "restaurant": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Cupola_del_duomo_di_firenze%2C_vista%2C_via_dei_servi_01.JPG/960px-Cupola_del_duomo_di_firenze%2C_vista%2C_via_dei_servi_01.JPG",
        "pool": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/CampanileGiotto-01.jpg/960px-CampanileGiotto-01.jpg",
        "rooftop": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/CampanileGiotto-01.jpg/960px-CampanileGiotto-01.jpg",
        "breakfast": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Cupola_del_duomo_di_firenze%2C_vista%2C_via_dei_servi_01.JPG/960px-Cupola_del_duomo_di_firenze%2C_vista%2C_via_dei_servi_01.JPG",
        "spa": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/CampanileGiotto-01.jpg/960px-CampanileGiotto-01.jpg",
        "view": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/CampanileGiotto-01.jpg/960px-CampanileGiotto-01.jpg"
      }
    },
    {
      "name": "Hotel de Russie",
      "category": "Luxury",
      "address": "Via del Babuino 9 · Rome",
      "price": "€550–1,100/night",
      "rating": "9.3",
      "googleRating": "4.7",
      "room": "Deluxe Room · Secret Garden",
      "cancellation": "Free 48h",
      "tube": "Spagna M A · 3 min walk",
      "airport": "FCO 45 min · CIA 30 min",
      "nearbyAttractions": "Spanish Steps 3 min · Piazza del Popolo 5 min · Trevi 12 min",
      "walkingScore": "96 / 100 — Tridente",
      "breakfast": "Included in premium rates",
      "idealFor": [
        "Couple",
        "Luxury",
        "Central Rome"
      ],
      "tip": "Rocco Forte's Roman flagship. The Secret Garden is Rome's most tranquil hotel oasis.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Hotel%20de%20Russie%20Rome%20Italy",
      "bookUrl": "https://www.roccofortehotels.com/hotels-and-resorts/hotel-de-russie/",
      "photos": {
        "exterior": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/PIAZZA_DEL_POPOLO_VISTA_AEREA.jpg/960px-PIAZZA_DEL_POPOLO_VISTA_AEREA.jpg",
        "lobby": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Fontana_del_Nettuno%2C_Piazza_del_Popolo%2C_Rome%2C_Italie.jpg/960px-Fontana_del_Nettuno%2C_Piazza_del_Popolo%2C_Rome%2C_Italie.jpg",
        "room": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/PIAZZA_DEL_POPOLO_VISTA_AEREA.jpg/960px-PIAZZA_DEL_POPOLO_VISTA_AEREA.jpg",
        "luxuryRoom": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/PIAZZA_DEL_POPOLO_VISTA_AEREA.jpg/960px-PIAZZA_DEL_POPOLO_VISTA_AEREA.jpg",
        "restaurant": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Fontana_del_Nettuno%2C_Piazza_del_Popolo%2C_Rome%2C_Italie.jpg/960px-Fontana_del_Nettuno%2C_Piazza_del_Popolo%2C_Rome%2C_Italie.jpg",
        "pool": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/PIAZZA_DEL_POPOLO_VISTA_AEREA.jpg/960px-PIAZZA_DEL_POPOLO_VISTA_AEREA.jpg",
        "rooftop": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/PIAZZA_DEL_POPOLO_VISTA_AEREA.jpg/960px-PIAZZA_DEL_POPOLO_VISTA_AEREA.jpg",
        "breakfast": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Fontana_del_Nettuno%2C_Piazza_del_Popolo%2C_Rome%2C_Italie.jpg/960px-Fontana_del_Nettuno%2C_Piazza_del_Popolo%2C_Rome%2C_Italie.jpg",
        "spa": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/PIAZZA_DEL_POPOLO_VISTA_AEREA.jpg/960px-PIAZZA_DEL_POPOLO_VISTA_AEREA.jpg",
        "view": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/PIAZZA_DEL_POPOLO_VISTA_AEREA.jpg/960px-PIAZZA_DEL_POPOLO_VISTA_AEREA.jpg"
      }
    },
    {
      "name": "The First Roma Arte",
      "category": "Luxury",
      "address": "Via del Vantaggio 14 · Rome",
      "price": "€400–800/night",
      "rating": "9.0",
      "googleRating": "4.6",
      "room": "Art Suite · contemporary collection",
      "cancellation": "Free 48h",
      "tube": "Flaminio M A · 8 min walk · Spagna 10 min",
      "airport": "FCO 50 min · CIA 35 min",
      "nearbyAttractions": "Piazza del Popolo 8 min · Villa Borghese 10 min · Spanish Steps 12 min",
      "walkingScore": "92 / 100 — Pincian Hill",
      "breakfast": "Buffet included",
      "idealFor": [
        "Couple",
        "Art lovers",
        "Luxury"
      ],
      "tip": "Hotel-as-gallery with rotating contemporary art. Rooftop restaurant overlooks the city.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=The%20First%20Roma%20Arte%20Rome%20Italy",
      "bookUrl": "https://www.precioushotels.com/the-first-roma-arte/",
      "photos": {
        "exterior": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/PIAZZA_DEL_POPOLO_VISTA_AEREA.jpg/960px-PIAZZA_DEL_POPOLO_VISTA_AEREA.jpg",
        "lobby": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Fontana_del_Nettuno%2C_Piazza_del_Popolo%2C_Rome%2C_Italie.jpg/960px-Fontana_del_Nettuno%2C_Piazza_del_Popolo%2C_Rome%2C_Italie.jpg",
        "room": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/PIAZZA_DEL_POPOLO_VISTA_AEREA.jpg/960px-PIAZZA_DEL_POPOLO_VISTA_AEREA.jpg",
        "luxuryRoom": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/PIAZZA_DEL_POPOLO_VISTA_AEREA.jpg/960px-PIAZZA_DEL_POPOLO_VISTA_AEREA.jpg",
        "restaurant": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Fontana_del_Nettuno%2C_Piazza_del_Popolo%2C_Rome%2C_Italie.jpg/960px-Fontana_del_Nettuno%2C_Piazza_del_Popolo%2C_Rome%2C_Italie.jpg",
        "pool": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/PIAZZA_DEL_POPOLO_VISTA_AEREA.jpg/960px-PIAZZA_DEL_POPOLO_VISTA_AEREA.jpg",
        "rooftop": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/PIAZZA_DEL_POPOLO_VISTA_AEREA.jpg/960px-PIAZZA_DEL_POPOLO_VISTA_AEREA.jpg",
        "breakfast": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Fontana_del_Nettuno%2C_Piazza_del_Popolo%2C_Rome%2C_Italie.jpg/960px-Fontana_del_Nettuno%2C_Piazza_del_Popolo%2C_Rome%2C_Italie.jpg",
        "spa": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/PIAZZA_DEL_POPOLO_VISTA_AEREA.jpg/960px-PIAZZA_DEL_POPOLO_VISTA_AEREA.jpg",
        "view": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/PIAZZA_DEL_POPOLO_VISTA_AEREA.jpg/960px-PIAZZA_DEL_POPOLO_VISTA_AEREA.jpg"
      }
    },
    {
      "name": "Hotel Artemide",
      "category": "Mid-Range",
      "address": "Via Nazionale 22 · Rome",
      "price": "€220–400/night",
      "rating": "9.0",
      "googleRating": "4.6",
      "room": "Executive Room · rooftop spa",
      "cancellation": "Free 24h",
      "tube": "Repubblica M A · 2 min walk · Termini 8 min",
      "airport": "FCO 40 min · CIA 25 min",
      "nearbyAttractions": "Termini 8 min · Trevi 12 min · Colosseum 15 min metro",
      "walkingScore": "94 / 100 — Via Nazionale",
      "breakfast": "Buffet included",
      "idealFor": [
        "Couple",
        "Business",
        "Spa"
      ],
      "tip": "Award-winning rooftop spa and excellent location on Via Nazionale. Easy metro access everywhere.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Hotel%20Artemide%20Rome%20Italy",
      "bookUrl": "https://www.hotelartemide.it/",
      "photos": {
        "exterior": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Monti_-_via_Nazionale_1413.JPG/960px-Monti_-_via_Nazionale_1413.JPG",
        "lobby": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Monti_-_via_Nazionale_1413.JPG/960px-Monti_-_via_Nazionale_1413.JPG",
        "room": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Monti_-_via_Nazionale_1413.JPG/960px-Monti_-_via_Nazionale_1413.JPG",
        "luxuryRoom": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Monti_-_via_Nazionale_1413.JPG/960px-Monti_-_via_Nazionale_1413.JPG",
        "restaurant": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Monti_-_via_Nazionale_1413.JPG/960px-Monti_-_via_Nazionale_1413.JPG",
        "pool": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Monti_-_via_Nazionale_1413.JPG/960px-Monti_-_via_Nazionale_1413.JPG",
        "rooftop": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Monti_-_via_Nazionale_1413.JPG/960px-Monti_-_via_Nazionale_1413.JPG",
        "breakfast": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Monti_-_via_Nazionale_1413.JPG/960px-Monti_-_via_Nazionale_1413.JPG",
        "spa": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Monti_-_via_Nazionale_1413.JPG/960px-Monti_-_via_Nazionale_1413.JPG",
        "view": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Monti_-_via_Nazionale_1413.JPG/960px-Monti_-_via_Nazionale_1413.JPG"
      }
    }
  ],
  "dining": [
    {
      "name": "Ratanà",
      "category": "Milanese · Risotto",
      "address": "Via Gaetano de Castillia 28 · Milan",
      "price": "€35–55/head",
      "famous": "Risotto alla Milanese",
      "halal": false,
      "vegetarian": true,
      "reservation": "Essential weekends",
      "wait": "0 with booking · 30 min walk-in",
      "michelin": "—",
      "kidsFriendly": "Yes",
      "dressCode": "Smart casual",
      "tip": "The gold-standard Risotto alla Milanese — saffron, bone marrow, patience.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Ratan%C3%A0%20Milan%20Italy",
      "bookUrl": "https://www.google.com/maps/search/?api=1&query=Ratan%C3%A0%20Milan%20Italy",
      "dishes": [
        {
          "name": "Risotto alla Milanese",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Risotto_with_speck_and_goat_cheese_%286101067436%29.jpg/960px-Risotto_with_speck_and_goat_cheese_%286101067436%29.jpg",
          "desc": "Saffron risotto — Milan's signature dish."
        },
        {
          "name": "Ossobuco",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Risotto_alla_Milanese.JPG/960px-Risotto_alla_Milanese.JPG",
          "desc": "Braised veal shank, traditional pairing."
        },
        {
          "name": "Mondeghili",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Giuseppe_Gervasini._L%27interno_della_casa_di_via_F.lli_Zoia_negli_anni%2740.jpg/960px-Giuseppe_Gervasini._L%27interno_della_casa_di_via_F.lli_Zoia_negli_anni%2740.jpg",
          "desc": "Milanese meatballs — street food elevated."
        }
      ],
      "photos": {
        "signature": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Risotto_with_speck_and_goat_cheese_%286101067436%29.jpg/960px-Risotto_with_speck_and_goat_cheese_%286101067436%29.jpg",
        "interior": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Risotto_alla_Milanese.JPG/960px-Risotto_alla_Milanese.JPG",
        "exterior": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Giuseppe_Gervasini._L%27interno_della_casa_di_via_F.lli_Zoia_negli_anni%2740.jpg/960px-Giuseppe_Gervasini._L%27interno_della_casa_di_via_F.lli_Zoia_negli_anni%2740.jpg",
        "dessert": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Giuseppe_Gervasini._L%27interno_della_casa_di_via_F.lli_Zoia_negli_anni%2740.jpg/960px-Giuseppe_Gervasini._L%27interno_della_casa_di_via_F.lli_Zoia_negli_anni%2740.jpg",
        "coffee": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Risotto_alla_Milanese.JPG/960px-Risotto_alla_Milanese.JPG"
      }
    },
    {
      "name": "Trattoria del Nuovo Macello",
      "category": "Milanese · Cotoletta",
      "address": "Via Cesare Lombroso 20 · Milan",
      "price": "€30–50/head",
      "famous": "Cotoletta alla Milanese",
      "halal": false,
      "vegetarian": true,
      "reservation": "Recommended",
      "wait": "15–30 min at 13:00",
      "michelin": "—",
      "kidsFriendly": "Yes",
      "dressCode": "Smart casual",
      "tip": "Proper Cotoletta — pounded veal, breadcrumb, butter. Order it pink inside.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Trattoria%20del%20Nuovo%20Macello%20Milan%20Italy",
      "bookUrl": "https://www.google.com/maps/search/?api=1&query=Trattoria%20del%20Nuovo%20Macello%20Milan%20Italy",
      "dishes": [
        {
          "name": "Cotoletta alla Milanese",
          "img": "https://upload.wikimedia.org/wikipedia/commons/a/a7/Cotoletta_e_patate_al_forno.jpg",
          "desc": "Signature dish at Trattoria del Nuovo Macello."
        },
        {
          "name": "Seasonal Special",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Milanesa.jpg/960px-Milanesa.jpg",
          "desc": "Ask your server for today's recommendation."
        },
        {
          "name": "Antipasto",
          "img": "https://upload.wikimedia.org/wikipedia/commons/a/a7/Cotoletta_e_patate_al_forno.jpg",
          "desc": "Regional starter — share if dining as a group."
        },
        {
          "name": "Primo",
          "img": "https://upload.wikimedia.org/wikipedia/commons/a/a7/Cotoletta_e_patate_al_forno.jpg",
          "desc": "Classic Italian first course."
        },
        {
          "name": "Dolce",
          "img": "https://upload.wikimedia.org/wikipedia/commons/a/a7/Cotoletta_e_patate_al_forno.jpg",
          "desc": "Finish with something sweet — tiramisu if available."
        }
      ],
      "photos": {
        "signature": "https://upload.wikimedia.org/wikipedia/commons/a/a7/Cotoletta_e_patate_al_forno.jpg",
        "interior": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Milanesa.jpg/960px-Milanesa.jpg",
        "exterior": "https://upload.wikimedia.org/wikipedia/commons/a/a7/Cotoletta_e_patate_al_forno.jpg",
        "dessert": "https://upload.wikimedia.org/wikipedia/commons/a/a7/Cotoletta_e_patate_al_forno.jpg",
        "coffee": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Milanesa.jpg/960px-Milanesa.jpg"
      }
    },
    {
      "name": "Locanda Tirlindana",
      "category": "Lake Como · Seafood",
      "address": "Via XX Settembre 15 · Bellagio",
      "price": "€40–65/head",
      "famous": "Lake Fish · Missoltini",
      "halal": false,
      "vegetarian": true,
      "reservation": "Recommended summer",
      "wait": "20 min at lunch",
      "michelin": "—",
      "kidsFriendly": "Yes",
      "dressCode": "Smart casual",
      "tip": "Fresh lake fish — lavarello, perch, missoltini (sun-dried shad). Waterfront table essential.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Locanda%20Tirlindana%20Como%20Italy",
      "bookUrl": "https://www.google.com/maps/search/?api=1&query=Locanda%20Tirlindana%20Como%20Italy",
      "dishes": [
        {
          "name": "Lake Fish · Missoltini",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/La_Punta%2C_Bellagio%2C_Lago_de_Como%2C_Italia%2C_2016-06-25%2C_DD_11.jpg/960px-La_Punta%2C_Bellagio%2C_Lago_de_Como%2C_Italia%2C_2016-06-25%2C_DD_11.jpg",
          "desc": "Signature dish at Locanda Tirlindana."
        },
        {
          "name": "Seasonal Special",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/La_Punta%2C_Bellagio%2C_Lago_de_Como%2C_Italia%2C_2016-06-25%2C_DD_11.jpg/960px-La_Punta%2C_Bellagio%2C_Lago_de_Como%2C_Italia%2C_2016-06-25%2C_DD_11.jpg",
          "desc": "Ask your server for today's recommendation."
        },
        {
          "name": "Antipasto",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/La_Punta%2C_Bellagio%2C_Lago_de_Como%2C_Italia%2C_2016-06-25%2C_DD_11.jpg/960px-La_Punta%2C_Bellagio%2C_Lago_de_Como%2C_Italia%2C_2016-06-25%2C_DD_11.jpg",
          "desc": "Regional starter — share if dining as a group."
        },
        {
          "name": "Primo",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/La_Punta%2C_Bellagio%2C_Lago_de_Como%2C_Italia%2C_2016-06-25%2C_DD_11.jpg/960px-La_Punta%2C_Bellagio%2C_Lago_de_Como%2C_Italia%2C_2016-06-25%2C_DD_11.jpg",
          "desc": "Classic Italian first course."
        },
        {
          "name": "Dolce",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/La_Punta%2C_Bellagio%2C_Lago_de_Como%2C_Italia%2C_2016-06-25%2C_DD_11.jpg/960px-La_Punta%2C_Bellagio%2C_Lago_de_Como%2C_Italia%2C_2016-06-25%2C_DD_11.jpg",
          "desc": "Finish with something sweet — tiramisu if available."
        }
      ],
      "photos": {
        "signature": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/La_Punta%2C_Bellagio%2C_Lago_de_Como%2C_Italia%2C_2016-06-25%2C_DD_11.jpg/960px-La_Punta%2C_Bellagio%2C_Lago_de_Como%2C_Italia%2C_2016-06-25%2C_DD_11.jpg",
        "interior": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/La_Punta%2C_Bellagio%2C_Lago_de_Como%2C_Italia%2C_2016-06-25%2C_DD_11.jpg/960px-La_Punta%2C_Bellagio%2C_Lago_de_Como%2C_Italia%2C_2016-06-25%2C_DD_11.jpg",
        "exterior": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/La_Punta%2C_Bellagio%2C_Lago_de_Como%2C_Italia%2C_2016-06-25%2C_DD_11.jpg/960px-La_Punta%2C_Bellagio%2C_Lago_de_Como%2C_Italia%2C_2016-06-25%2C_DD_11.jpg",
        "dessert": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/La_Punta%2C_Bellagio%2C_Lago_de_Como%2C_Italia%2C_2016-06-25%2C_DD_11.jpg/960px-La_Punta%2C_Bellagio%2C_Lago_de_Como%2C_Italia%2C_2016-06-25%2C_DD_11.jpg",
        "coffee": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/La_Punta%2C_Bellagio%2C_Lago_de_Como%2C_Italia%2C_2016-06-25%2C_DD_11.jpg/960px-La_Punta%2C_Bellagio%2C_Lago_de_Como%2C_Italia%2C_2016-06-25%2C_DD_11.jpg"
      }
    },
    {
      "name": "Osteria del Ponte",
      "category": "Lombard · Polenta",
      "address": "Via IV Novembre 24 · Como",
      "price": "€25–40/head",
      "famous": "Polenta con formaggio",
      "halal": false,
      "vegetarian": true,
      "reservation": "Walk-in OK weekdays",
      "wait": "10–20 min",
      "michelin": "—",
      "kidsFriendly": "Yes",
      "dressCode": "Smart casual",
      "tip": "Hearty polenta dishes — mountain comfort food before or after the lake.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Osteria%20del%20Ponte%20Como%20Italy",
      "bookUrl": "https://www.google.com/maps/search/?api=1&query=Osteria%20del%20Ponte%20Como%20Italy",
      "dishes": [
        {
          "name": "Polenta con formaggio",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Como_and_its_lake.jpg/960px-Como_and_its_lake.jpg",
          "desc": "Signature dish at Osteria del Ponte."
        },
        {
          "name": "Seasonal Special",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Cotechino-Servito-Polenta-Lenticchie.jpg/960px-Cotechino-Servito-Polenta-Lenticchie.jpg",
          "desc": "Ask your server for today's recommendation."
        },
        {
          "name": "Antipasto",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Como_and_its_lake.jpg/960px-Como_and_its_lake.jpg",
          "desc": "Regional starter — share if dining as a group."
        },
        {
          "name": "Primo",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Como_-_Villa_Olmo-_Ceiling.jpg/960px-Como_-_Villa_Olmo-_Ceiling.jpg",
          "desc": "Classic Italian first course."
        },
        {
          "name": "Dolce",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Como_and_its_lake.jpg/960px-Como_and_its_lake.jpg",
          "desc": "Finish with something sweet — tiramisu if available."
        }
      ],
      "photos": {
        "signature": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Como_and_its_lake.jpg/960px-Como_and_its_lake.jpg",
        "interior": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Cotechino-Servito-Polenta-Lenticchie.jpg/960px-Cotechino-Servito-Polenta-Lenticchie.jpg",
        "exterior": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Como_and_its_lake.jpg/960px-Como_and_its_lake.jpg",
        "dessert": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Como_-_Villa_Olmo-_Ceiling.jpg/960px-Como_-_Villa_Olmo-_Ceiling.jpg",
        "coffee": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Cotechino-Servito-Polenta-Lenticchie.jpg/960px-Cotechino-Servito-Polenta-Lenticchie.jpg"
      }
    },
    {
      "name": "Antiche Carampane",
      "category": "Venetian · Seafood",
      "address": "Ruga Giuffa · Venice",
      "price": "€45–70/head",
      "famous": "Seafood Pasta · Granseola",
      "halal": false,
      "vegetarian": true,
      "reservation": "Essential 1+ weeks",
      "wait": "0 with booking",
      "michelin": "—",
      "kidsFriendly": "Yes",
      "dressCode": "Smart casual",
      "tip": "No tourist menu — Venetian seafood pasta with whatever the lagoon delivered that morning.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Antiche%20Carampane%20Venice%20Italy",
      "bookUrl": "https://www.google.com/maps/search/?api=1&query=Antiche%20Carampane%20Venice%20Italy",
      "dishes": [
        {
          "name": "Seafood Pasta · Granseola",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/View_of_the_Grand_Canal_from_Rialto_to_Ca%27Foscari.jpg/960px-View_of_the_Grand_Canal_from_Rialto_to_Ca%27Foscari.jpg",
          "desc": "Signature dish at Antiche Carampane."
        },
        {
          "name": "Seasonal Special",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Canal_Grande_Chiesa_della_Salute_e_Dogana_dal_ponte_dell_Accademia.jpg/960px-Canal_Grande_Chiesa_della_Salute_e_Dogana_dal_ponte_dell_Accademia.jpg",
          "desc": "Ask your server for today's recommendation."
        },
        {
          "name": "Antipasto",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Canal_Grande_Chiesa_della_Salute_e_Dogana_dal_ponte_dell_Accademia.jpg/960px-Canal_Grande_Chiesa_della_Salute_e_Dogana_dal_ponte_dell_Accademia.jpg",
          "desc": "Regional starter — share if dining as a group."
        },
        {
          "name": "Primo",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/View_of_the_Grand_Canal_from_Rialto_to_Ca%27Foscari.jpg/960px-View_of_the_Grand_Canal_from_Rialto_to_Ca%27Foscari.jpg",
          "desc": "Classic Italian first course."
        },
        {
          "name": "Dolce",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/View_of_the_Grand_Canal_from_Rialto_to_Ca%27Foscari.jpg/960px-View_of_the_Grand_Canal_from_Rialto_to_Ca%27Foscari.jpg",
          "desc": "Finish with something sweet — tiramisu if available."
        }
      ],
      "photos": {
        "signature": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/View_of_the_Grand_Canal_from_Rialto_to_Ca%27Foscari.jpg/960px-View_of_the_Grand_Canal_from_Rialto_to_Ca%27Foscari.jpg",
        "interior": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Canal_Grande_Chiesa_della_Salute_e_Dogana_dal_ponte_dell_Accademia.jpg/960px-Canal_Grande_Chiesa_della_Salute_e_Dogana_dal_ponte_dell_Accademia.jpg",
        "exterior": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Canal_Grande_Chiesa_della_Salute_e_Dogana_dal_ponte_dell_Accademia.jpg/960px-Canal_Grande_Chiesa_della_Salute_e_Dogana_dal_ponte_dell_Accademia.jpg",
        "dessert": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/View_of_the_Grand_Canal_from_Rialto_to_Ca%27Foscari.jpg/960px-View_of_the_Grand_Canal_from_Rialto_to_Ca%27Foscari.jpg",
        "coffee": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Canal_Grande_Chiesa_della_Salute_e_Dogana_dal_ponte_dell_Accademia.jpg/960px-Canal_Grande_Chiesa_della_Salute_e_Dogana_dal_ponte_dell_Accademia.jpg"
      }
    },
    {
      "name": "Cantina Do Mori",
      "category": "Venetian · Cicchetti",
      "address": "Calle dei Do Mori · Venice",
      "price": "€15–30/head",
      "famous": "Cicchetti · Ombra",
      "halal": false,
      "vegetarian": true,
      "reservation": "Walk-in only",
      "wait": "Standing room at peak",
      "michelin": "—",
      "kidsFriendly": "Yes",
      "dressCode": "Smart casual",
      "tip": "Historic bacaro since 1462. Small plates (cicchetti) and a glass of wine (ombra) at the bar.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Cantina%20Do%20Mori%20Venice%20Italy",
      "bookUrl": "https://www.google.com/maps/search/?api=1&query=Cantina%20Do%20Mori%20Venice%20Italy",
      "dishes": [
        {
          "name": "Cicchetti · Ombra",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Cicchetti_Venezia_%281%29.jpg/960px-Cicchetti_Venezia_%281%29.jpg",
          "desc": "Signature dish at Cantina Do Mori."
        },
        {
          "name": "Seasonal Special",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/%22_13_-_ITALY_-_Cicchetti_Venetian_cuisine_appetizers_restaurant_%28_not_are_tapas_are_ciccheti_of_Venice%29_in_this_pics_Baccal%C3%A0_mantecato_%28Cod%29.jpg/960px-%22_13_-_ITALY_-_Cicchetti_Venetian_cuisine_appetizers_restaurant_%28_not_are_tapas_are_ciccheti_of_Venice%29_in_this_pics_Baccal%C3%A0_mantecato_%28Cod%29.jpg",
          "desc": "Ask your server for today's recommendation."
        },
        {
          "name": "Antipasto",
          "img": "https://upload.wikimedia.org/wikipedia/commons/8/8c/Cicchetti_Venetian_cuisine_appetizers_-_polpette_fritte_di_tonno_%28tuna_fried_meatballs%29.jpg",
          "desc": "Regional starter — share if dining as a group."
        },
        {
          "name": "Primo",
          "img": "https://upload.wikimedia.org/wikipedia/commons/8/8c/Cicchetti_Venetian_cuisine_appetizers_-_polpette_fritte_di_tonno_%28tuna_fried_meatballs%29.jpg",
          "desc": "Classic Italian first course."
        },
        {
          "name": "Dolce",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Cicchetti_Venezia_%281%29.jpg/960px-Cicchetti_Venezia_%281%29.jpg",
          "desc": "Finish with something sweet — tiramisu if available."
        }
      ],
      "photos": {
        "signature": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Cicchetti_Venezia_%281%29.jpg/960px-Cicchetti_Venezia_%281%29.jpg",
        "interior": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/%22_13_-_ITALY_-_Cicchetti_Venetian_cuisine_appetizers_restaurant_%28_not_are_tapas_are_ciccheti_of_Venice%29_in_this_pics_Baccal%C3%A0_mantecato_%28Cod%29.jpg/960px-%22_13_-_ITALY_-_Cicchetti_Venetian_cuisine_appetizers_restaurant_%28_not_are_tapas_are_ciccheti_of_Venice%29_in_this_pics_Baccal%C3%A0_mantecato_%28Cod%29.jpg",
        "exterior": "https://upload.wikimedia.org/wikipedia/commons/8/8c/Cicchetti_Venetian_cuisine_appetizers_-_polpette_fritte_di_tonno_%28tuna_fried_meatballs%29.jpg",
        "dessert": "https://upload.wikimedia.org/wikipedia/commons/8/8c/Cicchetti_Venetian_cuisine_appetizers_-_polpette_fritte_di_tonno_%28tuna_fried_meatballs%29.jpg",
        "coffee": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/%22_13_-_ITALY_-_Cicchetti_Venetian_cuisine_appetizers_restaurant_%28_not_are_tapas_are_ciccheti_of_Venice%29_in_this_pics_Baccal%C3%A0_mantecato_%28Cod%29.jpg/960px-%22_13_-_ITALY_-_Cicchetti_Venetian_cuisine_appetizers_restaurant_%28_not_are_tapas_are_ciccheti_of_Venice%29_in_this_pics_Baccal%C3%A0_mantecato_%28Cod%29.jpg"
      }
    },
    {
      "name": "Trattoria Mario",
      "category": "Florentine · Steak",
      "address": "Via Rosina 2 · Florence",
      "price": "€35–55/head",
      "famous": "Bistecca Fiorentina",
      "halal": false,
      "vegetarian": true,
      "reservation": "Walk-in · queue from 12:00",
      "wait": "30–60 min at lunch",
      "michelin": "—",
      "kidsFriendly": "Yes",
      "dressCode": "Smart casual",
      "tip": "Communal tables, no-nonsense service. Bistecca Fiorentina is sold by weight — minimum 1 kg to share.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Trattoria%20Mario%20Florence%20Italy",
      "bookUrl": "https://www.google.com/maps/search/?api=1&query=Trattoria%20Mario%20Florence%20Italy",
      "dishes": [
        {
          "name": "Bistecca Fiorentina",
          "img": "https://upload.wikimedia.org/wikipedia/commons/1/12/Bistecca_alla_fiorentina-01.jpg",
          "desc": "Signature dish at Trattoria Mario."
        },
        {
          "name": "Seasonal Special",
          "img": "https://upload.wikimedia.org/wikipedia/commons/1/12/Bistecca_alla_fiorentina-01.jpg",
          "desc": "Ask your server for today's recommendation."
        },
        {
          "name": "Antipasto",
          "img": "https://upload.wikimedia.org/wikipedia/commons/1/12/Bistecca_alla_fiorentina-01.jpg",
          "desc": "Regional starter — share if dining as a group."
        },
        {
          "name": "Primo",
          "img": "https://upload.wikimedia.org/wikipedia/commons/1/12/Bistecca_alla_fiorentina-01.jpg",
          "desc": "Classic Italian first course."
        },
        {
          "name": "Dolce",
          "img": "https://upload.wikimedia.org/wikipedia/commons/1/12/Bistecca_alla_fiorentina-01.jpg",
          "desc": "Finish with something sweet — tiramisu if available."
        }
      ],
      "photos": {
        "signature": "https://upload.wikimedia.org/wikipedia/commons/1/12/Bistecca_alla_fiorentina-01.jpg",
        "interior": "https://upload.wikimedia.org/wikipedia/commons/1/12/Bistecca_alla_fiorentina-01.jpg",
        "exterior": "https://upload.wikimedia.org/wikipedia/commons/1/12/Bistecca_alla_fiorentina-01.jpg",
        "dessert": "https://upload.wikimedia.org/wikipedia/commons/1/12/Bistecca_alla_fiorentina-01.jpg",
        "coffee": "https://upload.wikimedia.org/wikipedia/commons/1/12/Bistecca_alla_fiorentina-01.jpg"
      }
    },
    {
      "name": "Osteria delle Tre Panche",
      "category": "Tuscan · Truffle",
      "address": "Via delle Tre Panche 20 · Florence",
      "price": "€50–80/head",
      "famous": "Truffle Pasta · Tagliolini al tartufo",
      "halal": false,
      "vegetarian": true,
      "reservation": "Essential",
      "wait": "0 with booking",
      "michelin": "—",
      "kidsFriendly": "Yes",
      "dressCode": "Smart casual",
      "tip": "Tiny room, truffle shaved at the table. Book weeks ahead in autumn truffle season.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Osteria%20delle%20Tre%20Panche%20Florence%20Italy",
      "bookUrl": "https://www.google.com/maps/search/?api=1&query=Osteria%20delle%20Tre%20Panche%20Florence%20Italy",
      "dishes": [
        {
          "name": "Truffle Pasta · Tagliolini al tartufo",
          "img": "https://upload.wikimedia.org/wikipedia/commons/2/26/Truffe_noire_du_P%C3%A9rigord.jpg",
          "desc": "Signature dish at Osteria delle Tre Panche."
        },
        {
          "name": "Seasonal Special",
          "img": "https://upload.wikimedia.org/wikipedia/commons/2/26/Truffe_noire_du_P%C3%A9rigord.jpg",
          "desc": "Ask your server for today's recommendation."
        },
        {
          "name": "Antipasto",
          "img": "https://upload.wikimedia.org/wikipedia/commons/6/60/Osso_buco_with_truffle_risotto.jpg",
          "desc": "Regional starter — share if dining as a group."
        },
        {
          "name": "Primo",
          "img": "https://upload.wikimedia.org/wikipedia/commons/6/60/Osso_buco_with_truffle_risotto.jpg",
          "desc": "Classic Italian first course."
        },
        {
          "name": "Dolce",
          "img": "https://upload.wikimedia.org/wikipedia/commons/2/26/Truffe_noire_du_P%C3%A9rigord.jpg",
          "desc": "Finish with something sweet — tiramisu if available."
        }
      ],
      "photos": {
        "signature": "https://upload.wikimedia.org/wikipedia/commons/2/26/Truffe_noire_du_P%C3%A9rigord.jpg",
        "interior": "https://upload.wikimedia.org/wikipedia/commons/2/26/Truffe_noire_du_P%C3%A9rigord.jpg",
        "exterior": "https://upload.wikimedia.org/wikipedia/commons/6/60/Osso_buco_with_truffle_risotto.jpg",
        "dessert": "https://upload.wikimedia.org/wikipedia/commons/6/60/Osso_buco_with_truffle_risotto.jpg",
        "coffee": "https://upload.wikimedia.org/wikipedia/commons/2/26/Truffe_noire_du_P%C3%A9rigord.jpg"
      }
    },
    {
      "name": "Roscioli Salumeria",
      "category": "Roman · Pasta",
      "address": "Via dei Giubbonari 21 · Rome",
      "price": "€35–55/head",
      "famous": "Carbonara · Cacio e Pepe · Amatriciana",
      "halal": false,
      "vegetarian": true,
      "reservation": "Essential 2+ weeks",
      "wait": "0 with booking",
      "michelin": "—",
      "kidsFriendly": "Yes",
      "dressCode": "Smart casual",
      "tip": "The Roman pasta trinity done perfectly. Carbonara with guanciale, Cacio e Pepe with Pecorino Romano.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Roscioli%20Salumeria%20Rome%20Italy",
      "bookUrl": "https://www.google.com/maps/search/?api=1&query=Roscioli%20Salumeria%20Rome%20Italy",
      "dishes": [
        {
          "name": "Carbonara · Cacio e Pepe · Amatriciana",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Espaguetis_carbonara.jpg/960px-Espaguetis_carbonara.jpg",
          "desc": "Signature dish at Roscioli Salumeria."
        },
        {
          "name": "Seasonal Special",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Spaghetti_alla_Carbonara.jpg/960px-Spaghetti_alla_Carbonara.jpg",
          "desc": "Ask your server for today's recommendation."
        },
        {
          "name": "Antipasto",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Stazione_di_Carbonara_Scrivia_1.JPG/960px-Stazione_di_Carbonara_Scrivia_1.JPG",
          "desc": "Regional starter — share if dining as a group."
        },
        {
          "name": "Primo",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Stazione_di_Carbonara_Scrivia_1.JPG/960px-Stazione_di_Carbonara_Scrivia_1.JPG",
          "desc": "Classic Italian first course."
        },
        {
          "name": "Dolce",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Espaguetis_carbonara.jpg/960px-Espaguetis_carbonara.jpg",
          "desc": "Finish with something sweet — tiramisu if available."
        }
      ],
      "photos": {
        "signature": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Espaguetis_carbonara.jpg/960px-Espaguetis_carbonara.jpg",
        "interior": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Spaghetti_alla_Carbonara.jpg/960px-Spaghetti_alla_Carbonara.jpg",
        "exterior": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Stazione_di_Carbonara_Scrivia_1.JPG/960px-Stazione_di_Carbonara_Scrivia_1.JPG",
        "dessert": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Stazione_di_Carbonara_Scrivia_1.JPG/960px-Stazione_di_Carbonara_Scrivia_1.JPG",
        "coffee": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Spaghetti_alla_Carbonara.jpg/960px-Spaghetti_alla_Carbonara.jpg"
      }
    },
    {
      "name": "Supplizio",
      "category": "Roman · Street Food",
      "address": "Via dei Banchi Vecchi 143 · Rome",
      "price": "€12–25/head",
      "famous": "Supplì · Fried rice balls",
      "halal": false,
      "vegetarian": true,
      "reservation": "Walk-in",
      "wait": "10–15 min",
      "michelin": "—",
      "kidsFriendly": "Yes",
      "dressCode": "Smart casual",
      "tip": "Modern take on Supplì — Rome's answer to arancini. Try the cacio e pepe version.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Supplizio%20Rome%20Italy",
      "bookUrl": "https://www.google.com/maps/search/?api=1&query=Supplizio%20Rome%20Italy",
      "dishes": [
        {
          "name": "Supplì · Fried rice balls",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Suppl%C3%AC.jpg/960px-Suppl%C3%AC.jpg",
          "desc": "Signature dish at Supplizio."
        },
        {
          "name": "Seasonal Special",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Suppl%C3%AC.jpg/960px-Suppl%C3%AC.jpg",
          "desc": "Ask your server for today's recommendation."
        },
        {
          "name": "Antipasto",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Chiesa_di_San_Gaetano_Santa_Agata_Brescia.jpg/960px-Chiesa_di_San_Gaetano_Santa_Agata_Brescia.jpg",
          "desc": "Regional starter — share if dining as a group."
        },
        {
          "name": "Primo",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Italian_Suppl%C3%AC.jpg/960px-Italian_Suppl%C3%AC.jpg",
          "desc": "Classic Italian first course."
        },
        {
          "name": "Dolce",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Suppl%C3%AC.jpg/960px-Suppl%C3%AC.jpg",
          "desc": "Finish with something sweet — tiramisu if available."
        }
      ],
      "photos": {
        "signature": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Suppl%C3%AC.jpg/960px-Suppl%C3%AC.jpg",
        "interior": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Suppl%C3%AC.jpg/960px-Suppl%C3%AC.jpg",
        "exterior": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Chiesa_di_San_Gaetano_Santa_Agata_Brescia.jpg/960px-Chiesa_di_San_Gaetano_Santa_Agata_Brescia.jpg",
        "dessert": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Italian_Suppl%C3%AC.jpg/960px-Italian_Suppl%C3%AC.jpg",
        "coffee": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Suppl%C3%AC.jpg/960px-Suppl%C3%AC.jpg"
      }
    },
    {
      "name": "Luini Panzerotti",
      "category": "Milan · Street Food",
      "address": "Via Santa Radegonda 16 · Milan",
      "price": "€5–12/head",
      "famous": "Panzerotti · fried calzone",
      "halal": false,
      "vegetarian": true,
      "reservation": "Walk-in · expect a queue",
      "wait": "15–30 min at 13:00",
      "michelin": "—",
      "kidsFriendly": "Yes",
      "dressCode": "Casual",
      "tip": "Milan institution since 1888. Grab a panzerotti to go and eat in the Duomo piazza.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Luini%20Panzerotti%20Milan%20Italy",
      "bookUrl": "https://www.google.com/maps/search/?api=1&query=Luini%20Panzerotti%20Milan%20Italy",
      "dishes": [
        {
          "name": "Panzerotti · fried calzone",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Panzerotti_chez_PanzerotTiamo_%28Lyon%29_-_2.jpg/960px-Panzerotti_chez_PanzerotTiamo_%28Lyon%29_-_2.jpg",
          "desc": "Signature dish at Luini Panzerotti."
        },
        {
          "name": "Seasonal Special",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Calzone_fritto.jpg/960px-Calzone_fritto.jpg",
          "desc": "Ask your server for today's recommendation."
        },
        {
          "name": "Antipasto",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Panzerotto_chez_PanzerotTiamo_%28Lyon%29.jpg/960px-Panzerotto_chez_PanzerotTiamo_%28Lyon%29.jpg",
          "desc": "Regional starter — share if dining as a group."
        },
        {
          "name": "Primo",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Panzerotto_chez_PanzerotTiamo_%28Lyon%29.jpg/960px-Panzerotto_chez_PanzerotTiamo_%28Lyon%29.jpg",
          "desc": "Classic Italian first course."
        },
        {
          "name": "Dolce",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Panzerotti_chez_PanzerotTiamo_%28Lyon%29_-_2.jpg/960px-Panzerotti_chez_PanzerotTiamo_%28Lyon%29_-_2.jpg",
          "desc": "Finish with something sweet — tiramisu if available."
        }
      ],
      "photos": {
        "signature": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Panzerotti_chez_PanzerotTiamo_%28Lyon%29_-_2.jpg/960px-Panzerotti_chez_PanzerotTiamo_%28Lyon%29_-_2.jpg",
        "interior": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Calzone_fritto.jpg/960px-Calzone_fritto.jpg",
        "exterior": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Panzerotto_chez_PanzerotTiamo_%28Lyon%29.jpg/960px-Panzerotto_chez_PanzerotTiamo_%28Lyon%29.jpg",
        "dessert": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Panzerotto_chez_PanzerotTiamo_%28Lyon%29.jpg/960px-Panzerotto_chez_PanzerotTiamo_%28Lyon%29.jpg",
        "coffee": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Calzone_fritto.jpg/960px-Calzone_fritto.jpg"
      }
    },
    {
      "name": "Marchesi 1824",
      "category": "Café · Coffee",
      "address": "Via Santa Maria alla Porta 11 · Milan",
      "price": "€4–€12",
      "famous": "Italian Pastries · Espresso",
      "halal": false,
      "vegetarian": true,
      "reservation": "Walk-in",
      "wait": "5–15 min at peak",
      "michelin": "—",
      "kidsFriendly": "Yes",
      "dressCode": "Casual",
      "tip": "Italian cafés are busiest 08:00–09:30 — arrive early or after 10:30 for a table.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Marchesi%201824%20Milan%20Italy",
      "bookUrl": "https://www.google.com/maps/search/?api=1&query=Marchesi%201824%20Milan%20Italy",
      "dishes": [
        {
          "name": "Italian Pastries · Espresso",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Galleria_Milano_%28179532365%29.jpeg/960px-Galleria_Milano_%28179532365%29.jpeg",
          "desc": "House specialty — order this first."
        },
        {
          "name": "Espresso",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Galleria_Milano_%28179532365%29.jpeg/960px-Galleria_Milano_%28179532365%29.jpeg",
          "desc": "Stand at the bar like a local — often cheaper."
        },
        {
          "name": "Cappuccino",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Galleria_Milano_%28179532365%29.jpeg/960px-Galleria_Milano_%28179532365%29.jpeg",
          "desc": "Before 11:00 only, per Italian custom."
        },
        {
          "name": "Cornetto",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Glass_fome_of_the_Galleria_Vittorio_Emanuele_II_in_Milan.JPG/960px-Glass_fome_of_the_Galleria_Vittorio_Emanuele_II_in_Milan.JPG",
          "desc": "Fresh pastry with your coffee."
        },
        {
          "name": "Granita",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Galleria_Milano_%28179532365%29.jpeg/960px-Galleria_Milano_%28179532365%29.jpeg",
          "desc": "Iced treat in summer months."
        }
      ],
      "photos": {
        "signature": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Galleria_Milano_%28179532365%29.jpeg/960px-Galleria_Milano_%28179532365%29.jpeg",
        "interior": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Galleria_Milano_%28179532365%29.jpeg/960px-Galleria_Milano_%28179532365%29.jpeg",
        "exterior": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Galleria_Milano_%28179532365%29.jpeg/960px-Galleria_Milano_%28179532365%29.jpeg",
        "dessert": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Glass_fome_of_the_Galleria_Vittorio_Emanuele_II_in_Milan.JPG/960px-Glass_fome_of_the_Galleria_Vittorio_Emanuele_II_in_Milan.JPG",
        "coffee": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Galleria_Milano_%28179532365%29.jpeg/960px-Galleria_Milano_%28179532365%29.jpeg"
      }
    },
    {
      "name": "Pasticceria Monti",
      "category": "Café · Coffee",
      "address": "Via Garibaldi 10 · Como",
      "price": "€4–€12",
      "famous": "Lake Como pastries · meringue",
      "halal": false,
      "vegetarian": true,
      "reservation": "Walk-in",
      "wait": "5–15 min at peak",
      "michelin": "—",
      "kidsFriendly": "Yes",
      "dressCode": "Casual",
      "tip": "Italian cafés are busiest 08:00–09:30 — arrive early or after 10:30 for a table.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Pasticceria%20Monti%20Como%20Italy",
      "bookUrl": "https://www.google.com/maps/search/?api=1&query=Pasticceria%20Monti%20Como%20Italy",
      "dishes": [
        {
          "name": "Lake Como pastries · meringue",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Como_and_its_lake.jpg/960px-Como_and_its_lake.jpg",
          "desc": "House specialty — order this first."
        },
        {
          "name": "Espresso",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Zeppula.jpg/960px-Zeppula.jpg",
          "desc": "Stand at the bar like a local — often cheaper."
        },
        {
          "name": "Cappuccino",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Como_-_Villa_Olmo-_Ceiling.jpg/960px-Como_-_Villa_Olmo-_Ceiling.jpg",
          "desc": "Before 11:00 only, per Italian custom."
        },
        {
          "name": "Cornetto",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Como_-_Villa_Olmo-_Ceiling.jpg/960px-Como_-_Villa_Olmo-_Ceiling.jpg",
          "desc": "Fresh pastry with your coffee."
        },
        {
          "name": "Granita",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Como_and_its_lake.jpg/960px-Como_and_its_lake.jpg",
          "desc": "Iced treat in summer months."
        }
      ],
      "photos": {
        "signature": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Como_and_its_lake.jpg/960px-Como_and_its_lake.jpg",
        "interior": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Zeppula.jpg/960px-Zeppula.jpg",
        "exterior": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Como_-_Villa_Olmo-_Ceiling.jpg/960px-Como_-_Villa_Olmo-_Ceiling.jpg",
        "dessert": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Como_-_Villa_Olmo-_Ceiling.jpg/960px-Como_-_Villa_Olmo-_Ceiling.jpg",
        "coffee": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Zeppula.jpg/960px-Zeppula.jpg"
      }
    },
    {
      "name": "Caffè Florian",
      "category": "Café · Coffee",
      "address": "Piazza San Marco 57 · Venice",
      "price": "€4–€12",
      "famous": "Historic café · hot chocolate",
      "halal": false,
      "vegetarian": true,
      "reservation": "Walk-in",
      "wait": "5–15 min at peak",
      "michelin": "—",
      "kidsFriendly": "Yes",
      "dressCode": "Casual",
      "tip": "Italian cafés are busiest 08:00–09:30 — arrive early or after 10:30 for a table.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Caff%C3%A8%20Florian%20Venice%20Italy",
      "bookUrl": "https://www.google.com/maps/search/?api=1&query=Caff%C3%A8%20Florian%20Venice%20Italy",
      "dishes": [
        {
          "name": "Historic café · hot chocolate",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/9626_-_Venezia_-_Caff%C3%A8_Florian_-_Foto_Giovanni_Dall%27Orto%2C_12-Aug-2007.jpg/960px-9626_-_Venezia_-_Caff%C3%A8_Florian_-_Foto_Giovanni_Dall%27Orto%2C_12-Aug-2007.jpg",
          "desc": "House specialty — order this first."
        },
        {
          "name": "Espresso",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/9626_-_Venezia_-_Caff%C3%A8_Florian_-_Foto_Giovanni_Dall%27Orto%2C_12-Aug-2007.jpg/960px-9626_-_Venezia_-_Caff%C3%A8_Florian_-_Foto_Giovanni_Dall%27Orto%2C_12-Aug-2007.jpg",
          "desc": "Stand at the bar like a local — often cheaper."
        },
        {
          "name": "Cappuccino",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Waiting_for_customers%2C_Caff%C3%A8_Florian%2C_Piazza_San_Marco_%28542063685%29.jpg/960px-Waiting_for_customers%2C_Caff%C3%A8_Florian%2C_Piazza_San_Marco_%28542063685%29.jpg",
          "desc": "Before 11:00 only, per Italian custom."
        },
        {
          "name": "Cornetto",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Waiting_for_customers%2C_Caff%C3%A8_Florian%2C_Piazza_San_Marco_%28542063685%29.jpg/960px-Waiting_for_customers%2C_Caff%C3%A8_Florian%2C_Piazza_San_Marco_%28542063685%29.jpg",
          "desc": "Fresh pastry with your coffee."
        },
        {
          "name": "Granita",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/9626_-_Venezia_-_Caff%C3%A8_Florian_-_Foto_Giovanni_Dall%27Orto%2C_12-Aug-2007.jpg/960px-9626_-_Venezia_-_Caff%C3%A8_Florian_-_Foto_Giovanni_Dall%27Orto%2C_12-Aug-2007.jpg",
          "desc": "Iced treat in summer months."
        }
      ],
      "photos": {
        "signature": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/9626_-_Venezia_-_Caff%C3%A8_Florian_-_Foto_Giovanni_Dall%27Orto%2C_12-Aug-2007.jpg/960px-9626_-_Venezia_-_Caff%C3%A8_Florian_-_Foto_Giovanni_Dall%27Orto%2C_12-Aug-2007.jpg",
        "interior": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/9626_-_Venezia_-_Caff%C3%A8_Florian_-_Foto_Giovanni_Dall%27Orto%2C_12-Aug-2007.jpg/960px-9626_-_Venezia_-_Caff%C3%A8_Florian_-_Foto_Giovanni_Dall%27Orto%2C_12-Aug-2007.jpg",
        "exterior": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Waiting_for_customers%2C_Caff%C3%A8_Florian%2C_Piazza_San_Marco_%28542063685%29.jpg/960px-Waiting_for_customers%2C_Caff%C3%A8_Florian%2C_Piazza_San_Marco_%28542063685%29.jpg",
        "dessert": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Waiting_for_customers%2C_Caff%C3%A8_Florian%2C_Piazza_San_Marco_%28542063685%29.jpg/960px-Waiting_for_customers%2C_Caff%C3%A8_Florian%2C_Piazza_San_Marco_%28542063685%29.jpg",
        "coffee": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/9626_-_Venezia_-_Caff%C3%A8_Florian_-_Foto_Giovanni_Dall%27Orto%2C_12-Aug-2007.jpg/960px-9626_-_Venezia_-_Caff%C3%A8_Florian_-_Foto_Giovanni_Dall%27Orto%2C_12-Aug-2007.jpg"
      }
    },
    {
      "name": "Ditta Artigianale",
      "category": "Café · Coffee",
      "address": "Via dei Neri 32 · Florence",
      "price": "€4–€12",
      "famous": "Specialty coffee · brunch",
      "halal": false,
      "vegetarian": true,
      "reservation": "Walk-in",
      "wait": "5–15 min at peak",
      "michelin": "—",
      "kidsFriendly": "Yes",
      "dressCode": "Casual",
      "tip": "Italian cafés are busiest 08:00–09:30 — arrive early or after 10:30 for a table.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Ditta%20Artigianale%20Florence%20Italy",
      "bookUrl": "https://www.google.com/maps/search/?api=1&query=Ditta%20Artigianale%20Florence%20Italy",
      "dishes": [
        {
          "name": "Specialty coffee · brunch",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/FirenzeDec092023_01.jpg/960px-FirenzeDec092023_01.jpg",
          "desc": "House specialty — order this first."
        },
        {
          "name": "Espresso",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Espresso_BW_1.jpg/960px-Espresso_BW_1.jpg",
          "desc": "Stand at the bar like a local — often cheaper."
        },
        {
          "name": "Cappuccino",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/FlorenceSkyline.jpg/960px-FlorenceSkyline.jpg",
          "desc": "Before 11:00 only, per Italian custom."
        },
        {
          "name": "Cornetto",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/FlorenceSkyline.jpg/960px-FlorenceSkyline.jpg",
          "desc": "Fresh pastry with your coffee."
        },
        {
          "name": "Granita",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/FirenzeDec092023_01.jpg/960px-FirenzeDec092023_01.jpg",
          "desc": "Iced treat in summer months."
        }
      ],
      "photos": {
        "signature": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/FirenzeDec092023_01.jpg/960px-FirenzeDec092023_01.jpg",
        "interior": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Espresso_BW_1.jpg/960px-Espresso_BW_1.jpg",
        "exterior": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/FlorenceSkyline.jpg/960px-FlorenceSkyline.jpg",
        "dessert": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/FlorenceSkyline.jpg/960px-FlorenceSkyline.jpg",
        "coffee": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Espresso_BW_1.jpg/960px-Espresso_BW_1.jpg"
      }
    },
    {
      "name": "Sant'Eustachio Il Caffè",
      "category": "Café · Coffee",
      "address": "Piazza di Sant'Eustachio 82 · Rome",
      "price": "€4–€12",
      "famous": "Gran caffè · espresso",
      "halal": false,
      "vegetarian": true,
      "reservation": "Walk-in",
      "wait": "5–15 min at peak",
      "michelin": "—",
      "kidsFriendly": "Yes",
      "dressCode": "Casual",
      "tip": "Italian cafés are busiest 08:00–09:30 — arrive early or after 10:30 for a table.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Sant'Eustachio%20Il%20Caff%C3%A8%20Rome%20Italy",
      "bookUrl": "https://www.google.com/maps/search/?api=1&query=Sant'Eustachio%20Il%20Caff%C3%A8%20Rome%20Italy",
      "dishes": [
        {
          "name": "Gran caffè · espresso",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Palazzo_della_Sapienza.jpg/960px-Palazzo_della_Sapienza.jpg",
          "desc": "House specialty — order this first."
        },
        {
          "name": "Espresso",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Caff%C3%A8_Sant%27Eustachio.JPG/960px-Caff%C3%A8_Sant%27Eustachio.JPG",
          "desc": "Stand at the bar like a local — often cheaper."
        },
        {
          "name": "Cappuccino",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Fa%C3%A7ade%2C_place_du_Pantheon%2C_Rome%2C_Italy.jpg/960px-Fa%C3%A7ade%2C_place_du_Pantheon%2C_Rome%2C_Italy.jpg",
          "desc": "Before 11:00 only, per Italian custom."
        },
        {
          "name": "Cornetto",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Fa%C3%A7ade%2C_place_du_Pantheon%2C_Rome%2C_Italy.jpg/960px-Fa%C3%A7ade%2C_place_du_Pantheon%2C_Rome%2C_Italy.jpg",
          "desc": "Fresh pastry with your coffee."
        },
        {
          "name": "Granita",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Palazzo_della_Sapienza.jpg/960px-Palazzo_della_Sapienza.jpg",
          "desc": "Iced treat in summer months."
        }
      ],
      "photos": {
        "signature": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Palazzo_della_Sapienza.jpg/960px-Palazzo_della_Sapienza.jpg",
        "interior": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Caff%C3%A8_Sant%27Eustachio.JPG/960px-Caff%C3%A8_Sant%27Eustachio.JPG",
        "exterior": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Fa%C3%A7ade%2C_place_du_Pantheon%2C_Rome%2C_Italy.jpg/960px-Fa%C3%A7ade%2C_place_du_Pantheon%2C_Rome%2C_Italy.jpg",
        "dessert": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Fa%C3%A7ade%2C_place_du_Pantheon%2C_Rome%2C_Italy.jpg/960px-Fa%C3%A7ade%2C_place_du_Pantheon%2C_Rome%2C_Italy.jpg",
        "coffee": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Caff%C3%A8_Sant%27Eustachio.JPG/960px-Caff%C3%A8_Sant%27Eustachio.JPG"
      }
    },
    {
      "name": "Giolitti",
      "category": "Café · Coffee",
      "address": "Via degli Uffici del Vicario 40 · Rome",
      "price": "€4–€12",
      "famous": "Gelato · historic pasticceria",
      "halal": false,
      "vegetarian": true,
      "reservation": "Walk-in",
      "wait": "5–15 min at peak",
      "michelin": "—",
      "kidsFriendly": "Yes",
      "dressCode": "Casual",
      "tip": "Italian cafés are busiest 08:00–09:30 — arrive early or after 10:30 for a table.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Giolitti%20Rome%20Italy",
      "bookUrl": "https://www.google.com/maps/search/?api=1&query=Giolitti%20Rome%20Italy",
      "dishes": [
        {
          "name": "Gelato · historic pasticceria",
          "img": "https://upload.wikimedia.org/wikipedia/commons/4/47/CafeMia.jpg",
          "desc": "House specialty — order this first."
        },
        {
          "name": "Espresso",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Giolitti_in_Rome.jpg/960px-Giolitti_in_Rome.jpg",
          "desc": "Stand at the bar like a local — often cheaper."
        },
        {
          "name": "Cappuccino",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Esquilino-San_Giovanni_%2C_Rome_-_Italy_%286212574084%29.jpg/960px-Esquilino-San_Giovanni_%2C_Rome_-_Italy_%286212574084%29.jpg",
          "desc": "Before 11:00 only, per Italian custom."
        },
        {
          "name": "Cornetto",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Coppette_gelato.jpg/960px-Coppette_gelato.jpg",
          "desc": "Fresh pastry with your coffee."
        },
        {
          "name": "Granita",
          "img": "https://upload.wikimedia.org/wikipedia/commons/4/47/CafeMia.jpg",
          "desc": "Iced treat in summer months."
        }
      ],
      "photos": {
        "signature": "https://upload.wikimedia.org/wikipedia/commons/4/47/CafeMia.jpg",
        "interior": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Giolitti_in_Rome.jpg/960px-Giolitti_in_Rome.jpg",
        "exterior": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Esquilino-San_Giovanni_%2C_Rome_-_Italy_%286212574084%29.jpg/960px-Esquilino-San_Giovanni_%2C_Rome_-_Italy_%286212574084%29.jpg",
        "dessert": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Coppette_gelato.jpg/960px-Coppette_gelato.jpg",
        "coffee": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Giolitti_in_Rome.jpg/960px-Giolitti_in_Rome.jpg"
      }
    }
  ],
  "itineraries": [
    {
      "day": 1,
      "title": "Milan — Fashion & Architecture",
      "color": "#b45309",
      "routePreview": "7 stops · start 08:30 · end 21:00 · ≈ 4 km walking",
      "mapUrl": "https://www.google.com/maps/dir/Marchesi+1824+Milan/Duomo+di+Milano/Starbucks+Reserve+Roastery+Milan/Luini+Milan/Galleria+Vittorio+Emanuele+II/Castello+Sforzesco/Navigli+Milan",
      "budget": {
        "budget": {
          "total": "€100–150 per person",
          "includes": [
            "2nd-class regional trains",
            "Panzerotti & pizza al taglio",
            "Free churches & piazzas",
            "One paid museum"
          ]
        },
        "mid": {
          "total": "€220–350 per person",
          "includes": [
            "Frecciarossa 2nd class",
            "Sit-down trattoria meals",
            "Skip-the-line tickets",
            "Gondola or ferry"
          ]
        },
        "luxury": {
          "total": "€600–1,200 per person",
          "includes": [
            "Frecciarossa Business",
            "Michelin & lakeside dining",
            "Private guides",
            "5-star palazzo hotels"
          ]
        }
      },
      "photos": [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Galleria_Milano_%28179532365%29.jpeg/960px-Galleria_Milano_%28179532365%29.jpeg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Il_Duomo_di_Milano_-_July_2026.jpg/960px-Il_Duomo_di_Milano_-_July_2026.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Panzerotti_chez_PanzerotTiamo_%28Lyon%29_-_2.jpg/960px-Panzerotti_chez_PanzerotTiamo_%28Lyon%29_-_2.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/%28Venice%29_Doge%27s_Palace_and_campanile_of_St._Mark%27s_Basilica_facing_the_sea.jpg/960px-%28Venice%29_Doge%27s_Palace_and_campanile_of_St._Mark%27s_Basilica_facing_the_sea.jpg"
      ],
      "stops": [
        {
          "time": "08:30",
          "timeOfDay": "morning",
          "name": "Marchesi 1824",
          "desc": "Italian pastries & espresso to start",
          "transit": "Walk from hotel",
          "icon": "walk",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Marchesi%201824%20Milan%20Italy"
        },
        {
          "time": "09:30",
          "timeOfDay": "morning",
          "name": "Duomo di Milano",
          "desc": "Cathedral & rooftop terraces · 2 hours",
          "transit": "Walk 5 min",
          "icon": "walk",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Duomo%20di%20Milano%20Milan%20Italy"
        },
        {
          "time": "12:00",
          "timeOfDay": "afternoon",
          "name": "Starbucks Reserve Roastery",
          "desc": "One of the world's most beautiful Starbucks",
          "transit": "Walk 8 min",
          "icon": "walk",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Starbucks%20Reserve%20Roastery%20Milan%20Italy"
        },
        {
          "time": "13:30",
          "timeOfDay": "afternoon",
          "name": "Luini Panzerotti",
          "desc": "Milan institution since 1888 · lunch on the go",
          "transit": "Walk 6 min",
          "icon": "walk",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Luini%20Panzerotti%20Milan%20Italy"
        },
        {
          "time": "15:00",
          "timeOfDay": "afternoon",
          "name": "Galleria Vittorio Emanuele II",
          "desc": "Luxury shopping under the glass dome",
          "transit": "Walk 3 min",
          "icon": "walk",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Galleria%20Vittorio%20Emanuele%20II%20Milan%20Italy"
        },
        {
          "time": "17:00",
          "timeOfDay": "evening",
          "name": "Sforza Castle",
          "desc": "Renaissance fortress & Parco Sempione",
          "transit": "Walk 12 min",
          "icon": "walk",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Sforza%20Castle%20Milan%20Italy"
        },
        {
          "time": "19:30",
          "timeOfDay": "night",
          "name": "Navigli District",
          "desc": "Aperitivo & dinner by the canals",
          "transit": "Metro M2 Porta Genova",
          "icon": "metro",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Navigli%20District%20Milan%20Italy"
        }
      ]
    },
    {
      "day": 2,
      "title": "Lake Como — Lakes & Villages",
      "color": "#2d6a4f",
      "routePreview": "5 stops · start 08:00 · end 19:00 · train + ferry",
      "mapUrl": "https://www.google.com/maps/dir/Milano+Centrale/Como+Cathedral/Bellagio/Villa+Melzi+Gardens/Varenna/Milano+Centrale",
      "budget": {
        "budget": {
          "total": "€100–150 per person",
          "includes": [
            "2nd-class regional trains",
            "Panzerotti & pizza al taglio",
            "Free churches & piazzas",
            "One paid museum"
          ]
        },
        "mid": {
          "total": "€220–350 per person",
          "includes": [
            "Frecciarossa 2nd class",
            "Sit-down trattoria meals",
            "Skip-the-line tickets",
            "Gondola or ferry"
          ]
        },
        "luxury": {
          "total": "€600–1,200 per person",
          "includes": [
            "Frecciarossa Business",
            "Michelin & lakeside dining",
            "Private guides",
            "5-star palazzo hotels"
          ]
        }
      },
      "photos": [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Cathedral_of_Como_%2811%29.jpg/960px-Cathedral_of_Como_%2811%29.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Bellagio_-_Albergo_Genazzini_%26_Metropole_from_Lake_Como.jpg/960px-Bellagio_-_Albergo_Genazzini_%26_Metropole_from_Lake_Como.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Bellagio_-_Villa_Melzi_d%27Eril_-_2023-09-01_00-15-09_003.JPG/960px-Bellagio_-_Villa_Melzi_d%27Eril_-_2023-09-01_00-15-09_003.JPG",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/%28Venice%29_Doge%27s_Palace_and_campanile_of_St._Mark%27s_Basilica_facing_the_sea.jpg/960px-%28Venice%29_Doge%27s_Palace_and_campanile_of_St._Mark%27s_Basilica_facing_the_sea.jpg"
      ],
      "stops": [
        {
          "time": "08:00",
          "timeOfDay": "morning",
          "name": "Milan → Como",
          "desc": "Frecciarossa / regional · 40 min",
          "transit": "Train from Milano Centrale",
          "icon": "train",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Milan%20%E2%86%92%20Como%20Como%20Italy"
        },
        {
          "time": "09:30",
          "timeOfDay": "morning",
          "name": "Como Cathedral",
          "desc": "Old town & lakeside promenade",
          "transit": "Walk 5 min from station",
          "icon": "walk",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Como%20Cathedral%20Como%20Italy"
        },
        {
          "time": "11:00",
          "timeOfDay": "afternoon",
          "name": "Bellagio",
          "desc": "Ferry to the pearl of Lake Como · lunch",
          "transit": "Ferry 1 hr",
          "icon": "boat",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Bellagio%20Como%20Italy"
        },
        {
          "time": "14:00",
          "timeOfDay": "afternoon",
          "name": "Villa Melzi Gardens",
          "desc": "Romantic lakeside gardens",
          "transit": "Walk 10 min",
          "icon": "walk",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Villa%20Melzi%20Gardens%20Como%20Italy"
        },
        {
          "time": "16:30",
          "timeOfDay": "evening",
          "name": "Varenna",
          "desc": "Golden-hour village stroll before return",
          "transit": "Ferry 30 min",
          "icon": "boat",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Varenna%20Como%20Italy"
        },
        {
          "time": "19:00",
          "timeOfDay": "night",
          "name": "Return to Milan",
          "desc": "Evening train back to base",
          "transit": "Train 40 min",
          "icon": "train",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Return%20to%20Milan%20Milan%20Italy"
        }
      ]
    },
    {
      "day": 3,
      "title": "Verona → Venice",
      "color": "#9a3412",
      "routePreview": "6 stops · start 08:00 · end 20:30 · two train legs",
      "mapUrl": "https://www.google.com/maps/dir/Milano+Centrale/Casa+di+Giulietta+Verona/Piazza+delle+Erbe+Verona/Arena+di+Verona/Venezia+Santa+Lucia/Grand+Canal+Venice",
      "budget": {
        "budget": {
          "total": "€100–150 per person",
          "includes": [
            "2nd-class regional trains",
            "Panzerotti & pizza al taglio",
            "Free churches & piazzas",
            "One paid museum"
          ]
        },
        "mid": {
          "total": "€220–350 per person",
          "includes": [
            "Frecciarossa 2nd class",
            "Sit-down trattoria meals",
            "Skip-the-line tickets",
            "Gondola or ferry"
          ]
        },
        "luxury": {
          "total": "€600–1,200 per person",
          "includes": [
            "Frecciarossa Business",
            "Michelin & lakeside dining",
            "Private guides",
            "5-star palazzo hotels"
          ]
        }
      },
      "photos": [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Casa_di_Giulietta_%28Verona%29_-_Balcony.jpg/960px-Casa_di_Giulietta_%28Verona%29_-_Balcony.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Piazza_delle_Erbe_%28Verona%29.jpg/960px-Piazza_delle_Erbe_%28Verona%29.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Arena-XE3F2406a.jpg/960px-Arena-XE3F2406a.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/%28Venice%29_Doge%27s_Palace_and_campanile_of_St._Mark%27s_Basilica_facing_the_sea.jpg/960px-%28Venice%29_Doge%27s_Palace_and_campanile_of_St._Mark%27s_Basilica_facing_the_sea.jpg"
      ],
      "stops": [
        {
          "time": "08:00",
          "timeOfDay": "morning",
          "name": "Milan → Verona",
          "desc": "Frecciarossa · 1 hr 15 min",
          "transit": "Train from Milano Centrale",
          "icon": "train",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Milan%20%E2%86%92%20Verona%20Verona%20Italy"
        },
        {
          "time": "09:30",
          "timeOfDay": "morning",
          "name": "Juliet's House",
          "desc": "Balcony & love-letter courtyard",
          "transit": "Walk 15 min",
          "icon": "walk",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Juliet's%20House%20Verona%20Italy"
        },
        {
          "time": "10:45",
          "timeOfDay": "morning",
          "name": "Piazza delle Erbe",
          "desc": "Verona's market square & frescoed façades",
          "transit": "Walk 3 min",
          "icon": "walk",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Piazza%20delle%20Erbe%20Verona%20Italy"
        },
        {
          "time": "11:30",
          "timeOfDay": "afternoon",
          "name": "Arena di Verona",
          "desc": "Roman amphitheatre still hosting opera",
          "transit": "Walk 5 min",
          "icon": "walk",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Arena%20di%20Verona%20Verona%20Italy"
        },
        {
          "time": "15:00",
          "timeOfDay": "afternoon",
          "name": "Verona → Venice",
          "desc": "Frecciarossa · 1 hr 15 min",
          "transit": "Train to Venezia Santa Lucia",
          "icon": "train",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Verona%20%E2%86%92%20Venice%20Venice%20Italy"
        },
        {
          "time": "17:30",
          "timeOfDay": "evening",
          "name": "Grand Canal",
          "desc": "Vaporetto Line 1 · palazzo sunset",
          "transit": "Vaporetto",
          "icon": "boat",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Grand%20Canal%20Venice%20Italy"
        },
        {
          "time": "20:00",
          "timeOfDay": "night",
          "name": "Antiche Carampane",
          "desc": "Venetian seafood dinner",
          "transit": "Walk 12 min",
          "icon": "walk",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Antiche%20Carampane%20Venice%20Italy"
        }
      ]
    },
    {
      "day": 4,
      "title": "Venice — Canals & Islands",
      "color": "#0077b6",
      "routePreview": "6 stops · start 09:30 · end 19:30 · vaporetto day",
      "mapUrl": "https://www.google.com/maps/dir/St+Mark's+Basilica+Venice/Doge's+Palace+Venice/Rialto+Market+Venice/Grand+Canal+Venice/Burano/San+Marco+Venice",
      "budget": {
        "budget": {
          "total": "€100–150 per person",
          "includes": [
            "2nd-class regional trains",
            "Panzerotti & pizza al taglio",
            "Free churches & piazzas",
            "One paid museum"
          ]
        },
        "mid": {
          "total": "€220–350 per person",
          "includes": [
            "Frecciarossa 2nd class",
            "Sit-down trattoria meals",
            "Skip-the-line tickets",
            "Gondola or ferry"
          ]
        },
        "luxury": {
          "total": "€600–1,200 per person",
          "includes": [
            "Frecciarossa Business",
            "Michelin & lakeside dining",
            "Private guides",
            "5-star palazzo hotels"
          ]
        }
      },
      "photos": [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Venezia_Basilica_di_San_Marco_Fassade_2.jpg/960px-Venezia_Basilica_di_San_Marco_Fassade_2.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/%28Venice%29_Doge%27s_Palace_and_campanile_of_St._Mark%27s_Basilica_facing_the_sea.jpg/960px-%28Venice%29_Doge%27s_Palace_and_campanile_of_St._Mark%27s_Basilica_facing_the_sea.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Rialto_2025_4.jpg/960px-Rialto_2025_4.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/%28Venice%29_Doge%27s_Palace_and_campanile_of_St._Mark%27s_Basilica_facing_the_sea.jpg/960px-%28Venice%29_Doge%27s_Palace_and_campanile_of_St._Mark%27s_Basilica_facing_the_sea.jpg"
      ],
      "stops": [
        {
          "time": "09:30",
          "timeOfDay": "morning",
          "name": "St Mark's Basilica",
          "desc": "Golden mosaics · arrive at opening",
          "transit": "Vaporetto San Marco",
          "icon": "boat",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=St%20Mark's%20Basilica%20Venice%20Italy"
        },
        {
          "time": "11:00",
          "timeOfDay": "morning",
          "name": "Doge's Palace",
          "desc": "Bridge of Sighs & state rooms",
          "transit": "Walk 2 min",
          "icon": "walk",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Doge's%20Palace%20Venice%20Italy"
        },
        {
          "time": "13:00",
          "timeOfDay": "afternoon",
          "name": "Rialto Market",
          "desc": "Cicchetti lunch by the fish market",
          "transit": "Vaporetto 1 stop",
          "icon": "boat",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Rialto%20Market%20Venice%20Italy"
        },
        {
          "time": "15:00",
          "timeOfDay": "afternoon",
          "name": "Gondola Ride",
          "desc": "Classic 30-min glide through side canals",
          "transit": "Walk 5 min",
          "icon": "walk",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Gondola%20Ride%20Venice%20Italy"
        },
        {
          "time": "16:30",
          "timeOfDay": "evening",
          "name": "Burano",
          "desc": "Optional · rainbow fishing island",
          "transit": "Vaporetto 45 min",
          "icon": "boat",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Burano%20Venice%20Italy"
        },
        {
          "time": "18:30",
          "timeOfDay": "night",
          "name": "Grand Canal",
          "desc": "Sunset over the lagoon",
          "transit": "Vaporetto",
          "icon": "boat",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Grand%20Canal%20Venice%20Italy"
        }
      ]
    },
    {
      "day": 5,
      "title": "Florence — Renaissance",
      "color": "#92400e",
      "routePreview": "6 stops · start 08:00 · end 19:30 · ≈ 4 km walking",
      "mapUrl": "https://www.google.com/maps/dir/Venezia+Santa+Lucia/Duomo+di+Firenze/Piazza+della+Signoria/Uffizi+Gallery/Ponte+Vecchio/Piazzale+Michelangelo",
      "budget": {
        "budget": {
          "total": "€100–150 per person",
          "includes": [
            "2nd-class regional trains",
            "Panzerotti & pizza al taglio",
            "Free churches & piazzas",
            "One paid museum"
          ]
        },
        "mid": {
          "total": "€220–350 per person",
          "includes": [
            "Frecciarossa 2nd class",
            "Sit-down trattoria meals",
            "Skip-the-line tickets",
            "Gondola or ferry"
          ]
        },
        "luxury": {
          "total": "€600–1,200 per person",
          "includes": [
            "Frecciarossa Business",
            "Michelin & lakeside dining",
            "Private guides",
            "5-star palazzo hotels"
          ]
        }
      },
      "photos": [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Cattedrale_di_Santa_Maria_del_Fiore_%E2%80%93_Il_Duomo_di_Firenze.jpg/960px-Cattedrale_di_Santa_Maria_del_Fiore_%E2%80%93_Il_Duomo_di_Firenze.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Uffizi_Gallery_-_Daughter_of_Niobe_bent_by_terror.jpg/960px-Uffizi_Gallery_-_Daughter_of_Niobe_bent_by_terror.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/%28Venice%29_Doge%27s_Palace_and_campanile_of_St._Mark%27s_Basilica_facing_the_sea.jpg/960px-%28Venice%29_Doge%27s_Palace_and_campanile_of_St._Mark%27s_Basilica_facing_the_sea.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/%28Venice%29_Doge%27s_Palace_and_campanile_of_St._Mark%27s_Basilica_facing_the_sea.jpg/960px-%28Venice%29_Doge%27s_Palace_and_campanile_of_St._Mark%27s_Basilica_facing_the_sea.jpg"
      ],
      "stops": [
        {
          "time": "08:00",
          "timeOfDay": "morning",
          "name": "Venice → Florence",
          "desc": "Frecciarossa · 2 hours",
          "transit": "Train to Firenze SMN",
          "icon": "train",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Venice%20%E2%86%92%20Florence%20Florence%20Italy"
        },
        {
          "time": "10:30",
          "timeOfDay": "morning",
          "name": "Duomo di Firenze",
          "desc": "Brunelleschi's dome & baptistery",
          "transit": "Walk 12 min",
          "icon": "walk",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Duomo%20di%20Firenze%20Florence%20Italy"
        },
        {
          "time": "12:30",
          "timeOfDay": "afternoon",
          "name": "Piazza della Signoria",
          "desc": "Open-air sculpture & Palazzo Vecchio",
          "transit": "Walk 6 min",
          "icon": "walk",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Piazza%20della%20Signoria%20Florence%20Italy"
        },
        {
          "time": "14:00",
          "timeOfDay": "afternoon",
          "name": "Uffizi Gallery",
          "desc": "Botticelli, da Vinci & the Medici collection",
          "transit": "Walk 3 min",
          "icon": "walk",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Uffizi%20Gallery%20Florence%20Italy"
        },
        {
          "time": "16:30",
          "timeOfDay": "evening",
          "name": "Ponte Vecchio",
          "desc": "Goldsmiths bridge over the Arno",
          "transit": "Walk 5 min",
          "icon": "walk",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Ponte%20Vecchio%20Florence%20Italy"
        },
        {
          "time": "18:30",
          "timeOfDay": "night",
          "name": "Piazzale Michelangelo",
          "desc": "The definitive Florence sunset",
          "transit": "Bus 12 · 20 min uphill",
          "icon": "bus",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Piazzale%20Michelangelo%20Florence%20Italy"
        }
      ]
    },
    {
      "day": 6,
      "title": "Tuscany — Wine & Hilltowns",
      "color": "#2d6a4f",
      "routePreview": "Choose your adventure · day trip from Florence",
      "mapUrl": "https://www.google.com/maps/dir/Florence/Chianti/Siena/San+Gimignano/Pisa/Florence",
      "budget": {
        "budget": {
          "total": "€100–150 per person",
          "includes": [
            "2nd-class regional trains",
            "Panzerotti & pizza al taglio",
            "Free churches & piazzas",
            "One paid museum"
          ]
        },
        "mid": {
          "total": "€220–350 per person",
          "includes": [
            "Frecciarossa 2nd class",
            "Sit-down trattoria meals",
            "Skip-the-line tickets",
            "Gondola or ferry"
          ]
        },
        "luxury": {
          "total": "€600–1,200 per person",
          "includes": [
            "Frecciarossa Business",
            "Michelin & lakeside dining",
            "Private guides",
            "5-star palazzo hotels"
          ]
        }
      },
      "photos": [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/%28Venice%29_Doge%27s_Palace_and_campanile_of_St._Mark%27s_Basilica_facing_the_sea.jpg/960px-%28Venice%29_Doge%27s_Palace_and_campanile_of_St._Mark%27s_Basilica_facing_the_sea.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/%28Venice%29_Doge%27s_Palace_and_campanile_of_St._Mark%27s_Basilica_facing_the_sea.jpg/960px-%28Venice%29_Doge%27s_Palace_and_campanile_of_St._Mark%27s_Basilica_facing_the_sea.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/%28Venice%29_Doge%27s_Palace_and_campanile_of_St._Mark%27s_Basilica_facing_the_sea.jpg/960px-%28Venice%29_Doge%27s_Palace_and_campanile_of_St._Mark%27s_Basilica_facing_the_sea.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/%28Venice%29_Doge%27s_Palace_and_campanile_of_St._Mark%27s_Basilica_facing_the_sea.jpg/960px-%28Venice%29_Doge%27s_Palace_and_campanile_of_St._Mark%27s_Basilica_facing_the_sea.jpg"
      ],
      "stops": [
        {
          "time": "09:00",
          "timeOfDay": "morning",
          "name": "Option A · Chianti Wine Tour",
          "desc": "Vineyards & tastings between Florence & Siena",
          "transit": "Guided car / minibus",
          "icon": "cab",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Option%20A%20%C2%B7%20Chianti%20Wine%20Tour%20Florence%20Italy"
        },
        {
          "time": "09:00",
          "timeOfDay": "morning",
          "name": "Option B · Pisa",
          "desc": "Leaning Tower & Piazza dei Miracoli",
          "transit": "Train 1 hr from SMN",
          "icon": "train",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Option%20B%20%C2%B7%20Pisa%20Florence%20Italy"
        },
        {
          "time": "09:00",
          "timeOfDay": "morning",
          "name": "Option C · Siena",
          "desc": "Piazza del Campo & Gothic Duomo",
          "transit": "Bus 1 hr 15 min",
          "icon": "bus",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Option%20C%20%C2%B7%20Siena%20Florence%20Italy"
        },
        {
          "time": "12:00",
          "timeOfDay": "afternoon",
          "name": "Option D · San Gimignano",
          "desc": "Medieval towers & saffron hills",
          "transit": "Bus / car",
          "icon": "cab",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Option%20D%20%C2%B7%20San%20Gimignano%20Florence%20Italy"
        },
        {
          "time": "18:30",
          "timeOfDay": "night",
          "name": "Return to Florence",
          "desc": "Evening aperitivo back in the city",
          "transit": "Train / bus",
          "icon": "train",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Return%20to%20Florence%20Florence%20Italy"
        }
      ]
    },
    {
      "day": 7,
      "title": "Rome — Ancient Grandeur",
      "color": "#b45309",
      "routePreview": "6 stops · start 08:00 · end 21:00 · Metro + walking",
      "mapUrl": "https://www.google.com/maps/dir/Firenze+SMN/Colosseum+Rome/Roman+Forum+Rome/Pantheon+Rome/Trevi+Fountain+Rome/Trastevere+Rome",
      "budget": {
        "budget": {
          "total": "€100–150 per person",
          "includes": [
            "2nd-class regional trains",
            "Panzerotti & pizza al taglio",
            "Free churches & piazzas",
            "One paid museum"
          ]
        },
        "mid": {
          "total": "€220–350 per person",
          "includes": [
            "Frecciarossa 2nd class",
            "Sit-down trattoria meals",
            "Skip-the-line tickets",
            "Gondola or ferry"
          ]
        },
        "luxury": {
          "total": "€600–1,200 per person",
          "includes": [
            "Frecciarossa Business",
            "Michelin & lakeside dining",
            "Private guides",
            "5-star palazzo hotels"
          ]
        }
      },
      "photos": [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Colosseo_2020.jpg/960px-Colosseo_2020.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Foro_Romano_Musei_Capitolini_Roma.jpg/960px-Foro_Romano_Musei_Capitolini_Roma.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Pantheon_%28Rome%29_-_Right_side_and_front.jpg/960px-Pantheon_%28Rome%29_-_Right_side_and_front.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/%28Venice%29_Doge%27s_Palace_and_campanile_of_St._Mark%27s_Basilica_facing_the_sea.jpg/960px-%28Venice%29_Doge%27s_Palace_and_campanile_of_St._Mark%27s_Basilica_facing_the_sea.jpg"
      ],
      "stops": [
        {
          "time": "08:00",
          "timeOfDay": "morning",
          "name": "Florence → Rome",
          "desc": "Frecciarossa · 1 hr 30 min",
          "transit": "Train to Roma Termini",
          "icon": "train",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Florence%20%E2%86%92%20Rome%20Rome%20Italy"
        },
        {
          "time": "10:00",
          "timeOfDay": "morning",
          "name": "Colosseum",
          "desc": "Arena floor & underground · book ahead",
          "transit": "Metro B Colosseo",
          "icon": "metro",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Colosseum%20Rome%20Italy"
        },
        {
          "time": "12:00",
          "timeOfDay": "afternoon",
          "name": "Roman Forum & Palatine Hill",
          "desc": "Heart of the ancient empire",
          "transit": "Walk 5 min",
          "icon": "walk",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Roman%20Forum%20%26%20Palatine%20Hill%20Rome%20Italy"
        },
        {
          "time": "14:30",
          "timeOfDay": "afternoon",
          "name": "Pantheon",
          "desc": "Best-preserved Roman temple & oculus",
          "transit": "Walk 20 min",
          "icon": "walk",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Pantheon%20Rome%20Italy"
        },
        {
          "time": "16:00",
          "timeOfDay": "evening",
          "name": "Trevi Fountain",
          "desc": "Toss a coin over your shoulder",
          "transit": "Walk 8 min",
          "icon": "walk",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Trevi%20Fountain%20Rome%20Italy"
        },
        {
          "time": "19:30",
          "timeOfDay": "night",
          "name": "Trastevere",
          "desc": "Cobbled dinner quarter · Roman pasta",
          "transit": "Tram 8",
          "icon": "tram",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Trastevere%20Rome%20Italy"
        }
      ]
    },
    {
      "day": 8,
      "title": "Vatican & Rome Farewell",
      "color": "#92400e",
      "routePreview": "7 stops · start 08:00 · end airport transfer",
      "mapUrl": "https://www.google.com/maps/dir/St+Peter's+Basilica/Vatican+Museums/Borgo+Pio+Rome/Spanish+Steps+Rome/Piazza+Navona+Rome/Giolitti+Rome",
      "budget": {
        "budget": {
          "total": "€100–150 per person",
          "includes": [
            "2nd-class regional trains",
            "Panzerotti & pizza al taglio",
            "Free churches & piazzas",
            "One paid museum"
          ]
        },
        "mid": {
          "total": "€220–350 per person",
          "includes": [
            "Frecciarossa 2nd class",
            "Sit-down trattoria meals",
            "Skip-the-line tickets",
            "Gondola or ferry"
          ]
        },
        "luxury": {
          "total": "€600–1,200 per person",
          "includes": [
            "Frecciarossa Business",
            "Michelin & lakeside dining",
            "Private guides",
            "5-star palazzo hotels"
          ]
        }
      },
      "photos": [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Basilica_di_San_Pietro_in_Vaticano_September_2015-1a.jpg/960px-Basilica_di_San_Pietro_in_Vaticano_September_2015-1a.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Vatican_Museums_Spiral_Staircase_2012.jpg/960px-Vatican_Museums_Spiral_Staircase_2012.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Passetto_di_Borgo_from_Castel_Sant%27Angelo_01.jpg/960px-Passetto_di_Borgo_from_Castel_Sant%27Angelo_01.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/%28Venice%29_Doge%27s_Palace_and_campanile_of_St._Mark%27s_Basilica_facing_the_sea.jpg/960px-%28Venice%29_Doge%27s_Palace_and_campanile_of_St._Mark%27s_Basilica_facing_the_sea.jpg"
      ],
      "stops": [
        {
          "time": "08:00",
          "timeOfDay": "morning",
          "name": "St Peter's Basilica",
          "desc": "Dome climb before the crowds",
          "transit": "Metro A Ottaviano",
          "icon": "metro",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=St%20Peter's%20Basilica%20Rome%20Italy"
        },
        {
          "time": "10:00",
          "timeOfDay": "morning",
          "name": "Vatican Museums & Sistine Chapel",
          "desc": "Michelangelo ceiling · book early entry",
          "transit": "Walk 10 min",
          "icon": "walk",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Vatican%20Museums%20%26%20Sistine%20Chapel%20Rome%20Italy"
        },
        {
          "time": "13:00",
          "timeOfDay": "afternoon",
          "name": "Borgo Pio",
          "desc": "Lunch on a cobbled Vatican lane",
          "transit": "Walk 8 min",
          "icon": "walk",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Borgo%20Pio%20Rome%20Italy"
        },
        {
          "time": "15:00",
          "timeOfDay": "afternoon",
          "name": "Spanish Steps",
          "desc": "Tridente shopping & people-watching",
          "transit": "Metro A Spagna",
          "icon": "metro",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Spanish%20Steps%20Rome%20Italy"
        },
        {
          "time": "16:30",
          "timeOfDay": "evening",
          "name": "Piazza Navona",
          "desc": "Bernini fountains & baroque façades",
          "transit": "Walk 12 min",
          "icon": "walk",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Piazza%20Navona%20Rome%20Italy"
        },
        {
          "time": "17:30",
          "timeOfDay": "evening",
          "name": "Giolitti",
          "desc": "Historic gelato as a farewell",
          "transit": "Walk 6 min",
          "icon": "walk",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Giolitti%20Rome%20Italy"
        },
        {
          "time": "19:00",
          "timeOfDay": "night",
          "name": "Airport Transfer",
          "desc": "Leonardo Express to FCO · 32 min",
          "transit": "Train from Termini",
          "icon": "train",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Airport%20Transfer%20Rome%20Italy"
        }
      ]
    }
  ],
  "rainyDay": [
    {
      "name": "Uffizi Gallery",
      "address": "Florence",
      "desc": "Renaissance masterpieces · indoor",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Uffizi_Gallery_-_Daughter_of_Niobe_bent_by_terror.jpg/960px-Uffizi_Gallery_-_Daughter_of_Niobe_bent_by_terror.jpg",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Uffizi%20Gallery%20Florence%20Italy"
    },
    {
      "name": "Vatican Museums & Sistine Chapel",
      "address": "Vatican City",
      "desc": "Michelangelo ceiling · vast collection",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Vatican_Museums_Spiral_Staircase_2012.jpg/960px-Vatican_Museums_Spiral_Staircase_2012.jpg",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Vatican%20Museums%20%26%20Sistine%20Chapel%20Rome%20Italy"
    },
    {
      "name": "Doge's Palace",
      "address": "Venice",
      "desc": "Gothic state rooms & Bridge of Sighs",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/%28Venice%29_Doge%27s_Palace_and_campanile_of_St._Mark%27s_Basilica_facing_the_sea.jpg/960px-%28Venice%29_Doge%27s_Palace_and_campanile_of_St._Mark%27s_Basilica_facing_the_sea.jpg",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Doge's%20Palace%20Venice%20Italy"
    },
    {
      "name": "Galleria Vittorio Emanuele II",
      "address": "Milan",
      "desc": "Covered arcade · shopping & cafés",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Galleria_Milano_%28179532365%29.jpeg/960px-Galleria_Milano_%28179532365%29.jpeg",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Galleria%20Vittorio%20Emanuele%20II%20Milan%20Italy"
    },
    {
      "name": "Pantheon",
      "address": "Rome",
      "desc": "Roman temple · dry under the dome",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Pantheon_%28Rome%29_-_Right_side_and_front.jpg/960px-Pantheon_%28Rome%29_-_Right_side_and_front.jpg",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Pantheon%20Rome%20Italy"
    },
    {
      "name": "Caffè Florian",
      "address": "Venice",
      "desc": "Europe's oldest café · hot chocolate",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/9626_-_Venezia_-_Caff%C3%A8_Florian_-_Foto_Giovanni_Dall%27Orto%2C_12-Aug-2007.jpg/960px-9626_-_Venezia_-_Caff%C3%A8_Florian_-_Foto_Giovanni_Dall%27Orto%2C_12-Aug-2007.jpg",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Caff%C3%A8%20Florian%20Venice%20Italy"
    }
  ],
  "sunnyDay": [
    {
      "name": "Bellagio",
      "address": "Lake Como",
      "desc": "Lakeside village & ferry hopping",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Bellagio_-_Albergo_Genazzini_%26_Metropole_from_Lake_Como.jpg/960px-Bellagio_-_Albergo_Genazzini_%26_Metropole_from_Lake_Como.jpg",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Bellagio%20Como%20Italy"
    },
    {
      "name": "Piazzale Michelangelo",
      "address": "Florence",
      "desc": "Panoramic sunset over the Arno",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Florence_Duomo_from_Michelangelo_hill.jpg/960px-Florence_Duomo_from_Michelangelo_hill.jpg",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Piazzale%20Michelangelo%20Florence%20Italy"
    },
    {
      "name": "Grand Canal",
      "address": "Venice",
      "desc": "Vaporetto ride & gondolas",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/View_of_the_Grand_Canal_from_Rialto_to_Ca%27Foscari.jpg/960px-View_of_the_Grand_Canal_from_Rialto_to_Ca%27Foscari.jpg",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Grand%20Canal%20Venice%20Italy"
    },
    {
      "name": "Navigli District",
      "address": "Milan",
      "desc": "Canalside aperitivo hour",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Naviglio_Grande%2C_Milano.jpg/960px-Naviglio_Grande%2C_Milano.jpg",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Navigli%20District%20Milan%20Italy"
    },
    {
      "name": "Roman Forum & Palatine Hill",
      "address": "Rome",
      "desc": "Ancient ruins in the open air",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Foro_Romano_Musei_Capitolini_Roma.jpg/960px-Foro_Romano_Musei_Capitolini_Roma.jpg",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Roman%20Forum%20%26%20Palatine%20Hill%20Rome%20Italy"
    },
    {
      "name": "Villa Melzi Gardens",
      "address": "Bellagio",
      "desc": "Lakeside gardens & maples",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Bellagio_-_Villa_Melzi_d%27Eril_-_2023-09-01_00-15-09_003.JPG/960px-Bellagio_-_Villa_Melzi_d%27Eril_-_2023-09-01_00-15-09_003.JPG",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Villa%20Melzi%20Gardens%20Como%20Italy"
    }
  ],
  "hiddenGems": [
    {
      "name": "Varenna",
      "desc": "Quieter Lake Como village of pastel houses",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Varenna_and_mountain_from_ferry.jpg/960px-Varenna_and_mountain_from_ferry.jpg",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Varenna%20Como%20Italy"
    },
    {
      "name": "Cantina Do Mori",
      "desc": "Venice's oldest bacaro · cicchetti since 1462",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Cicchetti_Venezia_%281%29.jpg/960px-Cicchetti_Venezia_%281%29.jpg",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Cantina%20Do%20Mori%20Venice%20Italy"
    },
    {
      "name": "Burano",
      "desc": "Rainbow fishing island in the lagoon",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Burano_Venice_17.jpg/960px-Burano_Venice_17.jpg",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Burano%20Venice%20Italy"
    },
    {
      "name": "Piazza delle Erbe",
      "desc": "Verona’s frescoed market square",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Piazza_delle_Erbe_%28Verona%29.jpg/960px-Piazza_delle_Erbe_%28Verona%29.jpg",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Piazza%20delle%20Erbe%20Verona%20Italy"
    },
    {
      "name": "Borgo Pio",
      "desc": "Cobbled lane of trattorie by the Vatican",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Passetto_di_Borgo_from_Castel_Sant%27Angelo_01.jpg/960px-Passetto_di_Borgo_from_Castel_Sant%27Angelo_01.jpg",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Borgo%20Pio%20Rome%20Italy"
    },
    {
      "name": "Trastevere",
      "desc": "Rome’s bohemian dinner quarter",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Santa_Maria_in_Trastevere_fountain.jpg/960px-Santa_Maria_in_Trastevere_fountain.jpg",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Trastevere%20Rome%20Italy"
    }
  ],
  "warnings": [
    {
      "title": "Validate regional tickets",
      "desc": "Regional train and some bus tickets must be validated before boarding. High-speed Frecciarossa/Italo tickets are seat-specific and need no validation."
    },
    {
      "title": "Pickpockets on transit",
      "desc": "Watch bags on Rome metro line A, Milan trams and around Termini and Venice’s Rialto. Use a cross-body bag."
    },
    {
      "title": "Restaurant tourist traps",
      "desc": "Avoid places with photo menus and touts beside major sights. Walk two streets back for better food at fair prices."
    },
    {
      "title": "Church dress codes",
      "desc": "St Mark’s, St Peter’s and the Duomos require covered shoulders and knees. Carry a scarf in summer."
    },
    {
      "title": "ZTL driving zones",
      "desc": "Historic centres are limited-traffic (ZTL) — never drive in. This route is designed around trains for a reason."
    },
    {
      "title": "Book headline sights",
      "desc": "Colosseum, Uffizi, Vatican, Doge’s Palace and the Duomo dome climbs sell out. Reserve timed tickets days ahead."
    },
    {
      "title": "Summer heat",
      "desc": "July–August can top 35 °C. Start early, rest at midday, refill at fountains, and save Como for the hottest afternoons."
    }
  ],
  "shopping": {
    "districts": [
      {
        "name": "Galleria Vittorio Emanuele II",
        "desc": "Milan · luxury flagship arcade",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Galleria_Milano_%28179532365%29.jpeg/960px-Galleria_Milano_%28179532365%29.jpeg",
        "mapUrl": "https://www.google.com/maps/search/?api=1&query=Galleria%20Vittorio%20Emanuele%20II%20Milan%20Italy"
      },
      {
        "name": "Quadrilatero della Moda",
        "desc": "Milan · Via Montenapoleone fashion",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Via_Monte_Napoleone_%28Milan%29.jpg/960px-Via_Monte_Napoleone_%28Milan%29.jpg",
        "mapUrl": "https://www.google.com/maps/search/?api=1&query=Via%20Montenapoleone%20Milan%20Italy"
      },
      {
        "name": "Ponte Vecchio",
        "desc": "Florence · historic goldsmiths",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Ponte_Vecchio_Arno_Florence.jpg/960px-Ponte_Vecchio_Arno_Florence.jpg",
        "mapUrl": "https://www.google.com/maps/search/?api=1&query=Ponte%20Vecchio%20Florence%20Italy"
      },
      {
        "name": "Rialto Market",
        "desc": "Venice · produce, fish & Murano glass nearby",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Rialto_2025_4.jpg/960px-Rialto_2025_4.jpg",
        "mapUrl": "https://www.google.com/maps/search/?api=1&query=Rialto%20Market%20Venice%20Italy"
      }
    ],
    "brands": [
      "Prada",
      "Gucci",
      "Ferragamo",
      "Murano glass",
      "Florentine leather",
      "Tuscan wine"
    ],
    "souvenirs": [
      "Murano glass",
      "Florentine leather goods",
      "Parmigiano & balsamic",
      "Chianti & Amarone wine",
      "Venetian carnival masks",
      "Ground espresso"
    ],
    "vatTips": {
      "rate": "22% IVA",
      "refund": "Tax-free shopping for non-EU residents on purchases over €70 per store. Ask for the form and claim the refund at your final EU airport."
    }
  },
  "budget": {
    "budget": {
      "daily": "€100–150 per person / day",
      "accommodation": "€70 B&B or 3-star",
      "food": "€25 pizza & panini",
      "transport": "€25 regional trains & metro",
      "activities": "€20 one museum",
      "extras": "€10 gelato & espresso",
      "tip": "Travel 2nd class, picnic from markets, and prioritise free churches and piazzas. One paid museum per city."
    },
    "mid": {
      "daily": "€220–350 per person / day",
      "accommodation": "€180 4-star central",
      "food": "€60 trattoria meals",
      "transport": "€45 Frecciarossa 2nd class",
      "activities": "€40 skip-the-line tickets",
      "extras": "€25 gondola or ferry"
    },
    "luxury": {
      "daily": "€600–1,200 per person / day",
      "accommodation": "€500 5-star palazzo",
      "food": "€150 Michelin & lakeside dining",
      "transport": "€90 Frecciarossa Business",
      "activities": "€120 private guides",
      "extras": "€60 aperitivo & spa"
    }
  },
  "family": {
    "tip": "Under-18s often enter state museums free (bring ID). Trains, gelato and boat rides delight kids. Book family rooms early and request cots when reserving. Strollers struggle on Venice bridges — a baby carrier is easier.",
    "rows": [
      {
        "attraction": "Colosseum",
        "desc": "Gladiator history captivates all ages",
        "goodForKids": true,
        "stroller": false,
        "babyChange": false,
        "familyTicket": true
      },
      {
        "attraction": "Gondola Ride",
        "desc": "Magical for children · life jackets available",
        "goodForKids": true,
        "stroller": false,
        "babyChange": false,
        "familyTicket": false
      },
      {
        "attraction": "Lake Como Ferry",
        "desc": "Boat hopping between villages",
        "goodForKids": true,
        "stroller": true,
        "babyChange": false,
        "familyTicket": true
      },
      {
        "attraction": "Duomo di Milano Rooftop",
        "desc": "Lift available · dramatic views",
        "goodForKids": true,
        "stroller": false,
        "babyChange": false,
        "familyTicket": true
      },
      {
        "attraction": "Uffizi Gallery",
        "desc": "Long for little ones · pick highlights",
        "goodForKids": false,
        "stroller": true,
        "babyChange": true,
        "familyTicket": true
      },
      {
        "attraction": "Trevi Fountain",
        "desc": "Coin-tossing & gelato nearby",
        "goodForKids": true,
        "stroller": true,
        "babyChange": false,
        "familyTicket": false
      },
      {
        "attraction": "Piazzale Michelangelo",
        "desc": "Open space to run · sunset picnic",
        "goodForKids": true,
        "stroller": true,
        "babyChange": false,
        "familyTicket": false
      }
    ]
  },
  "emergency": {
    "numbers": [
      {
        "label": "112",
        "desc": "European emergency · police · all services",
        "icon": "emergency"
      },
      {
        "label": "118",
        "desc": "Ambulance / medical emergency",
        "icon": "hospital"
      },
      {
        "label": "115",
        "desc": "Fire brigade",
        "icon": "emergency"
      },
      {
        "label": "113",
        "desc": "State police (Polizia di Stato)",
        "icon": "police"
      }
    ],
    "hospitals": [
      {
        "name": "Ospedale Niguarda",
        "address": "Milan",
        "icon": "hospital",
        "mapUrl": "https://www.google.com/maps/search/?api=1&query=Ospedale%20Niguarda%20Milan%20Italy"
      },
      {
        "name": "Ospedale SS. Giovanni e Paolo",
        "address": "Venice",
        "icon": "hospital",
        "mapUrl": "https://www.google.com/maps/search/?api=1&query=Ospedale%20Civile%20Venice%20Italy"
      },
      {
        "name": "Azienda Ospedaliera Careggi",
        "address": "Florence",
        "icon": "hospital",
        "mapUrl": "https://www.google.com/maps/search/?api=1&query=Ospedale%20Careggi%20Florence%20Italy"
      },
      {
        "name": "Policlinico Umberto I",
        "address": "Rome",
        "icon": "hospital",
        "mapUrl": "https://www.google.com/maps/search/?api=1&query=Policlinico%20Umberto%20I%20Rome%20Italy"
      }
    ],
    "embassies": [
      {
        "country": "Saudi Arabia",
        "address": "Rome · Via Guido d’Arezzo 2",
        "icon": "embassy",
        "mapUrl": "https://www.google.com/maps/search/?api=1&query=Embassy+of+Saudi+Arabia+Rome"
      },
      {
        "country": "United Arab Emirates",
        "address": "Rome · Via della Camilluccia 456",
        "icon": "embassy",
        "mapUrl": "https://www.google.com/maps/search/?api=1&query=Embassy+of+United+Arab+Emirates+Rome"
      },
      {
        "country": "Qatar",
        "address": "Rome · Via Antonio Bosio 14",
        "icon": "embassy",
        "mapUrl": "https://www.google.com/maps/search/?api=1&query=Embassy+of+Qatar+Rome"
      },
      {
        "country": "Kuwait",
        "address": "Rome · Via della Fonte 20",
        "icon": "embassy",
        "mapUrl": "https://www.google.com/maps/search/?api=1&query=Embassy+of+Kuwait+Rome"
      },
      {
        "country": "Bahrain",
        "address": "Rome · consular services",
        "icon": "embassy",
        "mapUrl": "https://www.google.com/maps/search/?api=1&query=Embassy+of+Bahrain+Rome"
      },
      {
        "country": "Oman",
        "address": "Rome · Via della Camilluccia 625",
        "icon": "embassy",
        "mapUrl": "https://www.google.com/maps/search/?api=1&query=Embassy+of+Oman+Rome"
      }
    ],
    "lostPassport": "Report to the nearest police station (Questura) and dial 112. Contact your embassy in Rome — GCC embassies are all located in the capital. They can issue emergency travel documents. Photograph your passport before you fly."
  },
  "phrases": [
    {
      "english": "Hello / Hi",
      "use": "Ciao (informal) · Buongiorno (daytime)"
    },
    {
      "english": "Thank you",
      "use": "Grazie — always appreciated"
    },
    {
      "english": "Please",
      "use": "Per favore — polite requests"
    },
    {
      "english": "How much is it?",
      "use": "Quanto costa? — markets & shops"
    },
    {
      "english": "A coffee, please",
      "use": "Un caffè, per favore — at the bar"
    },
    {
      "english": "The bill, please",
      "use": "Il conto, per favore — end of meal"
    },
    {
      "english": "Where is the station?",
      "use": "Dov’è la stazione? — navigation"
    },
    {
      "english": "One ticket to…",
      "use": "Un biglietto per… — train travel"
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
        "label": "118",
        "value": "Ambulance"
      },
      {
        "label": "115",
        "value": "Fire"
      }
    ],
    "transport": [
      {
        "label": "Frecciarossa / Italo",
        "value": "High-speed between cities"
      },
      {
        "label": "Metro €1.50",
        "value": "Milan & Rome"
      },
      {
        "label": "Vaporetto €9.50",
        "value": "Venice water bus"
      }
    ],
    "money": [
      {
        "label": "Bancomat ATMs",
        "value": "Best exchange rate"
      },
      {
        "label": "Cards widely OK",
        "value": "Cash for small cafés"
      },
      {
        "label": "Coperto",
        "value": "Cover charge is normal"
      }
    ],
    "apps": [
      {
        "name": "Trenitalia / Italo",
        "use": "Book & store train tickets"
      },
      {
        "name": "Google Maps",
        "use": "Navigation · offline maps"
      },
      {
        "name": "FreeNow",
        "use": "Book licensed taxis"
      }
    ],
    "topQrCodes": [
      {
        "name": "Milano Centrale",
        "mapUrl": "https://www.google.com/maps/search/?api=1&query=Milano+Centrale"
      },
      {
        "name": "Duomo di Milano",
        "mapUrl": "https://www.google.com/maps/search/?api=1&query=Duomo%20di%20Milano%20Milan%20Italy"
      },
      {
        "name": "Bellagio Ferry",
        "mapUrl": "https://www.google.com/maps/search/?api=1&query=Bellagio%20Como%20Italy"
      },
      {
        "name": "St Mark's Basilica",
        "mapUrl": "https://www.google.com/maps/search/?api=1&query=St%20Mark's%20Basilica%20Venice%20Italy"
      },
      {
        "name": "Uffizi Gallery",
        "mapUrl": "https://www.google.com/maps/search/?api=1&query=Uffizi%20Gallery%20Florence%20Italy"
      },
      {
        "name": "Colosseum",
        "mapUrl": "https://www.google.com/maps/search/?api=1&query=Colosseum%20Rome%20Italy"
      },
      {
        "name": "Vatican Museums",
        "mapUrl": "https://www.google.com/maps/search/?api=1&query=Vatican%20Museums%20%26%20Sistine%20Chapel%20Rome%20Italy"
      },
      {
        "name": "Roma Termini",
        "mapUrl": "https://www.google.com/maps/search/?api=1&query=Roma+Termini"
      }
    ]
  },
  "etiquette": [
    {
      "rule": "Coffee customs",
      "desc": "Cappuccino is a morning drink — order espresso after meals. Drinking at the bar is cheaper than sitting."
    },
    {
      "rule": "Dress for churches",
      "desc": "Cover shoulders and knees in all basilicas and cathedrals. Remove hats inside."
    },
    {
      "rule": "Dining rhythm",
      "desc": "Lunch 13:00–14:30, dinner from 19:30–20:00. Restaurants rarely serve continuously — plan around it."
    },
    {
      "rule": "Greetings",
      "desc": "A warm buongiorno on entering a shop or café is expected. Say arrivederci when leaving."
    },
    {
      "rule": "Sitting on monuments",
      "desc": "Eating or sitting on the Spanish Steps and some monuments is fined in Rome. Use nearby cafés."
    },
    {
      "rule": "Queue for gelato",
      "desc": "At busy gelaterie, pay at the till first, then present your receipt at the counter."
    },
    {
      "rule": "Keep voices down",
      "desc": "In museums, churches and small trattorie, Italians speak softly. Match the local volume."
    }
  ]
};
