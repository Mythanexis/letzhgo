import type { Metadata } from "next";

const SLUG = "merjema-radic";
const NAME = "Merjema Secli-Radič";
const ROLE = "Fahrlehrerin für Auto, Nothelferinstruktorin, Theorielehrerin für Verkehrskunde";
const IMAGE = "https://letzhgo.ch/images/merjema.png";
const TEL = "+41768156688";
const URL = `https://letzhgo.ch/fahrlehrer/${SLUG}`;

export const metadata: Metadata = {
  title: `Fahrlehrerin ${NAME} – Auto, VKU & Nothelfer`,
  description: `${NAME} – ${ROLE} bei Let'ZHgo Zürich.`,
  alternates: { canonical: `/fahrlehrer/${SLUG}` },
  openGraph: {
    title: `${NAME} – Fahrlehrerin bei Let'ZHgo Zürich`,
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
  knowsLanguage: ["Deutsch", "Kroatisch", "Englisch"],
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

export default function MerjemaLayout({
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
