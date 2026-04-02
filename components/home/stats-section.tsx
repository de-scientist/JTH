'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Folder, Users, PenTool, Award } from 'lucide-react'

const stats = [
  {
    icon: Folder,
    value: 500,
    suffix: '+',
    label: 'Projects Completed'
  },
  {
    icon: Users,
    value: 200,
    suffix: '+',
    label: 'Happy Clients'
  },
  {
    icon: PenTool,
    value: 1000,
    suffix: '+',
    label: 'Designs Delivered'
  },
  {
    icon: Award,
    value: 50,
    suffix: '+',
    label: 'Brands Elevated'
  }
]

function AnimatedCounter({ value, suffix, isInView }: { value: number; suffix: string; isInView: boolean }) {
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
    <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary">
      {count.toLocaleString()}{suffix}
    </span>
  )
}

export function StatsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="py-20 lg:py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 to-transparent" />
      
      {/* Gold accent lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Our Impact
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Numbers That{' '}
            <span className="text-primary">Speak</span>
          </h2>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-6">
                <stat.icon className="w-8 h-8 text-primary" />
              </div>
              <div className="mb-2">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} isInView={isInView} />
              </div>
              <p className="text-muted-foreground font-medium">{stat.label}</p>
              {/* Gold accent dot */}
              <div className="w-2 h-2 rounded-full bg-accent mx-auto mt-4" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
