/**
 * DISCOVER Edinburgh — Travel Guide
 * Real place photos via Wikimedia Commons (CC-licensed)
 */
const PLAN = {
  "meta": {
    "city": "Edinburgh",
    "country": "United Kingdom",
    "tagline": "Castles, whisky, Harry Potter and Arthur's Seat — in your pocket.",
    "badge": "Discover · 2026 Edition",
    "edition": "2026",
    "stats": {
      "chapters": 38,
      "qrCodes": "120+",
      "attractions": 14,
      "hotels": 7,
      "dining": 16,
      "days": 3
    },
    "theme": {
      "accent": "#8B5A9B",
      "accentSoft": "#F3E8FF",
      "accentDeep": "#6B21A8",
      "heroImage": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Holyrood_Palace_and_Abbey.jpg/960px-Holyrood_Palace_and_Abbey.jpg",
      "tube": "#8B5A9B",
      "parks": "#2d6a4f",
      "river": "#0077b6",
      "gold": "#C68642",
      "navy": "#1a2744"
    }
  },
  "welcome": {
    "editorLetter": "Edinburgh is a city of contrasts — a medieval fortress on a volcanic crag, elegant Georgian streets below, and a wild hill that rises from the heart of the Old Town. This companion was built around one perfect 3-day itinerary: castles and closes on Day 1, hidden villages and sunset hills on Day 2, and a sunrise hike to Arthur's Seat before sailing Leith on Day 3.\n\nEvery attraction, hotel, café and restaurant carries a QR code that opens directly in Google Maps. Every day plan has a route map, a timeline, and an estimated walking distance. Scan, walk, eat, repeat.",
    "howToUse": "Point your phone camera at any QR code and the location opens in Google Maps in one tap. Every website and booking link is also clickable directly in the PDF. Colour-coded day chapters make navigation effortless.\n\n— The Editors, Edinburgh Bureau"
  },
  "essentials": {
    "currency": {
      "label": "£ Pound Sterling",
      "note": "Contactless everywhere. Notify your bank before travel."
    },
    "power": {
      "label": "Type G · 230V",
      "note": "Same three-pin plug as England. Bring a universal adapter."
    },
    "sim": {
      "label": "eSIM or airport SIM",
      "note": "EE, Vodafone, Three. eSIM works instantly on arrival at EDI."
    },
    "language": {
      "label": "English · Scots",
      "note": "Edinburgh English is clear and welcoming. Gaelic signage on some attractions."
    },
    "tipping": {
      "label": "10–12.5%",
      "note": "Check if service charge is already included in restaurants."
    },
    "emergency": {
      "label": "999 · 112",
      "note": "Police · Fire · Ambulance."
    },
    "tapWater": {
      "label": "Safe to drink",
      "note": "Scottish tap water is excellent. Cafés will refill your bottle."
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
      "desc": "Take £50 from an ATM (never Travelex). Cards work everywhere but keep a note for small shops."
    },
    {
      "step": "04",
      "title": "Tram to city",
      "desc": "Edinburgh Tram from EDI to city centre: 35 min, £7.50. Runs every 8 min. Stops at Princes Street and St Andrew Square."
    },
    {
      "step": "05",
      "title": "Bus alternative",
      "desc": "Airlink 100 bus to Waverley Bridge: 30 min, £5.50. Runs 24 hours. Good if your hotel is near the station."
    },
    {
      "step": "06",
      "title": "Hotel",
      "desc": "Check-in is usually from 15:00. Most hotels will hold luggage from 09:00 so you can start Day 1 immediately."
    },
    {
      "step": "07",
      "title": "First meal",
      "desc": "Head to The Edinburgh Larder for a Full Scottish Breakfast or Urban Angel for coffee. Then walk uphill to the castle."
    }
  ],
  "packing": {
    "spring": {
      "months": "MAR–MAY",
      "temp": "4–14 °C · showers",
      "items": [
        "Waterproof jacket",
        "Layerable knit",
        "Walking boots",
        "Compact umbrella",
        "Sunscreen",
        "Warm hat for Arthur's Seat"
      ]
    },
    "summer": {
      "months": "JUN–AUG",
      "temp": "12–20 °C · long evenings",
      "items": [
        "Light waterproof",
        "Breathable layers",
        "Hiking shoes for Arthur's Seat",
        "Sunscreen SPF 30",
        "Refillable bottle",
        "Midgie repellent"
      ]
    },
    "autumn": {
      "months": "SEP–NOV",
      "temp": "6–14 °C · golden light",
      "items": [
        "Trench coat",
        "Wool jumper",
        "Waterproof boots",
        "Umbrella",
        "Gloves for Calton Hill",
        "Book for cafés"
      ]
    },
    "winter": {
      "months": "DEC–FEB",
      "temp": "1–7 °C · short days",
      "items": [
        "Heavy wool coat",
        "Thermal base layer",
        "Beanie + scarf + gloves",
        "Waterproof boots",
        "Hand warmers",
        "Head torch for early Arthur's Seat"
      ]
    }
  },
  "weatherTable": {
    "rows": [
      {
        "month": "Jan",
        "avgTemp": "1 / 6 °C",
        "rain": "60%",
        "sunset": "16:15",
        "crowds": "Low",
        "recommend": "Hogmanay · museums"
      },
      {
        "month": "Feb",
        "avgTemp": "1 / 7 °C",
        "rain": "55%",
        "sunset": "17:30",
        "crowds": "Low",
        "recommend": "Whisky bars"
      },
      {
        "month": "Mar",
        "avgTemp": "3 / 9 °C",
        "rain": "50%",
        "sunset": "18:30",
        "crowds": "Rising",
        "recommend": "Dean Village walks"
      },
      {
        "month": "Apr",
        "avgTemp": "4 / 12 °C",
        "rain": "45%",
        "sunset": "20:00",
        "crowds": "Medium",
        "recommend": "Botanic Garden"
      },
      {
        "month": "May",
        "avgTemp": "7 / 15 °C",
        "rain": "45%",
        "sunset": "21:15",
        "crowds": "Medium",
        "recommend": "Perfect walking weather"
      },
      {
        "month": "Jun",
        "avgTemp": "10 / 18 °C",
        "rain": "50%",
        "sunset": "22:00",
        "crowds": "High",
        "recommend": "Arthur's Seat sunrise"
      },
      {
        "month": "Jul",
        "avgTemp": "12 / 19 °C",
        "rain": "55%",
        "sunset": "21:45",
        "crowds": "Peak",
        "recommend": "Book castle early"
      },
      {
        "month": "Aug",
        "avgTemp": "12 / 19 °C",
        "rain": "55%",
        "sunset": "20:45",
        "crowds": "Peak",
        "recommend": "Fringe Festival"
      },
      {
        "month": "Sep",
        "avgTemp": "10 / 16 °C",
        "rain": "50%",
        "sunset": "19:15",
        "crowds": "Medium",
        "recommend": "Golden light · best month"
      },
      {
        "month": "Oct",
        "avgTemp": "7 / 12 °C",
        "rain": "60%",
        "sunset": "17:45",
        "crowds": "Medium",
        "recommend": "Ghost tours"
      },
      {
        "month": "Nov",
        "avgTemp": "3 / 8 °C",
        "rain": "60%",
        "sunset": "16:15",
        "crowds": "Low",
        "recommend": "Whisky · cosy pubs"
      },
      {
        "month": "Dec",
        "avgTemp": "2 / 7 °C",
        "rain": "55%",
        "sunset": "15:40",
        "crowds": "Rising",
        "recommend": "Christmas markets"
      }
    ],
    "sweetSpot": "May and September deliver the best light, manageable crowds at Edinburgh Castle, and comfortable hiking weather for Arthur's Seat. Avoid August unless you have booked for the Fringe Festival — the city is magnificent but packed."
  },
  "transport": {
    "modes": [
      {
        "icon": "walk",
        "name": "Walk",
        "price": "Free",
        "desc": "Most of central Edinburgh is best explored on foot. Old Town to New Town is 10 minutes downhill."
      },
      {
        "icon": "bus",
        "name": "Lothian Buses",
        "price": "£2.00 single",
        "desc": "Excellent network. Day ticket £5.50. Contactless tap on every bus."
      },
      {
        "icon": "tube",
        "name": "Edinburgh Trams",
        "price": "£2.00–£7.50",
        "desc": "Airport to city centre in 35 min. Runs to York Place and Newhaven."
      },
      {
        "icon": "cab",
        "name": "Black Cab",
        "price": "£8–£15 short",
        "desc": "Iconic. Use for Leith, Botanic Garden, and late nights."
      },
      {
        "icon": "uber",
        "name": "Uber / Bolt",
        "price": "£6–£12 short",
        "desc": "Cheaper off-peak. Leith from Old Town: ~£10."
      },
      {
        "icon": "bike",
        "name": "Just Eat Cycles",
        "price": "£1.50 / 30 min",
        "desc": "Dockless e-bikes. Good for New Town to Leith along the coast."
      }
    ],
    "oysterTips": [
      {
        "title": "Contactless on buses",
        "desc": "Tap your bank card on Lothian Buses — no ticket needed. Same card all day for best value."
      },
      {
        "title": "Tram from airport",
        "desc": "£7.50 to city centre. Buy at the machine or tap contactless on board. Runs every 8 minutes."
      },
      {
        "title": "Taxi for Leith",
        "desc": "Day 3 needs a taxi Old Town → Leith (~£10). Book via Uber or hail a black cab on Princes Street."
      },
      {
        "title": "Walking is king",
        "desc": "Royal Mile, Dean Village, Arthur's Seat approach — all best on foot. Wear proper shoes."
      }
    ],
    "exit6Tip": "Exit Waverley Station onto Princes Street — Edinburgh Castle appears immediately on the crag above you. Stop, photograph, then walk uphill via the Mound. Your first view of the city is worth savouring."
  },
  "maps": {
    "overview": {
      "caption": "A schematic map — for exact directions, scan any QR code in this guide.",
      "markers": [
        {
          "name": "Edinburgh Castle",
          "type": "attraction",
          "lat": 55.9486,
          "lng": -3.1999
        },
        {
          "name": "Arthur's Seat",
          "type": "attraction",
          "lat": 55.9445,
          "lng": -3.1619
        },
        {
          "name": "Victoria Street",
          "type": "attraction",
          "lat": 55.9467,
          "lng": -3.1935
        },
        {
          "name": "Royal Yacht Britannia",
          "type": "attraction",
          "lat": 55.9805,
          "lng": -3.1746
        },
        {
          "name": "Dean Village",
          "type": "attraction",
          "lat": 55.9526,
          "lng": -3.2163
        },
        {
          "name": "Calton Hill",
          "type": "attraction",
          "lat": 55.9552,
          "lng": -3.1828
        },
        {
          "name": "Royal Botanic Garden",
          "type": "park",
          "lat": 55.9651,
          "lng": -3.2095
        },
        {
          "name": "Leith Shore",
          "type": "district",
          "lat": 55.9762,
          "lng": -3.1689
        },
        {
          "name": "The Balmoral",
          "type": "hotel",
          "lat": 55.9533,
          "lng": -3.1897
        },
        {
          "name": "Market Street Hotel",
          "type": "hotel",
          "lat": 55.9518,
          "lng": -3.1895
        },
        {
          "name": "The Witchery",
          "type": "dining",
          "lat": 55.9485,
          "lng": -3.1965
        },
        {
          "name": "The Kitchin",
          "type": "dining",
          "lat": 55.9772,
          "lng": -3.1725
        }
      ]
    }
  },
  "attractions": [
    {
      "name": "Edinburgh Castle",
      "address": "Castlehill · EH1 2NG",
      "hours": "09:30–18:00 · last entry 17:00",
      "tube": "Waverley 10 min walk · Lothian Bus 23/27",
      "ticket": "£21.50 adult · book online",
      "bestArrival": "09:30",
      "waitSummer": "30–60 min",
      "waitWinter": "10–20 min",
      "photoSpot": "From Princes Street Gardens — castle on the crag, full frame.",
      "lens": "24–70mm",
      "tip": "Book online and arrive at opening. One o'clock gun fires daily — plan your visit around it.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Edinburgh%20Castle",
      "bookUrl": "https://www.edinburghcastle.scot/",
      "bookText": "Book Tickets",
      "avgVisit": "2–3 hours",
      "crowd": {
        "morning": 2,
        "afternoon": 5,
        "evening": 3
      },
      "nearby": [
        {
          "name": "Camera Obscura",
          "walk": "2 min"
        },
        {
          "name": "St Giles' Cathedral",
          "walk": "8 min"
        },
        {
          "name": "The Witchery",
          "walk": "3 min"
        },
        {
          "name": "Victoria Street",
          "walk": "10 min"
        },
        {
          "name": "Princes Street Gardens",
          "walk": "5 min"
        }
      ],
      "nearbyCafes": "The Edinburgh Larder · Fortitude Coffee · Brew Lab",
      "nearbyRestaurants": "The Witchery by the Castle · Makars Gourmet Mash Bar",
      "nearbyTube": "Waverley 10 min walk · Lothian Bus 23/27",
      "nearbyToilets": "On-site or nearby cafés.",
      "nearbyAtm": "High Street banks · Waverley station",
      "didYouKnow": "Edinburgh Castle sits on an extinct volcano and has been a royal fortress since at least the 12th century.",
      "localSecret": "The National War Museum inside the castle is free with entry and quieter than the Crown Jewels room.",
      "instagram": {
        "sunset": "From Princes Street Gardens — castle on the crag, full frame.",
        "sunrise": "From Princes Street Gardens — castle on the crag, full frame.",
        "drone": "Check CAA rules — Holyrood Park restricted",
        "settings": "f/8 · ISO 200 · 24–70mm"
      },
      "photos": {
        "hero": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/City_of_Edinburgh_-_Edinburgh_Castle_-_20140421193357.jpg/960px-City_of_Edinburgh_-_Edinburgh_Castle_-_20140421193357.jpg",
        "detail": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Edinburgh_Castle_Rock.jpg/960px-Edinburgh_Castle_Rock.jpg",
        "photoSpot": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Edinburgh_Castle_from_the_Grassmarket.jpg/960px-Edinburgh_Castle_from_the_Grassmarket.jpg",
        "map": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/South_side_of_Edinburgh_Castle_in_the_snow.jpg/960px-South_side_of_Edinburgh_Castle_in_the_snow.jpg",
        "heroPosition": "center 40%"
      },
      "seasonalPhotos": {
        "spring": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/City_of_Edinburgh_-_Edinburgh_Castle_-_20140421193357.jpg/960px-City_of_Edinburgh_-_Edinburgh_Castle_-_20140421193357.jpg",
        "summer": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Edinburgh_Castle_Rock.jpg/960px-Edinburgh_Castle_Rock.jpg",
        "autumn": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Edinburgh_Castle_from_the_Grassmarket.jpg/960px-Edinburgh_Castle_from_the_Grassmarket.jpg",
        "christmas": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/South_side_of_Edinburgh_Castle_in_the_snow.jpg/960px-South_side_of_Edinburgh_Castle_in_the_snow.jpg"
      }
    },
    {
      "name": "Camera Obscura & World of Illusions",
      "address": "Castlehill · EH1 1ND",
      "hours": "09:00–21:00",
      "tube": "Waverley 10 min walk",
      "ticket": "£19.95 adult",
      "bestArrival": "09:30",
      "waitSummer": "15–30 min",
      "waitWinter": "5–10 min",
      "photoSpot": "Rooftop terrace — Old Town rooftops and castle backdrop.",
      "lens": "16–35mm",
      "tip": "Perfect for families. The rooftop views rival any paid viewpoint in the city.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Camera%20Obscura%20%26%20World%20of%20Illusions%20Edinburgh",
      "bookUrl": "https://camera-obscura.co.uk/",
      "bookText": "Book Tickets",
      "avgVisit": "1 hour",
      "crowd": {
        "morning": 3,
        "afternoon": 4,
        "evening": 2
      },
      "nearby": [
        {
          "name": "Edinburgh Castle",
          "walk": "2 min"
        },
        {
          "name": "Royal Mile",
          "walk": "1 min"
        },
        {
          "name": "Victoria Street",
          "walk": "8 min"
        }
      ],
      "nearbyCafes": "See dining chapter in this guide.",
      "nearbyRestaurants": "See dining chapter in this guide.",
      "nearbyTube": "Waverley 10 min walk",
      "nearbyToilets": "On-site or nearby cafés.",
      "nearbyAtm": "High Street banks · Waverley station",
      "didYouKnow": "The Camera Obscura has operated on Castlehill since the 1850s — one of Edinburgh's oldest attractions.",
      "localSecret": "Visit on a clear morning for the sharpest rooftop panoramas before afternoon haze sets in.",
      "instagram": {
        "sunset": "Rooftop terrace — Old Town rooftops and castle backdrop.",
        "sunrise": "Rooftop terrace — Old Town rooftops and castle backdrop.",
        "drone": "Check CAA rules — Holyrood Park restricted",
        "settings": "f/8 · ISO 200 · 24–70mm"
      },
      "photos": {
        "hero": "https://upload.wikimedia.org/wikipedia/commons/0/07/Camera_Obscura_Edinburgh_-_geograph.org.uk_-_742543.jpg",
        "detail": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Camera_obscura_5785-michelides.jpg/960px-Camera_obscura_5785-michelides.jpg",
        "photoSpot": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Camera_obscura_5794-michelides.jpg/960px-Camera_obscura_5794-michelides.jpg",
        "map": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Camera_obscura_5800-michelides.jpg/960px-Camera_obscura_5800-michelides.jpg",
        "heroPosition": "center 40%"
      },
      "seasonalPhotos": {
        "spring": "https://upload.wikimedia.org/wikipedia/commons/0/07/Camera_Obscura_Edinburgh_-_geograph.org.uk_-_742543.jpg",
        "summer": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Camera_obscura_5785-michelides.jpg/960px-Camera_obscura_5785-michelides.jpg",
        "autumn": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Camera_obscura_5794-michelides.jpg/960px-Camera_obscura_5794-michelides.jpg",
        "christmas": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Camera_obscura_5800-michelides.jpg/960px-Camera_obscura_5800-michelides.jpg"
      }
    },
    {
      "name": "St Giles' Cathedral",
      "address": "High St · EH1 1RE",
      "hours": "10:00–18:00 · Sun worship only",
      "tube": "Waverley 8 min walk",
      "ticket": "Free · donation suggested £5",
      "bestArrival": "10:00",
      "waitSummer": "0–10 min",
      "waitWinter": "0 min",
      "photoSpot": "From Parliament Square — Thistle Chapel visible through the west door.",
      "lens": "24mm",
      "tip": "Free entry. Look up at the crown steeple — Edinburgh's most recognisable silhouette after the castle.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=St%20Giles'%20Cathedral%20Edinburgh",
      "bookUrl": "https://www.google.com/maps/search/?api=1&query=St%20Giles'%20Cathedral%20Edinburgh",
      "bookText": "Book Tickets",
      "avgVisit": "45 min",
      "crowd": {
        "morning": 3,
        "afternoon": 4,
        "evening": 2
      },
      "nearby": [
        {
          "name": "Real Mary King's Close",
          "walk": "5 min"
        },
        {
          "name": "Edinburgh Castle",
          "walk": "8 min"
        },
        {
          "name": "Victoria Street",
          "walk": "5 min"
        }
      ],
      "nearbyCafes": "See dining chapter in this guide.",
      "nearbyRestaurants": "See dining chapter in this guide.",
      "nearbyTube": "Waverley 8 min walk",
      "nearbyToilets": "On-site or nearby cafés.",
      "nearbyAtm": "High Street banks · Waverley station",
      "didYouKnow": "St Giles' is the High Kirk of Edinburgh and has stood on this site for over 900 years.",
      "localSecret": "The Thistle Chapel requires a small separate ticket but is worth every penny for its intricate carvings.",
      "instagram": {
        "sunset": "From Parliament Square — Thistle Chapel visible through the west door.",
        "sunrise": "From Parliament Square — Thistle Chapel visible through the west door.",
        "drone": "Check CAA rules — Holyrood Park restricted",
        "settings": "f/8 · ISO 200 · 24–70mm"
      },
      "photos": {
        "hero": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/St_Giles_Cathedral%2C_Edinburgh.jpg/960px-St_Giles_Cathedral%2C_Edinburgh.jpg",
        "detail": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/St_Giles%27_Kirk_%28High_Kirk%29%2C_Edinburgh.jpg/960px-St_Giles%27_Kirk_%28High_Kirk%29%2C_Edinburgh.jpg",
        "photoSpot": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/St_Giles%27_Cathedral_-_September_2017.jpg/960px-St_Giles%27_Cathedral_-_September_2017.jpg",
        "map": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/St_Giles_Cathedral_Nave.jpg/960px-St_Giles_Cathedral_Nave.jpg",
        "heroPosition": "center 40%"
      },
      "seasonalPhotos": {
        "spring": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/St_Giles_Cathedral%2C_Edinburgh.jpg/960px-St_Giles_Cathedral%2C_Edinburgh.jpg",
        "summer": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/St_Giles%27_Kirk_%28High_Kirk%29%2C_Edinburgh.jpg/960px-St_Giles%27_Kirk_%28High_Kirk%29%2C_Edinburgh.jpg",
        "autumn": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/St_Giles%27_Cathedral_-_September_2017.jpg/960px-St_Giles%27_Cathedral_-_September_2017.jpg",
        "christmas": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/St_Giles_Cathedral_Nave.jpg/960px-St_Giles_Cathedral_Nave.jpg"
      }
    },
    {
      "name": "The Real Mary King's Close",
      "address": "2 Warriston's Close · EH1 1PG",
      "hours": "10:00–17:00 · tours every 20 min",
      "tube": "Waverley 8 min walk",
      "ticket": "£22.50 adult · pre-book",
      "bestArrival": "10:00 or 16:00",
      "waitSummer": "20–40 min without booking",
      "waitWinter": "Walk-in often OK",
      "photoSpot": "Entrance on Royal Mile — atmospheric close signage.",
      "lens": "No flash underground — phone OK",
      "tip": "Guided tour only. Underground medieval streets preserved beneath the Royal Mile — book ahead in summer.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=The%20Real%20Mary%20King's%20Close%20Edinburgh",
      "bookUrl": "https://www.realmarykingsclose.com/",
      "bookText": "Book Tickets",
      "avgVisit": "1 hour",
      "crowd": {
        "morning": 3,
        "afternoon": 4,
        "evening": 2
      },
      "nearby": [
        {
          "name": "St Giles' Cathedral",
          "walk": "5 min"
        },
        {
          "name": "Edinburgh Castle",
          "walk": "10 min"
        },
        {
          "name": "Victoria Street",
          "walk": "5 min"
        }
      ],
      "nearbyCafes": "See dining chapter in this guide.",
      "nearbyRestaurants": "See dining chapter in this guide.",
      "nearbyTube": "Waverley 8 min walk",
      "nearbyToilets": "On-site or nearby cafés.",
      "nearbyAtm": "High Street banks · Waverley station",
      "didYouKnow": "Mary King's Close was sealed and built over in the 18th century — residents lived here until the plague of 1645.",
      "localSecret": "The last tour of the day often has the smallest groups and the most atmospheric lighting.",
      "instagram": {
        "sunset": "Entrance on Royal Mile — atmospheric close signage.",
        "sunrise": "Entrance on Royal Mile — atmospheric close signage.",
        "drone": "Check CAA rules — Holyrood Park restricted",
        "settings": "f/8 · ISO 200 · 24–70mm"
      },
      "photos": {
        "hero": "https://upload.wikimedia.org/wikipedia/commons/9/96/Marykingsclose006.jpg",
        "detail": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Mary_King%27s_Close_tour_%28under_Edinburgh%29..._%28Blake_Patterson%29_-_Flickr.jpg/960px-Mary_King%27s_Close_tour_%28under_Edinburgh%29..._%28Blake_Patterson%29_-_Flickr.jpg",
        "photoSpot": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Mary_King%27s_Close_%28Mario_RM%29_-_Flickr.jpg/960px-Mary_King%27s_Close_%28Mario_RM%29_-_Flickr.jpg",
        "map": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Worriston%27s_Close_%2815310709551%29.jpg/960px-Worriston%27s_Close_%2815310709551%29.jpg",
        "heroPosition": "center 40%"
      },
      "seasonalPhotos": {
        "spring": "https://upload.wikimedia.org/wikipedia/commons/9/96/Marykingsclose006.jpg",
        "summer": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Mary_King%27s_Close_tour_%28under_Edinburgh%29..._%28Blake_Patterson%29_-_Flickr.jpg/960px-Mary_King%27s_Close_tour_%28under_Edinburgh%29..._%28Blake_Patterson%29_-_Flickr.jpg",
        "autumn": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Mary_King%27s_Close_%28Mario_RM%29_-_Flickr.jpg/960px-Mary_King%27s_Close_%28Mario_RM%29_-_Flickr.jpg",
        "christmas": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Worriston%27s_Close_%2815310709551%29.jpg/960px-Worriston%27s_Close_%2815310709551%29.jpg"
      }
    },
    {
      "name": "Victoria Street",
      "address": "Victoria St · Old Town · EH1 2HE",
      "hours": "Always open · shops 10:00–18:00",
      "tube": "Waverley 10 min walk",
      "ticket": "Free",
      "bestArrival": "18:00 for golden light",
      "waitSummer": "0",
      "waitWinter": "0",
      "photoSpot": "From Grassmarket looking up — the curve and colour of Diagon Alley.",
      "lens": "16–35mm wide",
      "tip": "One of Edinburgh's most photographed streets. Widely believed to have inspired Diagon Alley in Harry Potter — wander slowly and shoot upward.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Victoria%20Street%20Edinburgh",
      "bookUrl": "https://www.google.com/maps/search/?api=1&query=Victoria%20Street%20Edinburgh",
      "bookText": "Book Tickets",
      "avgVisit": "30–45 min",
      "crowd": {
        "morning": 2,
        "afternoon": 4,
        "evening": 3
      },
      "nearby": [
        {
          "name": "Grassmarket",
          "walk": "2 min"
        },
        {
          "name": "Edinburgh Castle",
          "walk": "10 min"
        },
        {
          "name": "Greyfriars Kirkyard",
          "walk": "5 min"
        }
      ],
      "nearbyCafes": "See dining chapter in this guide.",
      "nearbyRestaurants": "See dining chapter in this guide.",
      "nearbyTube": "Waverley 10 min walk",
      "nearbyToilets": "On-site or nearby cafés.",
      "nearbyAtm": "High Street banks · Waverley station",
      "didYouKnow": "J.K. Rowling wrote much of Harry Potter in Edinburgh cafés — Victoria Street's colourful curve is the city's most Potter-esque corner.",
      "localSecret": "Walk down into Grassmarket for a completely different angle — fewer tourists, better light at sunset.",
      "instagram": {
        "sunset": "From Grassmarket looking up — the curve and colour of Diagon Alley.",
        "sunrise": "From Grassmarket looking up — the curve and colour of Diagon Alley.",
        "drone": "Check CAA rules — Holyrood Park restricted",
        "settings": "f/8 · ISO 200 · 24–70mm"
      },
      "photos": {
        "hero": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Victoria_Street_in_Edinburgh%2C_Scotland%2C_United_Kingdom_-_50436347402.jpg/960px-Victoria_Street_in_Edinburgh%2C_Scotland%2C_United_Kingdom_-_50436347402.jpg",
        "detail": "https://upload.wikimedia.org/wikipedia/commons/c/ca/Victoria_Street%2C_Edinburgh_-_geograph.org.uk_-_892845.jpg",
        "photoSpot": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Victoria_street%2C_Edinburgh_%2840316411770%29.jpg/960px-Victoria_street%2C_Edinburgh_%2840316411770%29.jpg",
        "map": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/West_Bow_and_Victoria_Street_-_02.jpg/960px-West_Bow_and_Victoria_Street_-_02.jpg",
        "heroPosition": "center 40%"
      },
      "seasonalPhotos": {
        "spring": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Victoria_Street_in_Edinburgh%2C_Scotland%2C_United_Kingdom_-_50436347402.jpg/960px-Victoria_Street_in_Edinburgh%2C_Scotland%2C_United_Kingdom_-_50436347402.jpg",
        "summer": "https://upload.wikimedia.org/wikipedia/commons/c/ca/Victoria_Street%2C_Edinburgh_-_geograph.org.uk_-_892845.jpg",
        "autumn": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Victoria_street%2C_Edinburgh_%2840316411770%29.jpg/960px-Victoria_street%2C_Edinburgh_%2840316411770%29.jpg",
        "christmas": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/West_Bow_and_Victoria_Street_-_02.jpg/960px-West_Bow_and_Victoria_Street_-_02.jpg"
      }
    },
    {
      "name": "Princes Street Gardens",
      "address": "Princes St · EH2 2AD",
      "hours": "07:00–dusk",
      "tube": "Waverley · Princes Street",
      "ticket": "Free",
      "bestArrival": "09:30",
      "photoSpot": "From the Ross Bandstand — castle framed above the gardens.",
      "lens": "24–70mm",
      "tip": "Beautiful castle views from the valley between Old and New Town. Perfect picnic spot on a sunny afternoon.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Princes%20Street%20Gardens%20Edinburgh",
      "bookUrl": "https://www.google.com/maps/search/?api=1&query=Princes%20Street%20Gardens%20Edinburgh",
      "bookText": "Book Tickets",
      "avgVisit": "45 min",
      "crowd": {
        "morning": 3,
        "afternoon": 4,
        "evening": 2
      },
      "nearby": [
        {
          "name": "Scott Monument",
          "walk": "3 min"
        },
        {
          "name": "Edinburgh Castle",
          "walk": "5 min"
        },
        {
          "name": "The Balmoral",
          "walk": "2 min"
        }
      ],
      "nearbyCafes": "See dining chapter in this guide.",
      "nearbyRestaurants": "See dining chapter in this guide.",
      "nearbyTube": "Waverley · Princes Street",
      "nearbyToilets": "On-site or nearby cafés.",
      "nearbyAtm": "High Street banks · Waverley station",
      "didYouKnow": "The gardens were created in the 1820s when the Nor' Loch — a polluted lake — was drained to form this green heart.",
      "localSecret": "The Scott Monument side has fewer crowds than the castle end at lunchtime.",
      "instagram": {
        "sunset": "From the Ross Bandstand — castle framed above the gardens.",
        "sunrise": "From the Ross Bandstand — castle framed above the gardens.",
        "drone": "Check CAA rules — Holyrood Park restricted",
        "settings": "f/8 · ISO 200 · 24–70mm"
      },
      "photos": {
        "hero": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Princes_Street_Gardens_20140319.jpg/960px-Princes_Street_Gardens_20140319.jpg",
        "detail": "https://upload.wikimedia.org/wikipedia/commons/1/1e/Princes_Street_Gardens_-_geograph.org.uk_-_1848168.jpg",
        "photoSpot": "https://upload.wikimedia.org/wikipedia/commons/2/23/Princes_Street_Gardens_West_-_geograph.org.uk_-_2236120.jpg",
        "map": "https://upload.wikimedia.org/wikipedia/commons/1/16/Princes_Street_Gardens_-_geograph.org.uk_-_2286913.jpg",
        "heroPosition": "center 40%"
      },
      "seasonalPhotos": {
        "spring": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Princes_Street_Gardens_20140319.jpg/960px-Princes_Street_Gardens_20140319.jpg",
        "summer": "https://upload.wikimedia.org/wikipedia/commons/1/1e/Princes_Street_Gardens_-_geograph.org.uk_-_1848168.jpg",
        "autumn": "https://upload.wikimedia.org/wikipedia/commons/2/23/Princes_Street_Gardens_West_-_geograph.org.uk_-_2236120.jpg",
        "christmas": "https://upload.wikimedia.org/wikipedia/commons/1/16/Princes_Street_Gardens_-_geograph.org.uk_-_2286913.jpg"
      }
    },
    {
      "name": "Scott Monument",
      "address": "E. Princes St Gardens · EH2 2EJ",
      "hours": "10:00–19:00 Apr–Sep · shorter in winter",
      "tube": "Waverley 3 min walk",
      "ticket": "£8 adult · optional climb",
      "bestArrival": "10:30",
      "photoSpot": "From Princes Street — full Gothic spire against the sky.",
      "lens": "24mm",
      "tip": "Optional climb — 287 steps to the top. Narrow staircase but the view over New Town is spectacular.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Scott%20Monument%20Edinburgh",
      "bookUrl": "https://www.edinburghmuseums.org.uk/venue/scott-monument",
      "bookText": "Book Tickets",
      "avgVisit": "45 min",
      "crowd": {
        "morning": 3,
        "afternoon": 4,
        "evening": 2
      },
      "nearby": [
        {
          "name": "Princes Street Gardens",
          "walk": "1 min"
        },
        {
          "name": "Dean Village",
          "walk": "15 min"
        },
        {
          "name": "Calton Hill",
          "walk": "15 min"
        }
      ],
      "nearbyCafes": "See dining chapter in this guide.",
      "nearbyRestaurants": "See dining chapter in this guide.",
      "nearbyTube": "Waverley 3 min walk",
      "nearbyToilets": "On-site or nearby cafés.",
      "nearbyAtm": "High Street banks · Waverley station",
      "didYouKnow": "Built in 1844 to honour Sir Walter Scott — at 61 metres it is the largest monument to a writer in the world.",
      "localSecret": "Climb on a clear morning before the wind picks up — the top platform gets gusty after noon.",
      "instagram": {
        "sunset": "From Princes Street — full Gothic spire against the sky.",
        "sunrise": "From Princes Street — full Gothic spire against the sky.",
        "drone": "Check CAA rules — Holyrood Park restricted",
        "settings": "f/8 · ISO 200 · 24–70mm"
      },
      "photos": {
        "hero": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Scott_Monument%2C_Edinburgh%2C_May_2008.jpg/960px-Scott_Monument%2C_Edinburgh%2C_May_2008.jpg",
        "detail": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Scott_Monument%2C_Edinburgh_01.jpg/960px-Scott_Monument%2C_Edinburgh_01.jpg",
        "photoSpot": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/The_Scott_Monument%2C_Princes_Street_Gardens.jpg/960px-The_Scott_Monument%2C_Princes_Street_Gardens.jpg",
        "map": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/The_Scott_Monument_from_The_Mound.jpg/960px-The_Scott_Monument_from_The_Mound.jpg",
        "heroPosition": "center 40%"
      },
      "seasonalPhotos": {
        "spring": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Scott_Monument%2C_Edinburgh%2C_May_2008.jpg/960px-Scott_Monument%2C_Edinburgh%2C_May_2008.jpg",
        "summer": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Scott_Monument%2C_Edinburgh_01.jpg/960px-Scott_Monument%2C_Edinburgh_01.jpg",
        "autumn": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/The_Scott_Monument%2C_Princes_Street_Gardens.jpg/960px-The_Scott_Monument%2C_Princes_Street_Gardens.jpg",
        "christmas": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/The_Scott_Monument_from_The_Mound.jpg/960px-The_Scott_Monument_from_The_Mound.jpg"
      }
    },
    {
      "name": "Dean Village",
      "address": "Dean Path · EH4 3AY",
      "hours": "Always open",
      "tube": "Bus 19/41 to Dean Bridge",
      "ticket": "Free",
      "bestArrival": "11:30",
      "photoSpot": "From Dean Bridge — Water of Leith and stone cottages below.",
      "lens": "35mm",
      "tip": "One of Edinburgh's hidden gems. Take your time for photos — the village feels frozen in the 19th century.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Dean%20Village%20Edinburgh",
      "bookUrl": "https://www.google.com/maps/search/?api=1&query=Dean%20Village%20Edinburgh",
      "bookText": "Book Tickets",
      "avgVisit": "45–60 min",
      "crowd": {
        "morning": 3,
        "afternoon": 4,
        "evening": 2
      },
      "nearby": [
        {
          "name": "Royal Botanic Garden",
          "walk": "15 min"
        },
        {
          "name": "Cairngorm Coffee",
          "walk": "12 min"
        },
        {
          "name": "Calton Hill",
          "walk": "25 min"
        }
      ],
      "nearbyCafes": "See dining chapter in this guide.",
      "nearbyRestaurants": "See dining chapter in this guide.",
      "nearbyTube": "Bus 19/41 to Dean Bridge",
      "nearbyToilets": "On-site or nearby cafés.",
      "nearbyAtm": "High Street banks · Waverley station",
      "didYouKnow": "Dean Village was a grain-milling hub in the 19th century — the Well Court tenements were built for mill workers.",
      "localSecret": "Follow the Water of Leith walkway downstream for quieter paths than the main bridge viewpoint.",
      "instagram": {
        "sunset": "From Dean Bridge — Water of Leith and stone cottages below.",
        "sunrise": "From Dean Bridge — Water of Leith and stone cottages below.",
        "drone": "Check CAA rules — Holyrood Park restricted",
        "settings": "f/8 · ISO 200 · 24–70mm"
      },
      "photos": {
        "hero": "https://upload.wikimedia.org/wikipedia/commons/e/ef/Dean_village%2C_Edinburgh_-_geograph.org.uk_-_1296483.jpg",
        "detail": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Restored_buildings_in_Dean_Village%2C_Edinburgh_04.jpg/960px-Restored_buildings_in_Dean_Village%2C_Edinburgh_04.jpg",
        "photoSpot": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Edinburgh_-_12_Hawthornbank_Lane%2C_Dean_Village%2C_Edinburgh_-_20140426192733.jpg/960px-Edinburgh_-_12_Hawthornbank_Lane%2C_Dean_Village%2C_Edinburgh_-_20140426192733.jpg",
        "map": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Modern_buildings_in_Dean_Village%2C_Edinburgh_01.jpg/960px-Modern_buildings_in_Dean_Village%2C_Edinburgh_01.jpg",
        "heroPosition": "center 40%"
      },
      "seasonalPhotos": {
        "spring": "https://upload.wikimedia.org/wikipedia/commons/e/ef/Dean_village%2C_Edinburgh_-_geograph.org.uk_-_1296483.jpg",
        "summer": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Restored_buildings_in_Dean_Village%2C_Edinburgh_04.jpg/960px-Restored_buildings_in_Dean_Village%2C_Edinburgh_04.jpg",
        "autumn": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Edinburgh_-_12_Hawthornbank_Lane%2C_Dean_Village%2C_Edinburgh_-_20140426192733.jpg/960px-Edinburgh_-_12_Hawthornbank_Lane%2C_Dean_Village%2C_Edinburgh_-_20140426192733.jpg",
        "christmas": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Modern_buildings_in_Dean_Village%2C_Edinburgh_01.jpg/960px-Modern_buildings_in_Dean_Village%2C_Edinburgh_01.jpg"
      }
    },
    {
      "name": "Royal Botanic Garden Edinburgh",
      "address": "Arboretum Pl · EH3 5NZ",
      "hours": "10:00–18:00 · gates close 17:45",
      "tube": "Bus 8/23/27 to Inverleith Row",
      "ticket": "Gardens free · Glasshouses £7",
      "bestArrival": "16:00",
      "photoSpot": "From the Chinese Hillside — Edinburgh skyline through the trees.",
      "lens": "50–85mm for details",
      "tip": "Relaxing afternoon escape. Glasshouses worth the ticket in rain — the outdoor gardens are free.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Royal%20Botanic%20Garden%20Edinburgh",
      "bookUrl": "https://www.rbge.org.uk/",
      "bookText": "Book Tickets",
      "avgVisit": "2 hours",
      "crowd": {
        "morning": 3,
        "afternoon": 4,
        "evening": 2
      },
      "nearby": [
        {
          "name": "Dean Village",
          "walk": "15 min"
        },
        {
          "name": "Stockbridge",
          "walk": "10 min"
        }
      ],
      "nearbyCafes": "See dining chapter in this guide.",
      "nearbyRestaurants": "See dining chapter in this guide.",
      "nearbyTube": "Bus 8/23/27 to Inverleith Row",
      "nearbyToilets": "On-site or nearby cafés.",
      "nearbyAtm": "High Street banks · Waverley station",
      "didYouKnow": "Founded in 1670, RBGE is one of the world's oldest botanic gardens and home to over 13,000 plant species.",
      "localSecret": "The Inverleith House art gallery within the gardens hosts excellent free exhibitions.",
      "instagram": {
        "sunset": "From the Chinese Hillside — Edinburgh skyline through the trees.",
        "sunrise": "From the Chinese Hillside — Edinburgh skyline through the trees.",
        "drone": "Check CAA rules — Holyrood Park restricted",
        "settings": "f/8 · ISO 200 · 24–70mm"
      },
      "photos": {
        "hero": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Palm_House%2C_Royal_Botanic_Garden_Edinburgh.JPG/960px-Palm_House%2C_Royal_Botanic_Garden_Edinburgh.JPG",
        "detail": "https://upload.wikimedia.org/wikipedia/commons/c/cd/Edinburgh_Royal_Botanic_Gardens_-_petrified_tree_trunk_-_geograph.org.uk_-_2296184.jpg",
        "photoSpot": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Satureja_subspicata%2C_Royal_Botanic_Garden_Edinburgh%2C_Scotland%2C_GB%2C_IMG_3779_edit.jpg/960px-Satureja_subspicata%2C_Royal_Botanic_Garden_Edinburgh%2C_Scotland%2C_GB%2C_IMG_3779_edit.jpg",
        "map": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Helianthemum%2C_Royal_Botanic_Garden_Edinburgh%2C_Scotland%2C_GB%2C_IMG_3770_edit.jpg/960px-Helianthemum%2C_Royal_Botanic_Garden_Edinburgh%2C_Scotland%2C_GB%2C_IMG_3770_edit.jpg",
        "heroPosition": "center 40%"
      },
      "seasonalPhotos": {
        "spring": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Palm_House%2C_Royal_Botanic_Garden_Edinburgh.JPG/960px-Palm_House%2C_Royal_Botanic_Garden_Edinburgh.JPG",
        "summer": "https://upload.wikimedia.org/wikipedia/commons/c/cd/Edinburgh_Royal_Botanic_Gardens_-_petrified_tree_trunk_-_geograph.org.uk_-_2296184.jpg",
        "autumn": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Satureja_subspicata%2C_Royal_Botanic_Garden_Edinburgh%2C_Scotland%2C_GB%2C_IMG_3779_edit.jpg/960px-Satureja_subspicata%2C_Royal_Botanic_Garden_Edinburgh%2C_Scotland%2C_GB%2C_IMG_3779_edit.jpg",
        "christmas": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Helianthemum%2C_Royal_Botanic_Garden_Edinburgh%2C_Scotland%2C_GB%2C_IMG_3770_edit.jpg/960px-Helianthemum%2C_Royal_Botanic_Garden_Edinburgh%2C_Scotland%2C_GB%2C_IMG_3770_edit.jpg"
      }
    },
    {
      "name": "Calton Hill",
      "address": "Calton Hill · EH7 5AA",
      "hours": "Always open",
      "tube": "Bus 7/8/14 to Regent Road",
      "ticket": "Free",
      "bestArrival": "18:30 for sunset",
      "photoSpot": "From the National Monument — Athens of the North panorama.",
      "lens": "16–35mm",
      "tip": "Best sunset viewpoint in Edinburgh. The Parthenon-style National Monument and Nelson's Monument define the skyline.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Calton%20Hill%20Edinburgh",
      "bookUrl": "https://www.google.com/maps/search/?api=1&query=Calton%20Hill%20Edinburgh",
      "bookText": "Book Tickets",
      "avgVisit": "45 min",
      "crowd": {
        "morning": 2,
        "afternoon": 3,
        "evening": 5
      },
      "nearby": [
        {
          "name": "The Dome",
          "walk": "8 min"
        },
        {
          "name": "Holyrood Palace",
          "walk": "10 min"
        },
        {
          "name": "Arthur's Seat",
          "walk": "20 min"
        }
      ],
      "nearbyCafes": "See dining chapter in this guide.",
      "nearbyRestaurants": "See dining chapter in this guide.",
      "nearbyTube": "Bus 7/8/14 to Regent Road",
      "nearbyToilets": "On-site or nearby cafés.",
      "nearbyAtm": "High Street banks · Waverley station",
      "didYouKnow": "Calton Hill's unfinished National Monument earned Edinburgh the nickname \"Athens of the North\".",
      "localSecret": "Climb Nelson's Monument (£6) for a view that includes Arthur's Seat, the castle, and the Firth of Forth.",
      "instagram": {
        "sunset": "From the National Monument — Athens of the North panorama.",
        "sunrise": "From the National Monument — Athens of the North panorama.",
        "drone": "Check CAA rules — Holyrood Park restricted",
        "settings": "f/8 · ISO 200 · 24–70mm"
      },
      "photos": {
        "hero": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Edinburgh_Calton_Hill.jpg/960px-Edinburgh_Calton_Hill.jpg",
        "detail": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Calton_Hill_20140318.jpg/960px-Calton_Hill_20140318.jpg",
        "photoSpot": "https://upload.wikimedia.org/wikipedia/commons/6/69/View_from_Calton_Hill_-_geograph.org.uk_-_1987009.jpg",
        "map": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Edinburgh_Calton_Hill_from_Salisbury_Crags_20211019.jpg/960px-Edinburgh_Calton_Hill_from_Salisbury_Crags_20211019.jpg",
        "heroPosition": "center 40%"
      },
      "seasonalPhotos": {
        "spring": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Edinburgh_Calton_Hill.jpg/960px-Edinburgh_Calton_Hill.jpg",
        "summer": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Calton_Hill_20140318.jpg/960px-Calton_Hill_20140318.jpg",
        "autumn": "https://upload.wikimedia.org/wikipedia/commons/6/69/View_from_Calton_Hill_-_geograph.org.uk_-_1987009.jpg",
        "christmas": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Edinburgh_Calton_Hill_from_Salisbury_Crags_20211019.jpg/960px-Edinburgh_Calton_Hill_from_Salisbury_Crags_20211019.jpg"
      }
    },
    {
      "name": "Arthur's Seat",
      "address": "Holyrood Park · EH8 8AZ",
      "hours": "Always open · park gates close at dusk",
      "tube": "Bus 6 to Holyrood · walk from Old Town",
      "ticket": "Free",
      "bestArrival": "08:30 for sunrise",
      "waitSummer": "0",
      "waitWinter": "0",
      "photoSpot": "Summit cairn — 360° views over Edinburgh, the Forth, and the Pentland Hills.",
      "lens": "24mm · windproof jacket essential",
      "tip": "The highest point in Holyrood Park. Allow 2–3 hours for the hike. Best sunrise location in the city — wear proper shoes.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Arthur's%20Seat%20Edinburgh",
      "bookUrl": "https://www.google.com/maps/search/?api=1&query=Arthur's%20Seat%20Edinburgh",
      "bookText": "Book Tickets",
      "avgVisit": "2–3 hours",
      "crowd": {
        "morning": 2,
        "afternoon": 4,
        "evening": 3
      },
      "nearby": [
        {
          "name": "Holyrood Palace",
          "walk": "15 min"
        },
        {
          "name": "Salisbury Crags",
          "walk": "10 min"
        },
        {
          "name": "Hula Juice Bar",
          "walk": "20 min"
        }
      ],
      "nearbyCafes": "See dining chapter in this guide.",
      "nearbyRestaurants": "See dining chapter in this guide.",
      "nearbyTube": "Bus 6 to Holyrood · walk from Old Town",
      "nearbyToilets": "On-site or nearby cafés.",
      "nearbyAtm": "High Street banks · Waverley station",
      "didYouKnow": "Arthur's Seat is an ancient volcano rising 251 metres — people have climbed it for over 2,000 years.",
      "localSecret": "The Radical Road path along Salisbury Crags gives dramatic cliff views with half the summit crowd.",
      "instagram": {
        "sunset": "Summit cairn — 360° views over Edinburgh, the Forth, and the Pentland Hills.",
        "sunrise": "Summit cairn — 360° views over Edinburgh, the Forth, and the Pentland Hills.",
        "drone": "Check CAA rules — Holyrood Park restricted",
        "settings": "f/8 · ISO 200 · 24–70mm"
      },
      "photos": {
        "hero": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Edinburgh_Arthur_Seat_dsc06165.jpg/960px-Edinburgh_Arthur_Seat_dsc06165.jpg",
        "detail": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Walking_to_Arthur%27s_Seat.jpg/960px-Walking_to_Arthur%27s_Seat.jpg",
        "photoSpot": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Edinburgh_Arthur%27s_Seat-20110904-RM-124927.jpg/960px-Edinburgh_Arthur%27s_Seat-20110904-RM-124927.jpg",
        "map": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Arthur%27s_Seat_from_Calton_Hill.jpg/960px-Arthur%27s_Seat_from_Calton_Hill.jpg",
        "heroPosition": "center 40%"
      },
      "seasonalPhotos": {
        "spring": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Edinburgh_Arthur_Seat_dsc06165.jpg/960px-Edinburgh_Arthur_Seat_dsc06165.jpg",
        "summer": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Walking_to_Arthur%27s_Seat.jpg/960px-Walking_to_Arthur%27s_Seat.jpg",
        "autumn": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Edinburgh_Arthur%27s_Seat-20110904-RM-124927.jpg/960px-Edinburgh_Arthur%27s_Seat-20110904-RM-124927.jpg",
        "christmas": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Arthur%27s_Seat_from_Calton_Hill.jpg/960px-Arthur%27s_Seat_from_Calton_Hill.jpg"
      }
    },
    {
      "name": "Palace of Holyroodhouse",
      "address": "Canongate · EH8 8DX",
      "hours": "09:30–18:00 · closed Tue–Wed in winter",
      "tube": "Bus 6/35 to Holyrood",
      "ticket": "£19.50 adult",
      "bestArrival": "11:30",
      "photoSpot": "From the palace forecourt — abbey ruins and Arthur's Seat behind.",
      "lens": "24–50mm",
      "tip": "Official residence of the British monarch in Scotland. Combine with Arthur's Seat morning hike — palace opens late morning.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Palace%20of%20Holyroodhouse%20Edinburgh",
      "bookUrl": "https://www.rct.uk/visit/palace-of-holyroodhouse",
      "bookText": "Book Tickets",
      "avgVisit": "1.5 hours",
      "crowd": {
        "morning": 3,
        "afternoon": 4,
        "evening": 2
      },
      "nearby": [
        {
          "name": "Arthur's Seat",
          "walk": "15 min"
        },
        {
          "name": "Calton Hill",
          "walk": "10 min"
        },
        {
          "name": "Royal Mile",
          "walk": "10 min"
        }
      ],
      "nearbyCafes": "See dining chapter in this guide.",
      "nearbyRestaurants": "See dining chapter in this guide.",
      "nearbyTube": "Bus 6/35 to Holyrood",
      "nearbyToilets": "On-site or nearby cafés.",
      "nearbyAtm": "High Street banks · Waverley station",
      "didYouKnow": "Mary, Queen of Scots lived here during some of the most dramatic years of Scottish history.",
      "localSecret": "The abbey ruins at the rear are included in the ticket and far quieter than the state apartments.",
      "instagram": {
        "sunset": "From the palace forecourt — abbey ruins and Arthur's Seat behind.",
        "sunrise": "From the palace forecourt — abbey ruins and Arthur's Seat behind.",
        "drone": "Check CAA rules — Holyrood Park restricted",
        "settings": "f/8 · ISO 200 · 24–70mm"
      },
      "photos": {
        "hero": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Holyrood_Palace_and_Abbey.jpg/960px-Holyrood_Palace_and_Abbey.jpg",
        "detail": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Holyrood_Palace_main_entrance_20211021.jpg/960px-Holyrood_Palace_main_entrance_20211021.jpg",
        "photoSpot": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Holyrood_Palace_fountain_20211021.jpg/960px-Holyrood_Palace_fountain_20211021.jpg",
        "map": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/City_of_Edinburgh_-_Holyrood_Palace_-_20230414111828.jpg/960px-City_of_Edinburgh_-_Holyrood_Palace_-_20230414111828.jpg",
        "heroPosition": "center 40%"
      },
      "seasonalPhotos": {
        "spring": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Holyrood_Palace_and_Abbey.jpg/960px-Holyrood_Palace_and_Abbey.jpg",
        "summer": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Holyrood_Palace_main_entrance_20211021.jpg/960px-Holyrood_Palace_main_entrance_20211021.jpg",
        "autumn": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Holyrood_Palace_fountain_20211021.jpg/960px-Holyrood_Palace_fountain_20211021.jpg",
        "christmas": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/City_of_Edinburgh_-_Holyrood_Palace_-_20230414111828.jpg/960px-City_of_Edinburgh_-_Holyrood_Palace_-_20230414111828.jpg"
      }
    },
    {
      "name": "Royal Yacht Britannia",
      "address": "Ocean Dr · Leith · EH6 6JJ",
      "hours": "10:00–17:00 · last entry 16:00",
      "tube": "Bus 11/22/34/35 to Ocean Terminal",
      "ticket": "£19.50 adult",
      "bestArrival": "15:00",
      "photoSpot": "From the dockside — full length of the royal yacht against Leith water.",
      "lens": "24–70mm",
      "tip": "One of the UK's top attractions. Allow 2 hours for the self-guided audio tour through the royal apartments.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Royal%20Yacht%20Britannia%20Edinburgh",
      "bookUrl": "https://www.royalyachtbritannia.co.uk/",
      "bookText": "Book Tickets",
      "avgVisit": "2 hours",
      "crowd": {
        "morning": 3,
        "afternoon": 4,
        "evening": 2
      },
      "nearby": [
        {
          "name": "Fishers in Leith",
          "walk": "5 min"
        },
        {
          "name": "Leith Shore",
          "walk": "10 min"
        },
        {
          "name": "Williams & Johnson Coffee Co.",
          "walk": "8 min"
        }
      ],
      "nearbyCafes": "See dining chapter in this guide.",
      "nearbyRestaurants": "See dining chapter in this guide.",
      "nearbyTube": "Bus 11/22/34/35 to Ocean Terminal",
      "nearbyToilets": "On-site or nearby cafés.",
      "nearbyAtm": "High Street banks · Waverley station",
      "didYouKnow": "Britannia served the Royal Family for 44 years and travelled over one million nautical miles.",
      "localSecret": "The Royal Deck Tea Room on board serves excellent afternoon tea — book when you arrive.",
      "instagram": {
        "sunset": "From the dockside — full length of the royal yacht against Leith water.",
        "sunrise": "From the dockside — full length of the royal yacht against Leith water.",
        "drone": "Check CAA rules — Holyrood Park restricted",
        "settings": "f/8 · ISO 200 · 24–70mm"
      },
      "photos": {
        "hero": "https://upload.wikimedia.org/wikipedia/commons/e/e2/HMY_Britannia.jpg",
        "detail": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/HMY_Britannia_bow_20211027.jpg/960px-HMY_Britannia_bow_20211027.jpg",
        "photoSpot": "https://upload.wikimedia.org/wikipedia/commons/2/2a/Royal_Yacht_Britannia_-_geograph.org.uk_-_1855051.jpg",
        "map": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Royal_Yacht_Britannia%2C_engine_room_-_geograph.org.uk_-_2473894.jpg/960px-Royal_Yacht_Britannia%2C_engine_room_-_geograph.org.uk_-_2473894.jpg",
        "heroPosition": "center 40%"
      },
      "seasonalPhotos": {
        "spring": "https://upload.wikimedia.org/wikipedia/commons/e/e2/HMY_Britannia.jpg",
        "summer": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/HMY_Britannia_bow_20211027.jpg/960px-HMY_Britannia_bow_20211027.jpg",
        "autumn": "https://upload.wikimedia.org/wikipedia/commons/2/2a/Royal_Yacht_Britannia_-_geograph.org.uk_-_1855051.jpg",
        "christmas": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Royal_Yacht_Britannia%2C_engine_room_-_geograph.org.uk_-_2473894.jpg/960px-Royal_Yacht_Britannia%2C_engine_room_-_geograph.org.uk_-_2473894.jpg"
      }
    },
    {
      "name": "Leith Shore",
      "address": "The Shore · Leith · EH6 6QU",
      "hours": "Always open · restaurants from 12:00",
      "tube": "Bus 11/22/34 · taxi 15 min from centre",
      "ticket": "Free",
      "bestArrival": "17:30",
      "photoSpot": "Waterfront promenade — boats, boutiques, and local atmosphere.",
      "lens": "35mm",
      "tip": "Walk the waterfront after Britannia. Boutiques, seafood restaurants, and a completely different Edinburgh from the Old Town.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Leith%20Shore%20Edinburgh",
      "bookUrl": "https://www.google.com/maps/search/?api=1&query=Leith%20Shore%20Edinburgh",
      "bookText": "Book Tickets",
      "avgVisit": "1–2 hours",
      "crowd": {
        "morning": 3,
        "afternoon": 4,
        "evening": 2
      },
      "nearby": [
        {
          "name": "Royal Yacht Britannia",
          "walk": "10 min"
        },
        {
          "name": "Fishers in Leith",
          "walk": "5 min"
        },
        {
          "name": "The Ship on the Shore",
          "walk": "3 min"
        }
      ],
      "nearbyCafes": "See dining chapter in this guide.",
      "nearbyRestaurants": "See dining chapter in this guide.",
      "nearbyTube": "Bus 11/22/34 · taxi 15 min from centre",
      "nearbyToilets": "On-site or nearby cafés.",
      "nearbyAtm": "High Street banks · Waverley station",
      "didYouKnow": "Leith was an independent port town until 1920 — it still feels like Edinburgh's rebellious younger sibling.",
      "localSecret": "The Malmaison hotel bar has one of the best waterfront sunset views in the city.",
      "instagram": {
        "sunset": "Waterfront promenade — boats, boutiques, and local atmosphere.",
        "sunrise": "Waterfront promenade — boats, boutiques, and local atmosphere.",
        "drone": "Check CAA rules — Holyrood Park restricted",
        "settings": "f/8 · ISO 200 · 24–70mm"
      },
      "photos": {
        "hero": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/The_Shore_in_Leith_-_Winter_2009_-_geograph.org.uk_-_2166414.jpg/960px-The_Shore_in_Leith_-_Winter_2009_-_geograph.org.uk_-_2166414.jpg",
        "detail": "https://upload.wikimedia.org/wikipedia/commons/3/37/The_Shore%2C_Leith_-_geograph.org.uk_-_2367275.jpg",
        "photoSpot": "https://upload.wikimedia.org/wikipedia/commons/c/c5/Leith_Shore_-_geograph.org.uk_-_2941554.jpg",
        "map": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Shore%2C_Leith_-_geograph.org.uk_-_2722754.jpg/960px-Shore%2C_Leith_-_geograph.org.uk_-_2722754.jpg",
        "heroPosition": "center 40%"
      },
      "seasonalPhotos": {
        "spring": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/The_Shore_in_Leith_-_Winter_2009_-_geograph.org.uk_-_2166414.jpg/960px-The_Shore_in_Leith_-_Winter_2009_-_geograph.org.uk_-_2166414.jpg",
        "summer": "https://upload.wikimedia.org/wikipedia/commons/3/37/The_Shore%2C_Leith_-_geograph.org.uk_-_2367275.jpg",
        "autumn": "https://upload.wikimedia.org/wikipedia/commons/c/c5/Leith_Shore_-_geograph.org.uk_-_2941554.jpg",
        "christmas": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Shore%2C_Leith_-_geograph.org.uk_-_2722754.jpg/960px-Shore%2C_Leith_-_geograph.org.uk_-_2722754.jpg"
      }
    }
  ],
  "hotels": [
    {
      "name": "The Balmoral Hotel",
      "category": "Luxury",
      "address": "1 Princes St · EH2 2EQ",
      "price": "£450–900/night",
      "rating": "9.2",
      "googleRating": "4.7",
      "room": "Classic Castle View · clock tower landmark",
      "cancellation": "Free 48h · flexible rate",
      "tube": "Waverley Station 1 min walk",
      "airport": "EDI 30 min tram · 25 min taxi",
      "nearbyAttractions": "Royal Mile 5 min · Edinburgh Castle 8 min · Princes Street Gardens 1 min",
      "walkingScore": "99 / 100 — walk everywhere",
      "breakfast": "Included in premium rates",
      "idealFor": [
        "Couple",
        "Luxury",
        "First-time visitors"
      ],
      "tip": "The clock is set three minutes fast so travellers don't miss their trains. Ask for a south-facing room for castle views.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=The%20Balmoral%20Hotel%20Edinburgh",
      "bookUrl": "https://www.roccofortehotels.com/hotels-and-resorts/the-balmoral/",
      "photos": {
        "exterior": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Balmoral_Hotel.jpg/960px-Balmoral_Hotel.jpg",
        "lobby": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/The_Balmoral_Hotel%2C_Edinburgh.jpg/960px-The_Balmoral_Hotel%2C_Edinburgh.jpg",
        "room": "https://upload.wikimedia.org/wikipedia/commons/d/d0/The_Balmoral_Hotel%2C_Edinburgh_-_geograph.org.uk_-_1712634.jpg",
        "luxuryRoom": "https://upload.wikimedia.org/wikipedia/commons/d/d0/The_Balmoral_Hotel%2C_Edinburgh_-_geograph.org.uk_-_1712634.jpg",
        "restaurant": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/The_Balmoral_Hotel%2C_Edinburgh.jpg/960px-The_Balmoral_Hotel%2C_Edinburgh.jpg",
        "pool": "https://upload.wikimedia.org/wikipedia/commons/a/a7/Balmoral_Hotel_and_North_Bridge%2C_Edinburgh_-_geograph.org.uk_-_2819940.jpg",
        "rooftop": "https://upload.wikimedia.org/wikipedia/commons/d/d0/The_Balmoral_Hotel%2C_Edinburgh_-_geograph.org.uk_-_1712634.jpg",
        "breakfast": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/The_Balmoral_Hotel%2C_Edinburgh.jpg/960px-The_Balmoral_Hotel%2C_Edinburgh.jpg",
        "spa": "https://upload.wikimedia.org/wikipedia/commons/a/a7/Balmoral_Hotel_and_North_Bridge%2C_Edinburgh_-_geograph.org.uk_-_2819940.jpg",
        "view": "https://upload.wikimedia.org/wikipedia/commons/d/d0/The_Balmoral_Hotel%2C_Edinburgh_-_geograph.org.uk_-_1712634.jpg"
      }
    },
    {
      "name": "The Witchery by the Castle",
      "category": "Luxury",
      "address": "Castlehill · Royal Mile · EH1 2NF",
      "price": "£350–650/night",
      "rating": "9.4",
      "googleRating": "4.8",
      "room": "Historic Suite · next to Edinburgh Castle",
      "cancellation": "Non-refundable suites · flexible on request",
      "tube": "Waverley 10 min walk",
      "airport": "EDI 30 min",
      "nearbyAttractions": "Edinburgh Castle 2 min · Victoria Street 8 min · St Giles' 5 min",
      "walkingScore": "100 / 100 — Old Town doorstep",
      "breakfast": "Included in suite rates",
      "idealFor": [
        "Couple",
        "Honeymoon",
        "Luxury"
      ],
      "tip": "Historic luxury suites in a 16th-century building. Ideal for honeymooners — book the Signature Suite for the four-poster.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=The%20Witchery%20by%20the%20Castle%20Edinburgh",
      "bookUrl": "https://www.thewitchery.com/",
      "photos": {
        "exterior": "https://upload.wikimedia.org/wikipedia/commons/2/27/The_Witchery_-_geograph.org.uk_-_612172.jpg",
        "lobby": "https://upload.wikimedia.org/wikipedia/commons/1/12/The_Witchery_pub_and_restaurant%2C_Royal_Mile_-_geograph.org.uk_-_973191.jpg",
        "room": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Boswell%27s_Court_%28Now_The_Witchery_by_the_Castle%29%2C_352_Castlehill%2C_The_Royal_Mile%2C_Edinburgh.jpg/960px-Boswell%27s_Court_%28Now_The_Witchery_by_the_Castle%29%2C_352_Castlehill%2C_The_Royal_Mile%2C_Edinburgh.jpg",
        "luxuryRoom": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Boswell%27s_Court_%28Now_The_Witchery_by_the_Castle%29%2C_352_Castlehill%2C_The_Royal_Mile%2C_Edinburgh.jpg/960px-Boswell%27s_Court_%28Now_The_Witchery_by_the_Castle%29%2C_352_Castlehill%2C_The_Royal_Mile%2C_Edinburgh.jpg",
        "restaurant": "https://upload.wikimedia.org/wikipedia/commons/1/12/The_Witchery_pub_and_restaurant%2C_Royal_Mile_-_geograph.org.uk_-_973191.jpg",
        "pool": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Boswell%27s_Court_%28Now_The_Witchery_by_the_Castle%29%2C_352_Castlehill%2C_The_Royal_Mile%2C_Edinburgh_%284%29.jpg/960px-Boswell%27s_Court_%28Now_The_Witchery_by_the_Castle%29%2C_352_Castlehill%2C_The_Royal_Mile%2C_Edinburgh_%284%29.jpg",
        "rooftop": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Boswell%27s_Court_%28Now_The_Witchery_by_the_Castle%29%2C_352_Castlehill%2C_The_Royal_Mile%2C_Edinburgh.jpg/960px-Boswell%27s_Court_%28Now_The_Witchery_by_the_Castle%29%2C_352_Castlehill%2C_The_Royal_Mile%2C_Edinburgh.jpg",
        "breakfast": "https://upload.wikimedia.org/wikipedia/commons/1/12/The_Witchery_pub_and_restaurant%2C_Royal_Mile_-_geograph.org.uk_-_973191.jpg",
        "spa": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Boswell%27s_Court_%28Now_The_Witchery_by_the_Castle%29%2C_352_Castlehill%2C_The_Royal_Mile%2C_Edinburgh_%284%29.jpg/960px-Boswell%27s_Court_%28Now_The_Witchery_by_the_Castle%29%2C_352_Castlehill%2C_The_Royal_Mile%2C_Edinburgh_%284%29.jpg",
        "view": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Boswell%27s_Court_%28Now_The_Witchery_by_the_Castle%29%2C_352_Castlehill%2C_The_Royal_Mile%2C_Edinburgh.jpg/960px-Boswell%27s_Court_%28Now_The_Witchery_by_the_Castle%29%2C_352_Castlehill%2C_The_Royal_Mile%2C_Edinburgh.jpg"
      }
    },
    {
      "name": "Market Street Hotel",
      "category": "Mid-Range",
      "address": "Market St · EH1 1DE",
      "price": "£180–300/night",
      "rating": "8.9",
      "googleRating": "4.5",
      "room": "Superior King · modern design",
      "cancellation": "Free 24h",
      "tube": "Waverley Station 2 min walk",
      "airport": "EDI 30 min tram from Waverley",
      "nearbyAttractions": "Royal Mile 3 min · Edinburgh Castle 10 min · Princes Street 2 min",
      "walkingScore": "98 / 100 — city centre",
      "breakfast": "Extra £18pp",
      "idealFor": [
        "Couple",
        "Business",
        "First-time visitors"
      ],
      "tip": "Modern design with excellent location above Waverley. Rooftop bar has one of the best castle views in the city.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Market%20Street%20Hotel%20Edinburgh",
      "bookUrl": "https://www.marketstreethotel.co.uk/",
      "photos": {
        "exterior": "https://upload.wikimedia.org/wikipedia/commons/3/38/Market_Street%2C_Edinburgh_-_geograph.org.uk_-_1162879.jpg",
        "lobby": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Buildings_along_Market_Street%2C_Edinburgh%2C_06.08.2015.jpg/960px-Buildings_along_Market_Street%2C_Edinburgh%2C_06.08.2015.jpg",
        "room": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Edinburgh%2C_9%2C_10%2C_11_Market_Street%2C_St_Christopher%27s_Hotel.jpg/960px-Edinburgh%2C_9%2C_10%2C_11_Market_Street%2C_St_Christopher%27s_Hotel.jpg",
        "luxuryRoom": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Edinburgh%2C_9%2C_10%2C_11_Market_Street%2C_St_Christopher%27s_Hotel.jpg/960px-Edinburgh%2C_9%2C_10%2C_11_Market_Street%2C_St_Christopher%27s_Hotel.jpg",
        "restaurant": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Buildings_along_Market_Street%2C_Edinburgh%2C_06.08.2015.jpg/960px-Buildings_along_Market_Street%2C_Edinburgh%2C_06.08.2015.jpg",
        "pool": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Market_Street%2C_Edinburgh_-_geograph.org.uk_-_2475566.jpg/960px-Market_Street%2C_Edinburgh_-_geograph.org.uk_-_2475566.jpg",
        "rooftop": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Edinburgh%2C_9%2C_10%2C_11_Market_Street%2C_St_Christopher%27s_Hotel.jpg/960px-Edinburgh%2C_9%2C_10%2C_11_Market_Street%2C_St_Christopher%27s_Hotel.jpg",
        "breakfast": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Buildings_along_Market_Street%2C_Edinburgh%2C_06.08.2015.jpg/960px-Buildings_along_Market_Street%2C_Edinburgh%2C_06.08.2015.jpg",
        "spa": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Market_Street%2C_Edinburgh_-_geograph.org.uk_-_2475566.jpg/960px-Market_Street%2C_Edinburgh_-_geograph.org.uk_-_2475566.jpg",
        "view": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Edinburgh%2C_9%2C_10%2C_11_Market_Street%2C_St_Christopher%27s_Hotel.jpg/960px-Edinburgh%2C_9%2C_10%2C_11_Market_Street%2C_St_Christopher%27s_Hotel.jpg"
      }
    },
    {
      "name": "Motel One Edinburgh – Royal",
      "category": "Mid-Range",
      "address": "18 Market St · EH1 1BL",
      "price": "£120–200/night",
      "rating": "8.7",
      "googleRating": "4.4",
      "room": "Standard Queen · fantastic value",
      "cancellation": "Free until 18:00 day of arrival",
      "tube": "Waverley 1 min walk",
      "airport": "EDI 30 min",
      "nearbyAttractions": "Royal Mile 3 min · Castle 10 min · Trams at St Andrew Square",
      "walkingScore": "97 / 100 — walk everywhere",
      "breakfast": "Buffet £15pp",
      "idealFor": [
        "Couple",
        "Solo",
        "Budget-conscious"
      ],
      "tip": "Fantastic value for the location. Walk everywhere from here — no taxi needed for the entire 3-day itinerary.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Motel%20One%20Edinburgh%20%E2%80%93%20Royal",
      "bookUrl": "https://www.motel-one.com/en/hotels/edinburgh/hotel-edinburgh-royal/",
      "photos": {
        "exterior": "https://upload.wikimedia.org/wikipedia/commons/1/15/Motel_One_-_Edinburgh_Royal_-_geograph.org.uk_-_3506244.jpg",
        "lobby": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Apple_Store-_Motel_One%2C_Princes_Street%2C_Edinburgh.jpg/960px-Apple_Store-_Motel_One%2C_Princes_Street%2C_Edinburgh.jpg",
        "room": "https://upload.wikimedia.org/wikipedia/commons/7/7c/Cockburn_Street_at_Market_Street_-_geograph.org.uk_-_1253679.jpg",
        "luxuryRoom": "https://upload.wikimedia.org/wikipedia/commons/7/7c/Cockburn_Street_at_Market_Street_-_geograph.org.uk_-_1253679.jpg",
        "restaurant": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Apple_Store-_Motel_One%2C_Princes_Street%2C_Edinburgh.jpg/960px-Apple_Store-_Motel_One%2C_Princes_Street%2C_Edinburgh.jpg",
        "pool": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Edinburgh%2C_Market_Street%2C_Police_Call_Box_-_20130831195742.jpg/960px-Edinburgh%2C_Market_Street%2C_Police_Call_Box_-_20130831195742.jpg",
        "rooftop": "https://upload.wikimedia.org/wikipedia/commons/7/7c/Cockburn_Street_at_Market_Street_-_geograph.org.uk_-_1253679.jpg",
        "breakfast": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Apple_Store-_Motel_One%2C_Princes_Street%2C_Edinburgh.jpg/960px-Apple_Store-_Motel_One%2C_Princes_Street%2C_Edinburgh.jpg",
        "spa": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Edinburgh%2C_Market_Street%2C_Police_Call_Box_-_20130831195742.jpg/960px-Edinburgh%2C_Market_Street%2C_Police_Call_Box_-_20130831195742.jpg",
        "view": "https://upload.wikimedia.org/wikipedia/commons/7/7c/Cockburn_Street_at_Market_Street_-_geograph.org.uk_-_1253679.jpg"
      }
    },
    {
      "name": "Apex Grassmarket Hotel",
      "category": "Mid-Range",
      "address": "31–35 Grassmarket · EH1 2HS",
      "price": "£150–280/night",
      "rating": "8.8",
      "googleRating": "4.5",
      "room": "Castle View Room · pool access",
      "cancellation": "Free 48h",
      "tube": "Bus 2/23/27 from Grassmarket",
      "airport": "EDI 35 min taxi",
      "nearbyAttractions": "Edinburgh Castle 5 min · Victoria Street 2 min · Greyfriars 3 min",
      "walkingScore": "96 / 100 — Old Town",
      "breakfast": "Extra £16pp",
      "idealFor": [
        "Family",
        "Couple",
        "Castle views"
      ],
      "tip": "Castle views from many rooms plus a pool — rare in Old Town Edinburgh. Grassmarket pubs on your doorstep.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Apex%20Grassmarket%20Hotel%20Edinburgh",
      "bookUrl": "https://www.apexhotels.co.uk/destinations/edinburgh/apex-grassmarket/",
      "photos": {
        "exterior": "https://upload.wikimedia.org/wikipedia/commons/7/79/Grassmarket%2C_Edinburgh%2C_12_August_2013.jpg",
        "lobby": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Edinburgh%2C_60_Grassmarket.jpg/960px-Edinburgh%2C_60_Grassmarket.jpg",
        "room": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Edinburgh%2C_74_-_78_Grassmarket_01.jpg/960px-Edinburgh%2C_74_-_78_Grassmarket_01.jpg",
        "luxuryRoom": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Edinburgh%2C_74_-_78_Grassmarket_01.jpg/960px-Edinburgh%2C_74_-_78_Grassmarket_01.jpg",
        "restaurant": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Edinburgh%2C_60_Grassmarket.jpg/960px-Edinburgh%2C_60_Grassmarket.jpg",
        "pool": "https://upload.wikimedia.org/wikipedia/commons/e/ee/Grassmarket_by_night%2C_Edinburgh_-_geograph.org.uk_-_2622075.jpg",
        "rooftop": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Edinburgh%2C_74_-_78_Grassmarket_01.jpg/960px-Edinburgh%2C_74_-_78_Grassmarket_01.jpg",
        "breakfast": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Edinburgh%2C_60_Grassmarket.jpg/960px-Edinburgh%2C_60_Grassmarket.jpg",
        "spa": "https://upload.wikimedia.org/wikipedia/commons/e/ee/Grassmarket_by_night%2C_Edinburgh_-_geograph.org.uk_-_2622075.jpg",
        "view": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Edinburgh%2C_74_-_78_Grassmarket_01.jpg/960px-Edinburgh%2C_74_-_78_Grassmarket_01.jpg"
      }
    },
    {
      "name": "ibis Edinburgh Centre South Bridge",
      "category": "Budget",
      "address": "33 South Bridge · EH1 1LL",
      "price": "£90–150/night",
      "rating": "8.2",
      "googleRating": "4.1",
      "room": "Standard Double · excellent location",
      "cancellation": "Free 18:00 day before",
      "tube": "Waverley 5 min walk",
      "airport": "EDI 30 min",
      "nearbyAttractions": "Royal Mile 2 min · Edinburgh Castle 8 min · University 5 min",
      "walkingScore": "97 / 100 — Old Town core",
      "breakfast": "Buffet £10pp",
      "idealFor": [
        "Solo",
        "Couple",
        "Budget"
      ],
      "tip": "Excellent location on South Bridge — Royal Mile in two minutes. Reliable ibis quality at a fraction of luxury prices.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=ibis%20Edinburgh%20Centre%20South%20Bridge",
      "bookUrl": "https://all.accor.com/hotel/B0K8/index.en.shtml",
      "photos": {
        "exterior": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/60-61_South_Bridge%2C_Edinburgh.jpg/960px-60-61_South_Bridge%2C_Edinburgh.jpg",
        "lobby": "https://upload.wikimedia.org/wikipedia/commons/c/cb/Tenements%2C_South_Bridge_-_geograph.org.uk_-_2298871.jpg",
        "room": "https://upload.wikimedia.org/wikipedia/commons/2/2a/South_Bridge_tenement_-_geograph.org.uk_-_2568349.jpg",
        "luxuryRoom": "https://upload.wikimedia.org/wikipedia/commons/2/2a/South_Bridge_tenement_-_geograph.org.uk_-_2568349.jpg",
        "restaurant": "https://upload.wikimedia.org/wikipedia/commons/c/cb/Tenements%2C_South_Bridge_-_geograph.org.uk_-_2298871.jpg",
        "pool": "https://upload.wikimedia.org/wikipedia/commons/2/22/South_Bridge_-_geograph.org.uk_-_2258866.jpg",
        "rooftop": "https://upload.wikimedia.org/wikipedia/commons/2/2a/South_Bridge_tenement_-_geograph.org.uk_-_2568349.jpg",
        "breakfast": "https://upload.wikimedia.org/wikipedia/commons/c/cb/Tenements%2C_South_Bridge_-_geograph.org.uk_-_2298871.jpg",
        "spa": "https://upload.wikimedia.org/wikipedia/commons/2/22/South_Bridge_-_geograph.org.uk_-_2258866.jpg",
        "view": "https://upload.wikimedia.org/wikipedia/commons/2/2a/South_Bridge_tenement_-_geograph.org.uk_-_2568349.jpg"
      }
    },
    {
      "name": "Premier Inn Edinburgh City Centre",
      "category": "Budget",
      "address": "82–94 Morrison St · EH3 8BP",
      "price": "£80–140/night",
      "rating": "8.4",
      "googleRating": "4.2",
      "room": "Double · reliable chain comfort",
      "cancellation": "Free if Flex rate",
      "tube": "Haymarket 5 min · tram to airport",
      "airport": "EDI 35 min tram direct",
      "nearbyAttractions": "Princes Street 10 min · Castle 15 min · Dean Village 15 min",
      "walkingScore": "88 / 100 — West End",
      "breakfast": "Unlimited £10.99",
      "idealFor": [
        "Family",
        "Budget",
        "Reliable"
      ],
      "tip": "Reliable Premier Inn comfort. Walking distance to attractions and Haymarket tram stop for the airport.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Premier%20Inn%20Edinburgh%20City%20Centre",
      "bookUrl": "https://www.premierinn.com/gb/en/hotels/scotland/lothian/edinburgh/edinburgh-city-centre.html",
      "photos": {
        "exterior": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/10_-_14_Lauriston_Place.jpg/960px-10_-_14_Lauriston_Place.jpg",
        "lobby": "https://upload.wikimedia.org/wikipedia/commons/d/dd/Lauriston_Place_-_geograph.org.uk_-_1826024.jpg",
        "room": "https://upload.wikimedia.org/wikipedia/commons/2/2d/Edinburgh_College_Of_Art%2C_Lauriston_Place_-_geograph.org.uk_-_2057065.jpg",
        "luxuryRoom": "https://upload.wikimedia.org/wikipedia/commons/2/2d/Edinburgh_College_Of_Art%2C_Lauriston_Place_-_geograph.org.uk_-_2057065.jpg",
        "restaurant": "https://upload.wikimedia.org/wikipedia/commons/d/dd/Lauriston_Place_-_geograph.org.uk_-_1826024.jpg",
        "pool": "https://upload.wikimedia.org/wikipedia/commons/7/71/Houses_in_Lauriston_Place_-_geograph.org.uk_-_2531699.jpg",
        "rooftop": "https://upload.wikimedia.org/wikipedia/commons/2/2d/Edinburgh_College_Of_Art%2C_Lauriston_Place_-_geograph.org.uk_-_2057065.jpg",
        "breakfast": "https://upload.wikimedia.org/wikipedia/commons/d/dd/Lauriston_Place_-_geograph.org.uk_-_1826024.jpg",
        "spa": "https://upload.wikimedia.org/wikipedia/commons/7/71/Houses_in_Lauriston_Place_-_geograph.org.uk_-_2531699.jpg",
        "view": "https://upload.wikimedia.org/wikipedia/commons/2/2d/Edinburgh_College_Of_Art%2C_Lauriston_Place_-_geograph.org.uk_-_2057065.jpg"
      }
    }
  ],
  "dining": [
    {
      "name": "The Witchery by the Castle",
      "category": "Fine Dining · Scottish",
      "address": "Castlehill · EH1 2NF",
      "price": "£55–85/head",
      "famous": "Scottish Salmon · Beef Wellington",
      "halal": false,
      "vegetarian": true,
      "reservation": "Essential 2+ weeks",
      "wait": "0 with booking",
      "michelin": "—",
      "kidsFriendly": "Yes",
      "dressCode": "Smart",
      "tip": "Gothic dining room next to the castle. Scottish Salmon and Beef Wellington are the signatures — book the Secret Garden in summer.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=The%20Witchery%20by%20the%20Castle%20Edinburgh",
      "bookUrl": "https://www.thewitchery.com/",
      "dishes": [
        {
          "name": "Scottish Salmon",
          "img": "https://upload.wikimedia.org/wikipedia/commons/2/27/The_Witchery_-_geograph.org.uk_-_612172.jpg",
          "desc": "Hand-dived scallops and salmon from Scottish waters."
        },
        {
          "name": "Beef Wellington",
          "img": "https://upload.wikimedia.org/wikipedia/commons/1/12/The_Witchery_pub_and_restaurant%2C_Royal_Mile_-_geograph.org.uk_-_973191.jpg",
          "desc": "Classic preparation in a candlelit 16th-century room."
        },
        {
          "name": "Orkney Lobster",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Boswell%27s_Court_%28Now_The_Witchery_by_the_Castle%29%2C_352_Castlehill%2C_The_Royal_Mile%2C_Edinburgh.jpg/960px-Boswell%27s_Court_%28Now_The_Witchery_by_the_Castle%29%2C_352_Castlehill%2C_The_Royal_Mile%2C_Edinburgh.jpg",
          "desc": "When in season — ask if available."
        },
        {
          "name": "Highland Venison",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Boswell%27s_Court_%28Now_The_Witchery_by_the_Castle%29%2C_352_Castlehill%2C_The_Royal_Mile%2C_Edinburgh_%284%29.jpg/960px-Boswell%27s_Court_%28Now_The_Witchery_by_the_Castle%29%2C_352_Castlehill%2C_The_Royal_Mile%2C_Edinburgh_%284%29.jpg",
          "desc": "Rich, gamey, perfectly cooked."
        },
        {
          "name": "Cranachan",
          "img": "https://upload.wikimedia.org/wikipedia/commons/2/27/The_Witchery_-_geograph.org.uk_-_612172.jpg",
          "desc": "Traditional Scottish dessert — raspberries, cream, whisky, oats."
        }
      ],
      "photos": {
        "signature": "https://upload.wikimedia.org/wikipedia/commons/2/27/The_Witchery_-_geograph.org.uk_-_612172.jpg",
        "interior": "https://upload.wikimedia.org/wikipedia/commons/1/12/The_Witchery_pub_and_restaurant%2C_Royal_Mile_-_geograph.org.uk_-_973191.jpg",
        "exterior": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Boswell%27s_Court_%28Now_The_Witchery_by_the_Castle%29%2C_352_Castlehill%2C_The_Royal_Mile%2C_Edinburgh.jpg/960px-Boswell%27s_Court_%28Now_The_Witchery_by_the_Castle%29%2C_352_Castlehill%2C_The_Royal_Mile%2C_Edinburgh.jpg",
        "dessert": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Boswell%27s_Court_%28Now_The_Witchery_by_the_Castle%29%2C_352_Castlehill%2C_The_Royal_Mile%2C_Edinburgh_%284%29.jpg/960px-Boswell%27s_Court_%28Now_The_Witchery_by_the_Castle%29%2C_352_Castlehill%2C_The_Royal_Mile%2C_Edinburgh_%284%29.jpg",
        "coffee": "https://upload.wikimedia.org/wikipedia/commons/1/12/The_Witchery_pub_and_restaurant%2C_Royal_Mile_-_geograph.org.uk_-_973191.jpg"
      }
    },
    {
      "name": "Makars Gourmet Mash Bar",
      "category": "Scottish · Comfort Food",
      "address": "9 & 12 Bank St · EH1 2LN",
      "price": "£18–28/head",
      "famous": "Traditional Scottish comfort food · gourmet mash",
      "halal": false,
      "vegetarian": true,
      "reservation": "Recommended weekends",
      "wait": "15–30 min at 19:30",
      "michelin": "—",
      "kidsFriendly": "Yes",
      "dressCode": "Casual",
      "tip": "Traditional Scottish comfort food with a twist. Try haggis mash — the gateway dish for the curious.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Makars%20Gourmet%20Mash%20Bar%20Edinburgh",
      "bookUrl": "https://www.google.com/maps/search/?api=1&query=Makars%20Gourmet%20Mash%20Bar%20Edinburgh",
      "dishes": [
        {
          "name": "Haggis, Neeps & Tatties",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Bank_Street%2C_Edinburgh%2C_14_August_2007.jpg/960px-Bank_Street%2C_Edinburgh%2C_14_August_2007.jpg",
          "desc": "Try it if you're curious — surprisingly delicious."
        },
        {
          "name": "Sausage & Mash",
          "img": "https://upload.wikimedia.org/wikipedia/commons/3/3d/Bank_Street_-_geograph.org.uk_-_1253639.jpg",
          "desc": "Cumberland sausage with truffle mash."
        },
        {
          "name": "Steak Pie",
          "img": "https://upload.wikimedia.org/wikipedia/commons/6/6c/Buildings_in_North_Bank_Street_-_geograph.org.uk_-_2037034.jpg",
          "desc": "Slow-cooked Scottish beef in rich gravy."
        },
        {
          "name": "Cullen Skink",
          "img": "https://upload.wikimedia.org/wikipedia/commons/d/db/Bank_Street_tenement_-_geograph.org.uk_-_2037048.jpg",
          "desc": "Smoky haddock soup — a Scottish classic."
        },
        {
          "name": "Sticky Toffee Pudding",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Bank_Street%2C_Edinburgh%2C_14_August_2007.jpg/960px-Bank_Street%2C_Edinburgh%2C_14_August_2007.jpg",
          "desc": "Warm, generous, essential."
        }
      ],
      "photos": {
        "signature": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Bank_Street%2C_Edinburgh%2C_14_August_2007.jpg/960px-Bank_Street%2C_Edinburgh%2C_14_August_2007.jpg",
        "interior": "https://upload.wikimedia.org/wikipedia/commons/3/3d/Bank_Street_-_geograph.org.uk_-_1253639.jpg",
        "exterior": "https://upload.wikimedia.org/wikipedia/commons/6/6c/Buildings_in_North_Bank_Street_-_geograph.org.uk_-_2037034.jpg",
        "dessert": "https://upload.wikimedia.org/wikipedia/commons/d/db/Bank_Street_tenement_-_geograph.org.uk_-_2037048.jpg",
        "coffee": "https://upload.wikimedia.org/wikipedia/commons/3/3d/Bank_Street_-_geograph.org.uk_-_1253639.jpg"
      }
    },
    {
      "name": "The Scran & Scallie",
      "category": "Gastropub · Scottish",
      "address": "1f2 Leopold Pl · EH7 5JT",
      "price": "£25–40/head",
      "famous": "Traditional Scottish pub · seasonal menu",
      "halal": false,
      "vegetarian": true,
      "reservation": "Walk-in OK weekdays",
      "wait": "20 min at 14:00 weekends",
      "michelin": "—",
      "kidsFriendly": "Yes",
      "dressCode": "Smart casual",
      "tip": "Tom Kitchin's neighbourhood pub — proper Scottish ingredients without the fine-dining price tag.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=The%20Scran%20%26%20Scallie%20Edinburgh",
      "bookUrl": "https://www.thescraneandscallie.co.uk/",
      "dishes": [
        {
          "name": "Scran Pie",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Comely_Bank_Road%2C_Edinburgh.JPG/960px-Comely_Bank_Road%2C_Edinburgh.JPG",
          "desc": "Daily pie with mash and gravy."
        },
        {
          "name": "Fish & Chips",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Edinburgh%2C_5_and_4_Comely_Bank.jpg/960px-Edinburgh%2C_5_and_4_Comely_Bank.jpg",
          "desc": "Beer-battered haddock, mushy peas."
        },
        {
          "name": "Scotch Egg",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Edinburgh%2C_6_Comely_Bank.jpg/960px-Edinburgh%2C_6_Comely_Bank.jpg",
          "desc": "House-made with piccalilli."
        },
        {
          "name": "Scottish Cheese Board",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/An_unlisted_house_35_Comely_Bank_Road_Edinburgh.jpg/960px-An_unlisted_house_35_Comely_Bank_Road_Edinburgh.jpg",
          "desc": "Isle of Mull cheddar, Dunsyre blue."
        },
        {
          "name": "Sticky Toffee",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Comely_Bank_Road%2C_Edinburgh.JPG/960px-Comely_Bank_Road%2C_Edinburgh.JPG",
          "desc": "With clotted cream."
        }
      ],
      "photos": {
        "signature": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Comely_Bank_Road%2C_Edinburgh.JPG/960px-Comely_Bank_Road%2C_Edinburgh.JPG",
        "interior": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Edinburgh%2C_5_and_4_Comely_Bank.jpg/960px-Edinburgh%2C_5_and_4_Comely_Bank.jpg",
        "exterior": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Edinburgh%2C_6_Comely_Bank.jpg/960px-Edinburgh%2C_6_Comely_Bank.jpg",
        "dessert": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/An_unlisted_house_35_Comely_Bank_Road_Edinburgh.jpg/960px-An_unlisted_house_35_Comely_Bank_Road_Edinburgh.jpg",
        "coffee": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Edinburgh%2C_5_and_4_Comely_Bank.jpg/960px-Edinburgh%2C_5_and_4_Comely_Bank.jpg"
      }
    },
    {
      "name": "The Dome",
      "category": "Fine Dining · Scottish",
      "address": "14 George St · EH2 2PF",
      "price": "£45–70/head",
      "famous": "Elegant Scottish dining · grand interior",
      "halal": false,
      "vegetarian": true,
      "reservation": "Essential weekends",
      "wait": "0 with booking",
      "michelin": "—",
      "kidsFriendly": "Yes",
      "dressCode": "Smart casual",
      "tip": "Elegant Scottish dining under a magnificent Victorian dome. Afternoon tea is legendary — book the George Street room.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=The%20Dome%20Edinburgh",
      "bookUrl": "https://www.thedomeedinburgh.com/",
      "dishes": [
        {
          "name": "Scottish Beef Fillet",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/The_Dome_Edinburgh.JPG/960px-The_Dome_Edinburgh.JPG",
          "desc": "Aberdeen Angus with seasonal vegetables."
        },
        {
          "name": "Pan-Seared Scallops",
          "img": "https://upload.wikimedia.org/wikipedia/commons/d/dd/Edinburgh_Dome_-_geograph.org.uk_-_303189.jpg",
          "desc": "Hand-dived from the west coast."
        },
        {
          "name": "Roast Lamb",
          "img": "https://upload.wikimedia.org/wikipedia/commons/f/fb/The_Dome%2C_Edinburgh_-_geograph.org.uk_-_3570883.jpg",
          "desc": "Scottish lamb with mint jus."
        },
        {
          "name": "Afternoon Tea",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/The_Dome%2C_Edinburgh.jpg/960px-The_Dome%2C_Edinburgh.jpg",
          "desc": "Three tiers under the dome — book ahead."
        },
        {
          "name": "Whisky Selection",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/The_Dome_Edinburgh.JPG/960px-The_Dome_Edinburgh.JPG",
          "desc": "Over 100 Scotch whiskies behind the bar."
        }
      ],
      "photos": {
        "signature": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/The_Dome_Edinburgh.JPG/960px-The_Dome_Edinburgh.JPG",
        "interior": "https://upload.wikimedia.org/wikipedia/commons/d/dd/Edinburgh_Dome_-_geograph.org.uk_-_303189.jpg",
        "exterior": "https://upload.wikimedia.org/wikipedia/commons/f/fb/The_Dome%2C_Edinburgh_-_geograph.org.uk_-_3570883.jpg",
        "dessert": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/The_Dome%2C_Edinburgh.jpg/960px-The_Dome%2C_Edinburgh.jpg",
        "coffee": "https://upload.wikimedia.org/wikipedia/commons/d/dd/Edinburgh_Dome_-_geograph.org.uk_-_303189.jpg"
      }
    },
    {
      "name": "Fishers in Leith",
      "category": "Seafood · Scottish",
      "address": "1 The Shore · Leith · EH6 6QW",
      "price": "£35–55/head",
      "famous": "Fresh Scottish seafood",
      "halal": false,
      "vegetarian": true,
      "reservation": "Recommended",
      "wait": "15 min at 13:30",
      "michelin": "—",
      "kidsFriendly": "Yes",
      "dressCode": "Smart casual",
      "tip": "Fresh Scottish seafood on Leith Shore. Order the seafood platter to share — oysters, langoustines, crab.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Fishers%20in%20Leith%20Edinburgh",
      "bookUrl": "https://www.fishersinleith.co.uk/",
      "dishes": [
        {
          "name": "Seafood Platter",
          "img": "https://upload.wikimedia.org/wikipedia/commons/1/16/The_Shore%2C_Leith_-_geograph.org.uk_-_2623294.jpg",
          "desc": "Oysters, langoustines, crab — the full Scottish coast."
        },
        {
          "name": "Scottish Salmon",
          "img": "https://upload.wikimedia.org/wikipedia/commons/f/f0/The_Shore%2C_Leith_-_geograph.org.uk_-_2623304.jpg",
          "desc": "Pan-fried with dill butter."
        },
        {
          "name": "Fish Soup",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Shore%2C_Leith_-_geograph.org.uk_-_2894337.jpg/960px-Shore%2C_Leith_-_geograph.org.uk_-_2894337.jpg",
          "desc": "Rich, creamy, daily catch."
        },
        {
          "name": "Grilled Halibut",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Shore%2C_Leith_-_geograph.org.uk_-_2722754.jpg/960px-Shore%2C_Leith_-_geograph.org.uk_-_2722754.jpg",
          "desc": "With samphire and beurre blanc."
        },
        {
          "name": "Lemon Tart",
          "img": "https://upload.wikimedia.org/wikipedia/commons/1/16/The_Shore%2C_Leith_-_geograph.org.uk_-_2623294.jpg",
          "desc": "Light finish after a seafood feast."
        }
      ],
      "photos": {
        "signature": "https://upload.wikimedia.org/wikipedia/commons/1/16/The_Shore%2C_Leith_-_geograph.org.uk_-_2623294.jpg",
        "interior": "https://upload.wikimedia.org/wikipedia/commons/f/f0/The_Shore%2C_Leith_-_geograph.org.uk_-_2623304.jpg",
        "exterior": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Shore%2C_Leith_-_geograph.org.uk_-_2894337.jpg/960px-Shore%2C_Leith_-_geograph.org.uk_-_2894337.jpg",
        "dessert": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Shore%2C_Leith_-_geograph.org.uk_-_2722754.jpg/960px-Shore%2C_Leith_-_geograph.org.uk_-_2722754.jpg",
        "coffee": "https://upload.wikimedia.org/wikipedia/commons/f/f0/The_Shore%2C_Leith_-_geograph.org.uk_-_2623304.jpg"
      }
    },
    {
      "name": "The Kitchin",
      "category": "Fine Dining · 1 Michelin Star",
      "address": "78 Commercial Quay · Leith · EH6 6LX",
      "price": "£95 tasting menu",
      "famous": "From Nature to Plate · Tom Kitchin",
      "halal": false,
      "vegetarian": true,
      "reservation": "Essential 4+ weeks",
      "wait": "0 with booking",
      "michelin": "★",
      "kidsFriendly": "Yes",
      "dressCode": "Smart",
      "tip": "Michelin-starred farewell dinner. Tom Kitchin's \"From Nature to Plate\" philosophy — book the tasting menu.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=The%20Kitchin%20Edinburgh",
      "bookUrl": "https://www.thekitchin.com/",
      "dishes": [
        {
          "name": "From Nature to Plate Tasting",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Commercial_Quay.JPG/960px-Commercial_Quay.JPG",
          "desc": "Seasonal Scottish produce, multi-course."
        },
        {
          "name": "Hand-Dived Scallops",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Entrance_to_Commercial_Quay_from_Dock_Place_-_geograph.org.uk_-_1904596.jpg/960px-Entrance_to_Commercial_Quay_from_Dock_Place_-_geograph.org.uk_-_1904596.jpg",
          "desc": "Signature starter — perfectly caramelised."
        },
        {
          "name": "Highland Venison",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Commercial_Quay_-_geograph.org.uk_-_1904598.jpg/960px-Commercial_Quay_-_geograph.org.uk_-_1904598.jpg",
          "desc": "Game from Scottish estates."
        },
        {
          "name": "Orkney Beef",
          "img": "https://upload.wikimedia.org/wikipedia/commons/7/7f/Commercial_Quay_-_geograph.org.uk_-_2357730.jpg",
          "desc": "Slow-cooked, deeply flavoured."
        },
        {
          "name": "Cranachan",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Commercial_Quay.JPG/960px-Commercial_Quay.JPG",
          "desc": "Modern take on the Scottish classic."
        }
      ],
      "photos": {
        "signature": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Commercial_Quay.JPG/960px-Commercial_Quay.JPG",
        "interior": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Entrance_to_Commercial_Quay_from_Dock_Place_-_geograph.org.uk_-_1904596.jpg/960px-Entrance_to_Commercial_Quay_from_Dock_Place_-_geograph.org.uk_-_1904596.jpg",
        "exterior": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Commercial_Quay_-_geograph.org.uk_-_1904598.jpg/960px-Commercial_Quay_-_geograph.org.uk_-_1904598.jpg",
        "dessert": "https://upload.wikimedia.org/wikipedia/commons/7/7f/Commercial_Quay_-_geograph.org.uk_-_2357730.jpg",
        "coffee": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Entrance_to_Commercial_Quay_from_Dock_Place_-_geograph.org.uk_-_1904596.jpg/960px-Entrance_to_Commercial_Quay_from_Dock_Place_-_geograph.org.uk_-_1904596.jpg"
      }
    },
    {
      "name": "The Ship on the Shore",
      "category": "Seafood · Scottish",
      "address": "43 Shore · Leith · EH6 6QU",
      "price": "£30–45/head",
      "famous": "Champagne & seafood bar",
      "halal": false,
      "vegetarian": true,
      "reservation": "Walk-in OK · book for groups",
      "wait": "10–20 min at 19:30",
      "michelin": "—",
      "kidsFriendly": "Yes",
      "dressCode": "Smart casual",
      "tip": "Alternative farewell dinner to The Kitchin — champagne and seafood on Leith waterfront. More relaxed, still special.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=The%20Ship%20on%20the%20Shore%20Edinburgh",
      "bookUrl": "https://www.google.com/maps/search/?api=1&query=The%20Ship%20on%20the%20Shore%20Edinburgh",
      "dishes": [
        {
          "name": "Champagne & Oysters",
          "img": "https://upload.wikimedia.org/wikipedia/commons/2/22/The_Shore%2C_Leith_-_geograph.org.uk_-_2623323.jpg",
          "desc": "Classic Leith Shore pairing."
        },
        {
          "name": "Seafood Linguine",
          "img": "https://upload.wikimedia.org/wikipedia/commons/5/5e/The_Shore%2C_Leith_-_geograph.org.uk_-_2623334.jpg",
          "desc": "Daily catch in white wine sauce."
        },
        {
          "name": "Grilled Lobster",
          "img": "https://upload.wikimedia.org/wikipedia/commons/c/c6/The_Shore%2C_Leith_-_geograph.org.uk_-_2623337.jpg",
          "desc": "When available — ask your server."
        },
        {
          "name": "Fish Pie",
          "img": "https://upload.wikimedia.org/wikipedia/commons/f/f9/The_Shore%2C_Leith_-_geograph.org.uk_-_2623338.jpg",
          "desc": "Comforting, generous, Scottish."
        },
        {
          "name": "Eton Mess",
          "img": "https://upload.wikimedia.org/wikipedia/commons/2/22/The_Shore%2C_Leith_-_geograph.org.uk_-_2623323.jpg",
          "desc": "Light dessert with Scottish berries."
        }
      ],
      "photos": {
        "signature": "https://upload.wikimedia.org/wikipedia/commons/2/22/The_Shore%2C_Leith_-_geograph.org.uk_-_2623323.jpg",
        "interior": "https://upload.wikimedia.org/wikipedia/commons/5/5e/The_Shore%2C_Leith_-_geograph.org.uk_-_2623334.jpg",
        "exterior": "https://upload.wikimedia.org/wikipedia/commons/c/c6/The_Shore%2C_Leith_-_geograph.org.uk_-_2623337.jpg",
        "dessert": "https://upload.wikimedia.org/wikipedia/commons/f/f9/The_Shore%2C_Leith_-_geograph.org.uk_-_2623338.jpg",
        "coffee": "https://upload.wikimedia.org/wikipedia/commons/5/5e/The_Shore%2C_Leith_-_geograph.org.uk_-_2623334.jpg"
      }
    },
    {
      "name": "The Edinburgh Larder",
      "category": "Café · Coffee",
      "address": "15 Blackfriars St · EH1 1NB",
      "price": "£4–£12",
      "famous": "Full Scottish Breakfast · Specialty Coffee",
      "halal": false,
      "vegetarian": true,
      "reservation": "Walk-in",
      "wait": "5–15 min at peak",
      "michelin": "—",
      "kidsFriendly": "Yes",
      "dressCode": "Casual",
      "tip": "Edinburgh cafés fill quickly on weekends — arrive before 09:30 for a table.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=The%20Edinburgh%20Larder",
      "bookUrl": "https://www.google.com/maps/search/?api=1&query=The%20Edinburgh%20Larder",
      "dishes": [
        {
          "name": "Full Scottish Breakfast · Specialty Coffee",
          "img": "https://upload.wikimedia.org/wikipedia/commons/1/11/Blackfriars_Street_-_geograph.org.uk_-_928737.jpg",
          "desc": "House specialty — order this first."
        },
        {
          "name": "Flat White",
          "img": "https://upload.wikimedia.org/wikipedia/commons/b/ba/Blackfriars_Street%2C_Edinburgh_-_geograph.org.uk_-_973439.jpg",
          "desc": "Specialty coffee done right."
        },
        {
          "name": "Pastry",
          "img": "https://upload.wikimedia.org/wikipedia/commons/3/37/Blackfriars_Street_doorway_-_geograph.org.uk_-_1339605.jpg",
          "desc": "Fresh bakes from local suppliers."
        },
        {
          "name": "Full Scottish Breakfast",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Regent_Morton%27s_House%2C_Blackfriars_Street_Edinburgh.jpg/960px-Regent_Morton%27s_House%2C_Blackfriars_Street_Edinburgh.jpg",
          "desc": "Haggis, tattie scones, black pudding — the works."
        },
        {
          "name": "Avocado Toast",
          "img": "https://upload.wikimedia.org/wikipedia/commons/1/11/Blackfriars_Street_-_geograph.org.uk_-_928737.jpg",
          "desc": "Light option before a hike."
        }
      ],
      "photos": {
        "signature": "https://upload.wikimedia.org/wikipedia/commons/1/11/Blackfriars_Street_-_geograph.org.uk_-_928737.jpg",
        "interior": "https://upload.wikimedia.org/wikipedia/commons/b/ba/Blackfriars_Street%2C_Edinburgh_-_geograph.org.uk_-_973439.jpg",
        "exterior": "https://upload.wikimedia.org/wikipedia/commons/3/37/Blackfriars_Street_doorway_-_geograph.org.uk_-_1339605.jpg",
        "dessert": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Regent_Morton%27s_House%2C_Blackfriars_Street_Edinburgh.jpg/960px-Regent_Morton%27s_House%2C_Blackfriars_Street_Edinburgh.jpg",
        "coffee": "https://upload.wikimedia.org/wikipedia/commons/b/ba/Blackfriars_Street%2C_Edinburgh_-_geograph.org.uk_-_973439.jpg"
      }
    },
    {
      "name": "Urban Angel",
      "category": "Café · Coffee",
      "address": "2 Hanover St · EH2 2DA",
      "price": "£4–£12",
      "famous": "Brunch · Specialty Coffee",
      "halal": false,
      "vegetarian": true,
      "reservation": "Walk-in",
      "wait": "5–15 min at peak",
      "michelin": "—",
      "kidsFriendly": "Yes",
      "dressCode": "Casual",
      "tip": "Edinburgh cafés fill quickly on weekends — arrive before 09:30 for a table.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Urban%20Angel%20Edinburgh",
      "bookUrl": "https://www.google.com/maps/search/?api=1&query=Urban%20Angel%20Edinburgh",
      "dishes": [
        {
          "name": "Brunch · Specialty Coffee",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/13_South_Hanover_Street%2C_Edinburgh.jpg/960px-13_South_Hanover_Street%2C_Edinburgh.jpg",
          "desc": "House specialty — order this first."
        },
        {
          "name": "Flat White",
          "img": "https://upload.wikimedia.org/wikipedia/commons/9/9a/Hanover_Street_-_geograph.org.uk_-_3143257.jpg",
          "desc": "Specialty coffee done right."
        },
        {
          "name": "Pastry",
          "img": "https://upload.wikimedia.org/wikipedia/commons/c/ce/Hanover_Street%2C_Edinburgh_-_geograph.org.uk_-_3570851.jpg",
          "desc": "Fresh bakes from local suppliers."
        },
        {
          "name": "Full Scottish Breakfast",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Hanover_Street%2C_Edinburgh.jpg/960px-Hanover_Street%2C_Edinburgh.jpg",
          "desc": "Haggis, tattie scones, black pudding — the works."
        },
        {
          "name": "Avocado Toast",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/13_South_Hanover_Street%2C_Edinburgh.jpg/960px-13_South_Hanover_Street%2C_Edinburgh.jpg",
          "desc": "Light option before a hike."
        }
      ],
      "photos": {
        "signature": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/13_South_Hanover_Street%2C_Edinburgh.jpg/960px-13_South_Hanover_Street%2C_Edinburgh.jpg",
        "interior": "https://upload.wikimedia.org/wikipedia/commons/9/9a/Hanover_Street_-_geograph.org.uk_-_3143257.jpg",
        "exterior": "https://upload.wikimedia.org/wikipedia/commons/c/ce/Hanover_Street%2C_Edinburgh_-_geograph.org.uk_-_3570851.jpg",
        "dessert": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Hanover_Street%2C_Edinburgh.jpg/960px-Hanover_Street%2C_Edinburgh.jpg",
        "coffee": "https://upload.wikimedia.org/wikipedia/commons/9/9a/Hanover_Street_-_geograph.org.uk_-_3143257.jpg"
      }
    },
    {
      "name": "Cairngorm Coffee",
      "category": "Café · Coffee",
      "address": "41–43 Frederick St · EH2 1EP",
      "price": "£4–£12",
      "famous": "Single-origin pour-over",
      "halal": false,
      "vegetarian": true,
      "reservation": "Walk-in",
      "wait": "5–15 min at peak",
      "michelin": "—",
      "kidsFriendly": "Yes",
      "dressCode": "Casual",
      "tip": "Edinburgh cafés fill quickly on weekends — arrive before 09:30 for a table.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Cairngorm%20Coffee%20Edinburgh",
      "bookUrl": "https://www.google.com/maps/search/?api=1&query=Cairngorm%20Coffee%20Edinburgh",
      "dishes": [
        {
          "name": "Single-origin pour-over",
          "img": "https://upload.wikimedia.org/wikipedia/commons/2/20/Frederick_Street%2C_Edinburgh%2C_11_December_2009.jpg",
          "desc": "House specialty — order this first."
        },
        {
          "name": "Flat White",
          "img": "https://upload.wikimedia.org/wikipedia/commons/5/56/Frederick_Street%2C_Edinburgh_-_geograph.org.uk_-_282070.jpg",
          "desc": "Specialty coffee done right."
        },
        {
          "name": "Pastry",
          "img": "https://upload.wikimedia.org/wikipedia/commons/8/81/Frederick_Street%2C_Edinburgh_-_geograph.org.uk_-_932027.jpg",
          "desc": "Fresh bakes from local suppliers."
        },
        {
          "name": "Full Scottish Breakfast",
          "img": "https://upload.wikimedia.org/wikipedia/commons/3/3f/Sunlight%2C_Frederick_Street%2C_Edinburgh_-_geograph.org.uk_-_932273.jpg",
          "desc": "Haggis, tattie scones, black pudding — the works."
        },
        {
          "name": "Avocado Toast",
          "img": "https://upload.wikimedia.org/wikipedia/commons/2/20/Frederick_Street%2C_Edinburgh%2C_11_December_2009.jpg",
          "desc": "Light option before a hike."
        }
      ],
      "photos": {
        "signature": "https://upload.wikimedia.org/wikipedia/commons/2/20/Frederick_Street%2C_Edinburgh%2C_11_December_2009.jpg",
        "interior": "https://upload.wikimedia.org/wikipedia/commons/5/56/Frederick_Street%2C_Edinburgh_-_geograph.org.uk_-_282070.jpg",
        "exterior": "https://upload.wikimedia.org/wikipedia/commons/8/81/Frederick_Street%2C_Edinburgh_-_geograph.org.uk_-_932027.jpg",
        "dessert": "https://upload.wikimedia.org/wikipedia/commons/3/3f/Sunlight%2C_Frederick_Street%2C_Edinburgh_-_geograph.org.uk_-_932273.jpg",
        "coffee": "https://upload.wikimedia.org/wikipedia/commons/5/56/Frederick_Street%2C_Edinburgh_-_geograph.org.uk_-_282070.jpg"
      }
    },
    {
      "name": "The Milkman",
      "category": "Café · Coffee",
      "address": "7 Cockburn St · EH1 1BP",
      "price": "£4–£12",
      "famous": "Flat white · local roaster",
      "halal": false,
      "vegetarian": true,
      "reservation": "Walk-in",
      "wait": "5–15 min at peak",
      "michelin": "—",
      "kidsFriendly": "Yes",
      "dressCode": "Casual",
      "tip": "Edinburgh cafés fill quickly on weekends — arrive before 09:30 for a table.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=The%20Milkman%20Edinburgh",
      "bookUrl": "https://www.google.com/maps/search/?api=1&query=The%20Milkman%20Edinburgh",
      "dishes": [
        {
          "name": "Flat white · local roaster",
          "img": "https://upload.wikimedia.org/wikipedia/commons/7/71/Cockburn_Street_-_geograph.org.uk_-_1174100.jpg",
          "desc": "House specialty — order this first."
        },
        {
          "name": "Flat White",
          "img": "https://upload.wikimedia.org/wikipedia/commons/0/06/Cockburn_Street_Edinburgh_-_geograph.org.uk_-_1597295.jpg",
          "desc": "Specialty coffee done right."
        },
        {
          "name": "Pastry",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Cockburn_Street%2C_Edinburgh_-_geograph.org.uk_-_1711635.jpg/960px-Cockburn_Street%2C_Edinburgh_-_geograph.org.uk_-_1711635.jpg",
          "desc": "Fresh bakes from local suppliers."
        },
        {
          "name": "Full Scottish Breakfast",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Cockburn_Street%2C_Edinburgh.jpg/960px-Cockburn_Street%2C_Edinburgh.jpg",
          "desc": "Haggis, tattie scones, black pudding — the works."
        },
        {
          "name": "Avocado Toast",
          "img": "https://upload.wikimedia.org/wikipedia/commons/7/71/Cockburn_Street_-_geograph.org.uk_-_1174100.jpg",
          "desc": "Light option before a hike."
        }
      ],
      "photos": {
        "signature": "https://upload.wikimedia.org/wikipedia/commons/7/71/Cockburn_Street_-_geograph.org.uk_-_1174100.jpg",
        "interior": "https://upload.wikimedia.org/wikipedia/commons/0/06/Cockburn_Street_Edinburgh_-_geograph.org.uk_-_1597295.jpg",
        "exterior": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Cockburn_Street%2C_Edinburgh_-_geograph.org.uk_-_1711635.jpg/960px-Cockburn_Street%2C_Edinburgh_-_geograph.org.uk_-_1711635.jpg",
        "dessert": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Cockburn_Street%2C_Edinburgh.jpg/960px-Cockburn_Street%2C_Edinburgh.jpg",
        "coffee": "https://upload.wikimedia.org/wikipedia/commons/0/06/Cockburn_Street_Edinburgh_-_geograph.org.uk_-_1597295.jpg"
      }
    },
    {
      "name": "Fortitude Coffee",
      "category": "Café · Coffee",
      "address": "35–37 Rose St · EH2 2NH",
      "price": "£4–£12",
      "famous": "Espresso · minimal aesthetic",
      "halal": false,
      "vegetarian": true,
      "reservation": "Walk-in",
      "wait": "5–15 min at peak",
      "michelin": "—",
      "kidsFriendly": "Yes",
      "dressCode": "Casual",
      "tip": "Edinburgh cafés fill quickly on weekends — arrive before 09:30 for a table.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Fortitude%20Coffee%20Edinburgh",
      "bookUrl": "https://www.google.com/maps/search/?api=1&query=Fortitude%20Coffee%20Edinburgh",
      "dishes": [
        {
          "name": "Espresso · minimal aesthetic",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/York_Place%2C_Edinburgh_%282%29_%2814281344743%29_%282%29.jpg/960px-York_Place%2C_Edinburgh_%282%29_%2814281344743%29_%282%29.jpg",
          "desc": "House specialty — order this first."
        },
        {
          "name": "Flat White",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/19_York_Place%2C_Edinburgh.jpg/960px-19_York_Place%2C_Edinburgh.jpg",
          "desc": "Specialty coffee done right."
        },
        {
          "name": "Pastry",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/38_York_Place%2C_Edinburgh.jpg/960px-38_York_Place%2C_Edinburgh.jpg",
          "desc": "Fresh bakes from local suppliers."
        },
        {
          "name": "Full Scottish Breakfast",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/10_York_Place%2C_Edinburgh.jpg/960px-10_York_Place%2C_Edinburgh.jpg",
          "desc": "Haggis, tattie scones, black pudding — the works."
        },
        {
          "name": "Avocado Toast",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/York_Place%2C_Edinburgh_%282%29_%2814281344743%29_%282%29.jpg/960px-York_Place%2C_Edinburgh_%282%29_%2814281344743%29_%282%29.jpg",
          "desc": "Light option before a hike."
        }
      ],
      "photos": {
        "signature": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/York_Place%2C_Edinburgh_%282%29_%2814281344743%29_%282%29.jpg/960px-York_Place%2C_Edinburgh_%282%29_%2814281344743%29_%282%29.jpg",
        "interior": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/19_York_Place%2C_Edinburgh.jpg/960px-19_York_Place%2C_Edinburgh.jpg",
        "exterior": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/38_York_Place%2C_Edinburgh.jpg/960px-38_York_Place%2C_Edinburgh.jpg",
        "dessert": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/10_York_Place%2C_Edinburgh.jpg/960px-10_York_Place%2C_Edinburgh.jpg",
        "coffee": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/19_York_Place%2C_Edinburgh.jpg/960px-19_York_Place%2C_Edinburgh.jpg"
      }
    },
    {
      "name": "Lowdown Coffee",
      "category": "Café · Coffee",
      "address": "38 George St · EH2 2LR",
      "price": "£4–£12",
      "famous": "Filter coffee · pastries",
      "halal": false,
      "vegetarian": true,
      "reservation": "Walk-in",
      "wait": "5–15 min at peak",
      "michelin": "—",
      "kidsFriendly": "Yes",
      "dressCode": "Casual",
      "tip": "Edinburgh cafés fill quickly on weekends — arrive before 09:30 for a table.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Lowdown%20Coffee%20Edinburgh",
      "bookUrl": "https://www.google.com/maps/search/?api=1&query=Lowdown%20Coffee%20Edinburgh",
      "dishes": [
        {
          "name": "Filter coffee · pastries",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/George_Street_19-21%2C_Edinburgh.JPG/960px-George_Street_19-21%2C_Edinburgh.JPG",
          "desc": "House specialty — order this first."
        },
        {
          "name": "Flat White",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Edinburgh_-_Edinburgh%2C_69_George_Street_-_20140421200112.jpg/960px-Edinburgh_-_Edinburgh%2C_69_George_Street_-_20140421200112.jpg",
          "desc": "Specialty coffee done right."
        },
        {
          "name": "Pastry",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Edinburgh_-_George_Street_%28geograph_6654164%29.jpg/960px-Edinburgh_-_George_Street_%28geograph_6654164%29.jpg",
          "desc": "Fresh bakes from local suppliers."
        },
        {
          "name": "Full Scottish Breakfast",
          "img": "https://upload.wikimedia.org/wikipedia/commons/5/51/George_Street%2C_Edinburgh_-_geograph.org.uk_-_3570862.jpg",
          "desc": "Haggis, tattie scones, black pudding — the works."
        },
        {
          "name": "Avocado Toast",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/George_Street_19-21%2C_Edinburgh.JPG/960px-George_Street_19-21%2C_Edinburgh.JPG",
          "desc": "Light option before a hike."
        }
      ],
      "photos": {
        "signature": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/George_Street_19-21%2C_Edinburgh.JPG/960px-George_Street_19-21%2C_Edinburgh.JPG",
        "interior": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Edinburgh_-_Edinburgh%2C_69_George_Street_-_20140421200112.jpg/960px-Edinburgh_-_Edinburgh%2C_69_George_Street_-_20140421200112.jpg",
        "exterior": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Edinburgh_-_George_Street_%28geograph_6654164%29.jpg/960px-Edinburgh_-_George_Street_%28geograph_6654164%29.jpg",
        "dessert": "https://upload.wikimedia.org/wikipedia/commons/5/51/George_Street%2C_Edinburgh_-_geograph.org.uk_-_3570862.jpg",
        "coffee": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Edinburgh_-_Edinburgh%2C_69_George_Street_-_20140421200112.jpg/960px-Edinburgh_-_Edinburgh%2C_69_George_Street_-_20140421200112.jpg"
      }
    },
    {
      "name": "Brew Lab",
      "category": "Café · Coffee",
      "address": "6–8 South College St · EH8 9AD",
      "price": "£4–£12",
      "famous": "Pour-over · tea",
      "halal": false,
      "vegetarian": true,
      "reservation": "Walk-in",
      "wait": "5–15 min at peak",
      "michelin": "—",
      "kidsFriendly": "Yes",
      "dressCode": "Casual",
      "tip": "Edinburgh cafés fill quickly on weekends — arrive before 09:30 for a table.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Brew%20Lab%20Edinburgh",
      "bookUrl": "https://www.google.com/maps/search/?api=1&query=Brew%20Lab%20Edinburgh",
      "dishes": [
        {
          "name": "Pour-over · tea",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/South_College_Street_UP_Church%2C_Edinburgh.jpg/960px-South_College_Street_UP_Church%2C_Edinburgh.jpg",
          "desc": "House specialty — order this first."
        },
        {
          "name": "Flat White",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/11a_South_College_Street%2C_Edinburgh.jpg/960px-11a_South_College_Street%2C_Edinburgh.jpg",
          "desc": "Specialty coffee done right."
        },
        {
          "name": "Pastry",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/9%2C_10%2C_11_South_College_Street%2C_Edinburgh.jpg/960px-9%2C_10%2C_11_South_College_Street%2C_Edinburgh.jpg",
          "desc": "Fresh bakes from local suppliers."
        },
        {
          "name": "Full Scottish Breakfast",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/4_South_College_Street%2C_Edinburgh.jpg/960px-4_South_College_Street%2C_Edinburgh.jpg",
          "desc": "Haggis, tattie scones, black pudding — the works."
        },
        {
          "name": "Avocado Toast",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/South_College_Street_UP_Church%2C_Edinburgh.jpg/960px-South_College_Street_UP_Church%2C_Edinburgh.jpg",
          "desc": "Light option before a hike."
        }
      ],
      "photos": {
        "signature": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/South_College_Street_UP_Church%2C_Edinburgh.jpg/960px-South_College_Street_UP_Church%2C_Edinburgh.jpg",
        "interior": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/11a_South_College_Street%2C_Edinburgh.jpg/960px-11a_South_College_Street%2C_Edinburgh.jpg",
        "exterior": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/9%2C_10%2C_11_South_College_Street%2C_Edinburgh.jpg/960px-9%2C_10%2C_11_South_College_Street%2C_Edinburgh.jpg",
        "dessert": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/4_South_College_Street%2C_Edinburgh.jpg/960px-4_South_College_Street%2C_Edinburgh.jpg",
        "coffee": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/11a_South_College_Street%2C_Edinburgh.jpg/960px-11a_South_College_Street%2C_Edinburgh.jpg"
      }
    },
    {
      "name": "Hula Juice Bar",
      "category": "Café · Coffee",
      "address": "103–105 West Bow · EH1 2JP",
      "price": "£4–£12",
      "famous": "Smoothies · light breakfast",
      "halal": false,
      "vegetarian": true,
      "reservation": "Walk-in",
      "wait": "5–15 min at peak",
      "michelin": "—",
      "kidsFriendly": "Yes",
      "dressCode": "Casual",
      "tip": "Edinburgh cafés fill quickly on weekends — arrive before 09:30 for a table.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Hula%20Juice%20Bar%20Edinburgh",
      "bookUrl": "https://www.google.com/maps/search/?api=1&query=Hula%20Juice%20Bar%20Edinburgh",
      "dishes": [
        {
          "name": "Smoothies · light breakfast",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Edinburgh_Grassmarkt_Pubs-20110902-RM-133553.jpg/960px-Edinburgh_Grassmarkt_Pubs-20110902-RM-133553.jpg",
          "desc": "House specialty — order this first."
        },
        {
          "name": "Flat White",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Edinburgh%2C_Grassmarket%2C_K6_Telephone_Kiosk.jpg/960px-Edinburgh%2C_Grassmarket%2C_K6_Telephone_Kiosk.jpg",
          "desc": "Specialty coffee done right."
        },
        {
          "name": "Pastry",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/East_end_of_the_Grassmarket%2C_Edinburgh_%28composite%29.jpg/960px-East_end_of_the_Grassmarket%2C_Edinburgh_%28composite%29.jpg",
          "desc": "Fresh bakes from local suppliers."
        },
        {
          "name": "Full Scottish Breakfast",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Shadow_of_the_gibbet%2C_Grassmarket_Edinburgh.jpg/960px-Shadow_of_the_gibbet%2C_Grassmarket_Edinburgh.jpg",
          "desc": "Haggis, tattie scones, black pudding — the works."
        },
        {
          "name": "Avocado Toast",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Edinburgh_Grassmarkt_Pubs-20110902-RM-133553.jpg/960px-Edinburgh_Grassmarkt_Pubs-20110902-RM-133553.jpg",
          "desc": "Light option before a hike."
        }
      ],
      "photos": {
        "signature": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Edinburgh_Grassmarkt_Pubs-20110902-RM-133553.jpg/960px-Edinburgh_Grassmarkt_Pubs-20110902-RM-133553.jpg",
        "interior": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Edinburgh%2C_Grassmarket%2C_K6_Telephone_Kiosk.jpg/960px-Edinburgh%2C_Grassmarket%2C_K6_Telephone_Kiosk.jpg",
        "exterior": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/East_end_of_the_Grassmarket%2C_Edinburgh_%28composite%29.jpg/960px-East_end_of_the_Grassmarket%2C_Edinburgh_%28composite%29.jpg",
        "dessert": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Shadow_of_the_gibbet%2C_Grassmarket_Edinburgh.jpg/960px-Shadow_of_the_gibbet%2C_Grassmarket_Edinburgh.jpg",
        "coffee": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Edinburgh%2C_Grassmarket%2C_K6_Telephone_Kiosk.jpg/960px-Edinburgh%2C_Grassmarket%2C_K6_Telephone_Kiosk.jpg"
      }
    },
    {
      "name": "Williams & Johnson Coffee Co.",
      "category": "Café · Coffee",
      "address": "1 Dock Pl · Leith · EH6 6LU",
      "price": "£4–£12",
      "famous": "Specialty coffee · Leith",
      "halal": false,
      "vegetarian": true,
      "reservation": "Walk-in",
      "wait": "5–15 min at peak",
      "michelin": "—",
      "kidsFriendly": "Yes",
      "dressCode": "Casual",
      "tip": "Edinburgh cafés fill quickly on weekends — arrive before 09:30 for a table.",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Williams%20%26%20Johnson%20Coffee%20Co.%20Edinburgh",
      "bookUrl": "https://www.google.com/maps/search/?api=1&query=Williams%20%26%20Johnson%20Coffee%20Co.%20Edinburgh",
      "dishes": [
        {
          "name": "Specialty coffee · Leith",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Leith_Police_Station%2C_Constitution_Street_%28former_Town_Hall%29%2C_Edinburgh.jpg/960px-Leith_Police_Station%2C_Constitution_Street_%28former_Town_Hall%29%2C_Edinburgh.jpg",
          "desc": "House specialty — order this first."
        },
        {
          "name": "Flat White",
          "img": "https://upload.wikimedia.org/wikipedia/commons/a/a7/Leith_Police_Station_-_geograph.org.uk_-_2223512.jpg",
          "desc": "Specialty coffee done right."
        },
        {
          "name": "Pastry",
          "img": "https://upload.wikimedia.org/wikipedia/commons/7/72/Leith_Street%2C_Edinburgh_-_geograph.org.uk_-_3543467.jpg",
          "desc": "Fresh bakes from local suppliers."
        },
        {
          "name": "Full Scottish Breakfast",
          "img": "https://upload.wikimedia.org/wikipedia/commons/6/63/Leith_Street%2C_Edinburgh_-_geograph.org.uk_-_3543475.jpg",
          "desc": "Haggis, tattie scones, black pudding — the works."
        },
        {
          "name": "Avocado Toast",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Leith_Police_Station%2C_Constitution_Street_%28former_Town_Hall%29%2C_Edinburgh.jpg/960px-Leith_Police_Station%2C_Constitution_Street_%28former_Town_Hall%29%2C_Edinburgh.jpg",
          "desc": "Light option before a hike."
        }
      ],
      "photos": {
        "signature": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Leith_Police_Station%2C_Constitution_Street_%28former_Town_Hall%29%2C_Edinburgh.jpg/960px-Leith_Police_Station%2C_Constitution_Street_%28former_Town_Hall%29%2C_Edinburgh.jpg",
        "interior": "https://upload.wikimedia.org/wikipedia/commons/a/a7/Leith_Police_Station_-_geograph.org.uk_-_2223512.jpg",
        "exterior": "https://upload.wikimedia.org/wikipedia/commons/7/72/Leith_Street%2C_Edinburgh_-_geograph.org.uk_-_3543467.jpg",
        "dessert": "https://upload.wikimedia.org/wikipedia/commons/6/63/Leith_Street%2C_Edinburgh_-_geograph.org.uk_-_3543475.jpg",
        "coffee": "https://upload.wikimedia.org/wikipedia/commons/a/a7/Leith_Police_Station_-_geograph.org.uk_-_2223512.jpg"
      }
    }
  ],
  "itineraries": [
    {
      "day": 1,
      "title": "The Royal Mile & Old Town",
      "color": "#8B5A9B",
      "routePreview": "10 stops · start 08:30 · end 19:30 · ≈ 6 km",
      "mapUrl": "https://www.google.com/maps/dir/The+Edinburgh+Larder/Edinburgh+Castle/Camera+Obscura+Edinburgh/The+Witchery+by+the+Castle/St+Giles+Cathedral/The+Real+Mary+Kings+Close/Victoria+Street+Edinburgh/Makars+Gourmet+Mash+Bar",
      "budget": {
        "budget": {
          "total": "£100 per person",
          "includes": [
            "Free cathedral",
            "Walking everywhere",
            "Pub lunches",
            "Bus day ticket"
          ]
        },
        "mid": {
          "total": "£230 per person",
          "includes": [
            "Castle ticket",
            "Occasional taxi",
            "Sit-down meals",
            "Coffee stops"
          ]
        },
        "luxury": {
          "total": "£550 per person",
          "includes": [
            "Private tours",
            "Taxi to Leith",
            "Michelin dinner",
            "Whisky tasting"
          ]
        }
      },
      "photos": [
        "https://upload.wikimedia.org/wikipedia/commons/1/11/Blackfriars_Street_-_geograph.org.uk_-_928737.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/City_of_Edinburgh_-_Edinburgh_Castle_-_20140421193357.jpg/960px-City_of_Edinburgh_-_Edinburgh_Castle_-_20140421193357.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/0/07/Camera_Obscura_Edinburgh_-_geograph.org.uk_-_742543.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/2/27/The_Witchery_-_geograph.org.uk_-_612172.jpg"
      ],
      "stops": [
        {
          "time": "08:30",
          "timeOfDay": "morning",
          "name": "The Edinburgh Larder",
          "desc": "Full Scottish Breakfast · specialty coffee",
          "transit": "Walk from hotel · Old Town",
          "icon": "walk",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=The%20Edinburgh%20Larder"
        },
        {
          "time": "09:30",
          "timeOfDay": "morning",
          "name": "Edinburgh Castle",
          "desc": "Scotland's most famous landmark · book online · arrive early",
          "transit": "Walk 5 min",
          "icon": "walk",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Edinburgh%20Castle"
        },
        {
          "time": "12:00",
          "timeOfDay": "afternoon",
          "name": "Camera Obscura & World of Illusions",
          "desc": "Families · panoramic rooftop views · 1 hour",
          "transit": "Walk 2 min",
          "icon": "walk",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Camera%20Obscura%20Edinburgh"
        },
        {
          "time": "13:30",
          "timeOfDay": "afternoon",
          "name": "The Witchery by the Castle",
          "desc": "Scottish Salmon · Beef Wellington",
          "transit": "Walk 10 min along Royal Mile",
          "icon": "walk",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=The%20Witchery%20by%20the%20Castle%20Edinburgh"
        },
        {
          "time": "15:00",
          "timeOfDay": "afternoon",
          "name": "St Giles' Cathedral",
          "desc": "One of Scotland's most important churches · free entry",
          "transit": "Walk 5 min",
          "icon": "walk",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=St%20Giles%20Cathedral%20Edinburgh"
        },
        {
          "time": "16:00",
          "timeOfDay": "afternoon",
          "name": "The Real Mary King's Close",
          "desc": "Underground medieval streets · 1 hour",
          "transit": "Walk 5 min",
          "icon": "walk",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=The%20Real%20Mary%20Kings%20Close%20Edinburgh"
        },
        {
          "time": "18:00",
          "timeOfDay": "evening",
          "name": "Victoria Street",
          "desc": "Harry Potter · Diagon Alley inspiration · most photographed street",
          "transit": "Walk 10 min",
          "icon": "walk",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Victoria%20Street%20Edinburgh"
        },
        {
          "time": "19:30",
          "timeOfDay": "night",
          "name": "Makars Gourmet Mash Bar",
          "desc": "Traditional Scottish comfort food",
          "transit": "Walk 5 min",
          "icon": "walk",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Makars%20Gourmet%20Mash%20Bar%20Edinburgh"
        },
        {
          "time": "21:00",
          "timeOfDay": "night",
          "name": "Optional · Ghost Tour",
          "desc": "Old Town ghost walk · book Mercat or City of the Dead",
          "transit": "Walk · Royal Mile",
          "icon": "walk",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Mercat%20Tours%20Edinburgh"
        }
      ]
    },
    {
      "day": 2,
      "title": "New Town, Dean Village & Calton Hill",
      "color": "#C68642",
      "routePreview": "9 stops · start 08:30 · end 20:00 · ≈ 8 km",
      "mapUrl": "https://www.google.com/maps/dir/Urban+Angel+Edinburgh/Princes+Street+Gardens/Scott+Monument/Dean+Village/Cairngorm+Coffee/The+Scran+and+Scallie/Royal+Botanic+Garden+Edinburgh/Calton+Hill/The+Dome+Edinburgh",
      "budget": {
        "budget": {
          "total": "£100 per person",
          "includes": [
            "Free cathedral",
            "Walking everywhere",
            "Pub lunches",
            "Bus day ticket"
          ]
        },
        "mid": {
          "total": "£230 per person",
          "includes": [
            "Castle ticket",
            "Occasional taxi",
            "Sit-down meals",
            "Coffee stops"
          ]
        },
        "luxury": {
          "total": "£550 per person",
          "includes": [
            "Private tours",
            "Taxi to Leith",
            "Michelin dinner",
            "Whisky tasting"
          ]
        }
      },
      "photos": [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/13_South_Hanover_Street%2C_Edinburgh.jpg/960px-13_South_Hanover_Street%2C_Edinburgh.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Princes_Street_Gardens_20140319.jpg/960px-Princes_Street_Gardens_20140319.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Scott_Monument%2C_Edinburgh%2C_May_2008.jpg/960px-Scott_Monument%2C_Edinburgh%2C_May_2008.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/e/ef/Dean_village%2C_Edinburgh_-_geograph.org.uk_-_1296483.jpg"
      ],
      "stops": [
        {
          "time": "08:30",
          "timeOfDay": "morning",
          "name": "Urban Angel",
          "desc": "Breakfast · specialty coffee",
          "transit": "Walk from hotel",
          "icon": "walk",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Urban%20Angel%20Edinburgh"
        },
        {
          "time": "09:30",
          "timeOfDay": "morning",
          "name": "Princes Street Gardens",
          "desc": "Beautiful castle views from the valley",
          "transit": "Walk 5 min",
          "icon": "walk",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Princes%20Street%20Gardens%20Edinburgh"
        },
        {
          "time": "10:30",
          "timeOfDay": "morning",
          "name": "Scott Monument",
          "desc": "Optional climb · 287 steps to the top",
          "transit": "Walk 3 min",
          "icon": "walk",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Scott%20Monument%20Edinburgh"
        },
        {
          "time": "11:30",
          "timeOfDay": "morning",
          "name": "Dean Village",
          "desc": "Hidden gem · take your time for photos",
          "transit": "Walk 15 min",
          "icon": "walk",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Dean%20Village%20Edinburgh"
        },
        {
          "time": "13:00",
          "timeOfDay": "afternoon",
          "name": "Cairngorm Coffee",
          "desc": "Coffee break · single-origin pour-over",
          "transit": "Walk 12 min",
          "icon": "walk",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Cairngorm%20Coffee%20Edinburgh"
        },
        {
          "time": "14:00",
          "timeOfDay": "afternoon",
          "name": "The Scran & Scallie",
          "desc": "Traditional Scottish pub lunch",
          "transit": "Walk 10 min",
          "icon": "walk",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=The%20Scran%20and%20Scallie%20Edinburgh"
        },
        {
          "time": "16:00",
          "timeOfDay": "afternoon",
          "name": "Royal Botanic Garden",
          "desc": "Relaxing afternoon · glasshouses £7",
          "transit": "Taxi 10 min",
          "icon": "cab",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Royal%20Botanic%20Garden%20Edinburgh"
        },
        {
          "time": "18:30",
          "timeOfDay": "evening",
          "name": "Calton Hill",
          "desc": "Best sunset viewpoint in Edinburgh",
          "transit": "Taxi 10 min",
          "icon": "cab",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Calton%20Hill%20Edinburgh"
        },
        {
          "time": "20:00",
          "timeOfDay": "night",
          "name": "The Dome",
          "desc": "Elegant Scottish dining under the Victorian dome",
          "transit": "Taxi 8 min",
          "icon": "cab",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=The%20Dome%20Edinburgh"
        }
      ]
    },
    {
      "day": 3,
      "title": "Arthur's Seat & Leith",
      "color": "#6B21A8",
      "routePreview": "9 stops · start 07:30 · end 19:30 · ≈ 7 km",
      "mapUrl": "https://www.google.com/maps/dir/Hula+Juice+Bar/Arthurs+Seat+Edinburgh/Palace+of+Holyroodhouse/Fishers+in+Leith/Royal+Yacht+Britannia/Williams+and+Johnson+Coffee+Co/The+Kitchin+Edinburgh",
      "budget": {
        "budget": {
          "total": "£100 per person",
          "includes": [
            "Free cathedral",
            "Walking everywhere",
            "Pub lunches",
            "Bus day ticket"
          ]
        },
        "mid": {
          "total": "£230 per person",
          "includes": [
            "Castle ticket",
            "Occasional taxi",
            "Sit-down meals",
            "Coffee stops"
          ]
        },
        "luxury": {
          "total": "£550 per person",
          "includes": [
            "Private tours",
            "Taxi to Leith",
            "Michelin dinner",
            "Whisky tasting"
          ]
        }
      },
      "photos": [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Edinburgh_Grassmarkt_Pubs-20110902-RM-133553.jpg/960px-Edinburgh_Grassmarkt_Pubs-20110902-RM-133553.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Edinburgh_Arthur_Seat_dsc06165.jpg/960px-Edinburgh_Arthur_Seat_dsc06165.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Holyrood_Palace_and_Abbey.jpg/960px-Holyrood_Palace_and_Abbey.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/1/16/The_Shore%2C_Leith_-_geograph.org.uk_-_2623294.jpg"
      ],
      "stops": [
        {
          "time": "07:30",
          "timeOfDay": "morning",
          "name": "Hula Juice Bar",
          "desc": "Light breakfast before the hike",
          "transit": "Walk from hotel",
          "icon": "walk",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Hula%20Juice%20Bar%20Edinburgh"
        },
        {
          "time": "08:30",
          "timeOfDay": "morning",
          "name": "Arthur's Seat",
          "desc": "Highest point in Holyrood Park · 2–3 hours · best sunrise",
          "transit": "Walk 15 min to trailhead",
          "icon": "walk",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Arthurs%20Seat%20Edinburgh"
        },
        {
          "time": "11:30",
          "timeOfDay": "afternoon",
          "name": "Palace of Holyroodhouse",
          "desc": "Official royal residence in Scotland",
          "transit": "Walk 15 min downhill",
          "icon": "walk",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Palace%20of%20Holyroodhouse%20Edinburgh"
        },
        {
          "time": "13:30",
          "timeOfDay": "afternoon",
          "name": "Fishers in Leith",
          "desc": "Fresh Scottish seafood lunch",
          "transit": "Taxi 15 min",
          "icon": "cab",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Fishers%20in%20Leith%20Edinburgh"
        },
        {
          "time": "15:00",
          "timeOfDay": "afternoon",
          "name": "Royal Yacht Britannia",
          "desc": "One of the UK's top attractions · 2 hours",
          "transit": "Walk 5 min",
          "icon": "walk",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Royal%20Yacht%20Britannia%20Edinburgh"
        },
        {
          "time": "17:30",
          "timeOfDay": "evening",
          "name": "Williams & Johnson Coffee Co.",
          "desc": "Coffee break · Leith specialty roaster",
          "transit": "Walk 8 min",
          "icon": "walk",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=Williams%20and%20Johnson%20Coffee%20Co%20Leith%20Edinburgh"
        },
        {
          "time": "18:00",
          "timeOfDay": "evening",
          "name": "Leith Shore Walk",
          "desc": "Boutiques · waterfront · local atmosphere",
          "transit": "Walk along The Shore",
          "icon": "walk",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=The%20Shore%20Leith%20Edinburgh"
        },
        {
          "time": "19:30",
          "timeOfDay": "night",
          "name": "Farewell Dinner · The Kitchin",
          "desc": "Michelin star · or The Ship on the Shore",
          "transit": "Walk 5 min",
          "icon": "walk",
          "mapUrl": "https://www.google.com/maps/search/?api=1&query=The%20Kitchin%20Edinburgh"
        }
      ]
    }
  ],
  "rainyDay": [
    {
      "name": "National Museum of Scotland",
      "address": "Chambers St",
      "desc": "Free · dinosaurs to Dolly the sheep",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Museum_of_Scotland.jpg/960px-Museum_of_Scotland.jpg",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=National%20Museum%20of%20Scotland%20Edinburgh"
    },
    {
      "name": "Scottish National Gallery",
      "address": "The Mound",
      "desc": "Free · Scottish masters",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Scottish_National_Gallery.jpg/960px-Scottish_National_Gallery.jpg",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Scottish%20National%20Gallery%20Edinburgh"
    },
    {
      "name": "The Real Mary King's Close",
      "address": "Royal Mile",
      "desc": "Underground tour · atmospheric",
      "img": "https://upload.wikimedia.org/wikipedia/commons/9/96/Marykingsclose006.jpg",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=The%20Real%20Mary%20Kings%20Close%20Edinburgh"
    },
    {
      "name": "Camera Obscura",
      "address": "Castlehill",
      "desc": "Illusions + rooftop views",
      "img": "https://upload.wikimedia.org/wikipedia/commons/0/07/Camera_Obscura_Edinburgh_-_geograph.org.uk_-_742543.jpg",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Camera%20Obscura%20Edinburgh"
    },
    {
      "name": "Royal Botanic Garden Glasshouses",
      "address": "Inverleith Row",
      "desc": "Tropical escape · £7",
      "img": "https://upload.wikimedia.org/wikipedia/commons/4/41/Tropical_Palm_House%2C_Royal_Botanic_Garden%2C_Edinburgh._-_geograph.org.uk_-_1475464.jpg",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Royal%20Botanic%20Garden%20Edinburgh"
    },
    {
      "name": "Scotch Whisky Experience",
      "address": "Royal Mile",
      "desc": "Barrel ride + tasting",
      "img": "https://upload.wikimedia.org/wikipedia/commons/e/e4/Scotch_Whisky_Heritage_Center_of_Edinburgh.jpg",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Scotch%20Whisky%20Experience%20Edinburgh"
    },
    {
      "name": "The Dome afternoon tea",
      "address": "George Street",
      "desc": "Victorian grandeur",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/The_Dome%2C_Edinburgh.jpg/960px-The_Dome%2C_Edinburgh.jpg",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=The%20Dome%20Edinburgh"
    }
  ],
  "sunnyDay": [
    {
      "name": "Arthur's Seat",
      "address": "Holyrood Park",
      "desc": "Sunrise hike · 251 m summit",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Edinburgh_Arthur_Seat_dsc06165.jpg/960px-Edinburgh_Arthur_Seat_dsc06165.jpg",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Arthurs%20Seat%20Edinburgh"
    },
    {
      "name": "Calton Hill",
      "address": "Regent Road",
      "desc": "Best sunset viewpoint",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Edinburgh_Calton_Hill.jpg/960px-Edinburgh_Calton_Hill.jpg",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Calton%20Hill%20Edinburgh"
    },
    {
      "name": "Dean Village",
      "address": "Dean Path",
      "desc": "Hidden gem · photo paradise",
      "img": "https://upload.wikimedia.org/wikipedia/commons/e/ef/Dean_village%2C_Edinburgh_-_geograph.org.uk_-_1296483.jpg",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Dean%20Village%20Edinburgh"
    },
    {
      "name": "Princes Street Gardens",
      "address": "Princes Street",
      "desc": "Castle views · picnic spot",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Princes_Street_Gardens_20140319.jpg/960px-Princes_Street_Gardens_20140319.jpg",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Princes%20Street%20Gardens%20Edinburgh"
    },
    {
      "name": "Royal Botanic Garden",
      "address": "Inverleith Row",
      "desc": "70 acres · free entry outdoors",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Palm_House%2C_Royal_Botanic_Garden_Edinburgh.JPG/960px-Palm_House%2C_Royal_Botanic_Garden_Edinburgh.JPG",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Royal%20Botanic%20Garden%20Edinburgh"
    },
    {
      "name": "Leith Shore Walk",
      "address": "The Shore",
      "desc": "Waterfront · boutiques · seafood",
      "img": "https://upload.wikimedia.org/wikipedia/commons/e/ef/Water_of_Leith_Walkway%2C_Leith_-_geograph.org.uk_-_1857679.jpg",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=The%20Shore%20Leith%20Edinburgh"
    },
    {
      "name": "Portobello Beach",
      "address": "East Edinburgh",
      "desc": "Sandy beach · 30 min bus",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Portobello_Beach_Pillars.jpg/960px-Portobello_Beach_Pillars.jpg",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Portobello%20Beach%20Edinburgh"
    }
  ],
  "hiddenGems": [
    {
      "name": "Dean Village",
      "desc": "Water of Leith · 19th-century mill village",
      "img": "https://upload.wikimedia.org/wikipedia/commons/e/ef/Dean_village%2C_Edinburgh_-_geograph.org.uk_-_1296483.jpg",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Dean%20Village%20Edinburgh"
    },
    {
      "name": "Circus Lane",
      "desc": "New Town mews · cobblestones and colour",
      "img": "https://upload.wikimedia.org/wikipedia/commons/b/bd/Circus_Lane_%282056643217%29.jpg",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Circus%20Lane%20Edinburgh"
    },
    {
      "name": "Dunbar's Close Garden",
      "desc": "Secret 17th-century garden off Royal Mile",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Dunbar%27s_Close_Garden_01.jpg/960px-Dunbar%27s_Close_Garden_01.jpg",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Dunbars%20Close%20Garden%20Edinburgh"
    },
    {
      "name": "Water of Leith Walkway",
      "desc": "12-mile riverside path · Dean Village to Leith",
      "img": "https://upload.wikimedia.org/wikipedia/commons/e/ef/Water_of_Leith_Walkway%2C_Leith_-_geograph.org.uk_-_1857679.jpg",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Water%20of%20Leith%20Walkway%20Edinburgh"
    },
    {
      "name": "Dr Neil's Garden",
      "desc": "Hidden garden below Arthur's Seat",
      "img": "https://upload.wikimedia.org/wikipedia/commons/b/b9/Dr_Neil%27s_Garden_at_Duddingston_-_geograph.org.uk_-_1507681.jpg",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Dr%20Neils%20Garden%20Edinburgh"
    },
    {
      "name": "The Vennel",
      "desc": "Staircase view of Edinburgh Castle",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/The_Vennel%2C_Edinburgh.JPG/960px-The_Vennel%2C_Edinburgh.JPG",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=The%20Vennel%20Edinburgh"
    },
    {
      "name": "Stockbridge Market",
      "desc": "Sunday farmers market · local produce",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Stockbridge_Market_Edinburgh.jpg/960px-Stockbridge_Market_Edinburgh.jpg",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Stockbridge%20Market%20Edinburgh"
    },
    {
      "name": "Greyfriars Bobby",
      "desc": "Faithful dog statue · kirkyard behind",
      "img": "https://upload.wikimedia.org/wikipedia/commons/8/83/Greyfriars-bobby-edin.jpg",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Greyfriars%20Bobby%20Edinburgh"
    }
  ],
  "warnings": [
    {
      "title": "Airport taxi touts",
      "desc": "Never take an unlicensed taxi at EDI. Tram is £7.50 and takes 35 min. Licensed black cab from arrivals: £25–£35."
    },
    {
      "title": "Royal Mile tourist traps",
      "desc": "£25 tartan scarves made in China. Buy whisky and shortbread from Royal Mile Whiskies or Jenners, not street stalls."
    },
    {
      "title": "Castle ticket queues",
      "desc": "Walk-up queues exceed 60 min in July–August. Always book online at edinburghcastle.scot — saves time and money."
    },
    {
      "title": "Arthur's Seat weather",
      "desc": "The summit is exposed — wind chill doubles in winter. Bring layers even on sunny mornings. Proper shoes, not trainers on wet days."
    },
    {
      "title": "Fringe Festival prices",
      "desc": "Hotels triple in August during the Fringe. Book 3+ months ahead or visit May/September instead."
    },
    {
      "title": "Restaurant Royal Mile",
      "desc": "Generic \"Scottish\" pubs on upper Royal Mile serve frozen food at tourist prices. Use the restaurants in this guide."
    },
    {
      "title": "Currency exchange",
      "desc": "Never use FX booths on Princes Street. Your contactless card gives the best rate everywhere."
    }
  ],
  "shopping": {
    "districts": [
      {
        "name": "Princes Street",
        "desc": "High street brands · Jenners · castle views",
        "img": "https://upload.wikimedia.org/wikipedia/commons/9/9c/Princes_Street%2C_Edinburgh%2C_29_October_2005.jpg",
        "mapUrl": "https://www.google.com/maps/search/?api=1&query=Princes%20Street%20Edinburgh"
      },
      {
        "name": "Multrees Walk",
        "desc": "Luxury · Harvey Nichols · Louis Vuitton",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Multrees_Walk.jpg/960px-Multrees_Walk.jpg",
        "mapUrl": "https://www.google.com/maps/search/?api=1&query=Multrees%20Walk%20Edinburgh"
      },
      {
        "name": "Grassmarket",
        "desc": "Independent shops · vintage · pubs",
        "img": "https://upload.wikimedia.org/wikipedia/commons/7/79/Grassmarket%2C_Edinburgh%2C_12_August_2013.jpg",
        "mapUrl": "https://www.google.com/maps/search/?api=1&query=Grassmarket%20Edinburgh"
      },
      {
        "name": "Leith Shore",
        "desc": "Boutiques · design shops · waterfront",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/The_Shore_in_Leith_-_Winter_2009_-_geograph.org.uk_-_2166414.jpg/960px-The_Shore_in_Leith_-_Winter_2009_-_geograph.org.uk_-_2166414.jpg",
        "mapUrl": "https://www.google.com/maps/search/?api=1&query=The%20Shore%20Leith%20Edinburgh"
      }
    ],
    "brands": [
      "Harris Tweed",
      "Johnstons of Elgin",
      "Walkers Shortbread",
      "Royal Mile Whiskies",
      "Hamilton & Inches"
    ],
    "souvenirs": [
      "Single malt Scotch whisky",
      "Harris Tweed scarf",
      "Shortbread tin",
      "Edinburgh Castle print",
      "Scottish tablet sweets"
    ],
    "vatTips": {
      "rate": "20% VAT",
      "refund": "Tax-free shopping for non-EU visitors on purchases over £100 at participating stores. Ask for the form at checkout."
    }
  },
  "budget": {
    "budget": {
      "daily": "£80–120 per person / day",
      "accommodation": "£90 ibis / Premier Inn",
      "food": "£25 pub lunches",
      "transport": "£5.50 bus day ticket",
      "activities": "£15 cathedral & walks",
      "extras": "£5 coffee",
      "tip": "Walk everywhere in the Old Town. Free entry to St Giles' and Calton Hill. One splurge: Edinburgh Castle ticket."
    },
    "mid": {
      "daily": "£180–280 per person / day",
      "accommodation": "£180 Market Street Hotel",
      "food": "£55 sit-down meals",
      "transport": "£10 taxi to Leith once",
      "activities": "£45 castle + Mary King's Close",
      "extras": "£15 whisky tasting"
    },
    "luxury": {
      "daily": "£400–700 per person / day",
      "accommodation": "£450 The Balmoral",
      "food": "£120 The Kitchin tasting menu",
      "transport": "£25 taxis",
      "activities": "£60 private castle tour",
      "extras": "£40 whisky & tips"
    }
  },
  "family": {
    "tip": "Children under 5 go free on Lothian Buses. Under 16s travel free with a paying adult on buses. Camera Obscura and Dynamic Earth are the best family attractions.",
    "rows": [
      {
        "attraction": "Camera Obscura",
        "desc": "Illusions delight all ages",
        "goodForKids": true,
        "stroller": false,
        "babyChange": true,
        "familyTicket": true
      },
      {
        "attraction": "Edinburgh Castle",
        "desc": "One o'clock gun · Crown Jewels",
        "goodForKids": true,
        "stroller": true,
        "babyChange": true,
        "familyTicket": true
      },
      {
        "attraction": "Dynamic Earth",
        "desc": "Interactive science · near Holyrood",
        "goodForKids": true,
        "stroller": true,
        "babyChange": true,
        "familyTicket": true
      },
      {
        "attraction": "Royal Yacht Britannia",
        "desc": "Audio tour · royal bedrooms",
        "goodForKids": true,
        "stroller": true,
        "babyChange": true,
        "familyTicket": true
      },
      {
        "attraction": "National Museum of Scotland",
        "desc": "Free · T.rex · rooftop view",
        "goodForKids": true,
        "stroller": true,
        "babyChange": true,
        "familyTicket": true
      },
      {
        "attraction": "Arthur's Seat",
        "desc": "Older kids only · steep paths",
        "goodForKids": false,
        "stroller": false,
        "babyChange": false,
        "familyTicket": true
      },
      {
        "attraction": "Royal Botanic Garden",
        "desc": "Run free · glasshouses",
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
        "label": "999 / 112",
        "desc": "Police · Fire · Ambulance",
        "icon": "emergency"
      },
      {
        "label": "111",
        "desc": "NHS non-emergency · 24/7",
        "icon": "medical"
      },
      {
        "label": "101",
        "desc": "Non-emergency police",
        "icon": "police"
      },
      {
        "label": "+44 20 7008 5000",
        "desc": "UK Foreign Office · lost passport",
        "icon": "passport"
      }
    ],
    "hospitals": [
      {
        "name": "Royal Infirmary of Edinburgh",
        "address": "51 Little France · EH16 4SA",
        "icon": "hospital",
        "mapUrl": "https://www.google.com/maps/search/?api=1&query=Royal%20Infirmary%20of%20Edinburgh"
      },
      {
        "name": "Western General Hospital",
        "address": "Crewe Rd · EH4 2XU",
        "icon": "hospital",
        "mapUrl": "https://www.google.com/maps/search/?api=1&query=Western%20General%20Hospital%20Edinburgh"
      },
      {
        "name": "St John's Hospital",
        "address": "Livingston · EH54 6PP",
        "icon": "hospital",
        "mapUrl": "https://www.google.com/maps/search/?api=1&query=St%20Johns%20Hospital%20Livingston%20Edinburgh"
      }
    ],
    "embassies": [
      {
        "country": "Saudi Arabia",
        "address": "30 Charles St · London W1J 5DZ",
        "icon": "embassy",
        "mapUrl": "https://www.google.com/maps/search/?api=1&query=Saudi+Embassy+London"
      },
      {
        "country": "United Arab Emirates",
        "address": "1–2 Grosvenor Cres · London SW1X 7EE",
        "icon": "embassy",
        "mapUrl": "https://www.google.com/maps/search/?api=1&query=UAE+Embassy+London"
      },
      {
        "country": "Kuwait",
        "address": "2 Albert Gate · London SW1X 7JU",
        "icon": "embassy",
        "mapUrl": "https://www.google.com/maps/search/?api=1&query=Kuwait+Embassy+London"
      },
      {
        "country": "Qatar",
        "address": "1 South Audley St · London W1K 1NB",
        "icon": "embassy",
        "mapUrl": "https://www.google.com/maps/search/?api=1&query=Qatar+Embassy+London"
      },
      {
        "country": "Bahrain",
        "address": "30 Belgrave Sq · London SW1X 8QB",
        "icon": "embassy",
        "mapUrl": "https://www.google.com/maps/search/?api=1&query=Bahrain+Embassy+London"
      },
      {
        "country": "Oman",
        "address": "167 Queen's Gate · London SW7 5HE",
        "icon": "embassy",
        "mapUrl": "https://www.google.com/maps/search/?api=1&query=Oman+Embassy+London"
      }
    ],
    "lostPassport": "Report to the nearest police station (dial 101). Contact your embassy in London — they can issue an emergency travel document within 24–48 h. Take photos of your passport before you fly."
  },
  "phrases": [
    {
      "english": "Where is the nearest bus stop?",
      "use": "Lothian Buses navigation"
    },
    {
      "english": "Could I pay by card, please?",
      "use": "Cards work everywhere"
    },
    {
      "english": "Is there a table for two?",
      "use": "Restaurant arrival"
    },
    {
      "english": "Could we have the bill, please?",
      "use": "End of meal"
    },
    {
      "english": "How far is it to the castle?",
      "use": "Old Town directions"
    },
    {
      "english": "A pint of lager, please.",
      "use": "Pub ordering"
    },
    {
      "english": "Do you have vegetarian options?",
      "use": "Dietary needs"
    },
    {
      "english": "Which tram goes to the airport?",
      "use": "EDI departure day"
    }
  ],
  "cheatSheet": {
    "title": "One-Page Cheat Sheet",
    "subtitle": "Screenshot before your flight — every essential in one glance.",
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
        "label": "£7.50",
        "value": "Tram EDI → city"
      },
      {
        "label": "£5.50",
        "value": "Bus day ticket"
      },
      {
        "label": "Walk",
        "value": "Old Town best on foot"
      }
    ],
    "money": [
      {
        "label": "Contactless",
        "value": "Everywhere"
      },
      {
        "label": "No FX booths",
        "value": "Use your card"
      },
      {
        "label": "Tip 10–12.5%",
        "value": "Check service charge"
      }
    ],
    "apps": [
      {
        "name": "Lothian Buses",
        "use": "Bus times & tickets"
      },
      {
        "name": "Citymapper",
        "use": "Navigation"
      },
      {
        "name": "Edinburgh Trams",
        "use": "Airport tram"
      }
    ],
    "topQrCodes": [
      {
        "name": "Edinburgh Airport",
        "mapUrl": "https://www.google.com/maps/search/?api=1&query=Edinburgh+Airport"
      },
      {
        "name": "Edinburgh Castle",
        "mapUrl": "https://www.google.com/maps/search/?api=1&query=Edinburgh%20Castle"
      },
      {
        "name": "Arthur's Seat",
        "mapUrl": "https://www.google.com/maps/search/?api=1&query=Arthurs%20Seat%20Edinburgh"
      },
      {
        "name": "Royal Yacht Britannia",
        "mapUrl": "https://www.google.com/maps/search/?api=1&query=Royal%20Yacht%20Britannia%20Edinburgh"
      },
      {
        "name": "Victoria Street",
        "mapUrl": "https://www.google.com/maps/search/?api=1&query=Victoria%20Street%20Edinburgh"
      },
      {
        "name": "The Balmoral",
        "mapUrl": "https://www.google.com/maps/search/?api=1&query=The%20Balmoral%20Hotel%20Edinburgh"
      },
      {
        "name": "Royal Infirmary",
        "mapUrl": "https://www.google.com/maps/search/?api=1&query=Royal%20Infirmary%20of%20Edinburgh"
      },
      {
        "name": "Waverley Station",
        "mapUrl": "https://www.google.com/maps/search/?api=1&query=Edinburgh%20Waverley%20Station"
      }
    ]
  },
  "etiquette": [
    {
      "rule": "Stand on the right",
      "desc": "Escalators at Waverley. Left for walking. Same as London — the rule crosses the border."
    },
    {
      "rule": "Queue patiently",
      "desc": "Britons queue for buses, coffee, castle tickets and ghost tours. Never skip."
    },
    {
      "rule": "Say cheers",
      "desc": "Short for thank you in Scotland. You will hear it fifty times a day. Reply in kind."
    },
    {
      "rule": "Respect the hill",
      "desc": "Arthur's Seat is a public park, not an amusement ride. Stay on paths and take litter home."
    },
    {
      "rule": "Pub rounds",
      "desc": "In Scottish pubs, buying rounds is the social contract. If someone buys you a pint, buy the next round."
    },
    {
      "rule": "Whisky appreciation",
      "desc": "Never call Scotch \"Scotch whisky whiskey\". Ask the bartender for a recommendation — they love to guide newcomers."
    },
    {
      "rule": "Photograph respectfully",
      "desc": "Victoria Street residents live with constant cameras. Do not block doorways or climb private steps for photos."
    }
  ]
};
