'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion'
import {
  ArrowRight,
  Star,
  CheckCircle2,
  Radio,
  PackageCheck,
  Code,
  UtensilsCrossed,
  Shirt,
  PartyPopper,
  Church,
  Building2,
  HeartHandshake,
  Briefcase,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { fadeUp, slideInRight, slideInLeft, defaultTransition, viewportOnce } from '@/lib/animations'

const trustIndicators = [
  { value: '200+', label: 'Projects Delivered' },
  { value: '100+', label: 'Happy Clients' },
  { value: '98%', label: 'Client Satisfaction' },
]

const floatingCards = [
  {
    icon: CheckCircle2,
    iconClass: 'text-emerald-400',
    title: 'Corporate Branding',
    subtitle: 'ABC Holdings Ltd',
    status: 'Completed',
    image: '/images/portfolio/tech-startup-branding.jpg',
    position: 'top-6 -right-3 lg:-right-6',
    delay: 0.6,
  },
  {
    icon: Radio,
    iconClass: 'text-secondary',
    title: 'Website Design',
    subtitle: 'Tech Startup',
    status: 'Live',
    image: '/images/portfolio/ecommerce-website.jpg',
    position: '-bottom-6 -left-3 lg:-left-6',
    delay: 0.9,
  },
  {
    icon: PackageCheck,
    iconClass: 'text-accent',
    title: 'Logo Design',
    subtitle: 'Restaurant Brand',
    status: 'Delivered',
    image: '/images/portfolio/fitness-brand-logo.jpg',
    position: 'top-1/3 -right-4 lg:-right-8',
    delay: 1.2,
  },
]

const polaroids = [
  {
    image: '/images/services/branding-identity/1.svg',
    label: 'Brand Identity',
    sub: 'Logo & Guidelines',
    position: 'top-0 -left-4 lg:-left-8 rotate-[-5deg] z-10 w-28 lg:w-36',
    delay: 0.7,
    float: { y: [0, -6, 0] },
    floatDuration: 5,
  },
  {
    image: '/images/services/business-card-design/1.jpeg',
    label: 'Business Cards',
    sub: 'Premium Print',
    position: 'bottom-16 -right-3 lg:-right-7 rotate-6 z-10 w-28 lg:w-36',
    delay: 1,
    float: { y: [0, 6, 0] },
    floatDuration: 6,
  },
]

const clientLogos = [
  { name: 'TechVenture Kenya', src: '/images/bank1.png' },
  { name: 'Savanna Grill', src: '/images/bank3.png' },
  { name: 'Wambui Fashion', src: '/images/bank4.png' },
  { name: 'Elite Events', src: '/images/G-F.png' },
  { name: 'Grace Community', src: '/images/bank7.1.png' },
  { name: 'Omondi Holdings', src: '/images/bank8.png' },
  { name: 'Hope Foundation', src: '/images/bank9.png' },
  { name: 'Kimani & Associates', src: '/images/nike5.jpg' },
]

function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [particles, setParticles] = useState<Array<{ x: number; y: number; vx: number; vy: number; r: number; alpha: number }>>([])

  useEffect(() => {
    const count = Math.min(40, Math.floor(window.innerWidth / 30))
    const newParticles = Array.from({ length: count }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      r: Math.random() * 2 + 1,
      alpha: Math.random() * 0.3 + 0.1,
    }))
    setParticles(newParticles)
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationId: number
    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(0, 74, 173, ${p.alpha})`
        ctx.fill()
      }

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 120) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(0, 74, 173, ${0.06 * (1 - dist / 120)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }

      animationId = requestAnimationFrame(animate)
    }
    animate()
    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
    }
  }, [particles])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      aria-hidden="true"
      style={{ opacity: 0.6 }}
    />
  )
}

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const prefersReducedMotion = useReducedMotion()

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 })
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 })

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect()
    if (!rect) return
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    mouseX.set(x * 30)
    mouseY.set(y * 30)
  }, [mouseX, mouseY])

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [handleMouseMove])

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-background pt-20"
    >
      {/* Cinematic Video Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        {/* Poster / fallback image — always rendered so the hero stays premium
            even if the video file is missing or fails to load */}
        <Image
          src="/images/hero-showcase.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Looping, muted, autoplaying cinematic video.
            Drop an optimized file at /public/videos/hero.webm and
            /public/videos/hero.mp4 (8-15s, compressed). If unavailable,
            the poster image above remains visible. */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay={!prefersReducedMotion}
          muted
          loop
          playsInline
          preload="none"
          poster="/images/hero-showcase.jpg"
          tabIndex={-1}
        >
          <source src="/videos/hero.webm" type="video/webm" />
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>

        {/* Darkened Overlay with Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-background/85 via-background/65 to-background/75" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />

        {/* JTH Blue Gradient Overlay */}
        <div className="absolute inset-0 mix-blend-multiply" style={{
          background: 'linear-gradient(135deg, rgba(0, 74, 173, 0.28) 0%, rgba(0, 74, 173, 0.06) 50%, rgba(0, 74, 173, 0.04) 100%)'
        }} />
      </div>

      {/* Existing Gradient Blobs & Effects */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent/15 rounded-full blur-[120px] animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px]" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[100px] animate-pulse-glow" style={{ animationDelay: '3s' }} />
        <div className="absolute bottom-1/3 left-1/4 w-72 h-72 bg-accent/10 rounded-full blur-[80px] animate-pulse-glow" style={{ animationDelay: '2s' }} />
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50" />
      </div>

      {!prefersReducedMotion && <ParticleField />}

      <div className="absolute inset-0 pointer-events-none" aria-hidden="true" style={{ perspective: '1000px' }}>
        <motion.div
          className="absolute top-[20%] left-[10%] w-64 h-64 rounded-full bg-primary/5 border border-primary/10 glass"
          style={{ x: springX, y: springY }}
          animate={{ rotateY: [0, 5, 0, -5, 0] }}
          transition={{ repeat: Infinity, duration: 20, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-[30%] right-[10%] w-48 h-48 rounded-full bg-accent/5 border border-accent/10 glass"
          animate={{ rotateY: [0, -8, 0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 25, ease: 'easeInOut' }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-16 items-center">
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
              <span className="text-sm font-medium text-primary">
                Transforming Businesses Through Technology, Creativity &amp; Innovation
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              transition={{ ...defaultTransition, delay: 0.2 }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-6 leading-[1.05] text-balance"
            >
              Transforming Businesses Through{' '}
              <span className="text-gradient">Technology, Creativity &amp; Innovation</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              transition={{ ...defaultTransition, delay: 0.3 }}
              className="text-lg lg:text-xl text-muted-foreground mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0"
            >
              We help businesses grow through branding, software development, website development, digital marketing, business automation, and creative solutions that deliver measurable results.
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
                <Link href="/contact">
                  Start Your Project
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
                  View Our Portfolio
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </motion.div>

            <motion.div
              variants={fadeUp}
              transition={{ ...defaultTransition, delay: 0.5 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-x-8 gap-y-4 mt-10"
            >
              <div className="flex items-center gap-2">
                <div className="flex gap-0.5" aria-label="Rated 5 stars">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                  ))}
                </div>
                <span className="text-sm font-medium text-foreground">Rated 5.0</span>
              </div>
              {trustIndicators.map((item) => (
                <div key={item.label} className="flex items-center gap-2">
                  <span className="font-display font-bold text-foreground">{item.value}</span>
                  <span className="text-sm text-muted-foreground">{item.label}</span>
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
            <div className="relative aspect-[4/5] max-h-[680px]">
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
                  src="/images/hero-showcase.jpg"
                  alt="Premium portfolio of JTH Graphix Production creative work — brand identities, print design and website design"
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

              {polaroids.map((card) => (
                <motion.div
                  key={card.label}
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: card.delay, duration: 0.6 }}
                  className={`absolute ${card.position}`}
                >
                  <motion.div
                    animate={{ y: card.float.y }}
                    transition={{ repeat: Infinity, duration: card.floatDuration, ease: 'easeInOut' }}
                    className="glass rounded-2xl p-2 shadow-xl shadow-primary/20"
                  >
                    <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                      <Image
                        src={card.image}
                        alt={card.label}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 40vw, 20vw"
                      />
                    </div>
                    <div className="px-2 py-1.5">
                      <p className="text-xs font-semibold text-foreground leading-tight">{card.label}</p>
                      <p className="text-[10px] text-muted-foreground">{card.sub}</p>
                    </div>
                  </motion.div>
                </motion.div>
              ))}

              {floatingCards.map((card) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: card.delay, duration: 0.6 }}
                  className={`absolute ${card.position} z-20`}
                >
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                    className="glass rounded-2xl p-2.5 shadow-xl shadow-primary/20 w-44"
                  >
                    <div className="flex items-start gap-2.5">
                      <div className="relative w-12 h-12 rounded-xl overflow-hidden shrink-0">
                        <Image
                          src={card.image}
                          alt={card.title}
                          fill
                          className="object-cover"
                          sizes="64px"
                        />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs font-semibold text-foreground leading-tight">
                          {card.title}
                        </p>
                        <p className="text-[10px] text-muted-foreground truncate">{card.subtitle}</p>
                        <p className="flex items-center gap-1 text-[10px] font-medium text-emerald-500 mt-0.5">
                          <card.icon className="w-3 h-3" />
                          {card.status}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
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
            Trusted By
          </p>
          <div className="relative overflow-hidden mask-fade-edges">
            <div className="flex w-max animate-marquee gap-8 lg:gap-12 items-center">
              {[...clientLogos, ...clientLogos].map((client, i) => (
                <div
                  key={`${client.name}-${i}`}
                  className="flex items-center gap-2 opacity-55 hover:opacity-100 transition-opacity duration-300"
                  aria-hidden={i >= clientLogos.length}
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center overflow-hidden">
                    <Image
                      src={client.src}
                      alt={client.name}
                      width={40}
                      height={40}
                      className="object-contain"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement
                        target.style.display = 'none'
                      }}
                    />
                  </div>
                  <span className="font-display font-semibold text-foreground/70 text-sm whitespace-nowrap hidden sm:block">
                    {client.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 cursor-pointer"
        onClick={() => {
          const el = document.getElementById('solutions') || document.querySelector('[id*="services"]')
          if (el) el.scrollIntoView({ behavior: 'smooth' })
        }}
        role="button"
        tabIndex={0}
        aria-label="Scroll to next section"
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            const el = document.getElementById('solutions') || document.querySelector('[id*="services"]')
            if (el) el.scrollIntoView({ behavior: 'smooth' })
          }
        }}
      >
        <span className="text-xs font-semibold text-muted-foreground tracking-wider uppercase">
          Explore JTH
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-1.5 hover:border-muted-foreground/60 transition-colors"
        >
          <div className="w-1 h-2 rounded-full bg-primary" />
        </motion.div>
        <span className="text-xs text-muted-foreground">Scroll</span>
      </motion.div>
    </section>
  )
}