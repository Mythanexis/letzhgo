import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fahrstunden in Zürich – Autofahrstunden buchen",
  description:
    "Professionelle Autofahrstunden in Zürich – individuell abgestimmt auf dein Lerntempo. Von der ersten Fahrstunde bis zur bestandenen Prüfung.",
  alternates: { canonical: "/services/fahrstunden" },
  openGraph: {
    title: "Fahrstunden in Zürich – Autofahrstunden buchen | Let'ZHgo",
    description:
      "Professionelle Autofahrstunden in Zürich – individuell abgestimmt auf dein Lerntempo.",
    url: "https://letzhgo.ch/services/fahrstunden",
    type: "website",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Autofahrstunden Zürich",
  serviceType: "Fahrstunden Kategorie B",
  description:
    "Individuelle Autofahrstunden in Zürich – von der ersten Lektion bis zur praktischen Prüfung.",
  provider: { "@id": "https://letzhgo.ch/#organization" },
  areaServed: {
    "@type": "City",
    name: "Zürich",
  },
  offers: {
    "@type": "Offer",
    priceCurrency: "CHF",
    price: "120",
    url: "https://letzhgo.ch/services/fahrstunden",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://letzhgo.ch/" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://letzhgo.ch/services" },
    { "@type": "ListItem", position: 3, name: "Fahrstunden", item: "https://letzhgo.ch/services/fahrstunden" },
  ],
};

export default function FahrstundenLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {children}
    </>
  );
}
