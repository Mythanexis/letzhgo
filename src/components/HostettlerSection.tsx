"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HostettlerSection() {
  return (
    <section className="relative overflow-hidden bg-[#0a0a0a]">
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:min-h-[560px]">
        {/* Text */}
        <div className="relative z-10 flex flex-col justify-center px-8 py-16 md:px-16 lg:py-20 xl:px-24">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: "-80px" }}
            className="text-sm font-medium uppercase tracking-widest text-accent"
          >
            Partnerschaft
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: "-80px" }}
            className="mt-4 text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl"
          >
            Neue Zusammenarbeit mit
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: "-80px" }}
            className="mt-4"
          >
            <div className="relative h-20 w-full max-w-xl md:h-24 lg:h-28">
              <Image
                src="/images/hostettler-marken.png"
                alt="Yamaha, Kawasaki, Bimota, KTM, Husqvarna, MV Agusta"
                fill
                className="object-contain object-left"
                sizes="448px"
              />
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: "-80px" }}
            className="mt-6 max-w-lg text-base leading-relaxed text-white/60 md:text-lg"
          >
            Diese neue Partnerschaft ist eine wichtige Entwicklung für uns, da
            sie uns ermöglicht, unser Angebot zu erweitern und unseren Kunden
            ein noch besseres Erlebnis zu bieten.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.38, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: "-80px" }}
            className="mt-8"
          >
            <Link
              href="https://www.hostettler-moto.ch/zuerich-nord/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-accent px-7 py-3 text-sm font-semibold text-white transition-all hover:scale-[1.02] hover:bg-accent-dark"
            >
              Hostettler Webseite
            </Link>
          </motion.div>
        </div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: "-80px" }}
          className="relative min-h-[320px] lg:min-h-0"
        >
          <Image
            src="/images/hostettler-moto.jpg"
            alt="Yamaha MT-09 – hostettler moto ag"
            fill
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-transparent to-transparent lg:via-[#0a0a0a]/20" />
        </motion.div>
      </div>
    </section>
  );
}
