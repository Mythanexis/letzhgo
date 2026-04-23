"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { IMAGES, EDOOBOX_LINKS } from "@/lib/constants";
import { useScrollAnim } from "@/hooks/useScrollAnim";

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

const RENTAL_BIKES = [
  "Kawasaki Z650",
  "Kawasaki Z900",
  "Kawasaki Versys 650",
  "KTM 390",
  "KTM 690",
];

const FAHRSTUNDEN_DETAILS = [
  { icon: "cost", label: "Kosten", value: "CHF 95.00 / 45 Minuten" },
  { icon: "clock", label: "Dauer", value: "45 Minuten (auch als Doppellektion möglich)" },
  { icon: "pin", label: "Ort", value: "hostettler moto ag, Klotenerstrasse 10, 8153 Rümlang" },
];

function DetailIcon({ type }: { type: string }) {
  const cls = "h-5 w-5 shrink-0 text-accent";
  switch (type) {
    case "cost":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
        </svg>
      );
    case "clock":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
        </svg>
      );
    case "pin":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" />
        </svg>
      );
    default:
      return null;
  }
}

export default function MotorradPage() {
  const anim = useScrollAnim();
  return (
    <>
      <section className="relative flex h-[60vh] items-end overflow-hidden" data-navbar-dark>
        <Image
          src={IMAGES.motorrad}
          alt="Motorrad"
          fill
          className="object-cover brightness-[0.35]"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-12 md:px-16 md:pb-20">
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
            <span className="text-white/80" aria-current="page">Motorrad</span>
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
            Motorrad
          </motion.h1>
        </div>
      </section>

      {/* Grundkurs Content */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-16">
        <div className="grid gap-16 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <motion.div {...anim({ y: 20, duration: 0.6 })}>
              <h2 className="text-2xl font-bold text-foreground md:text-3xl">
                Motorrad-Grundkurs
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

              <h3 className="mt-12 text-xl font-semibold text-foreground">
                Preise
              </h3>
              <div className="mt-6 overflow-hidden rounded-2xl border border-border">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="border-b border-border bg-[#f7f8fa]">
                      <th className="px-5 py-3 font-semibold text-foreground">Angebot</th>
                      <th className="px-5 py-3 text-right font-semibold text-foreground">Preis</th>
                      <th className="hidden px-5 py-3 text-right font-semibold text-foreground sm:table-cell">Dauer</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    <tr>
                      <td className="px-5 py-3.5 text-foreground">
                        Motorrad-Grundkurs
                        <span className="ml-2 text-muted">(12 Stunden, 3 Kursteile)</span>
                      </td>
                      <td className="px-5 py-3.5 text-right font-semibold text-foreground">CHF 570</td>
                      <td className="hidden px-5 py-3.5 text-right text-muted sm:table-cell">12 Std.</td>
                    </tr>
                    <tr>
                      <td className="px-5 py-3.5 text-foreground">Motorrad-Fahrstunde</td>
                      <td className="px-5 py-3.5 text-right font-semibold text-foreground">CHF 95</td>
                      <td className="hidden px-5 py-3.5 text-right text-muted sm:table-cell">45 Min.</td>
                    </tr>
                    <tr>
                      <td className="px-5 py-3.5 text-foreground">Schnupperkurs</td>
                      <td className="px-5 py-3.5 text-right font-semibold text-foreground">CHF 50</td>
                      <td className="hidden px-5 py-3.5 text-right text-muted sm:table-cell">4 Std.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-3 text-xs text-muted">
                Fahrstunden sind auch als Doppellektionen (90 Minuten) buchbar.
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
                  <dt className="text-sm text-muted">Kosten Grundkurs</dt>
                  <dd className="mt-1 text-lg font-semibold text-foreground">
                    CHF 570
                  </dd>
                  <dd className="text-xs text-muted">12 Stunden (3 Kursteile)</dd>
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
                rel="nofollow noopener noreferrer"
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

      {/* Motorrad-Fahrstunden */}
      <section className="bg-[#f7f8fa] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Image */}
            <motion.div {...anim({ x: -24, duration: 0.7 })}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-xl">
                <Image
                  src="/images/motorrad-fahrstunden.png"
                  alt="Motorrad-Fahrstunden bei Let'ZHgo"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </motion.div>

            {/* Content */}
            <motion.div {...anim({ x: 24, delay: 0.1, duration: 0.7 })}>
              <p className="text-sm font-medium uppercase tracking-widest text-accent">
                Individuelle Fahrstunden
              </p>
              <h2 className="mt-3 text-3xl font-bold text-foreground md:text-4xl">
                Motorrad-Fahrstunden
              </h2>
              <p className="mt-5 leading-relaxed text-muted">
                Wir hatten das Glück, unser Hobby zum Beruf zu machen.
                Motorradfahren ist unsere Leidenschaft und diese möchten wir Dir
                gerne weitergeben. Wir wollen, dass Du Dich wohl fühlst, damit Du
                sicher ans Ziel kommst, ohne dass der Spass dabei auf der Strecke
                bleibt.
              </p>
              <p className="mt-4 leading-relaxed text-muted">
                Motorradfahren ist pure Freude und genau das werden wir Dir
                während der Ausbildung vermitteln. In einem intensiven,
                lehrreichen Ausbildungsprogramm und in kollegialer Atmosphäre
                lernst Du alles, was es braucht.
              </p>

              <div className="mt-8 space-y-4">
                {FAHRSTUNDEN_DETAILS.map((d) => (
                  <div key={d.label} className="flex items-start gap-3.5">
                    <div className="mt-0.5">
                      <DetailIcon type={d.icon} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">{d.label}</p>
                      <p className="text-sm text-muted">{d.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <p className="mt-4 text-sm leading-relaxed text-muted">
                Wir arbeiten mit{" "}
                <span className="font-medium text-foreground">BMW Motorrad</span>,{" "}
                <span className="font-medium text-foreground">Peter Sommer 2-Rad-Sport AG</span>,{" "}
                <span className="font-medium text-foreground">hostettler moto ag</span> und{" "}
                <span className="font-medium text-foreground">Polo Motorrad</span>{" "}
                zusammen.
              </p>

              <Link
                href="/kontakt"
                className="mt-8 inline-flex items-center justify-center rounded-full bg-accent px-7 py-3 text-sm font-semibold text-white transition-all hover:scale-[1.02] hover:bg-accent-dark"
              >
                Fahrstunde anfragen
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Motorrad mieten */}
      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Content */}
            <motion.div {...anim({ x: -24, duration: 0.7 })}>
              <p className="text-sm font-medium uppercase tracking-widest text-accent">
                Kein eigenes Motorrad?
              </p>
              <h2 className="mt-3 text-3xl font-bold text-foreground md:text-4xl">
                Motorrad mieten bei hostettler
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-muted">
                Bei hostettler moto ag kannst Du ein Motorrad für die gesamte
                Ausbildung oder tageweise mieten — jeweils mit 35 KW oder offen.
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {RENTAL_BIKES.map((bike) => (
                  <span
                    key={bike}
                    className="rounded-full border border-border bg-[#f7f8fa] px-4 py-1.5 text-sm font-medium text-foreground"
                  >
                    {bike}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="tel:+41448607740"
                  className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3 text-sm font-semibold text-white transition-all hover:scale-[1.02] hover:bg-accent-dark"
                >
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                  </svg>
                  +41 44 860 77 40
                </a>
                <Link
                  href="https://www.hostettler-moto.ch/zuerich-nord/"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3 text-sm font-semibold text-foreground transition-all hover:border-accent/30 hover:text-accent"
                >
                  hostettler Webseite
                  <svg className="h-3.5 w-3.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4.5 11.5l7-7M4.5 4.5h7v7" />
                  </svg>
                </Link>
              </div>
            </motion.div>

            {/* Image */}
            <motion.div {...anim({ x: 24, delay: 0.1, duration: 0.7 })}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-xl">
                <Image
                  src="/images/partner-hostettler-zuerich-nord.png"
                  alt="hostettler moto ag Zürich Nord"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Schnupperkurs */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <Image
            src="/images/schnupperkurs.png"
            alt="Motorrad Schnupperkurs bei Let'ZHgo"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-20 md:px-16 md:py-24 lg:px-24">
          <div className="grid items-start gap-12 lg:grid-cols-[1.4fr_minmax(0,1fr)]">
            <motion.div {...anim({ y: 30, delay: 0.15, duration: 1 })}>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-700">
                Schnupperkurs Motorrad
              </p>
              <h2 className="mt-4 text-3xl font-extrabold leading-tight text-red-700 md:text-4xl lg:text-5xl">
                Wir bieten dir auch wieder ab 9. Mai 2026 einen Schnupperkurs an.
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#7a3b00] md:text-lg">
                Wir helfen dir bei den ersten Fahrversuchen mit dem Motorrad. Wir
                zeigen dir, wie man mit einem Motorrad fährt und auf was man alles
                achten muss! Minderjährige müssen in Begleitung eines Elternteils
                sein, welcher das Sorgerecht besitzt.
              </p>
            </motion.div>

            <motion.div {...anim({ y: 30, delay: 0.3, duration: 1 })}>
              <div className="rounded-3xl bg-white/95 p-6 shadow-xl backdrop-blur-sm md:p-8">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                      Zeitpunkt
                    </p>
                    <p className="mt-1 text-sm font-semibold text-foreground">
                      Samstag 09.05.2026 | 13:00 - 17:00 Uhr
                    </p>
                  </div>
                  <div className="rounded-full bg-accent px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white shadow-md">
                    Preis CHF 50.-
                  </div>
                </div>

                <div className="mt-6 border-t border-border pt-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                    Treffpunkt
                  </p>
                  <p className="mt-2 text-sm font-semibold text-foreground">
                    Hostettler Moto AG | Zürich Nord
                  </p>
                  <p className="text-sm text-muted">
                    Klotenerstrasse 10
                    <br />
                    8153 Rümlang
                  </p>
                </div>

                <div className="mt-8">
                  <Link
                    href="https://app1.edoobox.com/de/LetZHgo/Schnupperkurs?edref=letzhgo"
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    className="inline-flex w-full items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:scale-[1.02] hover:bg-accent-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-dark focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                  >
                    Klick hier, wenn du dich anmelden möchtest
                  </Link>
                  <p className="mt-3 text-xs text-muted">
                    Die Anmeldung erfolgt über unsere Kursplattform.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
