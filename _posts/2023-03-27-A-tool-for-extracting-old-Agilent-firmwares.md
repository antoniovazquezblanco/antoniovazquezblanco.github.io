---
layout: post
title: A tool for extracting old Agilent firmwares
---

History keeps repeating. Lately I am having some trouble keeping my mind focused on certain projects and decided to start a quick side project again... The following toot depicts it really well...

<iframe src="https://mastodon.social/@oatmeal/109712257472040092/embed" class="mastodon-embed" style="max-width: 100%; border: 0" width="400" allowfullscreen="allowfullscreen"></iframe><script src="https://mastodon.social/embed.js" async="async"></script>

Not long ago I picked up an old oscilloscope and fixed some small defects it had. It ended up passing the internal tests and I even cleaned it up...

<iframe src="https://mastodon.social/@antoniovazquezblanco/110044943399647268/embed" class="mastodon-embed" style="max-width: 100%; border: 0" width="400" allowfullscreen="allowfullscreen"></iframe><script src="https://mastodon.social/embed.js" async="async"></script>

<iframe src="https://mastodon.social/@antoniovazquezblanco/110049303433911599/embed" class="mastodon-embed" style="max-width: 100%; border: 0" width="400" allowfullscreen="allowfullscreen"></iframe><script src="https://mastodon.social/embed.js" async="async"></script>

I found that my unit was not running the latest firmware version. Firmware updates are still available now in the new Keysight website. Congratulations on the effort that seems to be made to keep supporting some of older devices!

The update system consists on saving the update file onto a floppy disk and loading a 'JZP' file on the oscilloscope. After a couple of attempts I was unable to load the update on my device. Either floppies I used were bad or my unit stills has unresolved floppy issues.

While I wait for new floppy disks to arrive and test, I decided to have a look into the firmware format. In the end, if it ends up being a floppy disk reader problem it is going to be useful to have the firmware to be able to debug what may be happening...

After downloading the firmware update and decompressing the exe file (self-extracting zip) I tried binwalk without much success. 

![Firmware entropy graph](/assets/2023-03-27/entropy.png)

File entropy indicated some kind of compression or encryption. Despite of the entropy level, there were quite a lot of printable characters, especially around the entropy dip at the end which was curious.

When loaded in the hex editor, all the printable characters seemed to be garbled or non-sensical from a natural language point of view. Fortunately, in the beginning of the file I found a "JAZIP" string. A quick search led me to an [old EEVblog thread about unpacked firmware files](https://www.eevblog.com/forum/testgear/agilent-5462054640-series-unpacked-firmware-files/).

Researching the old thread, I came across an [old tool called aglzip in Github](https://github.com/miek/agltzip).

By combining both sources of information and a bit of extra research, I concluded that the file is an undocumented header plus a content compressed using [LZSS (Lempel–Ziv–Storer–Szymanski)](https://en.wikipedia.org/wiki/Lempel%E2%80%93Ziv%E2%80%93Storer%E2%80%93Szymanski). LZSS seems to be a precursor of deflate but I did not find any suitable implementation of the algorithm where I could change the size of things for compressing and decompressing my files.

I finally decided to write my own (slow) but configurable implementation and another lib for compressing and decompressing the firmware files.

You can find both python packages in my GitHub and Pypi:
- [https://github.com/antoniovazquezblanco/lzsslib](https://github.com/antoniovazquezblanco/lzsslib)
- [https://pypi.org/project/lzsslib/](https://pypi.org/project/lzsslib/)
- [https://github.com/antoniovazquezblanco/jzp](https://github.com/antoniovazquezblanco/jzp)
- [https://pypi.org/project/jzp/](https://pypi.org/project/jzp/)

I was able to decompress the update file and even load it into Ghidra. There are a couple of bugs in Ghidra that make the process of reversing a bit dirty, but I was able to find the update procedure!

![Reverse engineering image](/assets/2023-03-27/firmware_reversing.png)

The reversing part may come in a future post. That is all for now...

References:
- [https://www.eevblog.com/forum/testgear/agilent-5462054640-series-unpacked-firmware-files/](https://www.eevblog.com/forum/testgear/agilent-5462054640-series-unpacked-firmware-files/)
- [https://github.com/miek/agltzip](https://github.com/miek/agltzip)
- [https://en.wikipedia.org/wiki/Lempel%E2%80%93Ziv%E2%80%93Storer%E2%80%93Szymanski](https://en.wikipedia.org/wiki/Lempel%E2%80%93Ziv%E2%80%93Storer%E2%80%93Szymanski)
- [https://github.com/antoniovazquezblanco/lzsslib](https://github.com/antoniovazquezblanco/lzsslib)
- [https://pypi.org/project/lzsslib/](https://pypi.org/project/lzsslib/)
- [https://github.com/antoniovazquezblanco/jzp](https://github.com/antoniovazquezblanco/jzp)
- [https://pypi.org/project/jzp/](https://pypi.org/project/jzp/)
