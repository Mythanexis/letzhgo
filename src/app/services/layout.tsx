import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fahrstunden & Kurse Zürich – Alle Services",
  description:
    "Alle Angebote von Let'ZHgo in Zürich: Autofahrstunden, Nothelferkurse, Verkehrskundeunterricht und Motorrad-Grundkurse. Professionell, praxisnah. Jetzt buchen!",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Fahrstunden & Kurse Zürich – Alle Services | Let'ZHgo",
    description:
      "Autofahrstunden, Nothelferkurse, Verkehrskundeunterricht und Motorrad-Grundkurse in Zürich.",
    url: "https://letzhgo.ch/services",
    type: "website",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://letzhgo.ch/" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://letzhgo.ch/services" },
  ],
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {children}
    </>
  );
}
