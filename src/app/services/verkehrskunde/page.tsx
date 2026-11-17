"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { EDOOBOX_LINKS } from "@/lib/constants";
import { useScrollAnim } from "@/hooks/useScrollAnim";

const EASE = [0.16, 1, 0.3, 1] as const;

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

const VKU_FACTS = [
  { label: "Pflicht für", value: "Kat. A, A1, B, B1" },
  { label: "Kurs", value: "2 Abende, 8 Lektionen" },
  { label: "Gültigkeit", value: "Unbeschränkt" },
];

export default function VerkehrskundePage() {
  const anim = useScrollAnim();
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#0a0a0a]" data-navbar-dark>
        <div className="relative h-[38vh] min-h-[280px] md:h-[46vh]">
          <Image
            src="/images/service-hero-verkehrskunde.jpg"
            alt="Fahrlehrerin erklärt die Grundregel im Verkehrskundeunterricht"
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
              <span className="text-white/80" aria-current="page">Verkehrskundeunterricht</span>
            </nav>

            <h1
              lang="de"
              className="mt-6 hyphens-auto text-4xl font-bold leading-tight text-white md:text-5xl"
            >
              Verkehrskundeunterricht
            </h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-white/70 md:text-lg">
              Der gesetzlich vorgeschriebene Kurs vor deiner praktischen
              Fahrprüfung.
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
                  Nach bestandener Theorieprüfung empfehlen wir, den
                  Verkehrskundeunterricht (VKU) so bald wie möglich zu
                  besuchen. Du ersparst dir Zeit und Geld, da der Fahrlehrer
                  nicht während deiner Fahrstunde alles erklären muss und du
                  bereits mit guten Vorkenntnissen in den praktischen
                  Fahrunterricht startest.
                </p>

                <h3 className="mt-14 text-xl font-bold text-foreground md:text-2xl">
                  Was du lernst
                </h3>
                <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted">
                  Im VKU werden der Verkehrssinn und das Gefühl für Gefahren
                  geschärft. Du lernst, andere Verkehrsteilnehmer und die
                  vorherrschenden Strassenverhältnisse richtig einzuschätzen.
                </p>
                <ul className="mt-6 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                  {COURSE_HIGHLIGHTS.map((item) => (
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
                  Alle künftigen Führerscheinerwerber der Kategorien A, A1, B
                  und B1.
                </p>

                <h3 className="mt-14 text-xl font-bold text-foreground md:text-2xl">
                  Kursort
                </h3>
                <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted">
                  Den VKU bieten wir in unserem Schulungsraum in Oerlikon an.
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
                    <p className="mt-0.5 text-2xl font-bold text-accent">CHF 150.–</p>
                    <p className="text-sm text-muted">statt CHF 200.–</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted">Dauer</p>
                    <p className="mt-0.5 text-base font-semibold text-foreground">4 Stunden, 2 Tage</p>
                    <p className="text-sm text-muted">Montag bis Dienstag</p>
                  </div>
                </div>
                <a
                  href={EDOOBOX_LINKS.verkehrskunde}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="mt-6 inline-flex items-center rounded-full bg-accent px-6 py-3 text-[15px] font-semibold text-white no-underline transition-colors duration-200 hover:bg-accent-dark"
                >
                  Bestehe deine Theorie
                </a>
              </div>

              <div className="border-t border-border pt-8">
                <h3 className="text-lg font-bold text-foreground">Kursdaten</h3>
                <p className="mt-3 text-base leading-relaxed text-muted">
                  Die aktuellen Kurse findest du unter Kursanmeldung auf
                  unserer Webseite.
                </p>
                <a
                  href={EDOOBOX_LINKS.verkehrskunde}
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

      {/* Ohne VKU keine Prüfung */}
      <section className="bg-[#f7f8fa]">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <motion.div
            {...anim({ y: 28, duration: 0.9 })}
            className="grid items-center gap-8 md:grid-cols-2 md:gap-14"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-[0_18px_40px_-24px_rgba(8,26,58,0.35)]">
              <Image
                src="/images/service-vku-unterricht.jpg"
                alt="VKU-Unterricht bei Let'ZHgo"
                fill
                className="object-cover"
                sizes="(max-width: 767px) 100vw, 46vw"
              />
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground md:text-3xl">
                Ohne VKU keine Prüfung
              </h2>
              <p className="mt-3 max-w-md text-base leading-relaxed text-muted">
                Der VKU-Nachweis ist Pflichtvoraussetzung für die Anmeldung
                zur praktischen Fahrprüfung. Wer ihn nicht vorlegen kann,
                erhält vom Strassenverkehrsamt keinen Prüfungstermin,
                unabhängig davon, wie viele Fahrstunden bereits absolviert
                wurden.
              </p>

              <div className="mt-8 flex max-w-md flex-col gap-5 border-t border-border pt-6">
                {VKU_FACTS.map((fact) => (
                  <div key={fact.label}>
                    <p className="text-sm text-muted">{fact.label}</p>
                    <p className="mt-0.5 text-base font-semibold text-foreground">{fact.value}</p>
                  </div>
                ))}
              </div>

              <a
                href={EDOOBOX_LINKS.verkehrskunde}
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="mt-8 inline-flex items-center rounded-full bg-accent px-6 py-3 text-[15px] font-semibold text-white no-underline transition-colors duration-200 hover:bg-accent-dark"
              >
                Sicher zum nächsten Termin
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
