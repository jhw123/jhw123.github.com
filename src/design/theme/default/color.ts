import { css } from '@emotion/react'
import { BaseColor } from './base'

export const Color = {
  Primary: css`
    color: ${BaseColor.Gray080};
    stroke: ${BaseColor.Gray080};
    @media (prefers-color-scheme: dark) {
      color: ${BaseColor.Gray010};
      stroke: ${BaseColor.Gray010};
      fill: ${BaseColor.Gray010};
    }
  `,
  Secondary: css`
    color: ${BaseColor.Gray050};
    stroke: ${BaseColor.Gray050};
    @media (prefers-color-scheme: dark) {
      color: ${BaseColor.Gray030};
      stroke: ${BaseColor.Gray030};
      fill: ${BaseColor.Gray030};
    }
  `,
  Success: css`
    color: ${BaseColor.Green};
    stroke: ${BaseColor.Green};
  `,
  Danger: css`
    color: ${BaseColor.Red};
    stroke: ${BaseColor.Red};
  `,
  Warning: css`
    color: ${BaseColor.Orange};
    stroke: ${BaseColor.Orange};
  `,
  Placeholder: css`
    color: ${BaseColor.Gray020};
    stroke: ${BaseColor.Gray020};
  `,
  Highlight: css`
    color: ${BaseColor.Gray000};
    stroke: ${BaseColor.Gray000};
  `,
  Focus: css`
    color: ${BaseColor.RoyalBlue};
    stroke: ${BaseColor.RoyalBlue};
  `,
  Action: css`
    color: ${BaseColor.Green};
    stroke: ${BaseColor.Green};
  `,
  Inherit: css`
    color: inherit;
  `,
} as const

export type Color = keyof typeof Color
