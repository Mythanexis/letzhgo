import type { Metadata } from "next";
import { getBlogBySlug, BLOG_POSTS } from "@/lib/blog-data";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ slug: string }>;
  children: React.ReactNode;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogBySlug(slug);

  if (!post) notFound();

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blogs/${slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://letzhgo.ch/blogs/${slug}`,
      type: "article",
      publishedTime: post.publishedAt,
      images: [
        {
          url: `https://letzhgo.ch${post.coverImage}`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [`https://letzhgo.ch${post.coverImage}`],
    },
  };
}

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export default async function BlogSlugLayout({
  children,
  params,
}: Props) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);

  if (!post) notFound();

  const url = `https://letzhgo.ch/blogs/${slug}`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${url}#article`,
    headline: post.title,
    description: post.excerpt,
    image: `https://letzhgo.ch${post.coverImage}`,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    inLanguage: "de-CH",
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    author: {
      "@type": "Organization",
      name: "Let'ZHgo Fahrschule",
      url: "https://letzhgo.ch",
    },
    publisher: {
      "@type": "Organization",
      name: "Let'ZHgo Fahrschule",
      logo: {
        "@type": "ImageObject",
        url: "https://letzhgo.ch/images/logo.png",
      },
    },
    articleSection: post.category,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://letzhgo.ch/" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://letzhgo.ch/blogs" },
      { "@type": "ListItem", position: 3, name: post.title, item: url },
    ],
  };

  // Für reine Schritt-für-Schritt-Guides liefern wir zusätzlich ein HowTo-Schema,
  // damit Suchmaschinen die Artikel als Anleitung erkennen und entsprechend ausspielen.
  const howToSchema =
    slug === "der-weg-zum-fuehrerschein"
      ? {
          "@context": "https://schema.org",
          "@type": "HowTo",
          "@id": `${url}#howto`,
          name: "Führerschein in der Schweiz – Schritt für Schritt",
          description: post.excerpt,
          inLanguage: "de-CH",
          image: `https://letzhgo.ch${post.coverImage}`,
          step: post.sections.map((section, i) => ({
            "@type": "HowToStep",
            position: i + 1,
            name: section.heading,
            text: section.text,
            url: `${url}#section-${i + 1}`,
          })),
        }
      : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {howToSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
        />
      )}
      {children}
    </>
  );
}
