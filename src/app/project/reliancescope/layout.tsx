import type { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://jhw123.github.io'),
  title: 'RelianceScope',
  description:
    'RellianceScope is a framework for understanding how students rely on AI chatbots during problem-solving, based on their cognitive engagement in help-seeking and response-use actions.',
  icons: ['/images/scope.png'],
  keywords: ['Human-computer interaction', 'Reliance on AI during problem-solving', 'AI in education'],
  openGraph: {
    title: 'RelianceScope',
    description:
      'RellianceScope is a framework for understanding how students rely on AI chatbots during problem-solving, based on their cognitive engagement in help-seeking and response-use actions.',
    type: 'website',
    images: [{ url: '/projects/reliancescope_og.png', width: 1200, height: 630 }],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
