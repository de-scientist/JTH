// Home page - JTH Graphix Production
import { HeroSection } from '@/components/home/hero-section'
import { TrustedBySection } from '@/components/home/trusted-by-section'
import { SolutionsOverview } from '@/components/home/solutions-overview'
import { SelectedWork } from '@/components/home/selected-work'
import { WhyChooseUs } from '@/components/home/why-choose-us'
import { ProcessSection } from '@/components/home/process-section'
import { ClientProof } from '@/components/home/client-proof'
import { BlogSection } from '@/components/home/blog-section'
import { CTASection } from '@/components/home/cta-section'
import Script from 'next/script'
import faqsData from '@/data/faq.json'

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqsData.slice(0, 5).map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
}

export default function HomePage() {
  return (
    <>
      <Script
        type="application/ld+json"
        id="faq-jsonld"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <HeroSection />
      <TrustedBySection />
      <SolutionsOverview />
      <SelectedWork />
      <WhyChooseUs />
      <ProcessSection />
      <ClientProof />
      <BlogSection />
      <CTASection />
    </>
  )
}
