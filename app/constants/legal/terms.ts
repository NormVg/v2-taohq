/**
 * Terms of use rendered at /legal. Plain-language terms for the website and
 * products; product-specific terms, if any, live with each product.
 */

import type { LegalDocument, LegalLink, LegalSection } from '~/types/legal'
import { list, paragraph as p } from './blocks'

const CONTACT_EMAIL: LegalLink = {
  label: 'hello@taohq.org',
  href: 'mailto:hello@taohq.org?subject=Terms%20of%20Use',
}

const PRIVACY: LegalLink = { label: 'Privacy Policy', href: '/privacy' }

const SECTIONS: LegalSection[] = [
  {
    id: 'agreement',
    title: 'Agreement',
    blocks: [
      p('These terms apply to taohq.org and the products and services we operate under it (together, the "Services"). taohq is operated by TheAlphaOnes ("we", "us"). By using the Services you agree to these terms. If you do not agree, please do not use them.'),
    ],
  },
  {
    id: 'using-the-services',
    title: 'Using the Services',
    blocks: [
      p('You may use the Services for lawful purposes. You agree not to:'),
      list(
        ['break, overload or try to gain unauthorised access to the Services or the systems behind them;'],
        ['use the Services to harm, harass or deceive other people;'],
        ['copy or resell the Services, except where a licence explicitly allows it.'],
      ),
      p('We may suspend access for anyone who breaks these terms.'),
    ],
  },
  {
    id: 'your-content',
    title: 'Your Content',
    blocks: [
      p('What you create or store with our products stays yours. You give us only the permissions needed to run the product for you, such as storing and displaying your content back to you. How we handle personal data is described in our ', PRIVACY, '.'),
    ],
  },
  {
    id: 'our-content',
    title: 'Our Content and Open Source',
    blocks: [
      p('The taohq name, marks, artwork and site content belong to us. Our open-source projects are licensed under the licence published in each project\'s repository, and that licence governs your use of that code.'),
    ],
  },
  {
    id: 'third-parties',
    title: 'Third-Party Services',
    blocks: [
      p('The Services may link to or rely on services run by others, such as Google sign-in, GitHub or npm. Their own terms and policies apply to your use of them.'),
    ],
  },
  {
    id: 'disclaimers',
    title: 'Disclaimers',
    blocks: [
      p('We build carefully, but the Services are provided "as is" and "as available". Products marked as in development or on a waitlist may change, pause or be discontinued.'),
    ],
  },
  {
    id: 'liability',
    title: 'Limitation of Liability',
    blocks: [
      p('To the extent permitted by law, we are not liable for indirect or consequential losses arising from your use of the Services. Nothing in these terms limits liability that cannot be limited by law.'),
    ],
  },
  {
    id: 'changes',
    title: 'Changes',
    blocks: [
      p('We may update these terms as the Services change. When we do, we will update the date at the top of this page. Continuing to use the Services after a change means you accept the updated terms.'),
    ],
  },
  {
    id: 'law',
    title: 'Governing Law',
    blocks: [
      p('These terms are governed by the laws of India.'),
    ],
  },
  {
    id: 'contact',
    title: 'Contact',
    blocks: [
      p('Questions about these terms? Email ', CONTACT_EMAIL, '.'),
    ],
  },
]

export const TERMS_OF_USE: LegalDocument = {
  title: 'Terms of Use',
  summary: 'The plain-language terms for using taohq.org and our products.',
  lastUpdated: '24 October 2026',
  lastUpdatedIso: '2026-10-24',
  sections: SECTIONS,
}
