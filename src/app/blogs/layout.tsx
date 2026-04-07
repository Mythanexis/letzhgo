import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Tipps, Guides und alles Wichtige rund um den Führerschein in Zürich – vom Fahrlehrer-Team von Let'ZHgo.",
  alternates: { canonical: "/blogs" },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
