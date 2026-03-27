'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, FileImage, Image as ImageIcon, Palette, Sparkles, Share2, CreditCard, BookOpen, Printer, Globe, Flag, Calendar, Building2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import services from '@/data/services.json'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  FileImage,
  Image: ImageIcon,
  Palette,
  Sparkles,
  Share2,
  CreditCard,
  BookOpen,
  Printer,
  Globe,
  Flag,
  Calendar,
  Building2,
}

export function ServicesPreview() {
  const previewServices = services.slice(0, 8)

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
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Creative Solutions for{' '}
            <span className="text-primary">Every Need</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            From eye-catching flyers to complete brand identities, we deliver premium 
            visual solutions that help your business stand out.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {previewServices.map((service, index) => {
            const Icon = iconMap[service.icon] || FileImage
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={`/services/${service.slug}`} className="group block h-full">
                  <div className="relative h-full rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 overflow-hidden">
                    {/* Service Image */}
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                      
                      {/* Icon */}
                      <div className="absolute bottom-3 left-3">
                        <div className="w-10 h-10 rounded-xl bg-card/90 backdrop-blur-sm flex items-center justify-center shadow-lg">
                          <Icon className="w-5 h-5 text-primary" />
                        </div>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-5">
                      {/* Category Badge */}
                      <span className="inline-block px-2 py-0.5 rounded text-xs font-medium bg-accent/10 text-accent mb-2">
                        {service.category}
                      </span>
                      
                      {/* Title */}
                      <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {service.shortDescription}
                      </p>

                      {/* Arrow */}
                      <div className="mt-3 flex items-center text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Button asChild size="lg" variant="outline" className="gap-2">
            <Link href="/services">
              View All Services
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
