"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";

export default function SmoothScroll() {
  const pathname = usePathname();
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Ankam die Navigation mit einem #hash (z.B. von einer anderen Seite aus
    // verlinkt), dann zu diesem Element springen statt immer nach oben.
    const hash = window.location.hash ? window.location.hash.slice(1) : "";
    let target: HTMLElement | null = null;
    if (hash) {
      try {
        target = document.getElementById(decodeURIComponent(hash));
      } catch {
        target = document.getElementById(hash);
      }
    }

    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (isTouch) {
      if (target) {
        const y = target.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top: y, left: 0, behavior: "instant" });
      } else {
        // Plain instant scroll-to-top on navigation
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      }
      return;
    }

    if (!lenisRef.current) {
      lenisRef.current = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });

      function raf(time: number) {
        lenisRef.current?.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);
    }

    // Kill any ongoing momentum and immediately snap to top — or to the
    // target anchor, if the URL carries one.
    if (target) {
      lenisRef.current.scrollTo(target, { immediate: true, offset: -80 });
    } else {
      lenisRef.current.scrollTo(0, { immediate: true });
    }

    return () => {};
  }, [pathname]);

  // Intercept same-page hash anchor clicks and route them through Lenis
  // so they animate smoothly instead of jumping instantly.
  useEffect(() => {
    if (typeof window === "undefined") return;

    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented) return;
      if (event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

      const target = event.target as Element | null;
      const anchor = target?.closest("a") as HTMLAnchorElement | null;
      if (!anchor) return;
      if (anchor.target && anchor.target !== "_self") return;

      const href = anchor.getAttribute("href");
      if (!href) return;

      let hash = "";
      if (href.startsWith("#")) {
        hash = href.slice(1);
      } else if (
        anchor.pathname === window.location.pathname &&
        anchor.hash.startsWith("#")
      ) {
        hash = anchor.hash.slice(1);
      } else {
        return;
      }

      if (!hash) return;

      let id: string;
      try {
        id = decodeURIComponent(hash);
      } catch {
        id = hash;
      }

      const el = document.getElementById(id);
      if (!el) return;

      event.preventDefault();

      const lenis = lenisRef.current;
      if (lenis) {
        lenis.scrollTo(el, { offset: -80 });
      } else {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }

      if (window.location.hash !== `#${hash}`) {
        window.history.replaceState(null, "", `#${hash}`);
      }
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  // Cleanup Lenis on unmount
  useEffect(() => {
    return () => {
      lenisRef.current?.destroy();
      lenisRef.current = null;
    };
  }, []);

  return null;
}
