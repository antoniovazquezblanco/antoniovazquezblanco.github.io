---
layout: post
title: "HackThisSite: Basic 01"
picture: /images/posts/2014-07-04-HackThisSite_logo.jpg
keywords: "hackthissite, hack, help, challenge, security"
description: "My solution to a HackThisSite challenge!"
---

<img class="img img-rounded img-responsive center-block" title="HackThisSite logo" alt="hackthissitelogo" src="/images/posts/2014-07-04-HackThisSite_logo.jpg" />

I found [hackthissite.org](https://www.hackthissite.org/) quite long time ago when I was learning some basics of computer security and I really liked it. It is meant to reinforce theoretical knowledge with some 
practice. It consists on a bunch of challenges that should be solved progressively.

Here I will try to explain some of the solutions I gave to the challenges for fun. My aim is to share the thoughts that lead me to the result as well as hearing your opinion about my procedures.

<!--more-->

In the site you can find challenges about very different topic but I will start by trying to solve the "Basic" section.


## Requisites

For basic level 1 you must know the basics about html. It would be nice if you were able to do some of the basic stuff you need to make a webpage. I encourage you to create some simple examples that may include using 
images listing some elements and linking to other webpages if you don't know how to do it. Google is your friend for that but if you feel it is too much for you feel free to ask.


## Solution

<div class="panel panel-default">
	<div class="panel-heading">
		<button type="button" class="btn btn-default btn-xs spoiler-trigger" data-toggle="collapse">Hint 1</button>
	</div>
	<div class="panel-collapse collapse out">
		<div class="panel-body">
			<p>There's not much you can do. Try to understand how things work.</p>
		</div>
	</div>
</div>
<div class="panel panel-default">
	<div class="panel-heading">
		<button type="button" class="btn btn-default btn-xs spoiler-trigger" data-toggle="collapse">Hint 2</button>
	</div>
	<div class="panel-collapse collapse out">
		<div class="panel-body">
			<p>For understanding how things work you must look at the html code.</p>
		</div>
	</div>
</div>
<div class="panel panel-default">
	<div class="panel-heading">
		<button type="button" class="btn btn-default btn-xs spoiler-trigger" data-toggle="collapse">Hint 3</button>
	</div>
	<div class="panel-collapse collapse out">
		<div class="panel-body">
			<p>Look up in google what an html comment is...</p>
		</div>
	</div>
</div>
<div class="panel panel-default">
	<div class="panel-heading">
		<button type="button" class="btn btn-default btn-xs spoiler-trigger" data-toggle="collapse">Solution</button>
	</div>
	<div class="panel-collapse collapse out">
		<div class="panel-body">
			<p>In the html code there's a comment saying "pasword is..."</p>
		</div>
	</div>
</div>

## Thoughts

This may seem ridiculous but I think it is a good challenge because it is very simple. It just helps the ones that have no idea of information security at all while showing something that is more common that anybody 
should think, plain text passwords. You may be surprised of how many people do this: [http://plaintextoffenders.com/](http://plaintextoffenders.com/). Not only in emails but in forms among others.
Quite long ago, Microsoft Frontpage used to store a lot of plain text information in the root of the webpages made with this tool. This can be very delicated because if a tool widely used stores plain text information 
we can use google to search for vulnerable webpages. One example is [XAMPP directory passwords](https://www.google.com/search?q=xamppdirpasswd.txt%20filetype:txt&gws_rd=ssl). More hacks about public information can be 
found in [exploit database](http://www.exploit-db.com/google-dorks/).
