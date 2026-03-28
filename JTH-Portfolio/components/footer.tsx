import Link from 'next/link'
import Image from 'next/image'
import { Facebook, Instagram, Linkedin, Phone, Mail, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
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

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/testimonials', label: 'Testimonials' },
  { href: '/contact', label: 'Contact' },
]

const services = [
  { href: '/services/flyer-design', label: 'Flyer Design' },
  { href: '/services/poster-design', label: 'Poster Design' },
  { href: '/services/logo-design', label: 'Logo Design' },
  { href: '/services/branding-visual-identity', label: 'Branding' },
  { href: '/services/social-media-graphics', label: 'Social Media Graphics' },
  { href: '/services/premium-printing', label: 'Premium Printing' },
  { href: '/services/website-design', label: 'Website Design' },
]

const socialLinks = [
  { href: siteConfig.socialLinks.facebook, icon: Facebook, label: 'Facebook' },
  { href: siteConfig.socialLinks.instagram, icon: Instagram, label: 'Instagram' },
  { href: siteConfig.socialLinks.tiktok, icon: TikTokIcon, label: 'TikTok' },
  { href: siteConfig.socialLinks.linkedin, icon: Linkedin, label: 'LinkedIn' },
  { href: siteConfig.socialLinks.x, icon: XIcon, label: 'X' },
]

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="relative w-10 h-10">
                <Image
                  src="/images/logo.png"
                  alt="JTH Graphix Production Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-bold text-foreground">
                JTH Graphix <span className="font-light text-muted-foreground">Production</span>
              </span>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-sm">
              {siteConfig.description}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild variant="outline" size="sm" className="gap-2">
                <a href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}>
                  <Phone className="w-4 h-4" />
                  Call Now
                </a>
              </Button>
              <Button asChild size="sm" className="gap-2 bg-[#25D366] hover:bg-[#25D366]/90 text-white">
                <a 
                  href={`https://wa.me/${siteConfig.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </a>
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Services</h3>
            <ul className="space-y-3">
              {services.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact Info</h3>
            <ul className="space-y-4">
              <li>
                <a 
                  href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Phone className="w-4 h-4 text-primary" />
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a 
                  href={`https://wa.me/${siteConfig.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-primary" />
                  WhatsApp
                </a>
              </li>
              <li>
                <a 
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="w-4 h-4 text-primary" />
                  {siteConfig.email}
                </a>
              </li>
            </ul>

            {/* Social Links */}
            <div className="mt-6">
              <h4 className="font-medium text-foreground mb-3">Follow JTH</h4>
              <div className="flex items-center gap-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              &copy; {new Date().getFullYear()} JTH Graphix Production. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground">
              Built for modern brands with bold vision.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
