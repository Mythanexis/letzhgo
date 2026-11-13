"use client";

import { motion } from "framer-motion";
import { useCoarsePointer, useScrollAnim } from "@/hooks/useScrollAnim";

const AGE_RULES = [
  {
    ageKey: "17",
    title: "Lernphase startet",
    points: [
      "Lernfahrausweis Kategorie B kann beantragt werden",
      "Lernfahrten sind nur mit Begleitperson erlaubt",
      "Die praktische Prüfung ist frühestens mit 18 möglich",
    ],
  },
  {
    ageKey: "18",
    title: "Selbstständig fahren",
    points: [
      "Praktische Fahrprüfung kann abgelegt werden",
      "Nach bestandener Prüfung darfst du alleine fahren",
      "Wer den Lernfahrausweis vor 20 beantragt, braucht 12 Monate Lernphase",
    ],
  },
  {
    ageKey: "20",
    title: "Schneller zur Prüfung",
    points: [
      "Lernfahrausweis Kategorie B kann weiterhin beantragt werden",
      "Die obligatorische Lernphase von 12 Monaten entfällt",
      "Die praktische Prüfung ist ohne Mindestdauer der Lernphase möglich",
    ],
  },
] as const;

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const containerStatic = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0, delayChildren: 0 },
  },
};

const itemStatic = {
  hidden: { opacity: 1, y: 0 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0 },
  },
};

export default function AutofahrenAb17Section() {
  const coarse = useCoarsePointer();
  const anim = useScrollAnim();
  const containerVariants = coarse ? containerStatic : container;
  const itemVariants = coarse ? itemStatic : item;

  return (
    <section className="bg-background py-24 md:py-32" aria-labelledby="autofahren-ab-17-heading">
      <div className="mx-auto max-w-6xl px-6">
        <motion.header {...anim({ y: 20, duration: 0.7 })} className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-accent">
            Wichtige Information
          </p>
          <h2
            id="autofahren-ab-17-heading"
            className="mt-4 text-3xl font-bold tracking-tight text-foreground md:text-5xl"
          >
            Autofahren ab 17 Jahren
          </h2>
          <p className="mt-4 text-base text-muted md:text-lg">
            Regeln nach Alter – schnell vergleichen, was für dich gilt.
          </p>
        </motion.header>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          {...(coarse
            ? { animate: "show" as const }
            : { whileInView: "show" as const, viewport: { once: true, margin: "-40px" } })}
          className="mt-14 grid gap-10 md:mt-20 md:grid-cols-3 md:gap-0"
        >
          {AGE_RULES.map((rule, i) => (
            <motion.article
              key={rule.ageKey}
              variants={itemVariants}
              className={`border-b border-border pb-8 last:border-b-0 last:pb-0 md:border-b-0 md:px-10 md:pb-0 ${
                i === 0 ? "md:pl-0" : "md:border-l md:border-border"
              } ${i === AGE_RULES.length - 1 ? "md:pr-0" : ""}`}
            >
              <span className="font-black leading-none tabular-nums text-accent text-5xl md:text-6xl">
                {rule.ageKey}
              </span>
              <h3 className="mt-3 text-lg font-bold text-foreground md:text-xl">{rule.title}</h3>
              <ul className="mt-3 flex flex-col gap-2 text-sm leading-relaxed text-muted md:text-[0.9375rem]">
                {rule.points.map((point) => (
                  <li key={point} className="flex gap-2.5">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted" aria-hidden />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </motion.div>

        <p className="mt-10 text-left text-xs font-medium text-muted md:mt-12">
          LFA = Lernfahrausweis
        </p>
      </div>
    </section>
  );
}
