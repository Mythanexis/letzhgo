"use client";

import { motion } from "framer-motion";
import { STATS } from "@/lib/constants";

export default function Stats() {
  return (
    <section className="bg-card">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">
            Vom ersten Fahrversuch bis zur bestandenen Prüfung.
            <br className="hidden md:block" /> Zahlen, die Vertrauen schaffen.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted">
            Hinter jeder Zahl steckt eine Erfolgsgeschichte. Diese Meilensteine
            zeigen die Erfahrung, das Engagement und die Qualität unserer
            Ausbildung.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4">
          {STATS.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <p className="text-4xl font-bold text-accent md:text-5xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-muted">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
