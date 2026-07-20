import { defineNuxtPlugin } from '#app'
import { useUISound } from '~/composables/useUISound'

export default defineNuxtPlugin((nuxtApp) => {
  const { playSound } = useUISound()

  // v-sound Directive
  // Usage: v-sound="'click'" or v-sound="{ type: 'pop', feel: 'glass' }"
  nuxtApp.vueApp.directive('sound', {
    mounted(el, binding) {
      const attachSound = (event) => {
        el.addEventListener(event, () => {
          let soundType = event === 'mouseenter' ? 'tick' : 'click'
          let soundFeel = 'aero'
          
          if (binding.value) {
            if (typeof binding.value === 'string') {
              soundType = binding.value
            } else if (typeof binding.value === 'object') {
              soundType = binding.value.type || soundType
              soundFeel = binding.value.feel || 'aero'
            }
          }
          
          playSound(soundType, soundFeel)
        })
      }

      // Default to click if no modifiers provided, or if .click is explicitly used
      if (binding.modifiers.click || Object.keys(binding.modifiers).length === 0) {
        attachSound('click')
      }
      
      // Support .hover modifier
      if (binding.modifiers.hover) {
        attachSound('mouseenter')
      }
    },
    getSSRProps() {
      return {} // Return empty object to prevent SSR crash
    }
  })
})
