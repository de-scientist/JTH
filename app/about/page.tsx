import type { Metadata } from 'next'
import { AboutContent } from '@/components/about/about-content'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'JTH Graphix Production is your creative and technology partner — combining branding, graphic design, UI/UX, web and software development, automation and digital growth to help businesses grow.',
}

export default function AboutPage() {
  return <AboutContent />
}
