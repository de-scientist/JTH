'use client'

import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, FileText, Star, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import type { BlogPost } from '@/lib/blog-types'
import { BlogCard } from '@/components/blog/blog-card'
import { fadeUp, staggerContainer, defaultTransition, viewportOnce } from '@/lib/animations'

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })
}

export function BlogBrowser({ posts }: { posts: BlogPost[] }) {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('All')
  const featuredPost = posts.find((p) => p.featured) ?? posts[0]

  const categories = useMemo(
    () => ['All', ...Array.from(new Set(posts.map((p) => p.category)))],
    [posts]
  )

  const filtered = useMemo(() => {
    return posts
      .filter((p) => p.slug !== featuredPost.slug)
      .filter((p) => category === 'All' || p.category === category)
      .filter((p) => {
        if (!query.trim()) return true
        const q = query.toLowerCase()
        return (
          p.title.toLowerCase().includes(q) ||
          p.excerpt.toLowerCase().includes(q) ||
          p.subtitle.toLowerCase().includes(q) ||
          p.tags.some((t) => t.toLowerCase().includes(q)) ||
          p.category.toLowerCase().includes(q)
        )
      })
  }, [posts, category, query, featuredPost.slug])

  const showFeatured = category === 'All' && !query.trim()

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[420px] lg:min-h-[480px] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/blog/blog1.jpg"
            alt="JTH Graphix Production insights and ideas"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-32 pb-16 lg:pt-40 lg:pb-24">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.span
              variants={fadeUp}
              transition={defaultTransition}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
              Insights &amp; Ideas
            </motion.span>
            <motion.h1
              variants={fadeUp}
              transition={defaultTransition}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-5 text-balance tracking-tight leading-[1.1]"
            >
              Latest From Our{' '}
              <span className="text-gradient">Blog</span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              transition={defaultTransition}
              className="text-muted-foreground text-lg lg:text-xl leading-relaxed text-pretty"
            >
              Expert perspectives on branding, design strategy, and digital growth — written by the team at JTH Graphix Production.
            </motion.p>

            {/* Search */}
            <motion.div
              variants={fadeUp}
              transition={defaultTransition}
              className="mt-10"
            >
              <div className="relative max-w-xl mx-auto">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search articles, topics, or tags..."
                  aria-label="Search articles"
                  className="w-full h-14 pl-12 pr-4 rounded-2xl bg-card border border-border focus:border-primary/50 focus:ring-4 focus:ring-primary/10 outline-none transition-all text-foreground placeholder:text-muted-foreground"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-6 lg:py-8 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
                  category === c
                    ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/20'
                    : 'bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/30'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {showFeatured && featuredPost && (
        <section className="py-10 lg:py-14 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={defaultTransition}
            >
              <div className="card-premium overflow-hidden group hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500">
                <div className="grid lg:grid-cols-2">
                  <div className="relative aspect-[16/10] lg:aspect-auto min-h-[280px] overflow-hidden">
                    <Image
                      src={featuredPost.featuredImage}
                      alt={featuredPost.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                    <div className="absolute top-5 left-5 flex items-center gap-2">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-brand text-white text-xs font-semibold shadow-lg">
                        <Star className="w-3.5 h-3.5 fill-current" />
                        Featured
                      </span>
                      <span className="px-3 py-1.5 rounded-full bg-white/90 text-primary text-xs font-medium backdrop-blur-sm shadow-lg">
                        {featuredPost.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-muted-foreground mb-4">
                      <span>{formatDate(featuredPost.publishDate)}</span>
                      <span>{featuredPost.readingTime} min read</span>
                      <span>{featuredPost.author.name}</span>
                    </div>
                    <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors text-balance">
                      {featuredPost.title}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {featuredPost.subtitle}
                    </p>
                    <Link
                      href={`/blogs/${featuredPost.slug}`}
                      className="inline-flex items-center text-primary font-medium gap-2 hover:gap-3 transition-all w-fit"
                    >
                      Read Featured Article
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Grid */}
      <section className="py-10 lg:py-14 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          {filtered.length > 0 ? (
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
            >
              <AnimatePresence mode="popLayout">
                {filtered.map((post, index) => (
                  <motion.div
                    key={post.slug}
                    variants={fadeUp}
                    transition={{ ...defaultTransition, delay: index * 0.05 }}
                    layout
                  >
                    <BlogCard post={post} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          ) : (
            <div className="text-center py-20">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center mb-5">
                <FileText className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                No articles found
              </h3>
              <p className="text-muted-foreground mb-6">
                Try a different search term or category.
              </p>
              <button
                onClick={() => {
                  setQuery('')
                  setCategory('All')
                }}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors cursor-pointer"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
