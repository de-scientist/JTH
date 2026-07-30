'use client'

import { motion } from 'framer-motion'
import { fadeUp, defaultTransition, viewportOnce } from '@/lib/animations'
import { cn } from '@/lib/utils'

interface SectionHeaderProps {
  badge: string
  title: React.ReactNode
  description?: string
  align?: 'center' | 'left'
  className?: string
}

export function SectionHeader({
  badge,
  title,
  description,
  align = 'center',
  className,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={fadeUp}
      transition={defaultTransition}
      className={cn(
        'mb-14 lg:mb-16',
        align === 'center' ? 'text-center mx-auto max-w-4xl' : 'text-left max-w-2xl',
        className
      )}
    >
      <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
        <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
        {badge}
      </span>
      <h2 className="font-display text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-4 text-balance tracking-tight leading-[1.1]">
        {title}
      </h2>
      {description && (
        <p className="text-muted-foreground text-lg lg:text-xl leading-relaxed text-pretty max-w-3xl mx-auto">
          {description}
        </p>
      )}
    </motion.div>
  )
}
