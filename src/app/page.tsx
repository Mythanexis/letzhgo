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
      <section className="bg-[#f7f8fa]">
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
      <section className="mx-auto max-w-7xl px-6 py-24">
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
      </section>

      {/* Fahrlehrer:innen */}
      <InstructorsSection />

      {/* Stats */}
      <Stats />

      {/* FAQ */}
      <FAQ />
    </>
  );
}
