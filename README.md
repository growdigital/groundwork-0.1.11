# Groundwork

[![Code Climate][climate-badge]][climate-url] [![Issue Count][issue-badge]][issue-url] [![Dependency Status][dep-badge]][dep-url] [![Slack chat][slack-badge]][slack-url] [![Stories in Ready](https://badge.waffle.io/growdigital/groundwork.png?label=ready&title=Ready)](http://waffle.io/growdigital/groundwork)

### Modular CSS Starter Kit. It rocks.

![Groundwork logo](https://blank.groundwork.rocks/assets/images/logo.svg)

* Out-of-the-box Modular CSS website
* Combines individual modular CSS files into one stylesheet
* Vanilla HTML, CSS and JS
* Easily modify with the [plugin](https://github.com/metalsmith/awesome-metalsmith/blob/master/PLUGINS.md) of your choice
* Proof of concept – Modular CSS _can_ be this easy

## Features

* [Modified](https://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/) [BEM](https://en.bem.info/) syntax for extendable CSS eg `.button--big`
* [PostCSS-cssnext](http://cssnext.io/) plugin for using latest features in plain CSS
* [Metalsmith](http://www.metalsmith.io/) build process, from `src` to `build`
* [Handlebars](http://handlebarsjs.com/) for plain HTML templates
* [Fractal](http://fractal.build/) for built-in styleguide
* [nodemon](https://www.npmjs.com/package/nodemon) to watch for file changes 
* [browser-sync](https://browsersync.io/) to automatically preview changes in browser

## Setting up

Make sure to have [Node.js](https://nodejs.org/en/) installed.

#### Clone repo, install packages

```bash
$ git clone git@github.com:growdigital/groundwork.git
$ cd groundwork
$ npm install
```

## Usage

Start the build, watch and browsersync script:

```bash
$ npm run dev 
```

**Add CSS modules** in `src/assets/modules`, either `components`, `objects` or utilities. If you add a Handlebars template `.hbs` file, it will picked up by Fractal styleguide.

To start the Fractal styleguide:

```bash
$ fractal start --sync
```

If you just want to build the site without previewing, run:

```bash
$ npm run build
```

To run Metalsmith in debug mode, add `DEBUG=metalsmith*` to the npm start script in `package.json`:
```javascript
"start": "DEBUG=metalsmith* node index.js",
```

## Organisation of CSS

1. **Variables**: global variables and site-wide settings eg `responsive.css`
2. **Base**: unclassed HTML elements eg `a {}`
3. **Objects**: cosmetic-free objects, abstractions, and design patterns eg `o-media.css`
4. **Components**: discrete, complete chunks of UI eg `carousel.css`
5. **Utilities**: high-specificity, very explicit selectors that trump
everything else. Overrides and helper classes eg `.u-hiddenvisually {}`
6. **Shameful**: _temporarily disorganised_ CSS eg `._-bloody-hack {}` lives in `shame.css`

Documentation will be on the website [www.groundwork.rocks](https://www.groundwork.rocks).

## Credits

* Hiearchy derived from [Inuit CSS](https://github.com/inuitcss) by [@CSSWizardry](https://twitter.com/csswizardry) 
* Organisation inspired by [PatternLab](http://patternlab.io/) by [@brad_frost](https://twitter.com/brad_frost)
* [Inuit CSS guide](https://github.com/SonniesEdge/inuitcss-guide) by [@SonniesEdge](https://twitter.com/sonniesedge)
* Principles from [SUIT CSS](https://github.com/suitcss/suit) by [@necolas](https://twitter.com/necolas)
* It started with a [SMACSS](https://smacss.com/) by [@snookca](https://twitter.com/snookca)
* [Trumping](https://github.com/sonniesedge/inuitcss-guide/blob/master/trumps.md) utilities derived from [SUIT CSS utilities](https://github.com/suitcss/utils)
* Syntax is [BEM](https://en.bem.info/), [modified](https://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/) by [@CSSWizardry](https://twitter.com/csswizardry) 
* [Shameful CSS](http://csswizardry.com/2013/04/shame-css/) by [@CSSWizardry](https://twitter.com/csswizardry)
* Component library courtesy the _amazing_ [Fractal](http://fractal.build/) by [Danielle Huntrods](https://github.com/dkhuntrods) and [Mark Perkins](https://github.com/allmarkedup)
* [Nicole Sullivan](https://twitter.com/stubbornella) for everything and the [media object](http://www.stubbornella.org/content/2010/06/25/the-media-object-saves-hundreds-of-lines-of-code/)
* Groundwork logo by [Jesse Bennett-Chamberlain](https://twitter.com/jessebc)

[![Deploys by Netlify](https://www.netlify.com/img/global/badges/netlify-dark.svg)](https://www.netlify.com)

[climate-badge]: https://codeclimate.com/github/growdigital/groundwork/badges/gpa.svg
[climate-url]: https://codeclimate.com/github/growdigital/groundwork
[issue-badge]: https://codeclimate.com/github/growdigital/groundwork/badges/issue_count.svg
[issue-url]: https://codeclimate.com/github/growdigital/groundwork
[dep-badge]: https://www.versioneye.com/user/projects/599ca850368b08141959f90f/badge.svg?style=flat-square
[dep-url]: https://www.versioneye.com/user/projects/58d97d9226a5bb002b54bea2
[slack-badge]: https://img.shields.io/badge/Groundwork%20Rocks-Join%20Chat%20→-blue.svg
[slack-url]: https://groundworkrocks.slack.com/
