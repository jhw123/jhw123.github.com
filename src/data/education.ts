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
    school: 'University of Michigan',
    content: 'Advisor: Xu Wang',
    startDate: new Date('2025-08-25'),
    location: '🇺🇸 Ann Arbor, United States',
    degree: 'PhD in Computer Science and Engineering',
    link: 'https://cse.engin.umich.edu',
  }),
  new Education({
    school: 'Korea Advanced Institute of Science and Technology',
    abbreviation: 'KAIST',
    content: 'Advisor: Juho Kim',
    startDate: new Date('2023-02-27'),
    endDate: new Date('2025-08-31'),
    location: '🇰🇷 Daejeon, South Korea',
    degree: 'MS in Computer Science (Specialization: Human-Computer Interaction)',
    link: 'https://cs.kaist.ac.kr',
  }),
  new Education({
    school: 'Korea Advanced Institute of Science and Technology',
    abbreviation: 'KAIST',
    content: 'GPA: 4.0/4.3 (Summa Cum Laude)',
    startDate: new Date('2015-08-31'),
    endDate: new Date('2023-02-26'),
    location: '🇰🇷 Daejeon, South Korea',
    degree: 'BS in Computer Science',
    link: 'https://www.kaist.ac.kr/en/',
  }),
])
