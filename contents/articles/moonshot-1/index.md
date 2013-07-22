---
title: Fame Moonshot Step 1 - Identify Requirements
dept: getting-famous-for-getting-famous
author: elizabeth-marston
date: 2013-07-06
template: article.jade
---

[As previously announced](/world-domination/), my current project is an experiment: How quickly can I get famous by writing about the tools and process it takes to get famous?

Assumption: becoming famous on the Internet is a well-understood process, not magic or luck. Understand the process, and you can write code to replicate it. And once you have the code, you can make it happen whenever you like, to whatever degree you like. For a time, at least.

An additional wrinkle is that it **must** be *easy*. [Willpower is finite](http://en.wikipedia.org/wiki/Ego_depletion), so usability is 'willpower economics'. If I can make fame easy enough, it will happen whether I want it to or not. I want to get the most bang for my willpower buck, and that means automation.

<span class="more">&nbsp;</span>

In other words: code is the tactic. Usability is the strategy.

So about those tactics. Thinking about my own workflow with [the Wintersmith static site generator](http://wintersmith.io), I've noticed the following loop:

###Beth's Blogging Loop

- Come up with an idea for an article (optional; often I just run with a cute headline and see where it takes me! Yes, yes, terrible, I know. Yet honest.)
- Come up with a catchy title for the article. Puns welcome. All alliterations allowed.
- Figure out a good permalink to support the article name
- Copy an old article's directory and Markdown source files
- Edit Markdown sources: change date of publication, title
- Write article
- Save file
- Edit sitemap.xml, add the new permalink
- 'git add -p && git commit -am "added story <permalink>"'
- Rerun 'wintersmith build' to compile sources
- Push my binary assets to Google Appengine, which we use as a CDN
- Minify HTML, CSS, and JS produced by Wintersmith
- rsync the build directory to the serving directory, with --delete
- Ping Google and others, let them know about sitemap change
- Submit permalink, blurb, and/or full contents to Twitter, Reddit, Hacker News, Google Plus, Facebook, Tumblr, and whatever people are using these days for RSS.
- Begin watching analytics for traffic spikes (fingers crossed!)
- View the article on the website on phone, tablet, and all current major desktop browsers
- Monitor all the outlets named above for feedback and reactions; when they happen, respond to them *immediately*.

Putting on my UX cap, a few things strike me right away:

1. It's a *lot* of work to publish a new story. Wintersmith makes it easi*er* to maintain a static-site blog, and while each step on its own is easily grasped, they are confusing in aggregate.
2. It doesn't have to be like this.
3. There are a lot of easy optimizations we can do right away.

In the next article on this subject, I will show how to leverage FOSS to optimize this loop.
