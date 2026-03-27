// Home page - JTH Graphix Production
import { HeroSection } from '@/components/home/hero-section'
import { ServicesPreview } from '@/components/home/services-preview'
import { WhyChooseUs } from '@/components/home/why-choose-us'
import { PortfolioPreview } from '@/components/home/portfolio-preview'
import { StatsSection } from '@/components/home/stats-section'
import { TestimonialsSection } from '@/components/home/testimonials-section'
import { CTASection } from '@/components/home/cta-section'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesPreview />
      <WhyChooseUs />
      <PortfolioPreview />
      <StatsSection />
      <TestimonialsSection />
      <CTASection />
    </>
  )
}
