"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export type InstructorPhoto = { src: string; alt: string };

/**
 * Desktop: rechte Spalte, Bilder untereinander, sticky (wie früher).
 */
export function InstructorDetailPhotosDesktop({
  images,
}: {
  images: InstructorPhoto[];
}) {
  if (images.length === 0) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, delay: 0.3 }}
      className="hidden lg:col-span-2 lg:block"
    >
      <div className="lg:sticky lg:top-28 space-y-5">
        {images.map((img, i) => (
          <div key={img.src} className="overflow-hidden rounded-2xl">
            <Image
              src={img.src}
              alt={img.alt}
              width={600}
              height={400}
              className="w-full object-cover"
              priority={i === 0}
            />
          </div>
        ))}
      </div>
    </motion.div>
  );
}

/**
 * Mobile/Tablet (unter lg): Profilfotos oben unter den Breadcrumbs.
 * Ein Bild: volle Breite (max). Zwei Bilder: etwas kleiner, überlappend.
 */
export default function InstructorDetailPhotos({
  images,
}: {
  images: InstructorPhoto[];
}) {
  if (images.length === 0) return null;

  if (images.length === 1) {
    const img = images[0];
    return (
      <div className="mx-auto w-full max-w-2xl overflow-hidden rounded-2xl bg-muted/20 shadow-md ring-1 ring-border/50">
        <div className="relative aspect-[4/3] w-full sm:aspect-[16/10]">
          <Image
            src={img.src}
            alt={img.alt}
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 42rem"
            priority
          />
        </div>
      </div>
    );
  }

  const [first, second] = images;

  return (
    <div className="mx-auto w-full max-w-xl px-1 sm:max-w-2xl">
      <div className="relative mx-auto aspect-[5/4] w-full max-w-md sm:aspect-[16/11] sm:max-w-lg">
        {/* Hinten links — etwas kleiner, leicht gedreht */}
        <div
          className="absolute left-0 top-[6%] z-[1] w-[52%] -rotate-[3deg] overflow-hidden rounded-2xl shadow-[0_12px_40px_-8px_rgba(0,0,0,0.25)] ring-1 ring-black/10 sm:w-[50%] sm:top-[4%]"
        >
          <div className="relative aspect-[4/3] w-full">
            <Image
              src={first.src}
              alt={first.alt}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 42vw, 240px"
              priority
            />
          </div>
        </div>
        {/* Vorne rechts — überlappt */}
        <div
          className="absolute bottom-[4%] right-0 z-[2] w-[52%] rotate-[2deg] overflow-hidden rounded-2xl shadow-[0_16px_48px_-10px_rgba(0,0,0,0.35)] ring-2 ring-background sm:bottom-[6%] sm:w-[50%]"
        >
          <div className="relative aspect-[4/3] w-full">
            <Image
              src={second.src}
              alt={second.alt}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 42vw, 240px"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
