import type { Metadata } from 'next'
import { Roboto_Slab } from 'next/font/google'

const inter = Roboto_Slab({ subsets: ['latin'] })

export const metadata: Metadata = {
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
    images: ['/hyoungwook_og.jpg'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
