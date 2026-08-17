'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { fadeUp, staggerContainer, defaultTransition, viewportOnce } from '@/lib/animations'
import solutionCategories from '@/data/solution-categories.json'
import homeServices from '@/data/home-services.json'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Sparkles: () => <span>✨</span>,
  Code: () => <span>💻</span>,
  TrendingUp: () => <span>📈</span>,
  Camera: () => <span>📷</span>,
  GraduationCap: () => <span>🎓</span>,
}

function getCategoryServices(categoryId: string) {
  const category = solutionCategories.find(c => c.id === categoryId)
  if (!category) return []

  return homeServices.filter(service => 
    category.services.some(svc => 
      service.title.toLowerCase().includes(svc.toLowerCase()) ||
      service.slug.includes(categoryId.split('-')[0])
    )
  ).slice(0, 4)
}

export function SolutionsSection() {
  const [activeTab, setActiveTab] = useState(solutionCategories[0].id)

  return (
    <section
      id="solutions"
      className="relative py-16 lg:py-24 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/4 -left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px]" />
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
            Our Expertise
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-4"
          >
            Solutions Built For Your Business
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Strategic services across creative, technology, digital growth, media and learning — all designed to drive your business forward.
          </motion.p>
        </motion.div>

        {/* Category Tabs */}
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
            <TabsList className="grid grid-cols-2 md:flex md:gap-2 w-full md:w-auto bg-transparent h-auto p-0 border-b border-border md:border-b-0">
              {solutionCategories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="px-3 md:px-6 py-3 rounded-lg md:rounded-xl text-xs md:text-sm font-semibold border-b-2 md:border-0 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent md:data-[state=active]:bg-primary/10 transition-all duration-300 whitespace-nowrap"
                >
                  {category.title}
                </TabsTrigger>
              ))}
            </TabsList>

            {/* Tab Contents */}
            <div className="mt-12 lg:mt-16">
              <AnimatePresence mode="wait">
                {solutionCategories.map((category) => (
                  <TabsContent key={category.id} value={category.id} asChild>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-8"
                    >
                      {/* Category Header */}
                      <div className="text-center mb-8">
                        <h3 className="font-display text-2xl lg:text-3xl font-bold text-foreground mb-3">
                          {category.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {category.description}
                        </p>
                      </div>

                      {/* Services Grid */}
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {getCategoryServices(category.id).map((service, index) => (
                          <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ ...defaultTransition, delay: index * 0.05 }}
                          >
                            <Link href={`/services/${service.slug}`} className="group block h-full">
                              <motion.div
                                whileHover={{ y: -8 }}
                                transition={{ duration: 0.3 }}
                                className="card-premium h-full overflow-hidden flex flex-col"
                              >
                                {/* Image */}
                                <div className="relative aspect-video overflow-hidden bg-muted/50">
                                  <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                    onError={(e) => {
                                      const target = e.target as HTMLImageElement
                                      target.src = '/images/hero-showcase.svg'
                                    }}
                                  />
                                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/10 to-transparent" />
                                  <div className="absolute top-3 left-3 px-3 py-1.5 rounded-full text-xs font-semibold bg-white/90 text-primary backdrop-blur-sm">
                                    {service.deliveryTime}
                                  </div>
                                </div>

                                {/* Content */}
                                <div className="flex-1 p-5 flex flex-col">
                                  <h4 className="font-display font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                                    {service.title}
                                  </h4>
                                  <p className="text-sm text-muted-foreground mb-4 flex-1">
                                    {service.description}
                                  </p>
                                  <div className="flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all">
                                    View Service
                                    <ArrowRight className="w-4 h-4" />
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
                          <Link href={`/services?category=${category.id}`}>
                            Explore All {category.title} Services
                            <ArrowRight className="w-5 h-5" />
                          </Link>
                        </Button>
                      </div>
                    </motion.div>
                  </TabsContent>
                ))}
              </AnimatePresence>
            </div>
          </Tabs>
        </motion.div>
      </div>
    </section>
  )
}
