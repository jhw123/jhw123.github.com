import { PageProps } from 'gatsby'
import * as React from 'react'
import styled from '@emotion/styled'
import Layout from '../design/layout/layout'
import SEO from '../seo'
import { PagePath } from '../page-paths'
import { Typeface, Typefaces } from '../design/foundation/typefaces'
import { TextColor, TextColors } from '../design/foundation/semantic-colors'
import { ExternalLink } from '../design/components/externalLink'

const IntroductionPage = (props: PageProps) => (
  <Layout>
    <SEO title={PagePath.root.title()} />

    <ARTICLE>
      <H2>
        <span>I am a </span>
        <B>Researcher</B>
        <span> who</span>
      </H2>
      <UL>
        <li>
          <span>was fascinated by the idea behind </span>
          <ExternalLink href="https://www.youtube.com/watch?v=-Ht4qiDRZE8">reCAPTCHA</ExternalLink>
          <span> and became interested in solving challenging problems with </span>
          <ExternalLink href="https://en.wikipedia.org/wiki/Crowdsourcing">crowdsourcing</ExternalLink>
          <span>.</span>
        </li>
        <li>
          <span>is primarily interested in diverse topics in </span>
          <ExternalLink href="https://en.wikipedia.org/wiki/Human%E2%80%93computer_interaction">
            human computer interaction
          </ExternalLink>
          <span> field, including the interactions with AIs, novel user interfaces, and crowdsourcing systems.</span>
        </li>
        <li>
          <span>currently does research on supporting </span>
          <ExternalLink href="https://psycnet.apa.org/record/1998-11111-002">subgoal learning</ExternalLink>
          <span> in the context of online programming learning.</span>
        </li>
        <li>
          recently ponders about the problems of technical complacency, which will be intensified by AIs, and techniques
          to mitigate them.
        </li>
      </UL>
    </ARTICLE>

    <ARTICLE>
      <H2>
        <span>I am a </span>
        <B>Programmer</B>
        <span> who</span>
      </H2>
      <UL>
        <li>
          <span>loves </span>
          <ExternalLink href="https://www.typescriptlang.org/">TypeScript</ExternalLink>
          <span>.</span>
        </li>
        <li>has an one-year experience of designing and building a production-level design system from scratch.</li>
        <li>dislikes repetitive codes and tries reducing them by composing modular functions.</li>
        <li>tries to write codes that are easily understandable and usable for my team members.</li>
        <li>
          <span>understands the importance of efficient algorithms in scalable systems and </span>
          <ExternalLink href="https://leetcode.com/jhw123/">tries practicing</ExternalLink>
          <span> them.</span>
        </li>
      </UL>
    </ARTICLE>

    <ARTICLE>
      <H2>
        <span>I am a </span>
        <B>Person</B>
        <span> who</span>
      </H2>
      <UL>
        <li>
          prefers to understand and support others, but also uses thoughtful languages to insist my ideas when must.
        </li>
        <li>acknowledges my limitation of knowledge and is open to accept and learn new.</li>
        <li>
          works best in an environment where constructive opinions are welcomed and feedback between members is active
        </li>
        <li>is a sympathetic ear for friends and colleagues.</li>
        <li>loves to play a piano, ride a bicycle, and draw pencil sketches.</li>
      </UL>
    </ARTICLE>
  </Layout>
)

const H2 = styled.h2`
  ${Typefaces[Typeface.Bold32]};
  ${TextColors[TextColor.Primary]};
  text-align: center;
`

const ARTICLE = styled.article`
  margin-bottom: 3rem;
`

const B = styled.b`
  ${TextColors[TextColor.Main010]};
`

const UL = styled.ul`
  ${Typefaces[Typeface.Regular20]};
  ${TextColors[TextColor.Secondary]};
`

export default IntroductionPage
