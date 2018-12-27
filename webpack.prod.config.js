const webpackConfig = require('./webpack.config')
const _merge = require('lodash/merge')

module.exports = _merge(webpackConfig, {
  mode: 'production',
  output: {
    publicPath: 'dist/js/'
  }
})
