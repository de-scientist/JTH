'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SectionHeader } from '@/components/ui/section-header'
import portfolio from '@/data/portfolio.json'
import { fadeUp, defaultTransition, viewportOnce } from '@/lib/animations'
import { cn } from '@/lib/utils'

const filters = ['All', 'Branding', 'Web Design', 'UI/UX', 'Marketing'] as const
type Filter = (typeof filters)[number]

const categoryMap: Record<string, Filter[]> = {
  Branding: ['Branding'],
  Logos: ['Branding'],
  Web: ['Web Design', 'UI/UX'],
  Flyers: ['Marketing'],
  Posters: ['Marketing'],
  'Social Media': ['Marketing'],
  Print: ['Marketing'],
}

const caseStudyDetails: Record<string, { challenge: string; solution: string; results: string }> = {
  '1': {
    challenge: 'Stand out in a crowded tech market with no cohesive identity.',
    solution: 'Full brand system with logo, palette, typography, and guidelines.',
    results: '40% increase in brand recognition within 6 months.',
  },
  '2': {
    challenge: 'Drive event attendance with limited marketing budget.',
    solution: 'Bold flyer series with strategic distribution channels.',
    results: '3x attendance compared to previous events.',
  },
  '3': {
    challenge: 'Present complex financial data in an accessible format.',
    solution: 'Editorial report design with custom infographics.',
    results: 'Stakeholder engagement up 60%.',
  },
  '4': {
    challenge: 'Launch a restaurant with zero social media presence.',
    solution: 'Multi-platform content package with consistent visual language.',
    results: '10K followers gained in first month.',
  },
  '5': {
    challenge: 'Create buzz for a multi-day music festival.',
    solution: 'Dynamic poster series with unified campaign identity.',
    results: 'Sold out 2 days before event.',
  },
  '6': {
    challenge: 'Low conversion rates on an outdated e-commerce site.',
    solution: 'UX-first redesign with optimized checkout flow.',
    results: 'Conversion rate improved by 85%.',
  },
}

function getFilterCategory(category: string): Filter {
  for (const [key, filters] of Object.entries(categoryMap)) {
    if (key === category) return filters[0]
  }
  return 'Marketing'
}

function matchesFilter(itemCategory: string, filter: Filter): boolean {
  if (filter === 'All') return true
  const mapped = categoryMap[itemCategory] || []
  return mapped.includes(filter)
}

export function PortfolioPreview() {
  const [activeFilter, setActiveFilter] = useState<Filter>('All')
  const filtered = portfolio.filter((item) => matchesFilter(item.category, activeFilter)).slice(0, 6)

  return (
    <section id="portfolio" className="py-20 lg:py-28 bg-background relative overflow-hidden">
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <SectionHeader
          badge="Portfolio"
          title={
            <>
              Case Studies That{' '}
              <span className="text-primary">Deliver Results</span>
            </>
          }
          description="Explore how we transform challenges into compelling brand experiences and measurable business outcomes."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          transition={defaultTransition}
          className="flex flex-wrap justify-center gap-2 mb-12"
          role="tablist"
          aria-label="Portfolio filters"
        >
          {filters.map((filter) => (
            <button
              key={filter}
              role="tab"
              aria-selected={activeFilter === filter}
              onClick={() => setActiveFilter(filter)}
              className={cn(
                'px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300',
                activeFilter === filter
                  ? 'bg-primary text-white shadow-lg shadow-primary/25'
                  : 'bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/80'
              )}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          <AnimatePresence mode="popLayout">
            {filtered.map((item, index) => {
              const details = caseStudyDetails[item.id] || {
                challenge: item.description,
                solution: 'Strategic design approach tailored to client goals.',
                results: 'Measurable improvement in brand visibility and engagement.',
              }

              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="group"
                >
                  <Link href="/portfolio" className="block">
                    <article className="card-premium overflow-hidden h-full group-hover:-translate-y-1 transition-transform duration-300">
                      <div className="relative aspect-[16/10] overflow-hidden">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement
                            target.src = '/images/hero-showcase.svg'
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/90 text-primary">
                            {getFilterCategory(item.category)}
                          </span>
                        </div>
                        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                          <div className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center">
                            <ExternalLink className="w-4 h-4 text-primary" />
                          </div>
                        </div>
                      </div>

                      <div className="p-6 lg:p-8">
                        <h3 className="font-display text-xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors">
                          {item.title}
                        </h3>

                        <div className="space-y-3 text-sm">
                          <div>
                            <span className="font-medium text-secondary">Challenge: </span>
                            <span className="text-muted-foreground">{details.challenge}</span>
                          </div>
                          <div>
                            <span className="font-medium text-primary">Solution: </span>
                            <span className="text-muted-foreground">{details.solution}</span>
                          </div>
                          <div>
                            <span className="font-medium text-foreground">Results: </span>
                            <span className="text-muted-foreground">{details.results}</span>
                          </div>
                        </div>
                      </div>
                    </article>
                  </Link>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          transition={defaultTransition}
          className="text-center mt-12"
        >
          <Button asChild size="lg" className="bg-gradient-brand text-white rounded-xl gap-2 h-12 px-8">
            <Link href="/portfolio">
              View Full Portfolio
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
