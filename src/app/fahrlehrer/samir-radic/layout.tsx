import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fahrlehrer Samir Radič – Auto & Motorrad",
  description:
    "Samir Radič – Fahrlehrer für Auto und Motorrad bei Let'ZHgo Zürich. Theorielehrer für Verkehrskunde.",
  alternates: { canonical: "/fahrlehrer/samir-radic" },
};

export default function SamirLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
