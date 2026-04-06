"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { INSTRUCTORS, INSTRUCTORS_HOMEPAGE_ORDER, LOCATIONS } from "@/lib/constants";

function getInstructor(name: string) {
  return INSTRUCTORS.find((i) => i.name === name);
}

function InstructorCard({
  instructor,
}: {
  instructor: (typeof INSTRUCTORS)[number];
}) {
  const isFemale = instructor.role.toLowerCase().startsWith("fahrlehrerin");

  return (
    <Link
      href={`/fahrlehrer/${instructor.slug}`}
      className="group flex h-[400px] w-[320px] flex-col overflow-hidden rounded-lg bg-white shadow-[0_2px_12px_rgba(0,0,0,0.06)] transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)] hover:-translate-y-1 md:h-[500px] md:w-[440px]"
    >
      <div className="relative h-[260px] overflow-hidden md:h-[340px]">
        <Image
          src={instructor.image}
          alt={instructor.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        <span className="absolute bottom-3 right-3 rounded-md bg-accent px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
          {isFemale ? "Fahrlehrerin" : "Fahrlehrer"}
        </span>
      </div>

      <div className="flex flex-1 flex-col px-5 pb-5 pt-4">
        <h4 className="text-base font-bold text-foreground md:text-lg">
          {instructor.name}
        </h4>

        <p className="mt-1.5 text-sm leading-relaxed text-muted">
          {instructor.role}
        </p>

        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            window.open(instructor.whatsapp, "_blank", "noopener,noreferrer");
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
  );
}

type InstructorsSectionProps = {
  /** `singleGrid`: ein Grid pro Fahrlehrer (kürzere Homepage). `byLocation`: nach Standort gruppiert. */
  layout?: "byLocation" | "singleGrid";
  className?: string;
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  id?: string;
};

export default function InstructorsSection({
  layout = "byLocation",
  className,
  eyebrow,
  title,
  subtitle,
  id = "fahrlehrer",
}: InstructorsSectionProps) {
  const defaultSubtitle =
    layout === "singleGrid"
      ? "Unser Team im Überblick – Details und Standorte findest du auf den Profilseiten."
      : "An verschiedenen Standorten in der Region Zürich stehen dir unsere erfahrenen Fahrlehrer:innen zur Seite.";

  return (
    <section id={id} className={className}>
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: "-80px" }}
          className="mb-16 text-center md:mb-20"
        >
          <p className="text-sm font-medium uppercase tracking-widest text-accent">
            {eyebrow ?? "Unser Team"}
          </p>
          <h2 className="mt-4 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            {title ?? "Deine Fahrlehrer:innen"}
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted">
            {subtitle ?? defaultSubtitle}
          </p>
        </motion.div>

        {layout === "singleGrid" ? (
          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            {INSTRUCTORS_HOMEPAGE_ORDER.map((name, i) => {
              const instructor = getInstructor(name);
              if (!instructor) return null;
              return (
                <motion.div
                  key={name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 1,
                    delay: 0.15 + i * 0.08,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  viewport={{ once: true, margin: "-60px" }}
                >
                  <InstructorCard instructor={instructor} />
                </motion.div>
              );
            })}
          </div>
        ) : (
        <div className="space-y-28">
          {LOCATIONS.map((location, locIdx) => (
            <motion.div
              key={location.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              viewport={{ once: true, margin: "-80px" }}
            >
              <div className="mb-12 flex flex-col items-center gap-3 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
                  <svg
                    className="h-5 w-5 text-accent"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-foreground md:text-3xl">
                  {location.name}
                </h3>
              </div>

              <div className="flex flex-wrap justify-center gap-6 md:gap-8">
                {location.instructors.map((name, i) => {
                  const instructor = getInstructor(name);
                  if (!instructor) return null;

                  return (
                    <motion.div
                      key={`${location.name}-${name}`}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 1,
                        delay: 0.2 + i * 0.1,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      viewport={{ once: true, margin: "-60px" }}
                    >
                      <InstructorCard instructor={instructor} />
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
        )}
      </div>
    </section>
  );
}
