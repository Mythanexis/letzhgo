"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import PricingCard from "@/components/PricingCard";
import Stats from "@/components/Stats";
import FAQ from "@/components/FAQ";
import { SERVICES_DETAIL, PRICING } from "@/lib/constants";

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <Hero
        title="Die Schritte zum Ziel."
        subtitle="Entdecke unsere Kurse und Fahrstunden – abgestimmt auf dein Ziel, dein Tempo und deine Erfahrung."
      />

      {/* Intro */}
      <section className="mx-auto max-w-7xl px-6 pb-12">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center text-lg text-muted"
        >
          Unsere Ausbildung ist klar strukturiert und individuell auf dich
          zugeschnitten. Ob Nothelferkurs, Verkehrskunde, Auto- oder
          Motorradfahrstunden – wir begleiten dich mit Erfahrung, Geduld und
          Fokus auf echte Sicherheit im Strassenverkehr.
        </motion.p>
      </section>

      {/* Service Detail Blocks */}
      {SERVICES_DETAIL.map((service, i) => (
        <section
          key={service.id}
          id={service.id}
          className="mx-auto max-w-7xl px-6 py-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid items-center gap-12 lg:grid-cols-2"
          >
            <div className={i % 2 === 1 ? "lg:order-2" : ""}>
              <h2 className="text-3xl font-bold text-foreground md:text-4xl">
                {service.title}
              </h2>
              <p className="mt-4 text-muted">{service.description}</p>
              <p className="mt-4 text-muted">{service.longDescription}</p>
              <a
                href={service.bookingLink}
                target={service.bookingLink.startsWith("http") ? "_blank" : undefined}
                rel={service.bookingLink.startsWith("http") ? "noopener noreferrer" : undefined}
                className="mt-8 inline-block rounded-full bg-accent px-8 py-3 font-medium text-white transition-colors hover:bg-accent-dark"
              >
                Buchen
              </a>
            </div>
            <div className={`relative overflow-hidden rounded-2xl ${i % 2 === 1 ? "lg:order-1" : ""}`}>
              <Image
                src={service.image}
                alt={service.title}
                width={800}
                height={500}
                className="h-[350px] w-full object-cover"
              />
            </div>
          </motion.div>
        </section>
      ))}

      {/* Stats */}
      <Stats />

      {/* Pricing */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-accent">
            Unsere Preise
          </p>
          <h2 className="mt-4 text-3xl font-bold text-foreground md:text-4xl">
            Preise, die zu deinem Tempo passen.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted">
            Ob einzelne Fahrstunden oder komplette Ausbildung – du bestimmst, wie
            schnell du vorankommst.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {PRICING.map((plan, i) => (
            <PricingCard key={plan.title} {...plan} index={i} />
          ))}
        </div>
      </section>

      {/* Starte jetzt CTA */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="rounded-3xl bg-accent p-12 text-center text-white md:p-16"
        >
          <p className="text-sm uppercase tracking-widest text-white/60">
            Kurs finden
          </p>
          <h2 className="mt-4 text-3xl font-bold md:text-4xl">
            Starte jetzt.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/80">
            Egal ob du ganz am Anfang stehst oder bereits mit dem
            Lernfahrausweis unterwegs bist – wir begleiten dich persönlich und
            professionell bis zur Prüfung.
          </p>
          <Link
            href="/kontakt"
            className="mt-8 inline-block rounded-full bg-white px-8 py-4 font-medium text-accent transition-colors hover:bg-white/90"
          >
            Anmelden
          </Link>
        </motion.div>
      </section>

      {/* FAQ */}
      <FAQ />
    </>
  );
}
