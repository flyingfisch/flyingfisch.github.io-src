---
layout: post
title: "Building a Modern Website: Part 0"
date: 2015-05-25
categories: frontend design tutorial modern-website-series
---

This is the first of a 3-post series on building a modern website. The demo website is a fictional sailing club's homepage. This post covers the mockup process and building the header. The next part will go into the navigation bar and body text.

# Layout

The first thing I do when building a website is come up with a layout. For this site I thought we would keep the layout fairly minimal. I don't generally build wireframes, preferring building in the browser instead, but I whipped one up in this case to let you see what kind of layout I am envisioning.

<figure>
<img src="/assets/nautical-wireframe.svg" alt="Wireframe for desktop layout">
<figcaption>Wireframe for desktop layout.</figcaption>
</figure>

Since this is going to be responsive, we need to have a mobile layout as well.

<figure>
<img src="/assets/nautical-wireframe-mobile.svg" alt="Wireframe for mobile layout">
<figcaption>Wireframe for mobile layout.</figcaption>
</figure>


# Colors

The colors for this site are going to be blue and white. I got the exact shades straight from the [Tango project's color palette](http://tango.freedesktop.org/Tango_Icon_Theme_Guidelines#Color_Palette).

<figure>
<img src="/assets/nautical-palette.svg" alt="Palette colors: #ffffff, #eeeeec, #3465a4, #204a87">
<figcaption>Colors: #ffffff, #eeeeec, #3465a4, #204a87</figcaption>
</figure>

# Fonts

The first thing I like to do before actually designing the site is find a font to use. For this project I just ran over to [Google Fonts](https://www.google.com/fonts/) and chose Montserrat for the headers and Alegreya for the copy. As a rule of thumb it is usually good to choose a serif font for your body text if the headers are sans-serif, and vice versa.

Here is the `link` tag for the fonts, we're just going to add it into the header. Although there are other methods of using Google Fonts, the `link` tag has the best browser support.

~~~markup
<link href="http://fonts.googleapis.com/css?family=Montserrat:400,700|Alegreya:400,400italic,700,700italic" rel="stylesheet" type="text/css">
~~~

We will also be using [Normalize.css](https://necolas.github.io/normalize.css/) which basically gives you a starting point that looks the same across all browsers. Since we want to override it's styles with ours we put it's link tag first. Our `head` tag should look something like this now:

~~~markup
<head>
    <title>R. S. Sailing Club</title>

    <link href="http://fonts.googleapis.com/css?family=Montserrat:400,700|Alegreya:400,400italic,700,700italic" rel="stylesheet" type="text/css">
    <link href="/css/normalize.css" rel="stylesheet" type="text/css">
    <link href="/css/style.css" rel="stylesheet" type="text/css">
</head>
~~~

We're going to be using [SASS](http://sass-lang.com/) for the stylesheets, but don't worry, I'll explain any nuances we come across in the project. For now, just think of it as CSS with extra features. Here is our stylesheet so far:

~~~scss
html, body {
    width: 100%;
    height: 100%;
}

body * {
    box-sizing: border-box;
}

body {
    font-family: 'Alegreya', serif;
    font-size: 16px;
}

h1, h2, h3, h4, h5, h6 {
    font-family: 'Montserrat', sans-serif;
}
~~~

# Designing the header

Now that the fonts have been selected, we can start on the header. The markup for now is pretty simple.

~~~markup
<header>
    <h1>R. S. Sailing Club</h1>
</header>
~~~

Now let's get into the CSS. We want the background of the header to be dark blue, and the font should be white. Here is the site so far:

<p data-height="268" data-theme-id="6851" data-slug-hash="eNdaoe" data-default-tab="result" data-user="flyingfisch" class='codepen'>See the Pen <a href='http://codepen.io/flyingfisch/pen/eNdaoe/'>eNdaoe</a> by flyingfisch (<a href='http://codepen.io/flyingfisch'>@flyingfisch</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

# SASS 101

This is probably a good time to go over a couple important SASS features: variables and nested selectors.

## Variables

Variables names start with a `$`, and can contain any information you can put in a property. For example:

~~~scss
$my-border: 2px solid black;

div {
    border: $my-border;
}
~~~

That compiles to this CSS:

~~~css
div {
    border: 2px solid black;
}
~~~

# Nested Selectors

If you want to select an element inside another element, you can nest the selectors. Here is an example:

~~~scss
header {
    h1 {
        color: #fff;
    }
}
~~~

This compiles to:

~~~css
header h1 {
    color: #fff;
}
~~~

You can also use the `&` to select the parent element, like this:

~~~scss
a {
    color #000;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
}
~~~

Which compiles into this CSS:

~~~css
a {
    color: #000;
    text-decoration: none;
}
a:hover {
    text-decoration: underline;
}
~~~



