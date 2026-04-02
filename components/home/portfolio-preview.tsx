'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import portfolio from '@/data/portfolio.json'

const categoryColors: Record<string, string> = {
  'Branding': 'bg-blue-500/10 text-blue-500',
  'Flyers': 'bg-green-500/10 text-green-500',
  'Posters': 'bg-purple-500/10 text-purple-500',
  'Logos': 'bg-amber-500/10 text-amber-500',
  'Social Media': 'bg-pink-500/10 text-pink-500',
  'Print': 'bg-cyan-500/10 text-cyan-500',
  'Web': 'bg-indigo-500/10 text-indigo-500',
}

export function PortfolioPreview() {
  const previewItems = portfolio.slice(0, 6)

  return (
    <section className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Our Work
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Featured{' '}
            <span className="text-primary">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A selection of our recent work showcasing our expertise in branding, 
            design, and visual communication.
          </p>
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {previewItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <Link href="/portfolio" className="block">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/30 transition-all">
                  {/* Portfolio Image */}
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  
                  {/* Content Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
                  
                  {/* Project Info */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-between">
                    {/* Category Badge */}
                    <div className="flex justify-end">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${categoryColors[item.category] || 'bg-primary/10 text-primary'}`}>
                        {item.category}
                      </span>
                    </div>
                    
                    {/* Title & Description */}
                    <div className="translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                        {item.description}
                      </p>
                      <div className="flex items-center gap-2">
                        {item.tags.slice(0, 3).map(tag => (
                          <span key={tag} className="text-xs text-muted-foreground px-2 py-1 rounded bg-muted">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* View Icon */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 rounded-full bg-primary/90 flex items-center justify-center shadow-lg">
                      <ExternalLink className="w-5 h-5 text-primary-foreground" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 gap-2">
            <Link href="/portfolio">
              View Full Portfolio
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
