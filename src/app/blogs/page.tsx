"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { BLOG_POSTS, formatDate } from "@/lib/blog-data";
import type { BlogPost } from "@/lib/blog-data";
import { useState } from "react";
import { useScrollAnim } from "@/hooks/useScrollAnim";
import ContactStrip from "@/components/ContactStrip";

const EASE = [0.16, 1, 0.3, 1] as const;

const categories = [
  "Alle",
  ...Array.from(new Set(BLOG_POSTS.map((p) => p.category))),
];

function PostCard({ post, index }: { post: BlogPost; index: number }) {
  const anim = useScrollAnim();
  return (
    <motion.div {...anim({ y: 30, delay: 0.05 + index * 0.06, duration: 0.8 })}>
      <Link href={`/blogs/${post.slug}`} className="group block no-underline">
        <div className="relative aspect-[16/10] overflow-hidden rounded-2xl">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
            sizes="(max-width: 640px) 100vw, 50vw"
          />
        </div>
        <div className="mt-5">
          <div className="flex items-center gap-3 text-sm text-muted">
            <span>{post.category}</span>
            <span className="h-1 w-1 rounded-full bg-border" aria-hidden />
            <time>{formatDate(post.publishedAt)}</time>
          </div>
          <h3 className="mt-2 text-xl font-bold leading-snug text-foreground md:text-2xl">
            {post.title}
          </h3>
          <p className="mt-2 text-sm text-muted">{post.readTime} Lesezeit</p>
        </div>
      </Link>
    </motion.div>
  );
}

export default function BlogsPage() {
  const [activeCategory, setActiveCategory] = useState("Alle");

  const sorted = [...BLOG_POSTS].sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );

  const filtered =
    activeCategory === "Alle"
      ? sorted
      : sorted.filter((p) => p.category === activeCategory);

  // Grosser Beitrag nur in der Gesamtansicht, gefilterte Listen zeigen direkt das Raster.
  const showFeatured = activeCategory === "Alle" && filtered.length > 1;
  const featured = showFeatured ? filtered[0] : null;
  const rest = showFeatured ? filtered.slice(1) : filtered;

  const leftCol = rest.filter((_, i) => i % 2 === 0);
  const rightCol = rest.filter((_, i) => i % 2 !== 0);

  return (
    <>
      <section className="bg-[#0a0a0a] pb-16 pt-28 md:pb-20 md:pt-32" data-navbar-dark>
        <div className="mx-auto w-full max-w-7xl px-6">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: EASE }}
            className="text-4xl font-bold text-white md:text-5xl"
          >
            Blog
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
            className="mt-4 max-w-xl text-base leading-relaxed text-white/70 md:text-lg"
          >
            Tipps, Guides und alles Wichtige für deinen Weg zum Führerschein
            in Zürich, geschrieben von unserem Fahrlehrer-Team.
          </motion.p>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          {/* Kategorien */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
            className="flex flex-wrap gap-x-6 gap-y-2 border-b border-border"
          >
            {categories.map((cat) => {
              const active = activeCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  aria-pressed={active}
                  className={`-mb-px cursor-pointer border-b-2 pb-3 text-base font-semibold transition-colors ${
                    active
                      ? "border-foreground text-foreground"
                      : "border-transparent text-muted hover:text-foreground"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </motion.div>

          {/* Grosser Beitrag */}
          {featured && (
            <motion.div
              key={featured.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: EASE }}
              className="mt-12"
            >
              <Link
                href={`/blogs/${featured.slug}`}
                className="group relative block overflow-hidden rounded-2xl no-underline"
              >
                <div className="relative aspect-[16/9] md:aspect-[21/9]">
                  <Image
                    src={featured.coverImage}
                    alt={featured.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.02]"
                    sizes="(max-width: 1280px) 100vw, 1280px"
                    priority
                  />
                  <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/40 to-transparent" />
                </div>
                <div className="absolute inset-y-0 left-0 flex max-w-xl flex-col justify-center p-8 md:p-12 lg:p-16">
                  <span className="text-sm text-white/70">{featured.category}</span>
                  <h2 className="mt-3 text-2xl font-bold leading-tight text-white md:text-3xl lg:text-4xl">
                    {featured.title}
                  </h2>
                  <p className="mt-3 hidden text-white/70 sm:line-clamp-2 md:block">
                    {featured.excerpt}
                  </p>
                  <div className="mt-4 flex items-center gap-3 text-sm text-white/50">
                    <time>{formatDate(featured.publishedAt)}</time>
                    <span className="h-1 w-1 rounded-full bg-white/30" aria-hidden />
                    <span>{featured.readTime} Lesezeit</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          )}

          {/* Versetztes Raster in zwei Spalten */}
          {rest.length > 0 && (
            <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 md:mt-16 md:gap-x-10 md:gap-y-0">
              <div className="space-y-12 md:space-y-14">
                {leftCol.map((post, i) => (
                  <PostCard key={post.slug} post={post} index={i * 2} />
                ))}
              </div>
              <div className="space-y-12 sm:mt-16 md:mt-24 md:space-y-14">
                {rightCol.map((post, i) => (
                  <PostCard key={post.slug} post={post} index={i * 2 + 1} />
                ))}
              </div>
            </div>
          )}

          {filtered.length === 0 && (
            <p className="mt-16 text-center text-muted">
              Keine Beiträge in dieser Kategorie gefunden.
            </p>
          )}
        </div>
      </section>

      <ContactStrip />
    </>
  );
}
