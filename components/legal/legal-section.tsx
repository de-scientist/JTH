'use client'

import { motion } from 'framer-motion'
import { fadeUp, defaultTransition, viewportOnce } from '@/lib/animations'

export type LegalSectionProps = {
  index: number
  id: string
  title: string
  paragraphs: string[]
  bullets?: string[]
}

export function LegalSection({ index, id, title, paragraphs, bullets }: LegalSectionProps) {
  return (
    <motion.article
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={fadeUp}
      transition={defaultTransition}
      className="scroll-mt-28 relative rounded-3xl bg-card/70 backdrop-blur-xl border border-border p-6 lg:p-10 shadow-lg shadow-primary/5 overflow-hidden"
      aria-labelledby={`${id}-heading`}
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-brand opacity-80" />
      <div className="absolute -top-20 -right-20 w-48 h-48 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative">
        <div className="flex items-start gap-4 mb-6">
          <span
            className="text-gradient font-display text-2xl lg:text-3xl font-bold leading-none mt-1 shrink-0"
            aria-hidden="true"
          >
            {String(index).padStart(2, '0')}
          </span>
          <div className="h-9 w-1 rounded-full bg-gradient-brand shrink-0" aria-hidden="true" />
          <h2
            id={`${id}-heading`}
            className="font-display text-xl lg:text-2xl font-bold text-foreground text-balance"
          >
            {title}
          </h2>
        </div>

        <div className="space-y-4 text-muted-foreground leading-relaxed text-[15px] lg:text-base">
          {paragraphs.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>

        {bullets && bullets.length > 0 && (
          <ul className="mt-5 space-y-2.5">
            {bullets.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-muted-foreground">
                <span
                  className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 shrink-0"
                  aria-hidden="true"
                />
                <span className="text-[15px] lg:text-base leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </motion.article>
  )
}
