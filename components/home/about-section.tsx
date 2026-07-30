'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Target, Eye, Heart, TrendingUp, CheckCircle2, ArrowRight } from 'lucide-react'
import { SectionHeader } from '@/components/ui/section-header'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
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
  { value: '50+', label: 'Clients' },
  { value: '5+', label: 'Years' },
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-32 bg-muted/30 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <SectionHeader
          badge="About JTH"
          title={
            <>
              We Build Brands That{' '}
              <span className="text-gradient">Drive Growth</span>
            </>
          }
          description="We do not just create designs. We build brands, experiences, and digital solutions that drive measurable business growth."
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
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-4 lg:right-6 glass rounded-2xl p-5 shadow-xl backdrop-blur-xl">
              <div className="flex gap-6">
                {aboutStats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <p className="font-display text-2xl font-bold text-gradient-accent">{stat.value}</p>
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
            <div className="card-glass p-6 lg:p-8 rounded-2xl">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Target className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground">Our Mission</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To empower businesses with strategic design and digital solutions that communicate
                value, build trust, and accelerate growth.
              </p>
            </div>

            <div className="card-glass p-6 lg:p-8 rounded-2xl">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center">
                  <Eye className="w-5 h-5 text-secondary" />
                </div>
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
                    className="card-premium p-4 rounded-xl hover:border-primary/20 transition-all"
                  >
                    <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                      <value.icon className="w-4 h-4 text-primary" />
                    </div>
                    <p className="font-medium text-foreground text-sm">{value.title}</p>
                    <p className="text-xs text-muted-foreground mt-1">{value.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <Link href="/about">
              <Button
                variant="outline"
                className="rounded-xl gap-2 border-primary/20 hover:border-primary/40 transition-all"
              >
                Learn More About Us
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
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
                className="relative card-premium p-6 rounded-2xl overflow-hidden group"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-brand" />
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
