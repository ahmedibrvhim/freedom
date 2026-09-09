/* ══════════════════════════════════════
   FREEDOM CAFÉ — Shared Language Module
   Persists the chosen language (localStorage) across index.html and
   menu.html, and holds the UI dictionary + placeholder menu content
   for all seven supported languages.
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
    footer_hours_value: '8:00 – 22:00',
    footer_address_label: 'Find us',
    footer_address_value: '123 Coffee Street, Giza',
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
    footer_hours_value: '٨:٠٠ – ٢٢:٠٠',
    footer_address_label: 'موقعنا',
    footer_address_value: '١٢٣ شارع القهوة، الجيزة',
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
    footer_hours_value: '8h00 – 22h00',
    footer_address_label: 'Où nous trouver',
    footer_address_value: '123 Coffee Street, Gizeh',
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
    footer_hours_value: '8:00 – 22:00',
    footer_address_label: 'Мы находимся',
    footer_address_value: 'Coffee Street 123, Гиза',
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
    footer_hours_value: '8:00 – 22:00',
    footer_address_label: 'Dónde estamos',
    footer_address_value: 'Calle del Café 123, Guiza',
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
    footer_hours_value: '8:00 – 22:00',
    footer_address_label: 'Znajdziesz nas',
    footer_address_value: 'Coffee Street 123, Giza',
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
    footer_hours_value: '8:00 – 22:00',
    footer_address_label: 'So finden Sie uns',
    footer_address_value: 'Coffee Street 123, Gizeh',
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
    footer_hours_value: '8:00 – 22:00',
    footer_address_label: 'Dove siamo',
    footer_address_value: '123 Coffee Street, Giza',
    footer_note: 'I prezzi includono le tasse. Chiedi al cameriere le specialità stagionali.',
    back_link: '← Indietro',
    menu_coming_soon: 'Prossimamente',
  },
};

/* ── Menu category structure ──
   This is the shape of the menu: top-level sections, their subcategories,
   and (for Main Dishes) a further level of sub-subcategories. Every leaf
   category starts with an empty items list — fill those in with real
   dishes/drinks (name, desc, price) whenever you're ready. Add a new
   language column below and it will show up in every category
   automatically; no need to touch the tree shape itself. */
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

/* en / ar / fr / ru / es / pl / de / it — one row per category key. */
const CATEGORY_NAMES = {
  food:            { en: 'Food',             ar: 'الطعام',                 fr: 'Nourriture',          ru: 'Еда',                     es: 'Comida',            pl: 'Jedzenie',        de: 'Essen',           it: 'Cibo' },
  breakfast:       { en: 'Breakfast',         ar: 'فطور',                    fr: 'Petit-déjeuner',      ru: 'Завтрак',                 es: 'Desayuno',          pl: 'Śniadanie',       de: 'Frühstück',       it: 'Colazione' },
  appetizers:      { en: 'Appetizers',        ar: 'مقبلات',                  fr: 'Entrées',             ru: 'Закуски',                 es: 'Entrantes',         pl: 'Przystawki',      de: 'Vorspeisen',      it: 'Antipasti' },
  salads:          { en: 'Salads',            ar: 'سلطات',                   fr: 'Salades',             ru: 'Салаты',                  es: 'Ensaladas',         pl: 'Sałatki',         de: 'Salate',          it: 'Insalate' },
  soup:            { en: 'Soup',              ar: 'شوربة',                   fr: 'Soupes',              ru: 'Супы',                    es: 'Sopas',             pl: 'Zupy',            de: 'Suppen',          it: 'Zuppe' },
  sandwiches:      { en: 'Sandwiches',        ar: 'سندويشات',                fr: 'Sandwichs',           ru: 'Сэндвичи',                es: 'Sándwiches',        pl: 'Kanapki',         de: 'Sandwiches',      it: 'Panini' },
  main_dishes:     { en: 'Main Dishes',       ar: 'الأطباق الرئيسية',        fr: 'Plats Principaux',    ru: 'Основные блюда',          es: 'Platos Principales',pl: 'Dania Główne',   de: 'Hauptgerichte',   it: 'Piatti Principali' },
  meat:            { en: 'Meat',              ar: 'لحوم',                    fr: 'Viande',              ru: 'Мясо',                    es: 'Carne',             pl: 'Mięso',           de: 'Fleisch',         it: 'Carne' },
  chicken:         { en: 'Chicken',           ar: 'دجاج',                    fr: 'Poulet',              ru: 'Курица',                  es: 'Pollo',             pl: 'Kurczak',         de: 'Hähnchen',        it: 'Pollo' },
  fish:            { en: 'Fish',              ar: 'أسماك',                   fr: 'Poisson',             ru: 'Рыба',                    es: 'Pescado',           pl: 'Ryby',            de: 'Fisch',           it: 'Pesce' },
  pasta:           { en: 'Pasta',             ar: 'باستا',                   fr: 'Pâtes',               ru: 'Паста',                   es: 'Pasta',             pl: 'Makaron',         de: 'Pasta',           it: 'Pasta' },
  pizza:           { en: 'Pizza',             ar: 'بيتزا',                   fr: 'Pizza',               ru: 'Пицца',                   es: 'Pizza',             pl: 'Pizza',           de: 'Pizza',           it: 'Pizza' },
  desserts:        { en: 'Desserts',          ar: 'حلويات',                  fr: 'Desserts',            ru: 'Десерты',                 es: 'Postres',           pl: 'Desery',          de: 'Desserts',        it: 'Dolci' },
  drinks:          { en: 'Drinks',            ar: 'المشروبات',               fr: 'Boissons',            ru: 'Напитки',                 es: 'Bebidas',           pl: 'Napoje',          de: 'Getränke',        it: 'Bevande' },
  hot_drinks:      { en: 'Hot Drinks',        ar: 'مشروبات ساخنة',           fr: 'Boissons Chaudes',    ru: 'Горячие напитки',         es: 'Bebidas Calientes', pl: 'Napoje Gorące',   de: 'Heißgetränke',    it: 'Bevande Calde' },
  soft_drinks:     { en: 'Soft Drinks',       ar: 'مشروبات غازية',           fr: 'Boissons Gazeuses',   ru: 'Безалкогольные напитки',  es: 'Refrescos',         pl: 'Napoje Gazowane', de: 'Softdrinks',      it: 'Bibite' },
  iced_drinks:     { en: 'Iced Drinks',       ar: 'مشروبات مثلجة',           fr: 'Boissons Glacées',    ru: 'Холодные напитки',        es: 'Bebidas con Hielo', pl: 'Napoje z Lodem',  de: 'Eisgetränke',     it: 'Bevande Ghiacciate' },
  milkshake:       { en: 'Milk Shake',        ar: 'ميلك شيك',                fr: 'Milk-shake',          ru: 'Молочный коктейль',       es: 'Batido',            pl: 'Koktajl Mleczny', de: 'Milchshake',      it: 'Frappè' },
  fresh_juice:     { en: 'Fresh Juice',       ar: 'عصير طازج',               fr: 'Jus Frais',           ru: 'Свежий сок',              es: 'Jugo Fresco',       pl: 'Świeży Sok',      de: 'Frischer Saft',   it: 'Succo Fresco' },
  fresh_cocktails: { en: 'Fresh Cocktails',   ar: 'كوكتيلات طازجة',          fr: 'Cocktails Frais',     ru: 'Свежие коктейли',         es: 'Cócteles Frescos',  pl: 'Świeże Koktajle', de: 'Frische Cocktails', it: 'Cocktail Freschi' },
  mocktails:       { en: 'Mocktails',         ar: 'موكتيلات',                fr: 'Mocktails',           ru: 'Безалкогольные коктейли', es: 'Mocktails',         pl: 'Mocktaile',       de: 'Mocktails',       it: 'Mocktail' },
  cocktails:       { en: 'Cocktails',         ar: 'كوكتيلات',                fr: 'Cocktails',           ru: 'Коктейли',                es: 'Cócteles',          pl: 'Koktajle',        de: 'Cocktails',       it: 'Cocktail' },
  shoots:          { en: 'Shoots',            ar: 'شوتس',                    fr: 'Shots',               ru: 'Шоты',                    es: 'Shots',             pl: 'Shoty',           de: 'Shots',           it: 'Shot' },
  wine:            { en: 'Wine',              ar: 'نبيذ',                    fr: 'Vin',                 ru: 'Вино',                    es: 'Vino',              pl: 'Wino',            de: 'Wein',            it: 'Vino' },
  beer:            { en: 'Beer',              ar: 'بيرة',                    fr: 'Bière',               ru: 'Пиво',                    es: 'Cerveza',           pl: 'Piwo',            de: 'Bier',            it: 'Birra' },
  shisha:          { en: 'Shisha Pipes',      ar: 'الشيشة',                  fr: 'Chichas',             ru: 'Кальяны',                 es: 'Shisha',            pl: 'Fajki Wodne',     de: 'Shisha',          it: 'Narghilè' },
  nuts_mazza:      { en: 'Nuts & Mazza',      ar: 'مكسرات ومزة',             fr: 'Noix & Mezzés',       ru: 'Орехи и мезе',            es: 'Frutos Secos y Mazza', pl: 'Orzechy i Mazza', de: 'Nüsse & Mazza',  it: 'Frutta Secca e Mazza' },
  billiards:       { en: 'Billiards',         ar: 'بلياردو',                 fr: 'Billard',             ru: 'Бильярд',                 es: 'Billar',            pl: 'Bilard',          de: 'Billard',         it: 'Biliardo' },
};

/* Builds one language's category tree: { id, name, children:[...] } for
   branch nodes, or { id, name, items:[] } for leaf nodes (empty for now). */
function buildCategory(node, lang) {
  const names = CATEGORY_NAMES[node.key] || {};
  const name = names[lang] || names.en || node.key;
  if (node.children) {
    return { id: node.key, name, children: node.children.map(c => buildCategory(c, lang)) };
  }
  return { id: node.key, name, items: [] };
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
