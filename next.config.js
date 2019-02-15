const images = require('remark-images')
const emoji = require('remark-emoji')
const slug = require('remark-slug')
const rehypePrism = require('@mapbox/rehype-prism')
const withMDX = require('@zeit/next-mdx')({
  extension: /.mdx?$/,
  options: {
    mdPlugins: [images, emoji, slug],
    hastPlugins: [rehypePrism]
  }
})

module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
  webpack: config => {
    config.module.rules.push({
      test: /.toml$/,
      use: ['toml-loader']
    })

    return config
  }
})
