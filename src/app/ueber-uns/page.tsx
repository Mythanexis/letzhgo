"use client";

import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import InstructorCard from "@/components/InstructorCard";
import Stats from "@/components/Stats";
import FAQ from "@/components/FAQ";
import { INSTRUCTORS } from "@/lib/constants";

export default function UeberUnsPage() {
  return (
    <>
      {/* Hero */}
      <Hero
        title="Dein Weg, Unsere Mission."
        subtitle="Wir stehen für strukturierte Ausbildung, moderne Lernmethoden und persönliche Betreuung – damit du nicht nur bestehst, sondern sicher unterwegs bist."
      />

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
          {INSTRUCTORS.map((instructor, i) => (
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
