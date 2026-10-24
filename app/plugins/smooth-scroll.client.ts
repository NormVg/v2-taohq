/**
 * Smooth wheel scrolling via Lenis. Native scrolling stays underneath, so
 * sticky columns, IntersectionObserver reveals and keyboard scrolling all
 * keep working; touch scrolling stays native on phones.
 *
 * Skipped entirely for visitors who prefer reduced motion.
 * Components reach it through useSmoothScroll(), never directly.
 */
import Lenis from 'lenis'

/** Anchor targets land below the fixed header (its height + breathing room). */
const ANCHOR_OFFSET = -112

export default defineNuxtPlugin(() => {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const lenis = reduceMotion
    ? null
    : new Lenis({
        autoRaf: true,
        lerp: 0.1,
        anchors: { offset: ANCHOR_OFFSET },
      })

  if (lenis) {
    // Halt any glide in progress before a route change, so the router's own
    // scroll (top of the new page, or the saved position on back) wins cleanly.
    useRouter().beforeEach(() => {
      lenis.scrollTo(lenis.scroll, { immediate: true, force: true })
    })
  }

  return { provide: { lenis } }
})

declare module '#app' {
  interface NuxtApp {
    $lenis: Lenis | null
  }
}
