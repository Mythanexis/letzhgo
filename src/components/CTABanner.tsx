"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function CTABanner() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative overflow-hidden rounded-3xl bg-accent p-12 text-center text-white md:p-20"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.15)_0%,_transparent_60%)]" />
        <div className="relative z-10">
          <h2 className="text-3xl font-bold md:text-5xl">
            Bereit für
            <br />
            deinen Führerschein?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-white/80">
            Jeder Schritt ist klar strukturiert und auf dich abgestimmt – vom
            Nothelferkurs über die Verkehrskunde bis zu deinen Fahrstunden. Egal
            ob Auto, Motorrad oder Anhänger: Wir begleiten dich sicher bis zur
            Prüfung.
          </p>
          <Link
            href="/kontakt"
            className="mt-8 inline-block rounded-full bg-white px-8 py-4 text-lg font-medium text-accent transition-colors hover:bg-white/90"
          >
            Jetzt starten
          </Link>
          <p className="mt-8 text-sm text-white/60">
            450+ zufriedene Kunden · Excellente 5 von 5
          </p>
        </div>
      </motion.div>
    </section>
  );
}
