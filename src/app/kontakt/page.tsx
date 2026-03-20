"use client";

import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import ContactForm from "@/components/ContactForm";
import { SITE } from "@/lib/constants";

export default function KontaktPage() {
  return (
    <>
      {/* Hero */}
      <Hero
        title="Schreib uns."
        subtitle="Hast du Fragen zu unseren Kursen oder möchtest dich anmelden? Wir melden uns so schnell wie möglich bei dir."
      />

      {/* Contact Section */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.2fr]">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-foreground">Kontaktiere uns</h2>
            <p className="mt-4 text-muted">
              Du kannst uns jederzeit eine Nachricht schreiben. Wir antworten in
              der Regel innerhalb von 24 Stunden.
            </p>

            <div className="mt-10 space-y-6">
              <div>
                <p className="text-sm font-medium uppercase tracking-widest text-accent">
                  E-Mail
                </p>
                <a
                  href={`mailto:${SITE.email}`}
                  className="mt-1 block text-lg text-foreground hover:text-accent"
                >
                  {SITE.email}
                </a>
              </div>

              <div>
                <p className="text-sm font-medium uppercase tracking-widest text-accent">
                  Standort
                </p>
                <p className="mt-1 text-lg text-muted">Zürich, Schweiz</p>
              </div>

              <div>
                <p className="text-sm font-medium uppercase tracking-widest text-accent">
                  Kurse buchen
                </p>
                <p className="mt-1 text-muted">
                  Für Kursbuchungen (Nothelfer, Verkehrskunde, Motorrad) nutze
                  bitte unsere{" "}
                  <a
                    href="/services"
                    className="text-accent underline underline-offset-4 hover:text-accent-dark"
                  >
                    Services-Seite
                  </a>{" "}
                  mit direkter Anmeldung.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-border bg-card p-8 md:p-10"
          >
            <ContactForm />
          </motion.div>
        </div>
      </section>
    </>
  );
}
