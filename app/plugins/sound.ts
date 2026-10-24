/**
 * `v-sound`: plays a UI sound when the element is clicked.
 *
 *   <a v-sound>            → 'click'
 *   <a v-sound="'pop'">    → named sound
 *
 * Respects the visitor's sound preference (see useUISound). Listeners are
 * removed on unmount so navigating never leaks handlers.
 */
import type { Directive } from 'vue'
import type { SoundType } from '@thenormvg/web-have-sounds'

const handlers = new WeakMap<HTMLElement, () => void>()

export default defineNuxtPlugin((nuxtApp) => {
  const { play, restorePreference } = useUISound()

  nuxtApp.hook('app:suspense:resolve', restorePreference)

  const sound: Directive<HTMLElement, SoundType | undefined> = {
    getSSRProps: () => ({}),
    mounted(el, binding) {
      const handler = () => play(binding.value ?? 'click')
      handlers.set(el, handler)
      el.addEventListener('click', handler)
    },
    beforeUnmount(el) {
      const handler = handlers.get(el)
      if (handler) el.removeEventListener('click', handler)
      handlers.delete(el)
    },
  }

  nuxtApp.vueApp.directive('sound', sound)
})
