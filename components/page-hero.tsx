'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { fadeUp, defaultTransition } from '@/lib/animations'

interface PageHeroProps {
  badge?: string
  title: string
  highlightedWord?: string
  description: string
  imageSrc: string
  imageAlt: string
  children?: React.ReactNode
}

export function PageHero({
  badge,
  title,
  highlightedWord,
  description,
  imageSrc,
  imageAlt,
  children,
}: PageHeroProps) {
  const titleParts = highlightedWord
    ? title.split(highlightedWord)
    : [title]

  return (
    <section className="relative min-h-[420px] lg:min-h-[480px] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        {/* Gradient Overlay — maintains text readability while keeping image visible */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
        {/* Subtle decorative orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-32 pb-16 lg:pt-40 lg:pb-24">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={defaultTransition}
          className="max-w-3xl"
        >
          {badge && (
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              {badge}
            </span>
          )}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance leading-tight">
            {highlightedWord ? (
              <>
                {titleParts[0]}
                <span className="text-gradient">{highlightedWord}</span>
                {titleParts[1] || ''}
              </>
            ) : (
              title
            )}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            {description}
          </p>
          {children && <div className="mt-8">{children}</div>}
        </motion.div>
      </div>
    </section>
  )
}
