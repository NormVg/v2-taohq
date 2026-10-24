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
    'taohq makes calm, durable apps for everyday life: Fold, Bottles and the Bubbles family. Some of what we build along the way, we share with the community as open source.',
  locale: 'en',
  ogImage: '/og.png',
  /** The one inbox for everything. */
  email: 'taohq.org@gmail.com',
} as const

export interface NavItem {
  label: string
  to: string
}

export const PRIMARY_NAV: NavItem[] = [
  { label: 'Products', to: '/products' },
  { label: 'Open source', to: '/open-source' },
  { label: 'Writing', to: '/writing' },
  { label: 'About', to: '/about' },
]

export const CONTACT_NAV: NavItem = { label: 'Contact', to: '/contact' }

export interface NavGroup {
  title: string
  links: NavItem[]
}

/** Footer link groups, kept short and balanced. Products and socials are added by the footer. */
export const FOOTER_NAV: NavGroup[] = [
  {
    title: 'Company',
    links: [
      { label: 'About', to: '/about' },
      { label: 'Team', to: '/team' },
      { label: 'Studio', to: '/studio' },
      { label: 'Careers', to: '/careers' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Writing', to: '/writing' },
      { label: 'Design', to: '/design' },
      { label: 'Brand', to: '/brand' },
    ],
  },
]

export const LEGAL_NAV: NavItem[] = [
  { label: 'Privacy', to: '/privacy' },
  { label: 'Terms', to: '/legal' },
  { label: 'DMCA', to: '/dmca' },
]

/** What people write to us about. Each pre-fills the email subject. */
export interface ContactTopic {
  id: string
  label: string
  description: string
  subject: string
}

export const CONTACT_TOPICS: ContactTopic[] = [
  {
    id: 'project',
    label: 'Start a project',
    description: 'A product or idea you want built. Tell us what it is and your timeline.',
    subject: 'New project',
  },
  {
    id: 'support',
    label: 'Product support',
    description: 'Help with Fold, Bottles, Bubbles or web-have-sounds.',
    subject: 'Support',
  },
  {
    id: 'privacy',
    label: 'Privacy request',
    description: 'Access, correct or delete your data.',
    subject: 'Privacy request',
  },
  {
    id: 'hello',
    label: 'Just saying hi',
    description: 'Questions, ideas, press, or anything else.',
    subject: 'Hello',
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
