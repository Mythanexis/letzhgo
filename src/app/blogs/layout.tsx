import type { Metadata } from "next";
import { BLOG_POSTS } from "@/lib/blog-data";

export const metadata: Metadata = {
  title: "Blog – Führerschein Tipps Zürich",
  description:
    "Führerschein-Tipps, Kurs-Guides & Insider-Wissen von deiner Fahrschule in Zürich. Alles über Nothelferkurs, VKU und die Fahrprüfung. Jetzt lesen!",
  alternates: { canonical: "/blogs" },
  openGraph: {
    title: "Blog – Führerschein Tipps Zürich",
    description:
      "Führerschein-Tipps, Kurs-Guides & Insider-Wissen von deiner Fahrschule in Zürich.",
    url: "https://letzhgo.ch/blogs",
    type: "website",
  },
};

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "@id": "https://letzhgo.ch/blogs#blog",
  name: "Let'ZHgo Blog",
  url: "https://letzhgo.ch/blogs",
  inLanguage: "de-CH",
  publisher: { "@id": "https://letzhgo.ch/#organization" },
  blogPost: BLOG_POSTS.map((post) => ({
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    url: `https://letzhgo.ch/blogs/${post.slug}`,
    datePublished: post.publishedAt,
    image: `https://letzhgo.ch${post.coverImage}`,
  })),
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      {children}
    </>
  );
}
