const Metalsmith  = require('metalsmith');
const cleancss    = require('metalsmith-clean-css');
const collections = require('metalsmith-collections');
const concat      = require('metalsmith-concat');
const dateFormat  = require('metalsmith-date-formatter');
const drafts      = require('metalsmith-drafts');
const feed        = require('metalsmith-feed');
const ignore      = require('metalsmith-ignore');
const templates   = require('metalsmith-layouts');
const markdown    = require('metalsmith-markdown');
const move        = require('metalsmith-movey').default;
const partials    = require('metalsmith-discover-partials');
const permalinks  = require('metalsmith-permalinks');
const postcss     = require('metalsmith-postcss');
const metadata    = require('metalsmith-writemetadata');
const handlebars  = require('handlebars');
const uglifyjs    = require("metalsmith-uglifyjs");

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
  .clean(true)
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
  // Optimise (uglify) CSS
  .use(cleancss({
    files: 'assets/styles.css'
  }))
  // Concatenate JavaScript
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
  // Optimise (uglify) JavaScript
  .use(uglifyjs({
    src: ["assets/scripts.js"],
    override: true,
    uglifyOptions: {
      mangle: true,
      compress: {
        unused: false,
        warnings: true
      }
    }
  }))
  // +1 PostCSS. Use CSS preprocessor of your choice if you’d rather!
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
    engine: 'handlebars',
    partials: 'partials'
  }))
  // Create RSS feed
  .use(feed({
    collection: 'posts'
  }))
  // Move graphics assets out of modules and into /assets/images/ directory
  .use(move({
    'assets/modules/components/**/**/*.+(png|svg|ico|jpg)': 'assets/images/{name}{ext}'
  }))
  .build(function(err, files) {
    if (err) { throw err; }
  });
