"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import ScrollRevealQuote from "@/components/ScrollRevealQuote";
import PricingCard from "@/components/PricingCard";
import CTABanner from "@/components/CTABanner";
import Stats from "@/components/Stats";
import FAQ from "@/components/FAQ";
import {
  SERVICES_OVERVIEW,
  PRICING,
  STEPS,
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
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-12 text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-accent">Was wir anbieten</p>
          <h2 className="mt-4 text-3xl font-bold text-foreground md:text-4xl">Unsere Services</h2>
        </div>
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
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">So läufts bei uns</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted">
            Dein Start zum Führerschein ist einfacher, als du denkst. Schritt für
            Schritt begleiten wir dich sicher durch Theorie, Praxis und Prüfung –
            entspannt und gut vorbereitet.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-border bg-white p-8 shadow-sm"
            >
              <span className="text-4xl font-bold text-accent">
                {step.number}
              </span>
              <h3 className="mt-4 text-xl font-semibold text-foreground">{step.title}</h3>
              <p className="mt-3 text-sm text-muted">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner />

      {/* Preise */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="text-center">
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
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {PRICING.map((plan, i) => (
            <PricingCard key={plan.title} {...plan} index={i} />
          ))}
        </div>
      </section>

      {/* Fahrstunden / Quote */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-12 text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-accent">Warum Let&apos;ZHgo</p>
          <h2 className="mt-4 text-3xl font-bold text-foreground md:text-4xl">Ausbildung mit System</h2>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid items-center gap-12 lg:grid-cols-2"
        >
          <div>
            <h2 className="text-3xl font-bold text-foreground md:text-4xl">
              Erfahrung, Klarheit und Ausbildung mit System – Für sichere
              Fahrer:innen.
            </h2>
            <p className="mt-6 text-muted">
              Unsere Fahrstunden schaffen die Grundlage für nachhaltige Sicherheit
              im Strassenverkehr. Wir nehmen uns Zeit für deine Fragen, geben dir
              klare Strukturen und begleiten dich Schritt für Schritt – mit Fokus
              auf dein Ziel: selbstständig und souverän unterwegs zu sein.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-10">
            <blockquote className="text-xl font-medium italic leading-relaxed text-foreground">
              &ldquo;Sicherheit entsteht nicht durch Druck, sondern durch
              Vertrauen, Übung und die richtige Begleitung.&rdquo;
            </blockquote>
            <p className="mt-6 text-sm text-muted">
              — Gianni Sebestin, Gründer Let&apos;ZHgo Fahrschule
            </p>
          </div>
        </motion.div>
      </section>

      {/* Stats */}
      <Stats />

      {/* FAQ */}
      <FAQ />
    </>
  );
}
