import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ServiceDetailContent } from '@/components/services/service-detail-content'
import services from '@/data/services.json'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const service = services.find((s) => s.slug === slug)
  
  if (!service) {
    return { title: 'Service Not Found' }
  }

  return {
    title: service.title,
    description: service.fullDescription || service.description,
  }
}

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }))
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params
  const service = services.find((s) => s.slug === slug)
  
  if (!service) {
    notFound()
  }

  const relatedServices = services
    .filter((s) => s.category === service.category && s.id !== service.id)
    .slice(0, 3)

  return <ServiceDetailContent service={service} relatedServices={relatedServices} />
}
