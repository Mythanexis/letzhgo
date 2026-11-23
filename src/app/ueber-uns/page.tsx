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
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <motion.div
            {...anim({ y: 28, duration: 0.9 })}
            className="grid items-center gap-8 md:grid-cols-2 md:gap-14"
          >
            <div>
              <h2 className="text-2xl font-bold text-foreground md:text-3xl">
                Ein Team, ein Ziel: dass du sicher fahren kannst
              </h2>
              <p className="mt-3 max-w-md text-base leading-relaxed text-muted">
                Bei Let&apos;ZHgo ist jede Fahrausbildung individuell. Wir
                glauben, dass Sicherheit, Vertrauen und Geduld die Grundlage
                für nachhaltiges Lernen sind, mit klarer Anleitung, ehrlichem
                Feedback und echter Leidenschaft fürs Fahren.
              </p>
              <p className="mt-3 max-w-md text-base leading-relaxed text-muted">
                Wir richten uns nach deinem Tempo und deinem Alltag. Wo es
                hakt, nehmen wir uns die Zeit, wo es gut läuft, geben wir dir
                Raum, damit du nicht nur die Prüfung machst, sondern dich
                danach im echten Verkehr wohlfühlst.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-x-8 gap-y-3">
                <Link
                  href="/kontakt"
                  className="inline-flex items-center rounded-full bg-accent px-6 py-3 text-[15px] font-semibold text-white no-underline transition-colors duration-200 hover:bg-accent-dark"
                >
                  Kontakt aufnehmen
                </Link>
                <Link
                  href="/services"
                  className="group relative inline-flex items-center gap-2 pb-0.5 text-base font-semibold text-accent no-underline transition-colors after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:origin-left after:scale-x-0 after:bg-accent after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.16,1,0.3,1)] after:content-[''] hover:text-accent-dark hover:after:scale-x-100"
                >
                  Unsere Services
                  <span
                    aria-hidden
                    className="transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1"
                  >
                    →
                  </span>
                </Link>
              </div>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-[0_18px_40px_-24px_rgba(8,26,58,0.35)]">
              <Image
                src="/images/ueber-uns-team-2.jpg"
                alt="Das Team von Let'ZHgo Fahrschule"
                fill
                className="object-cover object-center"
                sizes="(max-width: 767px) 100vw, 46vw"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quote — Samir am Schreibtisch, abgedunkelt; Text vertikal mittig */}
      <section
        className="relative flex min-h-144 items-center justify-center overflow-hidden px-6 py-16 md:min-h-176 md:py-20"
        data-navbar-dark
      >
        <Image
          src="/images/ueber-uns-quote-samir.jpg"
          alt=""
          fill
          className="object-cover object-[center_28%]"
          sizes="100vw"
          priority={false}
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 bg-linear-to-b from-black/55 via-black/50 to-black/60"
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
      <section className="bg-[#0a0a0a]">
        <div className="mx-auto max-w-3xl px-6 py-24 text-center md:py-32">
          <motion.div {...anim({ y: 28, duration: 0.9 })}>
            <div className="flex justify-center gap-0.5" aria-hidden>
              {Array.from({ length: 5 }).map((_, i) => (
                <svg key={i} className="h-4 w-4 text-[#f5a623]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            <blockquote className="mt-6 text-xl font-semibold leading-relaxed text-white md:text-2xl">
              Ich habe mich jede Sekunde der Fahrstunden in besten Händen
              gefühlt. Gianni glaubt mehr an dich, als du es selbst tust, und
              genau das macht den Unterschied.
            </blockquote>
            <p className="mt-6 text-sm text-white/50">
              Romana Kocsis, Google Bewertung
            </p>
          </motion.div>
        </div>
      </section>

      {/* Fahrlehrer */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <motion.div {...anim({ y: 34, duration: 0.8 })} className="text-center">
            <h2 className="text-4xl font-bold text-foreground md:text-5xl">
              Mit dir, Schritt für Schritt
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-muted md:text-lg">
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
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <motion.div {...anim({ y: 28, duration: 0.9 })} className="grid items-center gap-8 md:grid-cols-2 md:gap-14">
            <h2 className="text-2xl font-bold leading-snug text-foreground md:text-3xl">
              Ausbildung mit Erfahrung, geführt von Klarheit, für nachhaltige
              Sicherheit
            </h2>
            <p className="max-w-md text-base leading-relaxed text-muted">
              Unsere Ausbildung schafft die Grundlage für echte Sicherheit im
              Strassenverkehr. Wir nehmen uns Zeit, dein Fahrniveau zu
              verstehen, geben dir klare Strukturen und begleiten dich
              Schritt für Schritt, mit Fokus auf dein Ziel: selbstständig und
              souverän unterwegs zu sein.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <Stats surface="light" />

      {/* Bewertungen */}
      <section className="bg-[#f7f8fa]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <motion.div {...anim({ y: 28, duration: 0.9 })}>
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="text-4xl font-bold text-foreground md:text-5xl">
                Das sagen unsere Fahrschüler:innen
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted md:text-lg">
                Ehrliches Feedback aus echten Fahrstunden, transparent, direkt
                und ohne Filter.
              </p>
            </div>

            <div className="mt-14 grid gap-x-8 gap-y-10 md:grid-cols-2 xl:grid-cols-3">
              {reviews.map((review, i) => (
                <motion.article
                  key={`${review.author}-${review.date}`}
                  {...anim({
                    y: 24,
                    delay: Math.min(i * 0.08, 0.35),
                    duration: 0.65,
                  })}
                  className="flex h-full flex-col"
                >
                  <div className="flex gap-0.5" aria-hidden>
                    {Array.from({ length: 5 }).map((_, j) => (
                      <svg key={j} className="h-4 w-4 text-[#f5a623]" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>
                  <p className="mt-3 font-semibold text-foreground">{review.author}</p>
                  <p className="mt-0.5 text-sm text-muted">{review.date}</p>

                  <div className="mt-4 flex-1">
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
                          <p className="text-[15px] leading-relaxed text-foreground/80">
                            {previewText}
                            {!isExpanded && hasLongText ? "…" : ""}
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
                                <p className="text-[15px] leading-relaxed text-foreground/80">
                                  {extraText}
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
                              className="mt-3 inline-flex cursor-pointer text-sm font-semibold text-accent transition-colors hover:text-accent-dark"
                            >
                              {isExpanded ? "Weniger anzeigen" : "Mehr lesen"}
                            </button>
                          )}
                        </div>
                      );
                    })()}
                  </div>
                </motion.article>
              ))}
            </div>

            <div className="mt-14 flex justify-center">
              <a
                href={GOOGLE_REVIEWS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-2 pb-0.5 text-base font-semibold text-accent no-underline transition-colors after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:origin-left after:scale-x-0 after:bg-accent after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.16,1,0.3,1)] after:content-[''] hover:text-accent-dark hover:after:scale-x-100"
              >
                Alle 417+ Bewertungen auf Google
                <span
                  aria-hidden
                  className="transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1"
                >
                  →
                </span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Motorrad-Grundkurs Promo */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <motion.div
            {...anim({ y: 28, duration: 0.9 })}
            className="grid items-center gap-8 md:grid-cols-2 md:gap-14"
          >
            <div className="md:order-2">
              <h2 className="text-2xl font-bold text-foreground md:text-3xl">
                Bereit für zwei Räder?
              </h2>
              <p className="mt-3 max-w-md text-base leading-relaxed text-muted">
                In 12 Stunden wirst du sicherer, ruhiger und souveräner auf
                dem Motorrad. Praxisnah, direkt umsetzbar und mit Feedback,
                das dich wirklich weiterbringt.
              </p>

              <ul className="mt-6 flex flex-col gap-2.5">
                {[
                  "12 Stunden auf 3 Halbtage verteilt",
                  "Für Kategorie A1 und A",
                  "Übungsmotorräder vorhanden",
                  "Kleine Gruppen mit direktem Coaching",
                ].map((text) => (
                  <li key={text} className="flex gap-3 text-base leading-relaxed text-muted">
                    <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-muted" aria-hidden />
                    <span>{text}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3">
                <a
                  href="https://app1.edoobox.com/de/LetZHgo/Motorradkurse/?edref=letzhgo"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="inline-flex items-center rounded-full bg-accent px-6 py-3 text-[15px] font-semibold text-white no-underline transition-colors duration-200 hover:bg-accent-dark"
                >
                  Jetzt Platz sichern
                </a>
                <Link
                  href="/services/motorrad"
                  className="group relative inline-flex items-center gap-2 pb-0.5 text-base font-semibold text-accent no-underline transition-colors after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:origin-left after:scale-x-0 after:bg-accent after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.16,1,0.3,1)] hover:text-accent-dark after:content-[''] hover:after:scale-x-100"
                >
                  Mehr Infos zum Kurs
                  <span
                    aria-hidden
                    className="transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1"
                  >
                    →
                  </span>
                </Link>
              </div>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-[0_18px_40px_-24px_rgba(8,26,58,0.35)] md:order-1">
              <Image
                src="/images/posters/motorrad-grundkurs.png"
                alt="Motorrad-Grundkurs bei Let'ZHgo"
                fill
                className="object-cover"
                sizes="(max-width: 767px) 100vw, 46vw"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ className="bg-[#f7f8fa]" />

      {/* Kontakt */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-foreground md:text-4xl">
              Noch Fragen? Schreib uns einfach
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-muted">
              Egal ob Kursdetails, Preisfragen oder du möchtest einfach mal
              schauen, wir melden uns schnell.
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
