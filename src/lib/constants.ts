export const SITE = {
  name: "Let'ZHgo",
  tagline: "Deine Fahrschule in Zürich",
  email: "info@letzhgo.ch",
  url: "https://letzhgo.ch",
};

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Über uns", href: "/ueber-uns" },
  { label: "Services", href: "/services" },
  { label: "Lokationen", href: "/lokationen" },
  { label: "Auszeichnungen", href: "/auszeichnungen" },
] as const;

/** Qualitätsauszeichnungen – verlinken zu den jeweiligen Plattformen. */
export const AWARD_ITEMS = [
  {
    src: "/images/auszeichnungen/super-fahrlehrer-2021.png",
    href: "https://www.superfahrlehrer.ch/de/home",
    alt: "Super Fahrlehrer 2021 – Bewertet durch Fahrschüler:innen auf superfahrlehrer.ch",
  },
  {
    src: "/images/auszeichnungen/sehr-guter-fahrlehrer-2021.png",
    href: "https://www.superfahrlehrer.ch/de/home",
    alt: "Sehr guter Fahrlehrer 2021 – Urkunden für Team Let'ZHgo",
  },
  {
    src: "/images/auszeichnungen/top-fahrlehrer-2012-2015.png",
    href: "https://www.superfahrlehrer.ch/de/home",
    alt: "Super- und Top-Fahrlehrer 2012–2015 – Gianni Sebestin, Let'ZHgo",
  },
  {
    src: "/images/auszeichnungen/fahrlehrervergleich-excellence.png",
    href: "https://www.fahrlehrervergleich.ch/",
    alt: "Certificate of Excellence – Let'ZHgo auf fahrlehrervergleich.ch",
  },
] as const;

export const IMAGES = {
  hero: "/images/letzhgo-hero.jpg",
  autoFahrstunden: "/images/auto-fahrstunden.png",
  nothelferkurs: "/images/nothelferkurs.png",
  verkehrskunde: "/images/verkehrskunde.png",
  vkuPopup: "/images/vku-popup.png",
  motorrad: "/images/motorrad.png",
  quoteBg: "/images/quote-bg.png",
  footerBg: "/images/footer-bg.png",
} as const;

export const INSTRUCTORS = [
  {
    name: "Gianni Sebestin",
    role: "Fahrlehrer für Auto, Motorrad und Anhänger, Fahrlehrer-Ausbildner",
    tags: ["Auto", "Motorrad", "Anhänger", "Ausbildner"],
    languages: ["Deutsch", "Englisch"],
    whatsapp: "https://wa.me/41794340966",
    image: "/images/gianni.png",
    slug: "gianni-sebestin",
  },
  {
    name: "Merjema Secli-Radič",
    role: "Fahrlehrerin für Auto, Nothelferinstruktorin, Theorielehrerin für Verkehrskunde",
    tags: ["Auto", "Nothelferkurs", "VKU"],
    languages: ["Deutsch", "Kroatisch", "Englisch"],
    whatsapp: "https://wa.me/41768156688",
    image: "/images/merjema.png",
    slug: "merjema-radic",
  },
  {
    name: "Tomi Caleta",
    role: "Fahrlehrer für Auto, Motorrad und Anhänger, Lehrer Theorie Verkehrskunde und Nothelfer",
    tags: ["Auto", "Motorrad", "Anhänger", "VKU", "Nothelferkurs"],
    languages: ["Deutsch", "Kroatisch", "Englisch"],
    whatsapp: "https://wa.me/41764303101",
    image: "/images/tomi.png",
    slug: "tomi-caleta",
  },
  {
    name: "Doma Caleta",
    role: "Fahrlehrer für Auto, Verkehrskundelehrer",
    tags: ["Auto", "VKU"],
    languages: ["Deutsch", "Kroatisch", "Englisch"],
    whatsapp: "https://wa.me/41793388032",
    image: "/images/doma.png",
    slug: "doma-caleta",
  },
  {
    name: "Samir Radič",
    role: "Fahrlehrer für Auto und Motorrad, Theorielehrer Verkehrskunde",
    tags: ["Auto", "Motorrad", "VKU"],
    languages: ["Deutsch", "Kroatisch", "Englisch"],
    whatsapp: "https://wa.me/41788888899",
    image: "/images/samir.png",
    slug: "samir-radic",
  },
] as const;

export const LOCATIONS = [
  {
    name: "Bülach",
    instructors: ["Gianni Sebestin", "Doma Caleta"],
  },
  {
    name: "Regensdorf",
    instructors: ["Gianni Sebestin", "Merjema Secli-Radič", "Tomi Caleta", "Doma Caleta", "Samir Radič"],
  },
  {
    name: "Bassersdorf",
    instructors: ["Gianni Sebestin", "Merjema Secli-Radič", "Tomi Caleta", "Samir Radič"],
  },
  {
    name: "Albisgütli",
    instructors: ["Tomi Caleta", "Doma Caleta"],
  },
] as const;

/** Homepage: Team einmal pro Person (ohne Standort-Wiederholungen). */
export const INSTRUCTORS_HOMEPAGE_ORDER = [
  "Gianni Sebestin",
  "Samir Radič",
  "Tomi Caleta",
  "Doma Caleta",
  "Merjema Secli-Radič",
] as const;

export const EDOOBOX_LINKS = {
  nothelferkurs: "https://app1.edoobox.com/de/LetZHgo/Nothelferkurse/?edref=letzhgo",
  motorrad: "https://app1.edoobox.com/de/LetZHgo/Motorradkurse/?edref=letzhgo",
  verkehrskunde: "https://app1.edoobox.com/de/LetZHgo/Verkehrskundekurse/?edref=letzhgo",
  schnupperkurs: "https://app1.edoobox.com/de/LetZHgo/Schnupperkurs?edref=letzhgo",
} as const;

export const WEGWEISER_MOTORRAD_IMAGES = {
  hero: "/images/wegweiser/wegweiser-teaser.png",
  /** Full-bleed hero on `/wegweiser-motorrad-fuehrerschein` only */
  pageHero: "/images/wegweiser/wegweiser-page-hero.jpg",
  steps: [
    "/images/nothelferkurs.png",
    "/images/wegweiser/step-02.jpg",
    "/images/wegweiser/step-03.jpg",
    "/images/wegweiser/step-04.jpg",
    "/images/wegweiser/step-05.jpg",
    "/images/wegweiser/step-06.jpg",
    "/images/wegweiser/step-07.jpg",
    "/images/wegweiser/step-08.jpg",
  ],
} as const;

export const SERVICES_OVERVIEW = [
  {
    title: "Nothelferkurse",
    description: "In unserem Nothelferkurs lernst du kompakt und praxisnah, wie du im Ernstfall richtig reagierst und Leben retten kannst.",
    image: IMAGES.nothelferkurs,
    href: "/services/nothelferkurs",
  },
  {
    title: "Verkehrskundeunterricht",
    description: "Im Verkehrskundekurs lernst du, Gefahren frühzeitig zu erkennen und sicher im Strassenverkehr unterwegs zu sein.",
    image: IMAGES.verkehrskunde,
    href: "/services/verkehrskunde",
  },
  {
    title: "Motorrad",
    description: "Grundkurs und Fahrstunden – lerne dein Bike sicher zu beherrschen und mit Kontrolle und Vertrauen unterwegs zu sein.",
    image: IMAGES.motorrad,
    href: "/services/motorrad",
  },
  {
    title: "Fahrstunden",
    description: "In unseren Fahrstunden lernst du sicher, souverän und mit Freude selbstständig zu fahren.",
    image: IMAGES.autoFahrstunden,
    href: "/services/fahrstunden",
  },
] as const;

export const SERVICES_DETAIL = [
  {
    id: "fahrstunden",
    title: "Autofahrstunden",
    description: "Jede Fahrstunde ist individuell auf dich abgestimmt. Wir begleiten dich vom ersten Anfahren bis zur praktischen Prüfung – in deinem Tempo und mit klarer Struktur.",
    longDescription: "Du lernst, selbstbewusst im Stadtverkehr, auf der Autobahn und in komplexen Verkehrssituationen zu fahren. Unser Ziel ist nicht nur die bestandene Prüfung, sondern dass du dich langfristig sicher und souverän im Strassenverkehr bewegst.",
    image: IMAGES.autoFahrstunden,
    bookingLink: "/kontakt",
  },
  {
    id: "motorrad",
    title: "Motorrad",
    description: "Grundkurs und Fahrstunden – lerne die wichtigsten Techniken für sicheres und kontrolliertes Fahren auf zwei Rädern.",
    longDescription: "Wir trainieren Kurventechnik, Bremsverhalten, Blickführung und Fahrzeugkontrolle Schritt für Schritt. Der Fokus liegt auf Sicherheit, Präzision und einem stabilen Fahrgefühl – damit du dich auf zwei Rädern jederzeit sicher fühlst.",
    image: IMAGES.motorrad,
    bookingLink: EDOOBOX_LINKS.motorrad,
  },
  {
    id: "verkehrskunde",
    title: "Verkehrskunde",
    description: "Ein gutes Verständnis des Verkehrs ist die Grundlage für sicheres Fahren. In unserem Verkehrskundeunterricht lernst du, Situationen frühzeitig zu erkennen, Gefahren richtig einzuschätzen und vorausschauend zu handeln.",
    longDescription: "Wir zeigen dir, wie du komplexe Verkehrssituationen analysierst und verantwortungsbewusste Entscheidungen triffst – praxisnah, verständlich erklärt und optimal vorbereitet auf die Theorieprüfung.",
    image: IMAGES.vkuPopup,
    bookingLink: EDOOBOX_LINKS.verkehrskunde,
  },
  {
    id: "nothelferkurs",
    title: "Nothelferkurs",
    description: "Im Notfall zählt jede Sekunde. In unserem Nothelferkurs lernst du, ruhig zu bleiben, richtig zu reagieren und Verantwortung zu übernehmen.",
    longDescription: "Du übst lebensrettende Sofortmassnahmen, den korrekten Umgang mit Verletzten sowie das strukturierte Handeln in Stresssituationen. Der Kurs vermittelt dir Sicherheit und Selbstvertrauen – nicht nur für die Prüfung, sondern fürs echte Leben.",
    image: IMAGES.nothelferkurs,
    bookingLink: EDOOBOX_LINKS.nothelferkurs,
  },
] as const;

/** Desktop-Navbar: Unterpunkte für Hover-Menü unter „Services“. */
export const NAV_SERVICE_DROPDOWN_LINKS = SERVICES_DETAIL.map((s) => ({
  label: s.title,
  href: `/services/${s.id}`,
}));

export const PRICING = [
  {
    title: "Nothelferkurs",
    subtitle: "Lerne Leben zu retten.",
    price: 120,
    features: [
      "Zertifizierter Kurs (ASTRA-anerkannt)",
      "Praxisnahe Übungen mit Trainingspuppen",
      "Unfallstelle richtig absichern",
      "Sofortmassnahmen & Wiederbelebung",
    ],
    link: EDOOBOX_LINKS.nothelferkurs,
  },
  {
    title: "Verkehrskunde",
    subtitle: "Lerne, wie du dich korrekt im Strassenverkehr verhaltest.",
    price: 150,
    features: [
      "Verkehrsregeln vertieft verstehen",
      "Gefahrenerkennung trainieren",
      "Interaktive Gruppenlektionen",
      "VKU-Bestätigung für Theorieprüfung",
    ],
    link: EDOOBOX_LINKS.verkehrskunde,
  },
  {
    title: "Grundkurse",
    subtitle: "Lerne, wie du mit deinem Motorrad umgehst.",
    price: 570,
    features: [
      "Fahrzeugbeherrschung trainieren",
      "Brems- & Kurventechnik",
      "Blickführung & Linienwahl",
      "Praktische Übungen auf dem Übungsplatz",
    ],
    link: EDOOBOX_LINKS.motorrad,
  },
] as const;

export const STATS = [
  { value: "500+", label: "Ausgebildete Fahrschüler:innen" },
  { value: "10'000+", label: "Durchgeführte Fahrlektionen" },
  { value: "30+", label: "Jahre Erfahrung in der Fahrausbildung" },
  { value: "100%", label: "Fokus auf Sicherheit & individuelle Betreuung" },
] as const;

export const STEPS = [
  {
    number: "01",
    title: "Kontaktaufnahme",
    description: "Melde dich bequem online oder telefonisch an, wir klären deine Ziele und planen gemeinsam deinen Ausbildungspfad – ob Nothelfer, Verkehrskunde oder Fahrstunden.",
  },
  {
    number: "02",
    title: "Ausbildung",
    description: "Du absolvierst Nothelfer- und Verkehrskundekurs, baust dein Wissen auf und startest mit gezielten Fahrlektionen – abgestimmt auf deinen Führerscheinerwerb.",
  },
  {
    number: "03",
    title: "Prüfung",
    description: "Mit unseren Fahrlehrern übst du im Verkehr, vertiefst Manövertraining und gehst selbstbewusst in die praktische Prüfung – bis du souverän unterwegs bist.",
  },
] as const;

export const FAQ_ITEMS = [
  {
    question: "Wie starte ich mit dem Führerschein?",
    answer: "Der erste Schritt ist der Nothelferkurs. Danach kannst du den Lernfahrausweis beantragen und mit Verkehrskunde sowie Fahrstunden beginnen.",
  },
  {
    question: "Was erwartet mich in der ersten Fahrstunde?",
    answer: "Wir lernen uns kennen, besprechen deine Vorkenntnisse und starten mit den Grundlagen – ruhig, strukturiert und ohne Druck.",
  },
  {
    question: "Wie viele Fahrstunden brauche ich?",
    answer: "Das ist individuell. Wir passen die Anzahl Lektionen an dein Lerntempo und deine Sicherheit im Verkehr an.",
  },
  {
    question: "Bietet ihr auch Motorrad- und Anhängerkurse an?",
    answer: "Ja – neben Auto (Kat. B) bieten wir auch Motorrad-Grundkurse und Anhängerausbildung an.",
  },
  {
    question: "Wie bereite ich mich optimal auf die praktische Prüfung vor?",
    answer: "Mit gezieltem Training, Prüfungssimulationen und klaren Rückmeldungen sorgen wir dafür, dass du selbstbewusst antrittst.",
  },
  {
    question: "Was kostet eine Fahrlektion?",
    answer: "Die aktuellen Preise findest du in unserer Preisübersicht – transparent und ohne versteckte Kosten.",
  },
] as const;
