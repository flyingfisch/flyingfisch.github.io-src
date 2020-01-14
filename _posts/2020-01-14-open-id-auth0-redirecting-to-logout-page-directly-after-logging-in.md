---
author: Mark Fischer, Jr.
date: 2020-01-14 07:16:36 -1100
layout: post
title: OWIN Open ID handler redirecting to logout page immediately after logging in
categories:
- programming
description: ''

---
Over the past couple days I have been converting the authentication and authorization method on an existing MVC website to use Auth0, an Open ID provider. During the process of converting the website I ran into an issue where no matter what, after logging in the website would redirect to the logout page. After much trial and error I finally pinpointed the issue.

In my project's `web.config` I had the following code:

```xml
<authentication mode="Forms">
	<forms loginUrl="~/Auth/Logout" timeout="2880" />
</authentication>
```

I changed this to `mode="None"` and the login page now works seamlessly.

```xml
<authentication mode="None"></authentication>
```