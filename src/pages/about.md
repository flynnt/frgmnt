---
title: About
permalink: '/{{ title | slugify }}/'
pageDesc: 'About frgmnt.art'
socialImage: '/images/post/skeletor-create.jpeg'
---

## A Brief Introduction

This is the blog of Ted Flynn. It's largely an audio sketchbook where I post recordings of me playing song fragments on
my acoustic guitar. I also write actual words here periodically.

## A Much Longer Introduction

Hello! I'm Ted. I've been a musician for most of my life. I've been in a lot of bands, and while you've almost certainly
never heard of any of [the bands I was in](/posts/bands-i-have-been-in/), I also wouldn't necessarily consider them to
be completely inconsequential
either. This is a state in which a lot of people who went to L.A. and had a certain degree of success end up. It's a
state of having been almost almost famous. I tried so hard, and got so far, but in the end ... ahem. Anyway, it's
_fiiiiiiine_. I'm fine. Totally fine.

This site emerged largely as a way for me to encourage and document a daily creative practice for myself. A lot of
people have a daily writing practice, or a daily drawing practice. I have a daily music practice. It's usually just me
improvising increasingly sad music on an acoustic guitar, but hey, it's something.

I've always been fascinated by the artifacts of people's daily drawing or writing practices. The sketches in
sketchbooks, or the fragmentary brilliance of all the things in a writer's notebook. I continue to be amazed by the
relatively extemporaneous generation of art. I am especially awed by people who can draw and paint. Because it's
not my medium, I continue to be utterly mystified by it, and I don't ever want to _not_ be mystified by it. The biggest
tradeoff when you decide to actually pursue a specific artistic medium (like music) is that you have to sacrifice the
pure joy of experiencing it to gain the skills to create it. This is why I will never take a drawing class. I need
wonderment in my life.

I bring these things up, because I have had the privilege of having other people expressing wonderment over me just
sitting and improvising, bringing halfway decent (I think) music into a space that was quiet just a moment ago. People
want to know how it happens, and I don't know. It's just who I am. There is an inner state, and you externalize it in
your chosen medium through some complex interplay between innate ability, skill, and the laws of physics.

Music is inherently ephemeral, though. If you want it to be anything other than that, there's an extra step, you have to
record it, so that's what I do, in the most low-tech way imaginable. I have all these fragments recorded, and here is
where I share them – both in order to add some formality to my attempts to stay creative, but mostly because part of the
artist's compulsion is to keep putting this nonsense out into the world. And I mean _nonsense_ in a very positive,
chaotic, negentropic way. The mere existence of art is hope, or, in the immortal words of Skeletor:

<figure>
  <img
    loading="lazy"
    src="/images/post/skeletor-create.jpeg"
    alt="An image of a Skeletor figure with the caption: In a time of destruction, create something."
    width="1024"
    height="576"
    />
  <figcaption>Source: <a href="https://mas.to/@skeletor">Inspirational Skeletor</a>.</figcaption>
</figure>

## Technical Notes

### Gear List (lol)

- A Martin D-28 acoustic
- The internal microphone on my Pixel 8 phone
- Nylon Jim Dunlop .88mm pick
- A Shubb capo that I've managed to hang onto for 30 years

### Tech Stack

This site is built in [Eleventy](https://www.11ty.dev/) and is intentionally built to adhere as much as possible
to [Small](https://small-tech.org/about/#small-technology) and [IndieWeb](https://indieweb.org/) principles. The site
uses zero JavaScript, and as such contains no analytics and it has absolutely no concept of user tracking, ad
retargeting, or whatever other bullshit there is out there that has made the web increasingly intolerable. The site was
built with accessibility in mind. It is text forward, and uses images extremely sparingly.

The site embraces a [POSSE](https://indieweb.org/POSSE) (Publish Once, Syndicate Everywhere) approach to web content. It
has an [RSS feed]('/feed.xml') and I can push posts to my Mastodon account when I want. The site also utiizes [Web
Mentions](https://indieweb.org/Webmention) for posts that have been published on platforms that allow likes and comments.

The site is static HTML. I own the content. It is not bound to a specific platform, and can be hosted on any server that
can serve HTML. It is currently served via Cloudflare Pages, which could be considered problematic, but it was a
compromise. I suppose I am capable of self hosting this, but as the joke about regex goes, now you've got two
problems, and I am also not particularly interested in the expanding my personal attack surface in terms of network
privacy at the moment.

The code for this site is hosted in a private Github repository. It auto deploys to Cloudflare Pages based on pushes to the `main` branch.
