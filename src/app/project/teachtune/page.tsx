'use client'
import { IconLink } from '@/app/component/iconLink'
import { CONTACT } from '@/data/contact'
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
  LinearLayout,
  ResetStyle,
  SubHeaderText,
  SubSubHeaderText,
} from '@wookiejin/react-component'
import Image from 'next/image'
import { ReactFlowProvider } from 'reactflow'
import { Banner } from '../../component/banner'
import { ChatBotBuilder } from './component/chatBotBuilder'
import { Conversations } from './component/conversations'
import { Profile } from './component/profile'
import { Profiles } from './component/profiles'
import { CHATBOT } from './data/chatbot'

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
}

export default function Page() {
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
        `}
      />
      <main>
        <Content>
          <h1>
            <HeaderText align="center" color="Focus" marginBottom={24}>
              <Image
                src="/images/teachtune/teachtune.png"
                width={65}
                height={56}
                alt="tutee icon"
                style={{ marginRight: 8, verticalAlign: 'text-bottom' }}
              />
              {PUBLICATION.teachtune.title}
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
            {PUBLICATION.teachtune.links
              ?.filter(([label]) => label !== 'Website')
              .map(([label, href], i) => (
                <IconLink key={i} href={href} title={`TeachTune ${label}`} marginHorizontal={4} marginBottom={8}>
                  {label}
                </IconLink>
              ))}
          </LinkButtons>

          <Centered>
            <Banner marginTop={12}>🚀 If you want to try out TeachTune, please contact jinhw@kaist.ac.kr! 🚀</Banner>
          </Centered>

          <Divider marginVertical={24} />

          <h2>
            <SubHeaderText color="Focus" marginBottom={8}>
              ABSTRACT
            </SubHeaderText>
          </h2>

          <BodyText>
            <p>
              Large language models (LLMs) can empower teachers to build pedagogical conversational agents (PCAs)
              customized for their students. As students have different prior knowledge and motivation levels, teachers
              must review the adaptivity of their PCAs to diverse students. Existing chatbot reviewing methods (e.g.,
              direct chat and benchmarks) are either manually intensive for multiple iterations or limited to testing
              only single-turn interactions. We present TeachTune, where teachers can create simulated students and
              review PCAs by observing automated chats between PCAs and simulated students. Our technical pipeline
              instructs an LLM-based student to simulate prescribed knowledge levels and traits, helping teachers
              explore diverse conversation patterns. Our pipeline could produce simulated students whose behaviors
              correlate highly to their input knowledge and motivation levels within 5% and 10% accuracy gaps. Thirty
              science teachers designed PCAs in a between-subjects study, and using TeachTune resulted in a lower task
              load and higher student profile coverage over a baseline.
            </p>
          </BodyText>

          <Divider marginVertical={24} />

          <h2>
            <SubHeaderText color="Focus" marginBottom={16}>
              KEY INTERFACES
            </SubHeaderText>
          </h2>

          <h3>
            <SubSubHeaderText marginBottom={8}>Designing Pedagogical Agents</SubSubHeaderText>
          </h3>

          <BodyText marginBottom={16}>
            Teachers can build PCAs with a graph-like state machine representation. The state machine of a PCA starts
            with a root node that consists of the PCA&apos;s start message to students and the instruction it initially
            follows. The state changes to one of the connected nodes depending on students&apos; responses. When the
            state changes to a new node, PCA receives a new instruction described in the node and behave accordingly.
            The below is an example of a PCA created by a teacher in our user study.
          </BodyText>

          <Modal>
            <ReactFlowProvider>
              <ChatBotBuilder initialStateDiagram={CHATBOT} readonly />
            </ReactFlowProvider>
          </Modal>

          <h3>
            <SubSubHeaderText marginBottom={8}>Creating Student Profiles</SubSubHeaderText>
          </h3>

          <BodyText marginBottom={16}>
            Teachers should first define what types of students they review against. TeachTune helps teachers
            externalize and develop their evaluation space with templated student profiles. Our interface provides
            knowledge components and student trait inventories to help teachers recognize possible combinations and
            granularities of different knowledge levels and traits and organize them effectively. Below are the student
            profiles created by a teacher in our user study.
          </BodyText>

          <Profiles marginBottom={24} />

          <h3>
            <SubSubHeaderText marginBottom={8}>Reviewing Simulated Chats</SubSubHeaderText>
          </h3>

          <BodyText marginBottom={16}>
            TeachTune generates simulated chats between pedagogical agents and created student profiles. Simulated
            students acquire knowledge throughout the chats, actively ask questions, show indifference, or exhibit
            passive learning attitudes according to their traits. Teachers can use the chats to quickly review different
            PCA designs without manually typing messages. When teachers find corner cases that their PCA design did not
            cover, they can add a node that describes the case and appropriate instruction.
          </BodyText>

          <Conversations />

          <Divider marginVertical={24} />

          <h2>
            <SubHeaderText color="Focus" marginBottom={8}>
              🚀 EDUCATORS AND RESEARCHERS
            </SubHeaderText>
          </h2>

          <BodyText color="Secondary">
            Our team is looking for deployment partners. If you are an educator or researcher interested in using
            TeachTune in classes, please get in touch with <a href={CONTACT.email.link}>the authors</a>. We would like
            to conduct longitudinal studies to confirm the effectiveness of TeachTune in real-world settings and receive
            feedback from educators and researchers in the field. Since we can support the cost of running our software
            (e.g., OpenAI API, server), do not hesitate to contact us and share your circumstances and needs!
          </BodyText>

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

const Centered = styled.div`
  text-align: center;
`

const Modal = styled.div`
  ${({ theme }) => css`
    ${theme.elevation.L1}
    overflow: scroll;
    max-height: 60vh;
    height: 800px;
    width: 100%;
    max-width: 680px;
    border-radius: 8px;
    margin: 0 auto 24px auto;
  `}
`
