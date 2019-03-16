---
layout: post
title: "Understanding open source licenses."
bigimg: /img/posts/licenses-explained/header.jpg
share-img: /img/posts/licenses-explained/header.jpg
tags: [blog, open-source, licence]
show-avatar: false

commercial: Commercially used
distributed: Distributed
modified: Modified
patented: Patented
private: Privately used

copyright: Included with License and copyright notice 
liability: Liability
warranty: Warranty
document: Documenting the changes happened in the work
licence-inheritance: Using same licence for derived work (Copyleft)
trademark: No trademark rights
logo-width: 20%
---

> Software licencing is becoming more and more complex each day. Progressive increment in no of licence is agonizing for architects and developers in choosing dependencies. Let's take a look at few cardinal open source licence that a developer may stumble upon in the day to day life.

# Why it matters?
Often it doesn't matter if we are doing a weekend project, academic project or pet projects. But the licencing get very comprehensive and influential, when we talk about professional side of our day to day life. More than that, its significant if you are into an enterprise ecosystem.

Incautious about licenses could not only put you in niggle, but also take the entire organization into a diagnostic situation.

# When we should be cautious?

> "All that's free is not free"

We should be cautious while dealing with
* An external library.
* An application for development, eg: IDE, Text editor, build tools, DBMS.
* An external service.
* Forking a project.
* ...

# Kinds of licenses.
* [Public domain](https://en.wikipedia.org/wiki/Public_domain_software)
* [Permissive licence](https://en.wikipedia.org/wiki/Permissive_license)
* [Copy left licence](https://en.wikipedia.org/wiki/Copyleft_license)
* [Proprietary licence](https://en.wikipedia.org/wiki/Proprietary_software)
* [Trade secret](https://en.wikipedia.org/wiki/Trade_secret)

I know, remembering these would be tough, and you need not. These are the classes of licencees. In case you need to explore more feel free to open the links. 

Now lets take a look at few licencees that we may come across.

## MIT
<img src="/img/posts/licenses-explained/mit.png"   width="{{page.logo-width}}" style="float:right"/>
#### Can be
* {{page.commercial}}
* {{page.distributed}}
* {{page.modified}}
* {{page.private}}

#### Should be
* {{page.copyright}} 

#### Also
* Larger work can be distributed in any other licence.
* Source code can be kept closed.

#### Limitations
* {{page.liability}}
* {{page.warranty}}

___

## ISC [BSD2-Clause is almost similar to ISC]

<img src="/img/posts/licenses-explained/isc.png"   width="{{page.logo-width}}" style="float:right"/>
#### Can be
* {{page.commercial}}
* {{page.distributed}}
* {{page.modified}}
* {{page.private}}

#### Should be
* {{page.copyright}} 

#### Also
* Larger work derived from parent can be distributed in any other licence.
* Source code can be kept closed.

#### Limitations
* {{page.liability}}
* {{page.warranty}}

___

## Apache
<img src="/img/posts/licenses-explained/apache.png"   width="{{page.logo-width}}" style="float:right"/>
#### Can be
* {{page.commercial}}
* {{page.distributed}}
* {{page.modified}}
* {{page.patented}}
* {{page.private}}

#### Should be
* {{page.copyright}} 
* {{page.document}}

#### Also
* Larger work using the licensed work can be distributed with different terms and condition.
* Source code of larger work need not to be open sourced.

#### Limitations
* {{page.liability}}
* {{page.warranty}}
* {{page.trademark}}

___

## GPL

___

### AGPLv1
<img src="/img/posts/licenses-explained/agpl.png"   width="{{page.logo-width}}" style="float:right"/>
#### Can be
* {{page.commercial}}
* {{page.distributed}}
* {{page.modified}}
* {{page.patented}}
* {{page.private}}

#### Should be
* Open source full source code 
    * If the modified version is distributed.
    * If modified version is used to provide a service over a network.
* {{page.copyright}} 
* {{page.licence-inheritance}}
* {{page.document}}

#### Limitations
* {{page.liability}}
* {{page.warranty}}

___

### GPLv3
<img src="/img/posts/licenses-explained/gpl.png"   width="{{page.logo-width}}" style="float:right"/>
#### Can be
* {{page.commercial}}
* {{page.distributed}}
* {{page.modified}}
* {{page.patented}}
* {{page.private}}

#### Should be
* Open source full source code 
    * If the modified version is distributed.
* {{page.copyright}} 
* {{page.licence-inheritance}}
* {{page.document}}

#### Limitations
* {{page.liability}}
* {{page.warranty}}

___

### LGPLv3
<img src="/img/posts/licenses-explained/lgpl.png"   width="{{page.logo-width}}" style="float:right"/>
#### Can be
* {{page.commercial}}
* {{page.distributed}}
* {{page.modified}}
* {{page.patented}}
* {{page.private}}

#### Should be
* Open source full source code 
    * If the modified version is distributed.
* {{page.copyright}}
* {{page.licence-inheritance}}
* {{page.document}}

#### But
* If the project is a part of a larger work. And in the larger work, the project is used via interfaces, then the larger work could be distributed in a different licence.
eg: Using a `dll` or `jar` file in a project.

#### Limitations
* {{page.liability}}
* {{page.warranty}}

___

## Mozilla

<img src="/img/posts/licenses-explained/mozilla.png"   width="{{page.logo-width}}" style="float:right"/>
#### Can be
* {{page.commercial}}
* {{page.distributed}}
* {{page.modified}}
* {{page.patented}}
* {{page.private}}

#### Should be
* Open source full source code 
    * If the modified version is distributed.
* {{page.copyright}}
* {{page.licence-inheritance}}, or could use GPL licence in some cases
* {{page.document}}

#### But
* If the project is a part of a larger work. And in the larger work, the project is used via interfaces, then the larger work could be distributed in a different licence. Provided the original source code is not contained in the distribution.

#### Limitations
* {{page.liability}}
* {{page.warranty}}
* {{page.trademark}}


___

## The Unlicensed

When you dont mention any Licence, or specifically say Unlicensed. Then
* You are the sole owner of the work
* No one can copy, distribute or modify your work
* This may create chaotic situation if some one else contributed to work, because now you are also forbidden to use the other persons contribution
* It is always a best practice to choose a suitable licence, and keep it with your work.

___

# How to licence my library or application.
* Add a LICENCE.md file at the root directory of project.
* Checkout github [documentation](https://help.github.com/en/articles/licensing-a-repository)

# Helpful links (Gratitude).
* [https://choosealicense.com](https://choosealicense.com)
* [https://en.wikipedia.org/wiki/GNU_General_Public_License](https://en.wikipedia.org/wiki/GNU_General_Public_License)


# Terminologies

|Term | Meaning|
|-----|--------|
|copyleft| The derivative work from this licence should always be of the parent's licence |
|GPL | GNU General Public License family |
|AGPL | GNU Affero General Public License |
|LGPL | GNU Lesser General Public License |
|ISC | Internet Software Consortium |

# Conclusion.

Licencing is a crucial part of software development. We have to be cautious about licenses, when dependencies are being resolved. Most of the time, architects are responsible for all these actions. But that time is long gone, now junior developer may make decision. Decision of using a specific `npm` or `maven` or `nuget` module to avoid re-invention of wheel. Thus as a developer it is our responsibility to understand how each licence matter to our work.

On the other hand its important to specify the licence in a project we start. This is cardinal during distribution. 

Just to add, my personal choice for an open source project is MIT.


