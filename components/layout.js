import Header from './header'
import styled from 'styled-components'
import GlobalStyle from './global-style'

const Wrapper = styled.div`
  margin: auto;
  max-width: 600px;
`

const Layout = ({ children }) => (
  <Wrapper>
    <GlobalStyle />
    <Header />
    {children}
  </Wrapper>
)

export default Layout
