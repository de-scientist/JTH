'use client'

import { useState } from 'react'
import { Send, MailCheck, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

type NewsletterProps = {
  variant?: 'card' | 'banner'
}

export function Newsletter({ variant = 'card' }: NewsletterProps) {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const trimmed = email.trim()
    if (!trimmed) {
      setError('Please enter your email address.')
      return
    }
    if (!emailPattern.test(trimmed)) {
      setError('Please enter a valid email address (e.g. name@example.com).')
      return
    }

    setError('')
    setSubscribed(true)
  }

  if (variant === 'banner') {
    return (
      <div
        className="relative overflow-hidden rounded-3xl bg-white/5 border border-white/10 p-6 lg:p-8"
        aria-label="Newsletter signup"
      >
        <div className="absolute -top-16 -right-16 w-56 h-56 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative flex flex-col lg:flex-row lg:items-center gap-6">
          <div className="lg:max-w-md">
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="w-4 h-4 text-secondary" />
              <h3 className="font-display font-semibold text-white text-xl">Stay Updated</h3>
            </div>
            <p className="text-sm text-white/60 leading-relaxed">
              Insights on branding, design, and digital growth delivered to your inbox. No spam —
              just value, once in a while.
            </p>
          </div>

          {subscribed ? (
            <div
              className="flex-1 flex items-center gap-3 p-4 rounded-xl bg-secondary/10 border border-secondary/25"
              role="status"
              aria-live="polite"
            >
              <MailCheck className="w-5 h-5 text-secondary shrink-0" />
              <div>
                <p className="text-sm font-medium text-secondary">
                  You&apos;re subscribed — welcome aboard!
                </p>
                <p className="text-xs text-white/50 mt-0.5">We&apos;ll keep you in the loop.</p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="flex-1 w-full">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1">
                  <Input
                    type="email"
                    placeholder="Your email address"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value)
                      if (error) setError('')
                    }}
                    required
                    aria-label="Email address for newsletter"
                    aria-invalid={Boolean(error)}
                    aria-describedby={error ? 'newsletter-error' : undefined}
                    className={`w-full bg-white/8 border-white/15 text-white placeholder:text-white/40 h-12 rounded-xl focus:border-primary/70 transition-colors ${
                      error ? 'border-red-400/70 focus:border-red-400' : ''
                    }`}
                  />
                </div>
                <Button
                  type="submit"
                  className="bg-primary hover:bg-primary/90 text-white rounded-xl h-12 px-8 gap-2 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 shrink-0"
                >
                  Subscribe
                  <Send className="w-4 h-4" />
                </Button>
              </div>
              {error && (
                <p id="newsletter-error" className="text-xs text-red-300 mt-1.5" role="alert">
                  {error}
                </p>
              )}
            </form>
          )}
        </div>
      </div>
    )
  }

  return (
    <div className="rounded-2xl bg-white/5 border border-white/10 p-5 backdrop-blur-sm">
      <div className="flex items-center gap-2 mb-2">
        <Sparkles className="w-4 h-4 text-secondary" />
        <h3 className="font-display font-semibold text-white text-lg">Stay Updated</h3>
      </div>
      <p className="text-sm text-white/60 mb-4 leading-relaxed">
        Insights on branding, design, and digital growth delivered to your inbox. No spam — just
        value, once in a while.
      </p>

      {subscribed ? (
        <div
          className="flex items-center gap-3 p-4 rounded-xl bg-secondary/10 border border-secondary/25"
          role="status"
          aria-live="polite"
        >
          <MailCheck className="w-5 h-5 text-secondary shrink-0" />
          <div>
            <p className="text-sm font-medium text-secondary">
              You&apos;re subscribed — welcome aboard!
            </p>
            <p className="text-xs text-white/50 mt-0.5">We&apos;ll keep you in the loop.</p>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-3">
          <div>
            <Input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
                if (error) setError('')
              }}
              required
              aria-label="Email address for newsletter"
              aria-invalid={Boolean(error)}
              aria-describedby={error ? 'newsletter-error' : undefined}
              className={`bg-white/8 border-white/15 text-white placeholder:text-white/40 h-11 rounded-xl focus:border-primary/70 transition-colors ${
                error ? 'border-red-400/70 focus:border-red-400' : ''
              }`}
            />
            {error && (
              <p id="newsletter-error" className="text-xs text-red-300 mt-1.5" role="alert">
                {error}
              </p>
            )}
          </div>
          <Button
            type="submit"
            className="w-full bg-primary hover:bg-primary/90 text-white rounded-xl h-11 gap-2 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
          >
            Subscribe
            <Send className="w-4 h-4" />
          </Button>
        </form>
      )}
    </div>
  )
}
