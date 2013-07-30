---
title: Avoiding the Tragedy of the Open Source Commons (1997)
author: elizabeth-marston
date: 2013-07-29 23:01:00 -0700
template: article.jade
dept: naked-baby-photos
blurb: An article I wrote in the late nineties about the economics of FOSS. Let's tear it up!
 ---

 [I wrote an editorial that got published on Slashdot in 1998](http://slashdot.org/features/older/9806121215257.shtml), the year I left home for university. It was vaguely in reply [to something Eric S Raymond](http://en.wikipedia.org/wiki/The_Cathedral_and_the_Bazaar) wrote. (IIRC, he replied!)

 My writing has mercifully improved, but you know what? I spotted something important, way back then: the incentives of Open Source favour endless forking. Fortunately, with the advent of git, forking became much
cheaper for a FOSS project to deal with, as git makes patches easier to upstream. The huge glut of developers that emerged in the early '00s also alleviated any developer scarcity brought about by ego-incentives. Thus the doom portended did not in fact tend. (Or whatever.)

The full text, in all its adolescent glory, after the jump.

-----
##Avoiding the Tragedy of the Commons

The economics of free software are strange by almost any measure. The produce i s in near-infinite supply; labor is given freely; goods can be replicated easil y and indeed come bearing licenses that actually encourage people to do so. As suggested by Eric S. Raymond, the standard rules of scarcity seem to be inappli cable at best - leaving some with the fervent hope that maybe, just maybe, free software's 'bubble' of warped economic space/time will permit it to pull off a stunning victory against the Microsoft Blight by magically, confoundingly chan ging the rules of the game itself.

But the problem is this: Even bubbles have to interface with the Real World(tm) somewhere. Although there may not be a scarcity of goods or even ideas, there is and will probably always be a scarcity of laborers - or, more accurately, a scarcity of /interested/ and /available/ laborers. The freedom that has allowed open source software to flourish could soon threat en its very existence. As free software rises to prominence, the potential of b ecoming a Famous and Distinguished Project Leader (in the same lineage as Linus , RMS and Larry Wall, etc) could very well lead new programmers to found a mill ion small and essentially vaporous projects rather than a few, important ones.

As ESR points out in his excellent 'Homesteading the Noosphere', one of free software's greatest kickbacks is reputation. We work upon the scarcity of celebrity. The leaders of the best and most widely-loved projects - Linux, GCC, Perl, the Gimp - the kind of hero status envied by third world dictators. These people simply have truckloads of the stuff. They're flush. Unfortunately, the many dozens or hundreds of minor contributors labour in obscurity. In terms of fame, contributing patches to a major project is /nothing/. How many minor patch con tributors to the Linux kernel can the average user name off-hand? Quick, withou t looking at the sources: Who helped add HAM support to 2.1.x? Or who roughed i n support for non-ide Sony CDROM drives, way back when? Oh, sure, people do con tribute this stuff; it isn't like anyone is /obsessed/ with celebrity. The free software commmunity seems to approach even its internal currency with inspirat ional moderation. The point, however, is that only select handful benefit fame- wise from participation in somebody else's project. The rest are relegated to t he dustbin of the credits file. Surely the temptation must exist to take a shot at real fame, no matter what the odds.

How many potential free software coders will ever be 'generous' enough to parti cipate in the Revolution without any sort of alterior motive? Hell, how many cu rrent free software coders (which, BTW, are already a minority in a profession undergoing a manpower shortage of its own) will continue plugging away as unkno wns when glory and untold riches await them as the potential founders of new an d wildly successful IRC programs($I), network games, or mp3 players? Why muck a bout with boring user interfaces when they could jump at the chance to craft th e very flesh and bone of a project or feature that is entirely their own baby?

Our greatest fear should not be a crushing blow by Microsoft but a death by a t housand apps and a kind of malignant featurism that poisons the body of Free So ftware not through neglect but through /overlife/. Random, undirected diversity is the creed of a tumour. Resources in this growing body are to be rationed, a nd its benefactors rewarded not only for their contribution to the pot but for the *kind* of contribution they make.

In short, we need to start learning the value of the unsexy, the plain, the bor ing and the pedantic. And I say this with the most emphatic 'we'. Unless the co mmunity as a whole increments the perceived value of the guys doing grunt work, we could end up with a lot of meaningless little nothings, piles of pale and f lightless applications with version numbers all in deep pre-natal floating-poin t decimals. The old ditty about schoolmarks being the average, not the sum of t est results could be rewritten for Linux: The OS is the multiple, not the sum, of all software present.

An interesting example of this principle (let's call it, in the interests of fa me, Marston's Principle) would probably be the Enlightenment theme community. A lthough I've only run Enlightenment a couple of times (both screen real estate and ram being in short supply), a quick stroll through the Enlightenment sectio n of themes.org reveals development run amok. The user is greeted by a littany of half-completed themes, many of which profess not only great ugliness but the sort of awkward placement of controls that really cruel scientists would use t o test the intelligence of lab rats.($E) But hey - what does it matter? We've g ot a whole fscking /load/ of themes available. What wonderful diversity, ha ha!

Contrast this with the Mac's Kaliedoscope($K). Kaliedoscope, if you've ever had to use it, is simply a joy and wonder to behold. The themes are largely clean, comprehensive, efficient and just to /die/ for, visually. The development grou p is reputed to be small and tight-knit - not exactly the kind of Bazaar that t he new elite is touting, but an efficient and productive group nonetheless. And although there aren't exactly tons of 'looks' available, those that do exist a re clean, attractive, and effective. There are major organs I would gladly dona te to have that kind of UI elegance under Linux.($O)

Personally, I feel that the next guy to release a New And Innovative windowing tookit, file manager or IRC client should be shot on sight. We have Qt. We have Gtk+. We have KDE and we have Gnome($D). Please, for the love of God, Kibo or whatever other deity you worship - please, no more! Fold your work into someone else's. Swallow your pride, and wait for the rest of the world to catch up to you.

In the mean time, however, consider these faint point-lights of hope. First, th ere is the possibility that at least some of the problem could be self-correcti ng. As the number of available linux programs grows, the perceived value of bei ng a team leader could undergo inflation. Although non-central contributors to projects get far less recognition than they should, the leaders of piddly proje cts could risk getting lost in the shuffle. The same self-interest that would u sually compel them to homestead new territory could lead to a return to the les s-promising but less risky position of 'contributor'. Secondly, we might be abl e to mitigate the situation somewhat with our current policy of vigorous standa rds and 'accretion engineering'. By basing free software on recognised protocol s (and, for that matter, recognised user interfaces), we leave a path open for future consolidation and raise community's coherency index a notch. And instead of slashing and burning huge bodies of poorly written code each time the versi on number is incremented, we should instead strive for a policy of constant and steady growth through clean APIs, public standards and boringly hygenic coding practices. It is no accident or anachronism that Linux is built upon the conve ntions of a twenty-year-old operating system. Be as unified as you can with the rest of the Free Software movement, or even future Free Software movements, ev en if you never see their faces.

We are not Microsoft; we cannot sprint. But we can run.($R) It's just up to us to make sure our software runs as well as we. Work slowly, collectively, to pol ish one essential after another. Listen to hype - and fame - at great non-perso nal peril. With time, and modesty, we can yet avoid the Tragedy of the Commons.

$I: Because the only good clients are sirc and BitchX anyway, so what's the point in trying? :P

$E: I have nothing against Enlightenment, and I'm sure that E0.14 has many wonderful technical merits. I just hate the themes people make.

$K: An enlightenment-like themer for Mac that changes the style of menus, windows and widgets. Very cool.

$O: Things that I have two of, mostly. A kidney or a lung.

$R: I was going to try to make a lame metaphor/pun about redwoods versus Redmond, but it ended up sounding terribly awkward, so. :)
