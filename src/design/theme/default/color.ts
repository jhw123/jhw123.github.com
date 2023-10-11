import { css } from '@emotion/react'
import { BaseColor } from './base'

export const Color = {
  Primary: css`
    color: ${BaseColor.Gray080};
    fill: ${BaseColor.Gray080};
    @media (prefers-color-scheme: dark) {
      color: ${BaseColor.Gray010};
      fill: ${BaseColor.Gray010};
    }
  `,
  Secondary: css`
    color: ${BaseColor.Gray050};
    fill: ${BaseColor.Gray050};
    @media (prefers-color-scheme: dark) {
      color: ${BaseColor.Gray030};
      fill: ${BaseColor.Gray030};
    }
  `,
  Success: css`
    color: ${BaseColor.Green};
    fill: ${BaseColor.Green};
  `,
  Danger: css`
    color: ${BaseColor.Red};
    fill: ${BaseColor.Red};
  `,
  Warning: css`
    color: ${BaseColor.Orange};
    fill: ${BaseColor.Orange};
  `,
  Placeholder: css`
    color: ${BaseColor.Gray020};
    fill: ${BaseColor.Gray020};
  `,
  Highlight: css`
    color: ${BaseColor.Gray000};
    fill: ${BaseColor.Gray000};
  `,
  Focus: css`
    color: ${BaseColor.Blue030};
    fill: ${BaseColor.Blue030};
    @media (prefers-color-scheme: dark) {
      color: ${BaseColor.Blue020};
      fill: ${BaseColor.Blue020};
    }
  `,
  Action: css`
    color: ${BaseColor.Green};
    fill: ${BaseColor.Green};
  `,
  Inherit: css`
    color: inherit;
  `,
} as const

export type Color = keyof typeof Color
