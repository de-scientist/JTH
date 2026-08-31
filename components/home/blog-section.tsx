'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, Calendar, Clock } from 'lucide-react'
import { SectionHeader } from '@/components/ui/section-header'
import { Button } from '@/components/ui/button'
import blogPosts from '@/data/blog.json'
import { useIsMobile } from '@/components/ui/use-mobile'
import { fadeUp, staggerContainer, defaultTransition, viewportOnce } from '@/lib/animations'

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })
}

export function BlogSection() {
  const isMobile = useIsMobile()
  const displayedPosts = isMobile ? blogPosts.slice(0, 2) : blogPosts.slice(0, 3)

  return (
    <section id="blog" className="py-20 lg:py-32 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <SectionHeader
          badge="Insights & Resources"
          title={
            <>
              Strategies to Grow Your{' '}
              <span className="text-gradient">Business</span>
            </>
          }
          description="Expert perspectives on branding, design strategy, digital growth, technology, and what it takes to build a business that stands out."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {displayedPosts.map((post, index) => (
            <motion.article
              key={post.id}
              variants={fadeUp}
              transition={{ ...defaultTransition, delay: index * 0.1 }}
            >
              <Link href={`/blogs/${post.slug}`} className="group block h-full">
                <div className="card-premium overflow-hidden h-full group-hover:-translate-y-2 transition-all duration-500">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={post.featuredImage}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1.5 rounded-full text-xs font-medium bg-white/90 text-primary backdrop-blur-sm shadow-lg">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 lg:p-7">
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs text-muted-foreground mb-3">
                      <span className="inline-flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        {formatDate(post.publishDate)}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" />
                        {post.readingTime} min
                      </span>
                    </div>

                    <h3 className="font-display text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2 mb-5 leading-relaxed">
                      {post.excerpt}
                    </p>

                    <span className="inline-flex items-center text-sm font-medium text-primary gap-2">
                      Read Article
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          transition={defaultTransition}
          className="text-center mt-14"
        >
          <Button
            asChild
            size="lg"
            variant="outline"
            className="rounded-xl gap-2 h-12 px-8 border-primary/20 hover:border-primary/40 transition-all duration-300"
          >
            <Link href="/blogs">
              Explore All Insights
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
