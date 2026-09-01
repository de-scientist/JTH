'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import NextImage from 'next/image'
import useEmblaCarousel from 'embla-carousel-react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

interface CarouselImage {
  src: string
  alt?: string
  title?: string
  category?: string
}

interface ServiceCarouselProps {
  images: CarouselImage[]
  serviceName: string
  className?: string
}

export function ServiceCarousel({ images, serviceName, className }: ServiceCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: images.length > 1,
    align: 'center',
    slidesToScroll: 1,
    containScroll: 'trimSnaps',
    dragFree: false,
  })

  const [selectedIndex, setSelectedIndex] = useState(0)
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const [isReducedMotion, setIsReducedMotion] = useState(false)

  const autoplayIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const validImages = images.filter(
    (img) => img && typeof img.src === 'string' && img.src.length > 0
  )

  const slideCount = validImages.length
  const isSingleSlide = slideCount <= 1

  // Detect reduced motion preference
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setIsReducedMotion(mq.matches)
    const handler = (e: MediaQueryListEvent) => setIsReducedMotion(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext()
  }, [emblaApi])

  const scrollTo = useCallback(
    (index: number) => {
      emblaApi?.scrollTo(index)
    },
    [emblaApi]
  )

  // Embla API events
  useEffect(() => {
    if (!emblaApi) return

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap())
      setCanScrollPrev(emblaApi.canScrollPrev())
      setCanScrollNext(emblaApi.canScrollNext())
    }

    onSelect()
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)

    return () => {
      emblaApi.off('select', onSelect)
      emblaApi.off('reInit', onSelect)
    }
  }, [emblaApi])

  // Autoplay
  useEffect(() => {
    if (!emblaApi || isSingleSlide || isReducedMotion) return

    const shouldPlay = !isHovered && !isPaused

    if (shouldPlay) {
      autoplayIntervalRef.current = setInterval(() => {
        if (emblaApi && emblaApi.canScrollNext()) {
          emblaApi.scrollNext()
        } else if (emblaApi) {
          emblaApi.scrollTo(0)
        }
      }, 4500)
    }

    return () => {
      if (autoplayIntervalRef.current) {
        clearInterval(autoplayIntervalRef.current)
        autoplayIntervalRef.current = null
      }
    }
  }, [emblaApi, isHovered, isPaused, isSingleSlide, isReducedMotion])

  // Pause on tab becoming hidden
  useEffect(() => {
    const handleVisibility = () => {
      if (document.hidden) {
        setIsPaused(true)
      } else {
        setIsPaused(false)
      }
    }

    document.addEventListener('visibilitychange', handleVisibility)
    return () => document.removeEventListener('visibilitychange', handleVisibility)
  }, [])

  // Keyboard navigation
  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault()
        scrollPrev()
      } else if (e.key === 'ArrowRight') {
        e.preventDefault()
        scrollNext()
      }
    }

    container.addEventListener('keydown', handleKeyDown)
    return () => container.removeEventListener('keydown', handleKeyDown)
  }, [scrollPrev, scrollNext])

  if (slideCount === 0) return null

  // Single image — static display
  if (isSingleSlide) {
    const img = validImages[0]
    return (
      <div className={cn('relative', className)}>
        <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-card border border-border">
          <NextImage
            src={img.src}
            alt={img.alt || `${serviceName} showcase`}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
          {img.title && (
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
              <p className="text-white text-sm font-medium">{img.title}</p>
              {img.category && (
                <p className="text-white/70 text-xs">{img.category}</p>
              )}
            </div>
          )}
        </div>
      </div>
    )
  }

  return (
    <motion.div
      ref={containerRef}
      className={cn('relative group', className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5 }}
      role="region"
      aria-roledescription="carousel"
      aria-label={`${serviceName} image carousel`}
      tabIndex={0}
    >
      {/* Main carousel */}
      <div ref={emblaRef} className="overflow-hidden rounded-2xl">
        <div className="flex">
          {validImages.map((img, index) => (
            <div
              key={`${img.src}-${index}`}
              className="min-w-0 shrink-0 grow-0 basis-full pl-0 first:pl-0"
              role="group"
              aria-roledescription="slide"
              aria-label={`Slide ${index + 1} of ${slideCount}`}
            >
              <div className="relative aspect-[16/10] bg-card border border-border rounded-2xl overflow-hidden mx-1 first:ml-0 last:mr-0">
                <NextImage
                  src={img.src}
                  alt={img.alt || `${serviceName} — example ${index + 1}`}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  loading={index === 0 ? 'eager' : 'lazy'}
                  priority={index === 0}
                />
                {/* Subtle gradient overlay at bottom for caption readability */}
                {img.title && (
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent p-4 pt-8">
                    <p className="text-white text-sm font-medium drop-shadow-md">
                      {img.title}
                    </p>
                    {img.category && (
                      <p className="text-white/70 text-xs drop-shadow-md">
                        {img.category}
                      </p>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation arrows — hidden on mobile, visible on hover on desktop */}
      {!isSingleSlide && (
        <>
          <button
            onClick={scrollPrev}
            disabled={!canScrollPrev}
            className={cn(
              'absolute left-3 top-1/2 -translate-y-1/2 z-10',
              'w-10 h-10 rounded-full',
              'bg-background/80 backdrop-blur-sm border border-border',
              'flex items-center justify-center',
              'text-foreground hover:bg-primary hover:text-primary-foreground',
              'transition-all duration-200',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50',
              'opacity-0 group-hover:opacity-100',
              'disabled:opacity-0 disabled:pointer-events-none',
              'md:w-11 md:h-11'
            )}
            aria-label={`Previous ${serviceName} image`}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={scrollNext}
            disabled={!canScrollNext}
            className={cn(
              'absolute right-3 top-1/2 -translate-y-1/2 z-10',
              'w-10 h-10 rounded-full',
              'bg-background/80 backdrop-blur-sm border border-border',
              'flex items-center justify-center',
              'text-foreground hover:bg-primary hover:text-primary-foreground',
              'transition-all duration-200',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50',
              'opacity-0 group-hover:opacity-100',
              'disabled:opacity-0 disabled:pointer-events-none',
              'md:w-11 md:h-11'
            )}
            aria-label={`Next ${serviceName} image`}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </>
      )}

      {/* Bottom controls: dots + counter */}
      {!isSingleSlide && (
        <div className="flex items-center justify-between mt-4 px-1">
          {/* Pagination dots */}
          <div
            className="flex items-center gap-2"
            role="tablist"
            aria-label={`${serviceName} slide navigation`}
          >
            {validImages.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={cn(
                  'h-2 rounded-full transition-all duration-300',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50',
                  selectedIndex === index
                    ? 'bg-secondary w-8'
                    : 'bg-border hover:bg-muted-foreground/30 w-2'
                )}
                role="tab"
                aria-selected={selectedIndex === index}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Slide counter */}
          <span className="text-xs text-muted-foreground font-medium tabular-nums tracking-wider">
            {String(selectedIndex + 1).padStart(2, '0')}
            <span className="mx-1 text-border">/</span>
            {String(slideCount).padStart(2, '0')}
          </span>
        </div>
      )}
    </motion.div>
  )
}
