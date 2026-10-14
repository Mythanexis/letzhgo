"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useScrollAnim } from "@/hooks/useScrollAnim";
import { REVIEWS, REVIEW_COUNT } from "@/components/GoogleReviewsSection";

/** Kurze Zitat-Auswahl für den Trust-Streifen direkt unter dem Hero. */
const QUOTE_IDS = ["raul-b", "katarina-lischer", "gesa-u"] as const;

function truncate(text: string, max: number): string {
  const firstLine = text.split("\n")[0].trim();
  if (firstLine.length <= max) return firstLine;
  return firstLine.slice(0, max).trimEnd() + "…";
}

function StarRow() {
  return (
    <div className="flex gap-0.5" aria-hidden>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className="h-4 w-4 text-[#f5a623]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function TrustBar() {
  const anim = useScrollAnim();
  const quotes = QUOTE_IDS.map((id) => REVIEWS.find((r) => r.id === id)).filter(
    (r): r is NonNullable<typeof r> => Boolean(r)
  );

  return (
    <motion.div
      {...anim({ y: 16, duration: 0.7 })}
      className="mb-12 flex flex-col gap-6 border-b border-border/70 pb-10 lg:flex-row lg:items-center lg:justify-between lg:gap-10"
    >
      <Link
        href="#bewertungen"
        className="group flex shrink-0 items-center gap-3 lg:border-r lg:border-border lg:pr-8"
      >
        <StarRow />
        <span className="text-sm font-semibold text-foreground">
          5,0 · {REVIEW_COUNT}+ Bewertungen
        </span>
        <span className="text-xs text-muted underline decoration-current underline-offset-2 group-hover:text-accent">
          auf Google
        </span>
      </Link>

      <div className="grid gap-4 sm:grid-cols-3 lg:flex-1">
        {quotes.map((review) => (
          <p key={review.id} className="text-sm leading-relaxed text-muted">
            <span className="text-foreground">&ldquo;{truncate(review.text, 80)}&rdquo;</span>
            <br />
            <span className="text-xs font-semibold text-accent">— {review.author}</span>
          </p>
        ))}
      </div>
    </motion.div>
  );
}
