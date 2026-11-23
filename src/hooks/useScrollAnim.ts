"use client";

import {
  createContext,
  createElement,
  useCallback,
  useContext,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import type { TargetAndTransition } from "framer-motion";

const COARSE_MEDIA = "(pointer: coarse)";

function subscribeCoarse(cb: () => void) {
  const mq = window.matchMedia(COARSE_MEDIA);
  mq.addEventListener("change", cb);
  return () => mq.removeEventListener("change", cb);
}

function getCoarseSnapshot() {
  return window.matchMedia(COARSE_MEDIA).matches;
}

function getServerCoarseSnapshot() {
  return false;
}

const CoarsePointerContext = createContext(false);

interface ScrollAnimOptions {
  delay?: number;
  y?: number;
  x?: number;
  duration?: number;
  scale?: number;
  /** Desktop: initial rotation (deg). Use with `rotateTo`. */
  rotateFrom?: number;
  /** Desktop: rotation when in view (deg). */
  rotateTo?: number;
}

interface ScrollAnimReturn {
  initial: false;
  animate: TargetAndTransition;
  transition: { duration: number };
}

/**
 * Ein `matchMedia("(pointer: coarse)")` für Touch-Geräte — u.a. für „keine Scroll-Effekte“.
 */
export function useCoarsePointer(): boolean {
  return useContext(CoarsePointerContext);
}

export function ScrollAnimProvider({ children }: { children: ReactNode }) {
  const coarse = useSyncExternalStore(
    subscribeCoarse,
    getCoarseSnapshot,
    getServerCoarseSnapshot,
  );
  return createElement(
    CoarsePointerContext.Provider,
    { value: coarse },
    children,
  );
}

/**
 * Ehemals Viewport-/Scroll-Reveal-Animationen (fly-in beim Scrollen).
 * Gibt jetzt überall nur noch den finalen, statischen Zustand zurück —
 * keine whileInView-Fly-ins mehr. Einzige Fix-Stelle für alle Seiten.
 */
export function useScrollAnim() {
  return useCallback(function anim({
    y = 0,
    x = 0,
    scale,
    rotateTo,
  }: ScrollAnimOptions = {}): ScrollAnimReturn {
    const hasRotate = rotateTo !== undefined;

    return {
      initial: false,
      animate: {
        opacity: 1,
        ...(hasRotate ? { rotate: rotateTo } : {}),
        ...(y !== 0 ? { y: 0 } : {}),
        ...(x !== 0 ? { x: 0 } : {}),
        ...(scale !== undefined ? { scale: 1 } : {}),
      },
      transition: { duration: 0 },
    };
  }, []);
}
