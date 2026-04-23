"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { INSTRUCTORS, INSTRUCTORS_HOMEPAGE_ORDER, LOCATIONS } from "@/lib/constants";
import { useScrollAnim } from "@/hooks/useScrollAnim";

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
      className="group flex h-[400px] w-[320px] flex-col overflow-hidden rounded-lg bg-white shadow-[0_2px_12px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)] md:h-[500px] md:w-[440px]"
    >
      <div className="relative h-[260px] overflow-hidden md:h-[340px]">
        <Image
          src={instructor.image}
          alt={instructor.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />
        <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />
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

const ALL_CATEGORIES = ["Auto", "Motorrad", "Anhänger", "VKU", "Nothelferkurs"] as const;
type Category = (typeof ALL_CATEGORIES)[number];
type LocationName = (typeof LOCATIONS)[number]["name"];

function countByCategory(cat: Category, locationFilters: Set<LocationName>): number {
  return INSTRUCTORS_HOMEPAGE_ORDER.reduce((n, name) => {
    const inst = getInstructor(name);
    if (!inst) return n;
    if (!(inst.tags as readonly string[]).includes(cat)) return n;
    if (locationFilters.size > 0) {
      const inAnyLoc = [...locationFilters].some((locName) => {
        const loc = LOCATIONS.find((l) => l.name === locName);
        return loc && (loc.instructors as readonly string[]).includes(inst.name);
      });
      if (!inAnyLoc) return n;
    }
    return n + 1;
  }, 0);
}

function countByLocation(loc: LocationName, categoryFilters: Set<Category>): number {
  const location = LOCATIONS.find((l) => l.name === loc);
  if (!location) return 0;
  return (location.instructors as readonly string[]).reduce((n, name) => {
    const inst = getInstructor(name);
    if (!inst) return n;
    if (categoryFilters.size > 0 && !(inst.tags as readonly string[]).some((t) => categoryFilters.has(t as Category))) return n;
    return n + 1;
  }, 0);
}

function CheckboxGroup<T extends string>({
  label,
  options,
  active,
  onToggle,
  countFn,
}: {
  label: string;
  options: readonly T[];
  active: Set<T>;
  onToggle: (v: T) => void;
  countFn: (opt: T) => number;
}) {
  return (
    <div>
      <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.15em] text-muted/70">
        {label}
      </p>
      <ul>
        {options.map((opt) => {
          const count = countFn(opt);
          const isActive = active.has(opt);
          const disabled = count === 0;
          return (
            <li key={opt}>
              <button
                type="button"
                disabled={disabled}
                onClick={() => onToggle(opt)}
                className={`group flex w-full items-center justify-between gap-3 py-3 text-left transition-colors ${
                  disabled ? "cursor-not-allowed opacity-30" : "cursor-pointer"
                }`}
              >
                <span className="flex items-center gap-3">
                  <span className={`flex h-[15px] w-[15px] shrink-0 items-center justify-center rounded-sm border transition-all ${
                    isActive
                      ? "border-accent bg-accent"
                      : "border-border group-hover:border-accent/50"
                  }`}>
                    {isActive && (
                      <svg className="h-2.5 w-2.5 text-white" viewBox="0 0 10 10" fill="none">
                        <path d="M2 5l2.5 2.5L8 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </span>
                  <span className={`text-sm transition-colors ${isActive ? "font-medium text-accent" : "text-foreground group-hover:text-accent"}`}>
                    {opt}
                  </span>
                </span>
                <span className="text-xs tabular-nums text-muted">{count}</span>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

type InstructorsSectionProps = {
  layout?: "byLocation" | "singleGrid";
  showFilters?: boolean;
  className?: string;
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  id?: string;
};

export default function InstructorsSection({
  layout = "byLocation",
  showFilters = false,
  className,
  eyebrow,
  title,
  subtitle,
  id = "fahrlehrer",
}: InstructorsSectionProps) {
  const anim = useScrollAnim();
  const [activeCategories, setActiveCategories] = useState<Set<Category>>(new Set());
  const [activeLocations, setActiveLocations] = useState<Set<LocationName>>(new Set());

  const toggleCategory = (cat: Category) =>
    setActiveCategories((prev) => { const s = new Set(prev); s.has(cat) ? s.delete(cat) : s.add(cat); return s; });
  const toggleLocation = (loc: LocationName) =>
    setActiveLocations((prev) => { const s = new Set(prev); s.has(loc) ? s.delete(loc) : s.add(loc); return s; });

  const defaultSubtitle =
    layout === "singleGrid"
      ? "Unser Team im Überblick – Details und Standorte findest du auf den Profilseiten."
      : "An verschiedenen Standorten in der Region Zürich stehen dir unsere erfahrenen Fahrlehrer:innen zur Seite.";

  const filteredInstructors = INSTRUCTORS_HOMEPAGE_ORDER.flatMap((name) => {
    const instructor = getInstructor(name);
    if (!instructor) return [];
    if (activeCategories.size > 0 && !(instructor.tags as readonly string[]).some((t) => activeCategories.has(t as Category))) return [];
    if (activeLocations.size > 0) {
      const inAnyLoc = [...activeLocations].some((locName) => {
        const loc = LOCATIONS.find((l) => l.name === locName);
        return loc && (loc.instructors as readonly string[]).includes(instructor.name);
      });
      if (!inAnyLoc) return [];
    }
    return [instructor];
  });

  const locationNames = LOCATIONS.map((l) => l.name) as LocationName[];
  const hasActiveFilter = activeCategories.size > 0 || activeLocations.size > 0;
  const activeFilterTags: { label: string; remove: () => void }[] = [
    ...[...activeCategories].map((cat) => ({ label: cat, remove: () => toggleCategory(cat) })),
    ...[...activeLocations].map((loc) => ({ label: loc, remove: () => toggleLocation(loc) })),
  ];

  return (
    <section id={id} className={className}>
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <motion.div
          {...anim({ y: 30, delay: 0.1, duration: 1.2 })}
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

        {layout === "singleGrid" && showFilters ? (
          <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-12 lg:-ml-8">

            {/* ── Mobile: native dropdowns (hidden on lg+) ── */}
            <div className="flex flex-wrap gap-3 lg:hidden">
              <div className="relative">
                <select
                  className="cursor-pointer appearance-none rounded-xl border border-border bg-white py-2.5 pl-4 pr-9 text-sm font-medium text-foreground focus:border-accent focus:outline-none"
                  value={[...activeCategories][0] ?? ""}
                  onChange={(e) => {
                    setActiveCategories(e.target.value ? new Set([e.target.value as Category]) : new Set());
                  }}
                >
                  <option value="">Alle Kategorien</option>
                  {ALL_CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
                </select>
                <svg className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"><path d="M4 6l4 4 4-4" /></svg>
              </div>
              <div className="relative">
                <select
                  className="cursor-pointer appearance-none rounded-xl border border-border bg-white py-2.5 pl-4 pr-9 text-sm font-medium text-foreground focus:border-accent focus:outline-none"
                  value={[...activeLocations][0] ?? ""}
                  onChange={(e) => {
                    setActiveLocations(e.target.value ? new Set([e.target.value as LocationName]) : new Set());
                  }}
                >
                  <option value="">Alle Standorte</option>
                  {locationNames.map((l) => <option key={l} value={l}>{l}</option>)}
                </select>
                <svg className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"><path d="M4 6l4 4 4-4" /></svg>
              </div>
            </div>

            {/* ── Desktop: checkbox sidebar — absolute so cards can center over full width ── */}
            <motion.aside
              {...anim({ y: 20, delay: 0.15, duration: 0.7 })}
              className="hidden lg:block lg:w-64 lg:shrink-0 lg:sticky lg:top-28"
            >
              <div className="rounded-lg bg-white px-5 py-5 shadow-sm">
                <div className="flex items-center justify-between border-b border-border pb-4">
                  <p className="text-sm font-semibold text-foreground">
                    Filter
                  </p>
                  <AnimatePresence>
                    {hasActiveFilter && (
                      <motion.button
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => { setActiveCategories(new Set()); setActiveLocations(new Set()); }}
                        className="cursor-pointer text-xs text-muted transition-colors hover:text-accent"
                      >
                        Zurücksetzen
                      </motion.button>
                    )}
                  </AnimatePresence>
                </div>

                <div className="mt-5">
                  <CheckboxGroup
                    label="Kategorie"
                    options={ALL_CATEGORIES}
                    active={activeCategories}
                    onToggle={(v) => toggleCategory(v as Category)}
                    countFn={(cat) => countByCategory(cat as Category, activeLocations)}
                  />
                </div>

                <div className="my-5 border-t border-border" />

                <CheckboxGroup
                  label="Standort"
                  options={locationNames}
                  active={activeLocations}
                  onToggle={(v) => toggleLocation(v as LocationName)}
                  countFn={(loc) => countByLocation(loc as LocationName, activeCategories)}
                />

                <p className="mt-5 border-t border-border pt-4 text-xs text-muted">
                  <span className="font-semibold text-foreground">{filteredInstructors.length}</span>
                  {" "}von{" "}
                  <span className="font-semibold text-foreground">{INSTRUCTORS.length}</span>
                  {" "}Fahrlehrer:innen
                </p>
              </div>
            </motion.aside>

            {/* Cards area */}
            <div className="min-w-0 flex-1">

              {/* Active filter tags */}
              <AnimatePresence>
                {activeFilterTags.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="mb-8 flex flex-wrap items-center gap-2"
                  >
                    {activeFilterTags.map(({ label, remove }) => (
                      <span
                        key={label}
                        className="inline-flex items-center gap-1.5 rounded-full border border-accent/25 bg-accent/8 pl-3 pr-2 py-1 text-xs font-medium text-accent"
                      >
                        {label}
                        <button
                          type="button"
                          onClick={remove}
                          className="flex h-4 w-4 cursor-pointer items-center justify-center rounded-full transition-colors hover:bg-accent/20"
                          aria-label={`Filter ${label} entfernen`}
                        >
                          <svg className="h-2.5 w-2.5" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round">
                            <path d="M2 2l6 6M8 2l-6 6" />
                          </svg>
                        </button>
                      </span>
                    ))}
                    <button
                      type="button"
                      onClick={() => { setActiveCategories(new Set()); setActiveLocations(new Set()); }}
                      className="cursor-pointer text-xs text-muted transition-colors hover:text-foreground"
                    >
                      Alle entfernen
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Cards — animate only once on scroll-in, never on filter change */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.7 }}
              >
                {filteredInstructors.length > 0 ? (
                  <div className="flex flex-wrap justify-center gap-6 md:gap-8">
                    {filteredInstructors.map((instructor) => (
                      <div key={instructor.slug}>
                        <InstructorCard instructor={instructor} />
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="py-20 text-center">
                    <p className="text-lg font-semibold text-foreground">Kein Fahrlehrer gefunden</p>
                    <p className="mt-2 text-sm text-muted">Versuche einen anderen Filter.</p>
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        ) : layout === "singleGrid" ? (
          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            {INSTRUCTORS_HOMEPAGE_ORDER.map((name, i) => {
              const instructor = getInstructor(name);
              if (!instructor) return null;
              return (
                <motion.div
                  key={name}
                  {...anim({ y: 30, delay: 0.15 + i * 0.08, duration: 1 })}
                >
                  <InstructorCard instructor={instructor} />
                </motion.div>
              );
            })}
          </div>
        ) : (
          <div className="space-y-28">
            {LOCATIONS.map((location) => (
              <motion.div
                key={location.name}
                {...anim({ y: 40, delay: 0.15, duration: 1 })}
              >
                <div className="mb-12 flex flex-col items-center gap-3 text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
                    <svg className="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
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
                        {...anim({ y: 30, delay: 0.2 + i * 0.1, duration: 1 })}
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
