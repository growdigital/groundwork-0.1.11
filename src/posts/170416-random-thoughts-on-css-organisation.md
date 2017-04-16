---
title: Some random thoughts on CSS organisation  
date: 2017-04-16
layout: post.hbs
collections: posts
draft: true
---

1. Prefix. How about `a-` for **atomic**? Smallest element. How useful would this be?
2. Heading. _Should_ define headings in `/src/assets/css/settings/`. But, a little bit complicated. As is HTML element, maybe in its own file? `typography.css`? It sure ain’t a module. CSSWizardry uses eg `.u-h1`. But then, that separates the definition from the original definition, one in settings and one in utiltiies. 
