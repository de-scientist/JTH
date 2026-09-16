import type { Metadata } from 'next'
import { AboutContent } from '@/components/about/about-content'

export const metadata: Metadata = {
  title: 'About Us | JTH Graphix Production LTD',
  description: 'JTH Graphix Production LTD is your creative and technology partner — combining branding, graphic design, UI/UX, web and software development, automation and digital growth to help businesses grow.',
  alternates: { canonical: '/about' },
}

export default function AboutPage() {
  return <AboutContent />
}
