import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wegweiser Motorrad-Führerschein",
  description:
    "Alle Schritte zum Motorradführerschein – von Nothelferkurs und Theorie bis Grundkurs und Prüfung.",
  alternates: { canonical: "/wegweiser-motorrad-fuehrerschein" },
};

const PAGE_URL = "https://letzhgo.ch/wegweiser-motorrad-fuehrerschein";

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "@id": `${PAGE_URL}#howto`,
  name: "Motorrad-Führerschein in der Schweiz – Schritt für Schritt",
  description:
    "Alle Schritte zum Motorradführerschein in der Schweiz: Nothelferkurs, Lernfahrgesuch, Theorieprüfung, Verkehrskunde (VKU), Fahrstunden, Grundkurs, praktische Prüfung und Weiterausbildung.",
  inLanguage: "de-CH",
  totalTime: "P12M",
  estimatedCost: {
    "@type": "MonetaryAmount",
    currency: "CHF",
    value: "1500",
  },
  supply: [
    { "@type": "HowToSupply", name: "Lernfahrausweis der Kategorie A1 / A" },
    { "@type": "HowToSupply", name: "Sicherheitskleidung" },
    { "@type": "HowToSupply", name: "Zugelassenes Motorrad" },
  ],
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Nothelferkurs",
      url: `${PAGE_URL}#step-01`,
      text: "Absolviere den Nothelferkurs. Der Ausweis ist ab Ausstellungsdatum 6 Jahre gültig und Voraussetzung für das Lernfahrgesuch.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Lernfahrgesuch",
      url: `${PAGE_URL}#step-02`,
      text: "Formular ausfüllen, Sehtest beim Optiker/Augenarzt, persönlich mit Nothelferausweis, Passfoto und ID beim Strassenverkehrsamt einreichen.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Theorieprüfung",
      url: `${PAGE_URL}#step-03`,
      text: "Mit PIN-Code für die Theorieprüfung anmelden und mit Theoriebuch, Lern-App oder Einzellektionen bei Let'ZHgo vorbereiten.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Verkehrskundeunterricht (VKU)",
      url: `${PAGE_URL}#step-04`,
      text: "Achtstündiger obligatorischer VKU – beste direkt nach Erhalt des Lernfahrausweises besuchen.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Fahrstunden",
      url: `${PAGE_URL}#step-05`,
      text: "Erste Fahrstunden beim Fahrlehrer nehmen. Let'ZHgo stellt für die Erstlektion kostenlos eine Kawasaki Z650 zur Verfügung.",
    },
    {
      "@type": "HowToStep",
      position: 6,
      name: "Grundkurs",
      url: `${PAGE_URL}#step-06`,
      text: "In den ersten vier Monaten den obligatorischen Grundkurs absolvieren (3 × 4 h, monatlich).",
    },
    {
      "@type": "HowToStep",
      position: 7,
      name: "Praktische Prüfung",
      url: `${PAGE_URL}#step-07`,
      text: "Manöverteil (Spurgasse, Slalom, 8er) und anschliessend Prüfung im Strassenverkehr. Mit Sicherheitskleidern üben.",
    },
    {
      "@type": "HowToStep",
      position: 8,
      name: "Weiterausbildung",
      url: `${PAGE_URL}#step-08`,
      text: "An Events und Trainings-Lektionen teilnehmen, um Fähigkeiten laufend zu vertiefen.",
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://letzhgo.ch/" },
    {
      "@type": "ListItem",
      position: 2,
      name: "Wegweiser Motorrad-Führerschein",
      item: PAGE_URL,
    },
  ],
};

export default function WegweiserMotorradLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {children}
    </>
  );
}
