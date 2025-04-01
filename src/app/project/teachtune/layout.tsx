import type { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://jhw123.github.io'),
  title: 'TeachTune',
  description: '',
  icons: ['/images/teachtune/chatbot.png'],
  keywords: ['Human-AI interaction', 'LLM agents', 'AI and Education', 'Generative AI'],
  openGraph: {
    title: 'TeachTune',
    description:
      'TeachTune is a tool that allows teachers to build pedagogical chatbots for their students and review them through automated conversations between their chatbots and LLM-based simulated students. Our research showed that teachers need to make downstream chatbots for their students and that evaluating learning tools in breadth and depth is crucial before deploying them to actual classes.',
    type: 'website',
    images: [{ url: '/projects/teachtune_og.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TeachTune',
    description:
      'TeachTune is a tool that allows teachers to build pedagogical chatbots for their students and review them through automated conversations between their chatbots and LLM-based simulated students. Our research showed that teachers need to make downstream chatbots for their students and that evaluating learning tools in breadth and depth is crucial before deploying them to actual classes.',
    images: '/projects/teachtune_og.png',
  },
}

export default function ProjectTeachTuneLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
