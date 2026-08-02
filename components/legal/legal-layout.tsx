'use client'

import { LegalHero } from '@/components/legal/legal-hero'
import { TableOfContents } from '@/components/legal/table-of-contents'
import { LegalSection } from '@/components/legal/legal-section'
import { LegalFaq } from '@/components/legal/legal-faq'
import { LegalCta } from '@/components/legal/legal-cta'
import type { LegalPageData } from '@/components/legal/types'

export type { LegalPageData, LegalSectionData, LegalFaqData } from '@/components/legal/types'

export function LegalContent({ data }: { data: LegalPageData }) {
  const tocItems = data.sections.map(({ id, title }) => ({ id, title }))

  return (
    <>
      <LegalHero data={data} />

      <section className="py-16 lg:py-24 bg-muted/30 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-3">
              <TableOfContents items={tocItems} label={data.title} />
            </div>
            <div className="lg:col-span-9 space-y-8">
              {data.sections.map((section, index) => (
                <LegalSection key={section.id} index={index + 1} {...section} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <LegalFaq faqs={data.faqs} />

      <LegalCta />
    </>
  )
}
