"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Nach Client-Navigation immer oben starten – ohne langsamen Scroll
 * (globales `scroll-behavior: smooth` würde sonst „hochfahren“).
 */
export default function ScrollToTopOnNavigate() {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}
