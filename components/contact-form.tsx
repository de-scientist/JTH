'use client'

import { useState } from 'react'
import { Send, MailCheck, AlertCircle, Mail } from 'lucide-react'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { FieldGroup, Field, FieldLabel } from '@/components/ui/field'
import { siteConfig } from '@/lib/site-config'
import { buildContactMailtoUrl, openEmailClient, type ContactFormData } from '@/lib/contact'

const services = [
  'Flyer Design',
  'Poster Design',
  'Logo Design',
  'Branding & Visual Identity',
  'Social Media Graphics',
  'Business Cards',
  'Brochures',
  'Premium Printing',
  'Website Design',
  'Banner Design',
  'Event Graphics',
  'Other',
]

const initialForm: ContactFormData = {
  fullName: '',
  email: '',
  phone: '',
  company: '',
  service: '',
  subject: '',
  message: '',
}

type FormErrors = Partial<Record<keyof ContactFormData, string>>

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validate(form: ContactFormData): FormErrors {
  const errors: FormErrors = {}

  if (!form.fullName.trim()) {
    errors.fullName = 'Please enter your full name.'
  }

  if (!form.email.trim()) {
    errors.email = 'Please enter your email address.'
  } else if (!emailPattern.test(form.email.trim())) {
    errors.email = 'Please enter a valid email address (e.g. name@example.com).'
  }

  if (!form.service) {
    errors.service = 'Please select a service.'
  }

  if (!form.subject.trim()) {
    errors.subject = 'Please enter a subject for your message.'
  }

  if (!form.message.trim()) {
    errors.message = 'Please tell us a little about your project.'
  } else if (form.message.trim().length < 10) {
    errors.message = 'Please provide a bit more detail (at least 10 characters).'
  }

  return errors
}

export function ContactForm() {
  const [form, setForm] = useState<ContactFormData>(initialForm)
  const [errors, setErrors] = useState<FormErrors>({})
  const [status, setStatus] = useState<'idle' | 'submitting' | 'submitted' | 'blocked'>('idle')

  const handleChange = (field: keyof ContactFormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }))
    }
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const nextErrors = validate(form)
    setErrors(nextErrors)

    if (Object.values(nextErrors).some(Boolean)) {
      toast.error('Please fix the highlighted fields and try again.', { id: 'contact-validation' })
      const firstInvalid = (Object.keys(nextErrors) as (keyof ContactFormData)[]).find(
        (key) => nextErrors[key],
      )
      if (firstInvalid) {
        document.getElementById(`contact-${firstInvalid}`)?.focus()
      }
      return
    }

    // Build the mailto URL up-front (fully encoded).
    const mailtoUrl = buildContactMailtoUrl(form)

    setStatus('submitting')

    const loadingToast = toast.loading('Opening your email application...', {
      id: 'mailto-status',
      duration: 15000,
    })

    // Trigger synchronously inside the submit gesture so the browser treats it
    // as a direct user action — no await/router.push/location.href.
    openEmailClient(mailtoUrl, {
      timeout: 3000,
      onResult: (result) => {
        if (result === 'opened') {
          toast.success('Your email draft is ready — just press send!', {
            id: loadingToast,
          })
          setStatus('submitted')
        } else {
          toast.error('We couldn\u2019t automatically open your email application.', {
            id: loadingToast,
          })
          setStatus('blocked')
        }
      },
    })
  }

  const resetForm = () => {
    setForm(initialForm)
    setErrors({})
    setStatus('idle')
  }

  if (status === 'submitted') {
    return (
      <div className="text-center py-12" role="status" aria-live="polite">
        <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-6">
          <MailCheck className="w-8 h-8 text-green-500" />
        </div>
        <h3 className="text-2xl font-bold text-foreground mb-2">Your Email Draft Is Ready!</h3>
        <p className="text-muted-foreground mb-6 max-w-md mx-auto">
          We&apos;ve opened your email application with your message pre-filled. Just press
          send — we&apos;ll get back to you within 24 hours.
        </p>
        <Button onClick={resetForm} variant="outline">
          Send Another Message
        </Button>
      </div>
    )
  }

  const inputClasses = 'h-12'
  const invalidClasses = (field: keyof ContactFormData) =>
    errors[field] ? 'border-destructive focus-visible:border-destructive' : ''

  return (
    <div>
      {status === 'blocked' && (
        <div
          role="alert"
          className="mb-6 flex items-start gap-3 p-4 rounded-2xl border border-secondary/30 bg-secondary/5"
        >
          <AlertCircle className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
          <div className="text-sm text-foreground leading-relaxed">
            <p className="font-medium mb-1">
              We couldn&apos;t automatically open your email application.
            </p>
            <p>
              Please email us directly at{' '}
              <a
                href={siteConfig.emailHref}
                className="font-semibold text-primary underline underline-offset-4 hover:text-secondary transition-colors"
              >
                {siteConfig.email}
              </a>
            </p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate>
        <FieldGroup className="space-y-5">
          <div className="grid md:grid-cols-2 gap-5">
            <Field>
              <FieldLabel htmlFor="contact-fullName">Full Name</FieldLabel>
              <Input
                id="contact-fullName"
                name="fullName"
                placeholder="John Doe"
                value={form.fullName}
                onChange={(e) => handleChange('fullName', e.target.value)}
                className={`${inputClasses} ${invalidClasses('fullName')}`}
                required
                autoComplete="name"
                aria-required="true"
                aria-invalid={Boolean(errors.fullName)}
                aria-describedby={errors.fullName ? 'contact-fullName-error' : undefined}
              />
              {errors.fullName && (
                <p id="contact-fullName-error" className="text-sm text-destructive" role="alert">
                  {errors.fullName}
                </p>
              )}
            </Field>
            <Field>
              <FieldLabel htmlFor="contact-email">Email Address</FieldLabel>
              <Input
                id="contact-email"
                name="email"
                type="email"
                placeholder="john@example.com"
                value={form.email}
                onChange={(e) => handleChange('email', e.target.value)}
                className={`${inputClasses} ${invalidClasses('email')}`}
                required
                autoComplete="email"
                aria-required="true"
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? 'contact-email-error' : undefined}
              />
              {errors.email && (
                <p id="contact-email-error" className="text-sm text-destructive" role="alert">
                  {errors.email}
                </p>
              )}
            </Field>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            <Field>
              <FieldLabel htmlFor="contact-phone">
                Phone Number <span className="text-muted-foreground font-normal">(optional)</span>
              </FieldLabel>
              <Input
                id="contact-phone"
                name="phone"
                type="tel"
                placeholder="+254 700 000000"
                value={form.phone}
                onChange={(e) => handleChange('phone', e.target.value)}
                className={inputClasses}
                autoComplete="tel"
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="contact-company">
                Company Name <span className="text-muted-foreground font-normal">(optional)</span>
              </FieldLabel>
              <Input
                id="contact-company"
                name="company"
                placeholder="ABC Limited"
                value={form.company}
                onChange={(e) => handleChange('company', e.target.value)}
                className={inputClasses}
                autoComplete="organization"
              />
            </Field>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            <Field>
              <FieldLabel htmlFor="contact-service">Selected Service</FieldLabel>
              <Select value={form.service} onValueChange={(value) => handleChange('service', value)}>
                <SelectTrigger
                  id="contact-service"
                  className={`${inputClasses} w-full ${invalidClasses('service')}`}
                  aria-required="true"
                  aria-invalid={Boolean(errors.service)}
                  aria-describedby={errors.service ? 'contact-service-error' : undefined}
                >
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  {services.map((service) => (
                    <SelectItem key={service} value={service}>
                      {service}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.service && (
                <p id="contact-service-error" className="text-sm text-destructive" role="alert">
                  {errors.service}
                </p>
              )}
            </Field>
            <Field>
              <FieldLabel htmlFor="contact-subject">Subject</FieldLabel>
              <Input
                id="contact-subject"
                name="subject"
                placeholder="Website Design Inquiry"
                value={form.subject}
                onChange={(e) => handleChange('subject', e.target.value)}
                className={`${inputClasses} ${invalidClasses('subject')}`}
                required
                aria-required="true"
                aria-invalid={Boolean(errors.subject)}
                aria-describedby={errors.subject ? 'contact-subject-error' : undefined}
              />
              {errors.subject && (
                <p id="contact-subject-error" className="text-sm text-destructive" role="alert">
                  {errors.subject}
                </p>
              )}
            </Field>
          </div>

          <Field>
            <FieldLabel htmlFor="contact-message">Message</FieldLabel>
            <Textarea
              id="contact-message"
              name="message"
              placeholder="Tell us about your project, timeline, and any specific requirements..."
              value={form.message}
              onChange={(e) => handleChange('message', e.target.value)}
              className={`min-h-32 resize-none ${invalidClasses('message')}`}
              required
              aria-required="true"
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? 'contact-message-error' : undefined}
            />
            {errors.message && (
              <p id="contact-message-error" className="text-sm text-destructive" role="alert">
                {errors.message}
              </p>
            )}
          </Field>

          <Button
            type="submit"
            size="lg"
            className="w-full bg-primary hover:bg-primary/90 h-12 gap-2"
            disabled={status === 'submitting'}
          >
            {status === 'submitting' ? (
              <>Preparing Email...</>
            ) : (
              <>
                Send Message
                <Send className="w-4 h-4" />
              </>
            )}
          </Button>

          <p className="text-xs text-muted-foreground text-center">
            Submitting opens your email application with your message pre-filled, sent to{' '}
            <a
              href={siteConfig.emailHref}
              className="inline-flex items-center gap-1 font-medium text-primary hover:text-secondary transition-colors"
            >
              <Mail className="w-3 h-3" />
              {siteConfig.email}
            </a>
          </p>
        </FieldGroup>
      </form>
    </div>
  )
}
