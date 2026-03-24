"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Breadcrumbs from "@/components/Breadcrumbs";
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
      <section className="relative flex min-h-[72vh] items-center justify-center overflow-hidden">
        <Image
          src="/images/ueber-uns-hero.png"
          alt="Let'ZHgo Fahrzeuge"
          fill
          priority
          className="object-cover object-center brightness-[0.6]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/25 to-black/10" />

        <div className="relative z-10 mx-auto max-w-5xl px-6 pt-24 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl font-bold leading-tight md:text-6xl lg:text-7xl"
          >
            Dein Weg, Unsere Mission.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto mt-6 max-w-3xl text-lg text-white/85 md:text-xl"
          >
            Wir stehen für strukturierte Ausbildung, moderne Lernmethoden und
            persönliche Betreuung – damit du nicht nur bestehst, sondern sicher
            unterwegs bist.
          </motion.p>
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

      {/* About */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid gap-12 lg:grid-cols-2"
        >
          <div>
            <p className="text-sm uppercase tracking-widest text-accent">Über</p>
            <p className="mt-6 text-lg leading-relaxed text-muted">
              Bei Let&apos;ZHgo! ist jede Fahrausbildung individuell. Wir glauben,
              dass Sicherheit, Vertrauen und Geduld die Grundlage für
              nachhaltiges Lernen sind. Unsere Aufgabe ist es, dich Schritt für
              Schritt zu begleiten – mit klarer Anleitung, ehrlichem Feedback und
              echter Leidenschaft fürs Fahren.
            </p>
          </div>
          <div>
            <p className="text-sm uppercase tracking-widest text-accent">
              So bilden wir aus
            </p>
            <p className="mt-6 text-lg leading-relaxed text-muted">
              Wir starten mit Zuhören – wirklich zuhören – um dein aktuelles
              Fahrniveau und dein Lerntempo zu verstehen. Darauf aufbauend
              gestalten wir eine Ausbildung, die strukturiert, realistisch und auf
              dich zugeschnitten ist. Jede Fahrstunde gibt dir Sicherheit und
              lässt dich Schritt für Schritt wachsen.
            </p>
          </div>
        </motion.div>
      </section>

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
