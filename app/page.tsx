// Home page - JTH Graphix Production
import { HeroSection } from '@/components/home/hero-section'
import { StatsSection } from '@/components/home/stats-section'
import { ServicesPreview } from '@/components/home/services-preview'
import { AboutSection } from '@/components/home/about-section'
import { PortfolioPreview } from '@/components/home/portfolio-preview'
import { TestimonialsSection } from '@/components/home/testimonials-section'
import { ProcessSection } from '@/components/home/process-section'
import { BlogSection } from '@/components/home/blog-section'
import { CTASection } from '@/components/home/cta-section'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <ServicesPreview />
      <AboutSection />
      <PortfolioPreview />
      <TestimonialsSection />
      <ProcessSection />
      <BlogSection />
      <CTASection />
    </>
  )
}
