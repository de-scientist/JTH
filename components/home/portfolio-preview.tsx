'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, TrendingUp, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SectionHeader } from '@/components/ui/section-header'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { useIsMobile } from '@/components/ui/use-mobile'
import { fadeUp, defaultTransition, viewportOnce } from '@/lib/animations'

type CaseStudy = {
  id: string
  title: string
  category: string
  industry: string
  tags: string[]
  image: string
  fallback: string
  challenge: string
  solution: string
  outcome: string
}

const caseStudies: CaseStudy[] = [
  {
    id: '1',
    title: 'Tech Startup Brand Identity',
    category: 'Brand Identity',
    industry: 'Technology',
    tags: ['Logo', 'Brand Identity'],
    image: '/images/portfolio/tech-startup-branding.jpg',
    fallback: '/images/portfolio/13.jpeg',
    challenge: 'A young startup needed to look established enough to win enterprise clients.',
    solution: 'We built a complete identity system — logo, palette, typography and guidelines.',
    outcome: 'The startup closed two major contracts within 3 months of the rebrand.',
  },
  {
    id: '2',
    title: 'E-commerce Website Redesign',
    category: 'Web Development',
    industry: 'Retail / E-commerce',
    tags: ['Web Design', 'UI/UX'],
    image: '/images/portfolio/ecommerce-website.jpg',
    fallback: '/images/portfolio/18.jpeg',
    challenge: 'High traffic but low conversions. The old site looked dated and confusing to shop.',
    solution: 'A modern, conversion-focused redesign with clearer product journeys.',
    outcome: 'Checkout completions increased and the brand finally looked premium online.',
  },
  {
    id: '3',
    title: 'Coffee Shop Brand Package',
    category: 'Brand Identity',
    industry: 'Food & Hospitality',
    tags: ['Branding', 'Packaging', 'Signage'],
    image: '/images/portfolio/coffee-shop-branding.jpg',
    fallback: '/images/portfolio/22.jpeg',
    challenge: 'A new coffee shop needed a memorable identity to stand out on a busy street.',
    solution: 'Full brand package — logo, packaging, menus and store signage.',
    outcome: 'The shop became a local landmark and consistent crowd favourite.',
  },
  {
    id: '4',
    title: 'Restaurant Social Media Campaign',
    category: 'Social Media',
    industry: 'Food & Hospitality',
    tags: ['Social Media', 'Campaign'],
    image: '/images/portfolio/restaurant-social-media.jpg',
    fallback: '/images/portfolio/16.jpeg',
    challenge: 'A grand opening was approaching with almost no online presence.',
    solution: 'A scroll-stopping social media package optimized for every platform.',
    outcome: 'The opening was fully booked and engagement tripled within weeks.',
  },
  {
    id: '5',
    title: 'Church Revival Event Campaign',
    category: 'Graphic Design',
    industry: 'Church & Community',
    tags: ['Flyers', 'Posters', 'Events'],
    image: '/images/portfolio/church-revival-flyer.jpg',
    fallback: '/images/portfolio/14.jpeg',
    challenge: 'Attendance was dropping and the message needed to reach the community again.',
    solution: 'Vibrant event flyers and posters designed to inspire and inform.',
    outcome: 'Turnout doubled compared to the previous event.',
  },
  {
    id: '6',
    title: 'Fitness Brand Logo & Identity',
    category: 'Brand Identity',
    industry: 'Fitness & Wellness',
    tags: ['Logo', 'Branding'],
    image: '/images/portfolio/fitness-brand-logo.jpg',
    fallback: '/images/portfolio/20.jpeg',
    challenge: 'A fitness coach had talent but no recognizable brand to grow a membership base.',
    solution: 'A dynamic logo and identity that conveys energy, strength and movement.',
    outcome: 'The coach tripled membership signups after launching the new brand.',
  },
]

// Categories derived from the actual data (no empty categories).
const categories = [
  'All',
  ...Array.from(new Set(caseStudies.map((item) => item.category))),
]

function getCaseStudiesByCategory(category: string) {
  if (category === 'All') return caseStudies
  return caseStudies.filter((item) => item.category === category)
}

export function PortfolioPreview() {
  const isMobile = useIsMobile()
  const [activeTab, setActiveTab] = useState('All')
  const filtered = getCaseStudiesByCategory(activeTab)
  const displayedProjects = isMobile ? filtered.slice(0, 4) : filtered

  return (
    <section id="portfolio" className="py-20 lg:py-32 bg-background relative overflow-hidden">
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <SectionHeader
          badge="Case Studies"
          title={
            <>
              Real Projects.{' '}
              <span className="text-gradient">Real Results.</span>
            </>
          }
          description="Every design we deliver solves a business problem. Filter by discipline, then explore what our clients needed, what we created, and the outcomes their brands achieved."
        />

        {/* Category Filter Tabs — same interaction model as Solutions/Services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={defaultTransition}
          className="flex justify-center mb-12 lg:mb-16 overflow-x-auto md:overflow-visible pb-2 md:pb-0"
        >
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full md:w-auto"
          >
            <TabsList className="grid grid-cols-2 md:flex md:flex-wrap md:justify-center md:gap-2 w-full md:w-auto bg-transparent h-auto p-0 border-b border-border md:border-b-0">
              {categories.map((category) => (
                <TabsTrigger
                  key={category}
                  value={category}
                  className="px-4 md:px-6 py-3 rounded-lg md:rounded-xl text-xs md:text-sm font-semibold border-b-2 md:border-0 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent md:data-[state=active]:bg-primary/10 transition-all duration-300 whitespace-nowrap"
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>

            {/* Filtered Content */}
            <div className="mt-12 lg:mt-16">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  {displayedProjects.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                      {displayedProjects.map((item, index) => (
                        <motion.article
                          key={item.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ ...defaultTransition, delay: (index % 3) * 0.1 }}
                          className="group"
                        >
                          <div className="card-premium overflow-hidden h-full group-hover:-translate-y-2 transition-all duration-500 flex flex-col">
                            <Link href="/portfolio" aria-label={`View case study: ${item.title}`}>
                              <div className="relative aspect-[16/10] overflow-hidden">
                                <Image
                                  src={item.image}
                                  alt={item.title}
                                  fill
                                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                  onError={(e) => {
                                    const target = e.target as HTMLImageElement
                                    target.src = item.fallback
                                  }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/10 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                                <div className="absolute top-4 left-4 z-10">
                                  <span className="px-3 py-1.5 rounded-full text-xs font-medium bg-white/90 text-primary backdrop-blur-sm shadow-lg">
                                    {item.category}
                                  </span>
                                </div>
                              </div>
                            </Link>

                            <div className="p-6 lg:p-7 flex flex-col flex-1">
                              <div className="flex flex-wrap gap-1.5 mb-3">
                                {item.tags.map((tag) => (
                                  <span
                                    key={tag}
                                    className="px-2.5 py-1 rounded-md bg-primary/8 text-primary text-[11px] font-medium"
                                  >
                                    {tag}
                                  </span>
                                ))}
                              </div>
                              <h3 className="font-display text-lg font-semibold text-foreground mb-4 group-hover:text-primary transition-colors">
                                {item.title}
                              </h3>

                              <div className="space-y-3 text-sm flex-1">
                                <div className="flex items-start gap-2.5">
                                  <span className="text-xs font-bold text-muted-foreground/60 uppercase tracking-wide mt-0.5 shrink-0 w-20">
                                    Challenge
                                  </span>
                                  <p className="text-muted-foreground leading-relaxed">{item.challenge}</p>
                                </div>
                                <div className="flex items-start gap-2.5">
                                  <span className="flex items-center gap-1 text-xs font-bold text-primary uppercase tracking-wide mt-0.5 shrink-0 w-20">
                                    <Sparkles className="w-3 h-3" />
                                    Solution
                                  </span>
                                  <p className="text-muted-foreground leading-relaxed">{item.solution}</p>
                                </div>
                                <div className="flex items-start gap-2.5">
                                  <span className="flex items-center gap-1 text-xs font-bold text-secondary uppercase tracking-wide mt-0.5 shrink-0 w-20">
                                    <TrendingUp className="w-3 h-3" />
                                    Outcome
                                  </span>
                                  <p className="text-foreground font-medium leading-relaxed">{item.outcome}</p>
                                </div>
                              </div>

                              <Link
                                href="/portfolio"
                                className="inline-flex items-center text-sm font-medium text-primary gap-2 mt-5 opacity-70 group-hover:opacity-100 transition-all duration-300"
                              >
                                View Case Study
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                              </Link>
                            </div>
                          </div>
                        </motion.article>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-16">
                      <p className="text-muted-foreground text-lg mb-6">
                        No projects available in this category yet.
                      </p>
                      <Button
                        asChild
                        size="lg"
                        className="bg-gradient-brand text-white rounded-xl gap-2 h-12 px-8 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
                      >
                        <Link href="/portfolio">
                          Explore All Projects
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </Button>
                    </div>
                  )}

                  {/* View Full Portfolio CTA */}
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
                </motion.div>
              </AnimatePresence>
            </div>
          </Tabs>
        </motion.div>
      </div>
    </section>
  )
}
