import React from 'react'
import App, { Container } from 'next/app'
import Head from 'next/head'
import Layout from '../src/components/layout'
import { CommonStyle, FontFace } from '../src/components/global-style'
import { title as siteTitle } from '../src/config/site.json'

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    const { title } = Component

    return (
      <>
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />

          <link
            href="https://fonts.googleapis.com/css?family=Old+Standard+TT:400,400i,700"
            rel="stylesheet"
          />

          <FontFace />
          <CommonStyle />

          <title>{`${siteTitle}${title ? ` ・ ${title}` : ''}`}</title>
        </Head>

        <Container>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Container>
      </>
    )
  }
}
