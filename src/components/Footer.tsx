import Image from "next/image";
import Link from "next/link";
import { SITE, IMAGES } from "@/lib/constants";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Über uns", href: "/ueber-uns" },
  { label: "Kontakt", href: "/kontakt" },
  { label: "Nothelferkurs", href: "/services/nothelferkurs" },
  { label: "Verkehrskunde", href: "/services/verkehrskunde" },
  { label: "Motorradkurs", href: "/services/motorrad" },
  { label: "Fahrstunden", href: "/services/fahrstunden" },
];

export default function Footer() {
  return (
    <footer className="relative flex min-h-screen w-full flex-col">
      <Image
        src={IMAGES.footerBg}
        alt=""
        fill
        className="object-cover brightness-[0.3]"
        sizes="100vw"
      />

      <div className="relative z-10 flex flex-1 flex-col">
        <div className="mx-auto flex w-full flex-1 items-center justify-between gap-20 px-12 py-24 md:px-24 lg:flex-row lg:px-32">
          {/* Left: CTA */}
          <div>
            <h2 className="text-4xl font-bold leading-tight text-white md:text-6xl lg:text-7xl">
              Bereit für deinen
              <br />
              Führerschein?
            </h2>
            <p className="mt-8 max-w-lg text-lg text-white/50">
              Starte jetzt mit dem passenden Kurs – Nothelfer, Verkehrskunde
              oder Fahrstunden. Wir begleiten dich Schritt für Schritt bis zur
              Prüfung.
            </p>
            <Link
              href="/kontakt"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-lg font-medium text-white transition-colors hover:bg-accent-dark"
            >
              Anmelden
              <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
                <path d="M4 8h8M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>

          {/* Right: Navigation */}
          <div className="flex-shrink-0">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/40">
              Navigation
            </p>
            <nav className="mt-8 grid grid-cols-2 gap-x-20 gap-y-7">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-lg text-white/70 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-8 py-8 md:flex-row md:px-16">
            <div className="flex flex-col items-center gap-2 text-sm text-white/50 md:items-start">
              <div className="flex items-center gap-2">
                Kontaktiere uns:{" "}
                <a
                  href={`mailto:${SITE.email}`}
                  className="font-semibold text-white transition-colors hover:text-accent"
                >
                  {SITE.email}
                </a>
              </div>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-white/60">
                <Link href="/impressum" className="transition-colors hover:text-white">
                  Impressum
                </Link>
                <Link
                  href="/datenschutzerklaerung"
                  className="transition-colors hover:text-white"
                >
                  Datenschutzerklärung
                </Link>
                <Link href="/agb" className="transition-colors hover:text-white">
                  AGB
                </Link>
              </div>
            </div>
            <span className="text-sm text-white/40">
              © {new Date().getFullYear()} | {SITE.name}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
