import Header from './header'

const Layout = ({ children }) => (
  <div>
    <Header />
    <h1>Welcome</h1>
    {children}
  </div>
)

export default Layout
