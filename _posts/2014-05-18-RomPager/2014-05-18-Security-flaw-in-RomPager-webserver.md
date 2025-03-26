---
layout: post
title: Security flaw in RomPager webserver
redirect_from:
  - /docs/advisories/Advisory_RomPagerXSS.pdf.html
---

RomPager is a widely used embedded webserver. Playing around with an quite old and cheap device, the ZyXEL P-660HW-D1, I could find an small bug in this software that leads to XSS and URL redirection.

I've reported it to [INTECO-CERT](http://cert.inteco.es/) and I was told that this was already fixed in newer versions of the software because this had been seen previously in other devices. Although this was already discovered it had no CVE identifier so I requested one to MITRE.

Further information about affected devices and how to exploit the issue can be found in the following links:  

* [Advisory](https://github.com/antoniovazquezblanco/advisories/blob/main/2013/2013_Advisory_RomPagerXSS.pdf)
* [CVE 2013-6786](http://cve.mitre.org/cgi-bin/cvename.cgi?name=2013-6786)
