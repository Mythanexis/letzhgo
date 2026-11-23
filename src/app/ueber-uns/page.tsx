"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Users, MapPin, ClipboardCheck, GraduationCap, Car, Video } from "lucide-react";
import UeberUnsCurtainHero from "@/components/UeberUnsCurtainHero";
import InstructorCard from "@/components/InstructorCard";
import Stats from "@/components/Stats";
import GoogleReviewsSection from "@/components/GoogleReviewsSection";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import { INSTRUCTORS, INSTRUCTORS_HOMEPAGE_ORDER } from "@/lib/constants";
import { useScrollAnim } from "@/hooks/useScrollAnim";

export default function UeberUnsPage() {
  const anim = useScrollAnim();
  const instructorsInOrder = INSTRUCTORS_HOMEPAGE_ORDER.map((name) =>
    INSTRUCTORS.find((instructor) => instructor.name === name),
  ).filter((instructor): instructor is (typeof INSTRUCTORS)[number] => Boolean(instructor));

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
                <div className="w-fit">
                  <item.Icon className="h-14 w-14 text-accent" strokeWidth={1.2} />
                </div>
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
      <GoogleReviewsSection />

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
                src="/images/ueber-uns-zwei-raeder.jpg"
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
