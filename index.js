let Metalsmith  = require('metalsmith');
let cleancss    = require('metalsmith-clean-css');
let collections = require('metalsmith-collections');
let concat      = require('metalsmith-concat');
let dateFormat  = require('metalsmith-date-formatter');
let drafts      = require('metalsmith-drafts');
let feed        = require('metalsmith-feed');
let ignore      = require('metalsmith-ignore');
let templates   = require('metalsmith-layouts');
let markdown    = require('metalsmith-markdown');
let move        = require('metalsmith-movey').default;
let partials    = require('metalsmith-discover-partials');
let permalinks  = require('metalsmith-permalinks');
let postcss     = require('metalsmith-postcss');
let metadata    = require('metalsmith-writemetadata');
let handlebars  = require('handlebars');

Metalsmith(__dirname)
  .metadata({
    site: {
      title: "Blank Groundwork",
      description: "Blank Modular CSS Starter Kit.",
      url: "https://blank.groundwork.rocks/",
      author: "Jake Rayson"
    }
  })
  .source('./src')
  .destination('./build')
  // Only clean in dev. Set to false to preserve Fractal styleguide.
  .clean(false)
  // Ignoring documentation and Fractal templates
  .use(ignore([
    'docs/*',
    'assets/modules/**/**/*.hbs',
    'assets/modules/**/**/**/*.hbs',
    'assets/modules/**/**/**/**/*.hbs'
  ]))
  // Concatenation: the order is important
  // Concat CSS
  .use(concat({
    files: [
       'assets/css/settings/variables.css'
      ,'normalize.css/normalize.css'
      ,'assets/css/settings/base.css'
      ,'assets/css/settings/typography.css'
      ,'assets/css/settings/responsive.css'
      ,'assets/modules/objects/**/*.css'
      ,'assets/modules/components/**/**/*.css'
      ,'assets/modules/utilities/**/**/*.css'
      ,'assets/css/shame.css'
    ],
    searchPaths: [ 'node_modules' ],
    output: 'assets/styles.css'
  }))
  // Optimise CSS
  .use(cleancss({
    files: 'assets/styles.css'
  }))
  // Concat JavaScript
  .use(concat({
    files: [
       'assets/js/*.js'
      ,'assets/modules/objects/**/*.js'
      ,'assets/modules/components/**/**/*.js'
      ,'assets/modules/utilities/**/**/*.js'
    ],
    searchPaths: [ 'node_modules' ],
    output: 'assets/scripts.js'
  }))
  // +1 PostCSS for vanilla CSS. Use CSS preprocessor of your choice!
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

  // To help with debugging, use metadata
  // .use(metadata({
  //   pattern: ['*.md', '*.html']
  // }))

  // Use GitFriendlyMarkdown formatter
  .use(markdown({
    gfm: true
  }))
  .use(partials({
    directory: 'partials',
    pattern: /\.hbs$/
  }))
  // Create RSS feed
  .use(feed({collection: 'posts'}))
  // Change your date format here
  // Uses Moment.js http://momentjs.com/docs/#/displaying/
  .use(dateFormat({
    key: 'date',
    format: 'ddd D MMM YYYY'
  }))
  .use(permalinks({
    pattern: './posts/:title',
    relative: false
  }))
  // I like Handlebars templating. You can use what you like.
  .use(templates({
    engine: 'handlebars'
  }))
  // Move graphics assets out of modules and into /assets/images/ directory
  .use(move({
    'assets/modules/components/**/**/*.+(png|svg|ico|jpg)': 'assets/images/{name}{ext}'
  }))
  .build(function(err, files) {
    if (err) { throw err; }
  });
