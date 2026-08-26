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
      'JTH Graphix Production | Creative & Technology Partner',
    template: '%s | JTH Graphix Production',
  },
  description:
    'JTH Graphix Production is your creative and technology partner — branding, graphic design, UI/UX, website and software development, automation, and digital growth solutions that help businesses grow.',
  keywords: [
    'Creative Agency Kenya',
    'Technology Partner Kenya',
    'Branding Agency Kenya',
    'Graphic Design Kenya',
    'UI/UX Design Kenya',
    'Website Development Kenya',
    'Software Development Kenya',
    'Business Automation Kenya',
    'Digital Marketing Kenya',
    'Social Media Management Kenya',
    'SEO Kenya',
    'GEO Optimization Kenya',
    'Creative Technology Solutions Kenya',
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
    title: 'JTH Graphix Production | Creative & Technology Partner',
    description:
      'Your creative and technology partner. We transform ideas into brands, digital experiences and technology solutions that help businesses grow.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JTH Graphix Production | Creative & Technology Partner',
    description:
      'Branding, UI/UX, web & software development, automation and digital growth solutions in Kenya.',
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
