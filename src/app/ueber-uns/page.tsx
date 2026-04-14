"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import UeberUnsCurtainHero from "@/components/UeberUnsCurtainHero";
import InstructorCard from "@/components/InstructorCard";
import Stats from "@/components/Stats";
import FAQ from "@/components/FAQ";
import { INSTRUCTORS, INSTRUCTORS_HOMEPAGE_ORDER } from "@/lib/constants";

export default function UeberUnsPage() {
  const instructorsInOrder = INSTRUCTORS_HOMEPAGE_ORDER.map((name) =>
    INSTRUCTORS.find((instructor) => instructor.name === name),
  ).filter((instructor): instructor is (typeof INSTRUCTORS)[number] => Boolean(instructor));

  return (
    <>
      <UeberUnsCurtainHero />

      {/* Über */}
      <section className="relative overflow-hidden bg-[#f7f8fa]">
        <div
          className="pointer-events-none absolute right-0 top-1/2 h-80 w-80 -translate-y-1/2 translate-x-1/4 rounded-full bg-accent/[0.09] blur-[100px]"
          aria-hidden
        />

        <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true, margin: "-60px" }}
              className="order-2 lg:order-1"
            >
              <p className="text-sm font-medium uppercase tracking-widest text-accent">
                Über uns
              </p>
              <h2 className="mt-4 text-3xl font-bold leading-[1.12] tracking-tight text-foreground md:text-4xl lg:text-[2.5rem]">
                Ein Team,{" "}
                <span className="text-accent">ein Ziel:</span> dass du sicher
                fahren kannst.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-muted md:text-xl">
                Bei Let&apos;ZHgo! ist jede Fahrausbildung individuell. Wir
                glauben, dass Sicherheit, Vertrauen und Geduld die Grundlage für
                nachhaltiges Lernen sind – mit klarer Anleitung, ehrlichem
                Feedback und echter Leidenschaft fürs Fahren.
              </p>
              <p className="mt-5 text-lg leading-relaxed text-muted">
                Wir richten uns nach deinem Tempo und deinem Alltag. Wo es hakt,
                nehmen wir uns die Zeit; wo es gut läuft, geben wir dir Raum –
                damit du nicht nur die Prüfung machst, sondern dich danach im
                echten Verkehr wohlfühlst.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
                <Link
                  href="/kontakt"
                  className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-accent-dark"
                >
                  Kontakt aufnehmen
                </Link>
                <Link
                  href="/services"
                  className="text-sm font-semibold text-foreground underline decoration-border underline-offset-4 transition hover:text-accent hover:decoration-accent"
                >
                  Unsere Services
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true, margin: "-60px" }}
              className="order-1 lg:order-2"
            >
              <div className="relative mx-auto w-full max-w-lg lg:mx-0 lg:max-w-none">
                <div
                  className="pointer-events-none absolute -inset-3 rounded-[32px] bg-gradient-to-br from-accent/15 via-transparent to-accent/10 blur-2xl"
                  aria-hidden
                />
                <div className="relative overflow-hidden rounded-[26px] border border-border/80 bg-card shadow-[0_24px_60px_-24px_rgba(0,0,0,0.22)] ring-1 ring-black/[0.04] lg:-rotate-[0.6deg] lg:transition-transform lg:duration-500 lg:hover:rotate-0">
                  <div className="relative aspect-[4/3] sm:aspect-[5/4]">
                    <Image
                      src="/images/ueber-uns-hero.png"
                      alt="Flotte und Team von Let'ZHgo"
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 1024px) 100vw, 42vw"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Warum Let'ZHgo */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl text-center"
          >
            <p className="text-sm font-medium uppercase tracking-widest text-accent">
              Deine Vorteile
            </p>
            <h2 className="mt-5 text-4xl font-bold leading-[1.08] tracking-tight text-foreground md:text-5xl lg:text-6xl">
              Warum{" "}
              <span className="text-accent">Let&apos;ZHgo?</span>
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              Optimal vorbereitet – ohne Umwege.
            </p>
          </motion.div>

          <div className="mt-16 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Maximale Flexibilität",
                text: "Mehrere Fahrlehrer:innen im Team – du findest immer einen Termin, der passt.",
                icon: <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />,
              },
              {
                title: "Im ganzen Raum Zürich",
                text: "Mehrere Standorte: Oerlikon, Oberglatt und Rümlang.",
                icon: <><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></>,
              },
              {
                title: "Prüfungssimulationen",
                text: "Realistische Testläufe, damit du am Prüfungstag ruhig bleibst.",
                icon: <path d="M9 11l3 3L22 4M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />,
              },
              {
                title: "Alles an einem Ort",
                text: "Nothelfer, VKU, Fahrstunden und Motorradkurse aus einer Hand.",
                icon: <><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></>,
              },
              {
                title: "Moderne Fahrzeuge",
                text: "Aktuelle Flotte, gepflegt und für die Ausbildung ausgestattet.",
                icon: <><circle cx="7" cy="17" r="2" /><circle cx="17" cy="17" r="2" /><path d="M5 17H3v-6l2-5h9l4 5h1a2 2 0 0 1 2 2v4h-2M9 17h6" /></>,
              },
              {
                title: "Videoanalyse",
                text: "Fahrten per Video analysieren – Fehler erkennen, schneller Fortschritte machen.",
                icon: <><path d="M23 7l-7 5 7 5V7z" /><rect x="1" y="5" width="15" height="14" rx="2" /></>,
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true, margin: "-40px" }}
                className="text-center"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    {item.icon}
                  </svg>
                </div>
                <h3 className="mt-4 text-base font-bold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.text}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-14 flex justify-center">
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-accent-dark"
            >
              Jetzt loslegen
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M4 8h8M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Fahrlehrer */}
      <section className="bg-[#f7f8fa]">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="text-center">
            <p className="text-sm uppercase tracking-widest text-accent">
              Unsere Fahrlehrer
            </p>
            <h2 className="mt-4 text-3xl font-bold md:text-4xl">
              Die, die immer bei dir sind.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted">
              Unser Team steht für Erfahrung, Geduld und echte Leidenschaft fürs
              Fahren – damit du dich von Anfang an gut aufgehoben fühlst.
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {instructorsInOrder.map((instructor, i) => (
              <InstructorCard key={instructor.name} {...instructor} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="relative overflow-hidden bg-[#0a0f1e]" data-navbar-dark>
        <div
          className="pointer-events-none absolute left-1/4 top-0 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/3 rounded-full bg-accent/15 blur-[120px]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute bottom-0 right-1/4 h-[400px] w-[400px] translate-x-1/2 translate-y-1/3 rounded-full bg-accent/10 blur-[100px]"
          aria-hidden
        />
        <div className="relative z-10 mx-auto max-w-5xl px-6 py-28 md:py-36">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="text-center"
          >
            <span
              className="pointer-events-none select-none font-serif text-[8rem] leading-none text-white/[0.06] md:text-[12rem]"
              aria-hidden
            >
              &ldquo;
            </span>

            <blockquote className="-mt-16 text-2xl font-semibold leading-[1.4] tracking-tight text-white md:-mt-24 md:text-4xl md:leading-[1.35] lg:text-[2.75rem]">
              Ich habe mich jede Sekunde der Fahrstunden in besten Händen
              gefühlt. Gianni glaubt mehr an dich, als du es selbst tust –
              und genau das macht den{" "}
              <span className="text-accent">Unterschied.</span>
            </blockquote>

            <div className="mt-10 flex flex-col items-center gap-4 md:mt-14">
              <div className="flex gap-1" aria-hidden>
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} className="h-4 w-4 text-[#f5a623]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-sm font-semibold text-white">
                  RK
                </div>
                <div className="text-left">
                  <p className="text-sm font-semibold text-white">Romana Kocsis</p>
                  <p className="flex items-center gap-1.5 text-xs text-white/50">
                    <svg className="h-3 w-3" viewBox="0 0 24 24" aria-hidden>
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                    </svg>
                    Google Bewertung
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About bottom */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-6 py-32 md:py-40">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid items-center gap-12 lg:grid-cols-2"
          >
            <h2 className="text-3xl font-bold md:text-4xl">
              Ausbildung mit Erfahrung, geführt von Klarheit –{" "}
              <span className="text-accent">für nachhaltige Sicherheit.</span>
            </h2>
            <p className="text-lg text-muted">
              Unsere Ausbildung schafft die Grundlage für echte Sicherheit im
              Strassenverkehr. Wir nehmen uns Zeit, dein Fahrniveau zu verstehen,
              geben dir klare Strukturen und begleiten dich Schritt für Schritt –
              mit Fokus auf dein Ziel: selbstständig und souverän unterwegs zu sein.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quote — Wald, leicht abgedunkelt; Bild unten ausrichten (Strasse), Text vertikal mittig */}
      <section
        className="relative flex min-h-[36rem] items-center justify-center overflow-hidden px-6 py-16 md:min-h-[44rem] md:py-20"
        data-navbar-dark
      >
        <Image
          src="/images/ueber-uns-quote-forest.png"
          alt=""
          fill
          className="object-cover object-bottom"
          sizes="100vw"
          priority={false}
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/55 via-black/45 to-black/65"
          aria-hidden
        />
        <div className="relative z-10 mx-auto w-full max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mx-auto max-w-5xl text-center"
          >
            <blockquote className="not-italic text-5xl font-semibold leading-[1.15] tracking-tight text-white drop-shadow-[0_2px_24px_rgba(0,0,0,0.35)] md:text-6xl md:leading-[1.12]">
              &ldquo;Jede Fahrt beginnt mit dem ersten Gang – entscheidend ist,
              dass du losfährst.&rdquo;
            </blockquote>
            <p className="mt-10 text-base text-white/75 md:mt-12 md:text-lg">
              — Samir Radič, Gründer Let&apos;ZHgo
            </p>
          </motion.div>
        </div>
      </section>

      {/* Motorrad-Grundkurs Promo */}
      <section className="relative overflow-hidden bg-[#f7f8fa]">
        <div
          className="pointer-events-none absolute -right-32 top-1/3 h-[450px] w-[450px] rounded-full bg-accent/[0.07] blur-[120px]"
          aria-hidden
        />

        <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: "-60px" }}
            className="overflow-hidden rounded-[28px] bg-white shadow-[0_4px_32px_-8px_rgba(0,0,0,0.06),0_16px_48px_-16px_rgba(1,68,220,0.08)] ring-1 ring-black/[0.03]"
          >
            <div className="grid lg:grid-cols-2">
              <div className="relative min-h-[320px] lg:min-h-0">
                <Image
                  src="/images/posters/motorrad-grundkurs.png"
                  alt="Motorrad-Grundkurs bei Let'ZHgo – Jetzt online buchen"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              <div className="flex flex-col justify-center px-8 py-10 md:px-12 md:py-14 lg:px-14 lg:py-16">
                <div className="inline-flex w-fit items-center gap-2 rounded-full bg-accent/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent">
                  <svg viewBox="0 0 24 24" fill="none" className="h-3.5 w-3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                  </svg>
                  Kurs verfügbar
                </div>
                <h2 className="mt-5 text-3xl font-bold leading-tight text-foreground md:text-[2.25rem]">
                  Motorrad-Grundkurs
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted">
                  12 Stunden praxisnahes Training – von Kurventechnik bis
                  Verkehrssicherheit. Ob A1 oder A: Wir machen dich startklar.
                </p>

                <div className="mt-7 grid grid-cols-3 gap-4 rounded-xl bg-[#f7f8fa] p-4">
                  {[
                    { value: "12h", label: "Training" },
                    { value: "3", label: "Halbtage" },
                    { value: "A1/A", label: "Kategorien" },
                  ].map((stat) => (
                    <div key={stat.label} className="text-center">
                      <p className="text-xl font-bold text-accent md:text-2xl">{stat.value}</p>
                      <p className="mt-0.5 text-xs text-muted">{stat.label}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-7 flex flex-col gap-2.5 text-sm text-foreground/80">
                  {["Übungsmotorräder vorhanden", "Kleine Gruppen, individuelles Feedback"].map((p) => (
                    <div key={p} className="flex items-center gap-2.5">
                      <svg viewBox="0 0 16 16" fill="none" className="h-4 w-4 shrink-0 text-accent" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3.5 8.5l3 3 6-7" />
                      </svg>
                      {p}
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-3">
                  <a
                    href="https://app1.edoobox.com/de/LetZHgo/Motorradkurse/?edref=letzhgo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-accent-dark"
                  >
                    Grundkurs buchen
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M4 8h8M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                  <Link
                    href="/services/motorrad"
                    className="text-sm font-semibold text-foreground underline decoration-border underline-offset-4 transition hover:text-accent hover:decoration-accent"
                  >
                    Mehr erfahren
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Bewertungen */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
          >
            <p className="text-sm font-medium uppercase tracking-widest text-accent">
              Bewertungen
            </p>
            <h2 className="mt-4 text-3xl font-bold md:text-4xl">
              Das sagen unsere Fahrschüler:innen.
            </h2>
          </motion.div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                author: "Sarah Gisin",
                text: "Mario ist wirklich der beste Fahrlehrer! Er nimmt sich die Zeit, ist geduldig und verständnisvoll, bleibt ruhig und motivierend. Er hat mir das Fahren 1A beigebracht – dafür bin ich sehr dankbar!",
                date: "3. Februar 2025",
                tall: true,
              },
              {
                author: "Katarina Lischer",
                text: "Mein Fahrlehrer Gianni ist super geduldig, professionell und erklärt alles klar. Die Atmosphäre war entspannt, und ich habe mich immer gut aufgehoben gefühlt. Prüfung beim ersten Mal bestanden!",
                date: "18. Dezember 2024",
                tall: false,
              },
              {
                author: "Bela Borner",
                text: "Sehr gut organisierter Grundkurs. Hat Spass gemacht und Samir ist ein wirklich guter Lehrer. Habe wichtige Tipps und Tricks gelernt.",
                date: "17. November 2024",
                tall: false,
              },
              {
                author: "Leona Zogaj",
                text: "Mario war ein sehr guter Fahrlehrer, der mir gute Erklärungen geben konnte und mir so weitergeholfen und motiviert hat. Ich habe viel gelernt und er hatte auch viel Geduld.",
                date: "17. November 2024",
                tall: false,
              },
              {
                author: "Rebecca Volpini",
                text: "Gianni hat die Fahrstunden kreativ und abwechslungsreich gestaltet. So hat das Lernen wirklich Spass gemacht. Mit seiner Geduld und seiner motivierenden Art habe ich die Prüfung erfolgreich bestanden!",
                date: "3. Februar 2025",
                tall: true,
              },
              {
                author: "Raul B",
                text: "Vielen Dank an Frau Merjema Radic. Ich konnte sehr viel über das Fahren und allgemein über den Verkehr von ihr lernen und somit im Nu meine Prüfung bestehen.",
                date: "24. Oktober 2024",
                tall: false,
              },
            ].map((review, i) => (
              <motion.div
                key={review.author}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true, margin: "-40px" }}
                className={`flex flex-col rounded-2xl border border-border/60 bg-[#f7f8fa] p-6 md:p-7 ${review.tall ? "md:row-span-2" : ""}`}
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/10 text-xs font-bold text-accent">
                    {review.author.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{review.author}</p>
                    <div className="flex items-center gap-2">
                      <div className="flex gap-0.5" aria-hidden>
                        {Array.from({ length: 5 }).map((_, j) => (
                          <svg key={j} className="h-3 w-3 text-[#f5a623]" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                          </svg>
                        ))}
                      </div>
                      <span className="text-xs text-muted">{review.date}</span>
                    </div>
                  </div>
                </div>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-foreground/75">
                  &ldquo;{review.text}&rdquo;
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <a
              href="https://www.google.com/maps/search/?api=1&query=Let%27ZHgo+Fahrschule+Binzm%C3%BChlestrasse+15+8050+Z%C3%BCrich"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-6 py-2.5 text-sm font-semibold text-foreground shadow-sm transition-all hover:border-accent/30 hover:text-accent"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" aria-hidden>
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              Alle 417+ Bewertungen auf Google
            </a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <Stats surface="light" />

      {/* FAQ */}
      <FAQ className="bg-[#f7f8fa]" />
    </>
  );
}
