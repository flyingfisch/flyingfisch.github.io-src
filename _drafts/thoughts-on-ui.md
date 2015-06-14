---
layout: post
title: "Thoughts on UI"
date: 2015-05-04
categories: programming frontend
---

> This post needs a lot of help. May not finish it.

I was building an ASP.NET MVC web app recently and thought I would document some
of different schemes I came up with. These are pretty high-level, so they should
relate to most if not all web backend languages. I will be using C# for the
examples, however.

# Concerns

Some of the concerns that each of these solutions addresses are:

1. Clean URLs. No more
    `/blog?startdate=01-20-2014&startdate=01-22-2015&adnauseam`.
2. Separation of concerns. We shouldn't be doing any business logic in our
    views, and there shouldn't be any knowledge outside of our models.
3. DRY (Don't Repeat Yourself)

# RESTful CRUD

CRUD stands for the 4 basic data commands: Create, Read, Update, and Delete.
When implemented on the web the HTTP verbs `POST`, `GET`, `PATCH`, and `DELETE`
are usually used to determine the operation. REST is a [URL naming scheme][1]
intended to make URLs more self-explanatory. Here is an example of a controller
using this architecture:

~~~csharp
public class User : Controller
{
    // Ex: /User/3
    [HttpGet]
    public ActionResult Index(int id)
    {
        // show user by id
    }

    // Ex: /User/
    [HttpPost]
    public ActionResult Index(User user)
    {
        // create new user
    }

    // Ex: /User/3
    [HttpPatch]
    public ActionResult Index(int id)
    {
        // update user
    }

    // Ex: /User/3
    [HttpDelete]
    public ActionResult Index(int id)
    {
        // Delete user by id
    }
}
~~~

The pros are that this is easy to read, and works for many applications,
especially APIs. However, sometimes you do not want a separate page for each
CRUD operation. This is especially true when you have a dashboard which may have
delete, modify, and add buttons all on the same page.

# AJAX to the rescue!

We can use AJAX to keep our RESTful URL structure while also being able to use
multiple commands in one view. We can do this by making our dashboard html look
something like this:

~~~markup
<div class="UserProfile"></div>
~~~

And some jQuery to bring it all together:

~~~javascript
$(document).ready(function () {
    $.get('/user/' + userId, function (data) {
        // embed /user/userId in .UserProfile
        $('.UserProfile').html(data);
    });
});
~~~

You could then do AJAX calls for all the rest of your commands as well. This
fixes the lack of flexibility in a pure server-side REST API, but it also brings
it's own drawbacks. For one thing, parts of the page simply will not load if the
user has Javascript turned off or if the Javascript simply takes too long to
load.

Which brings us to the next solution.

# AJAX to the rescue -- Take 2

The previous solution works, but to maintain a separation of concerns, you
probably don't want your API spitting out HTML. To prevent this you can have
your AJAX calls act a little smarter. To begin with, we have to change both the
client and the server side slightly.

~~~csharp
public class User : Controller
{
    // Ex: /User/3
    [HttpGet]
    public ActionResult Index(int id)
    {
        // show user by id
    }

    // Ex: /User/
    [HttpPost]
    public ActionResult Index()
    {
        var tSuccess = false;

        AddUser

        if (successful)
        {
            tSuccess = true;
        }
        else
        {
            tSuccess = false;
        }

        return Json(new { success = tSuccess });
    }

    // Ex: /User/3
    [HttpPatch]
    public ActionResult Index(int id)
    {
        // show form to update user
    }

    // Ex: /User/3
    [HttpDelete]
    public ActionResult Index(int id)
    {
        // Delete user by id
    }
}
~~~
  [1]:http://tools.ietf.org/html/draft-gregorio-uritemplate-05
