import type { Metadata } from "next";
import { standortMetadata, standortJsonLd } from "@/lib/standorte-seo";

const SLUG = "buelach" as const;

export const metadata: Metadata = standortMetadata(SLUG);

export default function Layout({ children }: { children: React.ReactNode }) {
  const schemas = standortJsonLd(SLUG);
  return (
    <>
      {schemas && (
        <>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(schemas.serviceSchema),
            }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(schemas.breadcrumbSchema),
            }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(schemas.faqSchema),
            }}
          />
        </>
      )}
      {children}
    </>
  );
}
