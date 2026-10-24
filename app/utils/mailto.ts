import { SITE } from '~/constants/site'

/** mailto: link to the taohq inbox, optionally with a pre-filled subject. */
export function mailtoHref(subject?: string): string {
  return subject ? `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}` : `mailto:${SITE.email}`
}
