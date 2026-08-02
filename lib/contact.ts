import siteConfig from '@/data/site-config.json'

export type ContactFormData = {
  fullName: string
  email: string
  phone: string
  company: string
  service: string
  subject: string
  message: string
}

export const contactEmail = siteConfig.email

export function buildMailtoUrl(subject: string, body: string): string {
  return `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}

export function buildContactMailtoUrl(data: ContactFormData): string {
  const lines = [
    'Name:',
    data.fullName,
    '',
    'Email:',
    data.email,
    '',
    'Phone:',
    data.phone.trim() || 'Not provided',
    '',
    'Company:',
    data.company.trim() || 'Not provided',
    '',
    'Service Requested:',
    data.service,
    '',
    'Subject:',
    data.subject,
    '',
    'Message:',
    data.message,
  ]

  return buildMailtoUrl(data.subject, lines.join('\n'))
}

export function openEmailClient(url: string): void {
  if (typeof window !== 'undefined') {
    window.location.href = url
  }
}
