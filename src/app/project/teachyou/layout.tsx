import type { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://jhw123.github.io'),
  title: 'TeachYou',
  description:
    "TeachYou is a tool that college-level students can use to learn programming by teaching a conversational AI tutee, AlgoBo. Student-initiated explanations and discussions with AlgoBo on real-world examples of algorithms can improve students' knowledge-building skills. AlgoBo's knowledge level and question-asking are highly configurable through our LLM pipeline, opening up opportunities for personalization at scale.",
  icons: ['/images/tutor.png'],
  keywords: ['Human-AI interaction', 'LLM agents', 'AI and Education', 'Generative AI'],
  openGraph: {
    title: 'TeachYou',
    description:
      "TeachYou is a tool that college-level students can use to learn programming by teaching a conversational AI tutee, AlgoBo. Student-initiated explanations and discussions with AlgoBo on real-world examples of algorithms can improve students' knowledge-building skills. AlgoBo's knowledge level and question-asking are highly configurable through our LLM pipeline, opening up opportunities for personalization at scale.",
    type: 'website',
    images: [{ url: '/projects/teachyou_og.png', width: 1200, height: 630 }],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
