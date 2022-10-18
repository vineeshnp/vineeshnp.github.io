---
layout: post
title: "The first $25 - Part 0"
subtitle: My life story of creating the fastest lyrics searching application on playstore.
bigimg: /img/posts/2022-10/header.jpg
share-img: /img/posts/2022-10/header.jpg
tags: [life-event, lyrics-engine]
show-avatar: false
---

> This is my life story of creating the fastest lyrics searching application on playstore. Let me take you back to my life during 2013-15. 


“A lot has happened since my last blog. In short, we moved to Germany from India. I started my next chapter of my career in Speech Technology at Mercedes Benz Research Stuttgart. More about it can be a topic of another blog,...”
### Out from college 🍴🧑‍💻💩🔁
It's 2013, I'm a freshman grad student out of college. I have not landed in a stable job yet. 

I used to listen to rap songs[quite a lot] back then. It was hard for me to understand the lyrics of these songs. So I google lyrics each time I listen[Note: There was no app back then, and the songs were not streamed as well.]. Most of the websites that publish lyrics are filled with dense ads. The reading experience was poor with add banners and click baits. On top of that, the advertisement banners consumed more data. Remember data was neither cheap nor fast back then. 

The engineer inside me woke up. I saw the opportunity of creating an app to improve my song listening experience.
On the other hand I was experimenting with my skills on mobile application development for the Android platform. I got a perfect use case to experiment with, which in fact solves one of my headaches. Yes, I want a mobile app for searching Lyrics, and there was none available at the time, which is - fast, add-free, and robust. I started writing the “Lyrics Engine” - A search engine for Lyrics.

### Machine Used 💻
I was working on a PC with Core i5 first generation processor (2C4T) with 4 GB of ram and 512 MB of graphics. I was using Eclipse as the IDE. Eclipse is bundled with Android SDK and Build tools. Development of mobile apps was significantly challenging in comparison with today’s standards. Advanced and developer friendly features for mobile app development were missing at that time. One of the most prominent being hot reloading. Let me describe this in a later part.

### Getting started 💫
Generally I start my project by writing code. For some reason that was not the case for Lyrics Engine. I decided to design the application on paper first. I grabbed the deck of dark A4 sheets from my desk drawer. And also a few glass pencils of different colors. Bright glass pencils on dark paper is a feast to your eyes, especially if you prefer darkmode.

Then, I drew all the screens on the paper. Connected each screen layouts with arrows. Outlined buttons in different colors. Marked the actions happening. There were 5 different screens for the application. In total the app had 6 different screens, but one was a splash screen(First loading screen you see when you open an app).  Each screen layout contains the `user interface component` that I wanted to create. If I remember it right, it took me like two nights to finish the layouts. Looking back, that was the best thing I did for the Lyrics Engine.

### Paper to code 📝➡️🔟

Day by day I started turning these layouts into code. I took one screen’s layout at a time, and converted the sketches on paper to `code`. These were `xml` files. It took a couple of days to create xml files(User Interface Components for machine) for all the screens. After the components are created, it's time to add logic to the components using `java`. This is where the real engineering starts. It's like giving life to the application.

Android SDK out of the box gives us a project structure to get started. I then made a list of libraries I may use on the project. Imported all those libraries to the project. And started wiring each component with business logic.

* Home screen

     <img src="/img/posts/2022-10/le-search-1.png" width="50%" />


### Good old SDK issues 👴

One particular problem that I told you about before was lack of [hot reloading](https://developer.android.com/studio/run#instant-run). Let me say what hot reloading means. Let's say we make any small change in the code, like changing the button color from white to blue. If hotrelading is enabled, you would instantly see the change in the running application. If you don’t have hot reloading, you need to build the application again, deploy to the device and run. 

Without hot reloading it takes a lot of time and patience. A tiny change in the app needs rebuilding of the entire application. Needless to say, the performance of the SDK is moderate. Along with that, some of the business logic was really complex. You may need to do multiple iterations before finalizing. Eventually this started to become a bottleneck for the whole development.

So I did a workaround to handle complex logic. It may be mindless today, nevertheless it improved my development flow back then. I simply wrote all the complex java functions in simple isolated java files.  Tested these convoluted logic in those isolated files. Upon successful implementation, these functions were copied to Lyrics Engine’s source code. Analogous to today’s situation, I would strongly say build time matters. Even if it’s one second, it matters. Companies providing cheap laptop to employees should consider themself not fit for strong market[Sorry for using strong words ☹️].

One more thing to point out was the emulator back then was sluggish. But this was an easy problem to solve. I used to deploy the app directly to my phone.

### Deadend to bright roads 😵😐🙂😎🫡 

On several late nights I was literally at a dead end. Maybe with some bugs or with some features. I lied on bed thinking that, this is it! There is nothing more I can do for this project. I went to sleep with a deep thought of disappointment. But, the next morning, all of a sudden I get this sharp intuition and bhoom!! The dead end is cleared. Experiencing this feeling in a very early stage of my career gave me the courage to face tough situations later in my career. After a month of sleepless nights and late wakeups, the alpha version of the app was ready. I felt like a cold breeze flowing over my body, calming it from the warmth of all the stress it bore. I was feeling relaxed - to have something finalized, even at its alpha stage.

* splash screen
    
    <img src="/img/posts/2022-10/le-splash.png" width="50%" />

To be continued…
