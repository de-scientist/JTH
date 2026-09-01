'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, Phone, Sparkles, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { fadeUp, defaultTransition, viewportOnce } from '@/lib/animations'
import { siteConfig } from '@/lib/site-config'

export function CTASection() {
  return (
    <section id="cta" className="py-16 lg:py-24 relative overflow-hidden">
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src="/images/portfolio/product-launch-social.jpg"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
          onError={(e) => {
            const target = e.target as HTMLImageElement
            target.src = '/images/portfolio/music-festival-poster.jpg'
          }}
        />
        <div className="absolute inset-0 bg-gradient-cta opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#081120] via-transparent to-[#081120]" />
        <div className="absolute inset-0 bg-grid opacity-10" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          transition={defaultTransition}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 text-white/90 text-sm font-medium mb-8 border border-white/10 backdrop-blur-sm"
          >
            <Sparkles className="w-4 h-4 text-accent" />
            Free Quote · Fast Response · No Obligation
          </motion.div>

          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 text-balance leading-tight">
            Ready to Build Something{' '}
            <span className="text-accent">That Matters?</span>
          </h2>

          <p className="text-lg md:text-xl text-white/70 mb-12 max-w-2xl mx-auto leading-relaxed">
            Whether you need a stronger brand, a better website, a digital campaign or a complete technology solution, let&apos;s build it together.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white shadow-xl shadow-primary/30 h-14 px-10 rounded-2xl gap-2 text-base font-semibold transition-all duration-300 hover:shadow-2xl hover:shadow-primary/40 hover:scale-[1.02]"
            >
              <Link href="/contact">
                Start Your Project
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-secondary hover:bg-secondary-dark text-white h-14 px-8 rounded-2xl gap-2 text-base font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-secondary/30"
            >
              <Link href="/portfolio">
                Explore Our Work
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-8 text-white/70"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-accent" />
              <span className="text-sm">Free Consultation</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-secondary" />
              <span className="text-sm">Fast Response</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-accent" />
              <span className="text-sm">Results-Driven</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5" />
              <span className="text-sm">{siteConfig.phone}</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
