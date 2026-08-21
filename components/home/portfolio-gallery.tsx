'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { fadeUp, staggerContainer, defaultTransition, viewportOnce } from '@/lib/animations'
import portfolioData from '@/data/portfolio.json'

// Get unique categories from portfolio data
const categories = Array.from(new Set(portfolioData.map(item => item.category))).sort()
const allCategories = ['All', ...categories]

function getPortfolioByCategory(category: string) {
  if (category === 'All') return portfolioData
  return portfolioData.filter(item => item.category === category)
}

export function PortfolioGallery() {
  const [activeTab, setActiveTab] = useState('All')
  const portfolioItems = getPortfolioByCategory(activeTab)

  return (
    <section
      id="portfolio-gallery"
      className="relative py-16 lg:py-24 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="text-center mb-12 lg:mb-16"
        >
          <motion.p
            variants={fadeUp}
            className="text-sm lg:text-base font-semibold text-primary tracking-wide uppercase mb-3"
          >
            Featured Work
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-4"
          >
            Our Creative & Technical Portfolio
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            From brand identities to web applications, print design to digital campaigns — explore the work that defines JTH.
          </motion.p>
        </motion.div>

        {/* Category Filter Tabs */}
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
            <TabsList className="grid grid-cols-auto md:flex md:flex-wrap md:justify-center md:gap-2 w-full md:w-auto bg-transparent h-auto p-0 border-b border-border md:border-b-0">
              {allCategories.map((category) => (
                <TabsTrigger
                  key={category}
                  value={category}
                  className="px-4 md:px-6 py-3 rounded-lg md:rounded-xl text-xs md:text-sm font-semibold border-b-2 md:border-0 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent md:data-[state=active]:bg-primary/10 transition-all duration-300 whitespace-nowrap"
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>

            {/* Tab Contents */}
            <div className="mt-12 lg:mt-16">
              <AnimatePresence mode="wait">
                {allCategories
                  .filter((category) => category === activeTab)
                  .map((category) => (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-8"
                    >
                      {/* Portfolio Grid */}
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                        {getPortfolioByCategory(category).map((item, index) => (
                          <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ ...defaultTransition, delay: (index % 6) * 0.05 }}
                          >
                            <Link href="/portfolio" className="group block h-full">
                              <motion.div
                                whileHover={{ y: -8 }}
                                transition={{ duration: 0.3 }}
                                className="card-premium overflow-hidden h-full flex flex-col"
                              >
                                {/* Image */}
                                <div className="relative aspect-square overflow-hidden bg-muted/50">
                                  <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    onError={(e) => {
                                      const target = e.target as HTMLImageElement
                                      target.src = '/images/hero-showcase.svg'
                                    }}
                                  />
                                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <span className="inline-flex items-center justify-center whitespace-nowrap text-sm font-semibold gap-2 rounded-xl px-4 py-2 bg-white text-primary">
                                      View Project
                                      <ArrowRight className="w-4 h-4" />
                                    </span>
                                  </div>
                                </div>

                                {/* Content */}
                                <div className="p-5 flex flex-col">
                                  <p className="text-xs font-semibold text-primary tracking-wide uppercase mb-2">
                                    {item.category}
                                  </p>
                                  <h4 className="font-display font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                                    {item.title}
                                  </h4>
                                  <p className="text-sm text-muted-foreground mb-4 flex-1">
                                    {item.description}
                                  </p>
                                  <div className="flex flex-wrap gap-1">
                                    {item.tags.slice(0, 2).map((tag) => (
                                      <span
                                        key={tag}
                                        className="px-2 py-1 rounded-md bg-muted text-muted-foreground text-xs font-medium"
                                      >
                                        {tag}
                                      </span>
                                    ))}
                                    {item.tags.length > 2 && (
                                      <span className="px-2 py-1 rounded-md bg-muted text-muted-foreground text-xs font-medium">
                                        +{item.tags.length - 2}
                                      </span>
                                    )}
                                  </div>
                                </div>
                              </motion.div>
                            </Link>
                          </motion.div>
                        ))}
                      </div>

                      {/* View All CTA */}
                      <div className="text-center pt-8">
                        <Button
                          asChild
                          size="lg"
                          className="bg-gradient-brand text-white rounded-2xl gap-2"
                        >
                          <Link href="/portfolio">
                            View All {category === 'All' ? '' : category} Projects
                            <ArrowRight className="w-5 h-5" />
                          </Link>
                        </Button>
                      </div>
                    </motion.div>
                  ))}
              </AnimatePresence>
            </div>
          </Tabs>
        </motion.div>
      </div>
    </section>
  )
}
