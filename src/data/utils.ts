export class DataUtil {
  static sortByTime<T extends { startDate: Date; endDate?: Date }>(data: T[]) {
    return data.sort((e1, e2) => {
      const end1 = e1.endDate?.getTime() ?? Infinity
      const end2 = e2.endDate?.getTime() ?? Infinity
      if (end1 === end2) {
        const start1 = e1.startDate.getTime()
        const start2 = e2.startDate.getTime()
        return start2 - start1
      } else {
        return end2 - end1
      }
    })
  }
}
