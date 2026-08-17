'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Zap, BadgeCheck, Eye, HeadphonesIcon, Trophy, Lightbulb, Star } from 'lucide-react'
import { fadeUp, staggerContainer, defaultTransition, viewportOnce } from '@/lib/animations'

const values = [
  {
    icon: Zap,
    title: 'Quality-First Approach',
    description: 'Every design is production-ready. Print-ready files, optimized web assets, and professional deliverables from day one.',
  },
  {
    icon: BadgeCheck,
    title: 'Creative + Technical Expertise',
    description: 'We blend artistic excellence with technical precision — creating designs that look stunning and perform brilliantly.',
  },
  {
    icon: Eye,
    title: 'Business-Focused Solutions',
    description: 'Strategy drives every decision. We design to achieve your goals, not just create pretty work.',
  },
  {
    icon: Trophy,
    title: 'Responsive Client Support',
    description: 'Direct communication, clear timelines, and dedicated support throughout your project and beyond.',
  },
  {
    icon: Lightbulb,
    title: 'Scalable Digital Solutions',
    description: 'From branding to software, we build solutions that grow with your business without technical limitations.',
  },
  {
    icon: HeadphonesIcon,
    title: 'Kenyan Market Understanding',
    description: 'Deep knowledge of the local market, cultural nuances, and what resonates with Kenyan and East African audiences.',
  },
]

const outcomes = [
  { value: '5.0', label: 'Average client rating' },
  { value: '200+', label: 'Projects delivered' },
  { value: '98%', label: 'Clients who come back' },
]

export function WhyChooseUs() {
  return (
    <section className="py-20 lg:py-32 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUp}
            transition={defaultTransition}
            className="relative order-2 lg:order-1"
          >
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden card-premium">
              <Image
                src="/images/services/branding-identity/2.jpeg"
                alt="Brand identity design and logo presentation by JTH Graphix Production"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  target.src = '/images/services/branding-identity/ASH Global Initiatives.png'
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
            </div>

            <div className="absolute -bottom-6 -right-4 lg:right-6 glass rounded-2xl p-5 shadow-xl backdrop-blur-xl">
              <div className="flex gap-6">
                {outcomes.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <p className="flex items-center justify-center gap-1 font-display text-2xl font-bold text-gradient-accent">
                      {stat.label === 'Average client rating' && (
                        <Star className="w-5 h-5 fill-secondary text-secondary" />
                      )}
                      {stat.value}
                    </p>
                    <p className="text-xs text-muted-foreground max-w-[90px]">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUp}
            transition={defaultTransition}
            className="order-1 lg:order-2"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
              Why Choose JTH
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
              Technology.{' '}
              <span className="text-gradient">Creativity.</span>{' '}
              <span className="text-gradient">Results.</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-xl">
              We are not just a design agency. We are a strategic partner that combines creative excellence, technical expertise, and business understanding to transform how your business is perceived and operates.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportOnce}
                  variants={fadeUp}
                  transition={{ ...defaultTransition, delay: index * 0.05 }}
                >
                  <div className="card-premium p-5 h-full relative overflow-hidden group">
                    <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-brand scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:shadow-lg group-hover:shadow-primary/20 transition-all duration-300">
                        <value.icon className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <h3 className="font-display text-sm font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                          {value.title}
                        </h3>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
