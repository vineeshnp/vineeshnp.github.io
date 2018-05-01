---
layout: post
title: "Why you should be language agnostic."
bigimg: /img/posts/language-agnostic/header.jpg
tags: [programming, opinion]
---

> Typically most programmers tend to be comforted with one programming language. Some times even binding to a framework. Its obvious that, they might be trying to solidify their concepts in that domain. Or may be comforted in the ambiance of the knowledge that legacy had gifted them. Let me take you to my thoughts on,
> why a programmer must know more than one language.

# Why we code?

Computers are binary devices. i..e 1's and 0's are the only symbols it is aware of.
But for humans, coding using 1's and 0's is a herculean task, even though we have did that in the early days of computing. Thus that brought up several layers of abstraction in the world of computing,
where the `code` we write in human readable language will eventually converts to 1's and 0's.
The choices of these abstracted layers came up with tradeoffs, requirements, sometimes opinions and biases. Which in fact lead to different kinds of programming languages.

Most of us starts with on language as our main, during the first years of career. And eventually we try to
keep up with that, I mean just that. Lets take a look at the other side, of knowing multiple languages.

## Not all languages is good for all problem domains.

Its in fact true that most general purpose language could address most of the problems.
For eg: If you are planning to create CRUD apis for your front end
ios application you are free to choose any general purpose language,
like C, Java, Python, Golang, NodeJS, Erlang,...

The selection depends on<sup>[1](https://enterpriseprogrammer.com/2013/06/15/sfems-stable-flexible-extensible-maintainable-scalable/)</sup>

* the time required to build.
* maintainability.
* flexibility and scalabilty.
* and the stability

Now lets see this in a different view.
Assume a person need to undergo [appendectomy](https://en.wikipedia.org/wiki/Appendectomy).
Choosing languages like `NodeJS`, `Python` are kind of using [Metzenbaum Scissors](https://en.wikipedia.org/wiki/Metzenbaum_scissors) for the procedure,
Where as choosing `Java` or `C` is like using Chain Saw for the procedure. Chain saw have a purpose as well as Metzenbaum Scissors also have a
purpose. They are supposed to address specific needs.

* Suppose if the application is highly monolithic in nature we may tend towards JAVA or C.
* For highly computational intensive application we may choose Golang or RUST or C++.
* If neural network or AI is to be implemented, we may choose Python._[Trade of between implementation complexity and performance]_

## Readability

We read code more than we write the code. In fact good coders spent close to 90% of the time on reading the code.
Readability is having its on technical classification, which am not going into.
Nevertheless readability is not guaranteed by all programming languages. For eg: Syntax of [Lisp](<https://en.wikipedia.org/wiki/Lisp_(programming_language)>)
is not that readable, even though with rich functional features.
Now if we are aware of multipple languages like

* [Erlang](<https://en.wikipedia.org/wiki/Erlang_(programming_language)>)
* [Elixir](<https://en.wikipedia.org/wiki/Elixir_(programming_language)>)
* [Clojure](https://en.wikipedia.org/wiki/Clojure)

We could write readable code, with same paradigm.

## Memory and CPU

When we declare a `variable` and once its no more in use, Garbage collector might take that away
during its Sweeping (Believe me Garbage collector is something that I felt like a life changer).
As complex as it is, its a time consuming process. Garbage collection is
a slow process. Even though garbage collectors have evolved a lot in the past few decades.
[Rust](https://www.rust-lang.org/en-US/) is a language without garbage collector, which also ensures
memory safety. Rust imposes us to handle memory management ourself[sort of]. This is a huge win compared to C++, which is having same philosophy in terms of the usage.
So knowing fundamentals of C++ and Rust may give us a hint of choosing which one at what time.

Some Langues runs on top of VM's, eg: Java runs on top of JVM, Elixir runs on top of Erlang VM. Language runs on top of VM tend to consume CPU more compared to the one which runs on top of Kernel.
We often chooses Java or Elixir because of the trade offs, like portability.

## Concurrency

Concurrency is the ability to run workloads in parallel. True concurrency is available only if the underlying
hardware supports that. Synchronous execution in a language generally suppress concurrency. Languages like [Go](https://golang.org/) are build by keeping concurrency model at its core. [NodeJS](https://nodejs.org/en/) Supports concurrency by means of asynchronous execution and event loop. Languages like Python and Ruby are
synchronous out of the box.

We may make trade offs between Go and Node, like if its data intensive application we can go for node
and for computational intensive apps we can go for Go.

## Scalability

The term scalability is different in front and back end. In case of front end, we could say of the
ability to progressively add features to the app. On the back end its the ability to serve
the escalation of load. Back end scalability is broadly classified as [Horizontal and Vertical scalability](https://stackoverflow.com/a/11715598/6249642). Frameworks like `NodeJS`, [Phoenix](http://phoenixframework.org/) supports out of the box scalability.
Often functional programming languages([FPL](https://en.wikipedia.org/wiki/Functional_programming)) tend to be scalable than Object oriented languages([OOP](https://en.wikipedia.org/wiki/Object-oriented_programming)). Thus knowing multiple languages of different paradigm will help us to choose the right option for a
specific scenario.

## Internal implementations.

As we start coding, we might not be much worried about the internal implementation of [primitives](https://en.wikipedia.org/wiki/Language_primitive) and [data structures](https://en.wikipedia.org/wiki/Data_structure). But when we start with multipple languages we will
happen to see similar data structures in different platforms. This will impart curiosity in ourself to think
about the internal implementation. And knowing the internal implementation is essential to write sound code.

Lets take an eg

```javascript
// Slow implementation
const foo = {};
foo.x = 1;
console.log(foo.x);
delete foo.x;

// Fast and better implementation
const foo = { x: 1 };
console.log(foo.x);
foo.x = null;
```

In the former part of the code, we are re-defining the object 2 times. If we are aware of, how [v8](https://github.com/v8/v8) is internally
handling this, we will try to write the code as in later part. Because whenever we are changing the object structure, v8 will be recompiling the object which is a time consuming process.

## Hardware should also be there in mind.

[Alan Kay](https://en.wikipedia.org/wiki/Alan_Kay) once said, `Those who are really aware about software, will create there own hardware`.
We might be using general purpose hardwares, but the hardwares specifically built for a purpose does it
tasks well. Thats why RaspberryPi is not used with the smart lamp you buy.

Programming languages like `C` helps us to write code that directly interact with the hardware.
Linux Kernel is an elegant example of that.
This means that, you could even control the values that are stored in the processor register.
Fundamentals on hardware is always a plus. Deep knowledge of hardware is required to write
hardware drivers.

## Architecture will be more important

As we progress coding on different languages or frameworks, we wills start seeing
different patterns. These patterns are results of solid architectures.
This will reflect in future coding.

For eg:
a person who have coded core `php` once moved into a framework with `mvc`,
will try to follow mvc rather than plain coding. Each new language
or framework will teach us a pattern, sometimes a different one.
All these pattern have a supporting architecture.
Eventually we will start coding with some architecture in our mind. <sup>[2](http://www.enterpriseintegrationpatterns.com/)</sup>

## One language doesn't make a full stack developer.

I know you might be thinking about javascript. MEAN stack or MERN stack gives us full stack development
suite, with just one language. Well... `technically` **yes**, but not a `GOOD` full stack
developer. JS with all its horrible past, is still a great tool for front end. But when it comes to
computational intensity or monolithic back end the throttle starts.

Say we could create an android or ios app with js. But the perfomance of a hybrid app is mediocre compared to
native apps. I have written apps on native as well hybrid. Native apps seems fluidic and rich. Hybrid apps
seems to be okay in high end devices, but are dead slow on devices which is 3 or 4 years old.

# Conclusion

Now we could finally say that languages are just a medium to convert our idea into `1's` and `0's`.
Learning a different language will stretch our mind to come out of the comfort zone of an
pseudo plateau we have developed over time.

Each language is like a playground. There is always something that left to understand from the
others that we have learned.

Changes is an attribute of this world, things will change, and our stability lies on the flexibility
to adapt to a new changes.

Also at some point of time, most enthusiast developers may advance to technical architect.
At that point of time, having fingers in all language is an essential asset you should posses.

Personally am also in a sprint of learning different languages, Yet I would recommend to learn
one language from each [paradigm](https://en.wikipedia.org/wiki/Programming_paradigm).
