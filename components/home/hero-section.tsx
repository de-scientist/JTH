'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, Play } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { fadeUp, slideInRight, slideInLeft, defaultTransition } from '@/lib/animations'

const floatingCards = [
  {
    text: 'Building Brands That Stand Out',
    position: 'top-8 -left-4 lg:-left-8',
    delay: 0.6,
  },
  {
    text: 'Creative. Strategic. Impactful.',
    position: 'bottom-12 -right-4 lg:-right-6',
    delay: 0.8,
  },
]

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-background pt-20"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-primary/15 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 -right-20 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[100px]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(0,74,173,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(0,74,173,0.4) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
          }}
        />
        <div className="absolute top-32 right-1/4 w-3 h-3 rounded-full bg-secondary/40" />
        <div className="absolute bottom-40 left-1/3 w-2 h-2 rounded-full bg-primary/30" />
        <div className="absolute top-1/2 right-12 w-4 h-4 rounded-full border border-primary/20" />
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
              <span className="text-sm font-medium text-primary">Award-Winning Creative Agency</span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              transition={{ ...defaultTransition, delay: 0.2 }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-6 leading-[1.08] text-balance"
            >
              WE DESIGN{' '}
              <span className="text-primary">DIGITAL EXPERIENCES</span>{' '}
              THAT DRIVE{' '}
              <span className="text-gradient-accent">RESULTS</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              transition={{ ...defaultTransition, delay: 0.3 }}
              className="text-lg lg:text-xl text-muted-foreground mb-10 leading-relaxed"
            >
              <span className="text-foreground font-medium">Creative Design.</span>{' '}
              <span className="text-foreground font-medium">Strategic Branding.</span>{' '}
              <span className="text-foreground font-medium">Powerful Websites.</span>
            </motion.p>

            <motion.div
              variants={fadeUp}
              transition={{ ...defaultTransition, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4"
            >
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/25 h-12 px-8 rounded-xl gap-2 text-base"
              >
                <Link href="/portfolio">
                  Explore Our Work
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-12 px-8 rounded-xl gap-2 text-base border-border hover:border-primary/30 hover:bg-primary/5"
              >
                <Link href="/portfolio">
                  <Play className="w-4 h-4 fill-current" />
                  Watch Showreel
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={slideInRight}
            transition={{ ...defaultTransition, delay: 0.2 }}
            className="relative mx-auto w-full max-w-lg lg:max-w-none"
          >
            <div className="relative aspect-[4/5] sm:aspect-square lg:aspect-[4/5] max-h-[560px]">
              <motion.div
                className="absolute inset-4 rounded-3xl overflow-hidden card-premium"
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
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
              </motion.div>

              <div className="absolute -inset-2 rounded-[2rem] border border-primary/10 pointer-events-none" />
              <div className="absolute -inset-4 rounded-[2.25rem] border border-secondary/5 pointer-events-none" />

              {floatingCards.map((card) => (
                <motion.div
                  key={card.text}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: card.delay, duration: 0.6 }}
                  className={`absolute ${card.position} z-20 max-w-[220px]`}
                >
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                    className="glass rounded-2xl px-5 py-4 shadow-xl shadow-primary/10"
                  >
                    <p className="text-sm font-semibold text-foreground leading-snug">{card.text}</p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
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
