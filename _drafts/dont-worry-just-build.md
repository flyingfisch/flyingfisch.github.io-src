---
layout: post
title: "Don't Worry, Just Build"
date: 2015-08-04
categories: culture programming
---

Use [this chart](http://lifehacker.com/this-graphic-helps-you-pick-your-first-programming-lang-1719213677) to decide your first programming language. Hey, come back! I was just making a point. Hello?

# You don't learn one language only

For those of you who stayed, charts like this are just about the worst way to choose a programming language. The problem with charts like these is that they imply that the first language you learn is the only one you will ever be good at. This simply is not true.

<figure>
<img src="{% asset_path fx9750gii.jpeg %}" alt="Casio fx-9750GII">
</figure>

This is a Casio fx-9750GII, the device that first introduced me to programming. It was given to me on my 14th birthday and I was overjoyed. The first thing I did was start reading the manual from page one. After getting through the calculating and graphing sections, I came across a chapter I didn't expect to see, labeled "Programming". Well, right there I decided I was going to program the thing (there was no tutorial, just a syntax guide and documentation of the built-in functions). My first program ever was named `SQRT`, and it looked something like this:

~~~
?→A
Locate 1,1,√A
~~~

It took user input, assigned it to `A`, and then printed the square root of `A` at position `1, 1` on the screen. My next program printed "Yay I can code!" over and over and over again. As much as I hate to admit it, it used `goto` instead of a `while` loop.

Fast forward a couple months. I had learned from some friendly people on the [Universal Casio Forums](http://casiocalc.org/) that using `goto` was usually a bad idea, and had started using loops and subroutines to organize my code. I had also begun to realize that Casio's BASIC dialect was pretty slow for anything other than math. Since I wanted to program games for it, I started researching other ways to program calculators. After googling around a bit I learned that the hardware on my calculator was actually the same as the hardware on the fx-9860GII, which had an SDK for developing _addins_ for it in C. So I installed a third-party custom ROM with the addin feature flag set to true, and got to work learning C.

There was a problem, though. Writing C for that calculator was hard. Most of the default libraries that online C tutorials referenced were not available or were named differently, and the documentation for the SDK was somewhat obscure. I ended up going back to good old BASIC and optimizing the programs I wrote to try to improve their speed.

This wasn't the end though, because a couple weeks later I came across a thread on a french calculator forum announcing development on a Lua port for the fx9860GII. I couldn't wait for the first release, and probably pestered the developers much more than I should have (to the point where I am surprised they continued to put up with me), but it finally came.

And then I dove into Lua. I wrote sh'mups. I made some obstacle dodging games. I wrote a couple libraries to help other developers who came my way. Life was good.

Until Casio released the [PRIZM](http://www.casioeducation.com/prizm). It had colors! I had to have one, but I knew no one would justify $99 on another calculator when the one I had was working just fine. And then it happened. Casio started a promotion where they gave away free PRIZM's to people who finished their online training course. I took the course, and a week later my beautiful PRIZM was waiting for me in the mailbox.

The bad news was that Casio was not going to release an SDK for the PRIZM. The good news was that a third-party SDK was provided by the community. The best news was that a third-party Lua port was already in the works, and by the time my PRIZM arrived the first release was already available. So I delved deep into the inner workings of the PRIZM, managing to brick three of them before Casio got suspicious and stopped sending replacements (though I hadn't voided my warranty).



