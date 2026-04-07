import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wegweiser Motorrad-Führerschein",
  description:
    "Alle Schritte zum Motorradführerschein – von Nothelferkurs und Theorie bis Grundkurs und Prüfung.",
  alternates: { canonical: "/wegweiser-motorrad-fuehrerschein" },
};

export default function WegweiserMotorradLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
