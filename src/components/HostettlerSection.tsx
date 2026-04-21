"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useScrollAnim } from "@/hooks/useScrollAnim";

export default function HostettlerSection() {
  const anim = useScrollAnim();
  return (
    <section className="relative overflow-hidden bg-[#0a0a0a]">
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:min-h-[560px]">
        {/* Text */}
        <div className="relative z-10 flex flex-col justify-center px-8 py-16 md:px-16 lg:py-20 xl:px-24">
          <motion.p {...anim({ y: 16, duration: 0.6 })} className="text-sm font-medium uppercase tracking-widest text-accent">
            Partnerschaft
          </motion.p>

          <motion.h2 {...anim({ y: 20, delay: 0.08, duration: 0.7 })} className="mt-4 text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl">
            Neue Zusammenarbeit mit
          </motion.h2>

          <motion.div {...anim({ y: 20, delay: 0.22, duration: 0.7 })} className="mt-4">
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

          <motion.p {...anim({ y: 20, delay: 0.3, duration: 0.7 })} className="mt-6 max-w-lg text-base leading-relaxed text-white/60 md:text-lg">
            Diese neue Partnerschaft ist eine wichtige Entwicklung für uns, da
            sie uns ermöglicht, unser Angebot zu erweitern und unseren Kunden
            ein noch besseres Erlebnis zu bieten.
          </motion.p>

          <motion.div {...anim({ y: 16, delay: 0.38, duration: 0.6 })} className="mt-8">
            <Link
              href="https://www.hostettler-moto.ch/zuerich-nord/"
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-accent px-7 py-3 text-sm font-semibold text-white transition-all hover:scale-[1.02] hover:bg-accent-dark"
            >
              Hostettler Webseite
            </Link>
          </motion.div>
        </div>

        {/* Image */}
        <motion.div
          {...anim({ scale: 1.05, delay: 0.15, duration: 1 })}
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
