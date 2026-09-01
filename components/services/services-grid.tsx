'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, FileImage, Image as ImageIcon, Palette, Sparkles, Share2, CreditCard, BookOpen, Printer, Globe, Flag, Calendar, Building2 } from 'lucide-react'
import services from '@/data/services.json'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  FileImage,
  Image: ImageIcon,
  Palette,
  Sparkles,
  Share2,
  CreditCard,
  BookOpen,
  Printer,
  Globe,
  Flag,
  Calendar,
  Building2,
}

const categoryColors: Record<string, string> = {
  'Design': 'bg-primary/10 text-primary',
  'Digital': 'bg-brand-light/15 text-primary',
  'Branding': 'bg-primary/15 text-primary',
  'Web': 'bg-brand-lighter/20 text-primary',
  'Training': 'bg-brand-light/10 text-primary',
  'Print': 'bg-primary/10 text-primary',
}

const allCategories = ['All', 'Design', 'Branding', 'Digital', 'Web', 'Training'] as const

export function ServicesGrid() {
  const [activeCategory, setActiveCategory] = useState<typeof allCategories[number]>('All')

  const filtered = activeCategory === 'All'
    ? services
    : services.filter((s) => s.category === activeCategory)

  return (
    <section className="py-16 lg:py-24 bg-muted/30" aria-labelledby="services-heading">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12" role="tablist" aria-label="Filter services by category">
          {allCategories.map((category) => {
            const isActive = activeCategory === category
            return (
              <button
                key={category}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 ${
                  isActive
                    ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/20'
                    : category === 'All'
                      ? 'bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/30'
                      : `${categoryColors[category]} hover:opacity-80`
                }`}
              >
                {category === 'All' ? 'All Services' : category}
              </button>
            )
          })}
        </div>
        <h2 id="services-heading" className="sr-only">Our services</h2>

        {/* Services Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
          {filtered.map((service, index) => {
            const Icon = iconMap[service.icon] || FileImage
            return (
              <motion.div
                key={service.id}
                layout
                initial={{ opacity: 0, y: 16, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35, delay: index * 0.03 }}
              >
                <Link href={`/services/${service.slug}`} className="group block h-full" aria-label={`View ${service.title} details`}>
                  <div className="relative h-full rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 overflow-hidden">
                    {/* Service Image */}
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <Image
                        src={service.coverImage || ''}
                        alt={service.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                      
                      {/* Category Badge */}
                      <div className="absolute top-4 right-4">
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${categoryColors[service.category]}`}>
                          {service.category}
                        </span>
                      </div>
                      
                      {/* Icon */}
                      <div className="absolute bottom-4 left-4">
                        <div className="w-12 h-12 rounded-xl bg-card/90 backdrop-blur-sm flex items-center justify-center shadow-lg">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-6">
                      {/* Gold accent line */}
                      <div className="absolute top-0 left-8 w-16 h-1 bg-gradient-to-r from-accent to-accent/30 rounded-b-full opacity-0 group-hover:opacity-100 transition-opacity" />
                      
                      <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                      <div className="text-sm text-muted-foreground mb-3">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary font-medium">
                          <Sparkles className="w-3.5 h-3.5" />
                          Custom Quote
                        </span>
                      </div>
                      <p className="text-muted-foreground mb-4 line-clamp-2">
                        {service.shortDescription}
                      </p>

                      {/* Benefits Preview */}
                      <ul className="space-y-2 mb-6">
                        {(service.benefits ?? []).slice(0, 2).map((feature, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                            {feature}
                          </li>
                        ))}
                      </ul>

                      {/* Arrow */}
                      <div className="flex items-center text-primary text-sm font-medium">
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            )
          })}
          </AnimatePresence>
        </motion.div>
        {filtered.length === 0 && (
          <div className="text-center py-12 col-span-full">
            <p className="text-muted-foreground">No services in this category.</p>
          </div>
        )}
      </div>
    </section>
  )
}
