'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, Calendar } from 'lucide-react'
import { SectionHeader } from '@/components/ui/section-header'
import blogPosts from '@/data/blog.json'
import { fadeUp, staggerContainer, defaultTransition, viewportOnce } from '@/lib/animations'

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })
}

export function BlogSection() {
  return (
    <section id="blog" className="py-20 lg:py-28 bg-muted/30 relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <SectionHeader
          badge="Insights & Ideas"
          title={
            <>
              Latest From Our{' '}
              <span className="text-primary">Blog</span>
            </>
          }
          description="Expert perspectives on branding, design strategy, and digital growth."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              variants={fadeUp}
              transition={{ ...defaultTransition, delay: index * 0.1 }}
            >
              <Link href="/contact" className="group block h-full">
                <div className="card-premium overflow-hidden h-full group-hover:-translate-y-1 transition-transform duration-300">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/90 text-primary">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                      <Calendar className="w-3.5 h-3.5" />
                      {formatDate(post.date)}
                    </div>

                    <h3 className="font-display text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                      {post.excerpt}
                    </p>

                    <span className="inline-flex items-center text-sm font-medium text-primary gap-1">
                      Read More
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
