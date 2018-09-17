---
layout: page
title: JS Meetup 
subtitle: "Photos during 23rd javascript meetup Banglore held at Dell EMC"
images:
    - path: 1.jpeg
      title: Image 1
    - path: 2.jpeg
      title: Image 2
    - path: 3.jpeg
      title: Image 3
    - path: 4.jpeg
      title: Image 4
    - path: 5.jpeg
      title: Image 5
    - path: 6.jpeg
      title: Image 6
    - path: 7.jpeg
      title: Image 7
    - path: 8.jpeg
      title: Image 8
    - path: 9.jpeg
      title: Image 9
---


{% for image in page.images %}
![{{image.title}}]({{image.path}})
{% endfor %}