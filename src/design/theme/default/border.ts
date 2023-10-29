import { css } from '@emotion/react'
import { BaseColor } from './base'

export const Border = {
  Primary: css`
    border: 1px solid ${BaseColor.Gray050};
  `,
  Highlight: css`
    border: 1px solid ${BaseColor.Gray000};
  `,
  Secondary: css`
    border: 1px solid ${BaseColor.Gray030};
  `,
  Success: css`
    border: 1px solid ${BaseColor.Green};
  `,
  Focus: css`
    border: 1px solid ${BaseColor.Blue030};
  `,
  Action: css`
    border: 1px solid ${BaseColor.Green};
  `,
  Danger: css`
    border: 1px solid ${BaseColor.Red};
  `,
} as const

export type Border = keyof typeof Border
