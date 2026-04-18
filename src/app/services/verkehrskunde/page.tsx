"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { IMAGES, EDOOBOX_LINKS } from "@/lib/constants";
import Breadcrumbs from "@/components/Breadcrumbs";

const COURSE_HIGHLIGHTS = [
  "Verkehrsregeln vertieft verstehen",
  "Gefahrenerkennung trainieren",
  "Andere Verkehrsteilnehmer richtig einschätzen",
  "Strassenverhältnisse beurteilen",
  "Verkehrssicheres Fahrzeug verstehen",
  "Physikalische Kräfte beim Fahren",
  "Vorausschauendes Fahren",
  "Wahl der richtigen Geschwindigkeit & Fahrspur",
  "Leistungsfähigkeit richtig einschätzen",
  "Umweltbewusstes und sicheres Fahrverhalten",
];

export default function VerkehrskundePage() {
  return (
    <>
      <section className="relative flex h-[60vh] items-end overflow-hidden" data-navbar-dark>
        <Image
          src="/images/vku-popup.png"
          alt="Verkehrskundeunterricht"
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
            Verkehrskundeunterricht
          </motion.h1>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-16">
        <div className="mb-10">
          <Breadcrumbs items={[
            { label: "Home", href: "/" },
            { label: "Services", href: "/services" },
            { label: "Verkehrskundeunterricht" },
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
                Nach bestandener Theorieprüfung empfehlen wir, den
                Verkehrskundeunterricht (VKU) so bald wie möglich zu besuchen.
                Du ersparst dir Zeit und Geld, da der Fahrlehrer nicht während
                Deiner Fahrstunde alles erklären muss und du bereits mit guten
                Vorkenntnissen der Verkehrssinnbildung den praktischen
                Fahrunterricht absolvieren kannst.
              </p>

              <h3 className="mt-12 text-xl font-semibold text-foreground">
                Was du lernst
              </h3>
              <p className="mt-4 leading-relaxed text-muted">
                Im VKU werden der Verkehrssinn und das Gefühl für Gefahren
                geschärft. Du lernst die anderen Verkehrsteilnehmer und die
                vorherrschenden Strassenverhältnisse richtig einzuschätzen.
              </p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {COURSE_HIGHLIGHTS.map((item) => (
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
                Alle künftigen Führerscheinerwerber Kategorien A, A1, B und B1.
              </p>

              <h3 className="mt-12 text-xl font-semibold text-foreground">
                Kursort
              </h3>
              <p className="mt-4 leading-relaxed text-muted">
                Den VKU bieten wir in unseren Schulungsräumen Oerlikon &amp;
                Oberglatt an.
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
                  <dd className="mt-2 flex items-baseline gap-3">
                    <span className="text-2xl font-bold text-accent">CHF 150.–</span>
                    <span className="text-sm text-muted line-through">CHF 200.–</span>
                  </dd>
                </div>
                <div className="border-t border-border pt-4">
                  <dt className="text-sm text-muted">Dauer</dt>
                  <dd className="mt-1 text-lg font-semibold text-foreground">
                    4 Stunden, 2 Tage
                  </dd>
                  <dd className="text-xs text-muted">Montag – Dienstag</dd>
                </div>
              </dl>
              <a
                href={EDOOBOX_LINKS.verkehrskunde}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 block w-full rounded-full bg-accent py-3 text-center font-medium text-white transition-colors hover:bg-accent-dark"
              >
                Jetzt anmelden
              </a>
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
                href={EDOOBOX_LINKS.verkehrskunde}
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
