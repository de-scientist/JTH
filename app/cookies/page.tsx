import type { Metadata } from 'next'
import { LegalContent, type LegalPageData } from '@/components/legal/legal-layout'
import { siteConfig } from '@/lib/site-config'

const title = 'Cookie Policy'
const description =
  'Learn how JTH Graphix Production uses cookies on our website, the types of cookies we set, and how you can manage your cookie preferences.'

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: '/cookies',
  },
  keywords: [
    'cookie policy',
    'cookies',
    'analytics cookies',
    'cookie preferences',
    'JTH Graphix Production cookies',
    'browser cookie settings',
  ],
  openGraph: {
    title: `${title} | ${siteConfig.brandName}`,
    description,
    type: 'website',
    url: '/cookies',
    siteName: siteConfig.brandName,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${title} | ${siteConfig.brandName}`,
    description,
  },
}

const data: LegalPageData = {
  slug: 'cookies',
  badge: 'Legal',
  title: 'Cookie',
  titleAccent: 'Policy',
  description:
    'This Cookie Policy explains what cookies are, how JTH Graphix Production uses them on our website, and how you can manage your cookie preferences. It works together with our Privacy Policy to give you full control over your data.',
  lastUpdated: 'August 1, 2026',
  sections: [
    {
      id: 'what-are-cookies',
      title: 'What Are Cookies?',
      paragraphs: [
        'Cookies are small text files that websites place on your device (computer, tablet, or phone) when you visit. They allow a website to recognize your device, remember your preferences, and gather information about how the site is used.',
        'Cookies can be "session" cookies, which are deleted when you close your browser, or "persistent" cookies, which remain on your device for a set period or until you delete them.',
        'Cookies are widely used to make websites work efficiently and to provide useful information to website owners.',
      ],
    },
    {
      id: 'types-of-cookies',
      title: 'Types of Cookies',
      paragraphs: [
        'The cookies we use can be grouped into three main categories, based on their purpose and how long they remain on your device.',
      ],
      bullets: [
        'Essential cookies — required for the website to function correctly.',
        'Analytics cookies — help us understand how visitors use the website.',
        'Marketing cookies — used to deliver relevant content and measure campaigns, only where you have consented.',
      ],
    },
    {
      id: 'essential-cookies',
      title: 'Essential Cookies',
      paragraphs: [
        'Essential cookies are necessary for the core functionality of our website. They enable basic features such as page navigation, secure areas, and remembering your theme preference (light or dark mode).',
        'These cookies do not collect information that identifies you personally and cannot be switched off in our systems. However, your browser may allow you to block them, which may affect how the website works.',
        'Without essential cookies, some parts of the website may not function correctly.',
      ],
    },
    {
      id: 'analytics-cookies',
      title: 'Analytics Cookies',
      paragraphs: [
        'We use analytics cookies to collect anonymized information about how visitors use our website, such as which pages are visited most, how long visitors stay, and how they arrived at the site.',
        'This data helps us understand what content is useful, identify and fix issues, and improve the overall experience. Analytics data is aggregated and does not identify you personally.',
        'Analytics providers we use include Vercel Analytics, which processes this information in accordance with its own privacy policy.',
      ],
    },
    {
      id: 'marketing-cookies',
      title: 'Marketing Cookies',
      paragraphs: [
        'Marketing cookies are used to track visitors across websites, allowing us to show more relevant content and measure the effectiveness of our marketing campaigns.',
        'We only use marketing cookies where you have given your consent. If you do not consent, no marketing cookies will be placed on your device.',
        'These cookies may be set by our advertising and social media partners, including platforms such as Facebook, Instagram, and TikTok.',
      ],
    },
    {
      id: 'managing-cookies',
      title: 'Managing Cookies',
      paragraphs: [
        'You can control and manage cookies in several ways. When you first visit our website, a cookie banner allows you to accept or decline non-essential cookies.',
        'You can change your cookie preferences at any time through your browser settings, or by clearing the cookies already stored on your device.',
        'Please note that disabling certain cookies may affect the functionality and performance of the website.',
      ],
    },
    {
      id: 'browser-settings',
      title: 'Browser Settings',
      paragraphs: [
        'Most web browsers allow you to control cookies through their settings. You can typically block all cookies, block third-party cookies, or delete cookies when you close your browser.',
        'Each browser is different, so please refer to your browser\u2019s help menu for instructions. You can also visit websites such as www.aboutcookies.org for general guidance on managing cookies.',
        'You can manage cookie settings directly in your preferred browser: Google Chrome, Mozilla Firefox, Apple Safari, or Microsoft Edge.',
      ],
    },
    {
      id: 'third-party-cookies',
      title: 'Third-Party Cookies',
      paragraphs: [
        'Some cookies on our website are placed by third-party services we use, such as analytics providers and social media platforms. These third parties may use cookies for their own purposes, subject to their privacy policies.',
        'We do not control third-party cookies. Please review the privacy and cookie policies of these providers for more information about how they use data.',
        'If you prefer to prevent third-party cookies, use your browser settings to block them, or decline non-essential cookies through our cookie banner.',
      ],
    },
    {
      id: 'updates',
      title: 'Updates',
      paragraphs: [
        'We may update this Cookie Policy from time to time to reflect changes in the cookies we use or updates to legal or regulatory requirements. Any changes will be posted on this page with an updated "Last Updated" date.',
        'We encourage you to review this policy periodically. If we make significant changes, we will take reasonable steps to notify you, including by updating the date at the top of this page.',
      ],
    },
  ],
  faqs: [
    {
      question: 'How do I disable cookies?',
      answer:
        'You can disable non-essential cookies through the cookie banner shown when you first visit our website, or through your browser settings at any time. Essential cookies cannot be disabled without affecting how the website functions.',
    },
    {
      question: 'What cookies does this website use?',
      answer:
        'We use essential cookies (needed for core functionality, such as remembering your theme preference), analytics cookies (to understand site usage, e.g., via Vercel Analytics), and marketing cookies (only with your consent).',
    },
    {
      question: 'Do you use third-party cookies?',
      answer:
        'Yes. Some cookies are set by trusted third parties, including our analytics provider and social media platforms we link to. These are subject to each provider\u2019s own privacy and cookie policies.',
    },
    {
      question: 'Will disabling cookies break the website?',
      answer:
        'Essential cookies are needed for the site to function, so disabling them entirely may affect performance. Disabling only analytics and marketing cookies will not break the website and will protect your privacy.',
    },
    {
      question: 'Do you track my browsing across other websites?',
      answer:
        'We do not build cross-site profiles of visitors. Analytics data is anonymized and aggregate, and marketing cookies are only used where you have explicitly consented.',
    },
  ],
}

export default function CookiesPage() {
  return <LegalContent data={data} />
}
