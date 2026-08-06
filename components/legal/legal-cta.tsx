'use client'

import { motion } from 'framer-motion'
import { Mail, MessageCircle, ArrowRight, ShieldCheck } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { siteConfig } from '@/lib/site-config'
import { fadeUp, defaultTransition, viewportOnce } from '@/lib/animations'

export function LegalCta() {
  return (
    <section className="py-16 lg:py-24 bg-muted/30 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          transition={defaultTransition}
          className="relative rounded-3xl bg-gradient-brand overflow-hidden p-8 lg:p-14 text-center shadow-2xl shadow-primary/25"
        >
          <div className="absolute -top-20 -left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-black/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />

          <div className="relative">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 text-white text-sm font-medium mb-6">
              <ShieldCheck className="w-4 h-4" />
              We&apos;re Here to Help
            </span>

            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 text-balance">
              Need More Information?
            </h2>
            <p className="text-white/85 text-lg mb-8 max-w-xl mx-auto leading-relaxed">
              If you have any questions regarding our policies, we&apos;d be happy to help.
              Reach out to us and we&apos;ll respond within a few hours.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="h-12 px-8 bg-white text-primary hover:bg-white/90 shadow-xl shadow-black/10 rounded-full gap-2"
              >
                <a href="/contact">
                  Contact Us
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-12 px-8 border-2 border-white/60 text-white hover:bg-white/10 hover:text-white rounded-full gap-2"
              >
                <a href={siteConfig.emailHref}>
                  <Mail className="w-4 h-4" />
                  Email Us
                </a>
              </Button>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-white/75">
              <a
                href={siteConfig.phoneHref}
                className="inline-flex items-center gap-2 text-sm hover:text-white transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                {siteConfig.phone}
              </a>
              <a
                href={siteConfig.emailHref}
                className="inline-flex items-center gap-2 text-sm hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4" />
                {siteConfig.email}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
