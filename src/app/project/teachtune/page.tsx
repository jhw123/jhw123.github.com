'use client'
import { IconLink } from '@/app/component/iconLink'
import { PERSON } from '@/data/person'
import { PUBLICATION } from '@/data/publication'
import { MOBILE_BREAKPOINT } from '@/ui'
import { Global, ThemeProvider, css } from '@emotion/react'
import styled from '@emotion/styled'
import {
  BodyText,
  DEFAULT_LIGHT_THEME,
  Divider,
  HeaderText,
  ResetStyle,
  SubHeaderText,
} from '@wookiejin/react-component'
import Image from 'next/image'
import { Banner } from '../../component/banner'
import { Profile } from '../../component/profile'

export default function Page() {
  return (
    <ThemeProvider theme={DEFAULT_LIGHT_THEME}>
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
        `}
      />
      <main>
        <Content>
          <h1>
            <HeaderText align="center" color="Focus" marginBottom={24}>
              <Image
                src="/images/teachtune/teacher.png"
                width={40}
                height={40}
                alt="tutee icon"
                style={{ marginTop: 8 }}
              />
              <Image
                src="/images/teachtune/chatbot.png"
                width={40}
                height={40}
                alt="tutor icon"
                style={{ marginRight: 8, marginTop: 8 }}
              />
              TeachTune: Reviewing Pedagogical Agents Against Diverse Student Profiles with Simulated Students
            </HeaderText>
          </h1>

          <h2>
            <Authors>
              <Profile person={PERSON.hyoungwook} />
              <Profile person={PERSON.minjuYoo} />
              <Profile person={PERSON.jeongeonPark} />
              <Profile person={PERSON.yokyungLee} />
              <Profile person={PERSON.xuWang} />
              <Profile person={PERSON.juho} />
            </Authors>
          </h2>

          <LinkButtons>
            {PUBLICATION.teachyou.links
              ?.filter(([label]) => label !== 'Website')
              .map(([label, href], i) => (
                <IconLink key={i} href={href} title={`TeachYou ${label}`} marginHorizontal={4} marginBottom={8}>
                  {label}
                </IconLink>
              ))}
          </LinkButtons>

          <Centered>
            <Banner marginTop={12}>
              🚀 If you want to try out TeachTune in your class, please contact jinhw@kaist.ac.kr! 🚀
            </Banner>
          </Centered>

          <Divider marginVertical={24} />

          <h2>
            <SubHeaderText color="Focus" marginBottom={8}>
              ABSTRACT
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
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  justify-items: center;
  gap: 16px;

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

const Centered = styled.div`
  text-align: center;
`
