'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { ArrowRight, Play, Star, Shield, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { fadeUp, slideInRight, slideInLeft, defaultTransition } from '@/lib/animations'

const stats = [
  { icon: Star, value: '100+', label: 'Projects Delivered' },
  { icon: Shield, value: '98%', label: 'Client Satisfaction' },
  { icon: Zap, value: '5+', label: 'Years Experience' },
]

const clientLogos = ['/images/hero-showcase.svg', '/images/hero-showcase.svg', '/images/hero-showcase.svg', '/images/hero-showcase.svg']

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 })
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const rect = containerRef.current?.getBoundingClientRect()
      if (!rect) return
      const x = (e.clientX - rect.left) / rect.width - 0.5
      const y = (e.clientY - rect.top) / rect.height - 0.5
      mouseX.set(x * 30)
      mouseY.set(y * 30)
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY])

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-background pt-20"
    >
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent/15 rounded-full blur-[120px] animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px]" />
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50" />
      </div>

      <div className="relative z-10 container mx-auto px-4 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={slideInLeft}
            transition={defaultTransition}
            className="text-center lg:text-left"
          >
            <motion.div
              variants={fadeUp}
              transition={{ ...defaultTransition, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              <span className="text-sm font-medium text-primary">Premium Creative Agency</span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              transition={{ ...defaultTransition, delay: 0.2 }}
              className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-foreground mb-6 leading-[1.05] text-balance"
            >
              We Build{' '}
              <span className="text-gradient">Digital Excellence</span>{' '}
              That Drives{' '}
              <span className="text-gradient-accent">Growth</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              transition={{ ...defaultTransition, delay: 0.3 }}
              className="text-lg lg:text-xl text-muted-foreground mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0"
            >
              From brand identity to digital experiences — we craft premium creative solutions that elevate your business and captivate your audience.
            </motion.p>

            <motion.div
              variants={fadeUp}
              transition={{ ...defaultTransition, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4"
            >
              <Button
                asChild
                size="lg"
                className="bg-gradient-brand hover:opacity-90 text-white shadow-lg shadow-primary/25 h-14 px-10 rounded-2xl gap-2 text-base font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-primary/30 hover:scale-[1.02]"
              >
                <Link href="/portfolio">
                  View Our Work
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-14 px-8 rounded-2xl gap-2 text-base border-border hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
              >
                <Link href="/portfolio">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <Play className="w-4 h-4 fill-primary text-primary ml-0.5" />
                  </div>
                  Watch Showreel
                </Link>
              </Button>
            </motion.div>

            <motion.div
              variants={fadeUp}
              transition={{ ...defaultTransition, delay: 0.5 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-8 mt-12"
            >
              {stats.map((stat) => (
                <div key={stat.label} className="flex items-center gap-2">
                  <stat.icon className="w-4 h-4 text-accent" />
                  <div>
                    <span className="font-display font-bold text-foreground">{stat.value}</span>
                    <span className="text-sm text-muted-foreground ml-1">{stat.label}</span>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={slideInRight}
            transition={{ ...defaultTransition, delay: 0.2 }}
            className="relative mx-auto w-full max-w-lg lg:max-w-none"
          >
            <div className="relative aspect-[4/5] max-h-[600px]">
              <motion.div
                className="absolute inset-0 rounded-3xl overflow-hidden card-premium"
                style={{
                  x: springX,
                  y: springY,
                }}
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.4 }}
              >
                <Image
                  src="/images/hero-showcase.svg"
                  alt="Premium agency creative work showcase"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
              </motion.div>

              <div className="absolute -inset-2 rounded-[2rem] border border-primary/10 pointer-events-none" />
              <div className="absolute -inset-4 rounded-[2.25rem] border border-accent/5 pointer-events-none" />

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="absolute -top-4 -right-4 lg:-top-6 lg:-right-6 z-20"
              >
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                  className="glass rounded-2xl px-5 py-4 shadow-xl shadow-primary/20"
                >
                  <p className="text-sm font-semibold text-foreground leading-snug text-balance">
                    Building Brands That Stand Out
                  </p>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="absolute -bottom-4 -left-4 lg:-bottom-6 lg:-left-6 z-20"
              >
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
                  className="glass rounded-2xl px-5 py-4 shadow-xl shadow-accent/20"
                >
                  <p className="text-sm font-semibold text-foreground leading-snug text-balance">
                    Creative. Strategic. Impactful.
                  </p>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute bottom-12 right-4 lg:right-8 z-20"
              >
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
                  className="flex items-center gap-2 glass-dark rounded-2xl px-4 py-3 shadow-xl"
                >
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="w-6 h-6 rounded-full bg-gradient-brand border-2 border-background flex items-center justify-center text-[8px] font-bold text-white">
                        {i === 1 ? 'J' : i === 2 ? 'T' : 'H'}
                      </div>
                    ))}
                  </div>
                  <span className="text-xs font-medium text-white/80">Active Now</span>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="mt-16 lg:mt-20"
        >
          <p className="text-center text-sm text-muted-foreground tracking-wider uppercase mb-6">
            Trusted by innovative brands
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12 opacity-50">
            {clientLogos.map((logo, i) => (
              <div key={i} className="h-8 w-24 relative grayscale hover:grayscale-0 transition-all duration-500">
                <Image
                  src={logo}
                  alt={`Client ${i + 1}`}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:block"
        aria-hidden="true"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8 }}
          className="w-6 h-10 rounded-full border-2 border-muted-foreground/25 flex items-start justify-center p-1.5"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
        </motion.div>
      </motion.div>
    </section>
  )
}
