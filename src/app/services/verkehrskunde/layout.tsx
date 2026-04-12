import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Verkehrskundeunterricht (VKU) Zürich",
  description:
    "Obligatorischer Verkehrskundeunterricht in Zürich: 4 Abende, praxisnah und interaktiv. Gefahrenerkennung und vorausschauendes Fahren lernen.",
  alternates: { canonical: "/services/verkehrskunde" },
};

const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "Verkehrskundeunterricht (VKU) Zürich",
  description:
    "Obligatorischer Verkehrskundeunterricht in Zürich: 4 Abende mit praxisnaher Gefahrenerkennung und vorausschauendem Fahren – Voraussetzung für die Führerprüfung.",
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
  url: "https://letzhgo.ch/services/verkehrskunde",
  courseLanguage: "de",
  numberOfCredits: 4,
  offers: {
    "@type": "Offer",
    price: "150",
    priceCurrency: "CHF",
    availability: "https://schema.org/InStock",
    url: "https://letzhgo.ch/services/verkehrskunde",
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

export default function VerkehrskundeLayout({
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
