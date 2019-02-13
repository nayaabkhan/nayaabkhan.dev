import styled from 'styled-components'
import Container from '../container'
import * as colors from '../../theme/colors'
import * as spacings from '../../theme/spacings'

const Wrapper = styled.footer`
  margin: ${spacings.regular};
  text-align: center;
  font-size: 12px;
  color: ${colors.bodyLight};
`

const Footer = () => (
  <Wrapper>
    <Container>© Copyright {new Date().getFullYear()}</Container>
  </Wrapper>
)

export default Footer
