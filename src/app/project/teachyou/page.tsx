'use client'
import { IconLink } from '@/app/component/iconLink'
import { PERSON } from '@/data/person'
import { MOBILE_BREAKPOINT } from '@/ui'
import { Global, ThemeProvider, css } from '@emotion/react'
import styled from '@emotion/styled'
import { Profile } from '../component/profile'
import { Reconfigurability } from '../component/reconfigurability'
import Image from 'next/image'
import Link from 'next/link'
import { ListItem } from '@/app/component/listItem'
import { PUBLICATION } from '@/data/publication'
import {
  BodyText,
  DEFAULT_THEME,
  Divider,
  HeaderText,
  ResetStyle,
  SubHeaderText,
  SubSubHeaderText,
} from '@wookiejin/react-component'

export default function Page() {
  return (
    <ThemeProvider theme={DEFAULT_THEME}>
      <Global styles={ResetStyle} />
      <Global
        styles={css`
          body {
            color: #333333;
            background-color: #ffffff;
            @media (prefers-color-scheme: dark) {
              color: #e6e6e6;
              background-color: #333333;
            }
          }
        `}
      />
      <main>
        <Content>
          <h1>
            <HeaderText align="center" marginBottom={24}>
              Teach AI How to Code: Using Large Language Models as Teachable Agents for Programming Education
            </HeaderText>
          </h1>

          <h2>
            <Authors>
              <Profile person={PERSON.hyoungwook} />
              <Profile person={PERSON.seonghee} />
              <Profile person={PERSON.hyungyu} />
              <Profile person={PERSON.juho} />
            </Authors>
          </h2>

          <LinkButtons>
            {PUBLICATION.teachyou.links
              ?.filter(([label]) => label !== 'Website')
              .map(([label, href], i) => (
                <IconLink key={i} href={href} title={`TeachYou ${label}`}>
                  {label}
                </IconLink>
              ))}
          </LinkButtons>

          <Divider marginVertical={24} />

          <h2>
            <SubHeaderText color="Focus" marginBottom={8}>
              Abstract
            </SubHeaderText>
          </h2>
          <BodyText>
            <p>
              This work investigates large language models (LLMs) as teachable agents for learning by teaching (LBT).
              LBT with teachable agents helps learners identify knowledge gaps and discover new knowledge. However,
              teachable agents require expensive programming of subject-specific knowledge. While LLMs as teachable
              agents can reduce the cost, LLMs&apos; expansive knowledge as tutees discourages learners from teaching.
              We propose a prompting pipeline that restrains LLMs&apos; knowledge and makes them initiate
              &quot;why&quot; and &quot;how&quot; questions for effective knowledge-building. We combined these
              techniques into TeachYou, an LBT environment for algorithm learning, and AlgoBo, an LLM-based tutee
              chatbot that can simulate misconceptions and unawareness prescribed in its knowledge state. Our technical
              evaluation confirmed that our prompting pipeline can effectively configure AlgoBo&apos;s problem-solving
              performance. Through a between-subject study with 40 algorithm novices, we also observed that
              AlgoBo&apos;s questions led to knowledge-dense conversations (effect size=0.71). Lastly, we discuss design
              implications, cost-efficiency, and personalization of LLM-based teachable agents.
            </p>
          </BodyText>

          <Divider marginVertical={24} />

          <h2>
            <SubHeaderText color="Focus" marginBottom={16}>
              Technical Components
            </SubHeaderText>
          </h2>

          <ListItem marginBottom={8}>
            Reflect-Respond pipeline to instruct AlgoBo to simulate prescribed misconceptions and knowledge levels
          </ListItem>
          <ListItem marginBottom={8}>Mode Shifting to make AlgoBo ask context-relevant questions to students</ListItem>
          <ListItem>Teaching Helper to encourage students to follow good teaching practices for effective LBT</ListItem>

          <Divider marginVertical={24} />

          <h2>
            <SubHeaderText color="Focus" marginBottom={16}>
              Interactive Demo
            </SubHeaderText>
          </h2>

          <Centered>
            <Link href={'/demo/teachyou'} style={{ display: 'inline-block' }}>
              <DemoImageContainer>
                <Image
                  fill
                  src={'/images/teachyou/demo.png'}
                  style={{
                    objectFit: 'cover',
                    filter: 'brightness(0.5)',
                  }}
                  alt={`The demo image of TeachYou`}
                />
              </DemoImageContainer>
            </Link>
          </Centered>

          <Divider marginVertical={24} />

          <h2>
            <SubHeaderText color="Focus" marginBottom={16}>
              Key Findings
            </SubHeaderText>
          </h2>

          <h3>
            <SubSubHeaderText marginBottom={16}>
              The Reflect-Respond pipeline can effectively configure the knowledge level of AlgoBo.
            </SubSubHeaderText>
          </h3>

          <Reconfigurability />

          <h3>
            <SubSubHeaderText>
              The Reflect-Respond makes AlgoBo produce responses persistent to knowledge states.
            </SubSubHeaderText>
          </h3>
        </Content>
      </main>
    </ThemeProvider>
  )
}

const Content = styled.div`
  max-width: 800px;
  padding: 40px 24px;
  margin: 0 auto;
`

const Authors = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  justify-items: center;
  gap: 16px;

  @media (max-width: ${MOBILE_BREAKPOINT}px) {
    grid-template-columns: 1fr 1fr;
  }
`

const LinkButtons = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 16px;
  margin-top: 24px;
`

const DemoImageContainer = styled.div`
  ${({ theme }) => css`
    position: relative;
    height: 320px;
    width: 510px;
    ${theme.elevation.L2}
    margin: 0 auto;
    text-align: center;

    &:hover {
      cursor: pointer;
      filter: brightness(0.8);
    }

    &:after {
      content: 'Click to chat with AlgoBo!';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    @media (max-width: ${MOBILE_BREAKPOINT}px) {
      width: calc(100vw - 48px);
      height: 62vw;
    }
  `}
`

const Centered = styled.div`
  text-align: center;
`
