import type { Metadata } from 'next'
import { Bebas_Neue, Inter } from 'next/font/google'
import { GoogleAnalytics } from '@next/third-parties/google'

const inter = Inter({ subsets: ['latin'], weight: ['300', '600'], display: 'swap', preload: true })
const bebasNeue = Bebas_Neue({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-cinema',
  display: 'swap',
  preload: true,
})

export const metadata: Metadata = {
  metadataBase: new URL('https://jhw123.github.io'),
  title: 'Hyoungwook Jin',
  description:
    'Hyoungwook Jin is a human-computer interaction researcher who is interested in End-learner Programming.',
  icons: ['/favicon.png'],
  keywords: ['카이스트 진형욱', 'HCI 진형욱', 'KAIST Hyoungwook Jin', 'End-learner Programming'],
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
      <body className={`${inter.className} ${bebasNeue.variable}`}>{children}</body>
      <GoogleAnalytics gaId="G-9WF73KYX2M" />
    </html>
  )
}
