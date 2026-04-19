"use client";

import { useRef, useState, useCallback } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { STEPS } from "@/lib/constants";
import { useCoarsePointer } from "@/hooks/useScrollAnim";

function ScrollStepsStatic() {
  return (
    <section className="bg-[#f7f8fa] py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-6">
        <p className="text-center text-sm font-medium uppercase tracking-[0.2em] text-accent">
          Dein Weg zum Führerschein
        </p>
        <h2 className="mt-5 text-center text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
          So läufts bei uns
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg text-muted">
          Dein Start zum Führerschein ist einfacher, als du denkst. Schritt für
          Schritt begleiten wir dich sicher durch Theorie, Praxis und Prüfung –
          entspannt und gut vorbereitet.
        </p>
      </div>
      <div className="mx-auto mt-14 max-w-4xl space-y-12 px-6 pb-8">
        {STEPS.map((step) => (
          <div
            key={step.number}
            className="border-b border-border/70 pb-10 last:border-b-0"
          >
            <span className="text-7xl font-bold leading-none text-accent/15 md:text-8xl">
              {step.number}
            </span>
            <h3 className="mt-4 text-2xl font-bold text-foreground md:text-3xl">
              {step.title}
            </h3>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function ScrollStepsInteractive() {
  const stepsRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const lastIndex = useRef(0);

  const { scrollYProgress } = useScroll({
    target: stepsRef,
    offset: ["start start", "end end"],
  });

  const updateIndex = useCallback((latest: number) => {
    const stepSize = 1 / STEPS.length;
    const newIndex = Math.min(STEPS.length - 1, Math.floor(latest / stepSize));
    if (newIndex !== lastIndex.current) {
      lastIndex.current = newIndex;
      setActiveIndex(newIndex);
    }
  }, []);

  useMotionValueEvent(scrollYProgress, "change", updateIndex);

  return (
    <section
      ref={stepsRef}
      style={{ height: `${STEPS.length * 100}vh` }}
      className="relative will-change-transform"
    >
      <div className="sticky top-0 flex h-dvh w-full flex-col justify-between bg-[#f7f8fa]">
        <div className="mx-auto max-w-4xl px-6 pt-32 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: "-80px" }}
            className="text-sm font-medium uppercase tracking-[0.2em] text-accent"
          >
            Dein Weg zum Führerschein
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: "-80px" }}
            className="mt-5 text-4xl font-bold text-foreground md:text-6xl lg:text-7xl"
          >
            So läufts bei uns
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: "-80px" }}
            className="mx-auto mt-6 max-w-2xl text-lg text-muted"
          >
            Dein Start zum Führerschein ist einfacher, als du denkst. Schritt für
            Schritt begleiten wir dich sicher durch Theorie, Praxis und Prüfung –
            entspannt und gut vorbereitet.
          </motion.p>
        </div>

        <div className="relative h-44 flex-shrink-0 overflow-hidden md:hidden">
          {STEPS.map((step, i) => (
            <motion.span
              key={step.number}
              animate={{
                opacity: activeIndex === i ? 1 : 0,
                y: activeIndex === i ? 0 : activeIndex > i ? -40 : 40,
              }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="absolute bottom-0 left-6 text-9xl font-bold leading-none text-accent/10 will-change-transform sm:left-10"
            >
              {step.number}
            </motion.span>
          ))}
        </div>

        <div className="flex w-full items-end justify-between px-6 pb-16 sm:px-10 md:px-20 md:pb-28 lg:px-32 xl:px-40">
          <div className="max-w-2xl flex-1">
            <div className="relative h-[220px]">
              {STEPS.map((step, i) => (
                <motion.div
                  key={step.number}
                  animate={{
                    opacity: activeIndex === i ? 1 : 0,
                    y: activeIndex === i ? 0 : activeIndex > i ? -50 : 50,
                  }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-x-0 top-0 will-change-transform"
                  style={{ pointerEvents: activeIndex === i ? "auto" : "none" }}
                >
                  <h2 className="text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
                    {step.title}
                  </h2>
                  <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
            <div className="flex gap-3">
              {STEPS.map((_, i) => (
                <div
                  key={i}
                  className={`h-1.5 rounded-full transition-all duration-700 ${
                    i === activeIndex ? "w-12 bg-accent" : "w-4 bg-border"
                  }`}
                />
              ))}
            </div>
          </div>
          <div className="relative hidden h-[300px] w-[400px] items-end justify-end md:flex lg:w-[500px]">
            {STEPS.map((step, i) => (
              <motion.span
                key={step.number}
                animate={{
                  opacity: activeIndex === i ? 1 : 0,
                  y: activeIndex === i ? 0 : activeIndex > i ? -120 : 120,
                }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="absolute bottom-0 right-0 text-[16rem] font-bold leading-none text-accent/10 will-change-transform lg:text-[20rem]"
              >
                {step.number}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ScrollSteps() {
  const coarse = useCoarsePointer();
  if (coarse) return <ScrollStepsStatic />;
  return <ScrollStepsInteractive />;
}
