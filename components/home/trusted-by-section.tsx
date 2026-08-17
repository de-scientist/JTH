'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { SectionHeader } from '@/components/ui/section-header'
import { fadeUp, staggerContainer, defaultTransition, viewportOnce } from '@/lib/animations'

const clients = [
  { name: 'NovaTech Global Innovation', logo: '/images/novatech.jpg' },
  { name: 'Savanna Grill', logo: '/images/grill.jpg' },
  { name: 'Wambui Fashion', logo: '/images/fashion.jpg' },
  { name: 'Elite Events', logo: '/images/tents.jpg' },
  { name: 'Grace Community', logo: '/images/bank7.1.png' },
  { name: 'Omondi Holdings', logo: '/images/bank8.png' },
  { name: 'Hope Foundation', logo: '/images/bank9.png' },
  { name: 'Kimani & Associates', logo: '/images/nike5.jpg' },
]

export function TrustedBySection() {
  return (
    <section
      id="trust"
      className="relative py-16 lg:py-24 overflow-hidden"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="text-center"
        >
          <motion.div variants={fadeUp} className="mb-8 lg:mb-12">
            <p className="text-sm lg:text-base font-semibold text-primary tracking-wide uppercase mb-3">
              Building Trust
            </p>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Trusted By Leading Businesses & Organizations
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From startups to established organizations, churches to institutions — businesses trust JTH to deliver creative and technical excellence.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8 mt-12"
          >
            {clients.map((client, index) => (
              <motion.div
                key={client.name}
                variants={fadeUp}
                className="flex items-center justify-center"
              >
                <div className="relative w-full aspect-video bg-muted/30 rounded-2xl border border-border/50 hover:border-primary/30 transition-all duration-300 overflow-hidden group cursor-pointer">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="w-full h-full flex items-center justify-center p-4">
                    <Image
                      src={client.logo}
                      alt={`${client.name} logo`}
                      width={120}
                      height={60}
                      className="object-contain max-w-full h-auto opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement
                        target.style.display = 'none'
                        e.currentTarget.parentElement!.innerHTML = `<span class="text-xs font-semibold text-muted-foreground">${client.name}</span>`
                      }}
                    />
                  </div>
                  
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center bg-background/90 backdrop-blur-sm">
                    <p className="text-sm font-semibold text-foreground text-center px-3">
                      {client.name}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="text-center text-sm text-muted-foreground mt-12 font-medium"
          >
            + Many more businesses trust us to transform their visual identity and digital presence
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
