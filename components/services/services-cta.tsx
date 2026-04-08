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
                   <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  className="w-7 h-7"
  fill="currentColor"
  aria-hidden="true"
>
  <path d="M12.04 2C6.58 2 2.15 6.43 2.15 11.89c0 1.93.5 3.83 1.45 5.5L2 22l4.73-1.24a9.86 9.86 0 005.31 1.55h.01c5.46 0 9.89-4.43 9.89-9.89A9.9 9.9 0 0012.04 2zm0 17.94a8.03 8.03 0 01-4.1-1.13l-.3-.18-2.81.74.75-2.73-.2-.28a8.01 8.01 0 01-1.23-4.25c0-4.43 3.6-8.03 8.03-8.03a8.04 8.04 0 018.03 8.03c0 4.43-3.6 8.03-8.03 8.03zm4.43-6.04c-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12s-.62.78-.76.94c-.14.16-.28.18-.52.06-1.41-.7-2.33-1.25-3.27-2.83-.25-.43.25-.4.72-1.32.08-.15.04-.28 0-.4-.04-.12-.55-1.34-.75-1.83-.2-.48-.4-.41-.55-.42h-.47c-.16 0-.41.06-.62.3-.22.24-.84.82-.84 2 0 1.18.86 2.32.98 2.48.12.16 1.7 2.75 4.12 3.75 1.15.5 2.05.79 2.76 1.01.8.24 1.21.2 1.66.12.51-.1 1.53-.63 1.75-1.25.22-.62.22-1.15.15-1.25-.06-.1-.22-.16-.46-.28z"/>
</svg>
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
