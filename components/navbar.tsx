'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Menu,
  X,
  ChevronDown,
  Mail,
  MessageCircle,
  Palette,
  Sparkles,
  PenTool,
  FileImage,
  Monitor,
  Code,
  Zap,
  Layout,
  TrendingUp,
  Share2,
  Search,
  FileText,
  Camera,
  Clapperboard,
  Play,
  Image as ImageIcon,
  GraduationCap,
  Users,
  BookOpen,
  Video,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/theme-toggle'
import { cn } from '@/lib/utils'
import megamenuData from '@/data/megamenu.json'
import { siteConfig } from '@/lib/site-config'

const megamenuIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  Palette,
  Sparkles,
  PenTool,
  FileImage,
  Monitor,
  Code,
  Zap,
  Layout,
  TrendingUp,
  Share2,
  Search,
  FileText,
  Camera,
  Clapperboard,
  Play,
  Image: ImageIcon,
  GraduationCap,
  Users,
  BookOpen,
  Video,
}

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services', hasMegamenu: true },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '#solutions', label: 'Solutions', scroll: true },
  { href: '/blogs', label: 'Insights' },
  { href: '/contact', label: 'Contact' },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [showMegamenu, setShowMegamenu] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
      if (pathname !== '/') return
      const sections = ['hero', 'trust', 'services', 'about', 'portfolio', 'partners', 'testimonials', 'process', 'blog', 'cta']
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
    if (href.startsWith('#')) return false
    return pathname === href || pathname.startsWith(`${href}/`)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Utility Bar - Desktop Only */}
      <div className="hidden lg:block bg-gradient-to-r from-primary/5 to-transparent border-b border-border/40 backdrop-blur-md">
        <div className="container mx-auto px-8">
          <div className="flex items-center justify-between h-10 text-xs font-medium text-muted-foreground">
            <div className="flex items-center gap-6">
              <span className="hidden xl:inline">Welcome to JTH Graphix Production</span>
            <span className="xl:hidden">
    JTH Graphix Production
  </span>
            </div>
            <div className="flex items-center gap-5">
              <Link href="/portfolio" className="hover:text-foreground transition-colors">
                Portfolio
              </Link>
              <Link href="/blogs" className="hover:text-foreground transition-colors">
                Blogs
              </Link>
              <Link href="/services-pricing" className="hover:text-foreground transition-colors">
                Resources
              </Link>
              <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-1.5 hover:text-foreground transition-colors">
                <Mail className="w-3.5 h-3.5" />
                <span className="hidden xl:inline">{siteConfig.email}</span>
                <span className="xl:hidden">Email</span>
              </a>
              <a href={siteConfig.whatsappHref} className="flex items-center gap-1.5 hover:text-foreground transition-colors" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-3.5 h-3.5" />
                WhatsApp
              </a>
              <ThemeToggle />
              <Button
                asChild
                size="sm"
                className="h-7 px-3 rounded-lg bg-gradient-brand hover:opacity-90 text-white text-xs font-semibold"
              >
                <Link href="/contact">Request a Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav
        className={cn(
          'transition-all duration-500',
          isScrolled ? 'glass-nav' : 'bg-transparent'
        )}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group relative z-10 flex-shrink-0" aria-label="JTH Graphix Production home">
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
              <div className="hidden sm:flex flex-col">
                <span className="text-xs lg:text-sm font-display font-bold text-foreground group-hover:text-primary transition-colors leading-tight">
                  JTH  Graphix Production
                </span>
                
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-1 flex-1 justify-center">
              {navLinks.map((link) => (
                <div
                  key={link.href}
                  className="relative group"
                  onMouseEnter={() => link.hasMegamenu && setShowMegamenu(true)}
                  onMouseLeave={() => link.hasMegamenu && setShowMegamenu(false)}
                >
                  {link.scroll ? (
                    <button
                      onClick={() => {
                        const el = document.getElementById(link.href.slice(1))
                        el?.scrollIntoView({ behavior: 'smooth' })
                      }}
                      className={cn(
                        'relative px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-300 inline-flex items-center gap-1',
                        'text-muted-foreground hover:text-foreground'
                      )}
                    >
                      {link.label}
                    </button>
                  ) : (
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
                      {link.hasMegamenu && <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" />}
                      {isActive(link.href) && (
                        <motion.span
                          layoutId="nav-indicator"
                          className="absolute inset-0 bg-primary/10 rounded-lg -z-10"
                          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        />
                      )}
                    </Link>
                  )}

                  {/* Mega Menu */}
                  {link.hasMegamenu && showMegamenu && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.96 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-screen max-w-5xl glass-card rounded-3xl p-8 shadow-2xl"
                    >
                      <div className="grid grid-cols-2 lg:grid-cols-5 gap-8">
                        {megamenuData.map((column, idx) => (
                          <div key={idx} className="space-y-4">
                            <div className="pb-4 border-b border-border/40">
                              <h3 className="font-bold text-foreground text-sm">
                                {column.category}
                              </h3>
                              <p className="text-xs text-muted-foreground mt-1">
                                {column.description}
                              </p>
                            </div>
                             <div className="space-y-2">
                               {column.items.map((item, i) => {
                                 const ItemIcon = megamenuIcons[item.icon]
                                 return (
                                   <Link
                                     key={i}
                                     href={item.href}
                                     className="flex items-start gap-3 p-3 rounded-xl hover:bg-primary/10 transition-colors group"
                                   >
                                     <div className="w-9 h-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                                       {ItemIcon ? <ItemIcon className="w-4 h-4" /> : null}
                                     </div>
                                     <div className="min-w-0">
                                       <p className="text-xs font-semibold text-foreground group-hover:text-primary transition-colors">
                                         {item.title}
                                       </p>
                                       <p className="text-xs text-muted-foreground mt-0.5 leading-snug">
                                         {item.description}
                                       </p>
                                     </div>
                                   </Link>
                                 )
                               })}
                             </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </div>
              ))}
            </div>

            {/* Desktop CTA & Theme */}
            <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
              <ThemeToggle />
              <Button
                asChild
                className="bg-gradient-brand hover:opacity-90 text-white shadow-lg shadow-primary/25 rounded-xl px-6 h-11 font-medium transition-all duration-300 hover:shadow-xl hover:shadow-primary/30 hover:scale-[1.02]"
              >
                <Link href="/contact">Request a Quote</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2.5 rounded-xl text-foreground hover:bg-muted transition-colors relative z-10 ml-auto"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden fixed inset-0 top-0 z-0 pointer-events-auto"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-background/95 backdrop-blur-2xl"
            />
            <div className="relative z-10 container mx-auto px-4 pt-32 pb-8 h-full overflow-y-auto">
              <div className="flex flex-col gap-2 max-w-sm mx-auto">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 }}
                  >
                    {link.scroll ? (
                      <button
                        onClick={() => {
                          const el = document.getElementById(link.href.slice(1))
                          el?.scrollIntoView({ behavior: 'smooth' })
                          setIsOpen(false)
                        }}
                        className="w-full text-left px-6 py-4 text-lg font-medium rounded-2xl transition-all duration-300 text-muted-foreground hover:text-foreground hover:bg-muted"
                      >
                        {link.label}
                      </button>
                    ) : (
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
                    )}
                  </motion.div>
                ))}
                 <motion.div
                   initial={{ opacity: 0, y: 10 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ delay: 0.3 }}
                   className="pt-6 mt-4 border-t border-border"
                 >
                   <div className="grid grid-cols-2 gap-2 mb-4">
                     <Link href="/portfolio" className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-muted/60 text-sm font-medium text-foreground hover:bg-muted transition-colors">
                       Portfolio
                     </Link>
                     <Link href="/blogs" className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-muted/60 text-sm font-medium text-foreground hover:bg-muted transition-colors">
                       Blogs
                     </Link>
                     <Link href="/services-pricing" className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-muted/60 text-sm font-medium text-foreground hover:bg-muted transition-colors">
                       Resources
                     </Link>
                     <a href={siteConfig.whatsappHref} className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-muted/60 text-sm font-medium text-foreground hover:bg-muted transition-colors" target="_blank" rel="noopener noreferrer">
                       WhatsApp
                     </a>
                   </div>
                   <div className="flex items-center justify-between gap-4 px-2 mb-4">
                     <span className="text-sm font-medium text-muted-foreground">
                       Appearance
                     </span>
                     <ThemeToggle />
                   </div>
                   <Button asChild className="w-full bg-gradient-brand text-white h-14 rounded-2xl text-base font-semibold">
                     <Link href="/contact">Request a Quote</Link>
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
