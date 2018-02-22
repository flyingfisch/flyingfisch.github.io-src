---
title: Getting neosnippet to work with deoplete
date: 2016-08-07 00:00:00 +0000
categories:
- vim
layout: post
---

It took me a bit of searching, but I finally figured out how to get neosnippet to work with deoplete. The issue is that the deoplete auto-complete trigger is `<Tab>`, which is also the neosnippet expansion trigger. So we want to change the neosnippet trigger to something else, like `<C-k>`. Here are the lines to add to your `init.vim` file:

~~~vim
let g:deoplete#enable_at_startup = 1

imap <C-k>     <Plug>(neosnippet_expand_or_jump)
smap <C-k>     <Plug>(neosnippet_expand_or_jump)
xmap <C-k>     <Plug>(neosnippet_expand_target)
~~~

