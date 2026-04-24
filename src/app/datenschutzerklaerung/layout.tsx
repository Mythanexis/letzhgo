import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description:
    "Datenschutzerklärung von Let'ZHgo: Informationen zum Umgang mit deinen persönlichen Daten gemäss revDSG.",
  alternates: { canonical: "/datenschutzerklaerung" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Datenschutzerklärung | Let'ZHgo Fahrschule Zürich",
    description:
      "Datenschutzerklärung von Let'ZHgo gemäss revDSG – Umgang mit deinen persönlichen Daten.",
    url: "https://letzhgo.ch/datenschutzerklaerung",
    type: "website",
  },
};

export default function DatenschutzLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
