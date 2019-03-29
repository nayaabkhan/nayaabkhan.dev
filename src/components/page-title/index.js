import PropTypes from 'prop-types'

import * as spacings from '../../theme/spacings'
import * as colors from '../../theme/colors'
import * as typography from '../../theme/typography'

const introPseudoElement = `
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;

  padding: 0 ${spacings.small};

  font-family: ${typography.harmanSimple};
  font-weight: normal;
  font-size: 1rem;

  white-space: nowrap;
  letter-spacing: normal;

  background: url(/static/images/texture.jpg) ${colors.background} repeat;
  background-size: 100px 100px;
  background-blend-mode: multiply;
  color: ${colors.muted};
`

const PageTitle = ({ children, date }) => (
  <>
    <h1>{children}</h1>

    <style jsx>{`
      @import 'responsive.css';

      h1 {
        position: relative;
        margin: ${spacings.xLarge} auto;
        padding: ${spacings.normal};
        border: 1px solid ${colors.accent};
        text-align: center;

        @media (--viewport-medium) {
          width: 75%;
        }
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

      h1::before {
        ${introPseudoElement};
        content: '${date.toLocaleDateString()}';
        top: -0.7rem;
      }
    `}</style>
  </>
)

PageTitle.propTypes = {
  children: PropTypes.node.isRequired,
  date: PropTypes.any,
}

PageTitle.defaultProps = {
  date: new Date(),
}

export default PageTitle
