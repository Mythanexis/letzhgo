"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { IMAGES, EDOOBOX_LINKS } from "@/lib/constants";
import Breadcrumbs from "@/components/Breadcrumbs";

const COURSE_CONTENT = [
  "Grundlagen und Funktionsweise des Motorrads",
  "Korrektes Verhalten in Gefahrensituationen",
  "Korrektes Kurvenfahren",
  "Brems- und Ausweichmanöver",
  "Slalomfahren",
  "Notfallbremsungen",
  "Sicherheit und Umgang mit dem Motorrad",
];

const REQUIREMENTS = [
  "Gültiger Lernfahrausweis",
  "Eigenes Motorrad",
  "Motorradbekleidung",
];

const INSTRUCTORS = [
  { name: "Gianni Sebestin", phone: "+41 79 434 09 66" },
  { name: "Samir Radič", phone: "+41 78 888 88 99" },
  { name: "Tomi Caleta", phone: "+41 76 430 31 01" },
];

export default function MotorradPage() {
  return (
    <>
      <section className="relative flex h-[60vh] items-end overflow-hidden" data-navbar-dark>
        <Image
          src={IMAGES.motorrad}
          alt="Motorrad-Grundkurs"
          fill
          className="object-cover brightness-[0.35]"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="relative z-10 max-w-4xl px-8 pb-12 md:px-16 md:pb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-sm font-medium uppercase tracking-widest text-accent"
          >
            Kursangebot
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-3 text-4xl font-bold text-white md:text-6xl"
          >
            Motorrad-Grundkurs
          </motion.h1>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-16">
        <div className="mb-10">
          <Breadcrumbs items={[
            { label: "Home", href: "/" },
            { label: "Services", href: "/services" },
            { label: "Motorrad-Grundkurs" },
          ]} />
        </div>
        <div className="grid gap-16 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-foreground md:text-3xl">
                Über den Kurs
              </h2>
              <p className="mt-4 leading-relaxed text-muted">
                Um den Führerausweis der Kat. A, Kat. A beschränkt oder der
                Unterkategorie A1 machen zu können, musst Du innerhalb von 4
                Monaten nach Erhalt des Lernfahrausweises die praktische
                Motorrad-Grundschulung absolvieren. Wie viele Stunden Du
                brauchst, siehst Du in Deinem Lernfahrausweis.
              </p>

              <h3 className="mt-12 text-xl font-semibold text-foreground">
                Kursinhalte
              </h3>
              <p className="mt-4 leading-relaxed text-muted">
                Im Motorrad-Grundkurs wirst Du mit den Grundlagen und der
                Funktionsweise Deines Motorrads vertraut.
              </p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {COURSE_CONTENT.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-muted">
                    <svg className="mt-1 h-4 w-4 shrink-0 text-accent" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8l3.5 3.5L13 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-12 rounded-2xl border border-amber-200 bg-amber-50 p-6">
                <p className="font-semibold text-amber-900">Wichtig!</p>
                <p className="mt-2 text-sm text-amber-800">
                  Die Reihenfolge der Kursteile muss eingehalten werden. Zum
                  Beispiel: 12 Stunden = Kurs 1 + 2 + 3
                </p>
              </div>

              <h3 className="mt-12 text-xl font-semibold text-foreground">
                Zielgruppe
              </h3>
              <p className="mt-4 leading-relaxed text-muted">
                Alle künftigen Führerscheinerwerber der Kategorien A, A
                beschränkt und A1.
              </p>

              <h3 className="mt-12 text-xl font-semibold text-foreground">
                Teilnahmebedingungen
              </h3>
              <ul className="mt-4 space-y-3">
                {REQUIREMENTS.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-muted">
                    <svg className="mt-1 h-4 w-4 shrink-0 text-accent" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8l3.5 3.5L13 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>

              <h3 className="mt-12 text-xl font-semibold text-foreground">
                Kursort
              </h3>
              <p className="mt-4 leading-relaxed text-muted">
                Den Motorrad-Grundkurs bieten wir bei hostettler moto ag,
                Klotenerstrasse 10, 8153 Rümlang an.
              </p>
            </motion.div>
            <Link
              href="/services"
              className="mt-12 inline-flex items-center gap-2 text-sm font-medium text-accent transition-colors hover:text-accent-dark"
            >
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M10 4l-4 4 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Zurück zu allen Services
            </Link>
          </div>

          <motion.aside
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <div className="rounded-2xl border border-border bg-card p-8">
              <p className="text-sm font-medium uppercase tracking-widest text-accent">
                Details
              </p>
              <dl className="mt-6 space-y-4">
                <div>
                  <dt className="text-sm text-muted">Kosten</dt>
                  <dd className="mt-1 text-lg font-semibold text-foreground">
                    CHF 180.00 / Kursteil
                  </dd>
                </div>
                <div className="border-t border-border pt-4">
                  <dt className="text-sm text-muted">Dauer</dt>
                  <dd className="mt-1 text-lg font-semibold text-foreground">
                    4 oder 12 Stunden
                  </dd>
                  <dd className="text-xs text-muted">
                    4 Stunden ist nur Grundkurs 3, siehe Lernfahrausweis
                  </dd>
                </div>
              </dl>
              <a
                href={EDOOBOX_LINKS.motorrad}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 block w-full rounded-full bg-accent py-3 text-center font-medium text-white transition-colors hover:bg-accent-dark"
              >
                Jetzt anmelden
              </a>
            </div>

            <div className="rounded-2xl border border-border bg-card p-8">
              <p className="text-sm font-medium uppercase tracking-widest text-accent">
                Fahrlehrer
              </p>
              <ul className="mt-6 space-y-4">
                {INSTRUCTORS.map((inst) => (
                  <li key={inst.name}>
                    <p className="font-medium text-foreground">{inst.name}</p>
                    <a
                      href={`tel:${inst.phone.replace(/\s/g, "")}`}
                      className="text-sm text-muted transition-colors hover:text-accent"
                    >
                      {inst.phone}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-border bg-card p-8">
              <p className="text-sm font-medium uppercase tracking-widest text-accent">
                Kursdaten
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                Die aktuellen Kurse findest Du unter Kursanmeldung auf unserer
                Webseite.
              </p>
              <a
                href={EDOOBOX_LINKS.motorrad}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-colors hover:text-accent-dark"
              >
                Termine ansehen
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </motion.aside>
        </div>
      </section>
    </>
  );
}
