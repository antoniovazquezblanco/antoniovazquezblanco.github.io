---
layout: post
title: "HackThisSite: Basic 06"
picture: /images/posts/2014-XX-XX-HackThisSite_logo.jpg
keywords: hackthissite, hack, help, challenge, security
description: "My solution to a HackThisSite challenge!"
---

![hackthissitelogo](/images/posts/2014-XX-XX-HackThisSite_logo.jpg "HackThisSite logo")

At last a challenge where we can code something!

In this challenge we're told that the security manager has encrypted his password and we have access to it. The encryption system is publically available!

<!--more-->

## Requisites

Patience. You need a little bit of time in order to reverse the logic of the encryption system. It would help you if you was able to do a simple program that decrypts the password but you should be fine if you do it by hand. If you really want to learn, try to code the solution after you solved the exercise!


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
			<p>The encryption system just increments the input character by its position number. Have a look at the ASCII table.</p>
		</div>
	</div>
</div>
<div class="panel panel-default">
	<div class="panel-heading">
		<button type="button" class="btn btn-default btn-xs spoiler-trigger" data-toggle="collapse">Code</button>
	</div>
	<div class="panel-collapse collapse out">
		<div class="panel-body">
```c
#include <stdio.h>
#include <string.h>
#include <stdlib.h>

int main(int argc, char **argv)
{
	/* Some variables... */
	char *encrypted;
	char *decrypted;
	int i;
	int len;

	/* Check the number of arguments... */
	if(argc != 2)
	{
		fprintf(stderr, "[!] Wrong number of arguments: ./decrypter <password>\n");
		return 1;
	}

	/* Asume the password is in argv[1]... */
	encrypted = argv[1];
	len = strlen(encrypted);
	decrypted = (char *)calloc(len, sizeof(char));
	if(decrypted == NULL)
	{
		fprintf(stderr, "[!] Could not allocate memory...\n");
		return 2;
	}

	/* Decrypt password... */
	for(i = 0; i < len; i++)
		decrypted[i] = encrypted[i] - i;

	/* Show results... */
	printf("The password is: %s\n", decrypted);

	/* The end. */
	return 0;
}
```
In order to use it just copy the code to a file called main.c and type ```gcc -o decrypter main.c``` in bash to compile it.
		</div>
	</div>
</div>


## Thoughts

