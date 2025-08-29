interface Props {
  firstName: string
  middleName?: string
  lastName: string
  institution?: string
  link?: string
  profileImage?: string
}

interface Person extends Props {}
class Person {
  constructor(props: Props) {
    Object.assign(this, props)
  }

  get name() {
    if (this.middleName) {
      return `${this.firstName} ${this.middleName} ${this.lastName}`
    } else {
      return `${this.firstName} ${this.lastName}`
    }
  }
}

export const PERSON = {
  hyoungwook: new Person({
    firstName: 'Hyoungwook',
    lastName: 'Jin',
    institution: 'University of Michigan',
    profileImage: '/hyoungwook.jpeg',
    link: 'https://jhw123.github.io',
  }),
  juho: new Person({
    firstName: 'Juho',
    lastName: 'Kim',
    institution: 'KAIST',
    profileImage: '/people/juho.jpg',
    link: 'https://juhokim.com',
  }),
  hyungyu: new Person({
    firstName: 'Hyungyu',
    lastName: 'Shin',
    institution: 'KAIST',
    profileImage: '/people/hyungyu.jpg',
    link: 'https://hyungyu.com',
  }),
  seonghee: new Person({
    firstName: 'Seonghee',
    lastName: 'Lee',
    institution: 'Stanford',
    profileImage: '/people/seonghee.png',
    link: 'https://shljessie.github.io',
  }),
  hyungkwonko: new Person({
    firstName: 'Hyungkwon',
    lastName: 'Ko',
    link: 'https://hyungkwonko.info',
  }),
  kihoonson: new Person({
    firstName: 'Kihoon',
    lastName: 'Son',
  }),
  yoonseochoi: new Person({
    firstName: 'Yoonseo',
    lastName: 'Choi',
  }),
  yoonsukim: new Person({
    firstName: 'Yoonsu',
    lastName: 'Kim',
  }),
  yeonsupark: new Person({
    firstName: 'Yeon Su',
    lastName: 'Park',
  }),
  bekzattilekbay: new Person({
    firstName: 'Bekzat',
    lastName: 'Tilekbay',
  }),
  jinhoson: new Person({
    firstName: 'Jinho',
    lastName: 'Son',
  }),
  anthonychen: new Person({
    firstName: 'Xiang',
    middleName: 'Anthony',
    lastName: 'Chen',
  }),
  janee: new Person({
    firstName: 'Jane',
    middleName: 'L',
    lastName: 'E',
    institution: 'NUS',
    link: 'https://ejane.me',
  }),
  graceyen: new Person({
    firstName: 'Grace',
    middleName: 'Yu-Chun',
    lastName: 'Yen',
    institution: 'National Yang-Ming Chiao-Tung University',
    link: 'https://gracetfg2.github.io',
  }),
  stevendow: new Person({
    firstName: 'Steven',
    middleName: 'P.',
    lastName: 'Dow',
    institution: 'UC San Diego',
    link: 'https://spdow.ucsd.edu',
  }),
  haijunxia: new Person({
    firstName: 'Haijun',
    lastName: 'Xia',
    institution: 'UC San Diego',
    link: 'https://creativity.ucsd.edu/haijunxia',
  }),
  mengyichen: new Person({
    firstName: 'Mengyi',
    lastName: 'Chen',
  }),
  mingyi: new Person({
    firstName: 'Mingyi',
    lastName: 'Li',
  }),
  gracelin: new Person({
    firstName: 'Grace',
    lastName: 'Lin',
  }),
  isabellepan: new Person({
    firstName: 'Isabelle',
    middleName: 'Yan',
    lastName: 'Pan',
  }),
  minsuk: new Person({
    firstName: 'Minsuk',
    lastName: 'Chang',
    institution: 'Google Research',
    link: 'https://minsukchang.com',
  }),
  aliceoh: new Person({
    firstName: 'Alice',
    lastName: 'Oh',
    institution: 'KAIST',
    link: 'https://aliceoh9.github.io',
  }),
  changyoon: new Person({
    firstName: 'Changyoon',
    lastName: 'Lee',
  }),
  donghoon: new Person({
    firstName: 'Donghoon',
    lastName: 'Han',
    link: 'https://sites.google.com/view/hoonhan',
  }),
  haesookim: new Person({
    firstName: 'Haesoo',
    lastName: 'Kim',
    link: 'https://haesookim.info/',
  }),
  nathanHaile: new Person({
    firstName: 'Nathan',
    middleName: 'Mekuria',
    lastName: 'Haile',
  }),
  soyeongMin: new Person({
    firstName: 'Soyeong',
    lastName: 'Min',
  }),
  stevenMoore: new Person({
    firstName: 'Steven',
    lastName: 'Moore',
  }),
  anjaliSingh: new Person({
    firstName: 'Anjali',
    lastName: 'Singh',
  }),
  xinyiLu: new Person({
    firstName: 'Xinyi',
    lastName: 'Lu',
  }),
  paulDenny: new Person({
    firstName: 'Paul',
    lastName: 'Denny',
  }),
  christopherBrooks: new Person({
    firstName: 'Christopher',
    lastName: 'Brooks',
  }),
  hassanKhosravi: new Person({
    firstName: 'Hassan',
    lastName: 'Khosravi',
  }),
  xuWang: new Person({
    firstName: 'Xu',
    lastName: 'Wang',
    profileImage: '/people/xuwang.png',
    institution: 'University of Michigan',
    link: 'https://web.eecs.umich.edu/~xwanghci/',
  }),
  johnStamper: new Person({
    firstName: 'John',
    lastName: 'Stamper',
  }),
  jeongeonPark: new Person({
    firstName: 'Jeongeon',
    lastName: 'Park',
    profileImage: '/people/jeongeonpark.jpg',
    institution: 'UC San Diego',
    link: 'https://jeongeonpark.com/',
  }),
  minjuYoo: new Person({
    firstName: 'Minju',
    lastName: 'Yoo',
    profileImage: '/people/minjuyoo.jpg',
    institution: 'KAIST',
    link: 'https://minjuu1.github.io/',
  }),
  yokyungLee: new Person({
    firstName: 'Yokyung',
    lastName: 'Lee',
    profileImage: '/people/yokyunglee.png',
    institution: 'KAIST',
  }),
} as const

export default Person
