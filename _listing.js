const removeIndexFile = path => path.replace(/index\.mdx$/, '')
const removeTrailingSlash = path => path.replace(/^(.+?)\/*?$/, '$1')

function importAll(r) {
  return r.keys().map(k => {
    const href = removeTrailingSlash(removeIndexFile(k))
    const slug = href.substring(href.lastIndexOf('/') + 1)
    const meta = r(k).meta

    return {
      href,
      slug,
      ...meta,
    }
  })
}

const posts = importAll(require.context('./pages', true, /\.mdx$/))

export default posts
