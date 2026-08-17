'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { TrendingUp, Target, Heart, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react'
import { SectionHeader } from '@/components/ui/section-header'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { fadeUp, slideInLeft, slideInRight, defaultTransition, viewportOnce } from '@/lib/animations'

const transformations = [
  {
    icon: Target,
    from: 'Invisible to competitors',
    to: 'Unforgettable brand people remember',
  },
  {
    icon: TrendingUp,
    from: 'Quiet social pages',
    to: 'Engaging content that grows reach',
  },
  {
    icon: CheckCircle2,
    from: 'Generic, dated materials',
    to: 'Professional assets that build trust',
  },
  {
    icon: Heart,
    from: 'Inconsistent identity',
    to: 'One strong brand across every touchpoint',
  },
]

const steps = [
  { icon: Sparkles, title: 'Share your vision', text: 'A short call or brief is all we need to get started.' },
  { icon: Target, title: 'We build your brand', text: 'Strategy-led design tailored to your goals and audience.' },
  { icon: TrendingUp, title: 'You grow your business', text: 'Launch a brand that wins attention and converts customers.' },
]

const aboutStats = [
  { value: '200+', label: 'Projects' },
  { value: '100+', label: 'Clients' },
  { value: '98%', label: 'Satisfaction' },
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-32 bg-muted/30 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <SectionHeader
          badge="Your Growth Partner"
          title={
            <>
              Technology.{' '}
              <span className="text-gradient">Creativity.</span>{' '}
              Results.
            </>
          }
          description="JTH Graphix Production is a creative agency + technology partner. We transform how businesses are perceived and operate through strategic branding, world-class digital solutions, and creative excellence that drives real business results."
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
                src="/images/about-studio.jpg"
                alt="JTH Graphix Production creative studio and design workspace"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  target.src = '/images/hero-showcase.jpg'
                }}
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
            <div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-5">
                The Transformation Our Clients Experience
              </h3>
              <div className="grid grid-cols-1 gap-3">
                {transformations.map((item, i) => (
                  <motion.div
                    key={item.from}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOnce}
                    variants={fadeUp}
                    transition={{ ...defaultTransition, delay: i * 0.08 }}
                    className="card-premium p-4 rounded-xl group hover:border-primary/20 transition-all"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                        <item.icon className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs text-muted-foreground line-through opacity-70">
                          {item.from}
                        </p>
                        <p className="font-medium text-foreground text-sm">{item.to}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="card-glass p-6 lg:p-8 rounded-2xl">
              <h3 className="font-display text-lg font-semibold text-foreground mb-4">
                How We Get You There — In Three Steps
              </h3>
              <div className="space-y-4">
                {steps.map((step, i) => (
                  <div key={step.title} className="flex items-start gap-4">
                    <div className="flex items-center gap-3 shrink-0">
                      <div className="w-9 h-9 rounded-xl bg-secondary/10 flex items-center justify-center">
                        <step.icon className="w-4 h-4 text-secondary" />
                      </div>
                      <span className="font-display text-lg font-bold text-gradient-accent">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <div>
                      <p className="font-medium text-foreground text-sm">{step.title}</p>
                      <p className="text-xs text-muted-foreground">{step.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button
                asChild
                className="bg-gradient-brand text-white rounded-xl gap-2 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
              >
                <Link href="/contact">
                  Start Your Project
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="rounded-xl gap-2 border-primary/20 hover:border-primary/40 transition-all">
                <Link href="/about">
                  Learn More About JTH
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
