import type { Metadata } from 'next'
import services from '@/data/services.json'
import pricing from '@/data/services-pricing.json'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Services & Pricing',
  description: 'Clear pricing and premium services from JTH Graphix Production.'
}

export default function ServicesPricingPage() {
  return (
    <>
      <section className="pt-32 pb-12 lg:pt-40 lg:pb-16 bg-background relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">{pricing.heroTitle}</span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">{pricing.heroTitle}</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{pricing.heroSubtitle}</p>
            <div className="mt-8 flex items-center justify-center gap-3">
              <Button asChild size="lg">
                <Link href="/contact">Start a Project</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP || '254117537015'}`}>Chat on WhatsApp</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
            {pricing.categoryLabels.map((c: string) => (
              <span key={c} className="px-4 py-2 rounded-full bg-card text-sm font-medium">{c}</span>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pricing.pricedServices.map((s: any) => (
              <div key={s.slug} className="p-6 rounded-2xl bg-card border border-border">
                <h3 className="text-xl font-semibold text-foreground mb-2">{s.label}</h3>
                <div className="text-primary font-bold text-lg mb-4">{s.price}</div>
                <p className="text-sm text-muted-foreground mb-6">{services.find((x:any)=>x.slug===s.slug)?.shortDescription || ''}</p>
                <div className="flex gap-3">
                  <Button asChild size="lg">
                    <Link href={`/services/${s.slug}`}>Learn More</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <Link href="/contact">Request a Quote</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 grid lg:grid-cols-2 gap-8">
            <div className="p-6 rounded-2xl bg-card border border-border">
              <h4 className="text-lg font-semibold text-foreground mb-4">What affects pricing?</h4>
              <ul className="list-inside list-disc space-y-2 text-muted-foreground">
                {pricing.creativePricingFactors.map((f: string, i: number) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-card border border-border">
              <h4 className="text-lg font-semibold text-foreground mb-4">Training pricing factors</h4>
              <ul className="list-inside list-disc space-y-2 text-muted-foreground">
                {pricing.trainingPricingFactors.map((f: string, i: number) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12 text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">{pricing.ctaTitle}</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-6">{pricing.ctaText}</p>
            <div className="flex items-center justify-center gap-3">
                {pricing.ctaButtons.map((b: string) => (
                <Button asChild size="lg" key={b}>
                  <Link href={b === 'Chat on WhatsApp' ? `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP || '254117537015'}` : '/contact'}>{b}</Link>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
