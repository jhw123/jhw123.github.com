import type { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://jhw123.github.io'),
  title: 'CodeTree',
  description:
    "CodeTree is a programming learning platform where learners can review code examples by self-explaining subgoals in the examples. CodeTree generates subgoal hierarchies from learners' explanations and uses them to provide adaptive explanations of subgoals for future learners.",
  icons: ['/images/tutor.png'],
  keywords: ['Learnersourcing', 'Programming education', 'Subgoal learning'],
  openGraph: {
    title: 'CodeTree',
    description:
      "CodeTree is a programming learning platform where learners can review code examples by self-explaining subgoals in the examples. CodeTree generates subgoal hierarchies from learners' explanations and uses them to provide adaptive explanations of subgoals for future learners.",
    type: 'website',
    images: [{ url: '/projects/codetree_og.png', width: 1200, height: 630 }],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
