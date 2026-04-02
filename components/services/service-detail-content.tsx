'use client'

import Link from 'next/link'
import NextImage from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, ArrowLeft, Check, FileImage, Image, Palette, Sparkles, Share2, CreditCard, BookOpen, Printer, Globe, Flag, Calendar, Building2, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import siteConfig from '@/data/site-config.json'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  FileImage,
  Image,
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

interface Service {
  id: string
  slug: string
  title: string
  shortDescription: string
  description: string
  fullDescription?: string
  icon: string
  category: string
  image?: string
  coverImage?: string
  galleryImages?: string[]
  features?: string[]
  benefits?: string[]
  useCases: string[]
  deliverables: string[]
}

interface Props {
  service: Service
  relatedServices: Service[]
}

const faqs = [
  {
    question: 'How long does a typical project take?',
    answer: 'Project timelines vary based on complexity. Simple designs like flyers typically take 2-3 days, while comprehensive branding projects may take 2-4 weeks. We always discuss timelines upfront and keep you updated throughout.'
  },
  {
    question: 'What information do you need to start?',
    answer: 'We need a clear brief about your project goals, target audience, any brand guidelines, reference materials you like, and specific requirements. The more details you provide, the better we can serve you.'
  },
  {
    question: 'Do you offer revisions?',
    answer: 'Yes! We include multiple revision rounds in our process to ensure you are completely satisfied with the final result. We work collaboratively until the design meets your expectations.'
  },
  {
    question: 'What file formats do you deliver?',
    answer: 'We provide all necessary file formats including print-ready PDFs, high-resolution images (PNG, JPG), and editable source files. For web projects, we deliver optimized formats for digital use.'
  }
]

export function ServiceDetailContent({ service, relatedServices }: Props) {
  const Icon = iconMap[service.icon] || FileImage

  const heroImage = service.coverImage || service.image || '/images/placeholder.jpg'
  const features = service.features ?? service.benefits ?? service.deliverables ?? []

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-background relative overflow-hidden">
        <div className="absolute inset-0">
          <NextImage
            src={heroImage}
            alt={service.title}
            fill
            className="object-cover opacity-10"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
          <div className="absolute inset-0 bg-black/10 dark:bg-black/20" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          {/* Back Link */}
          <Link 
            href="/services" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            All Services
          </Link>

          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Icon & Category */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <span className="px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium">
                  {service.category}
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                {service.title}
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
                {service.fullDescription || service.description || service.shortDescription}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 mt-8">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 gap-2">
                  <Link href="/contact">
                    Get a Quote
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="gap-2">
                  <a 
                    href={`https://wa.me/${siteConfig.whatsapp}?text=Hello!%20I'm%20interested%20in%20your%20${encodeURIComponent(service.title)}%20service.`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp Us
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured visual / gallery */}
      {service.galleryImages && service.galleryImages.length > 0 && (
        <section className="py-12 lg:py-16 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <Carousel>
                <CarouselContent className="grid grid-flow-col auto-cols-[100%]">
                  {service.galleryImages.map((src, i) => (
                    <CarouselItem key={i} className="px-0">
                      <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-card">
                        <NextImage src={src} alt={`${service.title} ${i + 1}`} fill className="object-cover" />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </div>
        </section>
      )}

      {/* Features & Deliverables */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold text-foreground mb-6">What You Get</h2>
              <div className="space-y-4">
                {features.map((feature: string, index: number) => (
                  <div key={index} className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Deliverables */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h2 className="text-2xl font-bold text-foreground mb-6">Deliverables</h2>
              <div className="space-y-4">
                {(service.deliverables ?? []).map((deliverable: string, index: number) => (
                  <div key={index} className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border">
                    <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-accent" />
                    </div>
                    <span className="text-foreground">{deliverable}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">Perfect For</h2>
            <p className="text-muted-foreground">
              Our {service.title.toLowerCase()} service is ideal for various applications
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-4xl mx-auto">
            {(service.useCases ?? []).map((useCase: string, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="p-4 rounded-xl bg-card border border-border text-center hover:border-primary/30 transition-colors"
              >
                <span className="text-sm text-foreground">{useCase}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Frequently Asked Questions
            </h2>

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card border border-border rounded-xl px-6"
                >
                  <AccordionTrigger className="text-left hover:no-underline">
                    <span className="font-medium text-foreground">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Related Services
            </h2>

            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {relatedServices.map((related, index) => {
                const RelatedIcon = iconMap[related.icon] || FileImage
                return (
                  <motion.div
                    key={related.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Link href={`/services/${related.slug}`} className="group block">
                      <div className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                          <RelatedIcon className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                          {related.title}
                        </h3>
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {related.shortDescription}
                        </p>
                      </div>
                    </Link>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let&apos;s discuss your {service.title.toLowerCase()} project and create something amazing together.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 gap-2 h-12 px-8">
                <Link href="/contact">
                  Start Your Project
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="gap-2 h-12 px-8">
                <Link href="/portfolio">
                  View Our Work
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
