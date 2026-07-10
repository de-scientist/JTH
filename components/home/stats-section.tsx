'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { FolderKanban, Heart, Clock, Headphones } from 'lucide-react'
import { SectionHeader } from '@/components/ui/section-header'
import { fadeUp, defaultTransition, viewportOnce } from '@/lib/animations'

const stats = [
  { icon: FolderKanban, value: 100, suffix: '+', label: 'Projects Completed' },
  { icon: Heart, value: 98, suffix: '%', label: 'Client Satisfaction' },
  { icon: Clock, value: 5, suffix: '+', label: 'Years Experience' },
  { icon: Headphones, value: 24, suffix: '/7', label: 'Support', isSpecial: true },
]

function AnimatedCounter({
  value,
  suffix,
  isInView,
  isSpecial,
}: {
  value: number
  suffix: string
  isInView: boolean
  isSpecial?: boolean
}) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return

    const duration = 2000
    const steps = 60
    const stepValue = value / steps
    const stepDuration = duration / steps
    let current = 0

    const timer = setInterval(() => {
      current += stepValue
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, stepDuration)

    return () => clearInterval(timer)
  }, [value, isInView])

  if (isSpecial) {
    return (
      <span className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary">
        {count}
        <span className="text-secondary">{suffix}</span>
      </span>
    )
  }

  return (
    <span className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary">
      {count}
      {suffix}
    </span>
  )
}

export function StatsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="trust" ref={ref} className="py-20 lg:py-28 bg-muted/40 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-brand-subtle pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <SectionHeader
          badge="Trust & Achievements"
          title={
            <>
              Proven Results That{' '}
              <span className="text-primary">Build Confidence</span>
            </>
          }
          description="Numbers backed by real projects, satisfied clients, and a commitment to excellence at every stage."
        />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={fadeUp}
              transition={{ ...defaultTransition, delay: index * 0.1 }}
              className="group"
            >
              <div className="glass rounded-2xl p-6 lg:p-8 text-center card-premium h-full flex flex-col items-center justify-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 mb-5 group-hover:bg-primary/15 group-hover:scale-105 transition-all duration-300">
                  <stat.icon className="w-7 h-7 text-primary" />
                </div>
                <div className="mb-2">
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    isInView={isInView}
                    isSpecial={stat.isSpecial}
                  />
                </div>
                <p className="text-sm lg:text-base text-muted-foreground font-medium">{stat.label}</p>
                <div className="w-8 h-0.5 bg-gradient-brand rounded-full mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
