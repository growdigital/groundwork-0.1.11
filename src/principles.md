---
layout: layout.hbs
---

# Principles of Modular CSS

CSS is easy to write but a bugger to maintain. 

Writing your CSS as modules can help because [repeating patterns](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself) are recognised, named and re-used.

Because each module is written as _separate_ files in their own directory, [version control](https://git-scm.com/about) is much easier. It is also easy to find specific modules: looking for a button? Just [goto](http://docs.sublimetext.info/en/latest/file_management/file_navigation.html#goto-anything) `button.css`.

As each module is separate, this means that [building a style guide](http://fractal.build/guide) requires minimal setup.

## Some key principles

1. **Only use classes, not IDs**. IDs have a much higher specificity, which can then lead to all sorts of [specifity wars](https://stuffandnonsense.co.uk/archives/css_specificity_wars.html) when trying to apply a style.  
* **Don’t use HTML tags in class definitions**. This means classes can be applied to _any_ element eg `<input class="button" type="submit">` and `<button class="button">pushme</button>`.
* **Only use the module for one bit of functionality**. This is the [Single Responsibility Principle](https://en.wikipedia.org/wiki/Single_responsibility_principle).
* **Class names should be _functional_ & independent of content**. Again, this makes a module _re-usable_ in different contexts.

## Further reading

This just scratches the surface, there is a wealth of information out there:

* [SUIT CSS documentation](https://github.com/suitcss/suit/blob/master/doc/README.md) by [Nicolas Gallagher](https://twitter.com/necolas)
* [About HTML semantics and front-end architecture](http://nicolasgallagher.com/about-html-semantics-front-end-architecture/) by [Nicolas Gallagher](https://twitter.com/necolas)
* [Scalable and Modular Architecture for CSS](https://smacss.com/) by [Jonathan Snook](https://twitter.com/snookca)
* [BEM Methodology](https://en.bem.info/) (Block Element Modifier) by [Yandex](https://www.yandex.com/) 
* [CSS Wizardry blog](https://csswizardry.com/archive/) by [Harry Roberts](https://twitter.com/csswizardry)
