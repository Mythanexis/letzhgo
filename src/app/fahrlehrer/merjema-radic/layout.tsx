import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fahrlehrerin Merjema Secli-Radič – Auto, VKU & Nothelfer",
  description:
    "Merjema Secli-Radič – Fahrlehrerin für Auto bei Let'ZHgo Zürich. Nothelferinstruktorin und Verkehrskundelehrerin.",
  alternates: { canonical: "/fahrlehrer/merjema-radic" },
};

export default function MerjemaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
