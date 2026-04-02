'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Star, Quote, ArrowRight, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import testimonials from '@/data/testimonials.json'
import siteConfig from '@/data/site-config.json'

export function TestimonialsContent() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-background relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Testimonials
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              What Our{' '}
              <span className="text-primary">Clients Say</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Real feedback from businesses and organizations we&apos;ve helped succeed 
              through exceptional design and branding.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-muted/30 border-y border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <p className="text-4xl font-bold text-primary mb-1">200+</p>
              <p className="text-muted-foreground">Happy Clients</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center"
            >
              <p className="text-4xl font-bold text-primary mb-1">5.0</p>
              <p className="text-muted-foreground">Average Rating</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <p className="text-4xl font-bold text-primary mb-1">98%</p>
              <p className="text-muted-foreground">Client Satisfaction</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center"
            >
              <p className="text-4xl font-bold text-primary mb-1">80%</p>
              <p className="text-muted-foreground">Repeat Clients</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="h-full p-6 lg:p-8 rounded-3xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5">
                  {/* Quote Icon */}
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <Quote className="w-6 h-6 text-primary" />
                  </div>

                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                    ))}
                  </div>

                  {/* Content */}
                  <blockquote className="text-foreground mb-6 leading-relaxed">
                    &ldquo;{testimonial.content}&rdquo;
                  </blockquote>

                  {/* Gold accent line */}
                  <div className="w-12 h-1 bg-gradient-to-r from-accent to-accent/30 rounded-full mb-6" />

                  {/* Author */}
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Testimonial */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <div className="relative bg-card rounded-3xl border border-border p-8 md:p-12 lg:p-16 text-center">
              {/* Decorative elements */}
              <div className="absolute top-4 left-4 w-20 h-20 border-l-2 border-t-2 border-accent/30 rounded-tl-3xl" />
              <div className="absolute bottom-4 right-4 w-20 h-20 border-r-2 border-b-2 border-accent/30 rounded-br-3xl" />

              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <Quote className="w-8 h-8 text-primary" />
                </div>

                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-accent text-accent" />
                  ))}
                </div>

                <blockquote className="text-xl md:text-2xl lg:text-3xl text-foreground mb-8 leading-relaxed font-medium">
                  &ldquo;JTH Graphix Production has been instrumental in elevating our 
                  church&apos;s visual communication. Their flyers and posters for our 
                  events always capture the spirit of our message and draw amazing 
                  attendance.&rdquo;
                </blockquote>

                <div>
                  <p className="text-lg font-semibold text-foreground">Pastor Michael Ochieng</p>
                  <p className="text-muted-foreground">
                    Senior Pastor, Grace Community Church
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

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
              Join Our Happy Clients
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Experience the JTH difference. Let&apos;s create something amazing 
              for your brand today.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 gap-2 h-12 px-8">
                <Link href="/contact">
                  Start Your Project
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="gap-2 h-12 px-8 bg-[#25D366]/10 border-[#25D366]/30 text-[#25D366] hover:bg-[#25D366]/20">
                <a 
                  href={`https://wa.me/${siteConfig.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-4 h-4" />
                  Chat on WhatsApp
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
