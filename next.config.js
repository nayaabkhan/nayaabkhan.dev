const withOptimizedImages = require('next-optimized-images')
const withMDX = require('@zeit/next-mdx')()

module.exports = withMDX(
  withOptimizedImages({
    target: 'serverless',
    pageExtensions: ['js', 'jsx', 'md', 'mdx'],

    webpack: (config, { defaultLoaders }) => {
      config.module.rules.push({
        test: /\.css$/,
        use: [
          defaultLoaders.babel,
          {
            loader: require('styled-jsx/webpack').loader,
            options: {
              type: 'global',
            },
          },
        ],
      })

      return config
    },
  })
)
