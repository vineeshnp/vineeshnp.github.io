---
layout: post
title: Eventloops and callbacks in javascript.
modified: 2016-08-20
tags: [javascript, v8, nodejs, event-loop, callbacks]

---

Eventloop is one important behavior of a javascript runtime. To be clear on this
its a concurrency model of javascript runtime. If you are new to javascript, its
 advised to get further background about js. I assume readers are familiar with javascript,
and some fundamental aspects of browser's working.


# Architecture of JS Runtime
<figure class="one">
	<a href="https://developer.mozilla.org/files/4617/default.svg"><img src= "https://developer.mozilla.org/files/4617/default.svg" alt=""></a>
	<figcaption>Image courtesy : mozilla</figcaption>
</figure>

We know that JS is an asynchronous event driven programming language. The term
asynchronous means it doesn't block the execution if a lagging task appears in
the execution path.

> A lagging task means, any task which may take time to execute, for eg: a
function calling an api may take considerably long time than a function
executing an arithmetic operation.

eg:

```js

readFileFromServer(function(){
  //logic for reading file
  alert('File read')
});
alert('Hello World');

```

In the above example, `Hello World` will be shown first. Since readFileFromServer
 is executed with callback, `File Read` will be displayed only after `Hello World`
when the file is actually read and we get a response from the server.

## callback()

This is achieved by means of callbacks or callback functions. Lets first see
what is a call back function in javascript. It sounds confusing for the first time,
 but its like pointers in 'c', once you get it you will grind it. Let me explain
 callbacks with an example.

```js
//define callback function
function handlePhoto (location) {
  if (location) {
    alert('Photo is downloaded to ',location)
  }
}
//define download function
function downloadPhoto(url, callback){
  var location
  /*
    download logic
  */
  //the variable 'location' stores the downloaded image path

  //when the download completes and location is available, it will invoke callback fucntion
  callback(location)
}
//envoke download function
downloadPhoto('http://coolcats.com/cat.gif', handlePhoto)
```

Basically you can assume like passing a function as a parameter. If you are
still confused with the code, see the above code if we write it after expanding.

```js
//define download function
function downloadPhoto(url, callback){
  var location
  /*
    download logic
  */
  //the variable 'location' stores the downloaded image path

  //when the download completes and location is available, it will invoke callback fucntion
  callback(location)
}
//envoke download function
downloadPhoto('http://coolcats.com/cat.gif', function (location) {
  if (location) { //discards if location is undefined
    alert('Photo is downloaded to ',location)
  }
})
```
the execution goes like

First `downloadPhoto(... , ...)` is invoked, with two parameters `first, a string;
second, a function` upon completing downloadPhoto, instead of return statement we have callback,
which will invoke the function that is passed as the argument. We checks the
`location` variable, and alerts the location.


## Why callback() is cool

Whenever a callback function is executed, it wont block further execution of the
 program. It will be queued in the back, and continues in main thread once it
 completes. Now you might be having a question, javascript is said as single threaded
 executing and what the heck is this callbacks goes to backend. Well to be precise
 javascript runtime([v8](https://github.com/v8/v8/) for google chrome) is single threaded.
 A browser may contain couple of other components
 as well, like eventloop, layout engine, execution stack, webapi's. All these works
 together in a particular way, which we simply call a browser.

[NodeJS CallBack](http://www.tutorialspoint.com/nodejs/nodejs_callbacks_concept.htm)

[jQuery Callback](http://www.w3schools.com/jquery/jquery_callback.asp)

[In detail](http://callbackhell.com/)

# Eventloop

You can think eventloop as a queue.
<figure class="one">
	<a href="{{site.url}}/img/posts/event-loops/eventloop01.jpg"><img src= "{{site.url}}/img/posts/event-loops/eventloop01.jpg" alt=""></a>
	<figcaption>Event Loop</figcaption>
</figure>

* Any function that is to be executed will go to the `stack`
* Assume we perform a callback with setTimeout()

```js

setTimeout(function callback(){
  alert('message displayed after 3 seconds')
},3000)

```
* We said setTimeout() is actually a part of webapis. Thus execution will go to
webapi, that will work in background.
* Now webapi will take care of setTimeout() function.
* Once at least 3 second delay is happened, the `callback()` function is ready to
execute.
* So the `callback()` will be pushed to the eventloop queue.
* Whenever the stack goes empty, the browser will take a look in the event loop
queue.
* If the queue isn't empty, it will pop that item, and moves it to stack
for execution.
* And that function[`callback()`] is executed.

Non blocking nature of javascript is the one which keeps it apart from others.
[For further reading on concurrency model and eventloop refer this](https://developer.mozilla.org/en/docs/Web/JavaScript/EventLoop)
