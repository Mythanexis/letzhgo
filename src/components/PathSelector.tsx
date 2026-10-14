"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useScrollAnim } from "@/hooks/useScrollAnim";

const PATHS = [
  {
    label: "Auto",
    image: "/images/service-hero-fahrstunden.jpg",
    href: "/services/fahrstunden",
    priority: true,
  },
  {
    label: "Motorrad",
    image: "/images/service-hero-motorrad.jpg",
    href: "/services/motorrad",
    priority: false,
  },
  {
    label: "Anhänger",
    image: "/images/service-anhaenger.jpg",
    href: "/services/fahrstunden#anhaenger",
    priority: false,
  },
  {
    label: "Kurse",
    image: "/images/service-hero-verkehrskunde.jpg",
    href: "/services",
    priority: false,
  },
] as const;

export default function PathSelector() {
  const anim = useScrollAnim();
  return (
    <div className="relative left-1/2 right-1/2 -mx-[50vw] mb-14 w-screen bg-[#f7f8fa] md:mb-16">
      <div className="mx-auto max-w-7xl px-6 py-14 md:py-16">
        <motion.div {...anim({ y: 16, duration: 0.7 })} className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-foreground md:text-5xl">
            Wähle deinen Weg
          </h2>
        </motion.div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-5 sm:grid-cols-2 md:gap-6">
          {PATHS.map((path, i) => (
            <motion.div key={path.label} {...anim({ y: 24, delay: 0.05 + i * 0.08, duration: 0.75 })}>
              <Link
                href={path.href}
                className="group relative block aspect-[4/3] overflow-hidden rounded-2xl shadow-sm transition-shadow duration-300 hover:shadow-lg"
              >
                <div className="absolute inset-0 transition-transform duration-500 ease-out group-hover:scale-[1.05]">
                  <Image
                    src={path.image}
                    alt={`${path.label} bei Let'ZHgo`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 639px) 100vw, 46vw"
                    priority={path.priority}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 md:p-7">
                  <span className="text-2xl font-bold text-white md:text-3xl">{path.label}</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
