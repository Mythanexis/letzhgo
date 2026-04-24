"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Users, MapPin, ClipboardCheck, GraduationCap, Car, Video } from "lucide-react";
import UeberUnsCurtainHero from "@/components/UeberUnsCurtainHero";
import InstructorCard from "@/components/InstructorCard";
import Stats from "@/components/Stats";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import { INSTRUCTORS, INSTRUCTORS_HOMEPAGE_ORDER } from "@/lib/constants";
import { useCoarsePointer, useScrollAnim } from "@/hooks/useScrollAnim";

export default function UeberUnsPage() {
  const anim = useScrollAnim();
  const coarse = useCoarsePointer();
  const GOOGLE_REVIEWS_URL = "https://www.google.com/maps/search/?api=1&query=Let%27ZHgo+Fahrschule+Binzm%C3%BChlestrasse+15+8050+Z%C3%BCrich";
  const REVIEW_PREVIEW_CHARS = 200;
  const instructorsInOrder = INSTRUCTORS_HOMEPAGE_ORDER.map((name) =>
    INSTRUCTORS.find((instructor) => instructor.name === name),
  ).filter((instructor): instructor is (typeof INSTRUCTORS)[number] => Boolean(instructor));
  const reviews = [
    {
      author: "Dogu Erbek",
      text: "Ich habe alle Schritte für meinen Führerschein mit LetZHgo gemacht und es war fantastisch. Ich danke am besondersten Gianni, ohne den ich es nicht geschafft hätte. Er hat mich von Anfang bis Ende begleitet und war dabei sehr geduldig und hilfsbereit. Ich kann LetZHgo jedem, der seinen Führerschein machen möchte, wärmstens empfehlen.",
      date: "vor 1 Monat",
    },
    {
      author: "Delia Ullings",
      text: "Wer gute Fahrstunden mit einer lockeren Atmosphäre sucht ist hier genau richtig! Ich habe mich immer auf meine Fahrstunden bei Gianni oder auch Heike gefreut. Beide erklären alles verständlich und mit viel Geduld. Der VKU ist auch super aufgebaut. Kann ich nur weiterempfehlen.",
      date: "vor 5 Monaten",
    },
    {
      author: "K Danijel",
      text: "Ich durfte beim Gianni Fahrstunden für den Anhänger machen. Ich kann ihn und seine Fahrschule jedem zu 100% weiterempfehlen. Super sympathischer Typ, bringt einem alles in der Praxis bei und hat Spass bei den Fahrstunden. Er hat mir alles beigebracht, was ich brauchte, um die Prüfung innert von 3 Wochen zu bestehen! Danke viel mal und wir sehen uns im Frühling für die nächste Kategorie (Motorrad beschränkt).",
      date: "vor 2 Monaten",
    },
    {
      author: "Mia Numme",
      text: "Ich kann Merjema als Fahrlehrerin absolut weiterempfehlen. Sie hat sofort erkannt, wo ich noch Verbesserung gebraucht habe, und genau dort angesetzt. Sie erklärt alles so, dass man wirklich versteht, warum man etwas tut und nicht nur wie. Ihre Art ist nicht ruhig, sondern richtig powerful - motivierend, klar und direkt, genau das, was ich gebraucht habe, um schnell Fortschritte zu machen. Jede Fahrstunde war intensiv, lehrreich und hat mir viel Sicherheit gegeben. Dank ihr bin ich bestens vorbereitet in die Prüfung gegangen. Eine Fahrlehrerin, die wirklich etwas bewirkt!",
      date: "vor 4 Monaten",
    },
    {
      author: "Tahira Leutwiler",
      text: "Die Fahrschule, sowie meine Fahrlehrerin Merjema Radic haben mir einen sehr positiven Eindruck gemacht. Ich war bei Merjema im Nothelferkurs, welcher ebenfalls sehr hilfreich und umfassend war. Während der Fahrstunden habe ich mich immer sehr wohl gefühlt, da auf meine Bedürfnisse eingegangen wurde und ich in diesem Jahr sehr gefördert wurde. Sie sind alle sehr professionell und bereiten dich zu 100% auf die Fahrprüfung vor. Der VKU war ebenfalls sehr hilfreich und spannend. Merjema ist eine sehr angenehme Fahrlehrerin und weiss wovon sie spricht. Sie geht alles mit Ruhe und Gelassenheit an, was ich sehr wichtig finde. Danke euch allen viel mals für die tollen Kurse, sowie für meine Fahrstunden! :)",
      date: "vor 2 Monaten",
    },
    {
      author: "Rejana Saciri",
      text: "Ich möchte meine positive Erfahrung mit der Fahrschule LetZHgo teilen. Besonders bedanken möchte ich mich bei meiner Fahrlehrerin Merjema Radic, die den Unterricht wirklich angenehm gestaltet hat. Wir hatten viel Spass zusammen, konnten lachen und uns gut unterhalten, was die Lernatmosphäre sehr entspannt gemacht hat. Merjema Radic hat mir alles sehr gut erklärt und mir alle wichtigen Aspekte des Fahrens anschaulich gezeigt. Ihre Geduld und Professionalität haben mir geholfen, schnell Fortschritte zu machen und mich sicher hinter das Steuer zu setzen. Insgesamt war es eine tolle Erfahrung, und ich kann LetZHgo nur weiterempfehlen!",
      date: "vor 5 Monaten",
    },
  ];
  const [expandedReviews, setExpandedReviews] = useState<Record<string, boolean>>({});

  return (
    <>
      <UeberUnsCurtainHero />

      {/* Über */}
      <section className="relative overflow-hidden bg-background">
        <div
          className="pointer-events-none absolute right-0 top-1/2 h-80 w-80 -translate-y-1/2 translate-x-1/4 rounded-full bg-accent/9 blur-[100px]"
          aria-hidden
        />

        <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16">
            <motion.div {...anim({ y: 28, duration: 0.7 })} className="order-2 lg:order-1">
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

            <motion.div {...anim({ y: 28, delay: 0.12, duration: 0.7 })} className="order-1 lg:order-2">
              <div className="relative mx-auto w-full max-w-lg lg:mx-0 lg:max-w-none">
                <div
                  className="pointer-events-none absolute -inset-3 rounded-[32px] bg-linear-to-br from-accent/15 via-transparent to-accent/10 blur-2xl"
                  aria-hidden
                />
                <div className="relative overflow-hidden rounded-[26px] border border-border/80 bg-card shadow-[0_24px_60px_-24px_rgba(0,0,0,0.22)] ring-1 ring-black/4 lg:-rotate-[0.6deg] lg:transition-transform lg:duration-500 lg:hover:rotate-0">
                  <div className="relative aspect-4/3 sm:aspect-5/4">
                    <Image
                      src="/images/fahrschul-team.jpg"
                      alt="Das Team von Let'ZHgo Fahrschule"
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
      <section className="bg-[#f7f8fa]">
        <div className="mx-auto max-w-6xl px-6 py-28 md:py-36">
          <motion.div {...anim({ y: 30, scale: 0.97, duration: 0.8 })}>
            <motion.h2 {...anim({ y: 20, delay: 0.1, duration: 0.7 })} className="text-5xl font-bold leading-[1.1] tracking-tight text-foreground md:text-6xl">
              Unsere <span className="text-accent">Vorteile</span>
            </motion.h2>
            <motion.p {...anim({ y: 16, delay: 0.25, duration: 0.7 })} className="mt-6 max-w-2xl text-lg leading-relaxed text-muted md:text-xl">
              Eine moderne Fahrschule, die mit der Zeit geht –
              mit Qualität, Flexibilität und individueller Betreuung.
            </motion.p>
          </motion.div>

          <div className="mt-20 grid gap-x-16 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Maximale Flexibilität", text: "Mehrere Fahrlehrer:innen im Team – du findest immer einen Termin, der passt.", Icon: Users },
              { title: "Im ganzen Raum Zürich", text: "Mehrere Standorte: Oerlikon und Rümlang.", Icon: MapPin },
              { title: "Prüfungssimulationen", text: "Realistische Testläufe, damit du am Prüfungstag ruhig bleibst.", Icon: ClipboardCheck },
              { title: "Alles an einem Ort", text: "Nothelfer, VKU, Fahrstunden und Motorradkurse aus einer Hand.", Icon: GraduationCap },
              { title: "Moderne Fahrzeuge", text: "Aktuelle Flotte, gepflegt und für die Ausbildung ausgestattet.", Icon: Car },
              { title: "Videoanalyse", text: "Fahrten per Video analysieren – Fehler erkennen, schneller Fortschritte machen.", Icon: Video },
            ].map((item, i) => (
              <motion.div key={item.title} {...anim({ y: 30, delay: 0.1 + i * 0.1, duration: 0.6 })}>
                <motion.div
                  {...(coarse
                    ? {
                        initial: false,
                        animate: { opacity: 1, scale: 1, rotate: 0 },
                        transition: { duration: 0 },
                      }
                    : {
                        initial: { scale: 0, rotate: -20 },
                        whileInView: { scale: 1, rotate: 0 },
                        transition: {
                          duration: 0.5,
                          delay: 0.2 + i * 0.1,
                          type: "spring" as const,
                          stiffness: 200,
                          damping: 15,
                        },
                        viewport: { once: true, margin: "-60px" },
                      })}
                  className="w-fit"
                >
                  <item.Icon className="h-14 w-14 text-accent" strokeWidth={1.2} />
                </motion.div>
                <h3 className="mt-6 text-2xl font-bold text-foreground">{item.title}</h3>
                <p className="mt-3 text-lg leading-relaxed text-muted">{item.text}</p>
              </motion.div>
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
          <motion.div {...anim({ y: 40, duration: 0.9 })} className="text-center">
            <span
              className="pointer-events-none select-none font-serif text-[8rem] leading-none text-white/6 md:text-[12rem]"
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

      {/* Fahrlehrer */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <motion.div {...anim({ y: 34, duration: 0.8 })} className="text-center">
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
          </motion.div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {instructorsInOrder.map((instructor, i) => (
              <InstructorCard key={instructor.name} {...instructor} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* About bottom */}
      <section className="bg-[#f7f8fa]">
        <div className="mx-auto max-w-7xl px-6 py-32 md:py-40">
          <motion.div {...anim({ y: 36, duration: 0.8 })} className="grid items-center gap-12 lg:grid-cols-2">
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
        className="relative flex min-h-144 items-center justify-center overflow-hidden px-6 py-16 md:min-h-176 md:py-20"
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
          className="pointer-events-none absolute inset-0 bg-linear-to-b from-black/36 via-black/30 to-black/42"
          aria-hidden
        />
        <div className="relative z-10 mx-auto w-full max-w-7xl">
          <motion.div {...anim({ y: 36, duration: 0.8 })} className="mx-auto max-w-5xl text-center">
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

      {/* Stats */}
      <Stats surface="light" />

      {/* Bewertungen */}
      <section className="relative overflow-hidden bg-background">
        <div
          className="pointer-events-none absolute inset-0 opacity-100"
          aria-hidden
          style={{
            background:
              "radial-gradient(960px 620px at 20% 24%, rgba(30, 99, 255, 0.16), transparent 62%), radial-gradient(900px 620px at 84% 70%, rgba(30, 99, 255, 0.12), transparent 64%), linear-gradient(180deg, rgba(247, 248, 250, 0.9), rgba(255, 255, 255, 1) 52%, rgba(247, 248, 250, 0.9) 100%)",
          }}
        />
        <div
          className="pointer-events-none absolute -left-24 top-16 h-80 w-80 rounded-full bg-accent/18 blur-[120px]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -right-24 bottom-10 h-[26rem] w-[26rem] rounded-full bg-accent-light/22 blur-[125px]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.3]"
          aria-hidden
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, var(--color-border) 1px, transparent 0)",
            backgroundSize: "22px 22px",
          }}
        />
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <motion.div {...anim({ y: 34, duration: 0.85 })} className="relative">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
                  Bewertungen
                </p>
                <h2 className="mt-3 text-3xl font-bold leading-[1.12] tracking-tight text-foreground md:text-4xl">
                  Das sagen unsere <span className="text-accent">Fahrschüler:innen</span>.
                </h2>
                <p className="mt-3 max-w-2xl text-base text-muted">
                  Ehrliches Feedback aus echten Fahrstunden - transparent, direkt und ohne Filter.
                </p>
              </div>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {reviews.map((review, i) => (
                <motion.article
                  key={`${review.author}-${review.date}`}
                  {...anim({
                    y: 24,
                    delay: Math.min(i * 0.08, 0.35),
                    duration: 0.65,
                  })}
                  className="flex h-full min-h-[21rem] flex-col rounded-2xl border border-border/80 bg-[#f7f8fa] p-6 shadow-[0_10px_26px_-18px_rgba(12,22,44,0.28)]"
                >
                      <div className="flex items-center justify-between">
                        <span className="text-4xl leading-none text-accent/20" aria-hidden>
                          &ldquo;
                        </span>
                        <div className="flex gap-0.5" aria-hidden>
                          {Array.from({ length: 5 }).map((_, j) => (
                            <svg key={j} className="h-4 w-4 text-[#f5a623]" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                            </svg>
                          ))}
                        </div>
                      </div>

                      <div className="mt-3 flex-1">
                        {(() => {
                          const reviewId = `${review.author}-${review.date}`;
                          const isExpanded = Boolean(expandedReviews[reviewId]);
                          const hasLongText = review.text.length > REVIEW_PREVIEW_CHARS;
                          const previewText = hasLongText
                            ? review.text.slice(0, REVIEW_PREVIEW_CHARS).trimEnd()
                            : review.text;
                          const extraText = hasLongText
                            ? review.text.slice(REVIEW_PREVIEW_CHARS).trimStart()
                            : "";
                          return (
                            <div>
                              <p className="text-sm leading-relaxed text-foreground/80">
                                &ldquo;{previewText}
                                {!isExpanded && hasLongText ? "..." : hasLongText ? "" : "”"}
                              </p>
                              <AnimatePresence initial={false}>
                                {hasLongText && isExpanded && (
                                  <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                                    className="overflow-hidden"
                                  >
                                    <p className="text-sm leading-relaxed text-foreground/80">
                                      {extraText}&rdquo;
                                    </p>
                                  </motion.div>
                                )}
                              </AnimatePresence>
                              {hasLongText && (
                                <button
                                  type="button"
                                  onClick={() =>
                                    setExpandedReviews((prev) => ({
                                      ...prev,
                                      [reviewId]: !prev[reviewId],
                                    }))
                                  }
                                  className="mt-2 inline-flex cursor-pointer text-xs font-semibold text-accent transition hover:text-accent-dark"
                                >
                                  {isExpanded ? "Weniger anzeigen" : "Mehr lesen"}
                                </button>
                              )}
                            </div>
                          );
                        })()}
                      </div>

                      <div className="mt-5 flex items-center gap-3 pt-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/10 text-xs font-bold text-accent">
                          {review.author.split(" ").map((n) => n[0]).join("")}
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-foreground">{review.author}</p>
                          <p className="text-xs text-muted">{review.date}</p>
                        </div>
                      </div>
                </motion.article>
              ))}
            </div>

            <div className="mt-8 flex justify-center">
              <a
                href={GOOGLE_REVIEWS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[#d7d4ec] bg-white px-6 py-2.5 text-sm font-semibold text-foreground shadow-sm transition-all hover:border-accent/30 hover:text-accent"
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
          </motion.div>
        </div>
      </section>

      {/* Motorrad-Grundkurs Promo */}
      <section className="relative overflow-hidden bg-background">
        <div
          className="pointer-events-none absolute -left-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-accent/10 blur-[100px]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute right-0 top-0 h-80 w-80 -translate-y-1/3 translate-x-1/4 rounded-full bg-sky-200/35 blur-[110px]"
          aria-hidden
        />
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <motion.div {...anim({ y: 36, duration: 0.85 })} className="relative z-10 grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent/90">
                  Motorrad-Grundkurs
                </p>
                <h2 className="mt-4 text-4xl font-bold leading-[1.08] tracking-tight text-foreground md:text-5xl">
                  Bereit für zwei Räder?
                </h2>
                <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
                  In 12 Stunden wirst du sicherer, ruhiger und souveräner auf dem
                  Motorrad. Praxisnah, direkt umsetzbar und mit Feedback, das dich
                  wirklich weiterbringt.
                </p>

                <div className="mt-8 grid gap-x-8 gap-y-4 text-base text-foreground/85 sm:grid-cols-2">
                  {[
                    "12 Stunden auf 3 Halbtage verteilt",
                    "Für Kategorie A1 und A",
                    "Übungsmotorräder vorhanden",
                    "Kleine Gruppen mit direktem Coaching",
                  ].map((text) => (
                    <div key={text} className="flex items-start gap-3">
                      <span
                        className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/12 text-accent"
                        aria-hidden
                      >
                        <svg viewBox="0 0 16 16" fill="none" className="h-3.5 w-3.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M3.5 8.5l3 3 6-7" />
                        </svg>
                      </span>
                      <span>{text}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3">
                  <a
                    href="https://app1.edoobox.com/de/LetZHgo/Motorradkurse/?edref=letzhgo"
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-accent px-7 py-3 text-sm font-semibold text-white shadow-sm outline-none transition-colors hover:bg-accent-dark focus-visible:ring-2 focus-visible:ring-accent-dark/45 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                  >
                    <span className="relative z-10 inline-block whitespace-nowrap transition-transform duration-[400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:pointer-events-none group-hover:-translate-x-[calc(100%+2.5rem)] group-focus-visible:pointer-events-none group-focus-visible:-translate-x-[calc(100%+2.5rem)] motion-reduce:group-hover:translate-x-0 motion-reduce:group-focus-visible:translate-x-0">
                      Jetzt Platz sichern
                    </span>
                    <span
                      className="pointer-events-none absolute inset-0 flex items-center overflow-hidden motion-reduce:hidden"
                      aria-hidden
                    >
                      <span className="flex w-full justify-center transition-transform duration-[400ms] ease-[cubic-bezier(0.22,1,0.36,1)] translate-x-full group-hover:translate-x-0 group-focus-visible:translate-x-0">
                        <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14M13 5l7 7-7 7" />
                        </svg>
                      </span>
                    </span>
                  </a>
                  <Link
                    href="/services/motorrad"
                    className="group relative inline-flex items-center gap-2 pb-0.5 text-sm font-semibold text-accent no-underline transition-colors after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:origin-left after:scale-x-0 after:bg-accent after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.16,1,0.3,1)] hover:text-accent-dark after:content-[''] hover:after:scale-x-100"
                  >
                    Mehr Infos zum Kurs
                    <span
                      aria-hidden
                      className="transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1"
                    >
                      &rarr;
                    </span>
                  </Link>
                </div>
              </div>

              <motion.div
                {...anim({ x: 26, scale: 0.94, delay: 0.14, duration: 0.85 })}
                className="relative mt-5 sm:mt-0"
              >
                <div className="relative overflow-hidden rounded-3xl border border-border/70 bg-white shadow-[0_28px_52px_-28px_rgba(0,0,0,0.32)]">
                  <div className="relative aspect-[4/5] w-full">
                    <Image
                      src="/images/posters/motorrad-grundkurs.png"
                      alt="Motorrad-Grundkurs bei Let'ZHgo"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 36vw"
                    />
                  </div>
                </div>
              </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ className="bg-[#f7f8fa]" />

      {/* Kontakt */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              Direkt ansprechen
            </p>
            <h2 className="mt-4 text-3xl font-bold text-foreground md:text-4xl">
              Noch Fragen? Schreib uns einfach.
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-muted">
              Egal ob Kursdetails, Preisfragen oder du möchtest einfach mal schauen – wir melden uns schnell.
            </p>
          </div>
          <div className="mx-auto mt-12 max-w-2xl">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
