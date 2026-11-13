"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useScrollAnim } from "@/hooks/useScrollAnim";

const BRANDS = ["Yamaha", "Kawasaki", "KTM", "Husqvarna", "Bimota", "MV Agusta"];

export default function HostettlerSection() {
  const anim = useScrollAnim();

  return (
    <section className="bg-[#0a0a0a]" data-navbar-dark>
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <motion.div
          {...anim({ y: 28, duration: 0.9 })}
          className="relative aspect-[16/9] overflow-hidden rounded-2xl md:aspect-[21/9]"
        >
          <Image
            src="/images/hostettler-event.webp"
            alt="Besucher und Motorräder vor dem Gelände von Hostettler Moto in Rümlang"
            fill
            className="object-cover object-[center_45%]"
            sizes="(max-width: 1280px) 100vw, 1280px"
          />
        </motion.div>

        <div className="mt-16 grid gap-12 md:mt-20 md:grid-cols-2 md:gap-20">
          <motion.div {...anim({ y: 28, delay: 0.1, duration: 0.9 })}>
            <h2 className="text-2xl font-bold text-white md:text-3xl">
              Unser Partner für Motorräder
            </h2>
            <p className="mt-3 max-w-md text-base leading-relaxed text-white/60">
              Hostettler Moto in Rümlang ist unser Partner für alles rund ums
              Motorrad. Seit unserer Zusammenarbeit findet der
              Motorrad-Grundkurs direkt auf dem Gelände statt.
            </p>
            <p className="mt-3 max-w-md text-base leading-relaxed text-white/60">
              Wer bei uns den Motorradführerschein macht, lernt so den Händler
              und die Motorräder schon während der Ausbildung kennen.
            </p>

            <div className="mt-8 max-w-md border-t border-white/10 pt-6">
              <p className="text-base font-semibold text-white">Hostettler Moto AG, Zürich Nord</p>
              <p className="mt-1 text-base text-white/60">Klotenerstrasse 10, 8153 Rümlang</p>
            </div>

            <a
              href="https://www.hostettler-moto.ch/zuerich-nord/"
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="group relative mt-8 inline-flex items-center gap-2 pb-0.5 text-base font-semibold text-white no-underline transition-colors after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:origin-left after:scale-x-0 after:bg-white after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.16,1,0.3,1)] after:content-[''] hover:text-white/80 hover:after:scale-x-100"
            >
              Zur Website von Hostettler Moto
              <span
                aria-hidden
                className="transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1"
              >
                →
              </span>
            </a>
          </motion.div>

          {/* Marken als typografische Liste */}
          <motion.ul
            {...anim({ y: 28, delay: 0.1, duration: 0.9 })}
            className="border-t border-white/10 md:pt-1"
            aria-label="Marken bei Hostettler Moto"
          >
            {BRANDS.map((brand) => (
              <li
                key={brand}
                className="border-b border-white/10 py-4 text-3xl font-bold text-white md:py-5 md:text-4xl"
              >
                {brand}
              </li>
            ))}
          </motion.ul>
        </div>

      </div>
    </section>
  );
}
