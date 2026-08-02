'use client'

import { useState } from 'react'
import { Mail, Send, CheckCircle2 } from 'lucide-react'

export function BlogNewsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.trim()) return
    setSubmitted(true)
    setEmail('')
    setTimeout(() => setSubmitted(false), 4000)
  }

  return (
    <section className="py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto card-premium overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 p-8 lg:p-12 text-center">
            <div className="w-14 h-14 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center mb-5">
              <Mail className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
              Get Insights Straight to Your Inbox
            </h3>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Join our newsletter for practical branding and design tips — no spam, just value.
            </p>

            {submitted ? (
              <div className="flex items-center justify-center gap-2 text-primary font-medium py-4">
                <CheckCircle2 className="w-5 h-5" />
                Thanks! You're on the list.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <label htmlFor="blog-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="blog-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 h-12 px-4 rounded-xl bg-background border border-border focus:border-primary/50 focus:ring-4 focus:ring-primary/10 outline-none transition-all text-foreground placeholder:text-muted-foreground"
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-xl bg-gradient-brand text-white font-medium hover:opacity-90 transition-opacity cursor-pointer"
                >
                  Subscribe
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
