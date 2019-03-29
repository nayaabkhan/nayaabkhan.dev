import PropTypes from 'prop-types'
import PostLayout from '../layout/post'

const withPost = metadata => {
  const Wrapper = ({ children }) => (
    <PostLayout metadata={metadata}>{children}</PostLayout>
  )

  Wrapper.propTypes = {
    children: PropTypes.node.isRequired,
  }

  return Wrapper
}

export default withPost
