'use client'
import { ExternalLink } from '@/app/component/externalLink'
import { ListItem } from '@/app/component/listItem'
import { SvgIcon } from '@/app/component/svgIcon'
import { CONTACTS } from '@/data/contact'
import { EDUCATIONS } from '@/data/education'
import { POSTS } from '@/data/news'
import { PROJECTS } from '@/data/project'
import { PUBLICATIONS } from '@/data/publication'
import { MOBILE_BREAKPOINT } from '@/ui'
import { THEME } from '@/utils/theme'
import { Global, ThemeProvider, css, keyframes } from '@emotion/react'
import styled from '@emotion/styled'
import {
  BodyText,
  Divider,
  HeaderText,
  LinearLayout,
  ResetStyle,
  Sheet,
  SubHeaderText,
  SubSubHeaderText,
  TextButton,
} from '@wookiejin/react-component'
import Image from 'next/image'
import { Fragment, useState } from 'react'
import Markdown from 'react-markdown'
import { Link } from './component/link'
import { Time } from './component/time'

const NEWS_LENGTH = 5

export default function Page() {
  const [newsLength, setNewsLength] = useState(NEWS_LENGTH)

  return (
    <ThemeProvider theme={THEME}>
      <Global styles={ResetStyle} />
      <Global
        styles={css`
          body {
            ${THEME.fill.Primary}
          }

          strong {
            font-weight: bold;
          }
        `}
      />
      <main>
        <Content>
          <Card>
            <ProfileImageContainer>
              <Image
                fill
                src={'/hyoungwook.png'}
                style={{
                  objectFit: 'cover',
                  transform: 'scale(1.4) translate(-10%, 14%)',
                }}
                alt="The profile image of Hyoungwook Jin."
                sizes={`(max-width: ${MOBILE_BREAKPOINT}px) 100vw, 33vw`}
                priority
              />
            </ProfileImageContainer>

            <Introduction>
              <h1>
                <HeaderText color="Focus">
                  <WavingHand>Hyoungwook Jin</WavingHand>
                </HeaderText>
              </h1>

              <BodyText marginBottom={8}>
                I am an MS candidate in the{' '}
                <ExternalLink href="https://cs.kaist.ac.kr/">School of Computing</ExternalLink> at KAIST. I am working
                with <ExternalLink href="https://juhokim.com">Juho Kim</ExternalLink> and researchers at{' '}
                <ExternalLink href="https://www.kixlab.org/">KIXLAB</ExternalLink>.
              </BodyText>
              <BodyText marginBottom={8}>
                I envision{' '}
                <ExternalLink href="https://docs.google.com/presentation/d/1ceeAvr6LtJf5zyLr69K3CoH3PYKuXd0wWbwgVQWBXgw/edit?usp=sharing">
                  End-learner Programming
                </ExternalLink>{' '}
                in which learners and instructors can customize existing or even create new learning content, paths, and
                tools beyond given resources and classes for their personal needs. I research human-AI interaction,
                computer-supported cooperative work, and learning at scale to realize my vision.
              </BodyText>

              <LinkSection>
                {CONTACTS.map(({ type, link }) => {
                  return (
                    <ExternalLink key={type} href={link}>
                      <LinkButton>
                        <SvgIcon name={type} />
                      </LinkButton>
                    </ExternalLink>
                  )
                })}
              </LinkSection>

              <Sheet fill="Secondary" padding={8} marginTop={16}>
                📣 I will start my Ph.D. at the University of Michigan{' '}
                <ExternalLink href="https://cse.engin.umich.edu">CSE</ExternalLink> in Fall 2025! I will work with{' '}
                <ExternalLink href="https://web.eecs.umich.edu/~xwanghci/">Xu Wang</ExternalLink>, and I am looking for
                more collaborators! Feel free to reach out if you are interested in working with me!
              </Sheet>
            </Introduction>
          </Card>

          <Divider fill="Secondary" marginVertical={32} />

          <h2>
            <SubHeaderText marginBottom={16}>NEWS</SubHeaderText>
          </h2>
          <NewsRow>
            {POSTS.slice(0, newsLength).map(({ content, startDate }, i) => (
              <Fragment key={i}>
                <Time date={startDate} formatStr="LLL, yyyy" />
                <Markdown>{content}</Markdown>
              </Fragment>
            ))}
          </NewsRow>
          {newsLength < POSTS.length && (
            <TextButton onClick={() => setNewsLength(l => Math.min(l + NEWS_LENGTH, POSTS.length))}>
              Show more
            </TextButton>
          )}

          <Divider fill="Secondary" marginVertical={32} />

          {0 < PROJECTS.length && (
            <>
              <h2>
                <SubHeaderText marginBottom={16}>ONGOING PROJECT{PROJECTS.length > 1 && 'S'}</SubHeaderText>
              </h2>

              {PROJECTS.map(({ title, imagePath, description, links }, i) => (
                <Card key={i}>
                  <PublicationImageContainer>
                    <Image
                      fill
                      src={imagePath}
                      style={{
                        objectFit: 'contain',
                      }}
                      alt={`The teaser image of ${title}`}
                      sizes={`(max-width: ${MOBILE_BREAKPOINT}px) 100vw, 33vw`}
                    />
                  </PublicationImageContainer>
                  <div>
                    <h3>
                      <SubSubHeaderText color="Focus" marginBottom={8}>
                        {title}
                      </SubSubHeaderText>
                    </h3>
                    <BodyText color="Secondary" marginBottom={8}>
                      {description}
                    </BodyText>
                    {0 < links?.length &&
                      links.map(([tag, link], i) => (
                        <Link key={i} href={link} title={`the ${tag} of ${title}`} marginRight={8} marginBottom={8}>
                          {tag}
                        </Link>
                      ))}
                  </div>
                </Card>
              ))}

              <Divider fill="Secondary" marginVertical={32} />
            </>
          )}

          <h2>
            <SubHeaderText marginBottom={16}>CONFERENCE PAPERS</SubHeaderText>
          </h2>
          {PUBLICATIONS.filter(({ type, endDate }) => type === 'full paper' && endDate).map(
            ({ title, conference, links, imagePath, authors, awards }, i) => (
              <Card key={i}>
                <PublicationImageContainer>
                  <Image
                    fill
                    src={imagePath}
                    style={{
                      objectFit: 'contain',
                    }}
                    alt={`The teaser image of ${title}`}
                    sizes={`(max-width: ${MOBILE_BREAKPOINT}px) 100vw, 33vw`}
                  />
                </PublicationImageContainer>
                <div>
                  <h3>
                    <SubSubHeaderText color="Focus" marginBottom={8}>
                      {title}
                    </SubSubHeaderText>
                  </h3>
                  <BodyText color="Secondary" marginBottom={8}>
                    {authors.map(({ name }, i) => {
                      return (
                        <Author key={i} isMe={name === 'Hyoungwook Jin'}>
                          {name}
                        </Author>
                      )
                    })}
                  </BodyText>
                  <LinearLayout justifyContent="flex-start" gap={8} marginBottom={8}>
                    <BodyText>{conference}</BodyText>
                    {awards?.map((award, i) => (
                      <Award key={i}>
                        <Image src={'/icons/medal.png'} width={16} height={16} alt={award} /> {award}
                      </Award>
                    ))}
                  </LinearLayout>
                  {links?.length &&
                    links.map(([tag, link], i) => (
                      <Link key={i} href={link} title={`the ${tag} of ${title}`} marginRight={8} marginBottom={8}>
                        {tag}
                      </Link>
                    ))}
                </div>
              </Card>
            )
          )}

          <h2>
            <SubHeaderText marginBottom={16}>POSTERS AND WORKSHOP PAPERS</SubHeaderText>
          </h2>
          {PUBLICATIONS.filter(({ type, endDate }) => (type === 'workshop' || type === 'poster') && endDate).map(
            ({ title, conference, links, imagePath, authors, type }, i) => (
              <Card key={i}>
                <PublicationImageContainer>
                  <Image
                    fill
                    src={imagePath}
                    style={{
                      objectFit: 'contain',
                    }}
                    alt={`The teaser image of ${title}`}
                    sizes={`(max-width: ${MOBILE_BREAKPOINT}px) 100vw, 33vw`}
                  />
                </PublicationImageContainer>
                <BodyText>
                  <h3>
                    <SubSubHeaderText color="Focus" marginBottom={8}>
                      {title}
                    </SubSubHeaderText>
                  </h3>
                  <BodyText color="Secondary" marginBottom={8}>
                    {authors.map(({ name }, i) => {
                      return (
                        <Author key={i} isMe={name === 'Hyoungwook Jin'}>
                          {name}
                        </Author>
                      )
                    })}
                  </BodyText>
                  <BodyText marginBottom={8}>{conference}</BodyText>
                  {links?.length &&
                    links.map(([tag, link], i) => (
                      <Link key={i} href={link} title={`the ${tag} of ${title}`} marginRight={8}>
                        {tag}
                      </Link>
                    ))}
                </BodyText>
              </Card>
            )
          )}

          <h2>
            <SubHeaderText marginBottom={16}>HOSTED WORKSHOP</SubHeaderText>
          </h2>
          {PUBLICATIONS.filter(({ type, endDate }) => type === 'host' && endDate).map(
            ({ title, conference, links, imagePath, authors, type }, i) => (
              <Card key={i}>
                <PublicationImageContainer>
                  <Image
                    fill
                    src={imagePath}
                    style={{
                      objectFit: 'contain',
                    }}
                    alt={`The teaser image of ${title}`}
                    sizes={`(max-width: ${MOBILE_BREAKPOINT}px) 100vw, 33vw`}
                  />
                </PublicationImageContainer>
                <BodyText>
                  <h3>
                    <SubSubHeaderText color="Focus" marginBottom={8}>
                      {title}
                    </SubSubHeaderText>
                  </h3>
                  <BodyText color="Secondary" marginBottom={8}>
                    {authors.map(({ name }, i) => {
                      return (
                        <Author key={i} isMe={name === 'Hyoungwook Jin'}>
                          {name}
                        </Author>
                      )
                    })}
                  </BodyText>
                  <BodyText marginBottom={8}>{conference}</BodyText>
                  {links?.length &&
                    links.map(([tag, link], i) => (
                      <Link key={i} href={link} title={`the ${tag} of ${title}`} marginRight={8}>
                        {tag}
                      </Link>
                    ))}
                </BodyText>
              </Card>
            )
          )}

          <Divider fill="Secondary" marginVertical={32} />

          <h2>
            <SubHeaderText marginBottom={16}>EDUCATION</SubHeaderText>
          </h2>
          {EDUCATIONS.map(({ school, abbreviation, degree, startDate, endDate, content, location }, i) => (
            <EducationCard key={i}>
              <div>
                <h3>
                  <SubSubHeaderText marginBottom={8}>
                    {school} {abbreviation && `(${abbreviation})`}
                  </SubSubHeaderText>
                </h3>
                <BodyText color="Secondary">
                  <ListItem marginBottom={4}>{degree}</ListItem>
                  <ListItem>{content}</ListItem>
                </BodyText>
              </div>
              <SideInfo>
                <Time date={startDate} formatStr="LLL yyyy" /> - <Time date={endDate} formatStr="LLL yyyy" />
                <br />
                {location}
              </SideInfo>
            </EducationCard>
          ))}
        </Content>
      </main>
    </ThemeProvider>
  )
}

const Content = styled.main`
  ${({ theme }) => css`
    ${theme.color.Primary}
    ${theme.font.Body}
    max-width: 800px;
    padding: 40px 24px;
    margin: 0 auto;
  `}
`

const Card = styled.section`
  display: grid;
  grid-template-columns: 1fr 1.4fr;
  @media (max-width: ${MOBILE_BREAKPOINT}px) {
    grid-template-columns: 1fr;
  }
  gap: 32px;
  margin-bottom: 32px;
  &:last-child {
    margin-bottom: 0;
  }
`

const ProfileImageContainer = styled.div`
  ${({ theme }) => css`
    position: relative;
    overflow: hidden;
    height: calc(800px / 2.5);
    overflow: hidden;
    border-radius: 4px;
    ${theme.elevation.L2}

    @media (max-width: ${MOBILE_BREAKPOINT}px) {
      width: 224px;
      height: 224px;
      margin: auto;
    }
  `}
`

const Introduction = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const PublicationImageContainer = styled.div`
  ${({ theme }) => css`
    position: relative;
    height: 150px;
    overflow: hidden;
    border-radius: 4px;
    ${theme.elevation.L2}
    background-color: white;
  `}
`

const Author = styled.span<{ isMe: boolean }>`
  ${({ isMe }) => css`
    font-weight: ${isMe ? '600' : '200'};
    font-style: italic;
    &:not(:last-child):after {
      content: ', ';
    }
  `}
`

const EducationCard = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  justify-content: space-between;
  margin-bottom: 32px;
  @media (max-width: ${MOBILE_BREAKPOINT}px) {
    grid-template-columns: 1fr;
    gap: 8px;
  }
`

const SideInfo = styled.div`
  text-align: right;
`

const LinkSection = styled.div`
  display: flex;
  gap: 8px;
`

const LinkButton = styled.div`
  ${({ theme }) => css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 12px;
    box-sizing: border-box;
    ${theme.border.Secondary};
    border-radius: 8px;
    font-weight: bold;
    ${theme.font.SubTitle}
  `}
`

const NewsRow = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  column-gap: 8px;
  row-gap: 4px;
`

const Award = styled.span`
  ${({ theme }) => css`
    ${theme.color.Warning}
    ${theme.border.Warning}
    ${theme.font.Caption}
    padding: 4px;
    border-radius: 50px;
    display: inline-flex;
    align-items: center;
    text-transform: uppercase;
    gap: 4px;
  `}
`

const Waving = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(15deg);
  }
`

const WavingHand = styled.span`
  display: inline-flex;

  ::before {
    content: '👋';
    margin-right: 0.5rem;
  }

  ::before {
    animation: ${Waving} 0.2s infinite ease-in-out alternate;
  }
`
