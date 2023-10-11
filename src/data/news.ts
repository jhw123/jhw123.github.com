import { DataUtil } from './utils'

interface Props {
  content: string
  startDate: Date
}

class News {
  content: string
  startDate: Date

  constructor({ content, startDate }: Props) {
    this.content = content
    this.startDate = startDate
  }
}

export const newsData = DataUtil.sortByTime([
  new News({
    content: 'Redesigned the website! Hope you like it.',
    startDate: new Date('2023-10-10'),
  }),
  new News({
    content: 'Got acceptances for two CSCW papers after a revision cycle!',
    startDate: new Date('2023-09-19'),
  }),
  new News({
    content: 'Solved 1000 LeetCode problems!',
    startDate: new Date('2023-01-19'),
  }),
  new News({
    content: 'Submitted my first first-author full paper to CHI successfully.',
    startDate: new Date('2022-09-19'),
  }),
  new News({
    content: 'Started summer internship at UCSD Design Lab.',
    startDate: new Date('2022-06-27'),
  }),
  new News({
    content: 'Solved 500 Leetcode problems!',
    startDate: new Date('2022-02-23'),
  }),
  new News({
    content: 'Left VCNC.',
    startDate: new Date('2021-10-08'),
  }),
])
