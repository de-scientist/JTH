import type { Metadata } from 'next'
import pricing from '@/data/services-pricing.json'
import { siteConfig } from '@/lib/site-config'
import Link from 'next/link'
import {
  ClipboardList,
  MessagesSquare,
  FileText,
  CheckCircle,
  Rocket,
  Layers,
  Package,
  RefreshCw,
  Timer,
  MonitorSmartphone,
  Lightbulb,
  ArrowRight,
  Phone,
  MessageCircle,
  BadgeCheck,
} from 'lucide-react'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Request a Custom Quote',
  description:
    'Get a transparent, itemized custom quotation from JTH Graphix Production for design, branding, digital, web, and training services. No hidden fees, no surprises.',
}

const processIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  ClipboardList,
  MessagesSquare,
  FileText,
  CheckCircle,
  Rocket,
}

const factorIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Layers,
  Package,
  RefreshCw,
  Timer,
  MonitorSmartphone,
  Lightbulb,
}

const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP || siteConfig.whatsapp

export default function ServicesPricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-12 lg:pt-40 lg:pb-16 bg-background relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              {pricing.heroBadge}
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6 text-balance tracking-tight leading-[1.1]">
              {pricing.heroTitle}
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              {pricing.heroSubtitle}
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Button asChild size="lg" className="rounded-xl gap-2">
                <Link href="/contact">
                  Request a Custom Quote
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-xl gap-2">
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                    'Hello JTH Graphix Production. I would like to request a custom quotation for a project.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-4 h-4" />
                  Chat on WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* All custom note */}
      <section className="pb-12 lg:pb-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto rounded-2xl bg-primary/5 border border-primary/20 p-6 flex items-start gap-4">
            <BadgeCheck className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
            <p className="text-foreground leading-relaxed">
              <strong className="font-semibold">{pricing.allCustomNote}</strong>{' '}
              Every JTH project — from a single flyer to a full brand identity or training program — is
              quoted based on its specific scope, complexity, and requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Quotation process timeline */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-5">
              How It Works
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance tracking-tight leading-[1.1]">
              {pricing.quoteIntroTitle}
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {pricing.quoteIntroText}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {pricing.quoteProcess.map((step, index) => {
              const Icon = processIconMap[step.icon] || ClipboardList
              return (
                <div
                  key={step.step}
                  className="relative rounded-2xl bg-card border border-border p-6 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
                >
                  {index < pricing.quoteProcess.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 -translate-y-1/2 z-10">
                      <ArrowRight className="w-5 h-5 text-primary/40" />
                    </div>
                  )}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-gradient-brand-subtle flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <span className="font-display text-3xl font-bold text-primary/15">
                      {step.step}
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Pricing factors */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-5">
              Transparency
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance tracking-tight leading-[1.1]">
              {pricing.pricingFactorsTitle}
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              These are the factors we consider when preparing every custom quotation.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {pricing.pricingFactors.map((factor) => {
              const Icon = factorIconMap[factor.icon] || Layers
              return (
                <div
                  key={factor.label}
                  className="rounded-2xl bg-card border border-border p-7 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                    {factor.label}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {factor.description}
                  </p>
                </div>
              )
            })}
          </div>

          {/* Training factors */}
          <div className="mt-10 max-w-3xl mx-auto rounded-2xl bg-card border border-border p-7">
            <h3 className="font-display text-lg font-semibold text-foreground mb-4">
              {pricing.trainingPricingTitle}
            </h3>
            <ul className="grid sm:grid-cols-2 gap-3 list-inside list-disc text-muted-foreground">
              {pricing.trainingPricingFactors.map((f: string, i: number) => (
                <li key={i} className="leading-relaxed">
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-muted/30 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance tracking-tight leading-[1.1]">
              {pricing.ctaTitle}
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8 leading-relaxed text-pretty">
              {pricing.ctaText}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Button asChild size="lg" className="rounded-xl gap-2">
                <Link href="/contact">
                  Request a Quote
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-xl gap-2">
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                    'Hello JTH Graphix Production. I would like to request a custom quotation for a project.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-4 h-4" />
                  Chat on WhatsApp
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-xl gap-2">
                <a href={`tel:${siteConfig.phone}`}>
                  <Phone className="w-4 h-4" />
                  Call Now
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
