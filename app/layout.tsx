import type { Metadata, Viewport } from 'next'
import { Inter, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { WhatsAppButton } from '@/components/whatsapp-button'
import './globals.css'

// JTH Graphix Production - Premium Creative Studio

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter'
})

const geistMono = Geist_Mono({ 
  subsets: ['latin'],
  variable: '--font-geist-mono'
})

export const metadata: Metadata = {
  title: {
    default: 'JTH Graphix Production | Bold Design. Strong Branding.',
    template: '%s | JTH Graphix Production'
  },
  description: 'JTH Graphix Production creates bold, clean, and impactful visuals for businesses, organizations, and individuals — from flyers and logos to full branding systems, premium print materials, social media graphics, and modern websites.',
  keywords: ['graphic design', 'branding', 'logo design', 'flyer design', 'poster design', 'social media graphics', 'Kenya', 'Nairobi'],
  authors: [{ name: 'JTH Graphix Production' }],
  creator: 'JTH Graphix Production',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'JTH Graphix Production',
    title: 'JTH Graphix Production | Bold Design. Strong Branding.',
    description: 'Premium visual solutions for print and digital. Branding, design, and creative services.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JTH Graphix Production',
    description: 'Bold design. Strong branding. Premium visual solutions.',
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
      <body className={`${inter.variable} ${geistMono.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
            <WhatsAppButton />
          </div>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
