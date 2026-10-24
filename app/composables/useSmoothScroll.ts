/**
 * Pause / resume page scrolling (e.g. while a full-screen menu is open).
 * Works with or without Lenis: reduced-motion visitors get a plain overflow lock.
 */
export function useSmoothScroll() {
  const lenis = import.meta.client ? useNuxtApp().$lenis : null

  function lock() {
    lenis?.stop()
    document.documentElement.style.overflow = 'hidden'
  }

  function unlock() {
    document.documentElement.style.overflow = ''
    lenis?.start()
  }

  return { lock, unlock }
}
