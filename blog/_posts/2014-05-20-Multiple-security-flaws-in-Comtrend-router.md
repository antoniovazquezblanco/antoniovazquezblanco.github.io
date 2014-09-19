---
layout: post
title: Multiple security flaws in Comtrend router 
picture: /images/posts/2014-05-20-Comtrend_C54APM.jpg
keywords: "Conceptronic, C54APM, security, exploit, cve"
description: "C54APM access point multiple vulnerabilities advisory."
---

<img class="img img-rounded img-responsive center-block" title="Conceptronic C54APM access point" alt="c54apmaccesspoint" src="/images/posts/2014-05-20-Comtrend_C54APM.jpg" />

Last summer I've been playing with an old access point I found among my unused devices. Although this is far away from being a top selling device I decided to investigate a bit in order to find security flaws on it.

<!--more-->

I've downloaded the latest binary firmware for it and analysed it. This along some other information retrieved by the UART port inside it lead to a discovery of security flaws in the web interface.

Future posts will explain how I was able to interface the UART port and some basis of firmware analisys. I hope you will find them interesting.

More information can be found in the following links:

* [Advisory](/docs/advisories/Advisory_C54APM_Multiple.pdf)
* [CVE-2014-1405](http://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2014-1405)
* [CVE-2014-1406](http://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2014-1406)
* [CVE-2014-1407](http://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2014-1407)
* [CVE-2014-1408](http://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2014-1408)
* [OSVDB 101916](http://www.osvdb.net/show/osvdb/101916)
* [OSVDB 101917](http://www.osvdb.net/show/osvdb/101917)
* [OSVDB 101918](http://www.osvdb.net/show/osvdb/101918)
* [OSVDB 101919](http://www.osvdb.net/show/osvdb/101919)
* [OSVDB 101920](http://www.osvdb.net/show/osvdb/101920)
* [OSVDB 101921](http://www.osvdb.net/show/osvdb/101921)
