"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { IMAGES, EDOOBOX_LINKS } from "@/lib/constants";
import Breadcrumbs from "@/components/Breadcrumbs";

const COURSE_CONTENT = [
  "Rechte und Pflichten bei der Nothilfe",
  "Verhalten bei Notfällen",
  "Basischeck nach ABC",
  "Stillung bedrohlicher Blutungen",
  "Bergungsgriffe",
  "Beatmung und BLS/CPR-Einführung",
  "Schockbehandlung",
  "Patientenbetreuung",
  "Lagerungen",
];

const INSTRUCTORS = [
  { name: "Sandra Sebestin", phone: "+41 79 423 01 74" },
  { name: "Merjema Radič", phone: "+41 76 815 66 88" },
  { name: "Ervin Radič", phone: "+41 79 589 99 93" },
];

export default function NothelferkursPage() {
  return (
    <>
      <section className="relative flex h-[60vh] items-end overflow-hidden">
        <Image
          src={IMAGES.nothelferkurs}
          alt="Nothelferkurs"
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
            Nothelferkurs
          </motion.h1>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-16">
        <div className="mb-10">
          <Breadcrumbs items={[
            { label: "Home", href: "/" },
            { label: "Services", href: "/services" },
            { label: "Nothelferkurs" },
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
                Im Nothilfekurs lernst Du die Grundlagen für alle lebensrettenden
                Sofortmassnahmen. Für Führerscheinerwerber ist dieser Kursbesuch
                obligatorisch. Es sind keine Vorkenntnisse notwendig.
              </p>

              <h3 className="mt-12 text-xl font-semibold text-foreground">
                Kursinhalte
              </h3>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {COURSE_CONTENT.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-muted">
                    <svg className="mt-1 h-4 w-4 shrink-0 text-accent" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8l3.5 3.5L13 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>

              <h3 className="mt-12 text-xl font-semibold text-foreground">
                Zielgruppe
              </h3>
              <p className="mt-4 leading-relaxed text-muted">
                Alle künftigen Führerscheinerwerber und Personen, die für ihre
                berufliche oder private Weiterbildung einen Nothilfeausweis als
                Nachweis benötigen.
              </p>

              <h3 className="mt-12 text-xl font-semibold text-foreground">
                Kursort
              </h3>
              <p className="mt-4 leading-relaxed text-muted">
                Die Nothelferkurse bieten wir in unseren Schulungsräumen Oerlikon
                &amp; Oberglatt an, aber auch an einem geeigneten Standort Deiner
                Wahl – nach dem Motto „RENT-A-Nothelferkurs".
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
                    CHF 120.00
                  </dd>
                  <dd className="text-xs text-muted">inkl. Ausweis</dd>
                </div>
                <div className="border-t border-border pt-4">
                  <dt className="text-sm text-muted">Dauer</dt>
                  <dd className="mt-1 text-lg font-semibold text-foreground">
                    10 Stunden
                  </dd>
                </div>
              </dl>
              <a
                href={EDOOBOX_LINKS.nothelferkurs}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 block w-full rounded-full bg-accent py-3 text-center font-medium text-white transition-colors hover:bg-accent-dark"
              >
                Jetzt anmelden
              </a>
            </div>

            <div className="rounded-2xl border border-border bg-card p-8">
              <p className="text-sm font-medium uppercase tracking-widest text-accent">
                Instruktoren
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
                Die aktuellen Kurse findest Du unter Anmeldung auf unserer
                Homepage. Für Fragen wende Dich direkt an unsere
                ASTRA/SGS-Zertifizierten Nothilfeinstruktoren.
              </p>
              <a
                href={EDOOBOX_LINKS.nothelferkurs}
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
