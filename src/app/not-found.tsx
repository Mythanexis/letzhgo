"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const ROAD_SIGNS = [
  { rotation: -15, x: -180, y: -40, delay: 0.6, text: "?" },
  { rotation: 12, x: 160, y: -60, delay: 0.8, text: "!" },
  { rotation: -8, x: -120, y: 80, delay: 1.0, text: "⚠" },
  { rotation: 20, x: 200, y: 60, delay: 1.2, text: "✕" },
];

function SpeedLines() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-[0.03]">
      {Array.from({ length: 12 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-[1px] bg-foreground"
          style={{
            top: `${8 + i * 8}%`,
            left: "-10%",
            width: `${30 + Math.random() * 40}%`,
          }}
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: "400%", opacity: [0, 1, 0] }}
          transition={{
            duration: 2 + Math.random() * 2,
            delay: i * 0.3,
            repeat: Infinity,
            repeatDelay: Math.random() * 3,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}

export default function NotFound() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6">
      <SpeedLines />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,var(--color-accent-light)_0%,transparent_70%)] opacity-40" />

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        className="relative text-center"
      >
        <div className="relative mx-auto mb-6 select-none">
          <motion.span
            className="relative inline-block text-[10rem] font-black leading-none tracking-tighter md:text-[14rem] lg:text-[18rem]"
            style={{
              WebkitTextStroke: "2px var(--color-accent)",
              color: "transparent",
              x: mousePos.x * 0.5,
              y: mousePos.y * 0.5,
            }}
          >
            4
            <motion.span
              animate={{ rotate: [0, 10, -10, 5, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity, repeatDelay: 2, ease: "easeInOut" }}
              className="inline-block"
            >
              0
            </motion.span>
            4
          </motion.span>

          {ROAD_SIGNS.map((sign, i) => (
            <motion.div
              key={i}
              className="absolute left-1/2 top-1/2 hidden md:flex h-10 w-10 items-center justify-center rounded-lg border-2 border-accent/20 bg-white text-lg text-accent"
              initial={{ opacity: 0, scale: 0, rotate: 0 }}
              animate={{
                opacity: 1,
                scale: 1,
                rotate: sign.rotation,
                x: sign.x,
                y: sign.y,
              }}
              transition={{
                duration: 0.8,
                delay: sign.delay,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {sign.text}
            </motion.div>
          ))}
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-3xl font-bold text-foreground md:text-5xl"
        >
          Falsche Abzweigung!
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mx-auto mt-5 max-w-lg text-lg leading-relaxed text-muted"
        >
          Diese Seite existiert leider nicht. Aber keine Sorge – wir bringen dich zurück auf die richtige Spur.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <Link
            href="/"
            className="group inline-flex items-center gap-2.5 rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-accent-dark"
          >
            <svg className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Zur Startseite
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-full border border-border px-8 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-card"
          >
            Unsere Services
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
