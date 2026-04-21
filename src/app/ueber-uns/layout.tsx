import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Über uns – Fahrlehrer-Team Zürich",
  description:
    "Lerne das Team von Let'ZHgo kennen: Erfahrene Fahrlehrer:innen in Zürich für Auto, Motorrad und Anhänger. Über 30 Jahre Erfahrung in der Fahrausbildung.",
  alternates: { canonical: "/ueber-uns" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://letzhgo.ch/" },
    { "@type": "ListItem", position: 2, name: "Über uns", item: "https://letzhgo.ch/ueber-uns" },
  ],
};

export default function UeberUnsLayout({
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
