---
author: 'Mark Fischer, Jr.'
date: '2020-01-14 07:16:36 -1100'
layout: post
title: MVC website redirecting to logout page immediately after logging in
categories:
  - programming
description: >-
  Over the past couple days I have been converting the authentication and
  authorization method on an existing MVC website to use Auth0, an OpenID
  provider. During the process of converting the website's login and logout
  routines I ran into an issue where no matter what the website would redirect
  to the logout page immediately after hitting the login route. After much trial
  and error I finally pinpointed the problem.
_template: default
---






Over the past couple days I have been converting the authentication and authorization method on an existing MVC website to use [Auth0](https://auth0.com/), an [OpenID](https://openid.net/) provider. During the process of converting the website's login and logout routines I ran into an issue where no matter what the website would redirect to the logout page immediately after hitting the login route. After much trial and error I finally pinpointed the problem.

In my project's `web.config` I had the following code:

```xml
<authentication mode="Forms">
	<forms loginUrl="~/Auth/Logout" timeout="2880" />
</authentication>
```

I changed this to `mode="None"` and the login page now works flawlessly.

```xml
<authentication mode="None"></authentication>
```
