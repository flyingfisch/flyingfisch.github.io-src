---
title: A Redis escaping story
date: 2015-10-31 00:00:00 Z
categories:
- bug
layout: post
---

I ran into this bug at work, and since I couldn't find the documentation anywhere decided to post it here for posterity. For background, we were originally stripping the domain off usernames for intranet apps, but we stopped doing that since other companies are using our software now. For example, before the change we would send `username`, whereas we now send `DOMAIN\username`. And that's where my story starts.

We made this change on Thursday, and after testing a while I ran into a strange bug. The app was saying that it was locked by `DOMAINmarkf`. For reference, this is what the locking code looked like:

~~~c#
public RedisHandler {
    public string Lock(string username) {
        
    }
}
~~~

