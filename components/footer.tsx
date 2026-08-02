'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Facebook, Instagram, Linkedin, Phone, Mail, ArrowRight, MapPin, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import siteConfig from '@/data/site-config.json'

const TikTokIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
)

const XIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
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

export function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) setSubscribed(true)
  }

  return (
    <footer className="bg-footer-bg text-footer-foreground relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-dark pointer-events-none" />
      <div className="absolute inset-0 bg-grid opacity-[0.03] pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-[500px] h-[500px] bg-footer-accent/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-footer-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 py-16 lg:py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <div className="relative w-12 h-12 rounded-2xl bg-gradient-brand flex items-center justify-center overflow-hidden shadow-lg shadow-primary/20">
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
                  JTH Graphix
                </span>
                <p className="text-xs text-white/50 tracking-wider uppercase">Production</p>
              </div>
            </Link>
            <p className="text-white/60 mb-6 max-w-sm leading-relaxed text-sm">
              We do not just create designs. We build brands, experiences, and digital solutions
              that drive measurable business growth.
            </p>
            <div className="flex items-center gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white/8 text-white/60 hover:bg-footer-accent hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-footer-accent/20"
                  aria-label={`Follow us on ${social.label}`}
                >
                  <social.icon />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h3 className="font-display font-semibold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-footer-accent transition-colors duration-300 inline-flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="font-display font-semibold text-white mb-6">Services</h3>
            <ul className="space-y-3.5">
              {services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-footer-accent transition-colors duration-300 inline-flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="font-display font-semibold text-white mb-6">Contact</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
                  className="flex items-center gap-3 text-sm text-white/60 hover:text-white transition-colors group"
                >
                  <div className="w-8 h-8 rounded-lg bg-white/8 flex items-center justify-center group-hover:bg-footer-accent transition-colors">
                    <Phone className="w-4 h-4 text-footer-accent" />
                  </div>
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-3 text-sm text-white/60 hover:text-white transition-colors group"
                >
                  <div className="w-8 h-8 rounded-lg bg-white/8 flex items-center justify-center group-hover:bg-footer-accent transition-colors">
                    <Mail className="w-4 h-4 text-footer-accent" />
                  </div>
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <div className="flex items-center gap-3 text-sm text-white/60">
                  <div className="w-8 h-8 rounded-lg bg-white/8 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-footer-accent" />
                  </div>
                  Nairobi, Kenya
                </div>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="font-display font-semibold text-white mb-6">Newsletter</h3>
            <p className="text-sm text-white/60 mb-4">
              Insights on branding, design, and digital growth delivered to your inbox.
            </p>
            {subscribed ? (
              <div className="flex items-center gap-3 p-4 rounded-xl bg-white/8">
                <Send className="w-5 h-5 text-footer-accent" />
                <p className="text-sm text-footer-accent font-medium">Thank you for subscribing!</p>
              </div>
            ) : (
              <form onSubmit={handleNewsletter} className="space-y-3">
                <Input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-white/8 border-white/15 text-white placeholder:text-white/40 h-11 rounded-xl focus:border-footer-accent/60 transition-colors"
                  aria-label="Email address for newsletter"
                />
                <Button
                  type="submit"
                  className="w-full bg-footer-accent hover:bg-footer-accent-hover text-white rounded-xl h-11 gap-2 transition-all duration-300 hover:shadow-lg hover:shadow-footer-accent/20"
                >
                  Subscribe
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </form>
            )}
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/40">
            &copy; {new Date().getFullYear()} JTH Graphix Production. All rights reserved.
          </p>
          <p className="text-sm text-white/40">
            Crafted with strategy, designed for growth.
          </p>
        </div>
      </div>
    </footer>
  )
}
