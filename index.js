var Metalsmith  = require('metalsmith');
var collections = require('metalsmith-collections');
var concat      = require('metalsmith-concat');
var dateFormat  = require('metalsmith-date-formatter');
var drafts      = require('metalsmith-drafts');
var feed        = require('metalsmith-feed');
var ignore      = require('metalsmith-ignore');
var templates   = require('metalsmith-layouts');
var markdown    = require('metalsmith-markdown');
var partials    = require('metalsmith-discover-partials');
var permalinks  = require('metalsmith-permalinks');
var postcss     = require('metalsmith-postcss');
var metadata    = require('metalsmith-writemetadata');
var handlebars  = require('handlebars');

Metalsmith(__dirname)
  .metadata({
    site: {
      title: "Groundwork",
      description: "Modular CSS Starter Kit. It rocks.",
      url: "https://www.groundwork.rocks/",
      author: "Jake Rayson"
    }
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
  // Concat: the order is important
  // Concat CSS
  .use(concat({
    files: [ 'assets/css/settings/variables.css'
            ,'normalize.css/normalize.css'
            ,'assets/css/settings/base.css'
            ,'assets/css/settings/typography.css'
            ,'assets/css/settings/responsive.css'
            ,'assets/modules/objects/**/*.css'
            ,'assets/modules/components/**/**/*.css'
            ,'assets/modules/utilities/**/**/*.css'
            ,'assets/css/shame.css'
            // Test CSS, uncomment when you want to test
            // ,'assets/css/test/*.css'
    ],
    searchPaths: [ 'node_modules' ],
    output: 'assets/styles.css'
  }))
  // Concat JavaScript
  .use(concat({
    files: [
      'assets/js/*.js',
      'assets/modules/objects/**/*.js',
      'assets/modules/components/**/**/*.js',
      'assets/modules/utilities/**/**/*.js'
    ],
    searchPaths: [ 'node_modules' ],
    output: 'assets/scripts.js'
  }))
  .use(postcss({
    plugins: {
      'postcss-cssnext': {}
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
  // For debugging, use metadata
  // .use(metadata({
  //   pattern: ['*.md', '*.html']
  // }))
  .use(markdown({
    gfm: true
  }))
  .use(partials({
    directory: 'partials',
    pattern: /\.hbs$/
  }))
  .use(feed({collection: 'posts'}))
  .use(dateFormat({
    key: 'date',
    format: 'ddd D MMM YYYY'
  }))
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
