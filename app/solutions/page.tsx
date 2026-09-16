import type { Metadata } from 'next'
import { SolutionsContent } from '@/components/solutions/solutions-content'
import { siteConfig } from '@/lib/site-config'

export const metadata: Metadata = {
  title: 'Solutions | JTH Graphix Production LTD',
  description:
    'JTH Graphix Production LTD solves branding, digital presence, marketing, communication, and technology challenges with creative, practical solutions — backed by real portfolio work.',
  alternates: {
    canonical: '/solutions',
  },
  openGraph: {
    title: 'Solutions | JTH Graphix Production LTD',
    description:
      'From weak brand identity to low online visibility, explore how JTH combines technology, creativity, and innovation to solve real business challenges.',
    url: `${siteConfig.domain}/solutions`,
    type: 'website',
  },
}

export default function SolutionsPage() {
  return <SolutionsContent />
}
