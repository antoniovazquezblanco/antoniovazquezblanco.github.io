---
layout: post
title: "KiCad libraries"
picture: /images/posts/2015-02-28-KiCad_libraries.png
keywords: kicad, libraries, usb, mini, pci, express, lm1117, footprints
description: "I've been working on some projects with KiCad and decided to release some libraries you may find useful."
---

I've recently started working on some circuits with a friend and I would like to share some of the work.

<!--more-->

Among the different options we chose to use KiCad because it is free and it seems that it's comunity has been growing lately. It would be nicer if they used Git instead of Bzr and they need to make a "release" soon because the latest stable build is from 2013 and a lot of changes have been introduced since then. If you ask me I would stick to the stable release because gerber files generated with the development version don't work in some PCB prototyping webpages such as in [Seeedstudio Fusion](http://www.seeedstudio.com/service/index.php?r=pcb) or [OSH Park](https://oshpark.com/).

<img class="img img-rounded img-responsive center-block" title="KiCad MPCI-E footprint." alt="kicadmpciefootprint" src="/images/posts/2015-02-28-KiCad_libraries.png" />

Although KiCad has a fairly big component library and that there are a lot of components on the internet, we weren't able to find some components for the stable version of KiCad. I've uploaded those to [repositories in my GitHub account](https://github.com/search?q=user%3Aantoniovazquezblanco+kicad_*). Remember they're in a "BETA" stage because they haven't been properly tested. I will be updating them if I found any bugs!

By the way, I use them by adding a library folder in my project and adding the components I need as git submodules.

[KiCad libraries](https://github.com/search?q=user%3Aantoniovazquezblanco+kicad_*)
