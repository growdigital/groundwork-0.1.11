---
layout: layout.hbs
pageTitle: "Blank Groundwork"
pageClass: home

---

# Modular CSS & Metalsmith blog template

See [www.groundwork.rocks](https://www.groundwork.rocks) for instructions. 
[Fork me on GitHub](https://github.com/growdigital/groundwork). 

## Quick start:

```bash
$ git clone git@github.com:growdigital/groundwork.git
$ cd groundwork
$ npm install
$ npm run dev
```

## Make it your own

To make it truly yours, change the `package.json`…:

```json
"name": "groundwork",
"version": "0.1.6",
"description": "Blank Modular CSS Starter Kit using Metalsmith",
```

…and `index.js`:

```javascript
.metadata({
  site: {
    title: "Blank Groundwork",
    description: "Blank Modular CSS Starter Kit.",
    url: "https://blank.groundwork.rocks/",
    author: "Jake Rayson"
```

Run `$ npm install` to update `package-lock.json`.
