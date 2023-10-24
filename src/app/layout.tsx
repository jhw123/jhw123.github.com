import type { Metadata } from 'next'
import { Roboto_Slab } from 'next/font/google'

const inter = Roboto_Slab({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://jhw123.github.io'),
  title: 'Hyoungwook Jin',
  description:
    'Hyoungwook Jin is a human-computer interaction researcher who is intertested in personalized education at scale.',
  icons: ['/favicon.png'],
  keywords: [
    '진형욱',
    'Hyoungwook Jin',
    'KIXLAB',
    'Personalized education at scale',
    'AI agents for personalized learning',
  ],
  openGraph: {
    title: 'Hyoungwook Jin',
    description:
      'Hyoungwook Jin is a human-computer interaction researcher who is intertested in personalized education at scale.',
    type: 'website',
    images: [{ url: '/hyoungwook_og.jpeg', width: 1200, height: 630 }],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
