---
title: Cryptography is a Thought Thermos
author: elizabeth-marston
date: 2013-07-05
template: article.jade
dept: whoa
 ---

I wrote the following while explaining DRM to a friend on Google Plus.


> A secret is information that you and the recipient (in this case, the recipient is a consumer media device) share, but is not shared with the bad guys (in this case, the consumers). Mathematically, you can describe this as a decrease in entropy (because physics tells us that heat is released when information is destroyed; ergo Hawking radiation etc.) We say that Alice and Bob, who don't want to be overheard by Eve or Mallory, have lower entropy than Eve or Mallory (only relevant in our idealized system, however -- in real life, the thermal difference between knowing and not knowing something is too tiny to measure.) Since Alice and Bob share a secret, they are able to better organize the ciphertext  (i.e. they are able to understand it.) This is because increased complexity, by complexity theory, is the opposite of entropy.

<hr/>


> (Speaking of which, your mind should feel like it's melting about now. The identification of heat with information loss is so counterintuitive it took me six months of napkin equations to believe it. Quick hint: remember that Alice-the-physical-system must have a complete copy of the plaintext and secret within her, and so must Bob, whereas Mallory and Eve do not; all they have is the ciphertext, which without the secret cannot be 'compressed' into a parse tree, and that means it's going to be as good as random to them. Random is chaotic, and entropy is the march of chaos, which we experience as heat. Now excuse me while I go trip out somewhere thinking about this. )

> If the entropy 'spills' out of Eve or Mallory and into Alice or Bob, that constitutes the destruction of the secret and the acquisition of knowledge by Eve or Mallory.  A good cryptographic system is essentially (and absolutely literally) a very specific sort of insulation that maintains a thermal difference between Alice-Bob and the rest of the world. And since we've got lots of tools from other branches of math to model thermals, this suits us just dandy, as we can use those tools to characterize the difference between the Alice-Bob axis and Mallory (some deceiver) and Eve (some evesdropper.) In other words, we have reduced the hazy, everyday notion of 'secret' to cold hard math, and if that doesn't shock you nothing will. ;3
