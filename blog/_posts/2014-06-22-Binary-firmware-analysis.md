---
layout: post
title: Binary firmware analysis
picture: /images/posts/2014-06-22-HexEdit.png
keywords: binary analisys, firmware, signatures, security, tutorial, hacking
---

When trying to find exploits or vulnerabilities in embedded devices, any information is very useful.

Firmware analysis can be a good starting point as there's no need to have physical access to a device in order to investigate and there's no need to buy one as long as the manufacturer let you download updates from their website.

In the following examples I'm going to use a firmware from TP-LINK for [TL-WR841N v8 (Soft. version: 3.13.33)](http://www.tp-link.com/ar/support/download/?model=TL-WR841N&version=V8#tbl_j).

<!--more-->

![hexeditor](/images/posts/2014-06-22-HexEdit.png "HexEdit")

Hex editors can be very useful for some things but when you are trying to search for some file signatures and you have a list of over 50 of them, they become tedious and repetitive so in the past I started using the 
"strings" command in order to find usual signatures like "sqfs" or its variants for squash filesystems. This enabled me to automate signature finding with bash scripts very easely.

```bash
$ strings WR841N_v8_en_3.13.33.bin | grep sq
sq`{q
\sqey
&wsq=F
sqVZ
Tsq0
hsqs
sqb'wa
4sqJ
7sq;
HDsq1`
sq@|
+"Osq
Ksq`
busq
nGsq
sqWb
sq6X
&>sq
C5besq
msqFm
p7sq
s-sq
Ofsq
```

In the previous example "hsqs" is a variant of a squashfs. Although this works, there are tools that make this job very easy. I personally use [binwalk](http://binwalk.org/) in order to search for file signatures in 
binary files.

```bash
$ binwalk WR841N_v8_en_3.13.33.bin

DECIMAL    HEX        DESCRIPTION
-------------------------------------------------------------------------------------------------------------------
0          0x0        TP-Link firmware header, firmware version: 3.13.33, image version: "ver. 1.0", product ID: 0x8410008, product version: 1, kernel load address: 0x80002000, kernel entry point: 0x801AA240, kernel 
offset: 512, kernel length: 813084, rootfs offset: 1048576, rootfs length: 2883584, bootloader offset: 0, bootloader length: 49140
13392      0x3450     U-Boot boot loader reference
14728      0x3988     uImage header, header size: 64 bytes, header CRC: 0xBA7F2047, created: Mon May  6 07:20:35 2013, image size: 34860 bytes, Data Address: 0x80010000, Entry Point: 0x80010000, data CRC: 0x263C3839, 
OS: Linux, CPU: MIPS, image type: Firmware Image, compression type: lzma, image name: "u-boot image"
14760      0x39A8     U-Boot boot loader reference
14792      0x39C8     LZMA compressed data, properties: 0x5D, dictionary size: 33554432 bytes, uncompressed size: 99104 bytes
131584     0x20200    TP-Link firmware header, firmware version: 3.13.33, image version: "ver. 1.0", product ID: 0x8410008, product version: 1, kernel load address: 0x80002000, kernel entry point: 0x801AA240, kernel 
offset: 512, kernel length: 813084, rootfs offset: 1048576, rootfs length: 2883584, bootloader offset: 0, bootloader length: 0
132096     0x20400    LZMA compressed data, properties: 0x5D, dictionary size: 33554432 bytes, uncompressed size: 2317284 bytes
1180160    0x120200   Squashfs filesystem, little endian, version 4.0, compression: lzma, size: 2652846 bytes,  537 inodes, blocksize: 131072 bytes, created: Mon May  6 07:32:12 2013
```

As you can see binwalk detects a lot of useful signatures and can also decompress them by using the parameter "-e".

And after extracting an embedded Linux directory tree comes up.

```bash
$ ls
filesystem  filesystem.sqfs  kernel  uboot
$ cd filesystem/
$ ls *
linuxrc

bin:
busybox  cat  chmod  date  df  echo  false  hostname  iptables-xml  kill  login  ls  mount  msh  ping  ps  rm  sh  true  umount

dev:
pts

etc:
ath  fstab  group  host.conf  inittab  issue  lld2d.conf  nsswitch.conf  passwd  ppp  rc.d  resolv.conf  securetty  services  shadow  wlan  wpa2  wr941n.ico

lib:
ld-uClibc-0.9.30.so  libdl-0.9.30.so  libip4tc.la        libip6tc.so        libiptc.so.0      libmsglog.so      libnsl.so.0           libresolv.so     libuClibc-0.9.30.so  libxtables.la        pkgconfig
ld-uClibc.so.0       libdl.so.0       libip4tc.so        libip6tc.so.0      libiptc.so.0.0.0  libm.so           libpthread-0.9.30.so  libresolv.so.0   libutil-0.9.30.so    libxtables.so
libcrypt-0.9.30.so   libexec          libip4tc.so.0      libip6tc.so.0.0.0  libiw.so          libm.so.0         libpthread.so         librt-0.9.30.so  libutil.so.0         libxtables.so.2
libcrypt.so.0        libgcc_s.so      libip4tc.so.0.0.0  libiptc.la         libiw.so.29       libnsl-0.9.30.so  libpthread.so.0       librt.so         libwpa_common.so     libxtables.so.2.1.0
libc.so.0            libgcc_s.so.1    libip6tc.la        libiptc.so         libm-0.9.30.so    libnsl.so         libresolv-0.9.30.so   librt.so.0       libwpa_ctrl.so       modules

mnt:

proc:

root:

sbin:
brctl  hostapd   init    iptables        iptables-restore  iwconfig  iwpriv  logread  reboot  route    tc      vconfig     wpa_supplicant
getty  ifconfig  insmod  iptables-multi  iptables-save     iwlist    klogd   lsmod    rmmod   syslogd  udhcpc  wlanconfig

sys:

tmp:

usr:
arp  bin  net_ioctl  sbin

var:
run

web:
dynaform  frames  help  images  localiztion  oem  userRpm
```

We now have access to files like /etc/passwd for password cracking or web files for further investigation among others. Many times the default configuration is stored in the filesystem and can reveal potential breachs 
due to misconfiguration. 

In following series I'll try to explain some ideas that let me discover some bugs in the past. I will try to cover some basics when analysing embedded Linux firmwares.

