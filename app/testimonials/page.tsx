import type { Metadata } from 'next'
import { TestimonialsContent } from '@/components/testimonials/testimonials-content'

export const metadata: Metadata = {
  title: 'Testimonials',
  description: 'Read what our clients say about JTH Graphix Production. Real feedback from businesses and organizations we have helped succeed through exceptional design and branding.',
}

export default function TestimonialsPage() {
  return <TestimonialsContent />
}
