import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Auszeichnungen – Fahrschule Let'ZHgo Zürich",
  description:
    "Mehrfach ausgezeichnete Fahrschule in Zürich: SuperFahrlehrer, Top-Fahrlehrer & Certificate of Excellence – unabhängig bewertet durch Fahrschüler:innen. Überzeug dich selbst!",
  alternates: { canonical: "/auszeichnungen" },
};

export default function AuszeichnungenLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
