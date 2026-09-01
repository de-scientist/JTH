'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import {
  Facebook,
  Instagram,
  Linkedin,
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  MessageCircle,
  Rocket,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Newsletter } from '@/components/newsletter'
import { siteConfig } from '@/lib/site-config'
import { fadeUp, staggerContainer, defaultTransition, viewportOnce } from '@/lib/animations'
import { TikTokIcon, XIcon, WhatsAppIcon } from '@/components/social-icons'

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/blogs', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
]

const services = [
  { href: '/services/branding-identity', label: 'Branding & Identity' },
  { href: '/services/logo-design', label: 'Logo Design' },
  { href: '/services/website-design', label: 'Website Design' },
  { href: '/services/social-media-graphics', label: 'Social Media Design' },
  { href: '/services/social-media-management', label: 'Digital Marketing' },
  { href: '/services/flyer-design', label: 'Graphic Design' },
]

const socialLinks = [
  { href: siteConfig.socialLinks.facebook, icon: Facebook, label: 'Facebook' },
  { href: siteConfig.socialLinks.instagram, icon: Instagram, label: 'Instagram' },
  { href: siteConfig.socialLinks.tiktok, icon: TikTokIcon, label: 'TikTok' },
  { href: siteConfig.socialLinks.linkedin, icon: Linkedin, label: 'LinkedIn' },
  { href: siteConfig.socialLinks.x, icon: XIcon, label: 'X' },
]

const legalLinks = [
  { href: '/privacy', label: 'Privacy Policy' },
  { href: '/terms', label: 'Terms of Service' },
  { href: '/cookies', label: 'Cookies' },
]

const contactInfo = [
  {
    icon: Phone,
    label: 'Phone',
    value: siteConfig.phone,
    href: siteConfig.phoneHref,
  },
  {
    icon: Mail,
    label: 'Email',
    value: siteConfig.email,
    href: siteConfig.emailHref,
  },
  {
    icon: MapPin,
    label: 'Location',
    value: siteConfig.location,
  },
  {
    icon: Clock,
    label: 'Working Hours',
    value: siteConfig.businessHours,
  },
]

const ColumnHeading = ({ children }: { children: React.ReactNode }) => (
  <h3 className="font-display font-semibold text-white mb-6 flex items-center gap-2">
    <span className="w-1.5 h-5 rounded-full bg-secondary inline-block" />
    {children}
  </h3>
)

export function Footer() {
  return (
    <footer className="bg-footer-bg text-footer-foreground relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-gradient-dark pointer-events-none" />
      <div className="absolute inset-0 bg-grid opacity-[0.03] pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Premium blue CTA band — the signature closing section */}
      <div className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg, var(--color-primary-deep) 0%, var(--color-primary-dark) 40%, var(--color-primary) 70%, var(--color-primary-dark) 100%)' }}>
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-black/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(255,122,0,0.08),transparent_70%)] pointer-events-none" />
        <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="container mx-auto px-4 lg:px-8 py-16 lg:py-20 relative z-10"
        >
          <motion.div
            variants={fadeUp}
            transition={defaultTransition}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 text-white text-sm font-medium mb-6">
              <Rocket className="w-4 h-4" />
              Let&apos;s Work Together
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 text-balance">
              Ready to Build Something Extraordinary?
            </h2>
            <p className="text-white/85 text-base md:text-lg mb-8 max-w-xl mx-auto leading-relaxed">
              From bold branding to premium print and web — let&apos;s turn your ideas into
              designs that get noticed and get results.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="h-12 px-8 bg-white text-footer-accent hover:bg-white/90 hover:text-footer-accent shadow-xl shadow-black/10 rounded-full gap-2"
              >
                <Link href="/contact">
                  Request a Free Quote
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-12 px-8 border-2 border-white/60 text-white hover:bg-white/10 hover:text-white rounded-full gap-2"
              >
                <a
                  href={`${siteConfig.whatsappHref}?text=${encodeURIComponent(
                    'Hello JTH Graphix Production! I would like to book a consultation.',
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-4 h-4" />
                  Book a Consultation
                </a>
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Main footer */}
      <div className="container mx-auto px-4 lg:px-8 py-16 lg:py-20 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          <motion.div variants={fadeUp} transition={defaultTransition}>
            <Newsletter variant="banner" />
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mt-14">
          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={defaultTransition}
            className="lg:col-span-4"
          >
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <div className="relative w-12 h-12 rounded-2xl bg-gradient-brand flex items-center justify-center overflow-hidden shadow-lg shadow-primary/20 group-hover:shadow-secondary/30 transition-shadow">
                <Image
                  src="/images/logo-white.png"
                  alt="JTH Graphix Production"
                  fill
                  className="object-contain p-1.5"
                  sizes="48px"
                />
              </div>
              <div>
                <span className="text-lg font-display font-bold text-white">
                    JTH Graphix Production
                  </span>
                  <p className="text-xs text-white/50 tracking-wider uppercase">Quality is our Priority</p>
              </div>
            </Link>
            <p className="text-white/60 mb-2 max-w-sm leading-relaxed text-sm">
              Your creative and technology partner. We don&apos;t just create designs — we
              build brands, experiences, and digital solutions that drive measurable business growth.
            </p>
            <p className="text-xs text-white/40 max-w-sm leading-relaxed">
              JTH Graphix Production — Your Creative &amp; Technology Partner.
            </p>
            <p className="text-white/50 max-w-sm leading-relaxed text-sm mb-6">
              <span className="font-medium text-white/70">Our mission:</span> to help businesses
              and brands look exceptional, communicate clearly, and grow confidently.
            </p>
            <div className="flex items-center gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-secondary/15 text-secondary hover:bg-secondary hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-secondary/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
                  aria-label={`Follow us on ${social.label}`}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ ...defaultTransition, delay: 0.1 }}
            className="lg:col-span-2"
          >
            <ColumnHeading>Quick Links</ColumnHeading>
            <ul className="space-y-3.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-secondary transition-colors duration-300 inline-flex items-center gap-2 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-light rounded"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ ...defaultTransition, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <ColumnHeading>Services</ColumnHeading>
            <ul className="space-y-3.5">
              {services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-secondary transition-colors duration-300 inline-flex items-center gap-2 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-light rounded"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ ...defaultTransition, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <ColumnHeading>Contact</ColumnHeading>
            <ul className="space-y-4">
              {contactInfo.map((item) => {
                const inner = (
                  <>
                    <div className="w-8 h-8 rounded-lg bg-white/8 flex items-center justify-center shrink-0 transition-colors group-hover:bg-primary">
                      <item.icon className="w-4 h-4 text-primary-light" />
                    </div>
                    <span className="min-w-0">
                      <span className="block text-[11px] text-white/40 uppercase tracking-wider mb-0.5">
                        {item.label}
                      </span>
                      <span className="block text-sm text-white/70 group-hover:text-white transition-colors break-words">
                        {item.value}
                      </span>
                    </span>
                  </>
                )

                const classes =
                  'flex items-start gap-3 text-sm group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-light rounded'

                return (
                  <li key={item.label}>
                    {item.href ? (
                      <a href={item.href} className={classes}>
                        {inner}
                      </a>
                    ) : (
                      <div className={classes}>{inner}</div>
                    )}
                  </li>
                )
              })}
            </ul>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col lg:flex-row items-center justify-between gap-6">
          <p className="text-sm text-white/40 text-center lg:text-left">
            &copy; {new Date().getFullYear()} {siteConfig.brandName}. All rights reserved.
          </p>
          <nav aria-label="Legal links" className="flex items-center gap-5">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-white/40 hover:text-secondary transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-light rounded"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <p className="text-sm text-white/40 text-center lg:text-right">
            Designed &amp; Developed by{' '}
            <a
              href="https://github.com/de-scientist"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary font-medium hover:text-secondary-light transition-colors underline-offset-2 hover:underline"
            >
              JTH Graphix Production Limited
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
