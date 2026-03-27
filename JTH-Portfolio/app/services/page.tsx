import type { Metadata } from 'next'
import { ServicesGrid } from '@/components/services/services-grid'
import { ServicesCTA } from '@/components/services/services-cta'

export const metadata: Metadata = {
  title: 'Services',
  description: 'Explore our comprehensive range of creative services including flyer design, logo design, branding, social media graphics, premium printing, and website design.',
}

export default function ServicesPage() {
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
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              Creative Solutions for{' '}
              <span className="text-primary">Your Brand</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              From eye-catching flyers to complete brand identities, we deliver premium 
              visual solutions that help your business stand out and succeed.
            </p>
          </div>
        </div>
      </section>

      <ServicesGrid />
      <ServicesCTA />
    </>
  )
}
