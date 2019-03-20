import PropTypes from 'prop-types'
import * as spacings from '../../theme/spacings'

const Wrapper = ({ children }) => (
  <>
    <div>{children}</div>

    <style jsx>{`
      div {
        margin: auto;
        padding: 0 ${spacings.large};
        max-width: 680px;
      }
    `}</style>
  </>
)

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Wrapper
