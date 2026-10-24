import type { Product } from '#shared/types/content'
import { FOLLOW_LINK } from '~/constants/site'

export type { Product }
export type ProductStatus = Product['status']
type ProductLinkKind = keyof NonNullable<Product['links']>

export interface ProductAction {
  kind: ProductLinkKind | 'follow'
  label: string
  href: string
}

/** Which link becomes the main button when a product has several. */
const ACTION_PRIORITY: ProductLinkKind[] = ['waitlist', 'app', 'github', 'npm']

const STATUS_LABELS: Record<ProductStatus, string> = {
  'live': 'Live',
  'waitlist': 'Waitlist open',
  'in-development': 'In development',
  'open-source': 'Open source',
}

export function productStatusLabel(status: ProductStatus): string {
  return STATUS_LABELS[status]
}

function actionLabel(kind: ProductLinkKind, product: Product): string {
  // Exhaustive over ProductLinkKind; TypeScript errors here if a new link kind is added without a label.
  switch (kind) {
    case 'waitlist': return 'Join the waitlist'
    case 'app': return `Open ${product.title}`
    case 'github': return 'View on GitHub'
    case 'npm': return 'View on npm'
    default: return kind satisfies never
  }
}

/**
 * Outbound actions for a product, most important first.
 * A product with no links yet falls back to following progress on X.
 */
export function productActions(product: Product): ProductAction[] {
  const actions = ACTION_PRIORITY.flatMap((kind) => {
    const href = product.links?.[kind]
    return href ? [{ kind, href, label: actionLabel(kind, product) }] : []
  })

  if (actions.length) return actions
  return [{ kind: 'follow', href: FOLLOW_LINK.href, label: `Follow on ${FOLLOW_LINK.label}` }]
}
