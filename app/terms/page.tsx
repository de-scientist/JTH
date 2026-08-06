import type { Metadata } from 'next'
import { LegalContent, type LegalPageData } from '@/components/legal/legal-layout'
import { siteConfig } from '@/lib/site-config'

const title = 'Terms & Conditions'
const description =
  'Review the JTH Graphix Production Terms & Conditions governing website use and our design, branding, digital, printing, and training services.'

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: '/terms',
  },
  keywords: [
    'terms and conditions',
    'service terms',
    'JTH Graphix Production terms',
    'terms of service',
    'client agreement',
  ],
  openGraph: {
    title: `${title} | ${siteConfig.brandName}`,
    description,
    type: 'website',
    url: '/terms',
    siteName: siteConfig.brandName,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${title} | ${siteConfig.brandName}`,
    description,
  },
}

const data: LegalPageData = {
  slug: 'terms',
  badge: 'Legal',
  title: 'Terms &',
  titleAccent: 'Conditions',
  description:
    'These Terms & Conditions govern your use of the JTH Graphix Production website and our design, branding, digital, printing, and training services. By engaging us or using our website, you agree to these terms. Please read them carefully before proceeding.',
  lastUpdated: 'August 1, 2026',
  sections: [
    {
      id: 'acceptance-of-terms',
      title: 'Acceptance of Terms',
      paragraphs: [
        'These Terms & Conditions ("Terms") form a legally binding agreement between you and JTH Graphix Production. By accessing our website, requesting a quote, or commissioning any service, you confirm that you have read, understood, and agreed to be bound by these Terms.',
        'If you do not agree with any part of these Terms, you should not use our website or services. We may update these Terms from time to time, and the most current version will always be available on this page.',
      ],
    },
    {
      id: 'services',
      title: 'Services',
      paragraphs: [
        'JTH Graphix Production provides a range of creative services including logo design, brand identity and branding, website design, social media design and management, graphic design (flyers, posters, business cards, brochures, banners, and more), packaging design, motion graphics, premium printing, and digital and creative training.',
        'Each project is unique, and the specific scope, deliverables, and timelines for your project will be confirmed in your quotation or project brief. By accepting a quotation, you agree to the scope described in it.',
        'Any services, features, or deliverables not listed in your quotation are considered out of scope and may incur additional charges.',
      ],
    },
    {
      id: 'client-responsibilities',
      title: 'Client Responsibilities',
      paragraphs: [
        'You agree to provide accurate and complete information for your project, including correct contact details and any brand assets, content, or reference materials required to complete the work.',
        'You are responsible for ensuring you have the rights to use any logos, images, text, or other materials you provide to us, and that their use does not infringe the rights of any third party.',
        'Delays in providing materials or feedback may affect project timelines. We will keep you informed, but we are not liable for delays caused by late client input.',
      ],
    },
    {
      id: 'quotations',
      title: 'Quotations',
      paragraphs: [
        'All quotations are provided free of charge and are valid for the period stated on the quotation, typically 14 days, unless otherwise agreed. After this period, we may revise the quotation.',
        'Quotations are based on the information you provide at the time. If the scope of the project changes, we will provide an updated quotation for approval before proceeding.',
        'A quotation is an estimate and becomes binding only when accepted by you, typically through written confirmation or a deposit payment.',
      ],
    },
    {
      id: 'payments',
      title: 'Payments',
      paragraphs: [
        'Payment terms will be stated in your quotation. Unless otherwise agreed, a deposit of 50% is required before work begins, with the balance due before final delivery or files are released.',
        'Payments may be made through the payment methods we accept and communicate to you. You are responsible for any fees or charges associated with your chosen payment method.',
        'We reserve the right to pause work if payments are not made in accordance with the agreed terms.',
      ],
    },
    {
      id: 'intellectual-property',
      title: 'Intellectual Property',
      paragraphs: [
        'Unless otherwise agreed in writing, all original designs and creative work we produce remain the intellectual property of JTH Graphix Production until full payment has been received for the project.',
        'Once full payment is made, ownership of the final deliverables is transferred to you for the agreed purpose. Drafts, concepts, and unfinished work remain our property unless otherwise agreed.',
        'We retain the right to display completed projects in our portfolio, case studies, and marketing materials, unless you have requested otherwise in writing at the start of the project.',
      ],
    },
    {
      id: 'website-usage',
      title: 'Website Usage',
      paragraphs: [
        'You may use our website for lawful purposes only. You agree not to misuse the website, attempt to gain unauthorized access to our systems, or interfere with the website\u2019s availability or security.',
        'Our website content, including text, images, logos, and designs, is protected by copyright and may not be reproduced or distributed without our written permission.',
        'We are not liable for any loss or damage arising from your use of, or reliance on, information on our website.',
      ],
    },
    {
      id: 'limitation-of-liability',
      title: 'Limitation of Liability',
      paragraphs: [
        'To the maximum extent permitted by law, JTH Graphix Production shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or business opportunities, arising from your use of our services or website.',
        'Our total liability for any claim arising from a project or your use of our website shall not exceed the total amount you paid for the specific service giving rise to the claim.',
        'Nothing in these Terms limits liability that cannot be excluded or limited under applicable law.',
      ],
    },
    {
      id: 'project-delivery',
      title: 'Project Delivery',
      paragraphs: [
        'Delivery timelines are agreed at the start of each project and depend on the complexity of the work. Most single designs are delivered within 24 to 72 hours; branding projects typically take 5 to 7 days; and websites take 2 to 3 weeks.',
        'We will deliver final files in the formats agreed in your quotation (for example, print-ready PDF, source files, or web-optimized assets).',
        'If we anticipate a delay beyond the agreed timeline, we will notify you as soon as possible with a revised completion date.',
      ],
    },
    {
      id: 'revisions',
      title: 'Revisions',
      paragraphs: [
        'Every project includes a reasonable number of revisions, as stated in your quotation. For single designs, this is typically two to three rounds of revisions to fine-tune the concept.',
        'Revisions that go beyond the agreed scope, or that significantly change the original brief after work has begun, may be subject to additional charges, which will be agreed with you before proceeding.',
        'Once you approve the final design, that design is considered complete and subsequent changes may be charged separately.',
      ],
    },
    {
      id: 'cancellation-policy',
      title: 'Cancellation Policy',
      paragraphs: [
        'You may cancel a project at any time by notifying us in writing. If work has already begun, you will be charged for the work completed up to the date of cancellation.',
        'Deposits are non-refundable once work has commenced, as they secure our time and resources for your project.',
        'For projects cancelled before work begins, a full refund of any deposit will be provided.',
      ],
    },
    {
      id: 'governing-law',
      title: 'Governing Law',
      paragraphs: [
        'These Terms are governed by and construed in accordance with the laws of the Republic of Kenya, and you submit to the exclusive jurisdiction of the courts of Kenya.',
        'If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions will continue in full force and effect.',
      ],
    },
    {
      id: 'contact-information',
      title: 'Contact Information',
      paragraphs: [
        'If you have any questions about these Terms, need to discuss a project, or would like to request a copy of any policy, please contact us using the details below.',
      ],
      bullets: [
        `Email: ${siteConfig.email}`,
        `Phone: ${siteConfig.phone}`,
        `Location: ${siteConfig.location}`,
      ],
    },
  ],
  faqs: [
    {
      question: 'Who owns the designs created?',
      answer:
        'Ownership of the final designs transfers to you once full payment has been received. Drafts, concepts, and source files are subject to the terms in your quotation — most clients receive editable source files for their final approved designs.',
    },
    {
      question: 'How are payments handled?',
      answer:
        'A 50% deposit is typically required before work begins, with the balance due before final files are released. Exact terms are stated in your quotation, and we accept the payment methods confirmed with you at the start of the project.',
    },
    {
      question: 'How many revisions are included?',
      answer:
        'Most projects include two to three rounds of revisions, as stated in your quotation. Major changes to the brief after work begins, or revisions beyond the agreed scope, may be quoted separately.',
    },
    {
      question: 'What happens if I cancel a project?',
      answer:
        'If you cancel before work begins, your deposit is fully refunded. If work has started, you are charged for the portion completed up to the date of cancellation. Deposits are non-refundable once work has commenced.',
    },
    {
      question: 'How do I contact you about my project?',
      answer:
        'Simply email jthgraphixproduction@gmail.com, call or WhatsApp +254117537015, or use the contact form on our website. We typically respond within a few hours during business hours.',
    },
  ],
}

export default function TermsPage() {
  return <LegalContent data={data} />
}
