"use client";

import { RefObject } from "react";
import { useScroll, motion } from "framer-motion";

// Organic winding thread — right side of screen, xl+ only.
// viewBox 0 0 100 400 (4 × h-dvh sections). x=72 min keeps the thread
// clear of text content (max-w-3xl + lg:px-24 ≈ 72% on xl screens).
//
// Shape: starts top-right, sweeps strongly left twice, swings back right,
// includes a brief upward arc (y goes from 140 → 125) for organic feel,
// then two more strong left curves with varied rhythm before landing center.
const PATH =
  "M 85 0 C 90 15, 76 65, 74 85 C 72 105, 88 112, 91 140 C 93 135, 88 126, 86 125 C 84 124, 76 148, 74 190 C 72 210, 88 220, 92 245 C 95 260, 79 285, 73 310 C 72 335, 83 380, 82 400";

export default function ScrollThread({
  containerRef,
}: {
  containerRef: RefObject<HTMLDivElement | null>;
}) {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Only on xl+ (≥1280px) — keeps clear of text content
  return (
    <div
      className="pointer-events-none absolute inset-0 z-20 hidden xl:block"
      aria-hidden
    >
      <svg
        className="h-full w-full"
        viewBox="0 0 100 400"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Static ghost trail — always visible, very faint */}
        <path
          d={PATH}
          fill="none"
          stroke="rgba(255,255,255,0.05)"
          strokeWidth="0.13"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Animated glow halo */}
        <motion.path
          d={PATH}
          fill="none"
          stroke="rgba(255,255,255,0.10)"
          strokeWidth="0.40"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ pathLength: scrollYProgress }}
        />

        {/* Animated main thread */}
        <motion.path
          d={PATH}
          fill="none"
          stroke="rgba(255,255,255,0.40)"
          strokeWidth="0.13"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ pathLength: scrollYProgress }}
        />
      </svg>
    </div>
  );
}
