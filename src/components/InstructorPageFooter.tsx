import Link from "next/link";
import { SERVICES_OVERVIEW } from "@/lib/constants";

export default function InstructorPageFooter() {
  return (
    <section className="border-t border-border bg-[#f7f8fa]">
      <div className="mx-auto max-w-7xl px-6 py-14 md:px-10 md:py-16">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          {/* Left: CTA */}
          <div className="min-w-0">
            <p className="text-lg font-bold text-foreground">
              Jetzt anmelden und loslegen.
            </p>
            <p className="mt-1.5 max-w-sm text-sm text-muted">
              Melde dich direkt – wir finden zusammen den passenden Kurs für dich.
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-3">
              <Link
                href="/kontakt"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-accent-dark"
              >
                Kontakt aufnehmen
              </Link>
              <a
                href="tel:+41433001455"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-accent/30 hover:text-accent"
              >
                <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                </svg>
                +41 43 300 14 55
              </a>
            </div>
          </div>

          {/* Right: services as plain text links */}
          <div className="shrink-0">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted">
              Unsere Kurse
            </p>
            <ul className="mt-3 space-y-2">
              {SERVICES_OVERVIEW.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="group inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-accent"
                  >
                    <span
                      className="text-accent/40 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-accent"
                      aria-hidden
                    >
                      →
                    </span>
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
