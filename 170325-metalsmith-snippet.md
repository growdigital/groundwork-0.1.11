---
title: Front Matter snippet for Sublime Text in Metalsmith post 
date: 2017-03-25
layout: post.hbs
collections: posts
---

I made a quick snippet to add the [Front Matter](https://jekyllrb.com/docs/frontmatter/) to [Metalsmith](http://www.metalsmith.io/) blog posts, using the [Sublime Text Unofficial Documentation]() and this [handy reference](http://stackoverflow.com/questions/13922174/defining-scope-for-custom-sublime-text-2-snippets#14682280) for defining scope in Sublime. This is my result:

```
<snippet>
  <content><![CDATA[
---
title: $1 
date: ${2:2017-04-01}
layout: post.hbs
collections: posts
draft: true
---


]]></content>
  <!-- Optional: Set a tabTrigger to define how to trigger the snippet -->
    <tabTrigger>fm</tabTrigger>
  <!-- Optional: Set a scope to limit where the snippet will trigger -->
    <scope>text.html.markdown</scope>
</snippet>
```

Tab to move between title, date and the beginning of the post. 

Type `fm` then hit the tab key to expand.

It would be nice to insert the date with a keystroke. There’s a [plugin for that](https://github.com/FichteFoll/InsertDate), maybe tomorrow…
