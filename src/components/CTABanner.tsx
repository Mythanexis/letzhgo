"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

export default function CTABanner() {
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.4], [0.85, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const borderRadius = useTransform(scrollYProgress, [0, 0.4], [48, 24]);

  return (
    <section ref={ref} className="mx-auto max-w-7xl px-6 py-24">
      <motion.div
        style={{ scale, opacity, borderRadius }}
        className="relative overflow-hidden bg-accent p-12 text-center text-white md:p-20"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.15)_0%,_transparent_60%)]" />
        <motion.div
          className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-white/10 blur-3xl"
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: "-80px" }}
            className="text-3xl font-bold md:text-5xl"
          >
            Bereit für
            <br />
            deinen Führerschein?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: "-80px" }}
            className="mx-auto mt-6 max-w-xl text-white/80"
          >
            Jeder Schritt ist klar strukturiert und auf dich abgestimmt – vom
            Nothelferkurs über die Verkehrskunde bis zu deinen Fahrstunden. Egal
            ob Auto, Motorrad oder Anhänger: Wir begleiten dich sicher bis zur
            Prüfung.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.55 }}
            viewport={{ once: true, margin: "-80px" }}
          >
            <Link
              href="/kontakt"
              className="mt-8 inline-block rounded-full bg-white px-8 py-4 text-lg font-medium text-accent transition-all hover:bg-white/90 hover:scale-105"
            >
              Jetzt starten
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
