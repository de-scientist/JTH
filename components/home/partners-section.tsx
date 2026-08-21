'use client'

import { motion } from 'framer-motion'
import { SectionHeader } from '@/components/ui/section-header'
import { fadeUp, defaultTransition, viewportOnce } from '@/lib/animations'
import Image from 'next/image'

const partners = [
  {
    name: 'NovaTech Global Innovation',
    description: 'Strategic technology partner for digital transformation projects.',
    logo: '/images/novatech.jpg',
    fallback: '/images/portfolio/13.jpeg',
  },
  {
    name: 'Savanna Grill',
    description: 'Hospitality partner for branded dining experiences.',
    logo: '/images/grill.jpg',
    fallback: '/images/portfolio/22.jpeg',
  },
  {
    name: 'Wambui Fashion',
    description: 'Fashion brand partner for identity and digital presence.',
    logo: '/images/fashion.jpg',
    fallback: '/images/portfolio/20.jpeg',
  },
  {
    name: 'Elite Events',
    description: 'Event partner for campaign graphics and branding.',
    logo: '/images/G-F.png',
    fallback: '/images/portfolio/16.jpeg',
  },
  {
    name: 'Grace Community',
    description: 'Community partner for outreach and event materials.',
    logo: '/images/bank7.1.png',
    fallback: '/images/portfolio/14.jpeg',
  },
  {
    name: 'Omondi Holdings',
    description: 'Corporate partner for branding and print materials.',
    logo: '/images/bank8.png',
    fallback: '/images/portfolio/15.jpeg',
  },
  {
    name: 'Hope Foundation',
    description: 'Non-profit partner for awareness campaign design.',
    logo: '/images/bank9.png',
    fallback: '/images/portfolio/23.jpeg',
  },
  {
    name: 'Kimani & Associates',
    description: 'Professional services partner for corporate branding.',
    logo: '/images/nike5.jpg',
    fallback: '/images/portfolio/19.jpeg',
  },
]

export function PartnersSection() {
  return (
    <section id="partners" className="py-20 lg:py-32 bg-muted/30 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <SectionHeader
          badge="Our Partners"
          title={
            <>
              Trusted Partners{' '}
              <span className="text-gradient">Driving Growth Together</span>
            </>
          }
          description="We work alongside forward-thinking organizations to deliver exceptional design and branding results."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.08, delayChildren: 0.1 },
            },
          }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6"
        >
          {partners.map((partner) => (
            <motion.div
              key={partner.name}
              variants={fadeUp}
              transition={defaultTransition}
              className="card-premium p-6 lg:p-8 text-center group hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative w-20 h-20 mx-auto mb-4 rounded-2xl bg-primary/5 flex items-center justify-center overflow-hidden group-hover:bg-primary/10 transition-colors duration-300">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  className="object-contain p-3"
                  sizes="80px"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.src = partner.fallback
                  }}
                />
              </div>
              <h3 className="font-display text-sm font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {partner.name}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {partner.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}