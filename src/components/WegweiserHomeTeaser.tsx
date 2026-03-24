"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { WEGWEISER_MOTORRAD_IMAGES } from "@/lib/constants";

export default function WegweiserHomeTeaser() {
  return (
    <section
      className="border-y border-border bg-background"
      aria-labelledby="wegweiser-teaser-heading"
    >
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: "-80px" }}
          >
            <p className="text-sm font-medium uppercase tracking-widest text-accent">
              Motorrad
            </p>
            <h2
              id="wegweiser-teaser-heading"
              className="mt-4 text-3xl font-bold leading-tight text-foreground md:text-4xl"
            >
              Wegweiser{" "}
              <span className="text-accent">Motorrad-Führerschein</span>
            </h2>
            <p className="mt-3 text-sm font-semibold uppercase tracking-wide text-foreground">
              Oft fragen uns Mütter, wie ihr Kind bei uns die Motorrad-Prüfung
              absolvieren kann?
            </p>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted md:text-lg">
              Wir haben einen Wegweiser erstellt, in dem die Abläufe
              zusammengefasst sind. Ansehen könnt Ihr es auf dieser Seite:
            </p>

            <Link
              href="/wegweiser-motorrad-fuehrerschein"
              className="mt-10 inline-flex items-center justify-center rounded-full bg-accent px-8 py-4 text-lg font-medium text-white transition-all hover:scale-[1.02] hover:bg-accent-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              Informationen findet ihr hier
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: "-80px" }}
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] border border-border bg-card shadow-xl shadow-black/5">
              <Image
                src={WEGWEISER_MOTORRAD_IMAGES.hero}
                alt="Wegweiser Motorrad-Führerschein – Schild und Motorrad auf Bergstrasse"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
