'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import services from '@/data/services.json'
import { ServiceCarousel } from '@/components/services/service-carousel'
import { cn } from '@/lib/utils'

const featuredSlugs = [
  'flyer-design',
  'branding-identity',
  'website-design',
  'social-media-graphics',
  'software-development',
]

export function FeaturedShowcase() {
  const featured = services.filter((s) => featuredSlugs.includes(s.slug))
  const [activeSlug, setActiveSlug] = useState(featured[0]?.slug ?? featuredSlugs[0])

  const activeService = featured.find((s) => s.slug === activeSlug) ?? featured[0]

  if (!activeService) return null

  const carouselImages = (activeService.galleryImages ?? []).map((src, i) => ({
    src,
    alt: `${activeService.title} — example ${i + 1}`,
    title: activeService.title,
    category: activeService.category,
  }))

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
            Featured Work
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            See Our <span className="text-gradient">Results in Action</span>
          </h2>
          <p className="text-muted-foreground">
            Explore real examples of our work across different service areas.
          </p>
        </motion.div>

        {/* Service tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10" role="tablist" aria-label="Featured services">
          {featured.map((service) => {
            const isActive = service.slug === activeSlug
            return (
              <button
                key={service.slug}
                role="tab"
                aria-selected={isActive}
                aria-controls={`showcase-panel-${service.slug}`}
                onClick={() => setActiveSlug(service.slug)}
                className={cn(
                  'px-4 py-2 rounded-full text-sm font-medium transition-all',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50',
                  isActive
                    ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/20'
                    : 'bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/30'
                )}
              >
                {service.title}
              </button>
            )
          })}
        </div>

        {/* Active service showcase */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSlug}
            id={`showcase-panel-${activeSlug}`}
            role="tabpanel"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35 }}
            className="max-w-4xl mx-auto"
          >
            <div className="grid lg:grid-cols-5 gap-8 items-center">
              {/* Carousel — takes 3/5 on desktop */}
              <div className="lg:col-span-3">
                <ServiceCarousel
                  images={carouselImages}
                  serviceName={activeService.title}
                />
              </div>

              {/* Service info — takes 2/5 on desktop */}
              <div className="lg:col-span-2">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {activeService.title}
                </h3>
                <p className="text-sm text-primary font-medium mb-3">
                  {activeService.category}
                </p>
                <p className="text-sm text-muted-foreground mb-6 line-clamp-4">
                  {activeService.shortDescription}
                </p>
                <Link
                  href={`/services/${activeService.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                >
                  Explore Service
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
