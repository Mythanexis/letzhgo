"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useScrollAnim } from "@/hooks/useScrollAnim";

// Die Logodateien sind weiss auf transparent und werden per CSS-Filter invertiert.
const PARTNERS = [
  {
    name: "Strassenverkehrsamt Kanton Zürich",
    logo: "/images/partners/partner-1.png",
    href: "https://www.zh.ch/de/sicherheitsdirektion/strassenverkehrsamt.html",
  },
  { name: "TCS", logo: "/images/partners/partner-6.png", href: "https://www.tcs.ch" },
  {
    name: "Bütikofer Harley-Davidson Zürich",
    logo: "/images/partners/partner-7.png",
    href: "https://www.buetikoferhd.ch",
  },
  {
    name: "hostettler moto ag",
    logo: "/images/partners/partner-4.png",
    href: "https://www.hostettler-moto.ch/zuerich-nord/",
  },
  { name: "Honda und Peter Sommer 2-Rad-Sport AG", logo: "/images/partners/partner-3.png" },
  { name: "Sandra's Fashion Truck", logo: "/images/partners/partner-5.png" },
] as const;

const MARQUEE_DURATION = 30;

export default function PartnersSection() {
  const anim = useScrollAnim();
  const logos = [...PARTNERS, ...PARTNERS];

  return (
    <section className="overflow-hidden bg-background" aria-labelledby="partners-heading">
      <motion.div
        {...anim({ y: 16, duration: 0.7 })}
        className="mx-auto max-w-7xl px-6 pt-16 text-center md:pt-20"
      >
        <h2 id="partners-heading" className="text-2xl font-bold text-foreground md:text-3xl">
          Wir arbeiten zusammen mit
        </h2>
      </motion.div>

      <div className="relative mt-16 md:mt-20">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent md:w-40" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent md:w-40" />

        <div className="flex overflow-hidden">
          <motion.div
            className="flex shrink-0 items-center gap-16 md:gap-24"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ x: { duration: MARQUEE_DURATION, repeat: Infinity, ease: "linear" } }}
          >
            {logos.map((partner, i) => {
              const image = (
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  className="object-contain invert"
                  sizes="224px"
                />
              );
              const frame = "relative block h-14 w-40 shrink-0 md:h-16 md:w-48 lg:h-20 lg:w-56";
              return "href" in partner ? (
                <a
                  key={`${partner.name}-${i}`}
                  href={partner.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${frame} opacity-70 transition-opacity hover:opacity-100`}
                  aria-label={partner.name}
                >
                  {image}
                </a>
              ) : (
                <div key={`${partner.name}-${i}`} className={`${frame} opacity-70`}>
                  {image}
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>

      <motion.p
        {...anim({ y: 16, delay: 0.1, duration: 0.7 })}
        className="mx-auto max-w-7xl px-6 pb-16 pt-16 text-center text-base text-muted md:pb-20 md:pt-20"
      >
        Du möchtest mit uns zusammenarbeiten? Melde dich bei uns.
      </motion.p>
    </section>
  );
}
