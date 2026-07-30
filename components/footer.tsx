'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Facebook, Instagram, Linkedin, Phone, Mail, ArrowRight } from 'lucide-react'
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
  { href: '/#blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
]

const services = [
  { href: '/services/branding-identity', label: 'Branding' },
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
    <footer className="bg-foreground text-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/10 pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 py-16 lg:py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center gap-3 mb-5 group">
              <div className="relative w-11 h-11 rounded-xl bg-primary flex items-center justify-center overflow-hidden">
                <Image
                  src="/images/logo-white.png"
                  alt="JTH Graphix Production"
                  width={36}
                  height={36}
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-display font-bold text-white">
                JTH Graphix Production
              </span>
            </Link>
            <p className="text-background/70 mb-6 max-w-sm leading-relaxed text-sm">
              We don&apos;t just create designs. We build brands, experiences, and digital solutions
              that drive measurable business growth.
            </p>
            <div className="flex items-center gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white/8 text-background/70 hover:bg-primary hover:text-white transition-all duration-300"
                  aria-label={`Follow us on ${social.label}`}
                >
                  <social.icon />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h3 className="font-display font-semibold text-white mb-5">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-background/65 hover:text-secondary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="font-display font-semibold text-white mb-5">Services</h3>
            <ul className="space-y-3">
              {services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-background/65 hover:text-secondary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="font-display font-semibold text-white mb-5">Contact</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
                  className="flex items-center gap-3 text-sm text-background/65 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 text-secondary shrink-0" />
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-3 text-sm text-background/65 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 text-secondary shrink-0" />
                  {siteConfig.email}
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="font-display font-semibold text-white mb-5">Newsletter</h3>
            <p className="text-sm text-background/65 mb-4">
              Insights on branding, design, and digital growth.
            </p>
            {subscribed ? (
              <p className="text-sm text-secondary font-medium">Thank you for subscribing!</p>
            ) : (
              <form onSubmit={handleNewsletter} className="space-y-3">
                <Input
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-white/8 border-white/15 text-white placeholder:text-background/40 h-11 rounded-xl"
                  aria-label="Email address for newsletter"
                />
                <Button
                  type="submit"
                  className="w-full bg-secondary hover:bg-secondary/90 text-white rounded-xl h-11 gap-2"
                >
                  Subscribe
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </form>
            )}
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-background/50">
            &copy; {new Date().getFullYear()} JTH Graphix Production. All rights reserved.
          </p>
          <p className="text-sm text-background/50">
            Crafted with strategy, designed for growth.
          </p>
        </div>
      </div>
    </footer>
  )
}
