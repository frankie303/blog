---
title: "Nullish Coalescing (??) vs Logical Or Operator (||)"
date: "2021-11-20"
description: "The difference between ?? and ||"
---

<br>
<br>

If you use JavaScript or TypeScript, you probably use `??` (nullish coalescing operator) and `||` (logical or operator) in your codebase. I realized that there are many people don't know their differences and I decided to write this small article about it. Let’s first start with `||` operator. As you already know, we can use it when we need to specify a fallback value. But what is fallback value here? When a variable has a <a href="https://developer.mozilla.org/en-US/docs/Glossary/Falsy" target="_blank">falsy</a> value like `''`, `NaN`, `0`, `undefined`, `false` or `null`, if we add `||` afterwards: we have a chance to assign a new value to that variable. For example:

```js
var foo = 0

var bar

foo || (bar = 1) // if foo is falsy, assign 1 to bar.

console.log(bar) // it will print 1.
```

Or:

```js
var foo = ""

var bar

foo || (bar = 1) // if foo is falsy, assign 1 to bar.

console.log(bar) // it will print 1.
```

And so on.

I hope it's clear so far... But why do we need `??` then? Because there are some cases which we only want to check **if the value is `null` or `undefined`**. So instead of checking all falsy values we just want to check the value whether it is `null` or `undefined`. Let’s go back to our previous example:

```js
// now we want to only assign 1 to bar
// if foo is null or undefined:
var foo = null

var bar

// if foo is null or undefined, assign 1 to bar.
foo ?? (bar = 1)

console.log(bar) // this will print 1.
```

and

```js
var foo = ""

var bar

// if foo is null or undefined, assign 1 to bar.
foo ?? (bar = 1)

// this will print undefined in this case
// because we don’t have a value for bar yet.
console.log(bar)
```

**Fun fact:** before _ECMAScript2021_, it was not possible to use `??`in JavaScript (yeah, it was first added to TypeScript in 2019) but now we can use it in JS as well. Yayyy! 🎉 You can find further information about it [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator).
<br>
<br>
