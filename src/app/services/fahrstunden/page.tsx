"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { IMAGES } from "@/lib/constants";
import { useScrollAnim, useCoarsePointer } from "@/hooks/useScrollAnim";
import { Users, MapPin, ClipboardCheck, GraduationCap, Car, Video } from "lucide-react";

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
  { icon: "cost", label: "Kosten", value: "CHF 130.00 / Lektion à 45 Min." },
  { icon: "clock", label: "Dauer", value: "45 oder 90 Minuten" },
  { icon: "pin", label: "Ort", value: "Treffpunkt nach Vereinbarung" },
  { icon: "calendar", label: "Daten", value: "Mo – Fr 08:00 – 20:00, Sa 08:00 – 16:00" },
  { icon: "phone", label: "Anmeldung", value: "Telefonisch bei Gianni oder Tomi" },
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
    case "calendar":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
        </svg>
      );
    case "phone":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
        </svg>
      );
    default:
      return null;
  }
}

export default function FahrstundenPage() {
  const anim = useScrollAnim();
  const coarse = useCoarsePointer();
  return (
    <>
      {/* Hero */}
      <section className="relative flex h-[60vh] items-end overflow-hidden" data-navbar-dark>
        <Image
          src={IMAGES.autoFahrstunden}
          alt="Fahrstunden"
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
            <span className="text-white/80" aria-current="page">Fahrstunden</span>
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
            Fahrstunden
          </motion.h1>
        </div>
      </section>

      {/* Inhalt */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-16">
        <div className="grid gap-16 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <motion.div {...anim({ y: 20, duration: 0.6 })}>
              <h2 className="text-2xl font-bold text-foreground md:text-3xl">
                Deine Fahrstunden
              </h2>
              <p className="mt-4 leading-relaxed text-muted">
                Jede Fahrstunde ist individuell auf dich abgestimmt. Wir
                begleiten dich vom ersten Anfahren bis zur praktischen Prüfung –
                in deinem Tempo und mit klarer Struktur. Du lernst,
                selbstbewusst im Stadtverkehr, auf der Autobahn und in komplexen
                Verkehrssituationen zu fahren.
              </p>
              <p className="mt-4 leading-relaxed text-muted">
                Unser Ziel ist nicht nur die bestandene Prüfung, sondern dass du
                dich langfristig sicher und souverän im Strassenverkehr bewegst.
              </p>

              <h3 className="mt-12 text-xl font-semibold text-foreground">
                Was dich erwartet
              </h3>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {HIGHLIGHTS.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-muted">
                    <svg className="mt-1 h-4 w-4 shrink-0 text-accent" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8l3.5 3.5L13 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>

              <h3 className="mt-12 text-xl font-semibold text-foreground">
                Preise Einzellektionen
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
                      <td className="px-5 py-3.5 text-foreground">Einzellektion</td>
                      <td className="px-5 py-3.5 text-right font-semibold text-foreground">CHF 95</td>
                      <td className="hidden px-5 py-3.5 text-right text-muted sm:table-cell">45 Min.</td>
                    </tr>
                    <tr>
                      <td className="px-5 py-3.5 text-foreground">BPT <span className="text-muted">(Berufsmässiger Personentransport)</span></td>
                      <td className="px-5 py-3.5 text-right font-semibold text-foreground">CHF 95</td>
                      <td className="hidden px-5 py-3.5 text-right text-muted sm:table-cell">45 Min.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-3 text-xs text-muted">
                Alle Lektionen sind auch als Doppellektionen (90 Minuten) möglich.
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
                Kontakt aufnehmen
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                Melde dich direkt bei einem unserer Fahrlehrer per Telefon oder
                WhatsApp, um deine erste Fahrstunde zu buchen.
              </p>
              <Link
                href="/kontakt"
                className="mt-6 block w-full rounded-full bg-accent py-3 text-center font-medium text-white transition-colors hover:bg-accent-dark"
              >
                Jetzt anfragen
              </Link>
            </div>

            <div className="rounded-2xl border border-border bg-card p-8">
              <p className="text-sm font-medium uppercase tracking-widest text-accent">
                Unsere Fahrlehrer
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
          </motion.aside>
        </div>
      </section>

      {/* Abo-Angebote */}
      <section className="bg-[#f7f8fa] py-24 md:py-32">
        <div className="mx-auto max-w-5xl px-6">
          <motion.div {...anim({ y: 20, duration: 0.7 })} className="text-center">
            <p className="text-sm font-medium uppercase tracking-widest text-accent">
              Spare mit einem Abo
            </p>
            <h2 className="mt-3 text-3xl font-bold text-foreground md:text-4xl">
              Mehr Lektionen, weniger zahlen.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted">
              Regelmässig üben bringt dich am schnellsten ans Ziel. Mit unseren
              Abos sparst du bei jeder Lektion — und bleibst am Ball.
            </p>
          </motion.div>

          <div className="mt-14 grid gap-8 md:grid-cols-2 md:items-stretch md:gap-10">
            {/* 10er-Abo */}
            <motion.div
              {...anim({ y: 28, delay: 0.05, duration: 0.6 })}
              className="order-2 flex h-full flex-col rounded-3xl border border-border bg-white p-8 md:order-1 md:p-10"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <p className="text-lg font-bold text-foreground">10er-Abo</p>
                  <p className="mt-1 text-sm text-muted">10 Fahrstunden à 45 Min.</p>
                </div>
                <span className="shrink-0 rounded-full border border-accent/20 bg-accent-light/60 px-3 py-1 text-xs font-bold text-accent">
                  −5 %
                </span>
              </div>

              <div className="mt-8">
                <div className="flex items-baseline gap-1.5">
                  <span className="text-5xl font-extrabold tracking-tight text-foreground">90</span>
                  <div className="ml-1 flex flex-col justify-end pb-1">
                    <span className="text-sm font-semibold text-foreground/60">CHF</span>
                    <span className="text-xs text-muted">pro Lektion</span>
                  </div>
                </div>
                <p className="mt-3 text-sm text-muted">
                  <span className="line-through">CHF 950</span>
                  <span className="ml-2 text-foreground/80">Total CHF 900</span>
                </p>
              </div>

              <ul className="mt-8 flex flex-1 flex-col gap-3 border-t border-border pt-8">
                {["Flexibel einteilbar", "Auch als Doppellektionen möglich", "Du sparst CHF 50"].map((t) => (
                  <li key={t} className="flex gap-3 text-sm text-muted">
                    <svg className="mt-0.5 h-4 w-4 shrink-0 text-accent" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8l3.5 3.5L13 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/kontakt"
                className="mt-10 block w-full rounded-full border-2 border-accent bg-white py-3.5 text-center text-sm font-semibold text-accent transition-colors hover:bg-accent hover:text-white"
              >
                10er-Abo anfragen
              </Link>
            </motion.div>

            {/* 20er-Abo — gradient frame + soft glow & hover sheen */}
            <motion.div {...anim({ y: 28, delay: 0.15, duration: 0.6 })} className="order-1 md:order-2">
              <div className="group relative h-full rounded-3xl bg-gradient-to-br from-accent via-accent/50 to-accent-dark p-px shadow-[0_20px_50px_-20px_rgba(1,68,220,0.45)] transition-shadow duration-500 hover:shadow-[0_28px_60px_-22px_rgba(1,68,220,0.5)]">
                <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(1.5rem-1px)] bg-white p-8 md:p-10">
                  <div
                    className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-accent/12 blur-3xl transition-opacity duration-700 group-hover:bg-accent/18"
                    aria-hidden
                  />
                  <div
                    className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    aria-hidden
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/[0.07] via-transparent to-transparent" />
                    <div className="absolute -left-1/2 top-0 h-full w-1/2 skew-x-[-18deg] bg-gradient-to-r from-transparent via-white/50 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-[220%]" />
                  </div>

                  <div className="relative flex items-start justify-between gap-4">
                    <div className="min-w-0">
                      <p className="text-lg font-bold text-foreground">20er-Abo</p>
                      <p className="mt-1 text-sm text-muted">20 Fahrstunden à 45 Min.</p>
                      <p className="mt-2 text-xs font-medium text-accent">Beliebt für die komplette Ausbildung</p>
                    </div>
                    <span className="shrink-0 rounded-full bg-accent px-3 py-1 text-xs font-bold text-white">
                      Bestseller
                    </span>
                  </div>

                  <div className="relative mt-8">
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-5xl font-extrabold tracking-tight text-foreground">85</span>
                      <div className="ml-1 flex flex-col justify-end pb-1">
                        <span className="text-sm font-semibold text-foreground/60">CHF</span>
                        <span className="text-xs text-muted">pro Lektion</span>
                      </div>
                    </div>
                    <p className="mt-3 text-sm text-muted">
                      <span className="line-through">CHF 1&apos;900</span>
                      <span className="ml-2 font-medium text-foreground">Total CHF 1&apos;700</span>
                    </p>
                  </div>

                  <ul className="relative mt-8 flex flex-1 flex-col gap-3 border-t border-border pt-8">
                    {[
                      "Bester Preis pro Lektion",
                      "Auch als Doppellektionen möglich",
                      "Du sparst CHF 200",
                      "Ideal für die komplette Ausbildung",
                    ].map((t) => (
                      <li key={t} className="flex gap-3 text-sm text-foreground/90">
                        <svg className="mt-0.5 h-4 w-4 shrink-0 text-accent" viewBox="0 0 16 16" fill="none">
                          <path d="M3 8l3.5 3.5L13 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/kontakt"
                    className="relative mt-10 block w-full rounded-full bg-accent py-3.5 text-center text-sm font-semibold text-white transition-colors hover:bg-accent-dark"
                  >
                    20er-Abo anfragen
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Anhänger */}
      <section className="bg-background">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Bild */}
          <motion.div {...anim({ scale: 1.04, duration: 1 })} className="relative min-h-[360px] lg:min-h-[600px]">
            <Image
              src="/images/anhaenger-gianni.png"
              alt="Gianni Sebestin mit Let'ZHgo Anhänger"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-background" />
          </motion.div>

          {/* Content */}
          <div className="flex flex-col justify-center px-8 py-16 md:px-16 lg:py-20 xl:px-24">
            <motion.div {...anim({ y: 24, duration: 0.7 })}>
              <p className="text-sm font-medium uppercase tracking-widest text-accent">
                Kategorie B/E
              </p>
              <h2 className="mt-3 text-3xl font-bold text-foreground md:text-4xl">
                Fahrstunden mit Anhänger
              </h2>
              <p className="mt-5 leading-relaxed text-muted">
                Wenn Du den Führerausweis Kategorie B (Auto) nach dem 1. April
                2003 erworben hast, dann darfst Du einen Anhänger mitführen, wenn
                das Gesamtgewicht des Anhängers nicht mehr als 750 kg aufweist,
                oder das Gesamtzuggewicht Zugfahrzeug + Anhänger 3,5 t nicht
                übersteigt (Gesamtgewicht des Anhängers muss kleiner als das
                Leergewicht des Zugfahrzeugs sein). In allen anderen Situationen
                musst Du eine Anhängerprüfung Kategorie B/E absolvieren.
              </p>
            </motion.div>

            <motion.div {...anim({ y: 20, delay: 0.15, duration: 0.6 })} className="mt-10 space-y-4">
              {ANHAENGER_DETAILS.map((d) => (
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
            </motion.div>

            <motion.div {...anim({ y: 18, delay: 0.25, duration: 0.6 })} className="mt-10 flex flex-wrap gap-4">
              <a
                href="tel:+41794340966"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-3 text-sm font-semibold text-white transition-all hover:scale-[1.02] hover:bg-accent-dark"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                </svg>
                Gianni: +41 79 434 09 66
              </a>
              <a
                href="tel:+41764303101"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-7 py-3 text-sm font-semibold text-foreground transition-all hover:border-accent/30 hover:text-accent"
              >
                Tomi: +41 76 430 31 01
              </a>
            </motion.div>

            {/* Gianni Fact */}
            <motion.div {...anim({ y: 16, delay: 0.3, duration: 0.6 })} className="mt-10 rounded-2xl border border-border bg-[#f7f8fa] p-6">
              <p className="text-sm font-semibold text-foreground">
                Gianni Sebestin — Anhänger-Spezialist
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                17 Jahre lang fuhr er jährlich ca. 80&apos;000 km vorwärts und
                5&apos;000 km rückwärts = über 1&apos;000&apos;000 km vorwärts
                &amp; 85&apos;000 km rückwärts.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vorteile */}
      <section className="bg-[#f7f8fa]">
        <div className="mx-auto max-w-6xl px-6 py-28 md:py-36">
          <motion.div {...anim({ y: 30, scale: 0.97, duration: 0.8 })}>
            <motion.h2
              {...anim({ y: 20, delay: 0.1, duration: 0.7 })}
              className="text-5xl font-bold leading-[1.1] tracking-tight text-foreground md:text-6xl"
            >
              Unsere <span className="text-accent">Vorteile</span>
            </motion.h2>
            <motion.p
              {...anim({ y: 16, delay: 0.25, duration: 0.7 })}
              className="mt-6 max-w-2xl text-lg leading-relaxed text-muted md:text-xl"
            >
              Eine moderne Fahrschule, die mit der Zeit geht –
              mit Qualität, Flexibilität und individueller Betreuung.
            </motion.p>
          </motion.div>

          <div className="mt-20 grid gap-x-16 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Maximale Flexibilität", text: "Mehrere Fahrlehrer:innen im Team – du findest immer einen Termin, der passt.", Icon: Users },
              { title: "Im ganzen Raum Zürich", text: "Mehrere Standorte: Oerlikon, Oberglatt und Rümlang.", Icon: MapPin },
              { title: "Prüfungssimulationen", text: "Realistische Testläufe, damit du am Prüfungstag ruhig bleibst.", Icon: ClipboardCheck },
              { title: "Alles an einem Ort", text: "Nothelfer, VKU, Fahrstunden und Motorradkurse aus einer Hand.", Icon: GraduationCap },
              { title: "Moderne Fahrzeuge", text: "Aktuelle Flotte, gepflegt und für die Ausbildung ausgestattet.", Icon: Car },
              { title: "Videoanalyse", text: "Fahrten per Video analysieren – Fehler erkennen, schneller Fortschritte machen.", Icon: Video },
            ].map((item, i) => (
              <motion.div key={item.title} {...anim({ y: 30, delay: 0.1 + i * 0.1, duration: 0.6 })}>
                <motion.div
                  {...(coarse
                    ? { initial: false, animate: { opacity: 1, scale: 1, rotate: 0 }, transition: { duration: 0 } }
                    : {
                        initial: { scale: 0, rotate: -20 },
                        whileInView: { scale: 1, rotate: 0 },
                        transition: { duration: 0.5, delay: 0.2 + i * 0.1, type: "spring" as const, stiffness: 200, damping: 15 },
                        viewport: { once: true, margin: "-60px" },
                      })}
                  className="w-fit"
                >
                  <item.Icon className="h-14 w-14 text-accent" strokeWidth={1.2} />
                </motion.div>
                <h3 className="mt-6 text-2xl font-bold text-foreground">{item.title}</h3>
                <p className="mt-3 text-lg leading-relaxed text-muted">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
