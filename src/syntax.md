---
layout: layout.hbs
---

# Syntax

## Modified BEM syntax

In short, [this](https://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/):

```
.block {}
.block__element {}
.block--modifier {}
```

The `block` is the module (object or component), the `block__element` is a _descendant_ of that module and the `block--modifier` is a variation on that module.

For example:

```
.search {}
.search__field {}
.search--full {}
```

## BEM ground rules

* Hyphen to separate words in long names & two underscores to separate the name of the block from the name of the element:  
`block-name__element-name`
* CSS class for a block coincides with its block name
* A modifier is a property of a block or an element that alters its look or behavior.
* A modifier has a name and a value. Several modifiers can be used at once.
* Double dash to separate name of block/element from name of modifier:  
`menu menu--big`

## Namespacing

To add yet more clarity to the `block__element--modifier` convention, we can use “namespacing”: prefixing a module with an identifying character. This makes it easy to see what type of module we’re dealing with:

```
o-object
c-component
u-utility
js-javascript
_-hack
is-state, has-state
```

For example, `.c-button {}`, `.o-media {}`. `u-cf`, `_-messy-hack`.

Taken from [Harry Roberts](https://twitter.com/csswizardry)’ [More transparent UI code with namespaces](https://csswizardry.com/2015/03/more-transparent-ui-code-with-namespaces/), [Nicholas Gallagher](https://twitter.com/necolas)’s [SUIT CSS utilities](https://github.com/suitcss/utils) and [Jonathan Snook](https://twitter.com/snookca)’s [SMACSS State Rules](https://smacss.com/book/type-state).

## Comments

```
/* ==========================================================================
   Section comment block
   ========================================================================== */

/* Sub-section comment block
   ========================================================================== */

/**
 * Short description using Doxygen-style comment format
 *
 * The first sentence of the long description starts here and continues on this
 * line for a while finally concluding here at the end of this paragraph.
 *
 * The long description is ideal for more detailed explanations and
 * documentation. It can include example HTML, URLs, or any other information
 * that is deemed necessary or useful.
 *
 * TODO: This is a todo statement that describes an atomic task to be completed
 *   at a later date. It wraps after 80 characters and following lines are
 *   indented by 2 spaces.
 *
 * @tag This is a tag named 'tag'
 *
 * 1. A helpful description of a declaration's purpose.
 * 2. Another declaration or collection of declarations can reference this
 *    comment with an inline comment corresponding to the lists number.
 */

/* Basic comment */
```

I _think_ these are from [SUIT CSS](http://suitcss.github.io/)!

## Credits

Modified BEM syntax mostly from [Harry Roberts](https://twitter.com/csswizardry)’ [MindBEMding – getting your head ’round BEM syntax](https://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/) and [Nicolas Gallagher](https://twitter.com/necolas)’s [SUIT CSS naming conventions](https://github.com/suitcss/suit/blob/master/doc/naming-conventions.md). As the kids used to say in the 1990s, _respec’_
