"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";

export default function SmoothScroll() {
  const pathname = usePathname();
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (isTouch) {
      // Touch devices: plain instant scroll-to-top on navigation
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
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

    // Kill any ongoing momentum and immediately snap to top
    lenisRef.current.scrollTo(0, { immediate: true });

    return () => {};
  }, [pathname]);

  // Cleanup Lenis on unmount
  useEffect(() => {
    return () => {
      lenisRef.current?.destroy();
      lenisRef.current = null;
    };
  }, []);

  return null;
}
