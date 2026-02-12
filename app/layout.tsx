import React from "react"
import type { Metadata, Viewport } from 'next'
import { Inter, Oswald } from 'next/font/google'

import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const oswald = Oswald({ subsets: ['latin'], variable: '--font-oswald' })

export const metadata: Metadata = {
  title: 'Elite Epoxy Floors | Premium Garage & Basement Floor Coatings',
  description:
    'Transform your garage and basement with premium epoxy floor coatings. Durable, glossy, and built to last. Free estimates available.',
}

export const viewport: Viewport = {
  themeColor: '#141820',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${oswald.variable} overflow-x-hidden`}>
      <body className="font-sans antialiased overflow-x-hidden">{children}</body>
    </html>
  )
}
