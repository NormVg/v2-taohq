/** Content for /design: the taohq visual language, documented. */

export interface Swatch {
  name: string
  hex: string
  role: string
  /** Share of a typical page, the 60 / 30 / 10 split. */
  share: number
}

export const PALETTE: Swatch[] = [
  { name: 'Ink', hex: '#151515', role: 'Backgrounds and surfaces', share: 60 },
  { name: 'Lavender', hex: '#C4B5E3', role: 'Accent: buttons, labels, art, the footer', share: 30 },
  { name: 'Paper', hex: '#ECE8F3', role: 'Text', share: 10 },
]

export interface Typeface {
  name: string
  role: string
  sample: string
  /** CSS custom property holding the family. */
  token: string
  italic?: boolean
}

export const TYPEFACES: Typeface[] = [
  { name: 'VT323', role: 'Names and titles', sample: 'Small software', token: '--font-display' },
  { name: 'IBM Plex Mono', role: 'Body, labels and interface', sample: 'Calm, durable, made with care.', token: '--font-body' },
  { name: 'Instrument Serif Italic', role: 'Lavender accent lines', sample: 'Journaling, but cool.', token: '--font-accent', italic: true },
]

export interface Rule {
  title: string
  body: string
}

export const MOTION_RULES: Rule[] = [
  { title: 'Segments, not blocks', body: 'Every entrance is split into parts that move at their own pace: a label fades, a title rises, an action ticks in last.' },
  { title: 'Fast hands', body: 'Hovers and presses finish in under 300ms. Only entrances are allowed to take their time.' },
  { title: 'Things develop', body: 'Art never just appears. It resolves from coarse pixels to fine, like a print coming up.' },
  { title: 'Respect stillness', body: 'Anyone who asks their device for reduced motion gets the same site, without the movement.' },
]
