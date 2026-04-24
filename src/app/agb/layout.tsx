import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AGB",
  description:
    "Allgemeine Geschäftsbedingungen der Fahrschule Let'ZHgo in Zürich.",
  alternates: { canonical: "/agb" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "AGB | Let'ZHgo Fahrschule Zürich",
    description:
      "Allgemeine Geschäftsbedingungen der Fahrschule Let'ZHgo in Zürich.",
    url: "https://letzhgo.ch/agb",
    type: "website",
  },
};

export default function AgbLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
