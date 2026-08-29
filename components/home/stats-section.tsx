'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { SectionHeader } from '@/components/ui/section-header'
import { CountUp } from '@/components/ui/count-up'
import { fadeUp, staggerContainer, defaultTransition, viewportOnce } from '@/lib/animations'
import { proofMetrics } from '@/lib/metrics'

export function StatsSection() {
  return (
    <section
      id="stats"
      className="py-20 lg:py-28 bg-muted/30 relative overflow-hidden"
    >
      {/* Ambient brand glow */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-1/4 w-[480px] h-[480px] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[420px] h-[420px] bg-accent/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <SectionHeader
          badge="Numbers Behind the Work"
          title={
            <>
              Evidence of <span className="text-gradient">real work</span>
            </>
          }
          description="A growing body of creative and digital work built around brands, businesses and ideas that need to move forward."
        />

        {/* Metrics — editorial typographic grid, no generic cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-6 lg:gap-x-0 lg:divide-x lg:divide-border"
        >
          {proofMetrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              variants={fadeUp}
              transition={{ ...defaultTransition, delay: index * 0.1 }}
              className="group text-center lg:text-left lg:px-8 first:lg:pl-0 last:lg:pr-0"
            >
              <div className="relative inline-block">
                <CountUp
                  value={metric.value}
                  prefix={metric.prefix}
                  suffix={metric.suffix}
                  className="font-display text-5xl sm:text-6xl lg:text-7xl font-extrabold text-primary tabular-nums leading-none"
                />
                <span className="absolute -bottom-2 left-1/2 lg:left-0 lg:translate-x-0 h-1 w-10 -translate-x-1/2 rounded-full bg-primary/70 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />
              </div>

              <p className="mt-5 text-sm font-semibold uppercase tracking-[0.14em] text-foreground">
                {metric.label}
              </p>
              <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-[15rem] mx-auto lg:mx-0">
                {metric.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Brand positioning statement */}
        <div className="mt-16 lg:mt-20 text-center">
          <p className="font-display text-lg sm:text-xl lg:text-2xl font-bold tracking-wide text-foreground">
            TECHNOLOGY <span className="text-primary">×</span> CREATIVITY{' '}
            <span className="text-primary">×</span> INNOVATION
          </p>
        </div>

        {/* CTA — connect metrics to real proof */}
        <div className="mt-10 flex justify-center">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all"
          >
            Explore the work behind the numbers
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
