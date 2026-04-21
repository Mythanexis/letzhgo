import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Auszeichnungen – Fahrschule Let'ZHgo Zürich",
  description:
    "Mehrfach ausgezeichnete Fahrschule in Zürich: SuperFahrlehrer, Top-Fahrlehrer & Certificate of Excellence – unabhängig bewertet durch Fahrschüler:innen. Überzeug dich selbst!",
  alternates: { canonical: "/auszeichnungen" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://letzhgo.ch/" },
    { "@type": "ListItem", position: 2, name: "Auszeichnungen", item: "https://letzhgo.ch/auszeichnungen" },
  ],
};

export default function AuszeichnungenLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
