import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { ServicesGrid } from '@/components/services/services-grid'
import { ServicesCTA } from '@/components/services/services-cta'
import { ProcessSteps } from '@/components/services/process-steps'

export const metadata: Metadata = {
  title: 'Services',
  description: 'Explore our comprehensive range of creative services including flyer design, logo design, branding, social media graphics, premium printing, and website design.',
}

export default function ServicesPage() {
  return (
    <>
      <PageHero
        badge="Our Services"
        title="Quality is our Priority for Your Brand"
        highlightedWord="Your Brand"
        description="From eye-catching flyers to complete brand identities, software development, and digital marketing — we deliver premium solutions that help your business stand out and succeed."
        imageSrc="/images/services/branding.jpg"
        imageAlt="JTH Graphix Production creative services — design, branding, web development, and digital marketing"
      />

      <ServicesGrid />
      <ProcessSteps />
      <ServicesCTA />
    </>
  )
}
