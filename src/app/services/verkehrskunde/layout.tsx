import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Verkehrskundeunterricht (VKU) Zürich",
  description:
    "Obligatorischer Verkehrskundeunterricht in Zürich: 4 Abende, praxisnah und interaktiv. Gefahrenerkennung und vorausschauendes Fahren lernen.",
  alternates: { canonical: "/services/verkehrskunde" },
};

export default function VerkehrskundeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
