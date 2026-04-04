"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

/** Deep-Link zur Google-Maps-Suche (Unternehmensprofil inkl. Bewertungen). */
const GOOGLE_REVIEWS_URL =
  "https://www.google.com/maps/search/?api=1&query=Let%27ZHgo+Fahrschule+Binzm%C3%BChlestrasse+15+8050+Z%C3%BCrich";

const REVIEW_COUNT = 417;

type Review = {
  id: string;
  author: string;
  date: string;
  text: string;
};

const REVIEWS: Review[] = [
  {
    id: "raul-b",
    author: "Raul B",
    date: "24. Oktober 2024",
    text: "Vielen Dank an Frau Merjema Radic. Ich konnte sehr viel über das Fahren und allgemein über den Verkehr von ihr lernen und mitnehmen und somit im Nu meine Prüfung bestehen.",
  },
  {
    id: "katarina-lischer",
    author: "Katarina Lischer",
    date: "18. Dezember 2024",
    text: "Ich habe meine Fahrstunden bei der Fahrschule Letzhgo in Oerlikon genommen und bin mehr als zufrieden! Mein Fahrlehrer Gianni Sebestin ist super geduldig, professionell und erklärt alles klar und verständlich. Besonders hat mir gefallen, dass der Unterricht immer strukturiert und auf meine individuellen Bedürfnisse angepasst war.\n\nDie Atmosphäre war entspannt, und ich habe mich immer gut aufgehoben gefühlt – selbst in stressigen Situationen. Dank der tollen Vorbereitung habe ich die Prüfung gleich beim ersten Mal bestanden.\n\nVielen Dank an das gesamte Team von Letzhgo! Wenn ihr eine zuverlässige und moderne Fahrschule sucht, kann ich diese nur empfehlen. 5/5 Sterne!",
  },
  {
    id: "bela-borner",
    author: "Bela Borner",
    date: "17. November 2024",
    text: "Sehr gut organisierter Grundkurs. Hat Spass gemacht und Samir ist ein wirklich guter Lehrer. Habe wichtige Tipps und Tricks gelernt.",
  },
  {
    id: "sarah-gisin",
    author: "Sarah Gisin",
    date: "3. Februar 2025",
    text: "Mario Budimir ist wirklich der beste Fahrlehrer, den es gibt! Er nimmt sich die Zeit für dich, ist geduldig und verständnisvoll, er bleibt ruhig und motivierend! Ich würde jeden, den ich kenne, zu ihm schicken! Er hat mir das Fahren 1A beigebracht – dafür bin ich ihm sehr dankbar!",
  },
  {
    id: "leona-zogaj",
    author: "Leona Zogaj",
    date: "17. November 2024",
    text: "Mario war ein sehr guter Fahrlehrer, der mir gute Erklärungen geben konnte und mir so weitergeholfen und motiviert hat. Ich habe viel gelernt und er hatte auch viel Geduld – ein netter Fahrlehrer, den ich nur weiterempfehlen kann!",
  },
  {
    id: "rebecca-volpini",
    author: "Rebecca Volpini",
    date: "3. Februar 2025",
    text: "Die Fahrschule LetZHGo kann ich nur weiterempfehlen! Mein Fahrlehrer Gianni war nicht nur ein super Lehrer, sondern hat die Fahrstunden auch kreativ und abwechslungsreich gestaltet. So hat das Lernen wirklich Spass gemacht, und ich habe mich jede Stunde aufs Neue darauf gefreut.\n\nMit seiner Geduld, seinem Fachwissen und seiner motivierenden Art hat er mir die nötige Sicherheit gegeben – dank ihm habe ich meine Prüfung erfolgreich bestanden! Ich würde immer wieder Gianni als meinen Fahrlehrer wählen. Wer eine top Fahrschule mit engagierten Fahrlehrern sucht, ist bei Letzhgo genau richtig! Danke dir, Gianni.",
  },
  {
    id: "gesa-u",
    author: "gesa U",
    date: "6. Dezember 2024",
    text: "Eine hervorragende Fahrschule! Gianni erklärt alles sehr gut und verständlich, worauf man achten sollte.",
  },
  {
    id: "romana-kocsis",
    author: "Romana Kocsis",
    date: "11. Februar 2025",
    text: "Hallo zusammen.\n\nIch habe bei Gianni meinen Motorradgrundkurs sowie Fahrstunden für die Autoprüfung gemacht. Ich kann euch alle die Fahrschule LetZHgo wärmstens empfehlen.\n\nIch habe sicher 5–6 verschiedene Fahrschulen kontaktiert, um Fahrstunden für die Autoprüfung zu nehmen, wurde aber leider immer wieder mit dem Grund abgewiesen, sie hätten kein Auto, das man auch als kleine Frau (147 cm) fahren könnte – oder sie wollten das Risiko nicht eingehen. Bei Gianni war das nicht der Fall. Er meinte einfach, dass wir schon das richtige Auto finden werden.\n\nGianni ist meiner Meinung nach einer der besten Fahrlehrer. Er geht auf die Lernenden ein und hat einen Weg, uns alles so zu erklären, dass man es versteht und es nicht mehr vergisst. Jede Fahrstunde war spannend, lehrreich und auch spassig. Ich hatte manchmal das Gefühl, er glaubt mehr an mich, als ich es selbst getan habe. Ich habe mich jede Sekunde der Fahrstunden in besten Händen gefühlt.\n\nGianni, ich danke dir, dass du mich auf meinem Weg bis zur bestandenen Autoprüfung begleitet hast. Vielen Dank für deine Hilfe und Unterstützung.",
  },
];

function initials(name: string): string {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "?";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

function StarRow({ className }: { className?: string }) {
  return (
    <div className={`flex gap-0.5 ${className ?? ""}`} aria-hidden>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className="h-4 w-4 text-[#f5a623]"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

function GoogleIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      aria-hidden
    >
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      />
    </svg>
  );
}

/** Ca. 5 Zeilen (15px / leading 1.75) — Zielhöhe eingeklappt, in px für CSS-Transition. */
const REVIEW_COLLAPSED_H_PX = 158;

function ReviewCard({ review, index }: { review: Review; index: number }) {
  const reduceMotion = useReducedMotion();
  const [expanded, setExpanded] = useState(false);
  const [fullHeightPx, setFullHeightPx] = useState<number | null>(null);
  const innerRef = useRef<HTMLParagraphElement>(null);

  const measureHeight = useCallback(() => {
    const el = innerRef.current;
    if (el) setFullHeightPx(el.scrollHeight);
  }, [review.text]);

  useLayoutEffect(() => {
    measureHeight();
  }, [measureHeight]);

  useEffect(() => {
    const el = innerRef.current;
    if (!el || typeof ResizeObserver === "undefined") return;
    const ro = new ResizeObserver(() => measureHeight());
    ro.observe(el);
    return () => ro.disconnect();
  }, [measureHeight]);

  const showToggle =
    fullHeightPx != null && fullHeightPx > REVIEW_COLLAPSED_H_PX + 2;
  const closedH =
    fullHeightPx != null
      ? Math.min(REVIEW_COLLAPSED_H_PX, fullHeightPx)
      : REVIEW_COLLAPSED_H_PX;
  const openH = fullHeightPx ?? 4000;

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.75, delay: 0.08 + index * 0.06, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true, margin: "-40px" }}
      whileHover={{ y: -3, transition: { duration: 0.22, ease: "easeOut" } }}
      className="flex h-full flex-col rounded-2xl border border-border bg-white p-7 shadow-sm transition-shadow duration-300 hover:shadow-md md:p-8"
    >
      <header className="shrink-0 border-b border-border pb-6">
        <div className="flex items-center gap-4">
          <div
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent-light text-sm font-semibold text-accent"
            aria-hidden
          >
            {initials(review.author)}
          </div>
          <div className="min-w-0 flex-1">
            <p className="font-semibold text-foreground">{review.author}</p>
            <div className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1">
              <StarRow className="[&_svg]:h-3.5 [&_svg]:w-3.5" />
              <span className="text-xs text-muted">· Google</span>
            </div>
            <p className="mt-1 text-xs text-muted">{review.date}</p>
          </div>
        </div>
      </header>

      <div className="relative pt-6">
        <span
          className="pointer-events-none absolute -left-1 top-4 select-none font-serif text-[4.5rem] leading-none text-accent/[0.07]"
          aria-hidden
        >
          &ldquo;
        </span>
        <div className="relative pt-2">
          <div
            className="overflow-hidden"
            style={{
              maxHeight: expanded ? openH : closedH,
              transition: reduceMotion
                ? undefined
                : "max-height 0.65s cubic-bezier(0.22, 1, 0.36, 1)",
            }}
          >
            <p
              ref={innerRef}
              className="whitespace-pre-line text-[15px] leading-[1.75] text-foreground/80"
            >
              {review.text}
            </p>
          </div>
          {showToggle && (
            <button
              type="button"
              onClick={() => setExpanded((e) => !e)}
              className="group/readmore mt-4 inline-flex cursor-pointer items-center gap-1 text-sm font-semibold text-accent transition-colors hover:text-accent-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/35 focus-visible:ring-offset-2"
              aria-expanded={expanded}
            >
              {expanded ? "Weniger anzeigen" : "Weiterlesen"}
              <svg
                className={`h-4 w-4 shrink-0 transition-transform duration-300 ${
                  expanded ? "rotate-180" : "group-hover/readmore:translate-y-px"
                }`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export default function GoogleReviewsSection() {
  return (
    <section className="bg-[#f7f8fa]" aria-labelledby="google-reviews-heading">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: "-80px" }}
          className="mx-auto max-w-4xl text-center"
        >
          <h2
            id="google-reviews-heading"
            className="text-4xl font-extrabold leading-[1.08] tracking-tight text-foreground md:text-5xl lg:text-6xl"
          >
            Was andere{" "}
            <span className="text-accent">wirklich</span>
            <br className="hidden sm:block" />
            <span>über uns sagen.</span>
          </h2>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-muted">
            <StarRow className="scale-110" />
            <span className="text-base font-semibold text-foreground">
              {REVIEW_COUNT}+ Bewertungen
            </span>
            <span className="inline-flex items-center gap-1.5 text-sm">
              <GoogleIcon className="h-4 w-4" />
              Google
            </span>
          </div>
        </motion.div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {REVIEWS.map((review, i) => (
            <ReviewCard key={review.id} review={review} index={i} />
          ))}
        </div>

        <div className="mt-12 flex justify-center md:mt-14">
          <Link
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-6 py-2.5 text-sm font-semibold text-foreground shadow-sm transition-all hover:border-accent/30 hover:bg-accent-light/35 hover:text-accent"
          >
            <GoogleIcon className="h-4 w-4" />
            Alle Bewertungen auf Google ansehen
          </Link>
        </div>
      </div>
    </section>
  );
}
