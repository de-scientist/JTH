'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import siteConfig from '@/data/site-config.json'

export function ServicesCTA() {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative max-w-4xl mx-auto rounded-3xl bg-gradient-to-br from-primary/10 via-card to-accent/5 border border-border p-8 md:p-12 lg:p-16 text-center overflow-hidden"
        >
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/10 rounded-full blur-3xl" />
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
              Need a Custom Solution?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
              Don&apos;t see exactly what you need? Let&apos;s discuss your project and create 
              a tailored solution that fits your unique requirements.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 gap-2 h-12 px-8">
                <Link href="/contact">
                  Get a Quote
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="gap-2 h-12 px-8 bg-[#25D366]/10 border-[#25D366]/30 text-[#25D366] hover:bg-[#25D366]/20">
                <a 
                  href={`https://wa.me/${siteConfig.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-4 h-4" />
                  Chat on WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
