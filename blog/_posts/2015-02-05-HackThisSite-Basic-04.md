---
layout: post
title: "HackThisSite: Basic 04"
picture: /images/posts/2015-02-05-HackThisSite_logo.jpg
keywords: hackthissite, hack, help, challenge, security
description: "My solution to a HackThisSite challenge!"
---

<img class="img img-rounded img-responsive center-block" title="HackThisSite logo" alt="hackthissitelogo" src="/images/posts/2015-02-05-HackThisSite_logo.jpg" />

Basic challenge four is another variation of the same history in the challenge number 3. If you reached this level you should have realised that you have very little information you can play with. This reduces the 
problem to a simple analisys of the three or four lines of html that you are given.

<!--more-->

## Requisites

You should know what an HTML form is. If you reached this level you should be able to complete it. If you want to know more I encourage you to try to build a test page with a form.


## Solution

You must hover the hints for them to show so not to spoil people only reading the requisites section:

<h3 class="spoiler">Hint 1: <span>As always look for information in the page source...</span></h3>
<h3 class="spoiler">Hint 2: <span>The form contains hidden fields...</span></h3>
<h3 class="spoiler">Hint 3: <span>The form points to an email address...</span></h3>
<h3 class="spoiler">Solution: <span>Modify the form in order to make the script send you the information</span></h3>


## Thoughts

It is quite common to find hidden fields in forms and when pentesting a webpage it is important to check for information and weak spots in this fields. It is common to find hidden fields without proper sanitization 
when visible fields are sanitized. This in some cases can be used for SQL injection attacks!
