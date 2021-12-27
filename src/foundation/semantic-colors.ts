import { css } from '@emotion/react'
import { GreyColors, MainColors, SubColors } from './base-colors'
import { opacify } from './color-utils'

export enum TextColor {
  Primary = 'Primary',
  Secondary = 'Secondary',
  Main010 = 'Main010',
  Main020 = 'Main020',
  Main040 = 'Main040',
  Red = 'Red',
}

export const TextColors = {
  [TextColor.Primary]: css`
    color: ${GreyColors.Grey060};
    @media (prefers-color-scheme: dark) {
      color: ${GreyColors.Grey020};
    }
  `,
  [TextColor.Secondary]: css`
    color: ${GreyColors.Grey040};
    @media (prefers-color-scheme: dark) {
      color: ${GreyColors.Grey040};
    }
  `,
  [TextColor.Main010]: css`
    color: ${MainColors.Blue010};
    @media (prefers-color-scheme: dark) {
      color: ${MainColors.Blue010};
    }
  `,
  [TextColor.Main020]: css`
    color: ${MainColors.Blue020};
    @media (prefers-color-scheme: dark) {
      color: ${MainColors.Blue030};
    }
  `,
  [TextColor.Main040]: css`
    color: ${MainColors.Blue040};
    @media (prefers-color-scheme: dark) {
      color: ${MainColors.Blue060};
    }
  `,
  [TextColor.Red]: css`
    color: ${SubColors.Red010};
    @media (prefers-color-scheme: dark) {
      color: ${SubColors.Red030};
    }
  `,
}

export enum BorderColor {
  Basic = 'Basic',
  Main = 'Main',
}

export const BorderColors = {
  [BorderColor.Basic]: css`
    border: 1px solid ${GreyColors.Grey030};
    @media (prefers-color-scheme: dark) {
      border-color: ${GreyColors.Grey070};
    }
  `,
  [BorderColor.Main]: css`
    border: 1px solid ${MainColors.Blue020};
    @media (prefers-color-scheme: dark) {
      border-color: ${MainColors.Blue040};
    }
  `,
}

export enum FillColor {
  Base = 'Base',
  Elevated = 'Elevated',
  Float = 'Float',
  Transparent = 'Transparent',
}

export const FillColors = {
  [FillColor.Base]: css`
    background-color: ${GreyColors.Grey000};
    @media (prefers-color-scheme: dark) {
      background-color: ${GreyColors.Grey090};
    }
  `,
  [FillColor.Elevated]: css`
    background-color: ${GreyColors.Grey005};
    @media (prefers-color-scheme: dark) {
      background-color: ${GreyColors.Grey085};
    }
  `,
  [FillColor.Float]: css`
    background-color: ${GreyColors.Grey020};
    @media (prefers-color-scheme: dark) {
      background-color: ${GreyColors.Grey080};
    }
  `,
  [FillColor.Transparent]: css`
    background-color: transparent;
  `,
}

export enum ShadowColor {
  Basic0y4b = 'Basic0y4b',
  BasicMinus2y4b = 'BasicMinus2y4b',
  Basic2y4b = 'Basic2y4b',
  Thin0y4b = 'Thin0y4b',
  ThinMinus2y4b = 'ThinMinus2y4b',
  Thin2y4b = 'Thin2y4b',
  Thin0y8b = 'Thin0y8b',
  Thin2y8b = 'Thin2y8b',
}

export const ShadowColors = {
  [ShadowColor.Basic0y4b]: css`
    box-shadow: 0 0 4px 0 ${opacify(GreyColors.Grey070, 0.25)};
    @media (prefers-color-scheme: dark) {
      box-shadow: none;
    }
  `,
  [ShadowColor.BasicMinus2y4b]: css`
    box-shadow: 0 -2px 4px 0 ${opacify(GreyColors.Grey070, 0.25)};
    @media (prefers-color-scheme: dark) {
      box-shadow: none;
    }
  `,
  [ShadowColor.Basic2y4b]: css`
    box-shadow: 0 2px 4px 0 ${opacify(GreyColors.Grey070, 0.25)};
    @media (prefers-color-scheme: dark) {
      box-shadow: none;
    }
  `,
  [ShadowColor.Thin0y4b]: css`
    box-shadow: 0 0 4px 0 ${opacify(GreyColors.Grey070, 0.1)};
    @media (prefers-color-scheme: dark) {
      box-shadow: none;
    }
  `,
  [ShadowColor.ThinMinus2y4b]: css`
    box-shadow: 0 -2px 4px 0 ${opacify(GreyColors.Grey070, 0.1)};
    @media (prefers-color-scheme: dark) {
      box-shadow: none;
    }
  `,
  [ShadowColor.Thin2y4b]: css`
    box-shadow: 0 2px 4px 0 ${opacify(GreyColors.Grey070, 0.1)};
    @media (prefers-color-scheme: dark) {
      box-shadow: none;
    }
  `,
  [ShadowColor.Thin0y8b]: css`
    box-shadow: 0 0 8px 0 ${opacify(GreyColors.Grey070, 0.1)};
    @media (prefers-color-scheme: dark) {
      box-shadow: none;
    }
  `,
  [ShadowColor.Thin2y8b]: css`
    box-shadow: 0 2px 8px 0 ${opacify(GreyColors.Grey070, 0.1)};
    @media (prefers-color-scheme: dark) {
      box-shadow: none;
    }
  `,
}

export enum HoverColor {
  Basic = 'Basic',
}

export const HoverColors = {
  [HoverColor.Basic]: css`
    &:hover {
      background-color: ${GreyColors.Grey005};
    }

    @media (prefers-color-scheme: dark) {
      &:hover {
        background-color: ${GreyColors.Grey085};
      }
    }
  `,
}
