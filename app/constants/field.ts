/**
 * Composition of the home "cabinet": where each product specimen floats.
 * Slots are assigned in product order, so the lead product (Fold) always
 * takes the largest, most central slot.
 *
 * x / y   centre of the specimen, in % of the field
 * size    rendered width (CSS length)
 * depth   0..1, how strongly it follows the cursor (parallax)
 * drift   idle float cycle in seconds; each slot differs so nothing moves in sync
 * tag     which side the specimen tag hangs on
 */

export interface FieldSlot {
  x: number
  y: number
  size: string
  depth: number
  drift: number
  tag: 'left' | 'right'
}

export const FIELD_SLOTS: FieldSlot[] = [
  { x: 34, y: 52, size: 'clamp(240px, 27vw, 440px)', depth: 1, drift: 9, tag: 'right' },
  { x: 76, y: 27, size: 'clamp(150px, 14vw, 230px)', depth: 0.55, drift: 7, tag: 'left' },
  { x: 83, y: 71, size: 'clamp(150px, 15vw, 240px)', depth: 0.75, drift: 11, tag: 'left' },
  { x: 60, y: 80, size: 'clamp(120px, 11vw, 180px)', depth: 0.4, drift: 8, tag: 'right' },
  { x: 11, y: 26, size: 'clamp(120px, 11vw, 190px)', depth: 0.35, drift: 10, tag: 'right' },
]

/** Where the moon-glow rests when nothing is hovered. */
export const FIELD_IDLE_GLOW = { x: 34, y: 48 } as const
