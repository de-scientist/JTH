'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, useMotionValue, useSpring } from 'framer-motion'
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
import { fadeUp, slideInRight, slideInLeft, defaultTransition } from '@/lib/animations'

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
    image: '/images/services/branding-identity/1.jpeg',
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

const clients = [
  { name: 'TechVenture Kenya', icon: Code },
  { name: 'Savanna Grill', icon: UtensilsCrossed },
  { name: 'Wambui Fashion', icon: Shirt },
  { name: 'Elite Events', icon: PartyPopper },
  { name: 'Grace Community', icon: Church },
  { name: 'Omondi Holdings', icon: Building2 },
  { name: 'Hope Foundation', icon: HeartHandshake },
  { name: 'Kimani & Associates', icon: Briefcase },
]

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
                Graphic Design &amp; Branding Agency in Nairobi, Kenya
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              transition={{ ...defaultTransition, delay: 0.2 }}
              className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-foreground mb-6 leading-[1.05] text-balance"
            >
              Kenya&apos;s Creative Agency for{' '}
              <span className="text-gradient">Graphic Design &amp; Branding</span>{' '}
              That Builds Brands That <span className="text-gradient-accent">Sell</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              transition={{ ...defaultTransition, delay: 0.3 }}
              className="text-lg lg:text-xl text-muted-foreground mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0"
            >
              JTH Graphix Production is a full-service creative agency in Kenya offering logo
              design, website design, social media design, business branding, and premium
              printing services. From your first idea to a brand customers trust — we design
              visuals that win attention and turn visitors into clients.
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
            Trusted by growing brands across Kenya
          </p>
          <div className="relative overflow-hidden mask-fade-edges">
            <div className="flex w-max animate-marquee gap-16 lg:gap-20 items-center">
              {[...clients, ...clients].map((client, i) => (
                <div
                  key={`${client.name}-${i}`}
                  className="flex items-center gap-2.5 opacity-55 hover:opacity-100 transition-opacity duration-300"
                  aria-hidden={i >= clients.length}
                >
                  <client.icon className="w-5 h-5 text-primary" />
                  <span className="font-display font-semibold text-foreground/70 text-base whitespace-nowrap">
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
