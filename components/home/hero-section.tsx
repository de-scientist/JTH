'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, Play, Pause, Sparkles, BadgeCheck } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { fadeUp, defaultTransition } from '@/lib/animations'
import { companyProfile } from '@/lib/company'

const trustIndicators = [
  { value: companyProfile.founded, label: 'Established' },
  { value: companyProfile.registered, label: 'Registered Ltd.' },
  { value: 'Creative + Tech', label: 'Partner' },
]

const portfolioCard = {
  eyebrow: 'JTH Project',
  image: '/images/portfolio/tech-startup-branding.jpg',
  title: 'Brand Identity',
  subtitle: 'Logo, Guidelines & Collateral',
  status: 'Live',
}

export function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const prefersReducedMotion = useReducedMotion()
  const [isPlaying, setIsPlaying] = useState(!prefersReducedMotion)

  const togglePlayback = useCallback(() => {
    const video = videoRef.current
    if (!video) return
    if (video.paused) {
      video.play().catch(() => {})
      setIsPlaying(true)
    } else {
      video.pause()
      setIsPlaying(false)
    }
  }, [])

  const scrollToNext = useCallback(() => {
    const el = document.getElementById('trust') || document.getElementById('solutions')
    if (el) el.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth' })
  }, [prefersReducedMotion])

  // Entrance variants respect reduced motion (no transform offset).
  const entrance = prefersReducedMotion
    ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
    : fadeUp

  return (
    <section
      id="hero"
      className="relative flex min-h-[78vh] items-center overflow-hidden bg-background pt-24 lg:min-h-[88vh] lg:pt-28"
    >
      {/* LAYER 1 — VIDEO (full-bleed showreel) */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <Image
          src="/images/hero-showcase.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover object-center"
          autoPlay={!prefersReducedMotion}
          muted
          loop
          playsInline
          preload="none"
          poster="/images/hero-showcase.jpg"
          tabIndex={-1}
          aria-label="JTH Graphix Production showreel showcasing branding, web and software work"
        >
          <source src="/videos/hero.webm" type="video/webm" />
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
      </div>

      {/* LAYER 2 — DIRECTIONAL SCRIM (text area darker, video area clear) */}
      <div
        className="pointer-events-none absolute inset-0 z-10 bg-[linear-gradient(90deg,var(--background)_0%,color-mix(in_srgb,var(--background)_58%,transparent)_42%,color-mix(in_srgb,var(--background)_22%,transparent)_72%,transparent_100%)]"
        aria-hidden="true"
      />
      {/* Bottom scrim keeps CTA / trust row readable while video stays visible */}
      <div
        className="pointer-events-none absolute inset-0 z-10 bg-[linear-gradient(to_top,var(--background)_2%,color-mix(in_srgb,var(--background)_70%,transparent)_28%,transparent_55%)]"
        aria-hidden="true"
      />
      {/* Mobile legibility layer — light uniform tint, video still clearly visible */}
      <div
        className="pointer-events-none absolute inset-0 z-10 bg-background/25 max-md:bg-background/35"
        aria-hidden="true"
      />

      {/* LAYER 3 — ATMOSPHERIC JTH BLUE GLOW (subtle, non-destructive) */}
      <div className="pointer-events-none absolute inset-0 z-[11]" aria-hidden="true">
        <div className="absolute -right-24 bottom-0 h-[460px] w-[460px] rounded-full bg-[radial-gradient(circle,rgba(0,74,173,0.35),transparent_70%)] opacity-70 blur-2xl" />
        <div className="absolute left-1/3 top-10 h-[340px] w-[340px] rounded-full bg-[radial-gradient(circle,rgba(26,111,227,0.18),transparent_70%)] opacity-60 blur-2xl" />
      </div>

      {/* LAYER 4/5 — CONTENT */}
      <div className="relative z-20 container mx-auto px-4 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
          {/* PRIMARY INFORMATION + ACTION */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } } }}
            className="text-left"
          >
            <motion.div
              variants={entrance}
              transition={{ ...defaultTransition, delay: 0.05 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-4 py-2 backdrop-blur-sm"
            >
              <span className="relative flex h-2 w-2">
                {!prefersReducedMotion && (
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary opacity-75" />
                )}
                <span className="relative inline-flex h-2 w-2 rounded-full bg-secondary" />
              </span>
              <span className="text-sm font-medium text-primary">
                 Your Creative &amp; Technology Partner
               </span>
            </motion.div>

            <motion.h1
              variants={entrance}
              transition={{ ...defaultTransition, delay: 0.15 }}
              className="font-display text-[clamp(2.5rem,5.2vw,4.75rem)] font-bold leading-[1.05] tracking-tight text-foreground text-balance"
            >
              Transforming Businesses Through{' '}
              <span className="text-gradient">Technology, Creativity &amp; Innovation</span>
            </motion.h1>

            <motion.p
              variants={entrance}
              transition={{ ...defaultTransition, delay: 0.3 }}
              className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
            >
              We help businesses grow through branding, software development, web
              development, digital marketing, business automation and creative
              solutions.
            </motion.p>

            <motion.div
              variants={entrance}
              transition={{ ...defaultTransition, delay: 0.45 }}
              className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center"
            >
              <Button
                asChild
                size="lg"
                className="h-14 rounded-2xl bg-gradient-brand px-10 text-base font-semibold text-white shadow-lg shadow-primary/25 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/30"
              >
                <Link href="/contact">
                  Start Your Project
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-14 rounded-2xl border-border bg-background/40 px-8 text-base font-medium text-foreground backdrop-blur-sm transition-all duration-300 hover:border-primary/40 hover:bg-primary/5"
              >
                <Link href="/portfolio">
                  Explore Our Work
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </motion.div>

            <motion.div
              variants={entrance}
              transition={{ ...defaultTransition, delay: 0.6 }}
              className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3"
            >
              {trustIndicators.map((item) => (
                <div key={item.label} className="flex items-center gap-2">
                  <span className="font-display text-lg font-bold text-foreground">{item.value}</span>
                  <span className="text-sm text-muted-foreground">{item.label}</span>
                </div>
              ))}
              <div className="flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5">
                <BadgeCheck className="h-4 w-4 text-primary" aria-hidden="true" />
                <span className="text-sm font-medium text-foreground">Quality is our Priority.</span>
              </div>
            </motion.div>
          </motion.div>

          {/* PROOF — single premium floating portfolio card (secondary to video) */}
          <div className="relative hidden md:flex lg:justify-end">
            <motion.div
              initial={{ opacity: 0, y: 28, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ ...defaultTransition, delay: 0.8 }}
              className="relative w-full max-w-sm"
            >
              <motion.div
                animate={prefersReducedMotion ? undefined : { y: [0, -8, 0] }}
                transition={prefersReducedMotion ? undefined : { duration: 6, ease: 'easeInOut', repeat: Infinity }}
                className="overflow-hidden rounded-3xl border border-white/15 bg-card/85 shadow-2xl shadow-primary/20 backdrop-blur-xl"
              >
                <div className="flex items-center justify-between px-4 pt-4">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
                    {portfolioCard.eyebrow}
                  </span>
                  <span className="flex items-center gap-1.5 text-[11px] font-medium text-emerald-500">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    {portfolioCard.status}
                  </span>
                </div>
                <div className="relative mt-3 aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={portfolioCard.image}
                    alt={`${portfolioCard.title} project by JTH Graphix Production`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 40vw, 380px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
                </div>
                <div className="flex items-center gap-2 px-4 pb-4 pt-3">
                  <Sparkles className="h-4 w-4 text-primary" />
                  <div>
                    <p className="text-sm font-semibold leading-tight text-foreground">
                      {portfolioCard.title}
                    </p>
                    <p className="text-xs text-muted-foreground">{portfolioCard.subtitle}</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* LAYER 6 — VIDEO CONTROL (bottom-right, accessible) */}
      <button
        type="button"
        onClick={togglePlayback}
        aria-label={isPlaying ? 'Pause showreel' : 'Play showreel'}
        aria-pressed={isPlaying}
        className="absolute bottom-6 right-4 z-30 flex items-center gap-2 rounded-full border border-white/15 bg-background/55 px-4 py-2 text-sm font-medium text-foreground backdrop-blur-md transition-colors hover:border-primary/40 hover:bg-background/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-transparent lg:right-8"
      >
        {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
        <span>{isPlaying ? 'Pause' : 'Showreel'}</span>
      </button>

      {/* LAYER 6 — SCROLL INDICATOR (bottom-center) */}
      <button
        type="button"
        onClick={scrollToNext}
        aria-label="Scroll to next section"
        className="absolute bottom-6 left-1/2 z-30 hidden -translate-x-1/2 flex-col items-center gap-1.5 text-foreground/70 transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-transparent sm:flex"
      >
        <span className="text-[11px] font-semibold uppercase tracking-[0.22em]">Explore JTH</span>
        <motion.span
          animate={prefersReducedMotion ? undefined : { y: [0, 7, 0] }}
          transition={prefersReducedMotion ? undefined : { duration: 2, ease: 'easeInOut', repeat: Infinity }}
          className="flex h-9 w-5 items-start justify-center rounded-full border border-foreground/25 p-1.5"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
        </motion.span>
        <span className="text-[11px] text-muted-foreground">Scroll</span>
      </button>
    </section>
  )
}
