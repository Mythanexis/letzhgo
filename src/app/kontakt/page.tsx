"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import ContactForm from "@/components/ContactForm";
import InstructorsSection from "@/components/InstructorsSection";
import { SITE } from "@/lib/constants";
import { useScrollAnim } from "@/hooks/useScrollAnim";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function KontaktPage() {
  const anim = useScrollAnim();
  return (
    <>
      {/* Split Hero — dunkel mit Teamfoto */}
      <section className="relative overflow-hidden bg-[#0a0a0a]" data-navbar-dark>
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:min-h-[620px]">
          {/* Text */}
          <div className="relative z-10 flex flex-col justify-center px-8 pb-14 pt-40 md:px-16 md:pt-44 lg:py-24 xl:px-24">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE }}
              className="text-sm font-medium uppercase tracking-widest text-accent"
            >
              Kontakt
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.08, ease: EASE }}
              className="mt-4 text-4xl font-extrabold leading-[1.08] text-white md:text-5xl lg:text-6xl"
            >
              Schreib uns.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.18, ease: EASE }}
              className="mt-5 max-w-md text-base leading-relaxed text-white/60 md:text-lg"
            >
              Hast du Fragen zu unseren Kursen oder möchtest dich anmelden? Wir
              melden uns so schnell wie möglich bei dir.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.28, ease: EASE }}
              className="mt-10 space-y-4"
            >
              <a
                href={`mailto:${SITE.email}`}
                className="group flex items-center gap-3 text-white/70 transition-colors hover:text-white"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10 text-accent transition-colors group-hover:bg-accent/20">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <span className="text-sm font-semibold">{SITE.email}</span>
              </a>
              <a
                href="tel:+41433001455"
                className="group flex items-center gap-3 text-white/70 transition-colors hover:text-white"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10 text-accent transition-colors group-hover:bg-accent/20">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </span>
                <span className="text-sm font-semibold">043 300 14 55</span>
              </a>
              <div className="flex items-center gap-3 text-white/70">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10 text-accent">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </span>
                <span className="text-sm font-semibold">
                  Binzmühlestrasse 15, 8050 Zürich
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.38, ease: EASE }}
              className="mt-10"
            >
              <a
                href="#kontaktformular"
                className="inline-flex items-center justify-center rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-white transition-all hover:scale-[1.02] hover:bg-accent-dark"
              >
                Nachricht senden
              </a>
            </motion.div>
          </div>

          {/* Bild */}
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.15, ease: EASE }}
            className="relative min-h-[320px] lg:min-h-0"
          >
            <Image
              src="/images/fahrschul-team.jpg"
              alt="Team Let'ZHgo"
              fill
              className="object-cover object-[center_25%]"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#0a0a0a_0%,rgba(10,10,10,0.5)_15%,rgba(10,10,10,0.15)_35%,transparent_55%)]" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/25 via-transparent to-transparent lg:hidden" />
          </motion.div>
        </div>
      </section>

      {/* Formular */}
      <section id="kontaktformular" className="scroll-mt-24 bg-[#f7f8fa] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-16 lg:grid-cols-[1fr_1.3fr] lg:items-start">
            {/* Links — Inhalt */}
            <motion.div {...anim({ y: 24, duration: 0.7 })}>
              <p className="text-sm font-medium uppercase tracking-widest text-accent">
                Kontaktformular
              </p>
              <h2 className="mt-3 text-3xl font-bold text-foreground md:text-4xl">
                Wir freuen uns auf<br />deine Nachricht.
              </h2>
              <p className="mt-4 max-w-md text-lg leading-relaxed text-muted">
                Wir antworten in der Regel innerhalb von 24 Stunden.
              </p>

              <div className="mt-10 space-y-5">
                <div className="flex items-start gap-4">
                  <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-foreground">Schnelle Antwort</p>
                    <p className="mt-0.5 text-sm text-muted">
                      In der Regel melden wir uns innerhalb eines Werktages bei dir.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-foreground">Unverbindlich</p>
                    <p className="mt-0.5 text-sm text-muted">
                      Frag einfach nach — ganz ohne Verpflichtung.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-foreground">Direkt buchen</p>
                    <p className="mt-0.5 text-sm text-muted">
                      Kurse (Nothelfer, VKU, Motorrad) direkt über unsere{" "}
                      <Link
                        href="/services"
                        className="font-semibold text-accent underline-offset-4 hover:underline"
                      >
                        Services-Seite
                      </Link>{" "}
                      buchen.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Rechts — Formular */}
            <motion.div
              {...anim({ y: 24, delay: 0.1, duration: 0.7 })}
              className="rounded-3xl bg-white p-6 shadow-lg shadow-black/[0.04] ring-1 ring-black/[0.06] md:p-10"
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Fahrlehrer */}
      <InstructorsSection
        layout="singleGrid"
        className="bg-background"
        id="fahrlehrer-kontakt"
        eyebrow="Dein Team"
        title="Menschen, die dich auf deinem Weg begleiten"
        subtitle="Fragen, Zweifel oder einfach mal Hallo — wir freuen uns, von dir zu hören und nehmen uns Zeit für dich. Per Anruf oder WhatsApp."
      />

      {/* Google Maps */}
      <section className="bg-[#f7f8fa] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-accent">
            Standort
          </p>
          <h2 className="mb-8 text-2xl font-bold text-foreground md:text-3xl">
            So findest du uns
          </h2>
          <div className="overflow-hidden rounded-2xl shadow-sm ring-1 ring-black/[0.06]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.4462940132767!2d8.548077000000001!3d47.4136889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47900a849b623bb1%3A0xc5c7ea7b2839c868!2sFahrschule%20LetZHgo!5e1!3m2!1sen!2sch!4v1775990876433!5m2!1sen!2sch"
              width="100%"
              height="420"
              style={{ border: 0, display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Let'ZHgo Fahrschule – Binzmühlestrasse 15, 8050 Zürich"
            />
          </div>
        </div>
      </section>
    </>
  );
}
