---
layout: post
title: New InsydeH2O BIOS update format
picture: /images/posts/2014-06-04-Insyde_logo.jpg
---

Some time ago I bought an Alienware M14xR2 as my last laptop broke down. Lately, Alienware published an update for my BIOS that I can't burn in my computer because I only use Archlinux. By googling a bit I quickly 
found a tool for burning the BIOS in a DOS command line but I would need to have a look to the [update package](http://www.dell.com/support/drivers/es/es/esdhs1/DriverDetails/Product/alienware-m14x-r2?driverId=6CVT8&osCode=W764&fileId=3210572008&languageCode=es&categoryId=BI).

Just by executing the update file in a virtual machine in windows I soon figured out it was a self extracting package. I just searched %TEMP% files for the extracted version.

![selfextractor](/images/posts/2014-06-04-Self_extractor.png "Self extractor...")

```bash
$ file *
Ding.wav:         RIFF (little-endian) data, WAVE audio, Microsoft PCM, 16 bit, stereo 44100 Hz
FlsHookDll.dll:   PE32 executable (DLL) (GUI) Intel 80386, for MS Windows
FlsHook.exe:      PE32 executable (GUI) Intel 80386, for MS Windows
FWUpdLcl.exe:     PE32 executable (console) Intel 80386, for MS Windows
InsydeFlash.exe:  PE32 executable (GUI) Intel 80386, for MS Windows
iscflash.dll:     PE32 executable (DLL) (GUI) Intel 80386, for MS Windows
iscflash.sys:     PE32 executable (native) Intel 80386, for MS Windows
iscflashx64.sys:  PE32+ executable (native) x86-64, for MS Windows
isflashWin.bin:   MS-DOS executable
platform.ini:     ASCII text, with CRLF line terminators
platforms.ini:    ASCII text, with CRLF, CR line terminators
xerces-c_2_7.dll: PE32 executable (DLL) (GUI) Intel 80386, for MS Windows
```

Ding.wav is just audio. I suppose it is played when flash is finished.
Just by reading the header of the ini files we can guess they are configuration files for the flasher utility. The format is self explained in comments. In line 61 I found that the file I wanted for flashing was 
isflashWin.bin but after a fast attempt with FreeDOS and the tool I mentioned before I realised that the format was not FD as it should so I googled a bit more. As it turns out, Insyde has released a new update file 
format and as it seems it isn't documented.

```bash
$ strings isflashWin.bin
[...]
!MV/VZ
.text
`_TEXT_REI
`_TEXT_PR
`.rdata
@.data
.reloc
fRfPf
fXfZ
fRfPf
fXfZ
ud9F
u_;^
9F t:9F
9F t
y[SVWh
fPf3
3k4j6t7x7|7
:R<V<
$BID01433
$_IFLASH_INI_IMG
;This file is InsydeFlash utility configuration file
[CommonFlash]
SwitchString=PJMDEN CPVER:[1] FHRST
ErrorMsg00=No error!
ErrorMsg01=AC detect error!
ErrorMsg02=DC detect error!
ErrorMsg03=DC gas gauge under 10%!
ErrorMsg04=BIOS version compare error!
ErrorMsg05=Model name compare error!
ErrorMsg10=Not support this version of Flash Common Interface!
ErrorMsg11=Show BIOS version string length more then xx bytes.
ErrorMsg12=Show model name string length more then xx bytes.
[...]
```

Inside the file I found a section that is exactly the same as the configuration file and it is preceded by a string quite suspicious.

```bash
$ strings isflashWin.bin | grep "\$_IFLASH"
5$_IFLASH_DRV_IMG
$_IFLASH_BIOSIMG
$_IFLASH_INI_IMG
$_IFLASH_EC_IMG_
```

I think these headers separate sections of the file as they are all 16 characters long. By having a look inside Hexedit I found that there is a padding of 8 bytes between the last character and some famous file magic 
numbers. I've done a simple python script (filesplitter) for splitting this kind of files and continue the analysis.

```python
#!/usr/bin/env python

import os
import argparse

magic = [ b'$_IFLASH_DRV_IMG', b'$_IFLASH_BIOSIMG', b'$_IFLASH_INI_IMG', b'$_IFLASH_EC_IMG_' ]
len_tag = 16
len_offset = 8

parser = argparse.ArgumentParser(description="Split Insyde H2O firmware files.")
parser.add_argument("-f", "--file", dest="filename", help="File to be processed.", metavar="file")
args = parser.parse_args()
file = open(args.filename, 'rb')
prefix = os.path.dirname(args.filename) + '/' +os.path.splitext(os.path.basename(args.filename))[0]
if not os.path.exists(prefix): os.makedirs(prefix)
content = file.read();

s1 = content.find(magic[0])
s2 = content.find(magic[1])
s3 = content.find(magic[2])
s4 = content.find(magic[3])

f1 = open(prefix+'/one', 'wb')
f1.write(content[0:s1])
f1.close()

f2 = open(prefix+'/two', 'wb')
f2.write(content[s1+len_tag+len_offset:s2])
f2.close()

f3 = open(prefix+'/three', 'wb')
f3.write(content[s2+len_tag+len_offset:s3])
f3.close()

f4 = open(prefix+'/four', 'wb')
f4.write(content[s3+len_tag+len_offset:s4])
f4.close()

f5 = open(prefix+'/five', 'wb')
f5.write(content[s4+len_tag+len_offset:])
f5.close()

file.close()
```

```bash
$ ./filesplitter -f isflashWin.bin
$ cd isflashWin/
$ file *
five:  data
four:  ASCII text, with CRLF line terminators
one:   MS-DOS executable
three: Intel serial flash for PCH ROM
two:   MS-DOS executable
```

Part number four is clearly the configuration file. If you are trying to tweak parameters in platform.ini note that it wont work, but if you modify this part of the binary file it will. It seems that Insyde is now 
using the platform.ini only to point to the update file (isflashWin.bin) and then the utility just parses the configuration from there.
I had no success in running one and two. I've tried FreeDOS and Windows 98 in DOS mode which should have support for MZ executables but in the best case I got no output and in the worse some memory address exceptions.
I found that number three is related to a utility called [Flashrom](http://flashrom.org/Flashrom) but I don't have much time to investigate. Maybe some readers can point me in the right direction.
After having a look to five in Hexedit I think it can be a BIOS image although I don't really know about this topic.

Although I could not flash my BIOS I could find some little information about this new format and I also found that MZ executable signatures weren't in the binary analysis tool I use ([binwalk](http://binwalk.com/)). 
The latest version of binwalk now looks for MZ executables.
