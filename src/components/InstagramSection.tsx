"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const INSTAGRAM_PROFILE = "https://www.instagram.com/letzhgo/";

const POSTS = [
  { image: "/images/instagram/post-1.jpg", href: "https://www.instagram.com/p/DVq-VRVjLlh/?utm_source=ig_embed&utm_campaign=loading" },
  { image: "/images/instagram/post-2.jpg", href: "https://www.instagram.com/p/DV8GWswjB53/?utm_source=ig_embed&utm_campaign=loading" },
  { image: "/images/instagram/post-3.jpg", href: "https://www.instagram.com/p/DWONznsjNMk/?utm_source=ig_embed&utm_campaign=loading" },
  { image: "/images/instagram/post-4.jpg", href: "https://www.instagram.com/p/DV-igLBDMPb/?utm_source=ig_embed&utm_campaign=loading" },
  { image: "/images/instagram/post-5.jpg", href: "https://www.instagram.com/p/DWDv8pNDCsE/?utm_source=ig_embed&utm_campaign=loading" },
  { image: "/images/instagram/post-6.jpg", href: "https://www.instagram.com/p/DWBcBDzDPBt/?utm_source=ig_embed&utm_campaign=loading" },
];

export default function InstagramSection() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: "-80px" }}
          className="text-center"
        >
          <p className="text-sm font-medium uppercase tracking-widest text-accent">
            Social Media
          </p>
          <h2 className="mt-4 text-3xl font-bold text-foreground md:text-4xl">
            Bestandene Prüfungen & mehr
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted">
            Folge uns auf Instagram und feiere mit uns die Erfolge unserer
            Fahrschüler:innen!
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-5 lg:grid-cols-3">
          {POSTS.map((post, i) => (
            <motion.div
              key={post.href}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: i * 0.07,
                ease: [0.16, 1, 0.3, 1],
              }}
              viewport={{ once: true, margin: "-40px" }}
            >
              <a
                href={post.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block aspect-square overflow-hidden rounded-2xl bg-card shadow-sm transition-shadow hover:shadow-xl"
              >
                <Image
                  src={post.image}
                  alt="Instagram Beitrag"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 33vw"
                />
                <div className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <svg
                    className="h-10 w-10 text-white drop-shadow-lg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" />
                    <circle cx="12" cy="12" r="5" />
                    <circle cx="17.5" cy="6.5" r="1.5" />
                  </svg>
                </div>
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="mt-14 text-center"
        >
          <a
            href={INSTAGRAM_PROFILE}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full bg-accent px-8 py-4 text-lg font-medium text-white transition-all hover:scale-[1.02] hover:bg-accent-dark"
          >
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <circle cx="12" cy="12" r="5" />
              <circle cx="17.5" cy="6.5" r="1.5" />
            </svg>
            Alle Beiträge anzeigen
          </a>
        </motion.div>
      </div>
    </section>
  );
}
