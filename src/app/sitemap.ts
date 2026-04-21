import type { MetadataRoute } from "next";
import { BLOG_POSTS } from "@/lib/blog-data";
import { INSTRUCTORS } from "@/lib/constants";

const BASE = "https://letzhgo.ch";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const latestBlogDate = BLOG_POSTS
    .map((p) => new Date(p.publishedAt).getTime())
    .sort((a, b) => b - a)[0];
  const blogIndexLastMod = latestBlogDate ? new Date(latestBlogDate) : now;

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE}/ueber-uns`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/services`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/services/fahrstunden`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/services/nothelferkurs`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/services/verkehrskunde`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/services/motorrad`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/lokationen`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/kontakt`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/auszeichnungen`, lastModified: now, changeFrequency: "yearly", priority: 0.5 },
    { url: `${BASE}/wegweiser-motorrad-fuehrerschein`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/blogs`, lastModified: blogIndexLastMod, changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE}/impressum`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    { url: `${BASE}/datenschutzerklaerung`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    { url: `${BASE}/agb`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
  ];

  const instructorRoutes: MetadataRoute.Sitemap = INSTRUCTORS.map((i) => ({
    url: `${BASE}/fahrlehrer/${i.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const blogRoutes: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
    url: `${BASE}/blogs/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...instructorRoutes, ...blogRoutes];
}
