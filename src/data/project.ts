import { DataUtil } from './utils'

interface Props {
  title: string
  startDate: Date
  endDate?: Date
  imagePath: string
  description: string
  arxivLink?: string
}

interface Project extends Props {}
class Project {
  constructor(props: Props) {
    Object.assign(this, props)
  }
}

export const PROJECTS = DataUtil.sortByTime([])
