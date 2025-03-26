---
layout: post
title: Multiple security flaws in Comtrend router
redirect_from:
  - /docs/advisories/Advisory_C54APM_Multiple.pdf.html
---

Last summer I've been playing with an old access point I found among my unused devices. Although this is far away from being a top selling device I decided to investigate a bit in order to find security flaws on it.

I've downloaded the latest binary firmware for it and analysed them. This along some other information retrieved by the UART port inside it lead to a discovery of security flaws in the web interface.

Future posts will explain how I was able to interface the UART port and some basis of firmware analysis.

More information can be found in the following links:

* [Advisory](https://github.com/antoniovazquezblanco/advisories/blob/main/2014/2014_Advisory_C54APM_Multiple.pdf)
* [CVE-2014-1405](http://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2014-1405)
* [CVE-2014-1406](http://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2014-1406)
* [CVE-2014-1407](http://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2014-1407)
* [CVE-2014-1408](http://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2014-1408)
