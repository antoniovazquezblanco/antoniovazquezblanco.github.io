---
layout: post
title: "HackThisSite: Basic 11"
picture: /images/posts/2014-XX-XX-HackThisSite_logo.jpg
keywords: hackthissite, hack, help, challenge, security
description: "My solution to a HackThisSite challenge!"
---

<img class="img img-rounded img-responsive center-block" title="HackThisSite logo" alt="hackthissitelogo" src="/images/posts/2015-XX-XX-HackThisSite_logo.jpg" />



<!--more-->

## Requisites

Basic Apache configuration. What .htaccess is. Understanding that the content of a web is closely related with passwords.


## Solution

<div class="panel panel-default">
	<div class="panel-heading">
		<button type="button" class="btn btn-default btn-xs spoiler-trigger" data-toggle="collapse">Hint 1</button>
	</div>
	<div class="panel-collapse collapse out">
		<div class="panel-body">
			<p>What do you know about the encryption system?</p>
		</div>
	</div>
</div>
<div class="panel panel-default">
	<div class="panel-heading">
		<button type="button" class="btn btn-default btn-xs spoiler-trigger" data-toggle="collapse">Hint 2</button>
	</div>
	<div class="panel-collapse collapse out">
		<div class="panel-body">
			<p>Try to encode some text and look for patterns...</p>
		</div>
	</div>
</div>
<div class="panel panel-default">
	<div class="panel-heading">
		<button type="button" class="btn btn-default btn-xs spoiler-trigger" data-toggle="collapse">Hint 3</button>
	</div>
	<div class="panel-collapse collapse out">
		<div class="panel-body">
			<p>Encode the text "aaaaaa" for example.</p>
		</div>
	</div>
</div>
<div class="panel panel-default">
	<div class="panel-heading">
		<button type="button" class="btn btn-default btn-xs spoiler-trigger" data-toggle="collapse">Solution</button>
	</div>
	<div class="panel-collapse collapse out">
		<div class="panel-body">
			<p>The only thing I can see is a changing name of a song in a plain webpage. Is it php? If I enter index.php in the url it shows a new page! It is better than nothing. At least I know where to put the password. There's nothing in source code again. I went back to index.html and searched a bit about the name of the songs. Every song was from Elton John so I tryed that in 100 ways and got nothing. After some frustration I started entering ramdon URLs and luckily found that /e/ was a valid folder. Clicking on what I found got to /e/l/t/o/n/ URL. Why not testing for apache files? Maybe .htaccess is present somwhere. /e/l/t/o/n/.htaccess is hidding a file called DaAnswer.* but the character '*' can represent any string so... Testing!/e/l/t/o/n/DaAnswer.txt shows "The answer is somewhere! Just look a little harder.". After som time I couldn't find anything else so I began thinking on something else... After a siesta I realised I had completed the challenge. "The answer is somewhere!", particularly "somewhere". Test it on index.php and boom!</p>
		</div>
	</div>
</div>


## Thoughts

