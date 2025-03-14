import type { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://jhw123.github.io'),
  title: 'TeachTune',
  description: '',
  icons: ['/images/teachtune/chatbot.png'],
  keywords: ['Human-AI interaction', 'LLM agents', 'AI and Education', 'Generative AI'],
  openGraph: {
    title: 'TeachTune',
    description: '',
    type: 'website',
    images: [{ url: '/projects/teachtune_og.jpeg', width: 1200, height: 630 }],
  },
}

export default function ProjectTeachTuneLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
