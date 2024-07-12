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

interface Education extends Props {}
class Education {
  constructor(props: Props) {
    Object.assign(this, props)
  }
}

export const EDUCATIONS = DataUtil.sortByTime([
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
])
