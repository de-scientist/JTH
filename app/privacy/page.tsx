import type { Metadata } from 'next'
import { LegalContent, type LegalPageData } from '@/components/legal/legal-layout'
import { siteConfig } from '@/lib/site-config'

const title = 'Privacy Policy'
const description =
  'Read the JTH Graphix Production Privacy Policy to learn how we collect, use, protect, and manage your personal information when you use our website and services.'

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: '/privacy',
  },
  keywords: [
    'privacy policy',
    'data protection',
    'personal information',
    'JTH Graphix Production privacy',
    'data privacy Kenya',
    'cookie policy',
  ],
  openGraph: {
    title: `${title} | ${siteConfig.brandName}`,
    description,
    type: 'website',
    url: '/privacy',
    siteName: siteConfig.brandName,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${title} | ${siteConfig.brandName}`,
    description,
  },
}

const data: LegalPageData = {
  slug: 'privacy',
  badge: 'Legal',
  title: 'Privacy',
  titleAccent: 'Policy',
  description:
    'At JTH Graphix Production, your privacy matters. This policy explains what information we collect when you use our website and services, how we use and protect it, and the choices you have. We are committed to keeping your personal data safe, transparent, and under your control.',
  lastUpdated: 'August 1, 2026',
  sections: [
    {
      id: 'introduction',
      title: 'Introduction',
      paragraphs: [
        'When you visit jthgraphixproduction.com or engage JTH Graphix Production for design, branding, digital, or printing services, you trust us with your information. This Privacy Policy describes how JTH Graphix Production ("we", "us", or "our") collects, uses, stores, and protects personal information when you use our website, communicate with us, or use our services.',
        'By accessing our website or providing your information to us, you agree to the practices described in this policy. We only use your personal information in the ways described here and in accordance with applicable data protection laws, including the Kenya Data Protection Act, 2019.',
        'Please read this policy carefully. If you have any questions, contact us using the details in the "Contact Information" section below.',
      ],
    },
    {
      id: 'information-we-collect',
      title: 'Information We Collect',
      paragraphs: [
        'We collect information you provide directly to us, including your name, email address, phone number, company name, and the details of the project you describe when you contact us, request a quote, or place an order.',
        'We also collect information automatically when you use our website, such as your IP address, browser type and version, device information, pages you visit, time spent on pages, and referral sources. This information helps us understand how visitors use our site and improve our services.',
        'When we work on a project, we may collect additional information needed to complete your design or branding work, such as your logo files, brand assets, and any content you share with us for the purpose of delivering the service.',
      ],
    },
    {
      id: 'how-we-use-your-information',
      title: 'How We Use Your Information',
      paragraphs: [
        'We use the information we collect to respond to your enquiries, provide quotes, deliver the services you request, process payments, and communicate with you about your projects.',
        'We may also use your information to improve our website and services, personalize your experience, send you marketing communications you have opted into, and meet our legal and regulatory obligations.',
        'We do not sell your personal information to third parties. We only share information in the ways described in this policy or where required by law.',
      ],
    },
    {
      id: 'cookies-and-tracking',
      title: 'Cookies & Tracking',
      paragraphs: [
        'Our website uses cookies and similar technologies to enhance your experience, remember your preferences, and understand how our site is used. Cookies are small text files stored on your device when you visit a website.',
        'We use both essential cookies, which are required for the website to function, and analytics cookies, which help us understand site usage. You can control cookies through your browser settings or our cookie banner. Please see our Cookie Policy for full details.',
      ],
    },
    {
      id: 'analytics',
      title: 'Analytics',
      paragraphs: [
        'We use web analytics tools, including Vercel Analytics, to collect anonymized information about how visitors use our website. This includes data such as the number of visitors, pages viewed, approximate location, and device types.',
        'This analytics data is aggregated and does not personally identify you. It helps us measure performance, identify issues, and make informed improvements to our website and services.',
      ],
    },
    {
      id: 'third-party-services',
      title: 'Third-Party Services',
      paragraphs: [
        'We use trusted third-party services to operate our website and business, including hosting providers, analytics providers, and payment processors. These providers only access personal information to the extent needed to perform their functions and are contractually required to protect it.',
        'Our website contains links to third-party websites, including our social media profiles on Facebook, Instagram, TikTok, LinkedIn, and X. We are not responsible for the privacy practices of those websites and encourage you to review their policies.',
        'For communication, we may use messaging platforms such as WhatsApp. When you contact us through these platforms, their respective privacy policies also apply.',
      ],
    },
    {
      id: 'data-security',
      title: 'Data Security',
      paragraphs: [
        'We take the security of your personal information seriously. We implement appropriate technical and organizational measures to protect your data against unauthorized access, alteration, disclosure, or destruction, including secure connections, access controls, and regular security reviews.',
        'While no method of transmission over the internet is completely secure, we work hard to safeguard your information. We limit access to personal data to team members who need it to perform their duties.',
        'If we become aware of a data breach that affects your personal information, we will notify you and the relevant authorities as required by law.',
      ],
    },
    {
      id: 'user-rights',
      title: 'User Rights',
      paragraphs: [
        'You have the right to access, update, correct, or request the deletion of the personal information we hold about you. You also have the right to object to or restrict certain processing of your data.',
        'You may withdraw your consent to marketing communications at any time by following the unsubscribe instructions in our messages or by contacting us directly.',
        'To exercise any of these rights, email us at jthgraphixproduction@gmail.com. We will respond to your request within a reasonable time and in accordance with applicable law.',
      ],
    },
    {
      id: 'childrens-privacy',
      title: "Children's Privacy",
      paragraphs: [
        'Our website and services are intended for use by adults and businesses. We do not knowingly collect personal information from children under the age of 13 without verifiable parental consent.',
        'If you believe a child has provided us with personal information, please contact us so we can delete the information promptly.',
      ],
    },
    {
      id: 'contact-information',
      title: 'Contact Information',
      paragraphs: [
        'If you have any questions, concerns, or requests regarding this Privacy Policy or how we handle your personal information, please reach out to us. We are happy to answer any questions and will do our best to resolve any concerns you may have about your privacy.',
      ],
      bullets: [
        `Email: ${siteConfig.email}`,
        `Phone: ${siteConfig.phone}`,
        `Location: ${siteConfig.location}`,
      ],
    },
    {
      id: 'changes-to-this-policy',
      title: 'Changes to this Policy',
      paragraphs: [
        'We may update this Privacy Policy from time to time to reflect changes in our practices, technology, or legal requirements. When we make significant changes, we will update the "Last Updated" date at the top of this page and, where appropriate, notify you.',
        'We encourage you to review this page periodically to stay informed about how we protect your information. Your continued use of our website after changes take effect constitutes acceptance of the updated policy.',
      ],
    },
  ],
  faqs: [
    {
      question: 'How do you protect my data?',
      answer:
        'Your information is protected through secure connections, restricted internal access, and industry-standard technical and organizational safeguards. We only collect the data we genuinely need, never sell your information, and regularly review our security practices. If a breach affects you, we will notify you as required by law.',
    },
    {
      question: 'Can I request deletion of my information?',
      answer:
        'Yes. You may request access to, correction of, or deletion of your personal information at any time by emailing jthgraphixproduction@gmail.com. We will process your request promptly and in line with applicable data protection laws.',
    },
    {
      question: 'Do you share my personal information with third parties?',
      answer:
        'We do not sell your information. We only share data with trusted service providers — such as hosting, analytics, and payment processors — who need it to perform their services, and with authorities where required by law.',
    },
    {
      question: 'How long do you keep my information?',
      answer:
        'We retain personal information only for as long as necessary to provide our services, fulfil the purpose it was collected for, and comply with legal, tax, and accounting obligations. After that, it is securely deleted or anonymized.',
    },
    {
      question: 'How can I update my personal information?',
      answer:
        'Simply email us at jthgraphixproduction@gmail.com with the updated details, or let us know during your next project. We will update our records promptly and confirm the change with you.',
    },
  ],
}

export default function PrivacyPage() {
  return <LegalContent data={data} />
}
