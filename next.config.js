module.exports = {
  webpack: (config, options) => {
    config.module.rules.push({
      test: /normalize.css/,
      use: ['raw-loader'],
    })

    return config
  },
}
