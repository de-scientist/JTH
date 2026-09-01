'use client'

import Link from 'next/link'
import NextImage from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, ArrowLeft, Check, FileImage, Image, Palette, Sparkles, Share2, CreditCard, BookOpen, Printer, Globe, Flag, Calendar, Building2, MessageCircle, Target, Zap, Shield } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { siteConfig } from '@/lib/site-config'

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

interface ServiceFeature {
  title?: string
  description?: string
}

interface ServiceProcessStep {
  step?: number
  title?: string
  description?: string
}

interface ServiceFAQ {
  q: string
  a: string
}

interface Service {
  id: string
  slug: string
  title: string
  tagline?: string
  shortDescription: string
  fullDescription?: string
  icon: string
  category: string
  coverImage?: string
  galleryImages?: string[]
  benefits?: string[]
  deliverables?: string[]
  useCases?: string[]
  process?: string[]
  faq?: ServiceFAQ[]
  relatedServices?: string[]
  ctaPrimary?: string
  ctaSecondary?: string
}

interface Props {
  service: Service
  relatedServices: Service[]
}

const defaultFaqs: ServiceFAQ[] = [
  {
    q: 'How long does a typical project take?',
    a: 'Project timelines vary based on complexity. Simple projects typically take 2–5 days, while comprehensive projects may take 1–4 weeks. We always discuss timelines upfront and keep you updated throughout.'
  },
  {
    q: 'What information do you need to start?',
    a: 'We need a clear brief about your project goals, target audience, any existing brand guidelines, reference materials you like, and specific requirements. The more detail you provide, the better we can serve you.'
  },
  {
    q: 'Do you offer revisions?',
    a: 'Yes — revisions are included in our process. We work collaboratively to refine the work until it meets your expectations and business objectives.'
  }
]

export function ServiceDetailContent({ service, relatedServices }: Props) {
  const Icon = iconMap[service.icon] || FileImage
  const heroImage = service.coverImage || '/images/placeholder.jpg'
  const benefits = service.benefits ?? []
  const deliverables = service.deliverables ?? []
  const useCases = service.useCases ?? []
  const processSteps = service.process ?? []
  const faqs = service.faq?.length ? service.faq : defaultFaqs

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
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
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
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <span className="px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-medium">
                  {service.category}
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
                {service.title}
              </h1>
              {service.tagline && (
                <p className="text-xl md:text-2xl text-primary font-medium mb-6">
                  {service.tagline}
                </p>
              )}
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
                {service.fullDescription || service.shortDescription}
              </p>

              <div className="flex flex-wrap gap-4 mt-8">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 gap-2">
                  <Link href="/contact">
                    {service.ctaPrimary || 'Request a Custom Quote'}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="gap-2">
                  <a
                    href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
                      `Hello JTH Graphix Production. I would like to request a custom quotation for your ${service.title} service.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="w-4 h-4" />
                    {service.ctaSecondary || 'Request via WhatsApp'}
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery */}
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

      {/* What You Get (Benefits) */}
      {benefits.length > 0 && (
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-foreground mb-4">What You Get</h2>
              <p className="text-muted-foreground">
                When you choose {service.title} from JTH, you receive tangible value that drives results.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                  className="relative p-6 rounded-2xl bg-card border border-border hover:border-primary/20 transition-colors group"
                >
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                    <span className="text-sm font-bold text-primary group-hover:text-white transition-colors">{String(index + 1).padStart(2, '0')}</span>
                  </div>
                  <p className="text-foreground font-medium leading-relaxed">{benefit}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Deliverables */}
      {deliverables.length > 0 && (
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-foreground mb-4">Deliverables</h2>
              <p className="text-muted-foreground">
                Exactly what you will receive from JTH for this service.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {deliverables.map((deliverable, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border"
                >
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-sm text-foreground">{deliverable}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Perfect For (Use Cases) */}
      {useCases.length > 0 && (
        <section className="py-16 lg:py-24 bg-muted/30">
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
                Our {service.title.toLowerCase()} service is designed for these use cases and client types.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-4xl mx-auto">
              {useCases.map((useCase, index) => (
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
      )}

      {/* Our Process */}
      {processSteps.length > 0 && (
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-foreground mb-4">Our Process</h2>
              <p className="text-muted-foreground">
                A clear, structured approach to delivering {service.title.toLowerCase()} — from brief to final delivery.
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <div className="relative">
                <div className="hidden lg:block absolute top-8 left-[calc(16.66%-1rem)] right-[calc(16.66%-1rem)] h-0.5 bg-gradient-to-r from-primary/20 via-primary to-primary/20" aria-hidden="true" />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {processSteps.map((step, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.08 }}
                      className="relative text-center lg:text-left"
                    >
                      <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto lg:mx-0 mb-4 relative z-10">
                        <span className="text-lg font-bold text-primary">{String(index + 1).padStart(2, '0')}</span>
                      </div>
                      <h3 className="font-semibold text-foreground mb-2">{step}</h3>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Why JTH */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">Why Choose JTH</h2>
            <p className="text-muted-foreground">
              What makes JTH Graphix Production the right partner for your {service.title.toLowerCase()} project.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                icon: Target,
                title: 'Strategy-Led Design',
                description: 'Every deliverable starts with understanding your goals, audience, and market — not just making things look good.'
              },
              {
                icon: Zap,
                title: 'Fast, Reliable Delivery',
                description: 'We respect your timelines. Projects are delivered on schedule with clear communication throughout the process.'
              },
              {
                icon: Shield,
                title: 'Quality You Can Trust',
                description: 'Professional output built with industry-standard tools and practices — designed to perform in the real world.'
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="p-6 rounded-2xl bg-card border border-border"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      {faqs.length > 0 && (
        <section className="py-16 lg:py-24 bg-background">
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
                      <span className="font-medium text-foreground">{faq.q}</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </div>
        </section>
      )}

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <section className="py-16 lg:py-24 bg-muted/30">
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
      <section className="py-16 lg:py-24 bg-background">
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
              Request a custom quote for your {service.title.toLowerCase()} project and let&apos;s create something remarkable together.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 gap-2 h-12 px-8">
                <Link href="/contact">
                  {service.ctaPrimary || 'Request a Custom Quote'}
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
