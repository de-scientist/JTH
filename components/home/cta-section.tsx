'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Phone, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { fadeUp, defaultTransition, viewportOnce } from '@/lib/animations'
import siteConfig from '@/data/site-config.json'

export function CTASection() {
  return (
    <section id="cta" className="py-20 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-cta" />
      <div className="absolute inset-0 bg-grid opacity-10" />
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            'radial-gradient(circle at 30% 40%, rgba(79, 184, 255, 0.4) 0%, transparent 50%), radial-gradient(circle at 70% 60%, rgba(255, 122, 0, 0.3) 0%, transparent 50%)',
        }}
        aria-hidden="true"
      />
      <div className="absolute top-10 left-10 w-40 h-40 border border-white/10 rounded-full" aria-hidden="true" />
      <div className="absolute bottom-10 right-10 w-64 h-64 border border-white/10 rounded-full" aria-hidden="true" />
      <div className="absolute top-1/2 right-20 w-4 h-4 rounded-full bg-accent/40 animate-pulse-glow" />
      <div className="absolute bottom-1/3 left-20 w-6 h-6 rounded-full border border-white/20 animate-float" />

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
            Ready to Transform Your Brand?
          </motion.div>

          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 text-balance leading-tight">
            Let&apos;s Build Something{' '}
            <span className="text-accent">Amazing</span> Together
          </h2>

          <p className="text-lg md:text-xl text-white/70 mb-12 max-w-2xl mx-auto leading-relaxed">
            Partner with a team that combines creative excellence with strategic thinking.
            Your next chapter of growth starts here.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-white shadow-xl shadow-secondary/25 h-14 px-10 rounded-2xl gap-2 text-base font-semibold transition-all duration-300 hover:shadow-2xl hover:shadow-secondary/40 hover:scale-[1.02]"
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
              className="border-white/30 text-white hover:bg-white/10 h-14 px-8 rounded-2xl gap-2 text-base bg-transparent backdrop-blur-sm transition-all duration-300"
            >
              <a href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}>
                <Phone className="w-5 h-5" />
                Schedule a Call
              </a>
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
              <div className="w-2 h-2 rounded-full bg-secondary" />
              <span className="text-sm">No Obligation</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
