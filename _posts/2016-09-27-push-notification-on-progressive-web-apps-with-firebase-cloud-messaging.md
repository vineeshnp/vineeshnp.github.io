---
layout: post
title: PWA push notification with firebase cloud messaging
description: " Push notification seems to be a simple activity when we look from a
distance. As we move closer we understands how complex it is. Lets have a look at how to implement
push notification in progressive web apps"
modified: 2016-27-09
tags: [pwa, progressive-web-apps, push-notification, firebase, gcm]
image:
  feature: pwa-notification/header.jpg

---

Unlike traditional applications, Progressive Web App can be seen as an evolving hybrid of regular web pages (or websites) and a mobile application. This new application life-cycle model combines features offered by most modern browsers with benefits of mobile experience.

# Progressive Web Apps

## Ice-breaking PWA

There is already a good number of articles that are dedicated on PWA. So am not
getting into those here. We will directly jump to the implementation of push notification.
For you to get started, I had uploaded a sample app to the git repo. We will start
from there. On the other hand if you need further more details on PWA, please follow
these links.

* [Why PWA](https://developers.google.com/web/progressive-web-apps/)
* [Your first PWA](https://developers.google.com/web/fundamentals/getting-started/your-first-progressive-web-app/?hl=en)
* [PWA Gallery](https://pwa.rocks/)

## Getting started

Now lets get started with our project. First thing you need to do is clone the below
project to your local machine. We will start from there.

`https://github.com/vineeshnp/pwa-push-notification-with-firebase-couldmessaging.git`

The code base of the repo is divided into two part. Server and Client side. All
the files in the `server` folder is of server's file. And rest of the files belongs
to client side app.

# Client Side

All the code except the one in the folder `server` belongs to client side. The
directory structure may look like this.

<p>
+-- root<br>
 | +-- images<br>
 | +-- js<br>
 | \`-- main.js<br>
 | +-- server<br>
 | -- index.html<br>
 | -- manifest.json<br>
 | -- sw.js<br>
</p>

>These are the crucial files of our application.

Now start serving the root folder with your favorite server like `ngnix`, `python server`,
`live-server`, etc. Personally I use live-server.

```
npm install -g live-server

live-server --port=80

```

Now when you open http://localhost in your machine, you will see the PWA running.
But if you examine the console, you will get an error like this


<figure class="one">
	<a href="{{site.url}}/images/pwa-notification/first-boot-error.jpg"><img src= "{{site.url}}/images/pwa-notification/first-boot-error.jpg" alt=""></a>
	<figcaption>PWA Boot up</figcaption>
</figure>

## Obtaining gcm-senderId

* Goto [Firebase Home](https://console.firebase.google.com/)

* Click `create new project`

* Enter the project name `my-first-pwa-notification`

* Select your country

* You will be navigated to your [project's home page](https://console.firebase.google.com/project/my-first-pwa-notification/overview)

* Now navigate to [Project setting page](https://console.firebase.google.com/project/my-first-pwa-notification/settings/general/)

* Navigate to [Cloud Messaging Tab](https://console.firebase.google.com/project/my-first-pwa-notification/settings/cloudmessaging)

* There you will get two important key's `Server Key` and `Sender Id`. Make a note of
this, we will use this in several places.

## Adding gcm-senderId to the manifest file

It is important to know that, all PWA are driven by the `manifest.json` file associated
with it.

* Open the `manifest.json`

* You could see a field called `gcm_sender_id` of 12 digits.

* Now paste the `Sender Id` you got from previous step here.

* Go back to [Localhost](http://localhost) and check out your console. The previous
error seems to be gone.

If the error is gone, it means your app has been subscribed to the firebase project
that we created before. And it is ready to receive `messages` aka `notifications`
from the cloud via firebase cloud messaging.

>You might note few more key's generated on browsers console. These are very important
key's we will be discussing it now.

Make a note of these values

* `endpoint`

* `p256dh`

* `auth`

## Encrypted Push Notification.

If you want to sent just some push notification to the client, we can do those with
a POST request on POSTMAN. But if in any case we need to add payload to our notification
we need to encrypt it. In any case, all the non encrypted messages will be discarded
by both Chrome and Firefox, thus you may get data field as `null`. So we won't be
discussing the non encrypted part here.

The reason why encryption is essential because, there is no other way to identify
where the message is coming and where it is going. If encryption isn't enabled that
may open couple of major security holes. Here is few interesting article from Chrome
and Mozilla.

* https://developers.google.com/web/updates/2016/03/web-push-encryption

* https://developer.mozilla.org/en-US/docs/Web/API/Push_API

So the encryption of data will be done by using the clients `p256dh` and `auth`
that we got on the console. Hope you have noted down those.

# Server Side

Go to the server folder on another bash / command line. Execute the following commands.

```
cd server

npm install

```

We know that we are using encrypted messaging. In order to achieve this by hand is
very difficult and time consuming. For the reason, we will be using [web-push](https://github.com/web-push-libs/web-push) library. Its a node.js library.
When you run `npm install` web-push will be installed on the `server` directory. Its
very important that you should understand `Why we use web-push?` and `How it works?`.

## Setting up server side key's

Go to the file `server.js`. The following line numbers are to be edited

> Line 10 :

```js

webpush.setGCMAPIKey('{ { your Firebase Cloud messaging key } }');

```
replace `{ {your Firebase Cloud messaging key} }` with `Server Key` that you got
from cloud messaging tab of your [firebase project](https://console.firebase.google.com/project/my-first-pwa-notification/settings/cloudmessaging).

> Line 14 :

```js

  'mailto:yourmailid@domain.com'

```

> Line 23 :

 replace `{ {client subscription id} }` with `endpoint` you got from browser's console

> Line 25 :

 replace `zR1............1w==` with `auth` value you got from browser's console.

> Line 26 :

 replace `BGM................................................................U0=`
 with `p256dh` value you got from browse's console.


>We have to develop our own mechanism to store these data in our backend, because
if you want to send push notification to a user all these keys play its role.

 [For more reading](https://developers.google.com/web/updates/2016/03/web-push-encryption?hl=en)

## Invoking your first notification.

Assuming your PWA is being served and the service worker for the PWA is alive on
the browser, we can trigger our first notification. All you have to do is

```
node server.js

```

If everything was implemented correctly you will get your first notification. And the
data from the server will be visible in the push notification.


# Conclusion

As I said, its not that easy to implement  push notification. There are billions
of notifications passing through the cloud each day. Targeting a specific user is
an important thing here. The server.js file will shows the least thing you need
in the back end to trigger a notification. You might see something like `vapidKeys`,
these are the one's which encrypts the data. In the long run, PWA is gonna rule the
web, and the standardization is yet a question mark. Down the road the methods might
change, yet we cant leave it and lag behind. Incase of any queries feel free to reach me
on [twitter](https://www.twitter.com/vineeshvalsalan)

# Reference

* https://developer.mozilla.org/en-US/docs/Web/API/Push_API
* https://developers.google.com/web/updates/2016/03/web-push-encryption
* https://tools.ietf.org/html/draft-thomson-webpush-encryption-01
* https://developers.google.com/web/fundamentals/getting-started/push-notifications/?hl=en
* http://www.html5rocks.com/en/tutorials/service-worker/introduction/
