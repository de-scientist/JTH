import { siteConfig } from '@/lib/site-config'

export type ContactFormData = {
  fullName: string
  email: string
  phone: string
  company: string
  service: string
  subject: string
  message: string
}

export type MailtoResult = 'opened' | 'timed-out'

export const contactEmail = siteConfig.email

/**
 * Builds a mailto: URL with subject and body safely encoded.
 */
export function buildMailtoUrl(subject: string, body: string): string {
  const params = [
    `subject=${encodeURIComponent(subject)}`,
    `body=${encodeURIComponent(body)}`,
  ].join('&')

  return `mailto:${contactEmail}?${params}`
}

/**
 * Builds a professionally formatted, fully encoded mailto URL from form data.
 */
export function buildContactMailtoUrl(data: ContactFormData): string {
  const body = [
    'NEW WEBSITE ENQUIRY',
    '',
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
    'Service:',
    data.service,
    '',
    'Subject:',
    data.subject,
    '',
    'Message:',
    '',
    data.message,
  ].join('\n')

  return buildMailtoUrl(data.subject, body)
}

export type OpenEmailClientOptions = {
  /** Called once when the outcome is known. */
  onResult?: (result: MailtoResult) => void
  /** Timeout before assuming the mail client did not open. */
  timeout?: number
}

/**
 * Opens the user's default email application.
 *
 * `window.location.href = "mailto:..."` is unreliable across browsers and is
 * especially fragile when invoked outside a synchronous user gesture. Instead we
 * create a real <a> element and click it — the universally supported approach.
 * The click happens synchronously inside the submit handler to preserve the
 * user-activation context.
 *
 * Because a blocked mailto cannot be detected directly, we watch for a
 * `blur` / `visibilitychange` within the timeout window to report the outcome.
 */
export function openEmailClient(url: string, options: OpenEmailClientOptions = {}): void {
  if (typeof window === 'undefined') return

  const { onResult, timeout = 3000 } = options

  const link = document.createElement('a')
  link.href = url
  link.setAttribute('target', '_self')
  link.style.display = 'none'

  let settled = false

  const cleanup = () => {
    document.removeEventListener('visibilitychange', handleVisibilityChange)
    window.removeEventListener('blur', handleBlur)
    if (timer !== undefined) {
      clearTimeout(timer)
    }
    if (link.parentNode) {
      link.parentNode.removeChild(link)
    }
  }

  const finish = (result: MailtoResult) => {
    if (settled) return
    settled = true
    cleanup()
    onResult?.(result)
  }

  const handleVisibilityChange = () => {
    if (document.visibilityState === 'hidden') {
      finish('opened')
    }
  }

  const handleBlur = () => {
    finish('opened')
  }

  document.addEventListener('visibilitychange', handleVisibilityChange)
  window.addEventListener('blur', handleBlur)

  const timer = window.setTimeout(() => finish('timed-out'), timeout)

  document.body.appendChild(link)
  link.click()
}
