---
layout: post
title: "Using REST Inside Programs"
date: 2015-05-17
categories: programming web
---

Rich Hickey proposed an interesting idea in his [keynote at RailsConf 2012][1].
The idea, if I understand correctly, is that if serialization is good between
servers as a way to separate concerns, then why don't we do it between different
sections of code on the same server?

Using REST between different code blocks seems like a good idea, but serialization seems a bit useless
in my humble opinion, since it only seems to add complexity to the program.

I decided to write a little [proof-of-concept][2] for this program in Python.
There is a module `rest.py` which currently contains one class: `CRUD`. `CRUD`
has four built-in functions: `create()`, `read()`, `update()`, and `delete()`.

Here is the documentation for each of the built-in functions:

~~~python
create(object)
"""
Creates a new object.

Keyword arguments:
object -- Object or list of objects to create
"""

read()
"""Returns a list of created objects."""

update(objectId, object)
"""
Updates object.

Keyword arguments:
objectId -- Key of object to update
object -- Object to update with
"""

delete(objectId)
"""
Deletes object from list.

Keyword arguments:
objectId -- Key of object to delete
"""
~~~

The built-in commands operate on an internal list `_objects`, accessible through
`read()`. Here is a simple example using the default methods.

~~~python
from rest import CRUD

# A dictionary entry class
class DictEntry:
    Word = ""
    Definition = ""

    def __init__(self, word, definition):
        self.Word = word
        self.Definition = definition

    def __repr__(self):
        return "(Word: {0}, Definition: {1})".format(self.Word, self.Definition)

# Make a CRUD instance
Dictionary = CRUD()

# Add a word to our dictionary
Dictionary.create(DictEntry("Programmer", "A being that converts pizza and Coke into crde"))

# Update the word
Dictionary.Update(0, DictEntry("Programmer", "A being that converts pizza and Coke into code")

# Print the dictionary out to the terminal
print(Dictionary.read())

# Delete the word
Dictionary.Delete(0)

# Print the (empty) dictionary out to the terminal
print(Dictionary.read())
~~~

Not sure how useful this is going to be, but it was fun to code up!

  [1]:https://www.youtube.com/watch?v=rI8tNMsozo0
  [2]:https://github.com/flyingfisch/python-rest-poc/commits?author=flyingfisch
