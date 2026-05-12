"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useScrollAnim } from "@/hooks/useScrollAnim";
import { EDOOBOX_LINKS } from "@/lib/constants";

const VORMITTAG_ITEMS = [
  "Grundmanöver gezielt üben",
  "Bremsen richtig einsetzen",
  "Individuelles Feedback",
  "Auf dein Können abgestimmt",
];

const NACHMITTAG_ITEMS = [
  "Prüfungsrelevante Strecke fahren",
  "Alle wichtigen Elemente erleben",
  "Kurvenfahren im Fokus",
  "Tipps & Tricks vom Profi",
];

function CheckIcon() {
  return (
    <svg className="mt-0.5 h-4 w-4 shrink-0 text-accent" viewBox="0 0 16 16" fill="none">
      <path
        d="M3 8l3.5 3.5L13 5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function PruefungsvorbereitungSection() {
  const anim = useScrollAnim();

  return (
    <section className="relative overflow-hidden" aria-label="Tageskurs Motorrad Prüfungsvorbereitung">
      <div className="pointer-events-none absolute inset-0">
        <Image
          src="/images/pruefungsvorbereitung-bg.webp"
          alt=""
          role="presentation"
          fill
          className="object-cover blur-[2px] scale-105"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-20 md:px-8 md:py-24">
        <div className="grid items-start gap-12 lg:grid-cols-[1fr_480px]">

          {/* Left */}
          <motion.div {...anim({ y: 30, delay: 0.15, duration: 1 })}>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/60">
              Tageskurs · Motorrad
            </p>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-white md:text-4xl lg:text-5xl">
              Prüfungs&shy;vorbereitung –{" "}
              <span className="bg-linear-to-r from-white to-accent bg-clip-text text-transparent">Bestens vorbereitet.</span>
            </h2>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-white/70 md:text-lg">
              Du hast den Grundkurs abgeschlossen und möchtest dich optimal auf
              die praktische Motorradprüfung vorbereiten? In unserem Tageskurs
              frischen wir dein Wissen auf, verbessern deine Fahrtechnik und
              stärken dein Selbstvertrauen – damit du am Prüfungstag souverän
              und sicher unterwegs bist.
            </p>
            <p className="mt-6 max-w-lg text-sm italic text-white/40">
              «Wir wünschen dir kein Glück zur Prüfung, wir wünschen dir viel
              Erfolg – denn Glück braucht nur, wer nicht gelernt hat.»
            </p>
          </motion.div>

          {/* Right: info card */}
          <motion.div {...anim({ y: 30, delay: 0.3, duration: 1 })}>
            <div className="rounded-3xl bg-white/95 p-6 shadow-xl backdrop-blur-sm md:p-8">
              <div className="flex items-center justify-between">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                  Kursumfang
                </p>
                <div className="rounded-full bg-accent px-4 py-2 text-xs font-bold uppercase tracking-wide text-white shadow-md">
                  1 Tag intensiv
                </div>
              </div>

              <div className="mt-6 border-t border-border pt-6">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">
                  Vormittag · Grundmanöver & Bremsen
                </p>
                <ul className="mt-3 space-y-2">
                  {VORMITTAG_ITEMS.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-muted">
                      <CheckIcon />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 border-t border-border pt-6">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">
                  Nachmittag · Praxis auf der Strasse
                </p>
                <ul className="mt-3 space-y-2">
                  {NACHMITTAG_ITEMS.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-muted">
                      <CheckIcon />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8">
                <a
                  href={EDOOBOX_LINKS.motorrad}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="inline-flex w-full items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:scale-[1.02] hover:bg-accent-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-dark focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                >
                  Jetzt anmelden
                </a>
                <p className="mt-3 text-xs text-muted">
                  Die Anmeldung erfolgt über unsere Kursplattform.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
