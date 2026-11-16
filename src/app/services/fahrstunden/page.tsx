"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useScrollAnim } from "@/hooks/useScrollAnim";
import { Users, MapPin, ClipboardCheck, GraduationCap, Car, Video } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1] as const;

const HIGHLIGHTS = [
  "Individuelle Fahrstunden in deinem Tempo",
  "Stadtverkehr, Autobahn & Manövertraining",
  "Gezielte Prüfungsvorbereitung",
  "Erfahrene, geduldige Fahrlehrer",
  "Flexible Termingestaltung",
  "Auto (Kat. B) & Anhänger",
];

const INSTRUCTORS = [
  { name: "Doma Caleta", phone: "+41 79 338 80 32", whatsapp: "https://wa.me/41793388032" },
  { name: "Merjema Secli-Radič", phone: "+41 76 815 66 88", whatsapp: "https://wa.me/41768156688" },
  { name: "Gianni Sebestin", phone: "+41 79 434 09 66", whatsapp: "https://wa.me/41794340966" },
  { name: "Samir Radič", phone: "+41 78 888 88 99", whatsapp: "https://wa.me/41788888899" },
  { name: "Tomi Caleta", phone: "+41 76 430 31 01", whatsapp: "https://wa.me/41764303101" },
];

const ANHAENGER_DETAILS = [
  { label: "Kosten", value: "CHF 130.00" },
  { label: "Dauer", value: "45 oder 90 Minuten" },
  { label: "Ort", value: "Treffpunkt nach Vereinbarung" },
  { label: "Daten", value: "Mo – Fr 08:00 – 20:00, Sa 08:00 – 16:00" },
];

const ABOS = [
  {
    title: "10er-Abo",
    subtitle: "10 Fahrstunden à 45 Min.",
    price: "90",
    total: "CHF 900",
    original: "CHF 950",
    points: ["Flexibel einteilbar", "Auch als Doppellektionen möglich", "Du sparst CHF 50"],
  },
  {
    title: "20er-Abo",
    subtitle: "20 Fahrstunden à 45 Min.",
    note: "Beliebt für die komplette Ausbildung",
    price: "85",
    total: "CHF 1'700",
    original: "CHF 1'900",
    points: [
      "Bester Preis pro Lektion",
      "Auch als Doppellektionen möglich",
      "Du sparst CHF 200",
      "Ideal für die komplette Ausbildung",
    ],
  },
] as const;

const VORTEILE = [
  { title: "Maximale Flexibilität", text: "Mehrere Fahrlehrer:innen im Team – du findest immer einen Termin, der passt.", Icon: Users },
  { title: "Im ganzen Raum Zürich", text: "Mehrere Standorte: Oerlikon und Rümlang.", Icon: MapPin },
  { title: "Prüfungssimulationen", text: "Realistische Testläufe, damit du am Prüfungstag ruhig bleibst.", Icon: ClipboardCheck },
  { title: "Alles an einem Ort", text: "Nothelfer, VKU, Fahrstunden und Motorradkurse aus einer Hand.", Icon: GraduationCap },
  { title: "Moderne Fahrzeuge", text: "Aktuelle Flotte, gepflegt und für die Ausbildung ausgestattet.", Icon: Car },
  { title: "Videoanalyse", text: "Fahrten per Video analysieren – Fehler erkennen, schneller Fortschritte machen.", Icon: Video },
];

export default function FahrstundenPage() {
  const anim = useScrollAnim();
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#0a0a0a]" data-navbar-dark>
        <div className="relative h-[38vh] min-h-[280px] md:h-[46vh]">
          <Image
            src="/images/service-hero-fahrstunden.jpg"
            alt="Blick aufs Lenkrad und Armaturenbrett während einer Autofahrstunde"
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
              <span className="text-white/80" aria-current="page">Fahrstunden</span>
            </nav>

            <h1 className="mt-6 text-4xl font-bold leading-tight text-white md:text-5xl">
              Fahrstunden
            </h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-white/70 md:text-lg">
              Individuell, strukturiert und in deinem Tempo – von der ersten
              Fahrstunde bis zur bestandenen Prüfung.
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
                <p className="max-w-2xl text-base leading-relaxed text-muted md:text-lg">
                  Jede Fahrstunde ist individuell auf dich abgestimmt. Wir
                  begleiten dich vom ersten Anfahren bis zur praktischen
                  Prüfung – in deinem Tempo und mit klarer Struktur. Du
                  lernst, selbstbewusst im Stadtverkehr, auf der Autobahn und
                  in komplexen Verkehrssituationen zu fahren.
                </p>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
                  Unser Ziel ist nicht nur die bestandene Prüfung, sondern
                  dass du dich langfristig sicher und souverän im
                  Strassenverkehr bewegst.
                </p>

                <h2 className="mt-14 text-2xl font-bold text-foreground md:text-3xl">
                  Was dich erwartet
                </h2>
                <ul className="mt-6 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                  {HIGHLIGHTS.map((item) => (
                    <li key={item} className="flex gap-3 text-base leading-relaxed text-muted">
                      <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-muted" aria-hidden />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <h2 className="mt-14 text-2xl font-bold text-foreground md:text-3xl">
                  Preise Einzellektionen
                </h2>
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
                        <td className="px-5 py-3.5 text-foreground">Einzellektion</td>
                        <td className="px-5 py-3.5 text-right font-semibold text-foreground whitespace-nowrap">CHF 95</td>
                        <td className="hidden px-5 py-3.5 text-right text-muted sm:table-cell">45 Min.</td>
                      </tr>
                      <tr>
                        <td className="px-5 py-3.5 text-foreground">BPT <span className="text-muted">(Berufsmässiger Personentransport)</span></td>
                        <td className="px-5 py-3.5 text-right font-semibold text-foreground whitespace-nowrap">CHF 95</td>
                        <td className="hidden px-5 py-3.5 text-right text-muted sm:table-cell">45 Min.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="mt-3 text-sm text-muted">
                  Alle Lektionen sind auch als Doppellektionen (90 Minuten) möglich.
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
                <h3 className="text-lg font-bold text-foreground">Kontakt aufnehmen</h3>
                <p className="mt-3 text-base leading-relaxed text-muted">
                  Melde dich direkt bei einem unserer Fahrlehrer per Telefon
                  oder WhatsApp, um deine erste Fahrstunde zu buchen.
                </p>
                <Link
                  href="/kontakt"
                  className="mt-5 inline-flex items-center rounded-full bg-accent px-6 py-3 text-[15px] font-semibold text-white no-underline transition-colors duration-200 hover:bg-accent-dark"
                >
                  Jetzt anfragen
                </Link>
              </div>

              <div className="border-t border-border pt-8">
                <h3 className="text-lg font-bold text-foreground">Unsere Fahrlehrer</h3>
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
            </motion.aside>
          </div>
        </div>
      </section>

      {/* Abo-Angebote */}
      <section className="bg-[#f7f8fa]">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <motion.div {...anim({ y: 28, duration: 0.9 })} className="text-center">
            <h2 className="text-4xl font-bold text-foreground md:text-5xl">
              Mehr Lektionen, weniger zahlen.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted md:text-lg">
              Regelmässig üben bringt dich am schnellsten ans Ziel. Mit
              unseren Abos sparst du bei jeder Lektion – und bleibst am Ball.
            </p>
          </motion.div>

          <div className="mx-auto mt-16 grid max-w-4xl gap-6 md:mt-20 md:grid-cols-2 md:gap-8">
            {ABOS.map((abo, i) => (
              <motion.div
                key={abo.title}
                {...anim({ y: 28, delay: 0.1 + i * 0.1, duration: 0.8 })}
                className="flex flex-col rounded-2xl bg-white p-8 shadow-[0_18px_40px_-24px_rgba(8,26,58,0.35)] md:p-10"
              >
                <p className="text-xl font-bold text-foreground">{abo.title}</p>
                <p className="mt-1 text-base text-muted">{abo.subtitle}</p>
                {"note" in abo && (
                  <p className="mt-2 text-sm font-medium text-accent">{abo.note}</p>
                )}

                <div className="mt-8">
                  <p className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-accent md:text-5xl">{abo.price}</span>
                    <span className="text-base text-muted">CHF pro Lektion</span>
                  </p>
                  <p className="mt-2 text-sm text-muted">
                    Total <span className="font-semibold text-foreground">{abo.total}</span>{" "}
                    statt <span className="line-through">{abo.original}</span>
                  </p>
                </div>

                <ul className="mt-8 flex flex-1 flex-col gap-2.5 border-t border-border pt-8 text-base leading-relaxed text-muted">
                  {abo.points.map((point) => (
                    <li key={point} className="flex gap-3">
                      <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-muted" aria-hidden />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/kontakt"
                  className="mt-8 inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-[15px] font-semibold text-white no-underline transition-colors duration-200 hover:bg-accent-dark"
                >
                  {abo.title} anfragen
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Anhänger */}
      <section id="anhaenger" className="scroll-mt-24 bg-background md:scroll-mt-28">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <motion.div
            {...anim({ y: 28, duration: 0.9 })}
            className="grid items-center gap-8 md:grid-cols-2 md:gap-14"
          >
            <div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-[0_18px_40px_-24px_rgba(8,26,58,0.35)]">
                <Image
                  src="/images/service-anhaenger.jpg"
                  alt="Let'ZHgo Fahrzeug mit Kursanhänger"
                  fill
                  className="object-cover"
                  sizes="(max-width: 767px) 100vw, 46vw"
                />
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                <span className="font-semibold text-foreground">
                  Gianni Sebestin, Anhänger-Spezialist:
                </span>{" "}
                17 Jahre lang fuhr er jährlich ca. 80&apos;000 km vorwärts und
                5&apos;000 km rückwärts – über 1&apos;000&apos;000 km
                vorwärts und 85&apos;000 km rückwärts.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground md:text-3xl">
                Fahrstunden mit Anhänger
              </h2>
              <p className="mt-3 max-w-md text-base leading-relaxed text-muted">
                Wenn du den Führerausweis Kategorie B nach dem 1. April 2003
                erworben hast, darfst du einen Anhänger mitführen, wenn das
                Gesamtgewicht des Anhängers nicht mehr als 750 kg beträgt,
                oder das Gesamtzuggewicht von Zugfahrzeug und Anhänger 3,5 t
                nicht übersteigt – und das Gesamtgewicht des Anhängers kleiner
                ist als das Leergewicht des Zugfahrzeugs. In allen anderen
                Fällen brauchst du die Anhängerprüfung Kategorie B/E.
              </p>

              <div className="mt-8 flex max-w-md flex-col gap-5 border-t border-border pt-6">
                {ANHAENGER_DETAILS.map((d) => (
                  <div key={d.label}>
                    <p className="text-sm text-muted">{d.label}</p>
                    <p
                      className={
                        d.label === "Kosten"
                          ? "mt-0.5 text-2xl font-bold text-accent"
                          : "mt-0.5 text-base font-semibold text-foreground"
                      }
                    >
                      {d.value}
                    </p>
                  </div>
                ))}
                <div>
                  <p className="text-sm text-muted">Anmeldung</p>
                  <p className="mt-0.5 text-base font-semibold text-foreground">
                    <a href="tel:+41794340966" className="transition-colors hover:text-accent">Gianni</a>
                    {" "}oder{" "}
                    <a href="tel:+41764303101" className="transition-colors hover:text-accent">Tomi</a>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vorteile */}
      <section className="bg-[#f7f8fa]">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <motion.div {...anim({ y: 28, duration: 0.9 })} className="mx-auto max-w-2xl text-center">
            <h2 className="text-4xl font-bold leading-tight text-foreground md:text-5xl">
              Fahrstunden, die <span className="text-accent">zu dir passen.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted md:text-lg">
              Flexible Termine, erfahrene Fahrlehrer und moderne Fahrzeuge –
              für eine Ausbildung, die wirklich vorwärtsbringt.
            </p>
          </motion.div>

          <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12 md:mt-20">
            {VORTEILE.map((item, i) => (
              <motion.div
                key={item.title}
                {...anim({ y: 24, delay: 0.05 + i * 0.07, duration: 0.65 })}
                className="flex flex-col items-center gap-4 px-4 text-center"
              >
                <item.Icon className="h-12 w-12 text-accent" strokeWidth={1.5} />
                <h3 className="text-xl font-bold leading-snug text-foreground">{item.title}</h3>
                <p className="text-base leading-relaxed text-muted">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
