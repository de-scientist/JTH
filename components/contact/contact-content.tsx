'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MessageCircle, Send, MapPin, Clock, Facebook, Instagram, Linkedin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { FieldGroup, Field, FieldLabel } from '@/components/ui/field'
import siteConfig from '@/data/site-config.json'

const TikTokIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
)

const XIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
)

const services = [
  'Flyer Design',
  'Poster Design',
  'Logo Design',
  'Branding & Visual Identity',
  'Social Media Graphics',
  'Business Cards',
  'Brochures',
  'Premium Printing',
  'Website Design',
  'Banner Design',
  'Event Graphics',
  'Other'
]

const socialLinks = [
  { href: siteConfig.socialLinks.facebook, icon: Facebook, label: 'Facebook' },
  { href: siteConfig.socialLinks.instagram, icon: Instagram, label: 'Instagram' },
  { href: siteConfig.socialLinks.tiktok, icon: TikTokIcon, label: 'TikTok' },
  { href: siteConfig.socialLinks.linkedin, icon: Linkedin, label: 'LinkedIn' },
  { href: siteConfig.socialLinks.x, icon: XIcon, label: 'X' },
]

export function ContactContent() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

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
              Contact Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              Let&apos;s Start Your{' '}
              <span className="text-primary">Project</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to bring your brand to life? Get in touch with us and 
              let&apos;s create something amazing together.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-2"
            >
              <h2 className="text-2xl font-bold text-foreground mb-6">Get in Touch</h2>
              <p className="text-muted-foreground mb-8">
                Have a project in mind? We&apos;d love to hear from you. 
                Send us a message and we&apos;ll respond as soon as possible.
              </p>

              {/* Contact Methods */}
              <div className="space-y-6 mb-8">
                <a 
                  href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
                  className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Call Us</p>
                    <p className="font-semibold text-foreground">{siteConfig.phone}</p>
                  </div>
                </a>

                <a 
                  href={`https://wa.me/${siteConfig.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-[#25D366]/30 transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#25D366]/10 flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-[#25D366]" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">WhatsApp</p>
                    <p className="font-semibold text-foreground">{siteConfig.phone}</p>
                  </div>
                </a>

                <a 
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-semibold text-foreground">{siteConfig.email}</p>
                  </div>
                </a>
              </div>

              {/* Additional Info */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Clock className="w-5 h-5 text-primary" />
                  <span>Mon - Sat: 8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>Nairobi, Kenya</span>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <p className="font-medium text-foreground mb-4">Follow Us</p>
                <div className="flex gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-xl bg-card border border-border flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
                      aria-label={social.label}
                    >
                      <social.icon />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-3"
            >
              <div className="bg-card rounded-3xl border border-border p-6 lg:p-8">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-6">
                      <Send className="w-8 h-8 text-green-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                    </p>
                    <Button onClick={() => setIsSubmitted(false)} variant="outline">
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <h3 className="text-xl font-bold text-foreground mb-6">
                      Send us a Message
                    </h3>
                    
                    <FieldGroup className="space-y-5">
                      <div className="grid md:grid-cols-2 gap-5">
                        <Field>
                          <FieldLabel>Your Name</FieldLabel>
                          <Input 
                            placeholder="John Doe" 
                            required 
                            className="h-12"
                          />
                        </Field>
                        <Field>
                          <FieldLabel>Email Address</FieldLabel>
                          <Input 
                            type="email" 
                            placeholder="john@example.com" 
                            required 
                            className="h-12"
                          />
                        </Field>
                      </div>

                      <div className="grid md:grid-cols-2 gap-5">
                        <Field>
                          <FieldLabel>Phone Number</FieldLabel>
                          <Input 
                            type="tel" 
                            placeholder="+254 700 000000" 
                            className="h-12"
                          />
                        </Field>
                        <Field>
                          <FieldLabel>Service Needed</FieldLabel>
                          <Select>
                            <SelectTrigger className="h-12">
                              <SelectValue placeholder="Select a service" />
                            </SelectTrigger>
                            <SelectContent>
                              {services.map((service) => (
                                <SelectItem key={service} value={service.toLowerCase().replace(/\s+/g, '-')}>
                                  {service}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </Field>
                      </div>

                      <Field>
                        <FieldLabel>Project Details</FieldLabel>
                        <Textarea 
                          placeholder="Tell us about your project, timeline, and any specific requirements..."
                          className="min-h-32 resize-none"
                          required
                        />
                      </Field>

                      <Button 
                        type="submit" 
                        size="lg" 
                        className="w-full bg-primary hover:bg-primary/90 h-12 gap-2"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>Sending...</>
                        ) : (
                          <>
                            Send Inquiry
                            <Send className="w-4 h-4" />
                          </>
                        )}
                      </Button>
                    </FieldGroup>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Contact CTA */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Prefer a Quick Chat?
            </h2>
            <p className="text-muted-foreground mb-8">
              For faster response, reach out to us directly via phone or WhatsApp.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button asChild size="lg" variant="outline" className="gap-2 h-12 px-8">
                <a href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}>
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
              </Button>
              <Button asChild size="lg" className="bg-[#25D366] hover:bg-[#25D366]/90 text-white gap-2 h-12 px-8">
                <a 
                  href={`https://wa.me/${siteConfig.whatsapp}?text=Hello%20JTH%20Graphix%20Production!%20I%20would%20like%20to%20discuss%20a%20project.`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-5 h-5" />
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
