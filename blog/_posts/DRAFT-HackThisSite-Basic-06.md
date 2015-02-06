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

You must hover the hints for them to show so not to spoil people only reading the requisites section:

<h3 class="spoiler">Hint 1: <span>What do you know about the encryption system?</span></h3>
<h3 class="spoiler">Hint 2: <span>Try to encode some text and look for patterns...</span></h3>
<h3 class="spoiler">Hint 3: <span>Encode the text "aaaaaa" for example.</span></h3>
<h3 class="spoiler">Solution: <span>The encryption system just increments the char by its position number. Have a look at the ASCII table.</span></h3>
<h3 class="spoiler">Code: <span>```c
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
In order to use it just copy the code to a file called main.c and type ```gcc -o decrypter main.c``` in bash to compile it.</span></h3>


## Thoughts

