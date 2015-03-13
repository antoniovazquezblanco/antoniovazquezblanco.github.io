---
layout: post
title: "Android fastboot and CWMR porting"
picture: /images/posts/2015-03-14-ClockworkMod.jpg
keywords: Android, fastboot, recovery, flash image, Android SDK tools, Android porting, CyanogenMod, ClockworkMod Recovery, CWMR
description: "Brief description on some Android Developer Tools and how to start a recovery port to a new device."
---

<img class="img img-rounded img-responsive center-block" title="ClockworkMod Recovery logo" alt="clockworkmodrecovery" src="/images/posts/2015-03-14-ClockworkMod.jpg" />

I've recently acquired a Huawei Ascend P7 and as any other Android phone, it comes with tons of software, not only from Huawei but also from my telephone provider. I don't know about you, but rooting the phone for 
removing this software among applying other patches and even testing homemade solutions when no information is available on the internet is something I do quite often. I'm not going to lie, I've bricked more than one 
device by playing with it and this has taught me to backup before touching.

<!--more-->

After rooting the phone I always try to dump the boot, recovery and system partitions. In case anything goes wrong I can always use fastboot to reflash the partitions and go back to a working state. Fortunately if you 
update the Ascend P7-L10 the bootloader is automatically unlocked enabling me to flash non standard images which encouraged me to start playing a bit further with the phone. You should know that many other 
manufacturers let you unlock your bootloaders, if you're interested on this just Google it or ask in a comment.

If everything is done properly, the following command should show a list of the connected devices. If not, you should check if you have the ADK installed and if your phone is rebooted in fastboot mode.

```bash
$ fastboot devices
```

Fastboot lets you boot images without flashing them and that is great for testing! I will not break my phone because nothing will be saved! Good news, I can try to port ClockworkMod Recovery to my phone because 
although I will make mistakes that would probably brick the phone, I can run things safely on my phone.

Using the following tutorials I've created a Github repo for anyone who wants to collaborate in the porting of CyanogenMod to the Huawei Ascend P7:

* [CyanogenMod Wiki Porting Introduction](http://wiki.cyanogenmod.org/w/Doc:_porting_intro)
* [XDA Developers thread on porting](http://forum.xda-developers.com/showpost.php?p=36162245&postcount=2)

For anyone interested here are the commands needed for downloading the source code and building the recovery for the Ascend P7. Beware that this is not in any kind of usable state at the moment!

```bash
# # Download the repo tool...
# curl https://storage.googleapis.com/git-repo-downloads/repo > /bin/repo
# chmod a+x /bin/repo
$ # Create a folder for the source code...
$ mkdir CyanogenMod
$ cd CyanogenMod
$ # Initialize the repository...
$ repo init -u https://github.com/CyanogenMod/android.git -b cm-11.0
$ # Add the Ascend P7 manifest to the project...
$ mkdir .repo/local_manifests
$ curl https://raw.githubusercontent.com/antoniovazquezblanco/android_device_huawei_hwp7/master/manifest_android_device_huawei_hwp7.xml > .repo/local_manifests/manifest_android_device_huawei_hwp7.xml
$ # Get the code...
$ repo sync
```

In order to build the recovery.img you must execute the following commands.

```bash
$ . build/envsetup.sh
$ lunch cm_hwp7-userdebug
$ make recoveryimage
```

If you're brave enough to test it just type the following commands.

```bash
$ adb reboot bootloader
$ fastboot boot out/target/product/hwp7/recovery.img
```

PD: I've been unable to boot or flash anything through fastboot because although the phone shows unlocked status I always get permission errors. I hope I can solve this soon so that I can get to really port the recovery to my device. If anyone feels that can help me with this issue I would be very pleased!
