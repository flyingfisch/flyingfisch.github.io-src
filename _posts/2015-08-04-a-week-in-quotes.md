---
layout: post
title: "A Week in Quotes"
date: 2015-08-04
categories: project
---

This past week I have been making one [codepen a day](http://codepen.io/collection/ANqEdj/) featuring an interesting quote. Here is an example.

<p data-height="391" data-theme-id="6851" data-slug-hash="XbOmwQ" data-default-tab="result" data-user="flyingfisch" class='codepen'>See the Pen <a href='http://codepen.io/flyingfisch/pen/XbOmwQ/'>Quote of the Day - Day 6 (Antoine de Saint-Exupery)</a> by Mark Fischer, Jr (<a href='http://codepen.io/flyingfisch'>@flyingfisch</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

The most challenging part, and the part that spawned the whole thing, were the lines on each side of the quotation marks. Actually, I should say _line_, but we'll get to that in a moment. The first thing you have to do is make the line. This is easy enough, we just add `border-bottom` like so:

~~~scss
blockquote {
    &::before {
        border-bottom: 3px solid #000;
    }
}
~~~

Next, we need that line to go behind our `::before` element. We can do this by making the height of the element half of the height of the letters, best way to do that is with `0.5em`

~~~scss
blockquote {
    &::before {
        border-bottom: 3px solid #000;
        height: 0.5em
    }
}
~~~

Now comes the tricky part. How do we get the line to only show on either side of the element? One way would be to give the element a background color that matches the parent background color. Unfortunately, this only works when we have a solid background color. Since we want images behind it, we need another method. The one I came up with was using a gradient, like so:

~~~scss
blockquote {
    &::before {
        border-bottom: 3px solid #000;
        border-image: linear-gradient(to right, #555 0, #555 47%, transparent 47%, transparent 53%, #555 53%, #555 100%);
        height: 0.5em
    }
}
~~~

Note that this is not the finished code, I am only showing the interesting properties. If you want code you can copy and paste, check out the source code [on the pen itself](http://codepen.io/flyingfisch/pen/XbOmwQ?editors=010).

