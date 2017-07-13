---
title: Setup Groundwork on your computer
date: 2017-07-06
layout: post.hbs
collections: posts
---

Before anything else, make sure you have [Node.js](https://nodejs.org/en/download/) and [git](https://git-scm.com/) installed. It would be good to have a [GitHub](https://github.com/), [BitBucket](https://bitbucket.org/product) or similar account setup. 

In your terminal, move to the place where you build websites and type:

```bash
$ git clone git@github.com:growdigital/groundwork.git
```

This clones the Groundwork git repository onto your computer. Then, change directory into groundwork:

```bash
$ cd groundwork
```

Cool. To complete the installation, you need to install the myriad Node.js plugins for the website to work:

```bash
$ npm install
```

Should take just a few minutes. When that’s finished, you can start up the development server!

```bash
$ npm run dev
```

Way to go! This _should_ start up a web browser and display the blank Groundwork website, looking a little like this:

![Screenshot of blank Groundwork website working on local dev server](/assets/images/01setup.png)
