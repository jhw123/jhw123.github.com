import { DataUtil } from './utils'

interface Props {
  content: string
  startDate: Date
}

class Post {
  content: string
  startDate: Date

  constructor({ content, startDate }: Props) {
    this.content = content
    this.startDate = startDate
  }
}

export const POSTS = DataUtil.sortByTime([
  new Post({
    content: '🌺 I will attend CHI in person to give a presentation.',
    startDate: new Date('2024-05-05'),
  }),
  new Post({
    content: '🎉 Got an acceptance for a C&C paper!',
    startDate: new Date('2024-05-02'),
  }),
  new Post({
    content: '🏆 TeachYou received an honorable mention award at CHI2024!',
    startDate: new Date('2024-04-27'),
  }),
  new Post({
    content: '🎉 TeachYou is accepted to CHI2024!',
    startDate: new Date('2024-01-19'),
  }),
  new Post({
    content: '💅 Redesigned the website! Hope you like it.',
    startDate: new Date('2023-10-10'),
  }),
  new Post({
    content: '🎉 Got acceptances for two CSCW papers after a revision cycle!',
    startDate: new Date('2023-09-19'),
  }),
  new Post({
    content: '🔥 Solved 1000 LeetCode problems!',
    startDate: new Date('2023-01-19'),
  }),
  new Post({
    content: '🚀 Submitted my first first-author full paper to CHI successfully.',
    startDate: new Date('2022-09-19'),
  }),
  new Post({
    content: '🧳 Started summer internship at UCSD Design Lab.',
    startDate: new Date('2022-06-27'),
  }),
  new Post({
    content: '🔥 Solved 500 Leetcode problems!',
    startDate: new Date('2022-02-23'),
  }),
  new Post({
    content: '🧳 Left VCNC.',
    startDate: new Date('2021-10-08'),
  }),
])
