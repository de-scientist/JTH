'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, ExternalLink, Search } from 'lucide-react'
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

function getFilterCategory(category: string): Filter {
  for (const [, filters] of Object.entries(categoryMap)) {
    if (filters[0]) return filters[0]
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
    <section id="portfolio" className="py-20 lg:py-32 bg-background relative overflow-hidden">
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <SectionHeader
          badge="Portfolio"
          title={
            <>
              Case Studies That{' '}
              <span className="text-gradient">Deliver Results</span>
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
                  ? 'bg-gradient-brand text-white shadow-lg shadow-primary/25'
                  : 'bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/80'
              )}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          transition={defaultTransition}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 30, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group"
              >
                <Link href="/portfolio" className="block">
                  <article className="card-premium overflow-hidden h-full group-hover:-translate-y-2 transition-all duration-500">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement
                          target.src = '/images/hero-showcase.svg'
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="w-16 h-16 rounded-2xl bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-xl">
                          <Search className="w-7 h-7 text-primary" />
                        </div>
                      </div>
                      <div className="absolute top-4 left-4 z-10">
                        <span className="px-3 py-1.5 rounded-full text-xs font-medium bg-white/90 text-primary backdrop-blur-sm shadow-lg">
                          {getFilterCategory(item.category)}
                        </span>
                      </div>
                      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 z-10">
                        <div className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg">
                          <ExternalLink className="w-4 h-4 text-primary" />
                        </div>
                      </div>
                    </div>

                    <div className="p-6 lg:p-8">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-xl bg-gradient-brand flex items-center justify-center text-white font-display font-bold text-sm">
                          {item.title.charAt(0)}
                        </div>
                        <div>
                          <h3 className="font-display text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                            {item.title}
                          </h3>
                          <p className="text-xs text-muted-foreground">{item.category}</p>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </article>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          transition={defaultTransition}
          className="text-center mt-14"
        >
          <Button
            asChild
            size="lg"
            className="bg-gradient-brand text-white rounded-xl gap-2 h-12 px-8 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
          >
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
