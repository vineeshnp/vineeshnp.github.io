---
layout: post
title: "Enterprise level javascript frameworks"
description: "When it comes to an application of substantial magnitude, angular, react and ember might not be a best solution. There is much more in the industry besides these eye-candy toys"
tags: [Javascript, Enterprise, Frameworks]
image:
  feature: enterprise-js-frameworks/header.jpeg

---
>When it comes to an application of substantial magnitude, angular, react and ember might not be a best solution. There is much more in the industry besides these eye-candy toys. Some applications are built and meant to run for decades. Scalability and maintainability is as cardinal as usability here. 

Thus enterprise solution for front-end web uses few peculiar tools, which are quiet deviated from recent js frameworks and which resembles to solid frameworks like swing for java. Here we will take a look at [closure](https://google.github.io/closure-library/source/closure/goog/demos/) from [google](https://developers.google.com/closure/library) and [openui5](https://openui5.hana.ondemand.com/#demoapps.html) from [SAP](https://github.com/SAP/). The architecture of these libraries are molded by considering SFEMS - Stable, Flexible, Extensible, Maintainable, Scalable.

Applications like gMail, google docs, google drive are built on top of closure library. On the other hand, all the SAP application viz having a web interface uses SAPUI5. openUi5 is a close fork of sapUi5 which comes under open source licence. Now lets take a close look at both of these beasts.

FYI, the learning curve for these libraries are quite steep. If you are a novice developer you may have to invest significant time to get going with these libraries. And in order to become a pro developer, you may have to spend years with these tools. Neither I am a pro in both of these tools.


# Closure from Google

Following tools are developed on top of [closure](https://google.github.io/closure-library/source/closure/goog/demos/).

* Google Search
* Gmail
* Maps
* Docs
* Sites
* Books
* Blogger
* Calender
* Google+
* Photos

## Getting started

Now lets see how we can run a `Hello World` with closure.

### Download the library

We could either fetch it from [github](https://github.com/google/closure-library/) or install it using [npm](https://www.npmjs.com/package/google-closure-library). Run the following on your terminal.

```bash

git clone https://github.com/google/closure-library.git

or

npm install google-closure-library

```

Now we have our local copy of the library inside the directory `closure-library`, if you did it via github. If you were using npm, then the library will be inside `node_modules` directory.  

## Create the js file

Now lets create a file called `helloworld.js` next to `closure-library` directory with following contents.

```js

goog.require('goog.dom');

function sayHi() {
  var newHeader = goog.dom.createDom('h1', {'style': 'background-color:#EEE'},
    'Hello world!');
  goog.dom.appendChild(document.body, newHeader);
}

```

* `goog.dom.createDom()` will create the dom element
* we ap	pend it to document's body using `goog.dom.appendChild()` method

## Create the html file

Lets create `helloworld.html` next to `helloworld.js`

```html
<html>
  <head>
    <script src="closure-library/closure/goog/base.js"></script>
    <script src="helloworld.js"></script>
  </head>
  <body onload="sayHi()">
  </body>
</html>

```

* we will load the closure base initially
* then we include our code, `helloworld.js`
* when the body is loaded, we will call the `sayHi()` function defined inside `helloworld.js`

## Open the helloworld.html in browser

<figure class="one">
	<a href="{{site.url}}/images/enterprise-js-frameworks/helloworld-closure.png"><img src= "{{site.url}}/images/enterprise-js-frameworks/helloworld-closure.png" alt=""></a>
	<figcaption>helloworld.html</figcaption>
</figure>

## Next step

We have covered just an example of using closure. Closure is a huge library, which spans to the scope of 1000 page books. You could start diving into more details from

* [https://developers.google.com/closure/library/docs/gettingstarted](https://developers.google.com/closure/library/docs/gettingstarted)


## Final thoughts
* ideal for project of large magnitude
* immense set of tools provided by the library
* browser-agnostic
* modular coding

> Closure is meant to be used with [closure compiler](https://developers.google.com/closure/compiler/) . Closure compiler compiles javascript to a better javascript by removing dead codes, checks for syntax and other things. Along with [closure Builder](https://developers.google.com/closure/library/docs/closurebuilder)we will get a small js file which runs better on browsers than the dev code. 

# OpenUI from SAP

While google is more of B2C company, SAP is a B2B company. Most of the Fortune500 companies use SAP application directly or indirectly. Like the same apps from SAP is of large scale. Thus they have their own framework for building large scale apps, SAP UI5. openUI5 is the open source version of SAP UI5(with few changes). 

## Getting started

Now lets see how to do a `helloworld` using `OpenUI5`

## Download

We can import the OpenUI in 3 different ways.

* Download as an SDK
> We could get the openUI5 package as an sdk from http://openui5.org/download.html](http://openui5.org/download.html). Apart from development environment, this contains sample codes, sample projects, unit tests etc... If you have to run it locally, download the package and execute inside your local server. In case there is no local server running on your machine, run following inside the sdk directory.

```bash

npm install -g http-server

http-server

```
the above will run a small lightweight server in your folder.

* Download source code from github
> The source code of OpenUI5 is available on github to download. You could even start contributing to the project here. 

[https://github.com/SAP/openui5/](https://github.com/SAP/openui5/)

* Use from sap hosted server
> Inorder to get the file directly from sap server, we could import it from [https://openui5.hana.ondemand.com/resources/sap-ui-core.js](https://openui5.hana.ondemand.com/resources/sap-ui-core.js) . This will import the ui5 core modules.


We will be doing the hello world from the above method

## Hello World Code

Save the below file, an open it through your local server

```html

<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="X-UA-Compatible" content="IE=edge"/>
	<meta charset="UTF-8">
	<title>SAPUI5 Walkthrough</title>
	<script
		id="sap-ui-bootstrap"
		src='https://openui5.hana.ondemand.com/resources/sap-ui-core.js'
		data-sap-ui-theme="sap_belize"
		data-sap-ui-libs="sap.m"
		data-sap-ui-compatVersion="edge"
		data-sap-ui-preload="async">
	</script>
	<script>
		sap.ui.getCore().attachInit(function () {
			jQuery("#content").html("Hello World - UI5 is ready");
		});
	</script>
</head>
<body id="content">
</body>
</html>

```

<b>Hello World - UI5 is ready</b>  will be printed on screen

* We are loading the core library in the `src`
* `sap.m` is the ui-library that we need here
* `<meta http-equiv="X-UA-Compatible" content="IE=edge"/>` ensuring IE


## Next Step

OpenUI5 is a huge library, and is having a steep learning curve. You could start your exploration from [http://openui5.org/getstarted.html](http://openui5.org/getstarted.html)

## Final thought

* OpenUI5 is a great library for large scale enterprise project, especially if you are planning to do something on banking, e-commerce or erp
* modular loading results enhanced performance
* browser-agnostic



# Conclusion
* Closure and OpenUI5 are two of the popular enterprise js framework.
* Its not recommended for short term projects, where Angular or React may do the work
* On the other hand, doing large scale project on a framework not capable of handling the magnitude, will lead to dead ends down the road

