"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { STATS } from "@/lib/constants";
import { useCoarsePointer, useScrollAnim } from "@/hooks/useScrollAnim";

function parseValue(value: string): { num: number; prefix: string; suffix: string } {
  const match = value.match(/^([^\d]*)(\d[\d']*\.?\d*)(.*)$/);
  if (!match) return { num: 0, prefix: "", suffix: value };
  const num = parseFloat(match[2].replace(/'/g, ""));
  return { num, prefix: match[1], suffix: match[3] };
}

function formatNumber(n: number, original: string): string {
  if (original.includes("'")) {
    const rounded = Math.round(n);
    return rounded.toLocaleString("de-CH");
  }
  if (original.includes(".")) return n.toFixed(0);
  return Math.round(n).toString();
}

function CountingNumber({ value, isInView }: { value: string; isInView: boolean }) {
  const { num, prefix, suffix } = parseValue(value);
  const [display, setDisplay] = useState(num);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isInView || hasAnimated.current) return;
    hasAnimated.current = true;

    setDisplay(0);
    const duration = 2500;
    const startTime = performance.now();

    function step(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(eased * num);
      if (progress < 1) requestAnimationFrame(step);
    }

    requestAnimationFrame(step);
  }, [isInView, num]);

  return (
    <span>
      {prefix}{formatNumber(display, value)}{suffix}
    </span>
  );
}

function AnimatedStat({ value, label, index }: { value: string; label: string; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const coarse = useCoarsePointer();
  const inViewHook = useInView(ref, { once: true, margin: "-80px" });
  const isInView = coarse || inViewHook;
  const anim = useScrollAnim();

  return (
    <motion.div
      ref={ref}
      {...anim({ y: 30, delay: 0.15 + index * 0.2, duration: 1 })}
    >
      <motion.p
        className="text-5xl font-bold text-accent md:text-6xl lg:text-7xl"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1, delay: 0.15 + index * 0.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <CountingNumber value={value} isInView={isInView} />
      </motion.p>
      <motion.p
        className="mt-4 text-sm text-muted"
        initial={{ opacity: 0, y: 10 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
      >
        {label}
      </motion.p>
    </motion.div>
  );
}

type StatsProps = {
  /** `light` = weiss (Homepage-Streifen); Standard = hellgrau */
  surface?: "light" | "muted";
};

export default function Stats({ surface = "muted" }: StatsProps) {
  const anim = useScrollAnim();
  return (
    <section
      className={surface === "light" ? "bg-background" : "bg-[#f7f8fa]"}
    >
      <div className="mx-auto px-6 py-40 md:px-16 md:py-52 lg:px-24 xl:px-32">
        {/* Top: Title left, description right */}
        <div className="grid items-start gap-16 lg:grid-cols-[1fr_0.55fr]">
          <motion.div {...anim({ y: 30, delay: 0.1, duration: 1 })}>
            <h2 className="text-3xl font-bold leading-tight text-foreground md:text-4xl lg:text-5xl">
              Vom ersten Fahrversuch bis zur bestandenen Prüfung.{" "}
              <span className="text-accent">Zahlen, die Vertrauen schaffen.</span>
            </h2>
          </motion.div>
          <motion.div {...anim({ y: 30, delay: 0.3, duration: 1 })} className="lg:pt-2">
            <p className="text-lg leading-relaxed text-muted">
              Hinter jeder Zahl steckt eine Erfolgsgeschichte. Diese Meilensteine
              zeigen die Erfahrung, das Engagement und die Qualität unserer
              Ausbildung.
            </p>
          </motion.div>
        </div>

        {/* Bottom: Numbers full-width */}
        <div className="mt-32 grid grid-cols-2 gap-8 md:mt-40 md:grid-cols-4 md:gap-20">
          {STATS.map((stat, i) => (
            <AnimatedStat key={i} value={stat.value} label={stat.label} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
