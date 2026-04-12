import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog – Führerschein Tipps Zürich",
  description:
    "Führerschein-Tipps, Kurs-Guides & Insider-Wissen von deiner Fahrschule in Zürich. Alles über Nothelferkurs, VKU und die Fahrprüfung. Jetzt lesen!",
  alternates: { canonical: "/blogs" },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
