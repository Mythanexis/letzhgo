let activePopup: string | null = null;
const listeners = new Set<() => void>();

export function requestOpen(id: string): boolean {
  if (activePopup) return false;
  activePopup = id;
  return true;
}

export function notifyClose(id: string) {
  if (activePopup === id) {
    activePopup = null;
    listeners.forEach((fn) => fn());
  }
}

export function onRelease(fn: () => void) {
  listeners.add(fn);
  return () => listeners.delete(fn);
}
