import { defineNuxtPlugin } from '#app'
import { useUISound } from '~/composables/useUISound'

export default defineNuxtPlugin((nuxtApp) => {
  const { playSound } = useUISound()

  // v-sound Directive (Defaults to click)
  nuxtApp.vueApp.directive('sound', {
    mounted(el, binding) {
      el.addEventListener('click', () => {
        let soundType = 'click'
        let soundFeel = 'aero'
        
        if (binding.value) {
          if (typeof binding.value === 'string') {
            soundType = binding.value
          } else if (typeof binding.value === 'object') {
            soundType = binding.value.type || soundType
            soundFeel = binding.value.feel || 'aero'
          }
        }
        
        playSound(soundType, soundFeel, false)
      })
    },
    updated() {}, // Empty updated hook prevents Vue HMR errors
    getSSRProps() { return {} }
  })

  // v-hover-sound Directive (For mouseenter)
  nuxtApp.vueApp.directive('hover-sound', {
    mounted(el, binding) {
      el.addEventListener('mouseenter', () => {
        let soundType = 'pop'
        let soundFeel = 'minimal'
        
        if (binding.value) {
          if (typeof binding.value === 'string') {
            soundType = binding.value
          } else if (typeof binding.value === 'object') {
            soundType = binding.value.type || soundType
            soundFeel = binding.value.feel || soundFeel
          }
        }
        
        playSound(soundType, soundFeel, true) // true indicates hover event
      })
    },
    updated() {}, // Empty updated hook prevents Vue HMR errors
    getSSRProps() { return {} }
  })
})
