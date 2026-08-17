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
import { siteConfig } from '@/lib/site-config'
import faqsData from '@/data/faq.json'

const faqs = faqsData

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
