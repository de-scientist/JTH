// Home page - JTH Graphix Production
import { HeroSection } from '@/components/home/hero-section'
import { TrustedBySection } from '@/components/home/trusted-by-section'
import { AboutSection } from '@/components/home/about-section'
import { StatsSection } from '@/components/home/stats-section'
import { SolutionsOverview } from '@/components/home/solutions-overview'
import { SolutionsSection } from '@/components/home/solutions-section'
import { PortfolioPreview } from '@/components/home/portfolio-preview'
import { PortfolioGallery } from '@/components/home/portfolio-gallery'
import { TestimonialsSection } from '@/components/home/testimonials-section'
import { ProcessSection } from '@/components/home/process-section'
import { WhyChooseUs } from '@/components/home/why-choose-us'
import { PartnersSection } from '@/components/home/partners-section'
import { BlogSection } from '@/components/home/blog-section'
import { FAQSection } from '@/components/home/faq-section'
import { CTASection } from '@/components/home/cta-section'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustedBySection />
      <AboutSection />
      <StatsSection />
      <SolutionsOverview />
      <SolutionsSection />
      <PortfolioPreview />
      <PortfolioGallery />
      <TestimonialsSection />
      <ProcessSection />
      <WhyChooseUs />
      <PartnersSection />
      <BlogSection />
      <FAQSection />
      <CTASection />
    </>
  )
}
