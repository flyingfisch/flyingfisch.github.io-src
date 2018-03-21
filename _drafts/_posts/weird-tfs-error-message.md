---
author: Mark Fischer, Jr.
title: Weird TFS Error Message
date: 2018-03-21 00:00:00 +0000
layout: post
categories: []
---
Ran into a fun little bug with the Visual Studio Team Explorer widget today. I clicked "check in" as usual, and was met with this error: "Value was either too large or too small for a UINT32". Turns out what that error actually means is that one of the files you are attempting to check in is unsaved. `File > Save All` and clicking "check in" again fixes this.