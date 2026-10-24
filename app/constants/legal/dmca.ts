/**
 * Copyright / DMCA policy rendered at /dmca.
 * The notice and counter-notice elements mirror 17 U.S.C. § 512(c)(3) and
 * § 512(g)(3) so a valid submission contains everything we need to act.
 */

import type { LegalDocument, LegalLink, LegalSection } from '~/types/legal'
import { list, paragraph as p } from './blocks'
import { SITE } from '~/constants/site'
import { mailtoHref } from '~/utils/mailto'

const DMCA_EMAIL: LegalLink = { label: SITE.email, href: mailtoHref('DMCA Notice') }
const COUNTER_EMAIL: LegalLink = { label: SITE.email, href: mailtoHref('DMCA Counter-Notice') }

const TERMS: LegalLink = { label: 'Terms of Use', href: '/legal' }

const SECTIONS: LegalSection[] = [
  {
    id: 'overview',
    title: 'Overview',
    blocks: [
      p('taohq respects the intellectual property of others and expects the same from everyone who uses taohq.org and our products (the "Services"). taohq is operated by TheAlphaOnes. This page explains how to report content you believe infringes your copyright, and how to respond if your content was removed.'),
      p('This policy follows the U.S. Digital Millennium Copyright Act (DMCA). We also act on equivalent notices under other laws, including the Indian Copyright Act, 1957 and the Information Technology Act, 2000.'),
    ],
  },
  {
    id: 'reporting',
    title: 'Reporting Infringement',
    blocks: [
      p('If you believe material on the Services infringes a copyright you own or are authorised to act for, send a written notice that includes:'),
      list(
        ['your physical or electronic signature;'],
        ['a description of the copyrighted work you believe was infringed (or, for multiple works, a representative list);'],
        ['the exact location of the infringing material, such as its URL, so we can find it;'],
        ['your name, postal address, telephone number and email address;'],
        ['a statement that you have a good-faith belief that the use is not authorised by the copyright owner, its agent, or the law;'],
        ['a statement that the information in your notice is accurate and, under penalty of perjury, that you are the owner or are authorised to act on the owner\'s behalf.'],
      ),
      p('Notices missing these elements may not be actionable. We may share your notice, including your contact details, with the person who posted the material.'),
    ],
  },
  {
    id: 'where-to-send',
    title: 'Where to Send Notices',
    blocks: [
      p('Email notices to ', DMCA_EMAIL, ' with the subject line "DMCA Notice". Email is the fastest way to reach us; we aim to acknowledge valid notices within a few business days.'),
    ],
  },
  {
    id: 'what-happens',
    title: 'What Happens Next',
    blocks: [
      p('When we receive a complete notice, we will review it and, where appropriate, remove or disable access to the material and make a reasonable effort to let the person who posted it know.'),
    ],
  },
  {
    id: 'counter-notice',
    title: 'Counter-Notices',
    blocks: [
      p('If your material was removed and you believe that happened by mistake or misidentification, you can send a counter-notice to ', COUNTER_EMAIL, ' that includes:'),
      list(
        ['your physical or electronic signature;'],
        ['a description of the material that was removed and where it appeared before removal;'],
        ['a statement, under penalty of perjury, that you have a good-faith belief the material was removed as a result of mistake or misidentification;'],
        ['your name, address and telephone number, and a statement that you consent to the jurisdiction of the courts for your address (or, if you are outside the United States, any judicial district in which taohq may be found), and that you will accept service of process from the person who sent the original notice.'],
      ),
      p('We will forward a complete counter-notice to the original complainant. Unless they tell us within 10 business days that they have filed a court action, we may restore the material within 10 to 14 business days.'),
    ],
  },
  {
    id: 'repeat-infringers',
    title: 'Repeat Infringers',
    blocks: [
      p('We may suspend or terminate access to the Services for anyone who repeatedly infringes copyright, as described in our ', TERMS, '.'),
    ],
  },
  {
    id: 'misrepresentation',
    title: 'False Claims',
    blocks: [
      p('Knowingly misrepresenting that material is infringing, or that it was removed by mistake, can make you liable for damages, including costs and attorneys\' fees. If you are unsure whether something infringes your rights, consider seeking legal advice before sending a notice.'),
    ],
  },
  {
    id: 'changes',
    title: 'Changes',
    blocks: [
      p('We may update this policy from time to time. When we do, we will update the date at the top of this page.'),
    ],
  },
]

export const DMCA_POLICY: LegalDocument = {
  title: 'DMCA & Copyright',
  summary: 'How to report copyright infringement on taohq.org and our products, and how to respond if your content was removed.',
  lastUpdated: '24 October 2026',
  lastUpdatedIso: '2026-10-24',
  sections: SECTIONS,
}
