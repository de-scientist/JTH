// Home page - JTH Graphix Production
import { HeroSection } from '@/components/home/hero-section'
import { TrustedBySection } from '@/components/home/trusted-by-section'
import { SolutionsSection } from '@/components/home/solutions-section'
import { StatsSection } from '@/components/home/stats-section'
import { ServicesPreview } from '@/components/home/services-preview'
import { WhyChooseUs } from '@/components/home/why-choose-us'
import { AboutSection } from '@/components/home/about-section'
import { PortfolioPreview } from '@/components/home/portfolio-preview'
import { PartnersSection } from '@/components/home/partners-section'
import { TestimonialsSection } from '@/components/home/testimonials-section'
import { ProcessSection } from '@/components/home/process-section'
import { BlogSection } from '@/components/home/blog-section'
import { FAQSection } from '@/components/home/faq-section'
import { CTASection } from '@/components/home/cta-section'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustedBySection />
      <SolutionsSection />
      <StatsSection />
      <AboutSection />
      <WhyChooseUs />
      <PortfolioPreview />
      <PartnersSection />
      <TestimonialsSection />
      <ProcessSection />
      <BlogSection />
      <FAQSection />
      <CTASection />
    </>
  )
}
