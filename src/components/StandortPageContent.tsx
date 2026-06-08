"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Users,
  MapPin,
  ClipboardCheck,
  GraduationCap,
  Car,
  Video,
} from "lucide-react";
import {
  getStandort,
  getInstructorsForStandort,
  STANDORTE,
  type StandortSlug,
} from "@/lib/standorte-data";
import { useScrollAnim, useCoarsePointer } from "@/hooks/useScrollAnim";
import InstructorCard from "@/components/InstructorCard";

const EASE = [0.16, 1, 0.3, 1] as const;



const VORTEILE = [
  {
    title: "Maximale Flexibilität",
    text: "Mehrere Fahrlehrer:innen im Team – du findest immer einen Termin, der passt.",
    Icon: Users,
  },
  {
    title: "Wir holen dich ab",
    text: "Treffpunkt direkt bei dir zu Hause, am Bahnhof oder am Standort – wie du es brauchst.",
    Icon: MapPin,
  },
  {
    title: "Prüfungssimulationen",
    text: "Realistische Testläufe, damit du am Prüfungstag ruhig bleibst.",
    Icon: ClipboardCheck,
  },
  {
    title: "Alles aus einer Hand",
    text: "Nothelfer, VKU, Fahrstunden und Motorradkurse – ein Team, eine Adresse.",
    Icon: GraduationCap,
  },
  {
    title: "Moderne Fahrzeuge",
    text: "Aktuelle Flotte, gepflegt und für die Ausbildung ausgestattet.",
    Icon: Car,
  },
  {
    title: "Videoanalyse",
    text: "Fahrten per Video analysieren – Fehler erkennen, schneller Fortschritte machen.",
    Icon: Video,
  },
] as const;


function PinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 21s7-4.35 7-10a7 7 0 10-14 0c0 5.65 7 10 7 10z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="11" r="2.5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export default function StandortPageContent({ slug }: { slug: StandortSlug }) {
  const standort = getStandort(slug);
  if (!standort) notFound();

  const router = useRouter();
  const anim = useScrollAnim();
  const coarse = useCoarsePointer();
  const instructors = getInstructorsForStandort(standort);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [instructorModal, setInstructorModal] = useState(false);

  return (
    <>
      {/* Hero — viel Raum, ruhig, klar */}
      <section className="relative bg-background">
        <div className="mx-auto max-w-7xl px-6 pt-32 pb-24 md:px-10 md:pt-44 md:pb-32 lg:pt-52 lg:pb-40">
          <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-24">
            <div className="min-w-0 max-w-xl">
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: EASE }}
                className="text-base font-semibold text-accent md:text-lg"
              >
                Let&apos;ZHgo Fahrschule
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.05, ease: EASE }}
                className="mt-4 text-3xl font-bold leading-[1.12] tracking-tight text-foreground wrap-break-word sm:text-4xl md:text-5xl"
              >
                {standort.heroHeadline}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.15, ease: EASE }}
                className="mt-8 text-base leading-relaxed text-muted sm:mt-10 sm:text-lg md:text-xl"
              >
                {standort.intro}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.2, ease: EASE }}
                className="mt-10 flex flex-col gap-4 sm:mt-14 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-7 sm:gap-y-4"
              >
                <Link
                  href="/kontakt"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-accent-dark sm:w-auto sm:justify-start"
                >
                  Buche jetzt deine Lektion
                  <svg
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </Link>
                <a
                  href="tel:+41433001455"
                  className="group inline-flex items-center justify-center gap-2.5 text-base font-semibold text-foreground transition-colors hover:text-accent sm:justify-start"
                >
                  <svg
                    className="h-4 w-4 text-muted transition-colors group-hover:text-accent"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden
                  >
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                  </svg>
                  +41 43 300 14 55
                </a>
              </motion.div>
            </div>

            <motion.figure
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.12, ease: EASE }}
              className="relative w-full"
            >
              <div className="relative aspect-5/4 w-full overflow-hidden rounded-2xl">
                <Image
                  src={standort.image}
                  alt={standort.imageAlt}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </motion.figure>
          </div>
        </div>
      </section>

      {/* Mit Let'ZHgo durch X — Bild + Text */}
      <section id="ueber-uns" className="border-t border-border bg-[#f7f8fa]">
        <div className="mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-32">
          <motion.div
            {...anim({ y: 22, duration: 0.7 })}
            className="mb-12 md:mb-16"
          >
            <h2 className="text-3xl font-bold leading-[1.12] tracking-tight text-foreground sm:text-4xl md:text-5xl">
              Mit Let&apos;ZHgo durch {standort.name}.
            </h2>
          </motion.div>

          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <motion.div
              {...anim({ y: 24, duration: 0.7 })}
              className="relative w-full"
            >
              <div className="relative aspect-4/3 w-full overflow-hidden rounded-2xl">
                <Image
                  src="/images/fahrschul-team.jpg"
                  alt={`Das Team von Let'ZHgo Fahrschule in ${standort.fullName}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Let%27ZHgo+Fahrschule+Binzm%C3%BChlestrasse+15+8050+Z%C3%BCrich"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute -bottom-5 left-6 inline-flex items-center gap-3 rounded-full border border-border bg-white px-4 py-2.5 shadow-lg transition-transform hover:-translate-y-0.5 md:px-5 md:py-3"
              >
                <svg
                  className="h-4 w-4 shrink-0"
                  viewBox="0 0 24 24"
                  aria-hidden
                >
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
                <span className="flex items-center gap-0.5" aria-hidden>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg
                      key={i}
                      className="h-3.5 w-3.5 text-[#f5a623]"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </span>
                <span className="text-sm font-semibold text-foreground">
                  5.0
                </span>
                <span className="text-sm text-muted">· 417 Reviews</span>
              </a>
            </motion.div>

            <motion.div {...anim({ y: 28, delay: 0.1, duration: 0.75 })}>
              <div className="space-y-5 text-base leading-relaxed text-muted md:text-lg md:leading-[1.7]">
                {standort.welcome.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
              <Link
                href="/ueber-uns"
                className="mt-10 inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-foreground/85"
              >
                Mehr über uns
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vorteile – aus der über-uns Page */}
      <section id="vorteile" className="bg-background">
        <div className="mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-32">
          <motion.div {...anim({ y: 30, scale: 0.97, duration: 0.8 })}>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              Warum Let&apos;ZHgo
            </p>
            <motion.h2
              {...anim({ y: 20, delay: 0.1, duration: 0.7 })}
              className="mt-4 text-4xl font-bold leading-[1.1] tracking-tight text-foreground md:text-5xl lg:text-6xl"
            >
              Unsere <span className="text-accent">Vorteile</span>
            </motion.h2>
            <motion.p
              {...anim({ y: 16, delay: 0.25, duration: 0.7 })}
              className="mt-6 max-w-2xl text-lg leading-relaxed text-muted md:text-xl"
            >
              Eine moderne Fahrschule, die mit der Zeit geht – mit Qualität,
              Flexibilität und individueller Betreuung.
            </motion.p>
          </motion.div>

          <div className="mt-16 grid gap-x-14 gap-y-14 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3">
            {VORTEILE.map((item, i) => (
              <motion.div
                key={item.title}
                {...anim({ y: 30, delay: 0.1 + i * 0.08, duration: 0.6 })}
              >
                <motion.div
                  {...(coarse
                    ? {
                        initial: false,
                        animate: { opacity: 1, scale: 1, rotate: 0 },
                        transition: { duration: 0 },
                      }
                    : {
                        initial: { scale: 0, rotate: -20 },
                        whileInView: { scale: 1, rotate: 0 },
                        transition: {
                          duration: 0.5,
                          delay: 0.2 + i * 0.08,
                          type: "spring" as const,
                          stiffness: 200,
                          damping: 15,
                        },
                        viewport: { once: true, margin: "-60px" },
                      })}
                  className="w-fit"
                >
                  <item.Icon className="h-12 w-12 text-accent" strokeWidth={1.2} />
                </motion.div>
                <h3 className="mt-5 text-xl font-bold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-muted">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Treffpunkt */}
      <section id="treffpunkt" className="border-t border-border bg-[#f7f8fa]">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
          <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-stretch lg:gap-14">
            {/* Map — links, visueller Hauptteil */}
            <motion.div
              {...anim({ y: 24, duration: 0.7 })}
              className="overflow-hidden rounded-2xl ring-1 ring-black/6"
            >
              <iframe
                src={
                  standort.mapsEmbed ??
                  `https://maps.google.com/maps?q=${encodeURIComponent(
                    standort.mapsQuery
                  )}&output=embed`
                }
                width="100%"
                height="100%"
                style={{ border: 0, display: "block" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`Karte ${standort.fullName}`}
                className="block h-[340px] w-full lg:h-full lg:min-h-[460px]"
              />
            </motion.div>

            {/* Info — rechts */}
            <motion.div
              {...anim({ y: 28, delay: 0.08, duration: 0.7 })}
              className="flex flex-col justify-center gap-10"
            >
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                  Treffpunkt
                </p>
                <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-foreground md:text-4xl lg:text-5xl">
                  Standorte in {standort.name}.
                </h2>
              </div>

              <div className="border-t border-border pt-8">
                <p className="text-xs font-semibold uppercase tracking-widest text-muted">
                  Treffpunkt Fahrlektion
                </p>
                <div className="mt-3 flex items-center gap-2.5">
                  <MapPin className="h-6 w-6 shrink-0 text-accent" strokeWidth={1.8} />
                  <p className="text-xl font-semibold leading-snug text-foreground md:text-2xl">
                    {standort.address}
                  </p>
                </div>
              </div>

              <p className="text-base leading-relaxed text-muted md:text-lg">
                {standort.treffpunkt}
              </p>

              <div className="border-t border-border pt-8">
                <p className="text-base text-muted">
                  Du hast Fragen? Kontaktiere uns.
                </p>
                <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2">
                  <a
                    href="mailto:info@letzhgo.ch"
                    className="text-base font-semibold text-accent transition-colors hover:text-accent-dark"
                  >
                    info@letzhgo.ch
                  </a>
                  <span className="text-border" aria-hidden>
                    |
                  </span>
                  <a
                    href="tel:+41433001455"
                    className="text-base font-semibold text-accent transition-colors hover:text-accent-dark"
                  >
                    043 300 14 55
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing — 3 Karten */}
      <section id="preise" className="bg-background">
        <div className="mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-32">
          <motion.div {...anim({ y: 24, duration: 0.7 })}>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              Preise
            </p>
            <h2 className="mt-4 text-3xl font-bold leading-[1.1] tracking-tight text-foreground md:text-4xl lg:text-5xl">
              Preise in {standort.name}.
            </h2>
          </motion.div>

          <div className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-3 lg:gap-0">
            {/* Einzellektion — links */}
            <motion.div
              {...anim({ y: 28, delay: 0.05, duration: 0.6 })}
              className="lg:my-6 lg:mr-5"
            >
              <div className="flex h-full flex-col justify-between rounded-2xl border border-border bg-[#f7f8fa] px-6 py-8 lg:rounded-r-none lg:border-r-0 lg:px-8">
                <div>
                  <h3 className="text-lg font-bold text-foreground lg:text-xl">
                    Einzellektion
                  </h3>
                  <p className="mt-2 text-base text-muted">
                    Flexibel buchbar, ohne Verpflichtung.
                  </p>
                  <ul className="mt-5 flex flex-col gap-2.5">
                    {[
                      "1 Fahrstunde à 45 Min.",
                      "Flexibel buchbar",
                      "Auch als Doppellektion",
                    ].map((t) => (
                      <li key={t} className="flex items-center gap-2.5 text-sm text-foreground">
                        <svg className="h-4 w-4 shrink-0 text-accent" viewBox="0 0 16 16" fill="none">
                          <path d="M3 8l3.5 3.5L13 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="mt-8 flex items-baseline gap-2">
                    <span className="text-5xl font-black text-foreground">
                      95 CHF
                    </span>
                    <span className="whitespace-nowrap text-sm font-normal text-muted">
                      / Lektion
                    </span>
                  </div>
                  <Link
                    href="/kontakt"
                    className="mt-6 block w-full rounded-full border-2 border-foreground/25 py-2.5 text-center text-sm font-bold text-foreground transition-colors hover:bg-foreground/5"
                  >
                    Jetzt anfragen
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* 10er-Abo — Mitte, hervorgehoben */}
            <motion.div
              {...anim({ y: 28, delay: 0.12, duration: 0.6 })}
              className="relative z-10 lg:-mx-5"
            >
              <div className="flex h-full flex-col justify-between rounded-2xl bg-accent px-6 py-8 text-white shadow-[0_20px_60px_-15px_rgba(1,68,220,0.4)] lg:px-8 lg:py-12">
                <div>
                  <h3 className="text-lg font-bold lg:text-xl">10er-Abo</h3>
                  <p className="mt-2 text-sm text-white/65">
                    Für alle, die viel lernen und dabei sparen wollen.
                  </p>
                  <ul className="mt-5 flex flex-col gap-2.5">
                    {[
                      "10 Fahrstunden à 45 Min.",
                      "Flexibel einteilbar",
                      "Auch als Doppellektionen",
                      "Du sparst CHF 50",
                    ].map((t) => (
                      <li key={t} className="flex items-center gap-2.5 text-sm text-white/85">
                        <svg className="h-4 w-4 shrink-0 text-white" viewBox="0 0 16 16" fill="none">
                          <path d="M3 8l3.5 3.5L13 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-sm font-bold text-white/70">
                    statt{" "}
                    <span className="line-through decoration-pink-300 decoration-2">
                      95 CHF
                    </span>
                  </p>
                  <div className="mt-1 flex items-baseline gap-2">
                    <span className="text-5xl font-black">90 CHF</span>
                    <span className="whitespace-nowrap text-sm font-normal text-white/65">
                      / Lektion
                    </span>
                  </div>
                  <p className="mt-1.5 text-sm text-white/55">Gesamtpreis: CHF 900</p>
                  <Link
                    href="/kontakt"
                    className="mt-6 block w-full rounded-full border-2 border-white bg-white py-2.5 text-center text-sm font-bold text-accent transition-colors hover:bg-white/90"
                  >
                    Jetzt anfragen
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* 20er-Abo — rechts */}
            <motion.div
              {...anim({ y: 28, delay: 0.19, duration: 0.6 })}
              className="lg:my-6 lg:ml-5"
            >
              <div className="flex h-full flex-col justify-between rounded-2xl border border-border bg-[#f7f8fa] px-6 py-8 lg:rounded-l-none lg:border-l-0 lg:px-8">
                <div>
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-lg font-bold text-foreground lg:text-xl">
                      20er-Abo
                    </h3>
                    <span className="shrink-0 rounded-full bg-accent px-3 py-1 text-xs font-bold text-white">
                      Bestseller
                    </span>
                  </div>
                  <p className="mt-2 text-base text-muted">
                    Unser bestes Angebot für die komplette Ausbildung.
                  </p>
                  <ul className="mt-5 flex flex-col gap-2.5">
                    {[
                      "20 Fahrstunden à 45 Min.",
                      "Bester Preis pro Lektion",
                      "Auch als Doppellektionen",
                      "Du sparst CHF 200",
                    ].map((t) => (
                      <li key={t} className="flex items-center gap-2.5 text-sm text-foreground">
                        <svg className="h-4 w-4 shrink-0 text-accent" viewBox="0 0 16 16" fill="none">
                          <path d="M3 8l3.5 3.5L13 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="mt-8 text-sm font-bold text-foreground">
                    statt{" "}
                    <span className="line-through decoration-pink-500 decoration-2">
                      95 CHF
                    </span>
                  </p>
                  <div className="mt-1 flex items-baseline gap-2">
                    <span className="text-5xl font-black text-foreground">
                      85 CHF
                    </span>
                    <span className="whitespace-nowrap text-sm font-normal text-muted">
                      / Lektion
                    </span>
                  </div>
                  <p className="mt-1.5 text-sm text-muted">
                    Gesamtpreis: CHF 1&apos;700
                  </p>
                  <Link
                    href="/kontakt"
                    className="mt-6 block w-full rounded-full border-2 border-foreground/25 py-2.5 text-center text-sm font-bold text-foreground transition-colors hover:bg-foreground/5"
                  >
                    Jetzt anfragen
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.p
            {...anim({ y: 16, delay: 0.25, duration: 0.6 })}
            className="mt-8 text-sm text-muted"
          >
            Fragen zu den Preisen?{" "}
            <Link
              href="/kontakt"
              className="font-semibold text-accent transition-colors hover:text-accent-dark"
            >
              Schreib uns →
            </Link>
          </motion.p>
        </div>
      </section>

      {/* CTA Banner — Bild | Card | Bild */}
      <section className="relative overflow-hidden bg-foreground">
        {/* Hintergrundbild Mobile — volle Fläche */}
        <div className="absolute inset-0 lg:hidden">
          <Image
            src="/images/letzhgo-autos.jpeg"
            alt=""
            fill
            className="object-cover opacity-40"
            sizes="100vw"
            aria-hidden
          />
          <div className="absolute inset-0 bg-foreground/55" />
        </div>

        {/* Bild links — absolute Hälfte */}
        <div className="absolute inset-y-0 left-0 hidden w-1/2 lg:block">
          <Image
            src="/images/letzhgo-autos.jpeg"
            alt="Let'ZHgo Fahrschule Autos"
            fill
            className="object-cover opacity-65"
            sizes="50vw"
          />
          <div className="absolute inset-0 bg-linear-to-r from-transparent via-transparent to-foreground/90" />
        </div>

        {/* Bild rechts — absolute Hälfte */}
        <div className="absolute inset-y-0 right-0 hidden w-1/2 lg:block">
          <Image
            src="/images/fahrschul-team.jpg"
            alt="Let'ZHgo Fahrschul-Team"
            fill
            className="object-cover opacity-65"
            sizes="50vw"
          />
          <div className="absolute inset-0 bg-linear-to-l from-transparent via-transparent to-foreground/90" />
        </div>

        {/* Center — gerundetes Sechseck via SVG clip-path */}
        <div className="relative z-10 flex min-h-80 items-center justify-center px-6 py-16 sm:min-h-[480px] md:min-h-[580px] md:py-20">
          <motion.div
            {...anim({ y: 20, duration: 0.7 })}
            className="relative w-[460px] max-w-full"
            style={{ filter: "drop-shadow(0 30px 70px rgba(1,68,220,0.6))" }}
          >
            <svg
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full"
              aria-hidden
            >
              <path
                className="fill-accent"
                d="M39.4,-70.4C50.5,-61.8,58.5,-50.1,66.6,-37.9C74.6,-25.6,82.7,-12.8,84.2,0.8C85.6,14.5,80.4,28.9,72,40.7C63.7,52.5,52.3,61.6,39.8,68.3C27.2,74.9,13.6,79,-0.6,80.1C-14.9,81.2,-29.7,79.2,-41.3,72C-52.8,64.8,-61.1,52.4,-69.8,39.6C-78.5,26.7,-87.8,13.3,-88.6,-0.5C-89.5,-14.3,-82,-28.7,-72.4,-40.1C-62.8,-51.4,-51.1,-59.8,-38.7,-67.6C-26.3,-75.4,-13.1,-82.6,0.5,-83.5C14.1,-84.4,28.3,-78.9,39.4,-70.4Z"
                transform="translate(102.65 101.6)"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center px-8 py-8 text-center sm:px-12 sm:py-12 md:px-16 md:py-16">
              <h2 className="text-lg font-bold leading-tight text-white md:text-xl lg:text-2xl">
                Deine Fahrstunde in {standort.name}.
              </h2>
              <p className="mt-3 text-xs leading-relaxed text-white/65 md:text-sm">
                Ready für deine erste Fahrstunde in {standort.name}?
              </p>
              <button
                onClick={() => setInstructorModal(true)}
                className="mt-5 inline-flex cursor-pointer items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-semibold text-accent transition-colors hover:bg-white/90"
              >
                Ja, bin ich!
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Fahrlehrer Team */}
      <section id="team" className="border-t border-border bg-[#f7f8fa]">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
          <motion.div {...anim({ y: 24, duration: 0.7 })} className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              Dein Team in {standort.name}
            </p>
            <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-foreground md:text-4xl lg:text-5xl">
              Deine Fahrlehrer:innen in {standort.name}.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted md:text-lg">
              {instructors.length === 1
                ? "Eine erfahrene Person"
                : `${instructors.length} erfahrene Fahrlehrer:innen`}{" "}
              in {standort.name} – mehrsprachig, geduldig und per WhatsApp
              direkt erreichbar.
            </p>
          </motion.div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-3">
            {instructors.map((inst, i) => (
              <InstructorCard
                key={inst.slug}
                name={inst.name}
                role={inst.role}
                whatsapp={inst.whatsapp}
                image={inst.image}
                slug={inst.slug}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ — clean single column */}
      <section id="faq" className="bg-background">
        <div className="mx-auto max-w-3xl px-6 py-24 md:px-10 md:py-32">
          <motion.div
            {...anim({ y: 22, duration: 0.7 })}
            className="text-center"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              Fragen aus {standort.name}
            </p>
            <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-foreground md:text-4xl lg:text-5xl">
              Häufige Fragen.
            </h2>
          </motion.div>

          <motion.div
            {...anim({ y: 26, delay: 0.1, duration: 0.7 })}
            className="mt-12 divide-y divide-border md:mt-16"
          >
            {standort.faqs.map((f, i) => (
              <div key={i}>
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className={`flex w-full items-center justify-between py-5 text-left text-lg font-medium transition-colors hover:text-accent ${
                    openFaq === i ? "text-accent" : "text-foreground"
                  }`}
                >
                  {f.q}
                  <motion.span
                    animate={{ rotate: openFaq === i ? 45 : 0 }}
                    transition={{ duration: 0.4 }}
                    className={`ml-4 shrink-0 text-2xl ${
                      openFaq === i ? "text-accent" : "text-muted"
                    }`}
                  >
                    +
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: EASE }}
                      className="overflow-hidden"
                    >
                      <p className="pb-5 text-muted">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </motion.div>

          <motion.p
            {...anim({ y: 16, delay: 0.25, duration: 0.6 })}
            className="mt-12 text-center text-sm text-muted"
          >
            Noch eine andere Frage?{" "}
            <Link
              href="/kontakt"
              className="font-semibold text-accent transition-colors hover:text-accent-dark"
            >
              Schreib uns →
            </Link>
          </motion.p>
        </div>
      </section>

      {/* Andere Standorte */}
      <section className="bg-[#f7f8fa]">
        <div className="mx-auto max-w-7xl px-6 py-12 md:px-10 md:py-16">
          <motion.div {...anim({ y: 20, duration: 0.6 })}>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              Weitere Standorte
            </p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              Fahrschule auch in:
            </h2>
          </motion.div>
          <div className="mt-6 flex flex-wrap gap-3">
            {STANDORTE.filter((s) => s.slug !== standort.slug).map((s) => (
              <Link
                key={s.slug}
                href={`/fahrschule-${s.slug}`}
                className="group inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground transition-all hover:border-accent/40 hover:text-accent hover:shadow-sm"
              >
                <PinIcon className="h-4 w-4 text-accent" />
                {s.fullName}
                <span
                  aria-hidden
                  className="text-accent/40 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-accent"
                >
                  →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Fahrlehrer-Auswahl Modal */}
      <AnimatePresence>
        {instructorModal && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setInstructorModal(false)}
              className="fixed inset-0 z-200 bg-black/50 backdrop-blur-sm"
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="fixed inset-0 z-200 flex items-center justify-center p-4 md:p-8 pointer-events-none"
            >
              <div
                className="pointer-events-auto relative flex max-h-[85vh] w-full max-w-md flex-col overflow-hidden rounded-2xl bg-white shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
              {/* Header */}
              <div className="flex shrink-0 items-center justify-between border-b border-neutral-100 px-6 py-5">
                <div>
                  <h2 className="text-base font-bold text-foreground">Wähl deinen Fahrlehrer</h2>
                  <p className="mt-0.5 text-sm text-muted">Direkt per WhatsApp kontaktieren</p>
                </div>
                <button
                  onClick={() => setInstructorModal(false)}
                  className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-neutral-100 text-foreground/50 transition-colors hover:bg-neutral-200"
                >
                  <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round">
                    <path d="M18 6L6 18M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Instructor list */}
              <div className="overflow-y-auto">
                {instructors.map((inst, i) => (
                  <div
                    key={inst.slug}
                    onClick={() => { setInstructorModal(false); router.push(`/fahrlehrer/${inst.slug}`); }}
                    className={`flex cursor-pointer items-center gap-4 px-6 py-4 transition-colors hover:bg-neutral-50 ${i !== instructors.length - 1 ? "border-b border-neutral-100" : ""}`}
                  >
                    <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full">
                      <Image
                        src={inst.image}
                        alt={inst.name}
                        fill
                        className="object-cover object-top"
                        sizes="56px"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="truncate font-semibold text-foreground">{inst.name}</p>
                      <p className="text-sm text-muted">Fahrlehrer:in</p>
                    </div>
                    <a
                      href={`https://wa.me/${inst.whatsapp.replace(/\D/g, "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex shrink-0 items-center gap-1.5 rounded-full bg-[#25D366] px-4 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                    >
                      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z"/>
                        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.558 4.12 1.535 5.845L.057 23.486a.5.5 0 00.614.612l5.721-1.502A11.947 11.947 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.73 9.73 0 01-4.952-1.355l-.356-.211-3.684.966.983-3.594-.231-.368A9.7 9.7 0 012.25 12C2.25 6.61 6.61 2.25 12 2.25S21.75 6.61 21.75 12 17.39 21.75 12 21.75z"/>
                      </svg>
                      WhatsApp
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
