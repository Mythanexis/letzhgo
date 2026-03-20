"use client";

import { motion } from "framer-motion";
import { INSTRUCTORS, LOCATIONS } from "@/lib/constants";

const BLOB_PATHS = [
  "M44.6,-51.2C56.3,-42.5,63.3,-27.2,65.4,-11.5C67.5,4.2,64.7,20.3,56.3,33.1C47.9,45.9,34,55.4,18.1,60.5C2.2,65.6,-15.6,66.2,-30.3,59.8C-45,53.4,-56.6,40,-62.5,24.5C-68.4,9,-68.6,-8.6,-62.3,-22.6C-56,-36.6,-43.2,-47,-29.6,-55C-16,-63,-8,-68.5,4.1,-73.4C16.2,-78.3,32.9,-59.9,44.6,-51.2Z",
  "M39.3,-47.5C49.8,-38.9,56.3,-25.6,59.3,-11.2C62.3,3.2,61.8,18.7,55.1,31.1C48.4,43.5,35.5,52.8,21.1,57.3C6.7,61.8,-9.2,61.5,-23.4,56C-37.6,50.5,-50.1,39.8,-57.1,26.2C-64.1,12.6,-65.6,-3.9,-60.8,-18.3C-56,-32.7,-44.9,-45,-32,-55C-19.1,-65,-9.6,-72.7,2.7,-75.9C15,-79.1,28.8,-56.1,39.3,-47.5Z",
  "M42.7,-50.6C54,-41.7,61.1,-27.2,63.6,-12C66.1,3.2,64,19.1,56.1,31.5C48.2,43.9,34.5,52.8,19.6,57.7C4.7,62.6,-11.4,63.5,-25.7,58.3C-40,53.1,-52.5,41.8,-59.4,27.6C-66.3,13.4,-67.6,-3.7,-62.5,-18.5C-57.4,-33.3,-45.9,-45.8,-33,-55.1C-20.1,-64.4,-10.1,-70.5,3.1,-74.2C16.3,-77.9,31.4,-59.5,42.7,-50.6Z",
  "M38.9,-46.3C50.2,-37.9,58.8,-25.1,61.8,-10.7C64.8,3.7,62.2,19.7,54.1,32.2C46,44.7,32.4,53.7,17.3,58.9C2.2,64.1,-14.4,65.5,-28.5,59.8C-42.6,54.1,-54.2,41.3,-60.3,26.5C-66.4,11.7,-67,-5.1,-61.6,-19.2C-56.2,-33.3,-44.8,-44.7,-32.2,-52.8C-19.6,-60.9,-5.8,-65.7,4.9,-71.5C15.6,-77.3,27.6,-54.7,38.9,-46.3Z",
  "M41.5,-48.8C53.2,-40.3,61.6,-26.5,64.5,-11.4C67.4,3.7,64.8,20.1,56.5,32.8C48.2,45.5,34.2,54.5,18.8,59.6C3.4,64.7,-13.4,65.9,-27.7,60.2C-42,54.5,-53.8,41.9,-60,27C-66.2,12.1,-66.8,-5.1,-61.4,-19.7C-56,-34.3,-44.6,-46.3,-32,-55C-19.4,-63.7,-5.7,-69.1,4.6,-74.4C14.9,-79.7,29.8,-57.3,41.5,-48.8Z",
];

function getInstructor(name: string) {
  return INSTRUCTORS.find((i) => i.name === name);
}

function InstructorBlob({
  instructor,
  blobPath,
  id,
}: {
  instructor: (typeof INSTRUCTORS)[number];
  blobPath: string;
  id: string;
}) {
  return (
    <div className="group flex flex-col items-center text-center">
      <div className="relative mb-6 h-52 w-52 md:h-64 md:w-64 drop-shadow-lg">
        <svg
          viewBox="-80 -80 160 160"
          className="h-full w-full overflow-visible"
        >
          <defs>
            <clipPath id={id}>
              <path d={blobPath} />
            </clipPath>
          </defs>
          <image
            href={instructor.image}
            x="-80"
            y="-80"
            width="160"
            height="160"
            clipPath={`url(#${id})`}
            preserveAspectRatio="xMidYMid slice"
          />
        </svg>
      </div>
      <h4 className="text-lg font-semibold text-foreground">
        {instructor.name}
      </h4>
      <p className="mt-1 max-w-[220px] text-sm leading-relaxed text-muted">
        {instructor.role}
      </p>
      <a
        href={instructor.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#25D366]/10 px-4 py-2 text-xs font-medium text-[#25D366] transition-all duration-200 hover:bg-[#25D366]/20 hover:scale-105"
      >
        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.121.553 4.114 1.519 5.847L.525 23.503a.5.5 0 00.607.601l5.771-1.473A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.82c-1.88 0-3.66-.5-5.19-1.41l-.36-.22-3.77.99 1.01-3.68-.24-.38A9.8 9.8 0 012.18 12c0-5.42 4.4-9.82 9.82-9.82 5.42 0 9.82 4.4 9.82 9.82 0 5.42-4.4 9.82-9.82 9.82z" />
        </svg>
        WhatsApp
      </a>
    </div>
  );
}

export default function InstructorsSection() {
  return (
    <section className="bg-[#f7f8fa]">
      <div className="mx-auto max-w-7xl px-6 py-32 md:py-40">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: "-80px" }}
          className="mb-24 text-center"
        >
          <p className="text-sm font-medium uppercase tracking-widest text-accent">
            Unser Team
          </p>
          <h2 className="mt-4 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            Deine Fahrlehrer:innen
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted">
            An verschiedenen Standorten in der Region Zürich stehen dir unsere
            erfahrenen Fahrlehrer:innen zur Seite.
          </p>
        </motion.div>

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

              <div className="flex flex-wrap items-start justify-center gap-14 md:gap-20">
                {location.instructors.map((name, i) => {
                  const instructor = getInstructor(name);
                  if (!instructor) return null;
                  const blobPath =
                    BLOB_PATHS[(locIdx * 3 + i) % BLOB_PATHS.length];

                  return (
                    <motion.div
                      key={`${location.name}-${name}`}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 1,
                        delay: 0.25 + i * 0.15,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      viewport={{ once: true, margin: "-60px" }}
                    >
                      <InstructorBlob
                        instructor={instructor}
                        blobPath={blobPath}
                        id={`blob-${locIdx}-${i}`}
                      />
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
