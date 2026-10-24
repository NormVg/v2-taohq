/** Studio (client work) offering for the /studio page. */
import type { ArtName } from '~/constants/art-manifest'

export interface StudioService {
  id: string
  title: string
  summary: string
  includes: string[]
  art: ArtName
  artAlt: string
}

export const STUDIO_SERVICES: StudioService[] = [
  {
    id: 'interface',
    title: 'Interface & experience',
    summary: 'Product design that is clear first and beautiful second: flows people understand at a glance, and interfaces with the same care as our own apps.',
    includes: ['UI / UX design', 'Interaction & motion', 'Design systems'],
    art: 'studio-interface',
    artAlt: 'A skeleton kneeling in prayer',
  },
  {
    id: 'systems',
    title: 'Apps & systems',
    summary: 'Full-stack web apps, APIs and the infrastructure under them, built on Nuxt, Vue and modern serverless platforms, and made to keep working.',
    includes: ['Full-stack development', 'Backend & APIs', 'Automation & tooling'],
    art: 'studio-systems',
    artAlt: 'A cracked skull half buried in leaves',
  },
  {
    id: 'identity',
    title: 'Brand identity',
    summary: 'Type, marks and visual language with a point of view, so your product looks like itself and nothing else.',
    includes: ['Logo design', 'Brand guidelines', 'Landing pages'],
    art: 'studio-identity',
    artAlt: 'A horned figure surrounded by roses',
  },
]

/** Everything we take on, for the full list on /studio. */
export const STUDIO_CAPABILITIES: string[] = [
  'Full-stack web development',
  'Custom software',
  'SaaS platforms',
  'Trading tools & algorithms',
  'Automation & scripting',
  'API & backend integration',
  'System architecture',
  'UI / UX & interface design',
  'Landing pages',
  'Brand identity & logos',
]
