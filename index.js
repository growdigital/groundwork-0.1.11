var Metalsmith  = require('metalsmith');
var cleanCSS    = require('metalsmith-clean-css');
var collections = require('metalsmith-collections');
var concat      = require('metalsmith-concat');
var drafts      = require('metalsmith-drafts');
var templates   = require('metalsmith-layouts');
var markdown    = require('metalsmith-markdown');
var permalinks  = require('metalsmith-permalinks');
var postcss     = require('metalsmith-postcss');
var serve       = require('metalsmith-serve');

Metalsmith(__dirname)
  .metadata({
    title: "Grow Digital",
    description: "We make websites. Honestly.",
    generator: "Metalsmith",
    url: "https://growdigital.org/"
  })
  .source('./src')
  .destination('./build')
  .clean(true)
  // The order is important
  .use(concat({
    files: [
      'assets/css/settings/variables.css',
      'assets/css/settings/base.css',
      'assets/css/settings/responsive.css',
      'assets/modules/objects/**/*.css',
      'assets/modules/components/**/**/*.css',
      'assets/modules/utilities/**/**/*.css',
      'assets/css/shame.css'
    ],
    output: 'assets/styles.css'
  }))
  .use(postcss({
    plugins: {
      'postcss-cssnext': {}
    }
  }))
  .use(cleanCSS({
    cleanCSS: {
      rebase: true
    }
  }))
  .use(drafts())
  .use(collections({
    posts: {
      pattern: 'posts/**/*.md',
      sortBy: 'date',
      reverse: true
    }
  }))
  .use(markdown({
    gfm: true
  }))
  .use(permalinks({
    pattern: './posts/:title'
  }))
  .use(templates({
    engine: 'handlebars'
  }))
  .use(serve({
    port: 8080,
    verbose: true
  }))
  .build(function(err, files) {
    if (err) { throw err; }
  });
