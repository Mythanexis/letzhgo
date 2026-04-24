import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum",
  description:
    "Impressum und rechtliche Informationen der Fahrschule Let'ZHgo in Zürich.",
  alternates: { canonical: "/impressum" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Impressum | Let'ZHgo Fahrschule Zürich",
    description:
      "Impressum und rechtliche Informationen der Fahrschule Let'ZHgo.",
    url: "https://letzhgo.ch/impressum",
    type: "website",
  },
};

export default function ImpressumLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
