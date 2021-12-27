import * as React from 'react'
import { FC } from 'react'
import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'
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
  margin-bottom: 3rem;
`

const H2 = styled.h2`
  ${Typefaces[Typeface.Bold24]};
  ${TextColors[TextColor.Main020]};
`

const HEADER = styled.header`
  display: block;
  margin-bottom: 0.7rem;
`

const TimeRange = styled.div`
  ${TextColors[TextColor.Secondary]};
  ${Typefaces[Typeface.Regular16]};
  font-style: italic;
`

const Description = styled.div`
  ${TextColors[TextColor.Secondary]};
  margin-bottom: 1.45rem;
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
  ${TextColors[TextColor.Secondary]};
  ${Typefaces[Typeface.Regular14]};
  margin-right: 16px;
`

const TechStack = styled.div`
  ${TextColors[TextColor.Secondary]};
  ${Typefaces[Typeface.Regular14]};
`

const Translate = keyframes`
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(0.3rem);
  }
`

const LiveLink = styled(ExternalLink)`
  ${TextColors[TextColor.Primary]};
  ${Typefaces[Typeface.Bold18]};
  display: inline-flex;
  text-decoration: none;

  ::before {
    content: '👉';
    ${Typefaces[Typeface.Regular20]};
    margin-right: 0.7rem;
  }

  :hover::before {
    animation: ${Translate} 0.3s infinite ease-in-out alternate;
  }
`

export const ProjectCard: FC<Props> = props => {
  return (
    <Container>
      <HEADER>
        <TimeRange>
          <Time dateTime={props.startDate} format="Date" />
          <span> ~ </span>
          {props.endDate ? <Time dateTime={props.endDate} format="Date" /> : '현재'}
        </TimeRange>
        <H2>{props.title}</H2>
      </HEADER>
      <Description>{props.children}</Description>
      <LiveLink href={props.liveLinkUrl}>{props.liveLinkText}</LiveLink>
      <FOOTER>
        <ADDRESS>
          <span>Team: </span>
          <AssociationTag association={props.association} />
        </ADDRESS>
        <TechStack>
          <span>Tech Stack: </span>
          {props.tech.map(tech => (
            <TechIcon key={tech.title} tech={tech} />
          ))}
        </TechStack>
      </FOOTER>
    </Container>
  )
}
