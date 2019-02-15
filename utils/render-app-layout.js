import Layout from '../components/layout'
import PostLayout from '../components/post-layout'

export function renderLayout(props, state) {
  const { Component } = props
  const { postData } = state
  const { layout } = postData

  if (!layout || !props.router) return

  switch (layout) {
    case 'post':
      return (
        <PostLayout postData={postData}>
          <Component {...props} postData={postData} />
        </PostLayout>
      )

    case 'page':
    default:
      return (
        <Layout>
          <Component {...props} />
        </Layout>
      )
  }
}
