"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useScrollAnim } from "@/hooks/useScrollAnim";

export default function WegweiserHomeTeaser() {
  const anim = useScrollAnim();

  return (
    <motion.div
      {...anim({ y: 28, duration: 0.9 })}
      aria-labelledby="wegweiser-teaser-heading"
      className="grid overflow-hidden rounded-2xl bg-black md:grid-cols-2"
    >
      <div className="px-8 py-14 md:px-14 md:py-24 lg:px-16">
        <h2
          id="wegweiser-teaser-heading"
          className="text-2xl font-bold text-white md:text-3xl"
        >
          Der Weg zum Motorradführerschein
        </h2>
        <p className="mt-5 max-w-md text-base leading-relaxed text-white/85">
          Vom Nothelferkurs bis zur praktischen Prüfung: Unser Wegweiser
          erklärt jeden Schritt, in welcher Reihenfolge er kommt und worauf
          du achten musst.
        </p>
        <Link
          href="/wegweiser-motorrad-fuehrerschein"
          className="mt-5 inline-flex items-center rounded-full bg-white px-6 py-3 text-[15px] font-semibold text-foreground no-underline transition-colors duration-200 hover:bg-white/90"
        >
          Zum Wegweiser
        </Link>
      </div>

      <div className="relative min-h-[260px] md:min-h-0">
        <Image
          src="/images/wegweiser/wegweiser-home.jpg"
          alt="Motorradfahrer auf einer Landstrasse"
          fill
          className="object-cover object-[60%_center]"
          sizes="(max-width: 767px) 100vw, 640px"
        />
      </div>
    </motion.div>
  );
}
