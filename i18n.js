/* ══════════════════════════════════════
   FREEDOM CAFÉ — Shared Language Module
   Persists the chosen language (localStorage) across index.html and
   menu.html, and holds the UI dictionary + full menu content for all
   eight supported languages.
══════════════════════════════════════ */

const STORAGE_KEY = 'freedom_lang';
const THEME_KEY = 'freedom_theme';

const LANGS = [
  { code: 'en', dir: 'ltr', label: 'English' },
  { code: 'ar', dir: 'rtl', label: 'العربية' },
  { code: 'fr', dir: 'ltr', label: 'Français' },
  { code: 'ru', dir: 'ltr', label: 'Русский' },
  { code: 'es', dir: 'ltr', label: 'Español' },
  { code: 'pl', dir: 'ltr', label: 'Polski' },
  { code: 'de', dir: 'ltr', label: 'Deutsch' },
  { code: 'it', dir: 'ltr', label: 'Italiano' },
];

const dict = {
  en: {
    brand_name: 'Freedom',
    brand_tag: 'Lounge, Bar & Restaurant',
    intro_eyebrow: 'Welcome',
    intro_prompt: 'Choose your language',
    intro_sub: 'Select a language to view the menu.',
    nav_menu: 'Menu',
    change_language: 'Change language',
    menu_hero_title: 'Our Menu',
    menu_hero_sub: 'Coffee by day, cocktails by night.',
    currency: 'E£',
    footer_hours_label: 'Open daily',
    footer_hours_value: '24 Hours',
    footer_address_label: 'Find us',
    footer_address_value: 'Arabia, Florenza 50, in front of El Salam Hospital, Corniche St., Hurghada 1, Red Sea Governorate 84511',
    footer_note: 'Prices include tax. Ask your server about seasonal specials.',
    back_link: '← Back',
    menu_coming_soon: 'Coming soon',
  },
  ar: {
    brand_name: 'Freedom',
    brand_tag: 'لاونج وبار ومطعم',
    intro_eyebrow: 'أهلاً بك',
    intro_prompt: 'اختر لغتك',
    intro_sub: 'اختر لغة لعرض قائمة الطعام.',
    nav_menu: 'القائمة',
    change_language: 'تغيير اللغة',
    menu_hero_title: 'قائمتنا',
    menu_hero_sub: 'قهوة في النهار، كوكتيلات في المساء.',
    currency: 'ج.م',
    footer_hours_label: 'مفتوح يومياً',
    footer_hours_value: '24 ساعة',
    footer_address_label: 'موقعنا',
    footer_address_value: 'عرابيا، فلورنزا خمسين، أمام مستشفى السلام، شارع الكورنيش، الغردقة 1، محافظة البحر الأحمر 84511',
    footer_note: 'الأسعار شاملة الضريبة. اسأل النادل عن العروض الموسمية.',
    back_link: '→ رجوع',
    menu_coming_soon: 'قريباً',
  },
  fr: {
    brand_name: 'Freedom',
    brand_tag: 'Lounge, Bar & Restaurant',
    intro_eyebrow: 'Bienvenue',
    intro_prompt: 'Choisissez votre langue',
    intro_sub: 'Sélectionnez une langue pour voir le menu.',
    nav_menu: 'Menu',
    change_language: 'Changer de langue',
    menu_hero_title: 'Notre Menu',
    menu_hero_sub: 'Café le jour, cocktails le soir.',
    currency: 'E£',
    footer_hours_label: 'Ouvert tous les jours',
    footer_hours_value: '24h/24',
    footer_address_label: 'Où nous trouver',
    footer_address_value: 'Arabia, Florenza 50, in front of El Salam Hospital, Corniche St., Hurghada 1, Red Sea Governorate 84511',
    footer_note: 'Prix taxes comprises. Demandez nos spécialités de saison.',
    back_link: '← Retour',
    menu_coming_soon: 'Bientôt disponible',
  },
  ru: {
    brand_name: 'Freedom',
    brand_tag: 'Лаунж, бар и ресторан',
    intro_eyebrow: 'Добро пожаловать',
    intro_prompt: 'Выберите язык',
    intro_sub: 'Выберите язык, чтобы увидеть меню.',
    nav_menu: 'Меню',
    change_language: 'Изменить язык',
    menu_hero_title: 'Наше меню',
    menu_hero_sub: 'Кофе днём, коктейли вечером.',
    currency: 'E£',
    footer_hours_label: 'Открыто ежедневно',
    footer_hours_value: 'Круглосуточно',
    footer_address_label: 'Мы находимся',
    footer_address_value: 'Arabia, Florenza 50, in front of El Salam Hospital, Corniche St., Hurghada 1, Red Sea Governorate 84511',
    footer_note: 'Цены указаны с учётом налога. Спросите официанта о сезонных предложениях.',
    back_link: '← Назад',
    menu_coming_soon: 'Скоро',
  },
  es: {
    brand_name: 'Freedom',
    brand_tag: 'Lounge, Bar y Restaurante',
    intro_eyebrow: 'Bienvenido',
    intro_prompt: 'Elige tu idioma',
    intro_sub: 'Selecciona un idioma para ver el menú.',
    nav_menu: 'Menú',
    change_language: 'Cambiar idioma',
    menu_hero_title: 'Nuestro menú',
    menu_hero_sub: 'Café de día, cócteles de noche.',
    currency: 'E£',
    footer_hours_label: 'Abierto todos los días',
    footer_hours_value: '24 horas',
    footer_address_label: 'Dónde estamos',
    footer_address_value: 'Arabia, Florenza 50, in front of El Salam Hospital, Corniche St., Hurghada 1, Red Sea Governorate 84511',
    footer_note: 'Los precios incluyen impuestos. Pregunta por las especialidades de temporada.',
    back_link: '← Volver',
    menu_coming_soon: 'Próximamente',
  },
  pl: {
    brand_name: 'Freedom',
    brand_tag: 'Lounge, Bar i Restauracja',
    intro_eyebrow: 'Witamy',
    intro_prompt: 'Wybierz język',
    intro_sub: 'Wybierz język, aby zobaczyć menu.',
    nav_menu: 'Menu',
    change_language: 'Zmień język',
    menu_hero_title: 'Nasze menu',
    menu_hero_sub: 'Kawa za dnia, koktajle wieczorem.',
    currency: 'E£',
    footer_hours_label: 'Otwarte codziennie',
    footer_hours_value: '24 godziny',
    footer_address_label: 'Znajdziesz nas',
    footer_address_value: 'Arabia, Florenza 50, in front of El Salam Hospital, Corniche St., Hurghada 1, Red Sea Governorate 84511',
    footer_note: 'Ceny zawierają podatek. Zapytaj obsługę o sezonowe specjały.',
    back_link: '← Wstecz',
    menu_coming_soon: 'Wkrótce',
  },
  de: {
    brand_name: 'Freedom',
    brand_tag: 'Lounge, Bar & Restaurant',
    intro_eyebrow: 'Willkommen',
    intro_prompt: 'Sprache wählen',
    intro_sub: 'Wähle eine Sprache, um die Speisekarte zu sehen.',
    nav_menu: 'Speisekarte',
    change_language: 'Sprache ändern',
    menu_hero_title: 'Unsere Speisekarte',
    menu_hero_sub: 'Kaffee am Tag, Cocktails am Abend.',
    currency: 'E£',
    footer_hours_label: 'Täglich geöffnet',
    footer_hours_value: '24 Stunden',
    footer_address_label: 'So finden Sie uns',
    footer_address_value: 'Arabia, Florenza 50, in front of El Salam Hospital, Corniche St., Hurghada 1, Red Sea Governorate 84511',
    footer_note: 'Preise inkl. Steuer. Fragen Sie nach saisonalen Empfehlungen.',
    back_link: '← Zurück',
    menu_coming_soon: 'Demnächst',
  },
  it: {
    brand_name: 'Freedom',
    brand_tag: 'Lounge, Bar & Ristorante',
    intro_eyebrow: 'Benvenuto',
    intro_prompt: 'Scegli la tua lingua',
    intro_sub: 'Seleziona una lingua per vedere il menù.',
    nav_menu: 'Menù',
    change_language: 'Cambia lingua',
    menu_hero_title: 'Il Nostro Menù',
    menu_hero_sub: 'Caffè di giorno, cocktail di sera.',
    currency: 'E£',
    footer_hours_label: 'Aperto tutti i giorni',
    footer_hours_value: '24 ore',
    footer_address_label: 'Dove siamo',
    footer_address_value: 'Arabia, Florenza 50, in front of El Salam Hospital, Corniche St., Hurghada 1, Red Sea Governorate 84511',
    footer_note: 'I prezzi includono le tasse. Chiedi al cameriere le specialità stagionali.',
    back_link: '← Indietro',
    menu_coming_soon: 'Prossimamente',
  },
};

/* ── Menu category structure ──
   Top-level sections, their subcategories, and (for Main Dishes) a
   further level of sub-subcategories. */
const CATEGORY_TREE = [
  { key: 'food', children: [
      { key: 'breakfast' },
      { key: 'appetizers' },
      { key: 'salads' },
      { key: 'soup' },
      { key: 'sandwiches' },
      { key: 'main_dishes', children: [
          { key: 'meat' },
          { key: 'chicken' },
          { key: 'fish' },
      ]},
      { key: 'pasta' },
      { key: 'pizza' },
      { key: 'desserts' },
  ]},
  { key: 'drinks', children: [
      { key: 'hot_drinks' },
      { key: 'soft_drinks' },
      { key: 'iced_drinks' },
      { key: 'milkshake' },
      { key: 'fresh_juice' },
      { key: 'fresh_cocktails' },
      { key: 'mocktails' },
      { key: 'cocktails' },
      { key: 'shoots' },
      { key: 'wine' },
      { key: 'beer' },
  ]},
  { key: 'shisha' },
  { key: 'nuts_mazza' },
  { key: 'billiards' },
];

/* ── Category names ──
   Translated per language, so the tabs and section headers on the
   menu page read naturally in whichever language the guest picked
   (previously these were English-only regardless of language). */
const CATEGORY_NAMES = {
  food:            { en:'Food',            ar:'الطعام',                  fr:'Nourriture',        ru:'Еда',                     es:'Comida',             pl:'Jedzenie',        de:'Essen',              it:'Cibo' },
  breakfast:       { en:'Breakfast',       ar:'الإفطار',                 fr:'Petit-déjeuner',    ru:'Завтрак',                 es:'Desayuno',           pl:'Śniadanie',       de:'Frühstück',          it:'Colazione' },
  appetizers:      { en:'Appetizers',      ar:'المقبلات',                fr:'Entrées',           ru:'Закуски',                 es:'Entrantes',          pl:'Przystawki',      de:'Vorspeisen',         it:'Antipasti' },
  salads:          { en:'Salads',          ar:'السلطات',                 fr:'Salades',           ru:'Салаты',                  es:'Ensaladas',          pl:'Sałatki',         de:'Salate',             it:'Insalate' },
  soup:            { en:'Soup',            ar:'الشوربة',                 fr:'Soupes',            ru:'Супы',                    es:'Sopas',              pl:'Zupy',            de:'Suppen',             it:'Zuppe' },
  sandwiches:      { en:'Sandwiches',      ar:'الساندويتشات',            fr:'Sandwiches',        ru:'Сэндвичи',                es:'Sándwiches',         pl:'Kanapki',         de:'Sandwiches',         it:'Panini' },
  main_dishes:     { en:'Main Dishes',     ar:'الأطباق الرئيسية',        fr:'Plats principaux',  ru:'Основные блюда',          es:'Platos principales', pl:'Dania główne',    de:'Hauptgerichte',      it:'Piatti principali' },
  meat:            { en:'Meat',            ar:'اللحوم',                  fr:'Viandes',           ru:'Мясо',                    es:'Carnes',             pl:'Mięso',           de:'Fleisch',            it:'Carne' },
  chicken:         { en:'Chicken',         ar:'الدجاج',                  fr:'Poulet',            ru:'Курица',                  es:'Pollo',              pl:'Kurczak',         de:'Hähnchen',           it:'Pollo' },
  fish:            { en:'Fish',            ar:'الأسماك',                 fr:'Poissons',          ru:'Рыба',                    es:'Pescado',            pl:'Ryby',            de:'Fisch',              it:'Pesce' },
  pasta:           { en:'Pasta',           ar:'المكرونة',                fr:'Pâtes',             ru:'Паста',                   es:'Pasta',              pl:'Makaron',         de:'Pasta',              it:'Pasta' },
  pizza:           { en:'Pizza',           ar:'البيتزا',                 fr:'Pizza',             ru:'Пицца',                   es:'Pizza',              pl:'Pizza',           de:'Pizza',              it:'Pizza' },
  desserts:        { en:'Desserts',        ar:'الحلويات',                fr:'Desserts',          ru:'Десерты',                 es:'Postres',            pl:'Desery',          de:'Desserts',           it:'Dessert' },
  drinks:          { en:'Drinks',          ar:'المشروبات',               fr:'Boissons',          ru:'Напитки',                 es:'Bebidas',            pl:'Napoje',          de:'Getränke',           it:'Bevande' },
  hot_drinks:      { en:'Hot Drinks',      ar:'المشروبات الساخنة',       fr:'Boissons chaudes',  ru:'Горячие напитки',         es:'Bebidas calientes',  pl:'Gorące napoje',   de:'Heiße Getränke',     it:'Bevande calde' },
  soft_drinks:     { en:'Soft Drinks',     ar:'المشروبات الغازية',       fr:'Boissons gazeuses', ru:'Безалкогольные напитки',  es:'Refrescos',          pl:'Napoje gazowane', de:'Softdrinks',         it:'Bibite' },
  iced_drinks:     { en:'Iced Drinks',     ar:'المشروبات المثلجة',       fr:'Boissons glacées',  ru:'Холодные напитки',        es:'Bebidas frías',      pl:'Zimne napoje',    de:'Eisgekühlte Getränke', it:'Bevande fredde' },
  milkshake:       { en:'Milk Shake',      ar:'ميلك شيك',                fr:'Milk-shake',        ru:'Молочный коктейль',       es:'Batido',             pl:'Koktajl mleczny', de:'Milchshake',         it:'Frappè' },
  fresh_juice:     { en:'Fresh Juice',     ar:'العصائر الطازجة',         fr:'Jus frais',         ru:'Свежевыжатые соки',       es:'Jugos frescos',      pl:'Świeże soki',     de:'Frische Säfte',      it:'Succhi freschi' },
  fresh_cocktails: { en:'Fresh Cocktails', ar:'الكوكتيلات الطازجة',      fr:'Cocktails frais',   ru:'Свежие коктейли',         es:'Cócteles frescos',   pl:'Świeże koktajle', de:'Frische Cocktails',  it:'Cocktail freschi' },
  mocktails:       { en:'Mocktails',       ar:'موكتيلز (بدون كحول)',     fr:'Mocktails',         ru:'Безалкогольные коктейли', es:'Mocktails',          pl:'Mocktaile',       de:'Mocktails',          it:'Mocktail' },
  cocktails:       { en:'Cocktails',       ar:'الكوكتيلات',              fr:'Cocktails',         ru:'Коктейли',                es:'Cócteles',           pl:'Koktajle',        de:'Cocktails',          it:'Cocktail' },
  shoots:          { en:'Shoots',          ar:'شوتس',                    fr:'Shots',             ru:'Шоты',                    es:'Chupitos',           pl:'Shoty',           de:'Shots',              it:'Shot' },
  wine:            { en:'Wine',            ar:'النبيذ',                  fr:'Vin',               ru:'Вино',                    es:'Vino',               pl:'Wino',            de:'Wein',               it:'Vino' },
  beer:            { en:'Beer',            ar:'البيرة',                  fr:'Bière',             ru:'Пиво',                    es:'Cerveza',            pl:'Piwo',            de:'Bier',               it:'Birra' },
  shisha:          { en:'Shisha Pipes',    ar:'الشيشة',                  fr:'Chichas',           ru:'Кальян',                  es:'Shisha',             pl:'Fajka wodna',     de:'Shisha',             it:'Narghilè' },
  nuts_mazza:      { en:'Nuts & Mazza',    ar:'المكسرات والمزة',         fr:'Noix & Mezze',      ru:'Орешки и мезе',           es:'Frutos secos y mezze', pl:'Orzechy i mezze', de:'Nüsse & Mezze',    it:'Noci e mezze' },
  billiards:       { en:'Billiards',       ar:'البلياردو',               fr:'Billard',           ru:'Бильярд',                 es:'Billar',             pl:'Bilard',          de:'Billard',            it:'Biliardo' },
};

/* ── Category hints ──
   Optional one-line explainer shown under a category's name/tab, per
   language, for anything a foreign guest might not immediately
   recognize (e.g. what "Mazza" or "Shoots" means). Leave a key's
   value as '' to show nothing for that language — fill in the text
   whenever it's ready, no other code needs to change.
   Fill the SAME meaning into every language column so all guests get
   the same explanation, just in their own language. */
const CATEGORY_HINTS = {
  food:            { en:'', ar:'', fr:'', ru:'', es:'', pl:'', de:'', it:'' },
  breakfast:       { en:'', ar:'', fr:'', ru:'', es:'', pl:'', de:'', it:'' },
  appetizers:      { en:'', ar:'', fr:'', ru:'', es:'', pl:'', de:'', it:'' },
  salads:          { en:'', ar:'', fr:'', ru:'', es:'', pl:'', de:'', it:'' },
  soup:            { en:'', ar:'', fr:'', ru:'', es:'', pl:'', de:'', it:'' },
  sandwiches:      { en:'', ar:'', fr:'', ru:'', es:'', pl:'', de:'', it:'' },
  main_dishes:     { en:'', ar:'', fr:'', ru:'', es:'', pl:'', de:'', it:'' },
  meat:            { en:'', ar:'', fr:'', ru:'', es:'', pl:'', de:'', it:'' },
  chicken:         { en:'', ar:'', fr:'', ru:'', es:'', pl:'', de:'', it:'' },
  fish:            { en:'', ar:'', fr:'', ru:'', es:'', pl:'', de:'', it:'' },
  pasta:           { en:'', ar:'', fr:'', ru:'', es:'', pl:'', de:'', it:'' },
  pizza:           { en:'', ar:'', fr:'', ru:'', es:'', pl:'', de:'', it:'' },
  desserts:        { en:'', ar:'', fr:'', ru:'', es:'', pl:'', de:'', it:'' },
  drinks:          { en:'', ar:'', fr:'', ru:'', es:'', pl:'', de:'', it:'' },
  hot_drinks:      { en:'', ar:'', fr:'', ru:'', es:'', pl:'', de:'', it:'' },
  soft_drinks:     { en:'', ar:'', fr:'', ru:'', es:'', pl:'', de:'', it:'' },
  iced_drinks:     { en:'', ar:'', fr:'', ru:'', es:'', pl:'', de:'', it:'' },
  milkshake:       { en:'', ar:'', fr:'', ru:'', es:'', pl:'', de:'', it:'' },
  fresh_juice:     { en:'', ar:'', fr:'', ru:'', es:'', pl:'', de:'', it:'' },
  fresh_cocktails: { en:'', ar:'', fr:'', ru:'', es:'', pl:'', de:'', it:'' },
  mocktails:       { en:'', ar:'', fr:'', ru:'', es:'', pl:'', de:'', it:'' },
  cocktails:       { en:'', ar:'', fr:'', ru:'', es:'', pl:'', de:'', it:'' },
  shoots:          { en:'', ar:'', fr:'', ru:'', es:'', pl:'', de:'', it:'' },
  wine:            { en:'', ar:'', fr:'', ru:'', es:'', pl:'', de:'', it:'' },
  beer:            { en:'', ar:'', fr:'', ru:'', es:'', pl:'', de:'', it:'' },
  shisha:          { en:'', ar:'', fr:'', ru:'', es:'', pl:'', de:'', it:'' },
  nuts_mazza:      { en:'', ar:'', fr:'', ru:'', es:'', pl:'', de:'', it:'' },
  billiards:       { en:'', ar:'', fr:'', ru:'', es:'', pl:'', de:'', it:'' },
};

/* ── Menu items ──
   Real dishes/drinks from the printed menu. Keyed by leaf category
   id. Each item has a price (string — plain number, or "A / B" for
   dual pricing like single/double or quarter/bottle) plus a
   [name, description] pair per language. */
const ITEM_DATA = {
  "breakfast": [
    {
      "price": "275",
      "en": [
        "English Breakfast",
        "Eggs, sausage, fries, beans & toast"
      ],
      "ar": [
        "فطور إنجليزي",
        "بيض، سجق، بطاطس، فول وتوست"
      ],
      "fr": [
        "Petit-déjeuner anglais",
        "Œufs, saucisse, frites, haricots et toast"
      ],
      "ru": [
        "Английский завтрак",
        "Яйца, колбаски, картофель фри, бобы и тост"
      ],
      "es": [
        "Desayuno inglés",
        "Huevos, salchicha, papas fritas, judías y tostada"
      ],
      "pl": [
        "Śniadanie angielskie",
        "Jajka, kiełbaski, frytki, fasolka i tost"
      ],
      "de": [
        "Englisches Frühstück",
        "Eier, Würstchen, Pommes, Bohnen & Toast"
      ],
      "it": [
        "Colazione inglese",
        "Uova, salsiccia, patatine, fagioli e toast"
      ]
    },
    {
      "price": "185",
      "en": [
        "Oriental Breakfast",
        "Ful, eggs, fries, cheese & fresh bread"
      ],
      "ar": [
        "فطور شرقي",
        "فول، بيض، بطاطس، جبنة وخبز طازج"
      ],
      "fr": [
        "Petit-déjeuner oriental",
        "Ful, œufs, frites, fromage et pain frais"
      ],
      "ru": [
        "Восточный завтрак",
        "Фуль, яйца, картофель фри, сыр и свежий хлеб"
      ],
      "es": [
        "Desayuno oriental",
        "Ful, huevos, papas fritas, queso y pan fresco"
      ],
      "pl": [
        "Śniadanie orientalne",
        "Ful, jajka, frytki, ser i świeże pieczywo"
      ],
      "de": [
        "Orientalisches Frühstück",
        "Ful, Eier, Pommes, Käse & frisches Brot"
      ],
      "it": [
        "Colazione orientale",
        "Ful, uova, patatine, formaggio e pane fresco"
      ]
    },
    {
      "price": "90",
      "en": [
        "Ful (Butter or Oil)",
        "Slow-cooked fava beans"
      ],
      "ar": [
        "فول (بالسمنة أو الزيت)",
        "فول مدمس مطهو ببطء"
      ],
      "fr": [
        "Ful (beurre ou huile)",
        "Fèves mijotées lentement"
      ],
      "ru": [
        "Фуль (масло сливочное/растительное)",
        "Тушёные бобы фава"
      ],
      "es": [
        "Ful (mantequilla o aceite)",
        "Habas cocidas a fuego lento"
      ],
      "pl": [
        "Ful (masło lub olej)",
        "Wolno gotowana fasola bobowa"
      ],
      "de": [
        "Ful (Butter oder Öl)",
        "Langsam gegarte Favabohnen"
      ],
      "it": [
        "Ful (burro o olio)",
        "Fave cotte lentamente"
      ]
    },
    {
      "price": "130",
      "en": [
        "Omelet Veg / Cheese",
        "Fluffy omelette, vegetables or cheese"
      ],
      "ar": [
        "أومليت خضار / جبنة",
        "أومليت هش بالخضار أو الجبنة"
      ],
      "fr": [
        "Omelette légumes / fromage",
        "Omelette moelleuse, légumes ou fromage"
      ],
      "ru": [
        "Омлет с овощами / сыром",
        "Пышный омлет с овощами или сыром"
      ],
      "es": [
        "Tortilla de verduras / queso",
        "Tortilla esponjosa, verduras o queso"
      ],
      "pl": [
        "Omlet z warzywami / serem",
        "Puszysty omlet z warzywami lub serem"
      ],
      "de": [
        "Omelett Gemüse / Käse",
        "Fluffiges Omelett mit Gemüse oder Käse"
      ],
      "it": [
        "Omelette verdure / formaggio",
        "Omelette soffice, verdure o formaggio"
      ]
    },
    {
      "price": "110",
      "en": [
        "Omelette",
        "Classic plain omelette"
      ],
      "ar": [
        "أومليت",
        "أومليت سادة كلاسيكي"
      ],
      "fr": [
        "Omelette",
        "Omelette nature classique"
      ],
      "ru": [
        "Омлет",
        "Классический омлет"
      ],
      "es": [
        "Tortilla",
        "Tortilla clásica sencilla"
      ],
      "pl": [
        "Omlet",
        "Klasyczny omlet naturalny"
      ],
      "de": [
        "Omelett",
        "Klassisches Omelett natur"
      ],
      "it": [
        "Omelette",
        "Omelette classica al naturale"
      ]
    },
    {
      "price": "130",
      "en": [
        "Toast Cheese",
        "Grilled toast, melted cheese"
      ],
      "ar": [
        "توست بالجبنة",
        "توست مشوي بالجبنة الذائبة"
      ],
      "fr": [
        "Toast au fromage",
        "Toast grillé, fromage fondu"
      ],
      "ru": [
        "Тост с сыром",
        "Тост на гриле с плавленым сыром"
      ],
      "es": [
        "Tostada de queso",
        "Tostada a la parrilla con queso fundido"
      ],
      "pl": [
        "Tost z serem",
        "Grillowany tost z roztopionym serem"
      ],
      "de": [
        "Käsetoast",
        "Gegrillter Toast mit geschmolzenem Käse"
      ],
      "it": [
        "Toast al formaggio",
        "Toast grigliato con formaggio fuso"
      ]
    },
    {
      "price": "185",
      "en": [
        "Omelet Smoked Salmon",
        "Omelette with smoked salmon"
      ],
      "ar": [
        "أومليت سلمون مدخن",
        "أومليت بالسلمون المدخن"
      ],
      "fr": [
        "Omelette saumon fumé",
        "Omelette au saumon fumé"
      ],
      "ru": [
        "Омлет с копчёным лососем",
        "Омлет с копчёным лососем"
      ],
      "es": [
        "Tortilla de salmón ahumado",
        "Tortilla con salmón ahumado"
      ],
      "pl": [
        "Omlet z wędzonym łososiem",
        "Omlet z wędzonym łososiem"
      ],
      "de": [
        "Omelett mit Räucherlachs",
        "Omelett mit geräuchertem Lachs"
      ],
      "it": [
        "Omelette al salmone affumicato",
        "Omelette con salmone affumicato"
      ]
    },
    {
      "price": "230",
      "en": [
        "Toast Smoked Salmon",
        "Toasted bread, smoked salmon"
      ],
      "ar": [
        "توست سلمون مدخن",
        "خبز محمص بالسلمون المدخن"
      ],
      "fr": [
        "Toast saumon fumé",
        "Pain grillé, saumon fumé"
      ],
      "ru": [
        "Тост с копчёным лососем",
        "Тост с копчёным лососем"
      ],
      "es": [
        "Tostada de salmón ahumado",
        "Pan tostado con salmón ahumado"
      ],
      "pl": [
        "Tost z wędzonym łososiem",
        "Grzanka z wędzonym łososiem"
      ],
      "de": [
        "Toast mit Räucherlachs",
        "Getoastetes Brot mit Räucherlachs"
      ],
      "it": [
        "Toast al salmone affumicato",
        "Pane tostato con salmone affumicato"
      ]
    }
  ],
  "appetizers": [
    {
      "price": "110",
      "en": [
        "Garlic Bread",
        "Toasted bread, garlic butter"
      ],
      "ar": [
        "خبز بالثوم",
        "خبز محمص بزبدة الثوم"
      ],
      "fr": [
        "Pain à l'ail",
        "Pain grillé, beurre à l'ail"
      ],
      "ru": [
        "Чесночный хлеб",
        "Тост с чесночным маслом"
      ],
      "es": [
        "Pan de ajo",
        "Pan tostado con mantequilla de ajo"
      ],
      "pl": [
        "Chleb czosnkowy",
        "Grzanka z masłem czosnkowym"
      ],
      "de": [
        "Knoblauchbrot",
        "Geröstetes Brot mit Knoblauchbutter"
      ],
      "it": [
        "Pane all'aglio",
        "Pane tostato con burro all'aglio"
      ]
    },
    {
      "price": "130",
      "en": [
        "Garlic Bread Mozzarella",
        "Garlic bread, melted mozzarella"
      ],
      "ar": [
        "خبز بالثوم والموزاريلا",
        "خبز بالثوم مع جبنة موزاريلا ذائبة"
      ],
      "fr": [
        "Pain à l'ail mozzarella",
        "Pain à l'ail, mozzarella fondue"
      ],
      "ru": [
        "Чесночный хлеб с моцареллой",
        "Чесночный хлеб с плавленой моцареллой"
      ],
      "es": [
        "Pan de ajo con mozzarella",
        "Pan de ajo con mozzarella fundida"
      ],
      "pl": [
        "Chleb czosnkowy z mozzarellą",
        "Chleb czosnkowy z roztopioną mozzarellą"
      ],
      "de": [
        "Knoblauchbrot mit Mozzarella",
        "Knoblauchbrot mit geschmolzenem Mozzarella"
      ],
      "it": [
        "Pane all'aglio con mozzarella",
        "Pane all'aglio con mozzarella fusa"
      ]
    },
    {
      "price": "135",
      "en": [
        "Bruschetta",
        "Toasted bread, tomato & basil"
      ],
      "ar": [
        "بروشيتا",
        "خبز محمص بالطماطم والريحان"
      ],
      "fr": [
        "Bruschetta",
        "Pain grillé, tomate et basilic"
      ],
      "ru": [
        "Брускетта",
        "Тост с томатами и базиликом"
      ],
      "es": [
        "Bruschetta",
        "Pan tostado con tomate y albahaca"
      ],
      "pl": [
        "Bruschetta",
        "Grzanka z pomidorem i bazylią"
      ],
      "de": [
        "Bruschetta",
        "Geröstetes Brot mit Tomate & Basilikum"
      ],
      "it": [
        "Bruschetta",
        "Pane tostato con pomodoro e basilico"
      ]
    },
    {
      "price": "120",
      "en": [
        "Onion Rings",
        "Crispy battered onion rings"
      ],
      "ar": [
        "حلقات بصل",
        "حلقات بصل مقرمشة مقلية"
      ],
      "fr": [
        "Rondelles d'oignon",
        "Rondelles d'oignon croustillantes"
      ],
      "ru": [
        "Луковые кольца",
        "Хрустящие луковые кольца в кляре"
      ],
      "es": [
        "Aros de cebolla",
        "Aros de cebolla crujientes"
      ],
      "pl": [
        "Krążki cebulowe",
        "Chrupiące krążki cebulowe w cieście"
      ],
      "de": [
        "Zwiebelringe",
        "Knusprige panierte Zwiebelringe"
      ],
      "it": [
        "Anelli di cipolla",
        "Anelli di cipolla croccanti"
      ]
    },
    {
      "price": "85",
      "en": [
        "French Fries",
        "Golden crispy fries"
      ],
      "ar": [
        "بطاطس مقلية",
        "بطاطس مقرمشة ذهبية"
      ],
      "fr": [
        "Frites",
        "Frites croustillantes dorées"
      ],
      "ru": [
        "Картофель фри",
        "Хрустящий золотистый картофель фри"
      ],
      "es": [
        "Papas fritas",
        "Papas fritas crujientes y doradas"
      ],
      "pl": [
        "Frytki",
        "Chrupiące złociste frytki"
      ],
      "de": [
        "Pommes Frites",
        "Knusprige goldene Pommes"
      ],
      "it": [
        "Patatine fritte",
        "Patatine croccanti e dorate"
      ]
    },
    {
      "price": "185",
      "en": [
        "Nuggets",
        "Crispy breaded chicken nuggets"
      ],
      "ar": [
        "ناجتس",
        "قطع دجاج مقرمشة مقلية"
      ],
      "fr": [
        "Nuggets",
        "Nuggets de poulet croustillants"
      ],
      "ru": [
        "Наггетсы",
        "Хрустящие куриные наггетсы"
      ],
      "es": [
        "Nuggets",
        "Nuggets de pollo crujientes"
      ],
      "pl": [
        "Nuggetsy",
        "Chrupiące nuggetsy z kurczaka"
      ],
      "de": [
        "Nuggets",
        "Knusprige Hähnchen-Nuggets"
      ],
      "it": [
        "Nuggets",
        "Nuggets di pollo croccanti"
      ]
    },
    {
      "price": "220",
      "en": [
        "Fried Calamari",
        "Crispy fried squid rings"
      ],
      "ar": [
        "كاليماري مقلي",
        "حلقات كاليماري مقرمشة مقلية"
      ],
      "fr": [
        "Calamars frits",
        "Anneaux de calamars croustillants"
      ],
      "ru": [
        "Жареные кальмары",
        "Хрустящие кольца кальмара"
      ],
      "es": [
        "Calamares fritos",
        "Anillas de calamar crujientes"
      ],
      "pl": [
        "Smażone kalmary",
        "Chrupiące krążki kalmara"
      ],
      "de": [
        "Frittierte Calamari",
        "Knusprige Tintenfischringe"
      ],
      "it": [
        "Calamari fritti",
        "Anelli di calamaro croccanti"
      ]
    },
    {
      "price": "320",
      "en": [
        "Fried Shrimp",
        "Crispy battered shrimp"
      ],
      "ar": [
        "جمبري مقلي",
        "جمبري مقرمش مقلي"
      ],
      "fr": [
        "Crevettes frites",
        "Crevettes croustillantes panées"
      ],
      "ru": [
        "Жареные креветки",
        "Хрустящие креветки в кляре"
      ],
      "es": [
        "Camarones fritos",
        "Camarones crujientes empanizados"
      ],
      "pl": [
        "Smażone krewetki",
        "Chrupiące krewetki w cieście"
      ],
      "de": [
        "Frittierte Garnelen",
        "Knusprige panierte Garnelen"
      ],
      "it": [
        "Gamberi fritti",
        "Gamberi croccanti impanati"
      ]
    },
    {
      "price": "195",
      "en": [
        "Fried Mozzarella",
        "Breaded mozzarella sticks"
      ],
      "ar": [
        "موزاريلا مقلية",
        "أصابع موزاريلا مقرمشة"
      ],
      "fr": [
        "Mozzarella frite",
        "Bâtonnets de mozzarella panés"
      ],
      "ru": [
        "Жареная моцарелла",
        "Палочки моцареллы в панировке"
      ],
      "es": [
        "Mozzarella frita",
        "Palitos de mozzarella empanizados"
      ],
      "pl": [
        "Smażona mozzarella",
        "Panierowane paluszki mozzarelli"
      ],
      "de": [
        "Frittierter Mozzarella",
        "Panierte Mozzarella-Sticks"
      ],
      "it": [
        "Mozzarella fritta",
        "Bastoncini di mozzarella impanati"
      ]
    },
    {
      "price": "250",
      "en": [
        "Chicken Wings",
        "Grilled or fried chicken wings"
      ],
      "ar": [
        "أجنحة دجاج",
        "أجنحة دجاج مشوية أو مقلية"
      ],
      "fr": [
        "Ailes de poulet",
        "Ailes de poulet grillées ou frites"
      ],
      "ru": [
        "Куриные крылышки",
        "Куриные крылышки гриль или жареные"
      ],
      "es": [
        "Alitas de pollo",
        "Alitas de pollo asadas o fritas"
      ],
      "pl": [
        "Skrzydełka z kurczaka",
        "Skrzydełka grillowane lub smażone"
      ],
      "de": [
        "Chicken Wings",
        "Gegrillte oder frittierte Hähnchenflügel"
      ],
      "it": [
        "Ali di pollo",
        "Ali di pollo grigliate o fritte"
      ]
    },
    {
      "price": "200",
      "en": [
        "Chicken Fingers",
        "Crispy breaded chicken strips"
      ],
      "ar": [
        "أصابع دجاج",
        "أصابع دجاج مقرمشة مقلية"
      ],
      "fr": [
        "Doigts de poulet",
        "Lanières de poulet croustillantes"
      ],
      "ru": [
        "Куриные пальчики",
        "Хрустящие куриные полоски"
      ],
      "es": [
        "Tiras de pollo",
        "Tiras de pollo crujientes empanizadas"
      ],
      "pl": [
        "Paluszki z kurczaka",
        "Chrupiące paski z kurczaka"
      ],
      "de": [
        "Chicken Fingers",
        "Knusprige panierte Hähnchenstreifen"
      ],
      "it": [
        "Chicken fingers",
        "Striscie di pollo croccanti"
      ]
    }
  ],
  "salads": [
    {
      "price": "195",
      "en": [
        "Tuna Salad",
        "Fresh greens, tuna & vegetables"
      ],
      "ar": [
        "سلطة تونة",
        "خضار طازجة مع تونة"
      ],
      "fr": [
        "Salade au thon",
        "Salade fraîche, thon et légumes"
      ],
      "ru": [
        "Салат с тунцом",
        "Свежая зелень с тунцом и овощами"
      ],
      "es": [
        "Ensalada de atún",
        "Verdes frescos, atún y vegetales"
      ],
      "pl": [
        "Sałatka z tuńczykiem",
        "Świeże warzywa z tuńczykiem"
      ],
      "de": [
        "Thunfischsalat",
        "Frischer Salat mit Thunfisch & Gemüse"
      ],
      "it": [
        "Insalata di tonno",
        "Verdure fresche con tonno"
      ]
    },
    {
      "price": "180",
      "en": [
        "Greek Salad",
        "Tomato, cucumber, olives & feta"
      ],
      "ar": [
        "سلطة يونانية",
        "طماطم، خيار، زيتون وجبنة فيتا"
      ],
      "fr": [
        "Salade grecque",
        "Tomate, concombre, olives et feta"
      ],
      "ru": [
        "Греческий салат",
        "Помидоры, огурцы, оливки и фета"
      ],
      "es": [
        "Ensalada griega",
        "Tomate, pepino, aceitunas y feta"
      ],
      "pl": [
        "Sałatka grecka",
        "Pomidor, ogórek, oliwki i feta"
      ],
      "de": [
        "Griechischer Salat",
        "Tomate, Gurke, Oliven & Feta"
      ],
      "it": [
        "Insalata greca",
        "Pomodoro, cetriolo, olive e feta"
      ]
    },
    {
      "price": "100",
      "en": [
        "Egyptian Salad",
        "Chopped tomato, cucumber & herbs"
      ],
      "ar": [
        "سلطة بلدي",
        "طماطم وخيار مفروم بالأعشاب"
      ],
      "fr": [
        "Salade égyptienne",
        "Tomate, concombre hachés et herbes"
      ],
      "ru": [
        "Египетский салат",
        "Рубленые томаты, огурцы и зелень"
      ],
      "es": [
        "Ensalada egipcia",
        "Tomate, pepino picado y hierbas"
      ],
      "pl": [
        "Sałatka egipska",
        "Posiekany pomidor, ogórek i zioła"
      ],
      "de": [
        "Ägyptischer Salat",
        "Gehackte Tomate, Gurke & Kräuter"
      ],
      "it": [
        "Insalata egiziana",
        "Pomodoro, cetriolo tritati e erbe"
      ]
    },
    {
      "price": "260",
      "en": [
        "Shrimp Caesar Salad",
        "Shrimp, romaine, parmesan & Caesar dressing"
      ],
      "ar": [
        "سلطة سيزر بالجمبري",
        "جمبري، خس، جبنة بارميزان وصوص سيزر"
      ],
      "fr": [
        "Salade César aux crevettes",
        "Crevettes, romaine, parmesan et sauce César"
      ],
      "ru": [
        "Салат Цезарь с креветками",
        "Креветки, салат ромэн, пармезан и соус Цезарь"
      ],
      "es": [
        "Ensalada César con camarones",
        "Camarones, lechuga romana, parmesano y aderezo César"
      ],
      "pl": [
        "Sałatka Cezar z krewetkami",
        "Krewetki, rzymska sałata, parmezan i sos Cezar"
      ],
      "de": [
        "Caesar Salat mit Garnelen",
        "Garnelen, Römersalat, Parmesan & Caesar-Dressing"
      ],
      "it": [
        "Insalata Caesar con gamberetti",
        "Gamberetti, lattuga romana, parmigiano e salsa Caesar"
      ]
    },
    {
      "price": "300",
      "en": [
        "Mix Sea Food Salad",
        "Shrimp, calamari & mixed greens"
      ],
      "ar": [
        "سلطة مأكولات بحرية",
        "جمبري وكاليماري مع خضار"
      ],
      "fr": [
        "Salade de fruits de mer",
        "Crevettes, calamars et verdure"
      ],
      "ru": [
        "Салат с морепродуктами",
        "Креветки, кальмары и зелень"
      ],
      "es": [
        "Ensalada de mariscos",
        "Camarones, calamares y verdes mixtos"
      ],
      "pl": [
        "Sałatka z owocami morza",
        "Krewetki, kalmary i mix sałat"
      ],
      "de": [
        "Meeresfrüchtesalat",
        "Garnelen, Calamari & gemischter Salat"
      ],
      "it": [
        "Insalata di mare",
        "Gamberi, calamari e insalata mista"
      ]
    },
    {
      "price": "240",
      "en": [
        "Chicken Caesar Salad",
        "Grilled chicken, romaine & Caesar dressing"
      ],
      "ar": [
        "سلطة سيزر بالدجاج",
        "دجاج مشوي، خس وصوص سيزر"
      ],
      "fr": [
        "Salade César au poulet",
        "Poulet grillé, romaine et sauce César"
      ],
      "ru": [
        "Салат Цезарь с курицей",
        "Курица гриль с соусом Цезарь"
      ],
      "es": [
        "Ensalada César con pollo",
        "Pollo a la parrilla y aderezo César"
      ],
      "pl": [
        "Sałatka Cezar z kurczakiem",
        "Grillowany kurczak i sos Cezar"
      ],
      "de": [
        "Hähnchen-Caesar-Salat",
        "Gegrilltes Hähnchen & Caesar-Dressing"
      ],
      "it": [
        "Insalata Caesar con pollo",
        "Pollo grigliato e salsa Caesar"
      ]
    },
    {
      "price": "300",
      "en": [
        "Rocket & Smoked Salmon",
        "Arugula, smoked salmon & lemon"
      ],
      "ar": [
        "جرجير وسلمون مدخن",
        "جرجير مع سلمون مدخن وليمون"
      ],
      "fr": [
        "Roquette et saumon fumé",
        "Roquette, saumon fumé et citron"
      ],
      "ru": [
        "Руккола с копчёным лососем",
        "Руккола, копчёный лосось и лимон"
      ],
      "es": [
        "Rúcula y salmón ahumado",
        "Rúcula, salmón ahumado y limón"
      ],
      "pl": [
        "Rukola z wędzonym łososiem",
        "Rukola, wędzony łosoś i cytryna"
      ],
      "de": [
        "Rucola mit Räucherlachs",
        "Rucola, Räucherlachs & Zitrone"
      ],
      "it": [
        "Rucola e salmone affumicato",
        "Rucola, salmone affumicato e limone"
      ]
    },
    {
      "price": "200",
      "en": [
        "Caprese Salad",
        "Tomato, mozzarella & basil"
      ],
      "ar": [
        "سلطة كابريزي",
        "طماطم وموزاريلا وريحان"
      ],
      "fr": [
        "Salade Caprese",
        "Tomate, mozzarella et basilic"
      ],
      "ru": [
        "Салат Капрезе",
        "Помидоры, моцарелла и базилик"
      ],
      "es": [
        "Ensalada Caprese",
        "Tomate, mozzarella y albahaca"
      ],
      "pl": [
        "Sałatka Caprese",
        "Pomidor, mozzarella i bazylia"
      ],
      "de": [
        "Caprese-Salat",
        "Tomate, Mozzarella & Basilikum"
      ],
      "it": [
        "Insalata Caprese",
        "Pomodoro, mozzarella e basilico"
      ]
    }
  ],
  "soup": [
    {
      "price": "160",
      "en": [
        "Veggie Soup",
        "Fresh seasonal vegetable soup"
      ],
      "ar": [
        "شوربة خضار",
        "شوربة خضار طازجة"
      ],
      "fr": [
        "Soupe de légumes",
        "Soupe de légumes de saison"
      ],
      "ru": [
        "Овощной суп",
        "Суп из свежих сезонных овощей"
      ],
      "es": [
        "Sopa de verduras",
        "Sopa de verduras frescas de temporada"
      ],
      "pl": [
        "Zupa jarzynowa",
        "Zupa ze świeżych warzyw sezonowych"
      ],
      "de": [
        "Gemüsesuppe",
        "Frische saisonale Gemüsesuppe"
      ],
      "it": [
        "Zuppa di verdure",
        "Zuppa di verdure fresche di stagione"
      ]
    },
    {
      "price": "140",
      "en": [
        "Lentil Soup",
        "Classic creamy lentil soup"
      ],
      "ar": [
        "شوربة عدس",
        "شوربة عدس كلاسيكية"
      ],
      "fr": [
        "Soupe de lentilles",
        "Soupe de lentilles crémeuse classique"
      ],
      "ru": [
        "Чечевичный суп",
        "Классический кремовый суп из чечевицы"
      ],
      "es": [
        "Sopa de lentejas",
        "Sopa cremosa clásica de lentejas"
      ],
      "pl": [
        "Zupa z soczewicy",
        "Klasyczna kremowa zupa z soczewicy"
      ],
      "de": [
        "Linsensuppe",
        "Klassische cremige Linsensuppe"
      ],
      "it": [
        "Zuppa di lenticchie",
        "Classica zuppa cremosa di lenticchie"
      ]
    },
    {
      "price": "120",
      "en": [
        "Tomato Soup",
        "Rich creamy tomato soup"
      ],
      "ar": [
        "شوربة طماطم",
        "شوربة طماطم كريمية غنية"
      ],
      "fr": [
        "Soupe de tomates",
        "Soupe de tomates crémeuse et riche"
      ],
      "ru": [
        "Томатный суп",
        "Насыщенный кремовый томатный суп"
      ],
      "es": [
        "Sopa de tomate",
        "Sopa cremosa de tomate"
      ],
      "pl": [
        "Zupa pomidorowa",
        "Bogata kremowa zupa pomidorowa"
      ],
      "de": [
        "Tomatensuppe",
        "Reichhaltige cremige Tomatensuppe"
      ],
      "it": [
        "Zuppa di pomodoro",
        "Ricca zuppa cremosa di pomodoro"
      ]
    },
    {
      "price": "250",
      "en": [
        "Chicken Cream Soup",
        "Creamy chicken soup"
      ],
      "ar": [
        "شوربة دجاج كريمي",
        "شوربة دجاج كريمية"
      ],
      "fr": [
        "Crème de poulet",
        "Soupe crémeuse au poulet"
      ],
      "ru": [
        "Куриный крем-суп",
        "Кремовый куриный суп"
      ],
      "es": [
        "Crema de pollo",
        "Sopa cremosa de pollo"
      ],
      "pl": [
        "Krem z kurczaka",
        "Kremowa zupa z kurczaka"
      ],
      "de": [
        "Hühner-Cremesuppe",
        "Cremige Hühnersuppe"
      ],
      "it": [
        "Vellutata di pollo",
        "Zuppa cremosa di pollo"
      ]
    },
    {
      "price": "280",
      "en": [
        "Seafood Soup",
        "Rich mixed seafood broth"
      ],
      "ar": [
        "شوربة مأكولات بحرية",
        "مرق غني بالمأكولات البحرية"
      ],
      "fr": [
        "Soupe de fruits de mer",
        "Bouillon riche aux fruits de mer"
      ],
      "ru": [
        "Суп из морепродуктов",
        "Насыщенный бульон с морепродуктами"
      ],
      "es": [
        "Sopa de mariscos",
        "Caldo rico de mariscos mixtos"
      ],
      "pl": [
        "Zupa z owoców morza",
        "Bogaty bulion z owocami morza"
      ],
      "de": [
        "Meeresfrüchtesuppe",
        "Reichhaltige Meeresfrüchte-Brühe"
      ],
      "it": [
        "Zuppa di mare",
        "Ricco brodo di frutti di mare"
      ]
    },
    {
      "price": "295",
      "en": [
        "Shrimp Soup",
        "Creamy shrimp bisque"
      ],
      "ar": [
        "شوربة جمبري",
        "شوربة جمبري كريمية"
      ],
      "fr": [
        "Bisque de crevettes",
        "Bisque crémeuse aux crevettes"
      ],
      "ru": [
        "Суп с креветками",
        "Кремовый суп-биск с креветками"
      ],
      "es": [
        "Sopa de camarones",
        "Bisque cremoso de camarones"
      ],
      "pl": [
        "Zupa krewetkowa",
        "Kremowa zupa z krewetkami"
      ],
      "de": [
        "Garnelensuppe",
        "Cremige Garnelensuppe"
      ],
      "it": [
        "Zuppa di gamberi",
        "Vellutata cremosa di gamberi"
      ]
    }
  ],
  "sandwiches": [
    {
      "price": "275",
      "en": [
        "Kofta Sandwich",
        "Grilled minced meat kofta"
      ],
      "ar": [
        "ساندويتش كفتة",
        "كفتة لحم مفروم مشوية"
      ],
      "fr": [
        "Sandwich kofta",
        "Kofta de viande hachée grillée"
      ],
      "ru": [
        "Сэндвич кофта",
        "Жареная котлета кофта из фарша"
      ],
      "es": [
        "Sándwich de kofta",
        "Kofta de carne molida a la parrilla"
      ],
      "pl": [
        "Kanapka kofta",
        "Grillowana kofta z mielonego mięsa"
      ],
      "de": [
        "Kofta-Sandwich",
        "Gegrillte Hackfleisch-Kofta"
      ],
      "it": [
        "Panino kofta",
        "Kofta di carne macinata grigliata"
      ]
    },
    {
      "price": "250",
      "en": [
        "Beef Burger",
        "Grilled beef patty in a bun"
      ],
      "ar": [
        "برجر لحم",
        "قرص لحم مشوي في خبز البرجر"
      ],
      "fr": [
        "Burger bœuf",
        "Steak de bœuf grillé dans un pain"
      ],
      "ru": [
        "Говяжий бургер",
        "Говяжья котлета в булочке"
      ],
      "es": [
        "Hamburguesa de res",
        "Carne de res a la parrilla en pan"
      ],
      "pl": [
        "Burger wołowy",
        "Grillowany kotlet wołowy w bułce"
      ],
      "de": [
        "Rindfleisch-Burger",
        "Gegrilltes Rindfleisch-Patty im Brötchen"
      ],
      "it": [
        "Hamburger di manzo",
        "Hamburger di manzo grigliato nel panino"
      ]
    },
    {
      "price": "230",
      "en": [
        "Chicken Burger",
        "Grilled chicken patty in a bun"
      ],
      "ar": [
        "برجر دجاج",
        "قرص دجاج مشوي في خبز البرجر"
      ],
      "fr": [
        "Burger poulet",
        "Steak de poulet grillé dans un pain"
      ],
      "ru": [
        "Куриный бургер",
        "Куриная котлета в булочке"
      ],
      "es": [
        "Hamburguesa de pollo",
        "Pollo a la parrilla en pan"
      ],
      "pl": [
        "Burger z kurczaka",
        "Grillowany kotlet z kurczaka w bułce"
      ],
      "de": [
        "Hähnchen-Burger",
        "Gegrilltes Hähnchen-Patty im Brötchen"
      ],
      "it": [
        "Hamburger di pollo",
        "Pollo grigliato nel panino"
      ]
    },
    {
      "price": "195",
      "en": [
        "Hot Dog",
        "Grilled sausage in a soft bun"
      ],
      "ar": [
        "هوت دوج",
        "سجق مشوي في خبز طري"
      ],
      "fr": [
        "Hot-dog",
        "Saucisse grillée dans un pain moelleux"
      ],
      "ru": [
        "Хот-дог",
        "Жареная сосиска в мягкой булочке"
      ],
      "es": [
        "Hot dog",
        "Salchicha a la parrilla en pan suave"
      ],
      "pl": [
        "Hot dog",
        "Grillowana kiełbaska w miękkiej bułce"
      ],
      "de": [
        "Hot Dog",
        "Gegrillte Wurst im weichen Brötchen"
      ],
      "it": [
        "Hot dog",
        "Salsiccia grigliata in panino morbido"
      ]
    },
    {
      "price": "210",
      "en": [
        "Chicken Shawarma",
        "Spiced grilled chicken wrap"
      ],
      "ar": [
        "شاورما دجاج",
        "لفة دجاج متبل مشوي"
      ],
      "fr": [
        "Chawarma poulet",
        "Wrap de poulet grillé épicé"
      ],
      "ru": [
        "Шаурма с курицей",
        "Ролл с пряной жареной курицей"
      ],
      "es": [
        "Shawarma de pollo",
        "Wrap de pollo especiado a la parrilla"
      ],
      "pl": [
        "Shawarma z kurczaka",
        "Zawijaniec z pikantnym grillowanym kurczakiem"
      ],
      "de": [
        "Chicken Shawarma",
        "Wrap mit gewürztem gegrillten Hähnchen"
      ],
      "it": [
        "Shawarma di pollo",
        "Involtino di pollo speziato grigliato"
      ]
    },
    {
      "price": "230",
      "en": [
        "Meat Shawarma",
        "Spiced grilled beef wrap"
      ],
      "ar": [
        "شاورما لحم",
        "لفة لحم متبل مشوي"
      ],
      "fr": [
        "Chawarma viande",
        "Wrap de bœuf grillé épicé"
      ],
      "ru": [
        "Шаурма с мясом",
        "Ролл с пряной жареной говядиной"
      ],
      "es": [
        "Shawarma de carne",
        "Wrap de res especiada a la parrilla"
      ],
      "pl": [
        "Shawarma z mięsa",
        "Zawijaniec z pikantną grillowaną wołowiną"
      ],
      "de": [
        "Fleisch-Shawarma",
        "Wrap mit gewürztem gegrillten Rindfleisch"
      ],
      "it": [
        "Shawarma di carne",
        "Involtino di manzo speziato grigliato"
      ]
    },
    {
      "price": "295",
      "en": [
        "Fried Shrimp Sandwich",
        "Crispy shrimp in a soft bun"
      ],
      "ar": [
        "ساندويتش جمبري مقلي",
        "جمبري مقرمش في خبز طري"
      ],
      "fr": [
        "Sandwich crevettes frites",
        "Crevettes croustillantes dans un pain moelleux"
      ],
      "ru": [
        "Сэндвич с жареными креветками",
        "Хрустящие креветки в мягкой булочке"
      ],
      "es": [
        "Sándwich de camarones fritos",
        "Camarones crujientes en pan suave"
      ],
      "pl": [
        "Kanapka z krewetkami",
        "Chrupiące krewetki w miękkiej bułce"
      ],
      "de": [
        "Sandwich mit frittierten Garnelen",
        "Knusprige Garnelen im weichen Brötchen"
      ],
      "it": [
        "Panino gamberi fritti",
        "Gamberi croccanti in panino morbido"
      ]
    },
    {
      "price": "240",
      "en": [
        "Chicken Panini",
        "Grilled chicken, toasted panini bread"
      ],
      "ar": [
        "بانيني دجاج",
        "دجاج مشوي في خبز بانيني محمص"
      ],
      "fr": [
        "Panini poulet",
        "Poulet grillé, pain panini toasté"
      ],
      "ru": [
        "Панини с курицей",
        "Курица гриль в поджаренном панини"
      ],
      "es": [
        "Panini de pollo",
        "Pollo a la parrilla en pan panini tostado"
      ],
      "pl": [
        "Panini z kurczakiem",
        "Grillowany kurczak w tostowanym pieczywie panini"
      ],
      "de": [
        "Hähnchen-Panini",
        "Gegrilltes Hähnchen im gerösteten Panini"
      ],
      "it": [
        "Panino pollo",
        "Pollo grigliato nel pane panini tostato"
      ]
    },
    {
      "price": "260",
      "en": [
        "Fried Calamari Sandwich",
        "Crispy calamari in a soft bun"
      ],
      "ar": [
        "ساندويتش كاليماري مقلي",
        "كاليماري مقرمش في خبز طري"
      ],
      "fr": [
        "Sandwich calamars frits",
        "Calamars croustillants dans un pain moelleux"
      ],
      "ru": [
        "Сэндвич с кальмаром",
        "Хрустящий кальмар в мягкой булочке"
      ],
      "es": [
        "Sándwich de calamares fritos",
        "Calamares crujientes en pan suave"
      ],
      "pl": [
        "Kanapka z kalmarami",
        "Chrupiące kalmary w miękkiej bułce"
      ],
      "de": [
        "Sandwich mit frittiertem Calamari",
        "Knuspriger Calamari im weichen Brötchen"
      ],
      "it": [
        "Panino calamari fritti",
        "Calamari croccanti in panino morbido"
      ]
    }
  ],
  "meat": [
    {
      "price": "495",
      "en": [
        "Kofta",
        "Grilled minced meat skewers"
      ],
      "ar": [
        "كفتة",
        "أسياخ لحم مفروم مشوية"
      ],
      "fr": [
        "Kofta",
        "Brochettes de viande hachée grillée"
      ],
      "ru": [
        "Кофта",
        "Шашлычки из рубленого мяса гриль"
      ],
      "es": [
        "Kofta",
        "Brochetas de carne molida a la parrilla"
      ],
      "pl": [
        "Kofta",
        "Grillowane szaszłyki z mielonego mięsa"
      ],
      "de": [
        "Kofta",
        "Gegrillte Hackfleischspieße"
      ],
      "it": [
        "Kofta",
        "Spiedini di carne macinata grigliata"
      ]
    },
    {
      "price": "800",
      "en": [
        "Camel Steak",
        "Grilled camel meat steak"
      ],
      "ar": [
        "ستيك جمل",
        "ستيك لحم جمل مشوي"
      ],
      "fr": [
        "Steak de chameau",
        "Steak de chameau grillé"
      ],
      "ru": [
        "Стейк из верблюжатины",
        "Жареный стейк из верблюжатины"
      ],
      "es": [
        "Bistec de camello",
        "Bistec de camello a la parrilla"
      ],
      "pl": [
        "Stek z wielbłąda",
        "Grillowany stek z wielbłąda"
      ],
      "de": [
        "Kamelsteak",
        "Gegrilltes Kamelfleischsteak"
      ],
      "it": [
        "Bistecca di cammello",
        "Bistecca di cammello alla griglia"
      ]
    },
    {
      "price": "750",
      "en": [
        "Beef Fillet",
        "Tender grilled beef fillet"
      ],
      "ar": [
        "فيليه لحم",
        "فيليه لحم بقري مشوي طري"
      ],
      "fr": [
        "Filet de bœuf",
        "Filet de bœuf grillé tendre"
      ],
      "ru": [
        "Говяжье филе",
        "Нежное филе говядины на гриле"
      ],
      "es": [
        "Filete de res",
        "Tierno filete de res a la parrilla"
      ],
      "pl": [
        "Filet wołowy",
        "Delikatny grillowany filet wołowy"
      ],
      "de": [
        "Rinderfilet",
        "Zartes gegrilltes Rinderfilet"
      ],
      "it": [
        "Filetto di manzo",
        "Tenero filetto di manzo alla griglia"
      ]
    },
    {
      "price": "895",
      "en": [
        "Mix Grill",
        "Assorted grilled meats"
      ],
      "ar": [
        "مشاوي مشكلة",
        "تشكيلة لحوم مشوية"
      ],
      "fr": [
        "Grillades mixtes",
        "Assortiment de viandes grillées"
      ],
      "ru": [
        "Мясное ассорти гриль",
        "Ассорти из жареного мяса"
      ],
      "es": [
        "Parrillada mixta",
        "Surtido de carnes a la parrilla"
      ],
      "pl": [
        "Grill mieszany",
        "Zestaw grillowanych mięs"
      ],
      "de": [
        "Grillplatte gemischt",
        "Verschiedene gegrillte Fleischsorten"
      ],
      "it": [
        "Grigliata mista",
        "Assortimento di carni grigliate"
      ]
    },
    {
      "price": "845",
      "en": [
        "Surf & Turf",
        "Grilled steak paired with shrimp"
      ],
      "ar": [
        "سيرف اند تيرف",
        "ستيك مشوي مع جمبري"
      ],
      "fr": [
        "Surf & Turf",
        "Steak grillé accompagné de crevettes"
      ],
      "ru": [
        "Сёрф энд тёрф",
        "Стейк на гриле с креветками"
      ],
      "es": [
        "Surf & Turf",
        "Filete a la parrilla con camarones"
      ],
      "pl": [
        "Surf & Turf",
        "Grillowany stek z krewetkami"
      ],
      "de": [
        "Surf & Turf",
        "Gegrilltes Steak mit Garnelen"
      ],
      "it": [
        "Surf & Turf",
        "Bistecca alla griglia con gamberi"
      ]
    },
    {
      "price": "845",
      "en": [
        "T-Bone",
        "Grilled T-bone steak"
      ],
      "ar": [
        "تي بون",
        "ستيك تي بون مشوي"
      ],
      "fr": [
        "T-Bone",
        "Steak T-bone grillé"
      ],
      "ru": [
        "Ти-бон",
        "Стейк ти-бон на гриле"
      ],
      "es": [
        "T-Bone",
        "Bistec T-bone a la parrilla"
      ],
      "pl": [
        "T-Bone",
        "Grillowany stek T-bone"
      ],
      "de": [
        "T-Bone-Steak",
        "Gegrilltes T-Bone-Steak"
      ],
      "it": [
        "T-Bone",
        "Bistecca T-bone alla griglia"
      ]
    },
    {
      "price": "845",
      "en": [
        "Ribeye",
        "Grilled ribeye steak"
      ],
      "ar": [
        "ريب آي",
        "ستيك ريب آي مشوي"
      ],
      "fr": [
        "Entrecôte",
        "Entrecôte grillée"
      ],
      "ru": [
        "Рибай",
        "Стейк рибай на гриле"
      ],
      "es": [
        "Ribeye",
        "Bistec ribeye a la parrilla"
      ],
      "pl": [
        "Rostbef",
        "Grillowany stek rostbef"
      ],
      "de": [
        "Ribeye",
        "Gegrilltes Ribeye-Steak"
      ],
      "it": [
        "Ribeye",
        "Bistecca ribeye alla griglia"
      ]
    },
    {
      "price": "995",
      "en": [
        "Tomahawk",
        "Grilled bone-in tomahawk steak"
      ],
      "ar": [
        "توماهوك",
        "ستيك توماهوك مشوي بالعظم"
      ],
      "fr": [
        "Tomahawk",
        "Côte de bœuf tomahawk grillée"
      ],
      "ru": [
        "Томагавк",
        "Стейк томагавк на кости, гриль"
      ],
      "es": [
        "Tomahawk",
        "Chuletón tomahawk a la parrilla con hueso"
      ],
      "pl": [
        "Tomahawk",
        "Grillowany stek tomahawk na kości"
      ],
      "de": [
        "Tomahawk",
        "Gegrilltes Tomahawk-Steak mit Knochen"
      ],
      "it": [
        "Tomahawk",
        "Bistecca tomahawk con osso alla griglia"
      ]
    }
    ,
    {
      "price": "495",
      "en": [
        "Beef Fajita",
        "Sizzling beef strips with peppers & onions"
      ],
      "ar": [
        "فاهيتا لحم",
        "شرائح لحم مقلية بالفلفل والبصل"
      ],
      "fr": [
        "Fajita de bœuf",
        "Lanières de bœuf grillées aux poivrons et oignons"
      ],
      "ru": [
        "Фахита из говядины",
        "Полоски говядины на шипящей сковороде с перцем и луком"
      ],
      "es": [
        "Fajita de res",
        "Tiras de res a la plancha con pimientos y cebolla"
      ],
      "pl": [
        "Fajita wołowa",
        "Paski wołowiny z papryką i cebulą, podane na skwierczącej patelni"
      ],
      "de": [
        "Rindfleisch-Fajita",
        "Brutzelnde Rinderstreifen mit Paprika & Zwiebeln"
      ],
      "it": [
        "Fajita di manzo",
        "Striscioline di manzo saltate con peperoni e cipolle"
      ]
    }
  ],
  "chicken": [
    {
      "price": "420",
      "en": [
        "Chicken Panna",
        "Chicken in creamy panna sauce"
      ],
      "ar": [
        "دجاج بانيه",
        "دجاج بصوص بانا الكريمي"
      ],
      "fr": [
        "Poulet Panna",
        "Poulet en sauce crémeuse panna"
      ],
      "ru": [
        "Курица Панна",
        "Курица в сливочном соусе панна"
      ],
      "es": [
        "Pollo Panna",
        "Pollo en salsa cremosa panna"
      ],
      "pl": [
        "Kurczak Panna",
        "Kurczak w kremowym sosie panna"
      ],
      "de": [
        "Hähnchen Panna",
        "Hähnchen in cremiger Panna-Sauce"
      ],
      "it": [
        "Pollo Panna",
        "Pollo in salsa cremosa panna"
      ]
    },
    {
      "price": "420",
      "en": [
        "Chicken Mushroom",
        "Chicken in creamy mushroom sauce"
      ],
      "ar": [
        "دجاج بالمشروم",
        "دجاج بصوص المشروم الكريمي"
      ],
      "fr": [
        "Poulet aux champignons",
        "Poulet en sauce crémeuse aux champignons"
      ],
      "ru": [
        "Курица с грибами",
        "Курица в сливочном грибном соусе"
      ],
      "es": [
        "Pollo con champiñones",
        "Pollo en salsa cremosa de champiñones"
      ],
      "pl": [
        "Kurczak z pieczarkami",
        "Kurczak w kremowym sosie grzybowym"
      ],
      "de": [
        "Hähnchen mit Pilzen",
        "Hähnchen in cremiger Pilzsauce"
      ],
      "it": [
        "Pollo ai funghi",
        "Pollo in salsa cremosa ai funghi"
      ]
    },
    {
      "price": "440",
      "en": [
        "Chicken Fajita",
        "Sizzling chicken with peppers & onions"
      ],
      "ar": [
        "فاهيتا دجاج",
        "دجاج مع فلفل وبصل"
      ],
      "fr": [
        "Fajita poulet",
        "Poulet grillé, poivrons et oignons"
      ],
      "ru": [
        "Курица фахита",
        "Курица с перцем и луком"
      ],
      "es": [
        "Fajita de pollo",
        "Pollo con pimientos y cebolla"
      ],
      "pl": [
        "Fajita z kurczaka",
        "Kurczak z papryką i cebulą"
      ],
      "de": [
        "Hähnchen-Fajita",
        "Hähnchen mit Paprika & Zwiebeln"
      ],
      "it": [
        "Fajita di pollo",
        "Pollo con peperoni e cipolla"
      ]
    },
    {
      "price": "395",
      "en": [
        "Chicken Grill",
        "Grilled marinated chicken breast"
      ],
      "ar": [
        "دجاج مشوي",
        "صدر دجاج متبل مشوي"
      ],
      "fr": [
        "Poulet grillé",
        "Poitrine de poulet grillée marinée"
      ],
      "ru": [
        "Курица гриль",
        "Маринованная грудка курицы гриль"
      ],
      "es": [
        "Pollo a la parrilla",
        "Pechuga de pollo marinada a la parrilla"
      ],
      "pl": [
        "Kurczak z grilla",
        "Marynowana grillowana pierś z kurczaka"
      ],
      "de": [
        "Hähnchen vom Grill",
        "Gegrillte marinierte Hähnchenbrust"
      ],
      "it": [
        "Pollo alla griglia",
        "Petto di pollo marinato alla griglia"
      ]
    },
    {
      "price": "395",
      "en": [
        "Chicken Strips",
        "Grilled chicken strips"
      ],
      "ar": [
        "أصابع دجاج مشوية",
        "شرائح دجاج مشوية"
      ],
      "fr": [
        "Lanières de poulet",
        "Lanières de poulet grillées"
      ],
      "ru": [
        "Полоски курицы",
        "Куриные полоски на гриле"
      ],
      "es": [
        "Tiras de pollo",
        "Tiras de pollo a la parrilla"
      ],
      "pl": [
        "Paski z kurczaka",
        "Grillowane paski z kurczaka"
      ],
      "de": [
        "Hähnchenstreifen",
        "Gegrillte Hähnchenstreifen"
      ],
      "it": [
        "Striscie di pollo",
        "Striscie di pollo alla griglia"
      ]
    },
    {
      "price": "495",
      "en": [
        "Chicken Cordon Blue",
        "Breaded chicken, ham & cheese"
      ],
      "ar": [
        "كوردون بلو دجاج",
        "دجاج بالجبنة واللانشون مقرمش"
      ],
      "fr": [
        "Cordon bleu de poulet",
        "Poulet pané, jambon et fromage"
      ],
      "ru": [
        "Курица Кордон Блю",
        "Курица в панировке с ветчиной и сыром"
      ],
      "es": [
        "Pollo Cordon Bleu",
        "Pollo empanizado con jamón y queso"
      ],
      "pl": [
        "Kurczak Cordon Bleu",
        "Kurczak panierowany z szynką i serem"
      ],
      "de": [
        "Hähnchen Cordon Bleu",
        "Paniertes Hähnchen mit Schinken & Käse"
      ],
      "it": [
        "Pollo Cordon Bleu",
        "Pollo impanato con prosciutto e formaggio"
      ]
    },
    {
      "price": "495",
      "en": [
        "Chicken Lemon Butter",
        "Chicken in lemon butter sauce"
      ],
      "ar": [
        "دجاج بالليمون والزبدة",
        "دجاج بصوص الليمون والزبدة"
      ],
      "fr": [
        "Poulet beurre citron",
        "Poulet en sauce citron beurre"
      ],
      "ru": [
        "Курица в лимонно-масляном соусе",
        "Курица в соусе из лимона и масла"
      ],
      "es": [
        "Pollo mantequilla y limón",
        "Pollo en salsa de limón y mantequilla"
      ],
      "pl": [
        "Kurczak cytrynowo-maślany",
        "Kurczak w sosie cytrynowo-maślanym"
      ],
      "de": [
        "Hähnchen Zitronenbutter",
        "Hähnchen in Zitronen-Buttersauce"
      ],
      "it": [
        "Pollo al burro e limone",
        "Pollo in salsa al burro e limone"
      ]
    },
    {
      "price": "420",
      "en": [
        "Shish Tawook",
        "Marinated grilled chicken skewers"
      ],
      "ar": [
        "شيش طاووق",
        "أسياخ دجاج متبلة مشوية"
      ],
      "fr": [
        "Chich taouk",
        "Brochettes de poulet marinées grillées"
      ],
      "ru": [
        "Шиш тавук",
        "Маринованный шашлык из курицы"
      ],
      "es": [
        "Shish Tawook",
        "Brochetas de pollo marinado a la parrilla"
      ],
      "pl": [
        "Shish Tawook",
        "Marynowane szaszłyki z kurczaka"
      ],
      "de": [
        "Shish Tawook",
        "Marinierte gegrillte Hähnchenspieße"
      ],
      "it": [
        "Shish Tawook",
        "Spiedini di pollo marinato alla griglia"
      ]
    },
    {
      "price": "440",
      "en": [
        "Chicken Sweet & Sour",
        "Chicken in sweet and sour sauce"
      ],
      "ar": [
        "دجاج بالصوص الحلو والحامض",
        "دجاج بصوص حلو وحامض"
      ],
      "fr": [
        "Poulet aigre-doux",
        "Poulet en sauce aigre-douce"
      ],
      "ru": [
        "Курица кисло-сладкая",
        "Курица в кисло-сладком соусе"
      ],
      "es": [
        "Pollo agridulce",
        "Pollo en salsa agridulce"
      ],
      "pl": [
        "Kurczak słodko-kwaśny",
        "Kurczak w sosie słodko-kwaśnym"
      ],
      "de": [
        "Hähnchen süß-sauer",
        "Hähnchen in süß-saurer Sauce"
      ],
      "it": [
        "Pollo in agrodolce",
        "Pollo in salsa agrodolce"
      ]
    }
  ],
  "fish": [
    {
      "price": "440",
      "en": [
        "Mussels (White Wine)",
        "Steamed mussels in white wine sauce"
      ],
      "ar": [
        "بلح البحر بالنبيذ الأبيض",
        "بلح بحر مطهو بصوص النبيذ الأبيض"
      ],
      "fr": [
        "Moules au vin blanc",
        "Moules cuites à la vapeur, sauce vin blanc"
      ],
      "ru": [
        "Мидии в белом вине",
        "Мидии на пару в соусе из белого вина"
      ],
      "es": [
        "Mejillones al vino blanco",
        "Mejillones al vapor en salsa de vino blanco"
      ],
      "pl": [
        "Małże w białym winie",
        "Małże na parze w sosie z białego wina"
      ],
      "de": [
        "Miesmuscheln in Weißwein",
        "Gedämpfte Muscheln in Weißweinsauce"
      ],
      "it": [
        "Cozze al vino bianco",
        "Cozze al vapore in salsa al vino bianco"
      ]
    },
    {
      "price": "460",
      "en": [
        "Fish & Chips",
        "Crispy battered fish, fries"
      ],
      "ar": [
        "سمك وبطاطس",
        "سمك مقرمش مقلي مع بطاطس"
      ],
      "fr": [
        "Fish & Chips",
        "Poisson pané croustillant, frites"
      ],
      "ru": [
        "Рыба с картофелем",
        "Хрустящая рыба в кляре с картофелем фри"
      ],
      "es": [
        "Pescado con papas",
        "Pescado empanizado crujiente con papas fritas"
      ],
      "pl": [
        "Ryba z frytkami",
        "Chrupiąca ryba w cieście z frytkami"
      ],
      "de": [
        "Fish & Chips",
        "Knuspriger panierter Fisch mit Pommes"
      ],
      "it": [
        "Fish & Chips",
        "Pesce impanato croccante con patatine"
      ]
    },
    {
      "price": "750",
      "en": [
        "Steak Salmon",
        "Grilled salmon steak"
      ],
      "ar": [
        "ستيك سلمون",
        "ستيك سلمون مشوي"
      ],
      "fr": [
        "Steak de saumon",
        "Steak de saumon grillé"
      ],
      "ru": [
        "Стейк из лосося",
        "Стейк лосося на гриле"
      ],
      "es": [
        "Bistec de salmón",
        "Filete de salmón a la parrilla"
      ],
      "pl": [
        "Stek z łososia",
        "Grillowany stek z łososia"
      ],
      "de": [
        "Lachssteak",
        "Gegrilltes Lachssteak"
      ],
      "it": [
        "Bistecca di salmone",
        "Bistecca di salmone alla griglia"
      ]
    },
    {
      "price": "550",
      "en": [
        "Shrimp",
        "Grilled or sautéed shrimp"
      ],
      "ar": [
        "جمبري",
        "جمبري مشوي أو سوتيه"
      ],
      "fr": [
        "Crevettes",
        "Crevettes grillées ou sautées"
      ],
      "ru": [
        "Креветки",
        "Жареные или тушёные креветки"
      ],
      "es": [
        "Camarones",
        "Camarones a la parrilla o salteados"
      ],
      "pl": [
        "Krewetki",
        "Grillowane lub smażone krewetki"
      ],
      "de": [
        "Garnelen",
        "Gegrillte oder sautierte Garnelen"
      ],
      "it": [
        "Gamberi",
        "Gamberi alla griglia o saltati"
      ]
    },
    {
      "price": "750",
      "en": [
        "Asian Steak Tuna",
        "Seared tuna steak, Asian style"
      ],
      "ar": [
        "ستيك تونة آسيوي",
        "ستيك تونة مشوي بالطريقة الآسيوية"
      ],
      "fr": [
        "Steak de thon asiatique",
        "Thon saisi, style asiatique"
      ],
      "ru": [
        "Азиатский стейк тунца",
        "Обжаренный стейк тунца в азиатском стиле"
      ],
      "es": [
        "Bistec de atún asiático",
        "Atún sellado al estilo asiático"
      ],
      "pl": [
        "Stek z tuńczyka po azjatycku",
        "Podsmażany stek z tuńczyka po azjatycku"
      ],
      "de": [
        "Thunfischsteak asiatisch",
        "Angebratenes Thunfischsteak, asiatischer Art"
      ],
      "it": [
        "Tonno stile asiatico",
        "Tonno scottato in stile asiatico"
      ]
    },
    {
      "price": "890",
      "en": [
        "Mix Sea Food",
        "Assorted grilled seafood platter"
      ],
      "ar": [
        "مشاوي بحرية مشكلة",
        "طبق مأكولات بحرية مشكلة مشوية"
      ],
      "fr": [
        "Assortiment de fruits de mer",
        "Plateau de fruits de mer grillés"
      ],
      "ru": [
        "Ассорти морепродуктов",
        "Ассорти из жареных морепродуктов"
      ],
      "es": [
        "Mariscos mixtos",
        "Plato de mariscos mixtos a la parrilla"
      ],
      "pl": [
        "Mix owoców morza",
        "Talerz grillowanych owoców morza"
      ],
      "de": [
        "Meeresfrüchte-Mix",
        "Gegrillte Meeresfrüchteplatte"
      ],
      "it": [
        "Mix di pesce",
        "Piatto misto di pesce alla griglia"
      ]
    }
  ],
  "pasta": [
    {
      "price": "220",
      "en": [
        "Penne Arrabbiata",
        "Penne in spicy tomato sauce"
      ],
      "ar": [
        "بيني أرابياتا",
        "بيني بصوص طماطم حار"
      ],
      "fr": [
        "Penne Arrabbiata",
        "Penne, sauce tomate épicée"
      ],
      "ru": [
        "Пенне Аррабьята",
        "Пенне в остром томатном соусе"
      ],
      "es": [
        "Penne Arrabbiata",
        "Penne en salsa de tomate picante"
      ],
      "pl": [
        "Penne Arrabbiata",
        "Penne w pikantnym sosie pomidorowym"
      ],
      "de": [
        "Penne Arrabbiata",
        "Penne in scharfer Tomatensauce"
      ],
      "it": [
        "Penne all'Arrabbiata",
        "Penne in salsa di pomodoro piccante"
      ]
    },
    {
      "price": "295",
      "en": [
        "Carbonara",
        "Creamy pasta, egg & cheese"
      ],
      "ar": [
        "كاربونارا",
        "باستا كريمية بالبيض والجبنة"
      ],
      "fr": [
        "Carbonara",
        "Pâtes crémeuses, œuf et fromage"
      ],
      "ru": [
        "Карбонара",
        "Сливочная паста с яйцом и сыром"
      ],
      "es": [
        "Carbonara",
        "Pasta cremosa con huevo y queso"
      ],
      "pl": [
        "Carbonara",
        "Kremowy makaron z jajkiem i serem"
      ],
      "de": [
        "Carbonara",
        "Cremige Pasta mit Ei & Käse"
      ],
      "it": [
        "Carbonara",
        "Pasta cremosa con uovo e formaggio"
      ]
    },
    {
      "price": "340",
      "en": [
        "Shrimp Pasta",
        "Pasta with sautéed shrimp"
      ],
      "ar": [
        "باستا بالجمبري",
        "باستا مع جمبري سوتيه"
      ],
      "fr": [
        "Pâtes aux crevettes",
        "Pâtes avec crevettes sautées"
      ],
      "ru": [
        "Паста с креветками",
        "Паста с обжаренными креветками"
      ],
      "es": [
        "Pasta con camarones",
        "Pasta con camarones salteados"
      ],
      "pl": [
        "Makaron z krewetkami",
        "Makaron z podsmażanymi krewetkami"
      ],
      "de": [
        "Pasta mit Garnelen",
        "Pasta mit sautierten Garnelen"
      ],
      "it": [
        "Pasta ai gamberi",
        "Pasta con gamberi saltati"
      ]
    },
    {
      "price": "250",
      "en": [
        "Bolognese",
        "Pasta with rich meat ragù"
      ],
      "ar": [
        "بولونيز",
        "باستا بصوص اللحم الغني"
      ],
      "fr": [
        "Bolognaise",
        "Pâtes, ragù de viande riche"
      ],
      "ru": [
        "Болоньезе",
        "Паста с насыщенным мясным рагу"
      ],
      "es": [
        "Boloñesa",
        "Pasta con rico ragú de carne"
      ],
      "pl": [
        "Bolognese",
        "Makaron z bogatym sosem mięsnym"
      ],
      "de": [
        "Bolognese",
        "Pasta mit reichhaltigem Fleischragù"
      ],
      "it": [
        "Bolognese",
        "Pasta con ricco ragù di carne"
      ]
    },
    {
      "price": "220",
      "en": [
        "Four Cheese",
        "Pasta in creamy four-cheese sauce"
      ],
      "ar": [
        "أربع أجبان",
        "باستا بصوص أربع أجبان كريمي"
      ],
      "fr": [
        "Quatre fromages",
        "Pâtes, sauce crémeuse aux quatre fromages"
      ],
      "ru": [
        "Четыре сыра",
        "Паста в сливочном соусе из четырёх сыров"
      ],
      "es": [
        "Cuatro quesos",
        "Pasta en salsa cremosa de cuatro quesos"
      ],
      "pl": [
        "Cztery sery",
        "Makaron w kremowym sosie z czterech serów"
      ],
      "de": [
        "Vier Käse",
        "Pasta in cremiger Vier-Käse-Sauce"
      ],
      "it": [
        "Quattro formaggi",
        "Pasta in salsa cremosa ai quattro formaggi"
      ]
    },
    {
      "price": "295",
      "en": [
        "Chicken Alfredo",
        "Pasta, chicken in creamy Alfredo sauce"
      ],
      "ar": [
        "ألفريدو بالدجاج",
        "باستا ودجاج بصوص ألفريدو الكريمي"
      ],
      "fr": [
        "Poulet Alfredo",
        "Pâtes, poulet, sauce Alfredo crémeuse"
      ],
      "ru": [
        "Курица Альфредо",
        "Паста с курицей в сливочном соусе Альфредо"
      ],
      "es": [
        "Pollo Alfredo",
        "Pasta con pollo en salsa Alfredo cremosa"
      ],
      "pl": [
        "Kurczak Alfredo",
        "Makaron z kurczakiem w kremowym sosie Alfredo"
      ],
      "de": [
        "Hähnchen Alfredo",
        "Pasta mit Hähnchen in cremiger Alfredo-Sauce"
      ],
      "it": [
        "Pollo Alfredo",
        "Pasta con pollo in salsa Alfredo cremosa"
      ]
    },
    {
      "price": "295",
      "en": [
        "Negresco",
        "Pasta with creamy seafood sauce"
      ],
      "ar": [
        "نيجريسكو",
        "باستا بصوص مأكولات بحرية كريمي"
      ],
      "fr": [
        "Negresco",
        "Pâtes, sauce crémeuse aux fruits de mer"
      ],
      "ru": [
        "Негреско",
        "Паста в сливочном соусе с морепродуктами"
      ],
      "es": [
        "Negresco",
        "Pasta en salsa cremosa de mariscos"
      ],
      "pl": [
        "Negresco",
        "Makaron w kremowym sosie z owocami morza"
      ],
      "de": [
        "Negresco",
        "Pasta in cremiger Meeresfrüchtesauce"
      ],
      "it": [
        "Negresco",
        "Pasta in salsa cremosa ai frutti di mare"
      ]
    },
    {
      "price": "350",
      "en": [
        "Smoked Salmon Pasta",
        "Pasta with smoked salmon, cream sauce"
      ],
      "ar": [
        "باستا سلمون مدخن",
        "باستا بالسلمون المدخن وصوص كريمي"
      ],
      "fr": [
        "Pâtes saumon fumé",
        "Pâtes, saumon fumé, sauce crémeuse"
      ],
      "ru": [
        "Паста с копчёным лососем",
        "Паста с копчёным лососем в сливочном соусе"
      ],
      "es": [
        "Pasta con salmón ahumado",
        "Pasta con salmón ahumado en salsa cremosa"
      ],
      "pl": [
        "Makaron z wędzonym łososiem",
        "Makaron z wędzonym łososiem w kremowym sosie"
      ],
      "de": [
        "Pasta mit Räucherlachs",
        "Pasta mit Räucherlachs in Sahnesauce"
      ],
      "it": [
        "Pasta al salmone affumicato",
        "Pasta con salmone affumicato in salsa cremosa"
      ]
    },
    {
      "price": "345",
      "en": [
        "Seafood Pasta",
        "Pasta with mixed seafood"
      ],
      "ar": [
        "باستا مأكولات بحرية",
        "باستا بمأكولات بحرية مشكلة"
      ],
      "fr": [
        "Pâtes aux fruits de mer",
        "Pâtes, fruits de mer assortis"
      ],
      "ru": [
        "Паста с морепродуктами",
        "Паста с ассорти морепродуктов"
      ],
      "es": [
        "Pasta con mariscos",
        "Pasta con mariscos mixtos"
      ],
      "pl": [
        "Makaron z owocami morza",
        "Makaron z mieszanką owoców morza"
      ],
      "de": [
        "Pasta mit Meeresfrüchten",
        "Pasta mit gemischten Meeresfrüchten"
      ],
      "it": [
        "Pasta ai frutti di mare",
        "Pasta con frutti di mare misti"
      ]
    }
  ],
  "pizza": [
    {
      "price": "195",
      "en": [
        "Margherita",
        "Tomato, mozzarella & basil"
      ],
      "ar": [
        "مارجريتا",
        "طماطم وموزاريلا وريحان"
      ],
      "fr": [
        "Margherita",
        "Tomate, mozzarella et basilic"
      ],
      "ru": [
        "Маргарита",
        "Томаты, моцарелла и базилик"
      ],
      "es": [
        "Margherita",
        "Tomate, mozzarella y albahaca"
      ],
      "pl": [
        "Margherita",
        "Pomidor, mozzarella i bazylia"
      ],
      "de": [
        "Margherita",
        "Tomate, Mozzarella & Basilikum"
      ],
      "it": [
        "Margherita",
        "Pomodoro, mozzarella e basilico"
      ]
    },
    {
      "price": "320",
      "en": [
        "Sea Food Pizza",
        "Mixed seafood topping"
      ],
      "ar": [
        "بيتزا مأكولات بحرية",
        "بيتزا بمأكولات بحرية مشكلة"
      ],
      "fr": [
        "Pizza fruits de mer",
        "Garniture de fruits de mer assortis"
      ],
      "ru": [
        "Пицца с морепродуктами",
        "Пицца с ассорти морепродуктов"
      ],
      "es": [
        "Pizza de mariscos",
        "Cubierta de mariscos mixtos"
      ],
      "pl": [
        "Pizza z owocami morza",
        "Pizza z mieszanką owoców morza"
      ],
      "de": [
        "Meeresfrüchte-Pizza",
        "Pizza mit gemischten Meeresfrüchten"
      ],
      "it": [
        "Pizza ai frutti di mare",
        "Pizza con frutti di mare misti"
      ]
    },
    {
      "price": "295",
      "en": [
        "Mix Meat Pizza",
        "Assorted meat toppings"
      ],
      "ar": [
        "بيتزا لحوم مشكلة",
        "بيتزا بلحوم متنوعة"
      ],
      "fr": [
        "Pizza viandes mixtes",
        "Garniture de viandes assorties"
      ],
      "ru": [
        "Пицца мясное ассорти",
        "Пицца с разными видами мяса"
      ],
      "es": [
        "Pizza de carnes mixtas",
        "Cubierta de carnes variadas"
      ],
      "pl": [
        "Pizza z mięsem mieszanym",
        "Pizza z różnymi rodzajami mięsa"
      ],
      "de": [
        "Pizza gemischtes Fleisch",
        "Verschiedene Fleischbeläge"
      ],
      "it": [
        "Pizza carne mista",
        "Con vari tipi di carne"
      ]
    },
    {
      "price": "295",
      "en": [
        "Ala Tuna",
        "Tuna, onion & olives"
      ],
      "ar": [
        "بيتزا تونة",
        "تونة وبصل وزيتون"
      ],
      "fr": [
        "Ala Tuna",
        "Thon, oignon et olives"
      ],
      "ru": [
        "Ала Туна",
        "Тунец, лук и оливки"
      ],
      "es": [
        "Ala Tuna",
        "Atún, cebolla y aceitunas"
      ],
      "pl": [
        "Ala Tuna",
        "Tuńczyk, cebula i oliwki"
      ],
      "de": [
        "Ala Tuna",
        "Thunfisch, Zwiebel & Oliven"
      ],
      "it": [
        "Ala Tuna",
        "Tonno, cipolla e olive"
      ]
    },
    {
      "price": "290",
      "en": [
        "Chicken Pizza",
        "Grilled chicken topping"
      ],
      "ar": [
        "بيتزا دجاج",
        "بيتزا بالدجاج المشوي"
      ],
      "fr": [
        "Pizza poulet",
        "Garniture de poulet grillé"
      ],
      "ru": [
        "Пицца с курицей",
        "Пицца с жареной курицей"
      ],
      "es": [
        "Pizza de pollo",
        "Cubierta de pollo a la parrilla"
      ],
      "pl": [
        "Pizza z kurczakiem",
        "Pizza z grillowanym kurczakiem"
      ],
      "de": [
        "Hähnchen-Pizza",
        "Belag mit gegrilltem Hähnchen"
      ],
      "it": [
        "Pizza al pollo",
        "Con pollo grigliato"
      ]
    },
    {
      "price": "295",
      "en": [
        "Quattro Formaggi",
        "Four cheese blend"
      ],
      "ar": [
        "كواترو فورماجي",
        "تشكيلة أربع أجبان"
      ],
      "fr": [
        "Quatre fromages",
        "Mélange de quatre fromages"
      ],
      "ru": [
        "Кватро формаджи",
        "Микс из четырёх сыров"
      ],
      "es": [
        "Quattro Formaggi",
        "Mezcla de cuatro quesos"
      ],
      "pl": [
        "Quattro Formaggi",
        "Mieszanka czterech serów"
      ],
      "de": [
        "Quattro Formaggi",
        "Mischung aus vier Käsesorten"
      ],
      "it": [
        "Quattro Formaggi",
        "Mix di quattro formaggi"
      ]
    },
    {
      "price": "395",
      "en": [
        "Smoked Salmon & Shrimp",
        "Smoked salmon, shrimp & cream"
      ],
      "ar": [
        "سلمون مدخن وجمبري",
        "سلمون مدخن وجمبري بصوص كريمي"
      ],
      "fr": [
        "Saumon fumé et crevettes",
        "Saumon fumé, crevettes et crème"
      ],
      "ru": [
        "Копчёный лосось и креветки",
        "Копчёный лосось, креветки и сливки"
      ],
      "es": [
        "Salmón ahumado y camarones",
        "Salmón ahumado, camarones y crema"
      ],
      "pl": [
        "Wędzony łosoś i krewetki",
        "Wędzony łosoś, krewetki i śmietana"
      ],
      "de": [
        "Räucherlachs & Garnelen",
        "Räucherlachs, Garnelen & Sahne"
      ],
      "it": [
        "Salmone affumicato e gamberi",
        "Salmone affumicato, gamberi e panna"
      ]
    }
  ],
  "desserts": [
    {
      "price": "160",
      "en": [
        "Ice Cream (3 Scoops)",
        "Three scoops, choice of flavors"
      ],
      "ar": [
        "آيس كريم (٣ كرات)",
        "ثلاث كرات آيس كريم بنكهات مختلفة"
      ],
      "fr": [
        "Glace (3 boules)",
        "Trois boules, choix de parfums"
      ],
      "ru": [
        "Мороженое (3 шарика)",
        "Три шарика на выбор"
      ],
      "es": [
        "Helado (3 bolas)",
        "Tres bolas, sabores a elegir"
      ],
      "pl": [
        "Lody (3 gałki)",
        "Trzy gałki do wyboru"
      ],
      "de": [
        "Eis (3 Kugeln)",
        "Drei Kugeln nach Wahl"
      ],
      "it": [
        "Gelato (3 palline)",
        "Tre palline, gusti a scelta"
      ]
    },
    {
      "price": "145",
      "en": [
        "Chocolate Cake",
        "Rich moist chocolate cake"
      ],
      "ar": [
        "كيكة شوكولاتة",
        "كيكة شوكولاتة طرية غنية"
      ],
      "fr": [
        "Gâteau au chocolat",
        "Gâteau au chocolat riche et moelleux"
      ],
      "ru": [
        "Шоколадный торт",
        "Насыщенный влажный шоколадный торт"
      ],
      "es": [
        "Pastel de chocolate",
        "Pastel de chocolate húmedo y rico"
      ],
      "pl": [
        "Ciasto czekoladowe",
        "Wilgotne bogate ciasto czekoladowe"
      ],
      "de": [
        "Schokoladenkuchen",
        "Saftiger reichhaltiger Schokoladenkuchen"
      ],
      "it": [
        "Torta al cioccolato",
        "Torta al cioccolato ricca e morbida"
      ]
    },
    {
      "price": "145",
      "en": [
        "Cheese Cake",
        "Creamy baked cheesecake"
      ],
      "ar": [
        "تشيز كيك",
        "تشيز كيك كريمي مخبوز"
      ],
      "fr": [
        "Cheesecake",
        "Cheesecake crémeux cuit au four"
      ],
      "ru": [
        "Чизкейк",
        "Кремовый запечённый чизкейк"
      ],
      "es": [
        "Cheesecake",
        "Tarta de queso cremosa horneada"
      ],
      "pl": [
        "Sernik",
        "Kremowy pieczony sernik"
      ],
      "de": [
        "Käsekuchen",
        "Cremiger gebackener Käsekuchen"
      ],
      "it": [
        "Cheesecake",
        "Cheesecake cremoso al forno"
      ]
    },
    {
      "price": "175",
      "en": [
        "Molten Cake",
        "Warm cake, melted chocolate center"
      ],
      "ar": [
        "مولتن كيك",
        "كيكة دافئة بقلب شوكولاتة ذائبة"
      ],
      "fr": [
        "Fondant au chocolat",
        "Gâteau chaud, cœur coulant au chocolat"
      ],
      "ru": [
        "Шоколадный фондан",
        "Тёплый кекс с жидким шоколадным центром"
      ],
      "es": [
        "Volcán de chocolate",
        "Pastel caliente con centro de chocolate fundido"
      ],
      "pl": [
        "Ciasto lava",
        "Ciepłe ciasto z płynnym środkiem czekoladowym"
      ],
      "de": [
        "Molten Cake",
        "Warmer Kuchen mit flüssigem Schokoladenkern"
      ],
      "it": [
        "Tortino al cioccolato",
        "Tortino caldo con cuore di cioccolato fuso"
      ]
    },
    {
      "price": "170",
      "en": [
        "Tiramisu",
        "Classic coffee-flavored Italian dessert"
      ],
      "ar": [
        "تيراميسو",
        "حلوى إيطالية كلاسيكية بنكهة القهوة"
      ],
      "fr": [
        "Tiramisu",
        "Dessert italien classique au café"
      ],
      "ru": [
        "Тирамису",
        "Классический итальянский десерт с кофе"
      ],
      "es": [
        "Tiramisú",
        "Postre italiano clásico con café"
      ],
      "pl": [
        "Tiramisu",
        "Klasyczny włoski deser kawowy"
      ],
      "de": [
        "Tiramisu",
        "Klassisches italienisches Kaffeedessert"
      ],
      "it": [
        "Tiramisù",
        "Classico dolce italiano al caffè"
      ]
    }
  ],
  "hot_drinks": [
    {
      "price": "55",
      "en": [
        "Tea",
        "Freshly brewed black tea"
      ],
      "ar": [
        "شاي",
        "شاي أسود طازج"
      ],
      "fr": [
        "Thé",
        "Thé noir fraîchement infusé"
      ],
      "ru": [
        "Чай",
        "Свежезаваренный чёрный чай"
      ],
      "es": [
        "Té",
        "Té negro recién preparado"
      ],
      "pl": [
        "Herbata",
        "Świeżo parzona czarna herbata"
      ],
      "de": [
        "Tee",
        "Frisch aufgebrühter schwarzer Tee"
      ],
      "it": [
        "Tè",
        "Tè nero appena preparato"
      ]
    },
    {
      "price": "65",
      "en": [
        "Turkish Coffee",
        "Traditional finely ground coffee"
      ],
      "ar": [
        "قهوة تركية",
        "قهوة تقليدية مطحونة ناعم"
      ],
      "fr": [
        "Café turc",
        "Café traditionnel finement moulu"
      ],
      "ru": [
        "Турецкий кофе",
        "Традиционный мелко смолотый кофе"
      ],
      "es": [
        "Café turco",
        "Café tradicional finamente molido"
      ],
      "pl": [
        "Kawa po turecku",
        "Tradycyjna drobno mielona kawa"
      ],
      "de": [
        "Türkischer Kaffee",
        "Traditioneller fein gemahlener Kaffee"
      ],
      "it": [
        "Caffè turco",
        "Caffè tradizionale macinato fine"
      ]
    },
    {
      "price": "75",
      "en": [
        "French Coffee",
        "Smooth filtered coffee"
      ],
      "ar": [
        "قهوة فرنسية",
        "قهوة مفلترة ناعمة"
      ],
      "fr": [
        "Café français",
        "Café filtre onctueux"
      ],
      "ru": [
        "Французский кофе",
        "Мягкий фильтрованный кофе"
      ],
      "es": [
        "Café francés",
        "Café filtrado suave"
      ],
      "pl": [
        "Kawa francuska",
        "Delikatna kawa przelewowa"
      ],
      "de": [
        "Französischer Kaffee",
        "Milder Filterkaffee"
      ],
      "it": [
        "Caffè francese",
        "Caffè filtrato delicato"
      ]
    },
    {
      "price": "85",
      "en": [
        "Flavored Coffee",
        "Coffee with your choice of flavor"
      ],
      "ar": [
        "قهوة بنكهات",
        "قهوة بالنكهة التي تختارها"
      ],
      "fr": [
        "Café aromatisé",
        "Café avec parfum au choix"
      ],
      "ru": [
        "Ароматизированный кофе",
        "Кофе на выбор с ароматом"
      ],
      "es": [
        "Café con sabor",
        "Café con el sabor que elijas"
      ],
      "pl": [
        "Kawa smakowa",
        "Kawa z wybranym smakiem"
      ],
      "de": [
        "Aromatisierter Kaffee",
        "Kaffee mit Aroma nach Wahl"
      ],
      "it": [
        "Caffè aromatizzato",
        "Caffè con gusto a scelta"
      ]
    },
    {
      "price": "95",
      "en": [
        "American Coffee",
        "Classic black filter coffee"
      ],
      "ar": [
        "قهوة أمريكية",
        "قهوة سوداء مفلترة كلاسيكية"
      ],
      "fr": [
        "Café américain",
        "Café filtre noir classique"
      ],
      "ru": [
        "Американо",
        "Классический чёрный фильтрованный кофе"
      ],
      "es": [
        "Café americano",
        "Café negro filtrado clásico"
      ],
      "pl": [
        "Kawa amerykańska",
        "Klasyczna czarna kawa przelewowa"
      ],
      "de": [
        "Amerikanischer Kaffee",
        "Klassischer schwarzer Filterkaffee"
      ],
      "it": [
        "Caffè americano",
        "Classico caffè filtro nero"
      ]
    },
    {
      "price": "79 / 99",
      "en": [
        "Espresso (Single / Double)",
        "Rich espresso shot"
      ],
      "ar": [
        "إسبريسو (سينجل / دبل)",
        "جرعة إسبريسو غنية"
      ],
      "fr": [
        "Espresso (simple / double)",
        "Espresso riche et corsé"
      ],
      "ru": [
        "Эспрессо (одинарный / двойной)",
        "Насыщенный эспрессо"
      ],
      "es": [
        "Espresso (simple / doble)",
        "Espresso intenso"
      ],
      "pl": [
        "Espresso (pojedyncze / podwójne)",
        "Bogate espresso"
      ],
      "de": [
        "Espresso (einfach / doppelt)",
        "Kräftiger Espresso"
      ],
      "it": [
        "Espresso (singolo / doppio)",
        "Espresso ricco e intenso"
      ]
    },
    {
      "price": "95",
      "en": [
        "Cappuccino",
        "Espresso with steamed milk foam"
      ],
      "ar": [
        "كابتشينو",
        "إسبريسو مع رغوة حليب مبخر"
      ],
      "fr": [
        "Cappuccino",
        "Espresso, mousse de lait chaud"
      ],
      "ru": [
        "Капучино",
        "Эспрессо со взбитой молочной пеной"
      ],
      "es": [
        "Capuchino",
        "Espresso con espuma de leche"
      ],
      "pl": [
        "Cappuccino",
        "Espresso ze spienionym mlekiem"
      ],
      "de": [
        "Cappuccino",
        "Espresso mit aufgeschäumter Milch"
      ],
      "it": [
        "Cappuccino",
        "Espresso con schiuma di latte"
      ]
    },
    {
      "price": "95",
      "en": [
        "Latte",
        "Espresso with steamed milk"
      ],
      "ar": [
        "لاتيه",
        "إسبريسو مع حليب مبخر"
      ],
      "fr": [
        "Latte",
        "Espresso, lait chaud"
      ],
      "ru": [
        "Латте",
        "Эспрессо с молоком"
      ],
      "es": [
        "Latte",
        "Espresso con leche vaporizada"
      ],
      "pl": [
        "Latte",
        "Espresso z mlekiem na parze"
      ],
      "de": [
        "Latte Macchiato",
        "Espresso mit heißer Milch"
      ],
      "it": [
        "Latte",
        "Espresso con latte caldo"
      ]
    },
    {
      "price": "95",
      "en": [
        "Mocha",
        "Espresso, chocolate & steamed milk"
      ],
      "ar": [
        "موكا",
        "إسبريسو وشوكولاتة وحليب مبخر"
      ],
      "fr": [
        "Moka",
        "Espresso, chocolat et lait chaud"
      ],
      "ru": [
        "Мокко",
        "Эспрессо, шоколад и молоко"
      ],
      "es": [
        "Moca",
        "Espresso, chocolate y leche vaporizada"
      ],
      "pl": [
        "Mocha",
        "Espresso, czekolada i spienione mleko"
      ],
      "de": [
        "Mocha",
        "Espresso, Schokolade & heiße Milch"
      ],
      "it": [
        "Mocha",
        "Espresso, cioccolato e latte caldo"
      ]
    },
    {
      "price": "85",
      "en": [
        "Mikato",
        "Local-style hot drink blend"
      ],
      "ar": [
        "ميكاتو",
        "مشروب ساخن بطريقة محلية"
      ],
      "fr": [
        "Mikato",
        "Boisson chaude de style local"
      ],
      "ru": [
        "Микато",
        "Горячий напиток в местном стиле"
      ],
      "es": [
        "Mikato",
        "Bebida caliente estilo local"
      ],
      "pl": [
        "Mikato",
        "Gorący napój w lokalnym stylu"
      ],
      "de": [
        "Mikato",
        "Heißgetränk nach lokaler Art"
      ],
      "it": [
        "Mikato",
        "Bevanda calda in stile locale"
      ]
    },
    {
      "price": "95",
      "en": [
        "Hot Chocolate",
        "Rich melted chocolate drink"
      ],
      "ar": [
        "شوكولاتة ساخنة",
        "مشروب شوكولاتة ذائبة غني"
      ],
      "fr": [
        "Chocolat chaud",
        "Boisson riche au chocolat fondu"
      ],
      "ru": [
        "Горячий шоколад",
        "Насыщенный напиток из растопленного шоколада"
      ],
      "es": [
        "Chocolate caliente",
        "Bebida rica de chocolate derretido"
      ],
      "pl": [
        "Gorąca czekolada",
        "Bogaty napój z roztopionej czekolady"
      ],
      "de": [
        "Heiße Schokolade",
        "Reichhaltiges geschmolzenes Schokoladengetränk"
      ],
      "it": [
        "Cioccolata calda",
        "Bevanda ricca di cioccolato fuso"
      ]
    },
    {
      "price": "80 / 90",
      "en": [
        "Nescafé / Milke",
        "Instant coffee, plain or with milk"
      ],
      "ar": [
        "نسكافيه / ميلك",
        "قهوة سريعة سادة أو بالحليب"
      ],
      "fr": [
        "Nescafé / lait",
        "Café instantané, nature ou au lait"
      ],
      "ru": [
        "Нескафе / с молоком",
        "Растворимый кофе, чистый или с молоком"
      ],
      "es": [
        "Nescafé / con leche",
        "Café instantáneo solo o con leche"
      ],
      "pl": [
        "Nescafé / z mlekiem",
        "Kawa rozpuszczalna, sama lub z mlekiem"
      ],
      "de": [
        "Nescafé / mit Milch",
        "Instantkaffee pur oder mit Milch"
      ],
      "it": [
        "Nescafé / con latte",
        "Caffè solubile, puro o con latte"
      ]
    },
    {
      "price": "75",
      "en": [
        "Herbal Tea",
        "Assorted soothing herbal infusion"
      ],
      "ar": [
        "أعشاب",
        "مشروب أعشاب مهدئ متنوع"
      ],
      "fr": [
        "Tisane",
        "Infusion apaisante aux herbes"
      ],
      "ru": [
        "Травяной чай",
        "Успокаивающий травяной настой"
      ],
      "es": [
        "Té de hierbas",
        "Infusión relajante de hierbas"
      ],
      "pl": [
        "Herbata ziołowa",
        "Kojący napar ziołowy"
      ],
      "de": [
        "Kräutertee",
        "Beruhigender Kräuteraufguss"
      ],
      "it": [
        "Tisana",
        "Infuso rilassante di erbe"
      ]
    }
  ],
  "soft_drinks": [
    {
      "price": "125",
      "en": [
        "Red Bull",
        "Energy drink"
      ],
      "ar": [
        "ريد بُل",
        "مشروب طاقة"
      ],
      "fr": [
        "Red Bull",
        "Boisson énergisante"
      ],
      "ru": [
        "Ред Булл",
        "Энергетический напиток"
      ],
      "es": [
        "Red Bull",
        "Bebida energética"
      ],
      "pl": [
        "Red Bull",
        "Napój energetyczny"
      ],
      "de": [
        "Red Bull",
        "Energy-Drink"
      ],
      "it": [
        "Red Bull",
        "Bevanda energetica"
      ]
    },
    {
      "price": "75",
      "en": [
        "Birell / Schweppes",
        "Malt or mixer soft drink"
      ],
      "ar": [
        "بيريل / شويبس",
        "مشروب شعير أو مشروب مزج غازي"
      ],
      "fr": [
        "Birell / Schweppes",
        "Boisson maltée ou mixer gazeux"
      ],
      "ru": [
        "Бирель / Швепс",
        "Солодовый или газированный напиток"
      ],
      "es": [
        "Birell / Schweppes",
        "Refresco de malta o mixer"
      ],
      "pl": [
        "Birell / Schweppes",
        "Napój słodowy lub mixer gazowany"
      ],
      "de": [
        "Birell / Schweppes",
        "Malzgetränk oder Mixer"
      ],
      "it": [
        "Birell / Schweppes",
        "Bevanda di malto o mixer gassato"
      ]
    },
    {
      "price": "75",
      "en": [
        "Soda / Tonic",
        "Sparkling soda or tonic water"
      ],
      "ar": [
        "صودا / تونيك",
        "صودا أو مياه تونيك فوارة"
      ],
      "fr": [
        "Soda / Tonic",
        "Eau gazeuse ou tonic"
      ],
      "ru": [
        "Содовая / Тоник",
        "Газированная вода или тоник"
      ],
      "es": [
        "Soda / Tónica",
        "Agua con gas o tónica"
      ],
      "pl": [
        "Soda / Tonik",
        "Woda gazowana lub tonik"
      ],
      "de": [
        "Soda / Tonic",
        "Sprudelwasser oder Tonic Water"
      ],
      "it": [
        "Soda / Tonica",
        "Acqua frizzante o tonica"
      ]
    },
    {
      "price": "65",
      "en": [
        "Cola",
        "Cola, Cola Light, Sprite or Fanta"
      ],
      "ar": [
        "كولا",
        "كولا، كولا لايت، سبرايت أو فانتا"
      ],
      "fr": [
        "Cola",
        "Cola, Cola light, Sprite ou Fanta"
      ],
      "ru": [
        "Кола",
        "Кола, Кола лайт, Спрайт или Фанта"
      ],
      "es": [
        "Cola",
        "Cola, Cola light, Sprite o Fanta"
      ],
      "pl": [
        "Cola",
        "Cola, Cola light, Sprite lub Fanta"
      ],
      "de": [
        "Cola",
        "Cola, Cola light, Sprite oder Fanta"
      ],
      "it": [
        "Cola",
        "Cola, Cola light, Sprite o Fanta"
      ]
    },
    {
      "price": "20",
      "en": [
        "Water",
        "Bottled still water"
      ],
      "ar": [
        "مياه",
        "مياه معدنية غير فوارة"
      ],
      "fr": [
        "Eau",
        "Eau plate en bouteille"
      ],
      "ru": [
        "Вода",
        "Негазированная вода в бутылке"
      ],
      "es": [
        "Agua",
        "Agua sin gas embotellada"
      ],
      "pl": [
        "Woda",
        "Woda niegazowana butelkowana"
      ],
      "de": [
        "Wasser",
        "Stilles Wasser in der Flasche"
      ],
      "it": [
        "Acqua",
        "Acqua naturale in bottiglia"
      ]
    }
  ],
  "iced_drinks": [
    {
      "price": "95",
      "en": [
        "Iced Coffee",
        "Chilled coffee over ice"
      ],
      "ar": [
        "قهوة مثلجة",
        "قهوة باردة مع ثلج"
      ],
      "fr": [
        "Café glacé",
        "Café froid sur glace"
      ],
      "ru": [
        "Айс кофе",
        "Холодный кофе со льдом"
      ],
      "es": [
        "Café helado",
        "Café frío con hielo"
      ],
      "pl": [
        "Kawa mrożona",
        "Zimna kawa z lodem"
      ],
      "de": [
        "Eiskaffee",
        "Kalter Kaffee auf Eis"
      ],
      "it": [
        "Caffè freddo",
        "Caffè freddo con ghiaccio"
      ]
    },
    {
      "price": "95",
      "en": [
        "Iced Latte",
        "Chilled espresso with milk over ice"
      ],
      "ar": [
        "لاتيه مثلج",
        "إسبريسو وحليب بارد مع ثلج"
      ],
      "fr": [
        "Latte glacé",
        "Espresso et lait froid sur glace"
      ],
      "ru": [
        "Айс латте",
        "Холодный эспрессо с молоком со льдом"
      ],
      "es": [
        "Latte helado",
        "Espresso y leche fría con hielo"
      ],
      "pl": [
        "Latte mrożone",
        "Zimne espresso z mlekiem i lodem"
      ],
      "de": [
        "Eis-Latte",
        "Kalter Espresso mit Milch auf Eis"
      ],
      "it": [
        "Latte freddo",
        "Espresso e latte freddo con ghiaccio"
      ]
    },
    {
      "price": "99",
      "en": [
        "Iced Mocha",
        "Chilled chocolate coffee over ice"
      ],
      "ar": [
        "موكا مثلجة",
        "قهوة شوكولاتة باردة مع ثلج"
      ],
      "fr": [
        "Moka glacé",
        "Café chocolat froid sur glace"
      ],
      "ru": [
        "Айс мокко",
        "Холодный шоколадный кофе со льдом"
      ],
      "es": [
        "Moca helado",
        "Café con chocolate frío y hielo"
      ],
      "pl": [
        "Mocha mrożona",
        "Zimna czekoladowa kawa z lodem"
      ],
      "de": [
        "Eis-Mocha",
        "Kalter Schokoladenkaffee auf Eis"
      ],
      "it": [
        "Mocha freddo",
        "Caffè al cioccolato freddo con ghiaccio"
      ]
    },
    {
      "price": "70",
      "en": [
        "Iced Tea",
        "Chilled sweetened tea over ice"
      ],
      "ar": [
        "شاي مثلج",
        "شاي بارد محلى مع ثلج"
      ],
      "fr": [
        "Thé glacé",
        "Thé sucré froid sur glace"
      ],
      "ru": [
        "Айс ти",
        "Холодный сладкий чай со льдом"
      ],
      "es": [
        "Té helado",
        "Té dulce frío con hielo"
      ],
      "pl": [
        "Mrożona herbata",
        "Zimna słodzona herbata z lodem"
      ],
      "de": [
        "Eistee",
        "Kalter gesüßter Tee auf Eis"
      ],
      "it": [
        "Tè freddo",
        "Tè dolce freddo con ghiaccio"
      ]
    }
  ],
  "milkshake": [
    {
      "price": "175",
      "en": [
        "Choose Your Shake",
        "Creamy milkshake, your choice of flavor"
      ],
      "ar": [
        "اختر ميلك شيك",
        "ميلك شيك كريمي بالنكهة التي تختارها"
      ],
      "fr": [
        "Choisissez votre milk-shake",
        "Milk-shake crémeux, parfum au choix"
      ],
      "ru": [
        "Выбери свой шейк",
        "Кремовый молочный коктейль на выбор"
      ],
      "es": [
        "Elige tu batido",
        "Batido cremoso, sabor a elegir"
      ],
      "pl": [
        "Wybierz swój shake",
        "Kremowy koktajl mleczny, smak do wyboru"
      ],
      "de": [
        "Wähle deinen Shake",
        "Cremiger Milchshake nach Wahl"
      ],
      "it": [
        "Scegli il tuo frappè",
        "Frappè cremoso, gusto a scelta"
      ]
    },
    {
      "price": "195",
      "en": [
        "Oreo / Snickers / KitKat",
        "Premium candy-flavored milkshake"
      ],
      "ar": [
        "أوريو / سنيكرز / كيت كات",
        "ميلك شيك فاخر بنكهة الحلوى"
      ],
      "fr": [
        "Oreo / Snickers / KitKat",
        "Milk-shake premium aux friandises"
      ],
      "ru": [
        "Орео / Сникерс / Кит Кат",
        "Премиальный молочный коктейль со вкусом сладостей"
      ],
      "es": [
        "Oreo / Snickers / KitKat",
        "Batido premium sabor a dulces"
      ],
      "pl": [
        "Oreo / Snickers / KitKat",
        "Premium koktajl mleczny o smaku słodyczy"
      ],
      "de": [
        "Oreo / Snickers / KitKat",
        "Premium-Milchshake mit Süßigkeitengeschmack"
      ],
      "it": [
        "Oreo / Snickers / KitKat",
        "Frappè premium al gusto di dolciumi"
      ]
    }
  ],
  "fresh_juice": [
    {
      "price": "155",
      "en": [
        "Banana Milk",
        "Fresh banana blended with milk"
      ],
      "ar": [
        "موز بالحليب",
        "موز طازج مخفوق بالحليب"
      ],
      "fr": [
        "Banane au lait",
        "Banane fraîche mixée au lait"
      ],
      "ru": [
        "Банан с молоком",
        "Свежий банан с молоком"
      ],
      "es": [
        "Plátano con leche",
        "Plátano fresco licuado con leche"
      ],
      "pl": [
        "Banan z mlekiem",
        "Świeży banan zmiksowany z mlekiem"
      ],
      "de": [
        "Banane mit Milch",
        "Frische Banane mit Milch püriert"
      ],
      "it": [
        "Banana e latte",
        "Banana fresca frullata con latte"
      ]
    },
    {
      "price": "145",
      "en": [
        "Mango / Guava",
        "Fresh mango or guava juice"
      ],
      "ar": [
        "مانجو / جوافة",
        "عصير مانجو أو جوافة طازج"
      ],
      "fr": [
        "Mangue / Goyave",
        "Jus frais de mangue ou goyave"
      ],
      "ru": [
        "Манго / Гуава",
        "Свежий сок манго или гуавы"
      ],
      "es": [
        "Mango / Guayaba",
        "Jugo fresco de mango o guayaba"
      ],
      "pl": [
        "Mango / Guawa",
        "Świeży sok z mango lub guawy"
      ],
      "de": [
        "Mango / Guave",
        "Frischer Mango- oder Guavensaft"
      ],
      "it": [
        "Mango / Guava",
        "Succo fresco di mango o guava"
      ]
    },
    {
      "price": "155",
      "en": [
        "Kiwi",
        "Fresh kiwi juice"
      ],
      "ar": [
        "كيوي",
        "عصير كيوي طازج"
      ],
      "fr": [
        "Kiwi",
        "Jus de kiwi frais"
      ],
      "ru": [
        "Киви",
        "Свежий сок киви"
      ],
      "es": [
        "Kiwi",
        "Jugo fresco de kiwi"
      ],
      "pl": [
        "Kiwi",
        "Świeży sok z kiwi"
      ],
      "de": [
        "Kiwi",
        "Frischer Kiwisaft"
      ],
      "it": [
        "Kiwi",
        "Succo fresco di kiwi"
      ]
    },
    {
      "price": "145",
      "en": [
        "Strawberry",
        "Fresh strawberry juice"
      ],
      "ar": [
        "فراولة",
        "عصير فراولة طازج"
      ],
      "fr": [
        "Fraise",
        "Jus de fraise frais"
      ],
      "ru": [
        "Клубника",
        "Свежий клубничный сок"
      ],
      "es": [
        "Fresa",
        "Jugo fresco de fresa"
      ],
      "pl": [
        "Truskawka",
        "Świeży sok truskawkowy"
      ],
      "de": [
        "Erdbeere",
        "Frischer Erdbeersaft"
      ],
      "it": [
        "Fragola",
        "Succo fresco di fragola"
      ]
    },
    {
      "price": "140",
      "en": [
        "Lemon / Mint",
        "Fresh lemon mint juice"
      ],
      "ar": [
        "ليمون / نعناع",
        "عصير ليمون بالنعناع طازج"
      ],
      "fr": [
        "Citron / Menthe",
        "Jus frais de citron menthe"
      ],
      "ru": [
        "Лимон / Мята",
        "Свежий сок лимона с мятой"
      ],
      "es": [
        "Limón / Menta",
        "Jugo fresco de limón con menta"
      ],
      "pl": [
        "Cytryna / Mięta",
        "Świeży sok z cytryny i mięty"
      ],
      "de": [
        "Zitrone / Minze",
        "Frischer Zitronen-Minz-Saft"
      ],
      "it": [
        "Limone / Menta",
        "Succo fresco di limone e menta"
      ]
    },
    {
      "price": "125",
      "en": [
        "Orange",
        "Fresh squeezed orange juice"
      ],
      "ar": [
        "برتقال",
        "عصير برتقال طازج معصور"
      ],
      "fr": [
        "Orange",
        "Jus d'orange fraîchement pressé"
      ],
      "ru": [
        "Апельсин",
        "Свежевыжатый апельсиновый сок"
      ],
      "es": [
        "Naranja",
        "Jugo de naranja recién exprimido"
      ],
      "pl": [
        "Pomarańcza",
        "Świeżo wyciśnięty sok pomarańczowy"
      ],
      "de": [
        "Orange",
        "Frisch gepresster Orangensaft"
      ],
      "it": [
        "Arancia",
        "Succo d'arancia appena spremuto"
      ]
    },
    {
      "price": "165",
      "en": [
        "Mix Mango Kiwi",
        "Fresh mango and kiwi blend"
      ],
      "ar": [
        "مكس مانجو كيوي",
        "خليط مانجو وكيوي طازج"
      ],
      "fr": [
        "Mix mangue kiwi",
        "Mélange frais de mangue et kiwi"
      ],
      "ru": [
        "Манго-киви микс",
        "Свежий микс манго и киви"
      ],
      "es": [
        "Mix mango kiwi",
        "Mezcla fresca de mango y kiwi"
      ],
      "pl": [
        "Mix mango kiwi",
        "Świeży mix mango i kiwi"
      ],
      "de": [
        "Mango-Kiwi-Mix",
        "Frischer Mix aus Mango & Kiwi"
      ],
      "it": [
        "Mix mango kiwi",
        "Frullato fresco di mango e kiwi"
      ]
    },
    {
      "price": "170",
      "en": [
        "Avocado",
        "Fresh creamy avocado juice"
      ],
      "ar": [
        "أفوكادو",
        "عصير أفوكادو كريمي طازج"
      ],
      "fr": [
        "Avocat",
        "Jus frais et crémeux d'avocat"
      ],
      "ru": [
        "Авокадо",
        "Свежий кремовый сок авокадо"
      ],
      "es": [
        "Aguacate",
        "Jugo fresco y cremoso de aguacate"
      ],
      "pl": [
        "Awokado",
        "Świeży kremowy sok z awokado"
      ],
      "de": [
        "Avocado",
        "Frischer cremiger Avocadosaft"
      ],
      "it": [
        "Avocado",
        "Succo fresco e cremoso di avocado"
      ]
    }
  ],
  "fresh_cocktails": [
    {
      "price": "185",
      "en": [
        "Florida",
        "Mango, strawberry & guava"
      ],
      "ar": [
        "فلوريدا",
        "مانجو وفراولة وجوافة"
      ],
      "fr": [
        "Florida",
        "Mangue, fraise et goyave"
      ],
      "ru": [
        "Флорида",
        "Манго, клубника и гуава"
      ],
      "es": [
        "Florida",
        "Mango, fresa y guayaba"
      ],
      "pl": [
        "Floryda",
        "Mango, truskawka i guawa"
      ],
      "de": [
        "Florida",
        "Mango, Erdbeere & Guave"
      ],
      "it": [
        "Florida",
        "Mango, fragola e guava"
      ]
    },
    {
      "price": "185",
      "en": [
        "Strawberry Cooler",
        "Strawberry, mango & sprite"
      ],
      "ar": [
        "ستروبيري كولر",
        "فراولة ومانجو وسبرايت"
      ],
      "fr": [
        "Strawberry Cooler",
        "Fraise, mangue et sprite"
      ],
      "ru": [
        "Клубничный кулер",
        "Клубника, манго и спрайт"
      ],
      "es": [
        "Strawberry Cooler",
        "Fresa, mango y sprite"
      ],
      "pl": [
        "Strawberry Cooler",
        "Truskawka, mango i sprite"
      ],
      "de": [
        "Strawberry Cooler",
        "Erdbeere, Mango & Sprite"
      ],
      "it": [
        "Strawberry Cooler",
        "Fragola, mango e sprite"
      ]
    },
    {
      "price": "185",
      "en": [
        "Pina Banana",
        "Pineapple, coconut & banana"
      ],
      "ar": [
        "بينا بانانا",
        "أناناس وجوز هند وموز"
      ],
      "fr": [
        "Pina Banana",
        "Ananas, noix de coco et banane"
      ],
      "ru": [
        "Пина Банана",
        "Ананас, кокос и банан"
      ],
      "es": [
        "Piña Banana",
        "Piña, coco y plátano"
      ],
      "pl": [
        "Pina Banana",
        "Ananas, kokos i banan"
      ],
      "de": [
        "Pina Banana",
        "Ananas, Kokos & Banane"
      ],
      "it": [
        "Pina Banana",
        "Ananas, cocco e banana"
      ]
    },
    {
      "price": "185",
      "en": [
        "Chiquita",
        "Strawberry, banana, apple & orange"
      ],
      "ar": [
        "تشيكيتا",
        "فراولة وموز وتفاح وبرتقال"
      ],
      "fr": [
        "Chiquita",
        "Fraise, banane, pomme et orange"
      ],
      "ru": [
        "Чикита",
        "Клубника, банан, яблоко и апельсин"
      ],
      "es": [
        "Chiquita",
        "Fresa, plátano, manzana y naranja"
      ],
      "pl": [
        "Chiquita",
        "Truskawka, banan, jabłko i pomarańcza"
      ],
      "de": [
        "Chiquita",
        "Erdbeere, Banane, Apfel & Orange"
      ],
      "it": [
        "Chiquita",
        "Fragola, banana, mela e arancia"
      ]
    },
    {
      "price": "185",
      "en": [
        "Chiquita Mango",
        "Mango, apple & orange"
      ],
      "ar": [
        "تشيكيتا مانجو",
        "مانجو وتفاح وبرتقال"
      ],
      "fr": [
        "Chiquita Mangue",
        "Mangue, pomme et orange"
      ],
      "ru": [
        "Чикита Манго",
        "Манго, яблоко и апельсин"
      ],
      "es": [
        "Chiquita Mango",
        "Mango, manzana y naranja"
      ],
      "pl": [
        "Chiquita Mango",
        "Mango, jabłko i pomarańcza"
      ],
      "de": [
        "Chiquita Mango",
        "Mango, Apfel & Orange"
      ],
      "it": [
        "Chiquita Mango",
        "Mango, mela e arancia"
      ]
    },
    {
      "price": "185",
      "en": [
        "Jungle Ruble",
        "Strawberry, orange, mango & lemon"
      ],
      "ar": [
        "جانجل روبل",
        "فراولة وبرتقال ومانجو وليمون"
      ],
      "fr": [
        "Jungle Ruble",
        "Fraise, orange, mangue et citron"
      ],
      "ru": [
        "Джангл Рубл",
        "Клубника, апельсин, манго и лимон"
      ],
      "es": [
        "Jungle Ruble",
        "Fresa, naranja, mango y limón"
      ],
      "pl": [
        "Jungle Ruble",
        "Truskawka, pomarańcza, mango i cytryna"
      ],
      "de": [
        "Jungle Ruble",
        "Erdbeere, Orange, Mango & Zitrone"
      ],
      "it": [
        "Jungle Ruble",
        "Fragola, arancia, mango e limone"
      ]
    },
    {
      "price": "185",
      "en": [
        "Virgin Mojito",
        "Mint, lemon & sprite"
      ],
      "ar": [
        "موهيتو خالي من الكحول",
        "نعناع وليمون وسبرايت"
      ],
      "fr": [
        "Mojito sans alcool",
        "Menthe, citron et sprite"
      ],
      "ru": [
        "Безалкогольный мохито",
        "Мята, лимон и спрайт"
      ],
      "es": [
        "Mojito sin alcohol",
        "Menta, limón y sprite"
      ],
      "pl": [
        "Mojito bezalkoholowe",
        "Mięta, cytryna i sprite"
      ],
      "de": [
        "Virgin Mojito",
        "Minze, Zitrone & Sprite"
      ],
      "it": [
        "Virgin Mojito",
        "Menta, limone e sprite"
      ]
    },
    {
      "price": "185",
      "en": [
        "Cinderella",
        "Pineapple, rose water & syrup"
      ],
      "ar": [
        "سندريلا",
        "أناناس وماء ورد وشراب"
      ],
      "fr": [
        "Cendrillon",
        "Ananas, eau de rose et sirop"
      ],
      "ru": [
        "Золушка",
        "Ананас, розовая вода и сироп"
      ],
      "es": [
        "Cenicienta",
        "Piña, agua de rosas y jarabe"
      ],
      "pl": [
        "Kopciuszek",
        "Ananas, woda różana i syrop"
      ],
      "de": [
        "Cinderella",
        "Ananas, Rosenwasser & Sirup"
      ],
      "it": [
        "Cenerentola",
        "Ananas, acqua di rose e sciroppo"
      ]
    }
  ],
  "mocktails": [
    {
      "price": "185",
      "en": [
        "Sun Shine",
        "Tropical fruit mocktail"
      ],
      "ar": [
        "صن شاين",
        "موكتيل فواكه استوائية"
      ],
      "fr": [
        "Sun Shine",
        "Mocktail de fruits tropicaux"
      ],
      "ru": [
        "Сан Шайн",
        "Тропический безалкогольный коктейль"
      ],
      "es": [
        "Sun Shine",
        "Mocktail de frutas tropicales"
      ],
      "pl": [
        "Sun Shine",
        "Mocktail z owoców tropikalnych"
      ],
      "de": [
        "Sun Shine",
        "Tropischer alkoholfreier Cocktail"
      ],
      "it": [
        "Sun Shine",
        "Mocktail di frutta tropicale"
      ]
    },
    {
      "price": "185",
      "en": [
        "V. Pina Colada",
        "Pineapple & coconut, non-alcoholic"
      ],
      "ar": [
        "بينا كولادا خالي من الكحول",
        "أناناس وجوز هند بدون كحول"
      ],
      "fr": [
        "Pina Colada sans alcool",
        "Ananas et noix de coco sans alcool"
      ],
      "ru": [
        "Безалкогольная Пина Колада",
        "Ананас и кокос без алкоголя"
      ],
      "es": [
        "Piña Colada sin alcohol",
        "Piña y coco sin alcohol"
      ],
      "pl": [
        "Pina Colada bezalkoholowa",
        "Ananas i kokos bez alkoholu"
      ],
      "de": [
        "Virgin Pina Colada",
        "Ananas & Kokos, alkoholfrei"
      ],
      "it": [
        "Pina Colada analcolica",
        "Ananas e cocco senza alcol"
      ]
    },
    {
      "price": "185",
      "en": [
        "Blue Hawaiian",
        "Pineapple & blue curaçao flavor mocktail"
      ],
      "ar": [
        "بلو هاواين",
        "موكتيل أناناس بنكهة بلو كوراساو"
      ],
      "fr": [
        "Blue Hawaiian",
        "Mocktail ananas, saveur curaçao bleu"
      ],
      "ru": [
        "Блю Гавайан",
        "Мокктейль с ананасом и вкусом синего кюрасао"
      ],
      "es": [
        "Blue Hawaiian",
        "Mocktail de piña y sabor curazao azul"
      ],
      "pl": [
        "Blue Hawaiian",
        "Mocktail ananasowy o smaku blue curaçao"
      ],
      "de": [
        "Blue Hawaiian",
        "Mocktail mit Ananas & Blue-Curaçao-Aroma"
      ],
      "it": [
        "Blue Hawaiian",
        "Mocktail all'ananas con aroma curaçao blu"
      ]
    },
    {
      "price": "185",
      "en": [
        "V. Mai Tai",
        "Tropical fruit blend, non-alcoholic"
      ],
      "ar": [
        "ماي تاي خالي من الكحول",
        "خليط فواكه استوائية بدون كحول"
      ],
      "fr": [
        "Mai Tai sans alcool",
        "Mélange de fruits tropicaux sans alcool"
      ],
      "ru": [
        "Безалкогольный Май Тай",
        "Тропический фруктовый микс без алкоголя"
      ],
      "es": [
        "Mai Tai sin alcohol",
        "Mezcla de frutas tropicales sin alcohol"
      ],
      "pl": [
        "Mai Tai bezalkoholowe",
        "Mieszanka tropikalnych owoców bez alkoholu"
      ],
      "de": [
        "Virgin Mai Tai",
        "Tropischer Fruchtmix, alkoholfrei"
      ],
      "it": [
        "Mai Tai analcolico",
        "Mix di frutta tropicale senza alcol"
      ]
    },
    {
      "price": "185",
      "en": [
        "Summer Cooler",
        "Refreshing mixed fruit mocktail"
      ],
      "ar": [
        "سمر كولر",
        "موكتيل فواكه منعش"
      ],
      "fr": [
        "Summer Cooler",
        "Mocktail rafraîchissant aux fruits"
      ],
      "ru": [
        "Летний кулер",
        "Освежающий фруктовый безалкогольный коктейль"
      ],
      "es": [
        "Summer Cooler",
        "Mocktail refrescante de frutas mixtas"
      ],
      "pl": [
        "Summer Cooler",
        "Orzeźwiający owocowy mocktail"
      ],
      "de": [
        "Summer Cooler",
        "Erfrischender Frucht-Mocktail"
      ],
      "it": [
        "Summer Cooler",
        "Mocktail rinfrescante alla frutta mista"
      ]
    },
    {
      "price": "185",
      "en": [
        "Strawberry Fizz",
        "Strawberry with sparkling soda"
      ],
      "ar": [
        "ستروبيري فيز",
        "فراولة مع صودا فوارة"
      ],
      "fr": [
        "Strawberry Fizz",
        "Fraise et soda pétillant"
      ],
      "ru": [
        "Клубничный Физ",
        "Клубника с газировкой"
      ],
      "es": [
        "Strawberry Fizz",
        "Fresa con soda burbujeante"
      ],
      "pl": [
        "Strawberry Fizz",
        "Truskawka z gazowaną wodą sodową"
      ],
      "de": [
        "Strawberry Fizz",
        "Erdbeere mit Sodawasser"
      ],
      "it": [
        "Strawberry Fizz",
        "Fragola con soda frizzante"
      ]
    },
    {
      "price": "260",
      "en": [
        "Mojito Red Bull",
        "Mint, lime & Red Bull, non-alcoholic"
      ],
      "ar": [
        "موهيتو ريد بُل",
        "نعناع وليمون وريد بُل بدون كحول"
      ],
      "fr": [
        "Mojito Red Bull",
        "Menthe, citron vert et Red Bull, sans alcool"
      ],
      "ru": [
        "Мохито Ред Булл",
        "Мята, лайм и Ред Булл без алкоголя"
      ],
      "es": [
        "Mojito Red Bull",
        "Menta, lima y Red Bull, sin alcohol"
      ],
      "pl": [
        "Mojito Red Bull",
        "Mięta, limonka i Red Bull, bezalkoholowe"
      ],
      "de": [
        "Mojito Red Bull",
        "Minze, Limette & Red Bull, alkoholfrei"
      ],
      "it": [
        "Mojito Red Bull",
        "Menta, lime e Red Bull, analcolico"
      ]
    }
  ],
  "cocktails": [
    {
      "price": "195",
      "en": [
        "Gin Fizz",
        "Gin, lemon & soda"
      ],
      "ar": [
        "جين فيز",
        "جين وليمون وصودا"
      ],
      "fr": [
        "Gin Fizz",
        "Gin, citron et soda"
      ],
      "ru": [
        "Джин Физ",
        "Джин, лимон и сода"
      ],
      "es": [
        "Gin Fizz",
        "Ginebra, limón y soda"
      ],
      "pl": [
        "Gin Fizz",
        "Gin, cytryna i soda"
      ],
      "de": [
        "Gin Fizz",
        "Gin, Zitrone & Soda"
      ],
      "it": [
        "Gin Fizz",
        "Gin, limone e soda"
      ]
    },
    {
      "price": "195",
      "en": [
        "Cuba Libre",
        "Rum, cola & lime"
      ],
      "ar": [
        "كوبا ليبرا",
        "رم وكولا وليمون"
      ],
      "fr": [
        "Cuba Libre",
        "Rhum, cola et citron vert"
      ],
      "ru": [
        "Куба Либре",
        "Ром, кола и лайм"
      ],
      "es": [
        "Cuba Libre",
        "Ron, cola y limón"
      ],
      "pl": [
        "Cuba Libre",
        "Rum, cola i limonka"
      ],
      "de": [
        "Cuba Libre",
        "Rum, Cola & Limette"
      ],
      "it": [
        "Cuba Libre",
        "Rum, cola e lime"
      ]
    },
    {
      "price": "220",
      "en": [
        "Strawberry Daiquiri",
        "Rum, strawberry & lime"
      ],
      "ar": [
        "دايكيري فراولة",
        "رم وفراولة وليمون"
      ],
      "fr": [
        "Daïquiri fraise",
        "Rhum, fraise et citron vert"
      ],
      "ru": [
        "Клубничный Дайкири",
        "Ром, клубника и лайм"
      ],
      "es": [
        "Daiquiri de fresa",
        "Ron, fresa y limón"
      ],
      "pl": [
        "Daiquiri truskawkowe",
        "Rum, truskawka i limonka"
      ],
      "de": [
        "Erdbeer-Daiquiri",
        "Rum, Erdbeere & Limette"
      ],
      "it": [
        "Daiquiri alla fragola",
        "Rum, fragola e lime"
      ]
    },
    {
      "price": "220",
      "en": [
        "Woohoo",
        "Vodka with fresh strawberry"
      ],
      "ar": [
        " وو هو",
        "فودكا مع فراولة طازجة"
      ],
      "fr": [
        "Vodka fraise",
        "Vodka et fraise fraîche"
      ],
      "ru": [
        "Водка с клубникой",
        "Водка со свежей клубникой"
      ],
      "es": [
        "Vodka con fresa",
        "Vodka con fresa fresca"
      ],
      "pl": [
        "Wódka z truskawką",
        "Wódka ze świeżą truskawką"
      ],
      "de": [
        "Vodka Erdbeere",
        "Vodka mit frischer Erdbeere"
      ],
      "it": [
        "Vodka alla fragola",
        "Vodka con fragola fresca"
      ]
    },
    {
      "price": "220",
      "en": [
        "Margarita",
        "Tequila, triple sec & lime"
      ],
      "ar": [
        "مارجريتا",
        "تيكيلا وتريبل سيك وليمون"
      ],
      "fr": [
        "Margarita",
        "Tequila, triple sec et citron vert"
      ],
      "ru": [
        "Маргарита",
        "Текила, трипл-сек и лайм"
      ],
      "es": [
        "Margarita",
        "Tequila, triple sec y limón"
      ],
      "pl": [
        "Margarita",
        "Tequila, triple sec i limonka"
      ],
      "de": [
        "Margarita",
        "Tequila, Triple Sec & Limette"
      ],
      "it": [
        "Margarita",
        "Tequila, triple sec e lime"
      ]
    },
    {
      "price": "220",
      "en": [
        "Mojito",
        "Rum, mint & lime — classic, mango or strawberry"
      ],
      "ar": [
        "موهيتو",
        "رم ونعناع وليمون — كلاسيك أو مانجو أو فراولة"
      ],
      "fr": [
        "Mojito",
        "Rhum, menthe et citron vert — classique, mangue ou fraise"
      ],
      "ru": [
        "Мохито",
        "Ром, мята и лайм — классический, манго или клубника"
      ],
      "es": [
        "Mojito",
        "Ron, menta y limón — clásico, mango o fresa"
      ],
      "pl": [
        "Mojito",
        "Rum, mięta i limonka — klasyczne, mango lub truskawka"
      ],
      "de": [
        "Mojito",
        "Rum, Minze & Limette — klassisch, Mango oder Erdbeere"
      ],
      "it": [
        "Mojito",
        "Rum, menta e lime — classico, mango o fragola"
      ]
    },
    {
      "price": "225",
      "en": [
        "Sex on the Beach",
        "Vodka, peach & orange juice"
      ],
      "ar": [
        "سكس أون ذا بيتش",
        "فودكا وخوخ وعصير برتقال"
      ],
      "fr": [
        "Sex on the Beach",
        "Vodka, pêche et jus d'orange"
      ],
      "ru": [
        "Секс на пляже",
        "Водка, персик и апельсиновый сок"
      ],
      "es": [
        "Sex on the Beach",
        "Vodka, durazno y jugo de naranja"
      ],
      "pl": [
        "Sex on the Beach",
        "Wódka, brzoskwinia i sok pomarańczowy"
      ],
      "de": [
        "Sex on the Beach",
        "Vodka, Pfirsich & Orangensaft"
      ],
      "it": [
        "Sex on the Beach",
        "Vodka, pesca e succo d'arancia"
      ]
    },
    {
      "price": "225",
      "en": [
        "Tequila Sunrise",
        "Tequila, orange juice & grenadine"
      ],
      "ar": [
        "تكيلا صن رايز",
        "تيكيلا وعصير برتقال وجرينادين"
      ],
      "fr": [
        "Tequila Sunrise",
        "Tequila, jus d'orange et grenadine"
      ],
      "ru": [
        "Текила Санрайз",
        "Текила, апельсиновый сок и гренадин"
      ],
      "es": [
        "Tequila Sunrise",
        "Tequila, jugo de naranja y granadina"
      ],
      "pl": [
        "Tequila Sunrise",
        "Tequila, sok pomarańczowy i grenadyna"
      ],
      "de": [
        "Tequila Sunrise",
        "Tequila, Orangensaft & Grenadine"
      ],
      "it": [
        "Tequila Sunrise",
        "Tequila, succo d'arancia e granatina"
      ]
    },
    {
      "price": "235",
      "en": [
        "Pina Colada",
        "Rum, pineapple & coconut cream"
      ],
      "ar": [
        "بينا كولادا",
        "رم وأناناس وكريمة جوز الهند"
      ],
      "fr": [
        "Pina Colada",
        "Rhum, ananas et crème de coco"
      ],
      "ru": [
        "Пина Колада",
        "Ром, ананас и кокосовые сливки"
      ],
      "es": [
        "Piña Colada",
        "Ron, piña y crema de coco"
      ],
      "pl": [
        "Pina Colada",
        "Rum, ananas i krem kokosowy"
      ],
      "de": [
        "Pina Colada",
        "Rum, Ananas & Kokoscreme"
      ],
      "it": [
        "Pina Colada",
        "Rum, ananas e crema di cocco"
      ]
    },
    {
      "price": "230",
      "en": [
        "La Bomba",
        "House special mixed spirits cocktail"
      ],
      "ar": [
        "لا بومبا",
        "كوكتيل خاص بالمنزل مخلوط بمشروبات متعددة"
      ],
      "fr": [
        "La Bomba",
        "Cocktail spécial maison, alcools mélangés"
      ],
      "ru": [
        "Ла Бомба",
        "Фирменный коктейль из разных спиртных напитков"
      ],
      "es": [
        "La Bomba",
        "Cóctel especial de la casa, licores mixtos"
      ],
      "pl": [
        "La Bomba",
        "Specjalny koktajl domowy z różnych alkoholi"
      ],
      "de": [
        "La Bomba",
        "Hausspezialität mit gemischten Spirituosen"
      ],
      "it": [
        "La Bomba",
        "Cocktail speciale della casa con liquori misti"
      ]
    },
    {
      "price": "230",
      "en": [
        "Irish Coffee",
        "Coffee, Irish whiskey & cream"
      ],
      "ar": [
        "قهوة إيرلندية",
        "قهوة وويسكي إيرلندي وكريمة"
      ],
      "fr": [
        "Café irlandais",
        "Café, whisky irlandais et crème"
      ],
      "ru": [
        "Айриш кофе",
        "Кофе, ирландский виски и сливки"
      ],
      "es": [
        "Café irlandés",
        "Café, whisky irlandés y crema"
      ],
      "pl": [
        "Kawa po irlandzku",
        "Kawa, irlandzka whisky i śmietana"
      ],
      "de": [
        "Irish Coffee",
        "Kaffee, irischer Whiskey & Sahne"
      ],
      "it": [
        "Caffè irlandese",
        "Caffè, whisky irlandese e panna"
      ]
    },
    {
      "price": "250",
      "en": [
        "Long Island",
        "Multi-spirit cocktail with cola"
      ],
      "ar": [
        "لونج آيلاند",
        "كوكتيل بمشروبات متعددة مع كولا"
      ],
      "fr": [
        "Long Island",
        "Cocktail multi-alcools avec cola"
      ],
      "ru": [
        "Лонг Айленд",
        "Коктейль из нескольких видов алкоголя с колой"
      ],
      "es": [
        "Long Island",
        "Cóctel multi-licor con cola"
      ],
      "pl": [
        "Long Island",
        "Koktajl z kilku alkoholi z colą"
      ],
      "de": [
        "Long Island",
        "Cocktail mit mehreren Spirituosen & Cola"
      ],
      "it": [
        "Long Island",
        "Cocktail multi-liquore con cola"
      ]
    },
    {
      "price": "295",
      "en": [
        "Freedom Cocktail",
        "House signature cocktail"
      ],
      "ar": [
        "كوكتيل فريدوم",
        "كوكتيل مميز خاص بالمكان"
      ],
      "fr": [
        "Cocktail Freedom",
        "Cocktail signature de la maison"
      ],
      "ru": [
        "Коктейль Freedom",
        "Фирменный коктейль заведения"
      ],
      "es": [
        "Cóctel Freedom",
        "Cóctel insignia de la casa"
      ],
      "pl": [
        "Koktajl Freedom",
        "Autorski koktajl lokalu"
      ],
      "de": [
        "Freedom Cocktail",
        "Hausgemachter Signature-Cocktail"
      ],
      "it": [
        "Cocktail Freedom",
        "Cocktail signature della casa"
      ]
    }
  ],
  "shoots": [
    {
      "price": "125 / 750",
      "en": [
        "Local Shots",
        "Vodka, Gin, Tequila, Ouzo, Rum, Whisky or Brandy — single / bottle"
      ],
      "ar": [
        "شوتس محلي",
        "فودكا، جين، تيكيلا، أوزو، رم، ويسكي أو براندي — شوت / زجاجة"
      ],
      "fr": [
        "Shots locaux",
        "Vodka, gin, tequila, ouzo, rhum, whisky ou brandy — shot / bouteille"
      ],
      "ru": [
        "Местные шоты",
        "Водка, джин, текила, узо, ром, виски или бренди — шот / бутылка"
      ],
      "es": [
        "Shots locales",
        "Vodka, gin, tequila, ouzo, ron, whisky o brandy — shot / botella"
      ],
      "pl": [
        "Lokalne shoty",
        "Wódka, gin, tequila, ouzo, rum, whisky lub brandy — shot / butelka"
      ],
      "de": [
        "Lokale Shots",
        "Vodka, Gin, Tequila, Ouzo, Rum, Whisky oder Brandy — Shot / Flasche"
      ],
      "it": [
        "Shot locali",
        "Vodka, gin, tequila, ouzo, rum, whisky o brandy — shot / bottiglia"
      ]
    },
    {
      "price": "950",
      "en": [
        "Premium Shots",
        "Premium Vodka, White Rum, Tequila or Whiskey"
      ],
      "ar": [
        "شوتس فاخر",
        "فودكا، رم أبيض، تيكيلا أو ويسكي فاخر"
      ],
      "fr": [
        "Shots premium",
        "Vodka premium, rhum blanc, tequila ou whisky"
      ],
      "ru": [
        "Премиум шоты",
        "Премиальная водка, белый ром, текила или виски"
      ],
      "es": [
        "Shots premium",
        "Vodka, ron blanco, tequila o whisky premium"
      ],
      "pl": [
        "Shoty premium",
        "Premium wódka, biały rum, tequila lub whisky"
      ],
      "de": [
        "Premium Shots",
        "Premium Vodka, weißer Rum, Tequila oder Whiskey"
      ],
      "it": [
        "Shot premium",
        "Vodka, rum bianco, tequila o whisky premium"
      ]
    }
  ],
  "wine": [
    {
      "price": "145 / 590",
      "en": [
        "Omar Khayam",
        "Egyptian red or white — quarter / bottle"
      ],
      "ar": [
        "عمر الخيام",
        "نبيذ مصري أحمر أو أبيض — ربع / زجاجة"
      ],
      "fr": [
        "Omar Khayam",
        "Vin égyptien rouge ou blanc — quart / bouteille"
      ],
      "ru": [
        "Омар Хайям",
        "Египетское красное или белое вино — четверть / бутылка"
      ],
      "es": [
        "Omar Khayam",
        "Vino egipcio tinto o blanco — cuarto / botella"
      ],
      "pl": [
        "Omar Khayam",
        "Egipskie wino czerwone lub białe — ćwiartka / butelka"
      ],
      "de": [
        "Omar Khayam",
        "Ägyptischer Rot- oder Weißwein — Viertel / Flasche"
      ],
      "it": [
        "Omar Khayam",
        "Vino egiziano rosso o bianco — quarto / bottiglia"
      ]
    },
    {
      "price": "840",
      "en": [
        "Château de Granville",
        "Bottle of red or white wine"
      ],
      "ar": [
        "شاتو دو جرانفيل",
        "زجاجة نبيذ أحمر أو أبيض"
      ],
      "fr": [
        "Château de Granville",
        "Bouteille de vin rouge ou blanc"
      ],
      "ru": [
        "Шато де Гранвиль",
        "Бутылка красного или белого вина"
      ],
      "es": [
        "Château de Granville",
        "Botella de vino tinto o blanco"
      ],
      "pl": [
        "Château de Granville",
        "Butelka czerwonego lub białego wina"
      ],
      "de": [
        "Château de Granville",
        "Flasche Rot- oder Weißwein"
      ],
      "it": [
        "Château de Granville",
        "Bottiglia di vino rosso o bianco"
      ]
    },
    {
      "price": "640",
      "en": [
        "365",
        "Egyptian house wine, smooth & easy-drinking"
      ],
      "ar": [
        "365",
        "نبيذ مصري محلي، طعمه ناعم وسهل"
      ],
      "fr": [
        "365",
        "Vin de maison égyptien, doux et facile à boire"
      ],
      "ru": [
        "365",
        "Египетское домашнее вино, мягкое и легкое"
      ],
      "es": [
        "365",
        "Vino de la casa egipcio, suave y fácil de beber"
      ],
      "pl": [
        "365",
        "Egipskie wino domowe, łagodne i lekkie w piciu"
      ],
      "de": [
        "365",
        "Ägyptischer Hauswein, weich und leicht zu trinken"
      ],
      "it": [
        "365",
        "Vino della casa egiziano, morbido e facile da bere"
      ]
    },
    {
      "price": "920",
      "en": [
        "Cape Bay",
        "Bottle of red or white wine"
      ],
      "ar": [
        "كيب باي",
        "زجاجة نبيذ أحمر أو أبيض"
      ],
      "fr": [
        "Cape Bay",
        "Bouteille de vin rouge ou blanc"
      ],
      "ru": [
        "Кейп Бэй",
        "Бутылка красного или белого вина"
      ],
      "es": [
        "Cape Bay",
        "Botella de vino tinto o blanco"
      ],
      "pl": [
        "Cape Bay",
        "Butelka czerwonego lub białego wina"
      ],
      "de": [
        "Cape Bay",
        "Flasche Rot- oder Weißwein"
      ],
      "it": [
        "Cape Bay",
        "Bottiglia di vino rosso o bianco"
      ]
    },
    {
      "price": "690",
      "en": [
        "Grand Marquis",
        "Bottle of premium red or white wine"
      ],
      "ar": [
        "جراند ماركيز",
        "زجاجة نبيذ فاخر أحمر أو أبيض"
      ],
      "fr": [
        "Grand Marquis",
        "Bouteille de vin premium rouge ou blanc"
      ],
      "ru": [
        "Гранд Маркиз",
        "Бутылка премиального красного или белого вина"
      ],
      "es": [
        "Grand Marquis",
        "Botella de vino premium tinto o blanco"
      ],
      "pl": [
        "Grand Marquis",
        "Butelka wina premium czerwonego lub białego"
      ],
      "de": [
        "Grand Marquis",
        "Flasche Premium Rot- oder Weißwein"
      ],
      "it": [
        "Grand Marquis",
        "Bottiglia di vino premium rosso o bianco"
      ]
    },
    {
      "price": "980",
      "en": [
        "Aida Valmont Sparkling",
        "Bottle of sparkling wine"
      ],
      "ar": [
        "إيدا فالمونت سبيركلينج",
        "زجاجة نبيذ فوار"
      ],
      "fr": [
        "Aida Valmont pétillant",
        "Bouteille de vin pétillant"
      ],
      "ru": [
        "Aida Valmont игристое",
        "Бутылка игристого вина"
      ],
      "es": [
        "Aida Valmont espumoso",
        "Botella de vino espumoso"
      ],
      "pl": [
        "Aida Valmont wino musujące",
        "Butelka wina musującego"
      ],
      "de": [
        "Aida Valmont Sekt",
        "Flasche Sekt"
      ],
      "it": [
        "Aida Valmont spumante",
        "Bottiglia di vino spumante"
      ]
    }
  ],
  "beer": [
    {
      "price": "99",
      "en": [
        "Stella Bottle",
        "Egyptian lager, bottle"
      ],
      "ar": [
        "ستيلا زجاجة",
        "بيرة مصرية، زجاجة"
      ],
      "fr": [
        "Stella bouteille",
        "Bière égyptienne, bouteille"
      ],
      "ru": [
        "Стелла в бутылке",
        "Египетское светлое пиво, бутылка"
      ],
      "es": [
        "Stella botella",
        "Cerveza rubia egipcia, botella"
      ],
      "pl": [
        "Stella butelka",
        "Egipskie piwo jasne, butelka"
      ],
      "de": [
        "Stella Flasche",
        "Ägyptisches Lagerbier, Flasche"
      ],
      "it": [
        "Stella bottiglia",
        "Birra chiara egiziana, bottiglia"
      ]
    },
    {
      "price": "109",
      "en": [
        "Stella Can",
        "Egyptian lager, can"
      ],
      "ar": [
        "ستيلا علبة",
        "بيرة مصرية، علبة"
      ],
      "fr": [
        "Stella canette",
        "Bière égyptienne, canette"
      ],
      "ru": [
        "Стелла в банке",
        "Египетское светлое пиво, банка"
      ],
      "es": [
        "Stella lata",
        "Cerveza rubia egipcia, lata"
      ],
      "pl": [
        "Stella puszka",
        "Egipskie piwo jasne, puszka"
      ],
      "de": [
        "Stella Dose",
        "Ägyptisches Lagerbier, Dose"
      ],
      "it": [
        "Stella lattina",
        "Birra chiara egiziana, lattina"
      ]
    },
    {
      "price": "129",
      "en": [
        "Stella Ice",
        "Crisp Egyptian ice-brewed lager"
      ],
      "ar": [
        "ستيلا آيس",
        "بيرة مصرية مخمرة بالثلج منعشة"
      ],
      "fr": [
        "Stella Ice",
        "Bière égyptienne brassée glacée"
      ],
      "ru": [
        "Стелла Айс",
        "Освежающее египетское пиво ледяного брожения"
      ],
      "es": [
        "Stella Ice",
        "Cerveza egipcia fría y refrescante"
      ],
      "pl": [
        "Stella Ice",
        "Orzeźwiające egipskie piwo lodowe"
      ],
      "de": [
        "Stella Ice",
        "Erfrischendes ägyptisches Eisbier"
      ],
      "it": [
        "Stella Ice",
        "Birra egiziana rinfrescante"
      ]
    },
    {
      "price": "125",
      "en": [
        "Meister Max 8%",
        "Strong malt beer, bottle"
      ],
      "ar": [
        "مايستر ماكس ٨٪",
        "بيرة شعير قوية، زجاجة"
      ],
      "fr": [
        "Meister Max 8%",
        "Bière forte, bouteille"
      ],
      "ru": [
        "Майстер Макс 8%",
        "Крепкое пиво, бутылка"
      ],
      "es": [
        "Meister Max 8%",
        "Cerveza fuerte, botella"
      ],
      "pl": [
        "Meister Max 8%",
        "Mocne piwo, butelka"
      ],
      "de": [
        "Meister Max 8%",
        "Starkes Bier, Flasche"
      ],
      "it": [
        "Meister Max 8%",
        "Birra forte, bottiglia"
      ]
    },
    {
      "price": "135",
      "en": [
        "Meister Max 8% Can",
        "Strong malt beer, can"
      ],
      "ar": [
        "مايستر ماكس ٨٪ علبة",
        "بيرة شعير قوية، علبة"
      ],
      "fr": [
        "Meister Max 8% canette",
        "Bière forte, canette"
      ],
      "ru": [
        "Майстер Макс 8% банка",
        "Крепкое пиво, банка"
      ],
      "es": [
        "Meister Max 8% lata",
        "Cerveza fuerte, lata"
      ],
      "pl": [
        "Meister Max 8% puszka",
        "Mocne piwo, puszka"
      ],
      "de": [
        "Meister Max 8% Dose",
        "Starkes Bier, Dose"
      ],
      "it": [
        "Meister Max 8% lattina",
        "Birra forte, lattina"
      ]
    },
    {
      "price": "130",
      "en": [
        "Sakara Gold",
        "Smooth Egyptian gold lager"
      ],
      "ar": [
        "ساقارة جولد",
        "بيرة مصرية ذهبية ناعمة"
      ],
      "fr": [
        "Sakara Gold",
        "Bière égyptienne dorée douce"
      ],
      "ru": [
        "Сакара Голд",
        "Мягкое египетское золотистое пиво"
      ],
      "es": [
        "Sakara Gold",
        "Cerveza dorada egipcia suave"
      ],
      "pl": [
        "Sakara Gold",
        "Łagodne egipskie piwo złociste"
      ],
      "de": [
        "Sakara Gold",
        "Mildes ägyptisches goldenes Lagerbier"
      ],
      "it": [
        "Sakara Gold",
        "Birra egiziana dorata delicata"
      ]
    },
    {
      "price": "145",
      "en": [
        "Sakara King 10%",
        "Strong Egyptian beer"
      ],
      "ar": [
        "ساقارة كينج ١٠٪",
        "بيرة مصرية قوية"
      ],
      "fr": [
        "Sakara King 10%",
        "Bière égyptienne forte"
      ],
      "ru": [
        "Сакара Кинг 10%",
        "Крепкое египетское пиво"
      ],
      "es": [
        "Sakara King 10%",
        "Cerveza egipcia fuerte"
      ],
      "pl": [
        "Sakara King 10%",
        "Mocne egipskie piwo"
      ],
      "de": [
        "Sakara King 10%",
        "Starkes ägyptisches Bier"
      ],
      "it": [
        "Sakara King 10%",
        "Birra egiziana forte"
      ]
    },
    {
      "price": "155",
      "en": [
        "Sakara 15%",
        "Extra strong Egyptian beer"
      ],
      "ar": [
        "ساقارة ١٥٪",
        "بيرة مصرية قوية جداً"
      ],
      "fr": [
        "Sakara 15%",
        "Bière égyptienne extra forte"
      ],
      "ru": [
        "Сакара 15%",
        "Очень крепкое египетское пиво"
      ],
      "es": [
        "Sakara 15%",
        "Cerveza egipcia extra fuerte"
      ],
      "pl": [
        "Sakara 15%",
        "Bardzo mocne egipskie piwo"
      ],
      "de": [
        "Sakara 15%",
        "Extra starkes ägyptisches Bier"
      ],
      "it": [
        "Sakara 15%",
        "Birra egiziana extra forte"
      ]
    },
    {
      "price": "109",
      "en": [
        "Heineken Bottle",
        "Premium lager, bottle"
      ],
      "ar": [
        "هاينكن زجاجة",
        "بيرة فاخرة، زجاجة"
      ],
      "fr": [
        "Heineken bouteille",
        "Bière premium, bouteille"
      ],
      "ru": [
        "Хайнекен в бутылке",
        "Премиальное пиво, бутылка"
      ],
      "es": [
        "Heineken botella",
        "Cerveza premium, botella"
      ],
      "pl": [
        "Heineken butelka",
        "Piwo premium, butelka"
      ],
      "de": [
        "Heineken Flasche",
        "Premium-Lagerbier, Flasche"
      ],
      "it": [
        "Heineken bottiglia",
        "Birra premium, bottiglia"
      ]
    },
    {
      "price": "114",
      "en": [
        "Heineken Can",
        "Premium lager, can"
      ],
      "ar": [
        "هاينكن علبة",
        "بيرة فاخرة، علبة"
      ],
      "fr": [
        "Heineken canette",
        "Bière premium, canette"
      ],
      "ru": [
        "Хайнекен в банке",
        "Премиальное пиво, банка"
      ],
      "es": [
        "Heineken lata",
        "Cerveza premium, lata"
      ],
      "pl": [
        "Heineken puszka",
        "Piwo premium, puszka"
      ],
      "de": [
        "Heineken Dose",
        "Premium-Lagerbier, Dose"
      ],
      "it": [
        "Heineken lattina",
        "Birra premium, lattina"
      ]
    },
    {
      "price": "130",
      "en": [
        "ID 10%",
        "Strong beer"
      ],
      "ar": [
        "آي دي ١٠٪",
        "بيرة قوية"
      ],
      "fr": [
        "ID 10%",
        "Bière forte"
      ],
      "ru": [
        "ID 10%",
        "Крепкое пиво"
      ],
      "es": [
        "ID 10%",
        "Cerveza fuerte"
      ],
      "pl": [
        "ID 10%",
        "Mocne piwo"
      ],
      "de": [
        "ID 10%",
        "Starkes Bier"
      ],
      "it": [
        "ID 10%",
        "Birra forte"
      ]
    },
    {
      "price": "155",
      "en": [
        "ID 20%",
        "Extra strong beer"
      ],
      "ar": [
        "آي دي ٢٠٪",
        "بيرة قوية جداً"
      ],
      "fr": [
        "ID 20%",
        "Bière extra forte"
      ],
      "ru": [
        "ID 20%",
        "Очень крепкое пиво"
      ],
      "es": [
        "ID 20%",
        "Cerveza extra fuerte"
      ],
      "pl": [
        "ID 20%",
        "Bardzo mocne piwo"
      ],
      "de": [
        "ID 20%",
        "Extra starkes Bier"
      ],
      "it": [
        "ID 20%",
        "Birra extra forte"
      ]
    },
    {
      "price": "145",
      "en": [
        "Desperados",
        "Tequila-flavored beer"
      ],
      "ar": [
        "ديسبيرادوس",
        "بيرة بنكهة التيكيلا"
      ],
      "fr": [
        "Desperados",
        "Bière aromatisée à la tequila"
      ],
      "ru": [
        "Десперадос",
        "Пиво со вкусом текилы"
      ],
      "es": [
        "Desperados",
        "Cerveza con sabor a tequila"
      ],
      "pl": [
        "Desperados",
        "Piwo o smaku tequili"
      ],
      "de": [
        "Desperados",
        "Bier mit Tequila-Aroma"
      ],
      "it": [
        "Desperados",
        "Birra aromatizzata alla tequila"
      ]
    }
  ],
  "shisha": [
    {
      "price": "60",
      "en": [
        "Egyptian Shisha",
        "Traditional Egyptian tobacco blend"
      ],
      "ar": [
        "شيشة مصرية",
        "خليط تبغ مصري تقليدي"
      ],
      "fr": [
        "Chicha égyptienne",
        "Mélange de tabac égyptien traditionnel"
      ],
      "ru": [
        "Египетская шиша",
        "Традиционная египетская табачная смесь"
      ],
      "es": [
        "Shisha egipcia",
        "Mezcla de tabaco egipcio tradicional"
      ],
      "pl": [
        "Egipska fajka wodna",
        "Tradycyjna egipska mieszanka tytoniu"
      ],
      "de": [
        "Ägyptische Shisha",
        "Traditionelle ägyptische Tabakmischung"
      ],
      "it": [
        "Shisha egiziana",
        "Miscela di tabacco egiziano tradizionale"
      ]
    },
    {
      "price": "265",
      "en": [
        "Fruit Shisha Deluxe",
        "Premium fruit-flavored blend"
      ],
      "ar": [
        "شيشة فواكه ديلوكس",
        "خليط فاخر بنكهة الفواكه"
      ],
      "fr": [
        "Chicha fruits deluxe",
        "Mélange fruité premium"
      ],
      "ru": [
        "Фруктовая шиша делюкс",
        "Премиальная смесь с фруктовым вкусом"
      ],
      "es": [
        "Shisha de fruta deluxe",
        "Mezcla premium con sabor a fruta"
      ],
      "pl": [
        "Fajka owocowa deluxe",
        "Premium mieszanka owocowa"
      ],
      "de": [
        "Frucht-Shisha Deluxe",
        "Premium fruchtige Tabakmischung"
      ],
      "it": [
        "Shisha alla frutta deluxe",
        "Miscela premium alla frutta"
      ]
    },
    {
      "price": "320",
      "en": [
        "Mix Fruit Shisha Deluxe",
        "Premium mixed fruit blend, choose your flavor"
      ],
      "ar": [
        "شيشة مكس فواكه ديلوكس",
        "خليط فواكه مشكلة فاخر — اختر نكهتك"
      ],
      "fr": [
        "Chicha mix fruits deluxe",
        "Mélange de fruits premium, choisissez votre saveur"
      ],
      "ru": [
        "Микс фруктов шиша делюкс",
        "Премиальный фруктовый микс — выбери вкус"
      ],
      "es": [
        "Shisha mix de fruta deluxe",
        "Mezcla premium de frutas, elige tu sabor"
      ],
      "pl": [
        "Fajka mix owoców deluxe",
        "Premium mieszanka owocowa — wybierz smak"
      ],
      "de": [
        "Frucht-Mix-Shisha Deluxe",
        "Premium Fruchtmix — wähle dein Aroma"
      ],
      "it": [
        "Shisha mix frutta deluxe",
        "Miscela premium mista alla frutta — scegli il gusto"
      ]
    }
  ],
  "nuts_mazza": [
    {
      "price": "70",
      "en": [
        "Nuts",
        "Assorted roasted nuts"
      ],
      "ar": [
        "مكسرات",
        "تشكيلة مكسرات محمصة"
      ],
      "fr": [
        "Noix",
        "Assortiment de noix grillées"
      ],
      "ru": [
        "Орехи",
        "Ассорти жареных орехов"
      ],
      "es": [
        "Frutos secos",
        "Surtido de frutos secos tostados"
      ],
      "pl": [
        "Orzechy",
        "Zestaw prażonych orzechów"
      ],
      "de": [
        "Nüsse",
        "Gemischte geröstete Nüsse"
      ],
      "it": [
        "Frutta secca",
        "Assortimento di frutta secca tostata"
      ]
    },
    {
      "price": "165",
      "en": [
        "Special Nuts",
        "Premium mixed nuts selection"
      ],
      "ar": [
        "مكسرات سبيشال",
        "تشكيلة مكسرات فاخرة مختارة"
      ],
      "fr": [
        "Noix spéciales",
        "Sélection premium de noix mélangées"
      ],
      "ru": [
        "Специальные орехи",
        "Премиальная подборка орехового ассорти"
      ],
      "es": [
        "Frutos secos especiales",
        "Selección premium de frutos secos"
      ],
      "pl": [
        "Orzechy specjalne",
        "Premium mieszanka orzechów"
      ],
      "de": [
        "Spezial-Nüsse",
        "Premium Nussmischung"
      ],
      "it": [
        "Frutta secca speciale",
        "Selezione premium di frutta secca mista"
      ]
    },
    {
      "price": "225",
      "en": [
        "Mixed Cheese",
        "Assorted cheese platter"
      ],
      "ar": [
        "مكس جبن",
        "طبق جبن متنوع"
      ],
      "fr": [
        "Assortiment de fromages",
        "Plateau de fromages assortis"
      ],
      "ru": [
        "Сырное ассорти",
        "Ассорти из разных сыров"
      ],
      "es": [
        "Tabla de quesos",
        "Plato de quesos variados"
      ],
      "pl": [
        "Talerz serów",
        "Zestaw różnych serów"
      ],
      "de": [
        "Käseplatte",
        "Verschiedene Käsesorten"
      ],
      "it": [
        "Tagliere di formaggi",
        "Piatto di formaggi assortiti"
      ]
    },
    {
      "price": "410",
      "en": [
        "Special Hot Mazza",
        "Assorted warm appetizer platter"
      ],
      "ar": [
        "مزة ساخنة سبيشال",
        "طبق مقبلات ساخنة متنوعة"
      ],
      "fr": [
        "Mezzé chaud spécial",
        "Plateau de mezzés chauds assortis"
      ],
      "ru": [
        "Специальное горячее мезе",
        "Ассорти тёплых закусок"
      ],
      "es": [
        "Mazza caliente especial",
        "Plato de aperitivos calientes variados"
      ],
      "pl": [
        "Specjalna gorąca mazza",
        "Zestaw ciepłych przystawek"
      ],
      "de": [
        "Spezial heiße Mazza",
        "Gemischte warme Vorspeisenplatte"
      ],
      "it": [
        "Mazza calda speciale",
        "Piatto misto di antipasti caldi"
      ]
    }
  ],
  "billiards": [
    {
      "price": "100",
      "en": [
        "Billiards — Half Hour",
        "Table rental, 30 minutes"
      ],
      "ar": [
        "بلياردو — نصف ساعة",
        "تأجير طاولة، ٣٠ دقيقة"
      ],
      "fr": [
        "Billard — Demi-heure",
        "Location de table, 30 minutes"
      ],
      "ru": [
        "Бильярд — полчаса",
        "Аренда стола, 30 минут"
      ],
      "es": [
        "Billar — Media hora",
        "Alquiler de mesa, 30 minutos"
      ],
      "pl": [
        "Bilard — pół godziny",
        "Wynajem stołu, 30 minut"
      ],
      "de": [
        "Billard — Halbe Stunde",
        "Tischmiete, 30 Minuten"
      ],
      "it": [
        "Biliardo — Mezz'ora",
        "Noleggio tavolo, 30 minuti"
      ]
    },
    {
      "price": "200",
      "en": [
        "Billiards — One Hour",
        "Table rental, 60 minutes"
      ],
      "ar": [
        "بلياردو — ساعة كاملة",
        "تأجير طاولة، ٦٠ دقيقة"
      ],
      "fr": [
        "Billard — Une heure",
        "Location de table, 60 minutes"
      ],
      "ru": [
        "Бильярд — час",
        "Аренда стола, 60 минут"
      ],
      "es": [
        "Billar — Una hora",
        "Alquiler de mesa, 60 minutos"
      ],
      "pl": [
        "Bilard — godzina",
        "Wynajem stołu, 60 minut"
      ],
      "de": [
        "Billard — Eine Stunde",
        "Tischmiete, 60 Minuten"
      ],
      "it": [
        "Biliardo — Un'ora",
        "Noleggio tavolo, 60 minuti"
      ]
    }
  ]
};

/* Builds one language's category tree: { id, name, hint, children:[...] }
   for branch nodes, or { id, name, hint, items:[] } for leaf nodes. */
function buildCategory(node, lang) {
  const names = CATEGORY_NAMES[node.key] || {};
  const name = names[lang] || names.en || node.key;
  const hints = CATEGORY_HINTS[node.key] || {};
  const hint = hints[lang] || '';
  if (node.children) {
    return { id: node.key, name, hint, children: node.children.map(c => buildCategory(c, lang)) };
  }
  const rows = ITEM_DATA[node.key] || [];
  const items = rows.map(row => {
    const pair = row[lang] || row.en;
    return { name: pair[0], desc: pair[1], price: row.price };
  });
  return { id: node.key, name, hint, items };
}

const menuData = {};
LANGS.forEach(l => { menuData[l.code] = CATEGORY_TREE.map(n => buildCategory(n, l.code)); });

function getLang() {
  const saved = localStorage.getItem(STORAGE_KEY);
  return LANGS.some(l => l.code === saved) ? saved : null;
}

function saveLang(lang) {
  if (LANGS.some(l => l.code === lang)) localStorage.setItem(STORAGE_KEY, lang);
}

function t(key, lang) {
  const L = dict[lang] || dict.en;
  return (key in L) ? L[key] : (dict.en[key] || key);
}

/* Applies dir/lang attributes + the 'lang-ar' body class used across
   style.css to switch fonts & RTL rules for the Arabic-script case. */
function applyDocumentDirection(lang) {
  const meta = LANGS.find(l => l.code === lang) || LANGS[0];
  document.documentElement.setAttribute('lang', lang);
  document.documentElement.setAttribute('dir', meta.dir);
  document.body.classList.toggle('lang-ar', lang === 'ar');
}

/* ── Theme (dark / light) ──
   Dark is the default. Persisted the same way as language, and read
   again in a tiny inline head-script on each page so the correct
   theme applies before first paint (no flash of the wrong theme). */
function getTheme() {
  const saved = localStorage.getItem(THEME_KEY);
  return saved === 'light' ? 'light' : 'dark';
}

function saveTheme(theme) {
  localStorage.setItem(THEME_KEY, theme === 'light' ? 'light' : 'dark');
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme === 'light' ? 'light' : 'dark');
}

/* Translates every element with data-i18n="key" (textContent) for the given lang. */
function applyTranslations(lang) {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    el.textContent = t(el.getAttribute('data-i18n'), lang);
  });
}

/* Expose everything as a single global (plain <script>, no bundler/module
   loader needed — this also makes the site work when opened directly from
   disk via file://, where ES module imports are blocked by the browser). */
window.CafeI18n = {
  STORAGE_KEY, LANGS, dict, menuData,
  getLang, saveLang, t, applyDocumentDirection, applyTranslations,
  THEME_KEY, getTheme, saveTheme, applyTheme,
};
