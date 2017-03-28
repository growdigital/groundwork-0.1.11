---
layout: layout.hbs
---

# CSS Organisation

The CSS organisation is loosely based on [Inverted Triangle CSS](https://github.com/itcss) by [Harry Roberts](https://twitter.com/csswizardry). The **inverted triangle** is from the broadest and most applicable styles (variables, base) through to specific modules (objects and components) and then on to _very specific_ trumping [utilities](https://github.com/suitcss/utils) and [shameful hacks](https://csswizardry.com/2013/04/shame-css/).

1. **Variables**: global variables and site-wide settings eg `responsive.css`
2. **Base**: unclassed HTML elements eg `a {}`
3. **Objects**: cosmetic-free objects, abstractions, and design patterns eg `media.css`
4. **Components**: discrete, complete chunks of UI eg `carousel.css`
5. **Utilities**: high-specificity, very explicit selectors that trump
everything else. Overrides and helper classes eg `.u-hiddenvisually {}`
6. **Shameful**: _temporarily disorganised_ CSS lives in `shame.css`

Here’s a hand-drawn, rainbow coloured triangle:

![Rainbow coloured Inverted CSS Triangle](/assets/images/inverted-css-triangle.png)

The whole idea is that **all files relating to a particular module go in that module folder**: eg JavaScript, PNGs, SVGs, CSS and the Handlebars template. 

## Example of directory structure 

```
src
└── assets
    ├── css
    │   ├── settings
    │   │   ├── base.css
    │   │   ├── responsive.css
    │   │   └── variables.css
    │   ├── test
    │   │   └── test.css
    │   └── shame.css
    ├── fonts
    ├── images
    ├── javascript
    └── modules
        ├── components
        │   ├── forms
        |   │   ├── button
        |   |   │   ├── button.css
        |   |   │   ├── button.hbs
        |   |   │   └── button.js
        |   │   └── textfield
        │   ├── graphics
        |   │   └── logo
        │   ├── navigation
        |   │   ├── nav
        |   │   ├── pager
        |   │   └── tabs
        │   └── typography
        |   │   └── heading
        ├── objects
        │   └── media
        └── utilities
```
