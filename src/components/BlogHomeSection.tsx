"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { getLatestPosts, formatDate } from "@/lib/blog-data";

const ease = [0.16, 1, 0.3, 1] as const;

export default function BlogHomeSection() {
  const posts = getLatestPosts(3);
  const [featured, ...side] = posts;

  return (
    <section className="relative overflow-hidden bg-[#0a0a0a]">
      {/* Gradient blobs */}
      <div
        className="pointer-events-none absolute -left-28 top-0 h-80 w-80 rounded-full bg-accent/20 blur-[100px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-accent/15 blur-[110px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[min(90vw,520px)] w-[min(90vw,520px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-linear-to-tr from-accent/12 via-transparent to-accent/8"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1, ease }}
          viewport={{ once: true, margin: "-80px" }}
          className="flex items-end justify-between"
        >
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-accent">
              Blog
            </p>
            <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
              Aus unserem Blog
            </h2>
          </div>
          <Link
            href="/blogs"
            className="group hidden items-center gap-2 text-sm font-semibold text-white/60 transition-colors hover:text-white sm:inline-flex"
          >
            Alle Beiträge
            <span
              aria-hidden
              className="transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
        </motion.div>

        {/* Grid: featured left (2 rows) + 2 stacked right */}
        <div className="mt-12 grid gap-5 lg:grid-cols-[1.3fr_1fr] lg:grid-rows-2">
          {/* Featured post — spans both rows */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease }}
            viewport={{ once: true, margin: "-80px" }}
            className="lg:row-span-2"
          >
            <Link
              href={`/blogs/${featured.slug}`}
              className="group relative block h-full overflow-hidden rounded-2xl"
            >
              <div className="relative h-full min-h-[380px] md:min-h-[480px]">
                <Image
                  src={featured.coverImage}
                  alt={featured.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  sizes="(max-width: 1024px) 100vw, 56vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-black/10" />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                <span className="inline-block rounded-full bg-accent px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
                  {featured.category}
                </span>
                <h3 className="mt-3 text-xl font-bold leading-tight text-white md:text-2xl lg:text-3xl">
                  {featured.title}
                </h3>
                <p className="mt-2 line-clamp-2 max-w-lg text-sm text-white/60 md:text-base">
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

          {/* Side posts — each with image, stacked */}
          {side.map((post, i) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 + i * 0.15, ease }}
              viewport={{ once: true, margin: "-60px" }}
            >
              <Link
                href={`/blogs/${post.slug}`}
                className="group relative block h-full overflow-hidden rounded-2xl"
              >
                <div className="relative h-full min-h-[220px]">
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/40 to-black/10" />
                </div>
                <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                      {post.category}
                    </span>
                    <span className="font-mono text-xs text-white/25">
                      {String(i + 2).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mt-2 text-base font-bold leading-snug text-white transition-colors group-hover:text-accent-light md:text-lg">
                    {post.title}
                  </h3>
                  <div className="mt-2 flex items-center gap-3 text-xs text-white/35">
                    <time>{formatDate(post.publishedAt)}</time>
                    <span className="h-1 w-1 rounded-full bg-white/20" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Mobile: "Alle Beiträge" link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease }}
          viewport={{ once: true }}
          className="mt-8 text-center sm:hidden"
        >
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white/60 transition-colors hover:text-white"
          >
            Alle Beiträge
            <span aria-hidden>→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
