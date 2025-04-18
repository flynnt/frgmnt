---
date: '2025-04-18'
title: Infrastucture Shaming
pageDesc: 'TFW your dev ops platform calls you out for not posting.'
permalink: '/posts/{{ title | slugify }}/'
tags:
  - blog
---

> We become what we behold. We shape our tools and then our tools shape us.\
> – Fr. John Culkin, SJ

This is a post about the fact that I got an email from my dev ops provider informing me that this site would no longer
build automatically if it detects that the underlying code hasn't changed recently. So I am now blogging for the sake of
blogging in order to satisfy the needs of a machine that refuses to publish my blog if I am not blogging.

Sounds about right, but more on that later.

"Wait, wait", you say, "that quote, it's...".

Yes, I know. You, an intellectual, like me, also clearly an intellectual, thought that Marshall McLuhan said that. I
swear I can still remember seeing those words in my now yellowed late 90's copy of _Understanding Media_. Alas, he
apparently [did not explicitly say that](https://mcluhangalaxy.wordpress.com/2013/04/01/we-shape-our-tools-and-thereafter-our-tools-shape-us/),
even though you could say it was a key premise in a lot of his work.

Anyway, you get the idea.

Why does this site need to automatically deploy anyway? Well, it's a completely static site (Eleventy). It has no client-side
JavaScript, which is by choice. It does however, have some dynamic content, even though it might be stretching the
definition of "dynamic" to call it that. It _does_ make API calls when it builds to get the last thing I listened to
from Last.fm, and it also pulls in any webmentions or likes that happen to have posted in the interval between builds.

This is not an uncommon pattern. There's a cron-driven Github action that calls a webhook over on CloudFlare that then
deploys the site from the latest commit. And like, obviously I'd like it to keep doing that even if there haven't been
any recent commits (aka posts).

Anyway, here's hoping this wee post reactivates my Github action.
