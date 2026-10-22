/**
 * Single source of truth for the privacy policy rendered at /privacy.
 *
 * Desktop and mobile views both render from this file so the legal text can
 * never drift between breakpoints. The Google-specific disclosures (section
 * 02) exist to satisfy Google OAuth branding verification:
 * https://support.google.com/cloud/answer/13806988
 *
 * When the OAuth scopes requested by any product change, update section 02
 * and bump PRIVACY_POLICY_META.lastUpdated.
 */

export interface PolicyLink {
  label: string
  href: string
}

/** Inline text: plain strings interleaved with links. */
export type PolicyInline = string | PolicyLink

export type PolicyBlock =
  | { kind: 'paragraph', content: PolicyInline[] }
  | { kind: 'list', items: PolicyInline[][] }

export interface PolicySection {
  id: string
  title: string
  blocks: PolicyBlock[]
}

const GOOGLE_USER_DATA_POLICY: PolicyLink = {
  label: 'Google API Services User Data Policy',
  href: 'https://developers.google.com/terms/api-services-user-data-policy',
}

const GOOGLE_PERMISSIONS: PolicyLink = {
  label: 'myaccount.google.com/permissions',
  href: 'https://myaccount.google.com/permissions',
}

const PRIVACY_EMAIL: PolicyLink = {
  label: 'support@taohq.org',
  href: 'mailto:support@taohq.org?subject=Privacy%20Request',
}

export const PRIVACY_POLICY_META = {
  documentId: 'PRV-001',
  lastUpdated: '22 October 2026',
  lastUpdatedIso: '2026-10-22',
} as const

const p = (...content: PolicyInline[]): PolicyBlock => ({ kind: 'paragraph', content })
const list = (...items: PolicyInline[][]): PolicyBlock => ({ kind: 'list', items })

export const PRIVACY_POLICY_SECTIONS: PolicySection[] = [
  {
    id: 'overview',
    title: 'Overview',
    blocks: [
      p('This Privacy Policy explains how TheAlphaOnes ("TheAlphaOnes", "we", "us") collects, uses, stores, shares, and deletes information when you use the website at taohq.org and the applications we operate under it, including taohq.org sign-in, Bubbles.space, Bubbles.mail, and TAO-Identity (together, the "Services").'),
      p('"taohq.org" is the application name shown on the Google sign-in consent screen. This policy applies to that application and to every Service that uses it.'),
      p('By using the Services you agree to the practices described here. If you do not agree, please do not use the Services.'),
    ],
  },
  {
    id: 'information-we-collect',
    title: 'Information We Collect',
    blocks: [
      p('We collect only the information needed to provide and secure the Services:'),
      list(
        ['Account information: your name, email address, and profile picture, received from Google when you choose "Sign in with Google".'],
        ['Content you provide: messages you send us by email, and data you create inside a Service (for example notes or workspace content).'],
        ['Google user data you explicitly authorise: for example, Gmail message data if you connect a Gmail account to Bubbles.mail. See section 02.'],
        ['Technical data: IP address, browser type, device type, pages visited, and error logs, collected automatically to operate, secure, and debug the Services.'],
      ),
      p('We do not collect payment card details, government identifiers, or precise location.'),
    ],
  },
  {
    id: 'google-user-data',
    title: 'Google User Data',
    blocks: [
      p('When you sign in with Google or connect a Google account, you see a Google consent screen listing exactly what we request. We only access the data you approve there.'),
      p('Data we access:'),
      list(
        ['Basic profile (scopes: openid, email, profile): your Google account ID, name, email address, and profile picture. Used only to create your account, sign you in, and display your name and picture inside the Services.'],
        ['Gmail data (only if you connect Gmail to Bubbles.mail): message headers, content, and labels of the account you connect. Used only to provide the features you see in Bubbles.mail, such as summarising your inbox, prioritising messages, and helping you reply or organise mail.'],
      ),
      p('How we use it: Google user data is used only to provide and improve the user-facing features of the Service you are using. We do not use it for advertising, we do not sell it, and we do not use it to determine credit-worthiness or for lending purposes.'),
      p('Human access: our staff do not read your Google user data unless you give us explicit permission for a specific message (for example, in a support request), it is necessary for security purposes such as investigating abuse, or it is required to comply with applicable law.'),
      p('Artificial intelligence: some features process your data with AI models in order to produce results shown to you. We do not use Google user data to develop, improve, or train generalised or non-personalised AI or machine learning models, and our AI providers are contractually prohibited from doing so.'),
      p('Sharing: we transfer Google user data to third parties only as needed to provide the Services (see section 04), to comply with law, or as part of a merger or acquisition with your prior consent.'),
      p('Limited Use: the use and transfer of information received from Google APIs by taohq.org to any other app will adhere to the ', GOOGLE_USER_DATA_POLICY, ', including the Limited Use requirements.'),
    ],
  },
  {
    id: 'how-we-use-information',
    title: 'How We Use Information',
    blocks: [
      list(
        ['To create and manage your account and authenticate you.'],
        ['To provide, maintain, and improve the features you use.'],
        ['To keep the Services secure, prevent fraud and abuse, and debug errors.'],
        ['To respond to your support requests and send essential service messages (we do not send marketing email without your consent).'],
        ['To comply with legal obligations.'],
      ),
    ],
  },
  {
    id: 'sharing',
    title: 'Sharing and Disclosure',
    blocks: [
      p('We do not sell, rent, or trade your personal information. We share it only with service providers that process data on our behalf, under contracts that limit their use to providing their service to us:'),
      list(
        ['Vercel: website hosting and privacy-friendly, cookieless page analytics.'],
        ['Cloudflare: network delivery, security, and authentication infrastructure.'],
        ['Database and cloud storage providers: storing account data and data you create in the Services.'],
        ['AI model providers: processing content solely to produce results you request, with model training disabled.'],
      ),
      p('We may also disclose information if required by law, to protect the rights, safety, or property of our users or the public, or in connection with a merger or acquisition, in which case this policy will continue to apply to your data.'),
    ],
  },
  {
    id: 'storage-and-security',
    title: 'Storage and Security',
    blocks: [
      p('Data is stored on infrastructure operated by the providers listed above and may be processed in countries other than your own, including India and the United States.'),
      list(
        ['All data is encrypted in transit using TLS (HTTPS).'],
        ['Data and OAuth tokens are encrypted at rest.'],
        ['Access to production systems is restricted to authorised personnel and protected by multi-factor authentication.'],
      ),
      p('No system is perfectly secure, but we take reasonable technical and organisational measures to protect your information and will notify affected users of a breach as required by law.'),
    ],
  },
  {
    id: 'retention-and-deletion',
    title: 'Retention and Deletion',
    blocks: [
      p('We keep your information only for as long as your account is active or as needed to provide the Services. Server logs are deleted automatically within 30 days.'),
      p('You can delete your data at any time:'),
      list(
        ['Email ', PRIVACY_EMAIL, ' from the address linked to your account and ask us to delete it. We will delete your account and associated data, including any Google user data, within 30 days and confirm by email.'],
        ['Revoke our access to your Google account at any time at ', GOOGLE_PERMISSIONS, '. Once revoked, we stop accessing your Google data and delete stored Google tokens.'],
      ),
      p('We may retain limited records where the law requires it, for example to resolve disputes or meet legal obligations.'),
    ],
  },
  {
    id: 'your-rights',
    title: 'Your Rights',
    blocks: [
      p('Depending on where you live (including under the GDPR, UK GDPR, the California Consumer Privacy Act, and India\'s Digital Personal Data Protection Act 2023), you may have the right to access, correct, delete, or export your personal data, to withdraw consent, and to object to or restrict certain processing.'),
      p('To exercise any of these rights, email ', PRIVACY_EMAIL, '. We respond within 30 days. You may also lodge a complaint with your local data protection authority.'),
    ],
  },
  {
    id: 'cookies',
    title: 'Cookies and Analytics',
    blocks: [
      p('We use only the cookies and local storage required for sign-in sessions and to remember your preferences. Our website analytics (Vercel Web Analytics) do not use cookies and do not track you across other websites. Our website loads fonts from Google Fonts, which receives your IP address when fonts are requested.'),
    ],
  },
  {
    id: 'children',
    title: 'Children',
    blocks: [
      p('The Services are not directed to children under 13 (or the minimum age of digital consent in your country). We do not knowingly collect personal information from children. If you believe a child has provided us data, contact us and we will delete it.'),
    ],
  },
  {
    id: 'changes',
    title: 'Changes to This Policy',
    blocks: [
      p('We may update this policy from time to time. We will post the updated version on this page and change the "Last updated" date. If changes are material, we will notify signed-in users by email or within the Services before they take effect.'),
    ],
  },
  {
    id: 'contact',
    title: 'Contact',
    blocks: [
      p('TheAlphaOnes, India. For any privacy question or request, email ', PRIVACY_EMAIL, '.'),
    ],
  },
]
