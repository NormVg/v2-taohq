import { ref, watch, onMounted } from 'vue'
import { playUISound as libPlaySound } from '@thenormvg/web-have-sounds'

// Global state for sound preference
const isSoundEnabled = ref(true)
const isInitialized = ref(false)

export function useUISound() {
  onMounted(() => {
    if (!isInitialized.value) {
      // Respect user's explicit preference first, fallback to system reduced motion preference
      const storedPref = localStorage.getItem('tao-ui-sound-enabled')
      
      if (storedPref !== null) {
        isSoundEnabled.value = storedPref === 'true'
      } else {
        // If no preference is set, check if the user prefers reduced motion (which often implies a desire for less sensory input)
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
        isSoundEnabled.value = !prefersReducedMotion
      }
      
      isInitialized.value = true
    }
  })

  // Watch for changes to save to localStorage
  watch(isSoundEnabled, (newValue) => {
    if (import.meta.client) {
      localStorage.setItem('tao-ui-sound-enabled', String(newValue))
    }
  })

  const toggleSound = () => {
    isSoundEnabled.value = !isSoundEnabled.value
  }

  // Wrapper around the library's play function
  const playSound = (type: any, feel: any = 'aero') => {
    if (import.meta.client && isSoundEnabled.value) {
      libPlaySound(type, feel)
    }
  }

  return {
    isSoundEnabled,
    toggleSound,
    playSound
  }
}
