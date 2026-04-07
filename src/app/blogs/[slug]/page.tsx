"use client";

import { use } from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import { getBlogBySlug, BLOG_POSTS, formatDate } from "@/lib/blog-data";

const ease = [0.16, 1, 0.3, 1] as const;

export default function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const post = getBlogBySlug(slug);

  if (!post) notFound();

  const related = BLOG_POSTS.filter((p) => p.slug !== post.slug)
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    )
    .slice(0, 3);

  return (
    <>
      {/* Hero image — tall, immersive */}
      <section className="relative bg-foreground" data-navbar-dark>
        <div className="relative h-[45vh] min-h-[320px] md:h-[55vh]">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-linear-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent" />
        </div>

        {/* Article header — overlaps image bottom */}
        <div className="relative mx-auto -mt-48 max-w-4xl px-6 pb-16 md:-mt-56 md:pb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease }}
          >
            {/* Back link */}
            <Link
              href="/blogs"
              className="group inline-flex items-center gap-2 text-sm font-medium text-white/40 transition-colors hover:text-white"
            >
              <span
                aria-hidden
                className="transition-transform duration-300 group-hover:-translate-x-1"
              >
                ←
              </span>
              Zurück zum Blog
            </Link>

            {/* Meta */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-accent px-3.5 py-1 text-xs font-semibold uppercase tracking-wide text-white">
                {post.category}
              </span>
              <span className="text-sm text-white/40">
                {formatDate(post.publishedAt)}
              </span>
              <span className="h-1 w-1 rounded-full bg-white/25" />
              <span className="text-sm text-white/40">
                {post.readTime} Lesezeit
              </span>
            </div>

            {/* Title */}
            <h1 className="mt-6 text-3xl font-bold leading-[1.1] tracking-tight text-white md:text-5xl lg:text-6xl">
              {post.title}
            </h1>

            {/* Excerpt */}
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/50 md:text-xl">
              {post.excerpt}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Article content */}
      <section className="bg-background">
        <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">
          {post.sections.map((section, i) => (
            <motion.div
              key={section.heading}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease }}
              viewport={{ once: true, margin: "-40px" }}
              className={i > 0 ? "mt-14" : ""}
            >
              <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
                {section.heading}
              </h2>
              <p className="mt-4 text-base leading-[1.8] text-muted md:text-lg md:leading-[1.8]">
                {section.text}
              </p>
            </motion.div>
          ))}

          {/* Contextual CTA */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease }}
            viewport={{ once: true }}
            className="mt-20 overflow-hidden rounded-2xl border border-accent/10 bg-accent/4"
          >
            <div className="p-8 md:p-10">
              <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="text-xl font-bold text-foreground md:text-2xl">
                    {post.cta
                      ? "Bereit für den nächsten Schritt?"
                      : "Bereit für deinen Führerschein?"}
                  </h3>
                  <p className="mt-2 text-muted">
                    {post.cta
                      ? "Starte jetzt und sichere dir deinen Platz."
                      : "Wir begleiten dich von Anfang an. Melde dich jetzt bei uns."}
                  </p>
                </div>
                <Link
                  href={post.cta?.href ?? "/kontakt"}
                  {...(post.cta?.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="inline-flex shrink-0 items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-all hover:scale-[1.02] hover:bg-accent-dark"
                >
                  {post.cta?.label ?? "Kontakt aufnehmen"}
                  <span aria-hidden>→</span>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related posts */}
      <section className="bg-[#f7f8fa]">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease }}
            viewport={{ once: true, margin: "-60px" }}
          >
            <h2 className="text-2xl font-bold text-foreground md:text-3xl">
              Weitere Beiträge
            </h2>
          </motion.div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((rel, i) => (
              <motion.div
                key={rel.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.15 + i * 0.1, ease }}
                viewport={{ once: true, margin: "-40px" }}
              >
                <Link
                  href={`/blogs/${rel.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white transition-all hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="relative aspect-16/10 overflow-hidden">
                    <Image
                      src={rel.coverImage}
                      alt={rel.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                      {rel.category}
                    </span>
                    <h3 className="mt-2 text-base font-bold leading-snug text-foreground transition-colors group-hover:text-accent">
                      {rel.title}
                    </h3>
                    <div className="mt-auto pt-4 text-xs text-muted">
                      {formatDate(rel.publishedAt)}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
