import portfolio from '@/data/portfolio.json'
import services from '@/data/services.json'

export interface Metric {
  value: number
  prefix?: string
  suffix?: string
  label: string
  description: string
}

const projectCount = portfolio.length
const serviceCount = services.length
const categoryCount = Array.from(new Set(portfolio.map((p) => p.category))).length

// Single source of truth for the homepage Proof-of-Work / statistics section.
// Values are intentionally conservative and derived from verified repository data:
//  - Projects: 24 portfolio records -> rounded to a safe "20+"
//  - Brands: approved baseline (no client list is invented)
//  - Services: 21 service offerings -> rounded to "20+"
//  - Creative Categories: 5 distinct portfolio categories
export const proofMetrics: Metric[] = [
  {
    value: projectCount >= 20 ? 20 : projectCount,
    suffix: '+',
    label: 'Projects',
    description:
      'Creative and digital work delivered across branding, campaigns, print and digital experiences.',
  },
  {
    value: 10,
    suffix: '+',
    label: 'Brands',
    description:
      'Businesses, organizations and individuals supported through visual identity and digital communication.',
  },
  {
    value: serviceCount >= 20 ? 20 : serviceCount,
    suffix: '+',
    label: 'Services',
    description:
      'From brand identity and graphic design to web development and digital marketing.',
  },
  {
    value: categoryCount >= 5 ? 5 : categoryCount,
    suffix: '+',
    label: 'Creative Categories',
    description:
      'Brand identity, graphic design, print, social media and web development.',
  },
]
