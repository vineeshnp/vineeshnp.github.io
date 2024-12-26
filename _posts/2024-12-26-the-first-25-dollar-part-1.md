---
layout: post
title: "The first $25 - Part 1"
subtitle: My life story of creating the fastest lyrics searching application on playstore.
bigimg: /img/posts/2024-12/header.jpg
share-img: /img/posts/2024-12/header.jpg
tags: [life-event, lyrics-engine]
show-avatar: false
---

> "So this is the second part of [Part0](https://vineeshnp.com/2022-10-18-the-first-25-dollar-part-0/)


“The first version of the app was finally ready—a small yet exciting step in what felt like an endless journey. I’ve included a few screenshots to capture its early days. I started using the app, for myself. Especially when I listen to Eminem songs, where lyrics was hard for me to understand - the app started to give me a feel. Using the app was also like testing the app. I started saving my favorite lyrics to lyrics engine. This is one of the favorite features I baked in. Remember the time was 2g era, and 3 g started to sync across in India.”


### The Testing Begins: Overcoming Early Challenges

Apparently, testing on the Android VM sucked back then. The emulator struggled to deliver acceptable frame rates, making it nearly impossible to accurately gauge the app's performance. This forced me to test directly on my phone instead. Frame rates were so bad that I generally tested directly on my phone. I tested the app directly on my Galaxy Note 1—a device my dad generously bought for me. At 32,000 rupees, it was a significant investment, especially given our financial situation at the time. This wasn’t just a phone; it was a symbol of his unwavering belief in my dreams, a gesture that motivated me to push forward.

<img src="/img/posts/2024-12/le1.png" width="50%" />
<img src="/img/posts/2024-12/le2.png" width="50%" />

<img src="/img/posts/2024-12/hle1.png" width="50%" />
<img src="/img/posts/2024-12/hle2.png" width="50%" />

As I was done testing on my phone, I started sending the build (APK file) to a few of my friends, who also listened to English songs. I received some good feedback from them, along with some suggestions. I would consider this the beta testing phase of the app.

Later I started sending the app to a broader audience via mail and other channels. You might be thinking, "Why not put it on the Play Store?" Well, I couldn't. The Play Store required a credit card for charging the first $25. I never had a credit card back then for two reasons. First, being unemployed made me ineligible for one, creating a significant hurdle.  Second, credit cards were not popular in 2012 in village areas in India. The times were so different back then that when I went to the bank to inquire about a credit card, they told me that the only way I could get one was against a fixed deposit. That is, I needed to invest X rupees in the bank as an investment, against which they would give me a card with a maximum spend of ~X rupees.

So I gave up my plan of getting a credit card and, consequently, a Play Store account. But distributing the app via other channels continued. One time, when I was talking to my friends about the app, they asked me why I didn't put it on the Play Store. I explained the situation and the credit card issues. 

For some reason, my dad overheard this conversation. He didn’t say anything at the time, but on the way back home, he quietly asked, "How much money do you need to get a credit card?" I brushed it off, saying, "Ah, that's not necessary; it's just a weird requirement for credit cards." But my dad, as always, saw beyond my hesitation. Without another word, he agreed to give me Rs. 30,000 saying, "Go and get one."

The next day, with a mix of gratitude and determination, I went to ICICI Bank in Payyannur. I opened a bank account, started a fixed deposit account, and applied for a credit card. I allocated Rs. 20,000 for the fixed deposit and Rs. 10,000 for my normal bank account. Against this fixed deposit, I was issued a credit card with a modest limit of Rs. 17,000—equivalent to around $320 in 2012. 

### Launching on the Play Store: A Milestone Achievement

Now I had everything I needed to publish my app. Yet, little did I know, the journey to actually getting it live on the Play Store would bring its own unique set of challenges. I went home and created a Play Store account. Fragment Yard was officially born there. But when I tried to publish for the first time, I realized it was not as simple as it seemed. You needed to go through a process of signing the application. Yes, I signed the application and tested it once again. But for a very specific reason, I needed to go to my mother’s house. It was in a remote place in India where the network coverage was only 2G. Once I went there, I had some free time and thought of deploying the application, which was roughly 7 MB. Fortunately, the signing and other preparations were done. I tried opening the Play Store console with the 2G network. It was slow—slow as a snail. Somehow, the app uploaded on the slow 2G network with occasional network drops. Thanks to the TCP protocol (ehm, ehm, my geeky joke).

Then I searched for the app on the Play Store, but it wasn't there. I realized it needed to go through a verification process before getting published. I continued with the rest of my day. After a few hours, I opened the Play Store again. Voila! The Lyrics Engine  was live on the Play Store. I was ecstatic to see the app on the Play Store. I uninstalled my app, which I had sideloaded from my machine, and installed it from the Play Store.

I sent the link to the people I had been sharing the APK with. They were also happy to get it directly from the Play Store.

#### The Sony Ericsson Challenge: Fixing Early Bugs

After distributing the app, a few of my friends told me it wasn’t working for them. I was like, "What??"

I gathered more information about the devices and found out that all the problematic devices were Sony Ericsson models. The first thing I did was go to the Play Store and disable the app for all Sony Ericsson devices. For good measure, I didn’t want too many 1-star reviews at the beginning. Then I went to one of my friend’s houses to see the issue in person. The problem was that I was making network calls on the main thread, and Sony devices didn’t allow that. This was my first big bug fix, achieved with the help of worker threads. The network call was offloaded from the main thread. Voila! The app was now smooth even on other devices. That bug actually made my app better. :)

### Facing Unexpected Feedback: The Language Barrier

I started receiving more feedback that the app wasn’t working. At first, I was puzzled by these complaints, as everything seemed to work perfectly on my end. Little did I know, the root of the problem would completely shift my perspective on the app's reach and functionality. This was strange, and I couldn’t think of a reason. Then I started asking users what they searched for—and the answer hit hard. They were looking for songs in Hindi, but Lyrics Engine didn’t support other languages. I had to add this to the app description later, but reviews kept coming in, complaining that it wasn’t working.

The feedback became so annoying that I started writing an app for Hindi songs.

### The Birth of Hindi Lyrics Engine: Expanding Horizons

Thus, Hindi Lyrics Engine was born, exclusively searching for Hindi songs. Launching this new app was both exciting and nerve-wracking, as it marked a fresh chapter in my journey, driven by the hope of connecting with a wider audience. It also supported other features like saving the lyrics locally.

Initially, some close acquaintances suggested merging it with the main app. However, I deliberately kept them separate because I was catering to two distinct user bases. While there was some overlap in India, I believed keeping Lyrics Engine and Hindi Lyrics Engine as independent apps would better serve their specific audiences.

### Surging Popularity: Milestones and Mistakes

Hindi Lyrics Engine grew steadily and organically, bringing in more reviews, downloads, and occasional feature requests through emails. It was thrilling to watch as the app hit milestones like 1K, 5K, 10K, 25K, and eventually 50K downloads, each one a testament to its growing popularity and impact.

The app consistently ranked among the top results when users searched for Hindi lyrics. Despite this success, I never monetized it through ads—a missed opportunity in hindsight—even though I had explored integrating SDKs from various ad providers.

### A New Chapter: From Passion Project to Professional Career

Because of the app and one of my close relatives who shared it in their groups, I landed my first full-time job. This transition was a turning point for me—it validated my skills and proved that a simple idea could open doors to professional growth. My experience with the app development taught me valuable skills like problem-solving, debugging complex issues, and understanding user needs—all of which directly contributed to landing this job. Moving to Bangalore for this opportunity was both exciting and overwhelming, as I left behind the comfort of familiar surroundings to embrace a new chapter filled with challenges and growth. I relocated to Bangalore for my job, and that’s where the second part of Fragment Yard started.

Both apps eventually reached ~100K downloads (~200K total), a milestone that filled me with pride. However, starting full-time employment marked a shift in priorities. Balancing the freedom of creating an app I loved with the structured demands of a professional job was no small task. While the job brought new opportunities and challenges, it also left me with little time to dedicate to Fragment Yard—a decision that, even now, carries a tinge of regret.

Eventually Fragment Yard was running on its own, in maintenance mode. Watching it grow organically, even without my active involvement, was heartwarming as it validated the app's value. Yet, it was also bittersweet—a mix of pride in its success and regret for not being able to give it the attention it deserved to reach its full potential. Organically, people were downloading the app, but I didn’t even bother to keep the lights on.

### The Final Curtain: Saying Goodbye to Lyrics Engines

At one point, several libraries I was using required updates and redeployment. And like I said, I didn’t have the time—rather, it wasn’t a priority for me. Google eventually pulled Lyrics Engine and Hindi Lyrics Engine from the Play Store.

### A Heartfelt Thank You: Reflecting on the Journey

Fragment Yard was born as a solution to one of my personal problems. Later, it turned out to be the fastest Lyrics Search Engine of its time. I would like to thank my dad for everything I mentioned above. Thanks to my brother for writing the terms and conditions and other content for my app. Thanks to Sathish(my brother-in-law) for sharing the app among his peers. And thanks to countless friends of the time.

Fragment Yard gave me a full-time job and shaped my career in ways I never imagined. Its story, though paused, remains deeply woven into my life. I carry its lessons, its memories, and the joy it brought as a quiet motivation for the future. Maybe one day, I’ll pick up where I left off. For now, it’s a cherished reminder of what passion and persistence can achieve.