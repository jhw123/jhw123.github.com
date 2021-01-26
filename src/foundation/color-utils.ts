import { GreyColors } from './base-colors'
import isNil from 'lodash/isNil'

export function opacify(color: GreyColors, opacity: number): string {
  let hex = color.replace('#', '')
  let value = hex.match(/[a-f\d]/gi)

  if (isNil(value)) {
    return color
  }

  if (value.length == 3) {
    hex = value[0] + value[0] + value[1] + value[1] + value[2] + value[2]
  }

  value = hex.match(/[a-f\d]{2}/gi)

  if (isNil(value)) {
    return color
  }

  const r = parseInt(value[0], 16)
  const g = parseInt(value[1], 16)
  const b = parseInt(value[2], 16)

  return `rgba(${r}, ${g}, ${b}, ${opacity})`
}
