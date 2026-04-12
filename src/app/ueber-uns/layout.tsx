import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Über uns – Fahrlehrer-Team Zürich",
  description:
    "Lerne das Team von Let'ZHgo kennen: Erfahrene Fahrlehrer:innen in Zürich für Auto, Motorrad und Anhänger. Über 30 Jahre Erfahrung in der Fahrausbildung.",
  alternates: { canonical: "/ueber-uns" },
};

export default function UeberUnsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
