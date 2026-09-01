'use client'

import { motion } from 'framer-motion'
import { MessageCircle, Phone, Mail, Facebook, Instagram, Linkedin, Sparkles, BadgeCheck } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { siteConfig } from '@/lib/site-config'
import { ContactForm } from '@/components/contact-form'
import { ContactCards } from '@/components/contact-cards'
import { TikTokIcon, XIcon, WhatsAppIcon } from '@/components/social-icons'
import { PageHero } from '@/components/page-hero'

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
      <PageHero
        badge="Contact Us"
        title="Let's Start Your Project"
        highlightedWord="Project"
        description="Ready to bring your brand to life? Tell us about your project and we'll respond with a free quote within hours — no obligation, just great work."
        imageSrc="/images/portfolio/product-launch-social.jpg"
        imageAlt="Get in touch with JTH Graphix Production — creative agency consultation"
      >
        <p className="inline-flex items-center gap-2 text-sm font-medium text-primary">
          <BadgeCheck className="w-4 h-4" aria-hidden="true" />
          Quality is our Priority.
        </p>
      </PageHero>

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
                    <WhatsAppIcon className="w-6 h-6 text-white" />
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
                      className="w-10 h-10 rounded-xl bg-secondary/15 flex items-center justify-center text-secondary hover:bg-secondary hover:text-white border border-secondary/20 hover:border-secondary transition-colors"
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5" />
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
