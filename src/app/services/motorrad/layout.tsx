import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Motorrad-Grundkurs & Fahrstunden Zürich",
  description:
    "Motorrad-Grundkurs und Fahrstunden in Zürich: Sicher Motorradfahren lernen mit professioneller Begleitung. Kategorien A1 und A.",
  alternates: { canonical: "/services/motorrad" },
};

export default function MotorradLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
