import type { Metadata } from 'next'
import { PortfolioGallery } from '@/components/portfolio/portfolio-gallery'
import { PageHero } from '@/components/page-hero'

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Explore our portfolio of creative work including branding, flyer design, poster design, logo design, social media graphics, and more.',
}

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        badge="Our Portfolio"
        title="Creative Work That Inspires"
        highlightedWord="Inspires"
        description="Browse our collection of branding, design, and visual communication projects that have helped businesses succeed."
        imageSrc="/images/portfolio/tech-startup-branding.jpg"
        imageAlt="JTH Graphix Production portfolio — creative branding, design, and visual communication projects"
      />

      <PortfolioGallery />
    </>
  )
}
