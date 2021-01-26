import { css } from '@emotion/react'
import { GreyColors, MainColors, SubColors } from './base-colors'
import { opacify } from './color-utils'

export enum TextColor {
  Primary = 'Primary',
  Secondary = 'Secondary',
  Main020 = 'Main020',
  Main040 = 'Main040',
  Red = 'Red',
}

export const TextColors = {
  [TextColor.Primary]: css`
    color: ${GreyColors.Grey080};
    @media (prefers-color-scheme: dark) {
      color: ${GreyColors.Grey020};
    }
  `,
  [TextColor.Secondary]: css`
    color: ${GreyColors.Grey060};
    @media (prefers-color-scheme: dark) {
      color: ${GreyColors.Grey040};
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
  Basic_0y_4b = 'Basic_0y_4b',
  Basic_minus2y_4b = 'Basic_minus2y_4b',
  Basic_2y_4b = 'Basic_2y_4b',
  Thin_0y_4b = 'Thin_0y_4b',
  Thin_minus2y_4b = 'Thin_minus2y_4b',
  Thin_2y_4b = 'Thin_2y_4b',
  Thin_0y_8b = 'Thin_0y_8b',
  Thin_2y_8b = 'Thin_2y_8b',
}

export const ShadowColors = {
  [ShadowColor.Basic_0y_4b]: css`
    box-shadow: 0 0 4px 0 ${opacify(GreyColors.Grey070, 0.25)};
    @media (prefers-color-scheme: dark) {
      box-shadow: none;
    }
  `,
  [ShadowColor.Basic_minus2y_4b]: css`
    box-shadow: 0 -2px 4px 0 ${opacify(GreyColors.Grey070, 0.25)};
    @media (prefers-color-scheme: dark) {
      box-shadow: none;
    }
  `,
  [ShadowColor.Basic_2y_4b]: css`
    box-shadow: 0 2px 4px 0 ${opacify(GreyColors.Grey070, 0.25)};
    @media (prefers-color-scheme: dark) {
      box-shadow: none;
    }
  `,
  [ShadowColor.Thin_0y_4b]: css`
    box-shadow: 0 0 4px 0 ${opacify(GreyColors.Grey070, 0.1)};
    @media (prefers-color-scheme: dark) {
      box-shadow: none;
    }
  `,
  [ShadowColor.Thin_minus2y_4b]: css`
    box-shadow: 0 -2px 4px 0 ${opacify(GreyColors.Grey070, 0.1)};
    @media (prefers-color-scheme: dark) {
      box-shadow: none;
    }
  `,
  [ShadowColor.Thin_2y_4b]: css`
    box-shadow: 0 2px 4px 0 ${opacify(GreyColors.Grey070, 0.1)};
    @media (prefers-color-scheme: dark) {
      box-shadow: none;
    }
  `,
  [ShadowColor.Thin_0y_8b]: css`
    box-shadow: 0 0 8px 0 ${opacify(GreyColors.Grey070, 0.1)};
    @media (prefers-color-scheme: dark) {
      box-shadow: none;
    }
  `,
  [ShadowColor.Thin_2y_8b]: css`
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
