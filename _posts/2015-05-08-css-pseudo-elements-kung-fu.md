---
layout: post
title: "Pseudo-Element Kung-Fu"
date: 2015-05-08
categories: css programming web
---

I recently found that the `content` property can contain cooler stuff than just
strings. For instance, you can show the `href` of a link in a cool popup with
absolutely no JS:

~~~css
content: attr(href);
~~~

<p data-height="378" data-theme-id="6851" data-slug-hash="YXypBV" data-default-tab="result" data-user="flyingfisch" class='codepen'>See the Pen <a href='http://codepen.io/flyingfisch/pen/YXypBV/'>Pure CSS link hover popup</a> by flyingfisch (<a href='http://codepen.io/flyingfisch'>@flyingfisch</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

This allows us to show popups without JS as well, like so:

~~~markup
<span class="popup" data-popuptext="This is a CSS-only popup!">Hover!</span>
~~~

~~~css
span.popup:hover:after {
    content: attr(data-popuptext);
}
~~~

And of course a live demo with the full source:

<p data-height="268" data-theme-id="6851" data-slug-hash="oXbBXz" data-default-tab="result" data-user="flyingfisch" class='codepen'>See the Pen <a href='http://codepen.io/flyingfisch/pen/oXbBXz/'>Pure CSS hover popup</a> by flyingfisch (<a href='http://codepen.io/flyingfisch'>@flyingfisch</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

That's all I've got, have fun messing around with `content`!

