import Link from 'next/link'
import styled from 'styled-components'

import Wrapper from '../wrapper'
import { media } from '../../theme/responsive'
import * as spacings from '../../theme/spacings'
import * as colors from '../../theme/colors'
import { title } from '../../config/site.json'

const FooterRoot = styled.footer`
  margin: ${spacings.large} 0;
  font-size: 0.9em;
`

const Links = styled.ul`
  margin: 0;
  padding: 0;
  position: relative;
  list-style: none;
  text-align: center;

  li {
    position: relative;
    display: inline-block;

    &:first-child {
      width: 100%;

      ${media.medium`margin-right: ${spacings.normal}; width: auto;`}
    }

    &:not(:first-child) {
      margin-right: ${spacings.normal};

      &::after {
        content: '・';
        position: absolute;
        bottom: 0;
        right: -${spacings.normal};
        color: ${colors.muted};
      }
    }

    &:last-child {
      margin-right: 0;

      ::after {
        content: '';
      }
    }
  }

  a {
    display: block;
    color: ${colors.muted};

    &:hover {
      color: ${colors.primary};
    }
  }
`

const Footer = () => (
  <FooterRoot>
    <Wrapper>
      <Links>
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
      </Links>
    </Wrapper>
  </FooterRoot>
)

export default Footer
