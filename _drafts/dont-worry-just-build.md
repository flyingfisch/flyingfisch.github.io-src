---
layout: post
title: "Don't Worry, Just Code"
date: 2015-08-04
categories: culture programming
---

Use [this chart](http://lifehacker.com/this-graphic-helps-you-pick-your-first-programming-lang-1719213677) to decide your first programming language. Hey, come back! I was just making a point. Hello?

For those of you who stayed, charts like this are just about the worst way to choose a programming language. The problem with charts like these is that they imply that the first language you learn is the only one you will ever be good at. This simply is not true.

# My Saga

_If you don't want to read the long personal story of my relationship with programming, you can take the elevator [another floor down](#Its-easy-to-learn-new-languages)._ 

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

Until Casio released the [PRIZM](http://www.casioeducation.com/prizm). It had colors! I had to have one, but I knew no one would justify $99 on another calculator when the one I had was working just fine. And then it happened. Casio started a promotion where they gave away free PRIZM's to people who finished their online training course. I took the course, and a week later my beautiful PRIZM was waiting for me in the mailbox. So I delved deep into the inner workings of the PRIZM, managing to brick three of them in two years before Casio got suspicious and stopped sending replacements (though I hadn't voided my warranty).

Around the same time one of my dad's friends wanted a website built for his company and my dad asked if I wanted to try building one for him. I took that offer and spent two months learning HTML and CSS, as well as GIMP and Inkscape so I could make the background image. The website I made [looked somewhat crude](https://web.archive.org/web/20120625182415/http://www.atgworldwide.us/), but  the my dad's friend liked it and I was proud of it.

I spent my free time in the next couple years experimenting with web programming, and hacking on my calculator, eventually starting [a blog](http://casio.clrhome.org/) to try to help other people learn to program their calculators as well. The experience with the blog got me into web development, and I ended up freelancing during my last two high school summers. I built a website in vanilla PHP for converting PNG images to sprites that calculators could understand and then uploading them to share, in the process learning about open source licenses, filetype validation, and basic hacking techniques like SQL injection. That experience led me to [Laravel](http://laravel.com/), an excellent MVC framework written in PHP which allowed me to write much more organized and safe code.

The summer following learning Laravel, I decided to challenge myself by learning Haskell, which I had heard would help me thing about coding problems in a different way. Boy, did it. It took me a long time to learn, not only because it is a completely different paradigm, but because I was my first real experience with a statically typed language since C.

In the end I had a pretty satisfying sense of accomplishment, and I wondered if I had learned enough to be able to make it into the world of professional programmers, so I wrote up a resumé, took a look around, and applied for a couple of junior web developer positions, not really expecting anything to happen since I was less than a year out of high school. But then a couple days later I got a couple phone interviews, then face-to-face interviews, and ended up starting at [Panther](http://pantherpremium.com/) about a month later, even though they develop exclusively in C#, and I was very open about the fact that I hadn't touched the language at all.

The fact of the matter was, I had enough general programming experience to build on that I didn't need to know the language I was going to work in. It took me two weeks to get familiar enough with C# to start working on projects. Which makes a good segway for my next point.

# It's easy to learn new languages.


