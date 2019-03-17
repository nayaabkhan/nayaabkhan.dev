import { createGlobalStyle } from 'styled-components'
import normalize from 'normalize.css'

import * as colors from '../../theme/colors'

const CommonStyle = createGlobalStyle`
  ${normalize};

  * {
    box-sizing: border-box;
  }

  html {
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    background: url(/static/images/texture.jpg) ${colors.background} repeat;
    background-size: 100px 100px;
    background-blend-mode: multiply;
    color: ${colors.text};

    font-family: 'Old Standard TT', Georgia, 'Times New Roman', Times, serif;
    font-size: 16px;
  }

  a {
    position: relative;
    text-decoration: none;

    &:hover {
      text-decoration: underline dotted;
    }
  }

  h1, h2, h3, h4, h5 {
    line-height: 1.2;
    color: ${colors.primary};
  }

  h1 {
    font-family: 'Harman Retro Inline';
    font-size: 3em;
    letter-spacing: -0.05em;
  }
`

export default CommonStyle
