const images = require('remark-images')
const emoji = require('remark-emoji')
const slug = require('remark-slug')

module.exports = {
  webpack: (config, {}) => {
    config.module.rules.push({
      test: /.mdx?$/,
      use: [
        'babel-loader',
        {
          loader: '@mdx-js/loader',
          options: {
            mdPlugins: [images, emoji, slug]
          }
        }
      ]
    })

    return config
  }
}
