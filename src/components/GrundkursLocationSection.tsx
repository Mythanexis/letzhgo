"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, ExternalLink } from "lucide-react";
import { useScrollAnim } from "@/hooks/useScrollAnim";

export default function GrundkursLocationSection() {
  const anim = useScrollAnim();

  return (
    <section className="relative overflow-hidden bg-[#060d1a]">
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:min-h-[580px]">

        {/* ── Text side ── */}
        <div className="relative z-10 flex flex-col justify-center px-8 py-16 md:px-16 lg:py-24 xl:px-24">

          <motion.p
            {...anim({ y: 16, duration: 0.6 })}
            className="text-sm font-semibold uppercase tracking-[0.2em] text-accent"
          >
            Motorrad-Grundkurs
          </motion.p>

          <motion.h2
            {...anim({ y: 22, delay: 0.1, duration: 0.75 })}
            className="mt-4 text-3xl font-extrabold leading-tight text-white md:text-4xl lg:text-5xl"
          >
            Grundkurs direkt bei&nbsp;
            <span className="text-accent">Hostettler&nbsp;Moto</span>
            {" "}in&nbsp;Rümlang.
          </motion.h2>

          <motion.p
            {...anim({ y: 20, delay: 0.2, duration: 0.7 })}
            className="mt-6 max-w-lg text-base leading-relaxed text-white/60 md:text-lg"
          >
            Den Motorrad-Grundkurs absolvierst du direkt vor Ort beim Schweizer
            Motorradspezialisten – auf professioneller Infrastruktur, betreut von
            unseren Fahrlehrern.
          </motion.p>

          {/* Location pill */}
          <motion.div
            {...anim({ y: 18, delay: 0.28, duration: 0.65 })}
            className="mt-8 inline-flex w-fit items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-sm"
          >
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent/20 text-accent">
              <MapPin className="h-4 w-4" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-white/40">
                Kursstandort
              </p>
              <p className="mt-0.5 text-sm font-semibold text-white">
                Hostettler Moto AG · Klotenerstrasse 10, 8153 Rümlang
              </p>
            </div>
          </motion.div>

          {/* CTAs */}
          <motion.div
            {...anim({ y: 16, delay: 0.36, duration: 0.6 })}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <Link
              href="/services/motorrad"
              className="inline-flex items-center justify-center rounded-full bg-accent px-7 py-3 text-sm font-semibold text-white transition-all hover:scale-[1.02] hover:bg-accent-dark"
            >
              Grundkurs buchen
            </Link>
            <Link
              href="https://www.hostettler-moto.ch/zuerich-nord/"
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white/80 backdrop-blur-sm transition-all hover:bg-white/10 hover:text-white"
            >
              Hostettler Moto
              <ExternalLink className="h-3.5 w-3.5" />
            </Link>
          </motion.div>
        </div>

        {/* ── Image side ── */}
        <motion.div
          {...anim({ scale: 1.04, delay: 0.15, duration: 1.1 })}
          className="relative min-h-[320px] lg:min-h-0"
        >
          <Image
            src="/images/hostettler-moto.jpg"
            alt="Motorrad-Grundkurs bei Hostettler Moto AG Rümlang"
            fill
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          {/* Dark vignette left so it bleeds into the text panel */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#060d1a] via-[#060d1a]/30 to-transparent lg:via-[#060d1a]/10" />
          {/* Bottom fade */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#060d1a] to-transparent lg:hidden" />

          {/* Floating badge */}
          <div className="absolute right-5 top-5 lg:right-8 lg:top-8">
            <div className="overflow-hidden rounded-xl bg-white px-4 py-3 shadow-lg">
              <Image
                src="/images/partner-hostettler-zuerich-nord.png"
                alt="Hostettler Moto AG Zürich Nord"
                width={110}
                height={44}
                className="object-contain"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
