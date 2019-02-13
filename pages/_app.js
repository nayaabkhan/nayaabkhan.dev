import React from 'react'
import App, { Container } from 'next/app'
import { withRouter } from 'next/router'
import { RouterContext } from '../src/hooks/useRouter'
import Layout from '../src/components/layout'
import GlobalStyles from '../src/theme/global-styles'

const InjectRouterContext = withRouter(({ router, children }) => {
  return (
    <RouterContext.Provider value={router}>{children}</RouterContext.Provider>
  )
})

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <>
        <GlobalStyles />
        <Container>
          <InjectRouterContext>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </InjectRouterContext>
        </Container>
      </>
    )
  }
}
