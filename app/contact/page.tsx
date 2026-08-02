import type { Metadata } from 'next'
import { siteConfig } from '@/lib/site-config'
import { ContactContent } from '@/components/contact/contact-content'

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with JTH Graphix Production. Start your design project today. Call, WhatsApp, or send us a message.',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact Us | JTH Graphix Production',
    description:
      'Get in touch with JTH Graphix Production. Start your design project today. Call, WhatsApp, or send us a message.',
    type: 'website',
    url: '/contact',
    siteName: siteConfig.brandName,
  },
}

export default function ContactPage() {
  return <ContactContent />
}
