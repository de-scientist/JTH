'use client'

import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { useInView, useReducedMotion } from 'framer-motion'

const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect

interface CountUpProps {
  value: number
  prefix?: string
  suffix?: string
  duration?: number
  className?: string
}

export function CountUp({
  value,
  prefix = '',
  suffix = '',
  duration = 1.4,
  className,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const reduceMotion = useReducedMotion()
  const [display, setDisplay] = useState(value)

  // Render the final value on the server/first paint to avoid hydration mismatch
  // and layout shift, then reset to 0 before paint only when motion is allowed.
  useIsomorphicLayoutEffect(() => {
    if (reduceMotion) return
    setDisplay(0)
  }, [reduceMotion])

  useEffect(() => {
    if (reduceMotion || !inView) return
    let raf = 0
    const start = performance.now()
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / (duration * 1000))
      const eased = 1 - Math.pow(1 - t, 3)
      setDisplay(Math.round(eased * value))
      if (t < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, reduceMotion, value, duration])

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display}
      {suffix}
    </span>
  )
}
