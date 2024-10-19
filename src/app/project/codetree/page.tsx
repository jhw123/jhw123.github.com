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
              BIBTEX
            </SubHeaderText>
          </h2>

          <BibTex text={BIBTEX} />

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

const Authors = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  gap: 16px;
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
