import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Auszeichnungen",
  description:
    "Qualitätsauszeichnungen von Superfahrlehrer und Fahrlehrervergleich – unabhängig bewertet durch Fahrschüler:innen in der Schweiz.",
  alternates: { canonical: "/auszeichnungen" },
};

export default function AuszeichnungenLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
