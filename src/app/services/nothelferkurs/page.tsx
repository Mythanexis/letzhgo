"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { IMAGES, EDOOBOX_LINKS } from "@/lib/constants";
import { useScrollAnim } from "@/hooks/useScrollAnim";

const EASE = [0.16, 1, 0.3, 1] as const;

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

const ANMELDUNG_FACTS = [
  { label: "Dauer", value: "1 Tag, ca. 10 Stunden" },
  { label: "Preis", value: "CHF 120.–" },
  { label: "Ort", value: "Binzmühlestrasse 15, Zürich" },
  { label: "Sprache", value: "Deutsch" },
];

function StarRow({ className }: { className?: string }) {
  return (
    <div className={`flex gap-0.5 ${className ?? ""}`} aria-hidden>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className="h-4 w-4 text-[#f5a623]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function NothelferkursPage() {
  const anim = useScrollAnim();
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#0a0a0a]" data-navbar-dark>
        <div className="relative h-[38vh] min-h-[280px] md:h-[46vh]">
          <Image
            src={IMAGES.nothelferkurs}
            alt="Nothelferkurs"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-linear-to-t from-[#0a0a0a] via-[#0a0a0a]/55 to-[#0a0a0a]/35" />
        </div>

        <div className="relative mx-auto -mt-32 max-w-7xl px-6 pb-16 md:-mt-36 md:pb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: EASE }}
          >
            <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-sm text-white/50">
              <Link href="/" className="transition-colors hover:text-white">Home</Link>
              <span aria-hidden className="text-white/25">/</span>
              <Link href="/services" className="transition-colors hover:text-white">Services</Link>
              <span aria-hidden className="text-white/25">/</span>
              <span className="text-white/80" aria-current="page">Nothelferkurs</span>
            </nav>

            <h1 className="mt-6 text-4xl font-bold leading-tight text-white md:text-5xl">
              Nothelferkurs
            </h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-white/70 md:text-lg">
              Die Pflichtvoraussetzung für den Lernfahrausweis, lebensrettende
              Sofortmassnahmen an einem Tag.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Inhalt */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <div className="grid gap-16 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <motion.div {...anim({ y: 24, duration: 0.8 })}>
                <h2 className="text-2xl font-bold text-foreground md:text-3xl">
                  Über den Kurs
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
                  Im Nothilfekurs lernst du die Grundlagen für alle
                  lebensrettenden Sofortmassnahmen. Für
                  Führerscheinerwerber ist dieser Kursbesuch obligatorisch.
                  Es sind keine Vorkenntnisse notwendig.
                </p>

                <h3 className="mt-14 text-xl font-bold text-foreground md:text-2xl">
                  Kursinhalte
                </h3>
                <ul className="mt-4 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                  {COURSE_CONTENT.map((item) => (
                    <li key={item} className="flex gap-3 text-base leading-relaxed text-muted">
                      <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-muted" aria-hidden />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <h3 className="mt-14 text-xl font-bold text-foreground md:text-2xl">
                  Zielgruppe
                </h3>
                <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted">
                  Alle künftigen Führerscheinerwerber und Personen, die für
                  ihre berufliche oder private Weiterbildung einen
                  Nothilfeausweis als Nachweis benötigen.
                </p>

                <h3 className="mt-14 text-xl font-bold text-foreground md:text-2xl">
                  Kursort
                </h3>
                <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted">
                  Den Nothelferkurs bieten wir in unserem Schulungsraum in
                  Oerlikon an.
                </p>
              </motion.div>

              <Link
                href="/services"
                className="group relative mt-14 inline-flex items-center gap-2 pb-0.5 text-base font-semibold text-accent no-underline transition-colors after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:origin-left after:scale-x-0 after:bg-accent after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.16,1,0.3,1)] after:content-[''] hover:text-accent-dark hover:after:scale-x-100"
              >
                <span
                  aria-hidden
                  className="transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-x-1"
                >
                  ←
                </span>
                Zurück zu allen Services
              </Link>
            </div>

            <motion.aside {...anim({ y: 24, delay: 0.15, duration: 0.8 })} className="flex flex-col gap-10 lg:sticky lg:top-28 lg:self-start">
              <div>
                <h3 className="text-lg font-bold text-foreground">Details</h3>
                <div className="mt-5 flex flex-col gap-5 border-t border-border pt-5">
                  <div>
                    <p className="text-sm text-muted">Kosten</p>
                    <p className="mt-0.5 text-2xl font-bold text-accent">CHF 120.00</p>
                    <p className="text-sm text-muted">inkl. Ausweis</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted">Dauer</p>
                    <p className="mt-0.5 text-base font-semibold text-foreground">10 Stunden</p>
                  </div>
                </div>
                <a
                  href={EDOOBOX_LINKS.nothelferkurs}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="mt-6 inline-flex items-center rounded-full bg-accent px-6 py-3 text-[15px] font-semibold text-white no-underline transition-colors duration-200 hover:bg-accent-dark"
                >
                  Lerne Leben retten
                </a>
              </div>

              <div className="border-t border-border pt-8">
                <h3 className="text-lg font-bold text-foreground">Instruktorin</h3>
                <ul className="mt-5 flex flex-col gap-5">
                  {INSTRUCTORS.map((inst) => (
                    <li key={inst.name} className="flex items-center justify-between gap-4">
                      <div>
                        <p className="font-semibold text-foreground">{inst.name}</p>
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
                        className="inline-flex shrink-0 items-center rounded-full bg-[#25D366] px-3.5 py-1.5 text-xs font-semibold text-white no-underline transition-colors hover:bg-[#1ebe5a]"
                      >
                        WhatsApp
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-border pt-8">
                <h3 className="text-lg font-bold text-foreground">Kursdaten</h3>
                <p className="mt-3 text-base leading-relaxed text-muted">
                  Die aktuellen Kurse findest du unter Anmeldung auf unserer
                  Webseite. Für Fragen wende dich direkt an unsere
                  ASTRA/SGS-zertifizierten Nothilfeinstruktoren.
                </p>
                <a
                  href={EDOOBOX_LINKS.nothelferkurs}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="group relative mt-4 inline-flex items-center gap-2 pb-0.5 text-base font-semibold text-accent no-underline transition-colors after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:origin-left after:scale-x-0 after:bg-accent after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.16,1,0.3,1)] after:content-[''] hover:text-accent-dark hover:after:scale-x-100"
                >
                  Termine ansehen
                  <span
                    aria-hidden
                    className="transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1"
                  >
                    →
                  </span>
                </a>
              </div>
            </motion.aside>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="bg-[#0a0a0a]">
        <div className="mx-auto max-w-3xl px-6 py-24 text-center md:py-32">
          <motion.div {...anim({ y: 28, duration: 0.9 })}>
            <StarRow className="justify-center" />
            <blockquote className="mt-6 text-xl font-semibold leading-relaxed text-white md:text-2xl">
              Ich kann Merjema von LetZHgo nur herzlichst weiterempfehlen,
              sowohl fachlich als auch menschlich. Mit ihrer entspannten,
              offenen und herzlichen Art fühlt man sich bei ihr sofort wohl
              und gut aufgehoben. Die Lernatmosphäre ist positiv, und
              Merjema legt viel Geduld und Professionalität an den Tag.
            </blockquote>
            <p className="mt-6 text-sm text-white/50">
              Lyne, Google Bewertung, vor 2 Monaten
            </p>
          </motion.div>
        </div>
      </section>

      {/* Direkt anmelden */}
      <section className="bg-[#f7f8fa]">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <motion.div
            {...anim({ y: 28, duration: 0.9 })}
            className="grid items-center gap-8 md:grid-cols-2 md:gap-14"
          >
            <div>
              <h2 className="text-2xl font-bold text-foreground md:text-3xl">
                Melde dich jetzt für den Nothelferkurs an
              </h2>
              <p className="mt-3 max-w-md text-base leading-relaxed text-muted">
                Die Anmeldung erfolgt direkt über unsere Kursplattform. Du
                siehst dort alle verfügbaren Termine und kannst sofort
                buchen.
              </p>

              <a
                href={EDOOBOX_LINKS.nothelferkurs}
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="mt-8 inline-flex items-center rounded-full bg-accent px-6 py-3 text-[15px] font-semibold text-white no-underline transition-colors duration-200 hover:bg-accent-dark"
              >
                Sicher zum nächsten Termin
              </a>
            </div>

            <div className="flex max-w-md flex-col gap-5 border-t border-border pt-6 md:border-l md:border-t-0 md:pl-14 md:pt-0">
              {ANMELDUNG_FACTS.map((fact) => (
                <div key={fact.label}>
                  <p className="text-sm text-muted">{fact.label}</p>
                  <p className="mt-0.5 text-base font-semibold text-foreground">{fact.value}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
