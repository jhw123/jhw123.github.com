import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { GoogleAnalytics } from './googleAnalytics'

const inter = Inter({ subsets: ['latin'], weight: ['300', '600'], display: 'swap', preload: true })

export const metadata: Metadata = {
  metadataBase: new URL('https://jhw123.github.io'),
  title: 'Hyoungwook Jin',
  description:
    'Hyoungwook Jin is a human-computer interaction researcher who is interested in End-learner Programming.',
  icons: ['/favicon.png'],
  keywords: [
    '진형욱',
    'Hyoungwook Jin',
    'KAIST KIXLAB',
    'End-learner Programming',
    'Personalized interactive learning at scale',
  ],
  openGraph: {
    title: 'Hyoungwook Jin',
    description:
      'Hyoungwook Jin is a human-computer interaction researcher who is interested in End-learner Programming.',
    type: 'website',
    images: [{ url: '/hyoungwook_og.jpeg', width: 1200, height: 630 }],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <GoogleAnalytics />
      <body className={inter.className}>{children}</body>
    </html>
  )
}
