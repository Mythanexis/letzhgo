import type { Metadata, Viewport } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PromoPopup from "@/components/PromoPopup";
import PosterPopup from "@/components/PosterPopup";
import ScrollToTopOnNavigate from "@/components/ScrollToTopOnNavigate";
import SmoothScroll from "@/components/SmoothScroll";
import { ScrollAnimProvider } from "@/hooks/useScrollAnim";
import "./globals.css";

export const viewport: Viewport = {
  viewportFit: "cover",
  themeColor: "#0144DC",
  colorScheme: "light",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://letzhgo.ch"),
  title: {
    default: "Fahrschule Zürich | Let'ZHgo",
    template: "%s | Let'ZHgo",
  },
  description:
    "Deine Fahrschule in Zürich: Fahrstunden, Nothelferkurs, Verkehrskunde und Motorrad-Grundkurs. Professionelle Ausbildung mit erfahrenen Fahrlehrern. Jetzt anmelden!",
  applicationName: "Let'ZHgo",
  authors: [{ name: "Let'ZHgo Fahrschule", url: "https://letzhgo.ch" }],
  creator: "Let'ZHgo Fahrschule",
  publisher: "Let'ZHgo Fahrschule",
  keywords: [
    "Fahrschule Zürich",
    "Fahrschule",
    "Führerschein",
    "Nothelferkurs",
    "Verkehrskunde",
    "Motorrad Grundkurs",
    "Fahrstunden Zürich",
    "Let'ZHgo",
  ],
  alternates: {
    canonical: "/",
    languages: {
      "de-CH": "/",
      "x-default": "/",
    },
  },
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Fahrschule Zürich | Let'ZHgo",
    description:
      "Deine Fahrschule in Zürich: Fahrstunden, Nothelferkurs, Verkehrskunde und Motorrad-Grundkurs.",
    url: "https://letzhgo.ch",
    siteName: "Let'ZHgo",
    locale: "de_CH",
    type: "website",
    images: [
      {
        url: "https://letzhgo.ch/images/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Let'ZHgo Fahrschule Zürich – Führerschein mit Profis",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fahrschule Zürich | Let'ZHgo",
    description:
      "Deine Fahrschule in Zürich: Fahrstunden, Nothelferkurs, Verkehrskunde und Motorrad-Grundkurs. Jetzt anmelden!",
    images: ["https://letzhgo.ch/images/og-image.webp"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  category: "education",
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "DrivingSchool",
  "@id": "https://letzhgo.ch/#organization",
  name: "Let'ZHgo",
  alternateName: "Let'ZHgo Fahrschule",
  description:
    "Deine Fahrschule in Zürich: Fahrstunden, Nothelferkurs, Verkehrskunde und Motorrad-Grundkurs.",
  url: "https://letzhgo.ch",
  telephone: "+41433001455",
  email: "info@letzhgo.ch",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Binzmühlestrasse 15",
    addressLocality: "Zürich",
    postalCode: "8050",
    addressRegion: "ZH",
    addressCountry: "CH",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 47.4111,
    longitude: 8.5438,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "19:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "16:00",
    },
  ],
  priceRange: "CHF 90–570",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    bestRating: "5",
    worstRating: "1",
    reviewCount: "417",
  },
  image: "https://letzhgo.ch/images/letzhgo-hero.jpg",
  logo: "https://letzhgo.ch/images/logo.png",
  sameAs: [
    "https://www.instagram.com/letzhgo_fahrschule/",
    "https://www.tiktok.com/@letzhgo",
  ],
  areaServed: {
    "@type": "City",
    name: "Zürich",
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://letzhgo.ch/#website",
  url: "https://letzhgo.ch",
  name: "Let'ZHgo",
  inLanguage: "de-CH",
  publisher: { "@id": "https://letzhgo.ch/#organization" },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://letzhgo.ch/blogs?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de-CH" className="antialiased">
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-NVK0S8VVX8" />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-NVK0S8VVX8');`,
          }}
        />
      </head>
      <body className="flex min-h-dvh flex-col bg-background text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-100 focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white focus:outline-none focus:ring-2 focus:ring-white/80 focus:ring-offset-2 focus:ring-offset-accent"
        >
          Zum Inhalt springen
        </a>
        <ScrollToTopOnNavigate />
        <SmoothScroll />
        <Navbar />
        <main id="main" className="flex-1 overflow-x-clip">
          <ScrollAnimProvider>{children}</ScrollAnimProvider>
        </main>
        <Footer />
        <PromoPopup />
        <PosterPopup />
      </body>
    </html>
  );
}
