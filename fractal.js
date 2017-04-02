'use strict';

/* Create a new Fractal instance and export it for use elsewhere if required */
const fractal = module.exports = require('@frctl/fractal').create();

/* Set the title of the project */
fractal.set('project.title', 'Groundwork');

/* Tell Fractal where the components will live */
fractal.components.set('path', __dirname + '/src/assets/modules');

/* Tell Fractal where the documentation pages will live */
fractal.docs.set('path', __dirname + '/src/docs');

/* Tell Fractal static HTML destination */
fractal.web.set('builder.dest', __dirname + '/build/styleguide');
