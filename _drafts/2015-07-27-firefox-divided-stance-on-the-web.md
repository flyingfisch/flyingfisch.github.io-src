---
layout: post
title: "Mozilla's Stance on the Web is Divided"
date: 2015-06-26
categories: culture
---

Last month, _The Verge_ published [an article][1] on the current state of the mobile web. The author laments the advent of proprietary "browsers" such as Facebook Instant Articles and Apple News, which he says were developed in response to poor mobile browser performance. This point was challenged in [Les Orchard's excellent rebuttal][2], which pointed out that ad-heavy websites like _The Verge_ are actually killing the web, not browsers.

Though I agree with almost everything in the article, I think it illustrates the fact that Mozilla's stance on the web is divided.

> Then, there's what that code's actually doing once it runs. There's the usual reporting on every scrap of browser fingerprint data. There's deciding whether and what ads to fetch & inject. I've seen scripts that record every pixel of mouse movement and phone home every few seconds.
>
> Some spawn lots of hidden iframes, each doing something fun. Others run code 10 times per second that trigger little invisible page re-renderings that chew up CPU and make scrolling & orientation changes chug. Some scripts get run multiple times and perform duplicate work. Attack ships on fire off the shoulder of Orion. I watched C-beams glitter in the dark near the Tannhauser gate.

This is the traditional, free-as-in-freedom side of Mozilla talking. Contrast this with [this response](https://bugzilla.mozilla.org/show_bug.cgi?id=1172126#c33) to a request for the removal of Pocket integration from Firefox:

> I don't see anything malicious or out of place here. It's a bit ambiguous and could be clarified, but most of this fearmongering about "Pocket could change their ToS and become malicious" is unnecessary given that you use Firefox under the Firefox ToS and you're not prompted about the Pocket ToS until you actually click the button and go through a bunch of steps. So "common sense" as you say dictates that there's no additional danger to the user here. Ambiguity, yes. Danger, no.

The comment completely sidesteps the fact that Firefox is breaking with the [Free Software tradition][3] by preventing users from completely disabling these applications.

  [1]: http://www.theverge.com/2015/7/20/9002721/the-mobile-web-sucks
  [2]: http://blog.lmorchard.com/2015/07/22/the-verge-web-sucks/
  [3]: https://www.gnu.org/philosophy/free-sw.html
