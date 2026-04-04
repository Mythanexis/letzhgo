"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { WEGWEISER_MOTORRAD_IMAGES } from "@/lib/constants";

export default function WegweiserHomeTeaser() {
  return (
    <section
      className="relative overflow-hidden border-y border-border bg-background"
      aria-labelledby="wegweiser-teaser-heading"
    >
      <div
        className="pointer-events-none absolute -left-32 top-1/2 h-[380px] w-[380px] -translate-y-1/2 rounded-full bg-accent/[0.07] blur-[90px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-24 bottom-0 h-[280px] w-[280px] rounded-full bg-accent/5 blur-[70px]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-10">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: "-80px" }}
            className="lg:col-span-7"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/15 bg-white/80 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-accent shadow-sm backdrop-blur-sm">
              Motorrad
            </span>

            <h2
              id="wegweiser-teaser-heading"
              className="mt-6 text-3xl font-bold leading-[1.12] tracking-tight text-foreground md:text-4xl lg:text-[2.75rem]"
            >
              Wegweiser{" "}
              <span className="bg-gradient-to-r from-accent to-accent-dark bg-clip-text text-transparent">
                Motorrad-Führerschein
              </span>
            </h2>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true, margin: "-40px" }}
              className="mt-8 md:mt-10"
            >
              <blockquote className="relative overflow-hidden rounded-2xl border border-border/80 bg-white/90 p-6 shadow-[0_8px_40px_-12px_rgba(1,68,220,0.12)] backdrop-blur-sm md:p-8">
                <div
                  className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-accent via-accent/70 to-accent-dark"
                  aria-hidden
                />
                <p className="pl-5 text-base font-normal leading-relaxed text-foreground md:text-lg md:leading-relaxed">
                  Oft fragen uns{" "}
                  <span className="font-semibold text-foreground">Mütter</span>,
                  wie ihr Kind bei uns die Motorrad-Prüfung absolvieren kann?
                </p>
              </blockquote>
            </motion.div>

            <p className="mt-8 max-w-xl text-base leading-relaxed text-muted md:text-lg">
              Wir haben einen Wegweiser erstellt, in dem die Abläufe
              zusammengefasst sind. Ansehen könnt Ihr es auf dieser Seite:
            </p>

            <Link
              href="/wegweiser-motorrad-fuehrerschein"
              className="mt-10 inline-flex items-center justify-center rounded-full bg-accent px-8 py-4 text-lg font-medium text-white shadow-[0_4px_20px_-4px_rgba(1,68,220,0.45)] transition-all hover:scale-[1.02] hover:bg-accent-dark hover:shadow-[0_8px_28px_-6px_rgba(1,68,220,0.45)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              Informationen findet ihr hier
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: 24 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: "-80px" }}
            className="lg:col-span-5"
          >
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              <div
                className="absolute -inset-3 rounded-[36px] bg-gradient-to-br from-accent/25 via-transparent to-accent/5 opacity-70 blur-2xl"
                aria-hidden
              />
              <div className="relative transition-transform duration-500 ease-out lg:rotate-[0.5deg] lg:hover:rotate-0">
                <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] border border-white/20 bg-card shadow-[0_24px_60px_-16px_rgba(0,0,0,0.2)] ring-1 ring-black/5">
                  <Image
                    src={WEGWEISER_MOTORRAD_IMAGES.hero}
                    alt="Wegweiser Motorrad-Führerschein – Schild und Motorrad auf Bergstrasse"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, 42vw"
                  />
                  <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/10 via-transparent to-white/10"
                    aria-hidden
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
