---
layout: post
title: "Building a Modern Website: Part 2"
date: 2015-06-26
categories: frontend design tutorial modern-website-series
---

This is the third of a [3-post series](/modern-website-series/) on building a modern website (if you don't understand the post title, this may help you: the series started with Part 0. [Lua developers are excused](http://stackoverflow.com/questions/2785704/why-do-lua-arraystables-start-at-1-instead-of-0) for not getting the significance.). The demo website is a fictional sailing club's homepage. This post will go over the footer and finishing touches. This is what the site looked like at the end of the last post:

<p data-height="424" data-theme-id="6851" data-slug-hash="GJEWMR" data-default-tab="result" data-user="flyingfisch" class='codepen'>See the Pen <a href='http://codepen.io/flyingfisch/pen/GJEWMR/'>GJEWMR</a> by flyingfisch (<a href='http://codepen.io/flyingfisch'>@flyingfisch</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script> 

# Footer

Before we get to the CSS, let's stick a little markup in the footer like so:

~~~markup
<footer>
    &copy; 2015 R. S. Sailing Club
</footer>
~~~

OK, with that out of the way we can start styling. Let's start by giving it a background color (remember that we set variables for the color values at the top of the stylesheet):

~~~scss
footer {
    background-color: $light-secondary;
}
~~~

Now let's throw some padding on it:

~~~scss
padding: 2em;
~~~

And then make the font a little larger and centered:

~~~scss
font-size: 1.2em;
text-align: center;
~~~

That's it for the footer, now let's do some quick mobile optimizations and wrap this project up.

# Mobile

The first thing we can do is make the navigation go below the logo on mobile.

~~~scss
header {
    @media (max-width: 630px) {
        nav {
            display: block;
        }
    }
}
~~~

Next let's make the feature section come all the way to the edges of the screen.

~~~scss
article {
    .feature {
        padding: 0;
    }
}
~~~

That's it!

# Going Forward

That finishes this tutorial series, but there is still plenty left to do. For instance, we haven't covered image styling or captions, and the footer is pretty empty. Maybe a background image behind the feature section would be a good idea, it's up to you.

<p data-height="378" data-theme-id="6851" data-slug-hash="yNzQwd" data-default-tab="result" data-user="flyingfisch" class='codepen'>See the Pen <a href='http://codepen.io/flyingfisch/pen/yNzQwd/'>yNzQwd</a> by flyingfisch (<a href='http://codepen.io/flyingfisch'>@flyingfisch</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

Feel free to fork the pen and make it your own!

