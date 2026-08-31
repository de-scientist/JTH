// Home page - JTH Graphix Production - concise, premium, conversion-focused
import type { Metadata } from 'next'
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

export const metadata: Metadata = {
  title: 'JTH Graphix Production | Creative & Technology Partner in Kenya',
  description:
    'JTH Graphix Production — Kenya\'s creative & technology partner. We help businesses grow through Branding, Web & Software Development, Digital Marketing, Business Automation and Creative Solutions. Quality is our Priority.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'JTH Graphix Production | Creative & Technology Partner in Kenya',
    description:
      'Transforming businesses through technology, creativity & innovation — Branding, Software, Web Development, Digital Marketing & Business Automation in Kenya.',
    url: '/',
    type: 'website',
  },
}

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
