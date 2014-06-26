---
layout: post
title: "Some HTML/CSS stuff I don't like: Translations"
picture: /images/posts/2014-06-26-HTML_CSS_JS_logo.png
keywords: HTML, CSS, localization, translation, languages, standard
---

![htmlcssjslogo](/images/posts/2014-06-26-HTML_CSS_JS_logo.png "HTML5, CSS3 and JS logos")

I never liked HTML or CSS too much. I have to say that althought they were easy for me to get started with them, I always found tricky to get some things well done. I have to say that HTML 5 standard did improve a lot 
of aspects of this language but I see this technology too far from where it should be. Althought it has evolved there has been no interest in fixing some of the most basic issues of the standard among, in some cases, 
no interest in site maintenance to keep up to date with the latest changes. I'm thinking in an example while I write my opinion, it is translations.

<!--more-->

Although multilanguage webpages are very important in some cases there's no standard way of translating webpages. I can't imagine why this topic has never been talked so seriously it doesn't is part of html standard.
If you want a page to be in various languages you must translate it via Javascript (Implies loading more content than needed and charging the user side computation), either duplicate the page (Maintainig repeated 
content), either use server side languages that you may not want or need. In my opinion none of this is ideal and it could be better with very little effort.

A lot of alternatives have been showing up in order to fill this gap. Adobe has an Air framework for localization, Microsoft is pushing its methods for html based apps, numerous jQuery plugins are availiable for 
acomplishing this task, node.js, django, php... Everyone is looking fordward a system that can be widely used but I'm personally not very pleased with none of them.

Knowing that actual browsers must be able to parse XML similar language and that a great majority of them are able to parse and run Javascript I think that being able to parse strings from an XML or JSON from a file is 
not so hard to implement. I don't really care about the format of storing strings (Even CSS like format could be ok). I am thinking of a tag that includes a localization file as CSS is included:

```html
<!DOCTYPE HTML>
<html>
	<head>
		<link href="index.es.lang" rel="localization" loc="es" type="text/json" />
		<link href="index.en.lang" rel="localization" loc="en" type="text/json" />
	</head>
</html>
```

A second thing is needed for this to work, a way to relate an id to a string inside HTML. A new property should be enought for this to be working:

```html
<!DOCTYPE HTML>
<html>
	<head>
		<link href="index.es.lang" rel="localization" loc="es" type="text/json" />
		<link href="index.en.lang" rel="localization" loc="en" type="text/json" />
		<title textid="title" />
	</head>
	<body>
		<p textid="content" />
	</body>
</html>
```

This way the browser would be responsible for parsing the correct localization file based on the user preferences and populate the content of the tags that contain the translation property. This enables the browser to 
optimize the translation loading code instead of being loaded by Javascript for example and to reduce the amount of data transferred throught the network by only loading the desired localization file.

I can think of a major con to my mehtod that is related with nested tags:

```html
<!DOCTYPE HTML>
<html>
	<head>
		<link href="index.es.lang" rel="localization" loc="es" type="text/json" />
		<link href="index.en.lang" rel="localization" loc="en" type="text/json" /> 
	</head>
	<body>
		<p textid="something"><a textid="something_else" href="http://google.com/" /></p>
	</body>
</html>
```

In the exposed case the ```a``` tag cannot be between ```p``` text. Either it is before either after. That forces us to change the structure of the page to something similar to the following and to fix the appearance 
with css.

```html
<!DOCTYPE HTML>
<html>
	<head>
		<link href="index.es.lang" rel="localization" loc="es" type="text/json" />
		<link href="index.en.lang" rel="localization" loc="en" type="text/json" />
	</head>
	<body>
		<div>
			<p textid="something_pre" />
			<a textid="something_else" href="http://google.com/" />
			<p textid="something_post" />
		</div>
	</body>
</html>
```

I don't know what your experience with HTML/CSS is but for me this is kind of a big fail.

As I'm not to happy with this standard I think I will be writing about my thoughts on these languages from time to time. I would like to hear your oppinion in this topic because you will probably have much more 
experience than me in this area.
