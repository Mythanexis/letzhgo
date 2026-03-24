"use client";

import { motion } from "framer-motion";

const COHORTS = [
  {
    yearKey: "2002",
    year: "Jahrgang 2002",
    subtitle: null as string | null,
    points: [
      "Fahren ab 17 Jahren nicht möglich",
      "können ab 18 Jahren den Lernfahrausweis erwerben",
      "LFA vor 01.01.2021 = keine oblig. Lernphase von 12 Monate",
      "LFA ab 01.01.2021 = oblig. Lernphase von 12 Monate",
    ],
  },
  {
    yearKey: "2003",
    year: "Jahrgang 2003",
    subtitle: null,
    points: [
      "Fahren ab 17 Jahren möglich",
      "können ab 01.01.2021 den Lernfahrausweis erwerben",
      "LFA vor 01.01.2022 = keine oblig. Lernphase von 12 Monate",
      "LFA ab 01.01.2022 = oblig. Lernphase von 12 Monate",
    ],
  },
  {
    yearKey: "2004",
    year: "Jahrgang 2004",
    subtitle: "Neues Gesetz",
    points: [
      "Fahren ab 17 Jahren möglich",
      "durchlaufen die obligatorische Lernphase von 12 Monate",
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
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function AutofahrenAb17Section() {
  return (
    <section
      className="relative overflow-hidden py-24 md:py-36"
      aria-labelledby="autofahren-ab-17-heading"
    >
      {/* Atmosphäre */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-accent-light/70 via-background to-[#eef2ff]/80"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-32 top-0 h-[420px] w-[420px] rounded-full bg-accent/15 blur-[100px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-24 bottom-0 h-[360px] w-[360px] rounded-full bg-accent/10 blur-[90px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, var(--color-border) 1px, transparent 0)`,
          backgroundSize: "28px 28px",
        }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: "-60px" }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-white/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent shadow-sm backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-40" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Wichtige Information
          </div>
          <h2
            id="autofahren-ab-17-heading"
            className="mt-7 text-3xl font-bold tracking-tight text-foreground md:text-5xl md:leading-[1.1]"
          >
            Autofahren ab 17 Jahren
          </h2>
          <p className="mt-4 text-base text-muted md:text-lg">
            Regeln nach Geburtsjahrgang – schnell vergleichen, was für dich gilt.
          </p>
        </motion.header>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
          className="mt-14 grid gap-6 md:mt-20 md:grid-cols-2 lg:grid-cols-3 lg:gap-8"
        >
          {COHORTS.map((cohort) => (
            <motion.article
              key={cohort.yearKey}
              variants={item}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="group relative"
            >
              <div
                className="absolute -inset-px rounded-2xl bg-gradient-to-br from-accent/25 via-accent/5 to-transparent opacity-0 blur-sm transition-opacity duration-500 group-hover:opacity-100"
                aria-hidden
              />
              <div className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-border/90 bg-white/90 p-7 shadow-[0_4px_24px_rgba(0,0,0,0.06)] backdrop-blur-md transition-all duration-300 group-hover:border-accent/35 group-hover:shadow-[0_20px_48px_-12px_rgba(1,68,220,0.18)] md:p-8">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="inline-flex font-black tabular-nums text-accent/90">
                    <span className="text-4xl leading-none tracking-tight transition-transform duration-300 group-hover:scale-105 md:text-5xl">
                      {cohort.yearKey}
                    </span>
                  </span>
                  {cohort.subtitle && (
                    <span className="rounded-full bg-accent px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-white shadow-sm">
                      {cohort.subtitle}
                    </span>
                  )}
                </div>
                <h3 className="mt-4 text-lg font-bold text-foreground">
                  {cohort.year}
                </h3>
                <div className="mt-3 h-px w-12 bg-gradient-to-r from-accent to-transparent" />
                <ul className="mt-5 flex flex-1 flex-col gap-3.5 text-sm leading-relaxed text-muted md:text-[0.9375rem]">
                  {cohort.points.map((point) => (
                    <li
                      key={point}
                      className="flex gap-3 rounded-lg py-0.5 transition-colors duration-200 group-hover:text-foreground/90"
                    >
                      <span
                        className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent shadow-[0_0_8px_rgba(1,68,220,0.5)]"
                        aria-hidden
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
