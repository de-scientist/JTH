export type LegalSectionData = {
  id: string
  title: string
  paragraphs: string[]
  bullets?: string[]
}

export type LegalFaqData = {
  question: string
  answer: string
}

export type LegalPageData = {
  slug: string
  badge: string
  title: string
  titleAccent: string
  description: string
  lastUpdated: string
  sections: LegalSectionData[]
  faqs: LegalFaqData[]
}
