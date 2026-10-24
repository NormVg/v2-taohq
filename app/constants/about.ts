/** Copy for /about: what we believe and who we are. */
import type { ArtName } from '#shared/constants/art-manifest'
import { mailtoHref } from '~/utils/mailto'

export interface Principle {
  id: string
  title: string
  body: string
}

export const PRINCIPLES: Principle[] = [
  {
    id: 'calm',
    title: 'Calm',
    body: 'Software should lower your cognitive load, not compete for your attention. You should always understand what is happening.',
  },
  {
    id: 'thoughtful',
    title: 'Thoughtful',
    body: 'Every interaction exists for a reason. No complexity for its own sake, no decoration that adds nothing. Every pixel has intent.',
  },
  {
    id: 'durable',
    title: 'Durable',
    body: 'Products should keep working for years. We build stable systems instead of rebuilding for every trend.',
  },
  {
    id: 'invisible',
    title: 'Invisible infrastructure',
    body: 'You should never have to think about sign-in, syncing, storage or deployment. Good infrastructure disappears.',
  },
  {
    id: 'no-magic',
    title: 'No magic',
    body: 'We build things that will still make sense five years from now. Permanence over novelty.',
  },
  {
    id: 'substance',
    title: 'Substance over hype',
    body: 'Clarity over cleverness, honesty over marketing. We document ideas rather than promote them.',
  },
]

export interface TeamMember {
  name: string
  role: string
  bio: string
  photo: ArtName
  photoAlt: string
  links: { label: string, href: string }[]
}

export const TEAM: TeamMember[] = [
  {
    name: 'Vishnu',
    role: 'Founder',
    bio: 'Designs and builds everything at taohq, from Fold and Bottles to the Bubbles family. Cares about fast, reliable, intentionally designed software.',
    photo: 'team-vishnu',
    photoAlt: 'Portrait of Vishnu',
    links: [
      { label: 'X', href: 'https://x.com/TheNormVg' },
      { label: 'GitHub', href: 'https://github.com/NormVg' },
      { label: 'Email', href: mailtoHref() },
    ],
  },
]
