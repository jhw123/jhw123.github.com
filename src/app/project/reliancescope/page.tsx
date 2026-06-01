'use client'
import { BibTex } from '@/app/component/bibtex'
import { ExternalLink } from '@/app/component/externalLink'
import { IconLink } from '@/app/component/iconLink'
import { Profile } from '@/app/component/profile'
import { PUBLICATION } from '@/data/publication'
import { MOBILE_BREAKPOINT } from '@/ui'
import { Global, ThemeProvider, css } from '@emotion/react'
import styled from '@emotion/styled'
import {
  BodyText,
  DEFAULT_LIGHT_THEME,
  Divider,
  HeaderText,
  LinearLayout,
  ResetStyle,
  StrongText,
  SubHeaderText,
} from '@wookiejin/react-component'
import Image from 'next/image'
import { useState } from 'react'
import { ChatViewer } from './component/chatViewer'
import { ReliancePatterns } from './component/reliancePatterns'
import { PATTERNS } from './data/patterns'

const THEME = {
  ...DEFAULT_LIGHT_THEME,
  font: {
    ...DEFAULT_LIGHT_THEME.font,
    Title: css`
      font-size: 1.6rem;
      line-height: 1.4;
      font-weight: 600;
    `,
  },
  color: {
    ...DEFAULT_LIGHT_THEME.color,
    Brand: css`
      color: #097c87;
    `,
  },
}

const BIBTEX = `
@article{jin2026reliancescope,
  title={RelianceScope: An Analytical Framework for Examining Students' Reliance on Generative AI Chatbots in Problem Solving},
  author={Jin, Hyoungwook and Yoo, Minju and Han, Jieun and Chen, Zixin and Ahn, So-Yeon and Wang, Xu},
  journal={arXiv preprint arXiv:2602.16251},
  year={2026}
}
`.trim()

export default function Page() {
  const [patternIndex, setPatternIndex] = useState(0)

  return (
    <ThemeProvider theme={THEME}>
      <Global styles={ResetStyle} />
      <Global
        styles={css`
          body {
            color: #333333;
            background-color: #ffffff;
          }
          strong {
            font-weight: bold;
          }
          li {
            list-style: initial;
          }
          code {
            border-radius: 4px;
            font-family: sans-serif;
            padding: 0 0.125rem;
            white-space: pre-wrap;
          }
        `}
      />
      <main>
        <Content>
          <h1>
            <HeaderText align="center" marginBottom={24}>
              <Highlight>RelianceScope</Highlight>: An Analytical Framework for Examining Students&apos; Reliance on
              Generative AI Chatbots in Problem Solving
            </HeaderText>
          </h1>

          <h2>
            <Authors>
              {PUBLICATION.relianceScope.authors.map((person, i) => (
                <Profile key={i} person={person} />
              ))}
            </Authors>
          </h2>

          <LinkButtons>
            {PUBLICATION.relianceScope.links
              ?.filter(([label]) => label !== 'Website')
              .map(([label, href], i) => (
                <IconLink key={i} href={href} title={`TeachTune ${label}`} marginHorizontal={4} marginBottom={8}>
                  {label}
                </IconLink>
              ))}
          </LinkButtons>

          <Divider marginVertical={24} />

          <h2>
            <SubHeaderText color="Focus" marginBottom={8}>
              ABSTRACT
            </SubHeaderText>
          </h2>

          <BodyText>
            <p>
              Generative AI chatbots enable personalized problem-solving, but effective learning requires students to
              self-regulate both how they seek help and how they use AI-generated responses. Considering engagement
              modes across these two actions reveals nuanced reliance patterns: for example, a student may actively
              engage in help-seeking by clearly specifying areas of need, yet engage passively in response-use by
              copying AI outputs, or vice versa. However, existing research lacks systematic tools for jointly capturing
              engagement across help-seeking and response-use, limiting the analysis of such reliance behaviors. We
              introduce RelianceScope, an analytical framework that characterizes students&apos; reliance on chatbots
              during problem-solving. RelianceScope (1) operationalizes reliance into nine patterns based on
              combinations of engagement modes in help-seeking and response-use, and (2) situates these patterns within
              a knowledge-context lens that accounts for students&apos; prior knowledge and the instructional
              significance of knowledge components. Rather than prescribing optimal AI use, the framework enables
              fine-grained analysis of reliance in open-ended student-AI interactions. As an illustrative application,
              we applied RelianceScope to analyze chat and code-edit logs from 79 college students in a web programming
              course. Results show that active help-seeking is associated with active response-use, whereas reliance
              patterns remain similar across knowledge mastery levels. Students often struggled to articulate their
              knowledge gaps and to adapt AI responses. Using our annotated dataset as a benchmark, we further
              demonstrate that large language models can reliably detect reliance during help-seeking and response-use.
              We conclude by discussing the implications of RelianceScope and the design guidelines for AI-supported
              educational systems.
            </p>
          </BodyText>

          <Divider marginVertical={24} />

          <h2>
            <SubHeaderText color="Focus" marginBottom={16}>
              DEFINING RELIANCE
            </SubHeaderText>
          </h2>

          <BodyText marginBottom={16}>
            <p>
              RelianceScope models student-chatbot interaction as cycles of two actions:{' '}
              <StrongText>help-seeking </StrongText>(asking the chatbot) and <StrongText>response-use</StrongText>{' '}
              (using the chatbot’s reply). Each action is classified by cognitive engagement as passive, active, or
              constructive. We define reliance as the combination of engagement modes across these two actions.
            </p>
          </BodyText>

          <ImageContainer>
            <Image src={'/images/reliancescope/reliancescope.png'} fill objectFit="contain" alt="RelianceScope" />
          </ImageContainer>

          <Divider marginVertical={24} />

          <h2>
            <SubHeaderText color="Focus" marginBottom={16}>
              DATA COLLECTION
            </SubHeaderText>
          </h2>

          <BodyText marginBottom={16}>
            <p>
              We collected a dataset of 79 college students&apos; interactions with a chatbot while solving a web
              programming problem. Students used the interface shown below to create a to-do list application using
              Vue.js, with access to a chatbot for help. The dataset includes 1,362 chat logs annotated with reliance
              patterns, 2,708 code edit logs, pre- and post-assessments, and self-reported self-regulation measures.
            </p>
          </BodyText>

          <ImageContainer>
            <Image src={'/images/reliancescope/interface.png'} fill objectFit="contain" alt="interface" />
          </ImageContainer>

          <Divider marginVertical={24} />

          <h2>
            <SubHeaderText color="Focus" marginBottom={16}>
              RELIANCE PATTERNS
            </SubHeaderText>
          </h2>

          <BodyText marginBottom={16}>
            <p>
              We identified the nine reliance patterns in our dataset and analyzed their distribution and
              characteristics. Each pattern reflects a unique combination of engagement modes, revealing diverse ways
              students interact with AI chatbots during problem-solving. The distribution of these patterns are noted in
              each square below. <StrongText>CLICK</StrongText> on each square to see example conversations from our
              dataset.
            </p>
          </BodyText>

          <ReliancePatterns selectedPatternIndex={patternIndex} onClick={setPatternIndex} />
          <ChatContainer>
            <ChatViewer conversation={PATTERNS[patternIndex]} assistantImg="/images/reliancescope/chatbot.png" />
          </ChatContainer>

          <BodyText marginTop={16}>
            <p>
              Check more findings and insights in our paper and dataset. We also provide design guidelines for
              AI-supported educational systems based on our findings.
            </p>
          </BodyText>

          <Divider marginVertical={24} />

          <h2>
            <SubHeaderText color="Focus" marginBottom={8}>
              BIBTEX
            </SubHeaderText>
          </h2>

          <BibTex text={BIBTEX} />

          <Divider marginVertical={24} />

          <LinearLayout justifyContent="center" gap={16}>
            <ExternalLink href="https://cse.engin.umich.edu/">
              <Image
                src="/images/umich_logo.png"
                width={1920 / 9}
                height={375 / 9}
                style={{ filter: 'drop-shadow(white 0 0 1px)' }}
                alt="University of Michigan logo"
              />
            </ExternalLink>
            <ExternalLink href="https://cs.kaist.ac.kr">
              <Image
                src="/images/kaist_logo.png"
                width={813 / 6}
                height={224 / 6}
                style={{ filter: 'drop-shadow(white 0 0 1px)' }}
                alt="KAIST logo"
              />
            </ExternalLink>
            <ExternalLink href="https://cse.hkust.edu.hk/">
              <Image
                src="/images/hkust_logo.png"
                width={2332 / 14}
                height={742 / 14}
                style={{ filter: 'drop-shadow(white 0 0 1px)' }}
                alt="HKUST logo"
              />
            </ExternalLink>
          </LinearLayout>
        </Content>
      </main>
    </ThemeProvider>
  )
}

const Content = styled.div`
  max-width: 800px;
  padding: 24px 24px 40px 24px;
  margin: 0 auto;
`

const Authors = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 8px;

  @media (max-width: ${MOBILE_BREAKPOINT}px) {
    grid-template-columns: 1fr 1fr;
  }
`

const LinkButtons = styled.div`
  justify-content: center;
  width: 100%;
  margin-top: 24px;
  text-align: center;
`

const ChatContainer = styled.div`
  ${({ theme }) => css`
    ${theme.border.Secondary}
    margin-top: 16px;
    padding: 8px;
  `}
`

const ImageContainer = styled.div`
  position: relative;
  height: 300px;

  @media (max-width: ${MOBILE_BREAKPOINT}px) {
    height: 200px;
  }
`

const Highlight = styled.span`
  ${({ theme }) => css`
    ${theme.color.Focus}
    font-variant: small-caps;
  `}
`
