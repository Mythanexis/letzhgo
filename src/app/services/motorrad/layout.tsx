import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Motorrad-Grundkurs & Fahrstunden Zürich",
  description:
    "Motorrad-Grundkurs und Fahrstunden in Zürich: Sicher Motorradfahren lernen mit professioneller Begleitung. Kategorien A1 und A.",
  alternates: { canonical: "/services/motorrad" },
};

const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "Motorrad-Grundkurs Zürich",
  description:
    "Motorrad-Grundkurs in Zürich für Kategorien A1 und A: Fahrzeugbeherrschung, Brems- & Kurventechnik, Blickführung und Prüfungsvorbereitung auf dem Übungsplatz Rümlang.",
  provider: {
    "@type": "DrivingSchool",
    name: "Let'ZHgo",
    url: "https://letzhgo.ch",
    telephone: "+41433001455",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Binzmühlestrasse 15",
      addressLocality: "Zürich",
      postalCode: "8050",
      addressCountry: "CH",
    },
  },
  url: "https://letzhgo.ch/services/motorrad",
  courseLanguage: "de",
  offers: {
    "@type": "Offer",
    price: "570",
    priceCurrency: "CHF",
    availability: "https://schema.org/InStock",
    url: "https://letzhgo.ch/services/motorrad",
  },
  hasCourseInstance: {
    "@type": "CourseInstance",
    courseMode: "onsite",
    location: {
      "@type": "Place",
      name: "Let'ZHgo – Rümlang (Manöverplatz)",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Riedgrabenstrasse 26",
        addressLocality: "Rümlang",
        postalCode: "8153",
        addressCountry: "CH",
      },
    },
  },
};

export default function MotorradLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />
      {children}
    </>
  );
}
