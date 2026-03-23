"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ManoeverplatzSection() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-16">
          {/* Image left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: "-80px" }}
          >
            <div className="relative aspect-[16/10] overflow-hidden rounded-3xl shadow-xl">
              <Image
                src="/images/larag-areal.jpg"
                alt="LARAG-Areal Rümlang – Manöverplatz"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </motion.div>

          {/* Content right */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: "-80px" }}
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-green-700">
              <span className="inline-block h-2 w-2 rounded-full bg-green-500" />
              Wieder eröffnet
            </div>

            <h2 className="mt-5 text-3xl font-bold leading-tight text-foreground md:text-4xl">
              Der Manöverplatz ist ab{" "}
              <span className="text-accent">25.03.2026</span> wieder offen.
            </h2>

            <p className="mt-4 text-lg leading-relaxed text-muted">
              Jeden Mittwoch Abend kannst du auf dem LARAG-Areal deine
              Manöver trainieren – ganz ohne Anmeldung.
            </p>

            <div className="mt-8 space-y-5 border-l-2 border-accent pl-6">
              <div>
                <p className="text-sm text-muted">Wann</p>
                <p className="text-base font-semibold text-foreground">
                  Jeden Mittwoch, 19:00 – 21:00 Uhr
                </p>
              </div>
              <div>
                <p className="text-sm text-muted">Standort</p>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Riedgrabenstrasse+26+8153+Rümlang"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <p className="text-base font-semibold text-foreground transition-colors group-hover:text-accent">
                    LARAG-Areal, Riedgrabenstrasse 26
                  </p>
                  <p className="text-sm text-muted transition-colors group-hover:text-accent">
                    8153 Rümlang
                  </p>
                </a>
              </div>
              <div>
                <p className="text-sm text-muted">Preis</p>
                <p className="text-xl font-bold text-accent">CHF 50.–</p>
              </div>
            </div>

            <p className="mt-8 text-base font-semibold text-foreground">
              Kommen kann jeder – wir freuen uns auf euch!
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
