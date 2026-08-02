'use client'

import { motion } from 'framer-motion'
import { Search, Lightbulb, PenTool, Code, Rocket, TrendingUp, ArrowRight } from 'lucide-react'
import { SectionHeader } from '@/components/ui/section-header'
import { fadeUp, staggerContainer, defaultTransition, viewportOnce } from '@/lib/animations'

const steps = [
  {
    icon: Search,
    title: 'Discover',
    description: 'We learn your brand, goals, audience, and competitive landscape.',
  },
  {
    icon: Lightbulb,
    title: 'Research',
    description: 'Deep market and user research informs every strategic decision.',
  },
  {
    icon: PenTool,
    title: 'Design',
    description: 'Concepts refined into stunning visuals aligned with your vision.',
  },
  {
    icon: Code,
    title: 'Develop',
    description: 'Designs brought to life with precision and performance in mind.',
  },
  {
    icon: Rocket,
    title: 'Launch',
    description: 'Seamless deployment with quality assurance at every touchpoint.',
  },
  {
    icon: TrendingUp,
    title: 'Grow',
    description: 'Ongoing optimization to maximize impact and drive results.',
  },
]

export function ProcessSection() {
  return (
    <section id="process" className="py-20 lg:py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-brand-subtle pointer-events-none opacity-50" />
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <SectionHeader
          badge="Our Process"
          title={
            <>
              From Vision to{' '}
              <span className="text-gradient">Victory</span>
            </>
          }
          description="A proven six-step framework that transforms ideas into impactful brand experiences."
        />

        <div className="relative">
          <div className="hidden lg:block absolute top-24 left-[calc(16.66%+1.5rem)] right-[calc(16.66%+1.5rem)] h-0.5 bg-gradient-to-r from-primary via-accent to-secondary" aria-hidden="true" />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
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

                    <div className="mt-5 flex items-center gap-2 text-sm text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <span>Learn more</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>

                {index < steps.length - 1 && (
                  <div
                    className="hidden lg:block absolute -bottom-4 left-1/2 -translate-x-1/2 z-20"
                    aria-hidden="true"
                  >
                    <div className="w-8 h-8 rounded-full bg-background border-2 border-primary/20 flex items-center justify-center group-hover:border-primary transition-colors">
                      <ArrowRight className="w-4 h-4 text-primary rotate-90" />
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
