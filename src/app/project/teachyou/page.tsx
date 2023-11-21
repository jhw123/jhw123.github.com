'use client'
import { ExternalLink } from '@/app/component/externalLink'
import { Divider } from '@/design/component/divider'
import { HeaderText } from '@/design/component/text/header'
import { SubHeaderText } from '@/design/component/text/subHeader'
import { ResetStyle } from '@/design/foundation'
import { DEFAULT_THEME } from '@/design/theme'
import { Fill } from '@/design/theme/default/fill'
import { Global, ThemeProvider, css } from '@emotion/react'
import styled from '@emotion/styled'
import Image from 'next/image'
import { Profile } from '../component/profile'
import { PaperLink } from '@/app/component/paperLink'

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
              <Profile name={'Hyoungwook Jin'} imagePath={'/hyoungwook.jpg'} />
              <Profile name={'Seonghee Lee'} imagePath={'/people/seonghee.png'} />
              <Profile name={'Hyungyu Shin'} imagePath={'/people/hyungyu.jpg'} />
              <Profile name={'Juho Kim'} imagePath={'/people/juho.jpg'} />
            </Authors>
          </h2>

          <LinkButtons>
            <PaperLink href="https://arxiv.org/abs/2309.14534" title="TeachYou Paper">
              Paper
            </PaperLink>
            <PaperLink href="/demo/teachyou" title="TeachYou Interactive Demo">
              Interactive Demo
            </PaperLink>
          </LinkButtons>

          <Divider marginVertical={24} />

          <h2>
            <SubHeaderText>The Best Way to Learn is To Teach Others.</SubHeaderText>
          </h2>

          <Divider marginVertical={24} />

          <h2>
            <SubHeaderText>💡 Reflection-Respond Pipeline</SubHeaderText>
          </h2>

          <Divider marginVertical={24} />

          <h2>
            <SubHeaderText>💡 Mode Shifting</SubHeaderText>
          </h2>

          <Divider marginVertical={24} />

          <h2>
            <SubHeaderText>💡 Teaching Helper</SubHeaderText>
          </h2>

          <Divider marginVertical={24} />

          <h2>
            <SubHeaderText>Evaluation</SubHeaderText>
          </h2>

          <Divider marginVertical={24} />

          <h2>
            <SubHeaderText>Interactive Demo</SubHeaderText>
          </h2>

          <Divider marginVertical={24} />

          <h2>
            <SubHeaderText>Bibtex</SubHeaderText>
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
  display: flex;
  justify-content: space-around;
`

const LinkButtons = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 16px;
  margin-top: 24px;
`
