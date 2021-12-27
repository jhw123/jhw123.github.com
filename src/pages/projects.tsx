import { PageProps } from 'gatsby'
import * as React from 'react'
import styled from '@emotion/styled'
import Layout from '../components/layout/layout'
import SEO from '../components/seo'
import { PagePath } from '../page-paths'
import { ProjectCard } from '../components/projectCard'
import { Tech } from '../components/techIcon'
import { Association } from '../components/associationTag'
import { Typeface, Typefaces } from '../foundation/typefaces'
import { ExternalLink } from '../components/externalLink'
import { TextColor, TextColors } from '../foundation/semantic-colors'

const H3 = styled.h3`
  ${Typefaces[Typeface.Bold22]};
  ${TextColors[TextColor.Primary]};
`

const P = styled.p`
  margin-bottom: 0.5rem;
`

const ProjectsPage = (props: PageProps) => (
  <Layout>
    <SEO title={PagePath.projects.title()} />
    <ProjectCard
      title="SOCAR Casting: Try 2-Day Test-ride and Buy Used Cars Fully Contactless"
      startDate="2020-04-09"
      endDate="2021-08-11"
      liveLinkText="Visit Casting"
      liveLinkUrl="https://brand.casting.socar.kr/process"
      association={Association.VCNC}
      tech={[Tech.Typescript, Tech.Nextjs, Tech.Apollo, Tech.Spring]}
    >
      <H3>⛳ GOAL</H3>
      <p>
        Casting is an e-commerce service for buying used cars. Our goal was 1) to break down the incredulity of buying
        used cars, often originated from obscure information of used cars, and 2) to provide fully contactless process
        to test-drive and purchase used cars without having to meet dealers.
      </p>
      <H3>✨ SOLUTION</H3>
      <p>
        In order to convince buyers, we offered them a chance to test-ride cars for 2 days. Buyers could designate a day
        and a place, and we transport cars to the place so that they can test the cars anyway they want. Purchasing the
        cars is also convenient and contactless as document works go through online.
      </p>
      <H3>👨‍💻 MY ROLE</H3>
      <P>
        <span>I participated in this project as a </span>
        <b>web developer</b>
        <span> and I</span>
      </P>
      <ul>
        <li>developed the web pages and initially organized the web project structure.</li>
        <li>designed and developed the architecture of a design system of the service.</li>
        <li>developed a system that can manage mock data for e2e tests.</li>
        <li>refactored of the entire project from Angular to Next.js.</li>
      </ul>
    </ProjectCard>
    <ProjectCard
      title="Tada: Grab a First Class Taxi Driven by Premium Drivers"
      startDate="2019-08-26"
      endDate="2020-04-09"
      liveLinkText="Visit TADA"
      liveLinkUrl="https://tadatada.com"
      association={Association.VCNC}
      tech={[Tech.Kotlin, Tech.Android, Tech.RIB, Tech.ReactiveX]}
    >
      <H3>⛳ GOAL</H3>
      <p>
        Tada is a ride-hailing service in Korea, used by over 1.5 million people. Tada aims 1) to provide quality ride
        experiences for all, including those with impaired mobility and low accessibility, and 2) to support and protect
        gig economy workers.
      </p>
      <H3>✨ SOLUTION</H3>
      <p>
        To improve ride experience, we constantly trained our drivers and offered an assist service for impaired riders.
        9 passenger vans were provided to riders so that they can relax during their ride and can take heavy cargo. Tada
        also offered insurances and incentives for drivers.
      </p>
      <H3>👨‍💻 MY ROLE</H3>
      <P>
        <span>I participated in this project as an </span>
        <b>Android and web developer</b>
        <span> and I</span>
      </P>
      <ul>
        <li>
          developed both the rider application for requesting a ride and the driver application for receiving requests
          and managing work schedule.
        </li>
        <li>
          worked on developing user convenience features such as credit card scanning for payment registration and
          alarms for drivers&apos; reserved rides.
        </li>
        <li>developed the web pages and initially organized the web project structure.</li>
      </ul>
    </ProjectCard>
    <ProjectCard
      title="SolveDeep: A System for Supporting Subgoal Learning in Online Math Problem Solving"
      startDate="2017-12"
      endDate="2019-05-09"
      liveLinkText="View Paper"
      liveLinkUrl="https://dl.acm.org/citation.cfm?id=3312822"
      association={Association.KIXLAB}
      tech={[Tech.Jquery, Tech.Express, Tech.Nodejs, Tech.Flask]}
    >
      <H3>⛳ GOAL</H3>
      <p>
        Although learning subgoals in worked examples are known to be helpful for transfer in learning, there are few
        system in reality that supports subgoal learning. It is because generating high quality subgoal labels at scale
        and building an interactive system requires significant expert efforts and time.
      </p>
      <H3>✨ SOLUTION</H3>
      <p>
        This research project aims to find a zero cost method to build an interactive system that provides personalized
        feedback and supports subgoal learning of math learners, with the help of learner-driven subgoal labeling and
        learnersourcing.
      </p>
      <H3>👨‍💻 MY ROLE</H3>
      <P>
        <span>I participated in this project as the </span>
        <b>first author</b>
        <span> of the paper. More specifically I</span>
      </P>
      <ul>
        <li>set the objective of the project and led it.</li>
        <li>developed SolveDeep, a system to support subgoal learning at scale.</li>
        <li>designed and ran experiments to evaluate the system.</li>
        <li>
          <span>published an extended abstract paper at </span>
          <ExternalLink href="https://chi2019.acm.org">CHI2019</ExternalLink>
          <span>.</span>
        </li>
      </ul>
    </ProjectCard>
  </Layout>
)

export default ProjectsPage
