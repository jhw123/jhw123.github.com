import { DataUtil } from './utils'

interface Props {
  name: string
  subTitle?: string
  startDate: Date
  endDate?: Date
  goal: string
  solution: string
  role: string
  team: string
  link?: string
}

interface Product extends Props {}
class Product {
  constructor(props: Props) {
    Object.assign(this, props)
  }
}

export const productData: Product[] = DataUtil.sortByTime([
  new Product({
    name: 'SOCAR Casting',
    subTitle: 'Try 2-Day Test-ride and Buy Used Cars Fully Contactless',
    goal: 'Casting is an e-commerce service for buying used cars. Our goal was 1) to break down the incredulity of buying used cars, often originated from obscure information of used cars, and 2) to provide fully contactless process to test-drive and purchase used cars without having to meet dealers.',
    startDate: new Date(2020, 3, 9),
    endDate: new Date(2021, 7, 11),
    solution:
      'In order to convince buyers, we offered them a chance to test-ride cars for 2 days. Buyers could designate a day and a place, and we transport cars to the place so that they can test the cars anyway they want. Purchasing the cars is also convenient and contactless as document works go through online.',
    role: 'a web developer',
    team: 'VCNC',
    link: 'https://brand.casting.socar.kr/process',
  }),
  new Product({
    name: 'TADA',
    subTitle: 'Grab a First Class Taxi Driven by Premium Drivers',
    goal: 'TADA is a ride-hailing service in Korea, used by over 1.5 million people. TADA aims 1) to provide quality ride experiences for all, including those with impaired mobility and low accessibility, and 2) to support and protect gig economy workers.',
    startDate: new Date(2020, 9, 8),
    endDate: new Date(2021, 10, 8),
    solution:
      'To improve ride experience, we constantly trained our drivers and offered an assist service for impaired riders. 9 passenger vans were provided to riders so that they can relax during their ride and can take heavy cargo. Tada also offered insurances and incentives for drivers.',
    role: 'an Android and web developer',
    team: 'VCNC',
    link: 'https://tadatada.com/',
  }),
])
