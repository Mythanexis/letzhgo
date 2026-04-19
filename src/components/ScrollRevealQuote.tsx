"use client";

import { useMemo, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { IMAGES } from "@/lib/constants";
import { useCoarsePointer } from "@/hooks/useScrollAnim";

const QUOTE_TEXT =
  "Die Freude am Fahren bleibt nicht weiter ein Traum, sondern wird pure Wirklichkeit. Du wirst erstaunt sein, wie viel Vertrauen Du in Dich und ins Fahrzeug nach diesen Lektionen haben wirst.";

const DEFAULT_CTA = {
  href: "/ueber-uns",
  label: "Über Let'ZHgo",
} as const;

export type ScrollRevealQuoteProps = {
  quote?: string;
  eyebrow?: string;
  cta?: { href: string; label: string } | null;
};

function ScrollRevealQuoteStatic({
  quote,
  eyebrow,
  cta,
}: {
  quote: string;
  eyebrow: string;
  cta: { href: string; label: string } | null;
}) {
  return (
    <section
      data-navbar-dark
      className="relative min-h-[100svh] w-full overflow-hidden"
    >
      <div className="absolute inset-0">
        <Image
          src={IMAGES.quoteBg}
          alt=""
          fill
          className="object-cover brightness-[0.25]"
          sizes="100vw"
          priority
        />
      </div>
      <div className="relative z-[1] flex min-h-[100svh] flex-col items-center justify-center px-6 py-24 text-center md:px-16">
        <p className="text-sm uppercase tracking-widest text-accent">{eyebrow}</p>
        <blockquote className="mx-auto mt-8 max-w-4xl text-2xl font-medium leading-relaxed text-white md:text-3xl lg:text-4xl">
          {quote}
        </blockquote>
        {cta ? (
          <Link
            href={cta.href}
            className="mt-10 inline-block rounded-full border border-white/30 px-6 py-3 text-sm text-white transition-colors hover:bg-white/10"
          >
            {cta.label}
          </Link>
        ) : null}
      </div>
    </section>
  );
}

function QuoteWord({
  word,
  index,
  total,
  scrollYProgress,
}: {
  word: string;
  index: number;
  total: number;
  scrollYProgress: MotionValue<number>;
}) {
  const start = (index / total) * 0.7;
  const end = start + 0.7 / total;
  const opacity = useTransform(scrollYProgress, [start, end], [0.15, 1]);
  return (
    <motion.span style={{ opacity }} className="inline">
      {word}
      {index < total - 1 ? " " : ""}
    </motion.span>
  );
}

function ScrollRevealQuoteScroll({
  quote,
  eyebrow,
  cta,
}: {
  quote: string;
  eyebrow: string;
  cta: { href: string; label: string } | null;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const words = useMemo(() => quote.split(/\s+/).filter(Boolean), [quote]);

  const minHeightClass =
    words.length > 42 ? "min-h-[200vh]" : "min-h-[160vh]";

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1.1, 1]);
  const buttonOpacity = useTransform(scrollYProgress, [0.5, 0.65], [0, 1]);

  return (
    <section
      ref={containerRef}
      data-navbar-dark
      className={`relative w-full will-change-transform ${minHeightClass}`}
    >
      <div className="sticky top-0 h-dvh w-full overflow-hidden">
        <motion.div className="absolute inset-0" style={{ scale: imageScale }}>
          <Image
            src={IMAGES.quoteBg}
            alt=""
            fill
            className="object-cover brightness-[0.25]"
            sizes="100vw"
          />
        </motion.div>
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center md:px-16">
          <p className="text-sm uppercase tracking-widest text-accent">
            {eyebrow}
          </p>
          <blockquote className="mx-auto mt-8 max-w-4xl text-2xl font-medium leading-relaxed text-white md:text-3xl lg:text-4xl">
            {words.map((word, i) => (
              <QuoteWord
                key={`${i}-${word}`}
                word={word}
                index={i}
                total={words.length}
                scrollYProgress={scrollYProgress}
              />
            ))}
          </blockquote>
          {cta ? (
            <motion.div style={{ opacity: buttonOpacity }}>
              <Link
                href={cta.href}
                className="mt-10 inline-block rounded-full border border-white/30 px-6 py-3 text-sm text-white transition-colors hover:bg-white/10"
              >
                {cta.label}
              </Link>
            </motion.div>
          ) : null}
        </div>
      </div>
    </section>
  );
}

export default function ScrollRevealQuote({
  quote = QUOTE_TEXT,
  eyebrow = "Unsere Philosophie",
  cta = DEFAULT_CTA,
}: ScrollRevealQuoteProps) {
  const coarse = useCoarsePointer();
  if (coarse) {
    return (
      <ScrollRevealQuoteStatic quote={quote} eyebrow={eyebrow} cta={cta} />
    );
  }
  return (
    <ScrollRevealQuoteScroll quote={quote} eyebrow={eyebrow} cta={cta} />
  );
}
