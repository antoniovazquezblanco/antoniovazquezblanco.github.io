---
layout: post
title: "Android fastboot and CWMR porting"
picture: /images/posts/2014-XX-XX-UART.jpg
keywords: Android, fastboot, recovery, flash image, Android SDK tools, Android porting, CyanogenMod, ClockworkMod Recovery, CWMR
description: "Brief description on some Android Developer Tools and how to start a recovery port to a new device."
---

I've recently acquired a Huawei Ascend P7 and as any other Android phone, it comes with tons of software, not only from Huawei but also from my telephone provider. I don't know about you, but rooting the phone for 
removing this software among aplying other patches and even testing homemade solutions when no information is availiable on the internet is something I do quite often. I'm not going to lie, I've bricked more than one 
device by playing with it and this has taught me to backup before touching.

After rooting the phone I always try to dump the boot, recovery and system partitions. In case anything goes wrong I can always use fastboot to reflash the partitions and go back to a working state. Fortunatelly if you 
update the Ascend P7-L10 the bootloader is automatically unlocked enabling me to flash non standard images which encouraged me to start playing a bit further with the phone. You should know that many other 
manufacturers let you unlock your bootloaders, if you're interested on this just google it or ask in a comment.

Fastboot lets you boot images without flashing them and that is great for testing! I will not break my phone because nothing will be saved! Good news, I can try to port ClockworkMod Recovery to my phone because 
although I will make mistakes that would probably brick the phone, I can run things safely on my phone.

