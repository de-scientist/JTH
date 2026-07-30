'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
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

function ServiceCard({ service, index }: { service: typeof homeServices[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 150, damping: 15 })
  const springY = useSpring(y, { stiffness: 150, damping: 15 })
  const rotateX = useTransform(springY, [-0.5, 0.5], [8, -8])
  const rotateY = useTransform(springX, [-0.5, 0.5], [-8, 8])

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    const px = (e.clientX - rect.left) / rect.width - 0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5
    x.set(px)
    y.set(py)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  const Icon = iconMap[service.icon] || Palette

  return (
    <motion.div
      variants={fadeUp}
      transition={{ ...defaultTransition, delay: index * 0.05 }}
    >
      <Link href={`/services/${service.slug}`} className="group block h-full">
        <motion.div
          ref={ref}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{ perspective: 1000 }}
          className="h-full"
        >
          <motion.div
            style={{ rotateX, rotateY }}
            className="card-premium h-full p-6 lg:p-7 flex flex-col relative overflow-hidden group-hover:-translate-y-1 transition-transform duration-300"
          >
            <div className="absolute inset-0 bg-gradient-brand-subtle opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-brand scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-gradient-brand-subtle flex items-center justify-center mb-5 group-hover:shadow-lg group-hover:shadow-primary/20 transition-all duration-300 group-hover:scale-110">
                <Icon className="w-7 h-7 text-primary group-hover:text-primary transition-colors" />
              </div>

              <h3 className="font-display text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-6">
                {service.description}
              </p>

              <span className="inline-flex items-center text-sm font-medium text-primary gap-2 opacity-70 group-hover:opacity-100 transition-all duration-300">
                Learn More
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </span>
            </div>
          </motion.div>
        </motion.div>
      </Link>
    </motion.div>
  )
}

export function ServicesPreview() {
  return (
    <section id="services" className="py-20 lg:py-32 bg-muted/30 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <SectionHeader
          badge="Our Services"
          title={
            <>
              Strategic Solutions for{' '}
              <span className="text-gradient">Every Challenge</span>
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
          {homeServices.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          transition={defaultTransition}
          className="text-center mt-14"
        >
          <Button
            asChild
            size="lg"
            variant="outline"
            className="rounded-xl gap-2 h-12 px-8 border-primary/20 hover:border-primary/40 transition-all duration-300"
          >
            <Link href="/services">
              Explore All Services
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
