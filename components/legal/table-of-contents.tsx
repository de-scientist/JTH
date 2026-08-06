'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { List, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { fadeUp, defaultTransition } from '@/lib/animations'

type TocItem = {
  id: string
  title: string
}

export function TableOfContents({
  items,
  label,
}: {
  items: TocItem[]
  label: string
}) {
  const [activeId, setActiveId] = useState<string>(items[0]?.id ?? '')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        }
      },
      { rootMargin: '-20% 0px -65% 0px', threshold: 0 },
    )

    items.forEach((item) => {
      const el = document.getElementById(item.id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [items])

  return (
    <motion.nav
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
      transition={defaultTransition}
      aria-label={`Table of contents: ${label}`}
      className="lg:sticky lg:top-28"
    >
      <div className="rounded-2xl bg-card/70 backdrop-blur-xl border border-border p-5 shadow-lg shadow-primary/5">
        <div className="flex items-center gap-2 mb-4">
          <List className="w-4 h-4 text-primary" />
          <p className="text-xs font-semibold text-foreground uppercase tracking-wider">
            On This Page
          </p>
        </div>
        <ol className="flex overflow-x-auto lg:flex-col lg:overflow-visible gap-2 lg:gap-1 pb-1 lg:pb-0">
          {items.map((item) => {
            const isActive = activeId === item.id
            return (
              <li key={item.id} className="shrink-0 lg:shrink">
                <a
                  href={`#${item.id}`}
                  aria-current={isActive ? 'true' : undefined}
                  className={cn(
                    'flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition-colors whitespace-nowrap lg:whitespace-normal',
                    isActive
                      ? 'bg-primary/10 text-primary font-medium'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted',
                  )}
                >
                  <ChevronRight
                    className={cn(
                      'w-3.5 h-3.5 shrink-0 transition-all',
                      isActive ? 'opacity-100 text-primary' : 'opacity-0 -ml-1.5',
                    )}
                  />
                  {item.title}
                </a>
              </li>
            )
          })}
        </ol>
      </div>
    </motion.nav>
  )
}
