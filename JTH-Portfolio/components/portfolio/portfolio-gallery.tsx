'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ExternalLink, ArrowRight, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import portfolio from '@/data/portfolio.json'
import siteConfig from '@/data/site-config.json'

const categories = ['All', 'Branding', 'Flyers', 'Posters', 'Logos', 'Social Media', 'Print', 'Web']

const categoryColors: Record<string, string> = {
  'Branding': 'bg-blue-500/10 text-blue-500',
  'Flyers': 'bg-green-500/10 text-green-500',
  'Posters': 'bg-purple-500/10 text-purple-500',
  'Logos': 'bg-amber-500/10 text-amber-500',
  'Social Media': 'bg-pink-500/10 text-pink-500',
  'Print': 'bg-cyan-500/10 text-cyan-500',
  'Web': 'bg-indigo-500/10 text-indigo-500',
}

export function PortfolioGallery() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedItem, setSelectedItem] = useState<typeof portfolio[0] | null>(null)

  const filteredItems = selectedCategory === 'All' 
    ? portfolio 
    : portfolio.filter(item => item.category === selectedCategory)

  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === category
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/30'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="group cursor-pointer"
                onClick={() => setSelectedItem(item)}
              >
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/30 transition-all">
                  {/* Portfolio Image */}
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center">
                      <ExternalLink className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${categoryColors[item.category] || 'bg-primary/10 text-primary'}`}>
                      {item.category}
                    </span>
                  </div>
                  
                  {/* Title at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background/90 to-transparent">
                    <h3 className="font-semibold text-foreground">{item.title}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Modal */}
        <AnimatePresence>
          {selectedItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
              onClick={() => setSelectedItem(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative w-full max-w-3xl bg-card rounded-3xl border border-border shadow-2xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedItem(null)}
                  className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-background/80 flex items-center justify-center text-foreground hover:bg-background transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Image Area */}
                <div className="relative aspect-video">
                  <Image
                    src={selectedItem.image}
                    alt={selectedItem.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 800px"
                  />
                </div>

                {/* Content */}
                <div className="p-6 lg:p-8">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-4 ${categoryColors[selectedItem.category] || 'bg-primary/10 text-primary'}`}>
                    {selectedItem.category}
                  </span>
                  <h2 className="text-2xl font-bold text-foreground mb-3">
                    {selectedItem.title}
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    {selectedItem.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedItem.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 rounded-full bg-muted text-muted-foreground text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="flex flex-wrap gap-4">
                    <Button asChild className="bg-primary hover:bg-primary/90 gap-2">
                      <Link href="/contact">
                        Start Similar Project
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </Button>
                    <Button asChild variant="outline" className="gap-2">
                      <a 
                        href={`https://wa.me/${siteConfig.whatsapp}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <MessageCircle className="w-4 h-4" />
                        Discuss on WhatsApp
                      </a>
                    </Button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-muted-foreground mb-6">
            Like what you see? Let&apos;s create something amazing for your brand.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 gap-2">
              <Link href="/contact">
                Start Your Project
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="gap-2">
              <Link href="/services">
                Explore Services
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
