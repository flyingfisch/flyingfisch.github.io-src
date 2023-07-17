---
title: Getting started with the HTML5 notification API
date: 2016-08-19T00:00:00.000Z
categories:
  - javascript
layout: post
published: true
---

I used the HTML5 notification API for the first time today, it's actually much more simple than I expected. There are two functions you need to know about:

```javascript
// to ask for permission
Notification.requestPermission(callback);

// to display a notification
new Notification(message);
```

Before you actually display the notification, you need to ask for permission, like so:

```javascript
Notification.requestPermission();
```

We want to display the notification after giving permission, so we just stick that in a callback:

```javascript
Notification.requestPermission(function () {
   if (Notification.permission === 'granted') {
      new Notification('test');
   }
});
```

And you're done! If you want to check that the browser supports the Notification API, you can use the following test:

```javascript
function browserSupportsNotifications() {
   return "Notification" in window;
}
```
