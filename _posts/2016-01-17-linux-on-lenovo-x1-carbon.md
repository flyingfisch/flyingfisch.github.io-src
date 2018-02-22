---
title: Setting up Linux on a Lenovo X1 Carbon
date: 2016-01-17 00:00:00 Z
categories:
- linux
layout: post
---

I bought a Lenovo X1 Carbon (3rd Generation) to replace my old low-end Toshiba Satellite as my primary development laptop. Overall, I am extremely pleased with the laptop's build quality and performance. I found the keyboard particularly nice, especially for a chicklet keyboard.

# Disassembly

The X1 version I purchased was came with the i5 processor, WQHD touchscreen, 8GB of RAM, and a 256GB SSD, which I replaced with a Crucial 500GB SSD. Disassembly was very straightforward, there are 7 screws on the bottom which you remove, and the bottom cover comes right off. When reassembling, the bottom cover may not rest flush with the bottom of the laptop before you tighten the screws. Just go ahead and tighten the screws, if you try to press the cover down to make it flush you will only cause issues when trying to tighten the screws. I am documenting this here since none of the tutorials I saw mentioned it.

# Installing Linux

The Linux distro I chose to install was Ubuntu GNOME, even though I planned on installing Cinnamon. I did this because Mint wouldn't fit on my 1GB USB drive (vanilla Ubuntu wouldn't either). I did get a chance to test GNOME 3 with the touch screen though, and the support was very nice, even nicer than Cinnamon's. I decided to go ahead with installing Cinnamon anyway though, since I didn't plan on using the touchscreen very much.

Driver support is excellent, though I never did get the fingerprint reader working 100%. I know the drivers are installed since it now flashes green when I do a sudo command or go to the login screen, but it does nothing when I swipe my finger.

# Installing the desktop environment

Installing Cinnamon was pretty easy, these three commands did the trick for me:

~~~
$ sudo add-apt-repository ppa:tsvetko.tsvetkov/cinnamon
$ sudo apt-get update
$ sudo apt-get install cinnamon
~~~

Although Cinnamon comes with a scaling mode, you can only switch between 1x and 2x GUI scaling. My screen's DPI isn't quite high enough for 2x, though it is high enough that at 1x the fonts were too small to read easily. I was able to solve this by changing the font scale to 1.2. The default height for the Cinnamon panel seemed small as well, so I made it taller.

<figure>
<img src="/assets/x1screenshot1.jpg" alt="Screenshot showing Cinnamon with the numix theme">
<figcaption>Cinnamon with Numix</figcaption>
</figure>

# Misc

* Battery life on Windows was about 8 hours, and on Linux it was about 5 hours. I was able to increase it to 8 by installing TLP using the [installation instructions on their site](http://linrunner.de/en/tlp/docs/tlp-linux-advanced-power-management.html#installation).
* I found [this guide](https://www.digitalocean.com/community/tutorials/how-to-install-linux-apache-mysql-php-lamp-stack-on-ubuntu) helpful for installing the LAMP stack.

