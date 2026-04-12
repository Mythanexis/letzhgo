import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fahrstunden & Kurse Zürich – Alle Services",
  description:
    "Alle Angebote von Let'ZHgo in Zürich: Autofahrstunden, Nothelferkurse, Verkehrskundeunterricht und Motorrad-Grundkurse. Professionell, praxisnah. Jetzt buchen!",
  alternates: { canonical: "/services" },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
