import { SITE } from '~/constants/site'

export interface PageSeo {
  title: string
  description: string
  /** Absolute or root-relative image path. Defaults to the site card. */
  image?: string
  type?: 'website' | 'article'
  /** Use the title as-is, without the "· taohq" suffix (home page). */
  bareTitle?: boolean
  /** schema.org page type, so search engines know what kind of page this is. */
  schemaType?: 'WebPage' | 'AboutPage' | 'ContactPage' | 'CollectionPage'
}

/** One call per page sets title, description and social cards consistently. */
export function usePageSeo(input: MaybeRefOrGetter<PageSeo>) {
  const seo = computed(() => toValue(input))
  const image = computed(() => {
    const src = seo.value.image ?? SITE.ogImage
    return src.startsWith('http') ? src : `${SITE.url}${src}`
  })

  if (seo.value.bareTitle) {
    useHead({ titleTemplate: '%s' })
  }

  if (seo.value.schemaType) {
    useSchemaOrg([defineWebPage({ '@type': seo.value.schemaType })])
  }

  useSeoMeta({
    title: () => seo.value.title,
    description: () => seo.value.description,
    ogTitle: () => seo.value.title,
    ogDescription: () => seo.value.description,
    ogType: () => seo.value.type ?? 'website',
    ogImage: () => image.value,
    ogImageAlt: `${SITE.name}: ${SITE.tagline}`,
    twitterCard: 'summary_large_image',
    twitterImage: () => image.value,
  })
}
