import PropTypes from 'prop-types'
import styled from 'styled-components'
import Header from '../header'
import Footer from '../footer'

const Layout = ({ children }) => (
  <>
    <Header />

    <main>{children}</main>

    <Footer />
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
