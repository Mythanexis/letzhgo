"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { getLatestPosts, formatDate } from "@/lib/blog-data";
import { useScrollAnim } from "@/hooks/useScrollAnim";

export default function BlogHomeSection() {
  const anim = useScrollAnim();
  const posts = getLatestPosts(3);
  const [featured, ...side] = posts;

  return (
    <section className="bg-[#0a0a0a]" data-navbar-dark>
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        {/* Header */}
        <motion.div {...anim({ y: 30, delay: 0.1, duration: 1 })} className="flex items-end justify-between">
          <h2 className="text-2xl font-bold text-white md:text-3xl">
            Aus unserem Blog
          </h2>
          <Link
            href="/blogs"
            className="group relative hidden items-center gap-2 pb-0.5 text-base font-semibold text-white no-underline transition-colors after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:origin-left after:scale-x-0 after:bg-white after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.16,1,0.3,1)] after:content-[''] hover:text-white/80 hover:after:scale-x-100 sm:inline-flex"
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
          <motion.div {...anim({ y: 40, delay: 0.2, duration: 1 })} className="lg:row-span-2">
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
                <span className="text-sm text-white/70">{featured.category}</span>
                <h3 className="mt-3 text-xl font-bold leading-tight text-white md:text-2xl lg:text-3xl">
                  {featured.title}
                </h3>
                <p className="mt-2 line-clamp-2 max-w-lg text-sm text-white/70 md:text-base">
                  {featured.excerpt}
                </p>
                <div className="mt-4 flex items-center gap-3 text-sm text-white/50">
                  <time>{formatDate(featured.publishedAt)}</time>
                  <span className="h-1 w-1 rounded-full bg-white/30" />
                  <span>{featured.readTime} Lesezeit</span>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Side posts — each with image, stacked */}
          {side.map((post, i) => (
            <motion.div key={post.slug} {...anim({ y: 30, delay: 0.3 + i * 0.15, duration: 1 })}>
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
                  <span className="text-sm text-white/70">{post.category}</span>
                  <h3 className="mt-2 text-base font-bold leading-snug text-white md:text-lg">
                    {post.title}
                  </h3>
                  <div className="mt-2 flex items-center gap-3 text-sm text-white/50">
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
        <motion.div {...anim({ delay: 0.5, duration: 0.8 })} className="mt-8 text-center sm:hidden">
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
