/**
 * SEO-Standortseiten unter `/fahrschule-<slug>`. Inhalte sind so geschrieben,
 * dass Suchanfragen wie „Fahrstunden Oerlikon" / „Fahrschule Bülach" abgedeckt
 * sind, ohne dass sich die Seiten doppeln (eigener Hero-Text, eigene FAQs).
 */
import { INSTRUCTORS } from "@/lib/constants";

export type StandortSlug =
  | "oerlikon"
  | "ruemlang"
  | "buelach"
  | "horgen"
  | "regensdorf";

export type Instructor = (typeof INSTRUCTORS)[number];

export interface Standort {
  slug: StandortSlug;
  name: string;
  /** Vollständiger Name für den `<title>`. */
  fullName: string;
  /** Headline-Eyebrow im Hero. */
  region: string;
  /** Einzigartiger Hero-H1, standortspezifisch. */
  heroHeadline: string;
  /** Hero-Untertitel, max ~180 Zeichen. */
  intro: string;
  /** Meta-Description, max 160 Zeichen. */
  metaDescription: string;
  /** Formatierte Adresse für Anzeige im Treffpunkt-Block. */
  address: string;
  /** Bild im Hero/Karten-Bereich. Muss in /public/images existieren. */
  image: string;
  imageAlt: string;
  /** Längere, einladende Prosa für die "Über"-Sektion. 2 Absätze. */
  welcome: ReadonlyArray<string>;
  /** Treffpunkt-Beschreibung (informell). */
  treffpunkt: string;
  /** Genaue Adresse / Marker für Google Maps. */
  mapsQuery: string;
  /** Eingebetteter Maps-Link (optional – wenn leer, kein Iframe). */
  mapsEmbed?: string;
  /** Slugs der Fahrlehrer:innen, die hier unterrichten (Match mit INSTRUCTORS). */
  instructorSlugs: ReadonlyArray<(typeof INSTRUCTORS)[number]["slug"]>;
  /** Standortspezifische FAQs. */
  faqs: ReadonlyArray<{ q: string; a: string }>;
}

const STANDORTE_DATA: ReadonlyArray<Standort> = [
  {
    slug: "oerlikon",
    name: "Oerlikon",
    fullName: "Zürich-Oerlikon",
    region: "Zürich Nord",
    heroHeadline: "In Zürich-Oerlikon entspannt durch die Autoprüfung.",
    address: "Binzmühlestrasse 15, 8050 Zürich-Oerlikon",
    intro:
      "Theorie an der Binzmühlestrasse, Fahrstunden quer durch den Kreis 11 – mit erfahrenen Fahrlehrer:innen, die Oerlikon im Schlaf kennen.",
    metaDescription:
      "Fahrschule in Zürich-Oerlikon: Fahrstunden, Verkehrskunde & Nothelferkurs aus einer Hand. Direkt am Bahnhof Oerlikon. Jetzt mit Let'ZHgo starten.",
    image: "/images/oerlikon-letzhgo.png",
    imageAlt: "Fahrschule Let'ZHgo – Standort Zürich-Oerlikon",
    welcome: [
      "Bist du auf der Suche nach einer Fahrschule in Zürich-Oerlikon, bei der du dich wohlfühlst? Bei Let'ZHgo lernst du nicht nur alles, was du für die Prüfung wissen musst – wir nehmen uns Zeit, hören zu und passen die Lektionen deinem Tempo an. Theorie, Nothelferkurs und Fahrstunden findest du bei uns an einer Adresse.",
      "Unser Team unterrichtet auf Deutsch, Kroatisch und Englisch. Egal ob du in Oerlikon, Affoltern, Seebach oder Schwamendingen wohnst – wir holen dich ab und trainieren genau die Strecken, die im Strassenverkehrsamt geprüft werden.",
    ],
    treffpunkt:
      "Wir starten direkt bei unserem Theorie-Standort an der Binzmühlestrasse 15. Du erreichst uns in 4 Minuten vom Bahnhof Oerlikon – ÖV, Parkplatz, alles da. Auf Wunsch holen wir dich auch zu Hause ab – schreib deinem:r Fahrlehrer:in dazu kurz auf WhatsApp.",
    mapsQuery: "Binzmühlestrasse 15, 8050 Zürich",
    mapsEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2700.5!2d8.548077!3d47.413689!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47900a849b623bb1%3A0xc5c7ea7b2839c868!2sFahrschule%20LetZHgo!5e0!3m2!1sde!2sch!4v1700000000000",
    instructorSlugs: [
      "gianni-sebestin",
      "samir-radic",
      "tomi-caleta",
      "doma-caleta",
      "merjema-radic",
    ],
    faqs: [
      {
        q: "Wo treffen wir uns für die Fahrstunde in Oerlikon?",
        a: "Standard-Treffpunkt ist unser Theorie-Standort an der Binzmühlestrasse 15. Wenn dir ein anderer Treffpunkt im Quartier besser passt – Bahnhof Oerlikon, Schwamendingerplatz, Glattbrugg – sag es deinem:r Fahrlehrer:in vorher per WhatsApp.",
      },
      {
        q: "Was üben wir typischerweise in Oerlikon?",
        a: "Stadtverkehr mit Tramverkehr, Kreisel, Spurwechsel, enge Quartierstrassen sowie die Anbindung an die Autobahn A1 Richtung Flughafen. Eine optimale Mischung für die praktische Prüfung.",
      },
      {
        q: "Kann ich auch von Schwamendingen, Affoltern oder Wallisellen starten?",
        a: "Ja. Wir passen den Treffpunkt deiner Anfahrt an – auch in den umliegenden Quartieren. Schick uns einfach kurz eine WhatsApp.",
      },
    ],
  },
  {
    slug: "ruemlang",
    name: "Rümlang",
    fullName: "Rümlang",
    region: "Bezirk Dielsdorf",
    heroHeadline: "Mit Fahrstunden in Rümlang schnell zum Führerausweis.",
    address: "Bahnhof Rümlang, 8153 Rümlang",
    intro:
      "Fahrstunden ab Bahnhof Rümlang, Autobahn um die Ecke – mit erfahrenen Fahrlehrer:innen, die das Furttal kennen.",
    metaDescription:
      "Fahrschule in Rümlang: Fahrstunden ab Bahnhof Rümlang mit erfahrenem Team von Let'ZHgo. Land- und Autobahnstrecken im Furttal.",
    image: "/images/ruemlang-sunset-letzhgo.png",
    imageAlt: "Fahrschule Let'ZHgo – Standort Rümlang",
    welcome: [
      "Du suchst eine Fahrschule in Rümlang, die dich vom ersten Mal bis zur Prüfung begleitet? Bei Let'ZHgo lernst du mit erfahrenen Fahrlehrer:innen, die das Furttal und die umliegenden Strecken in- und auswendig kennen.",
      "Wir wissen, was auf der A51 und den Landstrassen Richtung Bülach und Glattbrugg zählt – und passen die Lektionen genau darauf an. Du kommst aus Rümlang, Oberglatt, Glattbrugg oder Opfikon? Wir vereinbaren den Treffpunkt mit dir.",
    ],
    treffpunkt:
      "Wir treffen uns beim Bahnhof Rümlang – zentral und gut erreichbar. Auf Wunsch holen wir dich auch zu Hause ab – schreib deinem:r Fahrlehrer:in dazu kurz auf WhatsApp.",
    mapsQuery: "Bahnhof Rümlang",
    mapsEmbed: undefined,
    instructorSlugs: [
      "gianni-sebestin",
      "samir-radic",
      "tomi-caleta",
      "doma-caleta",
      "merjema-radic",
    ],
    faqs: [
      {
        q: "Wo treffen wir uns für die Fahrstunde in Rümlang?",
        a: "Standard-Treffpunkt ist der Bahnhof Rümlang. Wenn dir ein anderer Ort besser passt – z.B. zu Hause oder in einem umliegenden Quartier – sag es deinem:r Fahrlehrer:in einfach per WhatsApp.",
      },
      {
        q: "Welche Strecken fahren wir in Rümlang?",
        a: "Wir üben Land- und Autobahnstrecken Richtung Bülach, Glattbrugg und Zürich – genau die Routen, die bei der praktischen Prüfung relevant sind.",
      },
      {
        q: "Kann ich auch aus Oberglatt, Glattbrugg oder Opfikon starten?",
        a: "Ja. Wir passen den Treffpunkt deiner Anfahrt an. Schick uns einfach kurz eine WhatsApp.",
      },
    ],
  },
  {
    slug: "buelach",
    name: "Bülach",
    fullName: "Bülach",
    region: "Zürcher Unterland",
    heroHeadline: "In Bülach easy durch die Autoprüfung.",
    address: "Bahnhof Bülach, 8180 Bülach",
    intro:
      "Eine Fahrschule, die das Unterland kennt – Altstadt, Landstrassen Richtung Eglisau und die A51 für den Autobahnteil deiner Ausbildung.",
    metaDescription:
      "Fahrschule in Bülach: Fahrstunden, Verkehrskunde und Nothelferkurs aus einer Hand. Erfahrenes Team von Let'ZHgo im Zürcher Unterland.",
    image: "/images/letzhgo-autos.jpeg",
    imageAlt: "Fahrschule Let'ZHgo – Fahrstunden in Bülach",
    welcome: [
      "Suchst du eine Fahrschule in Bülach, bei der du nicht eine Nummer bist? Bei Let'ZHgo nehmen wir uns für jede Schülerin und jeden Schüler Zeit. Wir holen dich in Bülach, Höri, Bachenbülach oder Hochfelden ab, fahren mit dir die typischen Prüfungsstrecken und üben so lange, bis du dich sicher fühlst.",
      "Theorieprüfung, Nothelferkurs, Verkehrskunde und Fahrstunden – alles aus einer Hand. Wir kennen die Strecken rund um Bülach, die Auffahrten auf die A51 und die typischen Prüfungsrouten des Strassenverkehrsamts Bülach.",
    ],
    treffpunkt:
      "Wir treffen uns am Bahnhof Bülach – einfach zu erreichen, genug Platz für die Übergabe. Auf Wunsch holen wir dich auch zu Hause ab – schreib deinem:r Fahrlehrer:in dazu kurz auf WhatsApp.",
    mapsQuery: "Bahnhof Bülach",
    instructorSlugs: ["gianni-sebestin", "doma-caleta"],
    faqs: [
      {
        q: "Holt ihr mich in Bülach zu Hause ab?",
        a: "Innerhalb von Bülach und den umliegenden Dörfern (Höri, Bachenbülach, Hochfelden) machen wir das gerne. Frag deinen:n Fahrlehrer:in direkt per WhatsApp.",
      },
      {
        q: "Lerne ich in Bülach auch Autobahn fahren?",
        a: "Definitiv. Die Auffahrten Bülach-Süd und Bülach-Nord auf die A51 nutzen wir regelmässig. Auch die Strecke zum Flughafen Zürich gehört dazu.",
      },
      {
        q: "Kann ich die praktische Prüfung in Bülach ablegen?",
        a: "Das Strassenverkehrsamt Bülach ist der nächstgelegene Prüfungsort. Wir kennen die typischen Prüfungsstrecken und üben sie gezielt mit dir.",
      },
    ],
  },
  {
    slug: "horgen",
    name: "Horgen",
    fullName: "Horgen",
    region: "Zürichsee Südufer",
    heroHeadline: "In Horgen sicher zur Autoprüfung.",
    address: "Bahnhof Horgen, 8810 Horgen",
    intro:
      "Eine Fahrschule am linken Seeufer mit Fokus auf das, was Horgen besonders macht: Hanglagen, Seestrasse und direkter Autobahnzugang.",
    metaDescription:
      "Fahrschule in Horgen: Fahrstunden, Verkehrskunde und Nothelferkurs am Zürichsee. Erfahrenes Team von Let'ZHgo am Südufer.",
    image: "/images/letzhgo-autos.jpeg",
    imageAlt: "Fahrschule Let'ZHgo – Fahrstunden in Horgen am Zürichsee",
    welcome: [
      "Du wohnst in Horgen, Thalwil, Wädenswil oder Richterswil und willst eine Fahrschule, die das Gebiet kennt? Bei Let'ZHgo trainieren wir genau dort, wo du später fährst: Seestrasse im Berufsverkehr, Hangauffahrten oberhalb des Dorfs und die A3 für den Autobahnteil.",
      "Wir sind ein Team von erfahrenen Fahrlehrer:innen, die dich Schritt für Schritt begleiten – ruhig, klar und ohne unnötigen Druck. Theorie, Nothelferkurs und Verkehrskunde organisieren wir gleich mit.",
    ],
    treffpunkt:
      "Standard-Treffpunkt ist der Bahnhof Horgen. Auf Wunsch holen wir dich auch zu Hause ab – schreib deinem:r Fahrlehrer:in dazu kurz auf WhatsApp.",
    mapsQuery: "Bahnhof Horgen",
    instructorSlugs: ["gianni-sebestin", "tomi-caleta", "samir-radic"],
    faqs: [
      {
        q: "Was macht Horgen für Fahrschüler:innen besonders?",
        a: "Die Kombination aus enger Seestrasse, steilen Quartieren und direktem Autobahnzugang. In einer Lektion deckst du Stadt-, Land- und Autobahnverkehr ab.",
      },
      {
        q: "Übt ihr auch das Anfahren am steilen Hang?",
        a: "Ja, das ist sogar einer unserer Lieblingsteile von Horgen. Mit oder ohne Handbremse, mit Schalter oder Automat – wir gehen es Schritt für Schritt durch.",
      },
      {
        q: "Kann ich auch ab Thalwil, Wädenswil oder Richterswil starten?",
        a: "Klar. Sag uns vorher Bescheid und wir vereinbaren einen passenden Treffpunkt am Bahnhof oder bei dir zu Hause.",
      },
    ],
  },
  {
    slug: "regensdorf",
    name: "Regensdorf",
    fullName: "Regensdorf",
    region: "Furttal",
    heroHeadline: "In Regensdorf locker zum Führerausweis.",
    address: "Bahnhof Regensdorf-Watt, 8105 Regensdorf",
    intro:
      "Die Fahrschule für das ganze Furttal – Fahrstunden ab Regensdorf-Watt, mit Strecken die im Strassenverkehrsamt Bülach geprüft werden.",
    metaDescription:
      "Fahrschule in Regensdorf: Fahrstunden, Verkehrskunde und Nothelferkurs im Furttal. Erfahrenes Team von Let'ZHgo, mehrsprachig.",
    image: "/images/letzhgo-hero.webp",
    imageAlt: "Fahrschule Let'ZHgo – Fahrstunden in Regensdorf Furttal",
    welcome: [
      "Du wohnst in Regensdorf, Watt, Buchs, Dällikon, Dänikon oder Otelfingen und suchst eine Fahrschule, die dich verlässlich zur Prüfung begleitet? Bei Let'ZHgo bekommst du genau das: ein erfahrenes Team, Theorie und Praxis aus einer Hand und mehrsprachige Betreuung auf Deutsch, Kroatisch und Englisch.",
      "Wir kennen die Strecken rund um Regensdorf und üben sie gezielt mit dir. Vom Lernfahrgesuch bis zur bestandenen Prüfung sind wir dein fester Ansprechpartner.",
    ],
    treffpunkt:
      "Wir treffen uns beim Bahnhof Regensdorf-Watt – zentral, gut erreichbar, viel Platz. Auf Wunsch holen wir dich auch zu Hause ab – schreib deinem:r Fahrlehrer:in dazu kurz auf WhatsApp.",
    mapsQuery: "Bahnhof Regensdorf-Watt",
    instructorSlugs: [
      "gianni-sebestin",
      "merjema-radic",
      "tomi-caleta",
      "doma-caleta",
      "samir-radic",
    ],
    faqs: [
      {
        q: "Wer übt typischerweise in Regensdorf?",
        a: "Schüler:innen aus dem ganzen Furttal: Regensdorf, Watt, Buchs, Dällikon, Dänikon und Otelfingen. Wir holen dich gerne bei dir ab.",
      },
      {
        q: "Welche Strecken nutzt ihr für die Prüfungsvorbereitung?",
        a: "Wir üben gezielt die typischen Strecken um Regensdorf: Industriestrasse, Schulhausstrasse, Watt-Center und die Anbindung an die A1. Wir simulieren auch komplette Prüfungsrunden.",
      },
      {
        q: "Wie weit ist es zum Strassenverkehrsamt?",
        a: "Das Prüfungszentrum Bülach erreichst du in rund 15 Minuten. Wir trainieren die Strecke auch im Original-Tempo, damit du am Prüfungstag entspannt ankommst.",
      },
    ],
  },
];

const STANDORTE_MAP = new Map<string, Standort>(
  STANDORTE_DATA.map((s) => [s.slug, s])
);

export const STANDORTE = STANDORTE_DATA;

export function getStandort(slug: string): Standort | undefined {
  return STANDORTE_MAP.get(slug);
}

export function getInstructorsForStandort(s: Standort): Instructor[] {
  const order = new Map(s.instructorSlugs.map((slug, i) => [slug, i]));
  return INSTRUCTORS.filter((inst) => order.has(inst.slug))
    .slice()
    .sort((a, b) => (order.get(a.slug) ?? 0) - (order.get(b.slug) ?? 0));
}

export function mapsHref(query: string): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}
