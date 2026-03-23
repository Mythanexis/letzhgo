"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface InstructorCardProps {
  name: string;
  role: string;
  whatsapp: string;
  image: string;
  slug: string;
  index: number;
}

export default function InstructorCard({
  name,
  role,
  whatsapp,
  image,
  slug,
  index,
}: InstructorCardProps) {
  const isFemale = role.toLowerCase().startsWith("fahrlehrerin");

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="mx-auto w-full max-w-[440px]"
    >
      <Link
        href={`/fahrlehrer/${slug}`}
        className="group flex h-[500px] w-full flex-col overflow-hidden rounded-lg bg-white shadow-[0_2px_12px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)]"
      >
        <div className="relative h-[340px] overflow-hidden">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          <span className="absolute bottom-3 right-3 rounded-md bg-accent px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
            {isFemale ? "Fahrlehrerin" : "Fahrlehrer"}
          </span>
        </div>

        <div className="flex flex-1 flex-col px-5 pb-5 pt-4">
          <h3 className="text-base font-bold text-foreground md:text-lg">{name}</h3>
          <p className="mt-1.5 text-sm leading-relaxed text-muted">{role}</p>
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              window.open(whatsapp, "_blank", "noopener,noreferrer");
            }}
            className="mt-auto inline-flex w-fit items-center gap-1.5 rounded-full bg-[#1a9e4a]/10 px-3.5 py-1.5 text-xs font-medium text-[#1a9e4a] transition-all duration-200 hover:bg-[#1a9e4a]/20"
          >
            <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.121.553 4.114 1.519 5.847L.525 23.503a.5.5 0 00.607.601l5.771-1.473A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.82c-1.88 0-3.66-.5-5.19-1.41l-.36-.22-3.77.99 1.01-3.68-.24-.38A9.8 9.8 0 012.18 12c0-5.42 4.4-9.82 9.82-9.82 5.42 0 9.82 4.4 9.82 9.82 0 5.42-4.4 9.82-9.82 9.82z" />
            </svg>
            WhatsApp
          </button>
        </div>
      </Link>
    </motion.div>
  );
}
