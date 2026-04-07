import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fahrstunden in Zürich – Autofahrstunden buchen",
  description:
    "Professionelle Autofahrstunden in Zürich – individuell abgestimmt auf dein Lerntempo. Von der ersten Fahrstunde bis zur bestandenen Prüfung.",
  alternates: { canonical: "/services/fahrstunden" },
};

export default function FahrstundenLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
