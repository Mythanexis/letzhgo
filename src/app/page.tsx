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
        title="Willkommen bei Let'ZHgo."
        subtitle="Wir begleiten dich auf dem Weg zu sicherem und selbstständigem Fahren – ob Auto, Motorrad oder Anhänger. Mit professioneller Unterstützung lernst du souverän und entspannt – ganz in deinem Tempo."
        ctaText="Reise beginnen"
        ctaHref="/kontakt"
        showImage
      />

      {/* Services Grid */}
      <section className="mx-auto max-w-7xl px-6 py-32 md:py-40">
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
      </section>

      {/* Philosophie – Scroll Reveal Quote */}
      <ScrollRevealQuote />

      {/* So läufts bei uns */}
      <ScrollSteps />

      {/* CTA Banner */}
      <CTABanner />

      {/* Preise */}
      <section>
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

      {/* Ausbildung mit System */}
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

      {/* Fahrlehrer:innen */}
      <InstructorsSection />

      {/* Stats */}
      <Stats />

      {/* FAQ */}
      <FAQ />

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
