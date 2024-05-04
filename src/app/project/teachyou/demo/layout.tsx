import type { Metadata } from 'next'
import { Raleway } from 'next/font/google'

const inter = Raleway({ subsets: ['latin'], weight: ['400', '600'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://jhw123.github.io'),
  title: 'TeachYou | Interactive Demo ',
  description:
    "TeachYou is a tool that college-level students can use to learn programming by teaching a conversational AI tutee, AlgoBo. Student-initiated explanations and discussions with AlgoBo on real-world examples of algorithms can improve students' knowledge-building skills. AlgoBo's knowledge level and question-asking are highly configurable through our LLM pipeline, opening up opportunities for personalization at scale",
  icons: ['/images/tutor.png'],
  keywords: ['Human-AI interaction', 'LLM agents', 'AI and Education', 'Generative AI'],
  openGraph: {
    title: 'TeachYou | Interactive Demo',
    description:
      "TeachYou is a tool that college-level students can use to learn programming by teaching a conversational AI tutee, AlgoBo. Student-initiated explanations and discussions with AlgoBo on real-world examples of algorithms can improve students' knowledge-building skills. AlgoBo's knowledge level and question-asking are highly configurable through our LLM pipeline, opening up opportunities for personalization at scale",
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
