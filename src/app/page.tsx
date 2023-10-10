'use client'
import { ContactIcon } from '@/component/contactIcon'
import { Divider } from '@/component/divider'
import { ListItem } from '@/component/listItem'
import { BodyText } from '@/component/text/body'
import { HeaderText } from '@/component/text/header'
import { SubHeaderText } from '@/component/text/subHeader'
import { SubSubHeaderText } from '@/component/text/subSubHeader'
import { Time } from '@/component/time'
import { contactData } from '@/data/contact'
import { educationData } from '@/data/education'
import { newsData } from '@/data/news'
import { publicationData } from '@/data/publication'
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import Image from 'next/image'

const MOBILE_BREAKPOINT = 768

export default function Home() {
  return (
    <Container>
      <Content>
        <Card>
          <ProfileImageContainer>
            <Image
              fill
              src={'/hyoungwook.jpg'}
              style={{
                objectFit: 'contain',
              }}
              alt="The profile image of Hyoungwook Jin."
              sizes={`(max-width: ${MOBILE_BREAKPOINT}px) 100vw, 33vw`}
              priority
            />
          </ProfileImageContainer>

          <div>
            <h1>
              <HeaderText>👋 Hyoungwook Jin</HeaderText>
            </h1>

            <BodyText marginBottom={8}>
              My research has been on supporting personalized learning environments at scale. I am looking into
              leveraging AI agents as tutors and tutees to build interactive learning systems personalized to each
              learner&apos;s prior knowledge level and learning styles. I am working on building a framework that
              provides reusable design patterns and pipelines for configuring AI agents&apos; behaviors and knowledge
              levels to effectively simulate different roles in learning (e.g., tutor and tutee).
            </BodyText>
            <BodyText marginBottom={8}>
              I also think of learning from a broader perspective as a gradual and unexpected shift in human
              capabilities by AI assistance over time (e.g., students struggling to write essays from scratch after
              receiving AI assistance). I am concerned about individuals&apos; autonomy in recognizing and controlling
              the change. In the future, I would like to connect my research to longitudinal human-AI interaction
              designs for desirable learning.
            </BodyText>

            <LinkSection>
              {contactData.map(({ type, link }) => {
                return (
                  <a key={type} href={link} target={'_blank'} rel="noreferrer">
                    <LinkButton>
                      <ContactIcon name={type} />
                    </LinkButton>
                  </a>
                )
              })}
              <Link href={'/files/hyoungwook_jin_cv.pdf'} target={'_blank'} rel="noreferrer">
                <LinkButton>CV</LinkButton>
              </Link>
            </LinkSection>
          </div>
        </Card>

        <Divider fill="Secondary" marginVertical={32} />

        <h2>
          <SubHeaderText marginBottom={8}>NEWS</SubHeaderText>
        </h2>
        {newsData.slice(0, 5).map(({ content, startDate }, i) => (
          <ListItem key={i} marginBottom={4}>
            <Time date={startDate} formatStr="dd LLL yyyy" /> - {content}
          </ListItem>
        ))}

        <Divider fill="Secondary" marginVertical={32} />

        <h2>
          <SubHeaderText marginBottom={8}>CONFERENCE PAPERS</SubHeaderText>
        </h2>
        {publicationData
          .filter(({ type, endDate }) => type === 'full paper' && endDate)
          .map(({ title, conference, paperLink, imagePath, authors }, i) => (
            <Card key={i}>
              <PublicationImageContainer>
                <Image
                  fill
                  src={imagePath}
                  style={{
                    objectFit: 'cover',
                  }}
                  alt={`The teaser image of ${title}`}
                  sizes={`(max-width: ${MOBILE_BREAKPOINT}px) 100vw, 33vw`}
                />
              </PublicationImageContainer>
              <div>
                <h3>
                  <SubSubHeaderText marginBottom={8}>{title}</SubSubHeaderText>
                </h3>
                <BodyText color="Secondary">
                  {authors.map((name, i) => {
                    return (
                      <Author key={i} isMe={name === 'Hyoungwook Jin'}>
                        {name}
                      </Author>
                    )
                  })}
                </BodyText>
                <ConferenceInfo>{conference}</ConferenceInfo>
                {paperLink && (
                  <a href={paperLink} target={'_blank'} rel="noreferrer">
                    Link to paper
                  </a>
                )}
              </div>
            </Card>
          ))}

        <h2>
          <SubHeaderText marginBottom={8}>POSTERS AND WORKSHOP PAPERS</SubHeaderText>
        </h2>
        {publicationData
          .filter(({ type }) => type !== 'full paper')
          .map(({ title, conference, paperLink, imagePath, authors, type }, i) => (
            <Card key={i}>
              <PublicationImageContainer>
                <Image
                  fill
                  src={imagePath}
                  style={{
                    objectFit: 'cover',
                  }}
                  alt={`The teaser image of ${title}`}
                  sizes={`(max-width: ${MOBILE_BREAKPOINT}px) 100vw, 33vw`}
                />
              </PublicationImageContainer>
              <BodyText>
                <h3>
                  <SubSubHeaderText marginBottom={8}>{title}</SubSubHeaderText>
                </h3>
                <BodyText color="Secondary">
                  {authors.map((name, i) => {
                    return (
                      <Author key={i} isMe={name === 'Hyoungwook Jin'}>
                        {name}
                      </Author>
                    )
                  })}
                </BodyText>
                <ConferenceInfo>
                  {conference} {type}
                </ConferenceInfo>
                <a href={paperLink} target={'_blank'} rel="noreferrer">
                  Link to paper
                </a>
              </BodyText>
            </Card>
          ))}

        <Divider fill="Secondary" marginVertical={32} />

        <h2>
          <SubHeaderText marginBottom={8}>EDUCATION</SubHeaderText>
        </h2>
        {educationData.map(({ school, abbreviation, degree, startDate, endDate, content, location }, i) => (
          <EducationCard key={i}>
            <div>
              <h3>
                <SubSubHeaderText marginBottom={8}>
                  {school} ({abbreviation})
                </SubSubHeaderText>
              </h3>
              <ListItem marginBottom={4}>{degree}</ListItem>
              <ListItem>{content}</ListItem>
            </div>
            <SideInfo>
              <Time date={startDate} formatStr="LLL yyyy" /> - <Time date={endDate} formatStr="LLL yyyy" />
              <br />
              {location}
            </SideInfo>
          </EducationCard>
        ))}
      </Content>
    </Container>
  )
}

const Container = styled.main`
  ${({ theme }) => css`
    ${theme.fill.Sheet}
    ${theme.color.Primary}
  `}
`

const Content = styled.div`
  max-width: 800px;
  padding: 40px 24px 64px 24px;
  margin: 0 auto;
`

const Card = styled.section`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr 1.5fr;
    @media (max-width: ${MOBILE_BREAKPOINT}px) {
      grid-template-columns: 1fr;
      ${theme.fill.Base};
      padding: 8px;
    }
    gap: 16px;
    margin-bottom: 24px;
    &:last-child {
      margin-bottom: 0;
    }
  `}
`

const ProfileImageContainer = styled.div`
  position: relative;
  min-height: 150px;
  overflow: hidden;
`

const PublicationImageContainer = styled.div`
  position: relative;
  min-height: 150px;
  overflow: hidden;
  border-radius: 4px;
  box-shadow: 0 0 8px 2px rgba(0, 0, 0, 0.1);
`

const Author = styled.span<{ isMe: boolean }>`
  ${({ isMe }) => css`
    font-weight: ${isMe ? 'bold' : 'normal'};
    font-style: italic;
    &:not(:last-child):after {
      content: ', ';
    }
  `}
`

const ConferenceInfo = styled.div`
  margin-top: 8px;
`

const EducationCard = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  justify-content: space-between;
  margin-bottom: 12px;
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
    width: 42px;
    height: 42px;
    border-radius: 12px;
    ${theme.border.Primary};
    border-radius: 8px;
    font-weight: bold;
    ${theme.font.Title}
  `}
`

const Link = styled.a`
  text-decoration: none;
`
