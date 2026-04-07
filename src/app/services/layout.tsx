import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fahrstunden, Nothelferkurs & Motorrad-Grundkurs",
  description:
    "Alle Services von Let'ZHgo: Autofahrstunden, Nothelferkurse, Verkehrskundeunterricht und Motorrad-Grundkurse in Zürich. Jetzt buchen!",
  alternates: { canonical: "/services" },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
