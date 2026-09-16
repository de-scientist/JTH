import type { Metadata } from 'next'
import { siteConfig } from '@/lib/site-config'
import { ContactContent } from '@/components/contact/contact-content'

export const metadata: Metadata = {
  title: 'Contact Us | JTH Graphix Production LTD',
  description:
    'Get in touch with JTH Graphix Production LTD. Start your design project today. Call, WhatsApp, or send us a message.',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact Us | JTH Graphix Production LTD',
    description:
      'Get in touch with JTH Graphix Production LTD. Start your design project today. Call, WhatsApp, or send us a message.',
    type: 'website',
    url: `${siteConfig.domain}/contact`,
    siteName: siteConfig.brandName,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us | JTH Graphix Production LTD',
    description:
      'Get in touch with JTH Graphix Production LTD. Start your design project today.',
  },
}

export default function ContactPage() {
  return <ContactContent />
}
