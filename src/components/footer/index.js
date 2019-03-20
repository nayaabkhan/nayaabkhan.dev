import Link from 'next/link'
import Wrapper from '../wrapper'

import * as spacings from '../../theme/spacings'
import * as colors from '../../theme/colors'
import { title } from '../../../site'

const Footer = () => (
  <>
    <footer>
      <Wrapper>
        <ul>
          <li>
            © {new Date().getFullYear()} <strong>{title}</strong>
          </li>
          <li>
            <Link href="https://github.com/nayaabkhan/nayaabkhan.me">
              <a>View Source</a>
            </Link>
          </li>
          <li>
            <Link href="/rss">
              <a>RSS</a>
            </Link>
          </li>
          <li>
            <Link href="/newsletter">
              <a>Newsletter</a>
            </Link>
          </li>
        </ul>
      </Wrapper>
    </footer>

    <style jsx>{`
      footer {
        margin: ${spacings.large} 0;
        font-size: 0.9em;
      }

      ul {
        margin: 0;
        padding: 0;
        position: relative;
        list-style: none;
        text-align: center;
      }

      li {
        position: relative;
        display: inline-block;
      }

      li:first-child {
        width: 100%;
      }

      @media screen and (min-width: 767px) {
        li:first-child {
          margin-right: ${spacings.normal};
          width: auto;
        }
      }

      li:not(:first-child) {
        margin-right: ${spacings.normal};
      }

      li:not(:first-child)::after {
        content: '・';
        position: absolute;
        bottom: 0;
        right: -${spacings.normal};
        color: ${colors.muted};
      }

      li:last-child {
        margin-right: 0;
      }

      li:last-child::after {
        content: '';
      }

      a {
        display: block;
        color: ${colors.muted};
      }

      a:hover {
        color: ${colors.primary};
      }
    `}</style>
  </>
)

export default Footer
