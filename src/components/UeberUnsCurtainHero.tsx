"use client";

import Image from "next/image";
import { useMemo, useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";

const QUOTE_BG = "/images/ueber-uns/quote-road.jpg";

const QUOTE_EYEBROW = "So bilden wir aus";

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
  /** Gleicher Zeitbereich wie Vorhang [0, CURTAIN_END]: harte Slots, kein Sichtbarwerden vor slotStart. */
  const slotStart = (index / total) * CURTAIN_END;
  const slotEnd = ((index + 1) / total) * CURTAIN_END;

  /** Unrevealed: sichtbares helles Grau auf dem dunklen Foto; Reveal blendet zu vollem Weiß (kein opacity:0). */
  const DIM_WHITE_ALPHA = 0.27;

  const color = useTransform(scrollYProgress, (p) => {
    let t: number;
    if (reducedMotion) {
      if (p < 0.02) t = 0;
      else if (p >= Math.min(0.09, CURTAIN_END)) t = 1;
      else
        t = (p - 0.02) / (Math.min(0.09, CURTAIN_END) - 0.02);
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
    <motion.span
      style={{ color }}
      className="inline-block mr-[0.3em] will-change-[color]"
    >
      {word}
    </motion.span>
  );
}

/** Volle Hero-Fläche — eine Instanz, statisch (kein Parent-`transform`), liegt unter dem Zitat. */
function HeroFullLayer() {
  return (
    <div className="relative flex min-h-[100dvh] min-h-[100svh] w-full flex-col justify-center overflow-hidden bg-gradient-to-b from-accent-light/35 via-background to-background pt-20 pb-14 md:pt-28 md:pb-20">
      <div
        className="pointer-events-none absolute -right-20 top-1/3 h-72 w-72 rounded-full bg-accent/[0.06] blur-[80px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-16 bottom-0 h-56 w-56 rounded-full bg-accent/5 blur-[70px]"
        aria-hidden
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16">
        <div className="max-w-xl lg:max-w-none lg:pt-2">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Über uns</p>
          <h1 className="mt-4 text-4xl font-bold leading-[1.08] tracking-tight text-foreground md:text-5xl lg:text-[3.25rem] lg:leading-[1.06]">
            Dein Weg,{" "}
            <span className="bg-gradient-to-r from-accent to-accent-dark bg-clip-text text-transparent">
              unsere Mission.
            </span>
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted md:text-xl md:leading-relaxed">
            Wir stehen für strukturierte Ausbildung, moderne Lernmethoden und persönliche
            Betreuung – damit du nicht nur bestehst, sondern sicher unterwegs bist.
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-lg lg:mx-0 lg:max-w-none">
          <div
            className="absolute -inset-1 rounded-[28px] bg-gradient-to-br from-accent/20 via-transparent to-accent/10 opacity-80 blur-xl"
            aria-hidden
          />
          <div className="relative overflow-hidden rounded-[26px] border border-border/80 bg-card shadow-[0_24px_60px_-20px_rgba(0,0,0,0.18)] ring-1 ring-black/[0.04] lg:rotate-[0.75deg] lg:transition-transform lg:duration-500 lg:hover:rotate-0">
            <div className="relative aspect-[4/3] sm:aspect-[5/4]">
              <Image
                src="/images/ueber-uns-hero.png"
                alt="Fahrzeuge und Team von Let'ZHgo"
                fill
                priority
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function UeberUnsCurtainHero() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end end"],
  });

  const words = useMemo(
    () => QUOTE_TEXT.split(/\s+/).filter(Boolean),
    [],
  );

  const quoteImageScale = useTransform(
    scrollYProgress,
    [0, CURTAIN_END],
    [1.06, 1],
  );

  /** Zitat-Ebene über statischem Hero; Öffnung = „Vorhang“ (Hero bewegt sich nicht mit). */
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
        {/* Hero: eine Ebene, kein translateY — bleibt stabil während Scroll/Clip */}
        <div className="absolute inset-0 z-[1] overflow-hidden">
          <HeroFullLayer />
        </div>

        {/* Zitat + Road: darüber, sichtbarer Bereich wächst mit Scroll (ersetzt die alten bewegten Vorhang-Hälften) */}
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
              fill
              className="object-cover object-center brightness-[0.32]"
              sizes="100vw"
            />
          </motion.div>
          <div
            className="absolute inset-0 bg-black/45"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/35 via-black/45 to-black/55"
            aria-hidden
          />

          <div className="relative flex h-full flex-col items-center justify-center px-6 text-center md:px-16">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
              {QUOTE_EYEBROW}
            </p>
            <blockquote className="mx-auto mt-8 max-w-4xl text-2xl font-medium leading-relaxed text-white md:text-3xl lg:text-4xl">
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
