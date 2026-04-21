"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { IMAGES, EDOOBOX_LINKS } from "@/lib/constants";
import { useScrollAnim } from "@/hooks/useScrollAnim";

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
  const anim = useScrollAnim();
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
          <motion.nav
            aria-label="Breadcrumb"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-5 flex flex-wrap items-center gap-2 text-sm text-white/50"
          >
            <Link href="/" className="transition-colors hover:text-white">Home</Link>
            <span aria-hidden className="text-white/25">/</span>
            <Link href="/services" className="transition-colors hover:text-white">Services</Link>
            <span aria-hidden className="text-white/25">/</span>
            <span className="text-white/80" aria-current="page">Nothelferkurs</span>
          </motion.nav>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
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
        <div className="grid gap-16 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <motion.div {...anim({ y: 20, duration: 0.6 })}>
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

          <motion.aside {...anim({ y: 20, delay: 0.2, duration: 0.6 })} className="flex flex-col gap-6">
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
                rel="nofollow noopener noreferrer"
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
                rel="nofollow noopener noreferrer"
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

      {/* Testimonial */}
      <section className="relative overflow-hidden bg-[#0a0f1e]" data-navbar-dark>
        <div
          className="pointer-events-none absolute left-1/4 top-0 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/3 rounded-full bg-accent/15 blur-[120px]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute bottom-0 right-1/4 h-[400px] w-[400px] translate-x-1/2 translate-y-1/3 rounded-full bg-accent/10 blur-[100px]"
          aria-hidden
        />
        <div className="relative z-10 mx-auto max-w-4xl px-6 py-28 md:py-36">
          <motion.div {...anim({ y: 40, duration: 0.9 })} className="text-center">
            <span
              className="pointer-events-none select-none font-serif text-[8rem] leading-none text-white/6 md:text-[12rem]"
              aria-hidden
            >
              &ldquo;
            </span>

            <blockquote className="-mt-16 text-xl font-semibold leading-[1.5] tracking-tight text-white md:-mt-24 md:text-2xl md:leading-[1.45] lg:text-[1.6rem]">
              Ich kann Merjema von LetZHgo nur herzlichst weiterempfehlen, sowohl fachlich als auch menschlich. Mit ihrer entspannten, offenen und herzlichen Art fühlt man sich bei ihr sofort wohl und gut aufgehoben. Die Lernatmosphäre ist positiv und Merjema legt viel Geduld und{" "}
              <span className="text-accent">Professionalität an den Tag.</span>
            </blockquote>

            <div className="mt-10 flex flex-col items-center gap-4 md:mt-12">
              <div className="flex gap-1" aria-hidden>
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} className="h-4 w-4 text-[#f5a623]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-sm font-semibold text-white">
                  L
                </div>
                <div className="text-left">
                  <p className="text-sm font-semibold text-white">Lyne</p>
                  <p className="flex items-center gap-1.5 text-xs text-white/50">
                    <svg className="h-3 w-3" viewBox="0 0 24 24" aria-hidden>
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                    </svg>
                    Google Bewertung · vor 2 Monaten
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Direkt anmelden */}
      <section className="relative overflow-hidden bg-background">
        {/* Radial gradient blobs */}
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden
          style={{
            background:
              "radial-gradient(800px 600px at 15% 40%, rgba(1,68,220,0.09), transparent 60%), radial-gradient(600px 500px at 85% 70%, rgba(1,68,220,0.07), transparent 58%), radial-gradient(500px 400px at 60% 10%, rgba(1,68,220,0.05), transparent 55%)",
          }}
        />
        <div
          className="pointer-events-none absolute -left-20 top-10 h-64 w-64 rounded-full bg-accent/10 blur-[100px]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -right-20 bottom-10 h-80 w-80 rounded-full bg-accent-light/30 blur-[110px]"
          aria-hidden
        />
        <div className="relative mx-auto max-w-7xl px-6 py-24 md:px-16 md:py-32 lg:px-24">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <div>
              <p className="text-sm font-medium uppercase tracking-widest text-accent">
                Nächster Schritt
              </p>
              <h2 className="mt-4 text-4xl font-bold leading-tight text-foreground md:text-5xl">
                Melde dich jetzt für den Nothelferkurs an.
              </h2>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted">
                Die Anmeldung erfolgt direkt über unsere Kursplattform. Du siehst dort alle verfügbaren Termine und kannst sofort buchen.
              </p>
            </div>
            <div className="rounded-2xl border border-border/60 bg-white p-8 shadow-[0_8px_40px_-12px_rgba(1,68,220,0.12)]">
              <p className="text-sm font-medium uppercase tracking-widest text-accent">Kursdaten</p>
              <dl className="mt-6 space-y-4">
                {[
                  { label: "Dauer", value: "1 Tag (ca. 10 Std.)" },
                  { label: "Preis", value: "CHF 130.–" },
                  { label: "Ort", value: "Binzmühlestrasse 15, Zürich" },
                  { label: "Sprache", value: "Deutsch" },
                ].map((item) => (
                  <div key={item.label} className="border-t border-border pt-4 first:border-t-0 first:pt-0">
                    <dt className="text-sm text-muted">{item.label}</dt>
                    <dd className="mt-1 font-semibold text-foreground">{item.value}</dd>
                  </div>
                ))}
              </dl>
              <a
                href={EDOOBOX_LINKS.nothelferkurs}
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="mt-8 block w-full rounded-full bg-accent py-3 text-center font-medium text-white transition-colors hover:bg-accent-dark"
              >
                Termine ansehen & anmelden
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

