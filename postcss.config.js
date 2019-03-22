module.exports = {
  plugins: [
    require('autoprefixer'),
    require('postcss-nested'),
    require('postcss-import')({ path: './src/styles' }),
    require('postcss-custom-media'),
  ],
}
