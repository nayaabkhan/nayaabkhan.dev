import PropTypes from 'prop-types'
import { MDXProvider } from '@mdx-js/tag'

import Wrapper from '../wrapper'
import Highlight from '../highlight'
import PageTitle from '../page-title'

const components = {
  // eslint-disable-next-line react/display-name
  pre: props => <div {...props} />,
  code: Highlight,
}

const PostLayout = ({ metadata: { title, date }, children }) => (
  <Wrapper>
    <MDXProvider components={components}>
      <article>
        <header>
          <PageTitle date={date}>{title}</PageTitle>
        </header>

        <main>{children}</main>
      </article>
    </MDXProvider>
  </Wrapper>
)

PostLayout.propTypes = {
  metadata: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }),
  children: PropTypes.node.isRequired,
}

export default PostLayout
