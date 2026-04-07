import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum",
  description:
    "Impressum und rechtliche Informationen der Fahrschule Let'ZHgo in Zürich.",
  alternates: { canonical: "/impressum" },
};

export default function ImpressumLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
