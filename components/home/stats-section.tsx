'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { FolderKanban, Heart, Clock, Headphones, TrendingUp, Globe } from 'lucide-react'
import { fadeUp, defaultTransition, viewportOnce } from '@/lib/animations'

const stats = [
  { icon: FolderKanban, value: 100, suffix: '+', label: 'Projects Completed' },
  { icon: Heart, value: 98, suffix: '%', label: 'Client Satisfaction' },
  { icon: Clock, value: 5, suffix: '+', label: 'Years Experience' },
  { icon: Globe, value: 10, suffix: '+', label: 'Countries Served' },
]

function AnimatedCounter({
  value,
  suffix,
  isInView,
}: {
  value: number
  suffix: string
  isInView: boolean
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

  return (
    <span className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gradient-accent">
      {count}
      {suffix}
    </span>
  )
}

export function StatsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="trust" ref={ref} className="py-20 lg:py-28 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-brand-subtle pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
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
              <div className="card-glass p-8 lg:p-10 text-center h-full flex flex-col items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-brand-subtle opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-6 group-hover:bg-primary group-hover:shadow-lg group-hover:shadow-primary/20 transition-all duration-500 group-hover:scale-110">
                    <stat.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <div className="mb-3">
                    <AnimatedCounter
                      value={stat.value}
                      suffix={stat.suffix}
                      isInView={isInView}
                    />
                  </div>
                  <p className="text-sm lg:text-base text-muted-foreground font-medium">{stat.label}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
