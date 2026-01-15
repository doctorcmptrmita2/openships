import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'OpenShip.io - Stop waiting, start shipping',
  description: 'The open directory for the next generation of builders. Launch your product for free.',
  keywords: ['startup', 'launch', 'product hunt', 'directory', 'indie hacker'],
  icons: {
    icon: '/favicon.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
