'use client'

import { motion } from 'framer-motion'
import { Search, Lightbulb, PenTool, Code, Rocket, TrendingUp } from 'lucide-react'
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
    <section id="process" className="py-20 lg:py-28 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-brand-subtle pointer-events-none opacity-50" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <SectionHeader
          badge="Our Process"
          title={
            <>
              From Vision to{' '}
              <span className="text-primary">Victory</span>
            </>
          }
          description="A proven six-step framework that transforms ideas into impactful brand experiences."
        />

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
              <div className="card-premium p-6 lg:p-8 h-full group-hover:-translate-y-1 transition-transform duration-300">
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <step.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <span className="font-display text-sm font-bold text-secondary">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>

              {index < steps.length - 1 && (
                <div
                  className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary to-secondary z-10"
                  aria-hidden="true"
                />
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
