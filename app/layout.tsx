/* eslint-disable @next/next/no-page-custom-font */
import type { Metadata, Viewport } from 'next'
import type { ReactNode } from 'react'
import '../src/index.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://cuppet-app.shatslabs.chatgpt.site'),
  title: 'Cuppet',
  description:
    'Create persistent agents in one sentence. Cuppet works across your connected accounts, keeps the schedule, and sends the result to your inbox.',
  icons: {
    icon: '/cuppet-icon-full-color.svg',
  },
  openGraph: {
    title: 'Cuppet',
    description:
      'Create persistent agents in one sentence. Cuppet works across your connected accounts, keeps the schedule, and sends the result to your inbox.',
    url: 'https://cuppet-app.shatslabs.chatgpt.site',
    siteName: 'Cuppet',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Cuppet — Persistent AI Agents',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cuppet',
    description:
      'Create persistent agents in one sentence. Cuppet works across your connected accounts, keeps the schedule, and sends the result to your inbox.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#F5F3EE',
}

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600;9..40,700&family=Instrument+Serif:ital@0;1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
