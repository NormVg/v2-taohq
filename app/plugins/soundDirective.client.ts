import { defineNuxtPlugin } from '#app'
import { useUISound } from '~/composables/useUISound'

export default defineNuxtPlugin((nuxtApp) => {
  const { playSound } = useUISound()

  // v-sound Directive
  // Usage: v-sound="'click'" or v-sound="{ type: 'pop', feel: 'glass' }"
  nuxtApp.vueApp.directive('sound', {
    mounted(el, binding) {
      el.addEventListener('click', () => {
        let soundType = 'click'
        let soundFeel = 'aero'
        
        if (binding.value) {
          if (typeof binding.value === 'string') {
            soundType = binding.value
          } else if (typeof binding.value === 'object') {
            soundType = binding.value.type || 'click'
            soundFeel = binding.value.feel || 'aero'
          }
        }
        
        playSound(soundType, soundFeel)
      })
    }
  })
})
