---
layout: post
title: "HackThisSite: Basic 03"
picture: /images/posts/2014-08-22-HackThisSite_logo.jpg
keywords: "hackthissite, hack, help, challenge, security"
description: "My solution to a HackThisSite challenge!"
---

<img class="img img-rounded img-responsive center-block" title="HackThisSite logo" alt="hackthissitelogo" src="/images/posts/2014-08-22-HackThisSite_logo.jpg" />

HackThisSite basic challenge number three. I hope someone likes trying to solve this challenges and enjoys learning basic tricks of computer security. If you have any doubts about why things work like that just ask in 
the comments section!

<!--more-->

## Requisites

I understand that you know some basics about programming and that you know what PHP is from the previous challenge. In adition to that you should try to understand how the user can send information to a PHP page. HTML 
forms should be familiar to you.


## Solution

<div class="panel panel-default">
	<div class="panel-heading">
		<button type="button" class="btn btn-default btn-xs spoiler-trigger" data-toggle="collapse">Hint 1</button>
	</div>
	<div class="panel-collapse collapse out">
		<div class="panel-body">
			<p>As always look for information in the page source...</p>
		</div>
	</div>
</div>
<div class="panel panel-default">
	<div class="panel-heading">
		<button type="button" class="btn btn-default btn-xs spoiler-trigger" data-toggle="collapse">Hint 2</button>
	</div>
	<div class="panel-collapse collapse out">
		<div class="panel-body">
			<p>The form contains sensible information...</p>
		</div>
	</div>
</div>
<div class="panel panel-default">
	<div class="panel-heading">
		<button type="button" class="btn btn-default btn-xs spoiler-trigger" data-toggle="collapse">Hint 3</button>
	</div>
	<div class="panel-collapse collapse out">
		<div class="panel-body">
			<p>The form points to a password.php file...</p>
		</div>
	</div>
</div>
<div class="panel panel-default">
	<div class="panel-heading">
		<button type="button" class="btn btn-default btn-xs spoiler-trigger" data-toggle="collapse">Solution</button>
	</div>
	<div class="panel-collapse collapse out">
		<div class="panel-body">
			<p>Append "password.php" to the current path and that page will return you the level password.</p>
		</div>
	</div>
</div>


## Thoughts

I've already talked about uploading sensible information to webpages. Google is a very good friend for finding vulnerable sites with sensible information. As always you can find more about this in the [Google Hack 
Database](http://www.exploit-db.com/google-dorks/7/) in the [Exploit Database webpage](http://www.exploit-db.com/).
