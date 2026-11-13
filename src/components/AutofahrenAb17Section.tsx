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
    <section className="bg-background" aria-labelledby="autofahren-ab-17-heading">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <motion.div {...anim({ y: 28, duration: 0.9 })} className="text-center">
          <h2
            id="autofahren-ab-17-heading"
            className="text-4xl font-bold text-foreground md:text-5xl"
          >
            Autofahren ab 17 Jahren
          </h2>
          <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-muted md:text-lg">
            Die Regeln ändern sich mit dem Alter. Hier siehst du auf einen
            Blick, was für dich gilt.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          {...(coarse
            ? { animate: "show" as const }
            : { whileInView: "show" as const, viewport: { once: true, margin: "-40px" } })}
          className="mt-16 grid gap-10 md:mt-24 md:grid-cols-3 md:gap-0"
        >
          {AGE_RULES.map((rule, i) => (
            <motion.article
              key={rule.ageKey}
              variants={itemVariants}
              className={`border-t border-border pt-8 md:px-10 md:pt-0 ${
                i === 0 ? "md:border-t-0 md:pl-0" : "md:border-l md:border-t-0 md:border-border"
              } ${i === AGE_RULES.length - 1 ? "md:pr-0" : ""}`}
            >
              <span className="text-4xl font-bold tabular-nums text-accent md:text-5xl">
                {rule.ageKey}
              </span>
              <h3 className="mt-3 text-xl font-bold text-foreground md:text-2xl">{rule.title}</h3>
              <ul className="mt-4 flex flex-col gap-2.5 text-base leading-relaxed text-muted">
                {rule.points.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-muted" aria-hidden />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </motion.div>

        <p className="mt-10 text-sm text-muted md:mt-12">
          LFA = Lernfahrausweis
        </p>
      </div>
    </section>
  );
}
