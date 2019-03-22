import React from 'react'
import App, { Container } from 'next/app'
import Head from 'next/head'

import Layout from '../src/components/layout'

import normalize from 'normalize.css'
import fonts from '../src/styles/fonts'
import reset from '../src/styles/reset'

import { title as siteTitle } from '../site'

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    const { title } = Component

    return (
      <>
        <Head>
          <title>{`${siteTitle}${title ? ` ・ ${title}` : ''}`}</title>
        </Head>

        <Container>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Container>

        <style jsx global>
          {fonts}
        </style>
        <style jsx global>
          {normalize}
        </style>
        <style jsx global>
          {reset}
        </style>
      </>
    )
  }
}
