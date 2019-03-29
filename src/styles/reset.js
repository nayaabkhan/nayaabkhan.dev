import css from 'styled-jsx/css'

import * as colors from '../theme/colors'
import * as typography from '../theme/typography'

const reset = css.global`
  @import 'responsive.css';

  *, *::before, *::after {
    box-sizing: border-box;
  }

  html {
    line-height: 1.6;
    font-size: 16px;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    background: url(/static/images/texture.jpg) ${colors.background} repeat;
    background-size: 100px 100px;
    background-blend-mode: multiply;

    font-family: ${typography.oldStandardTT};
  }

  a {
    color: inherit;
    text-decoration: none;

    &:hover {
      text-decoration: underline dotted;
    }
  }

  h1, h2, h3, h4, h5 {
    line-height: 1.2;
    color: ${colors.muted};
    font-family: ${typography.harmanRetro};
    text-align: center;
  }

  h1 {
    font-family: ${typography.harmanRetroInline};
    font-size: 2.5em;
    letter-spacing: -0.05em;

    @media (--viewport-medium) {
      font-size: 3rem;
    }
  }

  h2 {
    font-size: 1.5rem;

    @media (--viewport-medium) {
      font-size: 2rem;
    }
  }

  h3 {
    font-size: 1rem;

    @media (--viewport-medium) {
      font-size: 1.5rem;
    }
  }

  pre,
  code {
    font-family: source-code-pro, Monaco, Consolas, 'Courier New', monospace;
  }
`

export default reset
