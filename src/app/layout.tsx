import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Let'ZHgo – Deine Fahrschule in Zürich",
    template: "%s | Let'ZHgo",
  },
  description:
    "Wir begleiten dich auf dem Weg zu sicherem und selbstständigem Fahren – ob Auto, Motorrad oder Anhänger. Fahrschule in Zürich mit professioneller Unterstützung.",
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
  openGraph: {
    title: "Let'ZHgo – Deine Fahrschule in Zürich",
    description:
      "Wir begleiten dich auf dem Weg zu sicherem und selbstständigem Fahren – ob Auto, Motorrad oder Anhänger.",
    url: "https://letzhgo.ch",
    siteName: "Let'ZHgo",
    locale: "de_CH",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="antialiased">
      <body className="flex min-h-screen flex-col bg-background text-foreground">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
