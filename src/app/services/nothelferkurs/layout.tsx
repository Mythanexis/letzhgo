import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nothelferkurs Zürich – Jetzt anmelden",
  description:
    "Nothelferkurs in Zürich bei Let'ZHgo: ASTRA-anerkannt, praxisnah und kompakt. Lebensrettende Sofortmassnahmen lernen – Voraussetzung für den Lernfahrausweis.",
  alternates: { canonical: "/services/nothelferkurs" },
};

export default function NothelferkursLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
