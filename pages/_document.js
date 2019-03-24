import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />

          <meta
            name="google-site-verification"
            content="04CqAJZUXsf6XyAoyl-jsWHKI0BtpyMKnj_2Ck44pcw"
          />

          {/* Code snippet to speed up Google Fonts rendering: googlefonts.3perf.com */}
          <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="https://fonts.googleapis.com/css?family=Old+Standard+TT:400,400i,700"
            as="fetch"
            crossOrigin="anonymous"
          />
          <script
            type="text/javascript"
            dangerouslySetInnerHTML={{
              __html: `
            !function(e,n,t){"use strict";var o="https://fonts.googleapis.com/css?family=Old+Standard+TT:400,400i,700",r="__3perf_googleFontsStylesheet";function c(e){(n.head||n.body).appendChild(e)}function a(){var e=n.createElement("link");e.href=o,e.rel="stylesheet",c(e)}function f(e){if(!n.getElementById(r)){var t=n.createElement("style");t.id=r,c(t)}n.getElementById(r).innerHTML=e}e.FontFace&&e.FontFace.prototype.hasOwnProperty("display")?(t[r]&&f(t[r]),fetch(o).then(function(e){return e.text()}).then(function(e){return e.replace(/@font-face {/g,"@font-face{font-display:swap;")}).then(function(e){return t[r]=e}).then(f).catch(a)):a()}(window,document,localStorage);
            `,
            }}
          />
          {/* Code snippet to speed up Google Fonts rendering: googlefonts.3perf.com */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
