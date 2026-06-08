import type { Metadata } from "next";
import { getStandort, type StandortSlug } from "@/lib/standorte-data";

const BASE = "https://letzhgo.ch";

/** Pfad-Konvention: `/fahrschule-<slug>`. */
export function standortPath(slug: StandortSlug): string {
  return `/fahrschule-${slug}`;
}

export function standortUrl(slug: StandortSlug): string {
  return `${BASE}${standortPath(slug)}`;
}

export function standortMetadata(slug: StandortSlug): Metadata {
  const standort = getStandort(slug);
  if (!standort) return {};

  const title = `Fahrschule ${standort.fullName} | Let'ZHgo`;
  const url = standortUrl(slug);
  return {
    title,
    description: standort.metaDescription,
    alternates: { canonical: standortPath(slug) },
    openGraph: {
      title,
      description: standort.metaDescription,
      url,
      type: "website",
      images: [
        {
          url: `${BASE}${standort.image}`,
          width: 1200,
          height: 630,
          alt: standort.imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: standort.metaDescription,
      images: [`${BASE}${standort.image}`],
    },
  };
}

export function standortJsonLd(slug: StandortSlug) {
  const standort = getStandort(slug);
  if (!standort) return null;

  const url = standortUrl(slug);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    name: `Fahrschule ${standort.fullName}`,
    description: standort.metaDescription,
    provider: { "@id": "https://letzhgo.ch/#organization" },
    areaServed: { "@type": "Place", name: standort.fullName },
    serviceType: "Fahrschule / Driving School",
    url,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${BASE}/` },
      {
        "@type": "ListItem",
        position: 2,
        name: "Lokationen",
        item: `${BASE}/lokationen`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: `Fahrschule ${standort.fullName}`,
        item: url,
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: standort.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return { serviceSchema, breadcrumbSchema, faqSchema };
}
