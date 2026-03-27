'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, MessageCircle, Play } from 'lucide-react'
import { Button } from '@/components/ui/button'

const floatingItems = [
  { label: 'Flyers', delay: 0, x: '10%', y: '20%' },
  { label: 'Logos', delay: 0.1, x: '85%', y: '15%' },
  { label: 'Posters', delay: 0.2, x: '5%', y: '60%' },
  { label: 'Branding', delay: 0.3, x: '90%', y: '55%' },
  { label: 'Social Media', delay: 0.4, x: '15%', y: '85%' },
  { label: 'Print', delay: 0.5, x: '80%', y: '80%' },
]

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero-showcase.jpg"
            alt="Creative design studio"
            fill
            className="object-cover opacity-5 dark:opacity-10"
            priority
          />
        </div>
        
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(0,74,173,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,74,173,0.3) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      {/* Floating Labels */}
      <div className="absolute inset-0 pointer-events-none hidden lg:block">
        {floatingItems.map((item, index) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: item.delay + 0.8, duration: 0.5 }}
            className="absolute"
            style={{ left: item.x, top: item.y }}
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ 
                repeat: Infinity, 
                duration: 3, 
                delay: index * 0.2,
                ease: 'easeInOut'
              }}
              className="px-4 py-2 rounded-full bg-card/80 backdrop-blur-sm border border-border shadow-lg"
            >
              <span className="text-sm font-medium text-foreground">{item.label}</span>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 pt-20 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8"
          >
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm font-medium text-primary">Premium Creative Studio</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 text-balance"
          >
            Designs That{' '}
            <span className="text-primary">Sell.</span>
            <br />
            Branding That{' '}
            <span className="relative inline-block">
              <span className="text-primary">Speaks.</span>
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                <path d="M2 10C50 2 150 2 198 10" stroke="#D4AF37" strokeWidth="3" strokeLinecap="round"/>
              </svg>
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto text-pretty"
          >
            JTH Graphix Production creates bold, clean, and impactful visuals for businesses, 
            organizations, and individuals — from flyers and logos to full branding systems, 
            premium print materials, social media graphics, and modern websites.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/25 gap-2 h-12 px-8">
              <Link href="/portfolio">
                View Portfolio
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="gap-2 h-12 px-8 border-primary/20 hover:border-primary/40">
              <Link href="/contact">
                <Play className="w-4 h-4" />
                Start a Project
              </Link>
            </Button>
            <Button asChild size="lg" className="bg-[#25D366] hover:bg-[#25D366]/90 text-white gap-2 h-12 px-8">
              <a 
                href="https://wa.me/254117537015?text=Hello%20JTH%20Graphix%20Production!%20I%20would%20like%20to%20discuss%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp Us
              </a>
            </Button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-1"
            >
              <motion.div className="w-1.5 h-1.5 rounded-full bg-primary" />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Gold accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
    </section>
  )
}
