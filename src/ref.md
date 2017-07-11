---
layout: layout.hbs
pageTitle: Quick Groundwork reference
pageClass: ref

---

# Quick Reference

## Build, dev server & browsersync

```bash
$ npm run dev
```

## Build

To just run a build:
```bash
$ npm run build
```

## Fractal styleguide

```bash
$ npm run fractal
```

Use this [development server](http://fractal.build/guide/web/server) for, er, development.

To [export static HTML](http://fractal.build/guide/web/builder) to the build directory:

```bash
$ fractal build
```

## Syntax

```css
.block {}
.block__element {}
.block--modifier {}
```
eg
```css
.search {}
.search__field {}
.search--full {}

.o-media {}
```

## Utilities reference

Rather than bundle all utilties, I prefer to pick and choose what is needed for the project. 

### SUIT CSS utilties

Here’s a list of [SUIT CSS utilities](https://github.com/suitcss/utils) I sometimes refer to:

* [align] 0.2.2
* [display] 0.4.1
* [layout] 0.4.2
* [link] 0.5.2
* [text] 0.4.2


### Inuit CSS objects

There are also some useful [Inuit CSS objects](https://github.com/inuitcss/inuitcss/tree/develop/objects) for reference.

[align]: https://github.com/suitcss/utils-align/
[display]: https://github.com/suitcss/utils-display
[layout]: https://github.com/suitcss/utils-layout
[link]: https://github.com/suitcss/utils-link
[size]: https://github.com/suitcss/utils-size
[text]: https://github.com/suitcss/utils-text
