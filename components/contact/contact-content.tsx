'use client'

import { motion } from 'framer-motion'
import { MessageCircle, Phone, Mail, Facebook, Instagram, Linkedin, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { siteConfig } from '@/lib/site-config'
import { ContactForm } from '@/components/contact-form'
import { ContactCards } from '@/components/contact-cards'

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

const socialLinks = [
  { href: siteConfig.socialLinks.facebook, icon: Facebook, label: 'Facebook' },
  { href: siteConfig.socialLinks.instagram, icon: Instagram, label: 'Instagram' },
  { href: siteConfig.socialLinks.tiktok, icon: TikTokIcon, label: 'TikTok' },
  { href: siteConfig.socialLinks.linkedin, icon: Linkedin, label: 'LinkedIn' },
  { href: siteConfig.socialLinks.x, icon: XIcon, label: 'X' },
]

const highlights = [
  'Free, no-obligation quotes within hours',
  'Fast turnaround — most designs in 24–72 hrs',
  'A dedicated team from brief to delivery',
]

export function ContactContent() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-background relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
          <div className="absolute inset-0 bg-grid opacity-20" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              Contact Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              Let&apos;s Start Your{' '}
              <span className="text-gradient">Project</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Ready to bring your brand to life? Tell us about your project and we&apos;ll
              respond with a free quote within hours — no obligation, just great work.
            </p>
            <p className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-primary">
              <BadgeCheck className="w-4 h-4" aria-hidden="true" />
              Quality is our Priority.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 lg:py-24 bg-muted/30 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Left — Company intro + contact details */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-2"
            >
              <h2 className="text-2xl font-bold text-foreground mb-4">Get in Touch</h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                JTH Graphix Production is a full-service creative agency in Kenya — from logo
                design and branding to websites, social media and premium printing. We&apos;d
                love to hear about your project.
              </p>

              <ContactCards />

              <div className="mt-8">
                <a
                  href={`${siteConfig.whatsappHref}?text=${encodeURIComponent(
                    'Hello JTH Graphix Production! I would like to discuss a project.',
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-2xl bg-[#25D366]/10 border border-[#25D366]/20 hover:bg-[#25D366]/20 transition-colors"
                  aria-label={`Chat with us on WhatsApp at ${siteConfig.phone}`}
                >
                  <div className="w-12 h-12 rounded-xl bg-[#25D366] flex items-center justify-center shrink-0 shadow-lg shadow-[#25D366]/25">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">WhatsApp</p>
                    <p className="font-semibold text-foreground">{siteConfig.phone}</p>
                  </div>
                </a>
              </div>

              <div className="mt-8">
                <ul className="space-y-3">
                  {highlights.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-muted-foreground">
                      <span className="w-2 h-2 rounded-full bg-secondary shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Social Links */}
              <div className="mt-8">
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

            {/* Right — Glassmorphism form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-3"
            >
              <div className="relative rounded-3xl bg-card/70 backdrop-blur-2xl border border-border p-6 lg:p-8 shadow-2xl shadow-primary/5 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-brand" />
                <h3 className="text-xl font-bold text-foreground mb-1">Send us a Message</h3>
                <p className="text-sm text-muted-foreground mb-6">
                  Fill in the form and we&apos;ll open your email app with everything ready to send.
                </p>
                <ContactForm />
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
              For faster response, reach out to us directly via phone, WhatsApp or email.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button asChild size="lg" variant="outline" className="gap-2 h-12 px-8">
                <a href={siteConfig.phoneHref}>
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
              </Button>
              <Button asChild size="lg" className="bg-[#25D366] hover:bg-[#25D366]/90 text-white gap-2 h-12 px-8">
                <a
                  href={`${siteConfig.whatsappHref}?text=${encodeURIComponent(
                    'Hello JTH Graphix Production! I would like to discuss a project.',
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-5 h-5" />
                  Chat on WhatsApp
                </a>
              </Button>
              <Button asChild size="lg" className="gap-2 h-12 px-8 bg-gradient-brand hover:opacity-90 text-white">
                <a href={siteConfig.emailHref}>
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
