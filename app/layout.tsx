import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Cribblr AI',
  description: 'CribblrAI Automation Agency',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          {/* Other meta tags, link tags, etc. */}
        </head>
      <body>{children}</body>
    </html>
  )
}
