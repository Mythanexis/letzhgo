let activePopup: string | null = null;
let lastClosedAt = 0;
const COOLDOWN_MS = 30_000;
const listeners = new Set<() => void>();

export function requestOpen(id: string): boolean {
  if (activePopup) return false;
  if (Date.now() - lastClosedAt < COOLDOWN_MS) return false;
  activePopup = id;
  return true;
}

export function notifyClose(id: string) {
  if (activePopup === id) {
    activePopup = null;
    lastClosedAt = Date.now();
    listeners.forEach((fn) => fn());
  }
}

export function onRelease(fn: () => void) {
  listeners.add(fn);
  return () => listeners.delete(fn);
}
