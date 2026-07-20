import { ref, watch } from 'vue'
import { playUISound as libPlaySound } from '@thenormvg/web-have-sounds'

// Global state for sound preference
const isSoundEnabled = ref(true)
const isInitialized = ref(false)
let audioUnlocked = false

export function useUISound() {
  if (import.meta.client && !isInitialized.value) {
    // Respect user's explicit preference first, fallback to system reduced motion preference
    const storedPref = localStorage.getItem('tao-ui-sound-enabled')
    
    if (storedPref !== null) {
      isSoundEnabled.value = storedPref === 'true'
    } else {
      // If no preference is set, check if the user prefers reduced motion
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      isSoundEnabled.value = !prefersReducedMotion
    }
    
    isInitialized.value = true

    // Unlock AudioContext on first user interaction to allow hover sounds
    const unlockAudio = () => {
      audioUnlocked = true
      // Play a silent sound to force AudioContext to resume
      libPlaySound('click', { gainMult: 0.001, decayMult: 0.01, filterFreq: 200, q: 1, pitchMult: 1, oscType: 'sine' })
      window.removeEventListener('click', unlockAudio)
      window.removeEventListener('touchstart', unlockAudio)
      window.removeEventListener('keydown', unlockAudio)
    }
    window.addEventListener('click', unlockAudio, { once: true })
    window.addEventListener('touchstart', unlockAudio, { once: true })
    window.addEventListener('keydown', unlockAudio, { once: true })
  }

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
  const playSound = (type: any, feel: any = 'aero', isHover = false) => {
    if (import.meta.client && isSoundEnabled.value) {
      if (isHover && !audioUnlocked) return
      if (!isHover) audioUnlocked = true
      libPlaySound(type, feel)
    }
  }

  return {
    isSoundEnabled,
    toggleSound,
    playSound
  }
}

