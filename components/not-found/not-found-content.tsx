'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Home, ArrowLeft, Search, Frown } from 'lucide-react'
import { Button } from '@/components/ui/button'

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Our Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/contact', label: 'Contact Us' },
]

export function NotFoundContent() {
  return (
    <>
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-background relative overflow-hidden min-h-[70vh] flex items-center">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Frown className="w-20 h-20 text-primary mx-auto mb-6" />
            </motion.div>

            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
            >
              Error 404
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-7xl md:text-8xl lg:text-9xl font-bold text-foreground mb-4"
            >
              404
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-3xl md:text-4xl font-bold text-foreground mb-4"
            >
              Page Not Found
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-lg text-muted-foreground mb-8 max-w-lg mx-auto"
            >
              Oops! The page you&apos;re looking for doesn&apos;t exist or has been moved. 
              Let&apos;s get you back on track.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-wrap items-center justify-center gap-4"
            >
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 gap-2 h-12 px-8">
                <Link href="/">
                  <Home className="w-4 h-4" />
                  Back to Home
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="gap-2 h-12 px-8">
                <Link href="/contact">
                  <ArrowLeft className="w-4 h-4" />
                  Contact Us
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <Search className="w-10 h-10 text-accent mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
              Looking for Something?
            </h2>
            <p className="text-muted-foreground">
              Try one of these pages instead
            </p>
          </motion.div>

          <div className="max-w-md mx-auto grid grid-cols-2 gap-4">
            {quickLinks.map((link, index) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <Button
                  asChild
                  variant="ghost"
                  className="w-full h-14 text-foreground hover:text-primary hover:bg-primary/5 rounded-xl border border-border hover:border-primary/30 transition-colors"
                >
                  <Link href={link.href}>{link.label}</Link>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
