'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/theme-toggle'
import { cn } from '@/lib/utils'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  {
    href: '/services',
    label: 'Services',
    dropdown: [
      { href: '/services/branding-identity', label: 'Branding & Identity' },
      { href: '/services/logo-design', label: 'Logo Design' },
      { href: '/services/website-design', label: 'Website Design' },
      { href: '/services/social-media-graphics', label: 'Social Media Design' },
      { href: '/services/social-media-management', label: 'Digital Marketing' },
    ],
  },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/contact', label: 'Contact' },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [showDropdown, setShowDropdown] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
      if (pathname !== '/') return
      const sections = ['hero', 'trust', 'services', 'about', 'portfolio', 'testimonials', 'process', 'blog', 'cta']
      const scrollPos = window.scrollY + 120
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id)
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(id)
          break
        }
      }
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [pathname])

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/' && !activeSection
    return pathname === href || pathname.startsWith(`${href}/`)
  }

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        isScrolled ? 'glass-nav' : 'bg-transparent'
      )}
    >
      <nav className="container mx-auto px-4 lg:px-8" aria-label="Main navigation">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link href="/" className="flex items-center gap-3 group relative z-10" aria-label="JTH Graphix Production home">
            <div className="relative w-10 h-10 lg:w-11 lg:h-11 rounded-xl bg-gradient-brand flex items-center justify-center overflow-hidden shadow-lg shadow-primary/20 group-hover:shadow-primary/40 transition-all duration-300">
              <Image
                src="/images/logo-white.png"
                alt="JTH Graphix Production"
                fill
                className="object-contain p-1.5"
                priority
                sizes="44px"
              />
            </div>
            <div className="flex flex-col">
              <span className="hidden sm:block text-sm lg:text-base font-display font-bold text-foreground group-hover:text-primary transition-colors leading-tight">
                JTH Graphix
              </span>
              <span className="hidden sm:block text-[10px] text-muted-foreground tracking-wider uppercase">
                Production
              </span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => link.dropdown && setShowDropdown(true)}
                onMouseLeave={() => link.dropdown && setShowDropdown(false)}
              >
                <Link
                  href={link.href}
                  className={cn(
                    'relative px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-300 inline-flex items-center gap-1',
                    isActive(link.href)
                      ? 'text-primary'
                      : 'text-muted-foreground hover:text-foreground'
                  )}
                >
                  {link.label}
                  {link.dropdown && <ChevronDown className="w-3.5 h-3.5" />}
                  {isActive(link.href) && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute inset-0 bg-primary/10 rounded-lg -z-10"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
                {link.dropdown && showDropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.96 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-1 w-56 glass-card rounded-2xl p-2 shadow-2xl"
                  >
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={cn(
                          'block px-4 py-2.5 text-sm font-medium rounded-xl transition-colors',
                          pathname === item.href
                            ? 'text-primary bg-primary/10'
                            : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                        )}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </div>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <ThemeToggle />
            <Button
              asChild
              className="bg-gradient-brand hover:opacity-90 text-white shadow-lg shadow-primary/25 rounded-xl px-6 h-11 font-medium transition-all duration-300 hover:shadow-xl hover:shadow-primary/30 hover:scale-[1.02]"
            >
              <Link href="/contact">Let&apos;s Talk</Link>
            </Button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2.5 rounded-xl text-foreground hover:bg-muted transition-colors relative z-10"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden fixed inset-0 top-0 z-0"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-background/95 backdrop-blur-2xl"
            />
            <div className="relative z-10 container mx-auto px-4 pt-24 pb-8 h-full overflow-y-auto">
              <div className="flex flex-col gap-2 max-w-sm mx-auto">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 }}
                  >
                    <Link
                      href={link.href}
                      className={cn(
                        'block px-6 py-4 text-lg font-medium rounded-2xl transition-all duration-300',
                        isActive(link.href)
                          ? 'text-primary bg-primary/10'
                          : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                      )}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="pt-6 mt-4 border-t border-border"
                >
                  <div className="flex items-center justify-between gap-4 px-2 mb-4">
                    <span className="text-sm font-medium text-muted-foreground">
                      Appearance
                    </span>
                    <ThemeToggle />
                  </div>
                  <Button asChild className="w-full bg-gradient-brand text-white h-14 rounded-2xl text-base font-semibold">
                    <Link href="/contact">Start Your Project</Link>
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
