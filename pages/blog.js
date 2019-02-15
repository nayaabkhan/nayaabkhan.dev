import Link from 'next/link'
import site from '../site.toml'

export const meta = {
  title: 'Programming Posts',
  tags: ['Next.js', 'MDX'],
  layout: 'page',
  publishDate: '2011-01-01',
  modifiedDate: false,
  seoDescription:
    'All of your blog posts are listed on this page, unless a post has the meta property `exclude: true`.'
}

const BlogPage = ({ allData }) => (
  <>
    <h2>{site.title} / Blog</h2>
    <ul>
      {allData
        .filter(content => content.type == 'post')
        .map(post => (
          <li key={post.name}>
            <Link prefetch href={`/blog/${post.name}`}>
              <a>{post.title}</a>
            </Link>
          </li>
        ))}
    </ul>
  </>
)

export default BlogPage
