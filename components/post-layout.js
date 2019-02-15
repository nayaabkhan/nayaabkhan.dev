import Layout from './layout'

const PostLayout = ({ postData, children }) => (
  <Layout>
    <h2>{postData.title}</h2>
    <small>{postData.publishedOn}</small>

    <div>{children}</div>
  </Layout>
)

export default PostLayout
