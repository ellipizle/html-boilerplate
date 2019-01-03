const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const path = require('path')
const webpack = require('webpack')
const glob = require('glob-all')

module.exports = {
  mode: 'development',
  entry: {
    app: [
      './src/js/app.js',
      ...glob.sync(['./app/views/**/*.js', '!./app/views/**/_*.js'])
    ],
    'template-stack': './src/js/template-stack.js'
  },
  output: {
    path: path.resolve(__dirname, 'public/dist/js'),
    chunkFilename: '[name].[hash].js',
    filename: '[name].js',
    publicPath: 'dist/js/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(bower_components|node_modules)/,
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      },
      {
        test: /\.worker\.js$/,
        use: {
          loader: 'worker-loader',
          options: {
            inline: true,
            fallback: false
          }
        }
      }
    ]
  },
  plugins: [
    new webpack.IgnorePlugin(/vertx/),
    new BundleAnalyzerPlugin({
      openAnalyzer: false
    })
  ]
}
