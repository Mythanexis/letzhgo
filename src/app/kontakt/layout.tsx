import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt – Fahrschule Let'ZHgo Zürich",
  description:
    "Kontaktiere Let'ZHgo – deine Fahrschule in Zürich. Ruf an, schreib uns oder buche direkt online. Wir beraten dich gerne!",
  alternates: { canonical: "/kontakt" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://letzhgo.ch/" },
    { "@type": "ListItem", position: 2, name: "Kontakt", item: "https://letzhgo.ch/kontakt" },
  ],
};

export default function KontaktLayout({
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
