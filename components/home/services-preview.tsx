'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  Palette,
  Sparkles,
  Layout,
  Monitor,
  Code,
  TrendingUp,
  Clapperboard,
  Share2,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SectionHeader } from '@/components/ui/section-header'
import homeServices from '@/data/home-services.json'
import { fadeUp, staggerContainer, defaultTransition, viewportOnce } from '@/lib/animations'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Palette,
  Sparkles,
  Layout,
  Monitor,
  Code,
  TrendingUp,
  Clapperboard,
  Share2,
}

export function ServicesPreview() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <SectionHeader
          badge="Our Services"
          title={
            <>
              Strategic Solutions for{' '}
              <span className="text-primary">Every Challenge</span>
            </>
          }
          description="From brand identity to digital campaigns — we deliver end-to-end creative services that elevate your business."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6"
        >
          {homeServices.map((service, index) => {
            const Icon = iconMap[service.icon] || Palette
            return (
              <motion.div
                key={service.id}
                variants={fadeUp}
                transition={{ ...defaultTransition, delay: index * 0.05 }}
              >
                <Link href={`/services/${service.slug}`} className="group block h-full">
                  <div className="card-premium h-full p-6 lg:p-7 flex flex-col group-hover:-translate-y-1 transition-transform duration-300">
                    <div className="w-12 h-12 rounded-xl bg-gradient-brand-subtle flex items-center justify-center mb-5 group-hover:shadow-lg group-hover:shadow-primary/10 transition-shadow">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>

                    <h3 className="font-display text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-5">
                      {service.description}
                    </p>

                    <span className="inline-flex items-center text-sm font-medium text-primary gap-1 opacity-80 group-hover:opacity-100 transition-opacity">
                      Learn More
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          transition={defaultTransition}
          className="text-center mt-12"
        >
          <Button asChild size="lg" variant="outline" className="rounded-xl gap-2 h-12 px-8 border-primary/20 hover:border-primary/40">
            <Link href="/services">
              View All Services
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
