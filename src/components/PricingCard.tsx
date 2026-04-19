"use client";

import { motion } from "framer-motion";
import { useScrollAnim } from "@/hooks/useScrollAnim";

interface PricingCardProps {
  title: string;
  subtitle: string;
  price: number;
  features: readonly string[];
  link: string;
  index: number;
}

export default function PricingCard({
  title,
  subtitle,
  price,
  features,
  link,
  index,
}: PricingCardProps) {
  const anim = useScrollAnim();
  return (
    <motion.div
      {...anim({ y: 50, scale: 0.95, delay: 0.15 + index * 0.2, duration: 1 })}
      whileHover={{ y: -4, transition: { duration: 0.2, ease: "easeOut" } }}
      className="flex flex-col rounded-2xl border border-border bg-white p-8 shadow-sm transition-shadow duration-200 hover:shadow-lg"
    >
      <h3 className="text-xl font-semibold text-foreground">{title}</h3>
      <p className="mt-1 text-sm text-muted">{subtitle}</p>
      <p className="mt-6 text-4xl font-bold text-foreground">
        CHF {price}
      </p>
      <ul className="mt-8 flex-1 space-y-3">
        {features.map((feature, i) => (
          <motion.li
            key={i}
            {...anim({ x: -10, delay: 0.3 + index * 0.2 + i * 0.08, duration: 0.6 })}
            className="flex items-start gap-3 text-sm text-muted"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              className="mt-0.5 shrink-0 text-accent"
            >
              <path
                d="M6 10l3 3 5-6"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {feature}
          </motion.li>
        ))}
      </ul>
      <motion.a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className="mt-8 block rounded-full bg-accent py-3 text-center font-medium text-white transition-colors hover:bg-accent-dark"
      >
        Anmelden
      </motion.a>
    </motion.div>
  );
}
