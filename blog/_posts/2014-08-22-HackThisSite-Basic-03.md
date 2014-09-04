---
layout: post
title: "HackThisSite: Basic 03"
picture: /images/posts/2014-08-22-HackThisSite_logo.jpg
keywords: "hackthissite, hack, help, challenge, security"
description: "My solution to a HackThisSite challenge!"
---

![hackthissitelogo](/images/posts/2014-08-22-HackThisSite_logo.jpg "HackThisSite logo")

HackThisSite basic challenge number three. I hope someone likes trying to solve this challenges and enjoys learning basic tricks of computer security. If you have any doubts about why things work like that just ask in 
the comments section!

<!--more-->

## Requisites

I understand that you know some basics about programming and that you know what PHP is from the previous challenge. In adition to that you should try to understand how the user can send information to a PHP page. HTML 
forms should be familiar to you.


## Solution

You must hover the hints for them to show so not to spoil people only reading the requisites section:

<h3 class="spoiler">Hint 1: <span>As always look for information in the page source...</span></h3>
<h3 class="spoiler">Hint 2: <span>The form contains sensible information...</span></h3>
<h3 class="spoiler">Hint 3: <span>The form points to a password.php file...</span></h3>
<h3 class="spoiler">Solution: <span>Append "password.php" to the current path and that page will return you the level password.</span></h3>


## Thoughts

I've already talked about uploading sensible information to webpages. Google is a very good friend for finding vulnerable sites with sensible information. As always you can find more about this in the [Google Hack 
Database](http://www.exploit-db.com/google-dorks/7/) in the [Exploit Database webpage](http://www.exploit-db.com/).
