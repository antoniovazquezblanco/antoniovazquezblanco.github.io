---
layout: post
title: "HackThisSite: Basic 02"
picture: /images/posts/2014-07-19-HackThisSite_logo.jpg
keywords: "hackthissite, hack, help, challenge, security"
description: "My solution to a HackThisSite challenge!"
---

<img class="img img-rounded img-responsive center-block" title="HackThisSite logo" alt="hackthissitelogo" src="/images/posts/2014-07-19-HackThisSite_logo.jpg" />

Here you have some information about challenge basic number two. As in the first challenge here I explain what I believe the requisites are and some tips for solving the puzzle. Hope you like them.

<!--more-->

## Requisites

For basic level 2 you should understand what a server side program is and what can be used for. An example is PHP wich is widely used all over the network. Some basic concepts about programming in any language are 
definetely important for understanding what can be happening behind the scenes in this challenge. I encourage you to investigate about the most basic concepts in programming and if you find it useful try to write some 
"hello world" like programs that include conditional statements. Beware that programming is indeed needed if you want to really get to know computer security so I really think that you should be learning the basis and 
trying to improve on your own. As always if you get stuck with any of this, feel free to ask in the comments section. 


## Solution

<div class="panel panel-default">
	<div class="panel-heading">
		<button type="button" class="btn btn-default btn-xs spoiler-trigger" data-toggle="collapse">Hint 1</button>
	</div>
	<div class="panel-collapse collapse out">
		<div class="panel-body">
			<p>Read carefully the notes on the level...</p>
		</div>
	</div>
</div>
<div class="panel panel-default">
	<div class="panel-heading">
		<button type="button" class="btn btn-default btn-xs spoiler-trigger" data-toggle="collapse">Hint 2</button>
	</div>
	<div class="panel-collapse collapse out">
		<div class="panel-body">
			<p>Think about how would you do a program that achieves the same as this level...</p>
		</div>
	</div>
</div>
<div class="panel panel-default">
	<div class="panel-heading">
		<button type="button" class="btn btn-default btn-xs spoiler-trigger" data-toggle="collapse">Hint 3</button>
	</div>
	<div class="panel-collapse collapse out">
		<div class="panel-body">
			<p>What the content of a file that doesn't exist can be?</p>
		</div>
	</div>
</div>
<div class="panel panel-default">
	<div class="panel-heading">
		<button type="button" class="btn btn-default btn-xs spoiler-trigger" data-toggle="collapse">Solution</button>
	</div>
	<div class="panel-collapse collapse out">
		<div class="panel-body">
			<p>There's no password. Just click submit with an empty password. When the program tries to read the password a null value or an empty string is returned so we have to send an empty string in order to bypass some kind of conditional statement.</p>
		</div>
	</div>
</div>


## Thoughts

Forgetting about uploading files is very common. In worst case scenarios things like this happen and your hole system can be bypassed easely. In less harmfull situations your server side language may generate error 
messages that leak important or sensitive information that can lead to further exploitation. An example can be again found [using 
google](https://www.google.com/search?hl=en&q=PHP+application+warnings+failing+%22include_path%22&gws_rd=ssl) and more examples can be found in the [Google hacking database](http://www.exploit-db.com/google-dorks/7/)
