---
layout: post
title: "Async Await - The good, the bad and the ugly"
description: "Async await is a great implementation for better code structure, but
it comes with its on price..."
bigimg: /img/posts/async-await/header.jpg
tags: [javascript, es6, async-await, opinion]
---

> Its been a long time since I wrote a blog. So let me break that laziness here.
> For the past few months I was associated with architechting and developing the back-end of a real time game. When there is a game, there will be game rules, and these rules is to be applied in sequence's(most of the case),...

# Inception

For many reasons we thought of building the backend using nodeJS. And the first problem as you might be thinking was the sequential implementation of rules using an asynchronous event driven programming language.

A function definition, which doesn't jumps out of the event loop will be okay. But if there is an i/o call to be done in any of the function,
then we are suppose to write the function with callbacks(😒) or Promises. And both of these will jump out of event loop, and sequential execution will be like a nightmare. Its okay, if it is just one person developing and releasing the code, but as we all know we spend more of the time reading the code rather than writing the code. And we realized developing such code base will turn the maintainer of the code to a knock the
developer's door, with a chair on his hand.

And that was the time when `async-await` started rolling out natively with nodeJS. And that gave us a
feel of relief. Async-await helped us to write the sequential code base in a linear fashion.

Any newbie jumping into js ecosystem feels callback hard to digest.
There is a learning curve to understand asynchronous execution and its paradigm if people are coming from other language backgrounds. Promises greatly solved the problem of callbacks, thats true
but promises never felt like an easy to use tool for a fresher. Async await is more of a kind of syntactic sugar over promises, nevertheless this helps the readability of the code.

# Lets see the good the bad and the ugly.

`this is not a procedural tutorial for async-await of js, rather it an opinion on different scenarios`

```javascript
const obj = {
  a: 10,
  b: 20
};

const foo = async args => {
  /**
   * The args is assumed to be an object;
   */
  args.a = 100;
  return args;
};

const doo = args => {
  args.a = 200;
  return args;
};
```

## case 1

Now lets create some function calls for above code!

```javascript
const init = async () => {
  console.log(obj.a);
  await foo(obj);
  console.log(obj.a);
  doo(obj);
  console.log(obj.a);
};

init();
```

### Output

```javascript
10;
100;
200;
```

the out put is self explanatory, everything seems to be working in the order.

## case 2

Now lets make few changes in the calling stack and see how the output changes.

```javascript
const init = async () => {
  console.log(obj.a);
  let tempFoo = await foo(obj);
  console.log(tempFoo.a);
  let tempDoo = doo(obj);
  console.log(tempDoo.a);
};
```

### Output

```javascript
10;
100;
200;
```

The output dosent seems to have much of changes, since all we did is adding a temporary variable to obtain the result.

## case 3

Now lets take away the await from calling stack of case1

```javascript
const init = async () => {
  console.log(obj.a);
  foo(obj);
  console.log(obj.a);
  doo(obj);
  console.log(obj.a);
};
```

### Output

```javascript
10;
100;
200;
```

Even now the out put doesnt seems to have much changes, but an interesting thing to notice here is the execution flow deviated to
async task and came back to main thread before anything is executed in the main calling stack. So this is the thing about async-await in
nodejs

> If there is no i/o tasks involved in an async call, the execution follows the linear path.

## case 4

But there is a catch here, lets take the `case2` and remove await on that to see what happens there.

```javascript
const init = async () => {
  console.log(obj.a);
  let tempFoo = foo(obj);
  console.log(tempFoo.a);
  let tempDoo = doo(obj);
  console.log(tempDoo.a);
};
```

### Output

```javascript
10;
undefined;
200;
```

Now here is the catch, the variable that stores the return value will only get a pointer to the promise at the time of
invocation, even though the invocation is linear.
`tempFoo` is never resolved during the execution flow.

`case3` and `case4` is slightly confusing while seeing it for first time. But practicing async await will take away that.

`doo` and `tempDoo()` is given to understand how a normal function work wrt an async function.

# Conclusion

[async-await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function) is a demanding implementation. It resulted in improved readability, thats true.
But still a sugar coating on [Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function). Even though it takes away the
hard part of Promises, it doesn't resolves all of those.
