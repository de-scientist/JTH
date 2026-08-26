import {
  Lightbulb,
  GraduationCap,
  Handshake,
  Building2,
} from 'lucide-react'

export const companyProfile = {
  name: 'JTH Graphix Production',
  legalName: 'JTH Graphix Production Ltd.',
  positioning: 'Your Creative & Technology Partner.',
  tagline: 'Quality is our Priority.',
  founded: '2021',
  operationsStarted: '2023',
  clientExpansion: '2024',
  registered: '2026',
} as const

export type JourneyMilestone = {
  year: string
  title: string
  description: string
  icon: typeof Lightbulb
  current?: boolean
}

// Verified company history. Used as the single source of truth for the
// milestone / journey timeline and any journey-based statistics across the site.
export const companyJourney: JourneyMilestone[] = [
  {
    year: '2021',
    title: 'JTH Was Born',
    description:
      'The founding directors came together with a shared vision to build a creative company that would transform ideas into impactful visual and digital solutions.',
    icon: Lightbulb,
  },
  {
    year: '2023',
    title: 'Operations & Training Began',
    description:
      'JTH began its operations and expanded its impact through practical graphics design training, including sessions for students at Murang’a University of Technology Christian Union (CU).',
    icon: GraduationCap,
  },
  {
    year: '2024',
    title: 'Client Services Expanded',
    description:
      'JTH expanded beyond training and began actively serving clients, delivering professional creative solutions and building relationships across different business and organizational sectors.',
    icon: Handshake,
  },
  {
    year: '2026',
    title: 'Registered & Growing',
    description:
      'JTH Graphix Production became a registered Private Limited Company, marking a major step in its formal growth while continuing to expand its creative, digital and technology capabilities.',
    icon: Building2,
    current: true,
  },
]
