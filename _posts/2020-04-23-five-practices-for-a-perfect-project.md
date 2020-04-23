---
layout: post
title: "Five practices for a perfect project."
bigimg: /img/posts/five-points-for-a-new-project/header.jpg
share-img: /img/posts/five-points-for-a-new-project/header.jpg
tags: [blog, programming, opinion]
show-avatar: false
---

> For few of us starting a new project is always an excitement, and for rest of us there is a friction for generating the first file. Opinionated boiler plates, these days covers the friction what we feel for the pilot. Lets take a look at 5 ineluctable factors we should be aware in this time, for a project. 

# Why?

Before diving steep, lets see how well written code differs from mediocre.

Adding two variable can be done like,

```javascript
var a = 10;
var b = 20;
var c = a + b;
```

could be this as well,

```javascript
var firstNumber = 10;
var secondNumber = 20;
var sumOfNumbers = firstNumber + secondNumber;
```

#### Clearly the second approach is.
* Readable.
* Self documented and self explanatory.
* Easy to move to collaborative coding.
* And you don't forget this, when you look at it next year 🤗. 

And eventually, like this

```javascript
/**
 * Adds two given number and returns the added sum. 
 *
 * @param {Number} firstNumber First number for adding two values.
 * @param {Number} secondNumber Second number for adding two values.
 * @returns {Number} Sum of the two numbers passed to the function.
 */
function sumOfNumbers(firstNumber, secondNumber) {
    validateNumber(firstNumber);
    validateNumber(secondNumber);
    return firstNumber + secondNumber;
}

var firstNumber = 10;
var secondNumber = 20;
var sumO = sumOfNumbers(firstNumber, secondNumber);
```

Which in fact is very layman example, yet sound documented.

> We could see an evident impact as a reader. A code is written once, but read thousand times.


## 1. Version control system (VCS).

> Well begun is half done. 

Always use VCS for the project. [git](https://git-scm.com/) is a best known vcs among developers.
Let our first step of project be.

```bash

git init

```

Git(or any [other](https://en.wikipedia.org/wiki/List_of_version-control_software) vcs) help us to maintain the code base vigorously. Each and every software we use - like the browser, ide, editors, operating system,... All are maintained with one or the other vcs. I may take git as an example in few cases below, nevertheless most vcs have the similar functionality available.

### VCS provides following advantages.

* Your code base is milestoned([commit](https://git-scm.com/docs/git-commit)) for every change we make. You are free to define when to milestone a specific task of the project. And we can easily go back to any milestone.

* Git client works well with git backend services such as [github](https://github.com) or [gitlab](https://gitlab.com). in fact git is designed to be used in that way. 

* Collaboration is a breeze now. Its easy for you and your pals to work on same project at same time.

* Different version can be kept in same directory with the [git branch](https://git-scm.com/docs/git-branch). 

* [Tagging](https://git-scm.com/book/en/v2/Git-Basics-Tagging) makes it easy to get back and forth between different versions of the project.

* Effective code review process with pull-request or merge-request.

## 2. Meta information.

### Comments

We have seen the importance of comments from the beginning. Nevertheless lets take another example to see the difference.

```javascript

getUserRole(userId) {
    const userRole = await fetch('https:\\server-url.....');
    return userRole;
}

/**
 * Fetches role of specific user from the remote server.
 * This api is not cached.
 *
 * @param {Number} userId User id of which user role to be fetched.
 * @returns {String} returns `admin` or `developer` or `reader`.
 */
getUserRole(userId) {
    const userRole = await fetch('https:\\server-url.....');
    return userRole;
}

```
From the above code(not something that can be used in production), its clear that comments makes code more readable. Apart from commenting `what`, we should also try to comment `why` in applicable cases.

### Readme

A typical sound project in github if you check, you can see a markdown file `README.md`. A good `README.md` file should contain the following elements.

| Intro to the project |
| Setting up development environment |
| Up and running the project |
| Details of configurations |
| Basic structure of the project |

Mostly if the project is our pet / personal / single-hand project, you might be mesmerizing `README` is inconsequential. But this can be a practice. If we adapt to a good culture of documenting project, an year down the line it will be easy to look back.

Google provides an exceptional material for technical documentation. You can check that [here](https://developers.google.com/tech-writing).

> README should be the wiki of project. A new developer should be able to contribute, without another developers help.

Its a good practice to keep a `README.md`, within every module's directory.

### Licence

A document which explains/grants how the project can be used - changed - published thats what a licence mentions. If you are from grad school, it might not make much sense. But if you are a developer advocate, these documents are in evitable.

In paper, we are not suppose to change / contribute to a project which does not have a licence mentioned. Licencing is enormous. It can raise billion dollar disputes. Every project should adhere to one licence. This also ensure(mostly) the project can breath even after the original developer(s) abandon the project.

If you are planning for an opensource project, my personal suggestion would be [MIT](https://opensource.org/licenses/MIT) licence. You can read more about licenses on my previous blog [post](/2019-03-16-software-licenses-explained/).

> A [changelog.MD](https://github.com/olivierlacan/keep-a-changelog/blob/master/CHANGELOG.md) is also good to have. 

## 3. Issue / Feature tracking.

Issues or features can be jotted down any where. We can jot down issues in notepad or spread sheet or a book. But now we have advanced tools specifically designed for the purpose.

Both github and gitlab, provides an issue section to manage tickets. Ticket can be tagged to several groups like `feature`, `bug`, `enhancement` or any custom name you wish. Leverage tools like this. When ever you see a bug in the code, create a ticket. That spark in your head of an enhancement, create a ticket. All these data possess immense value wrt to project's life cycle. So let there be an exclusive place for jotting all.

## 4. Code formatter.

The way I write code might be different from how you might be writing code. Lets take examples 

### declaring a variable in java.

```java
int number1=0; // developer 1

int number1 =0; // developer 2

int number1 = 0; // developer 3
```

### commenting in javascript.

```javascript
/**
flag1 */
const flag1 = false;

/**
flag2 
*/
const flag2 = false;

/**
 * flag3 
 */
const flag3 = false;
```

Clearly we can see significant difference - in the way same statement is written.
And when we have a mix of all these kinds, it will be less readable to eyes. So we can use code formatters that auto format the code each time when we save. Every code formatter can further customized by configuration files. <u>If we are working as a team, be sure all of us share same code formatter and configuration file.</u>

Generally every organization try to use a specific code formatter with a customized configuration file. 

Few examples of code formatters are.
* Prettier
* EditorConfig*
* ESLint
* PyLint
* RuboCop
...


## 5. Unit tests.

* It is the basic level of testing, where independent modules are tested.
* A developer is suppose to unit test all the modules, before delivering to Quality Assessment.
* And on every change we make to source code, we are suppose to unit test all modules. This is to make sure existing features are not affected by new changes.
* An <u>automated unit test</u> verifies - each module's invocation results in an expected value / behavior.
* In other words we can say, its a code which tests the source code.

### Why we should write automated unit tests?
* A considerable amount of time spent by a developer on testing can be saved.
    * Say we take 10 minute to unit test all the modules manually.
    * Lets say we makes a delivery every day.
    * In a month(20 days) total time spent on testing will be 200 minutes, thats more than 3 hours.
* Thus an automated unit testing should be an integral part of a project.
* Most language and associated frame work have dedicated tools for unit testing.
* Such tools simplifies writing unit tests, and provides hassle free integration to CI-CD pipeline.

### Apart from the above 5, following are few good to have features.

* Automated code review.
* Continues integration and Continues deployment pipeline.
* Component based design and micro service architecture (As applicable).

# Conclusion
> Any fool can write code that a computer can understand. Good programmers write code that humans can understand. - `Martin Fowler.`

Writing good code is tough. Yet if we don't, at some point of time adding a feature will be more difficult than rebuilding the project from scratch. Following certain best practices will take us one step closer in writing scalable, maintainable, extensible, stable and flexible code. 

> Remember the golden rule of thumb - "It all comes with the practice".

