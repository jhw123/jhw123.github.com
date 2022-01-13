import { css } from '@emotion/react'

export enum Typeface {
  Bold32 = 'Bold32',
  Bold28 = 'Bold28',
  Bold24 = 'Bold24',
  Bold22 = 'Bold22',
  Bold18 = 'Bold18',
  Bold16 = 'Bold16',
  Bold14 = 'Bold14',
  Bold12 = 'Bold12',
  Regular20 = 'Regular20',
  Regular18 = 'Regular18',
  Regular16 = 'Regular16',
  Regular14 = 'Regular14',
  Regular12 = 'Regular12',
  Regular10 = 'Regular10',
}

export const Typefaces = {
  [Typeface.Bold32]: css`
    font-size: 1.77778rem;
    font-weight: bold;
    line-height: 1.7;
  `,
  [Typeface.Bold28]: css`
    font-size: 1.55556rem;
    font-weight: bold;
    line-height: 1.7;
  `,
  [Typeface.Bold24]: css`
    font-size: 1.33333rem;
    font-weight: bold;
    line-height: 1.7;
  `,
  [Typeface.Bold22]: css`
    font-size: 1.22222rem;
    font-weight: bold;
    line-height: 1.7;
  `,
  [Typeface.Bold18]: css`
    font-size: 1rem;
    font-weight: bold;
    line-height: 1.7;
  `,
  [Typeface.Bold16]: css`
    font-size: 0.88889rem;
    font-weight: bold;
    line-height: 1.7;
  `,
  [Typeface.Bold14]: css`
    font-size: 0.77778rem;
    font-weight: bold;
    line-height: 1.7;
  `,
  [Typeface.Bold12]: css`
    font-size: 0.66667rem;
    font-weight: bold;
    line-height: 1.7;
  `,
  [Typeface.Regular20]: css`
    font-size: 1.11111rem;
    font-weight: normal;
    line-height: 1.5;
  `,
  [Typeface.Regular18]: css`
    font-size: 1rem;
    font-weight: normal;
    line-height: 1.5;
  `,
  [Typeface.Regular16]: css`
    font-size: 0.88889rem;
    font-weight: normal;
    line-height: 1.5;
  `,
  [Typeface.Regular14]: css`
    font-size: 0.77778rem;
    font-weight: normal;
    line-height: 1.5;
  `,
  [Typeface.Regular12]: css`
    font-size: 0.66667rem;
    font-weight: normal;
    line-height: 1.5;
  `,
  [Typeface.Regular10]: css`
    font-size: 0.55556rem;
    font-weight: normal;
    line-height: 1.5;
  `,
}