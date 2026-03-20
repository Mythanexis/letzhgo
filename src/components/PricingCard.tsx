"use client";

import { motion } from "framer-motion";

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
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="flex flex-col rounded-2xl border border-border bg-white p-8 shadow-sm transition-shadow hover:shadow-md"
    >
      <h3 className="text-xl font-semibold text-foreground">{title}</h3>
      <p className="mt-1 text-sm text-muted">{subtitle}</p>
      <p className="mt-6 text-4xl font-bold text-foreground">
        CHF {price}
      </p>
      <ul className="mt-8 flex-1 space-y-3">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-3 text-sm text-muted">
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
          </li>
        ))}
      </ul>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 block rounded-full bg-accent py-3 text-center font-medium text-white transition-colors hover:bg-accent-dark"
      >
        Anmelden
      </a>
    </motion.div>
  );
}
