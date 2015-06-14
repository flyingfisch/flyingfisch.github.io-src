---
layout: post
title: "Announcing Tolkien Ipsum"
date: 2015-05-28
categories: announcement
---

I built a little website that generates Lord of the Rings themed Lorem Ipsum. You can [check it out live](http://tolkienipsum.cloudapp.net/) or view the source on [GitHub](https://github.com/flyingfisch/tolkienIpsum).

# For Geeks

I am hosting the site on a [Microsoft Azure](http://azure.microsoft.com/) Ubuntu 14.04 virtual machine. The setup process for serving Django was pretty straightforward, I just adapted the excellent [Digital Ocean tutorial](https://www.digitalocean.com/community/tutorials/how-to-serve-django-applications-with-uwsgi-and-nginx-on-ubuntu-14-04) to my needs. The project does use python3, so if you are planning on hosting it yourself you'll want to keep that in mind.
