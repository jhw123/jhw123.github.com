import * as React from 'react'
import { FC } from 'react'
import styled from '@emotion/styled'
import { Typeface, Typefaces } from '../foundation/typefaces'
import { BorderColor, BorderColors, TextColor, TextColors } from '../foundation/semantic-colors'
import { Time } from './time'
import { Tech, TechIcon } from './techIcon'
import { AssociationTag } from './associationTag'
import { MOBILE_MODE_WIDTH } from '../constants/constants'
import { ExternalLink } from './externalLink'

interface Props {
  title: string
  startDate: string
  endDate?: string
  liveLinkText: string
  liveLinkUrl: string
  association: typeof ADDRESS[keyof typeof ADDRESS]
  tech: typeof Tech[keyof typeof Tech][]
}

const Container = styled.section`
  ${BorderColors[BorderColor.Main]};
  border-width: 2px;
  border-top: none;
  border-right: none;
  border-bottom: none;
  padding: 0.1rem 1rem 0.5rem;
  margin-bottom: 2rem;
`

const H1 = styled.h1`
  ${Typefaces[Typeface.Bold22]};
  ${TextColors[TextColor.Main020]};
`

const HEADER = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.3rem;
  @media screen and (max-width: ${MOBILE_MODE_WIDTH}px) {
    display: block;
    margin-bottom: 0.7rem;
  }
`

const TimeRange = styled.div`
  ${TextColors[TextColor.Secondary]};
  ${Typefaces[Typeface.Regular16]};
  font-style: italic;
`

const Description = styled.p`
  ${TextColors[TextColor.Secondary]};
  margin-bottom: 0.5rem;

  a {
    text-decoration: none;
  }
`

const FOOTER = styled.footer`
  display: flex;
  justify-content: start;
  align-items: center;
  margin-top: 0.5rem;
  @media screen and (max-width: ${MOBILE_MODE_WIDTH}px) {
    display: block;
  }
`

const ADDRESS = styled.address`
  ${TextColors[TextColor.Primary]};
  ${Typefaces[Typeface.Regular14]};
  margin-right: 16px;
`

const TechStack = styled.div`
  ${TextColors[TextColor.Primary]};
  ${Typefaces[Typeface.Regular14]};
`

const LiveLink = styled(ExternalLink)`
  ${TextColors[TextColor.Primary]};
  ${Typefaces[Typeface.Bold14]};
  display: inline-block;
`

export const ProjectCard: FC<Props> = props => {
  return (
    <Container>
      <HEADER>
        <H1>{props.title}</H1>
        <TimeRange>
          <Time dateTime={props.startDate} format={'Date'} /> ~{' '}
          {props.endDate ? <Time dateTime={props.endDate} format={'Date'} /> : '현재'}
        </TimeRange>
      </HEADER>
      <Description>{props.children}</Description>
      <LiveLink href={props.liveLinkUrl}>{props.liveLinkText}</LiveLink>
      <FOOTER>
        <ADDRESS>
          팀: <AssociationTag association={props.association} />
        </ADDRESS>
        <TechStack>
          기술 스택:{' '}
          {props.tech.map(tech => (
            <TechIcon key={tech.title} tech={tech} />
          ))}
        </TechStack>
      </FOOTER>
    </Container>
  )
}
