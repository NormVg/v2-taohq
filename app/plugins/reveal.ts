/**
 * `v-reveal`: marks a container as a reveal group and flips it to
 * `data-revealed` the first time it enters the viewport. All choreography
 * lives in assets/css/motion.css; this only decides *when* it starts.
 *
 * One IntersectionObserver is shared by every group on the page.
 */
import type { Directive } from 'vue'

const REVEALED = 'data-revealed'

let observer: IntersectionObserver | null = null

function getObserver(): IntersectionObserver {
  observer ??= new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue
        entry.target.setAttribute(REVEALED, '')
        observer?.unobserve(entry.target)
      }
    },
    // No negative bottom margin: content pinned to the very bottom of a short
    // page (like the footer) must still reveal without any scrolling.
    { threshold: 0.1 },
  )
  return observer
}

const reveal: Directive<HTMLElement> = {
  getSSRProps: () => ({ 'data-reveal-group': '' }),
  mounted(el) {
    el.setAttribute('data-reveal-group', '')
    getObserver().observe(el)
  },
  beforeUnmount(el) {
    observer?.unobserve(el)
  },
}

declare global {
  interface Window {
    /** Read by the failsafe script in nuxt.config head. */
    __revealReady?: boolean
  }
}

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('reveal', reveal)
  if (import.meta.client) window.__revealReady = true
})
