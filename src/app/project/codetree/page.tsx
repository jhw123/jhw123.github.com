'use client'
import { BibTex } from '@/app/component/bibtex'
import { IconLink } from '@/app/component/iconLink'
import { Video } from '@/app/component/video'
import { PUBLICATION } from '@/data/publication'
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
} from '@wookiejin/react-component'
import Image from 'next/image'
import { Profile } from '../../component/profile'
import { Examples } from './component/examples'
import { ExternalLink } from '@/app/component/externalLink'

const BIBTEX = `@inproceedings{jin2024codetree,
  author = {Jin, Hyoungwook and Kim, Juho},
  title = {CodeTree: A System for Learnersourcing Subgoal Hierarchies in Code Examples},
  year = {2024},
  issue_date = {April 2024},
  publisher = {Association for Computing Machinery},
  address = {New York, NY, USA},
  volume = {8},
  number = {CSCW1},
  url = {https://doi.org/10.1145/3637308},
  doi = {10.1145/3637308},
  journal = {Proc. ACM Hum.-Comput. Interact.},
  month = apr,
  articleno = {31},
  numpages = {37},
  keywords = {artifact or system, crowdsourcing, education/learning, quantitative methods}
}`

const project = 'codeTree'

export default function Page() {
  return (
    <ThemeProvider
      theme={{
        ...DEFAULT_LIGHT_THEME,
        color: {
          ...DEFAULT_LIGHT_THEME.color,
          Focus: css`
            color: Orange;
          `,
        },
      }}
    >
      <Global styles={ResetStyle} />
      <Global
        styles={css`
          strong {
            font-weight: bold;
          }
        `}
      />
      <main>
        <Content>
          <h1>
            <HeaderText align="center" marginBottom={24}>
              {PUBLICATION[project].title}
            </HeaderText>
          </h1>

          <h2>
            <LinearLayout justifyContent="center" gap={32}>
              {PUBLICATION[project].authors.map((person, i) => (
                <Profile key={i} person={person} />
              ))}
            </LinearLayout>
          </h2>

          <LinkButtons>
            {PUBLICATION[project].links
              ?.filter(([label]) => label !== 'Website')
              .map(([label, href], i) => (
                <IconLink key={i} href={href} title={`CodeTree ${label}`} marginHorizontal={4} marginBottom={8}>
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
              Subgoal-labeled code examples help learners understand code patterns and apply them to different problem
              contexts. Subgoal labels are multi-level in nature and based on goal structures that define the
              hierarchical functional units in code. Data-driven methods and experts can supply the goal structures, but
              they do not work in environments with scarce data and limited availability of experts. Previous research
              has shown that learnersourcing is effective for sourcing high-quality subgoal labels of given goal
              structures. We extend this research by learnersourcing goal structures themselves, thereby making the
              generation of subgoal-labeled materials fully learner-driven. We introduce CodeTree, a system that
              generates multi-level goal structures by aggregating learner-generated subgoals from two subgoal learning
              activities---Generation and Selection. In a between-subjects study, 45 novices studied three code examples
              with either CodeTree or code explanations alone. The results showed that CodeTree could learnersource
              high-quality goal structures and subgoal labels for all three examples with just five learners. Learners
              reported a significantly higher learning gain and satisfaction compared to the baseline.
            </p>
          </BodyText>

          <Divider marginVertical={24} />

          <h2>
            <SubHeaderText color="Focus" marginBottom={8}>
              PAPER PRESENTATION
            </SubHeaderText>
          </h2>

          <Video src={'https://www.youtube-nocookie.com/embed/gC33c7zwIKQ'} />

          <Divider marginVertical={24} />

          <h2>
            <SubHeaderText color="Focus" marginBottom={8}>
              LEARNERSOURCING PIPELINE
            </SubHeaderText>
          </h2>

          <BodyText marginBottom={16}>
            CodeTree consists of two subgoal learning activities: Generation and Selection. In the{' '}
            <strong>Generation</strong> activity, learners self-explain subgoals of code examples by grouping code lines
            into functionally meaningful units and describing each unit. In the <strong>Selection</strong> activity,
            learners solve multiple choice questions (MCQs) that ask for selecting the best label for each subgoal.
            After populating enough subgoals from learners, CodeTree algorithmically aggregates the subgoals into
            comprehensive subgoal hierarchies. Learner-generated subgoals from the <strong>Generation</strong> activity
            are the seed for our algorithm to generate initial subgoal hierarchies. The generated hierarchies are fed to
            the <strong>Selection</strong> activity to use learners&apos; votes to verify and filter subgoal labels.
          </BodyText>

          <ImageContainer>
            <Image
              src={'/images/codetree/pipeline.png'}
              fill
              style={{
                objectFit: 'contain',
              }}
              alt="CodeTree's learnersourcing pipeline"
            />
          </ImageContainer>

          <Divider marginVertical={24} />

          <h2>
            <SubHeaderText color="Focus" marginBottom={8}>
              LEARNERSOURCED SUBGOAL HIERARCHIES
            </SubHeaderText>
          </h2>

          <BodyText marginBottom={16}>
            Through a user study with 45 Python learners, we collected subgoal hierarchies for the following three code
            examples. Hover over the colored bars to see the subgoal label and expert-assessed quality for each code
            group. Note that the subgoal labels are machine-translated from Korean to English.
          </BodyText>

          <Examples />

          <Divider marginVertical={24} />

          <h2>
            <SubHeaderText color="Focus" marginBottom={8}>
              BIBTEX
            </SubHeaderText>
          </h2>

          <BibTex text={BIBTEX} />

          <Divider marginVertical={24} />

          <LinearLayout justifyContent="center" gap={16}>
            <ExternalLink href="https://cs.kaist.ac.kr">
              <Image
                src="/images/kaist_logo.png"
                width={813 / 6}
                height={224 / 6}
                style={{ filter: 'drop-shadow(white 0 0 1px)' }}
                alt="KAIST logo"
              />
            </ExternalLink>
            <ExternalLink href="https://kixlab.org/">
              <Image
                src="/images/kixlab_logo.png"
                width={813 / 7}
                height={224 / 7}
                style={{ filter: 'drop-shadow(white 0 0 1px)' }}
                alt="KIXLAB logo"
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
  padding: 40px 24px;
  margin: 0 auto;
`

const LinkButtons = styled.div`
  justify-content: center;
  width: 100%;
  margin-top: 24px;
  text-align: center;
`

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: calc(min(800px, 100vw) * 0.4);
`
