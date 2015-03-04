---
layout: post
title: "HackThisSite: Basic 08"
picture: /images/posts/2014-XX-XX-HackThisSite_logo.jpg
keywords: hackthissite, hack, help, challenge, security
description: "My solution to a HackThisSite challenge!"
---

<img class="img img-rounded img-responsive center-block" title="HackThisSite logo" alt="hackthissitelogo" src="/images/posts/2015-XX-XX-HackThisSite_logo.jpg" />

This 

<!--more-->

## Requisites

PHP whould be nice as in the previous exercises. 
Something about PHP and maybe how to implement an script for uploading things. Server side includes are a must.


## Solution

<div class="panel panel-default">
	<div class="panel-heading">
		<button type="button" class="btn btn-default btn-xs spoiler-trigger" data-toggle="collapse">Hint 1</button>
	</div>
	<div class="panel-collapse collapse out">
		<div class="panel-body">
			<p>




			</p>
		</div>
	</div>
</div>
<div class="panel panel-default">
	<div class="panel-heading">
		<button type="button" class="btn btn-default btn-xs spoiler-trigger" data-toggle="collapse">Hint 2</button>
	</div>
	<div class="panel-collapse collapse out">
		<div class="panel-body">
			<p>






			</p>
		</div>
	</div>
</div>
<div class="panel panel-default">
	<div class="panel-heading">
		<button type="button" class="btn btn-default btn-xs spoiler-trigger" data-toggle="collapse">Hint 3</button>
	</div>
	<div class="panel-collapse collapse out">
		<div class="panel-body">
			<p>





			</p>
		</div>
	</div>
</div>
<div class="panel panel-default">
	<div class="panel-heading">
		<button type="button" class="btn btn-default btn-xs spoiler-trigger" data-toggle="collapse">Solution</button>
	</div>
	<div class="panel-collapse collapse out">
		<div class="panel-body">
			<p>


First of all let's see what does the script do. So I type anything and click on submit. It redirects me to a confirmation page with a link and if I click it I get to an shtml page with the text I typed. I have two ideas... First one is to overwrite the password file so that I know what the password is, but I don't have it's name. The other is to test if server side includes are enabled. For checking I type <!--#exec cmd="ls ../" --> which returns the name of the files of the level. Just have a look to the files and check for the password.




			</p>
		</div>
	</div>
</div>


## Thoughts

