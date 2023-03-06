---
layout: post
title: ASUS DSL N14U firmware format from open source releases
mastodon_comments:
  toot_id: 
---

I have not given up on my old router hacking project. Last time we made a tool to [upload images for semi-automated testing of firmwares](http://antoniovazquezblanco.github.io/2023/01/14/Automated-firmware-uploading-using-DSL-N14U-stock-bootloader.html). Sadly, there is no firmware to test yet... It may be interesting to analyze how firmware files are formed to be able to generate our own...

One good source of information for firmware format is open source releases. Many routers depend on open source software. Particularly the Kernel. In order to comply with GPL licenses, manufacturers must provide the means to share the modified source code for their routers.

It is not always easy to obtain copies of the source code and many times depends on company policies. Some manufacturers provide dedicated email addresses in their license information menus for you to send requests to overflowing inboxes that get ignored. Some others even go to the extent to enforce postal requests for them to send you copies of the software in physical CDs that will enable them to charge you for the service.

Fortunately, a small portion of manufacturers provide readily available copies to be downloaded from the same webpage that contains firmware updates. This is our case. Whenever some manufacturer does not comply with GPL terms, I would advise you contact with the [GPL violations team](https://gpl-violations.org/) that may help you obtain the source.

For future reference, I have downloaded a copy of all source versions onto a local folder. It is interesting to have a look at different versions of the release, but it is quite a job. In order to simplify it, I've created a git repo and committed the different versions to be able to see the changes between releases.

Manufacturers usually release quite small changes and there are little to no differences in the core of a firmware since the original release... Maybe front end changes or small version changes of different open source packages but overall minor changes in kernel or other core software...

Having the changes between versions, I will focus on the latest release. I may have to look back into older revisions but now I am interested in being able to build the latest source code. Unfortunately, this is not always possible.

Building a whole firmware is a big task and sometimes developers take shortcuts that make code not that portable or buildable in different machines. Getting the right tool versions, tweaking makefiles, small path fixes and many other tweaks are usually necessary to get the thing to output a firmware file.

After a fair dose of tinkering, I was able to get a fairly similar firmware to the original one (albeit without some of the tools I do not use). I was also able to flash the firmware and get it to at least get to the Kernel which means that the file passed all security checks, was written into flash and that the bootloader was able to pass control to the new firmware!

The original sources must include a tool to pack the final firmware image. Looking into the logs and the source code I was able to find the `apps/private/tclinux_builder` folder that contains a set of scripts in charge of calling a `tools/trx/trx` tool that packs the final image.

The `tools/trx/trx` tools is provided in source code format and can be read to understand that the format is just a header with some constants and a couple of useful fields followed by different partitions (the kernel, the root filesystem...).

I would encourage anyone to have a look at the source code of the tool. It is [available in my GitHub repo](https://github.com/antoniovazquezblanco/asus_dsl-n14u_gpl/tree/main/tools/trx). It just simply is a hack on top of older hacks needed to make the thing work on a long list of deprecated devices.

I have extracted the tool and packed it into my [fork of the firmware-utils of the OpenWRT project](https://github.com/antoniovazquezblanco/firmware-utils/tree/dev/tctrx). It contains a couple of tweaks to be standalone and not require external files. In the future, after a cleanup, I will try to send the changes upstream to see if it is of interest to the OpenWRT project. For now, it will be enough to do some testing.

It will probably be necessary to also deeper dive into the sources whenever we will try to support the device in newer kernels. For the time being we have got wat we were looking for.

References:
- [https://gpl-violations.org/](https://gpl-violations.org/)
- [https://github.com/antoniovazquezblanco/asus_dsl-n14u_gpl](https://github.com/antoniovazquezblanco/asus_dsl-n14u_gpl)
- [https://github.com/antoniovazquezblanco/asus_dsl-n14u_gpl/tree/main/tools/trx](https://github.com/antoniovazquezblanco/asus_dsl-n14u_gpl/tree/main/tools/trx)
- [https://github.com/antoniovazquezblanco/firmware-utils/tree/dev/tctrx](https://github.com/antoniovazquezblanco/firmware-utils/tree/dev/tctrx)
