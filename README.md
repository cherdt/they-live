THEY LIVE
=========
Steganographic Decryption, of sorts
-----------------------------------

A Chrome browser extension that decrypts images on 
a web page that are encrypted in a very particular 
(and trivial) way. All images are processed as if 
they are encrypted, except as restricted by the
browser (see Known Issues).

This project is just-for-fun, mostly to look deeper
into image manipulation using Javascript and the 
HTML5 canvas element.

Install
-------

* [Download the extension](http://osric.com/chris/steganography/theylive.crx)
** Verify the current MD5 checksum: 071f9b5e5c17e5faf4220ecc19eedb1a
* Open the Chrome extensions page: chrome://extensions/
* Drag the extension file (theylive.crx) into the Chrome extensions page

(Chrome will warn you that the extension can "Read and change all your data on the websites you visit". That's true, and is understandably terrifying.)

Use
---
Once installed, click the "THEY LIVE" button in Chrome 
to decrypt images on the current tab (web page).

Demo Page
---------
[http://osric.com/chris/business-cat.html](http://osric.com/chris/business-cat.html)

Known Issues
------------
Due to browser security restrictions, this plugin will 
operate only on images loaded from the same site as the 
web page in which they are embedded.

Thanks
------
Thanks to Ben Mullins's "Burning Man Enhancer" Chrome extension
for getting this started.