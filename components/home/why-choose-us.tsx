'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Palette, Eye, Zap, TrendingUp } from 'lucide-react'
import { fadeUp, staggerContainer, defaultTransition, viewportOnce } from '@/lib/animations'

const differentiators = [
  {
    icon: Palette,
    title: 'Creative + Technology',
    description: 'Design and development working together under one roof.',
  },
  {
    icon: Eye,
    title: 'Business-Focused',
    description: 'Solutions built around actual business objectives, not just aesthetics.',
  },
  {
    icon: Zap,
    title: 'Quality First',
    description: 'Professional, polished and production-ready work from day one.',
  },
  {
    icon: TrendingUp,
    title: 'Built for Growth',
    description: 'Solutions designed to evolve and scale with your business.',
  },
]

export function WhyChooseUs() {
  return (
    <section id="why" className="py-20 lg:py-32 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-12 lg:mb-16">
          <motion.span
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUp}
            transition={defaultTransition}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-5"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
            Why Choose JTH
          </motion.span>
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUp}
            transition={defaultTransition}
            className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance"
          >
            Technology.{' '}
            <span className="text-gradient">Creativity.</span>{' '}
            <span className="text-gradient">Results.</span>
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUp}
            transition={defaultTransition}
            className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto"
          >
            We are a strategic partner that combines creative excellence, technical expertise, and business understanding to transform how your brand is perceived and operates.
          </motion.p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {differentiators.map((item, index) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              transition={{ ...defaultTransition, delay: index * 0.08 }}
              className="group"
            >
              <div className="card-premium p-6 h-full relative overflow-hidden group-hover:-translate-y-1 transition-all duration-300">
                <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-brand scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          transition={defaultTransition}
          className="text-center mt-12"
        >
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all"
          >
            Why Choose JTH
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
