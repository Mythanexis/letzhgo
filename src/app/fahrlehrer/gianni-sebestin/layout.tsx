import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fahrlehrer Gianni Sebestin – Auto, Motorrad & Anhänger",
  description:
    "Gianni Sebestin – Fahrlehrer für Auto, Motorrad und Anhänger bei Let'ZHgo Zürich. Fahrlehrer-Ausbildner mit langjähriger Erfahrung.",
  alternates: { canonical: "/fahrlehrer/gianni-sebestin" },
};

export default function GianniLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
