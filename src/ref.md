---
layout: layout.hbs
---

# Quick Reference

## Build/browsersync

```
$ npm run dev
```

To just run a build:
```
$ make build
```

## Fractal styleguide

```
$ fractal start --sync
```

Use this [development server](http://fractal.build/guide/web/server) for, er, development.

To [export static HTML](http://fractal.build/guide/web/builder) to the build directory:

```
$ fractal build
```

## Syntax

```
.block {}
.block__element {}
.block--modifier {}
```
eg
```
.c-search {}
.c-search__field {}
.c-search--full {}

.o-media {}
```

## SUIT CSS utilties

Rather than bundle all utilties, I prefer to use just what is needed. Here’s a list of [SUIT CSS utilities](https://github.com/suitcss/utils):

### [align] 0.2.2
* `u-alignBaseline` -Vertically align to baseline.
* `u-alignBottom` - Vertically align to bottom.
* `u-alignMiddle` - Vertically align to middle.
* `u-alignTop` - Vertically align to top.

### [display] 0.4.1
* `u-block` - Display `block`.
* `u-hidden` - Display `none`.
* `u-hiddenVisually` - Visually hidden but available to screenreaders.
* `u-inline` - Display `inline`.
* `u-inlineBlock` - Display `inline-block`.
* `u-table` - Display `table`.
* `u-tableCell` - Display `table-cell`.
* `u-tableRow` - Display `table-row`.

### [layout] 0.4.2
* `u-cf` - Contain floats (micro clearfix).
* `u-nbfc` - Create a new block formatting context.
* `u-nbfcAlt` - Create a new block formatting context (alternative technique).
* `u-floatLeft` - Float left.
* `u-floatRight` - Float right.

### [link] 0.5.2
* `u-linkBlock` - Block-level link with no `text-decoration` for any state.
* `u-linkClean` - A link without no `text-decoration` for any state.
* `u-linkComplex` - Limit a link's interactive `text-decoration` underline to a
  sub-section of the link text.

### [size] 0.7.2
* `u-sizeFit` - Make an element shrink wrap its content by floating left.
* `u-sizeFitAlt` - Make an element shrink wrap its content by floating right.
* `u-sizeFill` - Make an element fill the remaining space.
* `u-sizeFillAlt` - An alternative method to make an element fill the remaining space.
* `u-sizeFull` - Make an element the width of its parent.
* `u-sizeXofY` (numerous) - Specify the proportional width of an object.

### [text] 0.4.2
* `u-textBreak` - Break strings when their length exceeds the width of their container.
* `u-textCenter` - Center-align text.
* `u-textLeft` - Left-align text.
* `u-textRight` - Right-align text.
* `u-textInheritColor` - Inherit the ancestor's text color.
* `u-textKern` - Enable kerning in supporting browsers.
* `u-textNoWrap` - Prevent wrapping at whitespace.
* `u-textTruncate` - Truncate a single line of text, with ellipsis.

[align]: https://github.com/suitcss/utils-align/
[display]: https://github.com/suitcss/utils-display
[layout]: https://github.com/suitcss/utils-layout
[link]: https://github.com/suitcss/utils-link
[size]: https://github.com/suitcss/utils-size
[text]: https://github.com/suitcss/utils-text
