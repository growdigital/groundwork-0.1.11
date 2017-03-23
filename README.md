# Groundwork

Modular CSS starter kit using Metalsmith static site generator.

    $ npm run dev

Now with [nodemon](https://www.npmjs.com/package/nodemon) to watch for file changes and [browser-sync](https://www.npmjs.com/package/browser-sync) to automatically preview changes in browser.

## Organisation of CSS

1. **Variables**: global variables and site-wide settings eg `responsive.css`
2. **Base**: unclassed HTML elements eg `a {}`
3. **Objects**: cosmetic-free objects, abstractions, and design patterns eg `media.css`
4. **Components**: discrete, complete chunks of UI eg `carousel.css`
5. **Utilities**: high-specificity, very explicit selectors that trump
everything else. Overrides and helper classes eg `.u-hiddenvisually {}`
6. **Shameful**: _temporarily disorganised_ CSS lives in `shame.css`

## Credits

* Organisation derived from [Inuit CSS](https://github.com/inuitcss) by [@CSSWizardry](https://twitter.com/csswizardry) 
* [Inuit CSS guide](https://github.com/SonniesEdge/inuitcss-guide) by [@SonniesEdge](https://twitter.com/sonniesedge)
* [SUIT CSS](https://github.com/suitcss/suit) by [@necolas](https://twitter.com/necolas)
* [SMACSS](https://smacss.com/) by [@snookca](https://twitter.com/snookca)
* [Trumping](https://github.com/sonniesedge/inuitcss-guide/blob/master/trumps.md) utilities derived from [SUIT CSS utilities](https://github.com/suitcss/utils)
* Syntax is [BEM](https://en.bem.info/), [modified](https://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/) by [@CSSWizardry](https://twitter.com/csswizardry) 
* [Shameful CSS](http://csswizardry.com/2013/04/shame-css/) by [@CSSWizardry](https://twitter.com/csswizardry)

### Hosting

[![Deploys by Netlify](https://www.netlify.com/img/global/badges/netlify-dark.svg)](https://www.netlify.com)
