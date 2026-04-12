import type { Metadata, Viewport } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PromoPopup from "@/components/PromoPopup";
import PosterPopup from "@/components/PosterPopup";
import ScrollToTopOnNavigate from "@/components/ScrollToTopOnNavigate";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

export const viewport: Viewport = {
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://letzhgo.ch"),
  title: {
    default: "Fahrschule Zürich | Let'ZHgo",
    template: "%s | Let'ZHgo",
  },
  description:
    "Deine Fahrschule in Zürich: Fahrstunden, Nothelferkurs, Verkehrskunde und Motorrad-Grundkurs. Professionelle Ausbildung mit erfahrenen Fahrlehrern. Jetzt anmelden!",
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
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "DrivingSchool",
  name: "Let'ZHgo",
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
  image: "https://letzhgo.ch/images/letzhgo-hero.jpg",
  sameAs: [
    "https://www.instagram.com/letzhgo_fahrschule/",
    "https://www.tiktok.com/@letzhgo",
  ],
  areaServed: {
    "@type": "City",
    name: "Zürich",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="antialiased">
      <body className="flex min-h-dvh flex-col bg-background text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        <ScrollToTopOnNavigate />
        <SmoothScroll />
        <Navbar />
        <main className="flex-1 overflow-x-clip">{children}</main>
        <Footer />
        <PromoPopup />
        <PosterPopup />
      </body>
    </html>
  );
}
