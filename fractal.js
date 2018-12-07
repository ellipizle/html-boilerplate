"use strict"

/**
 * Load the package.json
 */
const packageJson = require("./package.json")

/*
 * Require some modules
 */
const path = require("path")
const fs = require("fs")
const rimraf = require("rimraf")
const copyFiles = require("copyfiles")
const glob = require("glob-all")
const faker = require("faker")

/*
 * Require the Fractal module
 */
const fractal = (module.exports = require("@frctl/fractal").create())

/*
 * Give your project a title.
 */
fractal.set("project.title", packageJson.name)

/*
 * Tell Fractal where to look for components.
 */
fractal.components.set("path", path.join(__dirname, "app/views"))

/*
 * Tell Fractal where to look for documentation pages.
 */
fractal.docs.set("path", path.join(__dirname, "docs"))

/*
 * Tell the Fractal web preview plugin where to look for static assets.
 */
fractal.web.set("static.path", path.join(__dirname, "public"))

/**
 * Set default preview
 */
fractal.components.set("default.preview", "@preview")

/*
 * Require the Twig adapter
 */
const twigAdapter = require("@frctl/twig")({
  filters: {
    faker: function(value, arg) {
      return value || faker.fake(`{{${arg[0]}}}`)
    }
  }
})
fractal.components.engine(twigAdapter)
fractal.components.set("ext", ".twig")

/**
 * Theme
 */
const mandelbrot = require("@frctl/mandelbrot")
const myCustomisedTheme = mandelbrot({
  skin: "yellow"
})
fractal.web.theme(myCustomisedTheme)

/**
 * Export views command exposed through the fractal CLI
 */
function exportViews(args, done) {
  // remove files
  rimraf.sync("public/dist/views")

  const app = this.fractal
  const items = app.components.flattenDeep().toArray()
  const jobs = []
  const path = require("path")
  const collection = fractal.components

  for (const item of items) {
    const exportPath = path.join("./public/dist/views", `${item.relViewPath}`)
    const job = item
      .getContent()
      .then(str => {
        return str.replace(/\@([0-9a-zA-Z\-\_]*)/g, function(match, handle) {
          const component = collection.find(match)
          console.log(component.relViewPath)
          return `${component.relViewPath}`
        })
      })
      .then(str => {
        console.log(exportPath)
        fs.mkdirSync(path.dirname(exportPath), { recursive: true })
        return fs.writeFileSync(exportPath, str)
      })

    jobs.push(job)
  }

  return Promise.all(jobs)
}
fractal.cli.command("export", exportViews, {
  description: "Export all component templates"
})
