---
layout: post
title: "Five points for a new and a better project."
bigimg: /img/posts/five-points-for-a-new-project/header.jpg
share-img: /img/posts/five-points-for-a-new-project/header.jpg
tags: [blog, programming, opinion]
show-avatar: false
---

> For few of us starting a new project is always an excitement, and for rest of us there is a friction for generating the first file. Opinionated boiler plates, these days covers the friction what we feel for the pilot. Lets take a look at 5 ineluctable factors we should be aware in this time, for a project. 

Note : This is not any step by step guide for starting a new project. In fact, when a serious project is being started there are precise set of tasks to be done in an ample way. Here, let me discuss 5 things with or without you could do a project. You can take it as `good to have` or `must to have` based on your ideology. Generally there is nothing wrong it arguing these elements as `must to have`.

Also the contents are written in very lyman terms, so that the level of knowledge expected to grasp the blog is `novice level programming`.

# 5 must to have things.
Let me make one point clear. If you are thinking, that you are working on a project for just you, and these points doesn't makes any sense for a single person managed project - its more like 

Following this

```javascript
var a = 10;
var b = 20;
var c = a + b;
```

Rather than this

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

And eventually, you do like

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

> Now if you were the kind of person I mentioned in the first place, lets break the friction for one time and see how it goes 😤.

## Version control system(VCS).

This is the first step you need to do as soon as you start a project from scratch.
If you are using any boiler plate or code generator, this might be already done by the tool.
If not, the first step should be.

```bash

git init

```
> You are free to use any vcs instead of [git](https://git-scm.com/). If you are a newbie, I would strongly recommend git.

Without VCS you cannot manage a project of any scale. Today or tomorrow it will hold your throat, for the comfort you indulged over the period of time.

### Let's see few magics, which VCS does to us.
* Your code base is milestoned for every change we make. You are free to define when to milestone a specific task of the project. And we can easily go back to any milestone.

* Git works well with a backend like [github](https://github.com) or [gitlab](https://gitlab.com), in fact it is designed to be used in that way. You could always push your code to the backend and safeguard your work. 

> Who knows when the OS crashes to an un recoverable state.

* Collaboration is a breeze now. Its easy for you and your pals to work on same project at same time. You can even work on the same module at same time, and git will hint the conflicts between collaboration - when you are ready to [commit](https://git-scm.com/docs/git-commit)(create a milestone).

* Different version can be kept in same directory with the `git branch`. You no need to create and zip your project each now and then.

* Tagging makes it easy to get back and forth between different versions of the project.

* Easy code review and comparison. Say a junior dev just pushed a change to separate branch. Its really easy for you to compare the difference between two code base. This also enables, easy code review. 

## Meta files.

### Readme

A typical sound project in github if you check, you can see a markdown file `README.md`. A good `README.md` file should contain the following elements.

| Intro to the project |   
| Setting up development environment |
| Up and running the project |
| Details of configurations |
| Basic structure of the project |

Mostly if the project is our pet / personal / single-hand project, you might be mesmerizing `README` is inconsequential. But this should be a practice, if the project is personal or enterprise.

> README should be the wiki of project. A new developer should be able to contribute, without another developers help.

Its a good idea to put a `README.md`, within every module's directory. When you view code in github or gitlab, it expands `README.md` into beautiful doc for the module.

### Licence

A document which explains/grants how the project can be used - changed - published thats what a licence mentions. If you are from grad school, it might not make much sense. But if you are a developer advocate, these documents are in evitable.

In paper, you are not suppose to change / contribute to a project without any licence mentioned. Licencing is giant. It can raise billion dollar disputes. Every project should adhere to one licence. This ensure(mostly) that the project can breath even after the original developer(s) abandon the project.

If you are planning for an opensource project, my personal suggestion would be [MIT](https://opensource.org/licenses/MIT) licence. You can read more about licenses on my previous blog [post](/2019-03-16-software-licenses-explained/).

> A `changelog.MD` is also good to have, where every tagged release is versioned

## Issue / Feature tracking.

Issues or features can be jotted down any where. We can jot down issues in notepad or spread sheet or on a book. But now we have advanced tools like Jira and bugzilla. If you are not on an enterprise project, these tools can be complex or expensive to fit in. 

Both github and gitlab, provides an issue section to manage tickets. Ticket can be tagged to several groups like `feature`, `bug`, `enhancement` or any custom name you wish. 

## Code formatted.

The way I write code might be different from, how you might be writing code. Lets take examples 

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

Clearly we can see significant difference in the way same statement is written with different ways.
And when we have a mix of all these kinds, it will be less readable to eyes. So we can use code formatters that auto format the code each time when we save. And if you are working as a team, be sure all of you share same code formatters. Every code formatted can further customized by configuration files. And make sure, as a team you share same configuration file across.

And the most annoying issue - mixing tabs and spaces. Code formatter will take care of that as well.

Generally every organization try to use a specific code formatter with a customized configuration file. 

Few examples of code formatters are.
* Prettier
* EditorConfig
* ESLint
* PyLint
* RuboCop
...


## Proper commenting and unit tests.

### Comments
Lets get upfront to a case.

```javascript

getUserRole(userId) {
    const userRole = await fetch(`https:\\server-url.....`);
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
    const userRole = await fetch(`https:\\server-url.....`);
    return userRole;
}

```
From the above code(not something that can be used in production), its clear that comments makes code more readable. Apart from commenting `what`, we should also try to comment `why` in applicable cases.

### Unit tests
Seven out of Ten developers tend to say unit tests are good to have element. Its actually not. No matter how small, medium or big the project is - its an essential element. At first we may think, its a small project, we have test team, and 100 other excuse to make you believe that its trivial. But in reality its not. Unit test makes our code more robust. We can ensure the basic cases are working(upto an extend) without human intervention. More over, its an essential part when we implement continues integration and continues deployment. Deployment will happen only if all the tests are passed. And one of such test is unit test. 

Unit test are easy to write - with associated tools. Generally every language or framework have its on unit testing framework that make developers life easy. 

### Apart from the above 5, following are few good to have features.

* Automated code review.
* Continues integration and Continues deployment pipeline.
* Component based design and micro service architecture (As applicable).

# Conclusion
> Any fool can write code that a computer can understand. Good programmers write code that humans can understand. - `Martin Fowler.`

Writing good code is difficult. But bad code does not scale well. At one point adding a feature will be more effort than rebuilding project from scratch. These five points shall supplement us in providing a better development environment. And obviously, a betted dev environment catalyses in writing better code.

If you ask, can't I write good code without above elements. Answer is `yes, you can`.

If you ask, can't I write scalable, maintainable, extensible, stable and flexible code without the above elements. My opinion is `No, you cant`.

