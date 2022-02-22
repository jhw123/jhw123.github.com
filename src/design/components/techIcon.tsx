import React, { FC } from 'react'
import styled from '@emotion/styled'
import { opacify } from '../foundation/color-utils'
import { GreyColors } from '../foundation/base-colors'
import { ExternalLink } from './externalLink'

export const Tech = {
  Angular: {
    icon: '/icons/angular.svg',
    url: 'https://angular.io',
    title: 'Angular',
  },
  Nextjs: {
    icon: '/icons/nextjs.svg',
    url: 'https://nextjs.org',
    title: 'Next.js',
  },
  Spring: {
    icon: '/icons/spring.svg',
    url: 'https://spring.io',
    title: 'Spring',
  },
  Apollo: {
    icon: '/icons/apollo.svg',
    url: 'https://www.apollographql.com',
    title: 'Apollo GraphQl',
  },
  Android: {
    icon: '/icons/android.svg',
    url: 'https://developer.android.com',
    title: 'Android',
  },
  RIB: {
    icon: '/icons/rib.png',
    url: 'https://github.com/uber/RIBs',
    title: 'Uber RIB',
  },
  Express: {
    icon: '/icons/express.svg',
    url: 'https://expressjs.com',
    title: 'Express.js',
  },
  Jquery: {
    icon: '/icons/jquery.svg',
    url: 'https://jquery.com/',
    title: 'jQuery',
  },
  Flask: {
    icon: '/icons/flask.svg',
    url: 'https://flask.palletsprojects.com/en/1.1.x/#',
    title: 'Flask',
  },
  Nodejs: {
    icon: '/icons/nodejs.svg',
    url: 'https://nodejs.org',
    title: 'Node.js',
  },
  Typescript: {
    icon: '/icons/typescript.svg',
    url: 'https://www.typescriptlang.org',
    title: 'TypeScript',
  },
  Kotlin: {
    icon: '/icons/kotlin.svg',
    url: 'https://kotlinlang.org',
    title: 'Kotlin',
  },
  ReactiveX: {
    icon: '/icons/reactivex.png',
    url: 'http://reactivex.io/',
    title: 'ReactiveX',
  },
}

interface Props {
  tech: {
    icon: string
    url: string
    title: string
  }
}

const Icon = styled.img`
  height: 20px;
  vertical-align: top;
  margin: 0 4px;
  background-color: ${opacify(GreyColors.Grey000, 0.5)};
  padding: 2px;
`

export const TechIcon: FC<Props> = props => {
  return (
    <ExternalLink href={props.tech.url}>
      <Icon src={props.tech.icon} alt={props.tech.title} />
    </ExternalLink>
  )
}
