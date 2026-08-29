import type { Metadata } from 'next'
import { SolutionsContent } from '@/components/solutions/solutions-content'

export const metadata: Metadata = {
  title: 'Solutions',
  description:
    'JTH Graphix Production solves branding, digital presence, marketing, communication, and technology challenges with creative, practical solutions — backed by real portfolio work.',
  alternates: {
    canonical: '/solutions',
  },
  openGraph: {
    title: 'Solutions — JTH Graphix Production',
    description:
      'From weak brand identity to low online visibility, explore how JTH combines technology, creativity, and innovation to solve real business challenges.',
    url: '/solutions',
    type: 'website',
  },
}

export default function SolutionsPage() {
  return <SolutionsContent />
}
