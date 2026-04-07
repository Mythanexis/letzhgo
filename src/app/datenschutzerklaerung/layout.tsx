import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description:
    "Datenschutzerklärung von Let'ZHgo: Informationen zum Umgang mit deinen persönlichen Daten.",
  alternates: { canonical: "/datenschutzerklaerung" },
};

export default function DatenschutzLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
