import Image from "next/image";
import Link from "next/link";
import { SITE, IMAGES } from "@/lib/constants";

/**
 * Unterstreichung nur so breit wie der Text: Effekt sitzt auf inline-block span,
 * Link im Grid nur `w-fit` / `justify-self-start` (sonst volle Spaltenbreite).
 */
const footerNavLinkUnderline =
  "relative inline-block pb-0.5 font-medium text-white/70 no-underline transition-colors after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:origin-left after:scale-x-0 after:bg-white after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.16,1,0.3,1)] after:content-[''] hover:text-white hover:after:scale-x-100";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Über uns", href: "/ueber-uns" },
  { label: "Auszeichnungen", href: "/auszeichnungen" },
  { label: "Kontakt", href: "/kontakt" },
  { label: "Blog", href: "/blogs" },
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
                  className="justify-self-start rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
                >
                  <span className={`${footerNavLinkUnderline} text-lg`}>
                    {link.label}
                  </span>
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <div className="mx-auto w-full border-t border-white/10 px-6 pb-12 pt-8 md:px-24 lg:px-32">
          <address className="not-italic text-sm leading-relaxed text-white/40">
            <span className="font-semibold text-white/60">Let&apos;ZHgo Fahrschule</span>
            <br />
            Binzmühlestrasse 15, CH-8050 Zürich
            {" · "}
            <a href="tel:+41433001455" className="transition-colors hover:text-white">
              +41 43 300 14 55
            </a>
            {" · "}
            <a href={`mailto:${SITE.email}`} className="transition-colors hover:text-white">
              {SITE.email}
            </a>
          </address>

          <div className="mt-6 flex flex-col gap-3 text-sm sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-white/60">
              <Link
                href="/impressum"
                className="rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
              >
                <span className={`${footerNavLinkUnderline} text-sm`}>
                  Impressum
                </span>
              </Link>
              <Link
                href="/datenschutzerklaerung"
                className="rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
              >
                <span className={`${footerNavLinkUnderline} text-sm`}>
                  Datenschutzerklärung
                </span>
              </Link>
              <Link
                href="/agb"
                className="rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
              >
                <span className={`${footerNavLinkUnderline} text-sm`}>AGB</span>
              </Link>
            </div>
            <span className="text-white/30">
              © {new Date().getFullYear()} | {SITE.name}
            </span>
          </div>
        </div>
        <div className="h-[env(safe-area-inset-bottom)]" />
      </div>
    </footer>
  );
}
