/**
 * Single source of truth for site-wide identity, navigation and contact data.
 * Every component that shows a brand name, nav link, email or social link
 * reads it from here so copy never drifts between header, footer and pages.
 */

export const SITE = {
  name: 'taohq',
  /** Internal / legal entity. Only for legal text and structured data. */
  legalName: 'TheAlphaOnes',
  url: 'https://taohq.org',
  tagline: 'Small software, made with care.',
  description:
    'taohq builds calm, durable apps for people and tools for developers: Fold, Bottles, Bubbles and web-have-sounds.',
  locale: 'en',
  ogImage: '/og.png',
} as const

export interface NavItem {
  label: string
  to: string
}

export const PRIMARY_NAV: NavItem[] = [
  { label: 'Products', to: '/products' },
  { label: 'Studio', to: '/studio' },
  { label: 'Writing', to: '/writing' },
  { label: 'About', to: '/about' },
]

export const CONTACT_NAV: NavItem = { label: 'Contact', to: '/contact' }

export const LEGAL_NAV: NavItem[] = [
  { label: 'Privacy', to: '/privacy' },
  { label: 'Terms', to: '/legal' },
]

export interface ContactChannel {
  id: string
  label: string
  description: string
  email: string
}

export const CONTACT_CHANNELS: ContactChannel[] = [
  {
    id: 'hello',
    label: 'General',
    description: 'Questions, ideas, press, or just saying hi.',
    email: 'hello@taohq.org',
  },
  {
    id: 'studio',
    label: 'Work with us',
    description: 'Have a product or project you want built? Tell us about it.',
    email: 'vishnu@taohq.org',
  },
  {
    id: 'support',
    label: 'Support & privacy',
    description: 'Help with one of our products, or a data request.',
    email: 'support@taohq.org',
  },
]

export type SocialId = 'x' | 'github'

export interface SocialLink {
  id: SocialId
  label: string
  handle: string
  href: string
}

export const SOCIAL_LINKS: SocialLink[] = [
  { id: 'x', label: 'X', handle: '@TheNormVg', href: 'https://x.com/TheNormVg' },
  { id: 'github', label: 'GitHub', handle: 'NormVg', href: 'https://github.com/NormVg' },
]

export const FOLLOW_LINK = SOCIAL_LINKS[0]!
