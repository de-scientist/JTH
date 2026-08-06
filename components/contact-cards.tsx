'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Clock, type LucideIcon } from 'lucide-react'
import { siteConfig } from '@/lib/site-config'
import { fadeUp, staggerContainer, defaultTransition, viewportOnce } from '@/lib/animations'

type ContactCard = {
  icon: LucideIcon
  label: string
  value: string
  href?: string
  isExternal?: boolean
}

const contactCards: ContactCard[] = [
  {
    icon: Mail,
    label: 'Email',
    value: siteConfig.email,
    href: siteConfig.emailHref,
  },
  {
    icon: Phone,
    label: 'Phone',
    value: siteConfig.phone,
    href: siteConfig.phoneHref,
  },
  {
    icon: MapPin,
    label: 'Location',
    value: siteConfig.location,
  },
  {
    icon: Clock,
    label: 'Working Hours',
    value: siteConfig.businessHours,
  },
]

function ContactCardItem({ card, index }: { card: ContactCard; index: number }) {
  const content = (
    <motion.div
      variants={fadeUp}
      transition={{ ...defaultTransition, delay: index * 0.08 }}
      className="group h-full"
    >
      <div className="relative h-full rounded-2xl bg-card/70 backdrop-blur-xl border border-border shadow-lg shadow-primary/5 p-5 overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10 hover:border-primary/25 group-hover:scale-[1.01]">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-brand scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
        <div className="flex items-start gap-4">
          <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:shadow-lg group-hover:shadow-primary/20 transition-all duration-300 group-hover:scale-110">
            <card.icon className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
          </div>
          <div className="min-w-0">
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1">
              {card.label}
            </p>
            <p className="text-sm font-semibold text-foreground break-words leading-snug">
              {card.value}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  )

  if (card.href) {
    return (
      <Link
        href={card.href}
        target={card.isExternal ? '_blank' : undefined}
        rel={card.isExternal ? 'noopener noreferrer' : undefined}
        aria-label={`${card.label}: ${card.value}`}
        className="block h-full"
      >
        {content}
      </Link>
    )
  }

  return <div className="h-full">{content}</div>
}

export function ContactCards() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={staggerContainer}
      className="grid grid-cols-1 sm:grid-cols-2 gap-4"
    >
      {contactCards.map((card, index) => (
        <ContactCardItem key={card.label} card={card} index={index} />
      ))}
    </motion.div>
  )
}
