import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Standorte Zürich-Oerlikon & Rümlang",
  description:
    "Fahrschule Let'ZHgo Standorte: Theorie in Zürich-Oerlikon, Manövertraining in Rümlang. Kurze Wege, klare Anlaufstellen.",
  alternates: { canonical: "/lokationen" },
  openGraph: {
    title: "Standorte Zürich-Oerlikon & Rümlang | Let'ZHgo",
    description:
      "Theorie in Zürich-Oerlikon, Manövertraining in Rümlang.",
    url: "https://letzhgo.ch/lokationen",
    type: "website",
  },
};

const locationsSchema = {
  "@context": "https://schema.org",
  "@type": "DrivingSchool",
  name: "Let'ZHgo",
  url: "https://letzhgo.ch",
  telephone: "+41433001455",
  email: "info@letzhgo.ch",
  priceRange: "CHF 90–570",
  location: [
    {
      "@type": "Place",
      name: "Let'ZHgo – Zürich-Oerlikon (Theorie)",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Binzmühlestrasse 15",
        addressLocality: "Zürich",
        postalCode: "8050",
        addressCountry: "CH",
        addressRegion: "ZH",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 47.4125,
        longitude: 8.5439,
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "08:00",
          closes: "20:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Saturday",
          opens: "09:00",
          closes: "16:00",
        },
      ],
      hasMap: "https://www.google.com/maps/place/Binzm%C3%BChlestrasse+15,+8050+Z%C3%BCrich",
    },
    {
      "@type": "Place",
      name: "Let'ZHgo – Rümlang (Manövertraining)",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Riedgrabenstrasse 26",
        addressLocality: "Rümlang",
        postalCode: "8153",
        addressCountry: "CH",
        addressRegion: "ZH",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 47.4559,
        longitude: 8.5311,
      },
      hasMap: "https://www.google.com/maps/place/Riedgrabenstrasse+26,+8153+R%C3%BCmlang",
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://letzhgo.ch/" },
    { "@type": "ListItem", position: 2, name: "Lokationen", item: "https://letzhgo.ch/lokationen" },
  ],
};

export default function LokationenLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(locationsSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {children}
    </>
  );
}
