'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  Sparkles,
  Code,
  TrendingUp,
  Camera,
  GraduationCap,
  ArrowUpRight,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SectionHeader } from '@/components/ui/section-header'
import { fadeUp, staggerContainer, defaultTransition, viewportOnce } from '@/lib/animations'
import solutionCategories from '@/data/solution-categories.json'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Sparkles,
  Code,
  TrendingUp,
  Camera,
  GraduationCap,
}

export function SolutionsOverview() {
  return (
    <section id="solutions-overview" className="py-20 lg:py-32 bg-background relative overflow-hidden">
      <div className="absolute top-1/4 -right-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 -left-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <SectionHeader
          badge="Your Creative & Technology Partner"
          title={
            <>
              Creative Thinking. Technology.{' '}
              <span className="text-gradient">Real Results.</span>
            </>
          }
          description="JTH Graphix Production combines creative, branding, UI/UX, web, software, automation, digital marketing and media into one connected solution — so you can find exactly what your business needs to grow."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {solutionCategories.map((category, index) => {
            const Icon = iconMap[category.icon] || Sparkles
            return (
              <motion.div
                key={category.id}
                variants={fadeUp}
                transition={{ ...defaultTransition, delay: (index % 3) * 0.08 }}
                className="group relative"
              >
                <div className="relative h-full rounded-3xl border border-border bg-card p-7 overflow-hidden transition-all duration-300 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10">
                  <div className="absolute inset-0 bg-gradient-brand-subtle opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-display text-xl font-bold text-foreground mb-2">
                      {category.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                      {category.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {category.services.slice(0, 4).map((service) => (
                        <span
                          key={service}
                          className="px-2.5 py-1 rounded-full bg-muted text-muted-foreground text-xs font-medium"
                        >
                          {service}
                        </span>
                      ))}
                      {category.services.length > 4 && (
                        <span className="px-2.5 py-1 rounded-full bg-muted text-muted-foreground text-xs font-medium">
                          +{category.services.length - 4}
                        </span>
                      )}
                    </div>
                    <Link
                      href="/services"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-2.5 transition-all"
                    >
                      Explore Solutions
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
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
          className="text-center mt-14"
        >
          <Button
            asChild
            size="lg"
            className="bg-gradient-brand hover:opacity-90 text-white rounded-2xl gap-2 h-14 px-8 text-base font-semibold"
          >
            <Link href="/services">
              Browse All Services
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
