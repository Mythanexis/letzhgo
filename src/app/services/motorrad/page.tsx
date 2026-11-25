"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { EDOOBOX_LINKS } from "@/lib/constants";
import { useScrollAnim } from "@/hooks/useScrollAnim";
import PruefungsvorbereitungSection from "@/components/PruefungsvorbereitungSection";

const EASE = [0.16, 1, 0.3, 1] as const;

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

const GEAR_ITEMS = ["Helm", "Jacke", "Handschuhe", "Hose", "Stiefel"];

const COURSE_LOCATIONS = [
  { label: "Rümlang", venue: "Hostettler Moto AG, Klotenerstrasse 10, 8153 Rümlang" },
  { label: "Horgen", venue: "Honda Moto Peter Sommer 2-Rad-Sport AG, Seestrasse 367, 8804 Au-Wädenswil" },
];

const INSTRUCTORS = [
  { name: "Gianni Sebestin", phone: "+41 79 434 09 66", whatsapp: "https://wa.me/41794340966" },
  { name: "Samir Radič", phone: "+41 78 888 88 99", whatsapp: "https://wa.me/41788888899" },
  { name: "Tomi Caleta", phone: "+41 76 430 31 01", whatsapp: "https://wa.me/41764303101" },
];

const RENTAL_BIKES = [
  "Kawasaki Z650",
  "Kawasaki Z900",
  "Kawasaki Versys 650",
  "KTM 390",
  "KTM 690",
];

const FAHRSTUNDEN_DETAILS = [
  { label: "Kosten", value: "CHF 95.00 / 45 Minuten" },
  { label: "Dauer", value: "45 Minuten (auch als Doppellektion möglich)" },
  { label: "Ort", value: "hostettler moto ag, Klotenerstrasse 10, 8153 Rümlang" },
];

export default function MotorradPage() {
  const anim = useScrollAnim();
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#0a0a0a]" data-navbar-dark>
        <div className="relative h-[38vh] min-h-[280px] md:h-[46vh]">
          <Image
            src="/images/service-hero-motorrad.jpg"
            alt="Motorradfahrerin und Motorradfahrer unterwegs"
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
              <span className="text-white/80" aria-current="page">Motorrad</span>
            </nav>

            <h1 className="mt-6 text-4xl font-bold leading-tight text-white md:text-5xl">
              Motorrad
            </h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-white/70 md:text-lg">
              Motorradprüfung Zürich, vom ersten Meter bis zur Prüfung: Grundkurs,
              Fahrstunden und alles dazwischen.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Motorrad-Grundkurs */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <div className="grid gap-16 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <motion.div {...anim({ y: 24, duration: 0.8 })}>
                <h2 className="text-2xl font-bold text-foreground md:text-3xl">
                  Motorrad-Grundkurs
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
                  Um den Führerausweis der Kat. A, Kat. A beschränkt oder der
                  Unterkategorie A1 machen zu können, musst du innerhalb von 4
                  Monaten nach Erhalt des Lernfahrausweises die praktische
                  Motorrad-Grundschulung absolvieren. Wie viele Stunden du
                  brauchst, siehst du in deinem Lernfahrausweis.
                </p>

                <h3 className="mt-14 text-xl font-bold text-foreground md:text-2xl">
                  Kursinhalte
                </h3>
                <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted">
                  Im Motorrad-Grundkurs wirst du mit den Grundlagen und der
                  Funktionsweise deines Motorrads vertraut.
                </p>
                <ul className="mt-6 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                  {COURSE_CONTENT.map((item) => (
                    <li key={item} className="flex gap-3 text-base leading-relaxed text-muted">
                      <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-muted" aria-hidden />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted">
                  <span className="font-semibold text-foreground">Wichtig:</span>{" "}
                  Die Reihenfolge der Kursteile muss eingehalten werden, zum
                  Beispiel 12 Stunden = Kurs 1 + 2 + 3.
                </p>

                <h3 className="mt-14 text-xl font-bold text-foreground md:text-2xl">
                  Zielgruppe
                </h3>
                <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted">
                  Alle künftigen Führerscheinerwerber der Kategorien A, A
                  beschränkt und A1.
                </p>

                <h3 className="mt-14 text-xl font-bold text-foreground md:text-2xl">
                  Teilnahmebedingungen
                </h3>
                <ul className="mt-4 flex flex-col gap-2.5">
                  {REQUIREMENTS.map((item) => (
                    <li key={item} className="flex gap-3 text-base leading-relaxed text-muted">
                      <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-muted" aria-hidden />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <h3 className="mt-14 text-xl font-bold text-foreground md:text-2xl">
                  Kursort
                </h3>
                <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted">
                  Den Motorrad-Grundkurs bieten wir an folgenden Standorten an:
                </p>
                <ul className="mt-4 flex flex-col gap-2.5">
                  {COURSE_LOCATIONS.map((loc) => (
                    <li key={loc.label} className="flex gap-3 text-base leading-relaxed text-muted">
                      <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-muted" aria-hidden />
                      <span>
                        <span className="font-semibold text-foreground">{loc.label}:</span>{" "}
                        {loc.venue}
                      </span>
                    </li>
                  ))}
                </ul>

                <h3 className="mt-14 text-xl font-bold text-foreground md:text-2xl">
                  Preise
                </h3>
                <div className="mt-6 overflow-hidden rounded-2xl border border-border bg-white">
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
                          <span className="mt-0.5 block text-xs text-muted">(12 Stunden, 3 Kursteile)</span>
                        </td>
                        <td className="px-5 py-3.5 text-right font-semibold text-foreground whitespace-nowrap">CHF 570</td>
                        <td className="hidden px-5 py-3.5 text-right text-muted sm:table-cell">12 Std.</td>
                      </tr>
                      <tr>
                        <td className="px-5 py-3.5 text-foreground">Motorrad-Fahrstunde</td>
                        <td className="px-5 py-3.5 text-right font-semibold text-foreground whitespace-nowrap">CHF 95</td>
                        <td className="hidden px-5 py-3.5 text-right text-muted sm:table-cell">45 Min.</td>
                      </tr>
                      <tr>
                        <td className="px-5 py-3.5 text-foreground">Schnupperkurs</td>
                        <td className="px-5 py-3.5 text-right font-semibold text-foreground whitespace-nowrap">CHF 50</td>
                        <td className="hidden px-5 py-3.5 text-right text-muted sm:table-cell">4 Std.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="mt-3 text-sm text-muted">
                  Fahrstunden sind auch als Doppellektionen (90 Minuten) buchbar.
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
                    <p className="text-sm text-muted">Kosten Grundkurs</p>
                    <p className="mt-0.5 text-2xl font-bold text-accent">CHF 570</p>
                    <p className="mt-2 text-sm text-muted">
                      12 Stunden in 3 Teilen, oder 4 Stunden nur für Grundkurs
                      3 laut Lernfahrausweis
                    </p>
                  </div>
                </div>
                <a
                  href={EDOOBOX_LINKS.motorrad}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="mt-6 inline-flex items-center rounded-full bg-accent px-6 py-3 text-[15px] font-semibold text-white no-underline transition-colors duration-200 hover:bg-accent-dark"
                >
                  Werde Motorradfahrer:in
                </a>
              </div>

              <div className="border-t border-border pt-8">
                <h3 className="text-lg font-bold text-foreground">Fahrlehrer</h3>
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
                  Die aktuellen Kurse findest du unter Kursanmeldung auf
                  unserer Webseite.
                </p>
                <a
                  href={EDOOBOX_LINKS.motorrad}
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

      {/* Motorrad-Fahrstunden */}
      <section className="bg-[#f7f8fa]">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <motion.div
            {...anim({ y: 28, duration: 0.9 })}
            className="grid items-center gap-8 md:grid-cols-2 md:gap-14"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-[0_18px_40px_-24px_rgba(8,26,58,0.35)]">
              <Image
                src="/images/service-motorrad-fahrstunden.jpg"
                alt="Let'ZHgo Team mit Motorrad"
                fill
                className="object-cover"
                sizes="(max-width: 767px) 100vw, 46vw"
              />
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground md:text-3xl">
                Motorrad-Fahrstunden
              </h2>
              <p className="mt-3 max-w-md text-base leading-relaxed text-muted">
                Wir hatten das Glück, unser Hobby zum Beruf zu machen.
                Motorradfahren ist unsere Leidenschaft, und diese möchten wir
                dir gerne weitergeben, damit du sicher ans Ziel kommst, ohne
                dass der Spass auf der Strecke bleibt.
              </p>
              <p className="mt-3 max-w-md text-base leading-relaxed text-muted">
                In einem intensiven, lehrreichen Ausbildungsprogramm und in
                kollegialer Atmosphäre lernst du alles, was es braucht. Dafür
                arbeiten wir mit BMW Motorrad, Peter Sommer 2-Rad-Sport AG,
                hostettler moto ag und Polo Motorrad zusammen.
              </p>

              <div className="mt-8 flex max-w-md flex-col gap-5 border-t border-border pt-6">
                {FAHRSTUNDEN_DETAILS.map((d) => (
                  <div key={d.label}>
                    <p className="text-sm text-muted">{d.label}</p>
                    <p className="mt-0.5 text-base font-semibold text-foreground">{d.value}</p>
                  </div>
                ))}
              </div>

              <Link
                href="/kontakt"
                className="mt-8 inline-flex items-center rounded-full bg-accent px-6 py-3 text-[15px] font-semibold text-white no-underline transition-colors duration-200 hover:bg-accent-dark"
              >
                Fahrstunde anfragen
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Motorrad mieten */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <motion.div
            {...anim({ y: 28, duration: 0.9 })}
            className="grid items-center gap-8 md:grid-cols-2 md:gap-14"
          >
            <div>
              <h2 className="text-2xl font-bold text-foreground md:text-3xl">
                Miete ein Motorrad bei Hostettler
              </h2>
              <p className="mt-3 max-w-md text-base leading-relaxed text-muted">
                Kein eigenes Motorrad? Bei Hostettler Moto AG kannst du eines
                für die gesamte Ausbildung oder tageweise mieten, jeweils mit
                125er, 35 KW oder offen.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-2">
                {RENTAL_BIKES.map((bike) => (
                  <span
                    key={bike}
                    className="rounded-full border border-border bg-white px-4 py-1.5 text-sm font-medium text-foreground"
                  >
                    {bike}
                  </span>
                ))}
                <span className="text-sm text-muted">und noch so viel mehr</span>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3">
                <a
                  href="tel:+41448607740"
                  className="inline-flex items-center rounded-full bg-accent px-6 py-3 text-[15px] font-semibold text-white no-underline transition-colors duration-200 hover:bg-accent-dark"
                >
                  +41 44 860 77 40
                </a>
                <Link
                  href="https://www.hostettler-moto.ch/zuerich-nord/"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="group relative inline-flex items-center gap-2 pb-0.5 text-base font-semibold text-accent no-underline transition-colors after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:origin-left after:scale-x-0 after:bg-accent after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.16,1,0.3,1)] after:content-[''] hover:text-accent-dark hover:after:scale-x-100"
                >
                  Zur Website von Hostettler Moto
                  <span
                    aria-hidden
                    className="transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1"
                  >
                    →
                  </span>
                </Link>
              </div>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-[0_18px_40px_-24px_rgba(8,26,58,0.35)]">
              <Image
                src="/images/hostettler-moto.jpg"
                alt="Motorrad mieten bei hostettler moto ag Zürich Nord"
                fill
                className="object-cover"
                sizes="(max-width: 767px) 100vw, 46vw"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tageskurs Prüfungsvorbereitung Motorrad */}
      <PruefungsvorbereitungSection className="bg-[#f7f8fa]" />

      {/* Gianni: Video & Ausrüstung */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          <motion.div
            {...anim({ y: 28, duration: 0.9 })}
            className="mx-auto grid max-w-5xl items-center gap-8 md:grid-cols-2 md:gap-32"
          >
            <div>
              <h2 className="text-2xl font-bold text-foreground md:text-3xl">
                Bereit für die Prüfung?
              </h2>
              <p className="mt-3 max-w-md text-base leading-relaxed text-muted">
                Gianni zeigt dir im Video, worauf es wirklich ankommt. Für die
                Motorrad-Prüfung brauchst du die passende Schutzausrüstung:
              </p>
              <ul className="mt-4 flex flex-col gap-2">
                {GEAR_ITEMS.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-base text-muted">
                    <span className="h-1 w-1 shrink-0 rounded-full bg-muted" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>

              <a
                href="https://www.zh.ch/content/dam/zhweb/bilder-dokumente/themen/mobilitaet/fuehrerausweis-fahren-lernen/fahrschulen/Flyer_Motorrad.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative mt-6 inline-flex items-center gap-2 pb-0.5 text-base font-semibold text-accent no-underline transition-colors after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:origin-left after:scale-x-0 after:bg-accent after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.16,1,0.3,1)] after:content-[''] hover:text-accent-dark hover:after:scale-x-100"
              >
                Ausrüstungs-Flyer herunterladen
                <span
                  aria-hidden
                  className="transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1"
                >
                  →
                </span>
              </a>
              <p className="mt-4 text-sm text-muted">
                Quelle: Kanton Zürich, Strassenverkehrsamt –{" "}
                <a
                  href="https://www.zh.ch/de/mobilitaet/fuehrerausweis-fahren-lernen/fahrschulen.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-2 transition-colors hover:text-accent"
                >
                  zh.ch
                </a>
              </p>
            </div>

            <div className="mx-auto w-full max-w-[240px] overflow-hidden rounded-2xl shadow-[0_18px_40px_-24px_rgba(8,26,58,0.35)] md:mx-0 md:max-w-[260px]">
              <video
                className="w-full"
                controls
                preload="metadata"
                poster="/images/gianni-video-poster.jpg"
              >
                <source src="/videos/gianni-motorrad-tipps.mp4" type="video/mp4" />
              </video>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
