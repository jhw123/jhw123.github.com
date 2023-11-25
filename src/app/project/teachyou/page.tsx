'use client'
import { IconLink } from '@/app/component/iconLink'
import { PERSON } from '@/data/person'
import { Divider } from '@/design/component/divider'
import { BodyText } from '@/design/component/text/body'
import { HeaderText } from '@/design/component/text/header'
import { SubHeaderText } from '@/design/component/text/subHeader'
import { ResetStyle } from '@/design/foundation'
import { DEFAULT_THEME } from '@/design/theme'
import { Fill } from '@/design/theme/default/fill'
import { Global, ThemeProvider, css } from '@emotion/react'
import styled from '@emotion/styled'
import { Profile } from '../component/profile'
import { MOBILE_BREAKPOINT } from '@/design/ui'

export default function Page() {
  return (
    <ThemeProvider theme={DEFAULT_THEME}>
      <Global styles={ResetStyle} />
      <Global
        styles={css`
          body {
            ${Fill.Primary}
          }
        `}
      />
      <Container>
        <Content>
          <h1>
            <HeaderText align="center" marginBottom={24}>
              &quot;Teach AI How to Code&quot;: Using Large Language Models as Teachable Agents for Programming
              Education
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
            <IconLink href="https://arxiv.org/abs/2309.14534" title="TeachYou Paper">
              Paper
            </IconLink>
            <IconLink href="/demo/teachyou" title="TeachYou Interactive Demo">
              Demo
            </IconLink>
            <IconLink href="https://github.com/jhw123/TeachYou" title="TeachYou Github">
              Github
            </IconLink>
          </LinkButtons>

          <Divider marginVertical={24} />

          <h2>
            <SubHeaderText color="Focus" marginBottom={8}>
              The Best Way to Learn is To Teach Others.
            </SubHeaderText>
          </h2>
          <BodyText marginBottom={16}>
            <p>
              We propose TeachYou, an online platform for undergraduate students to learn programming by teaching a
              virtual AI tutee, AlgoBo. Students first write code to solve programming problems and then teach AlgoBo
              the problems as a reflection activity through a chat interface. AlgoBo writes incorrect or incomplete code
              initially and actively asks questions to students. Students can solidify and expand their knowledge by
              answering the questions and correcting AlgoBo&apos;s code.
            </p>
          </BodyText>
          <BodyText>
            <p>
              We use GPT-4, a large language model (LLM) to power AlgoBo. LLMs empower us to create sophisticated
              chatbots without writing thousands of lines of subject-specific programs, which has been the main
              bottleneck for building LBT systems across different subjects. However, we found that GPT-4, as is,
              elicits only rudimentary LBT because GPT-4 is so competent that it solves problems with little help,
              removing opportunities for students to explain. Moreover, GPT-4 rarely asks &quot;why&quot; or
              &quot;how&quot; questions that can effectively help students find their knowledge gaps. To facilitate
              effective LBT with AlgoBo, we added the following three technical components to TeachYou.
            </p>
          </BodyText>

          <Divider marginVertical={24} />

          <h2>
            <SubHeaderText color="Focus" marginBottom={16}>
              💡 Reflect-Respond pipeline to instruct AlgoBo to simulate prescribed misconceptions and knowledge levels
            </SubHeaderText>
          </h2>
          <BodyText>
            <p>
              We created an LLM prompting pipeline that makes AlgoBo&apos;s problem-solving performance customizable and
              improves it only when taught correctly and precisely, making AlgoBo feasible for LBT. The LLM pipeline
              stores the information AlgoBo has learned in a knowledge state and updates it as AlgoBo learns from
              students. To achieve different learning objectives, instructors can empty the knowledge state or populate
              incorrect information to simulate a learner who learns for the first time.
            </p>
          </BodyText>

          <Divider marginVertical={24} />

          <h2>
            <SubHeaderText color="Focus" marginBottom={16}>
              💡 Mode Shifting to make AlgoBo ask context-relevant questions to students
            </SubHeaderText>
          </h2>
          <BodyText>
            <p>
              We also introduce Mode-shifting, in which AlgoBo shifts into questioner mode periodically (e.g., every
              three messages) to enrich tutoring conversations with &quot;why&quot; and &quot;how &quot; questions.
              These thought-provoking questions encourage students to analyze the flow of programs, compare alternative
              implementations, and clarify their explanations. When students&apos; answers are vague or inconsistent,
              AlgoBo asks follow-ups for elaboration and examples until the student gives quality answers that resolve
              AlgoBo&apos;s misconceptions and curiosity. The frequency of questions is configurable, allowing students
              to adjust their cognitive load.
            </p>
          </BodyText>

          <Divider marginVertical={24} />

          <h2>
            <SubHeaderText color="Focus" marginBottom={16}>
              💡 Teaching Helper to encourage students to follow good teaching practices for effective LBT
            </SubHeaderText>
          </h2>
          <BodyText>
            <p>
              Lastly, TeachYou analyzes the tutoring conversation and gives students feedback on their teaching methods
              (e.g., suggesting students ask guiding questions to AlgoBo rather than spoon-feeding it). We use a
              fine-tuned GPT-3.5 to classify message types and teaching patterns in real-time. The feedback pops up
              inside the chat interface with pattern-specific tips for better teaching. Students can recognize and
              exercise the core strategies for good LBT, which they may adopt in future learning.
            </p>
          </BodyText>

          <Divider marginVertical={24} />

          <h2>
            <SubHeaderText color="Focus">Interactive Demo</SubHeaderText>
          </h2>

          <Divider marginVertical={24} />

          <h2>
            <SubHeaderText color="Focus">Evaluation</SubHeaderText>
          </h2>

          <Divider marginVertical={24} />

          <h2>
            <SubHeaderText color="Focus">Bibtex</SubHeaderText>
          </h2>
        </Content>
      </Container>
    </ThemeProvider>
  )
}

const Container = styled.main`
  ${({ theme }) => css`
    ${theme.color.Primary}
    ${theme.font.Body}
  `}
`

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
