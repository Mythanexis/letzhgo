import type { Metadata } from "next";

const SLUG = "gianni-sebestin";
const NAME = "Gianni Sebestin";
const ROLE = "Fahrlehrer für Auto, Motorrad und Anhänger, Fahrlehrer-Ausbildner";
const IMAGE = "https://letzhgo.ch/images/gianni.png";
const TEL = "+41794340966";
const URL = `https://letzhgo.ch/fahrlehrer/${SLUG}`;

export const metadata: Metadata = {
  title: `Fahrlehrer ${NAME} – Auto, Motorrad & Anhänger`,
  description: `${NAME} – ${ROLE} bei Let'ZHgo Zürich.`,
  alternates: { canonical: `/fahrlehrer/${SLUG}` },
  openGraph: {
    title: `${NAME} – Fahrlehrer bei Let'ZHgo Zürich`,
    description: ROLE,
    url: URL,
    type: "profile",
    images: [{ url: IMAGE, alt: NAME }],
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${URL}#person`,
  name: NAME,
  jobTitle: ROLE,
  image: IMAGE,
  url: URL,
  telephone: TEL,
  knowsLanguage: ["Deutsch", "Englisch"],
  worksFor: { "@id": "https://letzhgo.ch/#organization" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://letzhgo.ch/" },
    { "@type": "ListItem", position: 2, name: "Über uns", item: "https://letzhgo.ch/ueber-uns" },
    { "@type": "ListItem", position: 3, name: NAME, item: URL },
  ],
};

export default function GianniLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {children}
    </>
  );
}
