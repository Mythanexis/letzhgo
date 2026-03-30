import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lokationen",
  description:
    "Unsere Lern-Standorte in Zürich-Oerlikon, Oberglatt und Rümlang – Nothelfer, Verkehrskunde, Motorrad und Manövertraining.",
};

export default function LokationenLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
