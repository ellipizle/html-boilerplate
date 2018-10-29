module.exports = {
  // server port
  port: 3333,

  // title
  title: "{project-name}",

  // logo
  logo: null,

  // index
  index: "documentation/README.md",

  // documentation settings
  documentation: {
    // files (glob patterns)
    files: [
      "README.md",
      "node_modules/coffeekraken-sugar/**/*.md",
      "node_modules/coffeekraken-gridle/**/*.md",
      "node_modules/coffeekraken-s-*/**/*.md"
    ]
  },

  // styleguide file
  styleguide: {
    // source styleguide files
    files: ["public/dist/css/style.css", "public/dist/js/app.js"],

    // additionnal displays files to load
    displays: ["node_modules/coffeekraken-gridle/carpenter.displays.js"]
  },

  components: {
    inject: ["public/dist/css/style.css", "public/dist/js/app.js"],
    viewsRootPath: "app/views",
    phpBootstrapPath: "app/bootstrap.php",
    saveCompiled: false
  }
}
