import type { Metadata, Viewport } from 'next'
import { Inter, Sora } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { WhatsAppButton } from '@/components/whatsapp-button'
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
    default: 'JTH Graphix Production | Digital Experiences That Drive Results',
    template: '%s | JTH Graphix Production',
  },
  description:
    'JTH Graphix Production is a premium creative agency building brands, experiences, and digital solutions that drive measurable business growth.',
  keywords: [
    'graphic design',
    'branding',
    'UI/UX design',
    'website design',
    'digital marketing',
    'creative agency',
    'Kenya',
    'Nairobi',
  ],
  authors: [{ name: 'JTH Graphix Production' }],
  creator: 'JTH Graphix Production',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'JTH Graphix Production',
    title: 'JTH Graphix Production | Digital Experiences That Drive Results',
    description:
      'We build brands, experiences, and digital solutions that drive measurable business growth.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JTH Graphix Production',
    description: 'Premium creative agency. Strategy, design, and digital excellence.',
  },
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
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="relative min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
            <WhatsAppButton />
          </div>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
