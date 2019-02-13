import styled from 'styled-components'
import Header from '../header'
import Footer from '../footer'
import Container from '../container'
import * as spacings from '../../theme/spacings'

const Main = styled.main`
  margin: ${spacings.xLarge};
`

const Layout = ({ children }) => (
  <>
    <Header />
    <Main>
      <Container>{children}</Container>
    </Main>
    <Footer />
  </>
)

export default Layout
