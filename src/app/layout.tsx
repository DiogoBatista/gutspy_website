import { type Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import clsx from 'clsx'

import '@/styles/tailwind.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: {
    template: '%s - GutSpy',
    default: 'GutSpy - Your gut health assistant.',
  },
  description: 'GutSpy is a tool that helps you understand your gut health.',
  keywords: [
    'digestive health',
    'bowel movement tracker',
    'digestion tracker',
    'gut health app',
    'general wellness',
    'IBS / Digestive Issues',
    'food sensitivity tracker',
    'constipation tracker',
    'bloating tracker',
    'ibs tracker',
    'poop log',
    'track bowel movements',
    'stool tracker',
  ],
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        url: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={clsx('bg-gray-50 antialiased', inter.variable)}>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-7B25LNWNJN"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-7B25LNWNJN');
          `}
        </Script>
        <Script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="DhD4bC51DRR2TSFnXM4GdA"
          strategy="afterInteractive"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
