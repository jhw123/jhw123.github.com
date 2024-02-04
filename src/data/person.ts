interface Props {
  name: string
  institution?: string
  link?: string
  profileImage?: string
}

interface Person extends Props {}
class Person {
  constructor(props: Props) {
    Object.assign(this, props)
  }
}

export const PERSON = {
  hyoungwook: new Person({
    name: 'Hyoungwook Jin',
    institution: 'KAIST',
    profileImage: '/hyoungwook.jpg',
    link: 'https://jhw123.github.io',
  }),
  juho: new Person({
    name: 'Juho Kim',
    institution: 'KAIST',
    profileImage: '/people/juho.jpg',
    link: 'https://juhokim.com',
  }),
  hyungyu: new Person({
    name: 'Hyungyu Shin',
    institution: 'KAIST',
    profileImage: '/people/hyungyu.jpg',
    link: 'https://hyungyu.com',
  }),
  seonghee: new Person({
    name: 'Seonghee Lee',
    institution: 'Stanford',
    profileImage: '/people/seonghee.png',
    link: 'https://shljessie.github.io',
  }),
  janee: new Person({
    name: 'Jane L E',
  }),
  graceyen: new Person({
    name: 'Grace Yu-Chun Yen',
  }),
  stevendow: new Person({
    name: 'Steven P. Dow',
    institution: 'UCSD',
    profileImage: '/people/stevendow.jpg',
    link: 'https://spdow.ucsd.edu',
  }),
  mingyi: new Person({
    name: 'Mingyi Li',
  }),
  gracelin: new Person({
    name: 'Grace Lin',
  }),
  isabellepan: new Person({
    name: 'Isabelle Yan Pan',
  }),
  minsuk: new Person({
    name: 'Minsuk Chang',
    institution: 'Google Research',
    link: 'https://minsukchang.com',
  }),
  aliceoh: new Person({
    name: 'Alice Oh',
    institution: 'KAIST',
    link: 'https://aliceoh9.github.io',
  }),
  changyoon: new Person({
    name: 'Changyoon Lee',
  }),
  donghoon: new Person({
    name: 'Donghoon Lee',
  }),
} as const

export default Person
