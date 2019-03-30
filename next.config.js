const withOptimizedImages = require('next-optimized-images')
const withMDX = require('@zeit/next-mdx')()
const withBundleAnalyzer = require('@zeit/next-bundle-analyzer')

module.exports = withMDX(
  withOptimizedImages(
    withBundleAnalyzer({
      analyzeServer: ['server', 'both'].includes(process.env.BUNDLE_ANALYZE),
      analyzeBrowser: ['browser', 'both'].includes(process.env.BUNDLE_ANALYZE),
      bundleAnalyzerConfig: {
        server: {
          analyzerMode: 'static',
          reportFilename: '../bundles/server.html',
        },
        browser: {
          analyzerMode: 'static',
          reportFilename: '../bundles/client.html',
        },
      },

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
)
