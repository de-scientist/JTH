'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Phone, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import siteConfig from '@/data/site-config.json'

export function CTASection() {
  return (
    <section className="py-20 lg:py-32 bg-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Badge */}
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
            Start Your Project Today
          </span>

          {/* Headline */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Let&apos;s Bring Your{' '}
            <span className="text-primary">Brand to Life</span>
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            From concept to final delivery, JTH Graphix Production creates visuals 
            that command attention, build trust, and communicate value.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/25 gap-2 h-14 px-8 text-base">
              <Link href="/contact">
                Start a Project
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="gap-2 h-14 px-8 text-base">
              <a href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}>
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </Button>
            <Button asChild size="lg" className="bg-[#25D366] hover:bg-[#25D366]/90 text-white gap-2 h-14 px-8 text-base">
              <a 
                href={`https://wa.me/${siteConfig.whatsapp}?text=Hello%20JTH%20Graphix%20Production!%20I%20would%20like%20to%20discuss%20a%20project.`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Us
              </a>
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <span className="text-sm">Fast Response</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-accent" />
              <span className="text-sm">Premium Quality</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span className="text-sm">Professional Service</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
