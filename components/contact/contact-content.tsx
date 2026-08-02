'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MessageCircle, Send, MapPin, Clock, Facebook, Instagram, Linkedin, MailCheck } from 'lucide-react'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { FieldGroup, Field, FieldLabel } from '@/components/ui/field'
import siteConfig from '@/data/site-config.json'
import { buildContactMailtoUrl, openEmailClient, type ContactFormData } from '@/lib/contact'

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

const initialForm: ContactFormData = {
  fullName: '',
  email: '',
  phone: '',
  company: '',
  service: '',
  subject: '',
  message: '',
}

type FormErrors = Partial<Record<keyof ContactFormData, string>>

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validate(form: ContactFormData): FormErrors {
  const errors: FormErrors = {}

  if (!form.fullName.trim()) {
    errors.fullName = 'Please enter your full name.'
  }

  if (!form.email.trim()) {
    errors.email = 'Please enter your email address.'
  } else if (!emailPattern.test(form.email.trim())) {
    errors.email = 'Please enter a valid email address (e.g. name@example.com).'
  }

  if (!form.service) {
    errors.service = 'Please select a service.'
  }

  if (!form.subject.trim()) {
    errors.subject = 'Please enter a subject for your message.'
  }

  if (!form.message.trim()) {
    errors.message = 'Please tell us a little about your project.'
  } else if (form.message.trim().length < 10) {
    errors.message = 'Please provide a bit more detail (at least 10 characters).'
  }

  return errors
}

export function ContactContent() {
  const [form, setForm] = useState<ContactFormData>(initialForm)
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (field: keyof ContactFormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }))
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const nextErrors = validate(form)
    setErrors(nextErrors)

    if (Object.values(nextErrors).some(Boolean)) {
      toast.error('Please fix the highlighted fields and try again.')
      const firstInvalid = (Object.keys(nextErrors) as (keyof ContactFormData)[]).find(
        (key) => nextErrors[key]
      )
      if (firstInvalid) {
        document.getElementById(`contact-${firstInvalid}`)?.focus()
      }
      return
    }

    setIsSubmitting(true)

    const mailtoUrl = buildContactMailtoUrl(form)

    const loadingToast = toast.loading('Opening your email application...', {
      duration: 8000,
    })

    await new Promise((resolve) => setTimeout(resolve, 600))

    openEmailClient(mailtoUrl)

    toast.success('Your email draft is ready — just press send!', {
      id: loadingToast,
    })

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const resetForm = () => {
    setForm(initialForm)
    setErrors({})
    setIsSubmitted(false)
  }

  const inputClasses = 'h-12'
  const inputErrorClasses = (field: keyof ContactFormData) =>
    errors[field] ? 'border-destructive focus-visible:border-destructive' : ''

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
                  aria-label={`Call us on ${siteConfig.phone}`}
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
                  aria-label={`Chat with us on WhatsApp at ${siteConfig.phone}`}
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
                  aria-label={`Email us at ${siteConfig.email}`}
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

              {/* Business Hours & Location */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Clock className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium text-foreground">Business Hours</p>
                    <p className="text-sm">Mon - Sat: 8:00 AM - 6:00 PM</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <MapPin className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium text-foreground">Location</p>
                    <p className="text-sm">Nairobi, Kenya</p>
                  </div>
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
                  <div className="text-center py-12" role="status" aria-live="polite">
                    <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-6">
                      <MailCheck className="w-8 h-8 text-green-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      Your Email Draft Is Ready!
                    </h3>
                    <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                      We&apos;ve opened your email application with your message pre-filled.
                      Just press send — we&apos;ll get back to you within 24 hours.
                    </p>
                    <Button onClick={resetForm} variant="outline">
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate>
                    <h3 className="text-xl font-bold text-foreground mb-6">
                      Send us a Message
                    </h3>
                    
                    <FieldGroup className="space-y-5">
                      <div className="grid md:grid-cols-2 gap-5">
                        <Field>
                          <FieldLabel htmlFor="contact-fullName">Full Name</FieldLabel>
                          <Input
                            id="contact-fullName"
                            name="fullName"
                            placeholder="John Doe"
                            value={form.fullName}
                            onChange={(e) => handleChange('fullName', e.target.value)}
                            className={`${inputClasses} ${inputErrorClasses('fullName')}`}
                            required
                            autoComplete="name"
                            aria-required="true"
                            aria-invalid={Boolean(errors.fullName)}
                            aria-describedby={errors.fullName ? 'contact-fullName-error' : undefined}
                          />
                          {errors.fullName && (
                            <p id="contact-fullName-error" className="text-sm text-destructive" role="alert">
                              {errors.fullName}
                            </p>
                          )}
                        </Field>
                        <Field>
                          <FieldLabel htmlFor="contact-email">Email Address</FieldLabel>
                          <Input
                            id="contact-email"
                            name="email"
                            type="email"
                            placeholder="john@example.com"
                            value={form.email}
                            onChange={(e) => handleChange('email', e.target.value)}
                            className={`${inputClasses} ${inputErrorClasses('email')}`}
                            required
                            autoComplete="email"
                            aria-required="true"
                            aria-invalid={Boolean(errors.email)}
                            aria-describedby={errors.email ? 'contact-email-error' : undefined}
                          />
                          {errors.email && (
                            <p id="contact-email-error" className="text-sm text-destructive" role="alert">
                              {errors.email}
                            </p>
                          )}
                        </Field>
                      </div>

                      <div className="grid md:grid-cols-2 gap-5">
                        <Field>
                          <FieldLabel htmlFor="contact-phone">
                            Phone Number <span className="text-muted-foreground font-normal">(optional)</span>
                          </FieldLabel>
                          <Input
                            id="contact-phone"
                            name="phone"
                            type="tel"
                            placeholder="+254 700 000000"
                            value={form.phone}
                            onChange={(e) => handleChange('phone', e.target.value)}
                            className={inputClasses}
                            autoComplete="tel"
                          />
                        </Field>
                        <Field>
                          <FieldLabel htmlFor="contact-company">
                            Company Name <span className="text-muted-foreground font-normal">(optional)</span>
                          </FieldLabel>
                          <Input
                            id="contact-company"
                            name="company"
                            placeholder="ABC Limited"
                            value={form.company}
                            onChange={(e) => handleChange('company', e.target.value)}
                            className={inputClasses}
                            autoComplete="organization"
                          />
                        </Field>
                      </div>

                      <div className="grid md:grid-cols-2 gap-5">
                        <Field>
                          <FieldLabel htmlFor="contact-service">Selected Service</FieldLabel>
                          <Select
                            value={form.service}
                            onValueChange={(value) => handleChange('service', value)}
                          >
                            <SelectTrigger
                              id="contact-service"
                              className={`${inputClasses} w-full ${inputErrorClasses('service')}`}
                              aria-required="true"
                              aria-invalid={Boolean(errors.service)}
                              aria-describedby={errors.service ? 'contact-service-error' : undefined}
                            >
                              <SelectValue placeholder="Select a service" />
                            </SelectTrigger>
                            <SelectContent>
                              {services.map((service) => (
                                <SelectItem key={service} value={service}>
                                  {service}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          {errors.service && (
                            <p id="contact-service-error" className="text-sm text-destructive" role="alert">
                              {errors.service}
                            </p>
                          )}
                        </Field>
                        <Field>
                          <FieldLabel htmlFor="contact-subject">Subject</FieldLabel>
                          <Input
                            id="contact-subject"
                            name="subject"
                            placeholder="Website Design Inquiry"
                            value={form.subject}
                            onChange={(e) => handleChange('subject', e.target.value)}
                            className={`${inputClasses} ${inputErrorClasses('subject')}`}
                            required
                            aria-required="true"
                            aria-invalid={Boolean(errors.subject)}
                            aria-describedby={errors.subject ? 'contact-subject-error' : undefined}
                          />
                          {errors.subject && (
                            <p id="contact-subject-error" className="text-sm text-destructive" role="alert">
                              {errors.subject}
                            </p>
                          )}
                        </Field>
                      </div>

                      <Field>
                        <FieldLabel htmlFor="contact-message">Message</FieldLabel>
                        <Textarea
                          id="contact-message"
                          name="message"
                          placeholder="Tell us about your project, timeline, and any specific requirements..."
                          value={form.message}
                          onChange={(e) => handleChange('message', e.target.value)}
                          className={`min-h-32 resize-none ${inputErrorClasses('message')}`}
                          required
                          aria-required="true"
                          aria-invalid={Boolean(errors.message)}
                          aria-describedby={errors.message ? 'contact-message-error' : undefined}
                        />
                        {errors.message && (
                          <p id="contact-message-error" className="text-sm text-destructive" role="alert">
                            {errors.message}
                          </p>
                        )}
                      </Field>

                      <Button 
                        type="submit" 
                        size="lg" 
                        className="w-full bg-primary hover:bg-primary/90 h-12 gap-2"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>Preparing Email...</>
                        ) : (
                          <>
                            Send Inquiry
                            <Send className="w-4 h-4" />
                          </>
                        )}
                      </Button>

                      <p className="text-xs text-muted-foreground text-center">
                        Submitting opens your email application with your message pre-filled, sent to {siteConfig.email}.
                      </p>
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
              <Button asChild size="lg" className="gap-2 h-12 px-8 bg-gradient-brand hover:opacity-90 text-white">
                <a href={`mailto:${siteConfig.email}`}>
                  <Mail className="w-5 h-5" />
                  Email Us
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
