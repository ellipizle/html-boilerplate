const path = require("path")
const webpack = require("webpack")
const glob = require("glob-all")

module.exports = {
  watch: true,
  mode: "development",
  entry: {
    "public/dist/js/app.js": [
      "./src/js/app.js",
      ...glob.sync("./app/views/**/*.js")
    ],
    "public/dist/js/template-stack.js": "./src/js/template-stack.js"
  },
  output: {
    path: path.resolve(__dirname),
    filename: "[name]"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(bower_components|node_modules)/,
        use: [
          {
            loader: "babel-loader"
          }
        ]
      }
    ]
  },
  plugins: [new webpack.IgnorePlugin(/vertx/)]
}
