import site from '../site.toml'

export const meta = {
  title: 'Next.js MDX Blog Kit',
  tags: ['Next.js', 'MDX'],
  layout: 'page',
  publishDate: '2011-01-01',
  modifiedDate: false,
  seoDescription: 'This is the home page.'
}

const IndexPage = () => (
  <>
    <h2>{site.title}</h2>
  </>
)

export default IndexPage
