import PropTypes from 'prop-types'
import Link from 'next/link'

import Wrapper from '../wrapper'
import * as spacings from '../../theme/spacings'
import * as colors from '../../theme/colors'
import { title } from '../../../site'

const LinkWithPrefetch = ({ children, ...rest }) => (
  <Link prefetch {...rest}>
    {children}
  </Link>
)

LinkWithPrefetch.propTypes = {
  children: PropTypes.node,
}

const Header = () => (
  <>
    <header>
      <Wrapper>
        <nav>
          <ul>
            <li>
              <LinkWithPrefetch href="/">
                <a>
                  <h1>{title}</h1>
                </a>
              </LinkWithPrefetch>
            </li>
            <li>
              <Link prefetch href="/about">
                <a>About</a>
              </Link>
            </li>
            <li>
              <Link prefetch href="/writing">
                <a>Writing</a>
              </Link>
            </li>
            <li>
              <Link prefetch href="/design">
                <a>Design</a>
              </Link>
            </li>
          </ul>
        </nav>
      </Wrapper>
    </header>

    <style jsx>{`
      header {
        margin: ${spacings.large} 0;
      }

      ul {
        margin: 0;
        padding: 0;
        position: relative;
        list-style: none;
        text-align: center;
      }

      @media screen and (min-width: 767px) {
        ul {
          text-align: right;
        }
      }

      li {
        display: inline-block;
        margin-right: ${spacings.normal};
        color: ${colors.muted};
      }

      li:first-child {
        width: 100%;
        margin-bottom: ${spacings.small};
      }

      @media screen and (min-width: 767px) {
        li:first-child {
          position: absolute;
          left: 0;
          width: auto;
          margin-bottom: 0;
        }
      }

      li:last-child {
        margin-right: 0;
      }

      a {
        display: block;
        color: inherit;
      }

      a:hover {
        color: ${colors.primary};
      }

      h1 {
        margin: 0;
        font-family: 'Harman Retro';
        font-size: inherit;
        color: ${colors.primary};
      }
    `}</style>
  </>
)

export default Header
