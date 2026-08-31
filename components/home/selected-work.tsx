'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SectionHeader } from '@/components/ui/section-header'
import { fadeUp, staggerContainer, defaultTransition, viewportOnce } from '@/lib/animations'
import portfolioData from '@/data/portfolio.json'

const curatedIds = ['1', '6', '10', '8', '4', '15']

const selectedProjects = curatedIds
  .map((id) => portfolioData.find((item) => item.id === id))
  .filter(Boolean) as typeof portfolioData

export function SelectedWork() {
  return (
    <section
      id="work"
      className="py-20 lg:py-32 bg-muted/30 relative overflow-hidden"
    >
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <SectionHeader
          badge="Selected Work"
          title={
            <>
              A Glimpse at{' '}
              <span className="text-gradient">What We Deliver</span>
            </>
          }
          description="From brand identities to web applications — explore the quality and range of work JTH delivers for clients across industries."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {selectedProjects.map((item, index) => (
            <motion.div
              key={item.id}
              variants={fadeUp}
              transition={{ ...defaultTransition, delay: (index % 3) * 0.1 }}
            >
              <Link href="/portfolio" className="group block h-full">
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="card-premium overflow-hidden h-full flex flex-col"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-muted/50">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="inline-flex items-center justify-center whitespace-nowrap text-sm font-semibold gap-2 rounded-xl px-4 py-2 bg-white text-primary">
                        View Project
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1.5 rounded-full text-xs font-medium bg-white/90 text-primary backdrop-blur-sm shadow-lg">
                        {item.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-5 flex flex-col">
                    <h4 className="font-display font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-sm text-muted-foreground line-clamp-2 mb-3 flex-1">
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
                    </div>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
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
            className="bg-gradient-brand text-white rounded-2xl gap-2 h-14 px-8 text-base font-semibold shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
          >
            <Link href="/portfolio">
              Explore All Work
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
