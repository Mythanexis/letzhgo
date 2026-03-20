"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  href: string;
  index: number;
}

export default function ServiceCard({
  title,
  image,
  href,
  index,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60, scale: 0.92 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1, delay: 0.15 + index * 0.18, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true, margin: "-80px" }}
    >
      <Link href={href} className="group relative block h-[420px] overflow-hidden rounded-2xl shadow-lg transition-all duration-200 ease-out hover:scale-[1.03] hover:shadow-2xl">
        <div className="absolute inset-0 transition-transform duration-500 ease-out group-hover:scale-[1.08]">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 25vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-500 group-hover:from-black/90" />
        <div className="absolute inset-x-0 bottom-0 p-6">
          <motion.h3
            className="text-lg font-semibold text-white"
            initial={false}
          >
            {title}
          </motion.h3>
          <span className="mt-2 inline-flex items-center gap-1.5 text-xs text-white/60 transition-all duration-300 group-hover:gap-3 group-hover:text-white">
            Mehr erfahren
            <svg
              width="12"
              height="12"
              viewBox="0 0 16 16"
              fill="none"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              <path
                d="M6 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
