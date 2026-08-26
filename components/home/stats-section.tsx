'use client'

import { motion } from 'framer-motion'
import { fadeUp, defaultTransition, viewportOnce } from '@/lib/animations'
import { companyJourney } from '@/lib/company'

export function StatsSection() {
  return (
    <section id="stats" className="py-20 lg:py-28 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-brand-subtle pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {companyJourney.map((milestone, index) => (
            <motion.div
              key={milestone.year}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={fadeUp}
              transition={{ ...defaultTransition, delay: index * 0.1 }}
              className="group"
            >
              <div className="card-glass p-8 lg:p-10 text-center h-full flex flex-col items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-brand-subtle opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-6 group-hover:bg-primary group-hover:shadow-lg group-hover:shadow-primary/20 transition-all duration-500 group-hover:scale-110">
                    <milestone.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <div className="mb-3">
                    <span className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gradient-accent">
                      {milestone.year}
                    </span>
                  </div>
                  <p className="text-sm lg:text-base text-muted-foreground font-medium">{milestone.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
