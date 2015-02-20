---
layout: post
title: "HackThisSite: Basic 07"
picture: /images/posts/2014-XX-XX-HackThisSite_logo.jpg
keywords: hackthissite, hack, help, challenge, security
description: "My solution to a HackThisSite challenge!"
---

<img class="img img-rounded img-responsive center-block" title="HackThisSite logo" alt="hackthissitelogo" src="/images/posts/2015-XX-XX-HackThisSite_logo.jpg" />

Things start getting harder for those who have no experience with Linux and dynamic webpages! At this point you should know some basic html and if you're not familiar with it try to write a simple webpage. If you really want to know more try to setup a local webpage server in your computer and get in touch with PHP. This is really basic stuff you must get to know!

<!--more-->

## Requisites

If you have ever used an UNIX system it would help a lot. If not, you should get in touch with a command line. Just google for command line and learn the basics on whatever the OS you have althought it would be better if it was Linux or similar. Maybe you should try somthing like Ubuntu in a virtual machine if you haven't yet.
Knowing a bit of PHP should also be helpfull. As always it would be nice if you was able to program the challenge in your computer.

## Solution

<div class="panel panel-default">
	<div class="panel-heading">
		<button type="button" class="btn btn-default btn-xs spoiler-trigger" data-toggle="collapse">Hint 1</button>
	</div>
	<div class="panel-collapse collapse out">
		<div class="panel-body">
			<p>How would you implement the level in PHP?</p>
		</div>
	</div>
</div>
<div class="panel panel-default">
	<div class="panel-heading">
		<button type="button" class="btn btn-default btn-xs spoiler-trigger" data-toggle="collapse">Hint 2</button>
	</div>
	<div class="panel-collapse collapse out">
		<div class="panel-body">
			<p>Do you know how the cal command works?</p>
		</div>
	</div>
</div>
<div class="panel panel-default">
	<div class="panel-heading">
		<button type="button" class="btn btn-default btn-xs spoiler-trigger" data-toggle="collapse">Hint 3</button>
	</div>
	<div class="panel-collapse collapse out">
		<div class="panel-body">
			<p>How can you run 2 commands in one bash line?</p>
		</div>
	</div>
</div>
<div class="panel panel-default">
	<div class="panel-heading">
		<button type="button" class="btn btn-default btn-xs spoiler-trigger" data-toggle="collapse">Solution</button>
	</div>
	<div class="panel-collapse collapse out">
		<div class="panel-body">
			<p>If you input ```; ls``` in the field text for cal, the PHP script would try to run something like ```cal; ls``` which will output the default cal text followed by the execution of the ls command, listing the files in the current directory. If you're interested, I imagine the script can be implemented as follows, try to understand it at least!</p>
```php
<?php
echo system("cal ".$variable);
?>
```
		</div>
	</div>
</div>


## Thoughts

There are some tasks that cannot be implemented in php but need to execute commands. It is sometimes inevitable to execute this tasks but if so, avoid user input in this commands, and if you really can't avoid it, make very very sure that you properly scape and validate user input! User input must always be checked in order to avoid security problems because it is the main source of exploitation of web aplications!
