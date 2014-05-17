---
layout: post
title: Security flaw in RomPager webserver
picture: /images/posts/2014-
---

RomPager is a widely used embedded webserver. Playing around with an quite old but very widely used (or at least in Spain) ZyXEL P-660HW-D1 I could find an small bug in this software that leads to XSS and URL redirection.

I've reported to [INTECO-CERT](http://cert.inteco.es/) and I was told that this was already fixed in newer versions of the software because this had been seen previously in other devices. Although this was already 
discovered it had no CVE identifier so I requested one to MITRE.

More information about affected devices and how to exploit the issue can be found in the advisory document listed below.

More information about this here:
* [OSVDB 1](http://osvdb.org/show/osvdb/99694)
* [OSVDB 2](http://osvdb.org/show/osvdb/99695)
* [CVE](http://cve.mitre.org/cgi-bin/cvename.cgi?name=2013-6786)
* [Advisory](/docs/advisories/Advisory_RomPagerXSS.pdf) 
