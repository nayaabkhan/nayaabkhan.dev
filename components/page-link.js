import Link from 'next/link'
import styled from 'styled-components'

const StyledLink = styled.a`
  text-decoration: none;
  cursor: pointer;
  color: green;
`

const PageLink = ({ href, children }) => (
  <Link href={href} passHref>
    <StyledLink>{children}</StyledLink>
  </Link>
)

export default PageLink
