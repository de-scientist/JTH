'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  Code,
  TrendingUp,
  Camera,
  GraduationCap,
  Target,
  Lightbulb,
  Rocket,
  CheckCircle2,
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

const challengeIcons = [Target, Lightbulb, Rocket, TrendingUp, Camera, GraduationCap]

const challenges = [
  'A brand that blends in and fails to earn recognition or trust.',
  'No reliable digital platform to present, sell, or operate your business.',
  'Inconsistent marketing materials that confuse rather than convince.',
  'Strong work that stays invisible because customers can’t find you online.',
  'Stories that never get told with visuals compelling enough to hold attention.',
  'A team without the creative and digital skills to keep pace with change.',
]

const problemByCategory: Record<string, string> = {
  'creative-branding':
    'Your business lacks a consistent visual identity that customers recognize and remember.',
  'technology-development':
    'Your brand has no reliable digital platform to operate, sell, and grow from.',
  'digital-growth':
    'Great work stays invisible because your audience can’t find you online or on social.',
  'media-content':
    'You struggle to tell your story with visuals and video that actually hold attention.',
  'learning-development':
    'Your team lacks the creative and digital skills needed to keep pace with change.',
}

const deliverablesByCategory: Record<string, string[]> = {
  'creative-branding': ['Logo systems', 'Brand guidelines', 'Marketing collateral', 'Print & packaging'],
  'technology-development': ['Responsive websites', 'Web applications', 'Automation workflows', 'UI/UX designs'],
  'digital-growth': ['Social campaigns', 'SEO & GEO strategy', 'Content plans', 'Performance reporting'],
  'media-content': ['Photography', 'Video & motion graphics', 'Editing & post-production', 'Content packages'],
  'learning-development': ['Training sessions', 'Workshops', 'Mentorship', 'Resource kits'],
}

export function SolutionsContent() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-background relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Solutions
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              Solutions Designed Around{' '}
              <span className="text-primary">Your Goals</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              We combine technology, creativity, and innovation to solve real branding,
              digital, and communication challenges — then deliver the work that proves it.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
              <Button asChild size="lg" className="bg-gradient-brand hover:opacity-90 text-white rounded-2xl gap-2">
                <Link href="/contact">
                  Start a Project
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-2xl gap-2">
                <Link href="/services">Explore Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* The Challenge */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeader
            badge="The Challenge"
            title={
              <>
                Common problems we help{' '}
                <span className="text-gradient">businesses solve</span>
              </>
            }
            description="Most organizations don’t need more design files — they need clear answers to specific problems. Here are the challenges we hear most often."
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {challenges.map((challenge, index) => {
              const Icon = challengeIcons[index % challengeIcons.length]
              return (
                <motion.div
                  key={challenge}
                  variants={fadeUp}
                  transition={{ ...defaultTransition, delay: (index % 3) * 0.08 }}
                  className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6"
                >
                  <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{challenge}</p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Our Solutions */}
      <section className="py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-1/4 -left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 -right-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[120px]" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <SectionHeader
            badge="Our Solutions"
            title={
              <>
                From challenge to{' '}
                <span className="text-gradient">outcome</span>
              </>
            }
            description="Each solution pairs a clear problem with the services, deliverables, and proof of work that move your business forward."
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-2 gap-6"
          >
            {solutionCategories.map((category, index) => {
              const Icon = iconMap[category.icon] || Sparkles
              const problem = problemByCategory[category.id]
              const deliverables = deliverablesByCategory[category.id] || []
              return (
                <motion.div
                  key={category.id}
                  variants={fadeUp}
                  transition={{ ...defaultTransition, delay: (index % 2) * 0.08 }}
                  className="group relative"
                >
                  <div className="relative h-full rounded-3xl border border-border bg-card p-7 lg:p-8 overflow-hidden transition-all duration-300 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10">
                    <div className="absolute inset-0 bg-gradient-brand-subtle opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative z-10">
                      <div className="flex items-center gap-4 mb-5">
                        <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                          <Icon className="w-6 h-6" />
                        </div>
                        <h3 className="font-display text-xl font-bold text-foreground">
                          {category.title}
                        </h3>
                      </div>

                      {problem && (
                        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                          <span className="font-semibold text-foreground">The problem: </span>
                          {problem}
                        </p>
                      )}

                      <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                        {category.description}
                      </p>

                      <div className="mb-5">
                        <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-2">
                          Services
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {category.services.map((service) => (
                            <span
                              key={service}
                              className="px-2.5 py-1 rounded-full bg-muted text-muted-foreground text-xs font-medium"
                            >
                              {service}
                            </span>
                          ))}
                        </div>
                      </div>

                      {deliverables.length > 0 && (
                        <div className="mb-6">
                          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-2">
                            Deliverables
                          </p>
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {deliverables.map((item) => (
                              <li
                                key={item}
                                className="flex items-center gap-2 text-sm text-muted-foreground"
                              >
                                <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      <div className="flex flex-wrap gap-3">
                        <Button asChild size="sm" className="bg-gradient-brand hover:opacity-90 text-white rounded-xl gap-2">
                          <Link href="/services">
                            Explore Services
                            <ArrowRight className="w-4 h-4" />
                          </Link>
                        </Button>
                        <Button asChild size="sm" variant="outline" className="rounded-xl gap-2">
                          <Link href="/portfolio">
                            View Related Work
                            <ArrowUpRight className="w-4 h-4" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Bridging CTA */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 lg:p-14 text-center">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-4">
                See the work behind the solutions
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Every solution above is backed by real JTH projects — from brand identities
                and websites to campaigns and creative production. Explore the portfolio or
                start a conversation about your challenge.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Button asChild size="lg" className="bg-gradient-brand hover:opacity-90 text-white rounded-2xl gap-2">
                  <Link href="/portfolio">
                    View Our Work
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-2xl gap-2">
                  <Link href="/contact">Start a Project</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
