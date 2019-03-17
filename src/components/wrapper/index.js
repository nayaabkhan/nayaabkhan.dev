import PropTypes from 'prop-types'
import styled from 'styled-components'
import * as spacings from '../../theme/spacings'

const Column = styled.div`
  margin: auto;
  padding: 0 ${spacings.large};
  max-width: 680px;
`

const Wrapper = ({ children }) => <Column>{children}</Column>

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Wrapper
