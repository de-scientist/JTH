'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Quote, Star, ArrowRight } from 'lucide-react'
import { fadeUp, defaultTransition, viewportOnce } from '@/lib/animations'
import testimonials from '@/data/testimonials.json'

const featured = testimonials[0]

export function ClientProof() {
  return (
    <section
      id="client-proof"
      className="relative py-20 lg:py-28 overflow-hidden bg-muted/30"
    >
      {/* Ambient brand glow */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/4 left-1/4 w-[420px] h-[420px] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[420px] h-[420px] bg-secondary/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUp}
            transition={defaultTransition}
            className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 md:p-14 shadow-xl shadow-primary/5"
          >
            <div className="absolute top-0 left-0 w-24 h-24 rounded-full bg-primary/5 blur-2xl pointer-events-none" aria-hidden="true" />
            <div className="absolute bottom-0 right-0 w-24 h-24 rounded-full bg-secondary/10 blur-2xl pointer-events-none" aria-hidden="true" />

            <div className="relative z-10 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8">
                <Quote className="w-4 h-4" aria-hidden="true" />
                Client Proof
              </div>

              <div className="flex justify-center gap-1 mb-6" aria-label={`${featured.rating} out of 5 stars`}>
                {[...Array(featured.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-secondary text-secondary" aria-hidden="true" />
                ))}
              </div>

              <blockquote className="text-lg md:text-2xl text-foreground leading-relaxed font-medium text-balance">
                &ldquo;{featured.content}&rdquo;
              </blockquote>

              <div className="mt-8">
                <p className="font-display font-semibold text-foreground text-lg">{featured.name}</p>
                <p className="text-sm text-muted-foreground">
                  {featured.role}, {featured.company}
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUp}
            transition={{ ...defaultTransition, delay: 0.1 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/testimonials"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all"
            >
              View Client Stories
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
