import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt – Fahrschule Let'ZHgo Zürich",
  description:
    "Kontaktiere Let'ZHgo – deine Fahrschule in Zürich. Ruf an, schreib uns oder buche direkt online. Wir beraten dich gerne!",
  alternates: { canonical: "/kontakt" },
};

export default function KontaktLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
