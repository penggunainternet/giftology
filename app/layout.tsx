import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Giftology',
  description: 'Giftology adalah...',
  
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
