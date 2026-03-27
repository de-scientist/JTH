import type { Metadata } from 'next'
import { ContactContent } from '@/components/contact/contact-content'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with JTH Graphix Production. Start your design project today. Call, WhatsApp, or send us a message.',
}

export default function ContactPage() {
  return <ContactContent />
}
