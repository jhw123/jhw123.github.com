'use client'
import { IconLink } from '@/app/component/iconLink'
import { ChatBox } from '@/app/demo/teachyou/component/chatbox'
import { PERSON } from '@/data/person'
import { PUBLICATION } from '@/data/publication'
import { MOBILE_BREAKPOINT } from '@/ui'
import { Global, ThemeProvider, css } from '@emotion/react'
import styled from '@emotion/styled'
import {
  BodyText,
  DEFAULT_THEME,
  Divider,
  HeaderText,
  LinearLayout,
  OutlineButton,
  RadioInput,
  ResetStyle,
  SubHeaderText,
  SubSubHeaderText,
} from '@wookiejin/react-component'
import Image from 'next/image'
import Link from 'next/link'
import { Profile } from '../component/profile'
import { CONVERSATION1 } from './data/conversation1'
import { CONVERSATION2 } from './data/conversation2'
import { CONVERSATION3 } from './data/conversation3'
import { Video } from '@/app/component/video'
import { Banner } from '../component/banner'

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
              <Image src="/images/tutee.png" width={32} height={32} alt="tutee icon" />
              <Image src="/images/tutor.png" width={32} height={32} alt="tutor icon" style={{ marginRight: 8 }} />
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
                <IconLink key={i} href={href} title={`TeachYou ${label}`} marginHorizontal={4} marginBottom={8}>
                  {label}
                </IconLink>
              ))}
          </LinkButtons>

          <Centered>
            <Banner marginTop={12}>
              🚀 If you want to try out TeachYou in your class, please contact jinhw@kaist.ac.kr!
            </Banner>
          </Centered>

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
            <SubHeaderText color="Focus" marginBottom={8}>
              Paper Presentation
            </SubHeaderText>
          </h2>

          <Video src={'https://www.youtube-nocookie.com/embed/55ZynUaK_Bg?si=8DkFRptfcb7iSfP-'} />

          <Divider marginVertical={24} />

          <h2>
            <SubHeaderText color="Focus" marginBottom={16}>
              Key Components
            </SubHeaderText>
          </h2>

          <h3>
            <SubSubHeaderText marginBottom={8}>
              Reflect-Respond pipeline to simulate prescribed misconceptions
            </SubSubHeaderText>
          </h3>

          <BodyText color="Secondary" marginBottom={16}>
            <p>
              We created an LLM prompting pipeline that makes AlgoBo’&apos; problem-solving performance customizable and
              improves it only when taught correctly and precisely, making AlgoBo feasible for learning-by-teaching. The
              LLM pipeline stores the information AlgoBo has learned in a knowledge state and updates it as AlgoBo
              learns from students. To achieve different learning objectives, instructors can empty the knowledge state
              or populate incorrect information to simulate a learner who learns for the first time.
            </p>
          </BodyText>

          <SmallContent>
            <ChatBox chatLogs={CONVERSATION1} />
          </SmallContent>

          <h3>
            <SubSubHeaderText marginBottom={8} marginTop={28}>
              Mode Shifting to make AlgoBo ask follow-up questions to students
            </SubSubHeaderText>
          </h3>

          <BodyText color="Secondary" marginBottom={16}>
            <p>
              We also introduce mode-shifting, in which AlgoBo shifts into questioner mode periodically (e.g., every
              three messages) to enrich tutoring conversations with &quot;why&quot; and &quot;how&quot; questions. These
              thought-provoking questions encourage students to analyze the flow of programs, compare alternative
              implementations, and clarify their explanations. When students&apos; answers are vague or inconsistent,
              AlgoBo asks follow-ups for elaboration and examples until the student gives quality answers that resolve
              AlgoBo’s misconceptions and curiosity.
            </p>
          </BodyText>

          <SmallContent>
            <ChatBox chatLogs={CONVERSATION2} />
          </SmallContent>

          <h3>
            <SubSubHeaderText marginBottom={8} marginTop={28}>
              Teaching Helper to guide good teaching practices for effective LBT
            </SubSubHeaderText>
          </h3>

          <BodyText color="Secondary" marginBottom={16}>
            <p>
              TeachYou analyzes the tutoring conversation and gives students feedback on their teaching methods (e.g.,
              suggesting students ask guiding questions to AlgoBo rather than spoon-feeding it). We use a fine-tuned
              GPT-3.5 to classify message types and teaching patterns in real-time. The feedback pops up inside the chat
              interface with pattern-specific tips for better teaching.
            </p>
          </BodyText>

          <SmallContent>
            <ChatBox chatLogs={CONVERSATION3}>
              <TeachingHelper>
                <SubSubHeaderText marginBottom={8}>
                  Instead of ordering fixes, why not help AlgoBo grasp &quot;Why?&quot;
                </SubSubHeaderText>
                <RadioInput checked={false} fill="Primary" marginBottom={4}>
                  I&apos;ll explain &quot;why&quot; when I tell where to fix.
                </RadioInput>
                <RadioInput checked={false} fill="Primary" marginBottom={4}>
                  I&apos;ll ask why it&apos;s good to fix.
                </RadioInput>
                <RadioInput checked={false} fill="Primary" marginBottom={8}>
                  I have a better way.
                </RadioInput>
                <OutlineButton>Resume Conversation</OutlineButton>
              </TeachingHelper>
            </ChatBox>
          </SmallContent>

          <Divider marginVertical={24} />

          <h2>
            <SubHeaderText color="Focus" marginBottom={8}>
              Interactive Demo
            </SubHeaderText>
          </h2>

          <BodyText color="Secondary" marginBottom={16}>
            We provide a demo of the Reflect-Respond pipeline. Try to teach AlgoBo how to write a binary search
            algorithm. You will see how it learns from the conversation and the intermediate results for each step in
            the pipeline.
          </BodyText>

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

          <LinearLayout justifyContent="center" gap={16}>
            <Image
              src="/images/kaist_logo.png"
              width={813 / 6}
              height={224 / 6}
              style={{ filter: 'drop-shadow(white 0 0 1px)' }}
              alt="KAIST logo"
            />
            <Image
              src="/images/kixlab_logo.png"
              width={813 / 7}
              height={224 / 7}
              style={{ filter: 'drop-shadow(white 0 0 1px)' }}
              alt="KIXLAB logo"
            />
          </LinearLayout>
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

const SmallContent = styled.div`
  max-width: 600px;
  margin: 0 auto;
  margin-bottom: 16px;
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
  justify-content: center;
  width: 100%;
  margin-top: 24px;
  text-align: center;
`

const DemoImageContainer = styled.div`
  ${({ theme }) => css`
    position: relative;
    height: 320px;
    width: 510px;
    ${theme.elevation.L2}
    margin: 0 auto;
    text-align: center;
    color: white;

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

const TeachingHelper = styled.div`
  ${({ theme }) => css`
    ${theme.border.Danger}
    padding: 8px;
  `}
`

const Centered = styled.div`
  text-align: center;
`
