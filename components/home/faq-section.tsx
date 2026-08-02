'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { SectionHeader } from '@/components/ui/section-header'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { fadeUp, defaultTransition, viewportOnce } from '@/lib/animations'
import siteConfig from '@/data/site-config.json'

const faqs = [
  {
    id: 'services',
    question: 'What graphic design services does JTH Graphix Production offer?',
    answer:
      'JTH Graphix Production is a full-service creative agency in Kenya offering logo design, brand identity and business branding, website design, social media design, flyers, posters, business cards, brochures, banners, packaging, motion graphics, and premium printing services. We also provide digital marketing support and practical creative training for individuals, schools and organizations.',
  },
  {
    id: 'why-jth',
    question: 'Why choose JTH Graphix Production over other design agencies?',
    answer:
      'Clients choose JTH because we combine fast turnaround with production-ready quality and strategy-led design. Most projects are delivered within 24 to 72 hours, every file is prepared to professional print and digital standards, and we focus on designs that convert — helping businesses look credible, win trust and grow. With a 5.0 average client rating and 98% satisfaction rate, our results speak for themselves.',
  },
  {
    id: 'cost',
    question: 'How much does branding or logo design cost in Kenya?',
    answer:
      'Pricing depends on the scope of your project. A professional logo design is our most popular starting point, while full brand identity packages include logos, color palettes, typography, and brand guidelines. We provide free, no-obligation quotes tailored to your budget. Contact us via WhatsApp or the contact form and we will send you a clear estimate within hours.',
  },
  {
    id: 'time',
    question: 'How long does it take to get a design delivered?',
    answer:
      'Most single designs — flyers, posters, social media graphics and business cards — are delivered within 24 to 72 hours. Branding projects typically take 5 to 7 days, and website design takes 2 to 3 weeks depending on complexity. You will always receive a clear timeline before we start, and we keep you updated at every stage.',
  },
  {
    id: 'printing',
    question: 'What printing services are available?',
    answer:
      'We offer premium printing services including business cards, flyers, posters, brochures, banners, roll-up stands, stickers, signage, and corporate branded materials. Every design we create is prepared in print-ready formats, and we can handle the full production process so you receive finished, professional materials.',
  },
  {
    id: 'website',
    question: 'What makes a professional website?',
    answer:
      'A professional website is fast, mobile-friendly, secure, and clearly communicates what you do and how to contact you. It reflects your brand identity, builds trust, and guides visitors toward taking action — whether that is calling you, messaging you, or making a purchase. We design websites that look premium and convert visitors into enquiries.',
  },
  {
    id: 'get-started',
    question: 'How do I get started and request a free quote?',
    answer:
      'Getting started is simple. Click "Start Your Project", send us a message on WhatsApp, or use the contact form with a short description of what you need. Within hours you will receive a free quote and a suggested timeline. There is no obligation — many clients begin with a single design and grow with us.',
  },
  {
    id: 'outside-kenya',
    question: 'Do you work with businesses outside Kenya?',
    answer:
      'Yes. While we are proudly based in Nairobi, Kenya, we work with clients and organizations across East Africa and internationally. All digital work is delivered online, and we provide print-ready files that can be produced anywhere in the world.',
  },
]

export function FAQSection() {
  return (
    <section id="faq" className="py-20 lg:py-32 bg-muted/30 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <SectionHeader
          badge="FAQ"
          title={
            <>
              Questions?{' '}
              <span className="text-gradient">We&apos;ve Got Answers.</span>
            </>
          }
          description="Everything businesses usually ask before starting a design or branding project with JTH Graphix Production."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          transition={defaultTransition}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq) => (
              <AccordionItem key={faq.id} value={faq.id}>
                <AccordionTrigger className="font-display text-base font-semibold text-foreground hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-10 text-center">
            <p className="text-muted-foreground mb-4">Still have a question?</p>
            <Link
              href={`https://wa.me/${siteConfig.whatsapp.replace(/\s/g, '')}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-brand text-white font-medium shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:scale-[1.02] transition-all duration-300"
            >
              <MessageCircle className="w-5 h-5" />
              Chat With Us on WhatsApp
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
