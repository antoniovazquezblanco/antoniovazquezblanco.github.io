---
layout: post
title: "GPS DOP Analyzer"
picture: /images/posts/2015-04-25-DOP_Analyzer.jpg
keywords: GPS, DOP, dilution of precission, Matlab, GNSS, almanac, SEM
description: "A program that takes a SEM almanac and computes the dilusion of precission at a given time."
---

This semester I've enrolled in a satellite navigation fundamentals course that required a final assignment in order to pass. With the help of some colleges we coded a Matlab user interface that takes a SEM almanac and plots the dilution of precision in multiple points of the earth surface.

<br />
<img class="img img-rounded img-responsive center-block" style="width:70%" title="DOP Analyzer" alt="dopanalyzer" src="/images/posts/2015-04-25-DOP_Analyzer.jpg" />
<br />

<!--more-->

The program is able to calculate the DOP in any time you specify but beware that SEM almanacs do not provide good approximations of satellite positions in instants far away from the time of applicability of the almanac. You can also select in how many points you want to divide the earth in order to provide more accurate results or get faster calculation times. In case the map is not precise enough you can query the DOP value from the coordinates you're interested in. Maps can be rendered in 2D or 3D and with or without satellite positions.  

I've found the assignment very appropriate for us to learn new things and really enjoyed building this tool but there are some things that I would like to change. Because time was critical and we had access to Matlab installations we used this tool although I would really like to port this to something more open like C or Python for anyone to be able to use it and experiment although it will not be a trivial task because of the plotting functions.  

Meanwhile for anyone interested the latest code will be on a [Github repository](https://github.com/antoniovazquezblanco/DOP-Analyzer).
