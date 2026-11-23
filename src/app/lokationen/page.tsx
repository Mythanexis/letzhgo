"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useScrollAnim } from "@/hooks/useScrollAnim";

const EASE = [0.16, 1, 0.3, 1] as const;

const SITES = [
  {
    title: "Zürich-Oerlikon",
    tag: "Theorie",
    note: "Nothelferkurs & Verkehrskunde – zentral und schnell mit ÖV erreichbar.",
    addressLines: ["Binzmühlestrasse 15", "8050 Zürich"],
    mapsQuery: "Binzmühlestrasse 15, 8050 Zürich",
    image: "/images/oerlikon-letzhgo.png",
    imageAlt: "Standort Zürich-Oerlikon",
    mapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2700.5!2d8.548077!3d47.413689!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47900a849b623bb1%3A0xc5c7ea7b2839c868!2sFahrschule%20LetZHgo!5e0!3m2!1sde!2sch!4v1700000000000",
  },
  {
    title: "Rümlang",
    tag: "Manövertraining",
    note: "LARAG-Areal – Platz fürs Üben, Manöver und Prüfungsvorbereitung.",
    addressLines: ["Riedgrabenstrasse 26", "8153 Rümlang"],
    mapsQuery: "Riedgrabenstrasse 26, 8153 Rümlang",
    image: "/images/ruemlang-sunset-letzhgo.png",
    imageAlt: "Standort Rümlang",
    mapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2697.5!2d8.524!3d47.450!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4790150000000000%3A0x0!2sRiedgrabenstrasse%2026%2C%208153%20R%C3%BCmlang!5e0!3m2!1sde!2sch!4v1700000000002",
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

export default function LokationenPage() {
  const anim = useScrollAnim();
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#0a0a0a]" data-navbar-dark>
        <div className="relative mx-auto max-w-7xl px-6 pb-16 pt-32 md:pb-20 md:pt-40">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: EASE }}
          >
            <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-sm text-white/50">
              <Link href="/" className="transition-colors hover:text-white">Home</Link>
              <span aria-hidden className="text-white/25">/</span>
              <span className="text-white/80" aria-current="page">Standorte</span>
            </nav>

            <h1 className="mt-6 text-4xl font-bold leading-tight text-white md:text-5xl">
              Standorte
            </h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-white/70 md:text-lg">
              Theorie in Oerlikon, Manövertraining in Rümlang – klare
              Anlaufstellen, kurze Wege.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Standorte */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          {SITES.map((site, i) => {
            const imageOnRight = i % 2 === 1;
            return (
              <motion.article
                key={site.title}
                {...anim({ y: 32, delay: i * 0.08, duration: 0.7 })}
                className="grid items-center gap-10 border-t border-border py-14 first:border-t-0 first:pt-0 md:gap-14 md:py-20 lg:grid-cols-2 lg:gap-16"
              >
                <div
                  className={`relative min-h-0 ${imageOnRight ? "lg:order-2" : "lg:order-1"}`}
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-card md:aspect-[5/4] lg:aspect-[4/3]">
                    <Image
                      src={site.image}
                      alt={site.imageAlt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </div>
                <div
                  className={`min-w-0 ${imageOnRight ? "lg:order-1" : "lg:order-2"}`}
                >
                  <p className="text-sm font-medium uppercase tracking-widest text-accent">
                    {site.tag}
                  </p>
                  <h2 className="mt-3 text-2xl font-bold text-foreground md:text-3xl">
                    {site.title}
                  </h2>
                  <p className="mt-4 max-w-lg text-base leading-relaxed text-muted md:text-lg">
                    {site.note}
                  </p>

                  <div className="mt-8 border-t border-border pt-6">
                    <p className="text-sm text-muted">Adresse</p>
                    <p className="mt-0.5 text-base font-semibold text-foreground">
                      {site.addressLines[0]}, {site.addressLines[1]}
                    </p>
                  </div>

                  <div className="mt-8 overflow-hidden rounded-2xl">
                    <iframe
                      src={site.mapsEmbed}
                      width="100%"
                      height="260"
                      style={{ border: 0, display: "block" }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title={`Karte ${site.title}`}
                    />
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </section>

      {/* Motorrad-Partner */}
      <section className="bg-[#0a0a0a]" data-navbar-dark>
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <motion.div {...anim({ y: 24, duration: 0.8 })}>
            <p className="text-sm font-medium uppercase tracking-widest text-accent">
              Motorrad-Grundkurs
            </p>
            <h2 className="mt-4 text-2xl font-bold text-white md:text-3xl">
              Partner für deinen Grundkurs
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
              Zwei eingespielte Werkstätten, gleicher Kurs – du entscheidest,
              welche Anfahrt für dich passt.
            </p>
          </motion.div>

          <div className="mt-14 grid gap-12 md:grid-cols-2 md:gap-10">
            {MOTO_PARTNERS.map((p, i) => (
              <motion.div
                key={p.name}
                {...anim({ y: 28, delay: i * 0.1, duration: 0.7 })}
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-white/5">
                  <Image
                    src={p.image}
                    alt={p.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <h3 className="mt-5 text-lg font-bold text-white">{p.name}</h3>
                <p className="mt-1.5 text-white/55">{p.line}</p>
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
      </section>
    </>
  );
}
