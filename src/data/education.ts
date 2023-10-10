import { DataUtil } from './utils'

interface Props {
  content: string
  startDate: Date
  endDate?: Date
  school: string
  location: string
  abbreviation?: string
  degree: string
  link: string
}

class Education {
  content: string
  startDate: Date
  endDate: Date | undefined
  school: string
  location: string
  abbreviation: string | undefined
  degree: string
  link: string

  constructor({ content, startDate, endDate, school, location, abbreviation, degree, link }: Props) {
    this.content = content
    this.startDate = startDate
    this.endDate = endDate
    this.school = school
    this.location = location
    this.abbreviation = abbreviation
    this.degree = degree
    this.link = link
  }
}

export const educationData = DataUtil.sortByTime([
  new Education({
    school: 'Korea Advanced Institute of Science and Technology',
    abbreviation: 'KAIST',
    content: 'Advisor: Juho Kim',
    startDate: new Date(2023, 3),
    location: '🇰🇷 Daejeon, South Korea',
    degree: 'MSc in Computer Science (Specialization: Human-Computer Interaction)',
    link: 'https://www.kaist.ac.kr/en/',
  }),
  new Education({
    school: 'Korea Advanced Institute of Science and Technology',
    abbreviation: 'KAIST',
    content: 'GPA: 4.0/4.3 (Summa Cum Laude)',
    startDate: new Date(2015, 8),
    endDate: new Date(2023, 2),
    location: '🇰🇷 Daejeon, South Korea',
    degree: 'BS in Computer Science',
    link: 'https://www.kaist.ac.kr/en/',
  }),
  new Education({
    school: 'Yew Chung International School of Beijing',
    abbreviation: 'YCIS Bejing',
    content: 'Valedictorian',
    startDate: new Date(2011, 11),
    endDate: new Date(2015, 5),
    location: '🇨🇳 Beijing, China',
    degree: 'IB Diploma',
    link: 'https://www.ycis-bj.com/en',
  }),
])
