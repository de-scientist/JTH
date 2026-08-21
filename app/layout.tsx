import type { Metadata, Viewport } from 'next'
import { Inter, Sora } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { WhatsAppButton } from '@/components/whatsapp-button'
import { Toaster } from '@/components/ui/sonner'
import Script from 'next/script'
import { siteConfig } from '@/lib/site-config'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://jthgraphixproduction.com'),
  title: {
    default:
      'JTH Graphix Production | Branding, Web & Software Development in Kenya',
    template: '%s | JTH Graphix Production',
  },
  description:
    'JTH Graphix Production is a Kenyan creative agency and technology partner offering graphic design, branding, website development, software development, digital marketing, business automation, photography, videography and training.',
  keywords: [
    'Graphic Design Agency Kenya',
    'Branding Agency Kenya',
    'Website Development Kenya',
    'Software Development Kenya',
    'Digital Marketing Kenya',
    'Social Media Management Kenya',
    'Business Automation Kenya',
    'Photography and Videography Kenya',
    'Printing Services Kenya',
    'Creative Agency Kenya',
    'UI/UX Design Kenya',
    'SEO Kenya',
    'Nairobi',
  ],
  authors: [{ name: 'JTH Graphix Production' }],
  creator: 'JTH Graphix Production',
  category: 'business',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'JTH Graphix Production',
    title: 'JTH Graphix Production | Branding, Web & Software Development in Kenya',
    description:
      'A technology, creativity and innovation partner helping businesses build stronger brands, better digital experiences and smarter business solutions.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JTH Graphix Production',
    description:
      'Branding, web & software development, digital marketing and creative solutions in Kenya.',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['Organization', 'LocalBusiness'],
      '@id': 'https://jthgraphixproduction.com/#organization',
      name: 'JTH Graphix Production',
      url: 'https://jthgraphixproduction.com',
      email: siteConfig.email,
      telephone: siteConfig.phone,
      description: siteConfig.premiumDescription,
      image: 'https://jthgraphixproduction.com/images/logo-white.png',
      logo: 'https://jthgraphixproduction.com/images/logo-white.png',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Nairobi',
        addressCountry: 'KE',
      },
      areaServed: 'KE',
      sameAs: Object.values(siteConfig.socialLinks),
    },
    {
      '@type': 'WebSite',
      '@id': 'https://jthgraphixproduction.com/#website',
      url: 'https://jthgraphixproduction.com',
      name: 'JTH Graphix Production',
      publisher: { '@id': 'https://jthgraphixproduction.com/#organization' },
    },
  ],
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#F8FAFC' },
    { media: '(prefers-color-scheme: dark)', color: '#0B1220' },
  ],
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${sora.variable} font-sans antialiased`}>
        <Script
          type="application/ld+json"
          id="organization-jsonld"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider>
          <div className="relative min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
            <WhatsAppButton />
          </div>
        </ThemeProvider>
        <Analytics />
        <Toaster position="top-center" richColors />
      </body>
    </html>
  )
}
