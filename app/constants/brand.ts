/** Content for /brand: downloadable assets and usage rules. */

export interface BrandAsset {
  label: string
  description: string
  href: string
}

export const BRAND_ASSETS: BrandAsset[] = [
  { label: 'Mark (SVG)', description: 'The four-point spark on its own. Recolour freely within the palette.', href: '/brand/taohq-mark.svg' },
  { label: 'App icon (SVG)', description: 'The mark on a rounded ink square, for avatars and favicons.', href: '/brand/taohq-icon.svg' },
]

export interface BrandRule {
  title: string
  body: string
}

export const BRAND_RULES: BrandRule[] = [
  { title: 'Always lowercase', body: 'The name is taohq: one word, all lowercase, even at the start of a sentence.' },
  { title: 'Two grounds only', body: 'Lavender mark on ink, or ink mark on lavender. No other colours, gradients or effects.' },
  { title: 'Give it room', body: 'Keep clear space around the mark at least half its height on every side.' },
  { title: 'Never distort', body: 'Don\'t stretch, rotate, outline or redraw the mark. Scale it as a whole.' },
]
