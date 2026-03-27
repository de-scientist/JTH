import type { Metadata } from 'next'
import { PortfolioGallery } from '@/components/portfolio/portfolio-gallery'

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Explore our portfolio of creative work including branding, flyer design, poster design, logo design, social media graphics, and more.',
}

export default function PortfolioPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-background relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Our Portfolio
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              Creative Work That{' '}
              <span className="text-primary">Inspires</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Browse our collection of branding, design, and visual communication 
              projects that have helped businesses succeed.
            </p>
          </div>
        </div>
      </section>

      <PortfolioGallery />
    </>
  )
}
