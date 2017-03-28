var Metalsmith  = require('metalsmith');
var cleanCSS    = require('metalsmith-clean-css');
var collections = require('metalsmith-collections');
var concat      = require('metalsmith-concat');
var drafts      = require('metalsmith-drafts');
var feed        = require('metalsmith-feed');
var ignore      = require('metalsmith-ignore');
var templates   = require('metalsmith-layouts');
var markdown    = require('metalsmith-markdown');
var permalinks  = require('metalsmith-permalinks');
var postcss     = require('metalsmith-postcss');

Metalsmith(__dirname)
  .metadata({
    title: "Groundwork",
    description: "Modular CSS Starter Kit",
    url: "https://www.groundwork.rocks/",
    author: "Jake Rayson"
  })
  .source('./src')
  .destination('./build')
  .clean(true)
  .use(ignore([
    'docs/*',
    'assets/modules/**/**/*.hbs',
    'assets/modules/**/**/**/*.hbs',
    'assets/modules/**/**/**/**/*.hbs'
  ]))
  // The order is important
  .use(concat({
    files: [
      'assets/css/settings/variables.css',
      'normalize.css/normalize.css',
      'assets/css/settings/base.css',
      'assets/css/settings/responsive.css',
      'assets/modules/objects/**/*.css',
      'assets/modules/components/**/**/*.css',
      'assets/modules/utilities/**/**/*.css',
      'assets/css/shame.css',
      'assets/css/test/*.css'
    ],
    searchPaths: [ 'node_modules' ],
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
  // .use(feed({collection: 'posts'}))
  .use(permalinks({
    pattern: './posts/:title',
    relative: false
  }))
  .use(templates({
    engine: 'handlebars'
  }))
  .build(function(err, files) {
    if (err) { throw err; }
  });
