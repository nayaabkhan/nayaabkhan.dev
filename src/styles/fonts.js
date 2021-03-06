import css from 'styled-jsx/css'

const fonts = css.global`
  @font-face {
    font-family: 'Harman Retro';
    font-weight: 400;
    font-style: normal;
    font-display: swap;
    src: local('Harman Retro'), local('Harman-Retro'),
      url('/static/fonts/harman-retro.woff') format('woff'),
      url('/static/fonts/harman-retro.woff2') format('woff2');
  }

  @font-face {
    font-family: 'Harman Retro Inline';
    font-weight: 700;
    font-style: normal;
    font-display: swap;
    src: local('Harman Retro Inline'), local('Harman-RetroInline'),
      url('/static/fonts/harman-retro-inline.woff') format('woff'),
      url('/static/fonts/harman-retro-inline.woff2') format('woff2');
  }

  @font-face {
    font-family: 'Harman Simple';
    font-weight: 700;
    font-style: normal;
    font-display: swap;
    src: local('Harman Simple'), local('Harman-Simple'),
      url('/static/fonts/harman-simple.woff') format('woff'),
      url('/static/fonts/harman-simple.woff2') format('woff2');
  }
`

export default fonts
