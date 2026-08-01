'use client'

import { useEffect, useState } from 'react'
import { ListTree } from 'lucide-react'

interface TocItem {
  id: string
  text: string
}

export function TableOfContents({ items }: { items: TocItem[] }) {
  const [activeId, setActiveId] = useState<string>('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        }
      },
      { rootMargin: '-80px 0px -70% 0px' }
    )

    for (const item of items) {
      const el = document.getElementById(item.id)
      if (el) observer.observe(el)
    }

    return () => observer.disconnect()
  }, [items])

  if (items.length === 0) return null

  return (
    <aside className="rounded-2xl bg-card border border-border p-6">
      <h4 className="flex items-center gap-2 text-sm font-semibold text-foreground uppercase tracking-wide mb-4">
        <ListTree className="w-4 h-4 text-primary" />
        On This Page
      </h4>
      <nav aria-label="Table of contents">
        <ul className="space-y-1.5">
          {items.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`block text-sm py-1.5 px-3 rounded-lg transition-colors ${
                  activeId === item.id
                    ? 'text-primary bg-primary/10 font-medium'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
              >
                {item.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}
