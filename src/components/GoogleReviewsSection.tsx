"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { useScrollAnim } from "@/hooks/useScrollAnim";

/** Deep-Link zur Google-Maps-Suche (Unternehmensprofil inkl. Bewertungen). */
const GOOGLE_REVIEWS_URL =
  "https://www.google.com/maps/search/?api=1&query=Let%27ZHgo+Fahrschule+Binzm%C3%BChlestrasse+15+8050+Z%C3%BCrich";

export const REVIEW_COUNT = 417;

export type Review = {
  id: string;
  author: string;
  date: string;
  text: string;
};

export const REVIEWS: Review[] = [
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

/** Ca. 5 Zeilen (15px / leading 1.75) — Zielhöhe eingeklappt, in px für CSS-Transition. */
const REVIEW_COLLAPSED_H_PX = 158;

function ReviewCard({ review, index }: { review: Review; index: number }) {
  const anim = useScrollAnim();
  const reduceMotion = useReducedMotion();
  const [expanded, setExpanded] = useState(false);
  const [fullHeightPx, setFullHeightPx] = useState<number | null>(null);
  const innerRef = useRef<HTMLParagraphElement>(null);

  const measureHeight = useCallback(() => {
    const el = innerRef.current;
    if (el) setFullHeightPx(el.scrollHeight);
  }, [review.text]);

  useEffect(() => {
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
      {...anim({ y: 24, delay: 0.08 + index * 0.06, duration: 0.75 })}
      className="flex h-full flex-col rounded-2xl bg-white p-7 md:p-8"
    >
      <header className="shrink-0">
        <StarRow className="[&_svg]:h-3.5 [&_svg]:w-3.5" />
        <p className="mt-3 font-semibold text-foreground">{review.author}</p>
        <p className="mt-0.5 text-sm text-muted">{review.date}</p>
      </header>

      <div className="relative pt-5">
        <div className="relative">
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
  const anim = useScrollAnim();
  return (
    <section id="bewertungen" className="scroll-mt-24 bg-[#f7f8fa] md:scroll-mt-28" aria-labelledby="google-reviews-heading">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <motion.div {...anim({ y: 28, duration: 0.9 })} className="mx-auto max-w-4xl text-center">
          <h2
            id="google-reviews-heading"
            className="text-4xl font-bold text-foreground md:text-5xl"
          >
            Das sagen unsere Fahrschüler
          </h2>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-3 gap-y-2">
            <StarRow />
            <span className="text-base text-muted">
              {REVIEW_COUNT}+ Bewertungen auf Google
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
            className="group relative inline-flex items-center gap-2 pb-0.5 text-base font-semibold text-accent no-underline transition-colors after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:origin-left after:scale-x-0 after:bg-accent after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.16,1,0.3,1)] after:content-[''] hover:text-accent-dark hover:after:scale-x-100"
          >
            Alle Bewertungen auf Google
            <span
              aria-hidden
              className="transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
