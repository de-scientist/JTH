import type { Metadata } from 'next'
import { AboutContent } from '@/components/about/about-content'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about JTH Graphix Production - a modern creative brand dedicated to helping businesses communicate with clarity, confidence, and excellence through bold visual solutions.',
}

export default function AboutPage() {
  return <AboutContent />
}
