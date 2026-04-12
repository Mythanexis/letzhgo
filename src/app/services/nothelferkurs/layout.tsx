import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nothelferkurs Zürich – Jetzt anmelden",
  description:
    "Nothelferkurs in Zürich bei Let'ZHgo: ASTRA-anerkannt, praxisnah und kompakt. Lebensrettende Sofortmassnahmen lernen – Voraussetzung für den Lernfahrausweis.",
  alternates: { canonical: "/services/nothelferkurs" },
};

const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "Nothelferkurs Zürich",
  description:
    "ASTRA-anerkannter Nothelferkurs in Zürich: Lebensrettende Sofortmassnahmen, BLS/CPR, Schockbehandlung und Unfallsicherung – Voraussetzung für den Lernfahrausweis.",
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
  url: "https://letzhgo.ch/services/nothelferkurs",
  courseLanguage: "de",
  offers: {
    "@type": "Offer",
    price: "120",
    priceCurrency: "CHF",
    availability: "https://schema.org/InStock",
    url: "https://letzhgo.ch/services/nothelferkurs",
  },
  hasCourseInstance: {
    "@type": "CourseInstance",
    courseMode: "onsite",
    location: {
      "@type": "Place",
      name: "Let'ZHgo – Zürich-Oerlikon",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Binzmühlestrasse 15",
        addressLocality: "Zürich",
        postalCode: "8050",
        addressCountry: "CH",
      },
    },
  },
};

export default function NothelferkursLayout({
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
