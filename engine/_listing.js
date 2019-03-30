const fs = require('fs')
const glob = require('glob')

const removePagesPath = path => path.replace('./pages', '')
const removeIndexFile = path => path.replace(/index\.(mdx?|js)$/, '')
const removeTrailingSlash = path => path.replace(/^(.+?)\/*?$/, '$1')

const metaRE = /export\s+const\s+meta\s+=\s+(\{(\n|.)*?\n\})/
const posts = glob.sync('./pages/writing/**/*.{mdx,md,js}')

module.exports = posts
  .map(post => {
    const contents = fs.readFileSync(post, 'utf8')

    const href = removePagesPath(removeTrailingSlash(removeIndexFile(post)))
    const slug = href.substring(href.lastIndexOf('/') + 1)

    const metaText = metaRE.exec(contents)
    if (!metaText || typeof metaText[1] !== 'string') {
      throw new Error(`${post} needs to export const meta = {}`)
    }

    const meta = Function('"use strict";return (' + metaText[1] + ')')()

    return {
      href,
      slug,
      ...meta,
    }
  })
  .sort((a, b) => new Date(b.date) - new Date(a.date))
