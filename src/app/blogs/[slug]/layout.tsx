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
  };
}

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export default function BlogSlugLayout({ children }: { children: React.ReactNode }) {
  return children;
}
