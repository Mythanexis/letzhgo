import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Standorte Zürich-Oerlikon, Oberglatt & Rümlang",
  description:
    "Fahrschule Let'ZHgo Standorte: Theorie in Zürich-Oerlikon, Motorrad in Oberglatt, Manövertraining in Rümlang. Kurze Wege, klare Anlaufstellen.",
  alternates: { canonical: "/lokationen" },
};

const locationsSchema = {
  "@context": "https://schema.org",
  "@type": "DrivingSchool",
  name: "Let'ZHgo",
  url: "https://letzhgo.ch",
  telephone: "+41433001455",
  email: "info@letzhgo.ch",
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
      },
    },
    {
      "@type": "Place",
      name: "Let'ZHgo – Oberglatt (Motorrad-Theorie)",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Bahnhofstrasse 10",
        addressLocality: "Oberglatt",
        postalCode: "8154",
        addressCountry: "CH",
      },
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
      },
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
