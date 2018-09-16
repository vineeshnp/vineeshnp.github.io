---
layout: post
title: "Decoding Python as a NodeJS developer."
bigimg: /img/posts/python-node/header.jpeg
share-img: /img/posts/python-node/header.jpeg
tags: [blog, programming, opinion]
show-avatar: false
---

> So I took a turn to write a live Python app. Let me take you through a journey of a Javascript developer writing a Python project

# Pilot
Javascript and Python are two aggressively competing language in the market. I have been writing Javascript code since I started my career. Written tons of lines in both back end and front end. And later when I started writing Python, it gave a different perspective. 

> This is not a guide or step by step preparation for a tutorial. Rather more of a kind of experience
amalgamated with a gesture of opinions.

## Installation
### Python
Python comes pre loaded with Linux and Mac, but for windows we may have to install it. Mostly Python2 will be the default version. Days of Python2 is gonna fade eventually, all the recent projects are using Python3. Incase of starting a new project, I would hardly recommend Python2 unless there is a serious dependency with legacy code or some library. Python3 might not come out of the box, but could be easily installed.
### NodeJS
Well.... am not sure of any operating system that comes NodeJS pre installed, I mean till date. But installation is straight forward in all platforms. There are executable for Windows and brew/apt/yup/... packages for mac/linux.

## Starting a REST api project
### Python
So for an accelerated development, we could choose [flask](flask.pocoo.org/) or [dJango](https://www.djangoproject.com/)(read as jango) to write apis. Flask is a customizable library with less opinionated view. We could re draw the architecture of the project as we need. Now this comes with its on responsibility too. Where as dJango is a sort of frame work. Architectural changes that we could make to the project is limited. But the architecture of dJango is done by an amazing engineers and is rock solid. Needless to say, [instagram](https://medium.com/@InstagramEng) is one of the largest dJango deployment.

### NodeJS
[Express](https://expressjs.com/) is the first word everyone yells when it comes to REST in NodeJS. Express is a light weight and good framework. But there are options like [hapi](https://hapijs.com/), [restify](restify.com/) (Netflix uses this) and [loopback](https://loopback.io/). Even without any framework we could create REST endpoints, but that may look like re inventing the wheel.

## Dependency management
Python uses [pip](https://pypi.org/project/pip/) and NodeJS uses [npm](https://www.npmjs.com/), although there is a stronger sibling [yarn](https://yarnpkg.com/). One thing to notice about Python dependency management is, all the external dependencies installed using pip goes to the system binaries of Python. I mean, all the dependencies will be saved where Python is installed. Considering the age of Python, this seems to be an obvious choice that they made during those days. The problem arises when we need to run multiple application written in Python which uses different versions of same library. And with [virtualenv](https://docs.python-guide.org/dev/virtualenvs/) this problem is no more [NPHard](https://en.wikipedia.org/wiki/NP-hardness).

NodeJS dependency management is more clean. All the dependencies mentioned in the `package.json` file goes to the folder `node_modules` which resides in the project's root directory. So multiple project using multiple versions of a specific library is not an issue. Python needs the Python binaries along with dependencies, where as NodeJS doesn't need it. And to export a module from a file an explicit export statement is needed in NodeJS, where as its not needed in Python. And the import statement is always relative to the file in NodeJS, where as its absolute in Python.

## Coding pattern
Python uses synchronous coding style, which means the second statement will wait till the first statement completes execution. On the other hand, NodeJS by default is asynchronous. Which means, if we hit any process which uses i/o, that goes to background and next statement starts executing. And this is the reason why NodeJS is good for an i/o or data intensive back end. 

Async code usually comes under the cost of readability. But the recent ES6 `async await`, seems to be an implementation on an edge. On the other hand async nature is the feature that makes Javascript stand apart from others. Out of the box async await is great, for i/o or data intensive applications.

## Execution pattern
Concurrency is by default to NodeJS/Javascript[sort of, not as go routine concurrency]. This is achieved by the use of event loop and its single threaded concept. Event-loop some times comes under some cost, which we will discuss in further part. So basically any request emerging from remote server, will be processed by the event loop.
Python, to be precise Flask, come out of the box with a single process. So if we simply put the dev environment to live, you could see the request getting bottle-necked. And no one does that, we usually use workers to implement this. We use Gunicorn workers, to do parallel processing of the requests. Gunicorn could be configured for both [synchronous and asynchronous](https://stackoverflow.com/questions/10938360/how-many-concurrent-requests-does-a-single-flask-process-receive?answertab=votes#tab-top) execution.

## JSON and marshmallow
XML is a long gone stories for developers now(sorry for legacy developers). JSON is now used as the common response data-type. And for Javascript json is first class citizen. And json data received or to be send from the server, it could be simply loaded to a variable and do operations on that[Well this is bot good and bad].
On the other hand, there is no native support for json objects in Python. Which means you cant directly operate on top of JSON objects in Python. JSON objects is to converted to Python objects and only on that objects operations could be performed. [Marshmallow](https://marshmallow.readthedocs.io/) library could help this action in python.

## Functional support
Both language support functional paradigm out of the box. Or functions are considered as first class citizen by both Python and Javascript. So in these languages
* Functions can be nested.
* Functions can be passed as parameter to another function.
* Function could be returned from another functions.
* Functions could be stored into the data type.

> An important thing here is how closures work. May be I will write it as a different blog, how closures work on Python and Javascript. Closures work differently on each platform.

## Decorators
This is one awesome thing I felt in Python. If any one who is not aware of decorator, let us take an example to explore it

```Python
@foo
def method(params):
    pass
```

`foo` is the decorator called here.
> Here the function `method` will be passed as an argument to the decorator function `foo`. The function `method` will be called inside the function `foo` 

For step by step guide to function decorators in Python, refer [this](https://realPython.com/primer-on-Python-decorators/).

Sadly Javascript lacks decorator, but we have a happy news. Decorators are on the way on ecmascript. More about that on [here](https://github.com/tc39/proposal-decorators).

## Performance
Well in the context of a data intensive restful back end service, NodeJS might perform sound. Especially the new [v8](https://github.com/v8/v8) improvements coming each day makes NodeJS stronger and quicker. Needless to say it might hang a bit when it comes to computational intensive stuffs. This is why because, NodeJS runs on a single thread called event loop. Whenever an i/o operation occurs, event loop with the help of [libuv](https://github.com/libuv/libuv) library sends the tasks to newly spawned thread. So new thread spawning happens only for an i/o task. Am not talking about the experimental implementation of [workers](https://nodejs.org/api/worker_threads.html) and [clustering](https://nodejs.org/api/cluster.html) here. Those works in a different way.

Python is not as fast as NodeJS, but could do complex thing in simple way. And for computational intensive tasks Python could go better than NodeJS. On top of that, using [cython](cython.org/), a `C` dialect of Python gives much performance improvement over Python for computational intensive tasks. 

## Maturity
Python is very matured. Language evolved very well, and Python 3 we could say a language with a great legacy.
NodeJS is young. On the other hand, is Javascript beneath NodeJS is old. But Javascript is a language created within 10 days. In the initial days, it cant even be considered as a language. But with ecmascript updates, Javascript turned to a decent language, and the upcoming changes in the pipeline hopefully make it better. 

## Availability of libraries
Abundance of library is stellar for both Python and Javascript. With `pip` and `npm` we could get a library for almost any purpose.

## Debugging 
NodeJS and Python comes with debuggers. Which means rather than printing each line to test output, you could put breakpoint and stop execution flow.
One easy way to work with debuggers is using [vscode](https://code.visualstudio.com/) or [JetBrains](https://www.jetbrains.com/) ide. Since NodeJS runs on top of v8, it could be directly debugged using [Chrome](https://nodejs.org/en/docs/guides/debugging-getting-started/).

## Going live 
Both Python and NodeJS is recommended to go with nginx. But Python might need [gunicorn](https://gunicorn.org/) and [celery](www.celeryproject.org/) task queue, for better task management. 

On the other hand if we are going with PaaS services, configurations might be available from a predefined set. If we are going with IaaS, its better to do deployment with [docker](https://www.docker.com/) and [kubernetes](https://kubernetes.io/).

# Conclusion
Both Python and NodeJS is great tool for back end. Both are growing exponentially. Choosing the right platform depends upon several aspects and tradeoffs. Few of them worth mentioning are

## Go with Python if you are building
* Monolithic
* Computational intensive
* You have good no of Python developers in the organization

## Go with NodeJS if you are building
* Microservice
* Data Intensive
* You have good no of Python developers Javascript in the organization