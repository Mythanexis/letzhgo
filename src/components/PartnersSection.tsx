"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { IMAGES } from "@/lib/constants";

const PARTNERS = [
  { name: "TCS", logo: "/images/partners/partner-1.png" },
  { name: "Bütikofer Harley-Davidson Zürich", logo: "/images/partners/partner-3.png" },
  { name: "hostettler moto ag", logo: "/images/partners/partner-4.png" },
  { name: "Partner 5", logo: "/images/partners/partner-5.png" },
  { name: "Partner 6", logo: "/images/partners/partner-6.png" },
  { name: "Partner 7", logo: "/images/partners/partner-7.png" },
];

const MARQUEE_DURATION = 30;

export default function PartnersSection() {
  const logos = [...PARTNERS, ...PARTNERS];

  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      {/* Background image */}
      <div className="pointer-events-none absolute inset-0">
        <Image
          src={IMAGES.quoteBg}
          alt=""
          fill
          className="object-cover brightness-[0.2]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: "-80px" }}
          className="mx-auto max-w-7xl px-6 text-center"
        >
          <h2 className="text-3xl font-extrabold uppercase tracking-wide text-white md:text-4xl">
            Unsere Partner
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
            Mit diesen exzellenten Partnern arbeiten wir sehr gerne und schon
            jahrelang zusammen. Werde auch Du ein Teil davon!
          </p>
        </motion.div>

        {/* Marquee */}
        <div className="relative mt-16">
          {/* Fade edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-black/80 to-transparent md:w-40" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-black/80 to-transparent md:w-40" />

          <div className="flex overflow-hidden">
            <motion.div
              className="flex shrink-0 items-center gap-16 md:gap-24"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                x: {
                  duration: MARQUEE_DURATION,
                  repeat: Infinity,
                  ease: "linear",
                },
              }}
            >
              {logos.map((partner, i) => (
                <div
                  key={`${partner.name}-${i}`}
                  className="relative h-12 w-32 shrink-0 md:h-14 md:w-40 lg:h-16 lg:w-44"
                >
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    className="object-contain opacity-75"
                    sizes="176px"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
