'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/theme-toggle'
import { cn } from '@/lib/utils'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/testimonials', label: 'Testimonials' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-background/80 backdrop-blur-xl border-b border-border shadow-sm'
          : 'bg-transparent'
      )}
    >
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 lg:w-12 lg:h-12">
              <Image
                src="/images/logo.png"
                alt="JTH Graphix Production Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="hidden sm:block">
              <span className="text-lg lg:text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                JTH Graphix
              </span>
              <span className="hidden lg:inline text-lg lg:text-xl font-light text-muted-foreground ml-1">
                Production
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'px-4 py-2 text-sm font-medium rounded-lg transition-colors',
                  pathname === link.href
                    ? 'text-primary bg-primary/10'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <ThemeToggle />
            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/25">
              <Link href="/contact">
                Start a Project
              </Link>
            </Button>
          </div>

          {/* Mobile Actions */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href="tel:+254117537015"
              className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              aria-label="Call us"
            >
              <Phone className="w-5 h-5" />
            </a>
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-background/95 backdrop-blur-xl border-b border-border"
          >
            <div className="container mx-auto px-4 py-4">
              <div className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      'px-4 py-3 text-base font-medium rounded-lg transition-colors',
                      pathname === link.href
                        ? 'text-primary bg-primary/10'
                        : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="pt-4 mt-2 border-t border-border">
                  <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    <Link href="/contact">
                      Start a Project
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
