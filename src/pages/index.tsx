import { PageProps } from 'gatsby'

import Layout from '../components/layout/layout'
import SEO from '../components/seo'
import * as React from 'react'
import { PagePath } from '../page-paths'
import { ProjectCard } from '../components/projectCard'
import { Tech } from '../components/techIcon'
import { Association } from '../components/associationTag'
import { ExternalLink } from '../components/externalLink'

const ProjectsPage = (props: PageProps) => (
  <Layout>
    <SEO title={PagePath.projects.title()} />
    <ProjectCard
      title={'쏘카 캐스팅'}
      startDate={'2020-04-09'}
      liveLinkText={'캐스팅 소개 바로가기 '}
      liveLinkUrl={'https://brand-app.casting.socar.kr'}
      association={Association.VCNC}
      tech={[Tech.Typescript, Tech.Nextjs, Tech.Apollo, Tech.Spring]}
    >
      캐스팅은 투명한 차량 상태 노출과 구매할 차량을 이틀 간 길게 빌려타보는 "타보기 서비스"를 통해 기존 중고차 시장에
      존재하던 신뢰성 문제를 해결하는 완전 비대면 중고차 구매 서비스입니다. 저는 캐스팅 디자인 시스템 구축 및 Next.js
      프로젝트 구조 설계와 <ExternalLink href={'https://www.cypress.io/'}>Cypress</ExternalLink>를 이용한 테스트 코드
      작성 업무를 주로 담당하고 있습니다.
    </ProjectCard>
    <ProjectCard
      title={'타다 예약 서비스'}
      startDate={'2019-11-29'}
      liveLinkText={'서비스 안내 바로가기 '}
      liveLinkUrl={'https://help.tadatada.com/hc/ko/sections/360003928732'}
      association={Association.VCNC}
      tech={[Tech.Typescript, Tech.Angular]}
    >
      타다 예약은 공항 이동과 같이 특수한 목적을 가지고 이동할 때 차량과 기사를 원하는 시간만큼 자유롭게 예약할 수 있는
      서비스입니다. 예약 서비스는 타다 앱 내에 웹뷰 형태로 구현되어 있으며, 저는 타다 GOLF 라인업 개발과 같은 피처
      개발과 비즈니스 로직을 유닛 테스팅하는 업무를 주로 하였습니다.
    </ProjectCard>
    <ProjectCard
      title={'타다 라이더 & 드라이버 앱'}
      startDate={'2019-08-26'}
      endDate={'2020-04-09'}
      liveLinkText={'타다 바로가기 '}
      liveLinkUrl={'https://tadatada.com'}
      association={Association.VCNC}
      tech={[Tech.Kotlin, Tech.Android, Tech.RIB, Tech.ReactiveX]}
    >
      타다는 교통약자를 포용한 새로운 이동의 기본을 제시하며 150만명 이상의 라이더와 1만명의 드라이버를 연결해주는
      라이드 헤일링 서비스입니다. 저는 클라이언트 팀에서 안드로이드 라이더 앱과 드라이버 앱을 담당했는데, 카메라
      인식으로 카드 등록, 차량 호출 중 화면 전면 개편, 친구 초대 기능과 같은 피처 개발을 주로 하였습니다.
    </ProjectCard>
    <ProjectCard
      title={'학습자 크라우드소싱 연구'}
      startDate={'2017-12'}
      endDate={'2019-05-09'}
      liveLinkText={'논문 보기 '}
      liveLinkUrl={'https://dl.acm.org/citation.cfm?id=3312822'}
      association={Association.KIXLAB}
      tech={[Tech.Jquery, Tech.Express, Tech.Nodejs, Tech.Flask]}
    >
      <ExternalLink href={'https://www.kixlab.org/'}>카이스트 인터렉션 연구실(KIXLAB)</ExternalLink>의 학부 연구원으로써
      수학 학습자가 문제 풀이 구조를 더 잘 이해하도록 돕는 시스템을 만들었습니다. 시스템 개발 및 연구 진행에서 주도적인
      역할을 맡아, 프런트와 백엔드 개발 전체를 담당하였고 시스템의 핵심인 순차적 데이터 클러스터링 알고리즘을
      설계했습니다. 또한, 연구적 성과를 인정받아{' '}
      <ExternalLink href={'https://chi2019.acm.org/'}>CHI 2019 학회</ExternalLink>
      에서 Late-Breaking-Work를 발표하였습니다.
    </ProjectCard>
  </Layout>
)

export default ProjectsPage
