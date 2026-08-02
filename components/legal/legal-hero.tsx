'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { CalendarDays, Clock, FileText, ShieldCheck } from 'lucide-react'
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { staggerContainer, fadeUp, defaultTransition } from '@/lib/animations'
import type { LegalPageData } from '@/components/legal/types'

function estimateReadingTime(data: LegalPageData): number {
  const wordCount = data.sections.reduce((total, section) => {
    let words = section.paragraphs.join(' ').split(/\s+/).length
    if (section.bullets) {
      words += section.bullets.join(' ').split(/\s+/).length
    }
    return total + words
  }, 0)
  return Math.max(1, Math.round(wordCount / 200))
}

export function LegalHero({ data }: { data: LegalPageData }) {
  const readingTime = estimateReadingTime(data)

  return (
    <header className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 bg-background overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-footer-accent/5 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-grid opacity-20" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.nav variants={fadeUp} transition={defaultTransition} aria-label="Breadcrumb">
            <Breadcrumb className="inline-flex mb-6">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link href="/">Home</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>{data.title} {data.titleAccent}</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </motion.nav>

          <motion.span
            variants={fadeUp}
            transition={defaultTransition}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
          >
            <ShieldCheck className="w-4 h-4" />
            {data.badge}
          </motion.span>

          <motion.h1
            variants={fadeUp}
            transition={defaultTransition}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance"
          >
            {data.title} <span className="text-gradient">{data.titleAccent}</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            transition={defaultTransition}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            {data.description}
          </motion.p>

          <motion.div
            variants={fadeUp}
            transition={defaultTransition}
            className="mt-8 flex flex-wrap items-center justify-center gap-3"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border text-sm text-muted-foreground shadow-sm">
              <CalendarDays className="w-4 h-4 text-primary" />
              Last Updated: {data.lastUpdated}
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border text-sm text-muted-foreground shadow-sm">
              <Clock className="w-4 h-4 text-primary" />
              {readingTime} min read
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border text-sm text-muted-foreground shadow-sm">
              <FileText className="w-4 h-4 text-primary" />
              {data.sections.length} sections
            </span>
          </motion.div>
        </motion.div>
      </div>
    </header>
  )
}
