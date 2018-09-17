---
layout: page
title: RACE Workshop
subtitle: "One day workshop on Javscript, ES6, TypeScript and Mobile app development."
images:
    - path: 1.jpg
      title: Image 1
    - path: 2.jpg
      title: Image 2
    - path: 3.jpg
      title: Image 3
    - path: 4.jpg
      title: Image 4
    - path: 5.jpg
      title: Image 5
    - path: 6.jpg
      title: Image 6
    - path: 7.jpg
      title: Image 7
---
>held at College of Engineering Trikaripur as a part of RACE[alumni group] training.

{% for image in page.images %}
![{{image.title}}]({{image.path}})
{% endfor %}