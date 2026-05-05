import type { Metadata } from 'next'
import { Geist, Geist_Mono, Outfit, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { ClientLayout } from '@/components/ClientLayout'
import Script from 'next/script'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });
const _outfit = Outfit({ subsets: ["latin"], variable: '--font-outfit' });
const playfair = Playfair_Display({ subsets: ["latin"], variable: '--font-playfair', style: ['normal', 'italic'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://ntfxnew.vercel.app'),
  title: {
    default: 'Trade Global Financial Markets | New Trade FX Services',
    template: '%s | New Trade FX Services',
  },
  description: 'Access global financial markets with ease. Trade Forex, Gold, Indices, and Digital Assets on a professional-grade platform designed for all traders.',
  icons: {
    icon: '/icon new tradefx (1000px x 1000px).png',
    apple: '/icon new tradefx (1000px x 1000px).png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ntfxnew.vercel.app',
    siteName: 'New Trade FX Services',
    title: 'Trade Global Financial Markets | New Trade FX Services',
    description: 'Access global financial markets with ease. Trade Forex, Gold, Indices, and Digital Assets on a professional-grade platform designed for all traders.',
    images: [
      {
        url: '/site.png',
        width: 1200,
        height: 627,
        alt: 'New Trade FX Services - Professional Trading Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Trade Global Financial Markets | New Trade FX Services',
    description: 'Access global financial markets with ease. Trade Forex, Gold, Indices, and Digital Assets on a professional-grade platform designed for all traders.',
    images: ['/site.png'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${_outfit.variable} ${playfair.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased" suppressHydrationWarning>
        <link
          href="https://cdn.jsdelivr.net/npm/remixicon@4.2.0/fonts/remixicon.css"
          rel="stylesheet"
        />
        <Header />
        <ClientLayout>
          {children}
        </ClientLayout>
        <Footer />
        <Analytics />
        <Script
          src="https://www.callshivai.com/widget2.js?agentId=69de1c55f5b6ee59515bec67&userId=69dc86ab6b66fa0cc93fb3f9"
          strategy="lazyOnload"
        />
      </body>
    </html>
  )
}
