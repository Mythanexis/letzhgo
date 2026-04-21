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

function MasonryCard({
  post,
  index,
  tall,
}: {
  post: BlogPost;
  index: number;
  tall: boolean;
}) {
  const anim = useScrollAnim();
  return (
    <motion.div {...anim({ y: 30, delay: 0.05 + index * 0.06, duration: 0.8 })}>
      <Link
        href={`/blogs/${post.slug}`}
        className="group block overflow-hidden rounded-2xl bg-white shadow-[0_2px_16px_-4px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_-8px_rgba(0,0,0,0.12)]"
      >
        <div
          className={`relative overflow-hidden aspect-[4/3] ${tall ? "sm:aspect-square" : "sm:aspect-[16/8]"}`}
        >
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
            sizes="(max-width: 640px) 100vw, 50vw"
          />
        </div>
        <div className="p-4 md:p-5">
          <div className="flex items-center justify-between gap-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-accent">
              {post.category}
            </span>
            <span className="text-xs text-muted">{formatDate(post.publishedAt)}</span>
          </div>
          <h3 className="mt-2 text-base font-bold leading-snug text-foreground transition-colors group-hover:text-accent md:text-lg">
            {post.title}
          </h3>
          <div className="mt-3 flex items-center justify-between">
            <p className="text-xs text-muted">{post.readTime} Lesezeit</p>
            <span className="flex items-center gap-1 text-xs font-semibold text-accent opacity-0 transition-all duration-300 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0">
              Lesen
              <svg className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </span>
          </div>
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

  const [featured, ...rest] = filtered;

  const leftCol = rest.filter((_, i) => i % 2 === 0);
  const rightCol = rest.filter((_, i) => i % 2 !== 0);

  return (
    <>
      {/* Hero — dark navy with accent gradient blobs */}
      <section className="relative overflow-hidden bg-[#0c1020] pb-16 pt-28 md:pb-20 md:pt-32" data-navbar-dark>
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden
          style={{
            background:
              "radial-gradient(900px 600px at 25% 30%, rgba(1, 68, 220, 0.25), transparent 60%), radial-gradient(800px 550px at 80% 65%, rgba(1, 68, 220, 0.18), transparent 60%), radial-gradient(600px 400px at 50% 10%, rgba(1, 68, 220, 0.1), transparent 55%)",
          }}
        />
        <div
          className="pointer-events-none absolute -left-20 top-10 h-80 w-80 rounded-full bg-accent/20 blur-[100px]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-accent/12 blur-[120px]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.12]"
          aria-hidden
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.08) 1px, transparent 0)",
            backgroundSize: "22px 22px",
          }}
        />

        <div className="relative mx-auto w-full max-w-4xl px-6 md:px-10">
          <div className="text-center">
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE }}
              className="text-sm font-semibold uppercase tracking-[0.2em] text-accent"
            >
              Let&apos;ZHgo Blog
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.1, ease: EASE }}
              className="mt-5 text-5xl font-bold leading-[1.05] tracking-tight text-white md:text-7xl lg:text-8xl"
            >
              Wissen rund{" "}
              <span className="bg-linear-to-r from-[#4d8dff] to-accent bg-clip-text text-transparent">
                ums Fahren
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.22, ease: EASE }}
              className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/50"
            >
              Tipps, Guides und alles Wichtige für deinen Weg zum Führerschein
              in Zürich – von unserem Fahrlehrer-Team.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Filters + content */}
      <section className="bg-background">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          {/* Category filter pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
            className="flex flex-wrap gap-2"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-accent text-white shadow-md"
                    : "bg-card text-muted hover:bg-card-hover hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {/* Featured post — full width hero card */}
          {featured && (
            <motion.div
              key={featured.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: EASE }}
              className="mt-10"
            >
              <Link
                href={`/blogs/${featured.slug}`}
                className="group relative block overflow-hidden rounded-3xl"
              >
                <div className="relative aspect-16/9 md:aspect-[21/9]">
                  <Image
                    src={featured.coverImage}
                    alt={featured.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                    sizes="100vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/50 to-transparent" />
                </div>
                <div className="absolute inset-y-0 left-0 flex max-w-xl flex-col justify-center p-8 md:p-12 lg:p-16">
                  <span className="inline-block w-fit rounded-full bg-accent px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
                    {featured.category}
                  </span>
                  <h2 className="mt-4 text-2xl font-bold leading-tight text-white md:text-3xl lg:text-4xl">
                    {featured.title}
                  </h2>
                  <p className="mt-3 hidden text-white/60 sm:line-clamp-2 md:block">
                    {featured.excerpt}
                  </p>
                  <div className="mt-4 flex items-center gap-3 text-xs text-white/40">
                    <time>{formatDate(featured.publishedAt)}</time>
                    <span className="h-1 w-1 rounded-full bg-white/30" />
                    <span>{featured.readTime} Lesezeit</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          )}

          {/* Offset masonry 2-column grid */}
          {rest.length > 0 && (
            <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 md:mt-16 md:gap-x-10 md:gap-y-0">
              {/* Left column */}
              <div className="space-y-10 md:space-y-12">
                {leftCol.map((post, i) => (
                  <MasonryCard
                    key={post.slug}
                    post={post}
                    index={i * 2}
                    tall={i % 2 === 0}
                  />
                ))}
              </div>
              {/* Right column — offset down */}
              <div className="space-y-10 sm:mt-16 md:mt-24 md:space-y-12">
                {rightCol.map((post, i) => (
                  <MasonryCard
                    key={post.slug}
                    post={post}
                    index={i * 2 + 1}
                    tall={i % 2 !== 0}
                  />
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
