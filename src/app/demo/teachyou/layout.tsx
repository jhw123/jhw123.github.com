import type { Metadata } from 'next'
import { Raleway } from 'next/font/google'

const inter = Raleway({ subsets: ['latin'], weight: ['400', '600'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://jhw123.github.io'),
  title: 'TeachYou | Interactive Demo ',
  description:
    'Hyoungwook Jin is a human-computer interaction researcher who is intertested in personalized education at scale.',
  icons: ['/images/tutor.png'],
  keywords: [],
  openGraph: {
    title: 'TeachYou | Interactive Demo',
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
