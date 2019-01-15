'use strict'

/**
 * Load the package.json
 */
const packageJson = require('./package.json')

/*
 * Require some modules
 */
const path = require('path')
const fs = require('fs')
const rimraf = require('rimraf')
const copyFiles = require('copyfiles')
const glob = require('glob-all')
const faker = require('faker')

/*
 * Require the Fractal module
 */
const fractal = (module.exports = require('@frctl/fractal').create())

/*
 * Give your project a title.
 */
fractal.set('project.title', packageJson.name)

/*
 * Tell Fractal where to look for components.
 */
fractal.components.set('path', path.join(__dirname, 'app/views'))

/*
 * Tell Fractal where to look for documentation pages.
 */
fractal.docs.set('path', path.join(__dirname, 'docs'))

/*
 * Tell the Fractal web preview plugin where to look for static assets.
 */
fractal.web.set('static.path', path.join(__dirname, 'public'))

/**
 * Set default preview
 */
fractal.components.set('default.preview', '@preview')

/*
 * Require the Twig adapter
 */
const twigAdapter = require('@frctl/twig')({
  filters: {
    faker: function(value, arg) {
      return value || faker.fake(`{{${arg[0]}}}`)
    }
  }
})
fractal.components.engine(twigAdapter)
fractal.components.set('ext', '.twig')

/**
 * Theme
 */
const mandelbrot = require('@frctl/mandelbrot')
const myCustomisedTheme = mandelbrot({
  skin: 'yellow'
})
fractal.web.theme(myCustomisedTheme)

/**
 * Export views command exposed through the fractal CLI
 */
function exportViews(args, done) {
  // remove files before regenerate them
  rimraf.sync(args.options.output)

  const app = this.fractal
  const items = app.components.flattenDeep().toArray()
  const jobs = []
  const path = require('path')
  const collection = app.components

  for (const item of items) {
    const exportPath = path.join(
      './',
      args.options.output,
      `${item.relViewPath}`
    )
    const job = item
      .getContent()
      .then(str => {
        return str.replace(/['"]\@([0-9a-zA-Z\-\_]*)/g, function(
          match,
          handle
        ) {
          const firstChar = match[0]
          const component = collection.find(match.substr(1))
          return `${firstChar}${component.relViewPath}`
        })
      })
      .then(str => {
        return new Promise((resolve, reject) => {
          // remove the faker helper that is available only in the js environment
          str = str.replace(/\{%\s?render/gm, function() {
            return '{% include'
          })
          resolve(str)
        })
      })
      .then(str => {
        return new Promise((resolve, reject) => {
          // remove the faker helper that is available only in the js environment
          str = str.replace(
            /\|\s?faker\('[a-zA-Z0-9.,()]+'\)\s?/gm,
            function() {
              return ''
            }
          )
          resolve(str)
        })
      })
      .then(str => {
        fs.mkdirSync(path.dirname(exportPath), { recursive: true })
        return fs.writeFileSync(exportPath, str)
      })

    jobs.push(job)
  }
  return Promise.all(jobs)
}
fractal.cli.command('export', exportViews, {
  description: 'Export all component templates',
  options: [
    [
      '-o, --output <output-dir>',
      'The directory to export components into, relative to the CWD.'
    ]
  ]
})
