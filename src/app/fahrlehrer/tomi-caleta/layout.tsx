import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fahrlehrer Tomi Caleta – Auto, Motorrad & Anhänger",
  description:
    "Tomi Caleta – Fahrlehrer für Auto, Motorrad und Anhänger bei Let'ZHgo Zürich. Theorielehrer für Verkehrskunde und Nothelfer.",
  alternates: { canonical: "/fahrlehrer/tomi-caleta" },
};

export default function TomiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
