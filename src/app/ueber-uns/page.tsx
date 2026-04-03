"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import UeberUnsCurtainHero from "@/components/UeberUnsCurtainHero";
import InstructorCard from "@/components/InstructorCard";
import Stats from "@/components/Stats";
import FAQ from "@/components/FAQ";
import { INSTRUCTORS, INSTRUCTORS_HOMEPAGE_ORDER } from "@/lib/constants";

export default function UeberUnsPage() {
  const instructorsInOrder = INSTRUCTORS_HOMEPAGE_ORDER.map((name) =>
    INSTRUCTORS.find((instructor) => instructor.name === name),
  ).filter((instructor): instructor is (typeof INSTRUCTORS)[number] => Boolean(instructor));

  return (
    <>
      <UeberUnsCurtainHero />

      {/* Über */}
      <section className="relative overflow-hidden bg-[#f7f8fa]">
        <div
          className="pointer-events-none absolute right-0 top-1/2 h-80 w-80 -translate-y-1/2 translate-x-1/4 rounded-full bg-accent/[0.09] blur-[100px]"
          aria-hidden
        />

        <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true, margin: "-60px" }}
              className="order-2 lg:order-1"
            >
              <p className="text-sm font-medium uppercase tracking-widest text-accent">
                Über uns
              </p>
              <h2 className="mt-4 text-3xl font-bold leading-[1.12] tracking-tight text-foreground md:text-4xl lg:text-[2.5rem]">
                Ein Team,{" "}
                <span className="text-accent">ein Ziel:</span> dass du sicher
                fahren kannst.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-muted md:text-xl">
                Bei Let&apos;ZHgo! ist jede Fahrausbildung individuell. Wir
                glauben, dass Sicherheit, Vertrauen und Geduld die Grundlage für
                nachhaltiges Lernen sind – mit klarer Anleitung, ehrlichem
                Feedback und echter Leidenschaft fürs Fahren.
              </p>
              <p className="mt-5 text-lg leading-relaxed text-muted">
                Wir richten uns nach deinem Tempo und deinem Alltag. Wo es hakt,
                nehmen wir uns die Zeit; wo es gut läuft, geben wir dir Raum –
                damit du nicht nur die Prüfung machst, sondern dich danach im
                echten Verkehr wohlfühlst.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
                <Link
                  href="/kontakt"
                  className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-accent-dark"
                >
                  Kontakt aufnehmen
                </Link>
                <Link
                  href="/services"
                  className="text-sm font-semibold text-foreground underline decoration-border underline-offset-4 transition hover:text-accent hover:decoration-accent"
                >
                  Unsere Services
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true, margin: "-60px" }}
              className="order-1 lg:order-2"
            >
              <div className="relative mx-auto w-full max-w-lg lg:mx-0 lg:max-w-none">
                <div
                  className="pointer-events-none absolute -inset-3 rounded-[32px] bg-gradient-to-br from-accent/15 via-transparent to-accent/10 blur-2xl"
                  aria-hidden
                />
                <div className="relative overflow-hidden rounded-[26px] border border-border/80 bg-card shadow-[0_24px_60px_-24px_rgba(0,0,0,0.22)] ring-1 ring-black/[0.04] lg:-rotate-[0.6deg] lg:transition-transform lg:duration-500 lg:hover:rotate-0">
                  <div className="relative aspect-[4/3] sm:aspect-[5/4]">
                    <Image
                      src="/images/ueber-uns-hero.png"
                      alt="Flotte und Team von Let'ZHgo"
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 1024px) 100vw, 42vw"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Fahrlehrer */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="text-center">
            <p className="text-sm uppercase tracking-widest text-accent">
              Unsere Fahrlehrer
            </p>
            <h2 className="mt-4 text-3xl font-bold md:text-4xl">
              Die, die immer bei dir sind.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted">
              Unser Team steht für Erfahrung, Geduld und echte Leidenschaft fürs
              Fahren – damit du dich von Anfang an gut aufgehoben fühlst.
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {instructorsInOrder.map((instructor, i) => (
              <InstructorCard key={instructor.name} {...instructor} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* About bottom */}
      <section className="bg-[#f7f8fa]">
        <div className="mx-auto max-w-7xl px-6 py-32 md:py-40">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid items-center gap-12 lg:grid-cols-2"
          >
            <h2 className="text-3xl font-bold md:text-4xl">
              Ausbildung mit Erfahrung, geführt von Klarheit –{" "}
              <span className="text-accent">für nachhaltige Sicherheit.</span>
            </h2>
            <p className="text-lg text-muted">
              Unsere Ausbildung schafft die Grundlage für echte Sicherheit im
              Strassenverkehr. Wir nehmen uns Zeit, dein Fahrniveau zu verstehen,
              geben dir klare Strukturen und begleiten dich Schritt für Schritt –
              mit Fokus auf dein Ziel: selbstständig und souverän unterwegs zu sein.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quote — Wald, leicht abgedunkelt; Bild unten ausrichten (Strasse), Text vertikal mittig */}
      <section
        className="relative flex min-h-[36rem] items-center justify-center overflow-hidden px-6 py-16 md:min-h-[44rem] md:py-20"
        data-navbar-dark
      >
        <Image
          src="/images/ueber-uns-quote-forest.png"
          alt=""
          fill
          className="object-cover object-bottom"
          sizes="100vw"
          priority={false}
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/55 via-black/45 to-black/65"
          aria-hidden
        />
        <div className="relative z-10 mx-auto w-full max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mx-auto max-w-5xl text-center"
          >
            <blockquote className="not-italic text-5xl font-semibold leading-[1.15] tracking-tight text-white drop-shadow-[0_2px_24px_rgba(0,0,0,0.35)] md:text-6xl md:leading-[1.12]">
              &ldquo;Jede Fahrt beginnt mit dem ersten Gang – entscheidend ist,
              dass du losfährst.&rdquo;
            </blockquote>
            <p className="mt-10 text-base text-white/75 md:mt-12 md:text-lg">
              — Samir Radič, Gründer Let&apos;ZHgo
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <Stats surface="light" />

      {/* FAQ */}
      <FAQ className="bg-[#f7f8fa]" />
    </>
  );
}
