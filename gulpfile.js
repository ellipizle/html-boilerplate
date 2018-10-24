const gulp = require("gulp")
const path = require("path")
const connect = require("gulp-connect-php")
const iconfont = require("gulp-iconfont")
const iconfontCss = require("gulp-iconfont-css")
const runTimestamp = Math.round(Date.now() / 1000)

/**
 * Icons
 */
gulp.task("icons", function() {
  return gulp
    .src(["src/icons/*.svg"])
    .pipe(
      iconfontCss({
        fontName: "fonticons",
        path: path.join(__dirname, "src/tpl/_fonticons.tpl.scss"),
        targetPath: "../../../../src/sass/03_generic/_fonticons.scss",
        fontPath: "../fonts/fonticons/"
      })
    )
    .pipe(
      iconfont({
        fontName: "fonticons", // required
        formats: ["eot", "otf", "woff", "woff2"], // default, 'woff2' and 'svg' are available
        prependUnicode: true, // recommended option
        timestamp: runTimestamp // recommended to get consistent builds when watching files
      })
    )
    .pipe(gulp.dest("public/dist/fonts/fonticons"))
})
