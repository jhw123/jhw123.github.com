'use client'
import { ExternalLink } from '@/app/component/externalLink'
import { SvgIcon } from '@/app/component/svgIcon'
import { CONTACTS } from '@/data/contact'
import { POSTS } from '@/data/news'
import { PROJECTS } from '@/data/project'
import { PUBLICATIONS } from '@/data/publication'
import { MOBILE_BREAKPOINT } from '@/ui'
import { Global, css } from '@emotion/react'
import styled from '@emotion/styled'
import { ResetStyle } from '@wookiejin/react-component'
import Image from 'next/image'
import { Fragment, useState } from 'react'
import Markdown from 'react-markdown'
import { Link } from './component/link'
import { Time } from './component/time'

const NEWS_LENGTH = 5
const CONTACT_LABELS: Record<string, string> = {
  EMAIL: 'Email Hyoungwook Jin',
  GOOGLE_SCHOLAR: 'Google Scholar profile',
  TWITTER: 'X profile',
  LINKEDIN: 'LinkedIn profile',
  LEETCODE: 'LeetCode profile',
  CV: 'Curriculum vitae',
}

export default function Page() {
  const [newsLength, setNewsLength] = useState(NEWS_LENGTH)

  return (
    <>
      <Global styles={ResetStyle} />
      <Global
        styles={css`
          body {
            @media (prefers-color-scheme: dark) {
              background-color: #222;
            }
          }
        `}
      />
      <Content>
        <Sidebar>
          <SidebarProfile>
            <ProfileImageContainer>
              <Image
                fill
                src={'/hyoungwook.jpeg'}
                style={{
                  objectFit: 'cover',
                }}
                alt="The profile image of Hyoungwook Jin."
                sizes={`(max-width: ${MOBILE_BREAKPOINT}px) 100vw, 33vw`}
                priority
              />
            </ProfileImageContainer>

            <Introduction>
              <h1>
                <PageTitle>Hyoungwook Jin</PageTitle>
              </h1>

              <Body $marginBottom={8}>
                I am a PhD student at 🇺🇸 University of Michigan,{' '}
                <ExternalLink href="https://cse.engin.umich.edu">Computer Science and Engineering</ExternalLink>. I am
                working with <ExternalLink href="https://web.eecs.umich.edu/~xwanghci/">Xu Wang</ExternalLink> and
                researchers at{' '}
                <ExternalLink href="https://web.eecs.umich.edu/~xwanghci/lab.html">Lifelong Learning Lab</ExternalLink>.
              </Body>

              <Body $marginBottom={8}>
                I envision{' '}
                <ExternalLink href="https://docs.google.com/presentation/d/1ceeAvr6LtJf5zyLr69K3CoH3PYKuXd0wWbwgVQWBXgw/edit?usp=sharing">
                  End-learner Programming
                </ExternalLink>{' '}
                in which learners and instructors can customize existing or even create new learning content, paths, and
                tools beyond given resources and classes for their personal needs. I research human-AI interaction,
                computer-supported cooperative work, and learning at scale to realize my vision.
              </Body>

              <Body $marginBottom={8}>
                Formerly, I did my master&apos;s and bachelor&apos;s at 🇰🇷 KAIST. I was fortunate to work with{' '}
                <ExternalLink href="https://juhokim.com">Juho Kim</ExternalLink> and researchers at{' '}
                <ExternalLink href="https://www.kixlab.org/">KIXLAB</ExternalLink>.
              </Body>

              <LinkSection aria-label="Contact links">
                {CONTACTS.map(({ type, link }) => {
                  return (
                    <ExternalLink
                      key={type}
                      href={link}
                      opensInNewTab={type !== 'EMAIL'}
                      aria-label={
                        type === 'EMAIL' ? CONTACT_LABELS[type] : `${CONTACT_LABELS[type]} (opens in a new tab)`
                      }
                    >
                      <LinkButton>
                        <SvgIcon name={type} />
                      </LinkButton>
                    </ExternalLink>
                  )
                })}
              </LinkSection>
            </Introduction>
          </SidebarProfile>

          <SectionDivider />

          <h2>
            <SectionTitle $marginBottom={16}>NEWS</SectionTitle>
          </h2>
          <NewsRow id="news-list" aria-live="polite" aria-atomic="false">
            {POSTS.slice(0, newsLength).map(({ content, startDate }, i) => (
              <Fragment key={i}>
                <Time date={startDate} formatStr="LLL, yyyy" />
                <Markdown>{content}</Markdown>
              </Fragment>
            ))}
          </NewsRow>
          {newsLength < POSTS.length && (
            <ShowMoreButton
              onClick={() => setNewsLength(l => Math.min(l + NEWS_LENGTH, POSTS.length))}
              aria-controls="news-list"
              aria-label="Show five more news items"
            >
              Show more
            </ShowMoreButton>
          )}
        </Sidebar>

        <PosterContent>
          <h2>
            <SectionTitle $marginTop={16} $marginBottom={16}>
              PUBLICATION
            </SectionTitle>
          </h2>
          <PosterGrid>
            {PUBLICATIONS.filter(({ type, endDate }) => type === 'full paper' && endDate).map(
              ({ title, conference, links, imagePath, authors, awards }, i) => (
                <Poster key={i} aria-label={`${title} publication details`}>
                  <PosterFront data-poster-face="front">
                    <Image
                      fill
                      src={imagePath ?? ''}
                      style={{ objectFit: 'cover' }}
                      alt={`The poster image of ${title}`}
                      sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
                    />
                    {awards?.map((award, i) => (
                      <PosterAward key={i}>{award}</PosterAward>
                    ))}
                  </PosterFront>
                  <PosterOverlay data-poster-face="back">
                    <h3>
                      <PublicationTitle>{title}</PublicationTitle>
                    </h3>
                    <PublicationMeta>
                      <span>{conference}</span>
                      {awards?.map((award, i) => (
                        <span key={i}>{award}</span>
                      ))}
                    </PublicationMeta>
                    <PosterDescription>
                      {authors.map(({ name }, i) => (
                        <Author key={i} isMe={name === 'Hyoungwook Jin'}>
                          {name}
                        </Author>
                      ))}
                    </PosterDescription>
                    {links?.length &&
                      links.map(([tag, link], i) => (
                        <Link key={i} href={link} title={`the ${tag} of ${title}`} marginRight={8} marginBottom={8}>
                          {tag}
                        </Link>
                      ))}
                  </PosterOverlay>
                </Poster>
              )
            )}
          </PosterGrid>

          {0 < PROJECTS.length && (
            <>
              <h2>
                <SectionTitle $marginTop={16} $marginBottom={16}>
                  COMING SOON
                </SectionTitle>
              </h2>

              <PosterGrid>
                {PROJECTS.map(({ title, imagePath, description, links }, i) => (
                  <Poster key={i} aria-label={`${title} project details`}>
                    <PosterFront data-poster-face="front">
                      <Image
                        fill
                        src={imagePath}
                        style={{ objectFit: 'cover' }}
                        alt={`The poster image of ${title}`}
                        sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
                      />
                    </PosterFront>
                    <PosterOverlay data-poster-face="back">
                      <PosterDescription>{description}</PosterDescription>
                      {0 < links?.length &&
                        links.map(([tag, link], i) => (
                          <Link key={i} href={link} title={`the ${tag} of ${title}`} marginRight={8} marginBottom={8}>
                            {tag}
                          </Link>
                        ))}
                    </PosterOverlay>
                  </Poster>
                ))}
              </PosterGrid>
            </>
          )}
        </PosterContent>
      </Content>
    </>
  )
}

const Content = styled.main`
  color: #222222;
  font-size: 1rem;
  font-weight: 200;
  line-height: 1.4;
  display: grid;
  grid-template-columns: 420px minmax(0, 1fr);
  max-width: 1440px;
  min-height: 100vh;
  margin: auto;

  @media (prefers-color-scheme: dark) {
    color: #ffffff;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`

const PageTitle = styled.span`
  display: block;
  color: #f1c76f;
  text-align: center;
  font-family: var(--font-cinema), Impact, sans-serif;
  font-size: 2rem;
  font-weight: 400;
  line-height: 1.6;
  letter-spacing: 0.05em;
  white-space: pre-wrap;
`

const Body = styled.p<{ $marginBottom?: number }>`
  margin: 0 0 ${({ $marginBottom = 0 }) => $marginBottom}px;
  font-size: 1rem;
  font-weight: 200;
  line-height: 1.4;
`

const SectionDivider = styled.hr`
  height: 1px;
  margin: 32px 0;
  border: 0;
  background-color: #495961;

  @media (prefers-color-scheme: dark) {
    background-color: #647a85;
  }
`

const SectionTitle = styled.span<{ $marginTop?: number; $marginBottom?: number }>`
  display: block;
  margin: ${({ $marginTop = 0 }) => $marginTop}px 0 ${({ $marginBottom = 0 }) => $marginBottom}px;
  font-family: var(--font-cinema), Impact, sans-serif;
  font-size: 1.3rem;
  font-weight: 400;
  line-height: 1.4;
  letter-spacing: 0.08em;
  white-space: pre-wrap;
`

const ShowMoreButton = styled.button`
  min-height: 40px;
  padding: 4px 8px;
  border: 0;
  border-radius: 8px;
  color: #495961;
  background: transparent;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 200;
  line-height: 1.2;

  @media (prefers-color-scheme: dark) {
    color: #ffffff;
  }

  &:not(:disabled):hover {
    filter: brightness(0.9);
  }

  &:disabled {
    cursor: not-allowed;
    filter: contrast(0.6);
  }
`

const Sidebar = styled.aside`
  padding: 20px;
  padding-bottom: 64px;
  color: #4f412f;
  background: linear-gradient(160deg, #fffefa 0%, #fdf8ee 52%, #f8ecd5 100%);
  box-shadow: inset -1px 0 0 rgba(155, 107, 30, 0.16);

  h1 > span,
  h2 > span {
    color: #9b6b1e;
  }

  a {
    color: #8a601c;
  }

  hr {
    background-color: rgba(155, 107, 30, 0.22);
  }

  button {
    color: #8a601c;
  }

  a > div {
    border-color: rgba(138, 96, 28, 0.32);
    background: rgba(255, 255, 255, 0.72);
    transition: background 160ms ease, border-color 160ms ease, transform 160ms ease;

    &:hover {
      border-color: #9b6b1e;
      background: rgba(155, 107, 30, 0.12);
      transform: translateY(-1px);
    }
  }

  a svg {
    color: #8a601c;
    fill: #8a601c;
  }

  @media (prefers-color-scheme: dark) {
    color: #f4ede1;
    background: linear-gradient(160deg, #292016 0%, #17120e 52%, #0e0c0a 100%);
    box-shadow: inset -1px 0 0 rgba(241, 199, 111, 0.28);

    h1 > span,
    h2 > span {
      color: #f1c76f;
    }

    a,
    button {
      color: #f1c76f;
    }

    hr {
      background-color: rgba(241, 199, 111, 0.42);
    }

    a > div {
      border-color: rgba(241, 199, 111, 0.7);
      background: rgba(241, 199, 111, 0.07);

      &:hover {
        border-color: #f1c76f;
        background: rgba(241, 199, 111, 0.18);
      }
    }

    a svg {
      color: #f1c76f;
      fill: #f1c76f;
    }
  }

  @media (min-width: ${MOBILE_BREAKPOINT + 1}px) {
    position: sticky;
    top: 0;
    height: calc(100vh - 84px);
    overflow-y: auto;
    -ms-overflow-style: none;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`

const SidebarProfile = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const PosterContent = styled.section`
  min-width: 0;
  margin: 0 24px 64px 24px;

  @media (max-width: ${MOBILE_BREAKPOINT}px) {
    margin: 0 20px;
  }
`

const ProfileImageContainer = styled.div`
  position: relative;
  overflow: hidden;
  width: 50%;
  aspect-ratio: 1;
  border-radius: 4px;
  margin: auto;
  z-index: 20;
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.3);

  @media (max-width: ${MOBILE_BREAKPOINT}px) {
    width: 224px;
    margin: auto;
  }
`

const Introduction = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const PosterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 300px));
  justify-content: start;
  gap: 20px;

  @media (max-width: ${MOBILE_BREAKPOINT}px) {
    grid-template-columns: 1fr;
  }
`

const Poster = styled.article`
  position: relative;
  aspect-ratio: 2 / 3;
  perspective: 1000px;
  z-index: 20;

  &:focus-visible {
    outline: 3px solid currentColor;
    outline-offset: 3px;
  }

  &:hover [data-poster-face='front'],
  &:focus [data-poster-face='front'],
  &:focus-within [data-poster-face='front'] {
    transform: rotateY(-180deg);
    transition-duration: 500ms;
  }

  &:hover [data-poster-face='back'],
  &:focus [data-poster-face='back'],
  &:focus-within [data-poster-face='back'] {
    transform: rotateY(0deg);
    transition-duration: 500ms;
  }

  @media (prefers-reduced-motion: reduce) {
    &,
    [data-poster-face='front'],
    [data-poster-face='back'] {
      transition: none;
    }
  }
`

const PosterFront = styled.div`
  position: absolute;
  inset: 0;
  overflow: hidden;
  border-radius: 4px;
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.3);
  backface-visibility: hidden;
  transform: rotateY(0deg);
  transition: transform 220ms ease-in;
`

const PosterOverlay = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  box-sizing: border-box;
  overflow-y: auto;
  border-radius: 4px;
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.3);
  color: white;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.94), rgba(0, 0, 0, 0.6));
  backface-visibility: hidden;
  transform: rotateY(180deg);
  transition: transform 220ms ease-in;
  font-size: 1rem;
  font-weight: 200;
  line-height: 1.2;

  a {
    color: white;
    min-height: 32px;
    padding: 6px 12px;
    border: 1px solid rgba(255, 255, 255, 0.72);
    border-radius: 0;
    background: rgba(255, 255, 255, 0.08);
    box-shadow: inset 0 -1px 0 rgba(255, 255, 255, 0.18);
    position: relative;
    justify-content: center;
    text-align: center;
    font-size: 1rem;
    font-weight: 600;
    font-family: var(--font-cinema), Impact, sans-serif;
    letter-spacing: 0.1em;
    line-height: 1;
    text-transform: uppercase;
    transition: background 160ms ease, border-color 160ms ease, color 160ms ease, transform 160ms ease;

    &:hover,
    &:focus-visible {
      color: #1b1407;
      border-color: #f1c76f;
      background: #f1c76f;
      background-image: none;
      transform: translateY(-1px);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    a {
      transition: none;
    }
  }
`

const PosterAward = styled.span`
  position: absolute;
  z-index: 1;
  bottom: 10px;
  left: 10px;
  padding: 5px 8px;
  border-radius: 999px;
  font-size: 1rem;
  font-weight: 200;
  line-height: 1.2;
  color: white;
  background: rgba(122, 80, 0, 0.92);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
`

const PublicationTitle = styled.div`
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.4;
  color: white;
  margin: 0 0 8px;
`

const PosterDescription = styled.p`
  font-size: 1rem;
  font-weight: 200;
  line-height: 1.2;
  color: white;
  margin: 0 0 12px;
`

const PublicationMeta = styled.div`
  font-size: 1rem;
  font-weight: 200;
  line-height: 1.4;
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin: 0 0 12px;

  span,
  strong {
    padding: 3px 6px;
    border: 1px solid currentColor;
    border-radius: 999px;
    font-size: 1rem;
  }
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

const LinkSection = styled.nav`
  display: flex;
  gap: 8px;
`

const LinkButton = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  box-sizing: border-box;
  border: 1px solid #495961;
  border-radius: 8px;
  font-size: 1.3rem;
  font-weight: 400;
  line-height: 1.4;

  @media (prefers-color-scheme: dark) {
    border-color: #647a85;
  }
`

const NewsRow = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  column-gap: 8px;
  row-gap: 4px;
`
