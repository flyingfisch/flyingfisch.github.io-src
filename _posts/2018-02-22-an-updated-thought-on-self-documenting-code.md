---
author: Mark Fischer, Jr.
title: An updated thought on self documenting code
date: 2018-02-22 00:00:00 +0000
layout: post
categories:
- programming
published: false
---
Almost two years ago I wrote [a post]({% post_url 2016-03-06-a-thought-on-self-documenting-code %}) where I proposed a (probably obvious) technique for writing self-documenting code. In those two years I've learned more techniques for writing self-documenting code, and I've also seen results of not putting focus on code legibility. I thought I'd write a follow-up post describing them.

# Name your return variables

When writing a method that returns a value, please don't name the placeholder variable "ret", "return", "value", etc. Instead give it a meaningful name describing what it is.

```csharp
// don't do this
public List<string> GetFruit()
{
    var ret = new List<string>();
    
    ret.Add("apple");
    ret.Add("pear");
    ret.Add("banana");
    
    return ret;
}

// instead, do this
public List<string> GetFruit()
{
    var fruit = new List<string>();
    
    fruit.Add("apple");
    fruit.Add("pear");
    fruit.Add("banana");
    
    return fruit;
}
```

# Don't give singular classes and variables plural names

I feel like this goes without saying but it occurs so often I suppose it bears mentioning.

```csharp
// don't do this
class Apples
{
    public string Name { get; set; }
}

var apple = new List<Apples>();
```

I guess the bottom line with all this is: think for a second before you name things.


