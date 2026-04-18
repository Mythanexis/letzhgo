"use client";

import Image from "next/image";
import { motion } from "framer-motion";
const EASE = [0.16, 1, 0.3, 1] as const;

const INVIEW = { once: true, margin: "-80px" } as const;

const SITES = [
  {
    title: "Zürich-Oerlikon",
    tag: "Theorie",
    note: "Nothelferkurs & Verkehrskunde – zentral und schnell mit ÖV erreichbar.",
    addressLines: ["Binzmühlestrasse 15", "8050 Zürich"],
    mapsQuery: "Binzmühlestrasse 15, 8050 Zürich",
    image: "/images/oerlikon-letzhgo.png",
    imageAlt: "Standort Zürich-Oerlikon",
  },
  {
    title: "Oberglatt",
    tag: "Motorrad-Theorie",
    note: "Kursraum für Motorrad – in wenigen Minuten bist du am Übungsplatz in Rümlang.",
    addressLines: ["Bahnhofstrasse 10", "8154 Oberglatt"],
    mapsQuery: "Bahnhofstrasse 10, 8154 Oberglatt",
    image: "/images/oberglatt-letzhgo.png",
    imageAlt: "Standort Oberglatt",
  },
  {
    title: "Rümlang",
    tag: "Manövertraining",
    note: "LARAG-Areal – Platz fürs Üben, Manöver und Prüfungsvorbereitung.",
    addressLines: ["Riedgrabenstrasse 26", "8153 Rümlang"],
    mapsQuery: "Riedgrabenstrasse 26, 8153 Rümlang",
    image: "/images/ruemlang-sunset-letzhgo.png",
    imageAlt: "Standort Rümlang",
  },
] as const;

const MOTO_PARTNERS = [
  {
    name: "Hostettler Moto AG Zürich Nord",
    line: "Klotenerstrasse 10 · 8153 Rümlang",
    mapsQuery: "Klotenerstrasse 10, 8153 Rümlang",
    image: "/images/partner-hostettler-zuerich-nord.png",
    imageAlt: "Hostettler Moto AG Zürich Nord",
  },
  {
    name: "Peter Sommer 2-Rad-Sport AG",
    line: "Seestrasse 367 · 8804 Au-Wädenswil",
    mapsQuery: "Seestrasse 367, 8804 Au-Wädenswil",
    image: "/images/partner-peter-sommer.png",
    imageAlt: "Peter Sommer 2-Rad-Sport AG – Showroom",
  },
] as const;

function mapsHref(query: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

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

export default function LokationenPage() {
  return (
    <>
      {/* Hero — gradient, klare Hierarchie, keine Langeweile */}
      <section className="relative overflow-hidden pt-28 pb-14 md:pt-32 md:pb-20">
        <div
          className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-accent/20 blur-[100px]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -right-16 bottom-0 h-80 w-80 rounded-full bg-accent-light blur-[90px]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 h-[min(90vw,520px)] w-[min(90vw,520px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-accent/[0.08] via-transparent to-accent/[0.12]"
          aria-hidden
        />

        <div className="relative mx-auto max-w-7xl px-6 md:px-10">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: EASE }}
            className="text-sm font-semibold uppercase tracking-[0.2em] text-accent"
          >
            Region Zürich
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.08, ease: EASE }}
            className="mt-4 max-w-4xl text-4xl font-bold leading-[1.1] tracking-tight text-foreground md:text-6xl lg:text-7xl"
          >
            Alles, was du brauchst –{" "}
            <span className="bg-gradient-to-r from-accent to-accent-dark bg-clip-text text-transparent">
              nah beieinander.
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18, ease: EASE }}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-muted md:text-xl"
          >
            Theorie in Oerlikon, Motorrad in Oberglatt, Training in Rümlang. Klare
            Anlaufstellen, kurze Wege, null Chaos.
          </motion.p>

          <div className="mt-10 flex flex-wrap gap-3">
            {[
              { l: "Oerlikon", s: "VKU & Nothelfer" },
              { l: "Oberglatt", s: "Motorrad" },
              { l: "Rümlang", s: "Manöver" },
            ].map((x, i) => (
              <motion.div
                key={x.l}
                initial={{ opacity: 0, y: 14, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 0.28 + i * 0.1,
                  ease: EASE,
                }}
                className="inline-flex items-center gap-3 rounded-full border border-border/80 bg-background/80 px-4 py-2.5 shadow-sm backdrop-blur-sm"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent-light text-accent">
                  <PinIcon className="h-4 w-4" />
                </span>
                <span>
                  <span className="block text-sm font-bold text-foreground">{x.l}</span>
                  <span className="block text-xs text-muted">{x.s}</span>
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Inhalt */}
      <section className="relative bg-background">
        <div
          className="pointer-events-none absolute right-0 top-32 h-96 w-96 translate-x-1/3 rounded-full bg-accent/[0.06] blur-[120px]"
          aria-hidden
        />
        <div className="relative mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: EASE }}
            viewport={INVIEW}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              Standorte
            </p>
            <h2 className="mx-auto mt-3 max-w-3xl text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Hier unterrichten und trainieren wir
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted md:text-lg">
              Drei Anlaufstellen in der Region – jeweils mit Adresse und Link zu
              Google Maps.
            </p>
          </motion.div>

          <div className="mt-14 md:mt-20">
            {SITES.map((site, i) => {
              const imageOnRight = i % 2 === 1;
              return (
                <motion.article
                  key={site.title}
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.7,
                    delay: i * 0.08,
                    ease: EASE,
                  }}
                  viewport={INVIEW}
                  className="grid items-center gap-10 border-t border-border py-14 first:border-t-0 first:pt-0 md:gap-14 md:py-20 lg:grid-cols-2 lg:gap-16"
                >
                  <div
                    className={`relative min-h-0 ${imageOnRight ? "lg:order-2" : "lg:order-1"}`}
                  >
                    <div className="group relative aspect-[4/3] w-full overflow-hidden rounded-[22px] bg-card md:aspect-[5/4] lg:aspect-[4/3]">
                      <Image
                        src={site.image}
                        alt={site.imageAlt}
                        fill
                        className="object-cover transition duration-700 ease-out group-hover:scale-[1.03]"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    </div>
                  </div>
                  <div
                    className={`min-w-0 ${imageOnRight ? "lg:order-1" : "lg:order-2"}`}
                  >
                    <div className="flex items-center gap-2 text-accent">
                      <PinIcon className="h-5 w-5 shrink-0 opacity-80" />
                      <span className="text-xs font-bold uppercase tracking-[0.18em]">
                        {site.tag}
                      </span>
                    </div>
                    <h3 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-[2.75rem] lg:leading-tight">
                      {site.title}
                    </h3>
                    <p className="mt-4 max-w-lg text-base leading-relaxed text-muted md:text-lg">
                      {site.note}
                    </p>
                    <p className="mt-8 text-sm font-semibold uppercase tracking-wider text-muted">
                      Adresse
                    </p>
                    <p className="mt-2 text-lg font-medium leading-relaxed text-foreground md:text-xl">
                      {site.addressLines[0]}
                      <br />
                      {site.addressLines[1]}
                    </p>
                    <a
                      href={mapsHref(site.mapsQuery)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative mt-6 inline-flex items-center gap-2 pb-0.5 text-base font-semibold text-accent no-underline transition-colors after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:origin-left after:scale-x-0 after:bg-accent after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.16,1,0.3,1)] hover:text-accent-dark after:content-[''] hover:after:scale-x-100"
                    >
                      In Google Maps öffnen
                      <span
                        aria-hidden
                        className="transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1"
                      >
                        →
                      </span>
                    </a>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>

        {/* Motorrad-Partner — dunkel, Hero-ähnliche Blobs + Gradient */}
        <div className="relative w-full overflow-hidden border-t border-white/10 bg-[#0c0d0f] text-white">
          <div
            className="pointer-events-none absolute -left-28 top-0 h-80 w-80 rounded-full bg-accent/25 blur-[100px]"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-accent/15 blur-[110px]"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute left-1/2 top-1/3 h-[min(95vw,560px)] w-[min(95vw,560px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-accent/[0.14] via-transparent to-accent/[0.08]"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"
            aria-hidden
          />
          <div className="relative px-6 py-16 md:px-10 md:py-20 lg:px-16 lg:py-24">
            <motion.div
              className="mx-auto max-w-3xl text-center"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: EASE }}
              viewport={INVIEW}
            >
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent">
                Motorrad-Grundkurs
              </p>
              <h3 className="mt-5 text-3xl font-bold leading-[1.1] tracking-tight text-white md:text-4xl lg:text-5xl lg:leading-[1.08]">
                Partner für deinen{" "}
                <span className="bg-gradient-to-r from-accent via-[#4d8dff] to-accent-light bg-clip-text text-transparent">
                  Grundkurs
                </span>
              </h3>
              <div
                className="mx-auto mt-6 h-px max-w-16 bg-gradient-to-r from-transparent via-accent to-transparent"
                aria-hidden
              />
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/60 md:text-xl md:leading-relaxed">
                Zwei eingespielte Werkstätten, gleicher Kurs – du entscheidest, welche
                Anfahrt für dich passt. Adresse antippen, Route in Maps öffnen, fertig.
              </p>
            </motion.div>

            <div className="mx-auto mt-12 grid max-w-7xl gap-12 md:grid-cols-2 md:gap-10 lg:gap-16">
              {MOTO_PARTNERS.map((p, i) => (
                <motion.div
                  key={p.name}
                  initial={{ opacity: 0, y: 36 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.7,
                    delay: i * 0.14,
                    ease: EASE,
                  }}
                  viewport={INVIEW}
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg bg-white/[0.06] ring-1 ring-white/[0.1]">
                    <Image
                      src={p.image}
                      alt={p.imageAlt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <h4 className="mt-5 text-xl font-bold text-white">{p.name}</h4>
                  <p className="mt-2 text-white/55">{p.line}</p>
                  <a
                    href={mapsHref(p.mapsQuery)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative mt-4 inline-flex items-center gap-2 pb-0.5 text-sm font-semibold text-accent no-underline transition-colors after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:origin-left after:scale-x-0 after:bg-white after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.16,1,0.3,1)] hover:text-white after:content-[''] hover:after:scale-x-100"
                  >
                    Google Maps öffnen
                    <span
                      aria-hidden
                      className="transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
