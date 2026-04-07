import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fahrlehrer Doma Caleta – Auto & Verkehrskunde",
  description:
    "Doma Caleta – Fahrlehrer für Auto und Verkehrskundelehrer bei Let'ZHgo Zürich.",
  alternates: { canonical: "/fahrlehrer/doma-caleta" },
};

export default function DomaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
