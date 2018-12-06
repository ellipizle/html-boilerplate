"use strict"

/**
 * Load the package.json
 */
const packageJson = require("./package.json")

/*
 * Require the path module
 */
const path = require("path")

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

fractal.components.set("default.preview", "@preview")

/*
 * Require the Twig adapter
 */
const twigAdapter = require("@frctl/twig")()
fractal.components.engine(twigAdapter)
fractal.components.set("ext", ".twig")

const mandelbrot = require("@frctl/mandelbrot")

const myCustomisedTheme = mandelbrot({
  skin: "yellow"
})

fractal.web.theme(myCustomisedTheme)
