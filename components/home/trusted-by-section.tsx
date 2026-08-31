'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, defaultTransition, viewportOnce } from '@/lib/animations'

const clients = [
  { name: 'Muranga University of Technology CU', logo: '/images/best logo-DIs8pPJL.webp' },
  { name: 'NovaTech Global Innovation', logo: '/images/novatech.jpg' },
  { name: 'Savanna Grill', logo: '/images/grill.jpg' },
  { name: 'Wambui Fashion', logo: '/images/fashion.jpg' },
  { name: 'Elite Events', logo: '/images/tents.jpg' },
  { name: 'Grace Community', logo: '/images/grace.jpg' },
]

export function TrustedBySection() {
  return (
    <section
      id="trust"
      aria-label="Trusted by"
      className="relative py-10 lg:py-12 overflow-hidden border-y border-border/40 bg-card/30"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="flex flex-col lg:flex-row items-center gap-6 lg:gap-10"
        >
          <motion.p
            variants={fadeUp}
            transition={defaultTransition}
            className="text-sm font-semibold text-muted-foreground tracking-wide uppercase whitespace-nowrap shrink-0"
          >
            Trusted by
          </motion.p>

          <motion.div
            variants={staggerContainer}
            className="flex flex-wrap lg:flex-nowrap items-center justify-center lg:justify-start gap-x-6 gap-y-3 lg:gap-x-10 flex-1 w-full"
          >
            {clients.map((client, index) => (
              <motion.div
                key={client.name}
                variants={fadeUp}
                transition={{ ...defaultTransition, delay: index * 0.05 }}
                className="flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity duration-300"
                title={client.name}
              >
                <Image
                  src={client.logo}
                  alt={`${client.name} logo`}
                  width={110}
                  height={36}
                  className="object-contain h-7 w-auto lg:h-8 grayscale hover:grayscale-0 transition-all"
                  sizes="110px"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </motion.div>

          <motion.a
            variants={fadeUp}
            transition={defaultTransition}
            href="/about"
            className="hidden lg:inline-flex text-xs font-medium text-muted-foreground hover:text-primary transition-colors whitespace-nowrap shrink-0"
          >
            + many more
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
