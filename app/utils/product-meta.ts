import type { MetaItem } from '~/types/ui'
import { productStatusLabel, type Product } from '~/utils/product'

/** Spec-sheet rows for a product: status, kind, platforms, then its facts. */
export function productMeta(product: Product): MetaItem[] {
  const items: MetaItem[] = [
    { label: 'Status', value: productStatusLabel(product.status) },
    { label: 'Type', value: product.kind === 'library' ? 'Library' : 'App' },
  ]
  if (product.platforms?.length) {
    items.push({ label: 'Platforms', value: product.platforms.join(' / ') })
  }
  for (const [i, fact] of (product.facts ?? []).entries()) {
    items.push({ label: i === 0 ? 'Notes' : '', value: fact })
  }
  return items
}
