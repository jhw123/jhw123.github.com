import type { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://jhw123.github.io'),
  title: 'RelianceScope',
  description: '',
  icons: ['/images/tutor.png'],
  keywords: [],
  openGraph: {
    title: 'RelianceScope',
    description: '',
    type: 'website',
    images: [{ url: '/projects/teachyou_og.png', width: 1200, height: 630 }],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
