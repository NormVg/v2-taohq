import { playUISound } from '@thenormvg/web-have-sounds'
import type { FeelType, SoundType } from '@thenormvg/web-have-sounds'

/**
 * Site-wide UI sound preference + playback.
 *
 * Sounds play on deliberate actions (clicks) only, never on hover, and every
 * sound accompanies a visible change. The preference persists per browser and
 * defaults to off for people who ask the OS for reduced motion.
 */

const STORAGE_KEY = 'taohq-ui-sound'

export function useUISound() {
  // Server and first client render agree on `true`; the stored preference is
  // applied after hydration (see plugins/sound.ts) to avoid a mismatch.
  const enabled = useState<boolean>('ui-sound-enabled', () => true)

  function restorePreference() {
    if (import.meta.client) enabled.value = readPreference()
  }

  function setEnabled(value: boolean) {
    enabled.value = value
    writePreference(value)
  }

  function toggle() {
    setEnabled(!enabled.value)
  }

  /** Plays only if the visitor has sound on. */
  function play(type: SoundType = 'click', feel: FeelType = 'minimal') {
    if (!import.meta.client || !enabled.value) return
    playUISound(type, feel)
  }

  return {
    enabled: readonly(enabled),
    toggle,
    setEnabled,
    play,
    restorePreference,
  }
}

function readPreference(): boolean {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored !== null) return stored === 'on'
  }
  catch {
    // Storage can be blocked (private mode, disabled site data); fall through to the OS hint.
  }
  return !window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

function writePreference(value: boolean) {
  try {
    localStorage.setItem(STORAGE_KEY, value ? 'on' : 'off')
  }
  catch {
    // Not persisting is acceptable: the toggle still works for this visit.
  }
}
