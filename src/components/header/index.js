import Link from 'next/link'
import styled from 'styled-components'

import Wrapper from '../wrapper'
import { media } from '../../theme/responsive'
import * as spacings from '../../theme/spacings'
import * as colors from '../../theme/colors'
import { title } from '../../config/site.json'

const HeaderRoot = styled.header`
  margin: ${spacings.large} 0;
`

const NavList = styled.ul`
  margin: 0;
  padding: 0;
  position: relative;
  list-style: none;
  text-align: center;

  ${media.medium`text-align: right`}

  li {
    display: inline-block;
    margin-right: ${spacings.normal};
    color: ${colors.muted};

    &:first-child {
      width: 100%;
      margin-bottom: ${spacings.small};

      ${media.medium`position: absolute; left: 0; width: auto; margin-bottom: 0`}
    }

    &:last-child {
      margin-right: 0;
    }
  }

  a {
    display: block;
    color: inherit;

    &:hover {
      color: ${colors.primary};
    }
  }
`

const Logo = styled.h1`
  margin: 0;
  font-family: 'Harman Retro';
  font-size: inherit;
  color: ${colors.primary};
`

const Header = () => (
  <HeaderRoot>
    <Wrapper>
      <nav>
        <NavList>
          <li>
            <Link prefetch href="/">
              <a>
                <Logo>{title}</Logo>
              </a>
            </Link>
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
        </NavList>
      </nav>
    </Wrapper>
  </HeaderRoot>
)

export default Header
