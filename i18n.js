/* ══════════════════════════════════════
   FREEDOM CAFÉ — Shared Language Module
   Persists the chosen language (localStorage) across index.html and
   menu.html, and holds the UI dictionary + placeholder menu content
   for all seven supported languages.
══════════════════════════════════════ */

const STORAGE_KEY = 'freedom_lang';

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
  },
};

/* ── Placeholder menu content ──
   Replace names, descriptions and prices with your real menu.
   Prices are plain numbers; the currency label comes from dict[lang].currency. */
const menuData = {
  en: [
    { id: 'coffee', name: 'Coffee', items: [
      { name: 'Espresso', desc: 'A concentrated shot, rich and bold.', price: 45 },
      { name: 'Cappuccino', desc: 'Espresso with steamed milk and a thick layer of foam.', price: 60 },
      { name: 'Flat White', desc: 'Espresso with velvety micro-foamed milk.', price: 65 },
    ]},
    { id: 'tea', name: 'Tea & Herbal', items: [
      { name: 'Black Tea', desc: 'A robust classic blend, served hot.', price: 40 },
      { name: 'Mint Tea', desc: 'Fresh mint leaves steeped until fragrant.', price: 45 },
      { name: 'Chamomile', desc: 'A calming floral infusion.', price: 45 },
    ]},
    { id: 'cold', name: 'Cold Brews', items: [
      { name: 'Iced Latte', desc: 'Espresso over milk and ice, smooth and cold.', price: 70 },
      { name: 'Cold Brew', desc: 'Slow-steeped for twelve hours, naturally sweet.', price: 65 },
      { name: 'Iced Mocha', desc: 'Espresso, chocolate and cold milk over ice.', price: 75 },
    ]},
    { id: 'eat', name: 'Something to Eat', items: [
      { name: 'Croissant', desc: 'Buttery, flaky, baked fresh every morning.', price: 55 },
      { name: 'Cheesecake', desc: 'Creamy classic with a buttery biscuit base.', price: 95 },
      { name: 'Avocado Toast', desc: 'Sourdough, smashed avocado, chili flakes, lemon.', price: 120 },
    ]},
  ],
  ar: [
    { id: 'coffee', name: 'قهوة', items: [
      { name: 'إسبريسو', desc: 'جرعة مركزة، غنية وقوية.', price: 45 },
      { name: 'كابتشينو', desc: 'إسبريسو مع حليب مبخّر وطبقة سميكة من الرغوة.', price: 60 },
      { name: 'فلات وايت', desc: 'إسبريسو مع حليب حريري ناعم الرغوة.', price: 65 },
    ]},
    { id: 'tea', name: 'شاي وأعشاب', items: [
      { name: 'شاي أسود', desc: 'مزيج كلاسيكي قوي، يُقدَّم ساخناً.', price: 40 },
      { name: 'شاي بالنعناع', desc: 'أوراق نعناع طازجة منقوعة حتى تفوح رائحتها.', price: 45 },
      { name: 'بابونج', desc: 'منقوع أزهار مهدئ.', price: 45 },
    ]},
    { id: 'cold', name: 'مشروبات باردة', items: [
      { name: 'لاتيه مثلج', desc: 'إسبريسو فوق الحليب والثلج، ناعم وبارد.', price: 70 },
      { name: 'كولد برو', desc: 'منقوع ببطء لاثنتي عشرة ساعة، حلو بشكل طبيعي.', price: 65 },
      { name: 'موكا مثلج', desc: 'إسبريسو وشوكولاتة وحليب بارد فوق الثلج.', price: 75 },
    ]},
    { id: 'eat', name: 'شيء للأكل', items: [
      { name: 'كرواسون', desc: 'زبدي ومقرمش، يُخبز طازجاً كل صباح.', price: 55 },
      { name: 'تشيز كيك', desc: 'كلاسيكية كريمية بقاعدة بسكويت زبدية.', price: 95 },
      { name: 'أفوكادو توست', desc: 'خبز العجين المخمر، أفوكادو مهروس، رقائق فلفل حار، ليمون.', price: 120 },
    ]},
  ],
  fr: [
    { id: 'coffee', name: 'Café', items: [
      { name: 'Espresso', desc: 'Un shot concentré, riche et corsé.', price: 45 },
      { name: 'Cappuccino', desc: 'Espresso avec lait moussé et une épaisse couche de mousse.', price: 60 },
      { name: 'Flat White', desc: 'Espresso avec un lait à micro-mousse velouté.', price: 65 },
    ]},
    { id: 'tea', name: 'Thé et infusions', items: [
      { name: 'Thé noir', desc: 'Un mélange classique et corsé, servi chaud.', price: 40 },
      { name: 'Thé à la menthe', desc: 'Feuilles de menthe fraîche infusées jusqu\u2019au parfum.', price: 45 },
      { name: 'Camomille', desc: 'Une infusion florale apaisante.', price: 45 },
    ]},
    { id: 'cold', name: 'Boissons froides', items: [
      { name: 'Latte glacé', desc: 'Espresso sur lait et glaçons, doux et frais.', price: 70 },
      { name: 'Cold Brew', desc: 'Infusé lentement pendant douze heures, naturellement sucré.', price: 65 },
      { name: 'Mocha glacé', desc: 'Espresso, chocolat et lait froid sur glaçons.', price: 75 },
    ]},
    { id: 'eat', name: 'Une petite faim', items: [
      { name: 'Croissant', desc: 'Beurré et feuilleté, cuit frais chaque matin.', price: 55 },
      { name: 'Cheesecake', desc: 'Un classique crémeux sur une base de biscuit beurré.', price: 95 },
      { name: 'Toast à l\u2019avocat', desc: 'Pain au levain, avocat écrasé, piment en flocons, citron.', price: 120 },
    ]},
  ],
  ru: [
    { id: 'coffee', name: 'Кофе', items: [
      { name: 'Эспрессо', desc: 'Концентрированный, насыщенный и крепкий.', price: 45 },
      { name: 'Капучино', desc: 'Эспрессо с взбитым молоком и густой пенкой.', price: 60 },
      { name: 'Флэт уайт', desc: 'Эспрессо с бархатистой микропенкой.', price: 65 },
    ]},
    { id: 'tea', name: 'Чай и травы', items: [
      { name: 'Чёрный чай', desc: 'Насыщенная классическая смесь, подаётся горячим.', price: 40 },
      { name: 'Мятный чай', desc: 'Свежие листья мяты, настоянные до аромата.', price: 45 },
      { name: 'Ромашковый чай', desc: 'Успокаивающий цветочный настой.', price: 45 },
    ]},
    { id: 'cold', name: 'Холодные напитки', items: [
      { name: 'Айс латте', desc: 'Эспрессо с молоком и льдом, мягкий и холодный.', price: 70 },
      { name: 'Колд брю', desc: 'Настаивается двенадцать часов, естественно сладкий.', price: 65 },
      { name: 'Айс мокко', desc: 'Эспрессо, шоколад и холодное молоко со льдом.', price: 75 },
    ]},
    { id: 'eat', name: 'Что-нибудь перекусить', items: [
      { name: 'Круассан', desc: 'Слоёный, маслянистый, выпекается каждое утро.', price: 55 },
      { name: 'Чизкейк', desc: 'Классический кремовый чизкейк на песочной основе.', price: 95 },
      { name: 'Тост с авокадо', desc: 'Хлеб на закваске, авокадо, острый перец, лимон.', price: 120 },
    ]},
  ],
  es: [
    { id: 'coffee', name: 'Café', items: [
      { name: 'Espresso', desc: 'Una toma concentrada, intensa y con cuerpo.', price: 45 },
      { name: 'Capuchino', desc: 'Espresso con leche vaporizada y una espesa capa de espuma.', price: 60 },
      { name: 'Flat White', desc: 'Espresso con leche de microespuma aterciopelada.', price: 65 },
    ]},
    { id: 'tea', name: 'Té e infusiones', items: [
      { name: 'Té negro', desc: 'Una mezcla clásica e intensa, servida caliente.', price: 40 },
      { name: 'Té de menta', desc: 'Hojas de menta frescas en infusión hasta perfumar.', price: 45 },
      { name: 'Manzanilla', desc: 'Una infusión floral relajante.', price: 45 },
    ]},
    { id: 'cold', name: 'Bebidas frías', items: [
      { name: 'Latte helado', desc: 'Espresso sobre leche y hielo, suave y frío.', price: 70 },
      { name: 'Cold brew', desc: 'Infusionado lentamente durante doce horas, dulce de forma natural.', price: 65 },
      { name: 'Moca helado', desc: 'Espresso, chocolate y leche fría con hielo.', price: 75 },
    ]},
    { id: 'eat', name: 'Algo para comer', items: [
      { name: 'Croissant', desc: 'Hojaldrado y mantecoso, horneado fresco cada mañana.', price: 55 },
      { name: 'Tarta de queso', desc: 'Clásica y cremosa sobre una base de galleta.', price: 95 },
      { name: 'Tostada de aguacate', desc: 'Pan de masa madre, aguacate, chile en hojuelas, limón.', price: 120 },
    ]},
  ],
  pl: [
    { id: 'coffee', name: 'Kawa', items: [
      { name: 'Espresso', desc: 'Skoncentrowana, intensywna i mocna kawa.', price: 45 },
      { name: 'Cappuccino', desc: 'Espresso ze spienionym mlekiem i grubą warstwą pianki.', price: 60 },
      { name: 'Flat White', desc: 'Espresso z aksamitnie spienionym mlekiem.', price: 65 },
    ]},
    { id: 'tea', name: 'Herbata i zioła', items: [
      { name: 'Czarna herbata', desc: 'Mocna, klasyczna mieszanka, podawana na gorąco.', price: 40 },
      { name: 'Herbata miętowa', desc: 'Świeże listki mięty parzone do pełni aromatu.', price: 45 },
      { name: 'Rumianek', desc: 'Kojący, kwiatowy napar.', price: 45 },
    ]},
    { id: 'cold', name: 'Napoje na zimno', items: [
      { name: 'Iced Latte', desc: 'Espresso z mlekiem i lodem, gładkie i chłodne.', price: 70 },
      { name: 'Cold Brew', desc: 'Parzona na zimno przez dwanaście godzin, naturalnie słodka.', price: 65 },
      { name: 'Iced Mocha', desc: 'Espresso, czekolada i zimne mleko z lodem.', price: 75 },
    ]},
    { id: 'eat', name: 'Coś do jedzenia', items: [
      { name: 'Croissant', desc: 'Maślany i kruchy, pieczony świeżo każdego ranka.', price: 55 },
      { name: 'Sernik', desc: 'Klasyczny, kremowy sernik na maślanej kruszonce.', price: 95 },
      { name: 'Tost z awokado', desc: 'Pieczywo na zakwasie, awokado, płatki chili, cytryna.', price: 120 },
    ]},
  ],
  de: [
    { id: 'coffee', name: 'Kaffee', items: [
      { name: 'Espresso', desc: 'Ein konzentrierter Shot, kräftig und intensiv.', price: 45 },
      { name: 'Cappuccino', desc: 'Espresso mit aufgeschäumter Milch und dichtem Schaum.', price: 60 },
      { name: 'Flat White', desc: 'Espresso mit samtig cremiger Mikroschaummilch.', price: 65 },
    ]},
    { id: 'tea', name: 'Tee & Kräuter', items: [
      { name: 'Schwarzer Tee', desc: 'Eine kräftige klassische Mischung, heiß serviert.', price: 40 },
      { name: 'Pfefferminztee', desc: 'Frische Minzblätter, aufgebrüht bis zum vollen Aroma.', price: 45 },
      { name: 'Kamillentee', desc: 'Ein beruhigender Blütenaufguss.', price: 45 },
    ]},
    { id: 'cold', name: 'Kalte Getränke', items: [
      { name: 'Iced Latte', desc: 'Espresso mit Milch und Eis, sanft und kühl.', price: 70 },
      { name: 'Cold Brew', desc: 'Zwölf Stunden kalt aufgegossen, natürlich süß.', price: 65 },
      { name: 'Iced Mocha', desc: 'Espresso, Schokolade und kalte Milch mit Eis.', price: 75 },
    ]},
    { id: 'eat', name: 'Etwas zu essen', items: [
      { name: 'Croissant', desc: 'Buttrig und blättrig, jeden Morgen frisch gebacken.', price: 55 },
      { name: 'Käsekuchen', desc: 'Klassisch cremig auf einem butterartigen Keksboden.', price: 95 },
      { name: 'Avocado-Toast', desc: 'Sauerteigbrot, zerdrückte Avocado, Chiliflocken, Zitrone.', price: 120 },
    ]},
  ],
  it: [
    { id: 'coffee', name: 'Caffè', items: [
      { name: 'Espresso', desc: 'Un caffè concentrato, intenso e corposo.', price: 45 },
      { name: 'Cappuccino', desc: 'Espresso con latte montato e uno spesso strato di schiuma.', price: 60 },
      { name: 'Flat White', desc: 'Espresso con latte vellutato a microschiuma.', price: 65 },
    ]},
    { id: 'tea', name: 'Tè & Infusi', items: [
      { name: 'Tè Nero', desc: 'Una miscela classica e robusta, servita calda.', price: 40 },
      { name: 'Tè alla Menta', desc: 'Foglie di menta fresca infuse fino a profumare.', price: 45 },
      { name: 'Camomilla', desc: 'Un infuso floreale rilassante.', price: 45 },
    ]},
    { id: 'cold', name: 'Bevande Fredde', items: [
      { name: 'Latte Ghiacciato', desc: 'Espresso su latte e ghiaccio, morbido e freddo.', price: 70 },
      { name: 'Cold Brew', desc: 'Infuso lentamente per dodici ore, dolce naturalmente.', price: 65 },
      { name: 'Mocha Ghiacciato', desc: 'Espresso, cioccolato e latte freddo su ghiaccio.', price: 75 },
    ]},
    { id: 'eat', name: 'Qualcosa da Mangiare', items: [
      { name: 'Croissant', desc: 'Burroso e sfogliato, sfornato fresco ogni mattina.', price: 55 },
      { name: 'Cheesecake', desc: 'Un classico cremoso su una base di biscotto al burro.', price: 95 },
      { name: 'Toast all\\u2019Avocado', desc: 'Pane a lievitazione naturale, avocado schiacciato, peperoncino a fiocchi, limone.', price: 120 },
    ]},
  ],
};

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
};
