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
  { name: "Merjema Secli-Radič", phone: "+41 76 815 66 88", whatsapp: "https://wa.me/41768156688" },
];

export default function NothelferkursPage() {
  return (
    <>
      <section className="relative flex h-[60vh] items-end overflow-hidden" data-navbar-dark>
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
                Den Nothelferkurs bieten wir in unserem Schulungsraum in Oerlikon an.
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
                Instruktorin
              </p>
              <ul className="mt-6 space-y-4">
                {INSTRUCTORS.map((inst) => (
                  <li key={inst.name} className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-foreground">{inst.name}</p>
                      <a
                        href={`tel:${inst.phone.replace(/\s/g, "")}`}
                        className="text-sm text-muted transition-colors hover:text-accent"
                      >
                        {inst.phone}
                      </a>
                    </div>
                    <a
                      href={inst.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full bg-green-500 p-2 text-white transition-colors hover:bg-green-600"
                      aria-label={`WhatsApp ${inst.name}`}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.612.638l4.685-1.244A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22a9.94 9.94 0 01-5.39-1.583l-.376-.228-2.786.74.754-2.704-.25-.39A9.94 9.94 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                      </svg>
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
