import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AGB",
  description:
    "Allgemeine Geschäftsbedingungen der Fahrschule Let'ZHgo in Zürich.",
  alternates: { canonical: "/agb" },
};

export default function AgbLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
