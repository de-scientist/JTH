'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Clock,
  User,
  Check,
  Quote,
  MessageCircle,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { TableOfContents } from '@/components/blog/table-of-contents'
import { SocialShare } from '@/components/blog/social-share'
import { BlogCard } from '@/components/blog/blog-card'
import { fadeUp, defaultTransition, viewportOnce } from '@/lib/animations'
import { siteConfig } from '@/lib/site-config'
import type { BlogContentBlock, BlogPost } from '@/lib/blog-types'

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
}

function ContentBlock({ block }: { block: BlogContentBlock }) {
  switch (block.type) {
    case 'heading':
      return (
        <h2
          id={block.id}
          className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-5 scroll-mt-28"
        >
          {block.text}
        </h2>
      )
    case 'paragraph':
      return (
        <p className="text-muted-foreground leading-relaxed text-lg mb-6">
          {block.text}
        </p>
      )
    case 'list':
      return (
        <ul className="space-y-3 mb-6">
          {block.items.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-muted-foreground leading-relaxed text-lg">
              <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                <Check className="w-4 h-4 text-primary" />
              </span>
              {item}
            </li>
          ))}
        </ul>
      )
    case 'quote':
      return (
        <blockquote className="relative my-10 pl-6 border-l-4 border-primary rounded-r-2xl bg-primary/5 p-6">
          <Quote className="w-6 h-6 text-primary mb-3" />
          <p className="text-xl md:text-2xl font-display font-semibold text-foreground leading-relaxed">
            {block.text}
          </p>
        </blockquote>
      )
    default:
      return null
  }
}

interface Props {
  post: BlogPost
  relatedPosts: BlogPost[]
  prevPost: BlogPost | null
  nextPost: BlogPost | null
}

export function BlogArticle({ post, relatedPosts, prevPost, nextPost }: Props) {
  const tocItems = post.content
    .filter((block) => block.type === 'heading')
    .map((block) => ({ id: (block as { id: string }).id, text: (block as { text: string }).text }))

  const whatsappHref = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
    `Hello JTH Graphix Production. I read your article "${post.title}" and I would like to discuss a project.`
  )}`

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-12 lg:pt-40 lg:pb-16 bg-background relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={defaultTransition}
            className="max-w-3xl mx-auto"
          >
            <Link
              href="/blogs"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              All Articles
            </Link>

            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
                {post.category}
              </span>
              {post.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 rounded-full bg-card border border-border text-xs text-muted-foreground"
                >
                  #{tag}
                </span>
              ))}
            </div>

            <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-5 text-balance tracking-tight leading-[1.1]">
              {post.title}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground text-pretty mb-8">
              {post.subtitle}
            </p>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-2">
                <User className="w-4 h-4 text-primary" />
                {post.author.name}
              </span>
              <span className="inline-flex items-center gap-2">
                <Calendar className="w-4 h-4 text-primary" />
                {formatDate(post.publishDate)}
              </span>
              <span className="inline-flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" />
                {post.readingTime} min read
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Cover image */}
      <section className="pb-12 lg:pb-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={defaultTransition}
            className="relative aspect-[21/9] max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl shadow-primary/10"
          >
            <Image
              src={post.featuredImage}
              alt={post.title}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1200px) 100vw, 80vw"
            />
          </motion.div>
        </div>
      </section>

      {/* Article body */}
      <section className="py-12 lg:py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-[280px_1fr] gap-10 max-w-6xl mx-auto">
            {/* Sticky sidebar: TOC + share */}
            <div className="hidden lg:block">
              <div className="sticky top-28 space-y-6">
                <TableOfContents items={tocItems} />
                <div className="rounded-2xl bg-card border border-border p-6">
                  <h4 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-4">
                    Share This Article
                  </h4>
                  <SocialShare title={post.title} />
                </div>
              </div>
            </div>

            {/* Content */}
            <motion.article
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={fadeUp}
              transition={defaultTransition}
              className="max-w-2xl"
            >
              {post.content.map((block, index) => (
                <ContentBlock key={index} block={block} />
              ))}

              {/* Mobile share */}
              <div className="lg:hidden mt-10 pt-8 border-t border-border">
                <SocialShare title={post.title} />
              </div>

              {/* Mobile TOC */}
              <div className="lg:hidden mt-6">
                <TableOfContents items={tocItems} />
              </div>
            </motion.article>
          </div>
        </div>
      </section>

      {/* Author card + CTA */}
      <section className="py-12 lg:py-16 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="card-premium p-8 text-center">
              <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
                Ready to Bring Your Ideas to Life?
              </h3>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                Whether it&apos;s branding, design, or digital growth — our team is ready to help you create something remarkable.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Button asChild size="lg" className="gap-2">
                  <Link href="/contact">
                    Start a Project
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="gap-2">
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Chat on WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prev / Next */}
      {(prevPost || nextPost) && (
        <section className="py-12 lg:py-16 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {prevPost ? (
                <Link
                  href={`/blogs/${prevPost.slug}`}
                  className="card-premium p-6 group hover:border-primary/30 transition-all"
                >
                  <span className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                    <ArrowLeft className="w-3.5 h-3.5" />
                    Previous Article
                  </span>
                  <h4 className="font-display font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                    {prevPost.title}
                  </h4>
                </Link>
              ) : (
                <div />
              )}
              {nextPost ? (
                <Link
                  href={`/blogs/${nextPost.slug}`}
                  className="card-premium p-6 group text-right hover:border-primary/30 transition-all"
                >
                  <span className="flex items-center justify-end gap-2 text-xs text-muted-foreground mb-2">
                    Next Article
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                  <h4 className="font-display font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                    {nextPost.title}
                  </h4>
                </Link>
              ) : (
                <div />
              )}
            </div>
          </div>
        </section>
      )}

      {/* Related */}
      {relatedPosts.length > 0 && (
        <section className="py-12 lg:py-16 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-10">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
                  Keep Reading
                </span>
                <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                  Related Articles
                </h3>
              </div>
              <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
                {relatedPosts.map((related) => (
                  <BlogCard key={related.slug} post={related} />
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  )
}
