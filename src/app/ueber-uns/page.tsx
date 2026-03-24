"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Breadcrumbs from "@/components/Breadcrumbs";
import ScrollRevealQuote from "@/components/ScrollRevealQuote";
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
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-accent-light/35 via-background to-background pt-20 pb-14 md:pt-28 md:pb-20">
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
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className="text-sm font-semibold uppercase tracking-[0.2em] text-accent"
            >
              Über uns
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="mt-4 text-4xl font-bold leading-[1.08] tracking-tight text-foreground md:text-5xl lg:text-[3.25rem] lg:leading-[1.06]"
            >
              Dein Weg,{" "}
              <span className="bg-gradient-to-r from-accent to-accent-dark bg-clip-text text-transparent">
                unsere Mission.
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 text-lg leading-relaxed text-muted md:text-xl md:leading-relaxed"
            >
              Wir stehen für strukturierte Ausbildung, moderne Lernmethoden und
              persönliche Betreuung – damit du nicht nur bestehst, sondern sicher
              unterwegs bist.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mt-8 h-px max-w-[120px] bg-gradient-to-r from-accent to-transparent"
              aria-hidden
            />
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="relative mx-auto w-full max-w-lg lg:mx-0 lg:max-w-none"
          >
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
          </motion.div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 py-6 md:py-8">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Über uns" },
          ]}
        />
      </div>

      {/* Über (Kurz) */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <p className="text-sm uppercase tracking-widest text-accent">Über</p>
          <p className="mt-6 text-lg leading-relaxed text-muted">
            Bei Let&apos;ZHgo! ist jede Fahrausbildung individuell. Wir glauben,
            dass Sicherheit, Vertrauen und Geduld die Grundlage für nachhaltiges
            Lernen sind. Unsere Aufgabe ist es, dich Schritt für Schritt zu
            begleiten – mit klarer Anleitung, ehrlichem Feedback und echter
            Leidenschaft fürs Fahren.
          </p>
        </motion.div>
      </section>

      <ScrollRevealQuote
        eyebrow="So bilden wir aus"
        quote="Wir starten mit Zuhören – wirklich zuhören – um dein aktuelles Fahrniveau und dein Lerntempo zu verstehen. Darauf aufbauend gestalten wir eine Ausbildung, die strukturiert, realistisch und auf dich zugeschnitten ist. Jede Fahrstunde gibt dir Sicherheit und lässt dich Schritt für Schritt wachsen."
        cta={null}
      />

      {/* Fahrlehrer */}
      <section className="mx-auto max-w-7xl px-6 py-24">
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
      </section>

      {/* Quote */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <blockquote className="text-2xl font-medium italic leading-relaxed md:text-3xl">
            &ldquo;Jede Fahrt beginnt mit dem ersten Gang – entscheidend ist,
            dass du losfährst.&rdquo;
          </blockquote>
          <p className="mt-6 text-muted">
            — Samir Radič, Gründer Let&apos;ZHgo
          </p>
        </motion.div>
      </section>

      {/* About bottom */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid items-center gap-12 lg:grid-cols-2"
        >
          <h2 className="text-3xl font-bold md:text-4xl">
            Ausbildung mit Erfahrung, geführt von Klarheit – für nachhaltige
            Sicherheit.
          </h2>
          <p className="text-lg text-muted">
            Unsere Ausbildung schafft die Grundlage für echte Sicherheit im
            Strassenverkehr. Wir nehmen uns Zeit, dein Fahrniveau zu verstehen,
            geben dir klare Strukturen und begleiten dich Schritt für Schritt –
            mit Fokus auf dein Ziel: selbstständig und souverän unterwegs zu sein.
          </p>
        </motion.div>
      </section>

      {/* Stats */}
      <Stats />

      {/* FAQ */}
      <FAQ />
    </>
  );
}
