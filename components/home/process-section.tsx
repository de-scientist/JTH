'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Search, PenTool, Rocket, ArrowRight } from 'lucide-react'
import { SectionHeader } from '@/components/ui/section-header'
import { fadeUp, staggerContainer, defaultTransition, viewportOnce } from '@/lib/animations'

const steps = [
  {
    icon: Search,
    title: 'Discover',
    description: 'Understand the challenge, audience and goals.',
    detail: 'Brief, research and clear direction.',
  },
  {
    icon: PenTool,
    title: 'Create',
    description: 'Design, develop and refine the solution.',
    detail: 'Strategy-led design and builds, review and iteration.',
  },
  {
    icon: Rocket,
    title: 'Grow',
    description: 'Launch, optimize and support the next stage.',
    detail: 'Delivery, launch and ongoing support.',
  },
]

export function ProcessSection() {
  return (
    <section id="process" className="py-16 lg:py-24 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <SectionHeader
          badge="How We Work"
          title={
            <>
              Three Steps.{' '}
              <span className="text-gradient">One Clear Journey.</span>
            </>
          }
          description="From first conversation to launch and beyond — a simple, transparent process for every project."
        />

        <div className="relative">
          <div className="hidden lg:block absolute top-24 left-[calc(16.66%+1.5rem)] right-[calc(16.66%+1.5rem)] h-0.5 bg-gradient-to-r from-primary via-accent to-secondary" aria-hidden="true" />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
          >
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                variants={fadeUp}
                transition={{ ...defaultTransition, delay: index * 0.08 }}
                className="relative group"
              >
                <div className="card-premium p-6 lg:p-8 h-full group-hover:-translate-y-2 transition-all duration-500 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-brand-subtle opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-5">
                      <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:shadow-lg group-hover:shadow-primary/20 transition-all duration-500">
                        <step.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
                      </div>
                      <span className="font-display text-4xl font-bold text-gradient-accent opacity-20">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>

                    <h3 className="font-display text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                    <p className="mt-4 inline-flex items-center gap-1.5 rounded-lg bg-primary/8 px-3 py-1.5 text-xs font-medium text-primary">
                      {step.detail}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          transition={defaultTransition}
          className="text-center mt-12"
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all"
          >
            See our full process &amp; services
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
