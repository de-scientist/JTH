'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SectionHeader } from '@/components/ui/section-header'
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel'
import testimonials from '@/data/testimonials.json'
import { fadeUp, defaultTransition, viewportOnce } from '@/lib/animations'
import { cn } from '@/lib/utils'
import { useIsMobile } from '@/components/ui/use-mobile'

function ClientAvatar({ name }: { name: string }) {
  const initials = name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()

  return (
    <div
      className="w-16 h-16 rounded-2xl bg-gradient-brand flex items-center justify-center text-white font-display font-bold text-lg shadow-lg shadow-primary/20"
      aria-hidden="true"
    >
      {initials}
    </div>
  )
}

function TestimonialCard({ testimonial }: { testimonial: typeof testimonials[0] }) {
  return (
    <motion.div
      variants={fadeUp}
      transition={defaultTransition}
      className="glass rounded-3xl p-8 md:p-12 shadow-xl"
      role="region"
      aria-label={`Testimonial from ${testimonial.name}`}
    >
      <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
        <ClientAvatar name={testimonial.name} />
        <div className="text-center md:text-left">
          <p className="font-display font-semibold text-foreground text-lg">
            {testimonial.name}
          </p>
          <p className="text-muted-foreground text-sm">
            {testimonial.role}, {testimonial.company}
          </p>
          <div className="flex justify-center md:justify-start gap-1 mt-2" aria-label={`${testimonial.rating} out of 5 stars`}>
            {[...Array(testimonial.rating)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
            ))}
          </div>
        </div>
        <div className="hidden md:flex flex-col gap-2 ml-auto">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-primary/10">
            <span className="text-[11px] font-semibold text-primary">
              {testimonial.industry}
            </span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-secondary/10">
            <span className="text-[11px] font-semibold text-secondary">
              {testimonial.project}
            </span>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
            <Quote className="w-6 h-6 text-primary/40" />
          </div>
        </div>
      </div>

      <blockquote className="text-lg md:text-xl text-foreground text-center md:text-left leading-relaxed">
        &ldquo;{testimonial.content}&rdquo;
      </blockquote>

      <div className="mt-8 pt-6 border-t border-white/10">
        <div className="flex items-center justify-between">
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={cn(
                  'w-4 h-4',
                  i < testimonial.rating
                    ? 'fill-secondary text-secondary'
                    : 'text-muted-foreground/20'
                )}
              />
            ))}
          </div>
          <span className="text-sm text-muted-foreground">{testimonial.rating}/5</span>
        </div>
      </div>
    </motion.div>
  )
}

export function TestimonialsSection() {
  const isMobile = useIsMobile()

  if (isMobile) {
    return (
      <section id="testimonials" className="py-20 lg:py-32 bg-muted/30 relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <SectionHeader
            badge="Client Success Stories"
            title={
              <>
                Trusted By Businesses,{' '}
                <span className="text-gradient">Organizations & Entrepreneurs</span>
              </>
            }
            description="From startups to corporations, churches to NGOs, institutions to government-related organizations — businesses across Kenya trust JTH to transform their brands, digital presence and business operations."
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUp}
            transition={defaultTransition}
            className="max-w-4xl mx-auto"
          >
            <Carousel
              opts={{ align: 'start', loop: true }}
              className="w-full"
            >
              <CarouselContent className="-ml-4">
                {testimonials.map((testimonial) => (
                  <CarouselItem key={testimonial.id} className="pl-4 md:basis-2/3 lg:basis-full">
                    <TestimonialCard testimonial={testimonial} />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="rounded-xl hover:bg-primary hover:text-white hover:border-primary transition-all duration-300" />
              <CarouselNext className="rounded-xl hover:bg-primary hover:text-white hover:border-primary transition-all duration-300" />
            </Carousel>
          </motion.div>
        </div>
      </section>
    )
  }

  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)
  const [direction, setDirection] = useState(0)

  const next = useCallback(() => {
    setDirection(1)
    setAutoplay(false)
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }, [])

  const prev = useCallback(() => {
    setDirection(-1)
    setAutoplay(false)
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }, [])

  useEffect(() => {
    if (!autoplay) return
    const timer = setInterval(() => {
      setDirection(1)
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [autoplay])

  const variants = {
    enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? 60 : -60 }),
    center: { opacity: 1, x: 0 },
    exit: (dir: number) => ({ opacity: 0, x: dir > 0 ? -60 : 60 }),
  }

  return (
    <section id="testimonials" className="py-20 lg:py-32 bg-muted/30 relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <SectionHeader
          badge="Client Success Stories"
          title={
            <>
              Trusted By Businesses,{' '}
              <span className="text-gradient">Organizations & Entrepreneurs</span>
            </>
          }
          description="From startups to corporations, churches to NGOs, institutions to government-related organizations — businesses across Kenya trust JTH to transform their brands, digital presence and business operations."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          transition={defaultTransition}
          className="max-w-4xl mx-auto"
        >
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={current}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="glass rounded-3xl p-8 md:p-12 shadow-xl"
                  role="region"
                  aria-label={`Testimonial from ${testimonials[current].name}`}
                  aria-live="polite"
                >
                  <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
                    <ClientAvatar name={testimonials[current].name} />
                    <div className="text-center md:text-left">
                      <p className="font-display font-semibold text-foreground text-lg">
                        {testimonials[current].name}
                      </p>
                      <p className="text-muted-foreground text-sm">
                        {testimonials[current].role}, {testimonials[current].company}
                      </p>
                      <div className="flex justify-center md:justify-start gap-1 mt-2" aria-label={`${testimonials[current].rating} out of 5 stars`}>
                        {[...Array(testimonials[current].rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                        ))}
                      </div>
                    </div>
                    <div className="hidden md:flex flex-col gap-2 ml-auto">
                      <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-primary/10">
                        <span className="text-[11px] font-semibold text-primary">
                          {testimonials[current].industry}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-secondary/10">
                        <span className="text-[11px] font-semibold text-secondary">
                          {testimonials[current].project}
                        </span>
                      </div>
                      <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                        <Quote className="w-6 h-6 text-primary/40" />
                      </div>
                    </div>
                  </div>

                  <blockquote className="text-lg md:text-xl text-foreground text-center md:text-left leading-relaxed">
                    &ldquo;{testimonials[current].content}&rdquo;
                  </blockquote>

                  <div className="mt-8 pt-6 border-t border-white/10">
                    <div className="flex items-center justify-between">
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={cn(
                              'w-4 h-4',
                              i < testimonials[current].rating
                                ? 'fill-secondary text-secondary'
                                : 'text-muted-foreground/20'
                            )}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-muted-foreground">{testimonials[current].rating}/5</span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex items-center justify-center gap-4 mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={prev}
                className="rounded-xl hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>

              <div className="flex gap-2" role="tablist" aria-label="Testimonial navigation">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    role="tab"
                    aria-selected={index === current}
                    onClick={() => {
                      setDirection(index > current ? 1 : -1)
                      setAutoplay(false)
                      setCurrent(index)
                    }}
                    className={cn(
                      'h-2.5 rounded-full transition-all duration-500',
                      index === current
                        ? 'bg-gradient-brand w-10'
                        : 'bg-muted-foreground/25 w-2.5 hover:bg-muted-foreground/40'
                    )}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={next}
                className="rounded-xl hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
