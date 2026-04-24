import type { MetadataRoute } from "next";

/**
 * Staging-Umgebungen (test.letzhgo.ch, Vercel Preview-Deployments etc.) sollen
 * NICHT indexiert werden. Wir erkennen sie über NEXT_PUBLIC_SITE_URL oder
 * VERCEL_ENV. Auf Production läuft die normale allow-Regel.
 */
function isProduction(): boolean {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "";
  const vercelEnv = process.env.VERCEL_ENV;
  if (vercelEnv && vercelEnv !== "production") return false;
  if (siteUrl && !siteUrl.includes("letzhgo.ch")) return false;
  if (siteUrl.includes("test.letzhgo.ch")) return false;
  return true;
}

export default function robots(): MetadataRoute.Robots {
  if (!isProduction()) {
    return {
      rules: [{ userAgent: "*", disallow: "/" }],
    };
  }

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/", "/admin/"],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/api/"],
      },
      {
        userAgent: "Bingbot",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: "https://letzhgo.ch/sitemap.xml",
    host: "https://letzhgo.ch",
  };
}
