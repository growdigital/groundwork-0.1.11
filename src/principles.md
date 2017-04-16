---
layout: layout.hbs
pageTitle: Laying the Groundwork principles
pageClass: principles

---

# Principles of Modular CSS

> CSS is easy to write but a bugger to maintain. 

Writing your CSS as modules can help because [repeating patterns](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself) are recognised, named and re-used.

Because each module is written as _separate_ files in their own directory, [version control](https://git-scm.com/about) is much easier. It is also easy to find specific modules: looking for a button? Just [goto](http://docs.sublimetext.info/en/latest/file_management/file_navigation.html#goto-anything) `button.css`.

As each module is separate, this means that [building a style guide](http://fractal.build/guide) requires minimal setup.

A note on nomenclature: module, object and component.

## Some key principles

> Build what you need. Start simple. Stay simple.

1. **ID-based CSS selectors must not be used**. IDs have a much higher specificity, which can then lead to all sorts of [specifity wars](https://stuffandnonsense.co.uk/archives/css_specificity_wars.html) when trying to apply a style.  
* **HTML elements must not be used in CSS selectors**. This means classes can be applied to _any_ element eg `<input class="button" type="submit">` and `<button class="button">pushme</button>`.
* **Only use the module for one bit of functionality**. This is the [Single Responsibility Principle](https://en.wikipedia.org/wiki/Single_responsibility_principle).
* **Class names should be _functional_ & independent of content**. Again, this makes a module _re-usable_ in different contexts.
* Modules must have unique names

## Visibility

A guiding principle in [Kanban](https://en.wikipedia.org/wiki/Kanban_(development) development is to **make work visible** (Kanban 看板 literally means billboard in Japanese).

To this end, **use a styleguide**, from the beginning. Groundwork comes bundled with [Fractal](http://fractal.build/), a magnificent, _automated_, styleguide builder. So long as your module folder has an HTML template file (we use [Handlebars](http://handlebarsjs.com/)), then the module will appear in the Fractal styleguide.

To start Fractal locally:

```
$ fractal start --sync
```

Big kudos to [Pattern Lab](http://patternlab.io/) by [Brad Frost](https://twitter.com/brad_frost) – very inspirational work with a lovely interface. Personally, I like the idea but find the layered granularity difficult. 

Also worth a look is [http://styleguides.io/](http://styleguides.io/) a website of **styleguides** curated by [Brad Frost](https://twitter.com/brad_frost) and [Anna Debenham](https://twitter.com/anna_debenham), and the book [Front-end Style Guides](http://www.maban.co.uk/projects/front-end-style-guides/) by Anna Debenham.


## Testing

> Test Everything!

There are simple CSS lint tests in `assets/css/test/test.css`, from Harry Roberts](https://twitter.com/csswizardry)’ [Healthchecks](https://csswizardry.com/2015/08/bemit-taking-the-bem-naming-convention-a-step-further/#healthchecks).

`TODO:` implement more testing…

## Further reading

This just scratches the surface, there is a wealth of information out there:

* [SUIT CSS documentation](https://github.com/suitcss/suit/blob/master/doc/README.md) by [Nicolas Gallagher](https://twitter.com/necolas)
* [About HTML semantics and front-end architecture](http://nicolasgallagher.com/about-html-semantics-front-end-architecture/) by [Nicolas Gallagher](https://twitter.com/necolas)
* [Scalable and Modular Architecture for CSS](https://smacss.com/) by [Jonathan Snook](https://twitter.com/snookca)
* [BEM Methodology](https://en.bem.info/) (Block Element Modifier) by [Yandex](https://www.yandex.com/) 
* [CSS Wizardry blog](https://csswizardry.com/archive/) by [Harry Roberts](https://twitter.com/csswizardry)
