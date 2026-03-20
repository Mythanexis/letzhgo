"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { IMAGES } from "@/lib/constants";

const QUOTE_TEXT =
  "Die Freude am Fahren bleibt nicht weiter ein Traum, sondern wird pure Wirklichkeit. Du wirst erstaunt sein, wie viel Vertrauen Du in Dich und ins Fahrzeug nach diesen Lektionen haben wirst.";

const words = QUOTE_TEXT.split(" ");

function Word({
  word,
  index,
  total,
  scrollYProgress,
}: {
  word: string;
  index: number;
  total: number;
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const start = (index / total) * 0.7;
  const end = start + 0.7 / total;
  const opacity = useTransform(scrollYProgress, [start, end], [0.15, 1]);

  return (
    <motion.span style={{ opacity }} className="inline-block mr-[0.3em] will-change-[opacity]">
      {word}
    </motion.span>
  );
}

export default function ScrollRevealQuote() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1.1, 1]);
  const buttonOpacity = useTransform(scrollYProgress, [0.5, 0.65], [0, 1]);

  return (
    <section ref={containerRef} className="relative min-h-[160vh] w-full will-change-transform">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
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
            Unsere Philosophie
          </p>
          <blockquote className="mx-auto mt-8 max-w-4xl text-2xl font-medium leading-relaxed text-white md:text-3xl lg:text-4xl">
            {words.map((word, i) => (
              <Word
                key={`${word}-${i}`}
                word={word}
                index={i}
                total={words.length}
                scrollYProgress={scrollYProgress}
              />
            ))}
          </blockquote>
          <motion.div style={{ opacity: buttonOpacity }}>
            <Link
              href="/ueber-uns"
              className="mt-10 inline-block rounded-full border border-white/30 px-6 py-3 text-sm text-white transition-colors hover:bg-white/10"
            >
              Über Let&apos;ZHgo
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
