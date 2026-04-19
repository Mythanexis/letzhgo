"use client";

import {
  createContext,
  createElement,
  useCallback,
  useContext,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import type { TargetAndTransition, Transition } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

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

type ScrollAnimReturn =
  | {
      initial: false;
      animate: TargetAndTransition;
      transition: { duration: number };
    }
  | {
      initial: TargetAndTransition;
      whileInView: TargetAndTransition;
      transition: Transition;
      viewport: { once: boolean; margin: string };
    };

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
 * Viewport-/Scroll-Reveal-Animationen: auf Touch nur statisch (kein whileInView).
 * Desktop: wie bisher (y/x/scale + whileInView).
 */
export function useScrollAnim() {
  const coarse = useCoarsePointer();

  return useCallback(
    function anim({
      delay = 0,
      y = 0,
      x = 0,
      duration = 1,
      scale,
      rotateFrom,
      rotateTo,
    }: ScrollAnimOptions = {}): ScrollAnimReturn {
      const hasRotate = rotateFrom !== undefined || rotateTo !== undefined;
      const r0 = rotateFrom ?? 0;
      const r1 = rotateTo ?? 0;

      if (coarse) {
        return {
          initial: false,
          animate: {
            opacity: 1,
            ...(hasRotate ? { rotate: r1 } : {}),
            ...(y !== 0 ? { y: 0 } : {}),
            ...(x !== 0 ? { x: 0 } : {}),
            ...(scale !== undefined ? { scale: 1 } : {}),
          },
          transition: { duration: 0 },
        };
      }

      return {
        initial: {
          opacity: 0,
          ...(y !== 0 ? { y } : {}),
          ...(x !== 0 ? { x } : {}),
          ...(scale !== undefined ? { scale } : {}),
          ...(hasRotate ? { rotate: r0 } : {}),
        },
        whileInView: {
          opacity: 1,
          ...(y !== 0 ? { y: 0 } : {}),
          ...(x !== 0 ? { x: 0 } : {}),
          ...(scale !== undefined ? { scale: 1 } : {}),
          ...(hasRotate ? { rotate: r1 } : {}),
        },
        transition: { duration, delay, ease: EASE },
        viewport: { once: true, margin: "-80px" },
      };
    },
    [coarse],
  );
}
