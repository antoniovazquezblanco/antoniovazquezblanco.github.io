---
layout: post
title: Bye Disqus. Welcome Mastodon!
mastodon_comments:
  toot_id: 109423180831038444
---

Lately, I have been thinking more about data ownership and some time ago I decided to removed Google Analytics from the blog. It was useful but I did not want to leak user data and have to include an ugly cookie banner in here... Nor do I have the CSS skills to build a proper floating one anyway...

Also, I've been using Disqus for a comments section in this blog. I had not given much thought on how Disqus manages user data until recently and decided to read their [privacy policy](https://help.disqus.com/en/articles/1717103-disqus-privacy-policy). They do have a "do not sell my data" program to opt-out of their targeted content and advertising platform. Unfortunatelly, this is not what I want in this small place. I would prefer that the default behaviour would be to not sell user data, to preserve privacy and to not collect any data. Given that my desires do not fit Disqus financial model I am opting to remove it from this blog.

When this decision was made, I had no alternatives for a possible comment section. Searching brought up an interesting idea that really fits my usecase: Mastodon!

I made some changes in this jekyll blog theme and finally changed my blog configuration:

```patch
diff --git a/_config.yml b/_config.yml
index b3b88f6..f80bd47 100644
--- a/_config.yml
+++ b/_config.yml
@@ -20,5 +20,5 @@ plugins:
  - jekyll-seo-tag
  - jekyll-redirect-from

-disqus:
-  shortname: antoniovazquezblanco
+mastodon_comments:
+  host: mastodon.social
```

I find this a more privacy oriented solution with the added benefit of a lower usage barrier. I hope you agree!

Special thanks to those who had the ability to see that this could be a very desirable feature. For those interested in the topic, I recommend you have a look at the following blog posts that made the change before I did:
- <https://yidhra.farm/tech/jekyll/2022/01/03/mastodon-comments-for-jekyll.html>
- <https://blog.xmgz.eu/jekyll-mastodon-comment/>
- <https://carlschwan.eu/2020/12/29/adding-comments-to-your-static-blog-with-mastodon/>
