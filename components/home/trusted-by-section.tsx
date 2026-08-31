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
  { name: 'Omondi Holdings', logo: '/images/hold.jpg' },
  { name: 'Hope Foundation', logo: '/images/hope.jpg' },
]

export function TrustedBySection() {
  return (
    <section
      id="trust"
      className="relative py-12 lg:py-16 overflow-hidden border-y border-border/40"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="text-center"
        >
          <motion.p
            variants={fadeUp}
            transition={defaultTransition}
            className="text-sm font-semibold text-muted-foreground tracking-wide uppercase mb-8"
          >
            Trusted by businesses &amp; organizations
          </motion.p>

          <motion.div
            variants={staggerContainer}
            className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 lg:gap-x-12"
          >
            {clients.map((client, index) => (
              <motion.div
                key={client.name}
                variants={fadeUp}
                transition={{ ...defaultTransition, delay: (index % 4) * 0.06 }}
                className="flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity duration-300"
              >
                <Image
                  src={client.logo}
                  alt={`${client.name} logo`}
                  width={100}
                  height={40}
                  className="object-contain h-8 w-auto lg:h-10"
                  style={{ width: 'auto', height: 'auto', maxHeight: '2.5rem' }}
                  sizes="100px"
                />
              </motion.div>
            ))}
          </motion.div>

          <motion.p
            variants={fadeUp}
            transition={defaultTransition}
            className="text-center text-xs text-muted-foreground mt-6 font-medium"
          >
            + Many more businesses trust JTH to transform their digital presence
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
