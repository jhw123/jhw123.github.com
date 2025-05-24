import { css } from '@emotion/react'
import { DEFAULT_THEME } from '@wookiejin/react-component'

export const THEME = {
  ...DEFAULT_THEME,
  color: {
    ...DEFAULT_THEME.color,
    Focus: css`
      color: #4476b2;
      fill: #4476b2;
      @media (prefers-color-scheme: dark) {
        color: #518dd7;
        fill: #518dd7;
      }
    `,
    Primary: css`
      color: #222222;
      fill: #222222;
      @media (prefers-color-scheme: dark) {
        color: #ffffff;
        fill: #ffffff;
      }
    `,
    Secondary: css`
      color: #495961;
      fill: #495961;
      @media (prefers-color-scheme: dark) {
        color: #ffffff;
        fill: #ffffff;
      }
    `,
  },
  fill: {
    ...DEFAULT_THEME.fill,
    Primary: css`
      background-color: #fff;
      @media (prefers-color-scheme: dark) {
        background-color: #222222;
      }
    `,
  },
  border: {
    ...DEFAULT_THEME.border,
    Secondary: css`
      border: 1px solid #495961;
      @media (prefers-color-scheme: dark) {
        border-color: #647a85;
      }
    `,
  },
}
