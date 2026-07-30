'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { fadeUp, defaultTransition, viewportOnce } from '@/lib/animations'
import siteConfig from '@/data/site-config.json'

export function CTASection() {
  return (
    <section id="cta" className="py-20 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-secondary" />
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.3) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(255,255,255,0.2) 0%, transparent 50%)',
        }}
        aria-hidden="true"
      />
      <div className="absolute top-10 left-10 w-32 h-32 border border-white/10 rounded-full" aria-hidden="true" />
      <div className="absolute bottom-10 right-10 w-48 h-48 border border-white/10 rounded-full" aria-hidden="true" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          transition={defaultTransition}
          className="max-w-4xl mx-auto text-center"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/15 text-white/90 text-sm font-medium mb-6">
            Ready to Transform Your Brand?
          </span>

          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 text-balance leading-tight">
            Let&apos;s Build Something Amazing Together
          </h2>

          <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
            Partner with a team that combines creative excellence with strategic thinking.
            Your next chapter of growth starts here.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-white text-primary hover:bg-white/90 shadow-xl h-14 px-8 rounded-xl gap-2 text-base font-semibold"
            >
              <Link href="/contact">
                Start a Project
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 h-14 px-8 rounded-xl gap-2 text-base bg-transparent"
            >
              <a href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}>
                <Phone className="w-5 h-5" />
                Schedule a Call
              </a>
            </Button>
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-white/70">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-white" />
              <span className="text-sm">Free Consultation</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-white" />
              <span className="text-sm">Fast Response</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-white" />
              <span className="text-sm">Results-Driven</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
