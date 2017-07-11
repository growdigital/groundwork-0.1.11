---
title: Fractal Styleguide, now with styles 
date: 11 Jul 2017
layout: post.hbs
collections: posts
---

To build the [styleguide](/styleguide/), Groundwork uses the magnificent [Fractal](http://fractal.build/) by [Mark Perkins](https://twitter.com/ultraperk) from [Clearleft](https://clearleft.com/) (which is also home to the fiendishly ubiquitous [@adactio](https://twitter.com/adactio)). 

It automatically picks up “components” (what I call “modules”) from your directory structure, so it plays perfectly with the whole Modular CSS thang. You create a CSS file, a template file ([Handlebars](http://handlebarsjs.com/) by default), a JS file, SVG, PNG etc., and it’s all picked up in one tickety little bundle.

However, I noticed that the styles weren’t being picked up in the styleguide, so a quick visit to the [Fractal Slack chat](https://fractalize.slack.com/) and [@sturobson](https://twitter.com/sturobson) very kindly pointed me in the direction of the documentation: **you have to [define a template preview layout](http://fractal.build/guide/components/preview-layouts) to pull in styles**. Doh. 

And now, it works.
