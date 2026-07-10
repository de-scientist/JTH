'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Target, Eye, Heart, TrendingUp, CheckCircle2 } from 'lucide-react'
import { SectionHeader } from '@/components/ui/section-header'
import { fadeUp, slideInLeft, slideInRight, defaultTransition, viewportOnce } from '@/lib/animations'

const values = [
  { icon: Heart, title: 'Integrity', description: 'Honest partnerships built on transparency and trust.' },
  { icon: Target, title: 'Excellence', description: 'Relentless pursuit of quality in every deliverable.' },
  { icon: TrendingUp, title: 'Innovation', description: 'Forward-thinking solutions that keep brands ahead.' },
  { icon: CheckCircle2, title: 'Results', description: 'Design decisions driven by measurable outcomes.' },
]

const timeline = [
  { year: '2020', event: 'Founded with a vision to elevate African brands' },
  { year: '2022', event: 'Expanded into digital and web solutions' },
  { year: '2024', event: '100+ projects delivered across industries' },
  { year: '2026', event: 'Full-service creative agency with global reach' },
]

const aboutStats = [
  { value: '100+', label: 'Projects' },
  { value: '50+', label: 'Brands' },
  { value: '5+', label: 'Years' },
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-muted/30 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <SectionHeader
          badge="About JTH"
          title={
            <>
              We Build Brands That{' '}
              <span className="text-primary">Drive Growth</span>
            </>
          }
          description="We don't just create designs. We build brands, experiences, and digital solutions that drive measurable business growth."
        />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={slideInLeft}
            transition={defaultTransition}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden card-premium">
              <Image
                src="/images/hero-showcase.svg"
                alt="JTH Graphix Production creative team at work"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-6 -right-4 lg:right-6 glass rounded-2xl p-5 shadow-xl">
              <div className="flex gap-6">
                {aboutStats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <p className="font-display text-2xl font-bold text-primary">{stat.value}</p>
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={slideInRight}
            transition={defaultTransition}
            className="space-y-8"
          >
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Target className="w-5 h-5 text-primary" />
                <h3 className="font-display text-xl font-semibold text-foreground">Our Mission</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To empower businesses with strategic design and digital solutions that communicate
                value, build trust, and accelerate growth.
              </p>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-3">
                <Eye className="w-5 h-5 text-secondary" />
                <h3 className="font-display text-xl font-semibold text-foreground">Our Vision</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To be the leading creative agency in East Africa — recognized globally for innovation,
                excellence, and transformative brand experiences.
              </p>
            </div>

            <div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-4">Core Values</h3>
              <div className="grid grid-cols-2 gap-3">
                {values.map((value, i) => (
                  <motion.div
                    key={value.title}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOnce}
                    variants={fadeUp}
                    transition={{ ...defaultTransition, delay: i * 0.08 }}
                    className="p-4 rounded-xl bg-card border border-border hover:border-primary/20 transition-colors"
                  >
                    <value.icon className="w-5 h-5 text-primary mb-2" />
                    <p className="font-medium text-foreground text-sm">{value.title}</p>
                    <p className="text-xs text-muted-foreground mt-1">{value.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          transition={defaultTransition}
        >
          <h3 className="font-display text-2xl font-bold text-foreground text-center mb-10">
            Our Growth Journey
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                variants={fadeUp}
                transition={{ ...defaultTransition, delay: i * 0.1 }}
                className="relative p-6 rounded-2xl card-premium"
              >
                <span className="font-display text-3xl font-bold text-gradient-accent">{item.year}</span>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{item.event}</p>
                {i < timeline.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-2 w-4 h-0.5 bg-gradient-brand" />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
