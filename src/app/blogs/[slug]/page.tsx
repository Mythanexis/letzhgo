"use client";

import { use } from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import { getBlogBySlug, BLOG_POSTS, formatDate } from "@/lib/blog-data";
import { useScrollAnim } from "@/hooks/useScrollAnim";
import ShareButtons from "@/components/ShareButtons";

const ease = [0.16, 1, 0.3, 1] as const;

export default function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const post = getBlogBySlug(slug);

  if (!post) notFound();

  const anim = useScrollAnim();

  const related = BLOG_POSTS.filter((p) => p.slug !== post.slug)
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    )
    .slice(0, 3);

  return (
    <>
      {/* Hero image — tall, immersive */}
      <section className="relative bg-[#0a0a0a]" data-navbar-dark>
        <div className="relative h-[45vh] min-h-[320px] md:h-[55vh]">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-linear-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-[#0a0a0a]/40" />
        </div>

        {/* Article header — overlaps image bottom */}
        <div className="relative mx-auto -mt-48 max-w-4xl px-6 pb-16 md:-mt-56 md:pb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease }}
          >
            {/* Breadcrumbs */}
            <nav
              aria-label="Breadcrumb"
              className="flex flex-wrap items-center gap-2 text-sm text-white/50"
            >
              <Link href="/" className="transition-colors hover:text-white">
                Home
              </Link>
              <span aria-hidden className="text-white/25">
                /
              </span>
              <Link href="/blogs" className="transition-colors hover:text-white">
                Blog
              </Link>
              <span aria-hidden className="text-white/25">
                /
              </span>
              <span className="text-white/80" aria-current="page">
                {post.title}
              </span>
            </nav>

            {/* Meta */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <span className="text-sm text-white/70">{post.category}</span>
              <span className="h-1 w-1 rounded-full bg-white/30" aria-hidden />
              <span className="text-sm text-white/70">
                {formatDate(post.publishedAt)}
              </span>
              <span className="h-1 w-1 rounded-full bg-white/30" aria-hidden />
              <span className="text-sm text-white/70">
                {post.readTime} Lesezeit
              </span>
            </div>

            {/* Title */}
            <h1 className="mt-6 text-3xl font-bold leading-tight text-white md:text-5xl">
              {post.title}
            </h1>

            {/* Excerpt */}
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/70">
              {post.excerpt}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Article content */}
      <section className="bg-background">
        <div className="mx-auto max-w-3xl px-6 pb-16 pt-16 md:pb-20 md:pt-24">
          {post.sections.map((section, i) => (
            <motion.div
              key={section.heading}
              {...anim({ y: 24, delay: 0.1, duration: 0.8 })}
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

          {/* Share */}
          <motion.div
            {...anim({ y: 24, delay: 0.1, duration: 0.8 })}
            className="mt-16 border-t border-border pt-8"
          >
            <ShareButtons
              url={`https://letzhgo.ch/blogs/${post.slug}`}
              title={post.title}
            />
          </motion.div>

        </div>

        {/* CTA-Kasten in voller Breite, wie der Wegweiser-Teaser */}
        <div className="mx-auto max-w-5xl px-6 pb-24 md:pb-32">
          <motion.div
            {...anim({ y: 28, duration: 0.9 })}
            className="overflow-hidden rounded-2xl bg-black px-8 py-12 md:px-12 md:py-16 lg:px-14"
          >
            <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between sm:gap-10">
              <div>
                <h3 className="text-2xl font-bold text-white md:text-3xl">
                  {post.cta
                    ? "Bereit für den nächsten Schritt?"
                    : "Bereit für deinen Führerschein?"}
                </h3>
                <p className="mt-3 max-w-md text-base leading-relaxed text-white/85">
                  {post.cta
                    ? "Starte jetzt und sichere dir deinen Platz."
                    : "Wir begleiten dich von Anfang an. Melde dich jetzt bei uns."}
                </p>
              </div>
              <Link
                href={post.cta?.href ?? "/kontakt"}
                {...(post.cta?.external
                  ? { target: "_blank", rel: "nofollow noopener noreferrer" }
                  : {})}
                className="inline-flex shrink-0 items-center rounded-full bg-white px-7 py-3.5 text-base font-semibold text-foreground no-underline transition-colors duration-200 hover:bg-white/90 sm:self-end sm:mt-4"
              >
                {post.cta?.label ?? "Kontakt aufnehmen"}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related posts */}
      <section className="bg-[#f7f8fa]">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <motion.div {...anim({ y: 24, delay: 0.1, duration: 0.8 })}>
            <h2 className="text-2xl font-bold text-foreground md:text-3xl">
              Weitere Beiträge
            </h2>
          </motion.div>

          <div className="mt-10 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((rel, i) => (
              <motion.div
                key={rel.slug}
                {...anim({ y: 30, delay: 0.15 + i * 0.1, duration: 0.8 })}
              >
                <Link
                  href={`/blogs/${rel.slug}`}
                  className="group block no-underline"
                >
                  <div className="relative aspect-[16/10] overflow-hidden rounded-2xl">
                    <Image
                      src={rel.coverImage}
                      alt={rel.title}
                      fill
                      className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="mt-5">
                    <div className="flex items-center gap-3 text-sm text-muted">
                      <span>{rel.category}</span>
                      <span className="h-1 w-1 rounded-full bg-border" aria-hidden />
                      <time>{formatDate(rel.publishedAt)}</time>
                    </div>
                    <h3 className="mt-2 text-lg font-bold leading-snug text-foreground md:text-xl">
                      {rel.title}
                    </h3>
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
