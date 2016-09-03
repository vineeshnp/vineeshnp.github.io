---
layout: post
title: "Functional programming in Javascript"
description: "a style of building the structure and elements of computer programs—that treats computation as the evaluation of mathematical functions and avoids changing-state and mutable data. Here we are trying
that with Javascript"
tags: [Javascript, functional-programming, blog]

---
>In computer science, functional programming is a programming paradigm—a style of building the structure and elements of computer programs—that treats computation as the evaluation of mathematical functions and avoids changing-state and mutable data - wikipedia.org

It may sound hallucinating when you read Javascript and functional-programming
in the same line. Cool! natural, Nevertheless lets get it straight. With js you
could craft functional-programming.

functional-programming is a programming paradigm that we follow while programming.
Some other paradigms are [imperative](https://en.wikipedia.org/wiki/Imperative_programming),
[declarative](https://en.wikipedia.org/wiki/Declarative_programming),
[Object-oriented](https://en.wikipedia.org/wiki/Object-oriented_programming),
[procedural](https://en.wikipedia.org/wiki/Procedural_programming ), etc...
If you feel paradigms as a big word, lets take it this way. functional-programming
is a way of writing programs in a different way, rather than how we used to write.
Most of us might be following one or the other way mentioned above to write programs,
and functional-programming isn't everyone's plate of choice. Most of the time it
resides under the cover of academic curriculums. Nevertheless now a days, industry
started responding positively towards FP. We could see a good no of people trying
FP.

# What is functional-programming?

* Everything is written as functions
* So the input flows to the function to produce output
* Its a style of coding.
* Its also a kind of mindset

It might be easy for you to understand FP from an example.
Lets write a `python` script to compute first 10 fibonacci numbers

```python
def fibonacci(n, first=0, second=1):
    while n != 0:
        print(first, end="\n") # side-effect
        n, first, second = n - 1, second, first + second # assignment
fibonacci(10)

```
The output will be
0 1 1 2 3 5 8 13 21 34

Now lets see how it could be written in functional way

```python
fibonacci = (lambda n, first=0, second=1:
    "" if n == 0 else
    str(first) + "\n" + fibonacci(n - 1, second, first + second))
print(fibonacci(10), end="")

```

As you could see, we had followed a recursive approach here. This is a normal method
of achieving FP. And now to give a clear idea, everything is written as function.

If you need to do any task, that should be handled by functions. That means let it
be `insertion to a red-black tree` or `iteration through an array`, it should be written
as a function. And imagine that we have a function `foo(args)`. In any time of execution
we should get same result when we pass the same input as argument. eg: If we execute
`foo(10)` at the beginning of the program and get result as `41`. Now at any time
if we execute `foo(10)` the result should be `42`. That means anything that happens
in between doesn't effect the program execution. This is a good part of FP, a function
wont interfere into other portions of execution, like it will not change the values
that doesn't belongs to it. And removing a function wont create any issue, if there
is no dependency on the function. That means, in an overall perspective
we could write better code which doesn't have side effects.

# Functional-programming with Javascript

JS is one of the fast growing platforms on the planet. You could write server apps
to desktop apps to mobile apps with JS. Here I would like to show you, its beauty can
also be explored with FP.

## Why in Javascript?
* Most vars are declared as global in JS, thus accidental changes can happen from
nowhere
* Object-oriented programming with prototyping is a sort of confusing if you are
coming from other languages
* sometimes the `this` you were referring might not be the `this` that you were referring,
sounds crazy right!
* You may come up with several bugs due to change in context of `this` in JS.

FP can address the above issues, to give a hassle free experience with JS by writing
safe code that's easy to maintain and debug.

## How we do that in Javascript.

* Rule #1 everything is to be expressed as a function

> input -> function() -> output

### Hello world!
Lets write a hello world in normal JS

```js
var msg =  'Hello world!'
var msg2 = ' from JS'
console.log(msg + msg2)

// Hello world! from JS
```

As you can see its an imperative style. First do this, then do that... kind of
method.

Lets try the same in functional way.

```js
//functional approach

function say(msg){
  return 'Hello world! '+ msg
}

say('from JS');

//returns Hello world! from JS

```

### Pure-functions
We said that one important thing of functional programming is to avoid side-effect.
For that we use [pure-functions](https://en.wikipedia.org/wiki/Pure_function).
pure-functions returns the same value always, if you provide same input. It doesn't
make use of global vars or it doesn't alters any vars beyond its scope. Thus we could
say it wont create any observable side-effect.

```js
//not pure

var msg = 'from JS'

function say(){
  return 'Hello world! '+ msg
}

say()
//returns Hello world! from JS

```

As you could see, this is not pure. Its making use of global var `msg`.

```js
//pure function

function say(msg){
  return 'Hello world! '+ msg
}

say('from JS')
//returns Hello world! from JS

```

### Higher-order functions

* A function that can take another function as input, or
* A function that can return another function.
* This is a sort of concepts in mathematics.  

```js
function foo(outerArg){
  return function(innerArg){
    return outerArg + ' ' + innerArg;
  }
}

var fooObject =  foo('Hello ')

fooObject('World')

//returns Hello World
```

## Handling iteration
* Good bye to `for`, `while`
* We will use map, reduce, filter

### map

* You can see map as functional implementation to for each

Without map

```js
var numbers = [1, 2, 3, 4];
var newNumbers = [];

for(var i = 0; i < numbers.length; i++) {
    newNumbers[i] = numbers[i] * 2;
}

console.log("The doubled numbers are", newNumbers); // [2, 4, 6, 8]

```

The same can be achieved with maps

```js
var numbers = [1, 2, 3, 4];

var newNumbers = numbers.map(function(number){
    return number * 2;
});

console.log("The doubled numbers are", newNumbers); // [2, 4, 6, 8]
```

### filter

* filter is as it sounds like, isolation of required items.

Without filter

```js
var numbers = [1, 2, 3, 4];
var newNumbers = [];

for(var i = 0; i < numbers.length; i++) {
    if(numbers[i] % 2 !== 0) {
        newNumbers[i] = numbers[i] * 2;
    }
}

console.log("The doubled numbers are", newNumbers); // [2, 6]

```

With filter

```js
var numbers = [1, 2, 3, 4];

var newNumbers = numbers.filter(function(number){
    return (number % 2 !== 0);
}).map(function(number){
    return number * 2;
});

console.log("The doubled numbers are", newNumbers); // [2, 6]
```

### reduce


Without reduce

```js
var numbers = [1, 2, 3, 4];
var totalNumber = 0;

for(var i = 0; i < numbers.length; i++) {
    totalNumber += numbers[i] * 2;
}

console.log("The total number is", totalNumber); // 20
```

With reduce

```js
var numbers = [1, 2, 3, 4];

var totalNumber = numbers.map(function(number){
    return number * 2;
}).reduce(function(total, number){
    return total + number;
}, 0);

console.log("The total number is", totalNumber); // 20
```

These are just examples, for more explanation on this please visit
[cryto.net's article](http://cryto.net/~joepie91/blog/2015/05/04/functional-programming-in-javascript-map-filter-reduce/)

courtesy for map, reduce, filter code snippets : [cryto.net](http://cryto.net/~joepie91/blog/2015/05/04/functional-programming-in-javascript-map-filter-reduce/)


## Avoid mutation
* Do not change the value of a var once it is set.

An eg of mutation

```js
var rooms = ['b1', 'b2', 'b3']

rooms[2] = 'h1' //mutated

// rooms => ['b1', 'b2', 'h1']

```

* Functional programming try to avoids mutation since it can create issues.
* Thus whenever a variable changes, we create a new variable.
* It might be tedious to create new object from scratch
* Thus we have couple of awesome libraries that can handle this problem like   
 [mori](http://swannodette.github.io/mori/), [Immutable.js](http://swannodette.github.io/mori/)


# Conclusion
 * Tried to cover up the surface of functional-programming with JS
 * FP is quiet large and may not fit into the scope a blogpost
 * Rule of thumb is that, functions does everything
 * Using FP in JS, shall reduce good number of problems that may occur in conventional
 JS approach.

# Gratitude and Further reading
 * Thanks to [Anjana Vakil](http://vakila.github.io/) who was the motivation behind
 this article.
 * For further reading you can refer, "An introduction to functional programming"
 by Mary Rose Cook
