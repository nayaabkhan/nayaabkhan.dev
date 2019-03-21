import Wrapper from '../src/components/wrapper'

import * as spacings from '../src/theme/spacings'
import * as colors from '../src/theme/colors'

const introPseudoElement = `
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;

  padding: 0 ${spacings.small};

  font-family: 'Harman Simple';
  font-size: 1rem;

  white-space: nowrap;
  letter-spacing: normal;

  background: url(/static/images/texture.jpg) ${colors.background} repeat;
  background-size: 100px 100px;
  background-blend-mode: multiply;
  color: ${colors.muted};
`

const IndexPage = () => (
  <>
    <Wrapper>
      <section>
        <h1>
          <span>Nayaab</span>&nbsp;<span>Khan</span>
        </h1>

        <p>
          Nayaab Khan is a Developer and UI & UX Designer from India. He helps
          businesses solve their problems through <strong>code</strong> and{' '}
          <strong>design</strong>.
        </p>
      </section>
    </Wrapper>

    <style jsx>{`
      section {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: ${spacings.xxLarge} 0;
        text-align: center;
      }

      h1 {
        position: relative;
        margin: 0 0 ${spacings.large};
        padding: ${spacings.normal};
        border: 1px solid ${colors.accent};
        font-size: 2.5rem;

        @media screen and (min-width: 767px) {
          font-size: 3rem;
        }
      }

      h1::before {
        ${introPseudoElement};
        content: 'Portfolio & Essays of';
        top: -0.7rem;
      }

      /* This is the second border. */
      h1::after {
        content: '';
        position: absolute;
        top: -4px;
        right: -4px;
        bottom: -4px;
        left: -4px;
        border: 1px solid ${colors.accent};
      }

      span {
        display: inline-block;
        position: relative;
      }

      span::after {
        ${introPseudoElement};
        bottom: -1.7rem;
      }

      /* Pronunciation for the name. */
      span:first-of-type::after {
        content: '(nä–yäb)';
      }

      /* Pronunciation for the surname. */
      span:last-of-type::after {
        content: '(khän)';
      }

      p {
        font-size: 1.125rem;
      }
    `}</style>
  </>
)

export default IndexPage
