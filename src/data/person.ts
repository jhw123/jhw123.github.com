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
  hyungkwonko: new Person({
    name: 'Hyungkwon Ko',
    link: 'https://hyungkwonko.info',
  }),
  kihoonson: new Person({
    name: 'Kihoon Son',
  }),
  yoonseochoi: new Person({
    name: 'Yoonseo Choi',
  }),
  yoonsukim: new Person({
    name: 'Yoonsu Kim',
  }),
  yeonsupark: new Person({
    name: 'Yeonsu Park',
  }),
  bekzattilekbay: new Person({
    name: 'Bekzat Tilekbay',
  }),
  jinhoson: new Person({
    name: 'Jinho Son',
  }),
  anthonychen: new Person({
    name: 'Xiang Anthony Chen',
  }),
  janee: new Person({
    name: 'Jane L E',
    institution: 'UCSD',
    link: 'https://ejane.me',
  }),
  graceyen: new Person({
    name: 'Grace Yu-Chun Yen',
    institution: 'National Yang-Ming Chiao-Tung University',
    link: 'https://gracetfg2.github.io',
  }),
  stevendow: new Person({
    name: 'Steven P. Dow',
    institution: 'UCSD',
    profileImage: '/people/stevendow.jpg',
    link: 'https://spdow.ucsd.edu',
  }),
  haijunxia: new Person({
    name: 'Haijun Xia',
    institution: 'UCSD',
    profileImage: '/people/haijunxia.jpg',
    link: 'https://creativity.ucsd.edu/haijunxia',
  }),
  mengyichen: new Person({
    name: 'Mengyi Chen',
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
    link: 'https://sites.google.com/view/hoonhan',
  }),
} as const

export default Person
