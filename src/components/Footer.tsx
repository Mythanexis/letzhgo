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
    <footer
      className="relative flex min-h-screen w-full flex-col overflow-x-clip"
      data-navbar-dark
    >
      <Image
        src={IMAGES.footerBg}
        alt=""
        fill
        className="object-cover brightness-[0.3]"
        sizes="100vw"
      />

      <div className="relative z-10 flex flex-1 flex-col">
        <div className="mx-auto flex w-full flex-1 flex-col items-start justify-start gap-16 px-6 py-24 md:px-24 lg:flex-row lg:items-center lg:justify-between lg:gap-20 lg:px-32">
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
          <div className="w-full flex-shrink-0 lg:w-auto">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/40">
              Navigation
            </p>
            <nav className="mt-10 grid grid-cols-1 gap-y-5 lg:mt-8 lg:grid-cols-2 lg:gap-x-20 lg:gap-y-7">
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

        <div className="mx-auto w-full px-6 pb-12 md:px-24 lg:px-32">
          <div className="grid items-center gap-y-3 text-sm text-white/50 md:grid-cols-[1fr_auto_1fr]">
            <div className="flex items-center justify-center gap-2 md:justify-start">
              Kontaktiere uns:{" "}
              <a
                href={`mailto:${SITE.email}`}
                className="font-semibold text-white transition-colors hover:text-accent"
              >
                {SITE.email}
              </a>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-white/60">
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
            <div className="flex items-center justify-center md:justify-end">
              <span className="text-white/40">
                © {new Date().getFullYear()} | {SITE.name}
              </span>
            </div>
          </div>
        </div>
        <div className="h-[env(safe-area-inset-bottom)]" />
      </div>
    </footer>
  );
}
