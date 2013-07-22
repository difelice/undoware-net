---
title: What I Do - A secure static site
dept: paid
author: elizabeth-marston
date: 2013-07-15 21:29 -0700
template: article.jade
---

My most recent IT gig is [MedExtra](http://www.medextra.com/). I'm responsible for pretty much anything to do with a server or a web browser, which these days is pretty much everything.

One of the first things I did was insist on updating the website. The original site was a database-less .asp affair with a copyright date of 2004. The Internet had changed a lot in the intervening years, but the graphics, copytext, and code of medextra.com had remained untouched, slowly becoming a major liability for the company. Here's how I fixed it.

<div class="beforeafter">
  <div><img alt="before" src="/raster/medextra.com-before.png" width="512" height="576"/></div>
  <div><img alt="after" src="/raster/medextra.com-after.png" width="512" height="576"/></div>
</div>

<hr>
The first thing I did was chuck everything except the [Information Architecture](https://en.wikipedia.org/wiki/Information_architecture), or structural organization, of the website. Had this client been local, I would have gone by their offices and done on-site cardsorting, which is the IT industry's jargon for what is more accurately called [the K-J Technique](https://www.uie.com/articles/kj_technique/). However, the organization of the old site was one of its remaining bright points, so we decided that we might as well start where we were, and forego cardsorting.

The site was hosted on a $10/mo shared hosting plan by a very small and under-instrumented HSP. One of the design constraints was that the site not migrate from this host (for reasons too dull to go into.) However, traffic redirection still worked okay, so I googled up what IIS uses instead of .htaccess, and ended up crafting a pretty decent config file to bounce traffic from the old site at medextra.com to the new site at www.medextra.com. This also had the felicitious side effect of making rollback really easy.

Another constraint was security. MedExtra handles Personal Health Information, or **PHI**. This includes stuff like your medical charts, your name and address, and what drugs you are allergic to. It is subject to stringent legislation in both Canada and the U.S., the two countries in which MedExtra does business, meaning that weak security invites strong liability. Moreover as a consultant, I couldn't very well rely on myself or someone with an equivalently comprehensive skill set to patch the thing. In fact, I couldn't rely on *anyone*, as I knew very well that the last site had been left unupdated for years.

Part of the reason for that, however, is the difficulty associated with maintaining the subtending slurry of raw HTML and CSS (with a smattering of unnecessary .asp directives thrown on top for good measure.) Frustrating matters, the company is situated in Québec, and the site was bilingual. While I read and speak French, I wouldn't trust myself to write copytext in the language -- and nor would anyone else on the largely English-speaking team. On its own, this would have been an annoyance, but over time the two sites had grown apart, evincing subtly different organizational structures. The cumulative difficulties of keeping not one but two sets of content synced, updated, and uploaded, in two separate languages, had grown too great for the team.

I cut the Gordian (or I suppose, Gallic) knot by deleting the French site. :) No, seriously! My reasoning was that an English site would serve most people while we iterated the copytext. When we had the English copytext locked down, we'd hire a translator. I suppose you could say the first thing I did was get everything off the [critical path](https://en.wikipedia.org/wiki/Program_Evaluation_and_Review_Technique) that would work against [Agile principles](https://en.wikipedia.org/wiki/Agile_software_development). We had arrived at the point where a few weeks of English-only service was going to alienate fewer customers than several more weeks of the old site for everyone.

The French problem was thus defused, but there was plenty of work to do. I started with the boilerplate I use for nearly all of my HTML5 projects. It isn't anything fancy, but what it does do, it does well; in particular, it has very complete metadata, it loads nearly all Javascript from CDNs, and it loads its Javascript asynchronously via [require.js](http://requirejs.org). It is also reasonably easy to make [responsive](https://en.wikipedia.org/wiki/Responsive_Web_Design), which is of course now *de rigeur* for all websites. (Sorry, [Jakob Nielsen](https://en.wikipedia.org/wiki/Jakob_Nielsen_%28usability_consultant%29), [you're just wrong here](http://www.nngroup.com/articles/mobile-site-vs-full-site/).)

My initial plan had been to use the fantastic [Concrete5](http://concrete5.org) Open Source CMS, but budget constraints on the part of the client, coupled with the need for high security *and* the client's observed maintenance tendencies ruled out the possibility of a PHP/MySQL-based site. There is simply too much that can go wrong on a traditional LAMP stack when system administration is absent. PHP exploits no longer show up weekly -- that honour appears to have been passed to Ruby on Rails -- but there is still much that can go wrong. In a context where security is paramount, but where there is little oversight, PHP and MySQL offer *abysmal* security. Too many moving pieces, not enough time to glue them all down.

Realizing this, I figured a static site would be a more appropriate technology. In the first place, a static site is far more secure. And in the second, it's more secure! *It's just text.* The worst you're going to see, barring an overflow in your web server, is a cross-site scripting attack. And webservers don't usually have overflows these days. (*clears throat, looks at Microsoft* Well, Apache and Nginx don't.)

The catch, of course, is usability. Flat sites are hell to maintain, as MedExtra already knew all too well.

It was at this moment that serendipity stepped in and said, 'hey Beth, have some serendipity!' I was reading my morning fix of [Hacker News](http://news.ycombinator.com) when I came across [Wintersmith](http://wintersmith.io), an open source static site generator based on [Node.js](http://nodejs.org), [Stylus](http://learnboost.github.io/stylus/), [Jade](http://jade-lang.com), [Markdown](https://en.wikipedia.org/wiki/Markdown) and [Coffeescript](http://coffeescript.org).

Node, Stylus and Coffee are old friends of mine, and have been for a year or two (although I prefer the [Haskell](http://www.haskell.org)-ish [LiveScript](http://www.livescript.net) to CoffeeScript.) And for at least a half-decade, Markdown + [Vim](http://www.vim.org) has been my word processor of choice. Wintersmith is very young, and while I don't normally grab bleeding-edge packages, the familiar faces in the Wintersmith bundle won me over. I'm glad they did, because with them, I created a flat site that is drop-dead simple to edit.

*To be continued! Tomorrow: Content, responsiveness, and profiling.*




