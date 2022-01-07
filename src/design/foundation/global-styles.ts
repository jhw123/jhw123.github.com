import { css } from '@emotion/react'
import { FillColor, FillColors, ShadowColor, ShadowColors, TextColor, TextColors } from './semantic-colors'
import { Typeface, Typefaces } from './typefaces'

export const GlobalStyles = css`
  html {
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    box-sizing: border-box;
    overflow-y: scroll;
  }

  body {
    ${TextColors[TextColor.Primary]};
    ${Typefaces[Typeface.Regular16]};
    ${FillColors[FillColor.Base]};
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: hsla(0, 0%, 0%, 0.8);
    font-weight: normal;
    word-wrap: break-word;
    font-kerning: normal;
    font-size: 112.5%;
    font-family: Arial, Helvetica, sans-serif;
    -moz-font-feature-settings: 'kern', 'liga', 'clig', 'calt';
    -ms-font-feature-settings: 'kern', 'liga', 'clig', 'calt';
    -webkit-font-feature-settings: 'kern', 'liga', 'clig', 'calt';
    font-feature-settings: 'kern', 'liga', 'clig', 'calt';
  }

  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  main,
  menu,
  nav,
  section,
  summary {
    display: block;
  }

  audio,
  canvas,
  progress,
  video {
    display: inline-block;
  }

  audio:not([controls]) {
    display: none;
    height: 0;
  }

  progress {
    vertical-align: baseline;
  }

  [hidden],
  template {
    display: none;
  }

  a {
    color: inherit;
    text-decoration: underline;
    background-color: transparent;
    -webkit-text-decoration-skip: objects;
  }

  a:active,
  a:hover {
    outline-width: 0;
  }

  abbr[title] {
    border-bottom: 1px dotted hsla(0, 0%, 0%, 0.5);
    cursor: help;
    text-decoration: none;
  }

  b,
  strong {
    font-weight: inherit;
    font-weight: bolder;
  }

  dfn {
    font-style: italic;
  }

  h1 {
    padding: 0;
    margin: 0;
    color: inherit;
    font-weight: bold;
    text-rendering: optimizeLegibility;
    font-size: 2.25rem;
    line-height: 1.1;
  }

  mark {
    background-color: #ff0;
    color: #000;
  }

  small {
    font-size: 80%;
  }

  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }

  sub {
    bottom: -0.25em;
  }

  sup {
    top: -0.5em;
  }

  img {
    border-style: none;
    max-width: 100%;
    padding: 0;
    margin: 0 0 1.45rem;
  }

  svg:not(:root) {
    overflow: hidden;
  }

  code,
  kbd,
  pre,
  samp {
    font-family: monospace;
    font-size: 1em;
  }

  figure {
    padding: 0;
    margin: 0;

    img {
      ${ShadowColors[ShadowColor.Thin0y8b]};
      border-style: none;
      padding: 1rem;
      min-width: 316px;
      max-width: 400px;
      width: 70%;
      display: block;
      margin: 0 auto 1rem;
    }

    img + figcaption {
      ${Typefaces[Typeface.Regular12]};
      ${TextColors[TextColor.Secondary]};
      text-align: center;
      padding: 0 1rem;
      margin-bottom: 1.45rem;
    }
  }

  hr {
    box-sizing: content-box;
    overflow: visible;
    padding: 0;
    margin: 0;
    background: hsla(0, 0%, 0%, 0.2);
    border: none;
    height: 1px;
  }

  button,
  input,
  optgroup,
  select,
  textarea {
    font: inherit;
    margin: 0;
  }

  optgroup {
    font-weight: 700;
  }

  button,
  input {
    overflow: visible;
  }

  button,
  select {
    text-transform: none;
  }

  [type='reset'],
  [type='submit'],
  button,
  html [type='button'] {
    -webkit-appearance: button;
  }

  [type='button']::-moz-focus-inner,
  [type='reset']::-moz-focus-inner,
  [type='submit']::-moz-focus-inner,
  button::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }

  [type='button']:-moz-focusring,
  [type='reset']:-moz-focusring,
  [type='submit']:-moz-focusring,
  button:-moz-focusring {
    outline: 1px dotted ButtonText;
  }

  fieldset {
    border: 1px solid silver;
    padding: 0;
    margin: 0;
  }

  legend {
    box-sizing: border-box;
    color: inherit;
    display: table;
    max-width: 100%;
    padding: 0;
    white-space: normal;
  }

  textarea {
    overflow: auto;
  }

  [type='checkbox'],
  [type='radio'] {
    box-sizing: border-box;
    padding: 0;
  }

  [type='number']::-webkit-inner-spin-button,
  [type='number']::-webkit-outer-spin-button {
    height: auto;
  }

  [type='search'] {
    -webkit-appearance: textfield;
    outline-offset: -2px;
  }

  [type='search']::-webkit-search-cancel-button,
  [type='search']::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  ::-webkit-input-placeholder {
    color: inherit;
    opacity: 0.54;
  }

  ::-webkit-file-upload-button {
    -webkit-appearance: button;
    font: inherit;
  }

  * {
    box-sizing: inherit;
  }

  *:before {
    box-sizing: inherit;
  }

  *:after {
    box-sizing: inherit;
  }

  h2 {
    padding: 0;
    margin: 0 0 0.5rem;
    color: inherit;
    font-weight: bold;
    text-rendering: optimizeLegibility;
    font-size: 1.62671rem;
    line-height: 1.1;
  }

  h3 {
    padding: 0;
    margin: 0 0 0.75rem;
    color: inherit;
    font-weight: bold;
    text-rendering: optimizeLegibility;
    font-size: 1.38316rem;
    line-height: 1.1;
  }

  h4 {
    padding: 0;
    margin: 0 0 0.7rem;
    color: inherit;
    font-weight: bold;
    text-rendering: optimizeLegibility;
    font-size: 1rem;
    line-height: 1.1;
  }

  h5 {
    padding: 0;
    margin: 0 0 0.7rem;
    color: inherit;
    font-weight: bold;
    text-rendering: optimizeLegibility;
    font-size: 0.85028rem;
    line-height: 1.1;
  }

  h6 {
    padding: 0;
    margin: 0 0 0.5rem;
    color: inherit;
    font-weight: bold;
    text-rendering: optimizeLegibility;
    font-size: 0.78405rem;
    line-height: 1.1;
  }

  hgroup {
    padding: 0;
    margin: 0;
  }

  ul {
    padding-left: 24px;
    margin: 0;
    list-style-position: outside;
    list-style-image: none;
  }

  ol {
    padding: 0;
    margin: 0;
    list-style-position: outside;
    list-style-image: none;
  }

  dl {
    padding: 0;
    margin: 0;
  }

  dd {
    padding: 0;
    margin: 0;
  }

  p {
    padding: 0;
    margin: 0 0 1.45rem;
  }

  pre {
    margin: 0;
    font-size: 0.85rem;
    line-height: 1.42;
    background: hsla(0, 0%, 0%, 0.04);
    border-radius: 3px;
    overflow: auto;
    word-wrap: normal;
    padding: 0;
  }

  table {
    padding: 0;
    margin: 0;
    font-size: 1rem;
    line-height: 1.45rem;
    border-collapse: collapse;
    width: 100%;
  }

  blockquote {
    padding: 0;
    margin: 0;
  }

  form {
    padding: 0;
    margin: 0;
  }

  noscript {
    padding: 0;
    margin: 0;
  }

  iframe {
    padding: 0;
    margin: 0;
  }

  address {
    padding: 0;
    margin: 0;
    font-style: normal;
  }

  b {
    font-weight: bold;
  }

  strong {
    font-weight: bold;
  }

  dt {
    font-weight: bold;
  }

  th {
    font-weight: bold;
  }

  li {
    margin-bottom: 0.5rem;
  }

  ol li {
    padding-left: 0;
  }

  ul li {
    padding-left: 4px;
  }

  li > ol {
    margin-left: 1.45rem;
    margin-bottom: calc(1.45rem / 2);
    margin-top: calc(1.45rem / 2);
  }

  li > ul {
    margin-left: 1.45rem;
    margin-bottom: calc(1.45rem / 2);
    margin-top: calc(1.45rem / 2);
  }

  blockquote *:last-child {
    margin-bottom: 0;
  }

  li *:last-child {
    margin-bottom: 0;
  }

  p *:last-child {
    margin-bottom: 0;
  }

  li > p {
    margin-bottom: calc(1.45rem / 2);
  }

  code {
    font-size: 0.85rem;
    line-height: 1.45rem;
  }

  kbd {
    font-size: 0.85rem;
    line-height: 1.45rem;
  }

  samp {
    font-size: 0.85rem;
    line-height: 1.45rem;
  }

  abbr {
    border-bottom: 1px dotted hsla(0, 0%, 0%, 0.5);
    cursor: help;
  }

  acronym {
    border-bottom: 1px dotted hsla(0, 0%, 0%, 0.5);
    cursor: help;
  }

  thead {
    text-align: left;
  }

  td,
  th {
    text-align: left;
    border-bottom: 1px solid hsla(0, 0%, 0%, 0.12);
    font-feature-settings: 'tnum';
    -moz-font-feature-settings: 'tnum';
    -ms-font-feature-settings: 'tnum';
    -webkit-font-feature-settings: 'tnum';
    padding-left: 0.96667rem;
    padding-right: 0.96667rem;
    padding-top: 0.725rem;
    padding-bottom: calc(0.725rem - 1px);
  }

  th:first-of-type,
  td:first-of-type {
    padding-left: 0;
  }

  th:last-of-type,
  td:last-of-type {
    padding-right: 0;
  }

  tt,
  code {
    background-color: hsla(0, 0%, 0%, 0.04);
    border-radius: 3px;
    font-family: 'SFMono-Regular', Consolas, 'Roboto Mono', 'Droid Sans Mono', 'Liberation Mono', Menlo, Courier,
      monospace;
    padding: 0.2em 0;
  }

  pre code {
    background: none;
    line-height: 1.42;
  }

  code:before,
  code:after,
  tt:before,
  tt:after {
    letter-spacing: -0.2em;
    content: ' ';
  }

  pre code:before,
  pre code:after,
  pre tt:before,
  pre tt:after {
    content: '';
  }

  @media only screen and (max-width: 480px) {
    html {
      font-size: 100%;
    }
  }
`
