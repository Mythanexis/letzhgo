"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import ScrollRevealQuote from "@/components/ScrollRevealQuote";
import PricingCard from "@/components/PricingCard";
import ScrollSteps from "@/components/ScrollSteps";
import CTABanner from "@/components/CTABanner";
import InstructorsSection from "@/components/InstructorsSection";
import Stats from "@/components/Stats";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import WegweiserHomeTeaser from "@/components/WegweiserHomeTeaser";
import PartnersSection from "@/components/PartnersSection";
import HostettlerSection from "@/components/HostettlerSection";
import ManoeverplatzSection from "@/components/ManoeverplatzSection";
import InstagramSection from "@/components/InstagramSection";
import TikTokSection from "@/components/TikTokSection";
import AutofahrenAb17Section from "@/components/AutofahrenAb17Section";
import {
  SERVICES_OVERVIEW,
  PRICING,
  IMAGES,
} from "@/lib/constants";

export default function HomePage() {
  return (
    <>
      {/* Hero with full-width background image */}
      <Hero
        title="Deine Fahrschule in Zürich."
        subtitle="Ob Auto, Motorrad oder Anhänger – wir begleiten dich mit professioneller Unterstützung auf dem Weg zum Führerschein. Souverän, entspannt und in deinem Tempo."
        ctaText="Mehr erfahren"
        ctaHref="#services"
        secondaryCtaText="Kontakt"
        secondaryCtaHref="/kontakt"
        showImage
      />

      {/* Services Grid */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-6 py-32 md:py-40">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: "-80px" }}
          className="mb-12 text-center"
        >
          <p className="text-sm font-medium uppercase tracking-widest text-accent">Was wir anbieten</p>
          <h2 className="mt-4 text-3xl font-bold text-foreground md:text-4xl">Unsere Services</h2>
        </motion.div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {SERVICES_OVERVIEW.map((service, i) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              image={service.image}
              href={service.href}
              index={i}
            />
          ))}
        </div>
        </div>
      </section>

      {/* Philosophie – Scroll Reveal Quote */}
      <ScrollRevealQuote />

      {/* So läufts bei uns */}
      <ScrollSteps />

      {/* CTA Banner */}
      <CTABanner />

      {/* Preise */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: "-80px" }}
            className="text-center"
          >
            <p className="text-sm font-medium uppercase tracking-widest text-accent">
              Unsere Preise
            </p>
            <h2 className="mt-4 text-3xl font-bold text-foreground md:text-4xl">
              Dein Führerschein. Dein Tempo.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted">
              Starte mit dem passenden Kurs und baue deine Fahrpraxis gezielt auf –
              professionell begleitet bis zur erfolgreichen Prüfung.
            </p>
          </motion.div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {PRICING.map((plan, i) => (
              <PricingCard key={plan.title} {...plan} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Ausbildung mit System (Value vor Preisen – Funnel) */}
      <section className="bg-[#f7f8fa]">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="grid items-start gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true, margin: "-80px" }}
            >
              <h2 className="text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl">
                Erfahrung, Klarheit und Ausbildung mit System –{" "}
                <span className="text-accent">Für sichere Fahrer:innen.</span>
              </h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true, margin: "-80px" }}
              className="lg:pt-4"
            >
              <p className="text-lg leading-relaxed text-muted">
                Unsere Fahrstunden schaffen die Grundlage für nachhaltige Sicherheit
                im Strassenverkehr. Wir nehmen uns Zeit für deine Fragen, geben dir
                klare Strukturen und begleiten dich Schritt für Schritt – mit Fokus
                auf dein Ziel: selbstständig und souverän unterwegs zu sein.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Autofahren ab 17 – vor Conversion-Block (FAQ/Kontakt) */}
      <AutofahrenAb17Section />

      {/* Aktuelle Angebote: Schnupperkurs & Manöverplatz */}
      {/* Schnupperkurs Motorrad */}
      <section className="relative overflow-hidden">
        {/* Hintergrundbild */}
        <div className="pointer-events-none absolute inset-0">
          <Image
            src="/images/schnupperkurs.png"
            alt="Motorrad Schnupperkurs bei Let'ZHgo"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-24">
          <div className="grid items-start gap-12 lg:grid-cols-[1.4fr_minmax(0,1fr)]">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true, margin: "-80px" }}
            >
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

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true, margin: "-80px" }}
            >
              <div className="rounded-3xl bg-white/95 p-8 shadow-xl backdrop-blur-sm">
                <div className="flex items-center justify-between gap-4">
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
                    Klotenserstrasse 10
                    <br />
                    8153 Rümlang
                  </p>
                </div>

                <div className="mt-8">
                  <Link
                    href="https://app1.edoobox.com/de/LetZHgo/Schnupperkurs?edref=letzhgo"
                    target="_blank"
                    rel="noopener noreferrer"
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

      {/* Manöverplatz */}
      <ManoeverplatzSection />

      {/* Fahrlehrer:innen (nach Orten gruppiert) */}
      <InstructorsSection className="bg-[#f7f8fa]" />

      {/* Stats */}
      <Stats surface="light" />

      {/* Bericht von 20 Minuten – Trust / PR */}
      <section className="bg-[#f7f8fa]">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-28">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: "-80px" }}
            className="text-center"
          >
            <h2 className="flex items-center justify-center gap-4 text-2xl font-extrabold tracking-wide text-foreground md:text-3xl">
              <span className="uppercase">Bericht von</span>
              <span className="inline-flex items-center rounded-full bg-accent px-6 py-2 text-sm font-bold uppercase tracking-[0.18em] text-white md:text-base">
                20 Minuten
              </span>
            </h2>
            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.25em] text-muted md:text-sm">
              Über den Bütikofer Harley-Davidson Laden und de Gianni.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: "-80px" }}
            className="mt-12 grid gap-10 lg:grid-cols-2 lg:items-start"
          >
            {/* Link zum 20-Minuten-Artikel */}
            <Link
              href="https://cp.lifestyle.20min.ch/de/stories/7786-motorrad-power-und-die-schonheit-der-schweiz"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-full max-w-xl flex-col rounded-[32px] bg-white p-4 shadow-xl transition-transform hover:-translate-y-1 hover:shadow-2xl lg:ml-auto"
            >
              <div className="relative overflow-hidden rounded-3xl bg-black">
                <Image
                  src="/images/bericht-20-min.png"
                  alt="20 Minuten Bericht: Motorrad-Power und die Schönheit der Schweiz"
                  width={900}
                  height={600}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                <div className="absolute left-4 top-4 rounded-full bg-black/70 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
                  Video-Story
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between gap-4">
                <p className="text-sm font-semibold text-foreground">
                  Motorrad-Power und die Schönheit der Schweiz
                </p>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-accent group-hover:text-accent-dark">
                  Artikel lesen
                  <svg
                    className="h-3 w-3"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 12L12 4M6 4H12V10"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
            </Link>

            {/* Eingebettetes Video */}
            <div className="flex h-full flex-col justify-center">
              <div className="relative overflow-hidden rounded-[32px] bg-black shadow-xl">
                <video
                  className="h-full w-full rounded-[32px] object-cover"
                  controls
                >
                  <source src="/videos/20-minuten-lifestyle-video.mp4" type="video/mp4" />
                  Dein Browser unterstützt das Abspielen dieses Videos nicht.
                </video>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Partner */}
      <PartnersSection />

      {/* Hostettler Moto */}
      <HostettlerSection />

      {/* Instagram */}
      <InstagramSection />

      {/* TikTok */}
      <TikTokSection />

      {/* Wegweiser Motorrad-Führerschein (nach Trust/Social) */}
      <WegweiserHomeTeaser />

      {/* FAQ */}
      <FAQ className="bg-background" />

      {/* Kontakt */}
      <section className="bg-[#f7f8fa]">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.2fr]">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: "-80px" }}
          >
            <p className="text-sm font-medium uppercase tracking-widest text-accent">
              Kontakt
            </p>
            <h2 className="mt-4 text-3xl font-bold text-foreground md:text-4xl">
              Schreib uns.
            </h2>
            <p className="mt-4 text-muted">
              Hast du Fragen zu unseren Kursen oder möchtest dich anmelden? Wir
              melden uns so schnell wie möglich bei dir.
            </p>

            <div className="mt-10 space-y-6">
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/10">
                  <svg className="h-4 w-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <a href="mailto:info@letzhgo.ch" className="text-foreground transition-colors hover:text-accent">
                  info@letzhgo.ch
                </a>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/10">
                  <svg className="h-4 w-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span className="text-foreground">
                  Binzmühlestrasse 15, 8050 Zürich
                </span>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/10">
                  <svg className="h-4 w-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <a href="tel:+41433001455" className="text-foreground transition-colors hover:text-accent">
                  043 300 14 55
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: "-80px" }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
      </section>
    </>
  );
}
