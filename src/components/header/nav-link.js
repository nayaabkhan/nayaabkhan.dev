import Link from 'next/link'
import styled from 'styled-components'
import { useRouter } from '../../hooks'
import * as colors from '../../theme/colors'
import * as spacings from '../../theme/spacings'
import * as typography from '../../theme/typography'

const NavListItem = styled.li`
  list-style-type: none;
`

const StyledLink = styled.a`
  display: block;
  padding: ${spacings.regular};
  cursor: pointer;
  text-decoration: none;
  text-transform: uppercase;
  font-size: ${typography.fontSizeSmall};
  color: ${props => (props.isActive ? colors.body : colors.bodyLight)};

  &:hover {
    color: ${colors.body};
  }
`

const NavLink = ({ href, children }) => {
  const router = useRouter()
  const isActive = router.pathname === href

  return (
    <NavListItem>
      <Link href={href} passHref>
        <StyledLink isActive={isActive}>{children}</StyledLink>
      </Link>
    </NavListItem>
  )
}

export default NavLink
