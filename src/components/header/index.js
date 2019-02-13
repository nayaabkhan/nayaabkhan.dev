import styled from 'styled-components'
import NavLink from './nav-link'
import Container from '../container'

const Wrapper = styled.header`
  height: 64px;
  display: flex;
  align-items: center;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.06);
`

const NavList = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Header = () => (
  <Wrapper>
    <Container>
      <nav aria-labelledby="primary-navigation">
        <NavList>
          <NavLink href="/">Home</NavLink>
          <NavLink href="/work">Work</NavLink>
          <NavLink href="/blog">Blog</NavLink>
          <NavLink href="/services">Services</NavLink>
          <NavLink href="/contact">Contact</NavLink>
        </NavList>
      </nav>
    </Container>
  </Wrapper>
)

export default Header
