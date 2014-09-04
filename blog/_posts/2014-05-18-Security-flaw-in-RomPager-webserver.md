---
layout: post
title: Security flaw in RomPager webserver
picture: /images/posts/2014-05-18-Allegro_software.png
keywords: "RomPager, vulnerability, exploit, security, cve"
description: "RomPager server security advisory."
---

![allegrosoftware](/images/posts/2014-05-18-Allegro_software.png "Allegro software")

RomPager is a widely used embedded webserver. Playing around with an quite old but very widely used (or at least in Spain) ZyXEL P-660HW-D1 I could find an small bug in this software that leads to XSS and URL redirection.

<!--more-->

I've reported to [INTECO-CERT](http://cert.inteco.es/) and I was told that this was already fixed in newer versions of the software because this had been seen previously in other devices. Although this was already 
discovered it had no CVE identifier so I requested one to MITRE.

Further information about affected devices and how to exploit the issue can be found in the following links:  

* [Advisory](/docs/advisories/Advisory_RomPagerXSS.pdf)
* [OSVDB 99694](http://osvdb.org/show/osvdb/99694)
* [OSVDB 99695](http://osvdb.org/show/osvdb/99695)
* [CVE 2013-6786](http://cve.mitre.org/cgi-bin/cvename.cgi?name=2013-6786)
