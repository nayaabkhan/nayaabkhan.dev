import { createGlobalStyle } from 'styled-components'
import * as colors from './colors'
import * as typography from './typography'

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    font-family: sans-serif;
    font-size: ${typography.fontSize};
    line-height: 1.66;
    color: ${colors.body};
  }
`

export default GlobalStyles
