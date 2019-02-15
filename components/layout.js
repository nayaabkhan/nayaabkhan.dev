import Header from './header'
import styled from 'styled-components'

const Wrapper = styled.div`
  margin: auto;
  max-width: 600px;
`

const Layout = ({ children }) => (
  <Wrapper>
    <Header />
    {children}
  </Wrapper>
)

export default Layout
