"use client";

import Image from "next/image";
import { useMemo, useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
const QUOTE_BG = "/images/ueber-uns/quote-car-interior.jpg";

const QUOTE_TEXT =
  "Wir starten mit Zuhören – wirklich zuhören – um dein aktuelles Fahrniveau und dein Lerntempo zu verstehen. Darauf aufbauend gestalten wir eine Ausbildung, die strukturiert, realistisch und auf dich zugeschnitten ist. Jede Fahrstunde gibt dir Sicherheit und lässt dich Schritt für Schritt wachsen.";

/**
 * 0–CURTAIN_END: Clip + Word-Reveal; letztes Wort exakt bei CURTAIN_END voll.
 * Großer Anteil (~wenig Rest nach 1) = nach der Quote keine endlose Leer-Scroll-Phase.
 */
const CURTAIN_END = 0.88;

/** Mehr Höhe = ruhigeres Scrollen pro % (weniger „ein Ruck = durch“). Mit CURTAIN_END bleibt ~12 % nur Nachlauf. */
const SCROLL_TRACK_VH = 330;

function CurtainWord({
  word,
  index,
  total,
  scrollYProgress,
  reducedMotion,
}: {
  word: string;
  index: number;
  total: number;
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
  reducedMotion: boolean;
}) {
  const slotStart = (index / total) * CURTAIN_END;
  const slotEnd = ((index + 1) / total) * CURTAIN_END;
  const DIM_WHITE_ALPHA = 0.27;
  const color = useTransform(scrollYProgress, (p) => {
    let t: number;
    if (reducedMotion) {
      if (p < 0.02) t = 0;
      else if (p >= Math.min(0.09, CURTAIN_END)) t = 1;
      else t = (p - 0.02) / (Math.min(0.09, CURTAIN_END) - 0.02);
    } else if (p < slotStart) {
      t = 0;
    } else if (p >= slotEnd) {
      t = 1;
    } else {
      t = (p - slotStart) / (slotEnd - slotStart);
    }
    const a = DIM_WHITE_ALPHA + (1 - DIM_WHITE_ALPHA) * t;
    return `rgba(255,255,255,${a})`;
  });

  return (
    <motion.span style={{ color }} className="inline will-change-[color]">
      {word}
      {index < total - 1 ? " " : ""}
    </motion.span>
  );
}

/** Volle Hero-Fläche — eine Instanz, statisch (kein Parent-`transform`), liegt unter dem Zitat. */
function HeroFullLayer({ reducedMotion }: { reducedMotion: boolean }) {
  return (
    <div className="relative flex min-h-[100dvh] min-h-[100svh] w-full flex-col justify-center overflow-hidden bg-background pt-20 pb-14 md:pt-28 md:pb-20">
      <div className="relative mx-auto grid max-w-7xl items-center gap-8 px-6 md:grid-cols-2 md:gap-14">
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 24 }}
          animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
          transition={reducedMotion ? undefined : { duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="text-4xl font-bold leading-tight text-foreground md:text-5xl">
            Dein Weg, <span className="text-accent">unsere Mission</span>
          </h1>
          <p className="mt-4 max-w-md text-base leading-relaxed text-muted md:text-lg">
            Wir stehen für strukturierte Ausbildung, moderne Lernmethoden und
            persönliche Betreuung, damit du nicht nur bestehst, sondern
            sicher unterwegs bist.
          </p>
        </motion.div>

        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 28, scale: 0.98 }}
          animate={reducedMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
          transition={reducedMotion ? undefined : { duration: 0.8, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-[0_18px_40px_-24px_rgba(8,26,58,0.35)]"
        >
          <Image
            src="/images/ueber-uns-team.jpg"
            alt="Das Let'ZHgo Team"
            fill
            priority
            className="object-cover object-center"
            sizes="(max-width: 767px) 100vw, 46vw"
          />
        </motion.div>
      </div>
    </div>
  );
}

function UeberUnsCurtainHeroScroll() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const words = useMemo(() => QUOTE_TEXT.split(/\s+/).filter(Boolean), []);

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end end"],
  });

  const quoteImageScale = useTransform(
    scrollYProgress,
    [0, CURTAIN_END],
    [1.06, 1],
  );

  const quoteClipPath = useTransform(scrollYProgress, (p) => {
    if (prefersReducedMotion) {
      const t = Math.min(1, p / 0.06);
      const inset = Math.max(0, 50 * (1 - t));
      return `inset(${inset}% 0 ${inset}% 0)`;
    }
    const t = Math.min(1, p / CURTAIN_END);
    const inset = Math.max(0, 50 * (1 - t));
    return `inset(${inset}% 0 ${inset}% 0)`;
  });

  return (
    <div
      ref={scrollRef}
      className="relative w-full"
      style={{ height: `${SCROLL_TRACK_VH}vh` }}
    >
      <div className="sticky top-0 isolate flex h-[100svh] min-h-[100svh] w-full flex-col overflow-hidden md:h-[100dvh] md:min-h-[100dvh]">
        <div className="absolute inset-0 z-[1] overflow-hidden">
          <HeroFullLayer reducedMotion={!!prefersReducedMotion} />
        </div>

        <motion.div
          className="pointer-events-none absolute inset-0 z-[2] overflow-hidden"
          style={{ clipPath: quoteClipPath }}
        >
          <motion.div
            className="absolute inset-0"
            style={{ scale: quoteImageScale }}
          >
            <Image
              src={QUOTE_BG}
              alt=""
              aria-hidden="true"
              fill
              className="object-cover object-center brightness-[0.5]"
              sizes="100vw"
            />
          </motion.div>
          <div
            className="absolute inset-0 bg-black/28"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/20 via-black/28 to-black/36"
            aria-hidden
          />

          <div className="relative flex h-full flex-col items-center justify-center px-6 text-center md:px-16">
            <blockquote className="mx-auto max-w-4xl text-2xl font-medium leading-relaxed text-white md:text-3xl lg:text-4xl">
              {words.map((word, i) => (
                <CurtainWord
                  key={`${i}-${word}`}
                  word={word}
                  index={i}
                  total={words.length}
                  scrollYProgress={scrollYProgress}
                  reducedMotion={!!prefersReducedMotion}
                />
              ))}
            </blockquote>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default function UeberUnsCurtainHero() {
  return <UeberUnsCurtainHeroScroll />;
}
