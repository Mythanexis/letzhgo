"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useScrollAnim } from "@/hooks/useScrollAnim";
import { EDOOBOX_LINKS } from "@/lib/constants";

export default function GrundkursLocationSection() {
  const anim = useScrollAnim();

  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <motion.div
          {...anim({ y: 28, duration: 0.9 })}
          className="grid items-center gap-8 md:grid-cols-2 md:gap-14"
        >
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-[0_18px_40px_-24px_rgba(8,26,58,0.35)]">
            <Image
              src="/images/hostettler-showroom.jpg"
              alt="Showroom von Hostettler Moto AG in Rümlang"
              fill
              className="object-cover"
              sizes="(max-width: 767px) 100vw, 46vw"
            />
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground md:text-3xl">
              Motorrad-Grundkurs bei Hostettler Moto in Rümlang
            </h2>
            <p className="mt-3 max-w-md text-base leading-relaxed text-muted">
              Den Grundkurs absolvierst du direkt vor Ort beim Schweizer
              Motorradspezialisten, betreut von unseren Fahrlehrern.
            </p>
            <p className="mt-3 max-w-md text-base leading-relaxed text-muted">
              In drei Teilen und zwölf Stunden lernst du dein Motorrad kennen,
              übst die Fahrtechnik auf dem Platz und fährst anschliessend im
              Verkehr mit. Der Kurs ist Voraussetzung für die praktische
              Motorradprüfung.
            </p>

            <div className="mt-8 max-w-md border-t border-border pt-6">
              <p className="text-base font-semibold text-foreground">Hostettler Moto AG</p>
              <p className="mt-1 text-base text-muted">Klotenerstrasse 10, 8153 Rümlang</p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Hostettler+Moto+AG+Klotenerstrasse+10+8153+R%C3%BCmlang"
                target="_blank"
                rel="noopener noreferrer"
                className="relative mt-2 inline-block pb-0.5 text-sm text-muted no-underline transition-colors after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:origin-left after:scale-x-0 after:bg-foreground after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.16,1,0.3,1)] after:content-[''] hover:text-foreground hover:after:scale-x-100"
              >
                In Google Maps öffnen
              </a>
            </div>

            <a
              href={EDOOBOX_LINKS.motorrad}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative mt-8 inline-flex items-center gap-2 pb-0.5 text-base font-semibold text-accent no-underline transition-colors after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:origin-left after:scale-x-0 after:bg-accent after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.16,1,0.3,1)] after:content-[''] hover:text-accent-dark hover:after:scale-x-100"
            >
              Grundkurs buchen
              <span
                aria-hidden
                className="transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1"
              >
                →
              </span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
