/*
  Discover — language (EN/AR) and dark mode preferences
*/
(function (global) {
  'use strict';

  const STORAGE_LANG = 'discover-lang';
  const STORAGE_DARK = 'discover-dark';

  const UI = {
    en: {
      langToggle: 'عربي',
      toggleDark: 'Toggle dark mode',
      toggleLight: 'Toggle light mode',
      discover: 'Discover',
      statSights: 'Sights',
      statHotels: 'Hotels',
      statDining: 'Dining',
      statDays: 'Days',
      statQr: 'QR Codes',
      statChapters: 'Chapters',
      edition: 'Edition',
      homeWelcomeKicker: 'Welcome',
      homeWelcomeTitle: 'From the Editor',
      homeWelcomeSub: 'Your pocket companion to {city}.',
      homeEditorKicker: 'From the Editor',
      homeEssentialsKicker: 'Before you land',
      homeEssentialsTitle: 'Essentials',
      homeEssentialsSub: 'Everything you need before touchdown.',
      homeArrivalKicker: 'Day one',
      homeArrivalTitle: 'Arrival playbook',
      homeArrivalSub: 'Seven steps from touchdown to tea.',
      homePackingKicker: 'What to pack',
      homePackingTitle: 'Packing',
      homePackingSub: '{season} checklist.',
      homeWeatherKicker: 'When to go',
      homeWeatherTitle: 'Best months to visit',
      homeWeatherSub: 'Peak season at a glance — full table in More → Weather.',
      weatherTemp: 'Temp',
      weatherRain: 'Rain',
      weatherCrowds: 'Crowds',
      weatherBestFor: 'Best for',
      weatherPrice: 'Price',
      tabHome: 'Home',
      tabSights: 'Sights',
      tabStay: 'Stay',
      tabEat: 'Eat',
      tabPlan: 'Plan',
      tabMore: 'More',
      backTo: 'Back to {label}',
      back: 'Back',
      chapter01: 'Chapter 01',
      chapter02: 'Chapter 02',
      chapter03: 'Chapter 03',
      chapter04: 'Chapter 04',
      sightsTitle: 'Must-See Sights',
      sightsSub: 'Tap any sight for the full guide.',
      stayTitle: 'Where to Stay',
      staySub: 'Tap a hotel for rooms, tips and booking.',
      eatTitle: 'Where to Eat',
      eatSub: 'Tap a restaurant for dishes and booking.',
      planTitle: 'Your Itinerary',
      planSub: 'Hour-by-hour routes, ready to follow.',
      planEmpty: 'No plans yet.',
      moreChapter: 'Essentials',
      moreTitle: 'More to Know',
      moreSub: 'Transport, emergency, budget & beyond.',
      viewGuide: 'View guide →',
      viewHotel: 'View hotel →',
      viewMenu: 'View menu →',
      map: 'Map',
      book: 'Book',
      reserve: 'Reserve',
      scanMap: 'Scan for map',
      fullRoute: 'Full route',
      openMapLink: 'Open map link below',
      crowdLevels: 'Crowd levels',
      morning: 'Morning',
      afternoon: 'Afternoon',
      evening: 'Evening',
      moreTransport: 'Transport',
      moreMaps: 'Maps',
      moreWeather: 'Weather',
      moreGems: 'Gems',
      moreShopping: 'Shopping',
      moreWarnings: 'Warnings',
      moreBudget: 'Budget',
      moreFamily: 'Family',
      moreEmergency: 'Emergency',
      moreLocal: 'Local tips',
      moreCheat: 'Cheat sheet',
      navLabel: 'Main navigation',
      labelTicket: 'Ticket',
      labelTube: 'Tube',
      labelVisitTime: 'Visit time',
      labelSummerWait: 'Summer wait',
      labelPrice: 'Price',
      labelRating: 'Rating',
      labelCategory: 'Category',
      labelWait: 'Wait',
      labelReserve: 'Reserve',
      labelInsider: 'Insider',
      labelTip: 'Tip',
      labelEatNearby: 'Eat nearby',
      labelGettingThere: 'Getting there',
      labelNearbyTop5: 'Nearby — top 5',
      labelAddress: 'Address',
      labelAirport: 'Airport',
      labelRoom: 'Room',
      labelNearby: 'Nearby',
      labelPaymentTips: 'Payment tips',
      labelProTip: 'Pro tip',
      labelRainyDay: 'Rainy day',
      labelSunnyDay: 'Sunny day',
      labelKeyLocations: 'Key locations',
      legendSights: 'Sights',
      legendHotels: 'Hotels',
      legendDining: 'Dining',
      legendParks: 'Parks',
      legendDistrict: 'District',
      openMap: 'Open map →',
      labelLostPassport: 'Lost passport',
      labelHospitals: 'Hospitals',
      labelEmbassies: 'Embassies',
      labelAttraction: 'Attraction',
      labelKids: 'Kids',
      labelStroller: 'Stroller',
      labelBaby: 'Baby',
      labelFamilyPrice: 'Family £',
      tierBudget: 'Budget',
      tierMid: 'Mid',
      tierLuxury: 'Luxury',
      rowDaily: 'daily',
      rowAccommodation: 'accommodation',
      rowFood: 'food',
      rowTransport: 'transport',
      rowActivities: 'activities',
      rowExtras: 'extras',
      labelVat: 'VAT',
      usefulPhrases: 'Useful phrases',
      localEtiquette: 'Local etiquette',
      waitSuffix: 'wait',
      visitPrefix: 'Visit',
      walkInOk: 'Walk-in OK',
      labelLens: 'Lens',
      labelExterior: 'Exterior',
      labelRestaurant: 'Restaurant',
      labelView: 'View',
      dayPrefix: 'Day',
      labelFamousFor: 'Famous for',
      labelMustTry: 'Must try',
      labelSunset: 'Sunset',
      labelMonth: 'Month',
      cheatSheetTitle: 'Cheat Sheet',
      cheatEmergency: 'Emergency',
      cheatTransport: 'Transport',
      cheatMoney: 'Money',
      cheatApps: 'Apps',
      seasonSpring: 'Spring',
      seasonSummer: 'Summer',
      seasonAutumn: 'Autumn',
      seasonChristmas: 'Christmas',
      pdfNavWelcome: 'Welcome',
      pdfNavEssentials: 'Essentials',
      pdfNavSights: 'Sights',
      pdfNavHotels: 'Hotels',
      pdfNavDining: 'Dining',
      pdfNavPlan: 'Plan',
      pdfNavTransport: 'Transport',
      pdfNavEmergency: 'Emergency',
      pdfNavCheat: 'Cheat sheet',
      pdfJumpNav: 'Jump to section',
      pdfStatAttractions: 'Attractions',
      pdfStatHotels: 'Hotels',
      pdfStatRestaurants: 'Restaurants',
      pdfStatDayPlans: 'Day Plans',
      pdfStatChapters: 'Chapters',
      pdfStatQr: 'QR Codes',
      pdfEditorsLetter: "Editor's Letter",
      pdfDiscoverCity: 'Discover {city}',
      pdfWelcomeSub: 'Your visual-first companion for every day of the trip.',
      pdfBeforeYouGo: 'Before You Go',
      pdfEssentialsSub: 'Currency, power, connectivity and the numbers that matter.',
      pdfArrival: 'Arrival',
      pdfFirstHour: 'First Hour in {city}',
      pdfArrivalSub: 'From border to first meal — the sequence that saves time and money.',
      pdfPacking: 'Packing',
      pdfSeasonBySeason: 'Season by Season',
      pdfPackingSub: "What to bring for {city}'s changeable weather.",
      pdfWeather: 'Weather',
      pdfMonthByMonth: 'Month by Month',
      pdfWeatherSub: 'Temperature, rain, crowds and what to book.',
      pdfSweetSpot: 'Sweet spot',
      pdfGettingAround: 'Getting Around',
      pdfTransportSub: 'Tube, bus, river and the contactless cap that changes everything.',
      pdfLocalSecret: 'Local secret',
      pdfMaps: 'Maps',
      pdfCityOverview: 'City Overview',
      pdfMapsCaption: 'Scan any QR in this guide for turn-by-turn directions.',
      pdfKeyLocations: 'Key locations',
      pdfPinnedPlaces: '{count} pinned places',
      pdfDirections: 'Directions',
      pdfDetail: 'Detail',
      pdfPhotoSpot: 'Photo spot',
      pdfTube: 'Tube',
      pdfWaitSummer: 'Wait summer',
      pdfVisit: 'Visit',
      pdfNearbyWalk: 'Nearby (walk)',
      pdfEatNearby: 'Eat nearby',
      pdfGettingThere: 'Getting there',
      pdfInsider: 'Insider',
      pdfBestPhotoSpot: 'Best photo spot',
      pdfTip: 'Tip',
      pdfMustSee: 'Must-See',
      pdfAttractions: 'Attractions',
      pdfAttractionsSub: '{count} sights with photos, maps, crowd timing and QR codes.',
      pdfHotelMap: 'Hotel map',
      pdfWhereToStay: 'Where to Stay',
      pdfHotelsSub: 'Exterior, rooms, pools and rooftops — the full picture before you book.',
      pdfReserveMap: 'Reserve / map',
      pdfWhereToEat: 'Where to Eat',
      pdfDiningSub: 'Signature dishes, interiors and every reservation link you need.',
      pdfHalal: 'Halal',
      pdfVegetarian: 'Vegetarian',
      pdfDay: 'Day {n}',
      pdfFullRouteMap: 'Full route map',
      pdfRouteMap: 'Route map',
      pdfScanQrMaps: 'Scan QR for Google Maps',
      pdfYourItinerary: 'Your Itinerary',
      pdfDayPlans: '{count} Day Plans',
      pdfItinerarySub: 'Hour-by-hour routes with budgets, maps and time-of-day colour coding.',
      pdfRainyDayPlan: 'Rainy Day Plan',
      pdfRainyDaySub: 'Indoor alternatives when the sky opens.',
      pdfSunnyDayPlan: 'Sunny Day Plan',
      pdfSunnyDaySub: 'Parks, rivers and golden-hour views.',
      pdfHiddenGems: 'Hidden Gems',
      pdfOffBeaten: 'Off the Beaten Path',
      pdfGemsSub: 'Courtyards, ruins and neon — what most visitors miss.',
      pdfWarnings: 'Warnings',
      pdfAvoidThese: 'Avoid These',
      pdfWarningsSub: 'The scams and traps that catch even experienced travellers.',
      pdfShopping: 'Shopping',
      pdfDistrictsSouvenirs: 'Districts & Souvenirs',
      pdfShoppingSub: 'Markets, districts and the best souvenirs.',
      pdfVatSales: 'VAT & sales',
      pdfBritishBrands: 'Local brands',
      pdfSouvenirs: 'Souvenirs',
      pdfBudget: 'Budget',
      pdfDailyCosts: 'Daily Costs',
      pdfBudgetSub: 'What to expect per person, per day — three tiers.',
      pdfMidRange: 'Mid-range',
      pdfStay: 'Stay',
      pdfFood: 'Food',
      pdfActivities: 'Activities',
      pdfFamily: 'Family',
      pdfTravellingKids: 'Travelling with Kids',
      pdfFamilySub: 'Child-friendly attractions and practical notes.',
      pdfTransportTip: 'Transport tip',
      pdfNotes: 'Notes',
      pdfBabyChange: 'Baby change',
      pdfFamilyTicket: 'Family ticket',
      pdfEmergency: 'Emergency',
      pdfNumbersEmbassies: 'Numbers & Embassies',
      pdfEmergencySub: 'Save this page — hope you never need it.',
      pdfHospitals: 'Hospitals',
      pdfMajorAE: 'Major A&E departments',
      pdfEmbassies: 'Embassies',
      pdfGccMissions: 'GCC & regional missions',
      pdfCountry: 'Country',
      pdfLostPassport: 'Lost passport',
      pdfLocalTips: 'Local Tips',
      pdfPhrasesEtiquette: 'Phrases & Etiquette',
      pdfLocalTipsSub: 'Useful phrases and unwritten rules.',
      pdfOnePageCheat: 'One-Page Cheat Sheet',
      pdfPremiumCompanion: 'Your premium travel companion.',
      pdfEditionLabel: 'Edition',
      pdfOpenMap: 'Open map',
      pdfMapScanQr: 'Map · scan QR',
      pdfCityOverviewMap: 'City overview map',
      pdfGoogleMaps: 'Google Maps',
      pdfQrCode: 'QR code',
      pdfCrowdLevels: 'Crowd levels',
      pdfRating: 'Rating',
      pdfGoogle: 'Google',
      pdfWalkScore: 'Walk score',
      pdfIdealFor: 'Ideal for',
      pdfInsiderTip: 'Insider tip',
      pdfMap: 'Map'
    },
    ar: {
      langToggle: 'EN',
      toggleDark: 'تفعيل الوضع الداكن',
      toggleLight: 'تفعيل الوضع الفاتح',
      discover: 'اكتشف',
      statSights: 'معالم',
      statHotels: 'فنادق',
      statDining: 'مطاعم',
      statDays: 'أيام',
      statQr: 'رموز QR',
      statChapters: 'فصول',
      edition: 'طبعة',
      homeWelcomeKicker: 'مرحباً',
      homeWelcomeTitle: 'من المحرر',
      homeWelcomeSub: 'رفيقك في جيبك لاكتشاف {city}.',
      homeEditorKicker: 'من المحرر',
      homeEssentialsKicker: 'قبل الهبوط',
      homeEssentialsTitle: 'أساسيات',
      homeEssentialsSub: 'كل ما تحتاجه قبل الوصول.',
      homeArrivalKicker: 'اليوم الأول',
      homeArrivalTitle: 'دليل الوصول',
      homeArrivalSub: 'سبع خطوات من الهبوط إلى الشاي.',
      homePackingKicker: 'ماذا تحزم',
      homePackingTitle: 'التجهيز',
      homePackingSub: 'قائمة {season}.',
      homeWeatherKicker: 'متى تزور',
      homeWeatherTitle: 'أفضل أشهر الزيارة',
      homeWeatherSub: 'لمحة عن موسم الذروة — الجدول الكامل في المزيد ← الطقس.',
      weatherTemp: 'الحرارة',
      weatherRain: 'المطر',
      weatherCrowds: 'الازدحام',
      weatherBestFor: 'الأفضل لـ',
      weatherPrice: 'السعر',
      tabHome: 'الرئيسية',
      tabSights: 'معالم',
      tabStay: 'إقامة',
      tabEat: 'طعام',
      tabPlan: 'خطة',
      tabMore: 'المزيد',
      backTo: 'العودة إلى {label}',
      back: 'رجوع',
      chapter01: 'الفصل 01',
      chapter02: 'الفصل 02',
      chapter03: 'الفصل 03',
      chapter04: 'الفصل 04',
      sightsTitle: 'أهم المعالم',
      sightsSub: 'اضغط على أي معلم للدليل الكامل.',
      stayTitle: 'أين تقيم',
      staySub: 'اضغط على فندق للغرف والنصائح والحجز.',
      eatTitle: 'أين تأكل',
      eatSub: 'اضغط على مطعم للأطباق والحجز.',
      planTitle: 'خطتك',
      planSub: 'مسارات ساعة بساعة، جاهزة للمتابعة.',
      planEmpty: 'لا توجد خطط بعد.',
      moreChapter: 'أساسيات',
      moreTitle: 'المزيد',
      moreSub: 'مواصلات، طوارئ، ميزانية وأكثر.',
      viewGuide: 'عرض الدليل ←',
      viewHotel: 'عرض الفندق ←',
      viewMenu: 'عرض القائمة ←',
      map: 'خريطة',
      book: 'احجز',
      reserve: 'احجز',
      scanMap: 'امسح للخريطة',
      fullRoute: 'المسار الكامل',
      openMapLink: 'افتح رابط الخريطة أدناه',
      crowdLevels: 'مستويات الازدحام',
      morning: 'صباح',
      afternoon: 'ظهر',
      evening: 'مساء',
      moreTransport: 'مواصلات',
      moreMaps: 'خرائط',
      moreWeather: 'طقس',
      moreGems: 'جواهر',
      moreShopping: 'تسوق',
      moreWarnings: 'تحذيرات',
      moreBudget: 'ميزانية',
      moreFamily: 'عائلة',
      moreEmergency: 'طوارئ',
      moreLocal: 'نصائح محلية',
      moreCheat: 'ملخص سريع',
      navLabel: 'التنقل الرئيسي',
      labelTicket: 'التذكرة',
      labelTube: 'المترو',
      labelVisitTime: 'مدة الزيارة',
      labelSummerWait: 'انتظار الصيف',
      labelPrice: 'السعر',
      labelRating: 'التقييم',
      labelCategory: 'الفئة',
      labelWait: 'الانتظار',
      labelReserve: 'الحجز',
      labelInsider: 'من الداخل',
      labelTip: 'نصيحة',
      labelEatNearby: 'أكل قريب',
      labelGettingThere: 'كيف تصل',
      labelNearbyTop5: 'قريب — أفضل 5',
      labelAddress: 'العنوان',
      labelAirport: 'المطار',
      labelRoom: 'الغرفة',
      labelNearby: 'قريب',
      labelPaymentTips: 'نصائح الدفع',
      labelProTip: 'نصيحة احترافية',
      labelRainyDay: 'يوم ممطر',
      labelSunnyDay: 'يوم مشمس',
      labelKeyLocations: 'مواقع رئيسية',
      legendSights: 'معالم',
      legendHotels: 'فنادق',
      legendDining: 'مطاعم',
      legendParks: 'حدائق',
      legendDistrict: 'حي',
      openMap: 'افتح الخريطة ←',
      labelLostPassport: 'جواز مفقود',
      labelHospitals: 'مستشفيات',
      labelEmbassies: 'سفارات',
      labelAttraction: 'معلم',
      labelKids: 'أطفال',
      labelStroller: 'عربة',
      labelBaby: 'رضيع',
      labelFamilyPrice: 'عائلة £',
      tierBudget: 'اقتصادي',
      tierMid: 'متوسط',
      tierLuxury: 'فاخر',
      rowDaily: 'يومياً',
      rowAccommodation: 'إقامة',
      rowFood: 'طعام',
      rowTransport: 'مواصلات',
      rowActivities: 'أنشطة',
      rowExtras: 'إضافات',
      labelVat: 'ضريبة القيمة',
      usefulPhrases: 'عبارات مفيدة',
      localEtiquette: 'آداب محلية',
      waitSuffix: 'انتظار',
      visitPrefix: 'زيارة',
      walkInOk: 'بدون حجز',
      labelLens: 'عدسة',
      labelExterior: 'خارجي',
      labelRestaurant: 'مطعم',
      labelView: 'إطلالة',
      dayPrefix: 'اليوم',
      labelFamousFor: 'مشهور بـ',
      labelMustTry: 'جرّب',
      labelSunset: 'غروب',
      labelMonth: 'الشهر',
      cheatSheetTitle: 'ملخص سريع',
      cheatEmergency: 'طوارئ',
      cheatTransport: 'مواصلات',
      cheatMoney: 'مال',
      cheatApps: 'تطبيقات',
      seasonSpring: 'الربيع',
      seasonSummer: 'الصيف',
      seasonAutumn: 'الخريف',
      seasonChristmas: 'عيد الميلاد',
      pdfNavWelcome: 'مرحباً',
      pdfNavEssentials: 'أساسيات',
      pdfNavSights: 'معالم',
      pdfNavHotels: 'فنادق',
      pdfNavDining: 'مطاعم',
      pdfNavPlan: 'خطة',
      pdfNavTransport: 'مواصلات',
      pdfNavEmergency: 'طوارئ',
      pdfNavCheat: 'ملخص سريع',
      pdfJumpNav: 'الانتقال إلى قسم',
      pdfStatAttractions: 'معالم',
      pdfStatHotels: 'فنادق',
      pdfStatRestaurants: 'مطاعم',
      pdfStatDayPlans: 'خطط يومية',
      pdfStatChapters: 'فصول',
      pdfStatQr: 'رموز QR',
      pdfEditorsLetter: 'رسالة المحرر',
      pdfDiscoverCity: 'اكتشف {city}',
      pdfWelcomeSub: 'رفيقك البصري لكل يوم من الرحلة.',
      pdfBeforeYouGo: 'قبل السفر',
      pdfEssentialsSub: 'العملة والطاقة والاتصال والأرقام المهمة.',
      pdfArrival: 'الوصول',
      pdfFirstHour: 'ساعتك الأولى في {city}',
      pdfArrivalSub: 'من الحدود إلى أول وجبة — التسلسل الذي يوفّر الوقت والمال.',
      pdfPacking: 'التجهيز',
      pdfSeasonBySeason: 'موسم بموسم',
      pdfPackingSub: 'ماذا تحزم لطقس {city} المتغيّر.',
      pdfWeather: 'الطقس',
      pdfMonthByMonth: 'شهر بشهر',
      pdfWeatherSub: 'الحرارة والمطر والازدحام وما يجب حجزه.',
      pdfSweetSpot: 'أفضل وقت',
      pdfGettingAround: 'التنقّل',
      pdfTransportSub: 'مترو وحافلات ونهر والدفع اللاتلامسي.',
      pdfLocalSecret: 'سر محلي',
      pdfMaps: 'خرائط',
      pdfCityOverview: 'نظرة على المدينة',
      pdfMapsCaption: 'امسح أي رمز QR في هذا الدليل للاتجاهات خطوة بخطوة.',
      pdfKeyLocations: 'مواقع رئيسية',
      pdfPinnedPlaces: '{count} مواقع مثبتة',
      pdfDirections: 'الاتجاهات',
      pdfDetail: 'تفاصيل',
      pdfPhotoSpot: 'موقع التصوير',
      pdfTube: 'المترو',
      pdfWaitSummer: 'انتظار الصيف',
      pdfVisit: 'الزيارة',
      pdfNearbyWalk: 'قريب (مشياً)',
      pdfEatNearby: 'أكل قريب',
      pdfGettingThere: 'كيف تصل',
      pdfInsider: 'من الداخل',
      pdfBestPhotoSpot: 'أفضل موقع للتصوير',
      pdfTip: 'نصيحة',
      pdfMustSee: 'يجب أن ترى',
      pdfAttractions: 'معالم',
      pdfAttractionsSub: '{count} معلم مع صور وخرائط وتوقيت ازدحام ورموز QR.',
      pdfHotelMap: 'خريطة الفندق',
      pdfWhereToStay: 'أين تقيم',
      pdfHotelsSub: 'الواجهة والغرف والمسابح والأسطح — الصورة الكاملة قبل الحجز.',
      pdfReserveMap: 'احجز / خريطة',
      pdfWhereToEat: 'أين تأكل',
      pdfDiningSub: 'أطباق مميزة وديكورات وكل رابط حجز تحتاجه.',
      pdfHalal: 'حلال',
      pdfVegetarian: 'نباتي',
      pdfDay: 'اليوم {n}',
      pdfFullRouteMap: 'خريطة المسار الكامل',
      pdfRouteMap: 'خريطة المسار',
      pdfScanQrMaps: 'امسح رمز QR لخرائط Google',
      pdfYourItinerary: 'خطتك',
      pdfDayPlans: '{count} خطط يومية',
      pdfItinerarySub: 'مسارات ساعة بساعة مع ميزانيات وخرائط وتلوين حسب وقت اليوم.',
      pdfRainyDayPlan: 'خطة يوم ممطر',
      pdfRainyDaySub: 'بدائل داخلية عندما ينفتح المطر.',
      pdfSunnyDayPlan: 'خطة يوم مشمس',
      pdfSunnyDaySub: 'حدائق وأنهار وإطلالات الساعة الذهبية.',
      pdfHiddenGems: 'جواهر مخفية',
      pdfOffBeaten: 'بعيداً عن الزحام',
      pdfGemsSub: 'ساحات وأطلال وأضواء — ما يفوته معظم الزوار.',
      pdfWarnings: 'تحذيرات',
      pdfAvoidThese: 'تجنّب هذا',
      pdfWarningsSub: 'عمليات الاحتيال والفخاخ التي تصطاد حتى المسافرين المخضرمين.',
      pdfShopping: 'تسوق',
      pdfDistrictsSouvenirs: 'أحياء وتذكارات',
      pdfShoppingSub: 'أسواق وأحياء وأفضل التذكارات.',
      pdfVatSales: 'الضريبة والتخفيضات',
      pdfBritishBrands: 'علامات محلية',
      pdfSouvenirs: 'تذكارات',
      pdfBudget: 'ميزانية',
      pdfDailyCosts: 'التكاليف اليومية',
      pdfBudgetSub: 'ما تتوقعه للشخص في اليوم — ثلاث فئات.',
      pdfMidRange: 'متوسط',
      pdfStay: 'إقامة',
      pdfFood: 'طعام',
      pdfActivities: 'أنشطة',
      pdfFamily: 'عائلة',
      pdfTravellingKids: 'السفر مع الأطفال',
      pdfFamilySub: 'معالم مناسبة للأطفال وملاحظات عملية.',
      pdfTransportTip: 'نصيحة مواصلات',
      pdfNotes: 'ملاحظات',
      pdfBabyChange: 'تغيير رضيع',
      pdfFamilyTicket: 'تذكرة عائلية',
      pdfEmergency: 'طوارئ',
      pdfNumbersEmbassies: 'أرقام وسفارات',
      pdfEmergencySub: 'احفظ هذه الصفحة — نأمل ألا تحتاجها.',
      pdfHospitals: 'مستشفيات',
      pdfMajorAE: 'أقسام الطوارئ الرئيسية',
      pdfEmbassies: 'سفارات',
      pdfGccMissions: 'بعثات الخليج والمنطقة',
      pdfCountry: 'الدولة',
      pdfLostPassport: 'جواز مفقود',
      pdfLocalTips: 'نصائح محلية',
      pdfPhrasesEtiquette: 'عبارات وآداب',
      pdfLocalTipsSub: 'عبارات مفيدة وقواعد غير مكتوبة.',
      pdfOnePageCheat: 'ملخص سريع في صفحة',
      pdfPremiumCompanion: 'رفيق سفرك الفاخر.',
      pdfEditionLabel: 'الطبعة',
      pdfOpenMap: 'افتح الخريطة',
      pdfMapScanQr: 'خريطة · امسح QR',
      pdfCityOverviewMap: 'خريطة عامة للمدينة',
      pdfGoogleMaps: 'خرائط Google',
      pdfQrCode: 'رمز QR',
      pdfCrowdLevels: 'مستويات الازدحام',
      pdfRating: 'التقييم',
      pdfGoogle: 'Google',
      pdfWalkScore: 'درجة المشي',
      pdfIdealFor: 'مثالي لـ',
      pdfInsiderTip: 'نصيحة من الداخل',
      pdfMap: 'خريطة'
    }
  };

  function cleanAr(value, fallback) {
    if (typeof value !== 'string' || value.includes('MYMEMORY WARNING')) return fallback;
    return value;
  }

  const MONTHS_AR = {
    Jan: 'يناير',
    Feb: 'فبراير',
    Mar: 'مارس',
    Apr: 'أبريل',
    May: 'مايو',
    Jun: 'يونيو',
    Jul: 'يوليو',
    Aug: 'أغسطس',
    Sep: 'سبتمبر',
    Oct: 'أكتوبر',
    Nov: 'نوفمبر',
    Dec: 'ديسمبر'
  };

  let lang = 'en';
  let dark = false;
  let onChange = null;

  function readPrefs() {
    try {
      const params = new URLSearchParams(global.location?.search || '');
      const qLang = params.get('lang');
      if (qLang === 'ar' || qLang === 'en') {
        lang = qLang;
      } else {
        lang = localStorage.getItem(STORAGE_LANG) === 'ar' ? 'ar' : 'en';
      }
      dark = localStorage.getItem(STORAGE_DARK) === '1';
    } catch (_) {
      lang = 'en';
      dark = false;
    }
  }

  function setLang(next) {
    lang = next === 'ar' ? 'ar' : 'en';
    savePrefs();
    applyDocument();
    if (typeof onChange === 'function') onChange();
  }

  function savePrefs() {
    try {
      localStorage.setItem(STORAGE_LANG, lang);
      localStorage.setItem(STORAGE_DARK, dark ? '1' : '0');
    } catch (_) { /* ignore */ }
  }

  function isAr() {
    return lang === 'ar';
  }

  function isDark() {
    return dark;
  }

  function interpolate(str, vars) {
    if (!str || !vars) return str;
    return String(str).replace(/\{(\w+)\}/g, (_, key) => (vars[key] != null ? vars[key] : `{${key}}`));
  }

  function t(key, varsOrFallback, maybeFallback) {
    let vars = null;
    let fallback = maybeFallback;
    if (typeof varsOrFallback === 'string' && maybeFallback === undefined) {
      fallback = varsOrFallback;
    } else if (varsOrFallback && typeof varsOrFallback === 'object') {
      vars = varsOrFallback;
      fallback = maybeFallback;
    }
    const table = UI[lang] || UI.en;
    const value = table[key] ?? UI.en[key] ?? fallback ?? key;
    return interpolate(value, vars);
  }

  function monthName(enMonth) {
    if (!isAr()) return enMonth;
    return MONTHS_AR[enMonth] || enMonth;
  }

  function metaField(field, fallback) {
    if (!isAr() || !global.PLAN_AR?.meta) return fallback;
    return global.PLAN_AR.meta[field] ?? fallback;
  }

  function essentialField(key, field, fallback) {
    if (!isAr() || !global.PLAN_AR?.essentials?.[key]) return fallback;
    return global.PLAN_AR.essentials[key][field] ?? fallback;
  }

  function arrivalField(step, field, fallback) {
    if (!isAr() || !global.PLAN_AR?.arrival) return fallback;
    const row = global.PLAN_AR.arrival.find(r => r.step === step);
    return row?.[field] ?? fallback;
  }

  function packingField(season, field, fallback) {
    if (!isAr() || !global.PLAN_AR?.packing?.[season]) return fallback;
    const value = global.PLAN_AR.packing[season][field];
    return value ?? fallback;
  }

  function packingItems(season, fallbackItems) {
    if (!isAr() || !global.PLAN_AR?.packing?.[season]?.items) return fallbackItems;
    return global.PLAN_AR.packing[season].items;
  }

  function welcomeField(field, fallback) {
    if (!isAr() || !global.PLAN_AR?.welcome) return fallback;
    return global.PLAN_AR.welcome[field] ?? fallback;
  }

  function weatherSweetSpot(fallback) {
    if (!isAr() || !global.PLAN_AR?.weatherTable?.sweetSpot) return fallback;
    return global.PLAN_AR.weatherTable.sweetSpot;
  }

  function weatherRowField(month, field, fallback) {
    if (!isAr() || !global.PLAN_AR?.weatherTable?.rows) return fallback;
    const planRows = global.PLAN?.weatherTable?.rows;
    const arRows = global.PLAN_AR.weatherTable.rows;
    if (Array.isArray(planRows) && Array.isArray(arRows)) {
      const idx = planRows.findIndex(r => r.month === month);
      if (idx >= 0 && arRows[idx]?.[field] != null) {
        return cleanAr(arRows[idx][field], fallback);
      }
    }
    const row = arRows.find(r => r.month === month);
    return cleanAr(row?.[field], fallback);
  }

  function content(section, index, field, fallback) {
    if (!isAr() || !global.PLAN_AR?.[section]) return fallback;
    const block = global.PLAN_AR[section];
    const value = Array.isArray(block)
      ? block[index]?.[field]
      : block[field];
    return cleanAr(value, fallback);
  }

  function contentPath(section, field, fallback) {
    if (!isAr() || !global.PLAN_AR?.[section]) return fallback;
    const parts = field.split('.');
    let cur = global.PLAN_AR[section];
    for (const p of parts) cur = cur?.[p];
    return cleanAr(cur, fallback);
  }

  function contentList(section, index, fallback) {
    if (!isAr() || !global.PLAN_AR?.[section]) return fallback;
    const block = global.PLAN_AR[section];
    if (Array.isArray(block)) return block[index] ?? fallback;
    return fallback;
  }

  function themeIconSvg() {
    if (dark) {
      return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>';
    }
    return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>';
  }

  function updateToolbar() {
    const langBtn = document.getElementById('lang-toggle');
    const themeBtn = document.getElementById('theme-toggle');
    if (langBtn) {
      langBtn.textContent = t('langToggle');
      langBtn.setAttribute('aria-label', isAr() ? 'Switch to English' : 'Switch to Arabic');
    }
    if (themeBtn) {
      themeBtn.innerHTML = themeIconSvg();
      themeBtn.setAttribute('aria-label', dark ? t('toggleLight') : t('toggleDark'));
      themeBtn.classList.toggle('is-dark', dark);
    }
  }

  function applyDocument() {
    const root = document.documentElement;
    root.lang = lang;
    root.dir = isAr() ? 'rtl' : 'ltr';
    root.dataset.theme = dark ? 'dark' : 'light';
    root.classList.toggle('is-arabic', isAr());
    root.classList.toggle('is-dark', dark);

    const themeColor = document.querySelector('meta[name="theme-color"]');
    if (themeColor) {
      const light = getComputedStyle(root).getPropertyValue('--accent-deep').trim() || '#8b1429';
      const darkColor = getComputedStyle(root).getPropertyValue('--toolbar-bg').trim() || '#0f1524';
      themeColor.setAttribute('content', dark ? darkColor : light);
    }

    updateToolbar();
  }

  function toggleLang() {
    lang = isAr() ? 'en' : 'ar';
    savePrefs();
    applyDocument();
    if (typeof onChange === 'function') onChange();
  }

  function toggleDark() {
    dark = !dark;
    savePrefs();
    applyDocument();
    if (typeof onChange === 'function') onChange();
  }

  function bindToolbar() {
    if (!document.documentElement.dataset.toolbarBound) {
      document.documentElement.dataset.toolbarBound = '1';
      document.addEventListener('click', function (e) {
        if (e.target.closest('#lang-toggle')) {
          e.preventDefault();
          toggleLang();
        }
        if (e.target.closest('#theme-toggle')) {
          e.preventDefault();
          toggleDark();
        }
      });
    }
    updateToolbar();
  }

  function init(renderFn) {
    onChange = renderFn || null;
    readPrefs();
    applyDocument();
    bindToolbar();
  }

  global.I18n = {
    init,
    bindToolbar,
    t,
    isAr,
    isDark,
    setLang,
    toggleLang,
    toggleDark,
    monthName,
    metaField,
    essentialField,
    arrivalField,
    packingField,
    packingItems,
    welcomeField,
    weatherSweetSpot,
    weatherRowField,
    content,
    contentPath,
    contentList
  };
})(typeof window !== 'undefined' ? window : globalThis);
