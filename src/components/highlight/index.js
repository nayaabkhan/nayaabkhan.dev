import PropTypes from 'prop-types'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import style from 'react-syntax-highlighter/dist/cjs/styles/prism/base16-ateliersulphurpool.light'

const Highlight = ({ children, className, metaString, ...rest }) => {
  const language = className.replace(/language-/, '')

  return (
    <SyntaxHighlighter
      style={style}
      showLineNumbers
      language={language}
      className={className}
      {...rest}
    >
      {children}
    </SyntaxHighlighter>
  )
}

Highlight.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
  metaString: PropTypes.string,
}

Highlight.defaultProps = {
  className: '',
}

export default Highlight
