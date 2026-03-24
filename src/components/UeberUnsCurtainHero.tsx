"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

const QUOTE_EYEBROW = "So bilden wir aus";

const QUOTE_TEXT =
  "Wir starten mit Zuhören – wirklich zuhören – um dein aktuelles Fahrniveau und dein Lerntempo zu verstehen. Darauf aufbauend gestalten wir eine Ausbildung, die strukturiert, realistisch und auf dich zugeschnitten ist. Jede Fahrstunde gibt dir Sicherheit und lässt dich Schritt für Schritt wachsen.";

/** Volle Hero-Fläche (zweimal gemountet für Ober-/Unter-Vorhang). `mirror`: unterer Spiegel ohne doppeltes h1. */
function HeroFullLayer({ mirror = false }: { mirror?: boolean }) {
  const TitleTag = mirror ? "div" : "h1";
  return (
    <div className="relative min-h-[100dvh] min-h-[100svh] w-full overflow-hidden bg-gradient-to-b from-accent-light/35 via-background to-background pt-20 pb-14 md:pt-28 md:pb-20">
      <div
        className="pointer-events-none absolute -right-20 top-1/3 h-72 w-72 rounded-full bg-accent/[0.06] blur-[80px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-16 bottom-0 h-56 w-56 rounded-full bg-accent/5 blur-[70px]"
        aria-hidden
      />

      <div
        className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16"
        {...(mirror ? { "aria-hidden": true as const } : {})}
      >
        <div className="max-w-xl lg:max-w-none lg:pt-2">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Über uns</p>
          <TitleTag className="mt-4 text-4xl font-bold leading-[1.08] tracking-tight text-foreground md:text-5xl lg:text-[3.25rem] lg:leading-[1.06]">
            Dein Weg,{" "}
            <span className="bg-gradient-to-r from-accent to-accent-dark bg-clip-text text-transparent">
              unsere Mission.
            </span>
          </TitleTag>
          <p className="mt-6 text-lg leading-relaxed text-muted md:text-xl md:leading-relaxed">
            Wir stehen für strukturierte Ausbildung, moderne Lernmethoden und persönliche
            Betreuung – damit du nicht nur bestehst, sondern sicher unterwegs bist.
          </p>
          <div
            className="mt-8 h-px max-w-[120px] bg-gradient-to-r from-accent to-transparent"
            aria-hidden
          />
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
                priority={!mirror}
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

/**
 * Vollbild-Hero mit Vorhang-Öffnung (Mitte): oben nach oben, unten nach unten.
 * h-[50dvh] + transform in vh (nicht %), damit Layout zuverlässig rendert.
 */
export default function UeberUnsCurtainHero() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end end"],
  });

  const topRange = prefersReducedMotion ? ([0, 0.08, 1] as const) : ([0, 1] as const);
  const topOut = prefersReducedMotion
    ? (["0%", "-100%", "-100%"] as const)
    : (["0%", "-100%"] as const);
  const bottomOut = prefersReducedMotion
    ? (["0%", "100%", "100%"] as const)
    : (["0%", "100%"] as const);

  const yTop = useTransform(scrollYProgress, topRange, topOut);
  const yBottom = useTransform(scrollYProgress, topRange, bottomOut);

  return (
    <div ref={scrollRef} className="relative w-full" style={{ height: "280vh" }}>
      <div className="sticky top-0 isolate flex h-[100svh] min-h-[100svh] w-full flex-col overflow-hidden bg-neutral-950 md:h-[100dvh] md:min-h-[100dvh]">
        {/* Zitat — eigener Stacking-Context, feste Farben (nicht nur Tailwind-Arbitrary) */}
        <div
          className="absolute inset-0 z-[1] flex flex-col items-center justify-center px-6 md:px-16"
          style={{ backgroundColor: "#0a0a0a" }}
        >
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
            {QUOTE_EYEBROW}
          </p>
          <p
            className="mt-8 max-w-4xl text-center text-2xl font-medium leading-relaxed md:text-3xl lg:text-4xl"
            style={{ color: "#fafafa" }}
          >
            {QUOTE_TEXT}
          </p>
        </div>

        {/* Oberer Vorhang */}
        <motion.div
          style={{ y: yTop }}
          className="pointer-events-none absolute left-0 right-0 top-0 z-[2] h-1/2 overflow-hidden bg-background shadow-[0_2px_0_rgba(0,0,0,0.04)]"
        >
          <div className="absolute left-0 right-0 top-0 h-[100dvh] min-h-[100svh] w-full max-w-none">
            <HeroFullLayer />
          </div>
        </motion.div>

        {/* Unterer Vorhang */}
        <motion.div
          style={{ y: yBottom }}
          className="pointer-events-none absolute left-0 right-0 top-1/2 z-[2] h-1/2 overflow-hidden bg-background shadow-[0_-2px_0_rgba(0,0,0,0.04)]"
        >
          <div className="absolute bottom-0 left-0 right-0 h-[100dvh] min-h-[100svh] w-full max-w-none">
            <HeroFullLayer mirror />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
