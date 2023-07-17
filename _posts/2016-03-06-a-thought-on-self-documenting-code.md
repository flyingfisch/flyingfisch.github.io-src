---
title: A thought on Self Documenting Code
date: 2016-03-06T00:00:00.000Z
categories:
  - programming
layout: post
published: true
---

At risk of sounding like I don't know what I am talking about, I'm writing this post to document something that most programmers have probably known for a long time, even though I only just discovered it.

Often when programming we may write something like this:

```javascript
// Checks if user is authorized to use shoot()
if (user.type == 'soldier' || (user.type == 'police' && situation.location == 'USA')) {
  shoot();
}
```

The problem with this is that the comment could become out of date when the code is refactored. My thought is that code like this can be refactored to use a variable instead of a comment to document it. For instance:

```javascript
var isAuthorizedToShoot = user.type == 'soldier' || (user.type == 'police' && situation.location == 'USA')

if (isAuthorizedToShoot) {
  shoot();
}
```

One problem I can see with it is that the variable name might not be updated, just like the comment. My thought is that there would be more incentive to update the variable name since it is actually part of the code, but let me know what you think.
